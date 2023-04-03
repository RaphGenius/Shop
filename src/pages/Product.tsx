import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DataFromAPI } from "./Products";
type Props = {};

const Product = (props: Props) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState<DataFromAPI>();
  const getData = async () => {
    setIsLoading(true);
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    if (res.ok) {
      setProductData(data);
      setIsLoading(false);
    } else {
      console.log("erreur");
    }
  };

  useEffect(() => {
    try {
      getData();
      console.log(productData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div>{productData?.title} </div>;
};

export default Product;
