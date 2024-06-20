"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

export default function NotificationsDropDown() {
	const [showNotificationsDropDown, setShowNotificationsDropDown] =
		useState(false)

	const notifications = [
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		},
		{
			title: "Lorem Ipsum",
			description:
				"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur!",
			date: "28-4-2024"
		}
	]

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
				<div className="absolute -bottom-[390px] -left-5 h-96 w-72 rounded-3xl bg-white shadow-lg border flex flex-col gap-5 px-5 py-3">
					<div className="w-full flex flex-row items-center justify-between">
						<button
							onClick={() => {
								setShowNotificationsDropDown(false)
							}}
						>
							<ChevronLeftIcon className="size-4 text-black" />
						</button>
						<p className="text-sm">Notifications</p>
						<div />
					</div>
					<div className="flex-1 flex flex-col gap-5 overflow-y-auto scrollbar-none">
						{notifications?.map((item, key) => {
							return (
								<button
									className="w-full flex flex-col gap-2"
									key={key}
								>
									<div className="w-full flex flex-row items-center justify-between">
										<p className="text-sm">{item?.title}</p>
										<p className="text-xs text-gray-500 font-light">
											{item?.date}
										</p>
									</div>
									<p className="truncate text-xs font-light">
										{item?.description}
									</p>
								</button>
							)
						})}
					</div>
				</div>
			)}
		</div>
	)
}
