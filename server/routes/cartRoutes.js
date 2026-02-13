import express from "express";
import { requireAuth } from "../middleware/authMiddleware.js";
import cartsController from "../controllers/cartsCRUD.js";

const cartsRouter = express.Router();

cartsRouter.use(requireAuth); // all routes require authentication

cartsRouter.get("/", cartsController.getCart);
cartsRouter.post("/add", cartsController.addItemToCart);
cartsRouter.put("/update", cartsController.updateCartItem);
cartsRouter.delete("/remove/:cart_item_id", cartsController.removeItemFromCart);
cartsRouter.delete("/clear", cartsController.clearCart);

export default cartsRouter;
