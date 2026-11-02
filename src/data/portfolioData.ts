export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'ai' | 'fullstack';
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  metrics?: string;
  demoUrl: string;
  sourceUrl: string;
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  completionYear: string;
  gpa?: string;
  description: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'technical' | 'programming' | 'tools' | 'communication' | 'problem-solving';
  level: number; // 0-100
  experience: string;
  highlight?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: 'work' | 'internship' | 'community' | 'workshop';
  period: string;
  location: string;
  responsibilities: string[];
  techStack?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  verifyUrl: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
}

export interface UserProfile {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  avatarUrl: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  resumePdfUrl: string;
  resumeFileName: string;
  languages: { name: string; level: string }[];
  socials: {
    github: string;
    linkedin: string;
    facebook: string;
    instagram: string;
    twitter?: string;
  };
  interests: string[];
  goals: string[];
}

export const initialProfile: UserProfile = {
  name: "Prerna Sah",
  initials: "PS",
  title: "BIM Student & Aspiring Full-Stack Developer",
  tagline: "Creative and curious BIM student passionate about technology, web development, and tech community impact.",
  shortBio: "Creative and curious individual with a motivated mindset and decent coding skills. Passionate about technology, with experience in organizing and participating in tech events. A strong team player who enjoys collaborating to achieve shared goals and turning ideas into impactful outcomes.",
  fullBio: [
    "I am currently pursuing a Bachelor in Information Management (BIM) at Birgunj Public College (2024 – Present). My academic journey bridges management science with computer applications, enabling me to analyze business workflows while implementing modern software solutions.",
    "I have developed hands-on technical competencies in Full-Stack JavaScript Fundamentals through Karkhana Samuha, AWS Cloud Innovation Training with One Cloud Utopia, and Microsoft Office 365. My practical projects include the Birgunj Public College Website and an interactive Digital Learning System Project.",
    "Beyond academics, I am an active contributor to the local tech ecosystem—serving as a General Member of Code For Change Birgunj (CFC) and achieving 2nd Runner Up in the BPC TECH HUNT 3.0 competition. As a fast learner and adaptable collaborator, I am eager to apply my skills to real-world technology challenges."
  ],
  avatarUrl: "",
  email: "1129prerna@gmail.com",
  phone: "+977 9807213733",
  location: "Jailroad-5, Birgunj, Nepal",
  status: "Available for internships, junior developer roles & tech initiatives",
  resumePdfUrl: "/assets/aistudio/Prerna_Sah_CV_Updated-1__1__33ac2890.pdf",
  resumeFileName: "Prerna_Sah_CV_Updated.pdf",
  languages: [
    { name: "Nepali", level: "Native / Bilingual" },
    { name: "Hindi", level: "Fluent" },
    { name: "English", level: "Professional Working" },
    { name: "Bhojpuri", level: "Native / Regional" }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://x.com"
  },
  interests: [
    "Full-Stack Web Development & JavaScript",
    "Cloud Computing & AWS Architecture",
    "Information Systems & Data Management",
    "Tech Event Organizing & Youth Leadership",
    "Digital Education & E-Learning Solutions"
  ],
  goals: [
    "Master advanced Full-Stack JavaScript and modern cloud deployment architectures.",
    "Build accessible digital platforms that streamline educational and institutional operations in Nepal.",
    "Inspire and mentor fellow students through Code For Change Birgunj and collegiate tech hackathons."
  ]
};

