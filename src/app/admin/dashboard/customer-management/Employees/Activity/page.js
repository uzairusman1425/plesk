"use client";
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
        <div className="w-[95%] h-[700px] overflow-y-auto pb-10 mb-4 flex flex-col border-[#E4E7EC] border-[3px] rounded-xl">
          <div className="headings w-full flex text-left text-[16px] font-semibold px-4 items-center h-18 border-b text-md mt-10 justify-between">
            <p className="w-[12%] break-words "> Account Date/Times (UTC+0)</p>
            <p className="w-[10%] break-words"> Computer</p>
            <p className="w-[8%] break-words"> Duration</p>
            <p className="w-[10%] break-words"> Executable</p>
            <p className="w-[10%] break-words"> Description</p>

            {category === "executable" ? (
              ""
            ) : (
              <p className="w-[20%] break-words">Url</p>
            )}
          </div>
          {loading ? ( // Show loader when loading is true
            <div className="flex flex-col justify-center items-center h-40">
              <InfinitySpin
                visible={true}
                width="200"
                color="#39B6E8"
                ariaLabel="infinity-spin-loading"
              />
              <p className="text-primary text-xl font-bold">Loading....</p>
            </div>
          ) : (
            filteredData?.map((item) => (
              <div
                key={item?._id}
                className="flex text-left text-sm items-center px-4 scrollbar-none text-[#979797] bg-gray-50 h-36 border-b text-md mt-10 justify-between"
              >
                <p className="w-[12%] break-words flex items-center gap-2 ">
                  {item?.start_time}
                </p>
                <p className="w-[10%] break-words flex items-center gap-2 ">
                  {item?.pc_name}
                </p>
                <p className="w-[8%] break-words flex items-center gap-2 ">
                  {`${Math.floor(item?.time_spent / 3600)}h ${Math.floor(
                    item?.time_spent / 60
                  )}m ${Math.round(item?.time_spent % 60)}s`}
                </p>
                <p className="w-[10%] break-words flex items-center gap-2 ">
                  {item?.executable}
                </p>
                <p className="w-[10%] break-words flex items-center gap-2 ">
                  {item?.active_window
                    ? item?.active_window
                        ?.split("-")
                        [data[0]?.active_window?.split("-")?.length - 1]?.trim()
                        ?.slice(0, 20)
                    : "-"}
                </p>

                {category === "executable" ? (
                  ""
                ) : (
                  <p className="w-[20%] break-words flex items-center gap-2 text-ellipsis">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                    {item?.url ? item?.url?.slice(0, 30) : "-"}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
