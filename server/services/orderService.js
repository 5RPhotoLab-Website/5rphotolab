import { pool } from "../config/database.js";

export const createOrderService = async (userId, items, totalAmount) => {
  const orderResult = await pool.query(
    `INSERT INTO orders (user_id, total_amount, status)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [userId, totalAmount, "PENDING"]
  );

  const order = orderResult.rows[0];

  for (const item of items) {
    await pool.query(
      `INSERT INTO order_items (order_id, item_id, quantity, unit_price)
       VALUES ($1, $2, $3, $4)`,
      [order.id, item.item_id, item.quantity, item.unit_price]
    );
  }

  return order;
};

export const updateOrderStatusService = async (orderId, status) => {
  await pool.query(`UPDATE orders SET status = $1 WHERE id = $2`, [
    status,
    orderId,
  ]);
};
