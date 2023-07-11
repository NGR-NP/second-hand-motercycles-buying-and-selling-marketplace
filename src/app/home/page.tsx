"use client";
import Footer from "@/sections/Footer";
import NavBar from "@/sections/NavBar";
import React from "react";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <section className="mt-16 mb-20 flex p-8">
        <div className="flex flex-col space-y-5">
          <div className="w-2/6 h-72 font-bold text-7xl">
            LET&apos;S GO! ADVENTURE IS WAITING FOR YOU
          </div>
          <div className="text-lg text-slate-500 font-serif">
            Pack your luggage and pick your destination
          </div>
          <div className="">
            <button className="bg-orange-400 p-2 w-36 rounded-md hover:bg-orange-500">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
