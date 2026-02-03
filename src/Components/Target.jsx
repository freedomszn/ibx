import React from "react";
import Cards from "./ui/Cards";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const targets = [
  {
    title: "Investors",
    text: "Individuals or entities looking to allocate capital into promising ventures. They seek opportunities that offer potential for growth and return on investment, making them a crucial audience for our event.",
    image: "/hand-coins.svg",
  },
  {
    title: "Developers",
    text: "Individuals or teams eager to invest in innovative projects. They are on the lookout for opportunities that promise growth and solid returns, making them an essential part of our event's audience.",
    image: "/code.svg",
  },
  {
    title: "Blockchain Enthusiast",
    text: "People keen on exploring groundbreaking projects. They actively seek opportunities that offer potential for growth and reliable returns, making them a vital segment of our event's audience.",
    image: "/atom.svg",
  },
  {
    title: "Regulators",
    text: "Regulators are essential attendees at our event, as they are focused on innovative projects. They seek opportunities that promise growth and dependable returns, making them a crucial part of our audience.",
    image: "/drafting-compass.svg",
  },
];

const Target = () => {
  return (
    <section className="flex flex-col overflow-hidden py-10 lg:py-20 px-5 md:px-7 lg:px-10 xl:px-12 2xl:px-15">
      <div className="flex items-center justify-between">
        <h2
          className="font-black getai py-10 lg:py-12.5
            text-[32px] leading-10 tracking-[-0.005em]
            sm:text-[40px] sm:leading-[44px] sm:tracking-[0em]
            md:text-[48px] md:leading-[50px] md:tracking-[0.02em]
            lg:text-[56px] lg:leading-[56px] lg:tracking-[0.05em]
            xl:text-[64px] xl:leading-[60px] xl:tracking-[0.08em]
            2xl:text-[70px] 2xl:leading-[64px] 2xl:tracking-[0.10em]"
        >
          Who Is This Event For?
        </h2>
      </div>

      {/* Carousel */}
      <div className="">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          freeMode={{ enabled: true, momentum: true }}
          grabCursor
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={5000} // smooth continuous motion
          slidesPerView="auto" // IMPORTANT: allows fixed-width slides
          spaceBetween={20} // same as gap-x-5
          className=""
        >
          {targets.map((item, i) => (
            <SwiperSlide key={i} className="w-auto!">
              {/* fixed size wrapper so it never shrinks */}
              <div className="w-90 h-90 shrink-0">
                <Cards title={item.title} text={item.text} image={item.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Target;
