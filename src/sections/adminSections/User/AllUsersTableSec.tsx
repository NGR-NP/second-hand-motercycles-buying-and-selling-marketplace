"use client";
import { useState } from "react";
import UserPagination from "@/components/pagination/UserPagination";
import { AllUsersTableBody } from "@/components/Admin/users/AllUsersTableBody";
import { useGetAllUsersQuery } from "@/redux/users/getAllUsersApiSlice";

const AllUsersTableSec = ({ thdata }: any) => {
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState("1");
  const { data, isSuccess, isLoading, isFetching, refetch } =
    useGetAllUsersQuery({
      limit,
      page,
    });
  return (
    <div className="mx-4 mt-4">
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
                data?.result?.map((data: any, idx: number) => {
                  return (
                    <AllUsersTableBody
                      idx={idx}
                      key={data?._id}
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

export default AllUsersTableSec;
