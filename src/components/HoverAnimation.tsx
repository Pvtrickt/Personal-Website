import { motion } from "framer-motion";
const HoverAnimations: React.FC<{ children: any }> = ({ children }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      // whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

export default HoverAnimations;
