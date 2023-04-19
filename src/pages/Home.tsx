type Props = {};
import { Link } from "react-router-dom";
import HomePic from "../assets/homePic.mim.jpg";
import { motion } from "framer-motion";
import { variantsPage } from "../FramerMotion/framerVariants";
const Home = (props: Props) => {
  return (
    <motion.div
      variants={variantsPage}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      className="relative h-[calc(100vh-100px)]   "
    >
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="absolute w-full h-[calc(100vh-100px)]"
      >
        <img
          src={HomePic}
          alt=""
          className="w-full h-full object-cover blur-sm opacity-100  "
        />
      </motion.div>
      <div className="absolute w-full justify-center mt-8  p-8 flex     ">
        <motion.button
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,

            transition: { duration: 0.3, delay: 0.2, type: "tween" },
          }}
          className=" text-5xl font-special text-white bg-black/20 hover:bg-gray-500/70 hover:shadow-xl transition p-4 px-8 rounded-lg "
        >
          Market
        </motion.button>{" "}
      </div>
      <div className="absolute w-full justify-center mt-8  p-8 flex     ">
        <motion.button
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,

            transition: { duration: 0.3, delay: 0.2, type: "tween" },
          }}
          className=" text-5xl font-special text-white bg-black/20 hover:bg-gray-500/70 hover:shadow-xl transition p-4 px-8 rounded-lg "
        >
          Market
        </motion.button>{" "}
      </div>
      <div className="absolute w-full h-full p-8 flex justify-center items-center   ">
        <Link to={"/shop"}>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1.1,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className=" text-5xl font-special text-white bg-gray-500/20 hover:bg-gray-500/70 hover:shadow-xl transition p-4 px-8 rounded-lg "
          >
            Découvrez notre boutique
          </motion.button>{" "}
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
