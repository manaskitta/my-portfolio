import Hero from '../components/Hero';
import CodingProfiles from '../components/CodingProfiles';
import Education from '../components/Education';
import Projects from '../components/Projects';
import POS from '../components/POS';

function Home({ darkMode }) {
  return (
    <div className={`w-full ${darkMode ? "bg-[#0a192f] text-white" : "bg-white text-black"}`}>
      <section id="hero">
        <Hero darkMode={darkMode} />
      </section>

      <section id="coding-profiles">
        <CodingProfiles darkMode={darkMode} />
      </section>

      <section id="education">
        <Education darkMode={darkMode} />
      </section>

      <section id="projects">
        <Projects darkMode={darkMode} />
      </section>

      <section id="pos">
        <POS darkMode={darkMode} />
      </section>
    </div>
  );
}

export default Home;
