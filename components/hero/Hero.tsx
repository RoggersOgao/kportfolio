import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeaderCircles from "../headerCircles/HeaderCircles";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, Kelly Here...", "Techie-at-work.tsx", "<LiveInCode/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 item-center justify-center text-center overflow-hidden">
      <HeaderCircles />
      <div className="flex justify-center">
        <Image
          className="rounded-full"
          src="/images/kevo.jpg"
          alt="Kelvin Photo in a photostudio"
          width={120}
          height={120}
          priority
        />
      </div>
      <div className="overflow-hidden justify-center flex flex-col text-center z-20">
        <h2 className="text-xs lg:text-xm uppercase text-gray-500 pb-4 tracking-[6px]">
          Software Engineer & Graphic Designer
        </h2>
        <h1 className="text-2xl lg:text-6xl  px-10 pb-6 text-bold w-[50%] mx-auto overflow-hidden ">
          <span className="typeText">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
        <div className="text-sm uppercase text-gray-500 pb-4 tracking-[6px]">
          <Link href="#about">
            <button className="herobutton">About</button>
          </Link>
          <Link href="#experience">
            <button className="herobutton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="herobutton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="herobutton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
