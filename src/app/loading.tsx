import LoadingCircleSvg from "@/components/svg/loading/LoadingCircleSvg";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <LoadingCircleSvg style="animate-spin h-16 w-16" />
      <p className="text-center">Loading.....</p>

    </div>
  );
};
export default Loading;
