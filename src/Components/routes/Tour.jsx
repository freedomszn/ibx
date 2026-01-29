import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Collaborators from "../Collaborators";
import Hero from "../tour/Hero";
import Card from "../tour/Card";
import Gallery from "../tour/Gallery";

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
      <Card />
      <Collaborators />
      <Gallery />
      <Footer />
    </>
  );
};

export default Tour;
