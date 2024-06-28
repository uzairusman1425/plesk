"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import {
	MagnifyingGlassIcon,
	AdjustmentsHorizontalIcon,
	Bars3CenterLeftIcon,
	ComputerDesktopIcon,
	TrashIcon
} from "@heroicons/react/24/solid"

export default function PCMonitoring() {
	const router = useRouter()

	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const [accessToken, setAccessToken] = useState(null)
	const [customers, setCustomers] = useState([])

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
						setCustomers(res?.data?.data)
					})
					?.catch((err) => {
						console.error(err)
					})
			}
		})()
	}, [API_BASE_URL, accessToken])

	return (
		<div className="h-full flex-1 flex flex-col items-center gap-7 px-10 py-5">
			<div className="min-h-12 w-full border rounded-lg flex flex-row gap-5 items-center px-3">
				<MagnifyingGlassIcon className="size-6 text-gray-500" />
				<input
					className="w-full border-none outline-none"
					type="text"
					placeholder="Search by Logon Domain, User, or User Alias"
				/>
				<AdjustmentsHorizontalIcon className="size-6 text-primary" />
			</div>
			<div className="w-full flex flex-row items-center justify-between">
				<p className="uppercase text-sm">
					total users: {customers?.length || 0}
				</p>
				<div className="flex flex-row items-center gap-5">
					<button className="h-8 w-32 rounded flex flex-row gap-2 items-center justify-center border">
						<Bars3CenterLeftIcon className="size-4 text-black" />
						<p className="text-sm">All Users</p>
					</button>
					<button className="h-8 w-32 rounded flex flex-row gap-2 items-center justify-center border">
						<TrashIcon className="size-4 text-black" />
						<p className="text-sm">Delete</p>
					</button>
					<button className="h-8 w-32 rounded flex flex-row gap-2 items-center justify-center bg-primary">
						<ComputerDesktopIcon className="size-4 text-white" />
						<p className="text-xs text-white">Add Monitored</p>
					</button>
				</div>
			</div>
			<div className="w-full flex-1 flex flex-col gap-5">
				<div className="h-10 w-full border rounded flex flex-row gap-5 items-center px-3">
					<input type="checkbox" className="size-4" />
					<div className="grid grid-cols-3 place-items-center flex-1 text-sm">
						<p>ID</p>
						<p>PC name</p>
						<p>User</p>
					</div>
				</div>
				<div className="w-full flex-1 flex flex-col gap-3">
					{customers?.map((item, key) => {
						return (
							<div
								className="h-10 w-full border rounded flex flex-row gap-5 items-center px-3 shadow-lg"
								key={key}
							>
								<input type="checkbox" className="size-4" />
								<div className="grid grid-cols-3 place-items-center flex-1 text-sm">
									<p className="font-semibold">{item?._id}</p>
									<button
										className="flex flex-row gap-3 items-center"
										onClick={() => {
											router?.push(
												`/dashboard/pc-monitoring/pc/${item?._id}`
											)
										}}
									>
										<ComputerDesktopIcon className="size-4 text-primary" />
										<p>{item?.pc_name}</p>
									</button>
									<p>{item?.email}</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
