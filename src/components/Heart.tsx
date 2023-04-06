import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
type Props = {};

const Heart = (props: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      className="hover:scale-125 transition"
      onClick={() => {
        setIsLiked(!isLiked);
      }}
    >
      {isLiked ? <AiFillHeart color="crimson" /> : <AiOutlineHeart />}
    </button>
  );
};

export default Heart;
