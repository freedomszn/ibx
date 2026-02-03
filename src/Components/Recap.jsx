import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import BlankCard from "./BlankCard";

const Recap = () => {
  return (
    <>
      <div className="grid grid-cols-1 py-15 lg:py-20 px-5 md:px-7 lg:px-10 xl:px-12 2xl:px-15 gap-5 md:grid-cols-1 lg:grid-cols-3">
        <div className="mb-25">
          <h2
            className="getai text-[24px] font-blackblack leading-8 tracking-[0em]
                      sm:text-[28px] sm:leading-9 sm:tracking-[-0.0025em]
                      md:text-[30px] md:leading-9.5 md:tracking-[-0.0037em]
                      lg:text-[34px] lg:leading-10.5 lg:tracking-[-0.0061em]
                      xl:text-[38px] xl:leading-11.5 xl:tracking-[-0.0085em]
                      2xl:text-[40px] 2xl:leading-12 2xl:tracking-[-0.01em]"
          >
            The heartbeat of West Africa’s blockchain evolution
          </h2>
          <p className="lg:hidden sans mt-5 mb-5 font-[400px] text-sm leading-5 tracking-[-0.6%]">
            The Ibom Blockchain Xperience (IBX) is West Africa’s premier
            blockchain gathering, a convergence of innovators, industry leaders,
            creators, and enthusiasts from 5 countries to explore the power of
            the Blockchain. Each edition brings thousands together to learn,
            connect, and Experience what blockchain and adoption truly means.
            It's the heartbeat of West Africa’s blockchain evolution.
          </p>

          <Link className="sm:hidden flex" to="">
            <button className="w-40 h-9 text-black text-sm leading-5 tracking-[-0.6%] rounded-md font-[400px] orange">
              {" "}
              Watch IBS 25
            </button>
          </Link>
        </div>

        <BlankCard
          title="CAREER DEVELOPMENT IN BLOCKCHAIN"
          text="The summit will focus on education on various career paths in the blockchain industry through expert-led panel sessions and workshops."
        />

        <Cards image="/1.png" text="." />

        <BlankCard
          title="EDUCATE AND EMPOWER"
          text="The summit will focus on education on various career paths in the blockchain industry through expert-led panel sessions and workshops."
          bg="#F5FFF9"
        />

        <Cards
          title="CONNECTION"
          text="The summit will focus on education on various career paths in the blockchain industry through expert-led panel sessions and workshops."
          image="/sec.png"
        />

        {/* <BlankCard
          className="lg:flex items-end flex-col hidden my-0"
          textClass="text-white"
          text="The Ibom Blockchain Xperience (IBX) is West Africa’s premier blockchain gathering, a convergence of innovators, industry leaders, creators, and enthusiasts from 5 countries  to explore the power of the Blockchain. Each edition brings thousands together to learn, connect, and Experience what  blockchainand adoption truly means. It's the heartbeat of West Africa’s blockchain evolution."
          button="Watch IBX 25"
          bg="#000"
        /> */}

        <div className="flex items-end">
          <div>
            <p className="lg:flex hidden sans mt-5 mb-5 font-[400px] text-sm leading-5 tracking-[-0.6%] text-[18px] desc">
              The Ibom Blockchain Xperience (IBX) is West Africa’s premier
              blockchain gathering, a convergence of innovators, industry
              leaders, creators, and enthusiasts from 5 countries to explore the
              power of the Blockchain. Each edition brings thousands together to
              learn, connect, and Experience what blockchain and adoption truly
              means. It's the heartbeat of West Africa’s blockchain evolution.
            </p>

            <Link className="lg:flex hidden" to="">
              <button
                className="w-40 h-9 text-black text-sm leading-5 tracking-[-0.6%] rounded-md font-medium orange point \
                transition-transform duration-300 ease-out \
                hover:scale-105 active:scale-95"
              >
                Watch IBS 25
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recap;
