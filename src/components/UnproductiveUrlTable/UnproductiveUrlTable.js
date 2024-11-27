"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import {
  MagnifyingGlassIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

export default function UnproductiveUrlTable() {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(0);
  const [paginationStart, setPaginationStart] = useState(0);
  const [paginationEnd, setPaginationEnd] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState({
    url: "",
    category: "",
    keywords: "",
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("plesk_access_token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      console.error("No token found in localStorage");
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/users/unproductiveurl`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Fetched Data:", response.data);
      setData(response?.data?.urls);
    } catch (error) {
      if (error.response) {
        console.error("API Response Error:", error.response.data);
      } else if (error.request) {
        console.error("No Response Received:", error.request);
      } else {
        console.error("Request Setup Error:", error.message);
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  const searched_data = data?.filter((item) =>
    item?.category
      ? item?.category.toLowerCase().includes(searchQuery.toLowerCase())
      : data
  );

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };
  const paginated_data = chunkArray(searched_data, itemsPerPage);

  useEffect(() => {
    if (pageNumber >= paginated_data?.length && paginated_data?.length > 0) {
      setPageNumber(paginated_data?.length - 1);
    }
    if (pageNumber === 0) {
      setPaginationStart(pageNumber);
      setPaginationEnd(pageNumber + 4);
    } else if (pageNumber === 1) {
      setPaginationStart(pageNumber - 1);
      setPaginationEnd(pageNumber + 3);
    } else if (pageNumber === paginated_data?.length - 1) {
      setPaginationStart(pageNumber - 4);
      setPaginationEnd(pageNumber);
    } else if (pageNumber === paginated_data?.length - 2) {
      setPaginationStart(pageNumber - 3);
      setPaginationEnd(pageNumber + 1);
    } else {
      setPaginationStart(pageNumber - 2);
      setPaginationEnd(pageNumber + 2);
    }
  }, [pageNumber, paginated_data?.length]);

  async function handleDelete(id) {
    try {
      const confirmation = window.confirm(
        "Are You Sure You Want To Delete This Url"
      );
      if (confirmation) {
        const response = axios.delete(
          `${API_URL}/api/users/delete/unproductiveurl/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(response?.data?.message || "Url Deleted Successfully");
        fetchData();
      }
    } catch (error) {
      toast.error("Cannot Delete Try Again");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (token) {
        const response = await axios.post(
          `${API_URL}/api/users/create/unproductiveurl`,
          items,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Use the correct response structure
        if (response?.status === 200) {
          toast.success(response?.data?.message || "URL created successfully!");
          setItems({
            url: "",
            category: "",
            keywords: "",
          });
          setModalVisible(false);
          fetchData();
        }
      }
    } catch (error) {
      // Handle the error properly
      const errorMessage =
        error?.response?.data?.message || "An error occurred!";
      toast.error(errorMessage);
      console.error("Error:", error);
    }
  }

  return (
    <div className="size-[95%] border border-gray-400 rounded-xl p-5 flex flex-col justify-between">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="h-10 w-60 border rounded-lg flex flex-row items-center gap-2 px-2">
          <MagnifyingGlassIcon className="h-6 w-6 text-black" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Search By Category"
            className="w-full outline-none"
          />
        </div>
        <button
          onClick={() => {
            setModalVisible(true);
          }}
          className="h-12 bg-primary rounded-lg flex flex-row items-center gap-2 px-3"
        >
          <PlusCircleIcon className="size-7 text-white" />
          <p className="text-white text-sm font-light">Add New Url</p>
        </button>
      </div>
      <div className="h-[80%] w-full flex flex-col gap-8">
        <div className="grid grid-cols-4 text-md font-semibold">
          <p>Url</p>
          <p>Category</p>

          <p>Keywords</p>

          <div className="w-full text-center">
            <p>Action</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-7 overflow-y-auto scrollbar-none">
          {paginated_data[pageNumber]?.map((item, key) => {
            return (
              <div className="grid grid-cols-4 text-xs" key={key}>
                <p className="truncate pr-5">{item?.url}</p>
                <p className="truncate pr-5">{item?.category}</p>

                <div>
                  <p className="p-1 rounded bg-secondary bg-opacity-50 font-light size-fit">
                    {item?.keywords?.join(",")}
                  </p>
                </div>

                <div className="w-full flex flex-row items-center justify-center gap-5">
                  <button
                    onClick={() => {
                      handleDelete(item?._id);
                    }}
                  >
                    <Image
                      src={"/icons/delete.png"}
                      alt="delete"
                      height={17.5}
                      width={17.5}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-5">
          <p className="text-xs">Showing</p>
          <div className="h-10 w-14 border rounded-lg flex flex-row items-center justify-between px-2">
            <p className="text-xs">{itemsPerPage}</p>
            <div className="flex flex-col items-center justify-center gap-1">
              <button
                onClick={() => {
                  if (itemsPerPage < 10) {
                    setItemsPerPage(itemsPerPage + 1);
                  }
                }}
              >
                <ChevronUpIcon
                  className={`size-3 transform-gpu ease-in-out duration-500 ${
                    itemsPerPage < 10 ? "text-black" : "text-gray-300"
                  }`}
                />
              </button>
              <button
                onClick={() => {
                  if (itemsPerPage > 5) {
                    setItemsPerPage(itemsPerPage - 1);
                  }
                }}
              >
                <ChevronDownIcon
                  className={`size-3 transform-gpu ease-in-out duration-500 ${
                    itemsPerPage > 5 ? "text-black" : "text-gray-300"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        <p className="text-xs">
          Showing{" "}
          {paginated_data?.length > 0 ? pageNumber * itemsPerPage + 1 : 0} to{" "}
          {paginated_data?.length > 0
            ? (pageNumber + 1) * itemsPerPage -
              (itemsPerPage - paginated_data[pageNumber]?.length)
            : 0}{" "}
          out of {data?.length} records
        </p>
        <div className="flex flex-row items-center gap-3">
          <button
            onClick={() => {
              if (pageNumber > 0) {
                setPageNumber(pageNumber - 1);
              }
            }}
          >
            <ChevronLeftIcon
              className={`size-4 transform-gpu ease-in-out duration-500 ${
                pageNumber > 0 ? "text-black" : "text-gray-300"
              }`}
            />
          </button>
          <div className="flex flex-row items-center">
            {paginated_data?.map((_, key) => {
              if (key >= paginationStart && key <= paginationEnd) {
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setPageNumber(key);
                    }}
                    className={`size-7 transform-gpu ease-in-out duration-500 ${
                      pageNumber === key &&
                      "border border-primary text-primary rounded-lg"
                    } text-xs flex items-center justify-center`}
                  >
                    {key + 1}
                  </button>
                );
              }
            })}
          </div>
          <button
            onClick={() => {
              if (pageNumber < paginated_data?.length - 1) {
                setPageNumber(pageNumber + 1);
              }
            }}
          >
            <ChevronRightIcon
              className={`size-4 transform-gpu ease-in-out duration-500 ${
                pageNumber < paginated_data?.length - 1
                  ? "text-black"
                  : "text-gray-300"
              }`}
            />
          </button>
        </div>
      </div>
      {modalVisible && (
        <div className="modal-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="w-[80%] md:w-1/3 bg-white rounded-lg p-4">
            <h2 className="text-lg font-bold">Add New Url</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4 ">
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Keywords:</p>
                <input
                  value={items.keywords}
                  onChange={(e) => {
                    setItems({ ...items, keywords: e.target.value });
                  }}
                  className="text-sm w-[70%] border border-gray-400 h-8 rounded-3xl "
                  type="text"
                />
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Category:</p>
                <input
                  className="text-sm w-[70%] border border-gray-400 h-8 rounded-3xl "
                  type="text"
                  value={items.category}
                  onChange={(e) => {
                    setItems({ ...items, category: e.target.value });
                  }}
                />
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-sm font-semibold">Url:</p>
                <input
                  className="text-sm w-[70%] border border-gray-400 h-8 rounded-3xl "
                  type="text"
                  value={items.url}
                  onChange={(e) => {
                    setItems({ ...items, url: e.target.value });
                  }}
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-primary text-white rounded"
              >
                Add
              </button>
              <button
                type="button"
                className="mt-4 px-4 py-2 bg-white font-bold text-primary border border-primary  rounded"
                onClick={() => setModalVisible(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
