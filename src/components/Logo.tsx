import LogoBrand from "../assets/logo_big.svg";
import { Link } from "react-router-dom";
type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="mr-8 w-[50px] relative  " role="logo">
      <Link to={`/`}>
        <h1>
          <img
            className="w-full "
            src={LogoBrand}
            alt="Logo of the market shop"
          />
          <span className="absolute -bottom-5 left-2 tracking-widest underline font-special ">
            arket
          </span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
