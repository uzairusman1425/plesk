import connect from "@/database-config/dbConfig";
import Customer, { findOneAndDelete } from "@/models/customer-model";
import { NextResponse } from "next/server";

export async function POST(req) {
	connect();
	try {
		const reqBody = await req.json();
		const { email, phone, professional_details } = reqBody;

		const employee = await Customer.findOne({
			$or: [
				{ email: email },
				{
					"professional_details.user_name": professional_details.user_name,
				},
				{ "professional_details.email": professional_details.email },
				{ phone: phone },
			],
		});

		if (!reqBody) {
			return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
		}
<<<<<<< HEAD
		console.log(phone);
=======
>>>>>>> 613e029a74a568bf0299f89085b1758785ebdc23

		if (employee) {
			if (employee.phone === phone) {
				return NextResponse.json({ success: false, message: "Phone number already exists!" }, { status: 403 });
			} else if (employee.professional_details.user_name === professional_details.user_name) {
				return NextResponse.json({ success: false, message: "Username already exists!" }, { status: 403 });
			} else if (employee.professional_details.email === professional_details.email) {
				return NextResponse.json(
					{
						success: false,
						message: "Professional email already exist!",
					},
					{ status: 403 }
				);
			} else if (employee.email === email) {
				return NextResponse.json({ success: false, message: "User email already exists!" }, { status: 403 });
			}
		}

		const Save_employ = new Customer(reqBody);
		const save = await Save_employ.save();

		return NextResponse.json({ success: true, data: save }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, message: error.message }, { status: 500 });
	}
}

export async function GET(req) {
	connect();
	try {
		const id = await req.nextUrl.searchParams.get("id");

		if (id) {
			const employee = await Customer.findById(id);
			if (!employee) {
				return NextResponse.json({ success: false, message: "No employee found!" }, { status: 400 });
			}
			return NextResponse.json({ success: true, data: employee }, { status: 200 });
		}

		const employee = await Customer.find();

		if (!employee) {
			return NextResponse.json({ success: false, message: "No employee found!" }, { status: 400 });
		}

		return NextResponse.json({ success: true, data: employee }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, message: error.message }, { status: 500 });
	}
}

export async function DELETE(req) {
	connect();
	try {
		const id = await req.nextUrl.searchParams.get("id");

		if (!id) {
			return NextResponse.json({ success: false, message: "Employee id is null!" }, { status: 404 });
		}

		const employee = await Customer.findOneAndDelete(id);
		if (!employee) {
			return NextResponse.json({ success: false, message: "Employee not found!" }, { status: 404 });
		}

		return NextResponse.json({ success: true, message: "Employee deleted successfully!" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ success: false, message: error.message }, { status: 500 });
	}
}

export async function PATCH(req) {
	connect();
	try {
		const id = await req.nextUrl.searchParams.get("id");
		if (!id) {
			return NextResponse.json({ message: "Invalid id" }, { status: 404 });
		}

		const reqBody = await req.json();
		const { email, phone, professional_details } = reqBody;

		const customer = await Customer.findById(id);
		if (!customer) {
			return NextResponse.json({ message: "Customer not found!" }, { status: 404 });
		}

		customer.set(reqBody);  
		const updatedCustomer = await customer.save();

		return NextResponse.json({ success: true, data: updatedCustomer }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
