"use client"
import { motion } from "framer-motion";
import React from "react";
import BubbleUnit from "./BubbleUnit";

function Bubble() {
  return (
    <>
        <motion.div
        animate={{
            scale: [1, 1.5],
            y: [50, -2000],
            x: [0, -100, 0, 100],
        }}
        transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
        }}
        className="bg-transparent border border-white/50 w-8 h-8 rounded-full z-0 absolute bottom-0"
        >
            <BubbleUnit />
        </motion.div>

        <motion.div
        animate={{
            scale: [1, 1.5],
            y: [50, -2000],
            x: [0, -100, 0, 100],
        }}
        transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 1,
        }}
        className="bg-transparent border border-white/50 w-8 h-8 rounded-full z-0 absolute bottom-0 left-6"
        >
            <BubbleUnit />
        </motion.div>

        <motion.div
        animate={{
            scale: [1, 1.5],
            y: [50, -2000],
            x: [0, -150, 0, 50],
        }}
        transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 2,
        }}
        className="bg-transparent border border-white/50 w-8 h-8 rounded-full z-0 absolute bottom-0 right-6"
        >
            <BubbleUnit />
        </motion.div>

        <motion.div
        animate={{
            scale: [1, 1.5],
            y: [50, -2000],
            x: [0, -200, 0, 150],
        }}
        transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 2.6,
        }}
        className="bg-transparent border border-white/50 w-8 h-8 rounded-full z-0 absolute bottom-0 left-64"
        >
            <BubbleUnit />
        </motion.div>

        <motion.div
        animate={{
            scale: [1, 1.5],
            y: [50, -2000],
            x: [0, -150, 0, 150],
        }}
        transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 3,
        }}
        className="bg-transparent border border-white/50 w-8 h-8 rounded-full z-0 absolute bottom-0 right-64"
        >
            <BubbleUnit />
        </motion.div>

        <motion.div
        animate={{
            scale: [1, 1.5],
            y: [50, -2000],
            x: [0, -150, 0, 250],
        }}
        transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 3.5,
        }}
        className="bg-transparent border border-white/50 w-8 h-8 rounded-full z-0 absolute bottom-0 left-1/2"
        >
            <BubbleUnit />
        </motion.div>

        <motion.div
        animate={{
            scale: [1, 1.5],
            y: [50, -2000],
            x: [0, -150, 0, 250],
        }}
        transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 4.2,
        }}
        className="bg-transparent border border-white/50 w-8 h-8 rounded-full z-0 absolute bottom-0 right-1/3"
        >
            <BubbleUnit />
        </motion.div>

        <motion.div
        animate={{
            scale: [1, 1.5],
            y: [50, -2000],
            x: [0, -100, 0, 50],
        }}
        transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 5.2,
        }}
        className="bg-transparent border border-white/50 w-8 h-8 rounded-full z-0 absolute bottom-0 left-1/4"
        >
            <BubbleUnit />
        </motion.div>

        <motion.div
        animate={{
            scale: [1, 1.5],
            y: [50, -2000],
            x: [0, -300, 0, 100],
        }}
        transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 6,
        }}
        className="bg-transparent border border-white/50 w-8 h-8 rounded-full z-0 absolute bottom-0 right-1/4"
        >
            <BubbleUnit />
        </motion.div>

        <motion.div
        animate={{
            scale: [1, 1.5],
            y: [50, -2000],
            x: [0, -50, 0, 150],
        }}
        transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 6.1,
        }}
        className="bg-transparent border border-white/50 w-8 h-8 rounded-full z-0 absolute bottom-0 right-1/2"
        >
            <BubbleUnit />
        </motion.div>

        <motion.div
        animate={{
            scale: [1, 1.5],
            y: [50, -2000],
            x: [0, -150, 0, 150],
        }}
        transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 7.5,
        }}
        className="bg-transparent border border-white/50 w-8 h-8 rounded-full z-0 absolute bottom-0 right-96"
        >
            <BubbleUnit />
        </motion.div>

        <motion.div
        animate={{
            scale: [1, 1.5],
            y: [50, -2000],
            x: [0, -100, 0, 100],
        }}
        transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 8.2,
        }}
        className="bg-transparent border border-white/50 w-8 h-8 rounded-full z-0 absolute bottom-0 left-96"
        >
            <BubbleUnit />
        </motion.div>

        <motion.div
        animate={{
            scale: [1, 1.5],
            y: [50, -2000],
            x: [0, -100, 0, 300],
        }}
        transition={{
            duration: 10,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: 9,
        }}
        className="bg-transparent border border-white/50 w-8 h-8 rounded-full z-0 absolute bottom-0 right-1/4"
        >
            <BubbleUnit />
        </motion.div>
    </>
  );
}

export default Bubble;
