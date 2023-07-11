"use client";
import { useAppDispatch, useAppSelector } from "@/redux/app/ReduxHooks";
import { Decrement, Increment } from "@/redux/counter/counterSlice";
import React from "react";

const Counter = () => {
  const count = useAppSelector((state) => state.Counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className="mt-20">
      <div className="flex space-x-5 justify-center">
        <button
          onClick={() => dispatch(Increment({ test: "" }))}
          className="border border-black"
        >
          +
        </button>
        <div>{count}</div>
        <button
          onClick={() => dispatch(Decrement({ test: "" }))}
          className="border border-black"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
