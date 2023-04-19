import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ProductProvider from "./context/ProductContext";
import useMediaQuery from "./hooks/useMediaQuery";
import ToastComponent from "./components/ToastComponent";
import Footer from "./components/Footer";
import UserProvider from "./context/UserContext";
import { motion } from "framer-motion";
import {
  About,
  Favorite,
  Home,
  MyBasket,
  Product,
  Products,
  Shopping,
  Validation,
} from "./pages";
import MyProfil from "./pages/MyProfil";
import AnimatedPres from "./FramerMotion/AnimatedPres";
function App() {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const isBigScreen = useMediaQuery(`(min-width:768px)`);
  return (
    <UserProvider>
      <ProductProvider>
        <div className="bg-gray-100 min-h-screen text-xl  relative flex flex-col  ">
          <Navbar isBigScreen={isBigScreen} />
          <AnimatedPres>
            <main className="relative pb-[100px] ">
              <ToastComponent isBigScreen={isBigScreen} />
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/shop" element={<Shopping />} />
                <Route path="/shop/:category" element={<Products />} />
                <Route path="/shop/:category/:id" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/panier" element={<MyBasket />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/profil" element={<MyProfil />} />
                <Route path="/validation/:id" element={<Validation />} />
              </Routes>
            </main>
          </AnimatedPres>
          <Footer />
        </div>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
