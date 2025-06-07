import React from "react";
import Image from "next/image";
import search from "../../../../public/media/landing/collab/search.png";
import Knight from "../../../../public/media/landing/collab/knight.png";
import care from "../../../../public/media/landing/collab/care.png";
import dev from "../../../../public/media/landing/collab/dev.png";
import pc from "../../../../public/media/landing/collab/pc.png";
import plus from "../../../../public/media/landing/collab/Frame3594.png";
import ellipse from "../../../../public/media/landing/collab/Ellipse9_2.png";

export function HowWeWork() {
  return (
    <section className="collab_wrapper w-full">
      <div className="w-full h-auto collab_container flex flex-col gap-[100px]">
        <Image src={ellipse} alt="Background" className="bg_collab w-full h-auto" />

        <div className="collab_text_wrapper">
          <section className="w-full collab_text">
            <h2 className="font-[600]">How Do We Work</h2>
            <p className="mt-2 text-gray-600 w-[50%]">
              We believe great work starts with clarity and collaboration.
              Our approach is simple, intentional, and designed to keep you
              involved every step of the way.
            </p>
          </section>

          <section className="collab_card_wrapper mt-[120px] justify-center flex">
            <div className="collab_card_container grid grid-cols-2 gap-[80px] auto-rows-auto gap-4 w-[50%] place-items-center">
              <div className="collab_card h-fit max-w-[300px] w-full">
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
              <div className="collab_card h-fit max-w-[300px] w-full">
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
              <div className="collab_card h-fit max-w-[300px] w-full">
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
              <div className="collab_card h-fit max-w-[300px] w-full">
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
              <div className="collab_card col-span-2 h-fit w-full max-w-[640px] mx-auto">
                <Image
                  alt="Support"
                  src={care}
                  className="w-[80px] absolute top-[-33%]"
                />
                <div className="collab_card_text mt-[2rem] gap-[5px]">
                  <p>Deliver & Support</p>
                  <Image alt="Plus" src={plus} className="w-fit" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
} 