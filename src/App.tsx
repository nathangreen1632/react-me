import { Routes, Route, NavLink } from 'react-router-dom';
import AboutMe from './Pages/About.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import Contact from './Pages/Contact.jsx';
import Resume from './Pages/Resume.jsx';
import FloatingThemeToggleButton from "./components/FloatingThemeToggleButton.tsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-800 dark:bg-black text-[#38302E] dark:text-[#ccdad1] font-['Roboto'] leading-relaxed">
      <header className="relative flex flex-col items-center mb-5 bg-[#B3C4BE] dark:bg-black text-[#38302E] dark:text-[#ccdad1] p-4 border-2 border-[#6F6866] dark:border-none shadow-[2px_8px_12px_rgba(0.2,0.2,0.2,1)]">
        <h1 className="text-4xl font-bold text-center m-0">Jonathan Green</h1>
        <FloatingThemeToggleButton />
        <nav className="flex flex-wrap justify-center gap-4 my-4">
          {[
            { to: "/", label: "About Me" },
            { to: "/portfolio", label: "Portfolio" },
            { to: "/contact", label: "Contact" },
            { to: "/resume", label: "Resume" },
          ].map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'opacity-80' : 'opacity-100')}>
              <button className="px-4 py-2 text-[#ccdad1] dark:text-black bg-black dark:bg-gray-400 rounded text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:dark:outline-orange-400 hover:rounded-[30px] motion-safe:transition-all motion-safe:duration-300">
                {label}
              </button>
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="text-left flex-grow flex items-center justify-center motion-safe:transition-opacity motion-safe:duration-300">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      <footer className="bg-[#B3C4BE] dark:bg-black text-black dark:text-[#ccdad1] text-center p-4 font-bold border-2 border-[#6F6866] dark:border-none shadow-[2px_8px_12px_rgba(0.2,0.2,0.2,1)]">
        <p className="mb-4">© {new Date().getFullYear()} Jonathan Green</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            {
              href: "https://github.com/nathangreen1632",
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/jgreen1632",
              label: "LinkedIn",
            },
            {
              href: "https://stackoverflow.com/users/27279774/nathan",
              label: "Stack Overflow",
            },
          ].map(({ href, label }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 text-[#ccdad1] dark:text-black bg-black dark:bg-gray-400 rounded text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:dark:outline-orange-400 hover:rounded-[30px] motion-safe:transition-all motion-safe:duration-300">
                {label}
              </button>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
