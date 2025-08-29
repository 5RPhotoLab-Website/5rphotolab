import express from 'express'
import ItemsController from '../controllers/itemsCRUD.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const itemsRouter = express.Router();

itemsRouter.get('/', ItemsController.getItems);
itemsRouter.get('/:itemId', ItemsController.getItemById);

export default itemsRouter;