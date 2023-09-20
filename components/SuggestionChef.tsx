import React from "react";
import PlatSuggest from "./PlatSuggest";
import Link from "next/link";

function SuggestionChef() {
  return (
    <div className="relative w-full flex justify-center items-center pt-28 pb-40">
      <img src="/octopus-drawing-blue.png" alt="" className="absolute opacity-5 z-0 scale-150 overflow-x-hidden"/>
      <div className="lg:w-3/5 w-5/6 flex flex-col justify-center items-center space-y-6 z-10">
        <h3 className="text-[#002E6D] text-7xl font-spaceTransit tracking-wide leading-none">
          Suggestions du Chef
        </h3>
        <h4 className="text-[#002E6D] text-3xl font-spaceTransit leading-none text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          ratione?
        </h4>
        <p className="text-center text-[#002E6D]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus sit dolores facilis, recusandae asperiores ipsum
          tenetur qui incidunt perferendis, ut animi vel quo ipsa rem.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center py-8 lg:space-x-10 space-y-20">
          <PlatSuggest src="/casserole-poivron.png" alt="casserole de poivrons" title="CASSEROLLE DE POIVRON"/>
          <PlatSuggest src="/assiette-poulpe.png" alt="assiette de poulpe" title="POULPE AU PAPRIKA"/>
          <PlatSuggest src="/casserole_3fritures.png" alt="casserole trois fritures" title="CASSEROLLE AUX FRITURES"/>

        </div>
        <Link href="/menu" className="hover:bg-[#002E6D] border border-[#002E6D] text-[#002E6D] font-medium hover:text-white lg:w-fit w-full text-center text-xl lg:text-md duration-200 px-4 lg:py-2 py-4">
          Découvrir le menu
        </Link>
      </div>
    </div>
  );
}

export default SuggestionChef;
