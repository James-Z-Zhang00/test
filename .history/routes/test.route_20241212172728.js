import express from 'express'
import mongoose from 'mongoose'
import Test from '../models/test.model.js'
import { createItem, deleteItem, getItems } from '../controllers/test.controller.js'

const router = express.Router()

router.get("/", getItems)

router.post("/", createItem)

router.delete("/:id", deleteItem)

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