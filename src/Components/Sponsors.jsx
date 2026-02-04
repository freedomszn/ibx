import React from "react";
import Marquee from "react-fast-marquee";

const sponsors = [
  { src: "/t/as.png" },
  { src: "/t/bi.png" },
  { src: "/t/co.png" },
  { src: "/t/cv.png" },
  { src: "/t/cx.png" },
  { src: "/t/dt.png" },
  { src: "/t/gc.png" },
  { src: "/t/ic.png" },
  { src: "/t/mp.png" },
  { src: "/t/sg.png" },
];

const LogoRow = ({ reverse = false, speed = 40 }) => {
  return (
    <Marquee
      direction={reverse ? "right" : "left"}
      speed={speed}
      pauseOnHover
      gradient={false}
      className=" px-0"
    >
      {[
        ...sponsors,
        ...sponsors,
        ...sponsors,
        ...sponsors,
        ...sponsors,
        ...sponsors,
      ].map((sponsor, i) => (
        <a
          key={i}
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex mr-4 items-center "
        >
          <img
            src={sponsor.src}
            alt="partner logo"
            className="
              w-[132px] h-[138px]
              sm:w-[160px] sm:h-[150px]
              object-cover
              group-hover:grayscale-0
              group-hover:opacity-100
              transition-all
              duration-300
              will-change-transform
            "
          />
        </a>
      ))}
    </Marquee>
  );
};

const Sponsors = () => {
  return (
    <>
      <div className="flex dotted  py-20 px-5 md:px-7 lg:px-10  xl:px-12 2xl:px-15">
        <div className="flex items-start flex-col w-full lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-157.5 ">
            <h2
              className='className="
                font-black getai mb-5
                text-[32px] leading-10 tracking-[-0.005em]
                sm:text-[38px] sm:leading-11 sm:tracking-[0em]
                md:text-[46px] md:leading-[50px] md:tracking-[0.02em]
                lg:text-[54px] lg:leading-[56px] lg:tracking-[0.05em]
                xl:text-[62px] xl:leading-[60px] xl:tracking-[0.08em]
                2xl:text-[70px] 2xl:leading-[64px] 2xl:tracking-[0.10em]
              "'
            >
              Our Sponsors
            </h2>
            <p
              className="font-normal sans desc mb-8
              text-[14px] leading-[20px] tracking-[-0.006em]
              sm:text-[15px] sm:leading-[21px] sm:tracking-[-0.008em]
              md:text-[16px] md:leading-[22px] md:tracking-[-0.010em]
              lg:text-[17px] lg:leading-[23px] lg:tracking-[-0.012em] lg:font-medium
              xl:text-[18px] xl:leading-[24px] xl:tracking-[-0.014em]
              2xl:text-[18px] 2xl:leading-[24px] 2xl:tracking-[-0.015em]"
            >
              We are proud to partner with these industry leaders who share our
              passion for discovery and help make our expeditions possible..
            </p>
          </div>

          <div className="flex items-end">
            <button className="w-40  h-9 orange text-sm geist text-black rounded-md font-medium ">
              Become a sponsor
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <LogoRow speed={80}></LogoRow>
      </div>
    </>
  );
};

export default Sponsors;
