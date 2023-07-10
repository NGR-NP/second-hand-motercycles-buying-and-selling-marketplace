"use client";
import { useCallback, useEffect, useState } from "react";
import UserPagination from "@/components/pagination/UserPagination";
import { AllProductsTableBody } from "@/components/Admin/products/AllProductsTableBody";
import { useGetAllProductQuery } from "@/redux/products/getAllProductApiSlice";

const AllProductsTableSec = ({ thdata }: any) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const {
    data,
    isSuccess,
    isLoading,
    error,
    isFetching,
    refetch,
    status,
  }: RtkQueryResultType = useGetAllProductQuery({
    limit,
    page,
  });

  return (
    <div className="mx-4 mt-14">
      <div className="overflow-hidden w-full rounded-lg shadow-xs">
        {isFetching ? (
          <div className="bg-gray-100   h-[90vh] mb-2  max-md:h-[87.3vh] ">
            <div className="bg-slate-300/30  w-full h-full mb-2 animate-loadingBlink max-md:h-[87.3vh] "></div>
          </div>
        ) : (
          <div className="overflow-x-auto w-full h-[90.6vh] max-md:h-[87.3vh]">
            <table className="w-full">
              <thead>
                <tr className="sticky top-0 z-20 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b">
                  {thdata?.map((th: any) => {
                    return (
                      <th key={th} className="px-4 py-3">
                        {th}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              {isSuccess &&
                // data?.map((data: any, idx: number) => { // moke api
                data?.allProducts?.map((data: any, idx: number) => {
                  return (
                    <AllProductsTableBody
                      idx={idx}
                      key={data?.id}
                      dataMaped={data}
                      refetch={refetch}
                    />
                  );
                })}
            </table>
          </div>
        )}

        <UserPagination
          datas={data}
          limit={limit}
          isFetching={isFetching}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default AllProductsTableSec;
