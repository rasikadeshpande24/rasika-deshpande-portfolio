import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function Skills() {
  const { ref, isInView } = useInView();

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS",
        "JavaServer Faces",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        "Java",
        "Node.js",
        "Python",
        "Spring Boot",
        "REST APIs",
        "Microservices",
        "API Design",
      ],
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      skills: [
        "DynamoDB",
        "AWS",
        "AWS Lambda",
        "API Gateway",
        "CloudFront",
        "MySQL",
        "DB2",
        "Database Design",
      ],
    },
    {
      title: "Tools & Practices",
      icon: "🛠️",
      skills: [
        "Git",
        "CI/CD",
        "Agile",
        "CloudWatch",
        "Testing",
        "Code Reviews",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-white relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
              Technical Skills
            </h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive skill set spanning modern web technologies, cloud platforms, and development best practices.
            </p>
          </motion.div>

          {/* Skill Cards */}
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
                  <div className="text-3xl sm:text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-lg sm:text-xl text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.04,
                      }}
                      className="px-4 py-2 text-base font-medium bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100 hover:bg-indigo-100 transition"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-16"
          >
            <h3 className="text-2xl sm:text-3xl text-center mb-8 text-gray-900">
              Certifications & Achievements
            </h3>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "LOMA Certification: SRI 121 - Retirement Plans, Accounts, and Annuities",
                  year: "2025",
                  file: "/certificates/LOMACertificate.pdf"
                },
                {
                  title: "Quarterly Award for 2025",
                  year: "Q4-2025",
                  file: "/certificates/QuarterlyAward.jpeg"
                },
                {
                  title: "LearnQuest Certificate: Developing on AWS",
                  year: "2026",
                  file: "/certificates/LearnQuestDevelopingonAWS.pdf"
                },
              ].map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 sm:p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 text-center cursor-pointer hover:shadow-lg transition-all hover:border-indigo-300"
                >
                  <div className="text-3xl mb-2">🏆</div>

                  <h4 className="text-base sm:text-lg text-gray-900 mb-1">
                    {cert.title}
                  </h4>

                  <p className="text-sm text-gray-600">{cert.year}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}