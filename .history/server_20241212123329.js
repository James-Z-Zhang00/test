import express from 'express'

const app = express()
const PORT = 3000

app.get("/", (req,res) => {
    res.send("Server is ready!")
})

app.listen(PORT, () => {
    console.log("Server started at http://localhost:", PORT)
})

// jameszzhang00
// vvt4kDIvzNO6CGC9