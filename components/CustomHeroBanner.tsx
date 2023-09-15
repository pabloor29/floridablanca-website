import React from "react";

function CustomHeroBanner(props: any) {
  return (
    <div className="grid place-items-center h-[500px]">
      <div className="w-full h-[500px] bg-black/50 z-10 absolute"></div>
      <img
        src="/bar-black.png"
        alt=""
        className="h-[500px] w-full object-cover absolute z-0"
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-center leading-none">
        <h1
          className="text-[200px] text-white font-spaceTransit
            tracking-wide z-30"
        >
          {props.title}
        </h1>
        <h1
          className="text-[200px] text-[#00A6E6] left-1 absolute font-spaceTransit
            tracking-wide"
        >
          {props.title}
        </h1>
      </div>
    </div>
  );
}

export default CustomHeroBanner;
