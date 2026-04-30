import { useEffect, useRef, useState } from "react";
import "../styles/skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaServer
} from "react-icons/fa";
import { motion } from "framer-motion";

/* 🔥 UPDATED TECHNICAL SKILLS */
const technicalSkills = [
  {
    name: "HTML",
    percent: 90,
    color: "#e34f26",
    icon: <FaHtml5 color="#e34f26" size={22} />,
  },
  {
    name: "CSS",
    percent: 85,
    color: "#264de4",
    icon: <FaCss3Alt color="#264de4" size={22} />,
  },
  {
    name: "JavaScript",
    percent: 80,
    color: "#f7df1e",
    icon: <FaJs color="#f7df1e" size={22} />,
  },
  {
    name: "React",
    percent: 75,
    color: "#61dafb",
    icon: <FaReact color="#61dafb" size={22} />,
  },
  {
    name: "Python",
    percent: 75,
    color: "#3776ab",
    icon: <FaPython color="#3776ab" size={22} />,
  },
  {
    name: "Django / REST API",
    percent: 70,
    color: "#00e5ff",
    icon: <FaServer color="#00e5ff" size={22} />,
  },
];
/* 🔥 UPDATED PROFESSIONAL SKILLS */
const professionalSkills = [
  { name: "Problem Solving", percent: 85 },
  { name: "Team Collaboration", percent: 85 },
  { name: "Communication", percent: 75 },
  { name: "Adaptability", percent: 80 },
  { name: "Time Management", percent: 80 },
  { name: "Quick Learner", percent: 90 },
];

/* 🔥 Circular Progress */
function CircleProgress({ percent, animated }) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animated ? percent / 100 : 0) * circumference;

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="7"
      />

      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke="var(--cyan)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "center",
          transition: animated
            ? "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)"
            : "none",
          filter: "drop-shadow(0 0 6px rgba(0,229,255,0.7))",
        }}
      />

      <text
        x="60"
        y="65"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="16"
        fontWeight="700"
      >
        {animated ? `${percent}%` : "0%"}
      </text>
    </svg>
  );
}

function Skills() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const barRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="sk-blob sk-blob--l" />
      <div className="sk-blob sk-blob--r" />

      <div className="skills-inner">
        {/* LEFT */}
        <div className="skills-col">
          <h2 className="skills-col-title">Technical Skills</h2>

          <div className="skills-bars">
            {technicalSkills.map((sk, i) => (
              <div
                key={sk.name}
                className="skill-bar-wrap"
                ref={(el) => (barRefs.current[i] = el)}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="skill-label-row">
                  <span className="skill-icon">{sk.icon}</span>
                  <span className="skill-name">{sk.name}</span>

                  <span
                    className="skill-percent-badge"
                    style={{
                      opacity: animated ? 1 : 0,
                      transition: "opacity 0.4s ease 0.8s",
                    }}
                  >
                    {sk.percent}%
                  </span>
                </div>

                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{
                      width: animated ? `${sk.percent}%` : "0%",
                      background: `linear-gradient(90deg, var(--cyan), ${sk.color})`,
                      transitionDelay: `${i * 0.12}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="skills-col">
          <h2 className="skills-col-title">Professional Skills</h2>

          <div className="skills-circles">
            {professionalSkills.map((sk) => (
              <div key={sk.name} className="circle-wrap">
                <CircleProgress percent={sk.percent} animated={animated} />
                <p className="circle-label">{sk.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;