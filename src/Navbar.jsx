import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const logo = "/logo.webp";
    const menu = "/menu.svg";
    return (
        <>
            <header className="flex items-center justify-between px-4 py-[23.51px] graybg fixed top-0 right-0 left-0 z-50 navblur">
                <div className="logo">
                    <NavLink end to="/">
                        <img className='w-[107.25px] h-[32.97px]' src={logo} alt="IBX Logo" />
                    </NavLink>
                </div>

                <nav className='hidden'>
                    <ul className=' px-4 items-center justify-center getai gap-5 '>
                        <li>
                            <NavLink
                                end
                                to="/Home"
                                className={({ isActive }) =>
                                    isActive ? 'text-[#fcfcfc] text-[16px] font-extrabold transition-all' : 'text-[#DBDBDB] font-normal text-[15px]'
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                end
                                to="/About"
                                className={({ isActive }) =>
                                    isActive ? 'text-[#fcfcfc] text-[16px] font-extrabold transition-all' : 'text-[#DBDBDB] font-normal text-[15px]'
                                }
                            >
                                About Us
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                end
                                to="/IBX2026"
                                className={({ isActive }) =>
                                    isActive ? 'text-[#fcfcfc] text-[16px] font-extrabold transition-all' : 'text-[#DBDBDB] font-normal text-[15px]'
                                }
                            >
                                IBX 2026
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                end
                                to="/Tour"
                                className={({ isActive }) =>
                                    isActive ? 'text-[#fcfcfc] text-[16px] font-extrabold transition-all' : 'text-[#DBDBDB] font-normal text-[15px]'
                                }
                            >
                                IBX Tour
                            </NavLink>
                        </li>

                    </ul>

                    <img src="" alt="" />
                </nav>

                <div className="menu">
                    <img className='w-12' src={menu}  alt="menu" />
                </div>
            </header>
        </>
    )
}

export default Navbar
