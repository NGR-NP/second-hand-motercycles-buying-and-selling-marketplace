import AppLogo from "@/components/logo/AppLogo";
import { Content } from "next/font/google";
import React from "react";
import { FiMail } from "react-icons/fi";
import { BiSolidHide } from "react-icons/bi";

const page = () => {
  return (
    <div className="h-screen">
      <form className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center border border-black rounded-lg h-auto w-96 p-4">
          <div className="flex flex-col space-y-2 text-xl font-semibold font-inter items-center">
            <div>
              <AppLogo />
            </div>
            <div>Login your account</div>
          </div>
          <div className="flex flex-col m-5 space-y-2">
            <div>Email Address</div>
            <div className="relative">
              <input
                className="border border-black bg-slate-100 rounded-xl p-2 pr-9"
                type="email"
                placeholder="rosan.it@gmail.com"
                required
              />
              <div className="absolute top-2 text-2xl right-2">
                <FiMail />
              </div>
            </div>
          </div>
          <div className="flex flex-col m-4 space-y-2">
            <div>Password</div>
            <div className="relative">
              <input
                className="border border-black bg-slate-100 rounded-xl p-2 pr-9"
                type="password"
                placeholder="Set your password"
                required
              />
              <div className="absolute top-2 text-2xl right-2">
                <BiSolidHide />
              </div>
            </div>
          </div>
          <div className="m-5">
            <button className="border border-red-100 p-2 pl-16 pr-16 font-inter rounded-xl bg-orange-400">
              Login now
            </button>
          </div>
          <div>OR</div>
          <div className="m-5">
            <button className="border border-red-100 p-2 pl-14 pr-14 font-inter rounded-xl bg-orange-400">
              Signup now
            </button>
          </div>
        </div>
      </form>
    </div>
    // <div className="flex mx-auto border border-black h-full w-96">
    //   <div className="flex flex-col items-center space-y-5">
    //     <div>
    //       <AppLogo />
    //     </div>
    //     <div className="text-xl font-inter font-semibold">
    //       Login your account
    //     </div>
    //     <div className="flex flex-col space-y-2">
    //       <div>Email Address</div>
    //        <div className="relative">
    //         <input
    //           className="border border-black bg-slate-100 rounded-xl p-2 pr-9"
    //           type="email"
    //           placeholder="rosan.it@gmail.com"
    //           required
    //         />
    //         <div className="absolute top-2 text-2xl right-2">
    //           <FiMail />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default page;
