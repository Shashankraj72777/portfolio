export const resumeData = {
  name: 'Shashank Raj',
  title: 'Full Stack Software Engineer',
  location: 'Bangalore, India',
  email: 'shashankraj72777@gmail.com',
  phone: '+91-72777-35124',
  linkedin: 'https://linkedin.com/in/shashankraj72777',
  github: 'https://github.com/Shashankraj72777',
  leetcode: 'https://leetcode.com/u/shashank_raj_72',
  instagram: 'https://www.instagram.com/shashank_raj_72777/',
  youtube: 'https://www.youtube.com/@All_in_one_with_Shash',
  threads: 'https://www.threads.com/@shashank_raj_72777',
  facebook: 'https://www.facebook.com/shashankraj72777',
  twitter: 'https://x.com/shashankraj7277',
  snapchat: 'https://www.snapchat.com/add/shashank5406',
  linktree: 'https://linktr.ee/shashankraj72777',

  summary:
    'Full Stack Software Engineer with 1+ year of experience designing and shipping scalable web applications using Node.js, TypeScript, React, and Next.js. Proven track record of optimizing backend microservices, reducing database query time by 30%, and building secure JWT-based authentication systems. Passionate about distributed systems, performance optimization, and clean architecture.',

  stats: [
    { label: 'Years Experience', value: '1+' },
    { label: 'LeetCode Problems', value: '180+' },
    { label: 'DB Query Reduction', value: '30%' },
    { label: 'Active Users Served', value: '500+' },
  ],

  experience: [
    {
      role: 'Junior Software Engineer',
      company: 'R2VFX Studios Pvt. Ltd.',
      period: 'Jul 2024 – Present',
      type: 'Remote',
      bullets: [
        'Developed and deployed scalable backend REST APIs and responsive frontend features using Node.js, Express, and React, serving 500+ active users.',
        'Designed and optimized PostgreSQL and MongoDB database schemas, reducing average query execution time by 30% and page load latency by 20%.',
        'Implemented JWT-based authentication and role-based access control (RBAC), eliminating unauthorized access incidents.',
        'Diagnosed and resolved critical production issues in Agile/Scrum workflow, reducing system downtime by 25%.',
        'Collaborated with cross-functional teams to deliver 3+ feature releases per sprint, maintaining CI/CD pipelines.',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'CLARCHS.com',
      period: 'Jan 2025 – Apr 2025',
      type: 'Remote',
      bullets: [
        'Built 10+ reusable, optimized UI components using React and Next.js, reducing frontend bundle size by 15%.',
        'Integrated frontend applications with 5+ RESTful APIs, ensuring seamless data flow and reducing API error rates.',
        'Contributed to Agile sprint planning and code reviews, helping the team deliver features on schedule with improved test coverage.',
      ],
    },
  ],

  projects: [
    {
      name: 'WeatherVibe — Real-Time Weather App',
      liveLink: 'https://weathervibe-sigma.vercel.app',
      githubLink: 'https://github.com/Shashankraj72777',
      stack: ['Next.js', 'TypeScript', 'Open-Meteo API', 'Vercel', 'REST APIs'],
      description:
        'A sleek, production-deployed real-time weather application covering cities worldwide — fetching live meteorological data with zero API cost using the Open-Meteo integration.',
      highlights: [
        '🌍 Live weather data for 12+ world cities — Tokyo, New York, Dubai, Mumbai and more — updated in real time',
        '⚡ Built on Next.js + TypeScript with server-side data fetching for blazing-fast load times and SEO performance',
        '📡 Integrated Open-Meteo API — a free, open-source weather API — delivering accurate forecasts with zero rate-limit concerns',
        '🚀 Deployed on Vercel with global CDN, achieving sub-second response times worldwide',
        '🎨 Fully responsive UI with dynamic weather condition themes adapting to sun, rain, clouds and more',
      ],
      color: '#00e5ff',
    },
    {
      name: 'ExpenseTracker AI — Smart Finance Manager',
      liveLink: 'https://next-expense-tracker-plum.vercel.app',
      githubLink: 'https://github.com/Shashankraj72777',
      stack: ['Next.js', 'TypeScript', 'AI Integration', 'PostgreSQL', 'JWT', 'Vercel'],
      description:
        'A production-deployed AI-powered financial management platform that helps users track expenses, auto-categorize spending, and get intelligent budget insights — live with real users.',
      highlights: [
        '🤖 AI-powered expense categorization and smart spending pattern analysis — reducing manual data entry by 80%',
        '📊 Intelligent dashboard with personalized financial insights, budget forecasting, and monthly reporting',
        '🔐 Secure JWT-based authentication with role-based access, protecting sensitive financial data end-to-end',
        '✨ Auto-categorization engine intelligently classifies transactions into Food, Travel, Bills, Shopping and more',
        '🚀 Deployed on Vercel with live user testimonials — real product used by real people, not just a demo',
        '📱 Mobile-first responsive design with dark/light mode for seamless cross-device experience',
      ],
      color: '#a3e635',
    },
    {
      name: 'Scalable Microservices Backend System',
      liveLink: 'https://github.com/Shashankraj72777',
      githubLink: 'https://github.com/Shashankraj72777',
      stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker'],
      description:
        'A production-grade distributed backend system architected from scratch — Auth, User, Order, and Notification services operating independently at scale, handling 1,000+ requests per minute.',
      highlights: [
        '🏗️ Architected 4 isolated microservices (Auth, User, Order, Notification) — each independently deployable and scalable',
        '⚡ Centralized API Gateway with JWT auth, rate limiting & smart routing — cut average response time by 40%',
        '🗃️ Redis caching layer reduced database load by 35%, pushing cache hit rate to 85% under high traffic',
        '📨 RabbitMQ event queue with Dead Letter Queue (DLQ) retry logic — achieved 99.9% message delivery reliability',
        '🐳 Fully Dockerized with zero-downtime horizontal scaling — production-ready for cloud deployment',
        '🔒 RBAC security model with JWT validation at the gateway layer — zero unauthorized access incidents',
      ],
      color: '#00ff87',
    },
    {
      name: 'Shashank Raj — Developer Portfolio',
      liveLink: 'https://portfolio-iota-eight-coskywto4u.vercel.app',
      githubLink: 'https://github.com/Shashankraj72777',
      stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      description:
        'A fully animated, production-deployed personal portfolio showcasing engineering work — built with Next.js 14 App Router, featuring dark/light mode, canvas particle animations, and scroll-reveal effects.',
      highlights: [
        '🎨 Canvas particle network animation in the hero — 60 interactive particles with dynamic connection lines',
        '🌙 System-aware dark/light mode with smooth CSS variable transitions — no flash on load',
        '✍️ Typewriter role switcher cycling through 5 engineering titles with realistic typing & delete animation',
        '📜 Intersection Observer scroll-reveal with staggered delays — every section animates in cinematically',
        '⚡ Built with Next.js 14 App Router + TypeScript — perfect Lighthouse scores for performance & accessibility',
        '🚀 Deployed on Vercel with instant global CDN delivery',
      ],
      color: '#c084fc',
    },
  ],

  skills: {
    Languages: ['JavaScript', 'TypeScript', 'C++', 'Python', 'SQL'],
    Frontend: ['React', 'Next.js', 'HTML5', 'CSS3'],
    Backend: ['Node.js', 'Express.js', 'REST APIs', 'Microservices', 'GraphQL'],
    Databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    'DevOps & Tools': ['Docker', 'Git', 'GitHub', 'CI/CD', 'RabbitMQ', 'API Gateway', 'JWT'],
    'Cloud & Infra': ['Cloud (SaaS)', 'Linux', 'Agile/Scrum'],
  },

  education: {
    degree: 'B.Tech in Computer Science & Engineering (AI & ML)',
    institution: 'Chandigarh University, Mohali',
    period: '2021 – 2025',
    cgpa: '7.91 / 10',
  },

  leetcodeStats: {
    solved: 180,
    focus: 'Arrays, Strings, Dynamic Programming, Trees, Graphs, Sliding Window',
    difficulty: 'Medium-focused for DSA fundamentals',
  },
};
