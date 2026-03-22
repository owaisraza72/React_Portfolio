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
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
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
            I am a results-driven <strong className="text-white">Full Stack (MERN) Developer</strong> focused on crafting high-quality web experiences. With expertise in <strong className="text-white">MongoDB, Express, React, and Node.js</strong>, I build scalable applications that combine seamless frontend interfaces with robust backend logic.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            My strengths lie in building secure <strong className="text-white">JWT-based authentication</strong>, designing efficient <strong className="text-white">RESTful APIs</strong>, and managing complex databases. I prioritize clean code and performance, ensuring every application is maintainable and ready for scale.
          </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
