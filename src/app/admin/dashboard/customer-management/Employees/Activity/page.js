"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EmployeeActivity() {
  const [id, setId] = useState(null);
  const [key, setKey] = useState(null);
  const [data, setData] = useState([]);
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
      }
    };

    fetchEmployees();
  }, [id]);

  if (!id || !key) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-full h-full">
      <h1 className="text-xl flex items-center gap-2 font-bold mt-2 ">
        HOME <span>-</span>{" "}
        <span className="text-primary">ADMIN DASHBOARD</span>
      </h1>
      <div className="children border-[#E4E7EC] w-full h-max pb-10 mt-2 gap-4 mb-10 border-[3px] rounded-lg flex flex-col items-center">
        <h1 className="text-xl font-bold mt-2">Pending Classifications</h1>
        <div className="w-[95%] h-[600px] overflow-y-auto pb-10 mb-4 flex flex-col border-[#E4E7EC] border-[3px] rounded-xl">
          <div className="headings  flex text-left px-4 items-center font-bold bg-gray-50 h-10 border-b text-md mt-10 justify-evenly">
            <p className="w-[30%] break-words"> Name</p>
            <p className="w-[50%] break-words">Url</p>
            <p className="w-[20%] break-words">Duration</p>
          </div>
          {data &&
            data?.map((item) => (
              <div
                key={item?._id}
                className="  flex text-left items-center px-4  text-[#979797] bg-gray-50 h-10 border-b text-md mt-10 justify-evenly"
              >
                <p className="w-[30%] break-words flex items-center  gap-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  {item?.website}
                </p>
                <p className="w-[50%] break-words flex items-center gap-2">
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
                  {item?.url?.slice(0, 70)}
                </p>
                <p className="w-[20%] break-words"> {item?.time_spent}s</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
