import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductType, StoreProduct } from "../types/DataType";
import { ProductContext, ProductContextType } from "../context/ProductContext";
import Loader from "./Loader";
import { BsFillTrashFill } from "react-icons/bs";
import { FormatPrice } from "../utils/FormatPrice";
const BasketItem = ({ id, quantity }: StoreProduct) => {
  const [myProduct, setMyProduct] = useState<ProductType>();
  const { changeQuantityProduct, removeProduct } = useContext(
    ProductContext
  ) as ProductContextType;

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setMyProduct(data);
    };
    getData();
  }, []);

  if (!myProduct) return <Loader />;
  return (
    <div className=" lg:h-[200px]   even:bg-gray-100 odd:bg-slate-200 first:mt-0 mt-4 flex lg:flex-nowrap flex-wrap items-center lg:text-lg text-md  ">
      {/* IMAGE */}
      <div className=" p-4 w-1/4   lg:w-1/6 lg:h-[150px]  flex  items-center justify-center  ">
        <Link
          className="w-full h-full"
          to={`/shop/${myProduct.category}/${myProduct.id}`}
        >
          <img
            className=" w-full h-full object-contain"
            src={myProduct?.image}
            alt={myProduct?.title}
          />
        </Link>
      </div>
      {/* Description */}
      <div className=" w-3/4  lg:w-3/6 p-2 flex flex-col   justify-between gap-4 ">
        <div>
          <Link to={`/shop/${myProduct.category}/${myProduct.id}`}>
            <p className="lg:text-lg font-normal lg:font-bold  font-special hover:underline ">
              {myProduct?.title}{" "}
            </p>
          </Link>
          <p className="lg:text-lg text-gray-900">
            Category : {myProduct?.category}{" "}
          </p>
        </div>
        <div>
          <button
            className=" hover:opacity-100 opacity-80 flex items-center text-gray-900 lg:text-lg gap-2"
            onClick={() => removeProduct(id)}
          >
            Retirer <BsFillTrashFill color="black" />
          </button>
        </div>
      </div>
      {/* INPUT NMB DE PRODUIT */}
      <div className=" w-full lg:w-2/6 flex flex-col items-center justify-center flex-wrap h-full p-4 lg:p-0 gap-2 lg:gap-0  ">
        <div className="w-1/3  ">
          <label htmlFor="productQuantity">
            <select
              title="Select the quantity"
              className="w-full  text-center font-special h-[30px] border border-black "
              name="product"
              id="productQuantity"
              defaultValue={quantity}
              onChange={(e) =>
                changeQuantityProduct(id, Number(e.currentTarget.value))
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </div>
        <p className=" mt-4 lg:text-lg text-center  lg:text-start ">
          Prix unitaire : {FormatPrice(myProduct?.price)}€{" "}
        </p>
        <p className="lg:text-lg text-center  lg:text-start ">
          Total article:{" "}
          {FormatPrice(myProduct?.price && (myProduct?.price * quantity) | 0)}€{" "}
        </p>
      </div>
    </div>
  );
};

export default BasketItem;
