import React from "react";

type Props = {
  img: string;
  alt: string;
  setIsModalProductOpen: (value: boolean) => void;
};

const ModelProduct = ({ img, alt, setIsModalProductOpen }: Props) => {
  return (
    <div
      onClick={() => setIsModalProductOpen(false)}
      className="absolute top-0 left-0 bottom-0 right-0 w-screen  bg-black/60  z-40 flex justify-center items-center"
    >
      <div className="w-[500px] h-[500px] ">
        <img className="object-contain w-full h-full" src={img} alt={alt} />
      </div>
    </div>
  );
};

export default ModelProduct;
