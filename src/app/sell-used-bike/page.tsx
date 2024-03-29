"use client";
import React, { useState } from "react";

const SellUsedBikePage = () => {
  const [image, setImage] = useState(undefined);
  const handleUploadImg = (e: any) => {
    const img = e.target.files[0];
    setImage(img);
    console.log(e.target);
  };
  return (
    <main className="bg-slate-400">
      <div className="mx-auto">
        <div className="flex justify-center items-center py-8 h-full">
          <form className="w-[80vmin] bg-slate-200 mt-2 px-3 py-4 rounded-md">
            <div className="mb-6">
              <div className="flex justify-center items-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer"
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
                    <div className="flex flex-col justify-center items-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        className="mb-3 w-10 h-10 text-gray-400"
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
            <div className="gap-6 md:grid md:grid-cols-2">
              <div className="relative z-0 mb-6 w-full">
                <input
                  type="text"
                  className="rounded-md block py-2.5 px-3 outline-none w-full text-sm "
                  placeholder="Name"
                  required
                />
              </div>
              <div className="relative z-0 mb-6 w-full">
                <input
                  type="text"
                  className="rounded-md block py-2.5 px-3 outline-none w-full text-sm"
                  placeholder="Short description"
                  required
                />
              </div>
            </div>
            <div className="relative z-0 mb-6 w-full">
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
              <div className="relative z-0 mb-6 w-full">
                <select className="text-slate-950 cursor-pointer rounded-md block py-2.5 px-3 outline-none">
                  <option value="">Select your brand</option>
                  <option value="Yamaha">Yamaha</option>
                  <option value="Royal Enfield">Royal Enfield</option>
                  <option value="KTM">KTM</option>
                </select>
              </div>
              <div className="relative z-0 mb-6 w-full">
                <select
                  required
                  className="text-slate-950 cursor-pointer rounded-md block py-2.5 px-3 outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>
              <div className="relative z-0 mb-6 w-full">
                <input
                  type="text"
                  className="rounded-md block py-2.5 px-3 outline-none w-full text-sm"
                  placeholder="Model"
                  required
                />
              </div>
              <div className="relative z-0 mb-6 w-full">
                <input
                  type="number"
                  className="rounded-md block py-2.5 px-3 outline-none w-full text-sm"
                  placeholder="Price"
                  required
                />
              </div>
              <div className="relative z-0 mb-6 w-full">
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

export default SellUsedBikePage;
