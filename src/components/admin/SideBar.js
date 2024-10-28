"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function SideBar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="h-full w-[12%] flex flex-col gap-10 pl-5 pt-10">
      <Image
        src={"/images/logo.png"}
        alt="plesk.png"
        height={150}
        width={150}
      />
      <div className="flex flex-col gap-3">
        <button
          className={`h-12  rounded flex flex-row gap-3 items-center justify-center transform-gpu ease-in-out duration-500 ${
            pathname == "/admin/dashboard/customer-management"
              ? "bg-primary bg-opacity-35"
              : "bg-white"
          } `}
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
            className={`text-md transform-gpu ease-in-out duration-500  ${
              pathname == "/admin/dashboard/customer-management"
                ? "text-primary"
                : "text-gray-500"
            }`}
          >
            Customer Management
          </p>
        </button>
        <button
          className={`h-12  rounded flex flex-row gap-3 items-center justify-center transform-gpu ease-in-out duration-500 ${
            pathname == "/admin/dashboard/Super-admin"
              ? "bg-primary bg-opacity-35"
              : "bg-white"
          } `}
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
            className={`text-md transform-gpu ease-in-out duration-500  ${
              pathname == "/admin/dashboard/Super-admin"
                ? "text-primary"
                : "text-gray-500"
            }`}
          >
            Super-Admin
          </p>
        </button>
      </div>
    </div>
  );
}
