import resturantModel from '../models/resturantModel.js'

const createresturantController = async (req, res) => {

    try {
        //Get Data from resturntModel
        // const  resturrantData = req.body;  // dairect methd

        const {
            title,
            imageUrl,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            rating,
            ratingCount,
            code,
            coords,
        } = req.body;

        // Validation 
        if (!title || !coords) {
            return res.status(500).send({
              success: false,
              message: "please provide title and address in resturant Data",
            });
          }

          const newResturnt = new resturantModel({
            title,
            imageUrl,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            rating,
            ratingCount,
            code,
            coords,
          })

          await newResturnt.save()

          res.status(201).send({
            success:true,
            message:"New Resturant Create Successfully"
          })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error in Create Resturnat Api'
        })
    }
}
export { createresturantController }