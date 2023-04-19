import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { UserContext, UserContextType } from "../../context/UserContext";
type FormProps = {
  isLogin: "login" | "signup" | undefined;
};

const Form = ({ isLogin }: FormProps) => {
  const [isError, setIsError] = useState("");
  const mail = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const { setUser } = useContext(UserContext) as UserContextType;

  function getErrorFromAuth(message: string) {
    console.log(message);
    switch (message) {
      case "auth/email-already-in-use":
        setIsError(
          "L'adresse e-mail fournie est déjà utilisée par un utilisateur existant. Chaque utilisateur doit avoir un email unique."
        );
        break;
      case "auth/weak-password":
        setIsError("Votre mot de passe doit contenir au moins 6 caractères");
        break;
      case "auth/invalid-email":
        setIsError("Le format de votre adresse mail n'est pas valide");
        break;
      case "auth/user-not-found":
        setIsError(
          "Aucun utilisateur n'a été trouvé avec cette paire mail/mot de passe"
        );
        break;
      case "auth/wrong-password":
        setIsError("Mot de passe incorrecte");
        break;
    }
    setTimeout(() => {
      setIsError("");
    }, 2500);
  }

  function handleSignIn(e: any) {
    e.preventDefault();
    if (!mail.current?.value || !password.current?.value) {
      setIsError("Tous les champs ne sont pas complétes");
      return;
    }

    if (isLogin === "signup") {
      createUserWithEmailAndPassword(
        auth,
        mail.current.value,
        password.current?.value
      )
        .then((userCredential) => {
          setUser(userCredential.user);
        })
        .catch((error) => {
          console.log(error.code);
          getErrorFromAuth(error.code);
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
        })
        .catch((error) => {
          console.log(error.code);
          getErrorFromAuth(error.code);
        });
      return;
    }
  }

  return (
    <form onSubmit={(e) => handleSignIn(e)} className="space-y-5">
      <div>
        <label className="font-medium text-black">Email</label>
        <input
          ref={mail}
          type="email"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-800 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium text-black">Mot de passe</label>
        <input
          type="password"
          required
          ref={password}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-800 shadow-sm rounded-lg"
        />
      </div>
      <div className="pb-4">
        <button className="w-full px-4 py-2 text-white font-medium bg-green-700 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150">
          {isLogin === "signup" ? "S'inscrire" : "Se connecter"}
        </button>
      </div>

      {isError && (
        <p className="text-center text-red-600 font-bold ">{isError} </p>
      )}
    </form>
  );
};

export default Form;
