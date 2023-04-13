import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { MdExitToApp } from "react-icons/md";
import { toast } from "react-toastify";
type Props = {};

const DiscButton = (props: Props) => {
  function logout() {
    signOut(auth).then(() => {
      toast(`Deconnecté`, {
        theme: "light",
      });
    });
  }

  return (
    <button
      className="relative border-2 border-gray-600 hover:scale-105 will-change-transform   transition p-4 rounded-full focus:ring focus:ring-green-800 "
      onClick={() => logout()}
    >
      <MdExitToApp />{" "}
    </button>
  );
};

export default DiscButton;
