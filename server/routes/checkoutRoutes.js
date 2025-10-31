// server/routes/checkoutRoutes.js
import express from "express";
import { requireAuth } from "../middleware/authMiddleware.js";
import { checkout } from "../controllers/checkoutCRUD.js";

const checkoutRouter = express.Router();

checkoutRouter.use(requireAuth);

checkoutRouter.post("/", checkout);

export default checkoutRouter;
