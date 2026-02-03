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
          cta={{ to: "/register", label: "Join Now" }}
        />
    </>
  );
}

export default About
