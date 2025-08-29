import { pool } from "../config/database.js";


const createOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const { items, totalAmount, status } = req.body;

        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: "At least one item is required" });
        }

        if (!totalAmount) {
            return res.status(400).json({ error: "totalAmount is required" });
        }

        // Start a transaction
        await pool.query("BEGIN");

        // Insert into orders table
        const orderResult = await pool.query(
            `INSERT INTO orders (user_id, total_amount, status)
       VALUES ($1, $2, $3)
       RETURNING *`,
            [userId, totalAmount, status || 'PENDING']
        );

        const order = orderResult.rows[0];

        // Insert each item into order_items
        for (const item of items) {
            const { item_id, quantity, unit_price } = item;
            if (!item_id || !quantity || !unit_price) {
                await pool.query("ROLLBACK");
                return res.status(400).json({ error: "Each item must include item_id, quantity, and unit_price" });
            }

            await pool.query(
                `INSERT INTO order_items (order_id, item_id, quantity, unit_price)
         VALUES ($1, $2, $3, $4)`,
                [order.id, item_id, quantity, unit_price]
            );
        }

        // Commit transaction
        await pool.query("COMMIT");

        res.status(201).json({ order });
    } catch (error) {
        // Rollback transaction on error
        await pool.query("ROLLBACK");
        res.status(500).json({ error: error.message });
    }
};


// const getUserOrders = async (req, res) => {
//     try {
//         // req.user comes from requireAuth middleware
//         const userId = req.user.userId;

//         const results = await pool.query(
//             'SELECT * FROM orders WHERE user_id = $1 ORDER BY id ASC',
//             [userId]
//         );

//         res.status(200).json(results.rows);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

const getUserOrders = async (req, res) => {
    try {
        const userId = req.user.id;

        // Get orders
        const ordersResult = await pool.query(
            "SELECT * FROM orders WHERE user_id = $1 ORDER BY id ASC",
            [userId]
        );

        const orders = ordersResult.rows;

        // Optionally, fetch order_items for each order
        for (const order of orders) {
            const itemsResult = await pool.query(
                `SELECT oi.*, i.name, i.image
                FROM order_items oi
                JOIN items i ON oi.item_id = i.id
                WHERE oi.order_id = $1`,
                [order.id]
            );
            order.items = itemsResult.rows;
        }

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getOrderById = async (req, res) => {
    try {
        const orderId = parseInt(req.params.orderId);
        const userId = req.user.id;

        const result = await pool.query(
            `SELECT * FROM orders WHERE id = $1 AND user_id = $2`,
            [orderId, userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const orderId = parseInt(req.params.orderId);
        const userId = req.user.id;

        // First, check if order exists and belongs to the user
        const checkResult = await pool.query(
            `SELECT * FROM orders WHERE id = $1 AND user_id = $2`,
            [orderId, userId]
        );

        if (checkResult.rows.length === 0) {
            return res.status(404).json({ error: "Order not found or access denied" });
        }

        // Delete order (order_items will be deleted automatically if ON DELETE CASCADE is set)
        await pool.query(`DELETE FROM orders WHERE id = $1`, [orderId]);

        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};





export default { getUserOrders, createOrder, getOrderById, deleteOrder };