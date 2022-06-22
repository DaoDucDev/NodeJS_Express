import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const {Schema} = mongoose

const Product = new Schema ({
    id: ObjectId,
    name: String,
    description: String
})

export default mongoose.model('Product', Product);