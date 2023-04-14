import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext, useRef } from "react";
import { auth } from "../../firebase/firebase.config";
import { UserContext, UserContextType } from "../../context/UserContext";
type FormProps = {
  isLogin: "login" | "signup" | undefined;
};

const Form = ({ isLogin }: FormProps) => {
  const mail = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const { setUser } = useContext(UserContext) as UserContextType;

  function handleSignIn(e: any) {
    e.preventDefault();
    console.log("salut");
    if (!mail.current?.value || !password.current?.value)
      return console.log("tous les champs ne sont pas remplies");

    if (isLogin === "signup") {
      createUserWithEmailAndPassword(
        auth,
        mail.current.value,
        password.current?.value
      )
        .then((userCredential) => {
          setUser(userCredential.user);
          console.log(userCredential.user);
        })
        .catch((error) => {
          console.log(error.message);
        });
      return;
    }
    if (isLogin === "login") {
      signInWithEmailAndPassword(
        auth,
        mail.current.value,
        password.current?.value
      )
        .then((userCredential) => {
          setUser(userCredential.user);
          console.log(userCredential.user);
        })
        .catch((error) => {
          console.log(error.message);
        });
      return;
    }
  }

  return (
    <form onSubmit={(e) => handleSignIn(e)} className="space-y-5">
      <div>
        <label className="font-medium">Email</label>
        <input
          ref={mail}
          type="email"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Mot de passe</label>
        <input
          type="password"
          required
          ref={password}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
        {isLogin === "signup" ? "S'inscrire" : "Se connecter"}
      </button>
    </form>
  );
};

export default Form;
