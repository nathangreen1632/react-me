
import { Routes, Route, NavLink } from 'react-router-dom';
import AboutMe from './Pages/About.tsx';
import Portfolio from './Pages/Portfolio.tsx';
import Contact from './Pages/Contact.tsx';
import Resume from './Pages/Resume.tsx';
import DarkLightToggle from "./components/darkMode.tsx";


const App = () => {
  return (
    <div>
      <header>
        <h1>Nathan Green</h1>
        <DarkLightToggle />
        <nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}><button>About Me</button></NavLink>
          <br/>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}><button>Portfolio</button></NavLink>
          <br/>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}><button>Contact</button></NavLink>
          <br/>
          <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}><button>Resume</button></NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Nathan Green</p>
        <div>
          <a href="https://github.com/nathangreen1632" target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
          <a href="https://www.linkedin.com/in/jgreen1632" target="_blank" rel="noopener noreferrer"><button>LinkedIn</button></a>
          <a href="https://stackoverflow.com/users/27279774/nathan" target="_blank" rel="noopener noreferrer"><button>Stack Overflow</button></a>
        </div>
      </footer>
    </div>
  );
};

export default App;
