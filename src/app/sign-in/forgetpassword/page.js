"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function ForgetScreen() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  async function handleVerify() {
    if (!email) {
      toast.error("Enter Email Address");
    } else {
      try {
        const payload = {
          email: email,
        };
        const response = await axios.post(
          `${API_URL}/api/users/forgot-password`,
          payload
        );
        if (response?.status == 200) {
          setVisible(true);
          toast.success(response?.data?.message || "Enter Otp");
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "User Not Regsitered");
      }
    }
  }

  async function handlePassword() {
    if (!otp || !password) {
      toast.error("All Fields Required");
    } else {
      try {
        const payload = {
          email: email,
          otp: otp,
          newPassword: password,
        };
        const response = await axios.post(
          `${API_URL}/api/users/reset-password`,
          payload
        );
        if (response?.status) {
          setVisible(false);
          toast.success(response?.data?.message || "Password Updated");
          setEmail("");
          router.push("/sign-in");
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Try Again");
      }
    }
  }

  return (
    <main className="flex items-center justify-center">
      <div className="w-[400px] h-[250px] rounded-xl bg-white shadow-lg flex items-center flex-col justify-start gap-6">
        <h1 className="font-bold text-2xl">Forget Password</h1>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Enter Your Email Address"
          className="rounded-md border-[2px] border-black w-[80%] h-12 px-2 outline-none"
        />
        {visible && (
          <div className="w-full min-h-screen bg-black/20 inset-0 fixed flex items-center justify-center">
            <div className="w-[600px] h-[400px] bg-white rounded-xl flex items-center flex-col justify-center gap-10">
              <h1 className="text-2xl font-bold">Enter Otp</h1>
              <input
                type="text"
                placeholder="Otp"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              />
              <input
                type="password"
                placeholder="Enter Your New Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-[300px] h-14 px-2 bg-gray-200 rounded-xl"
              />

              <div className="flex flex-row gap-4">
                <button
                  onClick={handlePassword}
                  className="px-6 py-2 bg-primary text-white font-bold rounded-md"
                >
                  Save
                </button>
                <button
                  onClick={() => setVisible(false)}
                  className="px-6 py-2 border-2 text-primary rounded-md border-primary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={handleVerify}
          className="px-4 py-2 border-primary border-[1px] rounded-md text-primary"
        >
          Verify
        </button>
      </div>
    </main>
  );
}
