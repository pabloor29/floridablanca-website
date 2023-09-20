import React from "react";

function CustomHeroBanner(props: any) {
  return (
    <div className="grid place-items-center h-96">
      <div className="w-full h-1/2 bg-black/50 z-10 absolute"></div>
      <img
        src="/bar-black.png"
        alt=""
        className="h-1/2 w-full object-cover absolute z-0"
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-center leading-none">
        <h1
          className="text-bigSM lg:text-bigLG text-white font-spaceTransit
            tracking-wide z-30 drop-shadow-[5px_5px_0_#00A6E6]"
        >
          {props.title}
        </h1>
      </div>
    </div>
  );
}

export default CustomHeroBanner;
