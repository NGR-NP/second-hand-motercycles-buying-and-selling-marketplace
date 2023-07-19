import NavBar from "@/sections/NavBar";
import React from "react";
import { BiSolidColor } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { PiEngineThin } from "react-icons/pi";
import { IoFlashSharp } from "react-icons/io5";
import { GiStopwatch, GiSpeedometer } from "react-icons/gi";
import Image from "next/image";

const ProductPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col mt-28 space-y-4">
        <div className="flex space-x-20 ml-52 mr-52 h-96">
          <div className="h-96 w-2/4 flex flex-col">
            <div>
              <Image
                height={200}
                width={200}
                className="w-full h-full"
                src="/images/background/bg-hero-section.jpg"
                alt="background"
              />
            </div>
            <div className="flex space-x-2 mt-2">
              <div>
                <Image
                  height={200}
                  width={200}
                  className="rounded-xl"
                  src="/images/background/bg-hero-section.jpg"
                  alt="background"
                />
              </div>
              <div>
                <Image
                  height={200}
                  width={200}
                  className="rounded-xl"
                  src="/images/background/bg-hero-section.jpg"
                  alt="background"
                />
              </div>
              <div>
                <Image
                  height={200}
                  width={200}
                  className="rounded-xl"
                  src="/images/background/bg-hero-section.jpg"
                  alt="background"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 font-raleway">
            <div className="flex space-x-4 font-bold text-2xl">
              <div>Yamaha R15, V4</div>
              <div className="flex items-center">
                <MdVerified />
              </div>
            </div>
            <div className="font-semibold">NPR. 6.21 Lakh*</div>
            <div className="w-96">
              <p className="text-slate-600">
                Yamaha R15 V4 is powered by 155 cc engine. This R15 V4 engine
                generates a power of 18.4 PS @ 10000 rpm and a torque of 14.2 Nm
                @ 7500 rpm. The claimed mileage of R15 V4 is 60.56 kmpl.
              </p>
            </div>
            <div className="grid grid-cols-2 grid-row-4">
              <div>Garage</div>
              <div>XYZ</div>
              <div>Location</div>
              <div>Itahari</div>
              <div>Distance Travelled</div>
              <div>2,00,000 kms</div>
              <div>Model Year</div>
              <div>2021</div>
            </div>
            <div className="flex flex-col">
              <div>Colour</div>
              <div>
                {" "}
                <BiSolidColor />{" "}
              </div>
            </div>
            <div className="flex space-x-12">
              <div>
                <button
                  className="rounded-2xl p-2 w-40 text-center font-semibold font-inter
              bg-secondary text-white hover:shadow-md"
                >
                  BUY NOW
                </button>
              </div>
              <div>
                <button
                  className="rounded-2xl p-2 w-40 border flex justify-center font-semibold font-inter
                text-secondary border-secondary hover:shadow-md"
                >
                  <div className="flex items-center space-x-2">
                    <div>
                      <AiOutlineHeart />
                    </div>
                    <div>Favourite</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 border p-2 border-slate-400 ml-52 mr-52">
          <div className="font-bold text-xl">Specs of R15, V4</div>
          <div className="flex space-x-24 mr-4 ml-4">
            <div className="flex flex-col items-center">
              <div>
                <PiEngineThin size={50} />
              </div>
              <div className="text-xs text-slate-600">Engine</div>
              <div className="text-base">155 cc</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <IoFlashSharp size={50} />
              </div>
              <div className="text-xs text-slate-600">Power</div>
              <div className="text-base">18.6 PS</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <GiStopwatch size={50} />
              </div>
              <div className="text-xs text-slate-600">Torque</div>
              <div className="text-base">1.1 NM</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <GiSpeedometer size={50} />
              </div>
              <div className="text-xs text-slate-600">Mileage</div>
              <div className="text-base">40 KMPL</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
