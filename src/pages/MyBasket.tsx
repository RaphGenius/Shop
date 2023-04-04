import React, { useContext } from "react";
import { ProductContext, ProductContextType } from "../context/ProductContext";

type Props = {};

const MyBasket = (props: Props) => {
  const { products } = useContext(ProductContext) as ProductContextType;
  console.log(products);
  return <div>MyBasket</div>;
};

export default MyBasket;
