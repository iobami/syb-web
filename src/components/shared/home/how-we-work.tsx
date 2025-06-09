import React from "react";
import Image from "next/image";
import search from "../../../../public/media/landing/collab/search.png";
import Knight from "../../../../public/media/landing/collab/knight.png";
import care from "../../../../public/media/landing/collab/care.png";
import dev from "../../../../public/media/landing/collab/dev.png";
import pc from "../../../../public/media/landing/collab/pc.png";
import plus from "../../../../public/media/landing/collab/Frame3594.png";

export function HowWeWork() {
  return (
    <section className="collab_wrapper w-full px-4 sm:px-6 md:px-8 py-8">
      <div className="w-full h-auto collab_container flex flex-col gap-[100px]">
        <div className="collab_text_wrapper">
          <section className="w-full collab_text text-center md:text-left">
            <h2 className="font-[600] text-xl sm:text-2xl md:text-3xl">How Do We Work</h2>
            <p className="mt-2 text-gray-600 w-full md:w-[50%] mx-auto md:mx-0 text-sm sm:text-base">
              We believe great work starts with clarity and collaboration.
              Our approach is simple, intentional, and designed to keep you
              involved every step of the way.
            </p>
          </section>

          <section className="collab_card_wrapper mt-[80px] flex justify-center">
            <div className="collab_card_container flex flex-wrap justify-center gap-[4rem] w-full md:w-[90%] lg:w-[80%]">
              <div className="collab_card h-fit max-w-[300px] w-full relative">
                <Image
                  alt="Discover"
                  src={search}
                  className="w-[80px] absolute top-[-33%]"
                />
                <div className="collab_card_text mt-[2rem] gap-[5px]">
                  <p>Discover</p>
                  <Image alt="Plus" src={plus} className="w-fit" />
                </div>
              </div>
              <div className="collab_card h-fit max-w-[300px] w-full relative">
                <Image
                  alt="Branding"
                  src={Knight}
                  className="w-[80px] absolute top-[-33%]"
                />
                <div className="collab_card_text mt-[2rem] gap-[5px]">
                  <p>Branding & Strategy</p>
                  <Image alt="Plus" src={plus} className="w-fit" />
                </div>
              </div>
              <div className="collab_card h-fit max-w-[300px] w-full relative">
                <Image
                  alt="Design"
                  src={pc}
                  className="w-[80px] absolute top-[-33%]"
                />
                <div className="collab_card_text mt-[2rem] gap-[5px]">
                  <p>Design</p>
                  <Image alt="Plus" src={plus} className="w-fit" />
                </div>
              </div>
              <div className="collab_card h-fit max-w-[300px] w-full relative">
                <Image
                  alt="Develop"
                  src={dev}
                  className="w-[80px] absolute top-[-33%]"
                />
                <div className="collab_card_text mt-[2rem] gap-[5px]">
                  <p>Develop</p>
                  <Image alt="Plus" src={plus} className="w-fit" />
                </div>
              </div>
              <div className="collab_card h-fit w-full max-w-[640px] relative">
                <Image
                  alt="Support"
                  src={care}
                  className="w-[80px] absolute top-[-33%]"
                />
                <div className="collab_card_text mt-[2rem] gap-[5px] text-center">
                  <p>Deliver & Support</p>
                  <Image alt="Plus" src={plus} className="w-fit mx-auto" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

  );
} 