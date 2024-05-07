import { useState } from "react"
import Image from "next/image"
import {
	BarChart,
	Bar,
	YAxis,
	CartesianGrid,
	Legend,
	ResponsiveContainer
} from "recharts"
import PropTypes from "prop-types"

export default function ProductivityChart({ productivity }) {
	const [productivityTab, setProductivityTab] = useState("day")

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-row items-center gap-3">
				<Image
					src={"/icons/productivity.png"}
					alt="icon"
					height={17.5}
					width={17.5}
				/>
				<p className="font-medium uppercase text-sm">productivity</p>
			</div>
			<div className="flex flex-row items-center pl-5 text-xs">
				<button
					className={`px-3 py-1 rounded transform-gpu ease-in-out duration-300 ${
						productivityTab === "day"
							? "bg-primary text-white"
							: "text-gray-500"
					}`}
					onClick={() => {
						if (productivityTab !== "day") {
							setProductivityTab("day")
						}
					}}
				>
					Day
				</button>
				<button
					className={`px-3 py-1 rounded transform-gpu ease-in-out duration-300 ${
						productivityTab === "month"
							? "bg-primary text-white"
							: "text-gray-500"
					}`}
					onClick={() => {
						if (productivityTab !== "month") {
							setProductivityTab("month")
						}
					}}
				>
					Month
				</button>
				<button
					className={`px-3 py-1 rounded transform-gpu ease-in-out duration-300 ${
						productivityTab === "week"
							? "bg-primary text-white"
							: "text-gray-500"
					}`}
					onClick={() => {
						if (productivityTab !== "week") {
							setProductivityTab("week")
						}
					}}
				>
					Week
				</button>
				<button
					className={`px-3 py-1 rounded transform-gpu ease-in-out duration-300 ${
						productivityTab === "year"
							? "bg-primary text-white"
							: "text-gray-500"
					}`}
					onClick={() => {
						if (productivityTab !== "year") {
							setProductivityTab("year")
						}
					}}
				>
					Year
				</button>
			</div>
			<div className="h-80 w-full">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart width={500} height={300} data={productivity}>
						<CartesianGrid strokeDasharray="3 3" />
						<YAxis unit={"hrs"} />
						<Legend iconType="circle" iconSize={10} />
						<Bar dataKey="productive" fill="#2D9CDB" barSize={10} />
						<Bar
							dataKey="unproductive"
							fill="#FF0004"
							barSize={10}
						/>
						<Bar
							dataKey="unidentified"
							fill="#000000"
							barSize={10}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

ProductivityChart.propTypes = {
	productivity: PropTypes.array.isRequired
}
