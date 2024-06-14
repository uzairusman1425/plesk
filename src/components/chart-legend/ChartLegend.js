import PropTypes from "prop-types"
import { colors } from "@/utils/constants"

export default function ChartLegend({ list }) {
	return (
		<div className="w-full grid grid-cols-3 gap-2">
			{colors?.map((item, key) => {
				if (key < list?.length) {
					return (
						<div
							className="flex flex-row items-center gap-5"
							key={key}
						>
							<div
								className="h-[2px] w-8"
								style={{
									backgroundColor: item
								}}
							/>
							<p className="text-sm text-gray-500">
								{list[key]?.name
									?.split("-")
									[
										list[key]?.name?.split("-")?.length - 1
									]?.trim()}
							</p>
						</div>
					)
				}
			})}
		</div>
	)
}

ChartLegend.propTypes = {
	list: PropTypes.array.isRequired
}
