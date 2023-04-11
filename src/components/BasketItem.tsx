import { useContext, useEffect, useState } from "react";
import { ProductType, StoreProduct } from "../types/DataType";
import { ProductContext, ProductContextType } from "../context/ProductContext";

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

  return (
    <div className="border border-black flex items-center ">
      {/* IMAGE */}
      <div className=" p-4 w-1/6 h-[150px] flex  items-center justify-center bg-yellow-300 ">
        <img
          className=" w-full h-full object-contain"
          src={myProduct?.image}
          alt={myProduct?.title}
        />
      </div>
      {/* Description */}
      <div className=" w-3/6 bg-green-300 p-2 ">
        <div>
          <p className="text-lg">{myProduct?.title} </p>
          <p className="text-lg">{myProduct?.category} </p>
        </div>
        <div>
          <button onClick={() => removeProduct(id)}>Bouton supprimer</button>
        </div>
      </div>
      {/* INPUT NMB DE PRODUIT */}
      <div className="w-2/6 bg-red-700 flex items-center flex-wrap justify-center  ">
        <div>
          <label htmlFor="productQuantity">Nombre d'article : </label>
          <select
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
        </div>
        <p>quantité {quantity}</p>
        <p>Prix unitaire : {myProduct?.price} </p>
        <p>
          prix en tout : {myProduct?.price && (myProduct?.price * quantity) | 0}{" "}
        </p>
      </div>
    </div>
  );
};

export default BasketItem;
