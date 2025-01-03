import mongoose from "mongoose";

const resturantSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, " Resturant title is required"],
    },
    imageUrl: {
        type: String,
    },
    foods: {
        type: Array
    },
    time: {
        type: String,
    },
    pickup: {
        type: Boolean,
        default: true,
    },
    delivery: {
        type: Boolean,
        default: true,
    },
    isOpen: {
        type: Boolean,
        default: true,
    },
    logoUrl: {
        type: String,
    },
    rating: {
        type: Number,
        default: 1,
        min: 1,
        max: 5,
    },
    ratingCount: {
        type: String
    },
    code: {
        type: String,
    },
    // if you add google map integration then this code is workd
    coords: {
        id: { type: String },
        latitude: { type: Number },
        latitudeDelta: { type: Number },
        longitude: { type: Number },
        longitudeDelta: { type: Number },
        address: { type: String },
        title: { type: String },
    },
}, { timestamps: true })


const resturntModel = mongoose.model('resturntModel', resturantSchema)

export default resturntModel;