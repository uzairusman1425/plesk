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
  const [editItems, SetEditItems] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    organization: "",
    password: "",
  });
  const { userId } = useUser();
  const [token, setToken] = useState("");
  const [edit, setEdit] = useState(false);

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
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Try Again");
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

  const handleEdit = async () => {
    if (
      !editItems.country ||
      !editItems.firstName ||
      !editItems.lastName ||
      !editItems.organization ||
      !editItems.password ||
      !editItems.phoneNumber
    ) {
      toast.error("All Items Required");
    } else {
      try {
        const response = await axios.put(
          `${API_BASE_URL}/api/superadmin/updateuser/${userId}`,
          editItems,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        toast.success("Company Updated");
        window.location.reload();
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "An error Occured");
      }
    }
    SetEditItems({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      organization: "",
      password: "",
      country: "",
    });
    setEdit(false);
  };

  const handleDelete = async (id) => {
    if (!id) {
      toast.error("No User Selected");
    } else {
      try {
        const confirmation = window.confirm(
          "Are you sure you want to delete this user?"
        );
        if (confirmation) {
          const response = await axios.delete(
            `${API_BASE_URL}/api/superadmin/deleteuser/${userId}`,

            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response);
          toast.success("Company Deleted");
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "An error Occured");
      }
    }
  };

  return (
    <main className="p-20 w-full h-full flex flex-col gap-4">
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
      <div className="w-[100%] h-max mb-10 flex flex-col border-[2px] border-[#CBCBCB] rounded-xl">
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
              className="data flex text-left items-center border-b-[1px] h-36 text-md mt-10 justify-evenly text-[#475467]"
            >
              <p className="w-[10%]">{item?.firstName}</p>

              <p className="w-[10%]">{item?.organization}</p>
              <div className="w-[100px] bg-[#39B6E833] rounded h-8">
                {item?.employees?.length > 0 ? (
                  <Link
                    href={`/admin/dashboard/customer-management/Employees?id=${item?._id}`}
                    className=" w-full  flex items-center justify-around px-2"
                  >
                    <div className="w-full flex items-center justify-center text-primary font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      <p className="text-xl"> {item?.employees.length}</p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                ) : (
                  <span className="text-primary flex items-center justify-center">
                    0
                  </span>
                )}
              </div>
              <p className="w-[10%]">{item?.country}</p>
              <p className="w-[10%]">{item?.phoneNumber}</p>
              <div className="w-[10%] flex gap-4">
                <button
                  className="bg-[#39B6E833] px-1 py-1 rounded-md "
                  onClick={() => {
                    setEdit(true);
                  }}
                >
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
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                <button
                  className="bg-[#39B6E833] px-1 py-1 rounded-md "
                  onClick={() => {
                    handleDelete(item?._id);
                  }}
                >
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
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
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
      {edit && (
        <div className="w-full min-h-screen bg-black/20 inset-0 fixed flex items-center justify-center">
          <div className="w-[600px] h-[900px] bg-white rounded-xl flex items-center flex-col justify-center gap-10">
            <h1 className="text-2xl font-bold">Edit Company</h1>
            <input
              type="text"
              placeholder="First Name"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={editItems.firstName}
              onChange={(e) => {
                SetEditItems((items) => ({
                  ...items,
                  firstName: e.target.value,
                }));
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={editItems.lastName}
              onChange={(e) => {
                SetEditItems((items) => ({
                  ...items,
                  lastName: e.target.value,
                }));
              }}
            />

            <input
              type="number"
              placeholder="Phone Number"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={editItems.phoneNumber}
              onChange={(e) => {
                SetEditItems((items) => ({
                  ...items,
                  phoneNumber: e.target.value,
                }));
              }}
            />
            <input
              type="text"
              placeholder="Organization"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={editItems.organization}
              onChange={(e) => {
                SetEditItems((items) => ({
                  ...items,
                  organization: e.target.value,
                }));
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={editItems.password}
              onChange={(e) => {
                SetEditItems((items) => ({
                  ...items,
                  password: e.target.value,
                }));
              }}
            />
            <input
              type="text"
              placeholder="Country"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={editItems.country}
              onChange={(e) => {
                SetEditItems((items) => ({
                  ...items,
                  country: e.target.value,
                }));
              }}
            />
            <div className="flex flex-row gap-4">
              <button
                onClick={handleEdit}
                className="px-6 py-2 bg-primary text-white font-bold rounded-md"
              >
                Save
              </button>
              <button
                onClick={() => setEdit(false)}
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
