const userController = (req , res)=>{
    try {
        res.status(200).send({
            success:true,
            message:'textController is Working'
        })
    } catch (error) {
        console.log("error in text api");
    }
}


export default userController