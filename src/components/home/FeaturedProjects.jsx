import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { projects } from "../../data/projects";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { staggerContainer, staggerItem } from "../../utils/animations";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

export default function FeaturedProjects() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Featured Work"
          title="Projects That Define My Craft"
        />

        <motion.div
          ref={ref}
          initial="initial"
          animate={controls}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className={`
                group bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500
                ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
              `}
            >
              {/* Image */}
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-cream-100 text-primary/70 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button
            to="/projects"
            variant="secondary"
            icon={<FaArrowRight />}
            iconPosition="right"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

