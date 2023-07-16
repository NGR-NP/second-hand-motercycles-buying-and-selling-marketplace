import AppLogo from "@/components/logo/AppLogo";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <div>
        <AppLogo />
      </div>
      <div className="text-xl font-inter font-semibold">Login your account</div>
      <div className="flex flex-col">
        Email Address:
        <div>
          <input
            className="border border-black"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default page;
