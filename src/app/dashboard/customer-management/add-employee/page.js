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
  const [selectedTab, setSelectedTab] = useState("personal");
  const [showDOB, setShowDOB] = useState(false);
  const [showJoiningDate, setShowJoiningDate] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [ZIPCode, setZIPCode] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [username, setUsername] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [workingDays, setWorkingDays] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [officeLocation, setOfficeLocation] = useState("");

  const handleNext = async (e) => {
    e.preventDefault();
    if (selectedTab === "personal") {
      setSelectedTab("professional");
    } else {
      const payload = {
        firstName: firstName,
        lastName: lastName,
        phone: phoneNumber,
        email: personalEmail,
        dob: DOB,
        maritalStatus: maritalStatus,
        gender: gender,
        nationality: nationality,
        address: address,
        city: city,
        state: state,
        zipCode: ZIPCode,
        professional_details: {
          id: employeeID,
          userName: username,
          type: employeeType,
          email: employeeEmail,
          department: department,
          designation: designation,
          workingDays: workingDays,
          joiningDate: joiningDate,
          officeLocation: officeLocation,
        },
      };
      if (
        !firstName ||
        !lastName ||
        !phoneNumber ||
        !personalEmail ||
        !DOB ||
        !maritalStatus ||
        !gender ||
        !nationality ||
        !address ||
        !city ||
        !state ||
        !ZIPCode ||
        !employeeID ||
        !username ||
        !employeeType ||
        !employeeEmail ||
        !department ||
        !designation ||
        !workingDays ||
        !joiningDate ||
        !officeLocation
      ) {
        toast.error("All Fields Required");
      }
      await axios
        .post(`${API_BASE_URL}/api/employee/add`, payload, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        ?.then((res) => {
          console.log(res);
          toast.success("Employee Added");
          router?.push("/dashboard/customer-management");
        })
        ?.catch((err) => {
          toast.error(err?.message || "An Error Occurred");
          console.log(err);
        });
    }
  };

  const handleCancel = () => {
    if (selectedTab === "personal") {
      router.back();
    } else {
      setSelectedTab("personal");
    }
  };

  useEffect(() => {
    setShowDOB(false);
    setShowJoiningDate(false);
    setAccessToken(localStorage.getItem("plesk_access_token"));
  }, [selectedTab]);

  return (
    <div className="h-full flex-1 flex flex-col px-20">
      <div className="w-full border-b flex flex-row items-center gap-5">
        <div
          className={`h-16 flex flex-row gap-3 items-center px-1 ${
            selectedTab === "personal"
              ? "border-b-4 border-primary"
              : "border-b-4 border-transparent"
          }`}
        >
          <Image
            src={
              selectedTab === "personal"
                ? "/icons/personal-information-blue.png"
                : "/icons/personal-information.png"
            }
            alt="personal-information"
            height={30}
            width={30}
          />
          <p
            className={
              selectedTab === "personal" ? "font-semibold text-primary" : ""
            }
          >
            Personal Information
          </p>
        </div>
        <div
          className={`h-16 flex flex-row gap-3 items-center px-1 ${
            selectedTab === "professional"
              ? "border-b-4 border-primary"
              : "border-b-4 border-transparent"
          }`}
        >
          <Image
            src={
              selectedTab === "professional"
                ? "/icons/professional-information-blue.png"
                : "/icons/professional-information.png"
            }
            alt="professional-information"
            height={25}
            width={25}
          />
          <p
            className={
              selectedTab === "professional" ? "font-semibold text-primary" : ""
            }
          >
            Professional Information
          </p>
        </div>
      </div>
      {selectedTab === "personal" ? (
        <div className="w-full flex flex-col items-center gap-5 mt-10">
          <div className="w-full grid grid-cols-2 gap-10">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
            <input
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
              placeholder="Mobile Number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={personalEmail}
              onChange={(e) => {
                setPersonalEmail(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-10">
            {showDOB ? (
              <input
                type="date"
                value={DOB}
                onChange={(e) => {
                  setDOB(e.target.value);
                }}
                className="h-16 rounded-xl border-2 border-gray-300 px-5"
              />
            ) : (
              <button
                className="h-16 rounded-xl border-2 border-gray-300 px-5 flex items-center"
                onClick={() => {
                  setShowDOB(true);
                }}
              >
                <p className="text-gray-400">Date of Birth</p>
              </button>
            )}
            <input
              type="text"
              placeholder="Marital Status"
              value={maritalStatus}
              onChange={(e) => {
                setMaritalStatus(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-10">
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
            <input
              type="text"
              placeholder="Nationality"
              value={nationality}
              onChange={(e) => {
                setNationality(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="h-16 w-full rounded-xl border-2 border-gray-300 px-5"
          />
          <div className="w-full grid grid-cols-3 gap-10">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              value={ZIPCode}
              onChange={(e) => {
                setZIPCode(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center gap-5 mt-10">
          <div className="w-full grid grid-cols-2 gap-10">
            <input
              type="text"
              placeholder="Employee ID"
              value={employeeID}
              onChange={(e) => {
                setEmployeeID(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-10">
            <input
              type="text"
              placeholder="Select Employee Type"
              value={employeeType}
              onChange={(e) => {
                setEmployeeType(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={employeeEmail}
              onChange={(e) => {
                setEmployeeEmail(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-10">
            <input
              type="text"
              placeholder="Enter Department"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
            <input
              type="text"
              placeholder="Enter Designation"
              value={designation}
              onChange={(e) => {
                setDesignation(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-10">
            <input
              type="text"
              placeholder="Enter Working Days"
              value={workingDays}
              onChange={(e) => {
                setWorkingDays(e.target.value);
              }}
              className="h-16 rounded-xl border-2 border-gray-300 px-5"
            />
            {showJoiningDate ? (
              <input
                type="date"
                value={joiningDate}
                onChange={(e) => {
                  setJoiningDate(e.target.value);
                }}
                className="h-16 rounded-xl border-2 border-gray-300 px-5"
              />
            ) : (
              <button
                className="h-16 rounded-xl border-2 border-gray-300 px-5 flex items-center"
                onClick={() => {
                  setShowJoiningDate(true);
                }}
              >
                <p className="text-gray-400">Select Joining Date</p>
              </button>
            )}
          </div>
          <input
            type="text"
            placeholder="Enter Office Location"
            value={officeLocation}
            onChange={(e) => {
              setOfficeLocation(e.target.value);
            }}
            className="h-16 w-full rounded-xl border-2 border-gray-300 px-5"
          />
        </div>
      )}
      <div className="flex flex-row gap-5 items-center justify-end w-full mt-10">
        <button
          className="h-14 w-24 rounded-xl flex items-center justify-center border"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="h-14 w-24 rounded-xl flex items-center justify-center bg-primary"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
