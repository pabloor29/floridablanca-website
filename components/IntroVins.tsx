import Image from "next/image";
import React from "react";

function IntroVins() {
  return (
    <div className="relative w-full bg-[#002E6D] flex justify-center items-center py-16 mb-20">
      <div className="w-2/5 relative flex justify-center items-center">
        <img
          src="/wine_poulpe.png"
          alt=""
          className="absolute w-7/12 rotate-[30deg] z-30 drop-shadow-[-15px_15px_3px_rgba(0,0,0,0.25)]"
        />
      </div>
      <div className="w-3/5 flex flex-col space-y-8 z-20">
        <h3 className="text-white font-spaceTransit text-6xl tracking-wide">
          Notre selection de vins
        </h3>
        <article className="w-4/5 text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus saepe
          in consequuntur. Tempore, maiores consequuntur adipisci vitae,
          repellendus, quis magni quasi expedita molestias necessitatibus quos
          ea ipsam eveniet recusandae tenetur.
        </article>

        <button className="bg-white hover:bg-[#002E6D] border hover:border-white text-[#002E6D] hover:text-white w-fit duration-200 px-4 py-2 z-40">
          Nos vins
        </button>
      </div>

      <img src="/octopus-tentacule-1.png" alt="" className="absolute w-1/3 right-0 z-0 opacity-30"/>
    </div>
  );
}

export default IntroVins;
