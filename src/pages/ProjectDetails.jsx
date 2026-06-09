import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCheck,
} from "react-icons/fa";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";
import { pageTransition } from "../utils/animations";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    navigate("/404");
    return null;
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary/60 hover:text-accent transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-12"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="inline-block px-3 py-1 bg-white/90 text-primary text-sm font-medium rounded-full mb-4 capitalize">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {project.title}
            </h1>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">
                About the Project
              </h2>
              <p className="text-primary/70 leading-relaxed">
                {project.description}
              </p>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Key Features
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                      <FaCheck className="w-3 h-3 text-accent" />
                    </span>
                    <span className="text-primary/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Screenshots
                </h2>
                <div className="grid gap-6">
                  {project.screenshots.map((screenshot, index) => (
                    <motion.img
                      key={index}
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full rounded-xl border border-cream-200 shadow-sm"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    />
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Actions */}
            <div className="bg-white rounded-2xl border border-cream-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Project Links
              </h3>
              <div className="space-y-3">
                <Button
                  href={project.liveUrl}
                  external
                  variant="primary"
                  icon={<FaExternalLinkAlt />}
                  className="w-full"
                >
                  Live Demo
                </Button>
                <Button
                  href={project.githubUrl}
                  external
                  variant="secondary"
                  icon={<FaGithub />}
                  className="w-full"
                >
                  View Source
                </Button>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-2xl border border-cream-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium bg-cream-100 text-primary/70 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
