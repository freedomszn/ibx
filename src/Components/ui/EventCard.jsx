import React from "react";

const EventCard = ({ title, date, location, time, image }) => {
  return (
    <>
      <div className="flex flex-col rounded-xl px-5 bg-white pt-8 pb-10">
        <div className="">
          <p className="sans mb-6 font-medium leading-6 text-[#161518]">
            {(title = "IBOM BLOCKCHAIN SUMMIT")}
          </p>
        </div>

        <div className="flex items-start gap-x-8.25 space-y-4 justify-between">
          <div className="flex flex-col">
            <h2 className="getai font-black text-[#161518] text-5xl leading-14 tracking-[-4%]">
              {(date = "10")}
            </h2>
            <span className="sans text-[18px] text-[#161518] leading-6 tracking-[-1.5%] font-medium">March</span>
          </div>

          <div className="flex flex-col justify-between gap-y-4">
            <div className="flex items-start gap-x-2">
              <img src="/map-pin.svg" alt="map icon" />
              <p className="font-medium text-sm max-w-62.25 text-black leading-5 sans tracking-[-0.6%]">
                {(location = "2972 Westheimer Rd. Santa Ana, Illinois 85486 ")}
              </p>
            </div>

            <div className="flex items-start gap-x-2">
              <img src="alarm-clock.svg" alt="clock icon" />
              <p className="sans font-medium leading-6 text-black tracking-[-1.1%]">{(time = "8:00 am - 3:00 PM")}</p>
            </div>
          </div>
        </div>

        <div>
          <img className="h-60 w-full rounded-2xl object-cover" src={(image = "/sec.png")} alt="" />
        </div>
      </div>
    </>
  );
};

export default EventCard;
