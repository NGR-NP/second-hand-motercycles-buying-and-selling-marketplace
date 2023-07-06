import AdminAsideSec from "@/sections/adminSections/AdminAsideSec";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AdminAsideSec>
          {children}
        </AdminAsideSec>
      </body>
    </html>
  );
};
export default AdminLayout;
