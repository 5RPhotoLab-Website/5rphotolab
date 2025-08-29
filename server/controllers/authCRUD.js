import { pool } from "../config/database.js";
import { hashPassword, comparePassword, generateToken, verifyToken } from '../config/auth.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const createUserSignUp = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ error: 'Missing fields' })

    try {
        const hashed = await hashPassword(password)
        const result = await pool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
            [email, hashed]
        )
        const token = generateToken(result.rows[0])
        res.json({ token, user: result.rows[0] })
    } catch (err) {
        res.status(500).json({ error: 'Email already in use or server error' })
    }
}

const createUserLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
        const user = result.rows[0]
        if (!user || !(await comparePassword(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }

        const token = generateToken(user)
        res.json({ token, user: { id: user.id, email: user.email } })
    } catch (err) {
        res.status(500).json({ error: 'Server error' })
    }
}

const getUser = async (req, res) => {
    res.json({
        user: {
            id: req.user.userId,
            email: req.user.email
        }
    });
}

export default { createUserSignUp, createUserLogin, getUser }