// All content data — no emojis, icon names reference Lucide React

export const DATA = {
  hero: {
    eyebrow: 'Software Engineer Portfolio',
    name: 'Tareq Orabi',
    title: 'Software Engineer',
    headline: 'Backend architecture, databases, and deployment.',
    subheadline:
      'I’m Tareq Orabi, a software engineer from Amman. I work mainly on backend systems, databases, APIs, deployment, and product execution. This portfolio is a record of the systems I worked on and the technical decisions behind them.',
    primaryCta: {
      label: 'View My Work',
      href: '#work',
      icon: 'ArrowRight',
    },
    secondaryCta: {
      label: 'Get in Touch',
      href: '#contact',
      icon: 'Send',
    },
    highlights: [
      { label: 'Backend Systems', icon: 'Server' },
      { label: 'Databases', icon: 'Database' },
      { label: 'API Development', icon: 'Waypoints' },
      { label: 'Deployment', icon: 'Rocket' },
    ],
  },

  heroVideo: {
    enabled: true,
    src: '/videos/hero-surreal.mp4',
    poster: '/videos/hero-poster.jpg',
    label: 'Surreal product motion',
    cards: [
      {
        title: 'OctaClinic',
        meta: 'Production system',
        icon: 'HeartPulse',
        accent: '#6ED6FF',
      },
      {
        title: 'Octagram',
        meta: 'Software company',
        icon: 'Building2',
        accent: '#B8A7FF',
      },
      {
        title: 'Think',
        meta: 'Product in development',
        icon: 'Brain',
        accent: '#E8C98F',
      },
      {
        title: 'Medical Club',
        meta: 'Platform in development',
        icon: 'Stethoscope',
        accent: '#7DDCC3',
      },
    ],
  },

  navLinks: [
    { label: 'Work', href: '#work' },
    { label: 'Octagram', href: '#octagram' },
    { label: 'Skills', href: '#stack' },
    { label: 'Pipeline', href: '#pipeline' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],

  proofBar: [
    { value: 'Octagram', label: 'Founder' },
    { value: '1', label: 'Production System' },
    { value: '3', label: 'Active Product Initiatives' },
    { value: 'Backend', label: 'Primary Engineering Focus' },
  ],

  skills: [
    {
      category: 'Backend Engineering',
      icon: 'Server',
      accent: '#2A8FBF',
      items: [
        'Java',
        'Spring Boot',
        'C#',
        'ASP.NET Core',
        'REST APIs',
        'JWT Authentication',
        'Role-Based Access Control',
      ],
    },
    {
      category: 'Databases',
      icon: 'Database',
      accent: '#6ED6FF',
      items: [
        'PostgreSQL',
        'MySQL',
        'Firebase / NoSQL',
        'Database Modeling',
        'Migrations',
        'Backup Planning',
        'Data Structure Planning',
      ],
    },
    {
      category: 'DevOps & Deployment',
      icon: 'Cloud',
      accent: '#B8A7FF',
      items: [
        'Docker',
        'Linux VPS',
        'Nginx',
        'SSL / TLS',
        'Reverse Proxy',
        'Production Deployment',
        'Server Configuration',
        'Basic Bash',
      ],
    },

    {
      category: 'AI & Automation',
      icon: 'Cpu',
      accent: '#7DDCC3',
      items: [
        'Semantic Kernel',
        'OpenAI API',
        'Automation Workflows',
        'AI Orchestration',
        'Prompt Engineering',
      ],
    },
    {
      category: 'Product & Founder Skills',
      icon: 'Compass',
      accent: '#B8A7FF',
      items: [
        'Product Thinking',
        'Client Communication',
        'Requirements Analysis',
        'Technical Proposals',
        'SaaS Planning',
        'Delivery Management',
        'Team Direction',
      ],
    },
  ],

  experience: [
    {
      role: 'Founder / Software Engineer',
      company: 'Octagram',
      period: '2026 — Present',
      type: 'founding',
      icon: 'Building2',
      accent: '#B8A7FF',
      points: [
        { label: 'Company Building', text: 'Founded Octagram to build software products and client systems.' },
        { label: 'Product Direction', text: 'Lead product strategy, feature planning, and technical roadmaps across multiple active initiatives.' },
        { label: 'Backend & Architecture', text: 'Design backend systems, database models, and API structures for client-facing products.' },
        { label: 'Client Delivery', text: 'Handle client communication, requirements analysis, proposal writing, and delivery planning.' },
        { label: 'Team & Operations', text: 'Direct technical planning, coordinate contributors, and maintain quality standards across projects.' },
      ],
    },
    {
      role: 'Platform Developer / Technical Partner',
      company: 'Medical Club Platform — via Octagram',
      period: '2026 — Present',
      type: 'product',
      icon: 'Stethoscope',
      accent: '#7DDCC3',
      points: [
        { label: 'Contracted Project', text: 'Engaged to build a platform for medical student communities, starting with university-level educational content and events.' },
        { label: 'Platform Design', text: 'Defining the technical architecture, data structure, and feature set for the first platform version.' },
        { label: 'Technical Planning', text: 'Working on content management, student dashboards, and scalable foundational infrastructure.' },
      ],
    },
    {
      role: 'Product Lead / Backend Developer',
      company: 'Think — Educational Platform',
      period: '2025 — Present',
      type: 'product',
      icon: 'Brain',
      accent: '#E8C98F',
      points: [
        { label: 'Product Concept', text: 'Designing Think as an educational platform to help students build stronger software engineering foundations through structured learning paths.' },
        { label: 'MVP Architecture', text: 'Planning backend architecture with ASP.NET Core and PostgreSQL, with flexible content structures for learning paths and technical tasks.' },
        { label: 'Product Direction', text: 'Leading feature definition, learning path structure, and technical planning for the MVP.' },
        { label: 'AI Direction', text: 'Exploring future AI-assisted learning features using tools such as Semantic Kernel and OpenAI.' },
      ],
    },
    {
      role: 'Backend Developer',
      company: 'OctaClinic Management System — via Octagram',
      period: '2026',
      type: 'product',
      icon: 'HeartPulse',
      accent: '#6ED6FF',
      points: [
        { label: 'Production System', text: 'Built and deployed a clinic management system for a real clinic client in Jordan.' },
        { label: 'Backend Architecture', text: 'Designed and implemented backend features with Spring Boot and Java, covering patients, bookings, payments, packages, roles, and invoices.' },
        { label: 'Database Design', text: 'Structured and maintained PostgreSQL models, relations, migrations, and operational data flows.' },
        { label: 'Security', text: 'Implemented JWT-based authentication and role-based access control for Admin, Nurse, Accountant, and Patient roles.' },
        { label: 'Deployment & Operations', text: 'Deployed on a Linux VPS using Docker and Nginx, configured SSL, supported production issues, and maintained backup awareness.' },
      ],
    },
    {
      role: 'Software Engineer — Development Department',
      company: 'SMT Center / Security Management Technology',
      period: 'Jul 2025 — Jan 2026',
      type: 'engineering',
      icon: 'Shield',
      accent: '#172033',
      points: [
        { label: 'IAM Contribution', text: 'Contributed to Identity and Access Management related work using Java, with focus on authentication and authorization flows.' },
        { label: 'Backend Support', text: 'Debugged and maintained ASP.NET Core backend services within the development team.' },
        { label: 'Code Quality', text: 'Participated in code cleanup, refactoring, and technical analysis to improve maintainability.' },
        { label: 'Team Collaboration', text: 'Worked within a structured development environment and followed team processes and technical standards.' },
      ],
    },
  ],

  projects: [
    {
      title: 'OctaClinic Management System',
      badge: 'live',
      badgeLabel: 'Production',
      role: 'Backend Developer',
      accent: '#6ED6FF',
      accentSecondary: '#B8A7FF',
      featured: true,
      icon: 'HeartPulse',
      link: 'https://sixsenses.clinic',
      image: '/images/octaclinic.png',
      tagline: 'A clinic management system built through Octagram.',
      story:
        'I built the backend and deployment infrastructure for a clinic management system using Spring Boot and PostgreSQL. It handles authentication, roles, bookings, patients, payments, and invoices. It was deployed on a Linux VPS using Docker and Nginx with SSL.',
      problem: 'A clinic needed an operational system for their daily workflows.',
      myRole: 'Backend architecture, database design, API development, and deployment.',
      result: 'A functional clinic management system currently used internally.',
      engineeringValue: 'Configured containerized deployment and automated access validation.',
      built: [
        'Backend architecture with Spring Boot and Java',
        'PostgreSQL database design and modeling',
        'JWT authentication and role-based access control',
        'REST APIs for clinic operations',
        'Linux VPS deployment with Docker and Nginx',
        'SSL configuration and production support',
      ],
      tech: [
        'Spring Boot',
        'Java',
        'PostgreSQL',
        'Docker',
        'Nginx',
        'JWT',
        'RBAC',
        'Linux VPS',
        'SSL',
      ],
      metrics: [
        { value: 'Live', label: 'Status' },
        { value: 'Jordan', label: 'Client Location' },
        { value: 'VPS', label: 'Deployment' },
      ],
    },
    {
      title: 'Octagram',
      badge: 'live',
      badgeLabel: 'Company',
      role: 'Founder',
      accent: '#B8A7FF',
      accentSecondary: '#6ED6FF',
      featured: false,
      icon: 'Building2',
      tagline: 'My company for building software products and client systems.',
      story:
        'Octagram is the company I started to build software products and client systems. It is still early, but it represents the direction I want to grow in: product thinking, backend systems, client delivery, and technical ownership.',
      problem: 'I wanted a structured entity to take on client work and develop proprietary products.',
      myRole: 'Founder and Lead Engineer, handling backend development, architecture, and client communication.',
      result: 'The foundation for my ongoing and future engineering work.',
      engineeringValue: 'Gaining practical experience in full-cycle product delivery, from requirements to deployment.',
      built: [
        'Company positioning and service direction',
        'Client communication and proposal writing',
        'Product planning and delivery management',
        'Backend architecture for active projects',
      ],
      tech: [
        'Software Company',
        'Product Leadership',
        'Backend Systems',
        'Client Delivery',
        'SaaS Planning',
      ],
      metrics: [
        { value: '2026', label: 'Founded' },
        { value: '3', label: 'Active Initiatives' },
        { value: '1', label: 'Production System' },
      ],
    },
    {
      title: 'Think — Educational Platform',
      badge: 'building',
      badgeLabel: 'In Development',
      role: 'Product Lead / Backend Developer',
      accent: '#E8C98F',
      accentSecondary: '#B8A7FF',
      featured: false,
      icon: 'Brain',
      tagline: 'An educational platform for software engineering foundations.',
      story:
        'An educational platform in development focused on helping students understand software engineering foundations, backend concepts, and structured learning.',
      problem: 'Students often struggle to transition from simple coding exercises to understanding structured production environments, systems, and APIs.',
      myRole: 'Product Lead and Backend Architect, designing learning paths, PostgreSQL relational schemas, and container layout.',
      result: 'Interactive platform MVP currently in database and backend development stage.',
      engineeringValue: 'Structured a scalable content-schema to isolate tasks and paths, easing educational database queries.',
      built: [
        'Product concept and MVP definition',
        'Learning path structure',
        'Backend architecture planning',
        'Future AI-assisted learning direction',
      ],
      tech: [
        'ASP.NET Core',
        'C#',
        'PostgreSQL',
        'Learning Paths',
        'EdTech',
      ],
    },
    {
      title: 'Medical Club Platform',
      badge: 'building',
      badgeLabel: 'In Development',
      role: 'Platform Developer / Technical Partner',
      accent: '#7DDCC3',
      accentSecondary: '#6ED6FF',
      featured: false,
      icon: 'Stethoscope',
      tagline: 'A platform for medical student communities.',
      story:
        'A contracted platform in development for medical student communities, with focus on content, events, dashboards, and student resources.',
      problem: 'Medical student organizations need a centralized hub to coordinate dashboard tools, lecture folders, calendar events, and member directories.',
      myRole: 'Platform Architect and Technical Partner, designing content workflows and NoSQL model structure.',
      result: 'Platform logic designed and contracted for development under Octagram.',
      engineeringValue: 'Modeled optimized document hierarchies in Firebase to minimize reads/writes and improve frontend sync latency.',
      built: [
        'Platform scope planning',
        'Dashboard and content structure',
        'Student community feature planning',
        'Technical foundation for future expansion',
      ],
      tech: [
        '.NET',
        'Firebase',
        'NoSQL',
        'Dashboard',
        'Content Management',
      ],
    },
  ],

  octagram: {
    eyebrow: 'Company',
    title: 'Octagram',
    description:
      'Octagram is the company I started to build software products and client systems. It is still early, but it represents the direction I want to grow in: product thinking, backend systems, client delivery, and technical ownership.',
    statement:
      'My goal is to continue growing my technical foundation while taking ownership of the full product lifecycle.',
    values: [
      {
        title: 'Real Products',
        description: 'Focusing on software that solves operational problems and serves actual users.',
        icon: 'Layers',
      },
      {
        title: 'Strong Execution',
        description: 'Handling requirements, architecture, delivery, deployment, and support.',
        icon: 'Rocket',
      },
      {
        title: 'Usability',
        description: 'Software should feel clear, usable, and simple to understand.',
        icon: 'Sparkles',
      },
    ],
  },

  octagramServices: [
    { name: 'Web Development', icon: 'Globe' },
    { name: 'Mobile Apps', icon: 'Smartphone' },
    { name: 'AI & Automation', icon: 'Cpu' },
    { name: 'UI/UX Design', icon: 'Palette' },
    { name: 'System Dashboards', icon: 'LayoutDashboard' },
    { name: 'Backend Systems', icon: 'Server' },
    { name: 'SaaS Platforms', icon: 'Layers' },
    { name: 'Digital Products', icon: 'Zap' },
  ],

  octagramProducts: [
    {
      name: 'OctaClinic',
      description: 'A clinic management system deployed on a Linux VPS via Docker and Nginx.',
      stage: 'Production',
      color: '#6ED6FF',
      icon: 'HeartPulse',
    },
    {
      name: 'Think',
      description: 'Structured EdTech platform designed for learning software engineering foundations.',
      stage: 'In Development',
      color: '#E8C98F',
      icon: 'Brain',
    },
    {
      name: 'Medical Club',
      description: 'Centralized resource dashboard contracted for medical student communities.',
      stage: 'In Development',
      color: '#7DDCC3',
      icon: 'Stethoscope',
    },
  ],

  pipeline: {
    eyebrow: 'Deployment Experience',
    title: 'From local code to a deployed system',
    description:
      'This section shows my experience with Docker, Linux VPS, Nginx, PostgreSQL, SSL, and health checks.',
  },

  pipelineSteps: [
    {
      label: 'Code',
      icon: 'Code2',
      desc: 'Spring Boot / .NET backend',
      color: '#2A8FBF',
    },
    {
      label: 'API',
      icon: 'Waypoints',
      desc: 'REST endpoints',
      color: '#6ED6FF',
    },
    {
      label: 'Docker',
      icon: 'Container',
      desc: 'Containerized runtime',
      color: '#B8A7FF',
    },
    {
      label: 'VPS',
      icon: 'Server',
      desc: 'Linux server',
      color: '#172033',
    },
    {
      label: 'Nginx',
      icon: 'ArrowLeftRight',
      desc: 'Reverse proxy',
      color: '#7DDCC3',
    },
    {
      label: 'PostgreSQL',
      icon: 'Database',
      desc: 'Relational database',
      color: '#E8C98F',
    },
    {
      label: 'SSL',
      icon: 'ShieldCheck',
      desc: 'HTTPS secured',
      color: '#B8A7FF',
    },
    {
      label: 'Production',
      icon: 'CheckCircle',
      desc: 'Live system',
      color: '#6ED6FF',
    },
  ],

  systemStatus: [
    { label: 'Backend Healthy', status: 'online' },
    { label: 'Database Connected', status: 'online' },
    { label: 'API Deployed', status: 'online' },
    { label: 'Client System Active', status: 'online' },
    { label: 'Production Environment', status: 'online' },
  ],

  deployLogs: [
    {
      time: 'step 01',
      level: 'INFO',
      msg: 'Pulling latest source changes',
    },
    {
      time: 'step 02',
      level: 'INFO',
      msg: 'Building backend service',
    },
    {
      time: 'step 03',
      level: 'SUCCESS',
      msg: 'Application image prepared',
    },
    {
      time: 'step 04',
      level: 'INFO',
      msg: 'Restarting Docker containers',
    },
    {
      time: 'step 05',
      level: 'SUCCESS',
      msg: 'Container runtime active',
    },
    {
      time: 'step 06',
      level: 'INFO',
      msg: 'Reloading Nginx reverse proxy',
    },
    {
      time: 'step 07',
      level: 'SUCCESS',
      msg: 'SSL and routing verified',
    },
    {
      time: 'step 08',
      level: 'SUCCESS',
      msg: 'API health check passed',
    },
  ],

  about: {
    eyebrow: 'About Me',
    title: 'Building systems connected to actual business needs.',
    paragraphs: [
      'I’m still early in my career, but I’ve already worked on real client systems, backend architecture, deployment, and product planning.',
      'I’m interested in building systems that are useful, maintainable, and connected to actual business needs.',
    ],
    principles: [
      {
        title: 'Build for real use',
        description:
          'The goal is a system that handles actual workflows, users, constraints, and business needs.',
        icon: 'Target',
      },
      {
        title: 'Think like a product owner',
        description:
          'Engineering decisions should connect to the problem, the user, the client, and the long-term direction of the product.',
        icon: 'Compass',
      },
      {
        title: 'Own delivery',
        description:
          'Good software work includes planning, architecture, implementation, deployment, and support after launch.',
        icon: 'CheckCircle2',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch',
    description:
      'Reach out if you want to discuss software work, a project, a technical collaboration, or my experience.',
    email: 'tareqorabi66@gmail.com',
    github: 'https://github.com/Tareq-Orabi',
    linkedin: 'https://linkedin.com/in/tareq-orabi',
    openTo: [
      { label: 'Software Projects', icon: 'Code2' },
      { label: 'SaaS Development', icon: 'Layers' },
      { label: 'Backend Systems', icon: 'Server' },
      { label: 'AI & Automation', icon: 'Cpu' },
      { label: 'Technical Partnerships', icon: 'Handshake' },
      { label: 'Product Collaborations', icon: 'Compass' },
    ],
  },
};