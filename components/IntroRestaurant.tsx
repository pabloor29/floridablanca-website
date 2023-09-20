import Link from "next/link";
import React from "react";

function IntroRestaurant() {
  return (
    <div className="bg-[#F0F5FF] flex justify-center items-center py-32 border-b-2 border-[#002E6D]">
      <div className="lg:w-3/5 flex flex-col lg:flex-row justify-center items-center lg:space-x-20 space-y-10">
        <div className="lg:w-1/2 w-5/6">
          <img src="/octopus-drawing-blue.png" alt="" className="-scale-x-100"/>
        </div>
        <div className="lg:w-1/2 w-5/6 flex flex-col space-y-8">
          <h3 className="text-[#002E6D] text-5xl font-medium font-spaceTransit leading-none">
            Restaurant de Tapas Specialites Espagnoles
          </h3>
          <article className="text-[#274b7e] text-justify lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            culpa enim ab delectus, doloribus repudiandae! Unde atque ipsa
            repudiandae. Perspiciatis, possimus id ipsa quidem tempore, itaque
            aspernatur nostrum, et iste deleniti unde accusantium. Eum
            doloremque minima omnis atque ratione repudiandae?
          </article>
          <Link href="/apropos" className="bg-[#002E6D] hover:bg-transparent border hover:border-[#002E6D] text-white font-medium hover:text-[#002E6D] w-fit duration-200 px-4 py-3">
            Notre histoire
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntroRestaurant;
