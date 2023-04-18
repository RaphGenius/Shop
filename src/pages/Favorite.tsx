import { useEffect, useState } from "react";
import { ProductType } from "../types/DataType";
import ProductCard from "../components/ProductCard";
import { CiSquareRemove } from "react-icons/ci";
import NoItemBasket from "../components/NoItemBasket";
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
  }, []);

  const removeFromLs = (id: number) => {
    const item = () => JSON.parse(localStorage.getItem("favourites") || "[]");
    const newStorage = item().filter((el: number) => Number(el) !== id);
    localStorage.setItem("favourites", JSON.stringify(newStorage));
    setProductFavorite((prev) => prev.filter((item) => item.id !== id));
  };

  if (productFavorite.length < 1) return <NoItemBasket />;

  console.log(productFavorite);

  return (
    <section className=" p-4 lg:p-8">
      <h2 className="capitalize text-center text-4xl mt-8 font-special text-green-800 ">
        Favorites{" "}
      </h2>
      <div className="mt-8 flex items-center justify-center  w-full flex-wrap gap-4">
        {productFavorite &&
          productFavorite.map((product: ProductType) => (
            <div key={product.id}>
              <ProductCard
                {...product}
                link={`/shop/${product.category}/${product.id}`}
              />
              <button
                aria-label={`remove ${product.title}`}
                onClick={() => removeFromLs(product.id)}
                className=" w-full mt-4 flex justify-center text-green-800 text-4xl hover:scale-105 duration-75      "
              >
                <CiSquareRemove />
              </button>
            </div>
          ))}
      </div>
      <div className="mt-4 flex items-center justify-center  w-full flex-wrap gap-4"></div>
    </section>
  );
};

export default Favorite;
