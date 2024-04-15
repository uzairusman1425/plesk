"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import CustomerTable from "@/components/customer-table/CustomerTable"
import CustomerDeleteConfirmationPopup from "@/components/customer-delete-confirmation-popup/CustomerDeleteConfirmationPopup"

export default function CustomerManagement() {
	const [customerToDelete, setCustomerToDelete] = useState(null)

	const [customers, setCustomers] = useState([])

	useEffect(() => {
		;(async () => {
			await axios
				.get("/api/employee")
				?.then((res) => {
					console.log(res)
					setCustomers(res?.data?.data)
				})
				?.catch((err) => {
					console.error(err)
				})
		})()
	}, [customerToDelete])

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
