"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckIcon } from "@heroicons/react/24/solid"
import { signIn } from "next-auth/react"

export default function SignIn() {
	const router = useRouter()

	const [checked, setChecked] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleLogin = async (e) => {
		e.preventDefault()
		try {
			const res = await signIn("credentials", {email: email, password: password, redirect: false})
			console.log(res)
		}
		catch (error) {
			console.error(error)
		}
	}

	return (
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
						className={`h-5 w-5 rounded-full border-2 flex items-center justify-center border-primary ${
							checked && "bg-primary"
						}`}
						onClick={() => {
							setChecked(!checked)
						}}
					>
						<CheckIcon className="h-3 w-3 text-white" />
					</button>
					<p className="text-xs">Keep me logged in</p>
				</div>
				<p className="text-xs font-medium text-red-500">
					Forgot Password?
				</p>
			</div>
			<button className="h-10 w-full flex items-center justify-center uppercase text-white text-md font-medium bg-primary rounded-md" onClick={handleLogin}>
				sign in
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
				<button className="flex flex-row gap-2 items-center justify-center h-10 w-48 rounded-full border border-gray-300">
					<Image
						src={"/icons/google.png"}
						alt="sso"
						height={15}
						width={15}
					/>
					<p className="uppercase font-medium text-xs">
						google
					</p>
				</button>
			</div>
			<p className="text-gray-400 text-xs">
				Don{"'"}t have an account?{" "}
				<Link href={"/"} className="text-primary">
					Free Sign Up
				</Link>
			</p>
		</div>
	)
}