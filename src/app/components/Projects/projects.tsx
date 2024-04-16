import Image from "next/image";
import Link from "next/link";
import React from "react";
import Arrowright from "../Svg/arrowright";
import { borderRadius } from "tailwindcss-classnames";

export default function Projects() {
  return (
    <section className="md:my-28">
      <div className="base-section">
        <div className="py-8">
          <h1 className="text-white font-bebas text-5xl font-medium mb-2">
            Featured Projects
          </h1>
          <p className="text-secondary-100 text-base md:w-1/2">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 flex flex-col justify-center">
            <div className="rounded-xl bg-primary-200 hover:bg-transparent transition  p-8">
              <Image
                src={"/flowbic.png"}
                alt={"Simon"}
                width={1280}
                height={100}
                className="rounded-xl hover:scale-110 transition object-cover"
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h2 className="text-3xl ">
              Flowbic webpage
            </h2>
            <p className="py-4 text-base text-secondary-100">
              Teamed up with a designer to breathe life into Flowbic&apos;s website where i had my internship
              during my studies. This was an already existing website where i got tasked with improving the design and also implement
              some new features like OpenAI API chatbot.
            </p>
            <p>PROJECT INFO</p>
            <hr className="my-4 h-0.5 bg-secondary-100 opacity-50" />
            <div className="flex justify-between">
              <p>Tech stack</p>
              <p className="text-secondary-100">Next.js / Tailwind css / Typescript / Node</p>
            </div>
            <hr className="my-4 h-0.5 bg-secondary-100 opacity-50" />
            <div className="flex justify-between">
              <p>Role</p>
              <p className="text-secondary-100">Front-end Developer</p>
            </div>
            <hr className="my-4 h-0.5 bg-secondary-100 opacity-50" />
            <Link href={"https://www.flowbic.se/"} target="_blanc">
              <div className=" underline underline-offset-4 text-primary-100 flex">
                LIVE VIEW <Arrowright />
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-24">
          <div className="col-span-1 flex flex-col justify-center">
            <div className="rounded-xl bg-primary-200 hover:bg-transparent transition  p-8">
              <Image
                src={"/reliable.png"}
                alt={"Simon"}
                width={1280}
                height={600}
                className="rounded-xl hover:scale-110 transition"
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h2 className="text-3xl ">
              New webpage for Reliable.se
            </h2>
            <p className="py-4 text-base text-secondary-100">
              My first customer project where i got tasked with building a new website for Reliable, an company working with sales development,
              bookings and telemarketing. They needed a new design and some neat features to improve their bookings system
               and a CMS so they can adjust texts/images themself for the future.
              This is an ongoing project and it just went live in its first release.
            </p>
            <p>PROJECT INFO</p>
            <hr className="my-4 h-0.5 bg-secondary-100 opacity-50" />
            <div className="flex justify-between">
              <p>Tech stack</p>
              <p className="text-secondary-100">Next.js / Tailwind css / Contentful CMS</p>
            </div>
            <hr className="my-4 h-0.5 bg-secondary-100 opacity-50" />
            <div className="flex justify-between">
              <p>Role</p>
              <p className="text-secondary-100">Fullstack Developer</p>
            </div>
            <hr className="my-4 h-0.5 bg-secondary-100 opacity-50" />
            <Link href={"https://reliable-roan.vercel.app/"} target="_blanc">
              <div className=" underline underline-offset-4 text-primary-100 flex">
                LIVE VIEW <Arrowright />
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 flex flex-col justify-center">
            <div className="rounded-xl bg-primary-200 hover:bg-transparent transition p-8">
              <Image
                src={"/placeholder.webp"}
                alt={"Simon"}
                width={1280}
                height={600}
                className="rounded-xl hover:scale-110 transition"
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h2 className="text-3xl ">
              Promotional landing page for our favorite show
            </h2>
            <p className="py-4 text-base text-secondary-100">
              Teamed up with a designer to breathe life into a promotional
              webpage for our beloved show, Adventure Time. Delivered a fully
              responsive design with dynamic content capabilities, seamlessly
              integrating a newsletter feature to keep fans updated with the
              latest adventures.
            </p>
            <p>PROJECT INFO</p>
            <hr className="my-4 h-0.5 bg-secondary-100 opacity-50" />
            <div className="flex justify-between">
              <p>Year</p>
              <p className="text-secondary-100">2023</p>
            </div>
            <hr className="my-4 h-0.5 bg-secondary-100 opacity-50" />
            <div className="flex justify-between">
              <p>Role</p>
              <p className="text-secondary-100">Front-end Developer</p>
            </div>
            <hr className="my-4 h-0.5 bg-secondary-100 opacity-50" />
            <Link href={"/"}>
              <div className=" underline underline-offset-4 text-primary-100 flex">
                LIVE VIEW <Arrowright />
              </div>
            </Link>
          </div>
        </div> */}
      </div>
      <hr className="h-0.5 bg-secondary-100 opacity-50 my-16" />
    </section>
  );
}
