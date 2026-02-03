import React from "react";
import Brands from "./Brands";

const Collaborators = () => {
  return (
    <div
      className="
        flex flex-col items-start
        py-15 max-w-full
         bg-black dotted
      "
    >
      <div className="flex w-full flex-col gap-5 text-white px-5 py-11 md:px-7 lg:px-10 xl:px-12 2xl:px-15">
        <h3
          className="getai max-w-216.75 text-[24px] font-black leading-8 tracking-[0em]
          sm:text-[36px] sm:leading-9.5 sm:tracking-[-0.0025em]
          md:text-[44px] md:leading-10.5 md:tracking-[-0.0045em]
          lg:text-[56px] lg:leading-11.5 lg:tracking-[-0.007em]
          2xl:text-[70px] 2xl:leading-12 2xl:tracking-[-0.01em]"
        >
          Our Collaborators
        </h3>

        <div className="flex items-start flex-col lg:flex-row lg:justify-between lg:items-center w-full">
          <p
            className="sans desc font-normal text-sm leading-5 tracking-[-0.6%] max-w-2xl text-[14px]
            sm:text-[15px] sm:leading-5.25 sm:tracking-[-0.008em]
            md:text-[16px] md:leading-5.5 md:tracking-[-0.010em]
            lg:text-[17px] lg:leading-5.75 lg:tracking-[-0.012em]
            2xl:text-[18px] 2xl:leading-6 2xl:tracking-[-0.015em]"
          >
            We are proud to partner with these industry leaders who share our
            passion for discovery and help make our expeditions possible.
          </p>

          <button className="geist mt-6 text-sm font-bold rounded-md orange w-40 h-9 text-black point hover:scale-105 transition-all duration-700">
            Become a Sponsor
          </button>
        </div>
      </div>

      <Brands />
    </div>
  );
};

export default Collaborators;
