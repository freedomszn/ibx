import React from "react";
import Navbar from "../Navbar";

const Tour = () => {
  const logo = "/tourlogo.svg";
  return (
    <>
      <Navbar
        links={[
          { to: "/home", label: "Home" },
          { to: "/tour", label: "IBX Tour" }, // replaced link
          { to: "/about", label: "About Us" }, // extra link
        ]}
        cta={{ to: "/register", label: "Register" }}
      />
    </>
  );
};

export default Tour;
