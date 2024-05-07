import Image from "next/image"
import { ChevronDownIcon } from "@heroicons/react/24/solid"

export default function DashboardHeader() {
	return (
		<div className="w-full flex flex-row items-center justify-between">
			<div className="flex flex-row items-center gap-2">
				<button className="flex flex-row items-center gap-1 p-1 border border-transparent hover:border-primary transform-gpu ease-in-out duration-300">
					<p className="text-xs">Custom Range</p>
					<ChevronDownIcon className="h-3 w-3 text-black" />
				</button>
				<p className="text-xs p-2">03/13/2024 to 03/13/2024</p>
				<button className="flex flex-row items-center gap-1 p-1 border border-transparent hover:border-primary transform-gpu ease-in-out duration-300">
					<Image
						src={"/icons/all-users.png"}
						alt="all-users"
						height={12}
						width={12}
					/>
					<p className="text-xs">All Users</p>
				</button>
				<button className="flex flex-row items-center gap-1 p-1 border border-transparent hover:border-primary transform-gpu ease-in-out duration-300">
					<Image
						src={"/icons/refresh.png"}
						alt="refresh"
						height={12}
						width={12}
					/>
					<p className="text-xs">Refresh</p>
				</button>
				<button className="flex flex-row items-center gap-1 p-1 border border-transparent hover:border-primary transform-gpu ease-in-out duration-300">
					<Image
						src={"/icons/print.png"}
						alt="print"
						height={12}
						width={12}
					/>
					<p className="text-xs">Print Page</p>
				</button>
			</div>
			<div className="flex flex-row items-center gap-3">
				<p className="text-xs">Custom</p>
				<div className="h-5 w-[1px] bg-gray-300" />
				<p className="text-xs text-primary">10h 8m</p>
				<div className="h-5 w-[1px] bg-gray-300" />
				<p className="text-xs text-secondary">59m</p>
				<div className="h-5 w-[1px] bg-gray-300" />
				<p className="text-xs">1h 26m</p>
				<div className="h-5 w-[1px] bg-gray-300" />
				<p className="text-xs">12h 26m</p>
				<button className="h-8 w-44 bg-primary rounded flex flex-row items-center justify-center gap-3">
					<Image
						src={"/icons/download.png"}
						alt="download"
						height={20}
						width={20}
					/>
					<p className="text-white text-xs">Download Agent</p>
					<ChevronDownIcon className="h-3 w-3 text-white" />
				</button>
			</div>
		</div>
	)
}
