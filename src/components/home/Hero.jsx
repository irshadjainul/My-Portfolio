import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";
import { useTypingAnimation } from "../../hooks/useTypingAnimation";
import { config } from "../../data/config";

const roles = [
  "MERN Stack Developer",
  "Full Stack Engineer",
  "React Specialist",
  "Node.js Developer",
];

export default function Hero() {
  const typedText = useTypingAnimation(roles, 100, 50, 2000);

  return (
    <section className="relative min-h-[90vh] flex items-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent">
                Available for work
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight mb-6"
            >
              Hi, I'm{" "}
              <span className="gradient-text">{config.name.split(" ")[0]}</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-primary/70">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-[3px] h-8 sm:h-10 bg-accent ml-1 align-middle"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-primary/60 max-w-xl mb-8"
            >
              {config.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                to="/projects"
                icon={<FaArrowRight />}
                iconPosition="right"
              >
                View Projects
              </Button>
              <Button to="/contact" variant="secondary">
                Get in Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <SocialLinks showResume size="md" />
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* Profile image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent to-accent-light rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <img
                  src={config.profileImage}
                  alt={config.name}
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-white shadow-xl"
                />

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-cream-200"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-sm font-medium text-primary">
                    6+ Months Exp.
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
