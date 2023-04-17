import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { ProductType } from "../types/DataType";

const Products = () => {
  let { category } = useParams();

  console.log(category);
  const [productsFromAPI, setProductsFromApi] = useState<ProductType[] | null>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    const res =
      category === "All Products"
        ? await fetch(`https://fakestoreapi.com/products/`)
        : await fetch(`https://fakestoreapi.com/products/category/${category}`);
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
    <section className=" p-4 lg:p-8">
      <h2 className="mt-8 text-center text-4xl text-green-700 font-special uppercase ">
        {category}{" "}
      </h2>
      {isLoading && <Loader />}

      <div className="mt-8 flex items-center justify-center  w-full flex-wrap gap-4">
        {productsFromAPI &&
          productsFromAPI.map((product: ProductType) => (
            <ProductCard key={product.id} {...product} link={`${product.id}`} />
          ))}
      </div>
    </section>
  );
};

export default Products;
