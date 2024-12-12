export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_)
    } catch (error) {

    }
}