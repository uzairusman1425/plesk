import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	phoneNumber: {
		type: String
	},
	organization: {
		type: String
	},
	email: {
		type: String,
		required: [true, "Email is required!"],
		unique: true
	},
	password: {
		type: String
	},
	country: {
		type: String
	},
	image: {
		type: String
	}
})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User
