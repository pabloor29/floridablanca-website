import Link from "next/link";
import React from "react";

function IntroVins() {
  return (
    <div className="relative w-full bg-[#002E6D] flex flex-col lg:flex-row justify-center items-center py-16 mb-20">
      <div className="lg:w-2/5 relative flex justify-center items-center">
        <img
          src="/wine_poulpe.png"
          alt=""
          className="lg:absolute lg:w-7/12 w-2/3 rotate-[30deg] z-30 drop-shadow-[-15px_15px_3px_rgba(0,0,0,0.25)]"
        />
      </div>
      <div className="lg:w-3/5 w-5/6 flex flex-col space-y-8 z-20">
        <h3 className="text-white font-spaceTransit text-6xl tracking-wide">
          Notre selection de vins
        </h3>
        <article className="lg:w-4/5 text-white text-justify lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus saepe
          in consequuntur. Tempore, maiores consequuntur adipisci vitae,
          repellendus, quis magni quasi expedita molestias necessitatibus quos
          ea ipsam eveniet recusandae tenetur.
        </article>

        <Link href="/menu" className="bg-white hover:bg-[#002E6D] border hover:border-white text-[#002E6D] hover:text-white lg:w-fit w-full text-center text-xl lg:text-md duration-200 px-4 lg:py-2 py-4">
          Nos Vins
        </Link>
      </div>

      <img src="/octopus-tentacule-1.png" alt="" className="absolute lg:w-1/3 top-56 right-[15vw] lg:top-20 rotate-[200deg] lg:rotate-0 scale-150 lg:scale-100 lg:right-0 z-0 opacity-30"/>
    </div>
  );
}

export default IntroVins;
