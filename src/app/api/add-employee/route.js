import connect from "@/database-config/dbConfig";
import Customer from "@/models/customer-model";
import { NextResponse } from "next/server";

export async function POST(req) {
	connect();
	try {
		const reqBody = await req.json();
		const { email, phone, professional_details } = reqBody;

		const employee = await Customer.findOne({
			$or: [{ email: email }, { "professional_details.user_name": professional_details.user_name }, { "professional_details.email": professional_details.email }, { phone: phone }],
		});

		if (!reqBody) {
			return NextResponse.json({ succuss: false, message: "All fields are required!" }, { status: 400 });
		}
		console.log(phone);

		if (employee) {
			if (employee.phone === phone) {
				return NextResponse.json({ succuss: false, message: "Phone number already exists!" }, { status: 403 });
			} else if (employee.professional_details.user_name === professional_details.user_name) {
				return NextResponse.json({ succuss: false, message: "Username already exists!" }, { status: 403 });
			} else if (employee.professional_details.email === professional_details.email) {
				return NextResponse.json({ succuss: false, message: "Professional email already exist!" }, { status: 403 });
			} else if (employee.email === email) {
				return NextResponse.json({ succuss: false, message: "User email already exists!" }, { status: 403 });
			}
		}

		const Save_employ = new Customer(reqBody);
		const save = await Save_employ.save();

		return NextResponse.json({ succuss: true, data: save }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ succuss: false, message: error.message }, { status: 500 });
	}
}

export async function GET(req) {
	connect();
	try {
		const id = await req.nextUrl.searchParams.get("id");

		if (id) {
			const employee = await Customer.findById(id);
			if (!employee) {
				return NextResponse.json({ succuss: false, message: "No employee found" }, { status: 400 });
			}
			return NextResponse.json({ succuss: true, data: employee }, { status: 200 });
		}

		const employee = await Customer.findOne();

		if (!employee) {
			return NextResponse.json({ succuss: false, message: "No employee found" }, { status: 400 });
		}

		return NextResponse.json({ succuss: true, data: employee }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ succuss: false, message: error.message }, { status: 500 });
	}
}
