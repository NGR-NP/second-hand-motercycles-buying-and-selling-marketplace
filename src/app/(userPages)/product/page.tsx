import NavBar from "@/sections/NavBar";
import React from "react";
import Image from "next/image";
import { BiSolidColor } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import BrakesSvg from "@/components/svg/BrakesSvg";
import EngineSvg from "@/components/svg/EngineSvg";
import PowerSvg from "@/components/svg/PowerSvg";
import TorqueSvg from "@/components/svg/TorqueSvg";
import MileageSvg from "@/components/svg/MileageSvg";
import TyreTypeSvg from "@/components/svg/TyreTypeSvg";
import BikeSvg from "@/components/svg/BikeSvg";
import LineSvg from "@/components/svg/LineSvg";
import EvBikesCard from "@/sections/cards/EvBikesCard";

const ProductPage = () => {
  return (
    <>
      <div className="flex flex-col mt-28 mb-5 space-y-4">
        <div className="flex mr-52 ml-52 space-x-20 h-96 shadow-lg">
          <div className="flex flex-col w-2/4 h-96">
            <div>
              <Image
                height={200}
                width={200}
                className="w-full h-full"
                src="/images/background/bg-hero-section.jpg"
                alt="background"
              />
            </div>
            <div className="flex mt-2 space-x-2">
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
            <div className="flex space-x-4 text-2xl font-bold">
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
                <button className="p-2 w-40 font-semibold text-center text-white rounded-2xl font-inter bg-secondary hover:shadow-md">
                  BUY NOW
                </button>
              </div>
              <div>
                <button className="flex justify-center p-2 w-40 font-semibold rounded-2xl border font-inter text-secondary border-secondary hover:shadow-md">
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
        <div className="flex flex-col p-2 mr-52 ml-52 space-y-4 shadow-lg">
          <div className="text-xl font-bold">Specs of R15, V4</div>
          <div className="flex mr-4 ml-4 space-x-40">
            <div className="flex flex-col items-center">
              <div>
                <EngineSvg />
              </div>
              <div className="text-xs text-slate-600">Engine</div>
              <div className="text-base">155 cc</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <PowerSvg />
              </div>
              <div className="text-xs text-slate-600">Power</div>
              <div className="text-base">18.6 PS</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <TorqueSvg />
              </div>
              <div className="text-xs text-slate-600">Torque</div>
              <div className="text-base">1.1 NM</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <MileageSvg />
              </div>
              <div className="text-xs text-slate-600">Mileage</div>
              <div className="text-base">40 KMPL</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <BrakesSvg />
              </div>
              <div className="text-xs text-slate-600">Brakes</div>
              <div className="text-base">Double Disc</div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <TyreTypeSvg />
              </div>
              <div className="text-xs text-slate-600">Tyre Type</div>
              <div className="text-base">Tubeless</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2 mr-52 ml-52 space-y-4 shadow-lg">
          <div className="text-xl font-bold">R15, V4 Mileage</div>
          <div>
            The ARAI claimed mileage of Yamaha R15S is 40 kmpl. This is the
            claimed mileage for all variants.
          </div>
          <div className="flex flex-col space-y-6 w-96 border-t-2 border-b-2">
            <div className="bg-slate-100 p-4">
              <div className="flex space-x-36 ml-2 mr-2">
                <div>Fuel Type</div>
                <div>ARAI Mileage</div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex space-x-48 ml-2 mr-2">
                <div>Petrol</div>
                <div>40kmpl</div>
              </div>
            </div>
          </div>
          <div>
            <BikeSvg />
            <LineSvg />
          </div>
        </div>
        <div>
          <EvBikesCard />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
