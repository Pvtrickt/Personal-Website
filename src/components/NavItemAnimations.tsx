import { motion } from "framer-motion";

const NavItemAnimations: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileInView={{ opacity: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default NavItemAnimations;
