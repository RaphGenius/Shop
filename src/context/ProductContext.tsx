import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { StoreProduct } from "../types/DataType";
import { UserContext, UserContextType } from "./UserContext";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export type ProductContextType = {
  products: StoreProduct[];
  addProduct: (value: number) => void;
  removeProduct: (value: number) => void;
  decreaseProduct: (value: number) => void;
  getQuantityProduct: () => number;
  changeQuantityProduct: (id: number, value: number) => void;
};

export const ProductContext = createContext<ProductContextType | null>(null);

type ProductProviderType = {
  children: ReactNode;
};

const ProductProvider = ({ children }: ProductProviderType) => {
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const { user } = useContext(UserContext) as UserContextType;

  async function getData() {
    const docRef = doc(db, user.uid, "item");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const { products } = docSnap.data();
      setProducts(products);
      console.log(products);
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, user.uid));
    const unsubscribe = onSnapshot(q, (querySnapShot) => {
      if (!querySnapShot) setProducts([]);
      else {
        let arrayEmpty: StoreProduct[] = [];
        querySnapShot.forEach((doc) => {
          let item = doc.data() as StoreProduct;
          arrayEmpty.push(item);
        });
        console.log(arrayEmpty);
        setProducts(arrayEmpty);
      }
    });
    return () => unsubscribe();
  }, [user]);

  const getQuantityProduct = () => {
    return products.reduce((quantity, item) => item.quantity + quantity, 0);
  };

  async function addProduct(id: number): Promise<any> {
    if (products.find((prod) => prod.id === id) == null) {
      await setDoc(doc(db, user.uid, String(id)), {
        id,
        quantity: 1,
      }).then(() => getData());
    } else {
      products.map(async (item) => {
        if (item.id === id) {
          await updateDoc(doc(db, user.uid, String(id)), {
            quantity: item.quantity + 1,
          });
        }
      });
    }
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

  function changeQuantityProduct(id: number, value: number) {
    setProducts((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          console.log("produit quantité modifié");
          return { ...item, quantity: value };
        } else return item;
      });
    });
  }
  return (
    <ProductContext.Provider
      value={{
        products,
        removeProduct,
        addProduct,
        decreaseProduct,
        getQuantityProduct,
        changeQuantityProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
