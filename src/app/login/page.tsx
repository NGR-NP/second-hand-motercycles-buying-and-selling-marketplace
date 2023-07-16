import AppLogo from "@/components/logo/AppLogo";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <div>
        <AppLogo />
      </div>
      <div className="text-xl font-inter font-semibold">Login your account</div>
      <div className="flex flex-col space-y-2">
        <div>Email Address</div>
        <div>
          <input
            className="border border-black rounded-lg p-1"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div>Password</div>
        <div>
          <input
            className="border border-black rounded-lg p-1"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default page;
