import Link from "next/link";
import React from "react";

const AppLogo = () => {
  return (
    <Link href={"/"}>
      <img src="/logos/MoterCycle.svg" width="100px" height="100px" />{" "}
    </Link>
  );
};

export default AppLogo;
