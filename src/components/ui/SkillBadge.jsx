import { motion } from "framer-motion";

export default function SkillBadge({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-cream-200 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
    >
      <Icon className="w-5 h-5 flex-shrink-0" style={{ color: skill.color }} />
      <span className="text-sm font-medium text-primary">{skill.name}</span>
    </motion.div>
  );
}
