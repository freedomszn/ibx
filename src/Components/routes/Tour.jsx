import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Collaborators from "../Collaborators";
import Hero from "../tour/Hero";

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
      <Hero />
      <Collaborators />
      <Footer />
    </>
  );
};

export default Tour;
