"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import toast from "react-hot-toast";
import { useUser } from "@/context/userContext";

export default function CompanyDetails() {
  const [data, setData] = useState([]);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    organization: "",
    password: "",
    country: "",
  });
  const { userId } = useUser();
  const [token, setToken] = useState("");
  const [edit, setEdit] = useState(false);

  // Fetch users whenever the component mounts
  useEffect(() => {
    const token = localStorage.getItem("plesk_admin_access_token");
    setToken(token);
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/superadmin/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        setData(response?.data?.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const filtered_data = data?.filter((item) => item?._id === userId);

  const handleAddCompany = async () => {
    if (!items) {
      toast.error("All Items Required");
    }
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/superadmin/createuser`,
        items,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      toast.success("Company Added");
      window.reload();
    } catch (error) {
      console.log(error);
    }
    setItems({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      organization: "",
      password: "",
      country: "",
    });
    setModalVisible(false);
  };
  return (
    <main className="p-20 w-full min-h-screen">
      <div className="w-full flex flex-row items-center justify-between">
        <button
          onClick={() => {
            setModalVisible((prev) => !prev);
          }}
          className="h-12 bg-primary rounded-lg flex flex-row items-center gap-2 px-3"
        >
          <PlusCircleIcon className="size-7 text-white" />
          <p className="text-white text-sm font-light">Add New Company</p>
        </button>
      </div>
      <div className="w-[100%] h-max mb-20 flex flex-col">
        <div className="headings flex text-left items-center bg-gray-50 h-10 border-b-[1px] text-md mt-10 justify-evenly">
          <p className="w-[10%]">Customer Name</p>
          <p className="w-[10%]">Company Name</p>
          <p className="w-[10%]">No. of Employees</p>
          <p className="w-[10%]">Country</p>
          <p className="w-[10%]">Phone</p>
          <p className="w-[10%]">Action</p>
        </div>
        {filtered_data?.length > 0 ? (
          filtered_data.map((item, index) => (
            <div
              key={index}
              className="data flex text-left items-center border-b-[1px] h-20 text-md mt-10 justify-evenly"
            >
              <p className="w-[10%]">{item?.firstName}</p>
              <p className="w-[10%]">{item?.organization}</p>
              <div className="w-[10%]">
                {item?.employees?.length > 0 ? (
                  <Link
                    href={`/admin/dashboard/customer-management/Employees?id=${item?._id}`}
                  >
                    {item?.employees.length}
                  </Link>
                ) : (
                  <span className="text-gray-500">0</span>
                )}
              </div>
              <p className="w-[10%]">{item?.country}</p>
              <p className="w-[10%]">{item?.phoneNumber}</p>
              <div className="w-[10%] flex gap-4">
                <button>
                  <Image
                    src={"/icons/edit.png"}
                    alt="edit"
                    height={17.5}
                    width={17.5}
                  />
                </button>
                <button>
                  <Image
                    src={"/icons/delete.png"}
                    alt="delete"
                    height={17.5}
                    width={17.5}
                  />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="data flex text-left items-center border-b-[1px] h-20 text-md mt-10 justify-evenly">
            <p className="w-[100%] text-gray-500">
              No data available for the selected user.
            </p>
          </div>
        )}
      </div>
      {modalVisible && (
        <div className="w-full min-h-screen bg-black/20 inset-0 fixed flex items-center justify-center">
          <div className="w-[600px] h-[900px] bg-white rounded-xl flex items-center flex-col justify-center gap-10">
            <h1 className="text-2xl font-bold">Add A New Company</h1>
            <input
              type="text"
              placeholder="First Name"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={items.firstName}
              onChange={(e) => {
                setItems((items) => ({
                  ...items,
                  firstName: e.target.value,
                }));
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={items.lastName}
              onChange={(e) => {
                setItems((items) => ({
                  ...items,
                  lastName: e.target.value,
                }));
              }}
            />
            <input
              type="Email"
              placeholder="Email"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={items.email}
              onChange={(e) => {
                setItems((items) => ({
                  ...items,
                  email: e.target.value,
                }));
              }}
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={items.phoneNumber}
              onChange={(e) => {
                setItems((items) => ({
                  ...items,
                  phoneNumber: e.target.value,
                }));
              }}
            />
            <input
              type="text"
              placeholder="Organization"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={items.organization}
              onChange={(e) => {
                setItems((items) => ({
                  ...items,
                  organization: e.target.value,
                }));
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={items.password}
              onChange={(e) => {
                setItems((items) => ({
                  ...items,
                  password: e.target.value,
                }));
              }}
            />
            <input
              type="text"
              placeholder="Country"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={items.country}
              onChange={(e) => {
                setItems((items) => ({
                  ...items,
                  country: e.target.value,
                }));
              }}
            />
            <div className="flex flex-row gap-4">
              <button
                onClick={handleAddCompany}
                className="px-6 py-2 bg-primary text-white font-bold rounded-md"
              >
                Save
              </button>
              <button
                onClick={() => setModalVisible(false)}
                className="px-6 py-2 border-2 text-primary rounded-md border-primary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
