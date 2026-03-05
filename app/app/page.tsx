"use client";

import { useState } from "react";

const fibonacci = (n: number): number => {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

export default function Home() {
  const [number, setNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const handleClick = () => {
    setResult(fibonacci(number));
  };

  return (
    <div className="bg-sky-50 min-h-screen p-3 flex items-center justify-center">
      <div className="bg-white rounded-md border border-sky-300 p-3 flex flex-col gap-3">
        <input
          type="text"
          className="input"
          value={number}
          onChange={(e) => setNumber(Number.parseInt(e.target.value))}
        />
        <button className="btn" onClick={handleClick}>
          Calculate
        </button>
        <input type="text" className="input" value={result} readOnly />
      </div>
    </div>
  );
}
