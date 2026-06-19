import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDatabase, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiPostman, SiTailwindcss, SiBootstrap, SiJavascript, SiCplusplus, SiHtml5, SiCss, SiVercel, SiRender } from 'react-icons/si';

export const personalInfo = {
  name: "Naziya Parveen",
  roles: ["Full-Stack Developer", "React Developer", "MERN Stack Developer", "Next.js Developer"],
  email: "naziyap123@gmail.com",
  phone: "+91 63874 16610",
  github: "https://github.com/Naziya007",
  linkedin: "https://www.linkedin.com/in/naziya-parveen-769428303/",
  leetcode: "https://leetcode.com/u/UqrskmwQGn/",
  tagline: "Crafting elegant digital experiences with clean code and creative design.",
  about: "I'm a passionate Full-Stack Developer currently pursuing B.Tech at JSS Academy of Technical Education. I love building scalable web applications that solve real-world problems. With hands-on experience in React, Next.js, Node.js, and MongoDB, I bring ideas to life through clean code and intuitive interfaces. From POS systems to community platforms, I thrive on creating impactful digital solutions.",
};

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  institution: "JSS Academy of Technical Education",
  cgpa: "8.43",
  year: "2027",
};

export const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer Intern",
    company: "MyPMS Solution",
    duration: "Dec 2027 - Mar 2028",
    points: [
      "Designed and developed a scalable full-stack POS system tailored for hotel management operations",
      "Implemented billing, order lifecycle management, and inventory tracking via a reactive workflow",
      "Built responsive frontend interfaces and RESTful backend APIs ensuring seamless data handling",
      "Optimized system architecture for improved stability and system efficiency",
      "Collaborated with team members to debug issues and enhance application reliability",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "DevX-Alpha",
    duration: "Jul 2025 - Oct 2025",
    points: [
      "Developed and enhanced the company website using Next.js with improved UI responsiveness",
      "Integrated frontend with backend services and participated in deployment cycles",
      "Contributed to improving performance and optimizing page load times",
    ],
  },
  {
    id: 3,
    role: "Technical Lead / Core Member",
    company: "Nibble Computer Society",
    duration: "Present",
    points: [
      "Designed and developed the official college Mentor-Mentee web portal with dedicated panels for Teachers, HODs, and Administrators, enabling comprehensive student profiling with secure access to academic records, attendance logs, marks, and progress reports",
      "Successfully organized 2 technical workshops and 2 national-level hackathons, managing technical operations and participant mentoring",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "SkillSwap",
    subtitle: "Community Skill-Sharing Platform",
    description: "A full-stack community-driven platform enabling users to teach and learn skills collaboratively. Features automated skill card system, secure authentication, and intuitive UI design.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    features: [
      "Automated 'Skill Card' control system for user engagement",
      "Secure authentication with React Context API state management",
      "Refined UI flows reducing navigation complexity",
    ],
    github: "https://github.com/Naziya007/SkillSwap",
    live: "https://skillswap-1-7cm3.onrender.com",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "POSCloud",
    subtitle: "Hotel & Restaurant POS System",
    description: "A comprehensive POS system for hotel and restaurant management with table management, order processing, billing workflows, and real-time kitchen order tracking.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "REST API"],
    features: [
      "Kitchen Order Ticket (KOT) with real-time tracking",
      "Role-based access control (Admin, Waiter, Kitchen Staff)",
      "Sales reports and transaction summaries",
    ],
    github: "https://github.com/Naziya007/Pos-project",
    live: "https://pos-project-1.onrender.com",
    color: "#10b981",
  },
  {
    id: 3,
    title: "AksharGyaan",
    subtitle: "College Society Official Website",
    description: "Official website for AksharGyaan, a college-level social welfare society. Built with Next.js for SEO-friendly, responsive access to organization information.",
    tech: ["Next.js", "React.js", "CSS", "SEO", "Vercel"],
    features: [
      "SEO-friendly platform with optimized performance",
      "Responsive across desktop and mobile devices",
      "Strengthened digital presence for volunteers and students",
    ],
    github: "#",
    live: "https://akshargyan.org.in/",
    color: "#0ea5e9",
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, level: 90 },
      { name: "Python", icon: FaPython, level: 75 },
      { name: "C++", icon: SiCplusplus, level: 70 },
      { name: "HTML5", icon: SiHtml5, level: 95 },
      { name: "CSS3", icon: SiCss, level: 90 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", icon: FaReact, level: 90 },
      { name: "Next.js", icon: SiNextdotjs, level: 80 },
      { name: "Node.js", icon: FaNodeJs, level: 85 },
      { name: "Express.js", icon: SiExpress, level: 80 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
      { name: "Bootstrap", icon: SiBootstrap, level: 75 },
    ],
  },
  {
    title: "Tools & Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 85 },
      { name: "MySQL", icon: SiMysql, level: 70 },
      { name: "Git", icon: FaGitAlt, level: 85 },
      { name: "GitHub", icon: FaGithub, level: 90 },
      { name: "Postman", icon: SiPostman, level: 80 },
      { name: "Vercel", icon: SiVercel, level: 75 },
      { name: "Render", icon: SiRender, level: 70 },
    ],
  },
];

export const achievements = [
  {
    id: 1,
    title: "Smart India Hackathon",
    description: "Selected in the national round of Smart India Hackathon (SIH)",
    icon: "🏆",
  },
  {
    id: 2,
    title: "2-Star CodeChef",
    description: "Achieved 2-star rating on CodeChef competitive programming platform",
    icon: "⭐",
  },
  {
    id: 3,
    title: "300+ LeetCode Problems",
    description: "Solved 300+ problems on LeetCode, strengthening data structures and algorithms",
    icon: "💻",
  },
  {
    id: 4,
    title: "Active Contributor",
    description: "Active contributor to coding platforms with continuous problem-solving practice",
    icon: "🚀",
  },
];

export const stats = [
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Problems Solved", value: 300, suffix: "+" },
  { label: "Months Experience", value: 10, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
