import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="flex flex-col max-w-full items-start justify-between gap-10 px-4 py-16 bg-black dotted md:px-6 lg:px-10 xl:px-10">
                <div className="flex gap-4 countries">
                    <img src="/Nigeria.svg" alt="nigeria" />
                    <img src="/Ghana.svg" alt="ghana" />
                    <img src="/Cameroon.svg" alt="southafrica" />
                    <img src="/Togo.svg" alt="kenya" />
                    <img src="/Benin.svg" alt="egypt" />
                </div>
                <div className='flex gap-10 lg:gap-6 items-start flex-col xl:flex-row-reverse xl:items-center xl:justify-between w-full'>

                    <nav className='flex shrink-0'>
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
                    <div className='flex lg:items-center'>
                        <h3 className='getai font-black text-xl lg:max-w-193.75 text-white lg:text-[32px]'>
                            Experience the next wave of innovation. Secure your place among the leaders.
                        </h3>
                    </div>
                </div>

                <Link to="/IBX2026" className='w-full flex'>
                <button className="text-white text-[14px] bg-black dotted border border-white w-40 h-8 font-medium point rounded-md hover:bg-white/80 hover:text-black transition-all duration-700">
                    Learn More
                </button>
                </Link>

                <div className="flex flex-col gap-8 lg:flex lg:justify-between lg:flex-row lg:mt-26.25 w-full">
                <p className="text-white text-[16px] font-medium sans tracking-[-1.1%] leading-6">© 2025 Ibom Blockchain Xperience. All rights reserved.</p>

                <div className="socials flex gap-6">

                    <Link to="https://x.com/IbomBlockchain"><img className='point hover:scale-110 transition-all duration-500' src="/x.svg" alt="x" /></Link>
                    <img className='point hover:scale-110 transition-all duration-500' src="/in.svg" alt="linkedin" />
                    <Link to="https://web.facebook.com/Ibomblockchainxperience"><img className='point hover:scale-110 transition-all duration-500' src="/fb.svg" alt="facebook" /></Link>
                    <Link to="https://github.com/freedomszn"><img className='point hover:scale-110 transition-all duration-500' src="/git.svg" alt="github" /></Link>

                </div>
                </div>
            </div>
        </>
    )
}

export default Footer
