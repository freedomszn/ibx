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

        <div className="flex box flex-col px-4 py-50 space-y-6 max-w-101.25 z-50">
          <h1 className="getai resize font-black text-[32px] text-white">
            Empowering 100,000 West Africans — The IBX 2026 Tour Begins!
          </h1>

          <p className="sans font-normal desc leading-5 tracking-[-0.6%]">
            A 6-month West African campaign driving blockchain adoption,
            inclusion, and grassroots innovation across Nigeria, Ghana,
            Cameroon, Togo, and Benin Republic.
          </p>

          <div className="flex space-x-3">
            <Link className="point" to="/event">
              <Button className="air w-38.75 h-9 sans point">
                Join the movement
              </Button>
            </Link>

            <Link to="">
              <Button className="air w-38.75 h-9 sans whitebg point">
                Partner with us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="flex flex-col bg-black text-white px-4">
        <h2 className="getai resize font-black text-[28px] leading-8 mt-10 max-w-5xl">
          Vision: Banking 100 million unbanked West Africans by 2030 through
          blockchain empowerment.
        </h2>
        <p className="mt-5 desc sans font-medium leading-5 text-[14px] tracking-[-0.6%] max-w-5xl">
          Join us at the Ibom Blockchain Summit, where visionaries and pioneers
          converge to explore the future of Blockchain technology. This annual
          event is dedicated to fostering collaboration and innovation,
          providing a unique opportunity to engage with thought leaders and
          discover cutting-edge developments in the Web3 space.
        </p>
      </div>

      <div className="flex flex-col bg-black text-white px-4">
        <div className="my-10">
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

        <div className="flex flex-col">
          <h2 className="getai font-black text-[24px] leading-8 mt-10">
            Tour Components
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
    </>
  );
};

export default Hero;
