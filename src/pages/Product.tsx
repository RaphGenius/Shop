import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Loader from "../components/Loader";
import { ProductType } from "../types/DataType";
import { ProductContext, ProductContextType } from "../context/ProductContext";
import { FormatPrice } from "../utils/FormatPrice";
import { Rating } from "../utils/Rating";
import Heart from "../components/Heart";
import { toast } from "react-toastify";
import ModelProduct from "../components/ModelProduct";
import BackNagivate from "../components/BackNagivate";

type Props = {};

const Product = (props: Props) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState<ProductType>();

  const [isModalProductOpen, setIsModalProductOpen] = useState(false);

  const { addProduct } = useContext(ProductContext) as ProductContextType;

  const getData = async () => {
    setIsLoading(true);
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    if (res.ok) {
      setProductData(data);
      setIsLoading(false);
      console.log(data);
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

  const addBasket = (id: number) => {
    addProduct(id);
    toast(`Article ajouté au panier! `, {
      theme: "light",
    });
  };

  if (!productData) return <Loader />;

  return (
    <div className=" p-4  lg:p-8  overflow-x--hidden">
      {isModalProductOpen && (
        <ModelProduct
          img={productData.image}
          alt={productData.title}
          setIsModalProductOpen={setIsModalProductOpen}
        />
      )}
      <div className=" flex-col flex md:flex-row gap-8 mt-4 ">
        {/* image */}
        <div className=" w-full lg:w-1/2 lg:max-h-[300px]  lg:sticky top-[150px]  hover:scale-110 cursor-pointer transition ">
          <img
            onClick={() => setIsModalProductOpen(true)}
            className="w-full h-full object-contain sticky top-[50px]  "
            src={productData.image}
            alt={productData.title}
          />
        </div>
        {/* TEXTE */}
        <div className=" w-full  lg:w-1/2 flex flex-col gap-2">
          {/* TITRE */}
          <h3 className=" underline font-bold text-2xl font-special  ">
            {productData.title}
          </h3>
          <span className="text-gray-500 no-underline text-lg ">
            Category : {productData.category}
          </span>
          <span className="text-gray-700 no-underline text-lg ">
            Note :
            <span className={`${Rating(productData.rating.rate)}`}>
              {productData.rating.rate}
            </span>
            /5 - Avis : {productData.rating.count}
          </span>
          {/* PRIX */}
          <div>
            <p>
              <span className="text-gray-800 no-underline text-lg font-bold">
                Prix :
              </span>
              {FormatPrice(productData.price)} €
            </p>
          </div>
          {/* DESCRIPTION */}
          <p>
            <span className="text-gray-900 no-underline text-lg font-bold">
              Description :
            </span>
            {productData.description}
          </p>
          <div className="mt-4 flex items-center justify-center lg:justify-normal ">
            <button
              className=" p-4 border rounded-lg shadow-md opacity-90 hover:opacity-100 hover:shadow-xl border-gray-400 bg-green-800 text-white transition "
              onClick={() => addBasket(productData.id)}
            >
              AJOUTER AU PANIER
            </button>
            <div className="text-3xl ml-4 transition">
              <Heart />
            </div>
          </div>
          <span className=" md:hidden flex justify-center  mt-4 text-gray-600 cursor-pointer ">
            <BackNagivate> Retourner à la liste de produit </BackNagivate>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
