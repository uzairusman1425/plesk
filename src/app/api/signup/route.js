import connect from "@/database-config/dbConfig"
import User from "@/models/user-model"
import { NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

export async function POST(request) {
	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	try {
		await connect()
		const reqBody = await request?.json()
		const {
			firstName,
			lastName,
			phoneNumber,
			organization,
			email,
			password,
			country
		} = reqBody

		const user = await User.findOne({ email })

		if (user) {
			return NextResponse.json(
				{ error: "User already exists!" },
				{ status: 400 }
			)
		} else if (firstName?.length === 0) {
			return NextResponse.json(
				{ error: "First Name is required!" },
				{ status: 400 }
			)
		} else if (lastName?.length === 0) {
			return NextResponse.json(
				{ error: "Last Name is required!" },
				{ status: 400 }
			)
		} else if (phoneNumber?.length === 0) {
			return NextResponse.json(
				{ error: "Phone Number is required!" },
				{ status: 400 }
			)
		} else if (organization?.length === 0) {
			return NextResponse.json(
				{ error: "Organization is required!" },
				{ status: 400 }
			)
		} else if (email?.length === 0) {
			return NextResponse.json(
				{ error: "Email is required!" },
				{ status: 400 }
			)
		} else if (!validateEmail(email)) {
			return NextResponse.json(
				{ error: "Email is invalid!" },
				{ status: 400 }
			)
		} else if (password?.length === 0) {
			return NextResponse.json(
				{ error: "Password is required!" },
				{ status: 400 }
			)
		} else if (country?.length === 0) {
			return NextResponse.json(
				{ error: "Country Name is required!" },
				{ status: 400 }
			)
		}

		const salt = await bcryptjs.genSalt(10)
		const hashedPassword = await bcryptjs.hash(password, salt)

		const newUser = new User({
			firstName,
			lastName,
			phoneNumber,
			organization,
			email,
			password: hashedPassword,
			country
		})

		const savedUser = await newUser.save()

		return NextResponse.json(
			{
				message: "User created successfully!",
				success: true,
				user: savedUser
			},
			{ status: 201 }
		)
	} catch (error) {
		return NextResponse.json({ error: error?.message }, { status: 500 })
	}
}
