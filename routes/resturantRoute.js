import express from 'express'
import { createresturantController } from '../controllers/resturantController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = express()

//Routes

//Create REsturant  
router.post('/create', createresturantController)


export default router;