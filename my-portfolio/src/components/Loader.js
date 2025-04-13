import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/Logo.png";

const Loader = ({ setLoading }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(() => setLoading(false), 1000); // Matches fade-out duration
    }, 2500);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: exit ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50"
    >
      {/* Rotating Logo (One time) */}
      <motion.img
        src={logo}
        alt="Logo"
        className="w-[200px] h-[200px]"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />

      {/* Animated Name */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-3xl font-semibold mt-4 tracking-wide"
      >
        {"<Manas Khandelwal/>"}
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
