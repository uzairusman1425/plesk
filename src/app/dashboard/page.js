"use client"

import DashboardHeader from "@/components/dashboard-header/DashboardHeader"
import ProductivityChart from "@/components/productivity-chart/ProductivityChart"
import TopUsersAndGroupsCharts from "@/components/top-users-and-groups-charts/TopUsersAndGroupsCharts"
import TopApplicationsChart from "@/components/top-applications-chart/TopApplicationsChart"
import TopWebsitesChart from "@/components/top-websites-chart/TopWebsitesChart"

export default function Dashboard() {
	const productivity = [
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
		}
	]

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

	return (
		<div className="h-fit flex-1 flex flex-col gap-20 px-10 pb-10 pt-5">
			<DashboardHeader />
			<div className="w-full grid grid-cols-2 gap-20">
				<ProductivityChart productivity={productivity} />
				<TopUsersAndGroupsCharts
					topUsersAndGroups={topUsersAndGroups}
				/>
				<TopApplicationsChart topApplications={topApplications} />
				<TopWebsitesChart topWebsites={topWebsites} />
			</div>
		</div>
	)
}
