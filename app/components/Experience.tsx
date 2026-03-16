import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function Experience() {
  const { ref, isInView } = useInView();

  const experiences = [
    {
      company: "Principal Global Services",
      role: "Software Engineer",
      period: "July 2023 – Present",
      achievements: [
        "Contributed to cloud modernization initiatives, migrating on-premise systems to AWS while enhancing application performance and user experience, delivering cost savings exceeding $60K.",
        "Developed and maintained REST APIs for enterprise applications using Java and Spring Boot.",
        "Worked on full-stack applications using React, JSF, and Next.js alongside backend services.",
        "Implemented manager-layer integrations to retrieve and process data from DB2, supporting backend services and business workflows.",
        "Built serverless applications using AWS Lambda, API Gateway, CloudWatch, CloudFront, and DynamoDB.",
        "Mentored junior engineers and collaborated within Agile development teams, contributing to sprint planning, development, and code reviews.",
        "Leveraged AI-assisted development tools to automate tasks such as log analysis and documentation generation, improving development efficiency.",
        "Ranked Top 5 out of 200 participants in the company-wide AWS AI League Hackathon and received multiple monthly and quarterly engineering awards.",
      ],
      technologies: [
        "AWS",
        "Java",
        "Spring Boot",
        "React",
        "Next.js",
        "TypeScript",
        "REST APIs",
        "AWS Lambda",
        "API Gateway",
        "DynamoDB",
        "CloudFront",
        "CloudWatch",
        "DB2",
        "JSF",
      ],
    },
    {
      company: "ArrayPointer",
      role: "Machine Learning Intern",
      period: "July 2022 – April 2023",
      achievements: [
        "Developed a machine learning model to forecast restaurant revenue and demand using historical and real-time sales data from multiple restaurants in Bangalore.",
        "Engineered and selected highly correlated features to capture trend and seasonality patterns, improving forecasting performance across multiple time windows.",
        "Implemented and compared multiple deep learning models for demand prediction, achieving 86% forecasting accuracy.",
      ],
      technologies: ["Python", "Machine Learning", "Data Analysis", "Deep Learning"],  
    },
  ];

  const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6">

        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
              Professional Experience
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6 mt-3"></div>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Experience building scalable backend systems, cloud-native
              applications, and modern web platforms.
            </p>
          </motion.div>

          {/* Experience list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-20"
          >

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ x: 6 }}
                className="border-l-2 border-indigo-200 pl-3 sm:pl-6"
              >
                {/* Company + role */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl text-gray-900">
                    {exp.company}
                  </h3>

                  <span className="text-sm text-gray-500">
                    {exp.period}
                  </span>
                </div>

                <p className="text-indigo-600 mb-3">
                  {exp.role}
                </p>

                {/* Achievements */}
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((a, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600 text-sm sm:text-base"
                    >
                      <span className="text-indigo-500 mt-1">•</span>
                      {a}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}