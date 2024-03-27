import mongoose from "mongoose"

export default async function connect() {
	const url = process.env.MONGODB_URI

	try {
		await mongoose.connect(url)
		const connection = mongoose.connection
		connection.on("connected", () => {
			console.log("Connected to database successfully...")
		})
		connection.on("error", (error) => {
			console.error(error)
			// process.exit()
		})
	} catch (error) {
		console.error(error)
	}
}
