"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import CustomerTable from "@/components/customer-table/CustomerTable"
import CustomerDeleteConfirmationPopup from "@/components/customer-delete-confirmation-popup/CustomerDeleteConfirmationPopup"

export default function CustomerManagement() {
	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const [customerToDelete, setCustomerToDelete] = useState(null)
	const [accessToken, setAccessToken] = useState(null)

	const [customers, setCustomers] = useState([])

	useEffect(() => {
		;(async () => {
			await axios
				.get(`${API_BASE_URL}/api/employee/get`, {
					headers: {
						Authorization: `Bearer ${accessToken}`
					}
				})
				?.then((res) => {
					console.log(res)
					setCustomers(res?.data?.data)
				})
				?.catch((err) => {
					console.error(err)
				})
		})()
	}, [customerToDelete, API_BASE_URL, accessToken])

	useEffect(() => {
		setAccessToken(localStorage.getItem("plesk_access_token"))
	}, [])

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
