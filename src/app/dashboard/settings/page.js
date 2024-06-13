"use client"

import { useContext } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { AppContext } from "@/context/context"

export default function Settings() {
	const router = useRouter()

	const { state, dispatch } = useContext(AppContext)

	const FAQs = [
		"How do I set up My PC name?",
		"How do I email to Admin for feedback?",
		"Do I need to change my Profile?",
		"Where do you Plesk from?"
	]

	const handleLogout = async () => {
		localStorage?.removeItem("plesk_access_token")
		dispatch({
			type: "SET_USER",
			payload: null
		})
		router.push("/")
	}

	return (
		<div className="p-10 flex-1 flex flex-col gap-5">
			<Image
				src={
					state?.user?.image?.length > 0
						? state?.user?.image
						: "/images/profile.png"
				}
				alt="profile"
				height={100}
				width={100}
				className="rounded-full"
			/>
			<p className="font-light">{state?.user?.email}</p>
			<p className="text-2xl">{`${state?.user?.firstName} ${state?.user?.lastName}`}</p>
			<div className="w-full grid grid-cols-3 gap-20 my-16">
				<div className="flex flex-row items-center justify-between w-full">
					<Image
						src={"/icons/profile.png"}
						alt="profile"
						height={30}
						width={30}
					/>
					<p className="text-xl">Profile</p>
					<button className="size-6 rounded-lg border-2 border-primary flex items-center justify-center">
						<ChevronRightIcon className="size-4 text-primary" />
					</button>
				</div>
				<div className="flex flex-row items-center justify-between w-full">
					<Image
						src={"/icons/password.png"}
						alt="password"
						height={25}
						width={25}
					/>
					<p className="text-xl">Password</p>
					<button className="size-6 rounded-lg border-2 border-primary flex items-center justify-center">
						<ChevronRightIcon className="size-4 text-primary" />
					</button>
				</div>
				<div className="flex flex-row items-center justify-between w-full">
					<Image
						src={"/icons/logout-blue.png"}
						alt="logout"
						height={25}
						width={25}
					/>
					<p className="text-xl">Logout</p>
					<button
						className="size-6 rounded-lg border-2 border-primary flex items-center justify-center"
						onClick={handleLogout}
					>
						<ChevronRightIcon className="size-4 text-primary" />
					</button>
				</div>
			</div>
			<p className="text-xl uppercase font-medium">
				frequently asked questions
			</p>
			<div className="w-full flex flex-col gap-5 mt-5">
				{FAQs?.map((item, key) => {
					return (
						<div className="w-full flex flex-col" key={key}>
							<div className="w-full flex flex-row items-center justify-between p-5">
								<p>{item}</p>
								<button>
									<ChevronRightIcon className="size-5 text-gray-500" />
								</button>
							</div>
							<div className="h-[1px] w-full bg-gray-500" />
						</div>
					)
				})}
			</div>
		</div>
	)
}
