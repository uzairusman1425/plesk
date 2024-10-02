"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  ArrowLeftCircleIcon,
  ArrowPathIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import DateSlider from "@/components/date-slider/DateSlider";
import ActivityLogTable from "@/components/activity-log-table/ActivityLogTable";

export default function ActivityLog({ params }) {
  const router = useRouter();

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [customerToDelete, setCustomerToDelete] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!accessToken) {
      setAccessToken(localStorage.getItem("plesk_access_token"));
    }
    (async () => {
      if (accessToken) {
        await axios
          .get(`${API_BASE_URL}/api/employee/activity?id=${params?.slug}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          ?.then((res) => {
            console.log(res);
            setData(res?.data?.data);
          })
          ?.catch((err) => {
            console.error(err);
          });
      }
    })();
  }, [customerToDelete, API_BASE_URL, accessToken, params]);

  return (
    <div className="h-fit flex-1 flex flex-col gap-5 px-10 py-5">
      <div className="flex flex-row gap-3 items-center">
        <button
          onClick={() => {
            router?.back();
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
      <ActivityLogTable data={data?.activities} email={data?.email} />
    </div>
  );
}
