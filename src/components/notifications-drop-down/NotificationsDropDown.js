"use client"

import { useState } from "react"
import Image from "next/image"

export default function NotificationsDropDown() {
	const [showNotificationsDropDown, setShowNotificationsDropDown] =
		useState(false)

	return (
		<div className="relative z-10">
			<div className="absolute top-0 right-1 size-2 rounded-full bg-red-500" />
			<button
				onClick={() => {
					setShowNotificationsDropDown(!showNotificationsDropDown)
				}}
			>
				<Image
					src={"/icons/notifications.png"}
					alt="notifications"
					height={25}
					width={25}
				/>
			</button>
			{showNotificationsDropDown && (
				<div className="absolute -bottom-[390px] -left-5 h-96 w-64 rounded-3xl bg-white shadow-lg border"></div>
			)}
		</div>
	)
}
