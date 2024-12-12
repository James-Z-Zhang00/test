

export const getItems = async (req,res) => {
    try {
        const items = await Test.find({}) // Leave the parameter empty means to get all records
        res.status(200).json({ success: true, data: items })
    } catch (error) {
        console.log("error in fetching items:", error.message)
        res.status(500).json({ success: false, message: "Server error" })
    }
}