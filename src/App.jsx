import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./views/Nav/Navbar";
import ProductList from "./views/List/ProductList";

import "./styles.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
