"use client";
import { Variants, motion } from "framer-motion";
import React from "react";

const textVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

function CustomHeroBanner(props: any) {
  return (
    <div className="h-96">
      <div className="w-full h-1/2 bg-black/50 z-10 absolute"></div>
      <img
        src={props.img}
        alt=""
        className="h-1/2 w-full object-cover absolute z-0 grayscale"
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-center leading-none">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-bigSM lg:text-bigLG text-white font-spaceTransit
            tracking-wide z-40 drop-shadow-[5px_5px_0_#00A6E6]"
        >
          {props.title}
        </motion.h1>
      </div>
    </div>
  );
}

export default CustomHeroBanner;
