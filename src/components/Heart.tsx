import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

type Props = {
  id: string;
};

const Heart = ({ id }: Props) => {
  const [storageItem, setStorageItem] = useState(() =>
    JSON.parse(localStorage.getItem("favourites") || "[]")
  );

  const isFavourited = storageItem.includes(id);

  const handleToggleFavourite = () => {
    if (!isFavourited) {
      const newStorageItem = [...storageItem, id];
      setStorageItem(newStorageItem);
      localStorage.setItem("favourites", JSON.stringify(newStorageItem));
    } else {
      const newStorageItem = storageItem.filter(
        (savedId: string) => savedId !== id
      );
      setStorageItem(newStorageItem);
      localStorage.setItem("favourites", JSON.stringify(newStorageItem));
    }
  };

  return (
    <button
      aria-label="Ajouter aux Coup de coeur"
      className="hover:scale-125 transition"
      onClick={() => {
        handleToggleFavourite();
      }}
    >
      {isFavourited ? <AiFillHeart color="crimson" /> : <AiOutlineHeart />}
    </button>
  );
};

export default Heart;
