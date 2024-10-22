"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { FallingLines } from "react-loader-spinner";

export default function SignIn() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      username: username,
      password: password,
    };
    setIsLoading(true);
    setError(false);

    await axios
      .post(`${API_BASE_URL}/api/superadmin/login`, payload)
      ?.then((res) => {
        console.log(res);
        setIsLoading(false);
        if (res?.status === 200) {
          localStorage?.setItem(
            "plesk_admin_access_token",
            res?.data?.accessToken
          );
          toast.success("Login successful!");
          router.push("/admin/dashboard/customer-management");
        }
      })
      ?.catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message);
        setIsLoading(false);
        setError(true);
      });
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <main
        className={`w-[500px] px-12 py-8 rounded-xl shadow-xl border ${
          error && "border-red-500"
        }`}
      >
        <div className="flex flex-col items-center gap-7">
          <p className="text-xl font-semibold text-primary">
            Sign in to your Plesk Account
          </p>
          <input
            type="text"
            placeholder="Username"
            className="h-10 w-full px-2 border rounded-md"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="h-10 w-full px-2 border rounded-md"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="w-full flex flex-row items-center justify-between"></div>
          <button
            className="h-10 w-full flex items-center justify-center uppercase text-white text-md font-medium bg-primary rounded-md"
            onClick={handleLogin}
          >
            {isLoading ? (
              <FallingLines
                color="#ffffff"
                width="50"
                visible={true}
                ariaLabel="falling-circles-loading"
              />
            ) : (
              "sign in"
            )}
          </button>
        </div>
      </main>
    </section>
  );
}
