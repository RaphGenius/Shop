import { motion } from "framer-motion";
import CategoryButton from "../components/CategoryButton";
import { variantsPage } from "../FramerMotion/framerVariants";

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

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const Shopping = (props: Props) => {
  return (
    <motion.section
      variants={variantsPage}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      className=" p-4 w-full mx-auto max-w-screen-xl"
    >
      <h2 className="mt-8 text-center text-4xl text-green-700 font-special ">
        La boutique
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className=" flex flex-wrap mt-8  w-auto gap-4"
      >
        {categories.map((category: CategoryType) => (
          <CategoryButton key={category.id} {...category} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Shopping;
