import { CategoryType } from "../pages/Shopping";
import { Link } from "react-router-dom";

type Props = {};

const CategoryButton = ({ id, name }: CategoryType) => {
  return (
    <div
      className=" w-full lg:w-[49%]  flex justify-center  items-center h-[100px]  border-2  border-red-400  
     bg-green-900 last-of-type:w-full"
    >
      <div className=" flex justify-center  items-center capitalize   ">
        <Link to={`${name}`}> {name}</Link>
      </div>
    </div>
  );
};

export default CategoryButton;
