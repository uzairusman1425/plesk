"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EmployeeDetails({ id }) {
  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState("");
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

  useEffect(() => {
    const fetchEmployees = async () => {
      const token = localStorage?.getItem("plesk_admin_access_token");
      try {
        const res = await axios.get(`${API_URL}/api/superadmin/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const filteredEmployees =
          res.data.data.find((item) => item._id === id)?.employees || [];
        setEmployees(filteredEmployees);
        console.log(filteredEmployees);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, [id]);
  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const Filtered_Department = paginatedEmployees.filter((item) =>
    department
      ? item.professional_details.department === department
      : paginatedEmployees
  );

  return (
    <main className="p-20 w-full min-h-screen">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-semibold">Employee Details </h1>
        <button onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </button>
        <select onChange={handleDepartmentChange}>
          <option value="">Select Department</option>
          {employees?.map((employee) => (
            <option
              key={employee._id}
              value={employee.professional_details.department}
            >
              {employee.professional_details.department}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full h-max mb-20 flex flex-col">
        <div className="headings flex text-left items-center bg-gray-50 h-10 border-b text-md mt-10 justify-evenly">
          <p className="w-[10%]">First Name</p>
          <p className="w-[10%]">Phone</p>
          <p className="w-[10%]">Email</p>
          <p className="w-[10%]">DOB</p>
          <p className="w-[10%]">Gender</p>
          <p className="w-[10%]">Nationality</p>
          <p className="w-[10%]">City</p>
          <p className="w-[10%]">State</p>
          <p className="w-[10%]">PC Name</p>
          <p className="w-[10%]">User Email</p>
        </div>

        {Filtered_Department?.map((item, index) => (
          <div
            key={index}
            className="Data flex text-left items-center border-b h-20 text-md mt-10 justify-evenly"
          >
            <p className="w-[10%]">{item.firstName}</p>
            <p className="w-[10%]">{item.phone}</p>
            <p className="w-[10%]">{item.email}</p>
            <p className="w-[10%]">{item.dob}</p>
            <p className="w-[10%]">{item.gender}</p>
            <p className="w-[10%]">{item.nationality}</p>
            <p className="w-[10%]">{item.city}</p>
            <p className="w-[10%]">{item.state}</p>
            <p className="w-[10%]">{item.pc_name}</p>
            <p className="w-[10%]">{item.userEmail}</p>
          </div>
        ))}

        <div className="buttons w-full flex items-center gap-4 justify-center mt-10">
          <button
            className="p-2 border"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
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
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
