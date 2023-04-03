import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import Products from "./pages/Products";
import About from "./pages/About";
import Product from "./pages/Product";
function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-xl">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shopping />} />
        <Route path="/shop/:category" element={<Products />} />
        <Route path="/shop/:category/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
