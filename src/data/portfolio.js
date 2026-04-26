export const portfolio = {
  hero: {
    eyebrow: "Available for freelance, and collaborations",
    name: "Muhammad Rameez Khan",
    role: "MERN Stack Developer",
    description:
      "I build responsive and clean full-stack web applications with a strong focus on practical UI, solid front-end structure, and scalable product thinking.",
    highlights: [
      "Responsive product interfaces",
      "MERN stack applications",
      "Supabase and database integration",
      "AI-assisted tools and workflows",
    ],
    stats: [
      { value: "2+", label: "Years of hands-on development" },
      { value: "10", label: "Portfolio projects and experiments" },
      { value: "3.5", label: "Current BSCS CGPA" },
    ],
    note: "Currently expanding into backend architecture, cloud concepts, and high-performance web delivery.",
  },
  about: {
    title: "About Me",
    intro:
      "I am a passionate MERN stack developer and a final-year BSCS student at Federal Urdu University. My work combines practical full-stack problem solving with a strong focus on interface quality, responsiveness, and maintainable code.",
    body:
      "I build with HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, and I also work with Supabase and Oracle-based database concepts. I enjoy turning ideas into useful digital products, whether that means shipping a polished landing page, a dashboard, or an AI-powered workflow.",
    focusAreas: [
      {
        title: "Full-stack development",
        description: "Building front-end experiences and the APIs, auth flows, and data models behind them.",
      },
      {
        title: "Product-minded UI",
        description: "Designing interfaces that are clean, easy to understand, and comfortable across devices.",
      },
      {
        title: "Continuous learning",
        description: "Actively deepening my skills in scalable architecture, cloud concepts, and modern tooling.",
      },
    ],
    facts: [
      { label: "Name", value: "Muhammad Rameez Khan" },
      { label: "Based in", value: "Karachi, Pakistan" },
      { label: "Phone", value: "+92 305 3277220" },
      { label: "Email", value: "mrameezkhan1785@gmail.com" },
      { label: "Current role", value: "Student and developer" },
      { label: "Open to", value: "Freelance and collaborations" },
    ],
  },
  skills: [
    {
      title: "HTML, CSS, and responsive layout",
      level: 90,
      description: "Strong foundation in semantic markup, responsive design systems, layout composition, and accessibility-minded styling.",
      tools: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive design"],
    },
    {
      title: "JavaScript and React.js",
      level: 82,
      description: "Comfortable building dynamic interfaces, reusable components, stateful UI, and polished client-side interactions.",
      tools: ["JavaScript", "ES6+", "React.js", "Vite", "Component architecture"],
    },
    {
      title: "Node.js and Express.js",
      level: 72,
      description: "Experience creating server-side applications, API routes, middleware, and practical backend flows for full-stack apps.",
      tools: ["Node.js", "Express.js", "REST APIs", "Middleware", "Authentication"],
    },
    {
      title: "Data and backend services",
      level: 68,
      description: "Working knowledge of document databases, Supabase integration, and structured data modeling for real projects.",
      tools: ["MongoDB", "Supabase", "Oracle SQL", "Database design", "CRUD flows"],
    },
    {
      title: "Version control and delivery",
      level: 74,
      description: "Using Git and GitHub for clean version control, iteration, collaboration, and deployment-ready project workflows.",
      tools: ["Git", "GitHub", "Netlify", "Project structure", "Debugging"],
    },
  ],
  journey: {
    experience: [
      {
        title: "Full-stack MERN Developer",
        place: "Personal and academic projects",
        period: "2023 - Present",
        description:
          "Building responsive and interactive applications through self-initiated learning and practical project work.",
        bullets: [
          "Developed multiple projects using MongoDB, Express.js, React.js, and Node.js.",
          "Implemented reusable UI patterns and performance-minded front-end interactions.",
          "Used GitHub for source control, iteration, and project sharing.",
          "Studied AWS cloud concepts as part of Grid and Cloud Computing coursework.",
        ],
      },
    ],
    education: [
      {
        title: "Modern Web and App Development",
        place: "SMIT (Saylani Mass IT Program)",
        period: "Nov 2024 - Present",
        description: "Hands-on learning focused on modern web technologies and practical application development.",
      },
      {
        title: "Bachelor of Science in Computer Science",
        place: "Federal Urdu University",
        period: "Jan 2023 - Present",
        description: "Final-year student in 7th semester with a current CGPA of 3.5, focused on web development and programming.",
      },
      {
        title: "Higher Secondary Certificate",
        place: "Cadet College Sanghar",
        period: "Jul 2020 - Jun 2022",
        description: "Completed higher secondary studies with 82.27 percent.",
      },
    ],
    quickFacts: [
      "MERN stack development",
      "Responsive UI engineering",
      "Supabase integration",
      "AI chatbot experimentation",
    ],
  },
  projects: [
    {
      title: "KhanTraders Fishmeal",
      category: "full-stack",
      featured: true,
      image: "/images/projects/khantraders.png",
      description:
        "A full-stack e-commerce platform with a robust admin dashboard, product management, order handling, and responsive shopping experience.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Supabase"],
      liveUrl: "https://khantraders.netlify.app/",
      repoUrl: "https://github.com/m-rameezkhan/khan-traders-ecommers-frontend",
    },
    {
      title: "PitchGenAI",
      category: "ai",
      featured: true,
      image: "/images/projects/pitchgenai.png",
      description:
        "An AI business chatbot that generates startup names, taglines, and pitch ideas through an interactive dashboard experience.",
      tech: ["React", "Gemini API", "Dashboard UI", "Prompt flows"],
      liveUrl: "https://rameez-al-chatbot.netlify.app/",
      repoUrl: "https://github.com/m-rameezkhan/AI-Chatbot",
    },
    {
      title: "Food Panda Clone",
      category: "frontend",
      featured: true,
      image: "/images/projects/food-panda.png",
      description:
        "A responsive food ordering experience with restaurant and customer flows, interactive cart handling, and LocalStorage-powered state.",
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      liveUrl: "https://rameez-foodpanda.netlify.app",
      repoUrl: "https://github.com/m-rameezkhan/Food-Panda",
    },
    {
      title: "Al Mustafa Academy",
      category: "frontend",
      featured: false,
      image: "/images/projects/al-mustafa.png",
      description:
        "A responsive educational website designed to showcase clear structure, mobile-friendly layouts, and front-end craft.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive design"],
      liveUrl: "https://al-mustafa-academy.netlify.app",
      repoUrl: "https://github.com/m-rameezkhan/al-mustafa",
    },
    {
      title: "Khan Foods Website",
      category: "frontend",
      featured: false,
      image: "/images/projects/khan-foods.png",
      description:
        "A responsive e-commerce website built with front-end technologies to deliver a clean browsing and product discovery experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://khan-foods.netlify.app",
      repoUrl: "https://github.com/m-rameezkhan/khan-foods",
    },
    {
      title: "Netflix Clone",
      category: "frontend",
      featured: false,
      image: "/images/projects/netflix.avif",
      description:
        "A smooth, animation-driven front-end clone inspired by Netflix. The live site is intentionally not published because of copyright concerns.",
      tech: ["HTML", "CSS", "JavaScript", "Animation"],
      liveUrl: null,
      repoUrl: "https://github.com/m-rameezkhan/netflix-clone",
    },
    {
      title: "Online Quiz Application",
      category: "mini",
      featured: false,
      image: "/images/projects/quiz-application.jpg",
      description:
        "A quiz app with a 30-second timer per question, reset controls, and a graphical score summary powered by Fetch API.",
      tech: ["HTML", "CSS", "JavaScript", "Fetch API"],
      liveUrl: "https://rameez-quiz-app.netlify.app",
      repoUrl: "https://github.com/m-rameezkhan/Quiz-Application",
    },
    {
      title: "Stopwatch App",
      category: "mini",
      featured: false,
      image: "/images/projects/stopwatch-app.png",
      description:
        "A functional stopwatch with start, pause, and reset controls presented through a simple and readable UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://rameez-stopwatch.netlify.app",
      repoUrl: "https://github.com/m-rameezkhan/Stopwatch",
    },
    {
      title: "Calculator App",
      category: "mini",
      featured: false,
      image: "/images/projects/calculator-app.png",
      description:
        "A simple calculator focused on clean layout, responsive sizing, and intuitive arithmetic operations.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveUrl: null,
      repoUrl: "https://github.com/m-rameezkhan/Calculator",
    },
    {
      title: "Todo List",
      category: "mini",
      featured: false,
      image: "/images/projects/todo-list-thumbnail.png",
      description:
        "A task management app created with Flask and SQLite, featuring create, update, and delete flows in a clean interface.",
      tech: ["Python", "Flask", "SQLite", "Flask-SQLAlchemy"],
      liveUrl: null,
      repoUrl: "https://github.com/m-rameezkhan/Todo-List",
    },
  ],
  services: [
    {
      title: "Full-stack web development",
      description: "End-to-end applications with responsive front ends, reliable APIs, and practical data flows.",
      icon: "code",
    },
    {
      title: "Responsive UI design",
      description: "Interfaces designed to feel smooth, modern, and usable across desktop, tablet, and mobile screens.",
      icon: "layout",
    },
    {
      title: "React and JavaScript apps",
      description: "Component-driven client experiences built for maintainability, speed, and long-term growth.",
      icon: "layers",
    },
    {
      title: "Backend and database integration",
      description: "Authentication, CRUD workflows, and data handling with Node.js, Express.js, MongoDB, and Supabase.",
      icon: "database",
    },
    {
      title: "Performance and optimization",
      description: "Fast-loading experiences with clean code, efficient rendering, and thoughtful UI behavior.",
      icon: "rocket",
    },
    {
      title: "AI-powered product experiments",
      description: "Interactive tools and chatbot experiences that integrate modern APIs into useful workflows.",
      icon: "spark",
    },
  ],
  faqs: [
    {
      question: "What technologies do you use most often?",
      answer:
        "My core stack is MongoDB, Express.js, React.js, and Node.js. I also work with Supabase, JavaScript tooling, and AI APIs when the project needs them.",
    },
    {
      question: "Do you build mobile-friendly applications?",
      answer:
        "Yes. Responsive design is a standard part of my process, so I build experiences that feel intentional on desktop, tablet, and mobile devices.",
    },
    {
      question: "Can you handle both front-end and back-end work?",
      answer:
        "Yes. I work across UI, client logic, server routes, APIs, and database integration, depending on what the project requires.",
    },
    {
      question: "Do you work with React professionally?",
      answer:
        "I actively use React.js for component-based interfaces and reusable architecture, especially when building dashboards and single-page web apps.",
    },
    {
      question: "Have you built AI or automation projects?",
      answer:
        "Yes. Projects like PitchGenAI show my interest in chat-based interfaces, prompt workflows, and integrating AI APIs into practical products.",
    },
    {
      question: "Are you available for freelance or collaboration work?",
      answer:
        "Yes. I am open to freelance work, internships, and collaborative builds where I can contribute with full-stack and front-end development.",
    },
    {
      question: "How can someone reach out quickly?",
      answer:
        "The fastest way is by email or LinkedIn. You can also use the contact form below to open a pre-filled email draft from the site.",
    },
  ],
  contact: {
    email: "mrameezkhan1785@gmail.com",
    phone: "+92 305 3277220",
    location: "Gulshan-e-Iqbal, Karachi, Pakistan",
    mapUrl:
      "https://www.google.com/maps/place/SMIT+Gulshan+Campus/@24.9257265,67.0899677,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33f60a0781265:0x2befaba123014ab1!8m2!3d24.9257265!4d67.0899677!16s%2Fg%2F11thqy9094?entry=ttu",
    socials: [
      { label: "GitHub", url: "https://github.com/m-rameezkhan" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/m-rameezkhan" },
      { label: "Instagram", url: "https://www.instagram.com/mrameezkhan_" },
      { label: "Facebook", url: "https://www.facebook.com/MRameezKhan85" },
    ],
  },
};
