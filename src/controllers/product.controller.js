import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from '../services/product.service.js';

export const listProducts = async (req, res, next) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const createProductHandler = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;
    const newProduct = await createProduct({ name, description, price });
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProductHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await deleteProduct(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    next(error);
  }
};
