"use client"

import { useRouter } from "next/navigation"
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline"

export default function PC({ params }) {
	const router = useRouter()

	return (
		<div className="h-full flex-1 flex flex-col gap-10 p-10">
			<div className="flex flex-row gap-3 items-center">
				<button
					onClick={() => {
						router?.back()
					}}
				>
					<ArrowLeftCircleIcon className="size-6 text-black" />
				</button>
				<p>AzureAD\melissa.morley@onetraveller.co.uk</p>
			</div>
			<div className="w-full grid grid-cols-2 px-5">
				<div className="flex flex-col gap-5">
					<p className="font-semibold">User Info</p>
					<p className="font-light">Logon Domain: AzureAD</p>
					<p className="font-light">
						User: melissa.morley@onetraveller.co.uk
					</p>
				</div>
				<div className="flex flex-col gap-5">
					<p className="font-semibold">Activity Details</p>
					<div className="w-full grid grid-cols-2">
						<div className="flex flex-col gap-5">
							<p className="font-light">
								First Log Record: 02/27/2024 11:32:45
							</p>
							<p className="font-light">
								Total Storage: 0.004 GB
							</p>
							<p className="font-semibold text-primary underline cursor-pointer">
								View Activity Log
							</p>
						</div>
						<div className="flex flex-col gap-5">
							<p className="font-light">
								Last Log Record: 05/08/2024 17:10:48
							</p>
							<p className="font-light">
								# of Log Records: 32457
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
