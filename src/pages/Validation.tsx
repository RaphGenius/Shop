import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { ProductContextType } from "../context/ProductContext";
type Props = {};

function Validation({}: Props) {
  const { id } = useParams();
  const { removeAllProduct } = useContext(ProductContext) as ProductContextType;

  useEffect(() => {
    removeAllProduct(null);
  }, []);
  return (
    <section className=" p-4  lg:p-8  overflow-x--hidden">
      <h2 className="mt-8 text-center text-4xl text-green-700 font-special uppercase ">
        Votre commande
      </h2>
      <div className="mt-8 text-center  w-full flex-wrap gap-4">
        <p> Votre commande n°{id?.slice(0, 10)} a bien été validé</p>
        <p>
          Celle ci devrait arriver le {new Date().getDate() + 2}/0
          {new Date().getMonth()}/2023
        </p>
      </div>
      <div className="mt-4">
        <Link
          to={"/shop"}
          className="flex items-center gap-4 justify-center   "
        >
          <button className="border border-black rounded-lg p-4 mt-2 hover:bg-green-800 hover:text-white hover:shadow-lg">
            Retourner à la boutique
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Validation;
