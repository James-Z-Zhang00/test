export const connectDB = async () => {
    try {
        const conn = await mongoose.connect()
    } catch (error) {

    }
}