"use client";
import { useUser } from "@/context/userContext";
import axios from "axios";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SideBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [data, setData] = useState([]);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { setUser } = useUser();
  const [id, setId] = useState("");

  useEffect(() => {
    FetchUsers();
  }, []);

  const FetchUsers = () => {
    const token = localStorage.getItem("plesk_admin_access_token");
    axios
      .get(`${API_BASE_URL}/api/superadmin/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response?.data?.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUser = (id) => {
    if (!id) return;
    setUser(id);
    setId(id);
  };

  return (
    <div className="h-screen w-[15%]   flex flex-col gap-10 pl-5 pt-10 items-center">
      <Image
        src={"/images/logo.png"}
        alt="plesk.png"
        height={150}
        width={150}
      />
      <div className="flex flex-col gap-3 relative items-centers justify-between w-full h-full">
        <div>
          <div
            className={`h-12 rounded cursor-pointer flex flex-row gap-3 items-center justify-center transform-gpu ease-in-out duration-500 ${
              pathname === "/admin/dashboard/customer-management"
                ? "bg-primary bg-opacity-35"
                : "bg-white"
            }`}
            onClick={() => {
              router.push("/admin/dashboard/customer-management");
            }}
          >
            <Image
              src={"/icons/customer-management-blue.png"}
              alt="icon"
              height={15}
              width={15}
            />
            <p
              className={`text-md transform-gpu ease-in-out duration-500 ${
                pathname === "/admin/dashboard/customer-management"
                  ? "text-primary"
                  : "text-gray-500"
              }`}
            >
              Customer Management
            </p>
            <button
              onClick={() => {
                setHidden((prev) => !prev);
              }}
            >
              {hidden ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
          </div>

          <div
            className={`${
              hidden ? "opacity-100 " : "opacity-0 max-h-0"
            } transition-all duration-500 h-[600px] rounded-lg mt-3 pt-5 absolute top-10 w-full overflow-y-auto flex items-start justify-center`}
          >
            <div className="flex items-baseline  flex-col  gap-3">
              {data.length === 0 ? (
                <p className="text-gray-500">Loading users...</p>
              ) : (
                data.map((item) => (
                  <div
                    key={item?._id}
                    className="flex items-center gap-4 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`size-6      ${
                        item?._id == id ? "text-primary" : "text-[#CBCBCB]"
                      }     `}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>

                    <button
                      className={`${
                        item?._id == id ? "text-primary" : "text-[#CBCBCB]"
                      } pt-2 font-semibold text-left px-3`}
                      key={item._id}
                      onClick={() => handleUser(item?._id)}
                    >
                      {item?.firstName} {item?.lastName}
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center flex-col mb-24 gap-2">
          <button
            className={`h-12 w-full rounded flex flex-row gap-3 items-center justify-center transform-gpu ease-in-out duration-500 ${
              pathname === "/admin/dashboard/Super-admin"
                ? "bg-primary bg-opacity-35"
                : "bg-white"
            }`}
            onClick={() => {
              router.push("/admin/dashboard/Super-admin");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-6 ${
                pathname === "/admin/dashboard/Super-admin"
                  ? "text-primary"
                  : "text-[#979797]"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p
              className={`text-md transform-gpu ease-in-out duration-500 ${
                pathname === "/admin/dashboard/Super-admin"
                  ? "text-primary"
                  : "text-[#979797]"
              }`}
            >
              Settings
            </p>
          </button>
          <button className="w-full flex items-center justify-center gap-4 text-[#979797]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>

            <p
              className="text-md transform-gpu ease-in-out duration-500 
         "
            >
              Logout
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
