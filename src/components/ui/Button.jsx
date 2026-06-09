import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary:
    "bg-white text-primary border border-cream-300 hover:border-accent hover:text-accent",
  accent: "bg-accent text-white hover:bg-accent-dark",
  ghost: "text-primary hover:bg-cream-200",
  outline:
    "border-2 border-accent text-accent hover:bg-accent hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  external,
  icon,
  iconPosition = "left",
  className = "",
  ...props
}) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 
    font-medium rounded-xl transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-cream-100
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]} ${sizes[size]} ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="text-lg">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="text-lg">{icon}</span>
      )}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={baseClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
