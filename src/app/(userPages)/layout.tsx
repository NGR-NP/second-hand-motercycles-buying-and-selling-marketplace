import Footer from "@/sections/Footer";
import NavBar from "@/sections/NavBar";
import AdminAsideSec from "@/sections/adminSections/AdminAsideSec";
import React from "react";
export const metadata = {
  title: "product",
  description:
    "second hand bike, scooter, e-bike buying and selling marketplace",
};
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
export default AdminLayout;
