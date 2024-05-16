"use client"

import { useRouter } from "next/navigation"
import {
	MagnifyingGlassIcon,
	AdjustmentsHorizontalIcon,
	Bars3CenterLeftIcon,
	ComputerDesktopIcon,
	TrashIcon
} from "@heroicons/react/24/solid"

export default function PCMonitoring() {
	const router = useRouter()

	const data = [
		{
			id: 1,
			pcName: "AzureAD",
			user: "melissa.morley@onetraveller.co.uk"
		},
		{
			id: 2,
			pcName: "AzureAD",
			user: "claireracher@onetraveller.co.uk"
		},
		{
			id: 3,
			pcName: "AzureAD",
			user: "melissa.morley@onetraveller.co.uk"
		},
		{
			id: 4,
			pcName: "AzureAD",
			user: "claireracher@onetraveller.co.uk"
		},
		{
			id: 5,
			pcName: "AzureAD",
			user: "melissa.morley@onetraveller.co.uk"
		},
		{
			id: 6,
			pcName: "AzureAD",
			user: "claireracher@onetraveller.co.uk"
		},
		{
			id: 7,
			pcName: "AzureAD",
			user: "melissa.morley@onetraveller.co.uk"
		},
		{
			id: 8,
			pcName: "AzureAD",
			user: "claireracher@onetraveller.co.uk"
		},
		{
			id: 9,
			pcName: "AzureAD",
			user: "melissa.morley@onetraveller.co.uk"
		},
		{
			id: 10,
			pcName: "AzureAD",
			user: "claireracher@onetraveller.co.uk"
		}
	]

	return (
		<div className="h-full flex-1 flex flex-col items-center gap-7 px-10 py-5">
			<div className="min-h-12 w-full border rounded-lg flex flex-row gap-5 items-center px-3">
				<MagnifyingGlassIcon className="size-6 text-gray-500" />
				<input
					className="w-full border-none outline-none"
					type="text"
					placeholder="Search by Logon Domain, User, or User Alias"
				/>
				<AdjustmentsHorizontalIcon className="size-6 text-primary" />
			</div>
			<div className="w-full flex flex-row items-center justify-between">
				<p className="uppercase text-sm">total users: 3</p>
				<div className="flex flex-row items-center gap-5">
					<button className="h-8 w-32 rounded flex flex-row gap-2 items-center justify-center border">
						<Bars3CenterLeftIcon className="size-4 text-black" />
						<p className="text-sm">All Users</p>
					</button>
					<button className="h-8 w-32 rounded flex flex-row gap-2 items-center justify-center border">
						<TrashIcon className="size-4 text-black" />
						<p className="text-sm">Delete</p>
					</button>
					<button className="h-8 w-32 rounded flex flex-row gap-2 items-center justify-center bg-primary">
						<ComputerDesktopIcon className="size-4 text-white" />
						<p className="text-xs text-white">Add Monitored</p>
					</button>
				</div>
			</div>
			<div className="w-full flex-1 flex flex-col gap-5">
				<div className="h-10 w-full border rounded flex flex-row gap-5 items-center px-3">
					<input type="checkbox" className="size-4" />
					<div className="grid grid-cols-3 place-items-center flex-1 text-sm">
						<p>ID</p>
						<p>PC name</p>
						<p>User</p>
					</div>
				</div>
				<div className="w-full flex-1 flex flex-col gap-3">
					{data?.map((item, key) => {
						return (
							<div
								className="h-10 w-full border rounded flex flex-row gap-5 items-center px-3 shadow-lg"
								key={key}
							>
								<input type="checkbox" className="size-4" />
								<div className="grid grid-cols-3 place-items-center flex-1 text-sm">
									<p className="font-semibold">{item?.id}</p>
									<button
										className="flex flex-row gap-3 items-center"
										onClick={() => {
											router?.push(
												`/dashboard/pc-monitoring/pc/${item?.id}`
											)
										}}
									>
										<ComputerDesktopIcon className="size-4 text-primary" />
										<p>{item?.pcName}</p>
									</button>
									<p>{item?.user}</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
