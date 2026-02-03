import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Collaborators from "../Collaborators";
import Footer from "../Footer";
import { motion as m } from "framer-motion";
import Recap from "../Recap";
import Glimpse from "../Glimpse";
import Target from "../Target";
import Outline from "../Outline";

const Home = () => {
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
      <div className="min-h-screen bg-black text-white">
        <m.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          <Hero />
          <Recap />
          <Glimpse />
          <Target />
          <Outline />
          <Collaborators />
        </m.div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
