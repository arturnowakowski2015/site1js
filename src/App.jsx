import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./views/Nav/Navbar";
import Home from "./views/Home/Home";
import Settings from "./views/Settings/Settings";
import "./styles.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
