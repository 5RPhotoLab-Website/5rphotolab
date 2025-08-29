import { verifyToken } from '../config/auth.js'

export const requireAuth = (req, res, next) => {
  const header = req.headers['authorization']
  if (!header) return res.status(401).json({ error: 'No token' })

  const token = header.split(' ')[1]
  try {
    const user = verifyToken(token)
    req.user = user
    next()
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' })
  }
}
