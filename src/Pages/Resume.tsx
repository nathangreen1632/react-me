const Resume = () => {
  return (
    <section>
      <h2 className="project-card">Resume</h2>
      <a href="/public/NathanGreen_Resume.pdf" download="NathanGreen_Resume.pdf"><button>Download Resume</button></a>
      <h2 className="project-card">Proficiencies</h2>
      <ul className="project-card">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>React</li>
        <li>CLI Apps</li>
      </ul>
    </section>
  );
};

export default Resume;
