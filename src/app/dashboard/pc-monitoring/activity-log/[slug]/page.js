"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import {
	ArrowLeftCircleIcon,
	ArrowPathIcon,
	ChevronDownIcon
} from "@heroicons/react/24/outline"
import { UserGroupIcon } from "@heroicons/react/24/solid"
import DateSlider from "@/components/date-slider/DateSlider"
import ActivityLogTable from "@/components/activity-log-table/ActivityLogTable"

export default function ActivityLog({ params }) {
	const router = useRouter()

	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const [customerToDelete, setCustomerToDelete] = useState(null)
	const [accessToken, setAccessToken] = useState(null)

	const [activities, setActivities] = useState([])

	useEffect(() => {
		if (!accessToken) {
			setAccessToken(localStorage.getItem("plesk_access_token"))
		}
		;(async () => {
			if (accessToken) {
				await axios
					.get(
						`${API_BASE_URL}/api/employee/activity?id=${params?.slug}`,
						{
							headers: {
								Authorization: `Bearer ${accessToken}`
							}
						}
					)
					?.then((res) => {
						console.log(res)
						setActivities(res?.data?.data)
					})
					?.catch((err) => {
						console.error(err)
					})
			}
		})()
	}, [customerToDelete, API_BASE_URL, accessToken, params])

	const data = [
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "1m 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "trello.com"
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:04:14",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "5s",
			executable: "outlook.exe",
			description: "Microsoft Outlook",
			website: null
		},
		{
			category: "productive",
			dateTime: "05/08/24 09:06:12",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: "12s",
			executable: "excel.exe",
			description: "Microsoft Excel",
			website: null
		},
		{
			category: "unproductive",
			dateTime: "05/08/24 09:13:55",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "facebook.com"
		},
		{
			category: null,
			dateTime: "05/08/24 09:03:25",
			computer: "OT-LPTP049",
			user: "melissa.morley@onetraveller.co.uk",
			duration: " 48s",
			executable: "chrome.exe",
			description: "Google Chrome",
			website: "admin.onetraveller.co.uk"
		}
	]

	return (
		<div className="h-fit flex-1 flex flex-col gap-5 px-10 py-5">
			<div className="flex flex-row gap-3 items-center">
				<button
					onClick={() => {
						router?.back()
					}}
				>
					<ArrowLeftCircleIcon className="size-6 text-black" />
				</button>
				<p>Back to PC Monitoring Page</p>
			</div>
			<div className="flex flex-row items-center gap-5 h-7">
				<button className="h-full px-3 flex flex-row items-center gap-2 border rounded">
					<p className="text-xs text-gray-700">Today</p>
					<ChevronDownIcon className="size-3 text-gray-700" />
				</button>
				<button className="h-full px-3 flex flex-row items-center gap-2 border rounded">
					<UserGroupIcon className="size-3 text-gray-700" />
					<p className="text-xs text-gray-700">All Users</p>
					<ChevronDownIcon className="size-3 text-gray-700" />
				</button>
				<button className="h-full px-3 flex flex-row items-center gap-2 border rounded">
					<ArrowPathIcon className="size-3 text-gray-700" />
					<p className="text-xs text-gray-700">Refresh</p>
				</button>
			</div>
			<DateSlider />
			<ActivityLogTable data={activities} />
		</div>
	)
}
