import { motion } from "framer-motion";
import { cardHover } from "../../utils/animations";

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "p-6",
  ...props
}) {
  return (
    <motion.div
      className={`
        bg-white rounded-2xl border border-cream-200 shadow-sm
        ${padding} ${className}
      `}
      variants={hover ? cardHover : undefined}
      initial="rest"
      whileHover={hover ? "hover" : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
