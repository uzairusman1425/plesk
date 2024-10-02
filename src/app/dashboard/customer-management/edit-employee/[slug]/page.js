"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import axios from "axios"
import { FallingLines } from "react-loader-spinner"
import toast from "react-hot-toast"

export default function EditEmployee({ params }) {
	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const [accessToken, setAccessToken] = useState(null)
	const [selectedTab, setSelectedTab] = useState("personal")
	const [isEditing, setIsEditing] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [designation, setDesignation] = useState("")
	const [professionalEmail, setProfessionalEmail] = useState("")
	const [personalEmail, setPersonalEmail] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")
	const [DOB, setDOB] = useState("")
	const [maritalStatus, setMaritalStatus] = useState("")
	const [gender, setGender] = useState("")
	const [nationality, setNationality] = useState("")
	const [address, setAddress] = useState("")
	const [city, setCity] = useState("")
	const [state, setState] = useState("")
	const [zipCode, setZipCode] = useState("")
	const [employeeID, setEmployeeID] = useState("")
	const [userName, setUserName] = useState("")
	const [employeeType, setEmployeeType] = useState("")
	const [department, setDepartment] = useState("")
	const [workingDays, setWorkingDays] = useState("")
	const [joiningDate, setJoiningDate] = useState("")
	const [officeLocation, setOfficeLocation] = useState("")

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
					setFirstName(res?.data?.data?.firstName || "")
					setLastName(res?.data?.data?.lastName || "")
					setDesignation(
						res?.data?.data?.professional_details?.designation || ""
					)
					setProfessionalEmail(
						res?.data?.data?.professional_details?.email || ""
					)
					setPersonalEmail(res?.data?.data?.email || "")
					setPhoneNumber(res?.data?.data?.phone || "")
					setDOB(res?.data?.data?.dob || "")
					setMaritalStatus(res?.data?.data?.maritalStatus || "")
					setGender(res?.data?.data?.gender || "")
					setNationality(res?.data?.data?.nationality || "")
					setAddress(res?.data?.data?.address || "")
					setCity(res?.data?.data?.city || "")
					setState(res?.data?.data?.state || "")
					setZipCode(res?.data?.data?.zipCode || "")
					setEmployeeID(
						res?.data?.data?.professional_details?.id || ""
					)
					setUserName(
						res?.data?.data?.professional_details?.userName || ""
					)
					setEmployeeType(
						res?.data?.data?.professional_details?.type || ""
					)
					setDepartment(
						res?.data?.data?.professional_details?.department || ""
					)
					setWorkingDays(
						res?.data?.data?.professional_details?.workingDays || ""
					)
					setJoiningDate(
						res?.data?.data?.professional_details?.joiningDate || ""
					)
					setOfficeLocation(
						res?.data?.data?.professional_details?.officeLocation ||
							""
					)
					console.log(res)
				})
				?.catch((err) => {
					console.error(err)
				})
		})()
	}, [params, API_BASE_URL, accessToken])

	const handleSave = async () => {
		const payload = {
			firstName: firstName,
			lastName: lastName,
			phone: phoneNumber,
			email: personalEmail,
			dob: DOB,
			maritalStatus: maritalStatus,
			gender: gender,
			nationality: nationality,
			address: address,
			city: city,
			state: state,
			zipCode: zipCode,
			professional_details: {
				id: employeeID,
				userName: userName,
				type: employeeType,
				email: professionalEmail,
				department: department,
				designation: designation,
				workingDays: workingDays,
				joiningDate: joiningDate,
				officeLocation: officeLocation
			}
		}

		setIsLoading(true)

		await axios
			.put(
				`${API_BASE_URL}/api/employee/update?userId=${params?.slug}`,
				payload,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`
					}
				}
			)
			?.then((res) => {
				console.log(res)
				setIsLoading(false)
				if (res?.status === 200) {
					setIsEditing(false)
				}
			})
			?.catch((err) => {
				toast.error(err?.message)
				console.log(err)
				setIsLoading(false)
			})
	}

	return (
		<div className="h-full flex-1 flex items-center justify-center">
			<div className="size-[95%] border border-gray-400 rounded-xl p-10 flex flex-col gap-5">
				<div className="w-full flex flex-row items-center justify-between">
					<div className="flex flex-col gap-2">
						<p className="text-2xl font-semibold">
							{`${firstName} ${lastName}`}
						</p>
						<div className="flex flex-row gap-3 items-center">
							<Image
								src={"/icons/designation.png"}
								alt="designation"
								height={25}
								width={25}
							/>
							<p className="font-light">{designation}</p>
						</div>
						<div className="flex flex-row gap-3 items-center">
							<Image
								src={"/icons/email.png"}
								alt="designation"
								height={25}
								width={25}
							/>
							<p className="font-light">{professionalEmail}</p>
						</div>
					</div>
					{isEditing ? (
						<button
							className="h-14 w-24 rounded-xl bg-primary flex items-center justify-center"
							onClick={handleSave}
						>
							{isLoading ? (
								<FallingLines
									color="#ffffff"
									width="50"
									visible={true}
									ariaLabel="falling-circles-loading"
								/>
							) : (
								<p className="font-light text-white uppercase">
									done
								</p>
							)}
						</button>
					) : (
						<button
							className="h-14 w-40 rounded-xl bg-primary flex flex-row gap-3 items-center justify-center"
							onClick={() => {
								setIsEditing(true)
							}}
						>
							<Image
								src={"/icons/edit-white.png"}
								alt="edit"
								height={25}
								width={25}
							/>
							<p className="font-light text-white">
								Edit Profile
							</p>
						</button>
					)}
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
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={firstName}
									onChange={(e) => {
										setFirstName(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{firstName}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Last Name</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={lastName}
									onChange={(e) => {
										setLastName(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{lastName}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Mobile Number
							</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={phoneNumber}
									onChange={(e) => {
										setPhoneNumber(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{phoneNumber}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Email Address
							</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={personalEmail}
									onChange={(e) => {
										setPersonalEmail(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{personalEmail}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Date of Birth
							</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="date"
									value={DOB}
									onChange={(e) => {
										setDOB(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">
										{DOB?.slice(0, 10)}
									</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Marital Status
							</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={maritalStatus}
									onChange={(e) => {
										setMaritalStatus(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{maritalStatus}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Gender</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={gender}
									onChange={(e) => {
										setGender(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{gender}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Nationality</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={nationality}
									onChange={(e) => {
										setNationality(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{nationality}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Address</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={address}
									onChange={(e) => {
										setAddress(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{address}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">City</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={city}
									onChange={(e) => {
										setCity(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{city}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">State</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={state}
									onChange={(e) => {
										setState(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{state}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">ZIP Code</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={zipCode}
									onChange={(e) => {
										setZipCode(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{zipCode}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
					</div>
				) : (
					<div className="w-full grid grid-cols-4 gap-16 mt-10">
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Employee ID</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={employeeID}
									onChange={(e) => {
										setEmployeeID(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{employeeID}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">User Name</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={userName}
									onChange={(e) => {
										setUserName(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{userName}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Employee Type
							</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={employeeType}
									onChange={(e) => {
										setEmployeeType(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{employeeType}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Email Address
							</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={professionalEmail}
									onChange={(e) => {
										setProfessionalEmail(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">
										{professionalEmail}
									</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Department</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={department}
									onChange={(e) => {
										setDepartment(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{department}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">Designation</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={designation}
									onChange={(e) => {
										setDesignation(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{designation}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Working Days
							</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={workingDays}
									onChange={(e) => {
										setWorkingDays(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{workingDays}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Joining Date
							</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="date"
									value={joiningDate}
									onChange={(e) => {
										setJoiningDate(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{joiningDate}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
						<div className="flex flex-col gap-3 font-light">
							<p className="text-xs text-gray-400">
								Office Location
							</p>
							{isEditing ? (
								<input
									className="h-8 w-52 px-3 rounded-lg border text-sm"
									type="text"
									value={officeLocation}
									onChange={(e) => {
										setOfficeLocation(e.target.value)
									}}
								/>
							) : (
								<div className="flex flex-col gap-3">
									<p className="text-sm">{officeLocation}</p>
									<div className="h-[1px] w-52 bg-gray-200" />
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
