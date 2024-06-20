"use client"

import { useRouter } from "next/navigation"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

export default function ChangePassword() {
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
				<p className="text-xl font-semibold">Password</p>
				<div />
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
					/>
				</div>
			</div>
			<button className="h-12 w-20 rounded-lg bg-primary text-white place-self-end mr-16 lg:mr-24 xl:mr-32">
				Save
			</button>
		</div>
	)
}
