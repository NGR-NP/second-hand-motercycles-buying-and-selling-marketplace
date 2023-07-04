"use client";
import { useEffect, useState } from "react";
import LoadingCircleSvg from "../svg/loading/LoadingCircleSvg";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
// import ArrowRight from "@mui/icons-material/ArrowRight";
// import ArrowLeft from "@mui/icons-material/ArrowLeft";

const UserPagination = ({
  datas,
  data,
  isFetching,
  limit,
  setLimit,
  setPage,
}: any) => {
  console.log("datas", datas.page);
  const start = (datas?.page - 1) * limit + 1 || 0;
  const end = Math.min(datas?.page * limit, datas?.count) || 0;
  const handlePage = (e: any, value: any) => {
    e.preventDefault();
    if (value === "next") {
      if (datas?.totalPages > datas?.page) {
        setPage(datas?.page + 1);
      }
    } else {
      if (datas?.page > 1) {
        setPage(datas?.page - 1);
      }
    }
  };
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5;
    const totalPages = datas?.totalPages;
    const currentPage = datas?.page;
    if (totalPages <= maxPageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage <= maxPageNumbers - 1) {
      for (let i = 1; i <= maxPageNumbers; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    } else if (
      currentPage >= totalPages - maxPageNumbers + 2 &&
      currentPage <= totalPages
    ) {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = totalPages - maxPageNumbers + 2; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };
  return (
    <>
      {data && (
        <div className="fixed bottom-0 w-full">
          <div
            className={` 
            ${isFetching ? "cursor-wait" : "cursor-auto"}
             mt-2 justify-between items-center px-4 py-3 bg-white border-t border-gray-200 sm:px-6`}
          >
            <div
              className={`
            ${isFetching ? "flex" : "hidden"}
             justify-center items-center sm:hidden `}
            >
              <LoadingCircleSvg />
            </div>
            <div className="flex col-span-3 items-center sm:hidden max-sm:col-span-2 max-sm:justify-center">
              {" "}
              Showing {start}-{end} of {datas?.count} results
            </div>
            <div className="flex flex-1 justify-between sm:hidden">
              <div
                onClick={(e) => handlePage(e, "prev")}
                className={`${
                  datas?.page <= 1
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer "
                } inline-flex relative items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50`}
              >
                Previous
              </div>

              <div
                onClick={(e) => handlePage(e, "next")}
                className={`${
                  datas?.totalPages > datas?.page
                    ? "cursor-pointer"
                    : "cursor-not-allowed opacity-50"
                } inline-flex relative items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50`}
              >
                Next
              </div>
            </div>

            <div className="hidden gap-4 sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <select
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                name="limit"
                id="limit"
                className="px-1 py-2 text-sm text-center rounded-lg outline-none font-font-3"
              >
                <option value={limit}>Limit {limit}</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
              </select>
              <div>
                <div className="flex col-span-3 items-center max-sm:col-span-2 max-sm:justify-end">
                  {" "}
                  Showing {start}-{end} of {datas?.count} results
                </div>
              </div>
              <div className="flex justify-center items-center">
                {isFetching && <LoadingCircleSvg />}
                <nav
                  className="inline-flex isolate -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <div
                    onClick={(e) => handlePage(e, "prev")}
                    className={`${
                      datas?.page <= 1 ? "cursor-not-allowed" : "cursor-pointer"
                    } inline-flex relative items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300  hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                  >
                    <MdArrowLeft />
                  </div>

                  {/* {pageNumbers.map((page) => { */}
                  {getPageNumbers().map((page, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => page !== "..." && setPage(page)}
                        aria-current="page"
                        className={`${
                          datas?.page === page
                            ? " z-10  bg-orange-600 text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            : " text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:outline-offset-0"
                        } ${isFetching ? "cursor-wait" : "cursor-pointer"}
                        inline-flex relative items-center px-4 py-2 text-sm font-semibold text  focus:z-20
                        `}
                      >
                        {page}
                      </div>
                    );
                  })}

                  <div
                    onClick={(e) => handlePage(e, "next")}
                    className={`${
                      datas?.totalPages > datas?.page
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    } inline-flex relative items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                  >
                    <MdArrowRight />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPagination;
