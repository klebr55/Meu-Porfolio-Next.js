"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { slideInFromTop } from "@/utils/motion"
import { slideInFromLeft } from "@/utils/motion"
import { slideInFromRight } from "@/utils/motion"
import { SparklesIcon } from "@heroicons/react/16/solid"

interface HeroContentProps {
    imageSrc?: string;
}

const HeroContent = ({ imageSrc = "/mainIconsdark.svg" }: HeroContentProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Front-End Web Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          My name is Kleber Vinícius, I&apos;m 22 years old and I&apos;m a
          front-end web developer with experience in building responsive and
          user-friendly web applications. I have a passion for creating
          beautiful and functional websites that provide an excellent user
          experience.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] "
        >
          learn more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify items-center"
      >
        <Image
          src={imageSrc}
          alt="work icon"
          width={650}
          height={650}
          unoptimized
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
