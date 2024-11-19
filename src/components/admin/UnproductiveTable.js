"use client";

import { PlusCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function UnproductiveTable() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [category, setCategory] = useState("");
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState({
    url: "",
    keywords: "",
    category: "",
  });

  const FetchUser = () => {
    if (!token) {
      console.error("Token is missing!");
      return;
    }

    axios
      .get(`${API_BASE_URL}/api/superadmin/getunproductiveurl`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res?.data?.data);
        console.log(res?.data);
      })
      .catch((err) => {
        console.error("API Error:", err.response?.data || err.message);
      });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("plesk_admin_access_token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      console.error("No token found in localStorage!");
    }
  }, []);

  useEffect(() => {
    if (token) {
      FetchUser();
    }
  }, [token]);

  const filteredData = data?.filter((item) =>
    category ? item?.category == category : data
  );

  const handleDelete = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this url"
    );
    if (confirmation) {
      axios
        .delete(`${API_BASE_URL}/api/superadmin/delete/unproductiveurl/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          toast.success("Url Deleted");
          FetchUser();
        })
        .catch(() => {
          toast.warn("Try Again");
        });
    }
  };

  const handleAdd = async () => {
    if (!items) {
      toast.error("All Items Required");
    }
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/superadmin/unproductiveurl`,
        items,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      toast.success("Url Added");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Try Again");
    }
    setItems({
      category: "",
      keywords: "",
      url: "",
    });
    setModalVisible(false);
  };

  return (
    <>
      <div className="headings w-[95%] h-20 mt-6 flex items-center justify-between px-2">
        <h1 className="text-[25px] font-semibold ">Unproductive Urls</h1>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="px-6 py-3 bg-[#F6F6F6] flex items-center justify-center gap-2 appearance-auto outline-none"
        >
          <option value="">Select Category</option>
          {Array.from(new Set(data?.map((item) => item?.category))).map(
            (uniqueCategory) => (
              <option key={uniqueCategory} value={uniqueCategory}>
                {uniqueCategory}
              </option>
            )
          )}
        </select>
        <button
          onClick={() => {
            setModalVisible((prev) => !prev);
          }}
          className="h-12 bg-primary rounded-lg flex flex-row items-center gap-2 px-3"
        >
          <PlusCircleIcon className="size-7 text-white" />
          <p className="text-white text-sm font-light">Add New Url</p>
        </button>
      </div>

      <div className="w-[95%] h-[600px] overflow-y-scroll pb-10 mb-4 flex flex-col border-[#E4E7EC] border-[2px] rounded-xl ">
        <div className="headings flex text-left items-center text-[16px] font-medium bg-gray-50 h-10 border-b text-md mt-10 justify-evenly">
          <p className="w-[40%] break-words">URL</p>
          <p className="w-[30%] break-words">KEYWORDS</p>
          <p className="w-[10%] break-words">ACTION</p>
        </div>
        {filteredData.length > 0 ? (
          filteredData?.map((item, index) => (
            <div
              key={index}
              className="data flex text-left items-center border-b-[1px] h-24 text-[16px] font-ss mt-10 justify-evenly text-[#475467]"
            >
              <p className="w-[40%] break-words flex items-center gap-2 ">
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
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                {item?.url}
              </p>
              <p className="w-[30%] break-words flex items-center gap-2 ">
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
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                  />
                </svg>

                {Array.isArray(item?.keywords) ? item.keywords.join(", ") : ""}
              </p>

              <p className="w-[10%] break-words">
                {" "}
                <button
                  onClick={() => {
                    handleDelete(item?._id);
                  }}
                  className="bg-[#39B6E833] px-1 py-1 rounded-md "
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
              </p>
            </div>
          ))
        ) : (
          <p className="text-center mt-4">No data available</p>
        )}
      </div>

      {modalVisible && (
        <div className="w-full min-h-screen bg-black/20 inset-0 fixed flex items-center justify-center">
          <div className="w-[600px] h-[500px] bg-white rounded-xl flex items-center flex-col justify-center gap-10">
            <h1 className="text-2xl font-bold">Add Unproductive Url</h1>
            <input
              type="text"
              placeholder="Url"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={items.url}
              onChange={(e) => {
                setItems((items) => ({
                  ...items,
                  url: e.target.value,
                }));
              }}
            />
            <input
              type="text"
              placeholder="Keywords"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={items.keywords}
              onChange={(e) => {
                setItems((items) => ({
                  ...items,
                  keywords: e.target.value,
                }));
              }}
            />
            <input
              type="text"
              placeholder="Category"
              className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              value={items.category}
              onChange={(e) => {
                setItems((items) => ({
                  ...items,
                  category: e.target.value,
                }));
              }}
            />

            <div className="flex flex-row gap-4">
              <button
                onClick={handleAdd}
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
    </>
  );
}
