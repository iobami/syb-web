import React from "react";
import Image from "next/image";
import x from "../../../../public/media/landing/footer/x.png";
import foot from "../../../../public/media/landing/footer/stud.png";
import im from "../../../../public/media/landing/footer/in.png";
import face from "../../../../public/media/landing/footer/face.png";

export function Footer() {
  return (
    <section className="footer-wrapper flex flex-col px-4 sm:px-[5rem] text-white h-fit mt-[150px] bg-black">
      <div className="footer-contents flex flex-col md:flex-row justify-between gap-8 md:gap-4 p-4 sm:p-[2rem]">

        {/* Logo and Socials */}
        <section className="footer-cap flex flex-col gap-[11px]">
          <div className="footer-logo w-[150px] sm:w-full items-center">
            <Image alt="Footer Logo" src={foot} className="w-[65%] h-fit" />
          </div>
          <div className="footer-socials flex gap-[10px] items-center">
            <Image alt="LinkedIn" className="w-6 h-6 sm:w-full sm:h-fit cursor-pointer" src={im} />
            <Image alt="Facebook" className="w-6 h-6 sm:w-full sm:h-fit cursor-pointer" src={face} />
            <Image alt="Twitter" className="w-6 h-6 sm:w-full sm:h-fit cursor-pointer" src={x} />
          </div>
        </section>

        {/* Contact */}
        <section className="footer-contact">
          <h1 className="text-[17px] font-semibold mb-1">Contact Us</h1>
          <ul className="lists text-sm sm:text-base">
            <li>Tel:(234+) 6666 6666 66</li>
            <li>Email: Info@Sybstudio.com</li>
          </ul>
        </section>

        {/* Navigation */}
        <section className="footer-navigation">
          <h1 className="text-[17px] font-semibold mb-1">Navigation</h1>
          <ul className="lists text-sm sm:text-base">
            <li>Home</li>
            <li>About Us</li>
            <li>How we work</li>
            <li>Our Service</li>
            <li>Our Team</li>
          </ul>
        </section>

        {/* More Links */}
        <section className="footer-extralinks">
          <h1 className="text-[17px] font-semibold mb-1">More Links</h1>
          <ul className="lists text-sm sm:text-base">
            <li>Book a call</li>
            <li>Start a Project</li>
            <li>Pricing</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </section>
      </div>

      {/* Bottom Bar */}
      <div className="footer-extra flex flex-wrap justify-center items-center text-sm gap-4 sm:gap-[45px] px-4 py-3 border-t border-[#484a4d]">
        <p className="cursor-pointer">Terms</p>
        <p className="cursor-pointer">Privacy</p>
        <p className="cursor-pointer">Cookies</p>
      </div>
    </section>

  );
} 