export const samplePresets: Record<string, Partial<UserProfile>> = {
  "Prerna Sah (Original CV)": {
    name: "Prerna Sah",
    title: "BIM Student & Aspiring Full-Stack Developer",
    tagline: "Creative and curious BIM student passionate about technology, web development, and tech community impact.",
    shortBio: "Creative and curious individual with a motivated mindset and decent coding skills. Passionate about technology, with experience in organizing and participating in tech events. A strong team player who enjoys collaborating to achieve shared goals and turning ideas into impactful outcomes."
  },
  "Full-Stack Web Developer": {
    name: "Prerna Sah",
    title: "Full-Stack Web Developer & BIM Specialist",
    tagline: "Architecting interactive web solutions with Full-Stack JavaScript, AWS, and modern UI practices.",
    shortBio: "Specializing in responsive frontends, Full-Stack JavaScript fundamentals, AWS Cloud essentials, and user-centric web applications."
  },
  "Cloud & IT Specialist": {
    name: "Prerna Sah",
    title: "AWS Cloud & IT Support Specialist",
    tagline: "Leveraging AWS Cloud fundamentals and IT systems to build reliable digital services.",
    shortBio: "Trained in AWS Cloud Innovation by One Cloud Utopia and certified in Microsoft Office 365, with hands-on systems troubleshooting."
  },
  "Tech Community Leader": {
    name: "Prerna Sah",
    title: "BPC Tech Hunt Finalist & Code For Change Member",
    tagline: "Empowering tech communities and driving youth innovation across Birgunj.",
    shortBio: "2nd Runner Up in BPC TECH HUNT 3.0 and General Member at Code For Change Birgunj. Passionate about organizing impactful tech events."
  }
};

export const educationList: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor in Information Management (BIM)",
    institution: "Birgunj Public College",
    location: "Birgunj, Nepal",
    period: "2024 – Present",
    completionYear: "Current (Enrolled 2024)",
    description: "Four-year specialized degree program integrating Information Technology with modern Business Management. Focuses on software engineering, database management systems, network fundamentals, and organizational IT strategy.",
    highlights: [
      "2nd Runner Up in BPC TECH HUNT 3.0 (2023)",
      "Active organizer and participant in collegiate tech events and seminars",
      "Core Coursework: C Programming, Web Technology Basics, Computer Information Systems, and Business Communication",
      "Collaborative team lead in group software and college exhibition projects"
    ]
  }
];

export const skillsList: SkillItem[] = [
  // Technical Skills
  { name: "Full-Stack JavaScript Fundamentals", category: "technical", level: 88, experience: "Karkhana Samuha (2026)", highlight: "DOM manipulation, ES6+ syntax & full-stack logic" },
  { name: "AWS Cloud Fundamentals", category: "technical", level: 85, experience: "One Cloud Utopia (2025)", highlight: "S3, EC2 fundamentals, IAM & cloud architecture" },
  { name: "Web Development Basics", category: "technical", level: 90, experience: "BIM & Projects", highlight: "Responsive web layouts, semantic HTML5 & styling" },
  { name: "Basic IT Support & Troubleshooting", category: "technical", level: 88, experience: "Hands-on Experience", highlight: "Hardware diagnostics, software setup & network basics" },
  { name: "Database & Information Management", category: "technical", level: 84, experience: "BIM Curriculum", highlight: "Data modeling, relational concepts & information flow" },

  // Programming Skills
  { name: "JavaScript (ES6+)", category: "programming", level: 86, experience: "Bootcamp & Web", highlight: "Asynchronous patterns, modern arrays & event handling" },
  { name: "HTML5 & Semantic Markup", category: "programming", level: 94, experience: "Web Projects", highlight: "Clean structure, forms, SEO basics & accessibility" },
  { name: "CSS3 & Modern Styling", category: "programming", level: 88, experience: "Web Projects", highlight: "Flexbox, Grid, animations & mobile-first media queries" },
  { name: "Structured Programming & Logic", category: "programming", level: 85, experience: "BIM Studies", highlight: "Algorithmic thinking, control flow & data handling" },

  // Software and Tools
  { name: "Microsoft Office 365", category: "tools", level: 96, experience: "Certified (2024)", highlight: "Excel data analysis, Word reporting & PowerPoint decks" },
  { name: "AWS Cloud Console", category: "tools", level: 82, experience: "Training (2025)", highlight: "Navigating AWS management console & provisioning resources" },
  { name: "Code Editors & DevTools", category: "tools", level: 88, experience: "Daily Workflow", highlight: "VS Code, browser element inspection & debugging" },
  { name: "Git & Version Control Basics", category: "tools", level: 80, experience: "Collaborative Labs", highlight: "Repositories, tracking changes & code management" },

  // Communication Skills
  { name: "Communication Skills", category: "communication", level: 94, experience: "Active", highlight: "Clear verbal and written articulation in multicultural settings" },
  { name: "Teamwork & Collaboration", category: "communication", level: 96, experience: "CFC & College", highlight: "Collaborating seamlessly to turn ideas into shared outcomes" },
  { name: "Tech Event Organizing", category: "communication", level: 92, experience: "Tech Events", highlight: "Planning agendas, coordinating participants & hosting sessions" },
  { name: "Adaptability & Fast Learning", category: "communication", level: 95, experience: "Proven", highlight: "Rapidly adopting new technologies, tools, and environments" },

  // Problem-Solving Skills
  { name: "Problem Solving", category: "problem-solving", level: 92, experience: "Tech Hunt Winner", highlight: "2nd Runner Up in BPC TECH HUNT 3.0 hackathon" },
  { name: "Time Management", category: "problem-solving", level: 90, experience: "Academic & Tech", highlight: "Balancing college coursework, certifications & community events" },
  { name: "Systems Diagnostics & Troubleshooting", category: "problem-solving", level: 88, experience: "IT Support", highlight: "Methodical root cause analysis for software/hardware issues" },
  { name: "Goal-Oriented Execution", category: "problem-solving", level: 93, experience: "Project Delivery", highlight: "Converting abstract project requirements into working deliverables" }
];

