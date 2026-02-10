import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Collaborators from "../Collaborators";
import Hero from "../tour/Hero";
import Card from "../tour/Card";
import Gallery from "../tour/Gallery";
import { motion as m } from "framer-motion";
import Join from "../tour/Join";

const Tour = () => {
  const logo = "/tourlogo.svg";

  return (
    <>
      <Navbar
        links={[
          { to: "/Home", label: "Home" },
          { to: "/Tour", label: "IBX Tour" },
          { to: "/About", label: "About Us" },
        ]}
        cta={{
          href: "https://ibx2026.eventcrib.com/",
          label: "Join Now",
          target: "_blank",
        }}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Page transition ONLY */}
        <m.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="min-h-screen"
        >
          <Hero />
          <Card />
          <Collaborators />
          <Gallery />
          <Join />
        </m.div>
      </div>

      <Footer />
    </>
  );
};

export default Tour;
