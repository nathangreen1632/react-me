import React from "react";
import { Routes, Route, NavLink } from 'react-router-dom';
import AboutMe from '../Components/about/About.tsx';
import Portfolio from '../Components/porfolio/Portfolio.tsx';
import Contact from '../Components/contact/Contact.tsx';
import Resume from '../Components/resume/Resume.tsx';



const App = () => {
  return (
    <div>
      <header>
        <h1>Nathan Green</h1>
        <nav>
          <NavLink to="/" end><button>About Me</button></NavLink>
          <br/>
          <NavLink to="/portfolio"><button>Portfolio</button></NavLink>
          <br/>
          <NavLink to="/contact"><button>Contact</button></NavLink>
          <br/>
          <NavLink to="/resume"><button>Resume</button></NavLink>
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
          <a href="https://github.com/nathangreen1632" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jgreen1632" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://stackoverflow.com/users/27279774/nathan" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
