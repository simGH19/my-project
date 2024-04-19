"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "../Utils/cn";
import Image from "next/image";

export const EvervaultCard = ({
  className,
}: {
  text?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(30000);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "bg-transparent aspect-square  flex items-center justify-center w-full h-full relative cursor-none",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <Image
          src={"/simonbw.jpg"}
          alt={"Simon"}
          width={1280}
          height={100}
          style={{ borderRadius: "25px" }}
        />
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(100px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      {/* <motion.div
        className="absolute inset-0 "
        style={style}
      />
      <motion.div
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 flex items-center justify-center overflow-hidden object-fill"
        style={style}
      >
        <Image
          src={"/code.png"}
          alt={"simon"}
          width={1280}
          height={100}
          style={{ borderRadius: "25px" }}
        />
      </motion.div> */}

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black to-white opacity-0 group-hover/card:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-lg h-full break-words whitespace-pre-wrap text-black font-mono font-bold">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
