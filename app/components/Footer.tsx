import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { github, linkedin, phone, location, email } from "../utils/PersonalInfo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Github, href: github, label: "GitHub", color: "hover:text-indigo-400" },
    { icon: Linkedin, href: linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: email, label: "Email", color: "hover:text-pink-400" },
  ];

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden pt-7 sm:pt-7 pb-5 sm:pb-5">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.h3
                className="text-2xl sm:text-3xl mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Rasika Deshpande
              </motion.h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Passionate software developer crafting elegant solutions with modern technology.
                Let's build something amazing together.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white ${social.color} transition-all`}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg sm:text-xl mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-white transition-colors text-left"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg sm:text-xl mb-4">Get in Touch</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href={email} className="hover:text-white transition-colors">
                    {email.replace('mailto:', '')}
                  </a>
                </li>
                <li>
                  <a href={phone} className="hover:text-white transition-colors">
                    {phone.replace('tel:', '')}
                  </a>
                </li>
                <li className="text-gray-300">{location}</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left">
              &copy; {currentYear} Rasika Deshpande.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
