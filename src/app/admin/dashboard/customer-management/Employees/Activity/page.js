"use client";
import ActivityLogTable from "@/components/admin/ActivityLogTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function EmployeeActivity() {
  const [id, setId] = useState(null);
  const [key, setKey] = useState(null);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("websites");
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    // Using window.location to access query params directly
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const key = urlParams.get("key");

    if (id && key) {
      setId(id);
      setKey(key);
    }
  }, []);

  useEffect(() => {
    const fetchEmployees = async () => {
      const token = localStorage?.getItem("plesk_admin_access_token");
      setLoading(true); // Start loading
      try {
        const res = await axios.get(
          `${API_URL}/api/superadmin/get-logs/${id}?key=${key}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(res?.data?.data);
        console.log("data", res?.data?.data);
      } catch (error) {
        console.error("Error fetching employees logs:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    if (id && key) {
      fetchEmployees();
    }
  }, [id, key]);

  const browserExecutables = [
    "chrome.exe",
    "firefox.exe",
    "msedge.exe",
    "safari.exe",
    "opera.exe",
    "brave.exe",
  ];

  const filteredData =
    category === "websites"
      ? data?.filter((item) => browserExecutables.includes(item?.executable))
      : data?.filter((item) => !browserExecutables.includes(item?.executable));

  if (!id || !key) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-full h-full">
      <h1 className="text-[20px] font-semibold flex items-center gap-2 mt-2 ">
        HOME <span>-</span>{" "}
        <span className="text-primary">ADMIN DASHBOARD</span>
      </h1>
      <div className="children border-[#E4E7EC] w-full h-max pb-10 mt-2 gap-4 mb-10 border-[3px] rounded-lg flex flex-col items-center">
        <div className="w-[95%] h-20 flex items-center justify-between">
          <h1 className="text-xl font-bold mt-2">ACTIVITY LOG</h1>
          <div className="flex items-center gap-2 ">
            <button
              onClick={() => {
                setCategory("websites");
              }}
              className="px-3 py-2 text-primary bg-[#39B6E833] font-bold"
            >
              Websites
            </button>
            <button
              onClick={() => {
                setCategory("executable");
              }}
              className="px-3 py-2 text-primary bg-[#39B6E833] font-bold"
            >
              Executables
            </button>
          </div>
        </div>
        <ActivityLogTable data={filteredData} />
      </div>
    </main>
  );
}
