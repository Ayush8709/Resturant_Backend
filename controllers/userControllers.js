import userModel from "../models/userModel.js"

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
            //find user
            const user = await userModel.findById({_id:req.body.id})

            //validation
            if(!user){
                return res.status(404).send({
                    success:false,
                    message:'user not found'
                })
            }

            //update
            const {userName, address, phone,} = req.body;
            //update only userName
            if(userName){
                user.userName = userName
            }
            // update only address
            if(address){
                user.address = address
            }
            // update only phone
            if(phone){
                user.phone = phone
            }

            //save user
            await user.save()

            res.status(200).send({
                success:true,
                message:"User update succesfully",
                user
            })
        } catch (error) {
            return res.status(500).send({
                success:false,
                message:'Error In updata User api'
            })
        }
}


export { getUserController , updateUserController}