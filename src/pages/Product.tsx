import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Loader from "../components/Loader";
import { ProductType } from "../types/DataType";
import { ProductContext, ProductContextType } from "../context/ProductContext";
type Props = {};

const Product = (props: Props) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState<ProductType>();

  const { addProduct, removeProduct } = useContext(
    ProductContext
  ) as ProductContextType;

  const getData = async () => {
    setIsLoading(true);
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    if (res.ok) {
      setProductData(data);
      setIsLoading(false);
      console.log("productdata: ", productData);
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

  if (!productData) return <Loader />;

  return (
    <div>
      <div>
        <div className="w-20">
          <img className="w-full" src={productData?.image} alt="" />
        </div>
      </div>
      <h3>Titre :{productData?.title} </h3>
      <p>description: </p>
      <p>{productData?.description} </p>

      <button
        className="mt-4 border border-red-800 bg-red-400"
        onClick={() => addProduct(productData.id)}
      >
        AJOUTER AU PANIER
      </button>

      <button
        className="mt-4 border border-red-800 bg-red-400"
        onClick={() => removeProduct(productData.id)}
      >
        Retirer AU PANIER
      </button>
    </div>
  );
};

export default Product;
