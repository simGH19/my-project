"use client";
import Link from "next/link";
import React from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../Utils/sendEmail";
import Linked from "../Svg/linked";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <section className="base-section">
      <div className="grid md:grid-cols-2">
        <div className="colo-span-1 flex flex-col pb-12 md-pb-0">
          <h1 className="text-6xl font-bebas">Let’s connect</h1>
          <p className="text-secondary-100 py-4">
            Say hello at{" "}
            <Link
              href={"mailto:siiimonngummeson@gmail.com"}
              className="underline underline-offset-2 text-primary-100"
            >
              siiimonngummesson@gmail.com
            </Link>{" "}
            <br />
            For more info, here’s my{" "}
            <Link
              href={"https://aquamarine-aurie-46.tiiny.site"}
              className="underline underline-offset-2 text-primary-100"
              target="_blanc"
            >
              resume
            </Link>
          </p>
          <Link
            href={"https://www.linkedin.com/in/simon-gummesson-846960279/"}
            className="btn-circle flex text-lg justify-center items-center text-primary-100"
            target="_blanc"
          >
            <Linked />
          </Link>
        </div>
        <div className="col-span-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-secondary-100"
              >
                Full name
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("name", { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-secondary-100"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-secondary-100"
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div>
              <button className="btn-round text-black">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
