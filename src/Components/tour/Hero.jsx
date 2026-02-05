import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  // const tourbg = "/bg.png";

  return (
    <>
      <section className="flex relative h-screen bg-[url(/tourbg.png)] bg-cover bg-center bg-no-repeat bg-black">
        <div className="absolute inset-0 bg-black/30 md:hidden flex" />
        <div className="absolute inset-0 bg-[url(/overlay.png)] " />

        <div
          className="flex box flex-col px-5 pb-15 md:px-7 lg:px-10 xl:px-12 2xl:px-15 py-50 space-y-6 max-w-104.25 md:max-w-155
    lg:max-w-180
    xl:max-w-204.25 z-50"
        >
          <h1
            className="getai resize font-black text-[32px] text-white sm:text-[38px] sm:leading-11 sm:tracking-[-0.006em]
    md:text-[44px] md:leading-12.5 md:tracking-[-0.0075em]
    lg:text-[50px] lg:leading-13.5 lg:tracking-[-0.009em]
    xl:text-[56px] xl:leading-14 xl:tracking-[-0.01em]"
          >
            Empowering 100,000 West Africans — The IBX 2026 Tour Begins!
          </h1>

          <p
            className="sans font-normal desc leading-5 tracking-[-0.6%] sm:text-[15px] sm:leading-5.25 sm:tracking-[-0.008em]
    md:text-[16px] md:leading-5.5 md:tracking-[-0.010em]
    lg:text-[17px] lg:leading-5.75 lg:tracking-[-0.012em]
    xl:text-[18px] xl:leading-6 xl:tracking-[-0.015em]"
          >
            A 6-month West African campaign driving blockchain adoption,
            inclusion, and grassroots innovation across Nigeria, Ghana,
            Cameroon, Togo, and Benin Republic.
          </p>

          <div className="flex space-x-3">
            <a className="point" href="https://ibx2026.eventcrib.com/" target="blank">
              <Button className="air w-38.75 h-9 sans point">
                Join the movement
              </Button>
            </a>

            <Link to="">
              <Button className="air w-38.75 h-9 sans whitebg point">
                Partner with us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="flex flex-col bg-black text-white px-5 pb-15 md:px-7 lg:px-10 xl:px-12 2xl:px-15 py-10">
        <h2
          className="getai resize font-black leading-8 mt-10 max-w-5xl lg:max-w-7xl text-[24px] tracking-[0em]
    sm:text-[28px] sm:leading-9 sm:tracking-[-0.0025em]
    md:text-[32px] md:leading-10 md:tracking-[-0.005em]
    lg:text-[36px] lg:leading-11 lg:tracking-[-0.0075em]
    xl:text-[40px] xl:leading-12 xl:tracking-[-0.01em]"
        >
          Vision: Banking 100 million unbanked West Africans by 2030 through
          blockchain empowerment.
        </h2>
        <p className="mt-5 desc sans font-medium leading-5 text-[14px] tracking-[-0.6%] max-w-5xl lg:max-w-7xl">
          Join us at the Ibom Blockchain Summit, where visionaries and pioneers
          converge to explore the future of Blockchain technology. This annual
          event is dedicated to fostering collaboration and innovation,
          providing a unique opportunity to engage with thought leaders and
          discover cutting-edge developments in the Web3 space.
        </p>
      </div>

      <div className="flex w-full bg-black">
        <div className="flex flex-col bg-black text-white px-5 pb-15 md:px-7 lg:px-10 xl:px-12 2xl:px-15 lg:items-start lg:flex-row">
          <div className="mb-10 lg:mr-18.75 ">
            <h2 className="getai resize font-black text-[28px] leading-8 mt-10">
              2026 Target
            </h2>
            <p className="desc sans mt-5">
              100,000 onboarded during this year’s tour.
            </p>
            <p className="desc sans w-full mt-3">
              Duration: 6 months across 5 West African countries.
            </p>
          </div>

          <div className="flex flex-col pb-10  ">
            <h2 className="getai font-black text-[24px] leading-8 mt-10">
              Core Objectives
            </h2>
            <ul className="list-disc px-4 desc sans mt-5 space-y-2">
              <li>Drive blockchain education and inclusion.</li>
              <li>Empower communities through town hall activations.</li>
              <li>Encourage real-world crypto adoption in local markets.</li>
              <li>
                Build cross-border partnerships between blockchain communities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
