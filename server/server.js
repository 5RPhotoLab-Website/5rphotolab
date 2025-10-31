import express from 'express';
import './config/dotenv.js'
import cors from 'cors';
import { requireAuth } from './middleware/authMiddleware.js'
import itemsRouter from './routes/itemsRoutes.js';
import authRouter from './routes/authRoutes.js';
import ordersRouter from './routes/ordersRoutes.js';
import paymentsRouter from './routes/paymentsRoutes.js';
import cartsRouter from './routes/cartRoutes.js';
import checkoutRouter from './routes/checkoutRoutes.js';
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173", "https://www.5rphotolab.com"], // your frontend URL
  credentials: true
}));


app.get('/', (req, res) => {
  res.send('Backend API is running');
});

app.use('/api/items', itemsRouter);
app.use('/api/auth', authRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/cart', cartsRouter);
app.use('/api/checkout', checkoutRouter);

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
