"use client";
import LoveSvg from "@/components/svg/LoveSvg";
import SearchSvg from "@/components/svg/SearchSvg";
import KaloVatvatay from "@/components/svg/logos/KaloVatvatay";
import { useAppSelector } from "@/redux/app/ReduxHooks";
import { selectCurrentFirstName } from "@/redux/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const data = useAppSelector(selectCurrentFirstName);
  console.log(data);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 bg-gradient-to-r from-white3 via-white2 to-white3">
        <div className="flex flex-wrap justify-between items-center p-4 mx-auto max-w-screen-xl">
          <div className="flex-[0.5]">
            <Link href="/" className="flex items-center outline-none">
              <KaloVatvatay />
            </Link>
          </div>
          <div className="flex-1">
            <div className="flex gap-3 justify-center items-center">
              <div className="relative">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="search...."
                  className="py-2 pr-8 pl-4 rounded-md shadow-sm outline-none hover:shadow-md text-ellipsis"
                />
                <div className="absolute top-0 right-0">
                  <div className="px-4 py-2 rounded-md bg-black3 w-fit text-white1">
                    <SearchSvg />
                  </div>
                </div>
              </div>
              <div>
                <select className="bg-black3 text-white1" name="catg" id="catg">
                  <option value="bike">Bike</option>
                  <option value="scooter">Scooter</option>
                  <option value="e-bike">e-Bike</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex-[0.5]">
            <div>
              <div>
                <LoveSvg />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
