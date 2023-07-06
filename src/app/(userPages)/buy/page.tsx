"use client";
import UserPagination from "@/components/pagination/UserPagination";
import { useSearchProductQuery } from "@/redux/products/searchProductApiSlice";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
const BuyPage = () => {
  // const data = new Array(10).fill("/images/background/bg-hero-section.jpg");
  const { data, isLoading, isFetching, isSuccess, isError, error }: any =
    useSearchProductQuery({});
  const [datasDetails, setDatasDetails] = useState({
    page: 1,
    totalPages: 1,
    count: 1,
  });
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const pagination = useCallback(() => {
    if (data) {
      const count = data.length;
      const totalPages = Math.ceil(count / limit);
      setDatasDetails({
        page: page,
        totalPages: totalPages,
        count: count,
      });
    }
  }, [data, limit, page]);

  useEffect(() => {
    pagination();
  }, [pagination]);

  const ngClass = {
    lg: "absolute top-3 rignt-4 text-white1",
  };

  return (
    <>
      <div>
        <div>11 total search</div>
      </div>
      <div className="flex">
        <aside className="hidden lg:block flex-[0.4]">
          <div>fjfj</div>
        </aside>
        <main className="flex-1">
          <section className="flex flex-wrap justify-center mb-20 bg-slate-100">
            {data &&
              data?.map((data: MinProductListType) => {
                return (
                  <div
                    key={data.name}
                    className="flex flex-col justify-between px-3 py-4 mx-3 my-4 w-full rounded-lg shadow-md lg:w-96 bg-white1 text-slate-800"
                  >
                    <div className="flex relative flex-col gap-8 sm:flex-row lg:flex-col">
                      <div className="relative flex-1 mx-auto">
                        <Image
                          width={200}
                          height={200}
                          className="object-cover w-96 rounded-md origin-center h-fit"
                          // src={
                          //   data?.images.at(0) || "/images/reaction/shock.jpeg"
                          // }
                          src={"/images/reaction/shock.jpeg"}
                          alt="img"
                        />
                        <div className="absolute top-4 right-4 p-2 rounded-full cursor-pointer bg-white/60 sm:hidden lg:block text-slate-400 hover:text-pink-500">
                          <MdOutlineFavoriteBorder className="w-5 h-5 font-bold" />
                        </div>
                      </div>
                      <div className="flex-1 px-4 max-w-sm">
                        <p className="pb-4 font-serif font-bold">{data.name}</p>
                        <p className="pb-4 font-serif font-thin">
                          {data.shortDescription}
                        </p>
                        <div className="flex gap-6 pb-2 font-thin">
                          <p className="mr-2 text-xs font-extralight">
                            20000 kms
                          </p>
                          <ul className="text-xs font-extralight list-disc">
                            <li>{data.engineType}</li>
                          </ul>
                        </div>
                        <div className="font-serif font-bold">
                          <p>Rs 1.5 Lakh</p>
                        </div>
                      </div>
                      <div className="hidden cursor-pointer sm:block lg:hidden text-slate-600 hover:text-pink-500">
                        <MdOutlineFavoriteBorder className="w-5 h-5 font-bold" />
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
        </main>
        <UserPagination
          datas={datasDetails}
          data={data}
          setPage={setPage}
          isFetching={isFetching}
          setLimit={setLimit}
          page={page}
          limit={limit}
        />
      </div>
    </>
  );
};

export default BuyPage;
