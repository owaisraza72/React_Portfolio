import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Loader2,
  ArrowRight,
  MapPin,
  Phone,
  Calendar,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { personalInfo } from "../data";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success(
        "Message sent successfully! I'll respond within 24 hours.",
        {
          duration: 4000,
          style: {
            background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
            color: "#fff",
            border: "1px solid #334155",
            borderRadius: "12px",
            padding: "16px",
          },
          iconTheme: {
            primary: "#3b82f6",
            secondary: "#fff",
          },
        },
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      e.target.reset();
    }, 2000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 },
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements

      {/* Grid Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" /> */}

      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "shadow-2xl",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-400 font-medium text-sm mb-4 border border-primary-500/20">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Let's Build Something
            <span className="block text-primary-400">Amazing Together</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Currently open for internship and junior developer roles. Let's
            discuss your project!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="group">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-6 rounded-2xl 
               bg-white/5 hover:bg-white/10 
               border border-white/10 hover:border-primary-500/30 
               transition-all duration-300 
               hover:scale-[1.02]"
                >
                  {/* Icon */}
                  <div
                    className="p-3 rounded-xl bg-primary-500/20 
                    group-hover:bg-primary-500/30 
                    transition-colors"
                  >
                    <Mail className="text-primary-400" size={24} />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">Email Me</h3>
                    <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      Let’s Build Something Together
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight
                    className="text-primary-400 
                 opacity-0 
                 group-hover:opacity-100 
                 transform 
                 group-hover:translate-x-1 
                 transition-all duration-300"
                  />
                </a>
              </div>

              <div className="group">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-2xl 
               bg-white/5 hover:bg-white/10 
               border border-white/10 hover:border-white/30 
               transition-all duration-300 
               hover:scale-[1.02]"
                >
                  {/* Icon */}
                  <div
                    className="p-3 rounded-xl bg-white/10 
                 group-hover:bg-white 
                 transition-colors duration-300"
                  >
                    <Github
                      className="text-white group-hover:text-black transition-colors"
                      size={24}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">GitHub</h3>
                    <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      Explore My Projects
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight
                    className="text-white 
                 opacity-0 
                 group-hover:opacity-100 
                 transform 
                 group-hover:translate-x-1 
                 transition-all duration-300"
                  />
                </a>
              </div>

              {personalInfo.linkedin && (
                <div className="group">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group-hover:scale-[1.02]"
                  >
                    <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                      <Linkedin className="text-blue-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">
                        LinkedIn
                      </h3>
                      <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                        Connect Professionally
                      </p>
                    </div>
                    <ArrowRight className="text-blue-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              variants={fadeInUp}
              className="pt-8 border-t border-white/10"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-400">
                  <Calendar size={20} />
                  <span className="text-sm">
                    Response Time: Within 24 hours
                  </span>
                </div>
                {personalInfo.phone && (
                  <div className="flex items-center gap-3 text-slate-400">
                    <Phone size={20} />
                    <span className="text-sm">{personalInfo.phone}</span>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center gap-3 text-slate-400">
                    <MapPin size={20} />
                    <span className="text-sm">{personalInfo.location}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl shadow-primary-500/5">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-400 mb-8">
                Fill out the form below and I'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-white/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all hover:border-white/20 resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full py-5 bg-gradient-to-r from-primary-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center justify-center gap-3">
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send
                            className="group-hover:translate-x-1 transition-transform"
                            size={20}
                          />
                        </>
                      )}
                    </span>
                  </button>
                  <p className="text-center text-sm text-slate-500 mt-4">
                    * Required fields. I respect your privacy and won't share
                    your information.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
