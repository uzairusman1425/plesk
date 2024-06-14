"use client"

import { useContext } from "react"
import Image from "next/image"
import { ChevronUpIcon } from "@heroicons/react/24/solid"
import { AppContext } from "@/context/context"
import NotificationsDropDown from "../notifications-drop-down/NotificationsDropDown"

export default function Header() {
	const { state } = useContext(AppContext)

	return (
		<div className="h-[10vh] w-full flex flex-row items-center justify-between px-10">
			<p className="font-semibold uppercase">
				home - <span className="text-primary">activity dashboard</span>
			</p>
			<div className="flex flex-row gap-5 items-center">
				<NotificationsDropDown />
				<p>Free Plan</p>
				<button className="h-10 w-32 rounded bg-primary flex flex-row items-center justify-center gap-3">
					<div className="size-4 rounded-full border border-white flex items-center justify-center">
						<ChevronUpIcon className="size-3 text-white" />
					</div>
					<p className="text-white">Upgrade</p>
				</button>
				<Image
					src={
						state?.user?.image?.length > 0
							? state?.user?.image
							: "/images/profile.png"
					}
					alt="profile"
					height={40}
					width={40}
					className="rounded-full"
				/>
			</div>
		</div>
	)
}
