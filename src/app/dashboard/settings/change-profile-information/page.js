"use client"

import { useRouter } from "next/navigation"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

export default function ChangeProfileInformation() {
	const router = useRouter()

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
					/>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-sm">Last Name</p>
					<input
						className="h-10 w-72 rounded-lg border border-black px-3"
						type="text"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-sm">Email</p>
					<input
						className="h-10 w-72 rounded-lg border border-black px-3"
						type="text"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-sm">Phone Number</p>
					<input
						className="h-10 w-72 rounded-lg border border-black px-3"
						type="text"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-sm">Organization</p>
					<input
						className="h-10 w-72 rounded-lg border border-black px-3"
						type="text"
					/>
				</div>
			</div>
			<button className="h-12 w-20 rounded-lg bg-primary text-white place-self-end mr-16 lg:mr-24 xl:mr-32">
				Save
			</button>
		</div>
	)
}
