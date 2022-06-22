import express from 'express';
import productController from '../app/controllers/ProductController.js'

const router = express.Router();

router.use('/', productController.index)

export default router;