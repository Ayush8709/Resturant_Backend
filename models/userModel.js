import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "username must be reauired"]
    },

    email: {
        type: String,
        required: [trud, 'email must be reauired'],
        unique: true
    },

    password: {
        type: String,
        required: [true, "password must be required"]
    },

    addressh: {
        type: Array,

    },

    phone: {
        type: String,
        required: [true, "phone number must be required"]
    },

    usertype: {
        type: String,
        required: [true, 'user type is required'],
        default: 'clint',
        enum: ['clinet', 'admin', 'vendor', 'driver'],
    },

    profile: {
        type: String,
        default: "https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA"
    },
}, { timestamps: true })


const User = mongoose.model('User', userSchema)

export default User;