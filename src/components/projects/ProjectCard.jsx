import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";


export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-primary rounded-full capitalize">
            {project.category}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-primary hover:bg-white transition-colors"
          >
            <FaExternalLinkAlt className="w-3 h-3" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 bg-white/90 backdrop-blur-sm rounded-lg text-primary hover:bg-white transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <Link to={`/projects/${project.id}`}>
          <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-primary/60 text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-cream-100 text-primary/70 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* View Details Link */}
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
        >
          View Details
          <FaArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </motion.div>
  );
}
