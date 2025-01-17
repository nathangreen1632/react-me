const Resume = () => {
  return (
    <section>
      <div>
      <h2>Resume</h2>
      </div>
      <a href="public/NathanGreen_Resume.pdf" download="NathanGreen_Resume.pdf"><button>Download My Resume</button></a>
      <h2 className="proficiencies">Proficiencies</h2>
      <ul className="proficiencies">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>Express</li>
        <li>Vite</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>React</li>
        <li>CLI Apps</li>
      </ul>
    </section>
  );
};

export default Resume;
