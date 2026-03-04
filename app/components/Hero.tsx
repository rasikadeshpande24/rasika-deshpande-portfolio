import { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { InteractiveBackground } from "./InteractiveBackground";

export function Hero() {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-30 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20">
      <InteractiveBackground />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            {/* Professional Photo */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-75"></div>
              <div className="relative w-full h-full p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1653732212701-b729f0b08330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjE5MTIwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Rasika Deshpande - Software Developer"
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Rasika Deshpande
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 sm:mb-6">
              Software Developer & Full Stack Engineer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              Crafting elegant solutions with modern technology. Building scalable web applications and delivering high-quality software solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4"
          >
            <motion.button
              onClick={() => scrollToSection("experience")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-300/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Experience
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-indigo-300 text-indigo-700 rounded-xl hover:bg-indigo-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-3 bg-white/80 backdrop-blur-sm rounded-lg text-indigo-600 hover:bg-white hover:shadow-lg transition-all"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {showHint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1.2 }}
          className="absolute bottom-24 right-8 z-20"
        >
          <div className="bg-indigo-600 text-white text-base px-5 py-3 rounded-full shadow-lg flex items-center gap-2">
            💡 Try popping the bubbles
          </div>
        </motion.div>
      )}
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-indigo-300 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-indigo-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
