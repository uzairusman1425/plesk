"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import axios from "axios"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import DateRangeDropDown from "../date-range-drop-down/DateRangeDropDown"
import UsersDropDown from "../users-drop-down/UsersDropDown"

export default function DashboardHeader() {
	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const [accessToken, setAccessToken] = useState(null)
	const [showRangeDropdown, setShowRangeDropdown] = useState(false)
	const [selectedRange, setSelectedRange] = useState("Custom Range")
	const [showUserDropdown, setShowUserDropdown] = useState(false)
	const [selectedUser, setSelectedUser] = useState(null)
	const [allUsers, setAllUsers] = useState([])

	useEffect(() => {
		if (!accessToken) {
			setAccessToken(localStorage.getItem("plesk_access_token"))
		}
		;(async () => {
			if (accessToken) {
				await axios
					.get(`${API_BASE_URL}/api/employee/get`, {
						headers: {
							Authorization: `Bearer ${accessToken}`
						}
					})
					?.then((res) => {
						console.log(res)
						setAllUsers(res?.data?.data)
					})
					?.catch((err) => {
						console.log(err)
					})
			}
		})()
	}, [API_BASE_URL, accessToken])

	return (
		<div className="w-full flex flex-row items-center justify-between">
			<div className="flex flex-row items-center gap-2">
				<DateRangeDropDown
					selectedRange={selectedRange}
					setSelectedRange={setSelectedRange}
					showRangeDropdown={showRangeDropdown}
					setShowRangeDropdown={setShowRangeDropdown}
				/>
				<p className="text-xs p-2">03/13/2024 to 03/13/2024</p>
				<UsersDropDown
					allUsers={allUsers}
					selectedUser={selectedUser}
					setSelectedUser={setSelectedUser}
					showUserDropdown={showUserDropdown}
					setShowUserDropdown={setShowUserDropdown}
				/>
				<button className="flex flex-row items-center gap-1 p-1 border border-transparent hover:border-primary transform-gpu ease-in-out duration-300">
					<Image
						src={"/icons/refresh.png"}
						alt="refresh"
						height={12}
						width={12}
					/>
					<p className="text-xs">Refresh</p>
				</button>
			</div>
			<button className="h-8 w-44 bg-primary rounded flex flex-row items-center justify-center gap-3">
				<Image
					src={"/icons/download.png"}
					alt="download"
					height={20}
					width={20}
				/>
				<p className="text-white text-xs">Download Agent</p>
				<ChevronDownIcon className="h-3 w-3 text-white" />
			</button>
		</div>
	)
}
