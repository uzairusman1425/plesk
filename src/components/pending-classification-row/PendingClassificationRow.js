"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export default function PendingClassificationRow({
  name,
  url,
  duration,
  isLastIndex,
  handleRefresh,
}) {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  const handleSelectProductive = async () => {
    const payload = {
      executable: name,
      isProductive: "true",
    };

    await axios
      .post(`${API_BASE_URL}/api/productive/add`, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      ?.then((res) => {
        console.log(res);
        setShowStatusDropdown(false);
        handleRefresh();
      })
      ?.catch((err) => {
        console.log(err);
        setShowStatusDropdown(false);
      });
  };

  const handleSelectUnproductive = async () => {
    const payload = {
      executable: name,
      isProductive: "false",
    };
    console.log("payload", payload);

    await axios
      .post(`${API_BASE_URL}/api/productive/add`, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      ?.then((res) => {
        console.log(res);
        setShowStatusDropdown(false);
        handleRefresh();
      })
      ?.catch((err) => {
        console.log(err);
        setShowStatusDropdown(false);
      });
  };

  useEffect(() => {
    setAccessToken(localStorage.getItem("plesk_access_token"));
  }, []);

  return (
    <div className="min-h-12 w-full grid grid-cols-4 place-items-center border-b border-t border-dashed">
      <div className="flex flex-row items-center gap-3">
        <Image src={"/icons/email-red.png"} alt="icon" height={15} width={15} />
        <p className="text-xs font-light text-gray-500">{name}</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        {url?.length > 0 && <GlobeAltIcon className="size-3 text-primary" />}
        <p className="text-xs font-light text-gray-500">{url}</p>
      </div>
      <div className="flex flex-row items-center gap-2 relative">
        <p className="text-xs font-light text-gray-500">Select Status</p>
        <button
          onClick={() => {
            setShowStatusDropdown(!showStatusDropdown);
          }}
          className={`transform-gpu ease-in-out duration-300 ${
            showStatusDropdown && "rotate-180"
          }`}
        >
          <ChevronDownIcon className="size-3 text-black" />
        </button>
        {showStatusDropdown && (
          <div
            className={`h-14 w-32 rounded border bg-white shadow-lg absolute ${
              isLastIndex ? "bottom-5" : "-bottom-16"
            } z-10 px-3 flex flex-col justify-evenly`}
          >
            <button
              className="flex flex-row items-center gap-2"
              onClick={handleSelectProductive}
            >
              <div className="size-2 rounded-full bg-primary" />
              <p className="text-xs">Productive</p>
            </button>
            <button
              className="flex flex-row items-center gap-2"
              onClick={handleSelectUnproductive}
            >
              <div className="size-2 rounded-full bg-[#FF0004]" />
              <p className="text-xs">Unproductive</p>
            </button>
          </div>
        )}
      </div>
      <p className="text-xs font-light text-gray-500">{duration} h</p>
    </div>
  );
}

PendingClassificationRow.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  duration: PropTypes.string.isRequired,
  isLastIndex: PropTypes.bool.isRequired,
  handleRefresh: PropTypes.func.isRequired,
};
