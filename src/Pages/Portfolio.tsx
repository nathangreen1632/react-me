import { motion } from 'framer-motion';


const Portfolio = () => {
  const fadeInVariants = {
    hidden: {opacity: 0, y: 40},
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {delay: i * 0.075, duration: 0.25},
    }),
  };

  const projects = [
    {
      title: 'CVitaePRO',
      link: 'https://www.cvitaepro.com/',
      repo: 'https://github.com/nathangreen1632/CVitaePRO',
      screenshot: '/cvitaepro.png',
      alt: 'CVitaePRO screenshot',
    },
    {
      title: 'Weather Dashboard',
      link: 'https://weather-dashboard-c4pa.onrender.com/',
      repo: 'https://github.com/nathangreen1632/weather-dashboard',
      screenshot: '/weather-dashboard.png',
      alt: 'Weather Dashboard screenshot',
    },
    {
      title: 'Recipe Planner',
      link: 'https://recipe-planner-1632.netlify.app/',
      repo: 'https://github.com/nathangreen1632/recipe-planner',
      screenshot: '/recipe-planner.png',
      alt: 'Recipe Planner screenshot',
    },
    {
      title: 'Payroll Tracker',
      link: 'https://payroll-tracker.netlify.app/',
      repo: 'https://github.com/nathangreen1632/employee-payroll-tracker',
      screenshot: '/employee-payroll-tracker.png',
      alt: 'Payroll Tracker screenshot',
    },
    {
      title: 'Technology Blog',
      link: 'https://toggle-blog.netlify.app',
      repo: 'https://github.com/nathangreen1632/toggle-blog',
      screenshot: '/toggle-blog.png',
      alt: 'Technology Blog screenshot',
    },
    {
      title: 'Vehicle Builder',
      link: 'https://www.youtube.com/watch?v=6qlrd8L_s4k&t',
      repo: 'https://github.com/nathangreen1632/vehicle-builder',
      screenshot: '/vehicle-builder.png',
      alt: 'Vehicle Builder screenshot',
    },
    {
      title: 'Employee Manager',
      link: 'https://www.youtube.com/watch?v=6z5qPHpE0Mo&t',
      repo: 'https://github.com/nathangreen1632/employee-manager',
      screenshot: '/employee-manager.png',
      alt: 'Employee Manager screenshot',
    },
  ];

  return (
    <section className="pb-6 px-6">
    <section
      className="bg-[#B3C4BE] dark:bg-black text-[#38302E] dark:text-[#ccdad1] px-6 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10 md:py-8 lg:py-12 rounded-md text-center my-8 dark:sm:my-4 dark:md:my-6 shadow-md w-full sm:w-[90%] md:w-[90%] mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Portfolio</h2>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.section
            key={project.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInVariants}
            custom={index}
            className="bg-[#B3C4BE] dark:bg-[#1e1e1e] border border-neutral-400 dark:border-[#444] rounded-lg p-4 sm:p-6 shadow-md text-center mb-8"
          >
            <img
              src={project.screenshot}
              alt={project.alt}
              className="w-full h-auto rounded mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
            <div className="flex flex-col items-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[250px] px-4 py-2 mb-2 text-[#ccdad1] dark:text-black bg-black dark:bg-gray-400 rounded text-sm sm:text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:dark:outline-orange-400 hover:rounded-[30px] transition-all"
              >
                Live Demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[250px] px-4 py-2 mb-2 text-[#ccdad1] dark:text-black bg-black dark:bg-gray-400 rounded text-sm sm:text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:dark:outline-orange-400 hover:rounded-[30px] transition-all"
              >
                GitHub Repo
              </a>
            </div>
          </motion.section>
        ))}
      </div>
    </section>
    </section>
  );
}

export default Portfolio;

