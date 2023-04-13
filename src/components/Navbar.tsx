import { useContext, useState } from "react";
import ModalLog from "./ModalLog";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProductContext, ProductContextType } from "../context/ProductContext";
import { AiOutlineMenu } from "react-icons/ai";
import Navlink from "./Navlink";
import SideMenu from "./SideMenu";
import Logo from "./Logo";
import { UserContext, UserContextType } from "../context/UserContext";
import DiscButton from "./DiscButton";
type Props = {
  isBigScreen: boolean;
};

const Navbar = ({ isBigScreen }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const { user } = useContext(UserContext) as UserContextType;
  const { getQuantityProduct } = useContext(
    ProductContext
  ) as ProductContextType;

  return (
    <div className="w-full bg-gradient-to-t from-gray-200 to-white h-[100px] sticky top-0  lg:relative flex flex-col justify-center  py-2 px-8  z-20 shadow-md  ">
      {isSideMenuOpen && !isBigScreen && (
        <SideMenu setIsSideMenuOpen={setIsSideMenuOpen} />
      )}
      {modalIsOpen && <ModalLog setModalIsOpen={setModalIsOpen} />}
      {isBigScreen ? (
        <div className="flex justify-between items-center ">
          {/* LOGO ET MENU  */}
          <div className="flex  items-center ">
            <Logo />
            <div className="flex gap-6  ">
              <Navlink title="Accueil" link="/" />
              <Navlink title="La boutique" link="/shop" />
              <Navlink title="A propos" link="/about" />
            </div>
          </div>
          {/* BTN LOG OU PANIER */}
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center justify-between w-[200px]">
                <button>Mon profil</button>

                <DiscButton />

                <Link to={`/panier`}>
                  {" "}
                  <button className="relative border-2 border-gray-600 p-4 rounded-full">
                    <BsFillBasket3Fill />{" "}
                    <div className="absolute w-8 h-8 flex items-center justify-center -right-2 bg-green-700 -bottom-2  rounded-full text-white ">
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
          <Logo />
          <div className="flex items-center gap-4">
            <Link to={`/panier`}>
              {" "}
              <button className="relative border-2 border-gray-600 p-4 rounded-full">
                <BsFillBasket3Fill />{" "}
                <div className="absolute w-8 h-8 flex items-center justify-center -right-2 bg-green-700 -bottom-2  rounded-full text-white ">
                  {getQuantityProduct()}
                </div>
              </button>
            </Link>
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
