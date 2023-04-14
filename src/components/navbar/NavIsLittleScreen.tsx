import Logo from "../Logo";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import BasketButton from "../BasketButton";
import FavoriteButton from "./FavoriteButton";

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
      <div className="flex items-center gap-4">
        <FavoriteButton />
        {user ? (
          <BasketButton />
        ) : (
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
  );
};

export default NavIsLittleScreen;
