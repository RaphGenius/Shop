import React from "react";
import { AiFillHeart } from "react-icons/ai";
type Props = {};

const FavoriteButton = (props: Props) => {
  return (
    <button className="relative border-2 border-gray-600 hover:scale-105 will-change-transform   transition p-4 rounded-full focus:ring focus:ring-green-800 ">
      <AiFillHeart />{" "}
    </button>
  );
};

export default FavoriteButton;
