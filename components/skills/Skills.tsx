import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center"
    >
      <p className="absolute top-12 tracking-[20px] text-[#F7AB4A]/40 uppercase">
        Skills
      </p>

      <p className="absolute top-24 uppercase tracking-[3px] text-gray-500 text-[12px]">
        Hover over a skill for current proficiency
      </p>

      <div className="grid grid-cols-4 gap-5 pt-[70px]">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
