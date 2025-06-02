"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/media/landing/logo.png";
import serv from "../../public/media/landing/service/Services.png";
import search from "../../public/media/landing/collab/search.png";
import Knight from "../../public/media/landing/collab/knight.png";
import care from "../../public/media/landing/collab/care.png";
import dev from "../../public/media/landing/collab/dev.png";
import pc from "../../public/media/landing/collab/pc.png";
import plus from "../../public/media/landing/collab/Frame3594.png";
import spin from "../../public/media/landing/contact/islamic.png";
import lady from "../../public/media/landing/contact/lady.png";
import cakendar from "../../public/media/landing/contact/Calendar.png";
import x from "../../public/media/landing/footer/x.png";
import foot from "../../public/media/landing/footer/footer-logo.png";
import im from "../../public/media/landing/footer/in.png";
import face from "../../public/media/landing/footer/face.png";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import ellipse from "../../public/media/landing/collab/Ellipse9_2.png";
import "swiper/css";
import { Calendar } from "lucide-react";

const people = [
  {
    id: 1,
    name: "Babajide",
    position: "Chief Operating Officer",
    image: "/media/landing/avatar/AvatarImage.png",
  },
  {
    id: 2,
    name: "MADE",
    position: "Chief Creative Officer",
    image: "/media/landing/avatar/AvatarImage.png",
  },
  {
    id: 3,
    name: "Ayobami",
    position: "Lead Web Developer",
    image: "/media/landing/avatar/AvatarImage_3.png",
  },
  {
    id: 4,
    name: "chinenye",
    position: "Lead Ui/Ux Designer",
    image: "/media/landing/avatar/AvatarImage_4.png",
  },
  {
    id: 5,
    name: "derin",
    position: "Visual Designer /Typographer",
    image: "/media/landing/avatar/AvatarImage.png",
  },
  {
    id: 6,
    name: "Frank Chen",
    position: "Support",
    image: "/media/landing/avatar/AvatarImage_3.png",
  },
  {
    id: 7,
    name: "Grace Liu",
    position: "HR",
    image: "/media/landing/avatar/AvatarImage_4.png",
  },
  {
    id: 8,
    name: "Hank Miller",
    position: "Sales",
    image: "/media/landing/avatar/AvatarImage.png",
  },
];

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

