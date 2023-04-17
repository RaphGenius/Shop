import React, { useContext } from "react";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProductContext, ProductContextType } from "../context/ProductContext";

type Props = {};

const BasketButton = (props: Props) => {
  const { getQuantityProduct } = useContext(
    ProductContext
  ) as ProductContextType;

  return (
    <Link to={`/panier`}>
      {" "}
      <button
        aria-label="Allez à la page panier"
        className="relative border-2 border-gray-600 p-4 rounded-full focus:ring focus:ring-green-800   hover:scale-105 will-change-transform   transition"
      >
        <BsFillBasket3Fill />{" "}
        <div className="absolute w-8 h-8 flex items-center justify-center -right-2 bg-green-700 -bottom-2  rounded-full text-white ">
          {getQuantityProduct()}
        </div>
      </button>
    </Link>
  );
};

export default BasketButton;
