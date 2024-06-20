"use client"

import { useState, useContext, useEffect } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { AppContext } from "@/context/context"

export default function SideNav() {
	const { dispatch } = useContext(AppContext)

	const [showPCMonitoringDropdown, setShowPCMonitoringDropdown] =
		useState(false)

	const router = useRouter()
	const pathName = usePathname()

	const handleLogout = async () => {
		localStorage?.removeItem("plesk_access_token")
		dispatch({
			type: "SET_USER",
			payload: null
		})
		router.push("/")
	}

	useEffect(() => {
		if (pathName?.includes("/dashboard/pc-monitoring")) {
			setShowPCMonitoringDropdown(true)
		}
	}, [pathName])

	return (
		<div className="h-full w-56 flex flex-col gap-10 pl-5 pt-10">
			<Image
				src={"/images/logo.png"}
				alt="plesk"
				height={150}
				width={150}
			/>
			<div className="flex flex-col gap-3">
				<button
					className={`h-10 pl-3 rounded flex flex-row gap-3 items-center transform-gpu ease-in-out duration-500 ${
						pathName === "/dashboard" && "bg-primary bg-opacity-35"
					}`}
					onClick={() => {
						if (pathName !== "/dashboard") {
							router.push("/dashboard")
						}
					}}
				>
					<Image
						src={
							pathName === "/dashboard"
								? "/icons/dashboard-blue.png"
								: "/icons/dashboard.png"
						}
						alt="icon"
						height={15}
						width={15}
					/>
					<p
						className={`text-xs transform-gpu ease-in-out duration-500 ${
							pathName === "/dashboard"
								? "text-primary"
								: "text-gray-400"
						}`}
					>
						Dashboard
					</p>
				</button>
				<button
					className={`h-10 pl-3 rounded flex flex-row gap-3 items-center transform-gpu ease-in-out duration-500 ${
						pathName?.includes("/dashboard/customer-management") &&
						"bg-primary bg-opacity-35"
					}`}
					onClick={() => {
						if (pathName !== "/dashboard/customer-management") {
							router.push("/dashboard/customer-management")
						}
					}}
				>
					<Image
						src={
							pathName?.includes("/dashboard/customer-management")
								? "/icons/customer-management-blue.png"
								: "/icons/customer-management.png"
						}
						alt="icon"
						height={15}
						width={15}
					/>
					<p
						className={`text-xs transform-gpu ease-in-out duration-500 ${
							pathName?.includes("/dashboard/customer-management")
								? "text-primary"
								: "text-gray-400"
						}`}
					>
						Customer Management
					</p>
				</button>
				<button
					className={`h-10 px-3 rounded flex flex-row  gap-3 items-center transform-gpu ease-in-out duration-500 ${
						pathName?.includes("/dashboard/pc-monitoring") &&
						"bg-primary bg-opacity-35"
					}`}
					onClick={() => {
						if (!pathName?.includes("/dashboard/pc-monitoring")) {
							router.push("/dashboard/pc-monitoring")
						}
					}}
				>
					<Image
						src={
							pathName?.includes("/dashboard/pc-monitoring")
								? "/icons/pc-monitoring-blue.png"
								: "/icons/pc-monitoring.png"
						}
						alt="icon"
						height={15}
						width={15}
					/>
					<p
						className={`text-xs transform-gpu ease-in-out duration-500 ${
							pathName?.includes("/dashboard/pc-monitoring")
								? "text-primary"
								: "text-gray-400"
						}`}
					>
						PC Monitoring
					</p>
				</button>
				<button
					className={`h-10 px-3 rounded flex flex-row  gap-3 items-center transform-gpu ease-in-out duration-500 ${
						pathName?.includes("/dashboard/real-time-tracking") &&
						"bg-primary bg-opacity-35"
					}`}
					onClick={() => {
						if (
							!pathName?.includes("/dashboard/real-time-tracking")
						) {
							router.push("/dashboard/real-time-tracking")
						}
					}}
				>
					<Image
						src={
							pathName?.includes("/dashboard/real-time-tracking")
								? "/icons/real-time-tracking-blue.png"
								: "/icons/real-time-tracking.png"
						}
						alt="icon"
						height={15}
						width={15}
					/>
					<p
						className={`text-xs transform-gpu ease-in-out duration-500 ${
							pathName?.includes("/dashboard/real-time-tracking")
								? "text-primary"
								: "text-gray-400"
						}`}
					>
						Real-Time Tracking
					</p>
				</button>
				<button
					className={`h-10 pl-3 rounded flex flex-row gap-3 items-center transform-gpu ease-in-out duration-500 ${
						pathName?.includes("/dashboard/settings") &&
						"bg-primary bg-opacity-35"
					}`}
					onClick={() => {
						if (!pathName?.includes("/dashboard/settings")) {
							router.push("/dashboard/settings")
						}
					}}
				>
					<Image
						src={
							pathName?.includes("/dashboard/settings")
								? "/icons/settings-blue.png"
								: "/icons/settings.png"
						}
						alt="icon"
						height={15}
						width={15}
					/>
					<p
						className={`text-xs transform-gpu ease-in-out duration-500 ${
							pathName?.includes("/dashboard/settings")
								? "text-primary"
								: "text-gray-400"
						}`}
					>
						Settings
					</p>
				</button>
				<button
					className="h-10 pl-3 rounded flex flex-row gap-3 items-center"
					onClick={handleLogout}
				>
					<Image
						src={"/icons/logout.png"}
						alt="icon"
						height={15}
						width={15}
					/>
					<p className="text-xs text-gray-400">Log Out</p>
				</button>
			</div>
		</div>
	)
}
