import { useContext, useState } from "react";
import ModalLog from "./ModalLog";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProductContext, ProductContextType } from "../context/ProductContext";
import { AiOutlineMenu } from "react-icons/ai";
import Navlink from "./Navlink";
import SideMenu from "./SideMenu";

type Props = {
  isBigScreen: boolean;
};

const Navbar = ({ isBigScreen }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const user = true;
  const { getQuantityProduct } = useContext(
    ProductContext
  ) as ProductContextType;

  return (
    <div className="w-full bg-red-200 h-[100px]  flex flex-col justify-center  py-2 px-8  z-20 relative  ">
      {isSideMenuOpen && !isBigScreen && (
        <SideMenu setIsSideMenuOpen={setIsSideMenuOpen} />
      )}
      {modalIsOpen && <ModalLog setModalIsOpen={setModalIsOpen} />}
      {isBigScreen ? (
        <div className="flex justify-between items-center ">
          {/* LOGO ET MENU  */}
          <div className="flex bg-red-500  items-center ">
            <div className="mr-4">Logo</div>
            <div className="flex gap-4">
              <Navlink title="Home" link="/" />
              <Navlink title="La boutique" link="/shop" />
              <Navlink title="A propos" link="/about" />
            </div>
          </div>
          {/* BTN LOG OU PANIER */}
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center justify-between w-[200px]">
                <button>Mon profil</button>

                <Link to={`/panier`}>
                  {" "}
                  <button className="relative border-2 border-green-800 p-4 rounded-full">
                    <BsFillBasket3Fill />{" "}
                    <div className="absolute w-8 h-8 flex items-center justify-center -right-2 bg-red-700 -bottom-2 border-red-800 border rounded-full text-white ">
                      {getQuantityProduct()}
                    </div>
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => {
                    setModalIsOpen(true);
                  }}
                >
                  Se connecter
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex  w-full justify-between ">
          <div>Logo</div>
          <div className="flex items-center gap-4">
            {!user && (
              <button
                onClick={() => {
                  setModalIsOpen(true);
                }}
              >
                Se connecter
              </button>
            )}
            <button onClick={() => setIsSideMenuOpen(true)}>
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
