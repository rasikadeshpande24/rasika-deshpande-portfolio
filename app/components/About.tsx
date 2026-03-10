import { Code2, Palette, Rocket, Users, Award, Target } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function About() {
  const { ref, isInView } = useInView();

  const features = [
    {
      icon: Users,
      title: "Software Development",
      description: "Passionate software developer with experience in building robust, scalable applications and delivering impactful solutions.",
      color: "purple",
    },
    {
      icon: Rocket,
      title: "Continuous Learning",
      description: "Always exploring new technologies, improving engineering skills and staying current with industry trends.",
      color: "green",
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "I approach problems with structured thinking, focusing on understanding the root cause and building solutions that are efficient, reliable, and easy to maintain.",
      color: "orange",
    },
  ];

  const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
    blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200" },
    purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-200" },
    green: { bg: "bg-green-50", icon: "text-green-600", border: "border-green-200" },
    orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-200" },
    pink: { bg: "bg-pink-50", icon: "text-pink-600", border: "border-pink-200" },
    indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", border: "border-indigo-200" },
  };

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">About Me</h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              Software developer focused on building reliable and scalable applications. I enjoy solving complex engineering problems and designing systems that are clean, maintainable, and efficient. I work well in collaborative environments and aim to deliver practical software solutions grounded in strong engineering principles.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border ${colorClasses[feature.color].border} shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                <div className={`p-4 ${colorClasses[feature.color].bg} rounded-xl inline-block mb-4`}>
                  <feature.icon className={colorClasses[feature.color].icon} size={32} />
                </div>
                <h3 className="text-xl sm:text-2xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
