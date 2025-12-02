import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundBeamsWithCollision } from "./ui/Background";
import { TextGenerateEffect } from "./ui/TextGenerate";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="px-5 pt-32 md:pt-46 pb-5 md:pb-16">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-white uppercase tracking-widest text-xs text-center max-w-80">
          Dynamic Web Magic with Next.js
        </h1>

        <TextGenerateEffect
          className="text-white text-center text-[30px] md:text-5xl lg:text-6xl"
          words="Transforming Concepts into Seamless User Experiences"
          duration={0.5}
        />

        <p className="text-center text-white">
          Hi, I&apos;m Ajay Shirke, a Full Stack Developer based in Mumbai.
        </p>
        <Link href="/#experience">
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
