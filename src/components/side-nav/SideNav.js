"use client";

import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AppContext } from "@/context/context";

export default function SideNav() {
  const { dispatch } = useContext(AppContext);

  const [showPCMonitoringDropdown, setShowPCMonitoringDropdown] =
    useState(false);

  const router = useRouter();
  const pathName = usePathname();

  const handleLogout = async () => {
    localStorage?.removeItem("plesk_access_token");
    dispatch({
      type: "SET_USER",
      payload: null,
    });
    router.push("/");
  };

  useEffect(() => {
    if (pathName?.includes("/dashboard/pc-monitoring")) {
      setShowPCMonitoringDropdown(true);
    }
  }, [pathName]);

  return (
    <div className="h-full w-56 flex flex-col gap-10 pl-5 pt-10">
      <Image
        src={"/images/logo.png"}
        alt="plesk.png"
        height={150}
        width={150}
      />
      <div className="flex flex-col gap-3">
        <button
          className={`h-10 pl-3 rounded flex flex-row gap-3 items-center transform-gpu ease-in-out duration-500 ${
            pathName === "/dashboard" && "bg-primary bg-opacity-35"
          }`}
          onClick={() => {
            if (pathName !== "/dashboard") {
              router.push("/dashboard");
            }
          }}
        >
          <Image
            src={
              pathName === "/dashboard"
                ? "/icons/dashboard-blue.png"
                : "/icons/dashboard.png"
            }
            alt="icon"
            height={15}
            width={15}
          />
          <p
            className={`text-xs transform-gpu ease-in-out duration-500 ${
              pathName === "/dashboard" ? "text-primary" : "text-gray-400"
            }`}
          >
            Dashboard
          </p>
        </button>
        <button
          className={`h-10 pl-3 rounded flex flex-row gap-3 items-center transform-gpu ease-in-out duration-500 ${
            pathName?.includes("/dashboard/customer-management") &&
            "bg-primary bg-opacity-35"
          }`}
          onClick={() => {
            if (pathName !== "/dashboard/customer-management") {
              router.push("/dashboard/customer-management");
            }
          }}
        >
          <Image
            src={
              pathName?.includes("/dashboard/customer-management")
                ? "/icons/customer-management-blue.png"
                : "/icons/customer-management.png"
            }
            alt="icon"
            height={15}
            width={15}
          />
          <p
            className={`text-xs transform-gpu ease-in-out duration-500 ${
              pathName?.includes("/dashboard/customer-management")
                ? "text-primary"
                : "text-gray-400"
            }`}
          >
            Customer Management
          </p>
        </button>
        <button
          className={`h-10 px-3 rounded flex flex-row  gap-3 items-center transform-gpu ease-in-out duration-500 ${
            pathName?.includes("/dashboard/pc-monitoring") &&
            "bg-primary bg-opacity-35"
          }`}
          onClick={() => {
            if (!pathName?.includes("/dashboard/pc-monitoring")) {
              router.push("/dashboard/pc-monitoring");
            }
          }}
        >
          <Image
            src={
              pathName?.includes("/dashboard/pc-monitoring")
                ? "/icons/pc-monitoring-blue.png"
                : "/icons/pc-monitoring.png"
            }
            alt="icon"
            height={15}
            width={15}
          />
          <p
            className={`text-xs transform-gpu ease-in-out duration-500 ${
              pathName?.includes("/dashboard/pc-monitoring")
                ? "text-primary"
                : "text-gray-400"
            }`}
          >
            PC Monitoring
          </p>
        </button>
        <button
          className={`h-10 px-3 rounded flex flex-row  gap-3 items-center transform-gpu ease-in-out duration-500 ${
            pathName?.includes("/dashboard/unproductive-urls") &&
            "bg-primary bg-opacity-35"
          }`}
          onClick={() => {
            if (!pathName?.includes("/dashboard/unproductive-urls")) {
              router.push("/dashboard/unproductive-urls");
            }
          }}
        >
          <Image
            src={
              pathName?.includes("/dashboard/unproductive-urls")
                ? "/icons/pc-monitoring-blue.png"
                : "/icons/pc-monitoring.png"
            }
            alt="icon"
            height={15}
            width={15}
          />
          <p
            className={`text-xs transform-gpu ease-in-out duration-500 ${
              pathName?.includes("/dashboard/unproductive-urls")
                ? "text-primary"
                : "text-gray-400"
            }`}
          >
            Unproductive Urls
          </p>
        </button>

        <button
          className={`h-10 pl-3 rounded flex flex-row gap-3 items-center transform-gpu ease-in-out duration-500 ${
            pathName?.includes("/dashboard/settings") &&
            "bg-primary bg-opacity-35"
          }`}
          onClick={() => {
            if (!pathName?.includes("/dashboard/settings")) {
              router.push("/dashboard/settings");
            }
          }}
        >
          <Image
            src={
              pathName?.includes("/dashboard/settings")
                ? "/icons/settings-blue.png"
                : "/icons/settings.png"
            }
            alt="icon"
            height={15}
            width={15}
          />
          <p
            className={`text-xs transform-gpu ease-in-out duration-500 ${
              pathName?.includes("/dashboard/settings")
                ? "text-primary"
                : "text-gray-400"
            }`}
          >
            Settings
          </p>
        </button>
        <button
          className="h-10 pl-3 rounded flex flex-row gap-3 items-center"
          onClick={handleLogout}
        >
          <Image src={"/icons/logout.png"} alt="icon" height={15} width={15} />
          <p className="text-xs text-gray-400">Log Out</p>
        </button>
      </div>
    </div>
  );
}
