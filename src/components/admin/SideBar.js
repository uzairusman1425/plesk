"use client";
import { useUser } from "@/context/userContext";
import axios from "axios";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SideBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [userList, setUserList] = useState([]);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { setUser } = useUser();
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    fetchUsers();
    setSelectedUser({
      firstName: localStorage.getItem("fname") || "",
      lastName: localStorage.getItem("lname") || "",
      id: localStorage.getItem("userId") || "",
    });
  }, []);

  const fetchUsers = () => {
    const token = localStorage.getItem("plesk_admin_access_token");
    axios
      .get(`${API_BASE_URL}/api/superadmin/users`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUserList(response?.data?.data || []))
      .catch((error) => console.log(error));
  };

  const handleUserSelect = (user) => {
    setUser(user._id);
    setSelectedUser(user);
    setDropdownVisible(false);
    localStorage.setItem("fname", user.firstName);
    localStorage.setItem("lname", user.lastName);
    localStorage.setItem("userId", user._id);
  };

  return (
    <div className="h-screen w-[15%] flex flex-col gap-10 pl-5 pt-10 items-center">
      <Image src="/images/logo.png" alt="Logo" height={150} width={150} />

      <div className="flex flex-col gap-3 relative items-center justify-between w-full h-full">
        {/* Customer Management Section */}
        <div className="w-full">
          <div
            className={`h-12 rounded cursor-pointer flex items-center gap-3 justify-center transition duration-500 ${
              pathname === "/admin/dashboard/customer-management"
                ? "bg-primary bg-opacity-35"
                : "bg-white"
            }`}
            onClick={() => router.push("/admin/dashboard/customer-management")}
          >
            <Image
              src="/icons/customer-management-blue.png"
              alt="icon"
              height={15}
              width={15}
            />
            <p
              className={`text-md ${
                pathname === "/admin/dashboard/customer-management"
                  ? "text-primary"
                  : "text-gray-500"
              }`}
            >
              Customer Management
            </p>
            <button onClick={() => setDropdownVisible(!dropdownVisible)}>
              {dropdownVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Dropdown List */}
          {dropdownVisible && (
            <div className="transition-all duration-500 mt-3 pt-5 absolute top-14 w-full overflow-y-auto h-[600px] bg-white shadow-lg rounded-lg flex flex-col items-start">
              {userList.length === 0 ? (
                <p className="text-gray-500 px-4">Loading users...</p>
              ) : (
                userList.map((user) => (
                  <div
                    key={user._id}
                    className="flex items-center gap-4 px-4 py-2 cursor-pointer"
                    onClick={() => handleUserSelect(user)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`size-6 ${
                        user._id === selectedUser.id
                          ? "text-primary"
                          : "text-[#CBCBCB]"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <span
                      className={`${
                        user._id === selectedUser.id
                          ? "text-primary"
                          : "text-[#CBCBCB]"
                      } font-semibold`}
                    >
                      {user.firstName} {user.lastName}
                    </span>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Selected User Display */}
          {!dropdownVisible && selectedUser.firstName && (
            <div className="flex items-center gap-3 justify-center mt-4 text-primary">
              <Image
                src="/icons/customer-management-blue.png"
                alt="icon"
                height={15}
                width={15}
              />
              <p className="text-md font-semibold">
                {selectedUser.firstName} {selectedUser.lastName}
              </p>
            </div>
          )}
        </div>

        {/* Other Sidebar Links */}
        <div className="w-full flex items-center justify-center flex-col mb-24 gap-2">
          <button
            className={`h-12 w-full rounded flex items-center gap-3 justify-center transition duration-500 ${
              pathname === "/admin/dashboard/Super-admin"
                ? "bg-primary bg-opacity-35"
                : "bg-white"
            }`}
            onClick={() => router.push("/admin/dashboard/Super-admin")}
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
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.003-.827c.293-.241.438-.613.43-.991a8.4 8.4 0 0 1 0-.256c.008-.378-.137-.75-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.217.456c.355.133.75.072 1.075-.124a7.7 7.7 0 0 1 .221-.127c.332-.184.582-.496.645-.87l.213-1.281Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p
              className={`text-md ${
                pathname === "/admin/dashboard/Super-admin"
                  ? "text-primary"
                  : "text-gray-500"
              }`}
            >
              Settings
            </p>
          </button>
          <button
            className={`h-12 w-full rounded flex items-center gap-3 justify-center transition duration-500 
             `}
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
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.003-.827c.293-.241.438-.613.43-.991a8.4 8.4 0 0 1 0-.256c.008-.378-.137-.75-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.217.456c.355.133.75.072 1.075-.124a7.7 7.7 0 0 1 .221-.127c.332-.184.582-.496.645-.87l.213-1.281Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p className={`text-md text-[#979797]`}>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
}
