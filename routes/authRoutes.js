import express from 'express'
const router = express.Router()
import authController from '../controllers/authControllers.js';

//Routes

router.post('/register',authController )


export default router;