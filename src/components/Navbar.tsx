import { useState } from "react";
import ModalLog from "./ModalLog";
import { BsFillBasket3Fill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
type Props = {};

const Navbar = (props: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const user = false;

  return (
    <div className="w-full bg-red-200 h-[100px] flex flex-col justify-center  py-2 px-8">
      {modalIsOpen && <ModalLog setModalIsOpen={setModalIsOpen} />}
      <div className="flex justify-between items-center ">
        {/* LOGO ET MENU  */}
        <div className="flex bg-red-500  items-center ">
          <div className="mr-4">Logo</div>
          <div className="flex gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shopping</NavLink>
            <NavLink to="/about">A propos</NavLink>
          </div>
        </div>
        {/* BTN LOG OU PANIER */}
        <div className="flex items-center">
          {user ? (
            <div>
              <button>Mon profil</button>
              <button>
                <BsFillBasket3Fill />{" "}
              </button>
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
    </div>
  );
};

export default Navbar;
