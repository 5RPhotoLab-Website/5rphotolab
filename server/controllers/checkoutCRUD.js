// server/controllers/checkoutCRUD.js
import { pool } from "../config/database.js";
import axios from "axios";
import crypto from "crypto";
import dotenv from "dotenv";
import { squareEnv } from "../config/squareEnv.js";
dotenv.config();

/**
 * Handles full checkout flow:
 *  1. Validate user & cart
 *  2. Calculate total on backend
 *  3. Create order + order_items
 *  4. Process payment with Square
 *  5. Update order, clear cart
 */
export const checkout = async (req, res) => {
  const userId = req.user?.id;
  const { nonce } = req.body;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (!nonce) {
    return res.status(400).json({ error: "Missing payment nonce" });
  }

  const client = await pool.connect();

  try {
    console.log("🧭 Square env:", squareEnv);
console.log("🔹 Received nonce:", nonce);

    // 1️⃣  Validate cart ownership and fetch items
    const cartResult = await client.query(
      `SELECT * FROM carts WHERE user_id = $1 LIMIT 1`,
      [userId]
    );

    if (cartResult.rows.length === 0) {
      return res.status(400).json({ error: "Cart not found or empty" });
    }

    const cart = cartResult.rows[0];

    const itemsResult = await client.query(
      `SELECT ci.item_id,
              ci.quantity,
              ci.unit_price::numeric AS unit_price,
              i.name
       FROM cart_items ci
       JOIN items i ON ci.item_id = i.id
       WHERE ci.cart_id = $1`,
      [cart.id]
    );

    if (itemsResult.rows.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const items = itemsResult.rows;

    // Validate items
    for (const item of items) {
      if (item.quantity <= 0 || item.unit_price <= 0) {
        return res.status(400).json({ error: "Invalid cart item detected" });
      }
    }

    // 2️⃣  Calculate total (convert to cents)
    const totalAmountCents = Math.round(
      items.reduce(
        (sum, item) => sum + Number(item.unit_price) * item.quantity,
        0
      ) * 100
    );

    if (totalAmountCents <= 0) {
      return res.status(400).json({ error: "Invalid total amount" });
    }

    // 3️⃣  Start SQL transaction
    await client.query("BEGIN");

    // 4️⃣  Create order
    const orderResult = await client.query(
      `INSERT INTO orders (user_id, total_amount, status)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [userId, totalAmountCents / 100, "PENDING"]
    );
    const order = orderResult.rows[0];

    // 5️⃣  Insert order_items
    for (const item of items) {
      await client.query(
        `INSERT INTO order_items (order_id, item_id, quantity, unit_price)
         VALUES ($1, $2, $3, $4)`,
        [order.id, item.item_id, item.quantity, item.unit_price]
      );
    }

    // 6️⃣  Charge payment via Square
    const idempotencyKey = crypto.randomUUID();
    const paymentResponse = await axios.post(
      `${squareEnv.baseUrl}/payments`,
      {
        source_id: nonce,
        idempotency_key: idempotencyKey,
        amount_money: {
          amount: totalAmountCents,
          currency: "USD",
        },
        location_id: squareEnv.locationId,
      },
      {
        headers: {
          Authorization: `Bearer ${squareEnv.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const payment = paymentResponse.data.payment;

    // 7️⃣  Update order with payment info
    await client.query(
      `UPDATE orders 
       SET status = $1,
           payment_id = $2,
           payment_status = $3,
           payment_receipt_url = $4
       WHERE id = $5`,
      ["PAID", payment.id, payment.status, payment.receipt_url, order.id]
    );

    // 8️⃣  Clear the cart (items only)
    await client.query(`DELETE FROM cart_items WHERE cart_id = $1`, [cart.id]);

    // ✅ Commit transaction
    await client.query("COMMIT");

    res.status(200).json({
      message: "Checkout successful",
      order: {
        id: order.id,
        total: order.total_amount,
        status: "PAID",
      },
      payment: {
        id: payment.id,
        status: payment.status,
        receipt_url: payment.receipt_url,
      },
    });
  } catch (error) {
    // ❌ Rollback on failure
    await client.query("ROLLBACK");

    console.error("❌ Checkout error:", error);

    const message = error.response?.data?.errors?.[0]?.detail || error.message;

    res.status(500).json({
      error: "Checkout failed",
      details: message,
    });
  } finally {
    // Always release connection
    client.release();
  }
};
