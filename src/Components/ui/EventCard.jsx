import React from "react";

const EventCard = ({
  title = "IBOM BLOCKCHAIN SUMMIT",
  date = "10",
  month = "March",
  location = "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  time = "8:00 am - 3:00 PM",
  image = "/sec.png",
}) => {
  return (
    <div className="group flex flex-col rounded-xl px-5 bg-white pt-8 pb-10 overflow-hidden">
      {/* TITLE */}
      <p className="sans mb-6 font-medium leading-6 text-[#161518]">{title}</p>

      {/* DATE + DETAILS */}
      <div className="flex items-start gap-x-8.25">
        <div className="flex flex-col">
          <h2 className="getai font-black text-[#161518] text-5xl leading-14 tracking-[-4%]">
            {date}
          </h2>
          <span className="sans text-[18px] text-[#161518] leading-6 tracking-[-1.5%] font-medium">
            {month}
          </span>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="flex items-start gap-x-2">
            <img src="/map-pin.svg" alt="map icon" />
            <p className="sans font-medium text-sm max-w-42.25 text-black leading-5 tracking-[-0.6%]">
              {location}
            </p>
          </div>

          <div className="flex items-start gap-x-2">
            <img src="/alarm-clock.svg" alt="clock icon" />
            <p className="sans font-medium leading-6 text-black tracking-[-1.1%]">
              {time}
            </p>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <img
        className="
          h-60 w-full rounded-2xl object-cover mt-6
          transition duration-500 ease-out will-change-transform
          filter
          grayscale-0
          md:grayscale
          md:group-hover:grayscale-0
          md:group-hover:scale-[1.03]
        "
        src={image}
        alt={title}
      />
    </div>
  );
};

export default EventCard;
