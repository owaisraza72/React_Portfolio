import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Palette,
  Terminal,
  Wrench,
  Twitter,
  Database,
  ExternalLink,
} from "lucide-react";

export const personalInfo = {
  name: "Owais Raza",
  title: "Software Developer",
  summary:
    "Software Developer focused on full-stack and cross-platform application development. Specialized in the MERN stack, with hands-on industry experience in React Native, WebRTC, SDK integration, and real-world software systems.",
  email: "mailto:owaisrazax.dev@gmail.com",
  whatsapp:
    "https://wa.me/923083968390?text=Hello%21%20I%20want%20to%20hire%20you.",
  github: "https://github.com/owaisraza72",
  linkedin: "https://www.linkedin.com/in/owais-raza-dev/",
  resume:
    "https://drive.google.com/file/d/1ODAHQLT5Gm-gV9aMkvTRuG_kcmqwi4mF/view?usp=sharing",
};

export const experience = [
  {
    company: "Coderatory",
    role: "MERN Stack & Agentic AI Intern",
    project: "MediaStream Relay",
    description:
      "Contributed to MediaStream Relay, a cross-platform real-time media and SDK project with hands-on work in React Native, WebRTC, and SDK integration.",
    subDescription:
      "Worked through platform-specific media, signaling, transport, and cross-platform issues across Web and Mobile.",
    skills: [
      "React Native",
      "WebRTC",
      "SDK Integration",
      "Cross-Platform",
    ],
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
    ],
  },

  {
    category: "Backend",
    icon: Terminal,
    items: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "JWT Authentication",
      "RBAC",
    ],
  },

  {
    category: "Mobile & Real-Time",
    icon: Code2,
    items: [
      "React Native",
      "WebRTC",
      "SDK Integration",
      "Cross-Platform Development",
      "AI & Workflow Automation", 
    ],
  },

  {
    category: "Database & Tools",
    icon: Database,
    items: ["MongoDB", "Supabase", "Docker", "Git & GitHub", "Postman"],
  },
];
export const projects = [
  {
    title: "Elegance Luxury",
    description:
      "Developed a scalable MERN stack e-commerce platform for luxury products with user authentication, API-driven architecture, and dynamic product management. Focused on clean code structure, reusable components, and optimized performance across both frontend and backend.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "JWT Authentication",
      "REST APIs",
    ],
    image: "/ecom.png",
    liveUrl: "https://elegance-luxury.vercel.app/",
    githubUrl: "https://github.com/owaisraza72/Elegance_Luxury",
  },
  {
    title: "Clinic OS SaaS Platform",
    description:
      "Built a full-stack MERN healthcare management system with role-based dashboards, secure REST APIs, and JWT authentication. Implemented RBAC and scalable architecture to optimize clinic workflows and simulate a SaaS-based solution.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "/clinic.png",
    liveUrl: "https://clinic-os-healthcare-management-sys.vercel.app/",
    githubUrl:
      "https://github.com/owaisraza72/clinic-os-healthcare-management-system",
  },
  {
    title: "PitchCraft AI",
    description:
      "Developed an AI-powered startup pitch generator using React and Supabase, enabling users to generate structured business ideas with a clean and responsive UI.",
    tech: ["React", "Tailwind CSS", "Supabase"],
    image: "/pitch.png",
    liveUrl: "https://frontend-hackathoon.vercel.app/",
    githubUrl: "https://github.com/owaisraza72/Frontend-Hackathoon",
  },
];
