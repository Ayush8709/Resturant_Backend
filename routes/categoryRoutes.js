import express from 'express'

import authMiddleware from '../middlewares/authMiddleware.js';
import { createCategoryController } from '../controllers/categoryControllers.js';
const router = express()

//Routes

//Create Category
router.post('/create',authMiddleware,createCategoryController )


export default router;