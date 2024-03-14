import { connect } from "@/database-config/dbConfig"
import User from "@/models/user-model"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

connect()

export async function POST(request) {
    try {
        const reqBody = await request?.json()
        const {firstName, lastName, phoneNumber, organization, email, password, country} = reqBody

        console.log(reqBody)

        const user = await User.findOne({ email })

        if(user) {
            return NextResponse.json({ error: "User already exists!" }, { status: 400 })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({  firstName, lastName, phoneNumber, organization, email, password: hashedPassword, country })

        const savedUser = await newUser.save()
        console.log(savedUser)

        return NextResponse.json({
            message: "User created successfully!",
            success: true,
            savedUser
        })
    }
    catch (error) {
        return NextResponse.json({ error: error?.message }, { status: 500 })
    }
}