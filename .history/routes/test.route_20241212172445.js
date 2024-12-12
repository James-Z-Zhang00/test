import express from 'express'
import mongoose from 'mongoose'
import Test from '../models/test.model.js'

const router = express.Router()

router.get("/", )

router.post("/", async (req,res) => {
    
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
})

router.delete("/:id", async (req,res) => {
    const { id } = req.params
    try {
        await Test.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Item deleted" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Item not found" })
    }
})

router.put("/:id", async (req,res) => {

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
})

export default router