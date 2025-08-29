import express from 'express';
import './config/dotenv.js'
import cors from 'cors';
import { requireAuth } from './middleware/authMiddleware.js'
import itemsRouter from './routes/itemsRoutes.js';
import authRouter from './routes/authRoutes.js';
import ordersRouter from './routes/ordersRoutes.js';
import paymentsRouter from './routes/paymentsRoutes.js';

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // your frontend URL
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Backend API is running');
});

app.use('/api/items', itemsRouter);
app.use('/auth', authRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/payments', paymentsRouter);

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Example protected route
app.get('/protected', requireAuth, (req, res) => {
  res.json({ message: `Welcome, ${req.user.email}` })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
