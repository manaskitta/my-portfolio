import { FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import codeforcesLogo from "../assets/codeforces-seeklogo.png"; // Make sure this exists

const cardVariants = {
  offscreen: (direction) => ({
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    opacity: 0,
  }),
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const CodingProfiles = () => {
  return (
    <div
      id="coding-profiles"
      className="bg-black text-white py-16 px-6 min-h-screen border-b border-gray-700"
    >
      <h2 className="text-5xl font-bold text-center mb-12 text-white">
        My Coding Profiles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* LeetCode Card */}
        <motion.a
          href="https://leetcode.com/u/Manas_khandelwal/"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl bg-black border border-gray-700 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] shadow-md hover:scale-[1.02] transition-all duration-300"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          custom="left"
        >
          <img
            src="https://assets.leetcode.com/static_assets/public/images/LeetCode_Sharing.png"
            alt="LeetCode"
            className="rounded-t-2xl w-full h-44 object-cover"
          />
          <div className="p-6">
            <SiLeetcode className="text-3xl mb-3 text-yellow-400" />
            <h3 className="text-xl font-bold mb-1">LeetCode</h3>
            <p className="text-gray-400">
              Explore my problem-solving journey on LeetCode.
            </p>
          </div>
        </motion.a>

        {/* Codeforces Card */}
        <motion.a
          href="https://codeforces.com/profile/Kitta2"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl bg-black border border-gray-700 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(192,132,252,0.3)] shadow-md hover:scale-[1.02] transition-all duration-300"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          custom="center"
        >
          <img
            src={codeforcesLogo}
            alt="Codeforces"
            className="rounded-t-2xl w-full h-44 object-contain bg-white p-4"
          />
          <div className="p-6">
            <FaCode className="text-3xl mb-3 text-purple-400" />
            <h3 className="text-xl font-bold mb-1 text-white">Codeforces</h3>
            <p className="text-gray-400">
              Check my rating, contests, and submissions on Codeforces.
            </p>
          </div>
        </motion.a>

        {/* CodeChef Card */}
        <motion.a
          href="https://www.codechef.com/users/manas_214"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl bg-black border border-gray-700 hover:border-orange-300 hover:shadow-[0_0_20px_rgba(251,146,60,0.3)] shadow-md hover:scale-[1.02] transition-all duration-300"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          custom="right"
        >
          <img
            src="https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/cc-logo.png"
            alt="CodeChef"
            className="rounded-t-2xl w-full h-44 object-contain bg-white p-4"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1 text-white">CodeChef</h3>
            <p className="text-gray-400">
              Check out my CodeChef contests, problems, and ratings.
            </p>
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default CodingProfiles;
