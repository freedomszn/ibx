import React from 'react'
import Navbar from '../Navbar';

const About = () => {
  return (
    <>
        <Navbar
          links={[
            { to: "/home", label: "Home" },
            { to: "/event", label: "IBX 2026" }, // replaced link
            { to: "/about", label: "About Us" }, // extra link
          ]}
          cta={{ to: "/register", label: "Register" }}
        />
    </>
  );
}

export default About
