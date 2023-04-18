import { useContext } from "react";
import Logo from "../Logo";
import Navlink from "./Navlink";
import { BsFillPersonFill } from "react-icons/bs";
import DiscButton from "../DiscButton";

import BasketButton from "../BasketButton";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";

type Props = {
  setModalIsOpen: (value: boolean) => void;
  user: any;
};

const NavIsBigScreen = ({ setModalIsOpen, user }: Props) => {
  return (
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
      <div className="flex items-center gap-4 ">
        <FavoriteButton />
        {user ? (
          <>
            <Link to={"/profil"}>
              <button
                aria-label="Allez à la page Profil"
                className="relative border-2 border-gray-600 hover:scale-105 will-change-transform   transition p-4 rounded-full focus:ring focus:ring-green-800 "
              >
                <BsFillPersonFill />
              </button>
            </Link>

            <DiscButton />
            <BasketButton />
          </>
        ) : (
          <div>
            <button
              className="relative border-2 border-gray-600 hover:scale-105 will-change-transform   transition p-4 rounded-full focus:ring focus:ring-green-800 "
              onClick={() => {
                setModalIsOpen(true);
              }}
            >
              <BsFillPersonFill />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavIsBigScreen;
