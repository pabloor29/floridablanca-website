import Image from "next/image";
import React from "react";

function IntroVins() {
  return (
    <div className="w-full bg-[#002E6D] flex justify-center items-center py-16 mb-20">
      <div className="w-2/5 relative flex justify-center items-center">
        <img
          src="/wine_poulpe.png"
          alt=""
          className="absolute w-2/3 rotate-[30deg] drop-shadow-md z-30"
        />
      </div>
      <div className="w-3/5 flex flex-col space-y-8">
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
          Notre collection de vins
        </button>
      </div>
    </div>
  );
}

export default IntroVins;
