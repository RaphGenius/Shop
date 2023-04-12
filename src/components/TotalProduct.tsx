import { useContext, useEffect, useState } from "react";
import { ProductContext, ProductContextType } from "../context/ProductContext";
import TotalPrice from "./TotalPrice";

const TotalProduct = () => {
  const { products } = useContext(ProductContext) as ProductContextType;
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  function removeTva(numb: number) {
    const tva = (numb / 120) * 20;
    return (numb - tva).toFixed(2);
  }

  useEffect(() => {
    setIsLoading(true);
    let total = 0;
    products.forEach(async (el) => {
      const res = await fetch(`https://fakestoreapi.com/products/${el.id}`);
      const data = await res.json();
      total += data.price * el.quantity;
      setTotalPrice(total);
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [products]);

  if (products.length < 1) return <p>pas de prix</p>;

  return (
    <article className={`${isLoading ? "blur " : ""}`}>
      <TotalPrice title="Sous-total :" price={removeTva(totalPrice)} />
      <TotalPrice title="Livraison : " price={0} />
      <TotalPrice
        title="Total (avec TVA incluse) :"
        price={totalPrice.toFixed(2)}
        bold="font-bold"
      />
    </article>
  );
};

export default TotalProduct;
