import Test from "../models/test.model.js"
import mongoose from "mongoose"

export const getItems = async (req,res) => {
    try {
        const items = await Test.find({}) // Leave the parameter empty means to get all records
        res.status(200).json({ success: true, data: items })
    } catch (error) {
        console.log("error in fetching items:", error.message)
        res.status(500).json({ success: false, message: "Server error" })
    }
}

export const createItem = async (req,res) => {
    
    const test = req.body

    if (!test.name || !test.price || !test.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }

    const newTest = new Test(test)

    try {
        await newTest.save()
        res.status(200).json({ success:true, data: newTest })
    } catch (error) {
        console.error("Error in Create Test item: ", error.message)
        res.status(500).json({ success: false, message: "Server error" })
    }
}

export const deleteItem = async (req,res) => {
    const { id } = req.params
    try {
        await Test.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Item deleted" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Item not found" })
    }
}

export const updateItem = async (req,res) => {

    const { id } = req.params
    const item = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid product Id" })
    }

    try {
        const updatedItem = await Test.findByIdAndUpdate(id, item, { new:true, upsert: true})
        // upsert: true ensures the new created field will be saved 
        // (need to update the schema { strict: false } as well)
        res.status(200).json({ success:true, data: updatedItem })
    } catch (error) {
        res.status(500).json({ success: false, message: "Item not found" })
    }
}