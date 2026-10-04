import { motion } from "framer-motion";
import { experience } from "../data";

export default function Experience() {
  const exp = experience[0];

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Work
            </span>{" "}
            <span className="text-primary-400">Experience</span>
          </h2>
          <p className="text-base text-slate-400">
            Real-world engineering experience
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 md:pl-10">
            {/* Thin vertical timeline line */}
            <div
              className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-primary-400/60 via-white/10 to-transparent"
              aria-hidden="true"
            />

            {/* Small accent node */}
            <div
              className="absolute -left-[4px] top-2 h-[9px] w-[9px] rounded-full bg-primary-400 ring-4 ring-primary-500/20"
              aria-hidden="true"
            />

            {/* Experience Entry */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-12 items-start"
            >
              {/* Left Side: Coderatory, Role, MediaStream Relay */}
              <div className="md:col-span-4 lg:col-span-4 flex flex-col space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                  {exp.company}
                </h3>
                <p className="text-sm md:text-base font-medium text-slate-300">
                  {exp.role}
                </p>
                <div className="pt-0.5">
                  <span className="inline-block text-xs md:text-sm font-medium text-primary-400 tracking-wide">
                    {exp.project}
                  </span>
                </div>
              </div>

              {/* Right Side: Concise 2-line Description & Tech Chips */}
              <div className="md:col-span-8 lg:col-span-8 flex flex-col space-y-5">
                <div className="space-y-2.5 text-sm md:text-[15px] leading-relaxed text-slate-300">
                  <p>{exp.description}</p>
                  <p className="text-slate-400">{exp.subDescription}</p>
                </div>

                {/* 4 Compact Chips — fit on one line on desktop */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {exp.skills.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 whitespace-nowrap hover:border-primary-500/30 hover:text-white hover:bg-primary-500/10 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
