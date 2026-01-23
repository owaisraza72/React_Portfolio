import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-6 relative">
      <div className="container mx-auto px-2">
        {/* Section Header (CENTER) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              About
            </span>{" "}
            <span className="text-primary-400">Me</span>
          </h2>
          <p className="text-lg text-slate-400">
            Passionate developer crafting digital experiences with code
          </p>
        </motion.div>

        {/* Image + Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dark-800 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
                alt="Coding workspace"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative Border */}
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-primary-500/30 rounded-2xl -z-0" />
          </motion.div>

          {/* Right Column: Text */}
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-justify"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I am a{" "}
              <strong className="text-white">
                frontend-focused MERN stack developer
              </strong>{" "}
              with a strong foundation in building modern, scalable, and
              responsive web applications using{" "}
              <strong className="text-white">
                React, Tailwind CSS, and JavaScript
              </strong>
              .
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Currently, I am expanding my backend expertise by working with{" "}
              <strong className="text-white">
                MongoDB, Mongoose, Express, and JWT-based authentication
              </strong>
              , focusing on clean architecture, secure APIs, and scalable
              application structures.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              I enjoy crafting smooth user experiences, writing clean and
              maintainable code, and following best practices to build
              applications that are both technically strong and user-focused.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
