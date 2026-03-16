import { Code2, Palette, Rocket, Users, Award, Target } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function Education() {
  const { ref, isInView } = useInView();

  const education = [
    {
      university: "Pune Vidyarthi Griha's College of Engineering and Technology",
      course: "Bachelor of Engineering in Information Technology with Honors in Artificial Intelligence and Machine Learning",
      score: "9.48/10 CGPA",
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 bg-white relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">Education</h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid gap-6 sm:gap-8">
            {education.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="border-l-2 border-indigo-200 pl-3 sm:pl-6"
              >
                <h3 className="text-xl sm:text-2xl mb-3 text-gray-900">{education.university}</h3>
                <p className="text-gray-600 leading-relaxed mt-3">{education.course}</p>
                <p className="text-lg font-bold text-gray-900">{education.score}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
