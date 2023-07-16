"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'
const FindGarage = () => {
  const [garageName, setGaragename] = useState<string>("");
  const [contact, setContact] = useState<any>("");
  const router = useRouter()

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8000/api/v1/garage/view-garage`, {
        garageName,
        contact,
      })
      .then(function (response) {
        console.log(response);
        router.push(`/qrcode?garageName=${response.data.garage.garageName}&contact=${response.data.garage.contact}&location=${response.data.garage.location}&city=${response.data.garage.city}`)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <form onSubmit={handelSubmit} className=" w-[400px] mx-auto bg-slate-200 mt-2 px-3 py-4 rounded-md flex flex-col justify-center items-center  ">
        <h1 className=" text-xl font-bold py-5">Find Garadge</h1>

        <div>
          <input
            className="rounded-md block py-2.5 px-3 outline-none w-full text-sm  mb-5"
            type="text"
            placeholder="Garage Name"
            value={garageName}
            onChange={(e) => setGaragename(e.target.value)}
          />
        </div>
        <div>
          <input
            className="rounded-md block py-2.5 px-3 outline-none w-full text-sm mb-5"
            type="text"
            placeholder="Garage Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <button type="submit" className="btn border-2 border-white  px-5 py-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default FindGarage;
