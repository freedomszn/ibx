import React from 'react'
import EventCard from './ui/EventCard'

const Outline = () => {
  return (
    <>
      <div className="flex flex-col px-5 md:px-7 lg:px-10  xl:px-12 2xl:px-15">
        <div className="flex items-start flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-232.5 ">
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
              Event Outline
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
              Join us at the Ibom Blockchain Summit, where visionaries and
              pioneers converge to explore the future of Blockchain technology.
              This annual event is dedicated to fostering collaboration and
              innovation, providing a unique opportunity to engage with thought
              leaders and discover cutting-edge developments in the Web3 space.
            </p>
          </div>
          <button className="w-40 h-9 orange text-sm geist text-black rounded-md font-medium ">
            Add to Calender
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-5">
          <EventCard
            title="IBOM BLOCKCHAIN SUMMIT"
            date="10"
            month="March"
            location="E3 Event Center Uyo Village Road"
            time="9:00 am - 5:00 PM"
            image="/1.jpg"
          />
          <EventCard
            title="IBOM BLOCKCHAIN SUMMIT"
            date="11"
            month="March"
            location="E3 Event Center Uyo Village Road"
            time="9:00 am - 5:00 PM"
            image="/2.jpg"
          />

          <EventCard
            title="DEN OF ROGUES"
            date="12"
            month="March"
            location="E3 Event Center Uyo Village Road"
            time="10:00 am - 4:00 PM"
            image="/3.jpg"
          />

          <EventCard
            title="FOUNDERS FORGE"
            date="13"
            month="March"
            location="Upon registration"
            time="8:30 am - 6:00 PM"
            image="/4.jpg"
          />

          <EventCard
            title="IBX GALA: A CELEBRATION OF VISIONARIES"
            date="14"
            month="March"
            location="Exclusive"
            time="5:00 PM Prompt"
            image="/5.jpg"
          />

          {/* <EventCard
            title="IBOM BLOCKCHAIN SUMMIT"
            date="10"
            month="March"
            location="Exclusive"
            time="5:00 PM"
            image="/sec.png"
          /> */}
        </div>
      </div>
    </>
  );
}

export default Outline
