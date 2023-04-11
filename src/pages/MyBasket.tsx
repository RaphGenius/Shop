import { useContext } from "react";
import { ProductContext, ProductContextType } from "../context/ProductContext";

import BasketItem from "../components/BasketItem";
import TotalProduct from "../components/TotalProduct";

type Props = {};

const MyBasket = (props: Props) => {
  const { products, getQuantityProduct } = useContext(
    ProductContext
  ) as ProductContextType;

  if (products.length == 0) return <p>AUcun produit</p>;
  return (
    <div className="p-8 ">
      <div className="bg-gray-200">
        <h4>Mon panier : {getQuantityProduct()} articles </h4>
        <div className="flex flex-nowrap w-full">
          {/* MES ARTICLES */}
          <div className="bg-red-300 w-2/3 ">
            {products.map((item) => (
              <BasketItem key={item.id} {...item} />
            ))}
          </div>

          {/* Mon total */}
          <div className="bg-green-300 w-1/3 sticky top-0 h-12 ">
            <TotalProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBasket;
