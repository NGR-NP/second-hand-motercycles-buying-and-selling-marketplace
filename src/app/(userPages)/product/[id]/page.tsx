"use client";
import { useSingleProductQuery } from "@/redux/products/getSingleProductApiSlice";
import Footer from "@/sections/Footer";
import NavBar from "@/sections/NavBar";
import Slider from "@/sections/Slider";
import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFuelPump } from "react-icons/bs";
import { LuDroplets } from "react-icons/lu";
import { PiEngine } from "react-icons/pi";
import { BiTachometer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FcEngineering, FcOvertime } from "react-icons/fc";

const Page = () => {
  const { data } = useSingleProductQuery({
    id: 1,
  });

  const datas: SingleProductResponseTypes = data;

  const ButtonStyles =
    "border text-black border-blue-200 rounded-xl p-2 text-xs bg-blue-50 hover:bg-blue-200";

  return (
    <>
      <NavBar />
      <main className="mt-20 max-w-screen-xl mx-auto mb-8">
        <div className="flex gap-4 justify-center px-4 max-w-screen-xl w-full">
          <div className="flex flex-col flex-[0.2] gap-4">
            <div>
              <Image
                className="max-w-full rounded-lg"
                src={"/images/reaction/shock.jpeg"}
                alt="img"
                height={200}
                width={400}
              />
            </div>
            <div>
              <Image
                className="max-w-full rounded-lg"
                src={"/images/reaction/shock.jpeg"}
                alt="img"
                height={200}
                width={400}
              />
            </div>
            <div>
              <Image
                className="max-w-full rounded-lg"
                src={"/images/reaction/shock.jpeg"}
                alt="img"
                height={200}
                width={400}
              />
            </div>
            <div>
              <Image
                className="max-w-full rounded-lg"
                src={"/images/reaction/shock.jpeg"}
                alt="img"
                height={200}
                width={400}
              />
            </div>
          </div>
          <div className="grid flex-[1.1] gap-4">
            <div>
              <Image
                className="max-w-full object-cover rounded-lg"
                src={"/images/reaction/shock.jpeg"}
                alt="img"
                height={200000}
                width={200000}
              />
            </div>
          </div>
          <div className="mt-16 ml-8 w-fit flex  border border-gray-100 rounded-2xl h-fit shadow-2xl">
            <div className="flex flex-col p-4 space-y-4">
              <div>{datas?.name}</div>
              <div>
                {datas?.odometer}kms • {datas?.engineType} • {datas?.ownership}
                {datas?.ownership === 1 ? (
                  <sup>st</sup>
                ) : datas?.ownership === 2 ? (
                  <sup>nd</sup>
                ) : datas?.ownership === 3 ? (
                  <sup>rd</sup>
                ) : (
                  datas?.ownership >= 4 && <sup>th</sup>
                )}{" "}
                Owner
              </div>
              <div>₹ 4.5 Lakh Check Bike Qualityarrow</div>
              <div>EMI starts @ ₹16,134 per month*</div>
              <button
                type="submit"
                className=" text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                View Seller Details
              </button>
              <div>Buy most effective services for used bikes</div>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto">
          <div className="space-x-2 mt-16 flex justify-start">
            <button className={`${ButtonStyles}`}>OVERWIEW</button>
            <button className={`${ButtonStyles}`}>SPECS & FEATURES</button>
            <button className={`${ButtonStyles}`}>BIKE QUALITY CHECKS</button>
            <button className={`${ButtonStyles}`}>EMI CALC</button>
            <button className={`${ButtonStyles}`}>SIMILAR BIKES</button>
          </div>
          <div className="flex bg-stone-50  w-fit ml-0 flex-col space-y-6 mt-8 p-8 rounded-lg shadow-2xl">
            <div className="font-sans font-bold text-xl">
              <h1>Bikes overview</h1>
            </div>
            <div>
              <ul className="grid grid-cols-2 gap-x-32">
                <li className="h-10">
                  <div className="flex items-center gap-4">
                    <FaRegCalendarAlt />
                    <ul className="flex gap-10 text-sm">
                      <li className="text-slate-500">Registration Year</li>
                      <li className="font-semibold">2023</li>
                    </ul>
                  </div>
                </li>
                <li className="h-10">
                  <div className="flex items-center gap-4">
                    <BsFuelPump />
                    <ul className="flex gap-10 text-sm">
                      <li className="text-slate-500">Fuel Type</li>
                      <li className="font-semibold">Electric</li>
                    </ul>
                  </div>
                </li>
                <li className="h-10">
                  <div className="flex items-center gap-4">
                    <LuDroplets />
                    <ul className="flex gap-10 text-sm">
                      <li className="text-slate-500">Mileage</li>
                      <li className="font-semibold">50 Kmpl</li>
                    </ul>
                  </div>
                </li>
                <li className="h-10">
                  <div className="flex items-center gap-4">
                    <PiEngine />
                    <ul className="flex gap-10 text-sm">
                      <li className="text-slate-500">Engine </li>
                      <li className="font-semibold">Engine type</li>
                    </ul>
                  </div>
                </li>
                <li className="h-10">
                  <div className="flex items-center gap-4">
                    <BiTachometer />
                    <ul className="flex gap-10 text-sm">
                      <li className="text-slate-500">Kms Driven</li>
                      <li className="font-semibold">90000 Kms</li>
                    </ul>
                  </div>
                </li>
                <li className="h-10">
                  <div className="flex items-center gap-4">
                    <CgProfile />
                    <ul className="flex gap-10 text-sm">
                      <li className="text-slate-500">Ownership </li>
                      <li className="font-semibold">Second owner</li>
                    </ul>
                  </div>
                </li>
                <li className="h-10">
                  <div className="flex items-center gap-4">
                    <FcEngineering />
                    <ul className="flex gap-10 text-sm">
                      <li className="text-slate-500">Engine Displacement</li>
                      <li className="font-semibold">200 cc</li>
                    </ul>
                  </div>
                </li>
                <li className="h-10">
                  <div className="flex items-center gap-4">
                    <FcOvertime />
                    <ul className="flex gap-10 text-sm">
                      <li className="text-slate-500">Year of Manufacture</li>
                      <li className="font-semibold">2018</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
