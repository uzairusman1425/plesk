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

  // New state variables for editing
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
    <main className="p-20 w-full min-h-screen">
      <div className="w-full flex flex-row items-center justify-between">
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

      <div className="w-full h-max mb-20 flex flex-col">
        <div className="headings flex text-left items-center bg-gray-50 h-10 border-b text-md mt-10 justify-evenly">
          <p className="w-[10%]">UserName</p>
          <p className="w-[10%]">Action</p>
        </div>

        {filteredData.map((item, index) => (
          <div
            key={index}
            className="Data flex text-left items-center border-b h-20 text-md mt-10 justify-evenly"
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
                  <button onClick={() => handleEdit(item._id)}>save</button>
                  <button onClick={() => setEditingId(null)}>cancel</button>
                </div>
              </>
            ) : (
              <>
                <p className="w-[10%]">{item.username}</p>
                <div className="w-[10%] flex gap-4">
                  <button
                    onClick={() => {
                      setEditingId(item._id);
                      setEditingUsername(item.username);
                    }}
                  >
                    <Image
                      src="/icons/edit.png"
                      alt="edit"
                      height={17.5}
                      width={17.5}
                    />
                  </button>
                  <button onClick={() => handleDelete(item._id)}>
                    <Image
                      src="/icons/delete.png"
                      alt="delete"
                      height={17.5}
                      width={17.5}
                    />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}

        <div className="buttons w-full flex items-center gap-4 justify-center mt-10">
          <button
            className="p-2 border"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className="p-2 border"
            >
              {index + 1}
            </button>
          ))}
          <button
            className="p-2 border"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            Next
          </button>
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
