const Portfolio = () => {
  const projects = [
    { title: 'Weather Dashboard',
      link: 'https://weather-dashboard-c4pa.onrender.com/',
      repo: 'https://github.com/nathangreen1632/weather-dashboard',
      screenshot: '/weather-dashboard.png',
      alt: 'Weather Dashboard screenshot'
    },
    { title: 'Recipe Planner',
      link: 'https://recipe-planner-1632.netlify.app/',
      repo: 'https://github.com/nathangreen1632/recipe-planner',
      screenshot: '/recipe-planner.png',
      alt: 'Recipe Planner screenshot'
    },
    { title: 'Payroll Tracker',
      link: 'https://payroll-tracker.netlify.app/',
      repo: 'https://github.com/nathangreen1632/employee-payroll-tracker',
      screenshot: '/employee-payroll-tracker.png',
      alt: 'Payroll Tracker screenshot'
    },
    { title: 'Technology Blog',
      link: 'https://toggle-blog.netlify.app',
      repo: 'https://github.com/nathangreen1632/toggle-blog',
      screenshot: '/toggle-blog.png',
      alt: 'Technology Blog screenshot'
    },
    { title: 'Vehicle Builder',
      link: 'https://www.youtube.com/watch?v=6qlrd8L_s4k&t=44s/',
      repo: 'https://github.com/nathangreen1632/vehicle-builder',
      screenshot: '/vehicle-builder.png',
      alt: 'Vehicle Builder screenshot'
    },
    { title: 'Employee Manager',
      link: 'https://www.youtube.com/watch?v=6z5qPHpE0Mo&t=134s',
      repo: 'https://github.com/nathangreen1632/employee-manager',
      screenshot: '/employee-manager.png',
      alt: 'Employee Manager screenshot'
    },
    // Add more projects
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              className="project-screenshot"
            />
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>Live Demo</button>
            </a>
            <br />
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <button>GitHub Repo</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
