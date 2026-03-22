import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { personalInfo } from "../data";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={personalInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1.5 // Show after initial animations
      }}
      className="fixed bottom-8 right-8 z-[100] group"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
      
      <div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl overflow-hidden">
        <MessageCircle size={32} />
        
        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping opacity-0 group-hover:opacity-100"></span>
      </div>

      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-dark-800/90 border border-white/10 text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md pointer-events-none">
        Chat with me!
      </span>
    </motion.a>
  );
}
