"use client";
import { animate } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import javascriptSVG from "../../app/icons/javascript.svg";
import typescriptSVG from "../../app/icons/typescript.svg";
import reactjsSVG from "../../app/icons/reactjs.svg";
import html5SVG from "../../app/icons/html5.svg";
import css3SVG from "../../app/icons/css3.svg";
import nodeSVG from "../../app/icons/nodejs.svg";
import mongoSVG from "../../app/icons/mongodb.svg";
import androidSVG from "../../app/icons/android.svg";
import reduxSVG from "../../app/icons/redux.svg";
import nextSVG from "../../app/icons/nextjs.svg";
import awsSVG from "../../app/icons/aws.svg";
import firebaseSVG from "../../app/icons/firebase.svg";
import strapiSVG from "../../app/icons/strapi.svg";
import tailwindSVG from "../../app/icons/tailwind.svg";
import materialSVG from "../../app/icons/material.svg";
import Image from "next/image";

export function CardDemo() {
  return (
    <Card className="p-1">
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle>My Tech Stack</CardTitle>
      <CardDescription>I constantly try to improve.</CardDescription>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-6",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-7",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-8",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-9",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-10",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-11",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-12",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-13",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-14",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-15",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // Commented Animated Code
    animate(sequence, {
      // repeat: Infinity,
      // repeatDelay: 1,
    });
  }, []);
  return (
    <div className="h-full relative flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <div className="w-full flex flex-row  flex-wrap justify-center items-center gap-1 md:gap-2">
          <Container className="h-12 md:h-14 w-12 md:w-14 circle-1 bg-white">
            <HTMLLogo className="h-9 md:h-10 w-9 md:w-10 " />
          </Container>
          <Container className="h-12 md:h-14 w-12 md:w-14 circle-2 bg-white">
            <CSSLogo className="h-9 md:h-10 w-9 md:w-10 " />
          </Container>
          <Container className="h-12 md:h-16 w-12 md:w-16 circle-3 bg-white">
            <ReactJSLogo className="h-10 md:h-12 w-10 md:w-12" />
          </Container>
          <Container className="h-12 md:h-14 w-12 md:w-14 circle-4 bg-white">
            <JavaScriptLogo className="h-9 md:h-10 w-9 md:w-10 " />
          </Container>
          <Container className="h-12 md:h-14 w-12 md:w-14 circle-5 bg-white">
            <TypeScriptLogo className="h-9 md:h-10 w-9 md:w-10 " />
          </Container>
        </div>
        <div className="flex flex-row  flex-wrapflex-shrink-0 justify-center items-center gap-1 md:gap-2">
          <Container className="h-12 md:h-16 w-12 md:w-16 circle-6 bg-white">
            <NodeLogo className="h-10 w-10 " />
          </Container>
          <Container className="h-12 md:h-16 w-12 md:w-16 circle-7 bg-white">
            <MongoLogo className="h-8 w-8 dark:text-white" />
          </Container>
          <Container className="h-14 md:h-20 w-14 md:w-20 circle-8 bg-white">
            <NextLogo className="h-8 md:h-12 w-8 md:w-12" />
          </Container>
          <Container className="h-12 md:h-16 w-12 md:w-16 circle-9 bg-white">
            <AndroidLogo className="h-8 w-8 " />
          </Container>
          <Container className="h-12 md:h-16 w-12 md:w-16 circle-10 bg-white">
            <ReduxLogo className="h-8 w-8 " />
          </Container>
        </div>
        <div className="flex flex-row flex-wrap flex-shrink-0 justify-center items-center gap-2">
          <Container className="h-12 md:h-14 w-12 md:w-14 circle-11 bg-white">
            <StrapiLogo className="h-10 w-10 " />
          </Container>
          <Container className="h-12 md:h-14 w-12 md:w-14 circle-12 bg-white">
            <AWSLogo className="h-8 w-8 dark:text-white" />
          </Container>
          <Container className="h-14 w-14 circle-13 bg-white">
            <MaterialLogo className="h-8 w-8 dark:text-white" />
          </Container>
          <Container className="h-12 md:h-14 w-12 md:w-14 circle-14 bg-white">
            <FirebaseLogo className="h-8 w-8 " />
          </Container>
          <Container className="h-12 md:h-14 w-12 md:w-14 circle-15 bg-white">
            <TailwindLogo className="h-8 w-8 " />
          </Container>
        </div>
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " w-full mx-auto p-8 dark:bg-black-100 border-[rgba(255,255,255,0.10)] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "font-bold text-2xl dark:text-white py-1 text-center",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 text-center",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "w-full h-[12rem] md:h-[12rem] rounded-xl z-40 mb-4",
        className,
        showGradient
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const JavaScriptLogo = ({ className }: { className?: string }) => {
  return (
    <Image src={javascriptSVG} alt="Javascript Skill" className={className} />
  );
};
export const TypeScriptLogo = ({ className }: { className?: string }) => {
  return (
    <Image src={typescriptSVG} alt="Typecript Skill" className={className} />
  );
};
export const ReactJSLogo = ({ className }: { className?: string }) => {
  return <Image src={reactjsSVG} alt="ReactJs Skill" className={className} />;
};
export const HTMLLogo = ({ className }: { className?: string }) => {
  return <Image src={html5SVG} alt="Html5 Skill" className={className} />;
};
export const CSSLogo = ({ className }: { className?: string }) => {
  return <Image src={css3SVG} alt="css3 Skill" className={className} />;
};
export const NodeLogo = ({ className }: { className?: string }) => {
  return <Image src={nodeSVG} alt="nodejs Skill" className={className} />;
};
export const MongoLogo = ({ className }: { className?: string }) => {
  return <Image src={mongoSVG} alt="mongodb Skill" className={className} />;
};
export const AndroidLogo = ({ className }: { className?: string }) => {
  return <Image src={androidSVG} alt="android Skill" className={className} />;
};
export const ReduxLogo = ({ className }: { className?: string }) => {
  return <Image src={reduxSVG} alt="redux Skill" className={className} />;
};
export const NextLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      src={nextSVG}
      alt="nextjs Skill"
      className={className}
      style={{ color: "white" }}
    />
  );
};
export const AWSLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      src={awsSVG}
      alt="aws Skill"
      className={className}
      style={{ color: "white" }}
    />
  );
};
export const StrapiLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      src={strapiSVG}
      alt="strapi Skill"
      className={className}
      style={{ color: "white" }}
    />
  );
};
export const FirebaseLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      src={firebaseSVG}
      alt="firebase Skill"
      className={className}
      style={{ color: "white" }}
    />
  );
};
export const MaterialLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      src={materialSVG}
      alt="material Skill"
      className={className}
      style={{ color: "white" }}
    />
  );
};
export const TailwindLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      src={tailwindSVG}
      alt="tailwind Skill"
      className={className}
      style={{ color: "white" }}
    />
  );
};
