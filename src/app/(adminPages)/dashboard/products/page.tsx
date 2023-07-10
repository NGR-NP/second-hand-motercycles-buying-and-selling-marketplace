import AllProductsTableSec from "@/sections/adminSections/products/AllProductsTableSec";
import React from "react";

const AllProductTablePage = () => {
  return (
    <div>
      <AllProductsTableSec
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

export default AllProductTablePage;
