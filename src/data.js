export const personalInfo = {
    about_me: "Dedicated Software Engineer with a strong focus on Backend Development.",
    tagline: "Software Engineer | Backend Developer",
    email: "tareqorabi66@gmail.com"
};

export const skills = [
    // Languages
    { name: 'Java', category: 'languages', display_order: 1, level: 90 },
    { name: 'C#', category: 'languages', display_order: 2, level: 85 },
    { name: 'JavaScript', category: 'languages', display_order: 3, level: 80 },
    { name: 'HTML5', category: 'languages', display_order: 4, level: 95 },
    { name: 'CSS3', category: 'languages', display_order: 5, level: 85 },
    { name: 'React', category: 'languages', display_order: 6, level: 80 },

    // Backend & Frameworks
    { name: 'ASP.NET Core', category: 'backend', display_order: 1, level: 85 },
    { name: 'Entity Framework', category: 'backend', display_order: 2, level: 80 },
    { name: 'Backend Development', category: 'backend', display_order: 3, level: 90 },

    // Data Strategy
    { name: 'PostgreSQL', category: 'database', display_order: 1, level: 85 },
    { name: 'MySQL', category: 'database', display_order: 2, level: 80 },

    // Tools & Competencies
    { name: 'Git & GitHub', category: 'tools', display_order: 1, level: 90 },
    { name: 'Postman', category: 'tools', display_order: 2, level: 85 },
    { name: 'System Design', category: 'tools', display_order: 3, level: 75 },
    { name: 'Debugging', category: 'tools', display_order: 4, level: 85 },
    { name: 'Code Refactoring', category: 'tools', display_order: 5, level: 80 },
    { name: 'AI-assisted Dev', category: 'tools', display_order: 6, level: 95 }
];

export const projects = [
    {
        title: 'IAM System (SMT)',
        description: 'Identity & Access Management system ensuring secure authentication and authorization using Java.',
        image_url: '', // No image available, using default style
        repo_url: '#',
        live_url: '#',
        technologies: ['Java', 'Security', 'Authentication'],
        is_featured: 1,
        display_order: 1
    },
    {
        title: 'Think - Educational Software Platform',
        description: 'Project Manager and Back-end Developer.\nDesigned system architecture and back-end logic.\nBuilt a Viable Product (MVP).\nIntegrated practical development practices into an academic learning environment.',
        image_url: '',
        repo_url: '#',
        live_url: '#',
        technologies: ['Leadership', 'System Design', 'MVP', 'EdTech'],
        is_featured: 1,
        display_order: 2
    },
    {
        title: 'Personal Portfolio',
        description: 'A performance-focused personal website built with Vanilla JS to showcase backend engineering skills.',
        image_url: '',
        repo_url: 'https://github.com/tareq-orabi',
        live_url: '#',
        technologies: ['JavaScript', 'HTML5', 'CSS3'],
        is_featured: 0,
        display_order: 3
    }
];

export const experience = [
    {
        role: "Software Engineer - Development Department",
        company: "SMT Center (Security Management Technology)",
        year_range: "Oct 2025 – Jan 2026",
        description: "<b>IAM Development:</b> Contributed to the development of an Identity & Access Management (IAM) system using Java, focusing on secure authentication.\n<b>System Maintenance:</b> Supported and debugged ASP.NET Core projects, ensuring high stability for internal systems.\n<b>Code Quality:</b> Led code cleanup and testing phases to enhance software maintainability and performance.\n<b>Technical Analysis:</b> Analyzed requirements and proposed technical solutions within the development team."
    }
];
