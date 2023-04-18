import { FormEvent, useRef, useState } from "react";
import TotalProduct from "./TotalProduct";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {
  user: any;
};

const FormBasket = ({ user }: Props) => {
  const navigate = useNavigate();
  const nom = useRef<HTMLInputElement>(null);
  const prenom = useRef<HTMLInputElement>(null);
  const NameCart = useRef<HTMLInputElement>(null);
  const adressePostal = useRef<HTMLInputElement>(null);
  const codePostal = useRef<HTMLInputElement>(null);
  const NumberCart = useRef<HTMLInputElement>(null);
  const CsvCart = useRef<HTMLInputElement>(null);

  type FormBasketType = {
    nom: string | undefined;
    prenom: string | undefined;
    NameCart: string | undefined;
    NumberCart: string | undefined;
    adressePostal: string | undefined;
    codePostal: string | undefined;
    CsvCart: string | undefined;
  };

  const orderClient: FormBasketType = {
    nom: nom.current?.value,
    prenom: prenom.current?.value,
    NameCart: NameCart.current?.value,
    adressePostal: adressePostal.current?.value,
    codePostal: codePostal.current?.value,
    NumberCart: NumberCart.current?.value,
    CsvCart: CsvCart.current?.value,
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    navigate(`/validation/${user.uid}`);
  }

  return (
    <article
      id="commander"
      className="pt-16 my-auto min-h-screen border-t border-gray-500 "
    >
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Valider votre commande
          </h3>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form
            onSubmit={(e: FormEvent) => handleSubmit(e)}
            className="space-y-5"
          >
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">Nom</label>
                <input
                  pattern="[^0-9]+"
                  type="text"
                  required
                  ref={nom}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Prénom</label>
                <input
                  pattern="[^0-9]+"
                  ref={prenom}
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-800 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Adresse mail</label>
              <input
                value={user.email}
                readOnly
                disabled
                type="text"
                required
                className="w-full bg-gray-300 mt-2 px-3 py-2 text-gray-500outline-none border focus:border-green-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Nom sur la carte</label>
              <input
                ref={NameCart}
                pattern="[^0-9]+"
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-800 shadow-sm rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">Numéro de carte</label>
                <input
                  maxLength={12}
                  minLength={12}
                  type="text"
                  pattern="[0-9]+"
                  required
                  ref={NumberCart}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">CSV</label>
                <input
                  ref={CsvCart}
                  maxLength={3}
                  pattern="[0-9]+"
                  minLength={3}
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-800 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div className="w-1/3">
                <label className="font-medium">Adresse postal</label>
                <input
                  ref={adressePostal}
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-800 shadow-sm rounded-lg"
                />
              </div>
              <div className="w-2/3">
                <label className="font-medium">Code postal</label>
                <input
                  ref={codePostal}
                  type="text"
                  required
                  pattern="[0-9]+"
                  maxLength={5}
                  minLength={5}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-800 shadow-sm rounded-lg"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-green-800 hover:bg-green-900 hover:scale-110 hover:shadow-lg active:bg-green-800 rounded-lg duration-150"
            >
              Commander
            </button>
          </form>
        </div>
        <div className=" px-4 py-8  bg-green-800 text-white w-full mx-auto lg:w-1/3 sticky lg:top-0 top-[100px] mt-8  lg:h-[200px] ">
          {" "}
          <TotalProduct />
        </div>
      </div>
    </article>
  );
};

export default FormBasket;
