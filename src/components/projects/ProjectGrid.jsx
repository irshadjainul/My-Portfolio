import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }) {
  return (
    <motion.div
      layout
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
