import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
    { src: "/gc.png", url: "https://twitter.com/google" },
    { src: "/ic.png", url: "https://internetcomputer.org" },
    { src: "/co.png", url: "#" },
    { src: "/as.png", url: "#" },
    { src: "/cv.png", url: "#" },
    { src: "/bi.png", url: "#" },
    { src: "/sg.png", url: "#" },
    { src: "/mp.png", url: "#" },
    { src: "/dt.png", url: "#" },
    { src: "/cx.png", url: "#" },
];

const LogoRow = ({ reverse = false, speed = 40 }) => {
    return (
        <Marquee
            direction={reverse ? "right" : "left"}
            speed={speed}
            pauseOnHover
            gradient={false}
            className=" px-2"
        >
            {[...logos, ...logos, ...logos].map((logo, i) => (
                <a
                    key={i}
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-4 sm:mx-10 flex items-center group"
                >
                    <img
                        src={logo.src}
                        alt="partner logo"
                        className="
                  h-13.5 w-12.75
                md:h-20 md:w-19
                lg:h-27 lg:w-26
                xl:h-[97.5px] xl:w-23
              object-contain
              opacity-70
              grayscale
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

const Brands = () => {
    return (
      <section className="w-full overflow-hidden">
        <LogoRow speed={34} />
        <LogoRow reverse speed={34} />
        <LogoRow speed={34} />
        <LogoRow reverse speed={34} />
        <LogoRow speed={34} />
        <LogoRow reverse speed={34} />
      </section>
    );
};

export default Brands;
