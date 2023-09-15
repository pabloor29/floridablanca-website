import React from "react";

function SuggestionChef() {
  return (
    <div className="w-full flex justify-center items-center py-32">
      <div className="w-3/5 flex flex-col justify-center items-center space-y-6">
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
        <div className="flex justify-center items-center py-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <img src="/food-plate-example.png" alt="" />
            <h4 className="text-5xl text-[#002E6D] font-spaceTransit">
              FOOD TITLE
            </h4>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6">
            <img src="/food-plate-example.png" alt="" />
            <h4 className="text-5xl text-[#002E6D] font-spaceTransit">
              FOOD TITLE
            </h4>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6">
            <img src="/food-plate-example.png" alt="" />
            <h4 className="text-5xl text-[#002E6D] font-spaceTransit">
              FOOD TITLE
            </h4>
          </div>
        </div>
        <button className="hover:bg-[#002E6D] border border-[#002E6D] text-[#002E6D] font-medium hover:text-white w-fit duration-200 px-4 py-2">
          Découvrir le menu
        </button>
      </div>
    </div>
  );
}

export default SuggestionChef;