const MainComponent = () => {
  return (
    <div className="baba_wrapper">
      <main className="h-full app_main">
        <section className="app_main__hero bg-[url('/media/landing/hero-2x.png')]">
          <div className="app_main__hero__text_area">
            <nav className="navbar-component">
              <section className="nav_brand">
                <Image src={logo} alt="" />
              </section>
              <section className="nav_links_wrapper">
                <ul className="nav_links">
                  <li>Service</li>
                  <li>Portfolio</li>
                  <li>Pricing</li>
                  <li>Blog</li>
                  <li>About</li>
                </ul>
              </section>
            </nav>
            <div
              className="flex flex-col gap-[16px] main_text-wrapper items-center"
              style={{ fontWeight: "500" }}
            >
              <h1>Built to Speak. Made to Last</h1>

              <p className="w-[81%]">
                SYB Studios turns bold ideas into unforgettable brand
                experiences. From strategy to design, we help you connect,
                engage, and grow.
              </p>
            </div>

            <Button>
              Work With Us
              <Arrow />
            </Button>
          </div>
        </section>

        <section className="app_main__prev_work">
          <div className="app_main__prev_work__text_area">
            <h2>Previous Work</h2>

            <p>
              Maybe we can put a write-up here. Maybe just maybe. Writing here
              as an example of what it’ll look like. Please don’t judge me.
              Thank you
            </p>
          </div>

          <div className="app_main__prev_work__portfolio app_landing__mx">
            <div className="app_main__prev_work__portfolio__item app_main__prev_work__portfolio__item--3">
              <div className="app_main__prev_work__portfolio__item__img">
                <Image
                  src="/media/landing/portfolio/Design8.png"
                  alt="item 3"
                  fill
                />
              </div>
            </div>

            <div className="app_main__prev_work__portfolio__item app_main__prev_work__portfolio__item--2">
              <div className="app_main__prev_work__portfolio__item__img">
                <Image
                  src="/media/landing/portfolio/Design9.png"
                  alt="item 2"
                  fill
                />
              </div>
            </div>

            <div className="app_main__prev_work__portfolio__item app_main__prev_work__portfolio__item--1">
              <div className="app_main__prev_work__portfolio__item__img">
                <Image
                  src="/media/landing/portfolio/d-10.png"
                  alt="item 1"
                  fill
                />
              </div>
            </div>

            <div className="app_main__prev_work__portfolio__item app_main__prev_work__portfolio__item--2">
              <div className="app_main__prev_work__portfolio__item__img">
                <Image
                  src="/media/landing/portfolio/Design7.png"
                  alt="item 2.1"
                  fill
                />
              </div>
            </div>

            <div className="app_main__prev_work__portfolio__item app_main__prev_work__portfolio__item--3">
              <div className="app_main__prev_work__portfolio__item__img">
                <Image
                  src="/media/landing/portfolio/Design6.png"
                  alt="item 3.1"
                  fill
                />
              </div>
            </div>
          </div>
        </section>
        <section className="work_wrapper flex justify-center bg-[url('/media/landing/smoke.png')]">
          <div className="relative flex work_container items-center justify-center p-8">
            {/* <Image
              src={smoke}
              alt="Smoke"
              className="absolute inset-0 m-auto w-64 max-w-full opacity-30 pointer-events-none"
            /> */}
            <div className="items-center w-[80%] flex flex-col gap-[24px]">
              <section className="relative z-10 text-center flex flex-col w-[100%] items-center gap-[24px]">
                <h1 className="text-4xl font-bold text-white">Work With Us</h1>
                <p className="mt-2 text-lg text-white w-[68%]">
                  Maybe we can put a write-up here. Maybe just maybe. Writing
                  here as an example of what it’ll look like. Please don’t judge
                  me. Thank you
                </p>
              </section>
              <section className="work_btns flex gap-[1rem]">
                <Button>
                  Email Us
                  <Arrow />
                </Button>
                <Button>
                  Book a Call
                  <Arrow />
                </Button>
                <Button>
                  SYB Socials
                  <Arrow />
                </Button>
              </section>
            </div>
          </div>
        </section>
        <section className="team_wrapper overflow-hidden ">
          <div className="team_text">
            <main className="team_text_cont">
              <h1>Meet The Team</h1>
              <p>
                Meet the faces behind the stories we craft — the creatives,
                strategists, and makers who bring brands to life with passion,
                purpose, and a whole lot of heart.
              </p>
            </main>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1 }, // mobile
              640: { slidesPerView: 2 }, // small tablets
              768: { slidesPerView: 3 }, // large tablets
              1024: { slidesPerView: 4 }, // desktops and up
            }}
            className="cursor-grab active:cursor-grabbing"
            style={{ padding: "20px !important" }}
          >
            {people.map((person) => (
              <SwiperSlide key={person.id}>
                <div className="card_wrapper rounded-lg p-4 flex flex-col items-center">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-32 h-32 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-md font-semibold mt-[1rem]">
                    {person.name}
                  </h3>
                  <p className="text-black mt-[1rem]">{person.position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className="service_wrapper flex flex-col gap-[32px] items-center justify-center mt-[100px]  bg-[url('/media/landing/service/Bgservice.png')]">
          <div className="flex flex-col service_container">
            <div className="service_text">
              <h1 className="text-[2.2rem]">Our Services</h1>
              <p>
                We offer end-to-end branding solutions, whether you're launching
                a new brand or refining an existing one, we tailor every detail
                to align with your vision and connect with your audience.
                <span> Not sure? Book a call</span>
              </p>
            </div>
            <div className="service_widget">
              <Image src={serv} alt="" />
            </div>
          </div>
        </section>
        <section className="collab_wrapper w-full">
          <div className="w-full h-auto collab_container flex flex-col gap-[100px]">
            <Image src={ellipse} alt="" className="bg_collab w-full h-auto" />

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
                      alt=""
                      src={search}
                      className="w-[80px] absolute top-[-33%]"
                    />
                    <div className="collab_card_text mt-[2rem] gap-[5px]">
                      <p>Discover</p>
                      <Image alt="" src={plus} className="w-fit" />
                    </div>
                  </div>
                  <div className="collab_card h-fit max-w-[300px] w-full">
                    <Image
                      alt=""
                      src={Knight}
                      className="w-[80px] absolute top-[-33%]"
                    />
                    <div className="collab_card_text mt-[2rem] gap-[5px]">
                      <p>Branding & Strategy</p>
                      <Image alt="" src={plus} className="w-fit" />
                    </div>
                  </div>
                  <div className="collab_card h-fit max-w-[300px] w-full">
                    <Image
                      alt=""
                      src={pc}
                      className="w-[80px] absolute top-[-33%]"
                    />
                    <div className="collab_card_text mt-[2rem] gap-[5px]">
                      <p>Design</p>
                      <Image alt="" src={plus} className="w-fit" />
                    </div>
                  </div>
                  <div className="collab_card h-fit max-w-[300px] w-full">
                    <Image
                      alt=""
                      src={dev}
                      className="w-[80px] absolute top-[-33%]"
                    />
                    <div className="collab_card_text mt-[2rem] gap-[5px]">
                      <p>Develop</p>
                      <Image alt="" src={plus} className="w-fit" />
                    </div>
                  </div>
                  <div className="collab_card col-span-2 h-fit w-full max-w-[640px] mx-auto">
                    <Image
                      alt=""
                      src={care}
                      className="w-[80px] absolute top-[-33%]"
                    />
                    <div className="collab_card_text mt-[2rem] gap-[5px]">
                      <p>Deliver & Support</p>
                      <Image alt="" src={plus} className="w-fit" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className="contact_wrapper relative h-[120vh] mt-[250px] pb-[120px]">
          <div className="spin1 absolute top-[-8%] left-[20px]">
            <Image src={spin} alt="" />
          </div>
          <div className="spin2 absolute bottom-[0] right-[20px]">
            <Image src={spin} alt="" />
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
                <Image alt="" src={lady} className="w-[100%] h-fit" />
                <Button className="contact_btn">
                  Book Now
                  <Arrow />
                </Button>
              </div>
              <div className="w-[50%]">
                <Image alt="" src={cakendar} className="w-[100%] h-fit" />
              </div>
            </div>
          </div>
        </section>
        <section className="footer-wrapper flex flex-col pl-[5rem] pr-[5rem] text-white h-fit mt-[150px] bg-black">
          <div className="footer-contents justify-between p-[2rem] flex gap-4">
            <section className="footer-cap gap-[11px] flex flex-col">
              <div className="footer-logo w-full items-center">
                <Image alt="" src={foot} className="w-full h-fit" />
              </div>
              <div className="footer-socials gap-[10px] items-center flex">
                <Image alt="" className="w-full h-fit cursor-pointer" src={im} />
                <Image alt="" className="w-full h-fit cursor-pointer" src={face} />
                <Image alt="" className="w-full h-fit cursor-pointer" src={x} />
              </div>
            </section>
            <section className="footer-contact ">
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
      </main>
    </div>
  );
};

export default MainComponent;
