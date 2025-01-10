import React from "react";
import { Routes, Route, NavLink } from 'react-router-dom';
import AboutMe from '../Components/about/About.tsx';
import Portfolio from '../Components/porfolio/Portfolio.tsx';
import Contact from '../Components/contact/Contact.tsx';
import Resume from '../Components/resume/Resume.tsx';
import header from "../Styles/header.tsx";
import footer from "../Styles/footer.tsx";



const App = () => {
  return (
    <div>
      <header style={header.header as React.CSSProperties}>
        <h1>Nathan Green</h1>
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
      <footer style={{
        display: footer.footer.display,
        flexDirection: footer.footer.flexDirection,
        alignItems: footer.footer.alignItems,
        justifyContent: footer.footer.justifyContent,
        height: footer.footer.height,
        backgroundColor: footer.footer.backgroundColor,
        color: footer.footer.color,
        padding: footer.footer.padding
      } as React.CSSProperties}>
        <p>© {new Date().getFullYear()} Nathan Green</p>
        <br/>
        <div>
          <a href="https://github.com/nathangreen1632" target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
          <a href="https://www.linkedin.com/in/jgreen1632" target="_blank" rel="noopener noreferrer"><button>LinkedIn</button></a>
          <a href="https://stackoverflow.com/users/27279774/nathan" target="_blank" rel="noopener noreferrer"><button>Stack Overflow</button></a>
        </div>
        <br/>
      </footer>
    </div>
  );
};

export default App;
