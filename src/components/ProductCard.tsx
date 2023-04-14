import { Link } from "react-router-dom";

import { ProductType } from "../types/DataType";
import { FormatPrice } from "../utils/FormatPrice";

const ProductCard = ({
  category,
  description,
  id,
  image,
  rating,
  title,
  price,
  link,
}: ProductType) => {
  function little(str: string) {
    if (str.length > 50) {
      return str.slice(0, 40) + "...";
    } else {
      return str;
    }
  }

  return (
    <Link to={`${link}`}>
      <div className=" w-[300px] mx-auto lg:w-[200px] h-[300px] border rounded-lg border-green-800 bg-white shadow-lg p-2 flex flex-col items-center justify-between  whitespace-normal hover:scale-105 duration-75 hover:shadow-xl ">
        <div className="mb-4">
          <h3 className="text-md text-center hover:underline  ">
            {little(title)}{" "}
          </h3>
        </div>

        <div className="w-[100px] h-[160px]">
          <img
            className="w-full h-full object-contain"
            src={image}
            alt={title}
          />
        </div>
        <div className="flex justify-center ">
          <p>{FormatPrice(price)} € </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
