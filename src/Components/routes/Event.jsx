import React from 'react'
import Navbar from '../Navbar';

const Event = () => {
  return (
    <>
        <Navbar
          links={[
            { to: "/home", label: "Home" },
            { to: "/event", label: "IBX Tour" }, // replaced link
            { to: "/about", label: "About Us" }, // extra link
          ]}
          cta={{ to: "/register", label: "Register" }}
        />
    </>
  );
}

export default Event
