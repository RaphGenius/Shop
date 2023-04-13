import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
type Props = {};

const DiscButton = (props: Props) => {
  return <button onClick={() => signOut(auth)}>Deconnexion</button>;
};

export default DiscButton;
