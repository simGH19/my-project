import Image from "next/image";
import Link from "next/link";
import React from "react";
import Linked from "../Svg/linked";

export default function Hero() {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 base-section">
        <div className="flex flex-col justify-center order-first col-span-1 py-8 md:w-full w-4/5">
          <h1 className="text-white font-bebas text-4xl md:text-5xl font-medium mb-2">
            HI, I AM <br /> SIMON GUMMESSON.
          </h1>
          <p className="text-lg opacity-90">
            A Swedish based front-end developer passionate about building
            accessible and user friendly websites.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href={"#form"}
              className="btn-round flex items-center justify-center text-black my-4"
            >
              CONTACT ME
            </Link>
            <Link
            href={"https://www.linkedin.com/in/simon-gummesson-846960279/"}
            className="btn-circle flex text-lg justify-center items-center text-primary-100"
            target="_blanc"
          >
            <Linked />
          </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center col-span-1 py-8 rounded-lg">
          <Image src={"/simonbw.jpg"} alt={"Simon"} width={1280} height={100} style={{borderRadius: "25px"}} />
        </div>
      </div>
      <hr className="h-0.5 bg-secondary-100 opacity-50 my-12" />
    </section>
  );
}
