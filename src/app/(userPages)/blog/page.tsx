"use client";
import React, { useEffect, useState } from "react";

const API = "https://648ec59675a96b664444425e.mockapi.io";

type APITypes = {
  id?: number;
  createdAt: number;
  avatar: any[];
  title: string;
  description: string;
  author: string;
};

const Blog = () => {
  const [datas, setData] = useState([]);

  const FetchData = async () => {
    try {
      const req = await fetch(`${API}/Blog`);
      const res = await req.json();
      setData(res);
      console.log(res);
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
        <div className="h-60 w-96 rounded-xl shadow-2xl flex">
          <div className="h-full">
            <img src="" alt="image" />
            <p>
              {datas.map((data, idx) => (
                <div key={idx}>{data}</div>
              ))}
            </p>
          </div>
          <div className="flex flex-col">
            <div>Title</div>
          </div>
        </div>
        <div>2nd card</div>
      </div>
      <div className="">3rd card</div>
    </div>
  );
};

export default Blog;
