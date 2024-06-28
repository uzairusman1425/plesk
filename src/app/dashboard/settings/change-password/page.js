"use client"

import { useState, useEffect, useContext } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
import { FallingLines } from "react-loader-spinner"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { AppContext } from "@/context/context"

export default function ChangePassword() {
	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const router = useRouter()

	const { state } = useContext(AppContext)

	const [isLoading, setIsLoading] = useState(false)
	const [accessToken, setAccessToken] = useState(null)
	const [oldPassword, setOldPassword] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	useEffect(() => {
		if (!accessToken) {
			setAccessToken(localStorage.getItem("plesk_access_token"))
		}
	}, [accessToken])

	const handleSave = async () => {
		setIsLoading(true)

		const payload = {
			oldPassword: oldPassword,
			password: password
		}

		if (accessToken) {
			if (password === confirmPassword) {
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
						toast.error(err?.response?.data?.data)
					})
			} else {
				setIsLoading(false)
				toast.error("Passwords do not match!")
			}
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
				<p className="text-xl font-semibold">Password</p>
				<div className="w-7" />
			</div>
			<div className="w-full flex flex-col gap-5 lg:gap-0 lg:flex-row lg:items-center justify-around">
				<div className="flex flex-col gap-2">
					<div className="flex flex-row gap-1 items-start">
						<p className="text-sm">Password</p>
						<p className="text-xs text-primary justify-self-start">
							*
						</p>
					</div>
					<input
						className="h-10 w-72 rounded-lg border border-black px-3"
						type="password"
						value={oldPassword}
						onChange={(e) => {
							setOldPassword(e.target.value)
						}}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex flex-row gap-1 items-start">
						<p className="text-sm">New Password</p>
						<p className="text-xs text-primary justify-self-start">
							*
						</p>
					</div>
					<input
						className="h-10 w-72 rounded-lg border border-black px-3"
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value)
						}}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex flex-row gap-1 items-start">
						<p className="text-sm">Re-Enter Password</p>
						<p className="text-xs text-primary justify-self-start">
							*
						</p>
					</div>
					<input
						className="h-10 w-72 rounded-lg border border-black px-3"
						type="password"
						value={confirmPassword}
						onChange={(e) => {
							setConfirmPassword(e.target.value)
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
