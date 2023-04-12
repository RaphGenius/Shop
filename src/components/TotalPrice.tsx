import React from "react";

type Props = {
  title: string;
  price: number | string;
  bold?: string;
};

const TotalPrice = ({ title, price, bold = "font-normal" }: Props) => {
  return (
    <div
      className={`${bold} flex w-full justify-between lg:text-lg text-base  `}
    >
      <span className={`${bold}`}>{title}</span>
      <span className={`${bold}`}>{price} € </span>
    </div>
  );
};

export default TotalPrice;
