const Resume = () => {
  return (
    <section className="px-6 py-6 w-[98.5%]">
      <section className="bg-[#B3C4BE] dark:bg-black text-[#38302E] dark:text-[#ccdad1] px-4 sm:px-10 md:px-20 lg:px-32 py-10 sm:py-16 md:py-24 lg:py-32 rounded-md text-center my-6 shadow-md w-full sm:w-[90%] md:w-[90%] mx-auto motion-safe:transition-colors motion-safe:duration-300">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Resume</h2>
          <a
            href="/Jonathan_Green_resume.pdf"
            download="Jonathan_Green_Resume.pdf"
          >
            <button className="px-4 py-2 mb-6 text-[#ccdad1] dark:text-black bg-black dark:bg-gray-400 rounded text-sm sm:text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:rounded-[30px] hover:dark:outline-orange-400 motion-safe:transition-all motion-safe:duration-300">
              Download My Resume
            </button>
          </a>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Proficiencies</h2>
          <ul className="flex flex-col sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm sm:text-base font-medium">
            {[
              { label: "HTML", link: "https://weather-dashboard-c4pa.onrender.com/" },
              { label: "CSS", link: "https://recipe-planner-1632.netlify.app/" },
              { label: "JavaScript", link: "https://payroll-tracker.netlify.app/" },
              { label: "TypeScript", link: "https://github.com/nathangreen1632/socialNetwork" },
              { label: "Python", link: "https://github.com/nathangreen1632/python-menu" },
              { label: "Express", link: "https://kanban-board-t5ud.onrender.com/" },
              { label: "Vite", link: "https://github.com/nathangreen1632/Cypress" },
              { label: "Node.js", link: "https://toggle-blog.netlify.app" },
              { label: "PostgreSQL", link: "https://kanban-board-t5ud.onrender.com/" },
              { label: "React", link: "https://www.cvitaepro.com/" },
              { label: "CLI Apps", link: "https://github.com/nathangreen1632/employee-manager" },
            ].map(({ label, link }) => (
              <li key={label}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 dark:text-orange-400 underline hover:motion-safe:opacity-50 motion-safe:transition-opacity motion-safe:duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Resume;
