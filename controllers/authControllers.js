import userModel from "../models/userModel.js"
import bcrypt  from 'bcryptjs'
import JWT from 'jsonwebtoken'

const authController = async (req, res) => {
    try {
        const { userName, email, password, phone, address } = req.body;
        //validation
        if (!userName || !email || !password || !address || !phone) {
            return res.status(500).send({
                success: false,
                message: "Please Provide All Fields",
            });
        }
        // chekc user
        const exisiting = await userModel.findOne({ email });
        if (exisiting) {
            return res.status(500).send({
                success: false,
                message: "Email Already Registerd please Login",
            });
        }

        //hashPassword
        const hashPassword = await bcrypt.hash(password, 10)

        //create new user
        const user = await userModel.create({
            userName,
            email,
            password:hashPassword,
            address,
            phone

        });
        res.status(201).send({
            success: true,
            message: "Successfully Registered",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Register API",
            error,
        });
    }
};

//Login

const loginController =async (req, res)=>{
    try {
        const {email, password}= req.body

        //validation
        if(!email || !password){
            return res.status(500).send({
                success:false,
                message:"Please provide valid email or password"
            })
        }

        //check user
        const user = await userModel.findOne({email: email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'please enter valid email and password'
            })
        }

        // user password incrept and chek passwod
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(500).send({
                success:false,
                message:'Please enter valid email or password'
            })
        }

        //create token 
        const token = JWT.sign({id:user._id}, process.env.JWT_SECRET , {
            expiresIn:"7d"
        }) // user._id is coming from datbase id

        //if user login then send this message
        res.status(200).send({
            success:true,
            message:'Login successfull',
            token,
            // user
        })
    } catch (error) {
        console.log('Not Logiin')
        res.status(500).send(({
            success:false,
            message:"User Not Login"
        }))
    }
}


export { authController , loginController }