import { useEffect, useState } from "react";
import { ProductType } from "../types/DataType";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

type Props = {};

const Favorite = (props: Props) => {
  const [productFavorite, setProductFavorite] = useState<ProductType[]>([]);
  [];
  const [storageItem, setStorageItem] = useState(() =>
    JSON.parse(localStorage.getItem("favourites") || "[]")
  );

  const getData = async (id: string) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    if (res.ok) {
      setProductFavorite((prev) => [...prev, data]);
    } else {
      console.log("erreur");
    }
  };

  useEffect(() => {
    storageItem.forEach((el: string) => {
      getData(el);
    });
  }, [productFavorite]);

  console.log(storageItem);

  const removeFromLs = (id: number) => {
    const item = () => JSON.parse(localStorage.getItem("favourites") || "[]");
    const newStorage = item().filter((el: number) => Number(el) !== id);

    localStorage.setItem("favourites", JSON.stringify(newStorage));
    setStorageItem(newStorage);

    console.log(newStorage);
  };

  if (productFavorite.length < 1) return <Loader />;

  return (
    <section className=" p-4 lg:p-8">
      <h2 className="capitalize text-center text-3xl">Favorites </h2>
      <div className="mt-4 flex items-center justify-center  w-full flex-wrap gap-4">
        {productFavorite &&
          productFavorite.map((product: ProductType) => (
            <div key={product.id}>
              <ProductCard
                {...product}
                link={`/shop/${product.category}/${product.id}`}
              />
              <button
                onClick={() => removeFromLs(product.id)}
                className=" w-full mt-4 "
              >
                Retirer{" "}
              </button>
            </div>
          ))}
      </div>
      <div className="mt-4 flex items-center justify-center  w-full flex-wrap gap-4"></div>
    </section>
  );
};

export default Favorite;
