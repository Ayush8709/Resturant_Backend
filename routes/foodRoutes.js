import express from 'express'

import authMiddleware from '../middlewares/authMiddleware.js';
import { createFoodController } from '../controllers/foodController.js';
const router = express()

//Routes

// Create Food
router.post('/create', authMiddleware, createFoodController )



export default router;