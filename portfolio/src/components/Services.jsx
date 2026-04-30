import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/services.css";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLaptopCode,
  FaBug,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode size={38} color="var(--cyan)" />,
    title: "Frontend Development",
    desc: "Building responsive and interactive user interfaces using React.js, HTML, CSS, and JavaScript.",
    more: [
      "React.js (Hooks, Components)",
      "Responsive UI (Flexbox, Grid)",
      "Modern UI/UX Practices",
      "API Integration",
    ],
  },
  {
    id: 2,
    icon: <FaServer size={38} color="var(--cyan)" />,
    title: "Backend Development",
    desc: "Developing scalable backend systems using Python and Django.",
    more: [
      "Django REST Framework",
      "Authentication & Authorization",
      "API Development",
      "Server-side Logic",
    ],
  },
  {
    id: 3,
    icon: <FaDatabase size={38} color="var(--cyan)" />,
    title: "Database Management",
    desc: "Designing and managing databases using MySQL.",
    more: [
      "MySQL Database Design",
      "Query Optimization",
      "CRUD Operations",
      "Data Handling",
    ],
  },
  {
    id: 4,
    icon: <FaLaptopCode size={38} color="var(--cyan)" />,
    title: "Full Stack Development",
    desc: "Building complete web applications with frontend and backend integration.",
    more: [
      "End-to-End Web Apps",
      "Frontend + Backend Integration",
      "Real-world Projects",
      "Scalable Architecture",
    ],
  },
  {
    id: 5,
    icon: <FaBug size={38} color="var(--cyan)" />,
    title: "Debugging & Optimization",
    desc: "Improving performance and fixing bugs efficiently.",
    more: [
      "Error Debugging",
      "Performance Optimization",
      "Code Refactoring",
      "Clean Code Practices",
    ],
  },
  {
    id: 6,
    icon: <FaCloud size={38} color="var(--cyan)" />,
    title: "Deployment & Hosting",
    desc: "Deploying applications using modern platforms.",
    more: [
      "Vercel Deployment",
      "GitHub Integration",
      "Hosting & Domain Setup",
      "Production Optimization",
    ],
  },
];

const Services = () => {
  const cardsRef = useRef([]);
  const [activeCard, setActiveCard] = useState(null); // kept (safe)
  const timerRef = useRef(null); // kept (safe)
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <section id="services" className="services">
      <div className="srv-blob srv-blob--tl" />
      <div className="srv-blob srv-blob--br" />

      <div className="services-header">
        <h2 className="services-title">
          My <span className="services-title--cyan">Services</span>
        </h2>
      </div>

      <div className="services-grid">
        {services.map((srv, i) => (
          <div
            key={srv.id}
            className="srv-card"
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="srv-card__glow" />

            <div className="srv-card__icon">{srv.icon}</div>
            <h3 className="srv-card__title">{srv.title}</h3>
            <p className="srv-card__desc">{srv.desc}</p>

            {/* ✅ ONLY NAVIGATION BUTTON */}
            <button
              className="srv-card__btn"
              onClick={() => navigate(`/service/${srv.id}`)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;