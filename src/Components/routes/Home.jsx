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
import Sponsors from "../Sponsors";

const makeSlideVariants = (direction = "left") => {
  const x = direction === "left" ? -40 : 40;
  return {
    hidden: { opacity: 0, x },
    show: { opacity: 1, x: 0 },
  };
};

const slideTransition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] };

const Reveal = ({ children, from = "left", className = "" }) => (
  <m.section
    className={className}
    variants={makeSlideVariants(from)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    transition={slideTransition}
  >
    {children}
  </m.section>
);

const Home = () => {
  return (
    <>
      <Navbar
        links={[
          { to: "/Home", label: "Home" },
          { to: "/Tour", label: "IBX Tour" },
          { to: "/About", label: "About Us" },
        ]}
        cta={{ to: "/register", label: "Join Now" }}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Keep your page transition */}
        <m.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Scroll reveals: alternate left/right */}
          <Reveal from="left">
            <Hero />
          </Reveal>

          <Reveal from="right">
            <Recap />
          </Reveal>

          <Reveal from="left">
            <Glimpse />
          </Reveal>

          <Reveal from="right">
            <Target />
          </Reveal>

          <Reveal from="left">
            <Outline />
          </Reveal>

          <Reveal from="right">
            <Sponsors />
          </Reveal>

          <Reveal from="left">
            <Collaborators />
          </Reveal>
        </m.div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
