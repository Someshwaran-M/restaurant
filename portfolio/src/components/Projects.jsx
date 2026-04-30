import { useState, useEffect, useRef } from "react";
import "../styles/projects.css";

/* ✅ IMPORT ICONS */
import {
  FaCogs,
  FaUserGraduate,
  FaFileAlt,
} from "react-icons/fa";

/* 🔥 UPDATED PROJECT DATA (WITH ICONS) */
const projects = [
  {
    id: 1,
    title: "Food Processing Automation",
    category: "Full Stack Web App",
    description:
      "Automated food processing system with role-based access, workflow tracking, and efficient data management.",
    gradient: "linear-gradient(135deg, #0f2027 0%, #1a1a2e 40%, #16213e 100%)",
    accent: "#00e5ff",
    tags: ["React", "Python", "MySQL"],
    icon: <FaCogs />,   // ✅ ICON ADDED
    github: "https://github.com/Someshwaran-M/Food-Processing-Automation",
    live: "https://food-processing-automation-frontend-iota.vercel.app/",
  },
  {
  id: 2,
  title: "Career Counseling System",
  category: "Python Django WebApplication",
  description:
    "Web platform that helps users choose career paths based on skills and interests with guidance features.",
  gradient: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
  accent: "#7c3aed",
  tags: ["python", "Django"],
  icon: <FaUserGraduate />,
  github: "https://github.com/Someshwaran-M/Student-Career-Counseling",

  // ✅ FIXED: No wrong link
  live: "https://student-career.onrender.com",
},
 {
    id: 3,
    title: "Online Examination System",
    category: "Web Application",
    description:
      "Online exam system with authentication, timer-based tests, and automated result evaluation.",
    gradient: "linear-gradient(135deg, #111 0%, #1f2937 50%, #000 100%)",
    accent: "#f97316",
    tags: ["React"],
    icon: <FaFileAlt />,  // ✅ ICON ADDED
    github: "https://github.com/Someshwaran-M/Online-Exam",
    live: "https://online-exam-theta.vercel.app/",
  },
  
];

/* 🔥 INTERSECTION OBSERVER */
function useIntersectionObserver() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

/* 🔥 PROJECT CARD */
function ProjectCard({ project, index }) {
  const [ref, isVisible] = useIntersectionObserver();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`project-card ${isVisible ? "visible" : ""}`}
      style={{
        "--delay": `${index * 0.15}s`,
  
        "--accent": project.accent,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background */}
      <div
        className="card-bg"
        style={{ background: project.gradient }}
      />
      <div
        className="card-glow"
        style={{ opacity: hovered ? 1 : 0 }}
      />

      <div className="card-content">
        {/* Header */}
        <div className="card-header">
          <span className="card-icon">{project.icon}</span>

          <div className="card-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="card-info">
          <span className="card-category">{project.category}</span>

          <h3 className="card-title">{project.title}</h3>

          <p className="card-desc">{project.description}</p>

          <div className="card-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="card-btn"
            >
              GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="card-btn outline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 🔥 MAIN COMPONENT */
export default function Projects() {
  const [titleRef, titleVisible] = useIntersectionObserver();

  return (
    <section id="projects" className="projects">
      {/* Title */}
      <div
        ref={titleRef}
        className={`projects-title-wrap ${
          titleVisible ? "visible" : ""
        }`}
      >
        <h2 className="projects-title">
          Latest <span>Projects</span>
        </h2>
        <p className="projects-subtitle">
          My real development work
        </p>
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}