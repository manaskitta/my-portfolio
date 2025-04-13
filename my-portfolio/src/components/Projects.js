import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Amazon Clone",
    description: "Built a fully functional Amazon clone with React and Firebase for authentication and payments.",
    tech: "React · Firebase · Stripe · TailwindCSS",
    live: "https://manaskitta.github.io/Amaclone/",
    github: "https://github.com/manaskitta/Amaclone",
  },
  {
    title: "Minance - Budget App",
    description: "A personal finance dashboard with login/signup, expense tracking, and data visualization.",
    tech: "React · Node.js · MongoDB · Express",
    live: "https://minance-demo.com",
    github: "https://github.com/yourusername/minance",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio! Designed and built from scratch using React and Framer Motion.",
    tech: "React · TailwindCSS · Framer Motion",
    live: "#hero",
    github: "https://github.com/yourusername/portfolio",
  },
];

const slideIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, type: "spring" },
  }),
};

const Projects = () => {
  return (
    <div id="projects" className="py-20 px-6 md:px-20 bg-black text-white">
      <h2 className="text-5xl font-bold text-center mb-16 text-white-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-black p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:shadow-md hover:shadow-white"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">{project.title}</h3>
            <p className="text-white mb-4">{project.description}</p>
            <p className="text-sm text-white mb-6">{project.tech}</p>
            <div className="flex gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white border border-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  Live Demo <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white border border-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  GitHub <FaGithub className="text-base" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
