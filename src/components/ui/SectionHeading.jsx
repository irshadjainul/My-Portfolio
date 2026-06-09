import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { fadeInUp } from "../../utils/animations";

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
}) {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={fadeInUp}
      className={`mb-12 ${centered ? "text-center" : ""} ${className}`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-balance">
        {title}
      </h2>
    </motion.div>
  );
}

