import mongoose, { Schema } from "mongoose";

const bookModel = new Schema({
    image: {
        type: String,
        required: [true, 'title is required']
    },
    title: {
        type: String,
        required: [true, 'title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    }
}, {timestamps: true})

const books = mongoose.model("Books", bookModel)

export default books