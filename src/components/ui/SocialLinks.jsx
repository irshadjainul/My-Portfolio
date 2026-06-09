import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaFileDownload,
} from "react-icons/fa";
import { config } from "../../data/config";

const socialItems = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: config.social.github,
    color: "hover:text-gray-900",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: config.social.linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: config.social.whatsapp,
    color: "hover:text-green-500",
  },
];

export default function SocialLinks({ showResume = false, size = "md" }) {
  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  };

  const buttonSizes = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  return (
    <div className="flex items-center gap-3">
      {socialItems.map((item, index) => (
        <motion.a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${buttonSizes[size]} rounded-xl bg-white border border-cream-200 
            text-primary/60 ${item.color} 
            shadow-sm hover:shadow-md transition-all duration-300
          `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label={item.name}
        >
          <item.icon className={iconSizes[size]} />
        </motion.a>
      ))}

      {showResume && (
        <motion.a
          href={config.resumeUrl}
          download
          className={`
            ${buttonSizes[size]} px-5 rounded-xl bg-accent text-white
            flex items-center gap-2 font-medium
            shadow-sm hover:shadow-md hover:bg-accent-dark transition-all duration-300
          `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFileDownload className={iconSizes[size]} />
          <span className="hidden sm:inline">Resume</span>
        </motion.a>
      )}
    </div>
  );
}
