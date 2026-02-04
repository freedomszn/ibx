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

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const sectionTransition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] };

const Reveal = ({ children, className = "" }) => (
  <m.section
    className={className}
    variants={sectionVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }} // once=true prevents re-animating on scroll up/down
    transition={sectionTransition}
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
        {/* Page transition stays as-is */}
        <m.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Scroll reveal sections */}
          <Reveal>
            <Hero />
          </Reveal>

          <Reveal>
            <Recap />
          </Reveal>

          <Reveal>
            <Glimpse />
          </Reveal>

          <Reveal>
            <Target />
          </Reveal>

          <Reveal>
            <Outline />
          </Reveal>

          <Reveal>
            <Sponsors />
          </Reveal>

          <Reveal>
            <Collaborators />
          </Reveal>
        </m.div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
