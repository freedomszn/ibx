import React from "react";
import Home from "./Components/routes/Home.jsx";
import Tour from "./Components/routes/Tour.jsx";
import About from "./Components/routes/About.jsx";
import Event from "./Components/routes/Event.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Tour" element={<Tour />} />
        <Route path="/About" element={<About />} />
        <Route path="/Event" element={<Event />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
