"use client";
import Counter from "@/components/CounterButton/Counter";
import { useAppDispatch, useAppSelector } from "@/redux/app/ReduxHooks";
import { setColor } from "@/redux/counter/counterSlice";
import NavBar from "@/sections/NavBar";
import React from "react";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.Counter.color);

  return (
    <>
      <NavBar />
      <Counter />
      <div className="mt-28 flex ml-96 flex-col space-y-20">
        <form
          style={{ background: color || "" }}
          className={` flex justify-center border border-red-600 h-60 w-60 items-center`}
        >
          Color is {color}
        </form>
        <div>
          Enter the name of a color :{" "}
          <span>
            <input
              className="border border-black"
              type="text"
              name="colorValue"
              id=""
              value={color || ""}
              placeholder="Enter color"
              onChange={(e) => dispatch(setColor({ color: e.target.value }))}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
