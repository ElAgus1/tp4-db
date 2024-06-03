"use client";
// pages/counter.js
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const ClearCount = () => {
    setCount(count * 0);
  };

  return (
    <div className="border-2 border-white-200">
      <div className="px-4 py-5 flex flex-col items-center justify-center ">
        <div className="text-6xl font-bold text-black mb-8 text-white">
          {count}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={decreaseCount}
            className="px-4 py-2 bg-blue-500 text-white text-xl rounded hover:bg-blue-600 focus:outline-none"
          >
            -
          </button>
          <button
            onClick={incrementCount}
            className="px-4 py-2 bg-blue-500 text-white text-xl rounded hover:bg-blue-600 focus:outline-none"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
