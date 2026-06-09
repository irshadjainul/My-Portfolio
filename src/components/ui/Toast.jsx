import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaTimes } from "react-icons/fa";

export default function Toast({ show, type = "success", message, onClose }) {
  const icons = {
    success: <FaCheckCircle className="w-5 h-5 text-green-500" />,
    error: <FaTimesCircle className="w-5 h-5 text-red-500" />,
  };

  const backgrounds = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -50, x: "-50%" }}
          className={`
            fixed top-24 left-1/2 z-50 
            flex items-center gap-3 px-6 py-4 
            rounded-xl border shadow-lg
            ${backgrounds[type]}
          `}
        >
          {icons[type]}
          <span className="text-primary font-medium">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 p-1 text-primary/40 hover:text-primary transition-colors"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
