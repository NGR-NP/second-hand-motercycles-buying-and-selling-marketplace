"use client";
import React, { useState } from "react";

const Page = () => {
  const [image, setImage] = useState(undefined);
  const handleUploadImg = (e: any) => {
    const img = e.target.file[0];
    setImage(img);
  };
  return (
    <div className="container h-screen mx-auto">
      <div className="flex h-full justify-center items-center">
        <form className="bg-slate-200 mt-2 px-3 py-4 rounded-md">
          <div className="mb-6">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                {image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className=" h-[30vmin] object-cover"
                    src={
                      image
                        ? URL.createObjectURL(image)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt="img"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="font-semibold">Click to upload</div> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                )}
                <input
                  id="dropzone-file"
                  onChange={(e) => handleUploadImg(e)}
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div>
            <div className="relative z-0 w-full mb-6 ">
              <input
                type="text"
                className="rounded-lg block py-2.5 px-3 outline-none w-full text-sm "
                placeholder="Name"
                required
              />
            </div>
            <div className="relative z-0 w-full mb-6 ">
              <input
                type="text"
                className="rounded-lg block py-2.5 px-3 outline-none w-full text-sm"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6">
              <input
                type="text"
                className="rounded-lg block py-2.5 px-3 outline-none w-full text-sm"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6">
              <select className="text-slate-950 cursor-pointer rounded-lg block py-2.5 px-3 outline-none">
                <option value="">Select your brand</option>
                <option value="Yamaha">Yamaha</option>
                <option value="Royal Enfield">Royal Enfield</option>
                <option value="KTM">KTM</option>
              </select>
            </div>
            <div className="relative z-0 w-full mb-6">
              <select className="text-slate-950 cursor-pointer rounded-lg block py-2.5 px-3 outline-none">
                <option value="">Select your brand</option>
                <option value="Yamaha">Yamaha</option>
                <option value="Royal Enfield">Royal Enfield</option>
                <option value="KTM">KTM</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
