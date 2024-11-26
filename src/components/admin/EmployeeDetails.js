"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function EmployeeDetails({ id }) {
  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const indexOfLastItem = rowsPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const paginatedEmployees = employees?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(employees.length / rowsPerPage);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      const token = localStorage?.getItem("plesk_admin_access_token");
      setLoading(true); // Start loading
      try {
        const res = await axios.get(`${API_URL}/api/superadmin/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res);

        const filteredEmployees =
          res?.data?.data?.find((item) => item._id === id)?.employees || [];
        setEmployees(filteredEmployees);
        setUserEmail(res?.data?.data[0]?.email);
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchEmployees();
  }, [id]);

  return (
    <main className="p-4 w-full min-h-screen">
      <h1 className="text-[20px] font-semibold flex items-center gap-2 mt-2">
        HOME <span>-</span>{" "}
        <span className="text-primary">ADMIN DASHBOARD</span>
      </h1>
      <div className="children border-[#E4E7EC] w-full h-max mt-2 mb-10 border-[3px] rounded-lg flex flex-col items-center">
        <div className="headings w-[95%] h-20 mt-6 flex items-center justify-between px-2">
          <h1 className="text-[25px] font-semibold">Employee Details</h1>

          <button
            className="flex items-center bg-[#F6F6F6] px-3 py-2 gap-2"
            onClick={() => router.back()}
          >
            Back
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
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </button>
        </div>
        <div className="w-[95%] h-max pb-10 mb-4 flex flex-col border-[#E4E7EC] border-[3px] rounded-xl">
          {loading ? ( // Show loader during loading state
            <div className="flex flex-col justify-center items-center h-40">
              <InfinitySpin
                visible={true}
                width="200"
                color="#39B6E8"
                ariaLabel="infinity-spin-loading"
              />
              <p className="text-primary text-xl font-bold">Loading....</p>
            </div>
          ) : (
            <>
              <div className="headings px-4 grid grid-cols-6 text-[16px] font-medium bg-gray-50 h-10 border-b text-md mt-10 ">
                <p className=" ">First Name</p>
                <p className=" ">Last Name</p>
                <p className=" ">Email</p>
                <p className=" ">Key</p>
                <p className=" ">Company Email</p>
                <p className=" ">PC Name</p>
              </div>

              {paginatedEmployees?.map((item, index) => (
                <div
                  key={index}
                  className="Data px-4 grid grid-cols-6 border-b h-20 text-[14px] font-normal mt-10  text-[#475467]"
                >
                  <p className=" ">{item?.firstName}</p>
                  <p className=" ">{item?.lastName}</p>
                  <p className=" ">{item?.email}</p>

                  <p className=" ">{item?.key}</p>
                  <p className=" ">{userEmail}</p>
                  <button className="  w-[150px] h-[40px] items-center text-primary flex justify-center rounded-md bg-[#39B6E833]">
                    <Link
                      href={{
                        pathname:
                          "/admin/dashboard/customer-management/Employees/Activity", // Target page
                        query: { id: item._id, key: item.key }, // Pass query params
                      }}
                    >
                      {item.pc_name}
                    </Link>
                  </button>
                </div>
              ))}
            </>
          )}
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
    </main>
  );
}
