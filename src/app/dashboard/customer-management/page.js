"use client"

import { useState } from "react"
import CustomerTable from "@/components/customer-table/CustomerTable"
import CustomerDeleteConfirmationPopup from "@/components/customer-delete-confirmation-popup/CustomerDeleteConfirmationPopup"

export default function CustomerManagement() {
	const [customerToDelete, setCustomerToDelete] = useState(null)

	const customers = [
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Vasilia",
			contact: "000666000",
			company: "Tech service",
			designation: "UI/UX Designer",
			type: "Office",
			status: "Permanent"
		},
		{
			name: "Dina",
			contact: "000666000",
			company: "Tech service",
			designation: "PHP Developer",
			type: "Remote",
			status: "Permanent"
		},
		{
			name: "Jack",
			contact: "000666000",
			company: "Tech service",
			designation: "Sales Manager",
			type: "Office",
			status: "Permanent"
		}
	]

	return (
		<div className="h-full flex-1 flex items-center justify-center">
			{customerToDelete && (
				<CustomerDeleteConfirmationPopup
					setCustomerToDelete={setCustomerToDelete}
					customerToDelete={customerToDelete}
				/>
			)}
			<CustomerTable
				data={customers}
				setCustomerToDelete={setCustomerToDelete}
			/>
		</div>
	)
}
