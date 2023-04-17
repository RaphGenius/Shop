import { CategoryType } from "../pages/Shopping";
import { Link } from "react-router-dom";

type Props = {};

const CategoryButton = ({ id, name }: CategoryType) => {
  return (
    <article
      className=" w-full lg:w-[49%]  flex justify-center  items-center h-[100px] rounded-sm   border-red-400  
     bg-teal-700 opacity-90  hover:opacity-100 last-of-type:w-full cursor-pointer transition 
      "
    >
      <div className=" flex justify-center  items-center capitalize text-gray-200 text-3xl ">
        <Link to={`${name}`}> {name}</Link>
      </div>
    </article>
  );
};

export default CategoryButton;
