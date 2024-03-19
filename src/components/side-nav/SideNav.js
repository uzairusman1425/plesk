"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { signOut } from "next-auth/react"

export default function SideNav() {

    const router = useRouter()
    const pathName = usePathname()

    const handleLogout = async () => {
        const res = await signOut({redirect: false, callbackUrl: '/' })
        router.push(res?.url)
    }

    return (
        <div className="h-full w-56 flex flex-col gap-10 pl-5 pt-10">
            <Image src={"/images/logo.png"} alt="plesk" height={150} width={150} />
            <div className="flex flex-col gap-3">
                <button 
                    className={`h-10 pl-3 rounded flex flex-row gap-3 items-center ${pathName === "/dashboard" && "bg-primary bg-opacity-35"}`}
                    onClick={() => {
                        if(pathName !== "/dashboard") {
                            router.push("/dashboard")
                        }
                    }}
                >
                    <Image src={pathName === "/dashboard" ? "/icons/dashboard-blue.png" : "/icons/dashboard.png"} alt="icon" height={15} width={15} />
                    <p className={`text-xs ${pathName === "/dashboard" ? "text-primary" : "text-gray-400"}`}>Dashboard</p>
                </button>
                <button 
                    className={`h-10 pl-3 rounded flex flex-row gap-3 items-center ${pathName === "/dashboard/customer-management" && "bg-primary bg-opacity-35"}`}
                    onClick={() => {
                        if(pathName !== "/dashboard/customer-management") {
                            router.push("/dashboard/customer-management")
                        }
                    }}
                >
                    <Image src={pathName === "/dashboard/customer-management" ? "/icons/customer-management-blue.png" : "/icons/customer-management.png"} alt="icon" height={15} width={15} />
                    <p className={`text-xs ${pathName === "/dashboard/customer-management" ? "text-primary" : "text-gray-400"}`}>Customer Management</p>
                </button>
                <button className={`h-10 pl-3 rounded flex flex-row gap-3 items-center ${pathName === "/dashboard/pc-monitoring" && "bg-primary bg-opacity-35"}`}>
                    <Image src={"/icons/pc-monitoring.png"} alt="icon" height={15} width={15} />
                    <p className={`text-xs ${pathName === "/dashboard/pc-monitoring" ? "text-primary" : "text-gray-400"}`}>PC Monitoring</p>
                </button>
                <button className={`h-10 pl-3 rounded flex flex-row gap-3 items-center ${pathName === "/dashboard/settings" && "bg-primary bg-opacity-35"}`}>
                    <Image src={"/icons/settings.png"} alt="icon" height={15} width={15} />
                    <p className={`text-xs ${pathName === "/dashboard/settings" ? "text-primary" : "text-gray-400"}`}>Settings</p>
                </button>
                <button className="h-10 pl-3 rounded flex flex-row gap-3 items-center" onClick={handleLogout}>
                    <Image src={"/icons/logout.png"} alt="icon" height={15} width={15} />
                    <p className="text-xs text-gray-400">Log Out</p>
                </button>
            </div>
        </div>
    )
}