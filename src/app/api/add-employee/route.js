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
			return NextResponse.json({ succuss: false, message: "all fileds are required" }, { status: 400 });
		}
		console.log(phone);

		if (employee) {
			if (employee.phone === phone) {
				return NextResponse.json({ succuss: false, message: " phone number already exist  " }, { status: 403 });
			} else if (employee.professional_details.user_name === professional_details.user_name) {
				return NextResponse.json({ succuss: false, message: "employ's  already exist with this username " }, { status: 403 });
			} else if (employee.professional_details.email === professional_details.email) {
				return NextResponse.json({ succuss: false, message: "employ's professional email already exist   " }, { status: 403 });
			} else if (employee.email === email) {
				return NextResponse.json({ succuss: false, message: "employ's  email already exist   " }, { status: 403 });
			}
		}

		const Save_employ = new Customer(reqBody);
		const save = await Save_employ.save();

		return NextResponse.json({ succuss: true, data: save }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ succuss: false, message: error.message }, { status: 500 });
	}
}
