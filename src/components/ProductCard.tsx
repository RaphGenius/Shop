import { Link } from "react-router-dom";
import { DataFromAPI } from "../pages/Products";

const ProductCard = ({
  category,
  description,
  id,
  image,
  rating,
  title,
}: DataFromAPI) => {
  return (
    <div className=" sm:w-full lg:w-[200px] h-[300px] border-2 rounded-lg border-gray-800 bg-red-400 p-2 flex flex-col items-center justify-evenly whitespace-normal">
      <div>
        <h3 className="text-lg text-center">{title} </h3>{" "}
      </div>
      <div className="w-[100px]">
        <img className="w-full object-cover" src={image} alt="" />
      </div>
      <div>
        <button>
          <Link to={`${id}`}>Voir</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
