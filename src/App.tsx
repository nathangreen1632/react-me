import { Routes, Route, NavLink } from 'react-router-dom';
import AboutMe from './Pages/About.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import Contact from './Pages/Contact.jsx';
import Resume from './Pages/Resume.jsx';
import FloatingThemeToggleButton from "./components/FloatingThemeToggleButton.tsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-800 dark:bg-black text-[#38302E] dark:text-[#ccdad1] font-['Roboto'] leading-relaxed">
    <header className="relative flex flex-col items-center bg-[#9CAEA9] dark:bg-black text-[#38302E] dark:text-[#ccdad1] p-4 border-2 border-[#6F6866] dark:border-none shadow-[2px_8px_12px_rgba(0.2,0.2,0.2,1)]">
        <h1 className="text-4xl font-bold text-center m-0">Jonathan Green</h1>
        <FloatingThemeToggleButton />
        <nav className="flex flex-wrap justify-center gap-4 my-4">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'opacity-100' : 'opacity-70')}>
            <button className="px-4 py-2 text-[#ccdad1] dark:text-orange-400 bg-black dark:bg-[#646cff] rounded text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:rounded-[30px] transition-all">
              About Me
            </button>
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'opacity-100' : 'opacity-70')}>
            <button className="px-4 py-2 text-[#ccdad1] dark:text-orange-400 bg-black dark:bg-[#646cff] rounded text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:rounded-[30px] transition-all">
              Portfolio
            </button>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'opacity-100' : 'opacity-70')}>
            <button className="px-4 py-2 text-[#ccdad1] dark:text-orange-400 bg-black dark:bg-[#646cff] rounded text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:rounded-[30px] transition-all">
              Contact
            </button>
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => (isActive ? 'opacity-100' : 'opacity-70')}>
            <button className="px-4 py-2 text-[#ccdad1] dark:text-orange-400 bg-black dark:bg-[#646cff] rounded text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:rounded-[30px] transition-all">
              Resume
            </button>
          </NavLink>
        </nav>
      </header>

      <main className="p-4 text-left flex-grow">
      <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      <footer className="bg-[#9CAEA9] dark:bg-black text-black dark:text-[#ccdad1] text-center p-4 mt-5 font-bold border-2 border-[#6F6866] dark:border-none shadow-[2px_8px_12px_rgba(0.2,0.2,0.2,1)]">
        <p className="mb-4">© {new Date().getFullYear()} Jonathan Green</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://github.com/nathangreen1632" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 text-[#ccdad1] dark:text-orange-400 bg-black dark:bg-[#646cff] rounded text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:rounded-[30px] transition-all">
              GitHub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/jgreen1632" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 text-[#ccdad1] dark:text-orange-400 bg-black dark:bg-[#646cff] rounded text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:rounded-[30px] transition-all">
              LinkedIn
            </button>
          </a>
          <a href="https://stackoverflow.com/users/27279774/nathan" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 text-[#ccdad1] dark:text-orange-400 bg-black dark:bg-[#646cff] rounded text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:rounded-[30px] transition-all">
              Stack Overflow
            </button>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
