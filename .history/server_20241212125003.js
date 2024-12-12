import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'

dotenv.config()

const app = express()
const PORT = 3000

app.get("/", (req,res) => {
    res.send("Server is ready!")
})

app.post("/creat", (req,res) => {
    const item = req.body

    if (!item.name || !item.price || !item.image) {
        return res.status(400).json({ success:false, message: "Please provide all fields"})
    }
})

app.listen(PORT, () => {
    connectDB()
    console.log("Server started at http://localhost:", PORT)
})

// jameszzhang00
// vvt4kDIvzNO6CGC9