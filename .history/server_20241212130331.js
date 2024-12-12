import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
// import { Test } from './models/test.model.js'

dotenv.config()

const app = express()
const PORT = 3000

app.get("/", (req,res) => {
    res.send("Server is ready!")
})

app.post("/creat", async (req,res) => {
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
        
    }
})

app.listen(PORT, () => {
    connectDB()
    console.log("Server started at http://localhost:", PORT)
})

// jameszzhang00
// vvt4kDIvzNO6CGC9