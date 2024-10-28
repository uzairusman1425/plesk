"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SuperAdminDetails() {
  const [Data, setData] = useState([]);
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const indexOfLastItem = rowsPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const totalPages = Math.ceil(Data?.length / rowsPerPage);
  const paginated_Data = Data?.slice(indexOfFirstItem, indexOfLastItem);
  const search_Data = paginated_Data.filter((item) =>
    searchQuery
      ? item?.firstName
          ?.toLocaleLowerCase()

          .includes(searchQuery?.toLocaleLowerCase())
      : paginated_Data
  );
  console.log(search_Data);

  useEffect(() => {
    (async function GetUsers() {
      const token = localStorage?.getItem("plesk_admin_access_token");
      axios
        .get(`${API_URL}/api/superadmin/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        .then((res) => {
          console.log(res);
          setData(res?.data?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

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
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </div>
        <button className="h-12 bg-primary rounded-lg flex flex-row items-center gap-2 px-3">
          <PlusCircleIcon className="size-7 text-white" />
          <p className="text-white text-sm font-light">Add New Admin</p>
        </button>
      </div>
      <div className="w-[100%] h-max mb-20 flex flex-col">
        <div className="headings flex text-left items-center bg-gray-50 h-10 border-b-[1px] text-md mt-10 justify-evenly">
          <p className="w-[10%]"> CustomerName</p>
          <p className="w-[10%]"> CompanyName</p>
          <p className="w-[10%]"> noOfEmployees</p>
          <p className="w-[10%]"> Country</p>
          <p className="w-[10%]"> phone</p>
          <p className="w-[10%]"> Action</p>
        </div>
        {search_Data?.map((item, index) => (
          <div
            key={index}
            className="Data flex text-left items-center border-b-[1px] h-20 text-md mt-10 justify-evenly"
          >
            <p className="w-[10%]"> {item?.firstName}</p>
            <p className="w-[10%]"> {item?.organization}</p>
            <div className="w-[10%]">
              {item?.employees?.length > 0 ? (
                <Link
                  href={`/admin/dashboard/customer-management/Employees?id=${item?._id}`}
                >
                  {item?.employees.length}
                </Link>
              ) : (
                <span className="text-gray-500">0</span> // Optional message for no employees
              )}
            </div>
            <p className="w-[10%]"> {item?.country}</p>
            <p className="w-[10%]"> {item?.phoneNumber}</p>
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
                  alt="edit"
                  height={17.5}
                  width={17.5}
                />
              </button>
            </div>
          </div>
        ))}
        <div className="buttons w-full flex items-center gap-4 justify-center mt-10">
          <button
            className="p-2 border-[1px]"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className="p-2 border-[1px]"
            >
              {index + 1}
            </button>
          ))}
          <button
            className="p-2 border-[1px]"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
