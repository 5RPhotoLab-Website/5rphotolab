import express from 'express';
import { createPayment } from '../controllers/paymentsCRUD.js';

const paymentsRouter = express.Router();

paymentsRouter.post('/', createPayment);

export default paymentsRouter;
