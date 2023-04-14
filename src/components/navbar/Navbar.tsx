import { useContext, useState } from "react";
import ModalLog from "../Log/ModalLog";
import SideMenu from "./SideMenu";
import { UserContext, UserContextType } from "../../context/UserContext";

import NavIsBigScreen from "./NavIsBigScreen";
import NavIsLittleScreen from "./NavIsLittleScreen";
type Props = {
  isBigScreen: boolean;
};

const Navbar = ({ isBigScreen }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const { user } = useContext(UserContext) as UserContextType;

  return (
    <div className="w-full bg-gradient-to-t from-gray-200 to-white h-[100px] sticky top-0  lg:relative flex flex-col justify-center  py-2 px-8  z-20 shadow-md  ">
      {isSideMenuOpen && !isBigScreen && (
        <SideMenu setIsSideMenuOpen={setIsSideMenuOpen} />
      )}
      {modalIsOpen && <ModalLog setModalIsOpen={setModalIsOpen} />}
      {isBigScreen ? (
        <NavIsBigScreen user={user} setModalIsOpen={setModalIsOpen} />
      ) : (
        <NavIsLittleScreen
          user={user}
          setModalIsOpen={setModalIsOpen}
          setIsSideMenuOpen={setIsSideMenuOpen}
        />
      )}
    </div>
  );
};

export default Navbar;
