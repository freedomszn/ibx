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
            {[...logos, ...logos].map((logo, i) => (
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
              h-[53.82px] sm:h-12 md:h-23 md:w-[97.5px]
              w-[51.48px]
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
            <LogoRow reverse speed={38} />
            <LogoRow speed={34} />
            <LogoRow reverse speed={38} />
        </section>
    );
};

export default Brands;
