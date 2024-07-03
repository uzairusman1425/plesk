import Image from "next/image"
import PropTypes from "prop-types"
import PendingClassificationRow from "../pending-classification-row/PendingClassificationRow"

export default function PendingClassificationsChart({
	pendingClassifications,
	handleRefresh
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
					<p>Url</p>
					<p>Status</p>
					<p>Duration</p>
				</div>
				<div className="size-full flex flex-col overflow-y-auto scrollbar-none">
					{pendingClassifications?.map((item, key) => {
						return (
							<PendingClassificationRow
								name={item?.executable}
								url={item?.url}
								duration={item?.time_spent}
								isLastIndex={
									key === pendingClassifications?.length - 1
								}
								handleRefresh={handleRefresh}
								key={key}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

PendingClassificationsChart.propTypes = {
	pendingClassifications: PropTypes.array.isRequired,
	handleRefresh: PropTypes.func.isRequired
}
