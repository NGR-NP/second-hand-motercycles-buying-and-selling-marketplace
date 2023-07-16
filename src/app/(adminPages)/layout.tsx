import AdminAsideSec from "@/sections/adminSections/AdminAsideSec";
import React from "react";
export const metadata = {
  title: "Dashboard",
  description: "manage all product, user category",
};
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <AdminAsideSec>{children}</AdminAsideSec>;
};
export default AdminLayout;
