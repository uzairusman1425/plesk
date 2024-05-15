import {
	MagnifyingGlassIcon,
	AdjustmentsHorizontalIcon,
	Bars3CenterLeftIcon,
	ComputerDesktopIcon,
	TrashIcon
} from "@heroicons/react/24/solid"

export default function PCMonitoring() {
	return (
		<div className="h-full flex-1 flex flex-col items-center gap-10 px-10 py-5">
			<div className="h-12 w-full border rounded-lg flex flex-row gap-5 items-center px-3">
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
		</div>
	)
}
