import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import heroImage from "../assets/Logo.png";
import robotImage from "../assets/Logo.png";

const Hero = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div
            className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
                darkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
        >
            <div className="flex flex-col md:flex-row items-center justify-between w-4/5">
                {/* Left Side - Text */}
                <div className="text-center md:text-left max-w-xl">
                    <h1 className="text-6xl md:text-7xl font-bold leading-tight flex items-center justify-center md:justify-start gap-2 flex-wrap">
                        <span>
                            Hi, I'm <span className="text-cyan-400">Manas</span>
                        </span>
                        <motion.span
                            animate={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="inline-block"
                        >
                            👋
                        </motion.span>
                    </h1>

                    {/* Typewriter on Sophomore line */}
                    <h2 className="text-xl md:text-2xl font-semibold mt-4 text-cyan-300">
                        <Typewriter
                            words={["Sophomore at IIIT Allahabad"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h2>

                    {/* What you've learned */}
                    <p className="mt-6 text-lg md:text-xl text-gray-400">
                        I've learnt Data Structures and Algorithms in C++ and Web Development using the MERN stack. I love building responsive, user-friendly applications and constantly strive to learn more.
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-10 mt-8 justify-center md:justify-start text-4xl">
                        <a
                            href="https://github.com/manaskitta"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white transition-transform transform hover:scale-125 duration-300 cursor-pointer"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/manas-khandelwal-52a93827a/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-cyan-500 hover:text-cyan-300 transition-transform transform hover:scale-125 duration-300 cursor-pointer"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://twitter.com/your-twitter"
                            target="_blank"
                            rel="noreferrer"
                            className="text-cyan-400 hover:text-cyan-200 transition-transform transform hover:scale-125 duration-300 cursor-pointer"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* Right Side - Image & Robot */}
                <div className="relative mt-12 md:mt-0">
                    <motion.img
                        src={heroImage}
                        alt="Developer Illustration"
                        className="w-96 h-96"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    />
                    <motion.img
                        src={robotImage}
                        alt="Moving Robot"
                        className="absolute -top-12 left-12 w-20 h-20"
                        animate={{ x: [0, 50, 0], y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
