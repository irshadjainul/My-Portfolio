import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma,
  FaNpm,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiExpress,
  SiGraphql,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiVite,
  SiJest,
} from "react-icons/si";

export const skills = {
  frontend: {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  backend: {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      // { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  database: {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      // { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
  tools: {
    title: "Tools & Technologies",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      // { name: "Jest", icon: SiJest, color: "#C21325" },
      // { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ],
  },
};
