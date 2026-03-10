import { Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function Experience() {
  const { ref, isInView } = useInView();

  const experiences = [
    {
      role: "Senior Software Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2024 - Present",
      description: "Leading development of enterprise-level applications and mentoring junior developers.",
      achievements: [
        "Architected and developed a microservices-based platform serving 100K+ users",
        "Improved application performance by 40% through code optimization and caching strategies",
        "Led a team of 3 developers in delivering critical features ahead of schedule",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL"],
    },
    {
      role: "Software Developer",
      company: "Digital Solutions Corp.",
      period: "Jun 2022 - Dec 2023",
      description: "Developed and maintained full-stack web applications for various clients.",
      achievements: [
        "Built RESTful APIs handling 500K+ requests daily with 99.9% uptime",
        "Developed responsive web applications used by 50K+ active users",
        "Collaborated with UX designers to implement pixel-perfect interfaces",
        "Reduced bug reports by 35% through comprehensive unit and integration testing",
      ],
      technologies: ["React", "JavaScript", "Python", "Django", "MongoDB", "Redis"],
    },
    {
      role: "Junior Software Developer",
      company: "StartUp Ventures",
      period: "Mar 2021 - May 2022",
      description: "Contributed to the development of innovative SaaS products in an agile environment.",
      achievements: [
        "Developed key features for a customer management system from scratch",
        "Participated in code reviews and adopted best practices for clean code",
        "Integrated third-party APIs and services for payment and analytics",
        "Assisted in database design and optimization for improved query performance",
      ],
      technologies: ["Vue.js", "JavaScript", "Express.js", "MySQL", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">Professional Experience</h2>
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A few years of hands-on experience in software development across various technologies.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400"></div>

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative lg:flex lg:items-center ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                          <Briefcase className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl text-gray-900 mb-1">{exp.role}</h3>
                          <p className="text-indigo-600 mb-2">{exp.company}</p>
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                              <span className="text-indigo-500 mt-1.5 flex-shrink-0">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-sm border border-indigo-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
