import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function Skills() {
  const { ref, isInView } = useInView();

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript / JavaScript", level: 92 },
        { name: "HTML5 / CSS3", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Redux / State Management", level: 85 },
        { name: "Responsive Design", level: 93 },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "Python / Django", level: 82 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Microservices", level: 80 },
        { name: "API Design", level: 87 },
      ],
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      skills: [
        { name: "PostgreSQL / MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis / Caching", level: 78 },
        { name: "AWS / Cloud Services", level: 82 },
        { name: "Docker", level: 83 },
        { name: "Database Design", level: 86 },
      ],
    },
    {
      title: "Tools & Practices",
      icon: "🛠️",
      skills: [
        { name: "Git / Version Control", level: 93 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "Agile / Scrum", level: 90 },
        { name: "Testing (Jest, Pytest)", level: 82 },
        { name: "Code Review", level: 88 },
        { name: "Problem Solving", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-white relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">Technical Skills</h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive skill set spanning modern web technologies, cloud platforms, and development best practices.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl sm:text-5xl mb-3">{category.icon}</div>
                  <h3 className="text-lg sm:text-xl text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm sm:text-base text-gray-700">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-16"
          >
            <h3 className="text-2xl sm:text-3xl text-center mb-8 text-gray-900">Certifications & Achievements</h3>
            <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: "AWS Certified Developer", year: "2023" },
                { title: "Professional Scrum Master I", year: "2023" },
                { title: "MongoDB Certified Developer", year: "2022" },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 sm:p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 text-center"
                >
                  <div className="text-3xl mb-2">🏆</div>
                  <h4 className="text-base sm:text-lg text-gray-900 mb-1">{cert.title}</h4>
                  <p className="text-sm text-gray-600">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
