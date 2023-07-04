"use client";
import { useSingleProductQuery } from "@/redux/products/getSingleProductApiSlice";
import Slider from "@/sections/Slider";
import React from "react";

const Page = () => {
  const { data } = useSingleProductQuery({
    id: 1,
  });

  const datas: SingleProductResponseTypes = data;

  const ButtonStyles =
    "border text-black border-blue-200 rounded-xl p-2 text-xs bg-blue-50 hover:bg-blue-200";

  return (
    <main className="mt-16 max-w-screen-xl mx-auto">
      <div className="flex justify-center">
        <Slider />
        <div className="mt-16 flex border border-gray-400 rounded-lg">
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
            <div>₹ 6.50 Lakh Check Car Qualityarrow</div>
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
      <div className="">
        <div className="space-x-2 mt-16 flex justify-center">
          <button className={`${ButtonStyles}`}>OVERWIEW</button>
          <button className={`${ButtonStyles}`}>SPECS & FEATURES</button>
          <button className={`${ButtonStyles}`}>BIKE QUALITY CHECKS</button>
          <button className={`${ButtonStyles}`}>EMI CALC</button>
          <button className={`${ButtonStyles}`}>SIMILAR BIKES</button>
        </div>
        <div className="flex justify-center font-bold text-xl mt-8 font-sans">
          <h1>Bikes overview</h1>
          <div>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
