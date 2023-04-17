import Logo from "../Logo";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import BasketButton from "../BasketButton";
import FavoriteButton from "./FavoriteButton";
import DiscButton from "../DiscButton";
import { BsFillPersonFill } from "react-icons/bs";

type Props = {
  user: any;
  setModalIsOpen: (value: boolean) => void;
  setIsSideMenuOpen: (value: boolean) => void;
};

const NavIsLittleScreen = ({
  user,
  setModalIsOpen,
  setIsSideMenuOpen,
}: Props) => {
  return (
    <div className="flex  w-full justify-between ">
      <Logo />
      <div className="flex items-center gap-3  ">
        <FavoriteButton />
        {user ? (
          <BasketButton />
        ) : (
          <button
            onClick={() => setModalIsOpen(true)}
            aria-label="Allez à la page Profil"
            className="relative border-2 border-gray-600 hover:scale-105 will-change-transform   transition p-4 rounded-full focus:ring focus:ring-green-800 "
          >
            <BsFillPersonFill />
          </button>
        )}
        <button className="ml-2" onClick={() => setIsSideMenuOpen(true)}>
          <AiOutlineMenu />
        </button>
      </div>
    </div>
  );
};

export default NavIsLittleScreen;
