import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FCFCFD] text-[#132238] font-sans selection:bg-blue-100">
      <div className="text-center space-y-4 animate-in fade-in duration-1000">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Unique<span className="text-[#3B82F6]">HR</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 font-medium tracking-widest uppercase">
          Coming Soon
        </p>
      </div>
    </main>
  );
}
