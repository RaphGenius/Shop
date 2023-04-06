import { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductContext, ProductContextType } from "../context/ProductContext";
type Props = {};

const ToastComponent = (props: Props) => {
  const { products } = useContext(ProductContext) as ProductContextType;

  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={2000} />
    </div>
  );
};

export default ToastComponent;
