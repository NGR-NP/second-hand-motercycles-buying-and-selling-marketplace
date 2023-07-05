"use client";
import UploadImg from "@/components/uploadImages/UploadImg";
import React, { useState } from "react";

const Page = () => {
  const [image, setImage] = useState(undefined);
  const handleUploadImg = (e: any) => {
    const img = e.target.files[0];
    setImage(img);
    console.log(img);
  };
  return (
    <main className=" bg-slate-400">
      <div className=" mx-auto">
        <div className="flex py-8 h-full justify-center items-center">
          <form className="w-[80vmin] bg-slate-200 mt-2 px-3 py-4 rounded-md">
            <UploadImg image={image} />
            <div className="md:grid md:grid-cols-2 gap-6">
              <div className="relative z-0 w-full mb-6 ">
                <input
                  type="text"
                  className="rounded-md block py-2.5 px-3 outline-none w-full text-sm "
                  placeholder="Name"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-6 ">
                <input
                  type="text"
                  className="rounded-md block py-2.5 px-3 outline-none w-full text-sm"
                  placeholder="Short description"
                  required
                />
              </div>
            </div>
            <div className="relative z-0 w-full mb-6">
              <textarea
                rows={7}
                cols={20}
                maxLength={500}
                className="rounded-md resize-none block py-2.5 px-3 outline-none w-full text-sm"
                placeholder="Description"
                required
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6">
                <select className="text-slate-950 cursor-pointer rounded-md block py-2.5 px-3 outline-none">
                  <option value="">Select your brand</option>
                  <option value="Yamaha">Yamaha</option>
                  <option value="Royal Enfield">Royal Enfield</option>
                  <option value="KTM">KTM</option>
                </select>
              </div>
              <div className="relative z-0 w-full mb-6">
                <select
                  required
                  className="text-slate-950 cursor-pointer rounded-md block py-2.5 px-3 outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>
              <div className="relative z-0 w-full mb-6 ">
                <input
                  type="text"
                  className="rounded-md block py-2.5 px-3 outline-none w-full text-sm"
                  placeholder="Model"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-6 ">
                <input
                  type="number"
                  className="rounded-md block py-2.5 px-3 outline-none w-full text-sm"
                  placeholder="Price"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-6 ">
                <input
                  type="date"
                  className="cursor-text rounded-md block py-2.5 px-3 outline-none w-full text-sm"
                  placeholder="Years"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="flex mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Page;
