import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "IIIT Allahabad",
    duration: "2023 - 2027",
    description:
      "Focused on Data Structures, Algorithms, Web Development, and Software Engineering.",
    score: "Current CGPA: 8.1/10",
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Raj International School",
    duration: "2021 - 2023",
    description:
      "Studied Physics, Chemistry, and Mathematics with a strong interest in problem-solving and technology.",
    score: "Percentage: 89.8%",
  },
  {
    degree: "Secondary School (Class X)",
    institution: "The Bohras Global School",
    duration: "2019 - 2021",
    description: "Laid strong foundations in Mathematics and Science.",
    score: "Percentage: 97.8%",
  },
];

const slideIn = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.6, type: "spring" },
  }),
};

const Education = () => {
  return (
    <div
      id="education"
      className="relative py-16 px-6 md:px-20 bg-black text-white overflow-hidden"
    >
      {/* Thicker background grid lines (2px) */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_2px,transparent_2px)] bg-[size:40px_40px]" />

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 relative z-10">
        Education
      </h2>

      <div className="space-y-8 max-w-5xl mx-auto relative z-10">
        {educationData.map((item, i) => (
          <motion.div
            key={i}
            className="bg-black border border-gray-800 rounded-2xl p-6 transition duration-300 hover:shadow-lg hover:shadow-white"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
          >
            <div className="flex justify-between items-start flex-col md:flex-row md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">
                  {item.degree}
                </h3>
                <p className="text-base text-white mt-1">{item.institution}</p>
                <p className="text-sm text-white mt-1">{item.duration}</p>
                <p className="mt-3 text-white">{item.description}</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right text-white font-bold text-xl md:min-w-[160px]">
                {item.score}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
