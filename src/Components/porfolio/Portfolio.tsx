const Portfolio = () => {
  const projects = [
    { title: 'Weather Dashboard', link: 'https://weather-dashboard-c4pa.onrender.com/', repo: 'https://github.com/nathangreen1632/weather-dashboard' },
    { title: 'Recipe Planner (takes a minute to render)', link: 'https://recipe-planner-1632.netlify.app/', repo: 'https://github.com/nathangreen1632/recipe-planner' },
    { title: 'Payroll Tracker', link: 'https://payroll-tracker.netlify.app/', repo: 'https://github.com/nathangreen1632/employee-payroll-tracker' },
    { title: 'Tech Blog', link: 'https://tech-blog-1632.herokuapp.com/', repo: 'https://github.com/nathangreen1632/tech-blog' },
    { title: 'Note Taker', link: 'https://note-taker-1632.herokuapp.com/', repo: ''},
    { title: 'Budget Tracker', link: 'https://budget-tracker-1632.herokuapp.com/', repo: ''},
    // Add more projects
  ];

return (
  <section>
    <h2>Portfolio</h2>
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer"><button>Live Demo</button></a>
          <br/>
          <a href={project.repo} target="_blank" rel="noopener noreferrer"><button>GitHub Repo</button></a>
        </div>
      ))}
    </div>
  </section>
);
};

export default Portfolio;
