import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { ProductType } from "../types/DataType";

const Products = () => {
  console.log(useParams());
  let { category } = useParams();
  const [productsFromAPI, setProductsFromApi] = useState<ProductType[] | null>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await res.json();
    if (res.ok) {
      setProductsFromApi(data);
      setIsLoading(false);
    } else {
      console.log("erreur");
    }
  };

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="p-8">
      <h2 className="capitalize text-center text-3xl">{category} </h2>
      {isLoading && <Loader />}

      <div className="mt-4 flex items-center justify-evenly flex-wrap gap-4">
        {productsFromAPI &&
          productsFromAPI.map((product: ProductType) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
