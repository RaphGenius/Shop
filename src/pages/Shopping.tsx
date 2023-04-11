import React from "react";
import CategoryButton from "../components/CategoryButton";

type Props = {};

export type CategoryType = {
  id: number;
  name: string;
};

const categories: CategoryType[] = [
  {
    id: 1,
    name: "electronics",
  },
  {
    id: 2,
    name: "jewelery",
  },
  {
    id: 3,
    name: "men's clothing",
  },
  {
    id: 4,
    name: "women's clothing",
  },
  {
    id: 5,
    name: "All Products",
  },
];

const Shopping = (props: Props) => {
  return (
    <section className=" p-4 w-full mx-auto max-w-screen-xl">
      <div className=" flex flex-wrap  w-auto gap-4">
        {categories.map((category: CategoryType) => (
          <CategoryButton key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Shopping;
