import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT } from './src/config/index.js';
import authRoutes from './src/routes/auth.routes.js';
import productRoutes from './src/routes/product.routes.js';
import { notFound, errorHandler } from './src/middlewares/error.middleware.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
