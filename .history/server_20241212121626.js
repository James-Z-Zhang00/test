import express from 'express'

const app = express()
const PORT = 3000

app.get("/", (req,res) => {

})

app.listen(PORT, () => {
    console.log("Server started at http://localhost:", PORT)
})