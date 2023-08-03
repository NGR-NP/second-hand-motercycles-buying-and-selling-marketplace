"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const API = "https://kalovatvatey.onrender.com/api/v1/admin";

type APITypes = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  contact: number;
  role: string;
  img?: string;
};

const Blog = () => {
  const [datas, setData] = useState<APITypes[]>([]);

  const FetchData = async () => {
    try {
      const req = await fetch(`${API}/view_all_users`);
      const res = await req.json();
      setData(res.allUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="mt-28 mb-5 flex justify-between p-10">
      <div className="flex flex-col gap-5">
        <div className="h-60 w-[600px] rounded-xl shadow-2xl flex gap-2">
          <div className="h-auto w-60 relative rounded-l-xl overflow-hidden">
            <Image
              fill
              className="object-cover"
              src={
                "https://mcn-images.bauersecure.com/wp-images/4705/1440x960/2023_bmw_s1000rr_9.jpg?mode=max&quality=90&scale=down"
              }
              alt="image"
            />
          </div>
          <div className="flex flex-col p-2">
            <h1>{datas[2]?.firstName}</h1>
          </div>
        </div>
        <div>2nd card</div>
      </div>
      <div className="">3rd card</div>
    </div>
  );
};

export default Blog;
