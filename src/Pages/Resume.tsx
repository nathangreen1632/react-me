const Resume = () => {
  return (
    <section className="px-6 py-6 w-[98.5%]">
    <section className="bg-[#9CAEA9] dark:bg-black text-[#38302E] dark:text-[#ccdad1] px-4 sm:px-10 md:px-20 lg:px-32 py-10 sm:py-16 md:py-24 lg:py-32 rounded-md text-center my-6 shadow-md w-full sm:w-[90%] md:w-[90%] mx-auto">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Resume</h2>
        <a
          href="/Jonathan_Green_Resume.docx"
          download="Jonathan_Green_Resume.docx"
        >
          <button className="px-4 py-2 mb-6 text-[#ccdad1] dark:text-black bg-black dark:bg-gray-400 rounded text-sm sm:text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:rounded-[30px] hover:dark:outline-orange-400 transition-all">
            Download My Resume
          </button>
        </a>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Proficiencies</h2>
        <ul className="flex flex-col sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm sm:text-base font-medium">
          <li>
            <a
              href="https://weather-dashboard-c4pa.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 underline hover:opacity-50"
            >
              HTML
            </a>
          </li>
          <li>
            <a
              href="https://recipe-planner-1632.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 underline hover:opacity-50"
            >
              CSS
            </a>
          </li>
          <li>
            <a
              href="https://payroll-tracker.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 underline hover:opacity-50"
            >
              JavaScript
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nathangreen1632/socialNetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 underline hover:opacity-50"
            >
              TypeScript
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nathangreen1632/python-menu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 underline hover:opacity-50"
            >
              Python
            </a>
          </li>
          <li>
            <a
              href="https://kanban-board-t5ud.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 underline hover:opacity-50"
            >
              Express
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nathangreen1632/Cypress"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 underline hover:opacity-50"
            >
              Vite
            </a>
          </li>
          <li>
            <a
              href="https://toggle-blog.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 underline hover:opacity-50"
            >
              Node.js
            </a>
          </li>
          <li>
            <a
              href="https://kanban-board-t5ud.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 underline hover:opacity-50"
            >
              PostgreSQL
            </a>
          </li>
          <li>
            <a
              href="https://www.cvitaepro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 underline hover:opacity-50"
            >
              React
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nathangreen1632/employee-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 underline hover:opacity-50"
            >
              CLI Apps
            </a>
          </li>
        </ul>
      </div>
    </section>
    </section>
  );
};

export default Resume;
