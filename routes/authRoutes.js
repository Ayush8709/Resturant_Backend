import express from 'express'
const router = express.Router()
import {authController , loginController} from '../controllers/authControllers.js';

//Routes
router.post('/register',authController )

//Login
router.post('/login' , loginController)


export default router;