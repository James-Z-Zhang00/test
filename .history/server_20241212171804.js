import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import bodyParser from 'body-parser' // Make the server accept JSON
import testRoutes from './routes'

dotenv.config() // Use .env variables e.g. MongoDB_URI

const app = express()
const PORT = 3000

app.use(bodyParser.json()) // Middleware to parse JSON

app.user

/* Port listener */

app.listen(PORT, () => {
    connectDB()
    console.log("Server started at http://localhost:", PORT)
})
