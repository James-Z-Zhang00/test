import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'

dotenv.config()

const app = express()
const PORT = 3000

app.get("/", (req,res) => {
    res.send("Server is ready!")
})

app.post("/creat" (req,res) => {
    
})

app.listen(PORT, () => {
    connectDB()
    console.log("Server started at http://localhost:", PORT)
})

// jameszzhang00
// vvt4kDIvzNO6CGC9