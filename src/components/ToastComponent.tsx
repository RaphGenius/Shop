import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  isBigScreen: boolean;
};

const ToastComponent = ({ isBigScreen }: Props) => {
  return (
    <div>
      <ToastContainer
        position={isBigScreen ? "bottom-left" : "top-left"}
        autoClose={2000}
      />
    </div>
  );
};

export default ToastComponent;
