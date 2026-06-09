import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import SkillBadge from "../ui/SkillBadge";
import { skills } from "../../data/skills";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { staggerContainer, staggerItem } from "../../utils/animations";

export default function Skills() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Skills & Expertise"
          title="Technologies I Work With"
        />

        <motion.div
          ref={ref}
          initial="initial"
          animate={controls}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {Object.values(skills).map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
              className="bg-white rounded-2xl border border-cream-200 p-6 lg:p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, index) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                    index={index + categoryIndex * 10}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
