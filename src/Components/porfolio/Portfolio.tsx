const Portfolio = () => {
  const projects = [
    { title: 'Project 1', link: '#', repo: 'https://github.com/nathangreen1632/project1' },
    { title: 'Project 2', link: '#', repo: 'https://github.com/nathangreen1632/project2' },
    // Add more projects
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
