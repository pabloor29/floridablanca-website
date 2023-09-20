import React from "react";

function HeroBanner() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-b from-[#001F50] to-[#002E6D]">
      <div className="h-screen w-full flex justify-center items-center bg-black/60 absolute z-10"></div>
      <img
        src="/bar-black.png"
        alt=""
        className="w-full h-screen object-cover absolute z-0"
      />
      <div className="relative z-20 flex flex-col items-center justify-center leading-none">
        <h1
          className="text-bigSM lg:text-bigLG text-white font-spaceTransit
            tracking-wide z-30"
        >
          FLORIDABLANCA
        </h1>
        <h1
          className="text-bigSM lg:text-bigLG text-[#00A6E6] top-2 left-1 absolute font-spaceTransit
            tracking-wide"
        >
          FLORIDABLANCA
        </h1>
        <h3 className="z-10 text-white/90 font-spaceTransit lg:text-5xl ">
        Bar a poulpe. Tapas maison avec vins Espagnols et regionaux.
        </h3>
      </div>
    </div>
  );
}

export default HeroBanner;
