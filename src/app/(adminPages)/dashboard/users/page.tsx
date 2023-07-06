import AllUsersTableSec from "@/sections/adminSections/User/AllUsersTableSec";
import React from "react";

const AllUsersTablePage = () => {
  return (
    <div className="md:ml-64">
      <AllUsersTableSec
        thdatathdata={[
          "S.N",
          "image",
          "First Name",
          "Last Name",
          "email",
          "phone",
          "Role",
          "status",
          "Update",
          "Delete",
        ]}
      />
    </div>
  );
};

export default AllUsersTablePage;
