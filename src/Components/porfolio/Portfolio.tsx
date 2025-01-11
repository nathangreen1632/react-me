const Portfolio = () => {
  const projects = [
    { title: 'Weather Dashboard', link: 'https://weather-dashboard-c4pa.onrender.com/', repo: 'https://github.com/nathangreen1632/weather-dashboard' },
    { title: 'Recipe Planner', link: 'https://recipe-planner-1632.netlify.app/', repo: 'https://github.com/nathangreen1632/recipe-planner' },
    { title: 'Payroll Tracker', link: 'https://payroll-tracker.netlify.app/', repo: 'https://github.com/nathangreen1632/employee-payroll-tracker' },
    { title: 'Tech Blog', link: 'https://toggle-blog.netlify.app', repo: 'https://github.com/nathangreen1632/toggle-blog' },
    // Add more projects
  ];

return (
  <section className={"project-card"}>
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
