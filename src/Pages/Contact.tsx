const Contact = () => {
  return (
    <section className="px-6 py-6 w-[98.5%]">
      <section className="bg-[#B3C4BE] dark:bg-black text-[#38302E] dark:text-[#ccdad1] px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 md:py-8 lg:py-12 rounded-md text-center my-8 dark:sm:my-4 dark:md:my-6 shadow-md w-full sm:w-[90%] md:w-[90%] mx-auto motion-safe:transition-colors motion-safe:duration-300">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Me</h2>
        <p className="mb-4 text-sm sm:text-base">
          If you'd like to connect or collaborate, feel free to reach out through any of the following methods:
        </p>

        <ul className="space-y-3 sm:space-y-2 text-sm sm:text-base font-medium text-center sm:text-center px-2 sm:px-0">
          <li>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:jgreen1632@gmail.com"
              className="text-blue-800 dark:text-orange-400 hover:underline hover:motion-safe:opacity-60 motion-safe:transition-opacity motion-safe:duration-200"
            >
              jgreen1632@gmail.com
            </a>
          </li>
          <li>
            <strong>Stack Overflow:</strong>{' '}
            <a
              href="https://stackoverflow.com/users/27279774/nathan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 hover:underline hover:motion-safe:opacity-60 motion-safe:transition-opacity motion-safe:duration-200"
            >
              Nathan Green
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/nathangreen1632"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 hover:underline hover:motion-safe:opacity-60 motion-safe:transition-opacity motion-safe:duration-200"
            >
              nathangreen1632
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/jgreen1632"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-orange-400 hover:underline hover:motion-safe:opacity-60 motion-safe:transition-opacity motion-safe:duration-200"
            >
              jgreen1632
            </a>
          </li>
          <li className="whitespace-nowrap">
            <strong>Phone:</strong>{' '}
            <a
              href="tel:5127870879"
              className="text-blue-800 dark:text-orange-400 underline hover:motion-safe:opacity-50 motion-safe:transition-opacity motion-safe:duration-200"
            >
              Call Me
            </a>{' '}
            <span className="mx-1 text-gray-600 dark:text-gray-400">||</span>
            <a
              href="sms:5127870879"
              className="text-blue-800 dark:text-orange-400 underline hover:motion-safe:opacity-50 motion-safe:transition-opacity motion-safe:duration-200"
            >
              Text Me
            </a>
          </li>
          <li>
            <strong>Location:</strong> Kyle, Texas
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Contact;
