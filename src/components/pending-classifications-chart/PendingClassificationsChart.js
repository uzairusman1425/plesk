import Image from "next/image"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import PropTypes from "prop-types"

export default function PendingClassificationsChart({
	pendingClassifications
}) {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-row items-center gap-3">
				<Image
					src={"/icons/top-categories.png"}
					alt="icon"
					height={17.5}
					width={17.5}
				/>
				<p className="font-medium uppercase text-sm">
					pending classifications
				</p>
			</div>
			<div className="h-[380px] w-full flex flex-col border-2 border-dashed">
				<div className="h-12 w-full grid grid-cols-4 place-items-center border-b border-dashed">
					<p>Name</p>
					<p>Category</p>
					<p>Status</p>
					<p>Duration</p>
				</div>
				<div className="size-full flex flex-col overflow-y-auto scrollbar-none">
					{pendingClassifications?.map((item, key) => {
						return (
							<div
								className="min-h-12 w-full grid grid-cols-4 place-items-center border-b border-t border-dashed"
								key={key}
							>
								<div className="flex flex-row items-center gap-3">
									<Image
										src={"/icons/email-red.png"}
										alt="icon"
										height={15}
										width={15}
									/>
									<p className="text-xs font-light text-gray-500">
										{item?.name}
									</p>
								</div>
								<div className="flex flex-row items-center gap-2">
									<p className="text-xs font-light text-gray-500">
										Select Category
									</p>
									<ChevronDownIcon className="size-3 text-gray-500" />
								</div>
								<div className="flex flex-row items-center gap-2">
									<p className="text-xs font-light text-gray-500">
										Select Status
									</p>
									<ChevronDownIcon className="size-3 text-gray-500" />
								</div>
								<p className="text-xs font-light text-gray-500">
									{item?.duration}
								</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

PendingClassificationsChart.propTypes = {
	pendingClassifications: PropTypes.array.isRequired
}
