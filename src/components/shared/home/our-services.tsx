import React from "react";
import Image from "next/image";
import serv from "../../../../public/media/landing/service/Services.png";

export function OurServices() {
  return (
    <section className="service_wrapper flex flex-col gap-[32px] items-center justify-center mt-[100px] px-4 sm:px-8">
      <div className="flex flex-col items-center text-center w-full max-w-[1200px] gap-[32px] service_container">

        <div className="service_text mb-6 px-2 sm:px-0">
          <h1 className="text-[1.5rem] sm:text-[2.2rem] font-bold">Our Services</h1>
          <p className="text-sm sm:text-base mt-2">
            We offer end-to-end branding solutions, whether you&apos;re launching
            a new brand or refining an existing one, we tailor every detail
            to align with your vision and connect with your audience.
            <span className="block sm:inline font-medium"> Not sure? Book a call</span>
          </p>
        </div>

        <div className="service_widget w-full">
          <Image
            src={serv}
            alt="Our Services"
            className="w-full h-auto max-w-[700px] mx-auto"
          />
        </div>

      </div>
    </section>

  );
} 