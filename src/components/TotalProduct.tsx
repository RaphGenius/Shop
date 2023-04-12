import { useContext, useEffect, useState } from "react";
import { ProductContext, ProductContextType } from "../context/ProductContext";

type QuantityPriceItemType = {
  price: number;
  quantity: number;
  id: number;
};

const TotalProduct = () => {
  const { products } = useContext(ProductContext) as ProductContextType;
  const [totalPrice, setTotalPrice] = useState<number>(0);
  console.log(products);

  useEffect(() => {
    let total = 0;
    products.forEach(async (el) => {
      const res = await fetch(`https://fakestoreapi.com/products/${el.id}`);
      const data = await res.json();
      total += data.price * el.quantity;
      setTotalPrice(total);
    });
  }, [products]);

  console.log(totalPrice);
  if (products.length < 1) return <p>pas de prix</p>;

  return <div>Prix total :{totalPrice.toFixed(2)} </div>;
};

export default TotalProduct;
