import mongoose from "mongoose"

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        const connection = mongoose.connection
        connection.on("connected", () => {
            console.log("Connected to database successfully...")
        })
        connection.on("error", (error) => {
            console.error(error)
            process.exit()
        })
    }
    catch (error) {
        console.error(error)
    }
}