"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Link from "next/link"
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline"

export default function PC({ params }) {
	const router = useRouter()

	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const [accessToken, setAccessToken] = useState(null)
	const [employee, setEmployee] = useState()

	useEffect(() => {
		if (!accessToken) {
			setAccessToken(localStorage.getItem("plesk_access_token"))
		}
		;(async () => {
			if (accessToken) {
				await axios
					.get(
						`${API_BASE_URL}/api/employee/get?userId=${params?.slug}`,
						{
							headers: {
								Authorization: `Bearer ${accessToken}`
							}
						}
					)
					?.then((res) => {
						console.log(res)
						setEmployee(res?.data?.data)
					})
					?.catch((err) => {
						console.error(err)
					})
			}
		})()
	}, [API_BASE_URL, accessToken, params])

	return (
		<div className="h-full flex-1 flex flex-col gap-10 px-10 py-5">
			<div className="flex flex-row gap-3 items-center">
				<button
					onClick={() => {
						router?.back()
					}}
				>
					<ArrowLeftCircleIcon className="size-6 text-black" />
				</button>
				<p>
					{employee?.first?.pc_name}\{employee?.Employee?.email}
				</p>
			</div>
			<div className="w-full grid grid-cols-2 px-5">
				<div className="flex flex-col gap-5">
					<p className="font-semibold">User Info</p>
					<p className="font-light">
						Logon Domain: {employee?.first?.pc_name}
					</p>
					<p className="font-light">
						User: {employee?.Employee?.email}
					</p>
				</div>
				<div className="flex flex-col gap-5">
					<p className="font-semibold">Activity Details</p>
					<div className="flex flex-col gap-5">
						<p className="font-light">
							First Log Record: {employee?.first?.start_time}
						</p>
						<p className="font-light">
							Last Log Record: {employee?.last?.end_time}
						</p>
						<Link
							href={`/dashboard/pc-monitoring/activity-log/${params?.slug}`}
							className="font-semibold text-primary underline cursor-pointer"
						>
							View Activity Log
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
