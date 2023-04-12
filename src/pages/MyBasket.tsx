import { useContext, useEffect, useState } from "react";
import { ProductContext, ProductContextType } from "../context/ProductContext";

import BasketItem from "../components/BasketItem";
import TotalProduct from "../components/TotalProduct";
import { ProductType, StoreProduct } from "../types/DataType";
import NoItemBasket from "../components/NoItemBasket";

type Props = {};

function articleWithSorNot(quantity: number) {
  if (quantity == 1) return "article";
  else return "articles";
}

const MyBasket = (props: Props) => {
  const { products, getQuantityProduct } = useContext(
    ProductContext
  ) as ProductContextType;

  if (products.length == 0) return <NoItemBasket />;
  return (
    <section className=" p-4 lg:p-8 ">
      <div>
        <h4 className="text-4xl mt-2 mb-8 ">
          {/* Nombre d'article */}
          Mon panier : {getQuantityProduct()}{" "}
          {/* Article avec s si la quantité est supérieur à 1 */}
          {articleWithSorNot(getQuantityProduct())}
        </h4>
        <div className="flex lg:flex-row flex-col  flex-nowrap w-full">
          {/* MES ARTICLES */}
          <article className="  w-full lg:w-2/3 ">
            {products.map((item) => (
              <BasketItem key={item.id} {...item} />
            ))}
          </article>

          {/* Mon total */}
          <div className=" px-4 py-8 bg-green-400 w-full lg:w-1/3 sticky lg:top-0 top-[100px]  h-[150px] ">
            <TotalProduct />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBasket;
