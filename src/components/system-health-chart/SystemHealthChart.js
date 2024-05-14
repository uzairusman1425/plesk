import Image from "next/image"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import PropTypes from "prop-types"

export default function SystemHealthChart({ systemHealth }) {
	const colors = ["#3C93CE", "#81C2DC", "#39B6E8"]

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-row items-center gap-3">
				<Image
					src={"/icons/system-health.png"}
					alt="icon"
					height={17.5}
					width={17.5}
				/>
				<p className="font-medium uppercase text-sm">
					monitor system health
				</p>
			</div>
			<div className="flex flex-col items-center gap-5">
				<div className="size-96">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart width={400} height={400}>
							<Pie
								data={systemHealth}
								dataKey="percentage"
								cx="50%"
								cy="50%"
								innerRadius={85}
								outerRadius={125}
							>
								{systemHealth?.map((_, key) => (
									<Cell
										key={key}
										fill={colors[key % colors?.length]}
									/>
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
				</div>
				<div className="flex flex-col gap-3 w-full">
					{systemHealth?.map((item, key) => {
						return (
							<div
								className="w-full flex flex-row items-center justify-between"
								key={key}
							>
								<div className="flex flex-row gap-3 items-center">
									<div
										className="size-4 rounded-full"
										style={{
											backgroundColor:
												colors[key % colors?.length]
										}}
									/>
									<p className="text-sm">{item?.name}</p>
								</div>
								<p className="text-sm">{item?.percentage}%</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

SystemHealthChart.propTypes = {
	systemHealth: PropTypes.array.isRequired
}
