import { useContext, useEffect, useState } from "react";
import { ProductContext, ProductContextType } from "../context/ProductContext";
import { StoreProduct } from "../types/DataType";

type Props = {};

const MyBasket = (props: Props) => {
  const { products } = useContext(ProductContext) as ProductContextType;
  const [allProducts, setAllProducts] = useState<StoreProduct[]>([]);

  useEffect(() => {
    console.log(products.length);
    products.forEach(async (product) => {
      const res = await fetch(
        `https://fakestoreapi.com/products/${product.id}`
      );
      const data = await res.json();
      setAllProducts((prev) => [
        ...prev,
        { ...data, quantity: product.quantity },
      ]);
    });
  }, []);

  console.log(allProducts);
  if (products.length == 0) return <p>AUcun produit</p>;
  return (
    <div className="p-4 ">
      <div>
        {" "}
        <h4>Total</h4>
        <div></div>
      </div>
    </div>
  );
};

export default MyBasket;
