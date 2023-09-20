import React from "react";
import PlatSuggest from "./PlatSuggest";

function SuggestionChef() {
  return (
    <div className="relative w-full flex justify-center items-center pt-28 pb-40">
      <img src="/octopus-drawing-blue.png" alt="" className="absolute opacity-5 z-0 scale-150"/>
      <div className="w-3/5 flex flex-col justify-center items-center space-y-6 z-10">
        <h3 className="text-[#002E6D] text-7xl font-spaceTransit tracking-wide">
          Suggestions du Chef
        </h3>
        <h4 className="text-[#002E6D] text-3xl font-spaceTransit">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          ratione?
        </h4>
        <p className="text-center text-[#002E6D]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus sit dolores facilis, recusandae asperiores ipsum
          tenetur qui incidunt perferendis, ut animi vel quo ipsa rem.
        </p>
        <div className="flex justify-center items-center py-8 space-x-10">
          <PlatSuggest src="/casserole-poivron.png" alt="casserole de poivrons" title="CASSEROLLE DE POIVRON"/>
          <PlatSuggest src="/assiette-poulpe.png" alt="assiette de poulpe" title="POULPE AU PAPRIKA"/>
          <PlatSuggest src="/casserole_3fritures.png" alt="casserole trois fritures" title="CASSEROLLE AUX FRITURES"/>

        </div>
        <button className="hover:bg-[#002E6D] border border-[#002E6D] text-[#002E6D] font-medium hover:text-white w-fit duration-200 px-4 py-2">
          Découvrir le menu
        </button>
      </div>
    </div>
  );
}

export default SuggestionChef;
