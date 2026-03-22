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
  title: "Full Stack Developer",
  summary:
    "Full Stack Developer specializing in the MERN stack. I build scalable, high-performance web applications using React, Next.js, and Node.js, with a focus on clean architecture and robust API integration.",
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=owaisrazax.dev@gmail.com",
  whatsapp: "https://wa.me/92308368390?text=Hello%21%20I%20want%20to%20hire%20you.",
  github: "https://github.com/owaisraza72",
  linkedin: "https://linkedin.com/in/owais-raza-a439b033b",
  resume:
    "https://drive.google.com/file/d/1eAl0FQsQr7-EaC9-n1vP0aijszf7ndMa/view?usp=sharing",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
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
      "Tailwind CSS",
      "HTML5 & CSS3",
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
      "API Integration",
    ],
  },
  {
    category: "Database & Cloud",
    icon: Database,
    items: ["MongoDB", "Supabase", "Cloudinary", "Docker"],
  },
  {
    category: "Deployment & Tools",
    icon: Wrench,
    items: ["Vercel","Railway","Git & GitHub", "Postman", "VS Code"],
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
    title: "Healthcare SaaS Platform",
    description:
      "Built a full-stack MERN healthcare management system with role-based dashboards, secure REST APIs, and JWT authentication. Implemented RBAC and scalable architecture to optimize clinic workflows and simulate a SaaS-based solution.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "/clinic.png",
    liveUrl: "https://final-hackathoon.vercel.app/",
    githubUrl: "https://github.com/owaisraza72/Final_Hackathoon",
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
