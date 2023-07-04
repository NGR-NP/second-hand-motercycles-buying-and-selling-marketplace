"use client";
import { useSingleProductQuery } from "@/redux/products/getSingleProductApiSlice";
import Slider from "@/sections/Slider";
import React from "react";

const Page = () => {
  const { data } = useSingleProductQuery({
    id: 1,
  });
  const datas: SingleProductResponseTypes = data;
  return (
    <main className="mt-16">
      <div className="flex">
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
        <div className="">
          <button>OVERWIEW</button>
          <button>SPECS & FEATURES</button>
          <button>CAR QUALITY CHECKS</button>
          <button>EMI CALC</button>
          <button>SIMILAR CARS</button>
        </div>
      </div>
    </main>
  );
};

export default Page;
