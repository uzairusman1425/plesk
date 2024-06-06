import { ChevronDownIcon } from "@heroicons/react/24/solid"
import PropTypes from "prop-types"
import { dateRanges } from "@/utils/constants"

export default function DateRangeDropDown({
	selectedRange,
	setSelectedRange,
	showRangeDropdown,
	setShowRangeDropdown
}) {
	return (
		<div className="flex flex-row items-center gap-2 p-1 border border-transparent hover:border-primary transform-gpu ease-in-out duration-300 relative z-10">
			<p className="text-xs">{selectedRange}</p>
			<button
				onClick={() => {
					setShowRangeDropdown(!showRangeDropdown)
				}}
				className={`transform-gpu ease-in-out duration-300 ${
					showRangeDropdown && "rotate-180"
				}`}
			>
				<ChevronDownIcon className="size-3 text-black" />
			</button>
			{showRangeDropdown && (
				<div className="h-fit w-36 rounded border shadow-lg absolute left-0 -bottom-[215px] bg-white z-20 p-3 flex flex-col gap-2">
					{dateRanges?.map((item, key) => {
						return (
							<button
								className="flex flex-row gap-3 items-center"
								key={key}
								onClick={() => {
									setSelectedRange(item)
									setShowRangeDropdown(false)
								}}
							>
								<div className="size-1 rounded-full bg-black" />
								<p className="text-xs">{item}</p>
							</button>
						)
					})}
				</div>
			)}
		</div>
	)
}

DateRangeDropDown.propTypes = {
	selectedRange: PropTypes.string.isRequired,
	setSelectedRange: PropTypes.func.isRequired,
	showRangeDropdown: PropTypes.bool.isRequired,
	setShowRangeDropdown: PropTypes.func.isRequired
}
