import { Link } from "react-router-dom";
import React from "react";

const BlankCard = ({
  title,
  text,
  button,
  bg = "#FFFAF5",
  className = "",
  titleClass = "text-black getai font-medium text-[16px] leading-7 ",
  textClass = "text-black font-medium sans text-[18px] mt-5",
  buttonClass = "mt-5 text-black text-sm font-medium sans w-40 h-10 rounded orange point \
   transition-transform duration-300 ease-out \
   hover:scale-105 active:scale-95",
}) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`
        rounded-xl
        min-w-70
        h-90
        transition-all
        duration-500
        ease-out
        point
        ${className}
      `}
    >
      <div className="w-full h-full relative rounded-xl">
        <div className="absolute top-15 px-4">
          <h1
            className={` text-[16px] leading-7 tracking-[0em]
            sm:text-[17px]
            md:text-[18px]
            lg:text-[19px]
            2xl:text-[20px] mb-2 max-w-50 ${titleClass}`}
          >
            {title}
          </h1>
          <p className={textClass}>{text}</p>
          <Link>
            {button && <button className={buttonClass}>{button}</button>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlankCard;
