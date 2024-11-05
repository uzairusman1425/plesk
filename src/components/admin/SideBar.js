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
  };

  return (
    <div className="h-full w-[15%] flex flex-col gap-10 pl-5 pt-10">
      <Image
        src={"/images/logo.png"}
        alt="plesk.png"
        height={150}
        width={150}
      />
      <div className="flex flex-col gap-3 relative">
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
          </button>
        </div>

        <button
          className={`h-12 rounded flex flex-row gap-3 items-center justify-center transform-gpu ease-in-out duration-500 ${
            pathname === "/admin/dashboard/Super-admin"
              ? "bg-primary bg-opacity-35"
              : "bg-white"
          }`}
          onClick={() => {
            router.push("/admin/dashboard/Super-admin");
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
              pathname === "/admin/dashboard/Super-admin"
                ? "text-primary"
                : "text-gray-500"
            }`}
          >
            Settings
          </p>
        </button>

        <div
          className={`${
            hidden ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
          } transition-all duration-500 overflow-y-auto bg-white shadow-xl rounded-lg mt-3 pt-5 absolute top-14 w-full`}
        >
          {data.length === 0 ? (
            <p className="text-gray-500">Loading users...</p>
          ) : (
            data.map((item) => (
              <button
                className="text-primary pt-2 font-semibold w-full text-left px-3"
                key={item._id}
                onClick={() => handleUser(item?._id)}
              >
                {item?.firstName} {item?.lastName}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
