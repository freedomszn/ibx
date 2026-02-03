import React from "react";

const Cards = ({ title, text, image, className = "" }) => {
  return (
    <div
      style={{
        backgroundImage: image ? `url(${image})` : undefined,
      }}
      className={`
        relative
        rounded-xl
        recap
        min-w-70
        h-100
        sm:h-90
        bg-cover
        bg-center
        grayscale
        hover:grayscale-0
        hover:scale-[1.02]
        hover:contrast-100
        transition-all
        duration-500
        ease-out
        overflow-hidden
        ${className}
      `}
    >
      {/* overlay */}
      <div className="h-full w-full bg-b/40">
        <div className="absolute bottom-7.5 px-4">
          <h1
            className="getai font-medium  text-[16px] tracking-[0em]
  sm:text-[17px]
  md:text-[18px]
  lg:text-[19px]
  2xl:text-[20px] leading-7 mb-2 max-w-60"
          >
            {title}
          </h1>
          <p className="sans">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
