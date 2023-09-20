"use client";

import React from "react";
import PlatSuggest from "./PlatSuggest";
import Link from "next/link";
import { Variants, motion } from "framer-motion";

const imagesVariants: Variants = {
  hiddenFade: {
    opacity: 0,
  },
  visibleFade: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 3,
    },
  },
  hiddenBottom: {
    y: 100,
    opacity: 0,
  },
  visibleBottom: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
  hiddenLeft: {
    x: 200,
    opacity: 0,
  },
  visibleLeft: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
  hiddenRight: {
    x: -200,
    opacity: 0,
  },
  visibleRight: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};

function SuggestionChef() {
  return (
    <div className="relative w-full flex justify-center items-center pt-24 pb-40">
      <img
        src="/octopus-drawing-blue.png"
        alt=""
        className="absolute opacity-5 z-0 scale-150 overflow-x-hidden"
      />

      <div className="lg:w-3/5 w-5/6 flex flex-col justify-center items-center space-y-6 z-10">
        <motion.h3
          initial="hiddenBottom"
          whileInView="visibleBottom"
          viewport={{ once: true, margin: "-20%" }}
          variants={imagesVariants}
          className="text-[#002E6D] text-7xl font-spaceTransit tracking-wide leading-none"
        >
          Suggestions du Chef
        </motion.h3>
        <motion.h4
          initial="hiddenBottom"
          whileInView="visibleBottom"
          viewport={{ once: true, margin: "-20%" }}
          variants={imagesVariants}
          className="text-[#002E6D] text-3xl font-spaceTransit leading-none text-center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          ratione?
        </motion.h4>
        <motion.p
          initial="hiddenBottom"
          whileInView="visibleBottom"
          viewport={{ once: true, margin: "-20%" }}
          variants={imagesVariants}
          className="text-center text-[#002E6D]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus sit dolores facilis, recusandae asperiores ipsum
          tenetur qui incidunt perferendis, ut animi vel quo ipsa rem.
        </motion.p>

        <motion.div
          initial="hiddenFade"
          whileInView="visibleFade"
          viewport={{ once: true, margin: "-20%" }}
          variants={imagesVariants}
          className="flex flex-col lg:flex-row justify-center items-center py-8 lg:space-x-10 space-y-20 lg:space-y-0"
        >
          <PlatSuggest
            src="/casserole-poivron.png"
            alt="casserole de poivrons"
            title="CASSEROLLE DE POIVRON"
          />
          <PlatSuggest
            src="/assiette-poulpe.png"
            alt="assiette de poulpe"
            title="POULPE AU PAPRIKA"
          />
          <PlatSuggest
            src="/casserole_3fritures.png"
            alt="casserole trois fritures"
            title="CASSEROLLE AUX FRITURES"
          />
        </motion.div>

        <Link
          href="/menu"
          className="hover:bg-[#002E6D] border border-[#002E6D] text-[#002E6D] font-medium hover:text-white lg:w-fit w-full text-center text-xl lg:text-md duration-200 px-4 lg:py-2 py-4"
        >
          Découvrir le menu
        </Link>
      </div>
    </div>
  );
}

export default SuggestionChef;
