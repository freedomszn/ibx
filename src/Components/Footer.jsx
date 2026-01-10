import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="flex flex-col max-w-full items-start justify-between gap-10 px-4 py-17.5 bg-black dotted">
                <div className="flex gap-4 countries">
                    <img src="/Nigeria.svg" alt="nigeria" />
                    <img src="/Ghana.svg" alt="ghana" />
                    <img src="/Cameroon.svg" alt="southafrica" />
                    <img src="/Togo.svg" alt="kenya" />
                    <img src="/Benin.svg" alt="egypt" />
                </div>
                <div className='flex gap-10 items-start flex-col'>

                    <nav className='flex'>
                        <NavLink to="/Home" className="text-[16px] text-white/70 font-medium leading-6 tracking-[-1.1%] hover:text-white transition-all duration-700">
                            Home
                        </NavLink>

                        <NavLink to="/About" className="text-[16px] text-white/70 font-medium leading-6 tracking-[-1.1%] hover:text-white transition-all duration-700 mx-4">
                            About Us
                        </NavLink>

                        <NavLink to="/IBXTour" className="text-[16px] text-white/70 font-medium leading-6 tracking-[-1.1%] hover:text-white transition-all duration-700 mx-4">
                            IBX Tour
                        </NavLink>
                    </nav>
                    <div className=''>
                        <h3 className='getai font-black text-xl text-white'>
                            Experience the next wave of innovation. Secure your place among the leaders.
                        </h3>
                    </div>
                </div>

                <button className="text-white text-[14px] bg-black dotted border border-white w-40 h-8 font-medium point rounded-md hover:bg-white/80 hover:text-black transition-all duration-700">
                    Learn More
                </button>

                <p className="text-white text-[16px] font-medium sans tracking-[-1.1%] leading-6">© 2025 Ibom Blockchain Xperience. All rights reserved.</p>

                <div className="socials flex gap-6">

                    <img className='point hover:scale-110 transition-all duration-500' src="/x.svg" alt="tweeteer" />
                    <img className='point hover:scale-110 transition-all duration-500' src="/in.svg" alt="linkedin" />
                    <img className='point hover:scale-110 transition-all duration-500' src="/fb.svg" alt="facebook" />
                    <img className='point hover:scale-110 transition-all duration-500' src="/git.svg" alt="github" />

                </div>
            </div>
        </>
    )
}

export default Footer
