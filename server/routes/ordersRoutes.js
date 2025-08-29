import express from 'express'
import OrdersController from '../controllers/ordersCRUD.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const ordersRouter = express.Router();

ordersRouter.use(requireAuth); // all routes require authentication

ordersRouter.post('/', OrdersController.createOrder);
ordersRouter.get('/', OrdersController.getUserOrders);
ordersRouter.get('/:orderId', OrdersController.getOrderById);
ordersRouter.delete('/:orderId', OrdersController.deleteOrder);


export default ordersRouter;