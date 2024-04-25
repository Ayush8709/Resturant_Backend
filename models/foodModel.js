import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, "Food Title is require"],
      },
      description: {
        type: String,
        required: [true, " food description is requir"],
      },
      price: {
        type: Number,
        required: [true, "food price is require"],
      },
      imageUrl: {
        type: String,
        default:
          "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png",
      },
      foodTags: {
        type: String,
      },
      catgeory: {
        type: String,
      },
      code: {
        type: String,
      },
      isAvailabe: {
        type: Boolean,
        default: true,
      },
      resturnat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "resturntModel",
      },
      rating: {
        type: Number,
        default: 5,
        min: 1,
        max: 5,
      },
      ratingCount: {
        type: String,
      },
    },
    { timestamps: true }
  );

  const foodModel = mongoose.model('foodModel', foodSchema)

  export default foodModel