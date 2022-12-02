import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail";
import Logo from "../pages/Logo";
const Myrouters = () => {
  return (
    <Routes>
        <Route path="/logo" element={<Logo/>} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/productdetails" element={<ProductDetail />} />
    </Routes>
  );
};

export default Myrouters;
