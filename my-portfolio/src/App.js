import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#0a192f]" : "bg-white"} text-white`}>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <Router>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            setLoading={setLoading}
          />
          <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
