import { MdExitToApp } from "react-icons/md";
import { logout } from "../firebase/discFunction";

type Props = {};

const DiscButton = (props: Props) => {
  return (
    <button
      aria-label="Deconnexion"
      className="relative border-2 border-gray-600 hover:scale-105 will-change-transform   transition p-4 rounded-full focus:ring focus:ring-green-800 "
      onClick={() => logout()}
    >
      <MdExitToApp />{" "}
    </button>
  );
};

export default DiscButton;
