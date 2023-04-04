import { ReactNode, createContext, useState } from "react";
import { ProductType, StoreProduct } from "../types/DataType";

export type ProductContextType = {
  products: StoreProduct[];
  addProduct: (value: number) => void;
  removeProduct: (value: number) => void;
  decreaseProduct: (value: number) => void;
};

export const ProductContext = createContext<ProductContextType | null>(null);

type ProductProviderType = {
  children: ReactNode;
};

const ProductProvider = ({ children }: ProductProviderType) => {
  const [products, setProducts] = useState<StoreProduct[]>([]);

  function addProduct(id: number): void {
    setProducts((prevState) => {
      if (prevState.find((prod) => prod.id === id) == null) {
        return [...prevState, { id, quantity: 1 }];
      } else {
        return prevState.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item?.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeProduct(id: number): void {
    setProducts(products?.filter((product) => product.id !== id));
  }

  function decreaseProduct(id: number) {
    setProducts((prev) => {
      if (prev.find((item) => item.id === id)?.quantity === 1) {
        return prev.filter((item) => item.id !== id);
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  return (
    <ProductContext.Provider
      value={{ products, removeProduct, addProduct, decreaseProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
