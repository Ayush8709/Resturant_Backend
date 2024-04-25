//Create Food
import foodModal from '../models/foodModel.js'

const createFoodController = async (req, res)=>{
  try {
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      catgeory,
      code,
      isAvailabe,
      resturnat,
      rating,
    } = req.body;

    if (!title || !description || !price || !resturnat) {
      return res.status(500).send({
        success: false,
        message: "Please Provide all fields",
      });
    }
    const newFood = new foodModal({
      title,
      description,
      price,
      imageUrl,
      foodTags,
      catgeory,
      code,
      isAvailabe,
      resturnat,
      rating,
    });

    await newFood.save();
    res.status(201).send({
      success: true,
      message: "New Food Item Created",
      newFood,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in create food api",
      error,
    });
  }
};
    

// Get All Food Item

  const getAllFoodControlelr = async (req,res)=>{
    try {
      const foods = await foodModal.find({});
      if (!foods) {
        return res.status(404).send({
          success: false,
          message: "no food items was found",
        });
      }
      res.status(200).send({
        success: true,
        totalFoods: foods.length,
        foods,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erro In Get ALL Foods API",
        error,
      });
    }
  };

    // Get Single Food with Id
    const getSingleFoodController = async (req, res)=>{
      try {
        const foodId = req.params.id;
        if (!foodId) {
          return res.status(404).send({
            success: false,
            message: "please provide id",
          });
        }
        const food = await foodModal.findById(foodId);
        if (!food) {
          return res.status(404).send({
            success: false,
            message: "No Food Found with htis id",
          });
        }
        res.status(200).send({
          success: true,
          food,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error In get SIngle Food API",
          error,
        });
      }
    };

    // Get Food by REsturant
    const getFoodByResturantController = async (req, res) => {
      try {
        const resturantId = req.params.id;
        if (!resturantId) {
          return res.status(404).send({
            success: false,
            message: "please provide id",
          });
        }
        const food = await foodModal.find({ resturnat: resturantId });
        if (!food) {
          return res.status(404).send({
            success: false,
            message: "No Food Found with htis id",
          });
        }
        res.status(200).send({
          success: true,
          message: "food base on restuatrn",
          food,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error In get SIngle Food API",
          error,
        });
      }
    };

export {createFoodController , getAllFoodControlelr ,getSingleFoodController , getFoodByResturantController }