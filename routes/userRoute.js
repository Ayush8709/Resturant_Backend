import express from 'express'
import {getUserController,updatePasswordController,updateUserController} from '../controllers/userControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = express()

// getUser Data
router.get('/getuser', authMiddleware, getUserController)

//updata User data expact password
router.put('/updateuser', authMiddleware,updateUserController )

//update password 
router.post('/updatepassword', authMiddleware, updatePasswordController)

//reset password
router.post('/resetpassword', authMiddleware )
 
export default router;