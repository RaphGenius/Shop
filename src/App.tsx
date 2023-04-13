import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import Products from "./pages/Products";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductProvider from "./context/ProductContext";
import MyBasket from "./pages/MyBasket";
import useMediaQuery from "./hooks/useMediaQuery";
import ToastComponent from "./components/ToastComponent";
import Footer from "./components/Footer";
import UserProvider from "./context/UserContext";
function App() {
  const isBigScreen = useMediaQuery(`(min-width:768px)`);

  return (
    <UserProvider>
      <ProductProvider>
        <div className="bg-gray-100 min-h-screen text-xl  relative flex flex-col  ">
          <main className="relative pb-[100px] ">
            <Navbar isBigScreen={isBigScreen} />
            <ToastComponent isBigScreen={isBigScreen} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shopping />} />
              <Route path="/shop/:category" element={<Products />} />
              <Route path="/shop/:category/:id" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/panier" element={<MyBasket />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
