"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddEmployee() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const router = useRouter();

  const [accessToken, setAccessToken] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pcName, setPcName] = useState("");
  const [email, setEmail] = useState("");

  const handleCancel = () => {
    router.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      firstName,
      lastName,
      pc_name: pcName,
      email,
    };

    axios
      .post(`${API_BASE_URL}/api/employee/add`, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        toast.success("Employee added successfully!");
        router.back();
      })
      .catch((err) => {
        toast.error(err?.data?.data || "Something went wrong!");
      });
  };

  useEffect(() => {
    setAccessToken(localStorage.getItem("plesk_access_token"));
  }, []);

  return (
    <div className="h-full flex-1 flex flex-col px-20">
      <div className="w-full border-b flex flex-row items-center gap-5">
        <div
          className={`h-16 flex flex-row gap-3 items-center px-1 
           
               "border-b-4 border-primary"
             
          `}
        >
          <Image
            src={"/icons/personal-information-blue.png"}
            alt="personal-information"
            height={30}
            width={30}
          />
          <p className={"font-semibold text-primary"}>Personal Information</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center gap-5 mt-10"
      >
        <div className="w-full grid grid-cols-2 gap-10">
          <input
            required
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            className="h-16 rounded-xl border-2 border-gray-300 px-5"
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            className="h-16 rounded-xl border-2 border-gray-300 px-5"
          />
        </div>

        <div className="w-full grid grid-cols-2 gap-10">
          <input
            type="text"
            required
            placeholder="PC Name"
            value={pcName}
            onChange={(e) => {
              setPcName(e.target.value);
            }}
            className="h-16 rounded-xl border-2 border-gray-300 px-5"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="h-16 rounded-xl border-2 border-gray-300 px-5"
          />
        </div>
        <div className="flex flex-row gap-5 items-center justify-end w-full mt-10">
          <button
            type="submit"
            className="h-14 w-24 rounded-xl flex items-center justify-center border"
          >
            Add
          </button>
          <button
            type="button"
            className="h-14 w-24 rounded-xl flex items-center justify-center border"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
