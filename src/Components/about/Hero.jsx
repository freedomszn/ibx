import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="flex items-start justify-end mobile tour flex-col bg-black w-full h-screen px-5 md:px-7 lg:px-10 xl:px-12 2xl:px-15">
        <div className="text-white mb-43.75 space-y-6">
          <h1
            className="font-black getai
            text-[40px] leading-[48px] tracking-[-0.01em]
            sm:text-[44px] sm:leading-[50px]
            md:text-[48px] md:leading-[52px]
            lg:text-[52px] lg:leading-[54px]
            xl:text-[54px] xl:leading-[55px]
            2xl:text-[56px] 2xl:leading-[56px]"
          >
            Who We Are
          </h1>
          <p
            className="font-normal sans max-w-168.75 sans
            text-[14px] leading-[20px] tracking-[-0.006em]
            sm:text-[15px] sm:leading-[21px] sm:tracking-[-0.008em]
            md:text-[16px] md:leading-[22px] md:tracking-[-0.010em]
            lg:text-[17px] lg:leading-[23px] lg:tracking-[-0.012em]
            xl:text-[18px] xl:leading-[24px] xl:tracking-[-0.014em]
            2xl:text-[18px] 2xl:leading-[24px] 2xl:tracking-[-0.015em]"
          >
            The Ibom BlockChain Xperience is organized by Moov Team, a team
            dedicated to creating impactful events that connect ideas and people
            across the globe.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero
