import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { email, phone, location } from "../utils/PersonalInfo";

export function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");

    const body = encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name}\n--------------------------------\nSent from portfolio`
    );

    window.location.href = `${email}?subject=${subject}&body=${body}`;

    console.log("Form submitted:", formData);
    alert("Your email client will open with the message ready to send.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: email.replace('mailto:', ''),
      href: email,
      color: "blue",
    },
    {
      icon: Phone,
      label: "Phone",
      value: phone.replace('tel:', ''),
      href: phone,
      color: "purple",
    },
    {
      icon: MapPin,
      label: "Location",
      value: location,
      color: "pink",
    },
  ];

  return (
    <section id="contact" className="pt-20 pb-20 sm:pt-12 sm:pb-20 lg:pt-18 lg:pb-24 bg-gradient-to-b from-gray-50 to-white relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">Let's Connect</h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-5"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className={`p-3 sm:p-4 rounded-lg bg-blue-100`}>
                      <info.icon className={`text-blue-600`} size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      <p className="text-base sm:text-lg text-gray-900">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200"
              >
                <p className="text-gray-700 mb-2">✨ <strong>Quick Response Time</strong></p>
                <p className="text-sm text-gray-600">Average response time: 24 hours</p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 text-sm sm:text-base">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all bg-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 text-sm sm:text-base">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all bg-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 text-sm sm:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent resize-none transition-all bg-white"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-300/30"
                >
                  Send Message
                  <Send size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
