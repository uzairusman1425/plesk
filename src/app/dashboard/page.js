"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import DashboardHeader from "@/components/dashboard-header/DashboardHeader"
import ProductivityChart from "@/components/productivity-chart/ProductivityChart"
import TopUsersAndGroupsCharts from "@/components/top-users-and-groups-charts/TopUsersAndGroupsCharts"
import TopApplicationsChart from "@/components/top-applications-chart/TopApplicationsChart"
import TopWebsitesChart from "@/components/top-websites-chart/TopWebsitesChart"
import PendingClassificationsChart from "@/components/pending-classifications-chart/PendingClassificationsChart"

export default function Dashboard() {
	const [productivity, setProductivity] = useState([])

	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const [accessToken, setAccessToken] = useState(null)

	useEffect(() => {
		if (!accessToken) {
			setAccessToken(localStorage.getItem("plesk_access_token"))
		}
		;(async () => {
			if (accessToken) {
				await axios
					.get(`${API_BASE_URL}/api/employee/activity/data`, {
						headers: {
							Authorization: `Bearer ${accessToken}`
						}
					})
					?.then((res) => {
						console.log(res)
						setProductivity(res?.data?.data)
					})
					?.catch((err) => {
						console.error(err)
					})
			}
		})()
	}, [API_BASE_URL, accessToken])

	const topUsersAndGroups = [
		{
			name: "claireracher@onetraveller.co",
			totalTime: "7h 24m",
			productivity: [
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
				}
			]
		},
		{
			name: "melissa.morley@onetraveller.co",
			totalTime: "5h 24m",
			productivity: [
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
		}
	]

	const topApplications = [
		{
			name: "Microsoft Outlook",
			hours: 3
		},
		{
			name: "Figma",
			hours: 2
		},
		{
			name: "VS Code",
			hours: 1
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

	const topWebsites = [
		{
			name: "youtube.com",
			hours: 1
		},
		{
			name: "figma.com",
			hours: 3
		},
		{
			name: "facebook.com",
			hours: 2
		},
		{
			name: "nodejs.org",
			hours: 3
		},
		{
			name: "gmail.com",
			hours: 2
		},
		{
			name: "netflix.com",
			hours: 1
		},
		{
			name: "twitter.com",
			hours: 3
		},
		{
			name: "chat.openai.com",
			hours: 4
		}
	]

	const pendingClassifications = [
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "www.facebook.com"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "admin.onetraveller.co.uk"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "admin.onetraveller.co.uk"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "trello.com"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: ""
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: ""
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "www.facebook.com"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "admin.onetraveller.co.uk"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "admin.onetraveller.co.uk"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "trello.com"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: ""
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: ""
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "www.facebook.com"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "admin.onetraveller.co.uk"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "admin.onetraveller.co.uk"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "trello.com"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: ""
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: ""
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "www.facebook.com"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "admin.onetraveller.co.uk"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "admin.onetraveller.co.uk"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "trello.com"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: ""
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: ""
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "www.facebook.com"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "admin.onetraveller.co.uk"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "admin.onetraveller.co.uk"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: "trello.com"
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: ""
		},
		{
			name: "www.postpack.co.uk",
			duration: "17h 4m",
			url: ""
		}
	]

	return (
		<div className="h-fit flex-1 flex flex-col gap-10 px-10 pb-20 pt-5">
			<DashboardHeader />
			<div className="w-full grid grid-cols-2 gap-10">
				<ProductivityChart productivity={productivity} />
				<TopUsersAndGroupsCharts
					topUsersAndGroups={topUsersAndGroups}
				/>
				<TopApplicationsChart topApplications={topApplications} />
				<TopWebsitesChart topWebsites={topWebsites} />
			</div>
			<PendingClassificationsChart
				pendingClassifications={pendingClassifications}
			/>
		</div>
	)
}
