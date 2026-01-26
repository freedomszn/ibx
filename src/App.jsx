import React from "react";
import Home from "./Components/routes/Home.jsx";
import Tour from "./Components/routes/Tour.jsx";
import About from "./Components/routes/About.jsx";
import Event from "./Components/routes/Event.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Tour" element={<Tour />} />
        <Route path="/About" element={<About />} />
        <Route path="/Event" element={<Event />} />
      </Routes>
    </>
  );
};

export default App;
