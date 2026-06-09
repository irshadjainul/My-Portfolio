import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart } from "react-icons/fa";
import { config } from "../../data/config";

const footerLinks = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: FaGithub, href: config.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: config.social.linkedin, label: "LinkedIn" },
  { icon: FaWhatsapp, href: config.social.whatsapp, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-cream-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                <span className="text-white font-bold text-lg">IA</span>
              </div>
              <span className="font-semibold text-primary">{config.name}</span>
            </Link>
            <p className="text-primary/60 text-sm max-w-xs">
              Building digital experiences that matter. Let's create something
              amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-cream-100 rounded-xl text-primary/60 hover:text-accent hover:bg-accent/10 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary/60 flex items-center gap-1">
              © {new Date().getFullYear()} {config.name}. Made with
              <FaHeart className="w-4 h-4 text-red-500" />
            </p>
            <p className="text-sm text-primary/60">
              Built with React, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
