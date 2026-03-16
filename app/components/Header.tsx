import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const header = document.querySelector("header");

    if (!element || !header) return;

    const headerHeight = header.offsetHeight;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementTop - headerHeight,
      behavior: "smooth",
    });

    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <motion.a
            href="#"
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Rasika Deshpande
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-indigo-600 transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100"
            >
              <ul className="flex flex-col py-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
