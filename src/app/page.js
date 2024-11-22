"use client";

import { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth, provider } from "@/firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import toast from "react-hot-toast";
import { HeartIcon, EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { FallingLines } from "react-loader-spinner";
import { AppContext } from "@/context/context";

export default function SignUp() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const { dispatch } = useContext(AppContext);

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const payload = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      organization: organization,
      email: email,
      password: password,
      country: country,
    };
    if (agreed) {
      setIsLoading(true);
      await axios
        .post(`${API_BASE_URL}/api/users/register`, payload)
        ?.then((res) => {
          console.log(res);
          setIsLoading(false);
          toast.success("Signup successful!");
          router.push("/sign-in");
        })
        ?.catch((err) => {
          console.log(err);
          toast.error(err?.response?.data);
          setIsLoading(false);
        });
    }
  };

  const handleGoogleSignIn = async () => {
    signInWithPopup(auth, provider)
      ?.then(async (data) => {
        const payload = {
          firstName: data?.user?.displayName?.split(" ")[0] || "",
          lastName: data?.user?.displayName?.split(" ")[1] || "",
          email: data?.user?.email,
          image: data?.user?.photoURL,
        };
        await axios
          .post(`${API_BASE_URL}/api/users/googlelogin`, payload)
          ?.then((res) => {
            console.log(res);
            if (res?.data?.statusCode === 200) {
              localStorage?.setItem(
                "plesk_access_token",
                res?.data?.data?.accessToken
              );
              dispatch({
                type: "SET_USER",
                payload: res?.data?.data?.user[0],
              });
              router.push("/dashboard");
            }
          })
          ?.catch((err) => {
            console.log(err);
          });
      })
      ?.catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="h-full w-[40%] bg-primary flex items-center justify-center relative">
        <Image
          src={"/images/signup-bg-image.png"}
          alt="bg"
          height={600}
          width={600}
        />
        <div className="h-20 w-20 rounded-full bg-white absolute top-24 left-16 flex items-center justify-center">
          <HeartIcon className="h-12 w-12 text-primary" />
        </div>
      </div>
      <form
        onSubmit={handleSignUp}
        className="flex-1 flex flex-col gap-5 items-center py-20 overflow-y-auto scrollbar-none"
      >
        <p className="text-4xl font-bold text-primary font-sans">
          Create a Free Account
        </p>
        <p className="text-gray-500 font-light">
          Setup in minutes | No Credit Card Required
        </p>
        <div className="flex flex-col items-center gap-7 w-[85%] max-w-[750px] mx-16">
          <button
            className="flex flex-row gap-2 items-center justify-center h-10 w-full rounded-lg shadow-md"
            onClick={handleGoogleSignIn}
          >
            <Image src={"/icons/google.png"} alt="sso" height={15} width={15} />
            <p className="uppercase font-medium text-xs text-gray-500">
              sign up with google
            </p>
          </button>
          <div className="flex flex-row gap-5 items-center w-full">
            <div className="h-12 w-full flex items-center justify-center px-5 border rounded-md">
              <input
                type="text"
                required
                placeholder="First Name*"
                className="w-full text-sm font-light outline-none"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="h-12 w-full flex items-center justify-center px-5 border rounded-md">
              <input
                required
                type="text"
                placeholder="Last Name*"
                className="w-full text-sm font-light outline-none"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="h-12 w-full flex items-center justify-center px-5 border rounded-md">
            <input
              required
              type="text"
              maxLength="12"
              placeholder="Phone Number*"
              className="w-full text-sm font-light outline-none"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div className="h-12 w-full flex items-center justify-center px-5 border rounded-md">
            <input
              type="text"
              required
              placeholder="Organization*"
              className="w-full text-sm font-light outline-none"
              value={organization}
              onChange={(e) => {
                setOrganization(e.target.value);
              }}
            />
          </div>
          <div className="h-12 w-full flex items-center justify-center px-5 border rounded-md">
            <input
              type="email"
              required
              placeholder="Business Email*"
              className="w-full text-sm font-light outline-none"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="h-12 w-full flex flex-row gap-5 items-center justify-center px-5 border rounded-md">
            <input
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              type={showPassword ? "text" : "password"}
              placeholder="Password*"
              required
              className="w-full text-sm font-light outline-none"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <EyeIcon className="h-5 w-5 text-gray-400" />
              ) : (
                <EyeSlashIcon className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          <div className="h-12 w-full flex items-center justify-center px-5 border rounded-md">
            <input
              type="text"
              placeholder="Country*"
              required
              className="w-full text-sm font-light outline-none"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row gap-3 w-full">
            <input
              type="checkbox"
              className="size-4"
              value={agreed}
              required
              onChange={(e) => {
                setAgreed(e.target.checked);
              }}
            />
            <p className="text-xs font-light">
              By signing up, I agree to{" "}
              <span className="text-primary cursor-pointer">
                Plesk Terms of Service
              </span>
              . I consent to Plesk processing of personal data provided above
              and to receive communications in connection with the product as
              described in the{" "}
              <span className="text-primary cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
          <button
            type="submit"
            className={`h-12 w-full flex items-center justify-center uppercase text-white text-md font-medium bg-primary rounded-md ${
              !agreed && "bg-opacity-50 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <FallingLines
                color="#ffffff"
                width="50"
                visible={true}
                ariaLabel="falling-circles-loading"
              />
            ) : (
              "sign up"
            )}
          </button>
          <p className="text-sm font-light">
            Already Have An Account?{" "}
            <Link href={"/sign-in"} className="text-primary">
              Click here
            </Link>{" "}
            to log in
          </p>
        </div>
      </form>
    </div>
  );
}
