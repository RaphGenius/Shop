import { Link } from "react-router-dom";

type Props = {};

const NoItemBasket = (props: Props) => {
  return (
    <div className=" h-[300px] flex items-center flex-col justify-center ">
      <p>Aucun article !</p>
      <Link to={"/shop"} className="flex items-center gap-4   ">
        <button className="border border-black rounded-lg p-4 mt-2 hover:bg-green-800 hover:text-white hover:shadow-lg">
          Continuer mes achats
        </button>
      </Link>
    </div>
  );
};

export default NoItemBasket;
