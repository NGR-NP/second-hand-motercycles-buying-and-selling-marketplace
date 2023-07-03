"use client";

import { FaUserLarge } from "react-icons/fa6"
import { BsFillRocketFill } from "react-icons/bs"
import Img from "./img.jpg"


const AdminDashboard = () => {
  return (
    <div className="ml-60">
      <div className="top flex justify-between w-[70%]">
        <div className="total-user bg-white rounded-lg w-52 p-6 text-center flex flex-col items-center">
          <FaUserLarge size={30} />
          Total User
          <p>1000</p>
        </div>

        <div className="total-user bg-white rounded-lg w-52 p-6 text-center flex flex-col items-center">
          <FaUserLarge size={30} />
          Total User
          <p>1000</p>
        </div>

        <div className="total-user bg-white rounded-lg w-52 p-6 text-center flex flex-col items-center">
          <FaUserLarge size={30} />
          Total User
          <p>1000</p>
        </div>

        <div className="total-user bg-white rounded-lg w-52 p-6 text-center flex flex-col items-center">
          <FaUserLarge size={30} />
          Total User
          <p>1000</p>
        </div>
      </div>

      <div className="middle mt-10 w-[70%]">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-white rounded-lg flex py-10">
            <div className="p-10">
              Built by developers
              <p>Soft UI Dashboard</p>
              <p>From colors, cards, typography to complex elements, you will find the full documentation.</p>

            </div>
            <div className="image  p-12">
              <BsFillRocketFill size={150} />
            </div>
          </div>
            <div className=" bg-indigo-300 bg-[url(/images/bikes/bike-01.jpg)] rounded-lg py-10 p-10 bg-	opacity-3 ">
              <p>Work with the rockets</p>
            <p>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
            {/* <img className="object-contain cursor-pointer " src="/images/bikes/bike-01.jpg" alt="" /> */}
          </div>
        </div>
      </div>


    </div>
  );
};

export default AdminDashboard;
