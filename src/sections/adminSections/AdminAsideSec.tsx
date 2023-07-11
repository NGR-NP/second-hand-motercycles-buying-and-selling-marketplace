"use client";
import BuildingOfficeSvg from "@/components/svg/BuildingOfficeSvg";
import DimondSvg from "@/components/svg/DimondSvg";
import HandburgetSvg from "@/components/svg/HandburgetSvg";
import KeySvg from "@/components/svg/KeySvg";
import TagSvg from "@/components/svg/TagSvg";
import UserSvg from "@/components/svg/UserSvg";
import { useAppSelector } from "@/redux/app/ReduxHooks";
import {
  selectCurrentFirstName,
  selectCurrentImage,
} from "@/redux/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AdminAsideSec = ({ children }: { children: React.ReactNode }) => {
  const [hide, setHide] = useState(true);
  const firstName = useAppSelector(selectCurrentFirstName);
  const image = useAppSelector(selectCurrentImage);
  const handleLogout = () => {
    toast.info("Logged out");
  };
  return (
    <>
      <div className="flex justify-between items-center my-2 w-full md:hidden">
        <button
          onClick={(e) => setHide(!hide)}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <HandburgetSvg />
        </button>
        <div className="mx-4">
          <Link href="/user/profile">
            <Image
              loading="lazy"
              width={50}
              height={50}
              src={"/images/reaction/shock.jpeg"}
              // src={image || "/images/reaction/shock.jpeg"}
              className="object-cover w-8 h-8 rounded-full"
              alt={firstName || "user"}
            />
          </Link>
        </div>
      </div>

      <aside
        className={`${
          hide ? "-translate-x-full" : "translate-x-0"
        } fixed top-13  left-0 z-40 w-64 h-screen  transition-transform md:translate-x-0`}
        aria-label="Sidebar"
      >
        <nav className="overflow-y-auto px-3 py-4 h-full bg-gray-50">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <div className="ml-3">Dashboard</div>
              </Link>
            </li>
            <li className="text-gray-500">
              <Link
                href="/dashboard/products"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <div className="text-gray-500">
                  <BuildingOfficeSvg color={"text-gray-500"} />
                </div>
                <div className="flex-1 ml-3 whitespace-nowrap">Products</div>
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/users"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <UserSvg />
                <div className="flex-1 ml-3 whitespace-nowrap">Users</div>
              </Link>
            </li>
            <li>
              <Link
                href="catg"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <TagSvg style={""} />
                <div className="flex-1 ml-3 whitespace-nowrap">Catg</div>
              </Link>
            </li>
            <li>
              <Link
                href="keyword"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <KeySvg />
                <div className="flex-1 ml-3 whitespace-nowrap">Keyword</div>
              </Link>
            </li>
            <li>
              <Link
                href="brand"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <KeySvg />
                <div className="flex-1 ml-3 whitespace-nowrap">Brand</div>
              </Link>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
            <li>
              <Link
                href="/profile"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                {image ? (
                  <Image
                    width={200}
                    height={200}
                    src={ "/images/reaction/shock.jpeg"}
                    // src={image || "/images/reaction/shock.jpeg"}
                    className="object-cover w-8 h-8 rounded-full"
                    alt=""
                  />
                ) : (
                  <UserSvg />
                )}
                <div className="flex-1 ml-3 whitespace-nowrap">
                  {firstName || "first name"}
                </div>
              </Link>
            </li>
            <li className="flex place-items-end cursor-pointer">
              <div
                onClick={handleLogout}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center px-4 py-2 rounded-lg duration-200 hover:scale-105 active:scale-95 bg-black3 text-slate-200 hover:bg-black1">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 transition duration-75 text-slate-100 group-hover:text-slate-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="flex-1 ml-3 whitespace-nowrap text-slate-200 group-hover:text-slate-800">
                    Logout
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
      <div onClick={(e) => !hide && setHide(!hide)}>
        <main className="md:ml-64">{children}</main>
      </div>
    </>
  );
};

export default AdminAsideSec;
