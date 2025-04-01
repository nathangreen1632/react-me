const Portfolio = () => {
  const projects = [
    {
      title: 'CVitaePRO',
      link: 'https://www.cvitaepro.com/',
      repo: 'https://github.com/nathangreen1632/CVitaePRO',
      screenshot: '/cvitaepro.png',
      alt: 'CVitaePRO screenshot'
    },
    {
      title: 'Weather Dashboard',
      link: 'https://weather-dashboard-c4pa.onrender.com/',
      repo: 'https://github.com/nathangreen1632/weather-dashboard',
      screenshot: '/weather-dashboard.png',
      alt: 'Weather Dashboard screenshot'
    },
    {
      title: 'Recipe Planner',
      link: 'https://recipe-planner-1632.netlify.app/',
      repo: 'https://github.com/nathangreen1632/recipe-planner',
      screenshot: '/recipe-planner.png',
      alt: 'Recipe Planner screenshot'
    },
    {
      title: 'Payroll Tracker',
      link: 'https://payroll-tracker.netlify.app/',
      repo: 'https://github.com/nathangreen1632/employee-payroll-tracker',
      screenshot: '/employee-payroll-tracker.png',
      alt: 'Payroll Tracker screenshot'
    },
    {
      title: 'Technology Blog',
      link: 'https://toggle-blog.netlify.app',
      repo: 'https://github.com/nathangreen1632/toggle-blog',
      screenshot: '/toggle-blog.png',
      alt: 'Technology Blog screenshot'
    },
    {
      title: 'Vehicle Builder',
      link: 'https://www.youtube.com/watch?v=6qlrd8L_s4k&t=44s/',
      repo: 'https://github.com/nathangreen1632/vehicle-builder',
      screenshot: '/vehicle-builder.png',
      alt: 'Vehicle Builder screenshot'
    },
    {
      title: 'Employee Manager',
      link: 'https://www.youtube.com/watch?v=6z5qPHpE0Mo&t=134s',
      repo: 'https://github.com/nathangreen1632/employee-manager',
      screenshot: '/employee-manager.png',
      alt: 'Employee Manager screenshot'
    }
  ];

  return (
    <section className="bg-[#9CAEA9] dark:bg-black text-[#38302E] dark:text-[#ccdad1] p-6 rounded-md my-8 shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1e1e1e] border border-[#ccc] dark:border-[#444] rounded-lg p-4 shadow-md text-center mb-8"
          >
            <img
              src={project.screenshot}
              alt={project.alt}
              className="w-full h-auto rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <div className="flex flex-col items-center">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full px-4 py-2 mb-2 text-[#ccdad1] dark:text-orange-400 bg-black dark:bg-[#646cff] rounded text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:rounded-[30px] transition-all">
                  Live Demo
                </button>
              </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full px-4 py-2 mt-2 text-[#ccdad1] dark:text-orange-400 bg-black dark:bg-[#646cff] rounded text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:rounded-[30px] transition-all">
                  GitHub Repo
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
