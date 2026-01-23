import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { personalInfo } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const techStack = ["React", "Tailwind CSS", "Node.js", "MongoDB"];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

      {/* Gradient Overlay */}
      <div className="absolute mx-auto px-4 sm:px-6 lg:px-8 inset-0 bg-gradient-to-t from-dark-900/30 via-transparent to-transparent" />


      {/* Bottom Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="pt-8 border-t border-white/10"
      >
        <div className="flex flex-col md:flex-row justify-around items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>
              © {currentYear} {personalInfo.name}
            </span>
            <span className="mx-2">•</span>
            <span className="flex items-center gap-1">
              Crafted with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Heart size={14} className="text-red-500 mx-1" />
              </motion.span>
              & passion
            </span>
          </div>

          {/* Tech Stack */}
          <div className="flex items-center gap-2">
            {techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400 hover:text-slate-300 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Last Updated */}
          <div className="text-xs text-slate-500">
            Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 pt-4 border-t border-white/5"
        >
          <p className="text-sm text-slate-500">
            Thanks for visiting — let's create something amazing together.
          </p>
        </motion.div>
      </motion.div>
      {/* </div> */}
    </footer>
  );
}
