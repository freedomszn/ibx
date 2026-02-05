import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const photos = [
  { src: "/gallery/i.jpg" },
  { src: "/gallery/ii.jpg" },
  { src: "/gallery/iii.jpg" },
  { src: "/gallery/iv.jpg" },
  { src: "/gallery/vi.jpg" },
  { src: "/gallery/vii.jpg" },
  { src: "/gallery/viii.jpg" },
  { src: "/gallery/ix.jpg" },
  { src: "/gallery/x.jpg" },
  { src: "/gallery/xi.jpg" },
  { src: "/gallery/xii.jpg" },
];

const Slide = ({ reverse = false, speed = 40 }) => {
  return (
    <Marquee
      direction={reverse ? "right" : "left"}
      speed={speed}
      pauseOnHover
      gradient={false}
      className="px-2 bg-black"
    >
      {[...photos, ...photos].map((photo, i) => (
        <div
          key={i}
          href={photo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 flex items-center group bg-black my-10 rounded h-89.5"
        >
          {/* ✅ Mask wrapper: this is what forces rounded corners on iOS */}
          <div className="rounded-xl overflow-hidden">
            <div className="group focus-within:outline-none" tabIndex={0}>
              <img
                src={photo.src}
                alt="partner logo"
                className="
                h-89.5 max-w-116.25
                object-cover
                opacity-70
                grayscale

                group-hover:grayscale-0
                group-hover:opacity-100
                group-focus-within:grayscale-0
                group-focus-within:opacity-100

                transition-all
                duration-300
                rounded-xl
              "
              />
            </div>
          </div>
        </div>
      ))}
    </Marquee>
  );
};

const Gallery = () => {
  return (
    <>
      <div className="bg-black px-5 md:px-7 lg:px-10 xl:px-12 2xl:px-15">
        <h2 className="getai font-black text-[32px] leading-10 text-white bg-black">
          Gallery
        </h2>
      </div>

      <div className="flex bg-black">
        <Slide speed={100} />
      </div>

      <Link to="" className="flex bg-black justify-center">
        <button className="orange geist py-2 px-20 text-sm font-medium leading-5 text-black rounded-md">
          See All
        </button>
      </Link>
    </>
  );
};

export default Gallery;
