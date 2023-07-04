import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/logos/MoterCycle.svg"
        width={100}
        height={100}
        alt="kbbty logo"
        className="w-[100px]"
      />{" "}
    </Link>
  );
};

export default AppLogo;
