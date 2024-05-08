import Image from "next/image"
import {
	BarChart,
	Cell,
	Bar,
	YAxis,
	CartesianGrid,
	ResponsiveContainer
} from "recharts"
import PropTypes from "prop-types"
import { colors } from "@/utils/constants"
import ChartLegend from "../chart-legend/ChartLegend"

export default function TopCategoriesChart({ topCategories }) {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-row items-center gap-3">
				<Image
					src={"/icons/top-categories.png"}
					alt="icon"
					height={17.5}
					width={17.5}
				/>
				<p className="font-medium uppercase text-sm">top categories</p>
			</div>
			<div className="flex flex-row items-center gap-3">
				<Image
					src={"/icons/bar-icon-black.png"}
					alt="icon"
					height={20}
					width={20}
				/>
				<p className="font-medium text-primary">All</p>
			</div>
			<div className="flex flex-col items-center gap-5">
				<div className="h-80 w-full">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart width={500} height={300} data={topCategories}>
							<CartesianGrid strokeDasharray="3 3" />
							<YAxis unit={"hrs"} />
							<Bar dataKey="hours" barSize={20}>
								{topCategories?.map((_, key) => {
									return (
										<Cell
											fill={colors[key % colors?.length]}
											key={key}
										/>
									)
								})}
							</Bar>
						</BarChart>
					</ResponsiveContainer>
				</div>
				<ChartLegend list={topCategories} />
			</div>
		</div>
	)
}

TopCategoriesChart.propTypes = {
	topCategories: PropTypes.array.isRequired
}
