"use client";
import { useState } from "react";

export default function EmployeeDetails() {
  const data = [
    {
      firstName: "Joseph",
      lastName: "Allen",
      phone: 12123123,
      email: "shah@gmail.com",
      dob: "12-09-2032",
      maritalStatus: "single",
      gender: "male",
      nationality: "UK",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHAH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joseph",
      lastName: "Allen",
      phone: 12123123,
      email: "shah@gmail.com",
      dob: "12-09-2032",
      maritalStatus: "single",
      gender: "male",
      nationality: "UK",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHAH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joseph",
      lastName: "Allen",
      phone: 12123123,
      email: "shah@gmail.com",
      dob: "12-09-2032",
      maritalStatus: "single",
      gender: "male",
      nationality: "UK",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHAH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joseph",
      lastName: "Allen",
      phone: 12123123,
      email: "shah@gil.com",
      dob: "12-09-2032",
      maritalStatus: "single",
      gender: "male",
      nationality: "U",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHAH@GMAL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joseph",
      lastName: "Allen",
      phone: 12123123,
      email: "shah@mail.com",
      dob: "12-09-2032",
      maritalStatus: "sigle",
      gender: "male",
      nationality: "UK",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
    },
    {
      firstName: "Joeph",
      lastName: "Alln",
      phone: 1212123,
      email: "shahgmail.com",
      dob: "12-09-032",
      maritalStatus: "sinle",
      gender: "male",
      nationality: "K",
      address: "uk",
      city: "UK",
      state: "uk",
      zipCode: 123123,
      pc_name: "DESKTOP-46GD7TP",
      userEmail: "SHH@GMAIL.COM",
      professional_details: "professional details",
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
      <h1 className="text-3xl font-semibold">Employee Details</h1>
      <div className="w-[100%] h-max mb-20 flex flex-col">
        <div className="headings flex text-left items-center bg-gray-50 h-10 border-b-[1px] text-md mt-10 justify-evenly">
          <p className="w-[6%]"> firstName</p>
          <p className="w-[6%]"> LastName</p>
          <p className="w-[6%]"> phone</p>
          <p className="w-[6%]"> email</p>
          <p className="w-[6%]"> dob</p>
          <p className="w-[6%]"> maritalStatus</p>
          <p className="w-[6%]"> gender</p>
          <p className="w-[6%]"> nationality</p>
          <p className="w-[6%]"> address</p>
          <p className="w-[6%]"> city</p>
          <p className="w-[6%]"> state</p>
          <p className="w-[6%]"> zipCode</p>
          <p className="w-[6%]"> pc_name</p>
          <p className="w-[6%]"> userEmail</p>
          <p className="w-[6%]"> professional details</p>
        </div>
        {paginated_data?.map((item, index) => (
          <div
            key={index}
            className="data flex text-left items-center border-b-[1px] h-20 text-md mt-10 justify-evenly"
          >
            <p className="w-[6%]"> {item?.firstName}</p>
            <p className="w-[6%]"> {item?.lastName}</p>
            <p className="w-[6%]">{item?.phone}</p>
            <p className="w-[6%]"> {item?.email}</p>
            <p className="w-[6%]"> {item?.dob}</p>
            <p className="w-[6%]"> {item?.maritalStatus}</p>
            <p className="w-[6%]"> {item?.gender}</p>
            <p className="w-[6%]"> {item?.nationality}</p>
            <p className="w-[6%]"> {item?.address}</p>
            <p className="w-[6%]"> {item?.city}</p>
            <p className="w-[6%]"> {item?.state}</p>
            <p className="w-[6%]"> {item?.zipCode}</p>
            <p className="w-[6%]"> {item?.pc_name}</p>
            <p className="w-[6%]"> {item?.userEmail}</p>
            <p className="w-[6%]"> {item?.professional_details}</p>
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
