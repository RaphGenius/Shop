import { useState } from "react";
import Form from "./Form";

type ModelProps = {
  setModalIsOpen(value: boolean): void;
};

const ModalLog = ({ setModalIsOpen }: ModelProps) => {
  const [isLogin, setIsLogin] = useState<"login" | "signup" | undefined>(
    "login"
  );

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setModalIsOpen(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <h4 className="text-lg font-medium text-gray-800">
              {isLogin === "login" ? <p>Connexion</p> : <p>Inscription</p>}
            </h4>
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setModalIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="w-full flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600 space-y-5 py-4">
              <Form isLogin={isLogin} />
              {isLogin === "login" && (
                <div className="flex flex-col ">
                  {" "}
                  <p className="text-center">Vous n'avez pas de compte ? </p>
                  <button
                    onClick={() => setIsLogin("signup")}
                    className="font-medium text-indigo-600 hover:text-indigo-500 text-center"
                  >
                    {" "}
                    Inscrivez vous!
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLog;