export const projectsList: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Birgunj Public College Website",
    category: "web",
    categoryLabel: "Institutional Web Portal",
    description: "A modern, responsive institutional website designed for Birgunj Public College, featuring course catalogs, student notices, and admissions inquiry.",
    longDescription: "Developed a comprehensive college web portal to assist prospective and current students in accessing BIM program details, academic schedules, exam notices, and campus announcements. Engineered with responsive CSS layouts, accessible navigation, interactive course cards, and structured contact forms.",
    image: "/src/assets/images/project_saas_platform_1793601047429.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Form Validation", "UI/UX"],
    metrics: "Full institutional portal · 100% mobile responsive",
    demoUrl: "#projects",
    sourceUrl: "https://github.com",
    featured: true
  },
  {
    id: "proj-2",
    title: "Digital Learning System Project",
    category: "fullstack",
    categoryLabel: "E-Learning Platform",
    description: "An interactive digital learning portal with course materials, study modules, assignment tracking, and an intuitive student dashboard.",
    longDescription: "Engineered an e-learning application designed to streamline student-instructor interactions. Features subject module browsing, digital study note downloads, interactive quizzes, and submission tracking tailored for computer science and BIM students.",
    image: "/src/assets/images/project_ai_copilot_1793601047618.jpg",
    technologies: ["JavaScript", "HTML5 & CSS3", "Cloud Storage Concepts", "Local Storage", "Interactive UI"],
    metrics: "Multi-course curriculum & real-time study tracker",
    demoUrl: "#projects",
    sourceUrl: "https://github.com",
    featured: true
  },
  {
    id: "proj-3",
    title: "Code For Change Event Hub",
    category: "web",
    categoryLabel: "Community & Events",
    description: "A centralized event registration and announcements hub built for Code For Change Birgunj technology workshops and student bootcamps.",
    longDescription: "Built to support student participation in technology workshops and hackathons like BPC Tech Hunt. Features registration forms, speaker line-ups, countdown timers, and resource download links for attendees.",
    image: "/src/assets/images/project_mobile_fintech_1793601047907.jpg",
    technologies: ["JavaScript", "Responsive Design", "Web Forms", "UI Tokens"],
    metrics: "Supported peer outreach & workshop registrations",
    demoUrl: "#projects",
    sourceUrl: "https://github.com",
    featured: false
  }
];

