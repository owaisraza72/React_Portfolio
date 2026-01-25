import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Home,
  User,
  Briefcase,
  Code,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "../data";
import clsx from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Icons for navigation items
  const navIcons = {
    home: <Home size={16} />,
    about: <User size={16} />,
    projects: <Briefcase size={16} />,
    skills: <Code size={16} />,
    contact: <Phone size={16} />,
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-lg py-3" : "py-5",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-start group"
          >
            <div className="flex items-center gap-1">
              {["O", "W", "R"].map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-2xl font-bold text-white"
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Animated Line */}
            <motion.div
              className="h-[2px] bg-gradient-to-r from-primary-500 to-cyan-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ width: "80%" }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={clsx(
                  "relative px-4 py-2.5 text-sm font-medium transition-all duration-300 group rounded-lg",
                  activeSection === link.href.replace("#", "")
                    ? "text-white"
                    : "text-slate-300 hover:text-white",
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={clsx(
                      "transition-colors",
                      activeSection === link.href.replace("#", "")
                        ? "text-primary-400"
                        : "text-slate-400 group-hover:text-primary-400",
                    )}
                  >
                    {navIcons[link.href.replace("#", "")] || <Home size={16} />}
                  </span>
                  <span className="relative z-10">{link.name}</span>
                </div>

                {/* Active indicator */}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Hover underline */}
                <motion.div
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-primary-500 group-hover:w-6 transition-all duration-300"
                  initial={false}
                />
              </a>
            ))}
          </div>

          {/* Desktop Social + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-primary-500/30 transition-all"
              >
                <Github size={16} />
              </motion.a>
              {personalInfo.linkedin && (
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500/30 transition-all"
                >
                  <Linkedin size={16} />
                </motion.a>
              )}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-cyan-500 text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all flex items-center gap-2 border border-white/10"
            >
              <Mail size={14} />
              <span>Contact</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-primary-500/30 transition-all relative z-[70]"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] pt-20 lg:hidden"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: "100vh",
              overflowY: "auto",
            }}
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-6 py-8 h-full overflow-y-auto pb-20"
            >
              <div className="max-w-md mx-auto">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={menuItemVariants}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "flex items-center justify-between py-3.5 px-5 rounded-lg mb-2 transition-all group",
                      activeSection === link.href.replace("#", "")
                        ? "bg-gradient-to-r from-primary-500/20 to-cyan-500/20 text-white border border-primary-500/30"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={clsx(
                          "p-1.5 rounded-md transition-colors",
                          activeSection === link.href.replace("#", "")
                            ? "bg-primary-500/30 text-primary-300"
                            : "bg-white/5 text-slate-400 group-hover:text-primary-400",
                        )}
                      >
                        {navIcons[link.href.replace("#", "")] || (
                          <Home size={18} />
                        )}
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </div>
                    <ChevronRight
                      className="text-slate-500 group-hover:text-white"
                      size={18}
                    />
                  </motion.a>
                ))}

                {/* Mobile Social Links */}
                <motion.div
                  variants={menuItemVariants}
                  className="flex items-center gap-3 justify-center mt-10 pt-8 border-t border-white/10"
                >
                  {[
                    {
                      icon: <Github size={18} />,
                      href: personalInfo.github,
                      color: "hover:text-white",
                    },
                    {
                      icon: <Linkedin size={18} />,
                      href: personalInfo.linkedin,
                      color: "hover:text-blue-400",
                    },
                    {
                      icon: <Mail size={18} />,
                      href: `mailto:${personalInfo.email}`,
                      color: "hover:text-primary-400",
                    },
                  ].map(
                    (social, idx) =>
                      social.href && (
                        <motion.a
                          key={idx}
                          href={social.href}
                          target={idx !== 2 ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsOpen(false)}
                          className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 transition-all"
                        >
                          {social.icon}
                        </motion.a>
                      ),
                  )}
                </motion.div>

                {/* Mobile CTA Button */}
                <motion.div variants={menuItemVariants} className="mt-6 mb-8">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-3.5 bg-gradient-to-r from-primary-500 to-cyan-500 text-white font-bold rounded-lg text-center hover:shadow-lg hover:shadow-primary-500/25 transition-all border border-white/10"
                  >
                    Get in Touch
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
