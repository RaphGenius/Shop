import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";
import { toast } from "react-toastify";

export function logout() {
  signOut(auth).then(() => {
    toast(`Deconnecté`, {
      theme: "light",
    });
  });
}
