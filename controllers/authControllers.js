import userModel from "../models/userModel.js"
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

        //create new user
        const user = await userModel.create({
            userName,
            email,
            password,
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
        const user = await userModel.findOne({email: email, password:password})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'please enter valid email and password'
            })
        }

        //if user login then send this message
        res.status(200).send({
            success:true,
            message:'Login successfull',
            user
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