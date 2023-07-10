import AdminAsideSec from "@/sections/adminSections/AdminAsideSec";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <AdminAsideSec>{children}</AdminAsideSec>;
};
export default AdminLayout;
