"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

export default function SuperAdminDetails() {
  const [data, setData] = useState([]);
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingUsername, setEditingUsername] = useState("");
  const indexOfLastItem = rowsPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(indexOfFirstItem, indexOfLastItem);

  const filteredData = paginatedData.filter((item) =>
    searchQuery
      ? item.username.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  // Get Admin
  const fetchUsers = async () => {
    const token = localStorage.getItem("plesk_admin_access_token");
    try {
      const response = await axios.get(`${API_URL}/api/superadmin/listadmins`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data.admins);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch users");
    }
  };

  // Add Admin
  const handleAddAdmin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("All Fields Required");
      setModalVisible(false);
      return;
    }

    const token = localStorage.getItem("plesk_admin_access_token");
    const payload = { username, password };

    try {
      const response = await axios.post(
        `${API_URL}/api/superadmin/createadmin`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response?.data?.message || "Admin Created");
      setModalVisible(false);
      await fetchUsers();
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Error Creating Admin");
      setModalVisible(false);
    } finally {
      setUsername("");
      setPassword("");
    }
  };

  // Delete Admin
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this admin?"
    );
    if (!confirmed) {
      return;
    }
    try {
      const token = localStorage.getItem("plesk_admin_access_token");
      const response = await axios.delete(
        `${API_URL}/api/superadmin/deleteadmin/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response?.data?.message || "Admin Deleted");
      await fetchUsers();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error Deleting Admin");
    }
  };

  // Edit Admin
  const handleEdit = async (id) => {
    if (!editingUsername) {
      toast.error("Username is required");
      return;
    }

    const token = localStorage.getItem("plesk_admin_access_token");
    try {
      const response = await axios.put(
        `${API_URL}/api/superadmin/updateadmin/${id}`,
        { username: editingUsername },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response?.data?.message || "Admin Updated");
      await fetchUsers();
      setEditingId(null);
      setEditingUsername("");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error Updating Admin");
    }
  };

  return (
    <main className="p-4 w-full min-h-screen">
      <h1 className="text-xl flex items-center gap-2 font-bold mt-2 ">
        HOME <span>-</span>{" "}
        <span className="text-primary">ADMIN DASHBOARD</span>
      </h1>
      <div className="children border-[#E4E7EC] w-full h-max mb-10 border-[3px] rounded-lg flex flex-col items-center mt-2">
        <div className="headings w-[95%] h-20  mt-6 flex items-center justify-between px-2">
          <h1 className="text-2xl font-bold">Admin Details</h1>
          <div className="h-10 w-60 border rounded-lg flex flex-row items-center gap-2 px-2">
            <MagnifyingGlassIcon className="h-6 w-6 text-black" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            onClick={() => setModalVisible(true)}
            className="h-12 bg-primary rounded-lg flex flex-row items-center gap-2 px-3"
          >
            <PlusCircleIcon className="size-7 text-white" />
            <p className="text-white text-sm font-light">Add New Admin</p>
          </button>
        </div>
        <div className="w-[95%] h-max  flex flex-col mb-6 border-[#E4E7EC] border-[2px] rounded-xl">
          <div className="headings  font-bold flex text-left items-center bg-gray-50 h-10 border-b text-md mt-10 justify-evenly">
            <p className="w-[10%]">UserName</p>
            <p className="w-[10%]">Action</p>
          </div>

          {filteredData.map((item, index) => (
            <div
              key={index}
              className="Data flex text-left items-center border-b h-10 text-md mt-10 justify-evenly"
            >
              {editingId === item._id ? (
                <>
                  <input
                    type="text"
                    value={editingUsername}
                    onChange={(e) => setEditingUsername(e.target.value)}
                    className="w-[10%] border p-1 rounded"
                  />
                  <div className="w-[10%] flex gap-4">
                    <button
                      className="text-primary font-bold"
                      onClick={() => handleEdit(item._id)}
                    >
                      Save
                    </button>
                    <button
                      className="font-bold"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="w-[10%]">{item.username}</p>
                  <div className="w-[10%] flex gap-4">
                    <button
                      className="bg-[#39B6E833] px-1 py-1 rounded-md"
                      onClick={() => {
                        setEditingId(item._id);
                        setEditingUsername(item.username);
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
                      className="bg-[#39B6E833] px-1 py-1 rounded-md"
                      onClick={() => handleDelete(item._id)}
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
                </>
              )}
            </div>
          ))}
          <div className="buttons w-full flex items-center gap-4 justify-center mt-10 text-[#475467]">
            <button
              className="p-2 flex items-center gap-2"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 text-[#475467]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className="p-2 "
              >
                {index + 1}
              </button>
            ))}
            <button
              className="p-2  flex items-center gap-2"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className="w-full min-h-screen bg-black/20 inset-0 fixed flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-white rounded-xl flex items-center flex-col justify-center gap-10">
            <h1 className="text-2xl font-bold">Add A New Admin</h1>
            <input
              type="text"
              placeholder="Username"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex flex-row gap-4">
              <button
                onClick={handleAddAdmin}
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
