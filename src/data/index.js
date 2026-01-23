import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Palette,
  Terminal,
  Twitter,
  ExternalLink,
} from "lucide-react";

export const personalInfo = {
  name: "Owais Raza",
  title: "Frontend Web Developer",
  summary:
    "Frontend Web Developer with strong skills in building modern, responsive web applications using HTML, CSS, JavaScript, and React. Currently expanding into MERN stack development, with hands-on experience in Node.js, Express, MongoDB, and basic Next.js app routing and API routes.",
  email: "owaisrazax.dev@gmail.com",
  github: "https://github.com/owaisraza72",
  linkedin: "https://linkedin.com/in/owais-raza-a439b033b",
  resume:
    "https://drive.google.com/file/d/1fK40-24C38xlLb4BjTlGZ1sPrJmAirwV/view?usp=sharing", // Placeholder
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
    category: "Core Frontend",
    icon: Code2,
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js"],
  },
  {
    category: "Tools & Styling",
    icon: Palette,
    items: [
      "Tailwind CSS",
      "Ant Design",
      "Bootstrap",
      "Git & GitHub",
      "VS Code",
    ],
  },
  {
    category: "Backend",
    icon: Terminal,
    items: ["Node.js", "Express.js", "MongoDB", "Supabase", "Json Web Token"],
  },
];

export const projects = [
  {
    title: "Student Management System",
    description:
      "Students can register and check approval status, Campus Admins manage their own campus students, and the Superadmin oversees all campuses and admins. The app features login, signup, and a clean, responsive UI.",
    tech: ["HTML", "CSS", "Javascript", "Supabase"],
    image: "/std.png",
    liveUrl: "https://owaisraza72.github.io/Student-Management-System-/",
    githubUrl: "https://github.com/owaisraza72/Student-Management-System-",
  },
  {
    title: "PitchCraft AI",
    description:
      "Pitch Craft is a complete frontend web application developed during a hackathon and present project ideas through a modern and responsive interface.",
    tech: ["React", "Tailwind CSS", "Supabase"],
    image: "/pitch.png",
    liveUrl: "https://frontend-hackathoon.vercel.app/",
    githubUrl: "https://github.com/owaisraza72/Frontend-Hackathoon",
  },
  {
    title: "E-Commerce Web Application",
    description:
      "E-Commerce Web Application built with Next.js and Tailwind CSS.",
    tech: ["Next.Js", "Tailwind CSS", "App Routes"],
    image: "/rz.png",
    liveUrl: "#",
    githubUrl: "https://github.com/owaisraza72",
  },
];
