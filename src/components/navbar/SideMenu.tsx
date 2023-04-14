import React from "react";
import Navlink from "./Navlink";
import { GrClose } from "react-icons/gr";
import Logo from "../Logo";
type Props = {
  setIsSideMenuOpen: (value: boolean) => void;
};

const SideMenu = ({ setIsSideMenuOpen }: Props) => {
  return (
    <div className="absolute top-0 left-0 h-screen right-0 bottom-0 inset-full z-50 bg-gradient-to-t from-gray-300 to-white ">
      <div className="p-8">
        <div className="flex w-full justify-between">
          <Logo />
          <button onClick={() => setIsSideMenuOpen(false)}>
            <GrClose />
          </button>
        </div>

        <div className="w-full flex flex-col items-center gap-4  ">
          <button onClick={() => setIsSideMenuOpen(false)}>
            <Navlink title="Home" link="/" />
          </button>
          <button onClick={() => setIsSideMenuOpen(false)}>
            <Navlink title="La boutique" link="/shop" />
          </button>{" "}
          <button onClick={() => setIsSideMenuOpen(false)}>
            <Navlink title="A propos" link="/about" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
