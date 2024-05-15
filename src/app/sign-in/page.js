"use client"

import { useState, useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckIcon } from "@heroicons/react/24/solid"
import { signInWithPopup } from "firebase/auth"
import axios from "axios"
import { FallingLines } from "react-loader-spinner"
import { auth, provider } from "@/firebase/firebase-config"
import { AppContext } from "@/context/context"

export default function SignIn() {
	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const { dispatch } = useContext(AppContext)

	const router = useRouter()

	const [checked, setChecked] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleLogin = async (e) => {
		e.preventDefault()

		const payload = {
			email: email,
			password: password
		}
		setIsLoading(true)
		setError(false)

		await axios
			.post(`${API_BASE_URL}/api/users/login`, payload)
			?.then((res) => {
				console.log(res)
				setIsLoading(false)
				if (res?.data?.statusCode === 200) {
					localStorage?.setItem(
						"plesk_access_token",
						res?.data?.data?.accessToken
					)
					dispatch({
						type: "SET_USER",
						payload: res?.data?.data?.user
					})
					router.push("/dashboard")
				}
			})
			?.catch((err) => {
				console.log(err)
				setIsLoading(false)
				setError(true)
			})
	}

	const handleGoogleSignIn = async () => {
		signInWithPopup(auth, provider)
			?.then(async (data) => {
				const payload = {
					firstName: data?.user?.displayName?.split(" ")[0] || "",
					lastName: data?.user?.displayName?.split(" ")[1] || "",
					email: data?.user?.email,
					image: data?.user?.photoURL
				}
				await axios
					.post(`${API_BASE_URL}/api/users/googlelogin`, payload)
					?.then((res) => {
						console.log(res)
						if (res?.data?.statusCode === 200) {
							localStorage?.setItem(
								"plesk_access_token",
								res?.data?.data?.accessToken
							)
							dispatch({
								type: "SET_USER",
								payload: res?.data?.data?.user[0]
							})
							router.push("/dashboard")
						}
					})
					?.catch((err) => {
						console.log(err)
					})
			})
			?.catch((err) => {
				console.log(err)
			})
	}

	return (
		<main
			className={`w-[500px] px-12 py-8 rounded-xl shadow-xl border ${
				error && "border-red-500"
			}`}
		>
			<div className="flex flex-col items-center gap-7">
				<p className="text-xl font-semibold text-primary">
					Sign in to your Plesk Account
				</p>
				<input
					type="email"
					placeholder="Email"
					className="h-10 w-full px-2 border rounded-md"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
				/>
				<input
					type="password"
					placeholder="Password"
					className="h-10 w-full px-2 border rounded-md"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value)
					}}
				/>
				<div className="w-full flex flex-row items-center justify-between">
					<div className="flex flex-row items-center gap-2">
						<button
							className={`size-5 rounded-full border-2 flex items-center justify-center border-primary ${
								checked && "bg-primary"
							}`}
							onClick={() => {
								setChecked(!checked)
							}}
						>
							<CheckIcon className="size-3 text-white" />
						</button>
						<p className="text-xs">Keep me logged in</p>
					</div>
					<p className="text-xs font-medium text-red-500">
						Forgot Password?
					</p>
				</div>
				<button
					className="h-10 w-full flex items-center justify-center uppercase text-white text-md font-medium bg-primary rounded-md"
					onClick={handleLogin}
				>
					{isLoading ? (
						<FallingLines
							color="#ffffff"
							width="50"
							visible={true}
							ariaLabel="falling-circles-loading"
						/>
					) : (
						"sign in"
					)}
				</button>
				<div className="flex flex-row gap-3 items-center w-full">
					<div className="h-[1px] w-full bg-gray-300" />
					<p className="text-xs text-gray-500 text-nowrap">
						or sign in with
					</p>
					<div className="h-[1px] w-full bg-gray-300" />
				</div>
				<div className="flex flex-row items-center justify-between w-full">
					<button
						className="flex flex-row gap-2 items-center justify-center h-10 w-48 rounded-full border border-gray-300"
						onClick={() => {
							router.push("/sign-in/sso")
						}}
					>
						<Image
							src={"/icons/lock.png"}
							alt="sso"
							height={15}
							width={15}
						/>
						<p className="uppercase font-medium text-xs">sso</p>
					</button>
					<button
						className="flex flex-row gap-2 items-center justify-center h-10 w-48 rounded-full border border-gray-300"
						onClick={handleGoogleSignIn}
					>
						<Image
							src={"/icons/google.png"}
							alt="sso"
							height={15}
							width={15}
						/>
						<p className="uppercase font-medium text-xs">google</p>
					</button>
				</div>
				<p className="text-gray-400 text-xs">
					Don{"'"}t have an account?{" "}
					<Link href={"/"} className="text-primary">
						Free Sign Up
					</Link>
				</p>
			</div>
		</main>
	)
}
