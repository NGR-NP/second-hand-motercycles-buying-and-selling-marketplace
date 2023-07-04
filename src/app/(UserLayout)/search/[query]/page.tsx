"use client";
import UserPagination from "@/components/pagination/UserPagination";
import React, { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
const SearchProduct = () => {
  const data = new Array(10).fill("/images/background/bg-hero-section.jpg");
  const [datas, setDatas] = useState({
    page: 1,
    totalPages: 10,
    count: 1,
  });
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState("1");
  const isFetching = false;

  return (
    <main>
      <section className="mb-20 bg-slate-100">
        <div>
          <div>11 total search</div>
        </div>
        {data.map((data) => {
          return (
            <div className="px-3 py-4 mx-3 my-4 rounded-lg shadow-md bg-white1 text-slate-800">
              <div className="flex gap-8">
                <div className="">
                  <img
                    className="object-cover w-64 h-36 rounded-md origin-center"
                    src={data}
                    alt="img"
                  />
                </div>
                <div className="flex1">
                  <p className="pb-4 font-serif font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <div className="flex gap-6 pb-2 font-thin">
                    <p className="mr-2 text-xs font-extralight">20000 kms</p>
                    <ul className="text-xs font-extralight list-disc">
                      <li>Ev</li>
                    </ul>
                  </div>
                  <div className="font-serif font-bold">
                    <p>Rs 1.5 Lakh</p>
                  </div>
                </div>
                <div className="">
                  {<MdOutlineFavoriteBorder className="w-5 h-5 font-bold" />}
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-3 py-1 text-sm bg-gray-500 rounded text-white1">
                  View Seller Details
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <UserPagination
        datas={datas}
        setPage={setPage}
        isFetching={isFetching}
        setLimit={setLimit}
        page={page}
        limit={limit}
      />
    </main>
  );
};

export default SearchProduct;
