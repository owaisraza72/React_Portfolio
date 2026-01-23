import { motion } from "framer-motion";
import { personalInfo } from "../data";
import {
  Download,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Code2,
  Github,
  Linkedin,
  MousePointerClick,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-20 lg:py-0"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* LEFT COLUMN: Short & Professional Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 hover:border-primary-500/30 transition-all duration-300 group">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </div>
                <span className="text-sm font-medium text-primary-400 group-hover:text-primary-300 transition-colors">
                  Available for Opportunities
                </span>
                <Sparkles size={14} className="text-primary-400 ml-2" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={item}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Owais
                  </span>{" "}
                  <span className="text-primary-400">Raza</span>
                </h2>
              </h1>
            </motion.div>
            {/* Role Animation */}
            <motion.div variants={item} className="mb-6">
              <div className="text-2xl text-slate-300 font-medium mb-3">
                <TypeAnimation
                  sequence={[
                    "Frontend Web Developer",
                    2000,
                    "React Developer",
                    2000,
                    "Learning MERN Stack",
                    2000,
                    "Building Scalable Web Applications",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="text-primary-300"
                />
              </div>
            </motion.div>

            {/* Short Description */}
            <motion.div variants={item} className="mb-10">
              <p className="text-lg text-slate-400 leading-relaxed text-justify">
                {personalInfo.summary}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 items-center"
            >
              <motion.a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 flex items-center gap-3 group"
              >
                Hire Me
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </motion.a>

              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-3 group"
              >
                <Download size={20} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={item}
              className="mt-10 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-6">
                <span className="text-sm text-slate-400">Connect:</span>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <Github
                      size={20}
                      className="text-slate-400 group-hover:text-white"
                    />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <Linkedin
                      size={20}
                      className="text-slate-400 group-hover:text-white"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Professional Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative Border */}
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-primary-500/30 rounded-2xl -z-0" />

              {/* Main Image Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-primary-500/10 to-cyan-500/10"
              >
                <img
                  src="/picture.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Tech Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -right-6 z-20 bg-dark-800/90 border border-white/10 rounded-xl px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="text-sm">
                    <div className="font-medium text-white">Tech Stack</div>
                    <div className="text-slate-400">
                      React · Tailwind · Node
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm text-slate-500 rotate-90 whitespace-nowrap">
                    Scroll down
                  </span>
                  <div className="w-1 h-20 bg-gradient-to-b from-primary-500/50 to-transparent rounded-full">
                    <motion.div
                      animate={{ y: [0, 40, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1 h-4 bg-primary-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Scroll Indicator for Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16 lg:hidden"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <MousePointerClick size={16} />
            <span>Explore my work</span>
            <ChevronRight
              className="group-hover:translate-x-1 transition-transform"
              size={16}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
