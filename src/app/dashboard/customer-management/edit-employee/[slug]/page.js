"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import axios from "axios"

export default function EditEmployee({ params }) {
	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const [selectedTab, setSelectedTab] = useState("personal")
	const [data, setData] = useState(null)
	const [accessToken, setAccessToken] = useState(null)

	useEffect(() => {
		setAccessToken(localStorage.getItem("plesk_access_token"))
		;(async () => {
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
					setData(res?.data?.data)
					console.log(res)
				})
				?.catch((err) => {
					console.error(err)
				})
		})()
	}, [params, API_BASE_URL, accessToken])

	return (
		<div className="h-full flex-1 flex items-center justify-center">
			<div className="size-[95%] border border-gray-400 rounded-xl p-10 flex flex-col gap-5">
				<div className="w-full flex flex-row items-center justify-between">
					<div className="flex flex-col gap-2">
						<p className="text-2xl font-semibold">
							{`${data?.firstName} ${data?.lastName}`}
						</p>
						<div className="flex flex-row gap-3 items-center">
							<Image
								src={"/icons/designation.png"}
								alt="designation"
								height={25}
								width={25}
							/>
							<p className="font-light">
								{data?.professional_details?.designation}
							</p>
						</div>
						<div className="flex flex-row gap-3 items-center">
							<Image
								src={"/icons/email.png"}
								alt="designation"
								height={25}
								width={25}
							/>
							<p className="font-light">
								{data?.professional_details?.email}
							</p>
						</div>
					</div>
					<button className="h-14 w-40 rounded-xl bg-primary flex flex-row gap-3 items-center justify-center">
						<Image
							src={"/icons/edit-white.png"}
							alt="edit"
							height={25}
							width={25}
						/>
						<p className="font-light text-white">Edit Profile</p>
					</button>
				</div>
				<div className="h-[1px] w-full bg-gray-300" />
				<div className="w-[50%] border-b flex flex-row items-center gap-5">
					<button
						className={`h-10 flex flex-row gap-3 items-center px-1 ${
							selectedTab === "personal"
								? "border-b-2 border-primary"
								: "border-b-2 border-transparent"
						}`}
						onClick={() => {
							if (selectedTab !== "personal") {
								setSelectedTab("personal")
							}
						}}
					>
						<Image
							src={
								selectedTab === "personal"
									? "/icons/personal-information-blue.png"
									: "/icons/personal-information.png"
							}
							alt="personal-information"
							height={25}
							width={25}
						/>
						<p
							className={`text-sm ${
								selectedTab === "personal"
									? "font-semibold text-primary"
									: ""
							}`}
						>
							Personal Information
						</p>
					</button>
					<button
						className={`h-10 flex flex-row gap-3 items-center px-1 ${
							selectedTab === "professional"
								? "border-b-2 border-primary"
								: "border-b-2 border-transparent"
						}`}
						onClick={() => {
							if (selectedTab !== "professional") {
								setSelectedTab("professional")
							}
						}}
					>
						<Image
							src={
								selectedTab === "professional"
									? "/icons/professional-information-blue.png"
									: "/icons/professional-information.png"
							}
							alt="professional-information"
							height={20}
							width={20}
						/>
						<p
							className={`text-sm ${
								selectedTab === "professional"
									? "font-semibold text-primary"
									: ""
							}`}
						>
							Professional Information
						</p>
					</button>
				</div>
				{selectedTab === "personal" ? (
					<div className="w-full grid grid-cols-4 gap-16 mt-10">
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">First Name</p>
							<p className="text-sm">{data?.firstName}</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Last Name</p>
							<p className="text-sm">{data?.lastName}</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Mobile Number
							</p>
							<p className="text-sm">{data?.phone}</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Email Address
							</p>
							<p className="text-sm">{data?.email}</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Date of Birth
							</p>
							<p className="text-sm">{data?.dob?.slice(0, 10)}</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Marital Status
							</p>
							<p className="text-sm">{data?.maritalStatus}</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Gender</p>
							<p className="text-sm">{data?.gender}</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Nationality</p>
							<p className="text-sm">{data?.nationality}</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Address</p>
							<p className="text-sm">{data?.address}</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">City</p>
							<p className="text-sm">{data?.city}</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">State</p>
							<p className="text-sm">{data?.state}</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">ZIP Code</p>
							<p className="text-sm">{data?.zipCode}</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
					</div>
				) : (
					<div className="w-full grid grid-cols-4 gap-16 mt-10">
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Employee ID</p>
							<p className="text-sm">
								{data?.professional_details?.id}
							</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">User Name</p>
							<p className="text-sm">
								{data?.professional_details?.userName}
							</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Employee Type
							</p>
							<p className="text-sm">
								{data?.professional_details?.type}
							</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Email Address
							</p>
							<p className="text-sm">
								{data?.professional_details?.email}
							</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Department</p>
							<p className="text-sm">
								{data?.professional_details?.department}
							</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Designation</p>
							<p className="text-sm">
								{data?.professional_details?.designation}
							</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Working Days
							</p>
							<p className="text-sm">
								{data?.professional_details?.workingDays}
							</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Joining Date
							</p>
							<p className="text-sm">
								{data?.professional_details?.joiningDate}
							</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Office Location
							</p>
							<p className="text-sm">
								{data?.professional_details?.officeLocation}
							</p>
							<div className="h-[1px] w-52 bg-gray-200" />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
