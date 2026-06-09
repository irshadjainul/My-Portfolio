import { motion } from "framer-motion";
import { categories } from "../../data/projects";

export default function ProjectFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            relative px-5 py-2.5 text-sm font-medium rounded-xl transition-colors
            ${
              activeCategory === category.id
                ? "text-accent"
                : "text-primary/60 hover:text-primary hover:bg-cream-200"
            }
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {category.label}
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-accent/10 rounded-xl -z-10"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}
