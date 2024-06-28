"use client"

import { useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
import { FallingLines } from "react-loader-spinner"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { AppContext } from "@/context/context"

export default function ChangeProfileInformation() {
	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const router = useRouter()

	const { state } = useContext(AppContext)

	const [isLoading, setIsLoading] = useState(false)
	const [accessToken, setAccessToken] = useState(null)
	const [firstName, setFirstName] = useState(state?.user?.firstName)
	const [lastName, setLastName] = useState(state?.user?.lastName)
	const [phoneNumber, setPhoneNumber] = useState(state?.user?.phoneNumber)
	const [organization, setOrganization] = useState(state?.user?.organization)
	const [country, setCountry] = useState(state?.user?.country)

	useEffect(() => {
		if (!accessToken) {
			setAccessToken(localStorage.getItem("plesk_access_token"))
		}
	}, [accessToken])

	const handleSave = async () => {
		setIsLoading(true)

		const payload = {
			firstName: firstName,
			lastName: lastName,
			phoneNumber: phoneNumber,
			organization: organization,
			country: country
		}

		if (accessToken) {
			await axios
				.put(
					`${API_BASE_URL}/api/users/update?userId=${state?.user?._id}`,
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
					toast.success(res?.data?.message)
					router?.back()
				})
				?.catch((err) => {
					console.log(err)
					setIsLoading(false)
				})
		}
	}

	return (
		<div className="flex-1 flex flex-col gap-10 p-10">
			<div className="w-full flex flex-row items-center justify-between">
				<button
					className="size-7 rounded-lg border-2 border-black flex items-center justify-center"
					onClick={() => {
						router?.back()
					}}
				>
					<ChevronLeftIcon className="size-5 text-black" />
				</button>
				<p className="text-xl font-semibold">Edit Profile</p>
				<div className="w-7" />
			</div>
			<div className="w-full flex flex-wrap gap-10 lg:gap-20 mx-32">
				<div className="flex flex-col gap-2">
					<p className="text-sm">First Name</p>
					<input
						className="h-10 w-72 rounded-lg border border-black px-3"
						type="text"
						value={firstName}
						onChange={(e) => {
							setFirstName(e.target.value)
						}}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-sm">Last Name</p>
					<input
						className="h-10 w-72 rounded-lg border border-black px-3"
						type="text"
						value={lastName}
						onChange={(e) => {
							setLastName(e.target.value)
						}}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-sm">Phone Number</p>
					<input
						className="h-10 w-72 rounded-lg border border-black px-3"
						type="text"
						value={phoneNumber}
						onChange={(e) => {
							setPhoneNumber(e.target.value)
						}}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-sm">Organization</p>
					<input
						className="h-10 w-72 rounded-lg border border-black px-3"
						type="text"
						value={organization}
						onChange={(e) => {
							setOrganization(e.target.value)
						}}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-sm">Country</p>
					<input
						className="h-10 w-72 rounded-lg border border-black px-3"
						type="text"
						value={country}
						onChange={(e) => {
							setCountry(e.target.value)
						}}
					/>
				</div>
			</div>
			<button
				className="h-12 w-20 flex items-center justify-center rounded-lg bg-primary text-white place-self-end mr-16 lg:mr-24 xl:mr-32"
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
					"Save"
				)}
			</button>
		</div>
	)
}
