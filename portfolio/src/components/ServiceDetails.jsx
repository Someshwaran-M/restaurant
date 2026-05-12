import { useParams, useNavigate } from "react-router-dom";
import "../styles/servicedetails.css";

const servicesData = {
  1: {
    title: "Frontend Development",
    subtitle: "Modern UI / UX Engineering",
    desc: "I create visually appealing, responsive, and high-performance user interfaces using modern frontend technologies.",
    features: [
      "Pixel-perfect UI implementation",
      "Responsive design for all devices",
      "Smooth animations & transitions",
      "API integration with real-time data",
    ],
    tools: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind"],
    process: [
      "Requirement analysis",
      "Wireframing & UI design",
      "Component-based development",
      "Testing & optimization",
    ],
  },

  2: {
    title: "Backend Development",
    subtitle: "Scalable Server Systems",
    desc: "I develop secure and scalable backend systems using Python and Django.",
    features: [
      "REST API development",
      "Authentication systems",
      "Database integration",
      "Secure backend logic",
    ],
    tools: ["Python", "Django", "Django REST", "JWT"],
    process: [
      "Database design",
      "API development",
      "Security implementation",
      "Deployment",
    ],
  },

  3: {
    title: "Database Management",
    subtitle: "Efficient Data Systems",
    desc: "Designing structured and optimized databases for performance and scalability.",
    features: [
      "Database schema design",
      "Query optimization",
      "Data relationships",
      "Secure data handling",
    ],
    tools: ["MySQL", "SQLite"],
    process: [
      "Data modeling",
      "Table structure creation",
      "Optimization",
      "Backup & maintenance",
    ],
  },

  4: {
    title: "Full Stack Development",
    subtitle: "Complete Web Solutions",
    desc: "Building complete applications from frontend to backend with seamless integration.",
    features: [
      "End-to-end development",
      "API integration",
      "Scalable architecture",
      "Real-world applications",
    ],
    tools: ["React", "Django", "MySQL"],
    process: [
      "Planning",
      "Frontend + Backend development",
      "Integration",
      "Testing & Deployment",
    ],
  },

  5: {
    title: "Debugging & Optimization",
    subtitle: "Performance Enhancement",
    desc: "Fixing bugs and improving performance for smoother applications.",
    features: [
      "Bug fixing",
      "Performance tuning",
      "Code refactoring",
      "Error handling",
    ],
    tools: ["Chrome DevTools", "Debugger"],
    process: [
      "Identify issues",
      "Fix errors",
      "Optimize code",
      "Testing",
    ],
  },

  6: {
    title: "Deployment & Hosting",
    subtitle: "Live Application Setup",
    desc: "Deploying applications to production with best practices.",
    features: [
      "Cloud deployment",
      "Domain setup",
      "CI/CD integration",
      "Performance monitoring",
    ],
    tools: ["Vercel", "Render", "GitHub"],
    process: [
      "Build optimization",
      "Deploy setup",
      "Monitoring",
      "Maintenance",
    ],
  },
};

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData[id];

  if (!service) return <h2 style={{ color: "white" }}>Not Found</h2>;

  return (
    <div className="details-container">
      
      {/* 🔙 Back Button */}
      <button className="back-btn" onClick={() => navigate("/services")}>
        ← Back
      </button>

      {/* 🔥 HERO SECTION */}
      <div className="details-hero">
        <h1>{service.title}</h1>
        <h3>{service.subtitle}</h3>
        <p>{service.desc}</p>
      </div>

      {/* ⚡ FEATURES */}
      <div className="details-section">
        <h2>What I Offer</h2>
        <div className="card-grid">
          {service.features.map((item, i) => (
            <div key={i} className="info-card" style={{ animationDelay: `${i * 0.1}s` }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 🛠 TOOLS */}
      <div className="details-section">
        <h2>Tools & Technologies</h2>
        <div className="tag-grid">
          {service.tools.map((tool, i) => (
            <span key={i} className="tag">{tool}</span>
          ))}
        </div>
      </div>

      {/* 🚀 PROCESS */}
      <div className="details-section">
        <h2>My Process</h2>
        <div className="process-grid">
          {service.process.map((step, i) => (
            <div key={i} className="process-step">
              <span>{i + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;