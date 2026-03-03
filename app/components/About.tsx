import { Code2, Palette, Rocket, Users, Award, Target } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function About() {
  const { ref, isInView } = useInView();

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following industry best practices and design patterns.",
      color: "blue",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration skills with cross-functional teams in agile environments.",
      color: "purple",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks, staying current with industry trends.",
      color: "green",
    },
    {
      icon: Target,
      title: "Result-Driven",
      description: "Focused on delivering high-quality solutions that meet business objectives and user needs.",
      color: "orange",
    },
    {
      icon: Palette,
      title: "UI/UX Focused",
      description: "Creating intuitive, accessible interfaces that provide exceptional user experiences.",
      color: "pink",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Committed to code quality, testing, and continuous improvement of development processes.",
      color: "indigo",
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
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Passionate software developer with experience in building robust, scalable applications and delivering impactful solutions.
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
