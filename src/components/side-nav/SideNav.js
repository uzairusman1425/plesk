"use client"

import { useState } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

export default function SideNav() {
	const [showPCMonitoringDropdown, setShowPCMonitoringDropdown] =
		useState(false)
	const router = useRouter()
	const pathName = usePathname()

	const handleLogout = async () => {
		const res = await signOut({ redirect: false, callbackUrl: "/" })
		router.push(res?.url)
	}

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
					className={`h-10 pl-3 rounded flex flex-row gap-3 items-center transform-gpu ease-in-out duration-300 ${
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
						className={`text-xs transform-gpu ease-in-out duration-300 ${
							pathName === "/dashboard"
								? "text-primary"
								: "text-gray-400"
						}`}
					>
						Dashboard
					</p>
				</button>
				<button
					className={`h-10 pl-3 rounded flex flex-row gap-3 items-center transform-gpu ease-in-out duration-300 ${
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
						className={`text-xs transform-gpu ease-in-out duration-300 ${
							pathName?.includes("/dashboard/customer-management")
								? "text-primary"
								: "text-gray-400"
						}`}
					>
						Customer Management
					</p>
				</button>
				<button
					className={`h-10 px-3 rounded flex flex-row  justify-between items-center transform-gpu ease-in-out duration-300 ${
						showPCMonitoringDropdown && "bg-primary bg-opacity-35"
					}`}
					onClick={() => {
						setShowPCMonitoringDropdown(!showPCMonitoringDropdown)
					}}
				>
					<div className="flex flex-row gap-3 items-center">
						<Image
							src={
								showPCMonitoringDropdown
									? "/icons/pc-monitoring-blue.png"
									: "/icons/pc-monitoring.png"
							}
							alt="icon"
							height={15}
							width={15}
						/>
						<p
							className={`text-xs transform-gpu ease-in-out duration-300 ${
								showPCMonitoringDropdown
									? "text-primary"
									: "text-gray-400"
							}`}
						>
							PC Monitoring
						</p>
					</div>
					<div
						className={`${
							showPCMonitoringDropdown ? "rotate-180" : "rotate-0"
						} transform-gpu ease-in-out duration-300`}
					>
						<ChevronDownIcon
							className={`size-3 ${
								showPCMonitoringDropdown
									? "text-primary"
									: "text-gray-400"
							}`}
						/>
					</div>
				</button>
				{showPCMonitoringDropdown && (
					<div className="w-full flex flex-col gap-5 px-3">
						<div className="flex flex-row items-center justify-between w-full">
							<p className="text-xs text-gray-400">
								Monitored PCs
							</p>
							<ChevronRightIcon className="size-3 text-gray-400" />
						</div>
						<div className="flex flex-row items-center justify-between w-full">
							<p className="text-xs text-gray-400">
								Custom Agent
							</p>
							<ChevronRightIcon className="size-3 text-gray-400" />
						</div>
						<div className="flex flex-row items-center justify-between w-full">
							<p className="text-xs text-gray-400">
								Real-Time Tracking
							</p>
							<ChevronRightIcon className="size-3 text-gray-400" />
						</div>
						<div className="flex flex-row items-center justify-between w-full">
							<p className="text-xs text-gray-400">
								Productivity Analysis
							</p>
							<ChevronRightIcon className="size-3 text-gray-400" />
						</div>
					</div>
				)}
				<button
					className={`h-10 pl-3 rounded flex flex-row gap-3 items-center transform-gpu ease-in-out duration-300 ${
						pathName === "/dashboard/settings" &&
						"bg-primary bg-opacity-35"
					}`}
				>
					<Image
						src={"/icons/settings.png"}
						alt="icon"
						height={15}
						width={15}
					/>
					<p
						className={`text-xs transform-gpu ease-in-out duration-300 ${
							pathName === "/dashboard/settings"
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
