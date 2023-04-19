export const variantsPage = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
    },
  },
  exit: { opacity: 0, duration: 0.5 },
};
