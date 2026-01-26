import React from "react";
import Home from "./Components/routes/Home.jsx";
import Tour from "./Components/routes/Tour.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Tour" element={<Tour />} />
      </Routes>
    </>
  );
};

export default App;
