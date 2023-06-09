import { useContext, useEffect } from "react";
import { ProductContext, ProductContextType } from "../context/ProductContext";
import BasketItem from "../components/BasketItem";
import TotalProduct from "../components/TotalProduct";
import { motion, AnimatePresence } from "framer-motion";
import NoItemBasket from "../components/NoItemBasket";
import { UserContext, UserContextType } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import FormBasket from "../components/FormBasket";
import { variantsPage } from "../FramerMotion/framerVariants";

type Props = {};

function articleWithSorNot(quantity: number) {
  if (quantity == 1) return "article";
  else return "articles";
}

const MyBasket = (props: Props) => {
  const { products, getQuantityProduct } = useContext(
    ProductContext
  ) as ProductContextType;
  const { user } = useContext(UserContext) as UserContextType;
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  if (products.length == 0) return <NoItemBasket />;
  return (
    <motion.section
      variants={variantsPage}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      className=" p-4 lg:p-8 "
    >
      <div>
        <h4 className=" text-2xl  lg:text-4xl mt-2 mb-2 lg:mb-8 ">
          {/* Nombre d'article */}
          Mon panier : {getQuantityProduct()}{" "}
          {/* Article avec s si la quantité est supérieur à 1 */}
          {articleWithSorNot(getQuantityProduct())}
        </h4>
        <div className="flex lg:flex-row flex-col  flex-nowrap w-full">
          {/* MES ARTICLES */}
          <article className="  w-full lg:w-2/3 ">
            {products.map((item) => (
              <AnimatePresence>
                <BasketItem key={item.id} {...item} />
              </AnimatePresence>
            ))}
          </article>

          {/* Mon total */}
          <div className=" px-4 py-8  bg-green-800 text-white w-full lg:w-1/3 sticky lg:top-0 top-[100px] mt-4 lg:mt-0  lg:h-[200px] ">
            <TotalProduct />
          </div>
        </div>
      </div>
      {user && <FormBasket user={user} />}
    </motion.section>
  );
};

export default MyBasket;
