import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import {
  listProducts,
  getProduct,
  createProductHandler,
  deleteProductHandler,
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', listProducts);
router.get('/:id', getProduct);
router.post('/create', authMiddleware, createProductHandler);
router.delete('/:id', authMiddleware, deleteProductHandler);

export default router;
