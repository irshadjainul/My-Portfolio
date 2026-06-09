import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import Button from "../components/ui/Button";
import { pageTransition } from "../utils/animations";

export default function NotFound() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="min-h-[80vh] flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-8xl sm:text-9xl font-bold gradient-text">404</h1>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl font-semibold text-primary mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-primary/60 mb-8 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button to="/" icon={<FaHome />}>
            Go Home
          </Button>
          <Button
            onClick={() => window.history.back()}
            variant="secondary"
            icon={<FaArrowLeft />}
          >
            Go Back
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

