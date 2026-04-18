import { useState, useEffect, useRef } from "react";
import "../styles/projects.css";

// ─── DATA ──────────────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "UI/UX Design",
    category: "Mobile Design",
    description:
      "Modern mobile interface design with intuitive user experience and pixel-perfect components.",
    gradient: "linear-gradient(135deg, #0f2027 0%, #1a1a2e 40%, #16213e 100%)",
    accent: "#f97316",
    tags: ["UI", "UX"],
    icon: "📱",
  },
  {
    id: 2,
    title: "Website Development",
    category: "Web Development",
    description:
      "Full-stack website development with cutting-edge technologies and stunning visual design.",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #0d1b4b 50%, #061233 100%)",
    accent: "#00d4ff",
    tags: ["HTML", "CSS", "JS"],
    icon: "🖥️",
  },
  {
    id: 3,
    title: "Language App",
    category: "Mobile App",
    description:
      "Easy and quick language learning platform with interactive exercises and progress tracking.",
    gradient: "linear-gradient(135deg, #f5f5ff 0%, #ede9fe 50%, #ddd6fe 100%)",
    accent: "#7c3aed",
    tags: ["React Native", "EdTech"],
    icon: "📚",
    light: true,
  },
];

// ─── HOOK ───────────────────────────────────────────────────────────────────────
function useIntersectionObserver(options = {}) {
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
      { threshold: 0.15, ...options },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

// ─── CARD MOCKS ─────────────────────────────────────────────────────────────────
function MockUIUX() {
  return (
    <div className="mock-ui">
      <div className="mock-phone-frame">
        <div className="mock-pill" />
        <div className="ui-box orange">UI</div>
        <div className="ui-box blue">UX</div>
        <div className="mock-bars">
          <div className="bar b1" />
          <div className="bar b2" />
          <div className="bar b3" />
        </div>
        <div className="mock-circle c1" />
        <div className="mock-circle c2" />
      </div>
    </div>
  );
}

function MockWeb() {
  return (
    <div className="mock-web">
      <div className="monitor-frame">
        <div className="monitor-screen">
          <div className="web-header-bar">
            <div className="dot r" />
            <div className="dot g" />
            <div className="dot b" />
          </div>
          <div className="web-content">
            <div className="web-line long" />
            <div className="web-line med" />
            <div className="web-line short" />
            <div className="web-btn">START</div>
          </div>
        </div>
        <div className="monitor-stand" />
      </div>
      <div className="floating-orb orb1" />
      <div className="floating-orb orb2" />
    </div>
  );
}

function MockApp() {
  return (
    <div className="mock-app">
      <div className="app-phone app-main">
        <div className="app-header">MAIN UNITS</div>
        <div className="app-items">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="app-item" style={{ "--i": i }} />
          ))}
        </div>
      </div>
      <div className="app-phone app-side">
        <div className="app-header small">UNIT 2</div>
        <div className="app-items small">
          {[1, 2, 3].map((i) => (
            <div key={i} className="app-item" style={{ "--i": i }} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mockMap = { 1: MockUIUX, 2: MockWeb, 3: MockApp };

// ─── PROJECT CARD ────────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [ref, isVisible] = useIntersectionObserver();
  const [hovered, setHovered] = useState(false);
  const Mock = mockMap[project.id];

  return (
    <div
      ref={ref}
      className={`project-card ${isVisible ? "visible" : ""} ${project.light ? "light-card" : ""}`}
      style={{ "--delay": `${index * 0.18}s`, "--accent": project.accent }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Layers */}
      <div className="card-bg" style={{ background: project.gradient }} />
      <div className="card-noise" />
      <div
        className="card-glow"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at 50% 0%, ${project.accent}33, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="card-content">
        {/* Header */}
        <div className="card-header">
          <div className="card-icon-wrap">
            <span className="card-icon">{project.icon}</span>
          </div>
          <div className="card-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Visual mock */}
        <div className="card-visual">
          <div className="mock-screen">
            <Mock />
          </div>
        </div>

        {/* Info */}
        <div className="card-info">
          <div className="card-category">{project.category}</div>
          <h3 className="card-title">{project.title}</h3>
          <p className="card-desc">{project.description}</p>
          <div
            className="card-cta"
            style={{ borderColor: project.accent, color: project.accent }}
          >
            View Project <span className="arrow">→</span>
          </div>
        </div>
      </div>

      {/* Border gradient */}
      <div
        className="card-border"
        style={{
          background: `linear-gradient(135deg, ${project.accent}66, transparent, ${project.accent}33)`,
        }}
      />
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────────
export default function Projects() {
  const [titleRef, titleVisible] = useIntersectionObserver();

  return (
    <section id="projects" className="projects">
      {/* Title */}
      <div
        ref={titleRef}
        className={`projects-title-wrap ${titleVisible ? "visible" : ""}`}
      >
        <h2 className="projects-title">
          Latest<span>Project</span>
        </h2>
        <p className="projects-subtitle">Selected works &amp; case studies</p>
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
