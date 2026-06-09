import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { config } from "../../data/config";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: config.email,
    href: `mailto:${config.email}`,
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: config.phone,
    href: `tel:${config.phone.replace(/\D/g, "")}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: config.location,
    href: null,
  },
];

const socialItems = [
  {
    icon: FaLinkedin,
    href: config.social.linkedin,
    label: "LinkedIn",
    color: "hover:text-blue-600",
  },
  {
    icon: FaGithub,
    href: config.social.github,
    label: "GitHub",
    color: "hover:text-gray-900",
  },
  {
    icon: FaWhatsapp,
    href: config.social.whatsapp,
    label: "WhatsApp",
    color: "hover:text-green-500",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-6"
    >
      {/* Info Cards */}
      {contactItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          className="bg-white rounded-2xl border border-cream-200 p-6 shadow-sm"
        >
          {item.href ? (
            <a href={item.href} className="flex items-start gap-4 group">
              <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-primary/50 mb-1">{item.label}</p>
                <p className="font-medium text-primary group-hover:text-accent transition-colors">
                  {item.value}
                </p>
              </div>
            </a>
          ) : (
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-primary/50 mb-1">{item.label}</p>
                <p className="font-medium text-primary">{item.value}</p>
              </div>
            </div>
          )}
        </motion.div>
      ))}

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-2xl border border-cream-200 p-6 shadow-sm"
      >
        <p className="text-sm text-primary/50 mb-4">Connect with me</p>
        <div className="flex gap-3">
          {socialItems.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-cream-100 rounded-xl text-primary/60 ${social.color} transition-colors`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
