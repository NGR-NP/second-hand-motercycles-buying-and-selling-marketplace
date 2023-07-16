import Image from "next/image";
import Link from "next/link";
import React from "react";
import KaloVatvatay from "../svg/logos/KaloVatvatay";

const AppLogo = () => {
  return (
    <Link href={"/"}>
      <KaloVatvatay/>
    </Link>
  );
};

export default AppLogo;
