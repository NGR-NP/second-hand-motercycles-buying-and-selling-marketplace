import AdminAsideSec from "@/sections/adminSections/AdminAsideSec";
import React from "react";
export const metadata = {
  title: "Dashboard",
  description:
    "second hand bike, scooter, e-bike buying and selling marketplace",
};
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <AdminAsideSec>{children}</AdminAsideSec>;
};
export default AdminLayout;