export const experienceList: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "General Member & Tech Organizer",
    organization: "Code For Change Birgunj (CFC)",
    type: "community",
    period: "2025 – Present",
    location: "Birgunj, Nepal",
    responsibilities: [
      "Actively organize and facilitate technology awareness campaigns, workshops, and student bootcamps across Birgunj.",
      "Collaborate with collegiate peer developers to design hands-on programming sessions and promote digital literacy.",
      "Coordinate event logistics, student outreach, and speaker arrangements for regional tech conferences.",
      "Contribute to open community projects promoting web development fundamentals for beginner students."
    ],
    techStack: ["Web Development", "Event Management", "Peer Mentorship", "Community Building"]
  },
  {
    id: "exp-2",
    role: "Tech Events Organizer & Academic Contributor",
    organization: "Birgunj Public College Tech Initiatives",
    type: "work",
    period: "2024 – Present",
    location: "Birgunj, Nepal",
    responsibilities: [
      "Organized collegiate IT exhibitions and competitive tech challenges including BPC TECH HUNT.",
      "Assisted student teams with basic IT support, system configuration, and software troubleshooting.",
      "Designed digital presentation assets, event banners, and informational guidelines using Microsoft Office 365 and web tools."
    ],
    techStack: ["IT Support", "Office 365", "Hardware/Software Diagnostics", "Public Coordination"]
  }
];

export const certificationsList: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Fullstack JavaScript Pre-Bootcamp",
    issuer: "Karkhana Samuha",
    date: "2026",
    credentialId: "KS-FSJS-2026",
    skills: ["Full-Stack JavaScript", "DOM Manipulation", "Modern Frontend & Backend Logic", "Web Architecture"],
    verifyUrl: "#certifications"
  },
  {
    id: "cert-2",
    title: "AWS Cloud Innovation Training",
    issuer: "One Cloud Utopia Pvt. Ltd.",
    date: "2025",
    credentialId: "OCU-AWS-2025",
    skills: ["AWS Cloud Fundamentals", "Cloud Storage (S3)", "EC2 Compute Basics", "Cloud Security Practices"],
    verifyUrl: "#certifications"
  },
  {
    id: "cert-3",
    title: "Microsoft Office 365",
    issuer: "Microsoft Certified Training",
    date: "2024",
    credentialId: "MS-O365-2024",
    skills: ["Excel Data Sheets & Formulas", "Document Automation", "PowerPoint Presentations", "OneDrive"],
    verifyUrl: "#certifications"
  }
];

export const achievementsList: AchievementItem[] = [
  {
    id: "ach-1",
    title: "BPC TECH HUNT 3.0 – 2nd Runner Up",
    organization: "Birgunj Public College",
    year: "2023",
    description: "Achieved 2nd Runner Up in the premier BPC TECH HUNT 3.0 technical competition among collegiate engineering and management students, demonstrating rapid problem-solving and IT skills.",
    badge: "2nd Runner Up"
  },
  {
    id: "ach-2",
    title: "Code For Change Birgunj (CFC) Member",
    organization: "Code For Change Nepal",
    year: "2025 – Present",
    description: "Selected as General Member of the Birgunj chapter, actively organizing tech bootcamps, workshops, and youth technology initiatives.",
    badge: "Active Member"
  },
  {
    id: "ach-3",
    title: "Tech Events Organizer & Community Volunteer",
    organization: "Birgunj Tech Ecosystem",
    year: "2024 – Present",
    description: "Recognized for organizing and coordinating campus hackathons, student IT orientations, and collaborative peer learning circles.",
    badge: "Organizer"
  }
];

export const workshopsList = [
  {
    id: "ws-1",
    title: "Fullstack JavaScript Fundamentals & Web Architecture",
    instructor: "Karkhana Samuha",
    year: "2026",
    focus: "Modern JavaScript programming, asynchronous execution, DOM engineering, and web application flow."
  },
  {
    id: "ws-2",
    title: "AWS Cloud Innovation & Infrastructure Training",
    instructor: "One Cloud Utopia Pvt. Ltd.",
    year: "2025",
    focus: "AWS Cloud fundamentals, compute, storage, high availability concepts, and cloud security standards."
  },
  {
    id: "ws-3",
    title: "Microsoft Office 365 Professional Productivity",
    instructor: "Certified IT Training Provider",
    year: "2024",
    focus: "Advanced Excel spreadsheet management, collaborative documents, presentations, and cloud workflow."
  }
];
