import express from 'express'
import {getUserController,updateUserController} from '../controllers/userControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = express()

// getUser Data
router.get('/getuser', authMiddleware, getUserController)

//updata User data
router.put('/updateuser', authMiddleware,updateUserController )
 
export default router;