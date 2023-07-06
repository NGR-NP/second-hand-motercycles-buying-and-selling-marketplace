import AllUsersTableSec from "@/sections/adminSections/User/AllUsersTableSec";
import React from "react";

const AllUserTablePage = () => {
  return (
    <div>
      <AllUsersTableSec
        thdata={[
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

export default AllUserTablePage;
