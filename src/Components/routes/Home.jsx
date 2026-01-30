import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Collaborators from "../Collaborators";
import Footer from "../Footer";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white">
        <m.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          <Hero />
          <Collaborators />
        </m.div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
