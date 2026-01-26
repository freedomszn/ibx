import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ logo = "/logo.webp", links, cta }) => {
  const defaultLinks = [
    { to: "/home", label: "Home" },
    { to: "/event", label: "IBX 2026" },
    { to: "/tour", label: "IBX Tour" },
    { to: "/about", label: "About Us" },  ];

  const navLinks = links ?? defaultLinks;

  const [open, setOpen] = useState(false);
  const [headerH, setHeaderH] = useState(0);

  const headerRef = useRef(null);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => setOpen(false), [location.pathname]);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Measure header height so dropdown sits under it without affecting layout
  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const measure = () => setHeaderH(el.getBoundingClientRect().height);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#fcfcfc] text-[16px] font-extrabold transition-all"
      : "text-[#DBDBDB] font-normal text-[15px]";

  const Item = ({ to, children }) => (
    <li className="w-full">
      <NavLink
        end
        to={to}
        className={({ isActive }) =>
          `${linkClass({ isActive })} block w-full text-center`
        }
      >
        {children}
      </NavLink>
    </li>
  );

  return (
    <>
      {/* HEADER (glass stays here) */}
      <header
        ref={headerRef}
        className="fixed top-0 right-0 left-0 z-50 graybg navblur isolate"
      >
        <div className="flex shrink-0 items-center justify-between px-4 py-[23.51px] md:px-6 lg:px-10 xl:px-10">
          <div className="logo">
            <NavLink end to="/">
              <img
                className="w-26.75 h-8.25 md:w-29.5 md:h-9 lg:w-32.5 lg:h-10 xl:w-35.75 xl:h-11 2xl:w-35.75 2xl:h-11"
                src={logo}
                alt="IBX Logo"
              />
            </NavLink>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex px-4 items-center justify-center getai gap-5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink end to={l.to} className={linkClass}>
                    {l.label}
                  </NavLink>
                </li>
              ))}

              {cta && (
                <li>
                  <NavLink
                    to={cta.to}
                    className="px-8 block py-2.5 rounded-md bg-[#E87A12] text-white text-[14px] transition-all duration-700 hover:scale-105 font-semibold"
                  >
                    {cta.label}
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>

          {/* Mobile toggle — same SVG size + transition */}
          <button
            type="button"
            className="md:hidden point inline-flex items-center justify-center w-12 h-12"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block w-9 h-9">
              {/* Burger */}
              <svg
                className={`absolute inset-0 w-9 h-9 p-1.5 transition-all duration-300 ease-out
                  ${open ? "opacity-0 rotate-90 scale-95" : "opacity-100 rotate-0 scale-100"}`}
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 7H19M5 12H19M5 17H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              {/* X */}
              <svg
                className={`absolute inset-0 w-9 h-9 p-1.5 transition-all duration-300 ease-out
                  ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-95"}`}
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </header>

      {/* OVERLAY (below dropdown; doesn’t affect blur) */}
      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="md:hidden fixed inset-0 z-40 bg-transparent"
          onClick={() => setOpen(false)}
        />
      )}

      {/* DROPDOWN (separate glass layer — blur guaranteed) */}
      <div
        className={`md:hidden fixed left-0 top-0 right-0 z-60 graybg navblur
          overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out
          ${open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"}`}
        style={{
          top: headerH, // sits exactly under the header without changing header height
          WebkitBackdropFilter: "blur(16px)", // extra guarantee
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="px-4 pb-6">
          <ul className="flex flex-col items-center justify-center gap-6 py-6 getai">
            <Item to="/Home">Home</Item>
            <Item to="/About">About Us</Item>
            <Item to="/IBX2026">IBX 2026</Item>
            <Item to="/Tour">IBX Tour</Item>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
