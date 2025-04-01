const AboutMe = () => {
  return (
    <section className="px-6 py-8">
      <div id="about-me" className="flex flex-col items-center text-center mb-6">
        <img
          src="/profile.png"
          alt="Jonathan Green"
          width={400}
          height={600}
          className="max-w-full h-auto my-4 shadow-[2px_8px_12px_rgba(0.2,0.2,0.2,1)]"
        />
      </div>

      {[
        {
          title: "Hi! I’m Jonathan Green",
          content: [
            "I’m a former software salesperson and aspiring full-stack developer with a passion for building web applications that solve real-world problems. My journey into development stems from my professional background, love for problem-solving, and curiosity about how technology shapes our lives.",
          ],
        },
        {
          title: "From Sales to Software Development",
          content: [
            "For years, I worked in software sales, acting as the bridge between clients and development teams. This role gave me insight into the software development lifecycle and taught me how to identify and communicate client needs effectively. While I enjoyed helping customers find solutions, I became increasingly curious about how the software I sold was built.",
            "Sales honed my communication and collaboration skills—qualities that now help me as a developer when working in teams or interpreting project requirements. My background also instilled a user-focused mindset that I bring to every project I tackle.",
          ],
        },
        {
          title: "Why Full-Stack Development?",
          content: [
            "What excites me about full-stack development is the ability to work on both the front and back ends of an application. I enjoy designing intuitive user interfaces that look great and function seamlessly while ensuring that the backend systems are robust, scalable, and efficient.",
            "I’m driven by the opportunity to solve real-world problems through technology. Whether it’s streamlining workflows, creating new tools, or enhancing user experiences, I thrive on finding creative, impactful solutions.",
          ],
        },
        {
          title: "Interests and Inspirations",
          content: [
            "Outside of coding, I’m an avid skier. The thrill of tackling challenging slopes, coupled with the serenity of the mountains, is something I deeply cherish. Skiing has taught me persistence, adaptability, and focus—qualities that directly translate to coding and problem-solving.",
            "I’m also passionate about lifelong learning. Transitioning from software sales to development has been a continuous journey of discovery. Each project, bug fix, and new concept reinforces my love for technology and the joy of mastering new skills.",
          ],
        },
        {
          title: "My Vision as a Developer",
          content: [
            "As an aspiring full-stack developer, I aim to build applications that are functional, accessible, and impactful. Great software isn’t just about solving problems; it’s about crafting user experiences that are meaningful and enjoyable. To achieve this, I prioritize empathy, staying current with industry trends, and adhering to core development principles.",
          ],
        },
        {
          title: "Projects and Goals",
          content: [
            "While I’m early in my development journey, I’ve already built several projects, including web applications that enhance user experiences and tools powered by APIs. Each project has taught me new skills, from mastering JavaScript frameworks like React to building responsive designs.",
            "In the future, I want to contribute to open-source projects, tackle more complex applications, and explore emerging technologies like artificial intelligence and blockchain. These goals align with my passion for pushing boundaries and continuous learning.",
          ],
        },
        {
          title: "Why This Journey Matters",
          content: [
            "This career shift from sales to development is about more than just a new role—it’s a reflection of my desire to grow and contribute meaningfully. I believe in the transformative power of technology and am excited to play a part in shaping innovative solutions.",
            "What drives me most is the limitless potential of the tech industry. Every day brings new opportunities to learn, create, and collaborate. For me, coding is not just a career but a way to make a lasting impact.",
          ],
        },
        {
          title: "In Closing",
          content: [
            "In summary, I’m Jonathan Green—a former software salesperson turned aspiring full-stack developer. I’m passionate about solving problems through technology, building impactful applications, and continuously growing as a developer. Whether I’m skiing down a mountain or debugging a challenging issue, I approach every endeavor with determination, curiosity, and a desire to excel.",
            "Thank you for taking the time to learn about me. If you’d like to connect, collaborate, or chat about technology, skiing, or anything in between, feel free to reach out!",
          ],
        },
      ].map((section, index) => (
        <section
          key={index}
          className="bg-[#9CAEA9] dark:bg-black text-[#38302E] dark:text-[#ccdad1] p-6 rounded-md text-center font-extrabold my-8 shadow-md"
        >
          <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
          {section.content.map((para, idx) => (
            <p key={idx} className="mb-4">
              {para}
            </p>
          ))}
        </section>
      ))}
    </section>
  );
};

export default AboutMe;
