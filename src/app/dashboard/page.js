"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import {
	AreaChart,
	BarChart,
	PieChart,
	Pie,
	Cell,
	Bar,
	YAxis,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Area
} from "recharts"

export default function Dashboard() {
	const [productivityTab, setProductivityTab] = useState("day")
	const [topUsersTab, setTopUsersTab] = useState("total")

	const COLORS = [
		"#FFDB36",
		"#16BFD6",
		"#1DDD8D",
		"#953BBF",
		"#2F4B7C",
		"#165BAA",
		"#A155B9",
		"#F765A3",
		"#000000",
		"#FF7C43"
	]

	const data = [
		{
			productive: 8,
			unproductive: 2,
			unidentified: 1
		},
		{
			productive: 3,
			unproductive: 1,
			unidentified: 2
		},
		{
			productive: 2,
			unproductive: 9,
			unidentified: 2
		},
		{
			productive: 7,
			unproductive: 3,
			unidentified: 2
		},
		{
			productive: 1,
			unproductive: 4,
			unidentified: 2
		},
		{
			productive: 9,
			unproductive: 5,
			unidentified: 1
		}
	]

	const data2 = [
		{
			name: "Microsoft Outlook",
			hours: 3
		},
		{
			name: "Figma",
			hours: 1
		},
		{
			name: "VS Code",
			hours: 4
		},
		{
			name: "Chrome",
			hours: 2
		},
		{
			name: "Slack",
			hours: 1
		},
		{
			name: "Skype",
			hours: 2
		},
		{
			name: "Postman",
			hours: 2
		},
		{
			name: "Counter Strike",
			hours: 1
		}
	]

	return (
		<div className="h-fit flex-1 flex flex-col gap-10 px-10 py-5">
			<div className="w-full flex flex-row items-center justify-between">
				<div className="flex flex-row items-center gap-2">
					<button className="flex flex-row items-center gap-1 p-1 border border-transparent hover:border-primary transform-gpu ease-in-out duration-300">
						<p className="text-xs">Custom Range</p>
						<ChevronDownIcon className="h-3 w-3 text-black" />
					</button>
					<p className="text-xs p-2">03/13/2024 to 03/13/2024</p>
					<button className="flex flex-row items-center gap-1 p-1 border border-transparent hover:border-primary transform-gpu ease-in-out duration-300">
						<Image
							src={"/icons/all-users.png"}
							alt="all-users"
							height={12}
							width={12}
						/>
						<p className="text-xs">All Users</p>
					</button>
					<button className="flex flex-row items-center gap-1 p-1 border border-transparent hover:border-primary transform-gpu ease-in-out duration-300">
						<Image
							src={"/icons/refresh.png"}
							alt="refresh"
							height={12}
							width={12}
						/>
						<p className="text-xs">Refresh</p>
					</button>
					<button className="flex flex-row items-center gap-1 p-1 border border-transparent hover:border-primary transform-gpu ease-in-out duration-300">
						<Image
							src={"/icons/print.png"}
							alt="print"
							height={12}
							width={12}
						/>
						<p className="text-xs">Print Page</p>
					</button>
				</div>
				<div className="flex flex-row items-center gap-3">
					<p className="text-xs">Custom</p>
					<div className="h-5 w-[1px] bg-gray-300" />
					<p className="text-xs text-primary">10h 8m</p>
					<div className="h-5 w-[1px] bg-gray-300" />
					<p className="text-xs text-secondary">59m</p>
					<div className="h-5 w-[1px] bg-gray-300" />
					<p className="text-xs">1h 26m</p>
					<div className="h-5 w-[1px] bg-gray-300" />
					<p className="text-xs">12h 26m</p>
					<button className="h-8 w-44 bg-primary rounded flex flex-row items-center justify-center gap-3">
						<Image
							src={"/icons/download.png"}
							alt="download"
							height={20}
							width={20}
						/>
						<p className="text-white text-xs">Download Agent</p>
						<ChevronDownIcon className="h-3 w-3 text-white" />
					</button>
				</div>
			</div>
			<div className="w-full grid grid-cols-2 gap-10">
				<div className="flex flex-col gap-5">
					<div className="flex flex-row items-center gap-3">
						<Image
							src={"/icons/productivity.png"}
							alt="icon"
							height={17.5}
							width={17.5}
						/>
						<p className="font-medium uppercase text-sm">
							productivity
						</p>
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
							<BarChart width={500} height={300} data={data}>
								<CartesianGrid strokeDasharray="3 3" />
								<YAxis unit={"hrs"} />
								<Legend iconType="circle" iconSize={10} />
								<Bar
									dataKey="productive"
									fill="#2D9CDB"
									barSize={10}
								/>
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
						<div className="size-full flex flex-col items-center gap-3">
							<div className="size-full">
								<ResponsiveContainer width="100%" height="100%">
									<AreaChart
										width={500}
										height={400}
										data={data?.slice(0, 3)}
									>
										<Area
											type="bump"
											dataKey="productive"
											stroke="#2D9CDB"
											fill="#2D9CDB"
										/>
										<Area
											type="bump"
											dataKey="unproductive"
											stroke="#FF0004"
											fill="#FF0004"
										/>
										<Area
											type="bump"
											dataKey="unidentified"
											stroke="#000000"
											fill="#000000"
										/>
										<Legend
											iconType="circle"
											iconSize={10}
										/>
									</AreaChart>
								</ResponsiveContainer>
							</div>
							<div className="flex flex-row items-center justify-evenly w-full">
								<p className="text-gray-500">
									claireracher@onetraveller.co
								</p>
								<p className="py-1 px-3 rounded bg-gray-500 text-white font-semibold text-xs">
									7h 24m
								</p>
							</div>
						</div>
						<div className="size-full flex flex-col items-center gap-3">
							<div className="size-full">
								<ResponsiveContainer width="100%" height="100%">
									<AreaChart
										width={500}
										height={400}
										data={data?.slice(3, -1)}
									>
										<Area
											type="bump"
											dataKey="productive"
											stroke="#2D9CDB"
											fill="#2D9CDB"
										/>
										<Area
											type="bump"
											dataKey="unproductive"
											stroke="#FF0004"
											fill="#FF0004"
										/>
										<Area
											type="bump"
											dataKey="unidentified"
											stroke="#000000"
											fill="#000000"
										/>
										<Legend
											iconType="circle"
											iconSize={10}
										/>
									</AreaChart>
								</ResponsiveContainer>
							</div>
							<div className="flex flex-row items-center justify-evenly w-full">
								<p className="text-gray-500">
									melissa.morley@onetraveller.co
								</p>
								<p className="py-1 px-3 rounded bg-gray-500 text-white font-semibold text-xs">
									5h 24m
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<div className="flex flex-row items-center gap-3">
						<Image
							src={"/icons/top-applications.png"}
							alt="icon"
							height={17.5}
							width={17.5}
						/>
						<p className="font-medium uppercase text-sm">
							top applications
						</p>
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
					<div className="flex flex-row gap-5">
						<div className="size-96">
							<ResponsiveContainer width="100%" height="100%">
								<PieChart width={400} height={400}>
									<Pie
										data={data2?.slice(0, 4)}
										dataKey="hours"
										cx="50%"
										cy="50%"
										outerRadius={115}
										innerRadius={90}
										fill="#8884d8"
									>
										{data2?.slice(0, 4)?.map((_, key) => (
											<Cell
												key={key}
												fill={
													COLORS[key % COLORS?.length]
												}
											/>
										))}
									</Pie>
									<Pie
										data={data2?.slice(4, 8)}
										dataKey="hours"
										cx="50%"
										cy="50%"
										innerRadius={115}
										outerRadius={150}
										fill="#82ca9d"
									>
										{data2?.slice(4, 8)?.map((_, key) => (
											<Cell
												key={key}
												fill={
													COLORS[
														(key % COLORS?.length) +
															4
													]
												}
											/>
										))}
									</Pie>
								</PieChart>
							</ResponsiveContainer>
						</div>
						<div className="flex-1 flex flex-col justify-center gap-3">
							{COLORS?.map((item, key) => {
								if (key < data2?.length) {
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
												{data2[key]?.name}
											</p>
										</div>
									)
								}
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
