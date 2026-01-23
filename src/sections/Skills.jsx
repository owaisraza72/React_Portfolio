import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Server,
  Cpu,
  Globe,
  Terminal,
  Layout,
  Smartphone,
  Cloud,
  Zap,
  GitBranch,
} from "lucide-react";
import { skills } from "../data";

export default function Skills() {
  // Icon mapping based on category
  const getCategoryIcon = (category) => {
    const iconMap = {
      Frontend: <Layout size={28} />,
      Backend: <Server size={28} />,
      Database: <Database size={28} />,
      Tools: <Terminal size={28} />,
      Mobile: <Smartphone size={28} />,
      Cloud: <Cloud size={28} />,
      DevOps: <GitBranch size={28} />,
      "UI/UX": <Palette size={28} />,
      Testing: <Zap size={28} />,
      Performance: <Cpu size={28} />,
      Languages: <Code2 size={28} />,
      Web: <Globe size={28} />,
    };
    return iconMap[category] || <Code2 size={28} />;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const skillHover = {
    scale: 1.05,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  };

  return (
    <section id="skills" className="py-32 relative">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] -z-10" /> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Technical
            </span>{" "}
            <span className="text-primary-400">Skills</span>
          </h2>
          <p className="text-xl text-slate-400">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="
    w-full
    grid
    gap-6
    px-4
    [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]
  "
        >
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={skillHover}
              className="group relative"
            >
              {/* Skill Card */}
              <div className="h-full bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300">
                {/* Card Header */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="relative">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary-500/10 to-cyan-500/10 text-primary-400 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                      {getCategoryIcon(group.category)}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {group.items.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
                      {group.category}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {group.items.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skill Tags */}
                <div className="space-y-3">
                  {group.items.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: sIdx * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary-500/20 transition-all duration-300 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/10 to-cyan-500/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary-400">
                          {skill.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors">
                        {skill}
                      </span>
                      <div className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity">
                        <svg
                          className="w-4 h-4 text-primary-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10"
        ></motion.div>
      </div>
    </section>
  );
}
