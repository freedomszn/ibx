import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const placeholder = "/join.png";
  return (
    <>
      <div className="flex items-center justify-center py-20 px-5 md:px-7 lg:px-10 xl:px-12 2xl:px-15 bg-black">
        <div className="flex items-center justify-center flex-col w-full py-20 bg-[#161518]">
          <h2 className="getai font-black text-2xl text-[#E87A12]">
            Join the Movement
          </h2>
          <img className="w-64.25 h-23" src={placeholder} alt="" />
          <Link>
            <button className="w-40 h-9 orange rounded-md geist font-medium px-6 text-sm tracking-[-0.6%] text-black" >Register Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Join;
