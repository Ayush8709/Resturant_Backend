import express from 'express'
import { createresturantController,getAllResturantController, getResturantById } from '../controllers/resturantController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = express()

//Routes

//Create REsturant  
router.post('/create', createresturantController)


//Get All Rresturant
router.get('/getall', getAllResturantController)

// Get Resturant by ID
router.get('/get/:id', getResturantById)


export default router;