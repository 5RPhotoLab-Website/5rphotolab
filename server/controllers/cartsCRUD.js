// server/controllers/cartsCRUD.js
import { pool } from "../config/database.js";

// Get or create a cart for the current user
const getOrCreateCart = async (userId) => {
  const cartResult = await pool.query(
    `SELECT * FROM carts WHERE user_id = $1 LIMIT 1`,
    [userId]
  );

  if (cartResult.rows.length > 0) {
    return cartResult.rows[0];
  }

  // Create new cart if none exists
  const newCartResult = await pool.query(
    `INSERT INTO carts (user_id) VALUES ($1) RETURNING *`,
    [userId]
  );
  return newCartResult.rows[0];
};

// Get cart + items
const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await getOrCreateCart(userId);

    const itemsResult = await pool.query(
      `SELECT ci.id AS cart_item_id, ci.item_id, ci.quantity, ci.unit_price,
              i.name, i.image
       FROM cart_items ci
       JOIN items i ON ci.item_id = i.id
       WHERE ci.cart_id = $1`,
      [cart.id]
    );

    res.status(200).json({ cart, items: itemsResult.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add an item to cart
const addItemToCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const { item_id, quantity, unit_price } = req.body;

    if (!item_id || !quantity || !unit_price) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const cart = await getOrCreateCart(userId);

    // Check if item already in cart -> update quantity instead
    const existingItem = await pool.query(
      `SELECT * FROM cart_items WHERE cart_id = $1 AND item_id = $2`,
      [cart.id, item_id]
    );

    if (existingItem.rows.length > 0) {
      const newQty = existingItem.rows[0].quantity + quantity;
      await pool.query(
        `UPDATE cart_items SET quantity = $1 WHERE id = $2`,
        [newQty, existingItem.rows[0].id]
      );
    } else {
      await pool.query(
        `INSERT INTO cart_items (cart_id, item_id, quantity, unit_price)
         VALUES ($1, $2, $3, $4)`,
        [cart.id, item_id, quantity, unit_price]
      );
    }

    res.status(201).json({ message: "Item added to cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update quantity of a cart item
const updateCartItem = async (req, res) => {
  try {
    const userId = req.user.id;
    const { cart_item_id, quantity } = req.body;

    if (!cart_item_id || quantity < 1) {
      return res.status(400).json({ error: "Invalid data" });
    }

    const cart = await getOrCreateCart(userId);

    // Verify item belongs to this cart
    const result = await pool.query(
      `SELECT * FROM cart_items WHERE id = $1 AND cart_id = $2`,
      [cart_item_id, cart.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    await pool.query(
      `UPDATE cart_items SET quantity = $1 WHERE id = $2`,
      [quantity, cart_item_id]
    );

    res.status(200).json({ message: "Cart item updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove item from cart
const removeItemFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { cart_item_id } = req.params;

    const cart = await getOrCreateCart(userId);

    await pool.query(
      `DELETE FROM cart_items WHERE id = $1 AND cart_id = $2`,
      [cart_item_id, cart.id]
    );

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Clear entire cart
const clearCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await getOrCreateCart(userId);

    await pool.query(`DELETE FROM cart_items WHERE cart_id = $1`, [cart.id]);

    res.status(200).json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { getCart, addItemToCart, updateCartItem, removeItemFromCart, clearCart };
