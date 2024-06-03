"use client";
import React, { useState, useEffect } from "react";
import { fetchData, updateData } from "../services/activador";

const Contador = () => {
  const [count, setCount] = useState(0);

  // incrementa y actualiza valor en db
  const increment = async () => {
    const newCount = count + 1;
    setCount(newCount);
    await updateData(newCount);
  };

  const decrease = async () => {
    const newCount = count - 1;
    setCount(newCount);
    await updateData(newCount);
  };

  // Obtener valor de db
  useEffect(() => {
    const getCount = async () => {
      const data = await fetchData();
      if (data && data.valor !== undefined) {
        setCount(data.valor);
      }
    };
    getCount();
  }, []);

  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-xl font-semibold mb-2 text-black text-center">
          Contador
        </h2>
        <p className="text-2xl font-semibold mb-4 text-black text-center">
          {count}
        </p>
        <div className="flex space-x-2">
          <button
            onClick={decrease}
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
          >
            -
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contador;
