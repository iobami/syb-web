import React from "react";
import Image from "next/image";
import serv from "../../../../public/media/landing/service/Services.png";

export function OurServices() {
  return (
    <section className="service_wrapper flex flex-col gap-[32px] items-center justify-center mt-[100px] bg-[url('/media/landing/service/Bgservice.png')]">
      <div className="flex flex-col service_container">
        <div className="service_text">
          <h1 className="text-[2.2rem]">Our Services</h1>
          <p>
            We offer end-to-end branding solutions, whether you&apos;re launching
            a new brand or refining an existing one, we tailor every detail
            to align with your vision and connect with your audience.
            <span> Not sure? Book a call</span>
          </p>
        </div>
        <div className="service_widget">
          <Image src={serv} alt="Our Services" />
        </div>
      </div>
    </section>
  );
} 