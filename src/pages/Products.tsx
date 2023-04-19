import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { ProductType } from "../types/DataType";

const Products = () => {
  let { category } = useParams();

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
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  isLoading && <Loader />;
  return (
    <motion.section className=" p-4 lg:p-8">
      <h2 className="mt-8 text-center text-4xl text-green-700 font-special uppercase ">
        {category}
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mt-8 flex items-center justify-center  w-full flex-wrap gap-4"
      >
        {/* {isLoading && <Loader />} */}
        {productsFromAPI &&
          productsFromAPI.map((product: ProductType) => (
            <motion.div variants={item}>
              <ProductCard
                key={product.id}
                {...product}
                link={`${product.id}`}
              />
            </motion.div>
          ))}
      </motion.div>
    </motion.section>
  );
};

export default Products;
