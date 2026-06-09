import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Experience from "../components/home/Experience";
import { pageTransition } from "../utils/animations";

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Hero />
      <Skills />
      <FeaturedProjects />
      {/* <Experience /> */}
    </motion.div>
  );
}
