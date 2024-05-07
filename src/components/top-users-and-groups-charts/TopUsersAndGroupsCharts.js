import { useState } from "react"
import Image from "next/image"
import PropTypes from "prop-types"
import ProductivityAreaChart from "../productivity-area-chart/ProductivityAreaChart"

export default function TopUsersAndGroupsCharts({ topUsersAndGroups }) {
	const [topUsersTab, setTopUsersTab] = useState("total")

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-row items-center gap-3">
				<Image
					src={"/icons/users-and-groups.png"}
					alt="icon"
					height={17.5}
					width={17.5}
				/>
				<p className="font-medium uppercase text-sm">
					top users and groups
				</p>
			</div>
			<div className="flex flex-row items-center gap-3">
				<Image
					src={"/icons/bar-icon-blue.png"}
					alt="icon"
					height={17.5}
					width={17.5}
				/>
				<div className="flex flex-row items-center text-xs">
					<button
						className={`px-3 py-1 rounded transform-gpu ease-in-out duration-300 ${
							topUsersTab === "total"
								? "bg-primary text-white"
								: "text-gray-500"
						}`}
						onClick={() => {
							if (topUsersTab !== "total") {
								setTopUsersTab("total")
							}
						}}
					>
						Total
					</button>
					<button
						className={`px-3 py-1 rounded transform-gpu ease-in-out duration-300 ${
							topUsersTab === "users"
								? "bg-primary text-white"
								: "text-gray-500"
						}`}
						onClick={() => {
							if (topUsersTab !== "users") {
								setTopUsersTab("users")
							}
						}}
					>
						Users
					</button>
					<button
						className={`px-3 py-1 rounded transform-gpu ease-in-out duration-300 ${
							topUsersTab === "groups"
								? "bg-primary text-white"
								: "text-gray-500"
						}`}
						onClick={() => {
							if (topUsersTab !== "groups") {
								setTopUsersTab("groups")
							}
						}}
					>
						Groups
					</button>
				</div>
			</div>
			<div className="h-80 w-full grid grid-cols-2 gap-5">
				{topUsersAndGroups?.map((item, key) => {
					return (
						<ProductivityAreaChart
							productivity={item?.productivity}
							name={item?.name}
							totalTime={item?.totalTime}
							key={key}
						/>
					)
				})}
			</div>
		</div>
	)
}

TopUsersAndGroupsCharts.propTypes = {
	topUsersAndGroups: PropTypes.array.isRequired
}
