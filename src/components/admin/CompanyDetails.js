"use client";
import Image from "next/image";
import { useState } from "react";

export default function CompanyDetails() {
  const data = [
    {
      CustomerName: "Joseph",
      CompanyName: "Allen",
      noOfEmployees: 20,
      Country: "USA",
      phone: 123123,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const indexOfLastItem = rowsPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginated_data = data?.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <main className="p-20 w-full min-h-screen">
      <div className="w-[100%] h-max mb-20 flex flex-col">
        <div className="headings flex text-left items-center bg-gray-50 h-10 border-b-[1px] text-md mt-10 justify-evenly">
          <p className="w-[10%]"> CustomerName</p>
          <p className="w-[10%]"> CompanyName</p>
          <p className="w-[10%]"> noOfEmployees</p>
          <p className="w-[10%]"> Country</p>
          <p className="w-[10%]"> phone</p>
          <p className="w-[10%]"> Action</p>
        </div>
        {paginated_data?.map((item, index) => (
          <div
            key={index}
            className="data flex text-left items-center border-b-[1px] h-20 text-md mt-10 justify-evenly"
          >
            <p className="w-[10%]"> {item?.CustomerName}</p>
            <p className="w-[10%]"> {item?.CompanyName}</p>
            <p className="w-[10%]">{item?.noOfEmployees}</p>
            <p className="w-[10%]"> {item?.Country}</p>
            <p className="w-[10%]"> {item?.phone}</p>
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
