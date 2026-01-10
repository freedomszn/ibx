import React from 'react'
import { NavLink } from 'react-router-dom';


const Hero = () => {
  const bgvideo = 'assets/hero.mp4';
  return (
    <div className="relative flex h-screen flex-col items-start justify-end px-4 pb-15 overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay={true}
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-white max-w-90">
        <h1 className="getai tracking-[-0.5%]  font-black text-[32px] leading-10">
          West Africa Largest Blockchain Campaign!
        </h1>

        <p className="sans font-semibold text-[14px] leading-6 tracking-[-1.5%] desc mt-3">
          Empowering and unifying communities and connecting innovators to shape
          the future of Web3 and ignite blockchain adoption, innovation, and
          collaboration across West Africa and beyond
        </p>

        <div className="flex gap-4 mt-6 ">

          <NavLink to="/IBX2026">
            <button className="rounded-md geist orange w-30.5 h-8 text-sm font-bold text-black hover:scale-105 transition-all duration-700 point">
              2026 Event
            </button>
          </NavLink>

          <NavLink to="/Tour">
            <button className="rounded-md geist border border-white w-30.5 h-8 text-sm font-bold hover:bg-white/20 transition-all duration-700 point">
              IBX Tour
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
