import express from 'express'

import authMiddleware from '../middlewares/authMiddleware.js';
import { createCategoryController, getAllCategoryController, updateCatController, deleteCategoryController } from '../controllers/categoryControllers.js';
const router = express()

//Routes

//Create Category
router.post('/create',authMiddleware,createCategoryController )

//Get All Category
router.get('/getall', getAllCategoryController)

//Updata Category
router.put('/update/:id', authMiddleware , updateCatController)

//Delete Route

router.delete('/delete/:id', authMiddleware, deleteCategoryController)


export default router;