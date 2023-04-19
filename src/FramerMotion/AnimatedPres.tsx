import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

const AnimatedPres = ({ children }: Props) => {
  return <AnimatePresence initial={true}>{children}</AnimatePresence>;
};

export default AnimatedPres;
