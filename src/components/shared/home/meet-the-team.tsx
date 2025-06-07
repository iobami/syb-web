import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
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

export function MeetTheTeam() {
  return (
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
              <Image
                src={person.image}
                alt={person.name}
                className="w-32 h-32 object-cover rounded-md mb-4"
                width={100}
                height={100}
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
  );
}