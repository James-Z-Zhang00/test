import mongoose from "mongoose"

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true // Automatically add createdAt and updatedAt time
})

const Test = mongoose.model('Test', testSchema)