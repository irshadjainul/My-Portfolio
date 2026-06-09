import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { experience } from "../../data/experience";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { staggerContainer, staggerItem } from "../../utils/animations";

export default function Experience() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Work Experience"
          title="My Professional Journey"
        />

        <motion.div
          ref={ref}
          initial="initial"
          animate={controls}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={staggerItem}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-cream-300" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-6 h-6 bg-accent rounded-full border-4 border-cream-100 shadow-sm" />

              {/* Content */}
              <div className="bg-white rounded-2xl border border-cream-200 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {exp.period}
                    </span>
                    <p className="text-sm text-primary/50 mt-1">
                      {exp.location}
                    </p>
                  </div>
                </div>

                <p className="text-primary/60 mb-4">{exp.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-primary/70"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-cream-100 text-primary/70 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
