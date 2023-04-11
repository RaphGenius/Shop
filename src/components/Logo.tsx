import LogoBrand from "../assets/logo_big.svg";
import { Link } from "react-router-dom";
type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="mr-8 w-[50px] relative ">
      <Link to={`/`}>
        <img className="w-full " src={LogoBrand} alt="Logo" />
        <span className="absolute -bottom-5 left-2 tracking-widest underline font-special ">
          arket
        </span>
      </Link>
    </div>
  );
};

export default Logo;
