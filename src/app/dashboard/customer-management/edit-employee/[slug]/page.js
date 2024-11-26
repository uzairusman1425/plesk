"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { FallingLines } from "react-loader-spinner";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function EditEmployee({ params }) {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [accessToken, setAccessToken] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pcName, setPcName] = useState("");
  const [email, setEmail] = useState("");
  const [pcname, setPcname] = useState("");
  const [showemail, setShowEmail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const router = useRouter();

  useEffect(() => {
    setAccessToken(localStorage.getItem("plesk_access_token"));
    (async () => {
      await axios
        .get(`${API_BASE_URL}/api/employee/get?userId=${params?.slug}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        ?.then((res) => {
          setfirstname(res?.data?.data?.Employee?.firstName || "");
          setlastname(res?.data?.data?.Employee?.lastName || "");
          setPcname(res?.data?.data?.Employee?.pc_name || "");
          setShowEmail(res?.data?.data?.Employee?.email || "");

          console.log(res);
        })
        ?.catch((err) => {
          console.error(err);
        });
    })();
  }, [params, API_BASE_URL, accessToken]);

  const handleSave = async () => {
    setIsLoading(true);
    const payload = {
      firstName: firstName,
      lastName: lastName,
      pc_name: pcName,
      professional_details: {
        email: email,
      },
    };
    await axios
      .put(
        `${API_BASE_URL}/api/employee/update?userId=${params?.slug}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      ?.then((res) => {
        console.log(res);
        setIsLoading(false);
        toast.success(res?.data?.message);
        if (res?.status === 200) {
          setIsEditing(false);
          router.back();
        }
      })
      ?.catch((err) => {
        toast.error(err?.message);
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="h-full flex-1 flex items-center justify-center">
      <div className="size-[95%] border border-gray-400 rounded-xl p-10 flex flex-col gap-5">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold">
              {`${firstname} ${lastname}`}
            </p>

            <div className="flex flex-row gap-3 items-center">
              <Image
                src={"/icons/email.png"}
                alt="designation"
                height={25}
                width={25}
              />
              <p className="font-light">{showemail}</p>
            </div>
          </div>
          {isEditing ? (
            <button
              className="h-14 w-24 rounded-xl bg-primary flex items-center justify-center"
              onClick={handleSave}
            >
              {isLoading ? (
                <FallingLines
                  color="#ffffff"
                  width="50"
                  visible={true}
                  ariaLabel="falling-circles-loading"
                />
              ) : (
                <p className="font-light text-white uppercase">done</p>
              )}
            </button>
          ) : (
            <button
              className="h-14 w-40 rounded-xl bg-primary flex flex-row gap-3 items-center justify-center"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <Image
                src={"/icons/edit-white.png"}
                alt="edit"
                height={25}
                width={25}
              />
              <p className="font-light text-white">Edit Profile</p>
            </button>
          )}
        </div>
        <div className="h-[1px] w-full bg-gray-300" />
        <div className="w-[50%] border-b flex flex-row items-center gap-5">
          <button
            className={`h-10 flex flex-row gap-3 items-center px-1 
             
                 "border-b-2 border-primary"
              
            }`}
          >
            <Image
              src={"/icons/personal-information-blue.png"}
              alt="personal-information"
              height={25}
              width={25}
            />
            <p
              className={`text-sm 
               "font-semibold text-primary" 
              }`}
            >
              Personal Information
            </p>
          </button>
        </div>

        <div className="w-full grid grid-cols-4 gap-16 mt-10">
          <div className="flex flex-col gap-3 font-light">
            <p className="text-xs text-gray-400">First Name</p>
            {isEditing ? (
              <input
                className="h-8 w-52 px-3 rounded-lg border text-sm"
                type="text"
                value={firstName}
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            ) : (
              <div className="flex flex-col gap-3">
                <p className="text-sm">{firstname}</p>
                <div className="h-[1px] w-52 bg-gray-200" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3 font-light">
            <p className="text-xs text-gray-400">Last Name</p>
            {isEditing ? (
              <input
                className="h-8 w-52 px-3 rounded-lg border text-sm"
                type="text"
                value={lastName}
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            ) : (
              <div className="flex flex-col gap-3">
                <p className="text-sm">{lastname}</p>
                <div className="h-[1px] w-52 bg-gray-200" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3 font-light">
            <p className="text-xs text-gray-400">Pc Name</p>
            {isEditing ? (
              <input
                className="h-8 w-52 px-3 rounded-lg border text-sm"
                type="text"
                required
                value={pcName}
                onChange={(e) => {
                  setPcName(e.target.value);
                }}
              />
            ) : (
              <div className="flex flex-col gap-3">
                <p className="text-sm">{pcname}</p>
                <div className="h-[1px] w-52 bg-gray-200" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3 font-light">
            <p className="text-xs text-gray-400">Email Address</p>
            {isEditing ? (
              <input
                className="h-8 w-52 px-3 rounded-lg border text-sm"
                type="text"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            ) : (
              <div className="flex flex-col gap-3">
                <p className="text-sm">{showemail}</p>
                <div className="h-[1px] w-52 bg-gray-200" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
