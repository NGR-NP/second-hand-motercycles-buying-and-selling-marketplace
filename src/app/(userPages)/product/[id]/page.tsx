"use client";
import { useSingleProductQuery } from "@/redux/products/getSingleProductApiSlice";
import Footer from "@/sections/Footer";
import NavBar from "@/sections/NavBar";
import Slider from "@/sections/Slider";
import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFuelPump } from "react-icons/bs";

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
            <ul className="flex gap-32">
              <li className="h-10">
                <div className="flex items-center gap-4">
                  <FaRegCalendarAlt />
                  <div className="flex gap-10 text-sm">
                    <div className="text-slate-500">Registration Year</div>
                    <span className="font-semibold">2023</span>
                  </div>
                </div>
              </li>
              <li className="h-10">
                <div className="flex items-center gap-4">
                  <BsFuelPump />
                  <div className="flex gap-10 text-sm">
                    <div className="text-slate-500">Fuel Type</div>
                    <span className="font-semibold">Electric</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
