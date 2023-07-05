import React from "react";

const CloseSvg = ({ style }: any) => {
  return (
    <svg
      className={`${style}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
      ></path>
    </svg>
  );
};

export default CloseSvg;
