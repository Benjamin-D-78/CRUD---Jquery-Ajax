import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  picture: [
    {
      img: { type: String, required: true },
      img1: { type: String },
      img2: { type: String },
      img3: { type: String },
      img4: { type: String },
    }],
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  online: { type: Boolean, required: true },

});

export default mongoose.model("Article", articleSchema);
