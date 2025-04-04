const Contact = () => {
  return (
    <section className="bg-[#9CAEA9] dark:bg-black text-[#38302E] dark:text-[#ccdad1] p-80 rounded-md text-center my-8 shadow-md w-[calc(100%-3.5in)] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4">
        If you'd like to connect or collaborate, feel free to reach out through any of the following methods:
      </p>

      <ul className="space-y-2 text-base font-medium">
        <li>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:jgreen1632@gmail.com"
            className="text-blue-800 dark:text-orange-400 hover:underline hover:opacity-60"
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
            className="text-blue-800 dark:text-orange-400 hover:underline hover:opacity-60"
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
            className="text-blue-800 dark:text-orange-400 hover:underline hover:opacity-60"
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
            className="text-blue-800 dark:text-orange-400 hover:underline hover:opacity-60"
          >
            jgreen1632
          </a>
        </li>
        <li>
          <strong>Phone:</strong>{' '}
          <a
            href="tel:5127870879"
            className="text-blue-800 dark:text-orange-400 underline hover:opacity-50 mr-4"
          >
            Call Me
          </a>{''}
          ||
          <a
            href="sms:5127870879"
            className="text-blue-800 dark:text-orange-400 underline hover:opacity-50 ml-4"
          >
            Text Me
          </a>
        </li>

        <li>
          <strong>Location:</strong> Kyle, Texas
        </li>
      </ul>
    </section>
  );
};

export default Contact;
