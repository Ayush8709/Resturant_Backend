import userModel from "../models/userModel.js"
import bcrypt from 'bcryptjs'

const getUserController = async (req, res) => {
    try {
        const user = await userModel.findById({_id:req.body.id})
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:'User Not Found'
            })
        }

        // hide password OPTINOL
        //  user.password = undefined

        res.status(200).send({
            success:true,
            message:"User get Successfullly",
            user
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            messgage:"User Details not fetch"
        })
    }
}


//updata user

const updateUserController =async (req, res)=>{
    try {
        // find user
        const user = await userModel.findById({ _id: req.body.id });
        //validation
        if (!user) {
          return res.status(404).send({
            success: false,
            message: "user not found",
          });
        }
        //update
        const { userName, address, phone } = req.body;
        if (userName) user.userName = userName;
        if (address) user.address = address;
        if (phone) user.phone = phone;
        //save user
        await user.save();
        res.status(200).send({
          success: true,
          message: "USer Updated SUccessfully",
        });
      } catch (error) {
        console.log(erorr);
        res.status(500).send({
          success: false,
          message: "Error In Udpate Userr API",
          error,
        });
      }
}


//password  update 

const updatePasswordController = async (req, res)=>{
    try {
        //find user
        const user = await userModel.findById({ _id: req.body.id });
        //valdiation
        if (!user) {
          return res.status(404).send({
            success: false,
            message: "Usre Not Found",
          });
        }
        // get data from user
        const { oldPassword, newPassword } = req.body;
        if (!oldPassword || !newPassword) {
          return res.status(500).send({
            success: false,
            message: "Please Provide Old or New PasswOrd",
          });
        }
        //check user password  | compare password
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
          return res.status(500).send({
            success: false,
            message: "Invalid old password",
          });
        }
        //hashing password
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashedPassword;
        await user.save();
        res.status(200).send({
          success: true,
          message: "Password Updated!",
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error In Password Update API",
          error,
        });
      }
}


export { getUserController , updateUserController, updatePasswordController}