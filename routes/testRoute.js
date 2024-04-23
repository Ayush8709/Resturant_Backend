import express from 'express'
const router = express.Router()
import userController from '../controllers/testController.js';

//Routes

router.get('/testUser',userController )


export default router;