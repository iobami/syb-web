import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import spin from "../../../../public/media/landing/contact/islamic.png";
import lady from "../../../../public/media/landing/contact/lady.png";
import calendar from "../../../../public/media/landing/contact/Calendar.png";

function Arrow() {
  return (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5838 2.80497L13.806 12.6739M2.41612 13.1947L14.5838 2.80497L2.41612 13.1947ZM14.5838 2.80497L4.71494 2.02711L14.5838 2.80497Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BookACall() {
  return (
    <section className="contact_wrapper relative h-[120vh] mt-[250px] pb-[120px]">
      <div className="spin1 absolute top-[-8%] left-[20px]">
        <Image src={spin} alt="Decorative Spin" />
      </div>
      <div className="spin2 absolute bottom-[0] right-[20px]">
        <Image src={spin} alt="Decorative Spin" />
      </div>
      <div className="contact_container flex flex-col">
        <div className="contact_text flex-col flex items-center justify-center mt-[1rem]">
          <h1>Book a Call</h1>
          <section className="flex justify-center">
            <p className="w-[80%]">
              We believe great work starts with clarity and collaboration.
              Our approach is simple, intentional, and designed to keep you
              involved every step of the way.
            </p>
          </section>
        </div>
        <div className="contact_widget justify-center mt-[40px] flex gap-[50px] w-[100%]">
          <div className="flex-col flex items-center w-[50%]">
            <Image alt="Contact Representative" src={lady} className="w-[100%] h-fit" />
            <Button className="contact_btn">
              Book Now
              <Arrow />
            </Button>
          </div>
          <div className="w-[50%]">
            <Image alt="Calendar" src={calendar} className="w-[100%] h-fit" />
          </div>
        </div>
      </div>
    </section>
  );
} 