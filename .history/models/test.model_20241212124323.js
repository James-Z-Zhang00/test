import mongoose from "mongoose"

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})