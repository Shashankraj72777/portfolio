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
      name: 'Scalable Microservices Backend System',
      link: 'https://github.com/Shashankraj72777',
      stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker'],
      description:
        'Production-grade microservices system (Auth, User, Order, Notification) handling 1,000+ requests per minute across isolated services.',
      highlights: [
        'Centralized API Gateway for routing, rate limiting, and JWT auth — 40% faster response time',
        'Redis caching layer reducing database load by 35%, cache hit rate to 85%',
        'RabbitMQ with Dead Letter Queues achieving 99.9% message delivery reliability',
        'Containerized with Docker, zero-downtime horizontal scaling',
      ],
      color: '#00ff87',
    },
    {
      name: 'Expense Tracker Web App',
      link: 'https://github.com/Shashankraj72777',
      stack: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'REST APIs'],
      description:
        'Full-featured expense management backend supporting multi-user tracking of 500+ transactions with category filtering and monthly reporting.',
      highlights: [
        'Normalized relational schema with efficient CRUD APIs',
        'Input validation reducing invalid data entries by 90%',
        'JWT authentication with middleware-based session security',
      ],
      color: '#00e5ff',
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
