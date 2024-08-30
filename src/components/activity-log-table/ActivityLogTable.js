"use client"

import { useEffect, useState } from "react"
import {
	ChevronDownIcon,
	ArrowLongUpIcon,
	InformationCircleIcon,
	GlobeAltIcon
} from "@heroicons/react/24/outline"
import { 
	
	CheckCircleIcon,
	MinusCircleIcon,
	QuestionMarkCircleIcon
} from "@heroicons/react/24/solid"
import PropTypes from "prop-types"
import ActivityLogTableNavigation from "../activity-log-table-navigation/ActivityLogTableNavigation"

export default function ActivityLogTable({ data, email }) {
	const [pageNumber, setPageNumber] = useState(0)
	const [paginationStart, setPaginationStart] = useState(0)
	const [paginationEnd, setPaginationEnd] = useState(0)
	const [itemsPerPage, setItemsPerPage] = useState(50)

	const chunkArray = (array, chunkSize) => {
		const result = []
		for (let i = 0; i < array?.length; i += chunkSize) {
			result.push(array.slice(i, i + chunkSize))
		}
		return result
	}

	const getBaseUrl = (url) => {
		const parsedUrl = new URL(url)
		return `${parsedUrl?.protocol}//${parsedUrl?.hostname}/`
	}

	const paginated_data = chunkArray(data, itemsPerPage)

	useEffect(() => {
		if (
			pageNumber >= paginated_data?.length &&
			paginated_data?.length > 0
		) {
			setPageNumber(paginated_data?.length - 1)
		}
		if (pageNumber === 0) {
			setPaginationStart(pageNumber)
			setPaginationEnd(pageNumber + 4)
		} else if (pageNumber === 1) {
			setPaginationStart(pageNumber - 1)
			setPaginationEnd(pageNumber + 3)
		} else if (pageNumber === paginated_data?.length - 1) {
			setPaginationStart(pageNumber - 4)
			setPaginationEnd(pageNumber)
		} else if (pageNumber === paginated_data?.length - 2) {
			setPaginationStart(pageNumber - 3)
			setPaginationEnd(pageNumber + 1)
		} else {
			setPaginationStart(pageNumber - 2)
			setPaginationEnd(pageNumber + 2)
		}
	}, [pageNumber, paginated_data?.length])

	return (
		<div className="h-fit flex-1 flex flex-col gap-5">
			<ActivityLogTableNavigation
				data={data}
				pageNumber={pageNumber}
				setPageNumber={setPageNumber}
				paginated_data={paginated_data}
				paginationStart={paginationStart}
				paginationEnd={paginationEnd}
				itemsPerPage={itemsPerPage}
				setItemsPerPage={setItemsPerPage}
			/>
			<div className="w-full flex flex-row gap-3">
				<div className="flex flex-col gap-2 items-center">
					<div className="h-6 w-10 rounded border flex items-center justify-center">
						<p className="text-xs">Prod</p>
					</div>
					<div className="h-6 w-10 rounded border flex flex-row items-center justify-evenly">
						<p className="text-xs text-primary">All</p>
						<ChevronDownIcon className="size-3 text-primary" />
					</div>
				</div>
				<div className="w-[1px] min-h-full bg-gray-300" />
				<div className="flex justify-center">
					<div className="h-6 w-48 rounded border flex items-center justify-center">
						<p className="text-xs">Account Date/Time (UTC+0)</p>
					</div>
				</div>
				<div className="w-[1px] min-h-full bg-gray-300" />
				<div className="flex justify-center">
					<ArrowLongUpIcon className="size-5 text-primary" />
				</div>
				<div className="w-[1px] min-h-full bg-gray-300" />
				<div className="flex flex-col gap-2 items-center">
					<div className="h-6 w-32 rounded border flex items-center justify-center">
						<p className="text-xs">Computer</p>
					</div>
					<div className="h-6 w-32 rounded border flex items-center justify-center" />
				</div>
				<div className="w-[1px] min-h-full bg-gray-300" />
				<div className="flex-1 flex flex-col gap-2 items-center">
					<div className="h-6 w-12 rounded border flex items-center justify-center">
						<p className="text-xs">User</p>
					</div>
					<div className="h-6 w-full rounded border flex items-center justify-center px-1">
						<p className="text-xs truncate max-w-52">{email}</p>
					</div>
				</div>
				<div className="w-[1px] min-h-full bg-gray-300" />
				<div className="flex justify-center">
					<div className="h-6 w-20 rounded border flex items-center justify-center">
						<p className="text-xs">Duration</p>
					</div>
				</div>
				<div className="w-[1px] min-h-full bg-gray-300" />
				<div className="flex flex-col gap-2 items-center">
					<div className="h-6 w-24 rounded border flex items-center justify-center">
						<p className="text-xs">Executable</p>
					</div>
					<div className="h-6 w-24 rounded border flex items-center justify-center" />
				</div>
				<div className="w-[1px] min-h-full bg-gray-300" />
				<div className="flex flex-col gap-2 items-center">
					<div className="h-6 w-32 rounded border flex items-center justify-center">
						<p className="text-xs">Description</p>
					</div>
					<div className="h-6 w-32 rounded border flex items-center justify-center" />
				</div>
				<div className="w-[1px] min-h-full bg-gray-300" />
				<div className="flex-1 flex flex-col gap-2 items-center">
					<div className="h-6 w-24 rounded border flex flex-row gap-2 items-center justify-center">
						<p className="text-xs">Website</p>
						<InformationCircleIcon className="size-4 text-primary" />
					</div>
					<div className="h-6 w-full rounded border flex items-center justify-center" />
				</div>
			</div>
			<div className="w-full flex flex-col items-center gap-3">
				{paginated_data[pageNumber]?.map((item, key) => {
					return (
						<div
							className="w-full flex flex-row items-center gap-3"
							key={key}
						>
							<div className="w-10 flex justify-center">
								{item?.productivity === "Productive" ? (
									<CheckCircleIcon className="size-7 text-primary" />
								) : item?.productivity === "Unproductive" ? (
									<MinusCircleIcon className="size-7 text-green-300" />
								) : (
									<QuestionMarkCircleIcon className="size-7 text-gray-500" />
								)}
							</div>
							<div className="w-[1px]" />
							<div className="w-48 flex justify-center">
								<p className="text-xs truncate">
									{item?.start_time}
								</p>
							</div>
							<div className="w-[1px]" />
							<div className="w-5" />
							<div className="w-[1px]" />
							<div className="w-32 flex justify-center">
								<p className="text-xs truncate">
									{item?.pc_name}
								</p>
							</div>
							<div className="w-[1px]" />
							<div className="flex-1 flex justify-center">
								<p className="text-xs truncate max-w-52">
									{email}
								</p>
							</div>
							<div className="w-[1px]" />
							<div className="w-20 flex justify-center">
								<p className="text-xs truncate">
									{`${Math.floor(
										item?.time_spent / 3600
									)}h ${Math.floor(
										item?.time_spent / 60
									)}m ${Math.round(item?.time_spent % 60)}s`}
								</p>
							</div>
							<div className="w-[1px]" />
							<div className="w-24 flex justify-center">
								<p className="text-xs text-primary truncate">
									{item?.executable}
								</p>
							</div>
							<div className="w-[1px]" />
							<div className="w-32 flex justify-center">
								<p className="text-xs text-primary truncate">
									{item?.active_window
										?.split("-")
										[
											data[0]?.active_window?.split("-")
												?.length - 1
										]?.trim()}
								</p>
							</div>
							<div className="w-[1px]" />
							<div className="flex-1 flex flex-row gap-2 items-center justify-center">
								{item?.current_url && (
									<GlobeAltIcon className="size-4 text-primary" />
								)}
								{item?.current_url && (
									<p className="text-xs truncate">
										{getBaseUrl(item?.current_url)}
									</p>
								)}
							</div>
						</div>
					)
				})}
			</div>
			<ActivityLogTableNavigation
				data={data}
				pageNumber={pageNumber}
				setPageNumber={setPageNumber}
				paginated_data={paginated_data}
				paginationStart={paginationStart}
				paginationEnd={paginationEnd}
				itemsPerPage={itemsPerPage}
				setItemsPerPage={setItemsPerPage}
			/>
		</div>
	)
}

ActivityLogTable.propTypes = {
	data: PropTypes.array.isRequired,
	email: PropTypes.string.isRequired
}
