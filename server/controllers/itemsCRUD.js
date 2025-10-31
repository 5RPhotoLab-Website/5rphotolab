import { pool } from "../config/database.js";

const getItems = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM items ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getItemById = async (req, res) => {
    try {
        const selectQuery = `
        SELECT name, price, image, description, category
        FROM items
        WHERE id=$1
      `
        const itemId = req.params.itemId
        const results = await pool.query(selectQuery, [itemId])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default { getItems, getItemById }