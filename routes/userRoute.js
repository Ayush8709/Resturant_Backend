import express from 'express'
import {getUserController} from '../controllers/userControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = express()


router.get('/getuser', authMiddleware, getUserController)
 
export default router;