import {
	ArrowPathIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon
} from "@heroicons/react/24/outline"
import PropTypes from "prop-types"

export default function ActivityLogTableNavigation({
	data,
	pageNumber,
	setPageNumber,
	paginated_data,
	paginationStart,
	paginationEnd,
	itemsPerPage,
	setItemsPerPage
}) {
	return (
		<div className="w-full flex flex-row items-center justify-between">
			<div className="flex flex-row items-center gap-2 h-10">
				<button
					className={`size-7 rounded-lg border flex items-center justify-center transform-gpu ease-in-out duration-500 ${
						pageNumber > 0 ? "border-gray-400" : "border-gray-300"
					}`}
					onClick={() => {
						if (pageNumber > 0) {
							setPageNumber(0)
						}
					}}
				>
					<ChevronDoubleLeftIcon
						className={`size-3 transform-gpu ease-in-out duration-500 ${
							pageNumber > 0 ? "text-gray-400" : "text-gray-300"
						}`}
					/>
				</button>
				<button
					className={`size-7 rounded-lg border flex items-center justify-center transform-gpu ease-in-out duration-500 ${
						pageNumber > 0 ? "border-gray-400" : "border-gray-300"
					}`}
					onClick={() => {
						if (pageNumber > 0) {
							setPageNumber(pageNumber - 1)
						}
					}}
				>
					<ChevronLeftIcon
						className={`size-3 transform-gpu ease-in-out duration-500 ${
							pageNumber > 0 ? "text-gray-400" : "text-gray-300"
						}`}
					/>
				</button>
				<div className="flex flex-row gap-2 items-center">
					{paginated_data?.map((_, key) => {
						if (key >= paginationStart && key <= paginationEnd) {
							return (
								<button
									key={key}
									onClick={() => {
										setPageNumber(key)
									}}
									className={`border-t text-xs flex items-center justify-center transform-gpu ease-in-out duration-500 ${
										pageNumber === key
											? "h-8 w-7 border-primary text-primary bg-gray-100"
											: "size-7 text-gray-300 border-gray-300"
									}`}
								>
									{key + 1}
								</button>
							)
						}
					})}
				</div>
				<button
					className={`size-7 rounded-lg border flex items-center justify-center transform-gpu ease-in-out duration-500 ${
						pageNumber < paginated_data?.length - 1
							? "border-gray-400"
							: "border-gray-300"
					}`}
					onClick={() => {
						if (pageNumber < paginated_data?.length - 1) {
							setPageNumber(pageNumber + 1)
						}
					}}
				>
					<ChevronRightIcon
						className={`size-3 transform-gpu ease-in-out duration-500 ${
							pageNumber < paginated_data?.length - 1
								? "text-gray-400"
								: "text-gray-300"
						}`}
					/>
				</button>
				<button
					className={`size-7 rounded-lg border flex items-center justify-center transform-gpu ease-in-out duration-500 ${
						pageNumber < paginated_data?.length - 1
							? "border-gray-400"
							: "border-gray-300"
					}`}
					onClick={() => {
						if (pageNumber < paginated_data?.length - 1) {
							setPageNumber(paginated_data?.length - 1)
						}
					}}
				>
					<ChevronDoubleRightIcon
						className={`size-3 transform-gpu ease-in-out duration-500 ${
							pageNumber < paginated_data?.length - 1
								? "text-gray-400"
								: "text-gray-300"
						}`}
					/>
				</button>
				<div className="h-7 w-12 bg-primary rounded-lg flex flex-row items-center justify-between px-2">
					<p className="text-xs text-white">{itemsPerPage}</p>
					<div className="flex flex-col items-center justify-center">
						<button
							onClick={() => {
								if (itemsPerPage < 50) {
									setItemsPerPage(itemsPerPage + 1)
								}
							}}
						>
							<ChevronUpIcon
								className={`size-3 transform-gpu ease-in-out duration-500 ${
									itemsPerPage < 50
										? "text-white"
										: "text-gray-300"
								}`}
							/>
						</button>
						<button
							onClick={() => {
								if (itemsPerPage > 10) {
									setItemsPerPage(itemsPerPage - 1)
								}
							}}
						>
							<ChevronDownIcon
								className={`size-3 transform-gpu ease-in-out duration-500 ${
									itemsPerPage > 10
										? "text-white"
										: "text-gray-300"
								}`}
							/>
						</button>
					</div>
				</div>
			</div>
			<div className="flex flex-row items-center gap-5">
				<p className="text-xs text-gray-500 font-light">
					{paginated_data?.length > 0
						? pageNumber * itemsPerPage + 1
						: 0}{" "}
					-{" "}
					{paginated_data?.length > 0
						? (pageNumber + 1) * itemsPerPage -
						  (itemsPerPage - paginated_data[pageNumber]?.length)
						: 0}{" "}
					of {data?.length} entries
				</p>
				<button>
					<ArrowPathIcon className="size-5 text-gray-500" />
				</button>
			</div>
		</div>
	)
}

ActivityLogTableNavigation.propTypes = {
	data: PropTypes.array.isRequired,
	pageNumber: PropTypes.number.isRequired,
	setPageNumber: PropTypes.func.isRequired,
	paginated_data: PropTypes.array.isRequired,
	paginationStart: PropTypes.number.isRequired,
	paginationEnd: PropTypes.number.isRequired,
	itemsPerPage: PropTypes.number.isRequired,
	setItemsPerPage: PropTypes.func.isRequired
}
