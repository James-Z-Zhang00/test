import mongoose from "mongoose"

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Automatically add createdAt and updatedAt time
    strict: false }
})

const Test = mongoose.model('Test', testSchema)
// The 2nd Test is the collection name

export default Test // Export the schema named Test for future use