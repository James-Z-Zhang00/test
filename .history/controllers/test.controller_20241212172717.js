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

export const deleteItem = 