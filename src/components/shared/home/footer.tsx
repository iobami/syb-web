import React from "react";
import Image from "next/image";
import x from "../../../../public/media/landing/footer/x.png";
import foot from "../../../../public/media/landing/footer/footer-logo.png";
import im from "../../../../public/media/landing/footer/in.png";
import face from "../../../../public/media/landing/footer/face.png";

export function Footer() {
  return (
    <section className="footer-wrapper flex flex-col pl-[5rem] pr-[5rem] text-white h-fit mt-[150px] bg-black">
      <div className="footer-contents justify-between p-[2rem] flex gap-4">
        <section className="footer-cap gap-[11px] flex flex-col">
          <div className="footer-logo w-full items-center">
            <Image alt="Footer Logo" src={foot} className="w-full h-fit" />
          </div>
          <div className="footer-socials gap-[10px] items-center flex">
            <Image alt="LinkedIn" className="w-full h-fit cursor-pointer" src={im} />
            <Image alt="Facebook" className="w-full h-fit cursor-pointer" src={face} />
            <Image alt="Twitter" className="w-full h-fit cursor-pointer" src={x} />
          </div>
        </section>
        <section className="footer-contact">
          <h1 className="text-[17px]">Contact Us</h1>
          <ul className="lists">
            <li>Tel:(234+) 6666 6666 66</li>
            <li>Email: Info@Sybstudio.com</li>
          </ul>
        </section>
        <section className="footer-navigation">
          <h1 className="text-[17px]">Navigation</h1>
          <ul className="lists">
            <li>Home</li>
            <li>About Us</li>
            <li>How we work</li>
            <li>Our Service</li>
            <li>Our Team</li>
          </ul>
        </section>
        <section className="footer-extralinks">
          <h1 className="text-[17px]">More Links</h1>
          <ul className="lists">
            <li>Book a call</li>
            <li>Start a Project</li>
            <li>Pricing</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </section>
      </div>
      <div className="footer-extra flex p-2 justify-center gap-[45px]" style={{borderTop: '1px solid #484a4d'}}>
        <p className="cursor-pointer">Terms</p>
        <p className="cursor-pointer">Privacy</p>
        <p className="cursor-pointer">Cookies</p>
      </div>
    </section>
  );
} 