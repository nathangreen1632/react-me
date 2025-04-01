const Resume = () => {
  return (
    <section className="bg-[#9CAEA9] dark:bg-black text-[#38302E] dark:text-[#ccdad1] px-6 py-6 flex justify-center items-center min-h-[calc(100vh-350px)]">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <a
          href="/Jonathan_Green_Resume.docx"
          download="Jonathan_Green_Resume.docx"
        >
          <button className="px-4 py-2 mb-6 text-[#ccdad1] dark:text-orange-400 bg-black dark:bg-[#646cff] rounded text-base font-medium hover:outline hover:outline-2 hover:outline-[#646cff] hover:rounded-[30px] transition-all">
            Download My Resume
          </button>
        </a>

        <h2 className="text-2xl font-semibold mb-4">Proficiencies</h2>
        <ul className="flex sm:grid-cols-3 flex-col gap-3 text-base font-medium">
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
      </div>
    </section>
  );
};

export default Resume;
