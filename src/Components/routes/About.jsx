import React from 'react'
import Navbar from '../Navbar';

const About = () => {
  return (
    <>
      <Navbar
        links={[
          { to: "/Home", label: "Home" },
          { to: "/Tour", label: "IBX Tour" }, // replaced link
          { to: "/About", label: "About Us" }, // extra link
        ]}
        cta={{
          href: "https://ibx2026.eventcrib.com/",
          label: "Join Now",
          target: "_blank",
        }}
      />
    </>
  );
}

export default About
