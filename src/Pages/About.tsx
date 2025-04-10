import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const AboutMe: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const sections = [
    {
      title: 'Hi! I’m Jonathan Green',
      content: [
        <>I’m a former software salesperson and aspiring full-stack developer who’s passionate about building web applications that create real-world impact. After years of helping clients adopt tech solutions, I decided to shift gears and start building those solutions myself.</>,
        <>Now studying Computer Science at <a href="https://www.utsa.edu" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:text-orange-400 hover:underline hover:opacity-60">UTSA</a>, I bring a business-savvy, results-driven mindset to engineering—blending my background in sales, finance, and communication with modern development tools like React, Node.js, PostgreSQL, and the OpenAI API.</>,
        <>I’m currently developing <a href="https://www.cvitaepro.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:text-orange-400 hover:underline hover:opacity-60">CVitaePRO</a>, an AI-powered resume and cover letter generator, as well as other full-stack projects focused on UX clarity and backend scalability.</>,
      ],
    },
    {
      title: 'From Sales to Software Development',
      content: [
        <>For years, I worked in software sales, serving as the key link between clients and development teams. I wasn’t just selling solutions—I was translating business pain points into technical possibilities and working closely with engineers to make sure our product delivered real value. That front-line experience gave me a unique window into the software development lifecycle: from early discovery and scoping to deployment and iteration.</>,
        <>Over time, I realized I didn’t just want to be the person talking about the product—I wanted to be the one building it. My curiosity about how the software worked under the hood grew stronger, and I found myself more drawn to wireframes, workflows, and product logic than sales pitches and quotas.</>,
        <>Sales sharpened my communication, teamwork, and active listening skills—traits I now lean on heavily as a developer when collaborating cross-functionally or gathering requirements. It also gave me a deep appreciation for the user’s perspective. Every app I work on starts with the question: What problem are we solving, and how can we make the experience seamless?</>,
        <>Now as an aspiring full-stack engineer, I’m channeling that user-first mindset and cross-disciplinary experience into building intuitive, scalable applications—like my <a href="https://kanban-board-t5ud.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:text-orange-400 hover:underline hover:opacity-60">Kanban Board</a> and CVitaePRO, which are designed to turn user needs into clean, actionable solutions.</>,
      ],
    },
    {
      title: 'Why Full-Stack Development',
      content: [
        <>What excites me most about full-stack development is its breadth — the ability to contribute to every layer of an application, from the backend systems that power functionality to the frontend interfaces that shape how users interact with it. Coming from a background in sales, I spent years listening to users, identifying pain points, and communicating solutions. Now, as a developer, I get to do more than just describe those solutions — I get to build them.</>,
        <>I love the challenge of designing clean, intuitive user interfaces that feel natural and frictionless. But I also enjoy diving into the logic behind the scenes — writing backend code that’s robust, scalable, and maintainable. The full-stack path gives me the creative and technical freedom to take a product idea and carry it from concept to execution.</>,
        <>What drives me most is solving real problems with technology. In sales, I learned that the best solutions aren't always flashy — they're thoughtful, precise, and built with the user in mind. That same mindset now fuels my development work. Whether it’s streamlining a workflow, automating a process, or building a tool that saves someone time, I thrive on making things better — and knowing I made it happen with code.</>,
        <>For me, full-stack development isn’t just a job title — it’s a bridge between my past and my future. It’s the space where my background in communication, problem-solving, and client empathy intersects with my growing technical expertise. It’s where I feel most empowered to make an impact.</>,
      ],
    },
    {
      title: 'Interests and Inspirations',
      content: [
        <>Outside of coding, I’m an avid skier. There’s something powerful about standing at the top of a mountain, staring down a steep slope, and knowing it’s just you, your training, and your instincts. Skiing has taught me discipline, mental toughness, and how to stay composed under pressure. You learn quickly that progress comes from repetition, patience, and pushing yourself one turn at a time — the same way you level up in software development, one line of code and one bug fix at a time.</>,
        <>Skiing also offers contrast — the quiet calm of the mountains and the adrenaline of the descent. It reminds me to stay balanced: to embrace intensity when needed, but also to take a step back and reflect. That duality shapes how I approach problem-solving in code: intense focus when I’m in the zone, and deliberate thought when I’m debugging or designing architecture.</>,
        <>I’m also deeply committed to lifelong learning. Transitioning from software sales into development hasn’t just been a career move — it’s been a mindset shift. Each new language, framework, or concept is a fresh slope to navigate, and every challenge is an opportunity to improve. That drive to grow — both personally and technically — is what keeps me inspired.</>,
        <>Whether I’m refining a tricky algorithm or carving through fresh snow, I bring the same grit, focus, and passion to both. For me, development and skiing aren't just hobbies or skills — they’re disciplines that shape how I think, how I work, and how I live.</>,
      ],
    },
    {
      title: 'My Vision as a Developer',
      content: [
        <>As an aspiring full-stack developer, I envision building applications that go beyond functionality — tools that solve real problems, are accessible to all users, and feel genuinely satisfying to interact with. I want my work to matter, not just by meeting requirements, but by creating experiences that resonate with people.</>,
        <>In my projects so far — from this very portfolio site and a dynamic <a href="https://github.com/nathangreen1632/socialNetwork" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:text-orange-400 hover:underline hover:opacity-60">social networking platform</a> to CVitaePRO — I’ve focused on building full-stack applications with real-world relevance. These projects have taught me how to structure scalable APIs, design clean UI flows, and connect frontend and backend logic into a cohesive system. But more than that, they’ve reinforced the importance of usability, clarity, and empathy in everything I create.</>,
        <>To me, great software is equal parts engineering and storytelling. It's about understanding the user's journey, anticipating their needs, and making complex functionality feel simple. That’s the lens I bring to every project: How can this experience be more intuitive? How can it make someone’s day a little easier or their work more efficient?</>,
        <>Looking ahead, I want to work on scalable, production-ready systems that support real users — whether that means contributing to open-source projects, collaborating with product teams, or leading technical builds from scratch. I’m particularly interested in developing solutions that combine API engineering, UI design, and AI-powered insights to push what's possible with modern web applications.</>,
        <>At the core of my vision is this belief: technology should empower, not overwhelm. That means writing thoughtful, maintainable code; staying grounded in accessibility and user needs; and always striving to grow as both a developer and a communicator. I'm not just here to build — I'm here to build with purpose.</>,
      ],
    },
    {
      title: 'Projects and Goals',
      content: [
        <>While I’m still early in my development journey, I’ve already built a number of full-stack applications that reflect both my technical growth and my commitment to creating tools that solve real problems. My projects have helped me master core development workflows, work with REST APIs, and build intuitive, responsive interfaces using modern frameworks.</>,
        <>One of my most meaningful projects is <a href="https://www.cvitaepro.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:text-orange-400 hover:underline hover:opacity-60">CVitaePRO</a>, an AI-powered resume and cover letter generator. It leverages OpenAI, features JWT authentication, and offers guided resume editing. I continue to enhance its features with new technologies like ATS scoring and downloadable formats.</>,
        <>I’ve also created a <a href="https://kanban-board-t5ud.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:text-orange-400 hover:underline hover:opacity-60">Kanban Board</a> with local storage and drag-and-drop task management, a <a href="https://github.com/nathangreen1632/socialNetwork" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:text-orange-400 hover:underline hover:opacity-60">SocialNetwork App</a> focused on user interaction and activity feeds, and this <a href="/portfolio" className="text-blue-700 hover:text-blue-900 dark:text-orange-400 hover:underline hover:opacity-60">portfolio site</a> you’re reading now — all coded in React with TypeScript and tailored for real usability.</>,
        <>Most recently, I launched <a href="https://recipe-planner-1632.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:text-orange-400 hover:underline hover:opacity-60">Recipe Planner</a>, a user-friendly app that helps individuals organize meals, browse suggestions, and create structured grocery lists — blending frontend clarity with scalable backend logic.</>,
        <>Looking ahead, my goal is to deepen my front-end skills with both React and Angular, while continuing to expand my backend capabilities using Python and MongoDB. I’m excited to explore tech stacks that allow me to build powerful, data-driven applications — and I’m especially interested in projects that blend frontend precision with backend complexity.</>,
        <>Eventually, I want to contribute to open-source projects and collaborate with other developers who care about writing clean code, building inclusive applications, and pushing the web forward. Whether it’s building smarter tools, cleaner interfaces, or more secure systems, I’m all in on becoming the kind of engineer who builds with intention and impact.</>,
      ],
    },
    {
      title: 'Why This Journey Matters',
      content: [
        <>For me, this shift from software sales to full-stack development isn’t just a career move—it’s a reflection of who I am and who I’m becoming. I spent years on the front lines of tech, translating complex tools into solutions for clients. That experience taught me how software can make or break a business, but it also made me curious: what if I could be the one building the solution instead of just selling it?</>,
        <>That question sparked a transformation. I didn’t come from a traditional coding background. Instead, I brought persistence, client empathy, and a real-world understanding of business needs into a new arena: software engineering. At <a href="https://www.utsa.edu" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:text-orange-400 hover:underline hover:opacity-60">UTSA</a>, I began diving into full-stack development with an emphasis on practical impact—apps that solve real user problems and tools that don’t just work but <em>work well</em>.</>,
        <>What fuels me today is the limitless potential of technology. I’m not just learning to code—I’m learning to create, to collaborate, and to contribute. From sales calls to SQL queries, projects like CVitaePRO, my Kanban Board, and Recipe Planner are how I turn ideas into working software that serves real people.</>,
        <>I believe great software comes from diverse experience and intentional thinking. My path into development may be non-traditional, but it’s exactly that blend of business, communication, and code that I bring to every project I touch.</>,
      ],
    },
    {
      title: 'In Closing',
      content: [
        <>Thanks for reading—I’m Jonathan Green, and I’m here to build meaningful software with heart and precision. From AI resume tools to personal productivity apps, I approach every project with curiosity, intention, and a desire to make a difference.</>,
        <>If you’re a fellow developer, mentor, or someone curious about breaking into tech, I’d love to connect. Let’s chat, collaborate, or just carve fresh ideas together—on the web or on the mountain.</>,
        <>You can reach me directly through the <a href="/contact" className="underline text-blue-700 hover:text-blue-900 dark:text-orange-400 hover:underline hover:opacity-60">Contact Me</a> page. Let's build something worth sharing.</>,
      ],
    },
  ];

  return (
    <section className="px-6 py-6">
      <div id="about-me" className="flex flex-col items-center text-center mb-6">
        <motion.img
          src="/profile.png"
          alt="Jonathan Green"
          width={400}
          height={600}
          loading="lazy"
          className="transition-transform duration-500 ease-in-out hover:motion-safe:scale-105 hover:motion-safe:-translate-y-1"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.8 }}
        />

      </div>

      {sections.map((section, i) => (
        <motion.section
          key={section.title}
          className="bg-[#B3C4BE] dark:bg-black text-[#38302E] dark:text-[#ccdad1] px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 md:py-8 lg:py-12 rounded-md text-center my-8 dark:sm:my-4 dark:md:my-6 shadow-md w-full sm:w-[90%] md:w-[90%] mx-auto"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.25 }}
          variants={shouldReduceMotion ? undefined : fadeInVariants}
          custom={i}
        >
          <motion.h2
            className="text-2xl font-extrabold text-center mb-4 relative w-fit mx-auto after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.25 }}
          >
            {section.title}
          </motion.h2>
          {section.content.map((para, idx) => (
            <motion.p
              key={`${section.title}-para-${idx}`}
              className="text-left text-lg font-normal mb-4"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? undefined : { duration: 0.25, delay: idx * 0.075 }}
              viewport={shouldReduceMotion ? undefined : { once: true }}
            >
              {para}
            </motion.p>
          ))}
        </motion.section>
      ))}
    </section>
  );
};

export default AboutMe;
