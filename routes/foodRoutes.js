import express from 'express'

import authMiddleware from '../middlewares/authMiddleware.js';
import { createFoodController, getAllFoodControlelr, getSingleFoodController , getFoodByResturantController , updateFoodController ,deleteFoodController} from '../controllers/foodController.js';
const router = express()

//Routes

// Create Food
router.post('/create', authMiddleware, createFoodController )

//GET all Food
router.get('/getall', getAllFoodControlelr )

//Get Single Food with Id
router.get('/get/:id', getSingleFoodController)

//Get Food by Resturant
router.get('/getresturant/:id', getFoodByResturantController)

//update Food
router.put('/update/:id', authMiddleware, updateFoodController)

//Delete Food
router.delete("/delete/:id", authMiddleware, deleteFoodController )


export default router;