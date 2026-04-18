import { useEffect, useRef, useState } from "react";
import "../styles/skills.css";

const technicalSkills = [
  {
    name: "HTML",
    percent: 90,
    color: "#e34f26",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#e34f26">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    ),
  },
  {
    name: "CSS",
    percent: 80,
    color: "#264de4",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#264de4">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    ),
  },
  {
    name: "Javascript",
    percent: 85,
    color: "#f7df1e",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#f7df1e">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
  },
  {
    name: "Python",
    percent: 70,
    color: "#a855f7",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#a855f7">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
      </svg>
    ),
  },
  {
    name: "React",
    percent: 85,
    color: "#61dafb",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#61dafb">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09c.745 0 1.377.22 1.801.654.76.782.912 2.387.506 4.408-.943-.24-1.98-.375-3.068-.414a28.552 28.552 0 0 0-2.007-2.967c1.177-1.115 2.315-1.68 2.768-1.68zm-10.266-.01c.456 0 1.607.554 2.784 1.672A28.46 28.46 0 0 0 7.4 6.757c-1.083.047-2.116.188-3.054.436-.39-1.995-.226-3.543.572-4.334.405-.43 1.03-.64 1.77-.64zM12 8.354c.94 0 1.856.071 2.73.205a26.37 26.37 0 0 1 1.28 2.205 26.358 26.358 0 0 1-1.02 2.233c-.88.14-1.806.209-2.766.209-.96 0-1.887-.07-2.77-.211a26.323 26.323 0 0 1-1.02-2.232c.382-.795.8-1.538 1.28-2.207.875-.133 1.789-.202 2.286-.202zm8.302 3.65c1.167.624 1.948 1.38 1.948 2c0 .62-.781 1.376-1.948 2-.507.272-1.06.5-1.66.693a27.08 27.08 0 0 0-1.115-2.693 27.038 27.038 0 0 0 1.112-2.69c.6.19 1.153.42 1.663.69zm-16.337.007c.505-.268 1.06-.494 1.655-.686.33.896.71 1.795 1.115 2.688a27.063 27.063 0 0 0-1.113 2.687c-.6-.19-1.153-.418-1.66-.688-1.167-.623-1.949-1.38-1.949-2 0-.62.782-1.376 1.952-2.001zm4.118 6.52c.362.115.727.217 1.09.307a27.14 27.14 0 0 0 1.116-2.704 26.28 26.28 0 0 0 1.28 2.207 26.6 26.6 0 0 0-2.696.427 26.33 26.33 0 0 0-.79-.237zm7.584-.005c-.26.083-.526.16-.796.232a27.112 27.112 0 0 0-2.692-.424 26.34 26.34 0 0 0 1.282-2.205 27.13 27.13 0 0 0 1.115 2.702c-.303-.077-.605-.15-.909-.305zm1.7 4.08c-.404.43-1.03.642-1.77.642-.456 0-1.607-.555-2.784-1.672.74-.836 1.436-1.812 2.017-2.972 1.084-.045 2.118-.185 3.056-.432.39 1.994.225 3.543-.52 4.434zm-10.88.13c-.743 0-1.376-.22-1.8-.654-.762-.782-.914-2.387-.507-4.408.935.238 1.975.372 3.063.41a27.14 27.14 0 0 0 2.007 2.967c-1.177 1.115-2.315 1.685-2.763 1.685z" />
      </svg>
    ),
  },
];

const professionalSkills = [
  { name: "Creativity", percent: 90 },
  { name: "Communication", percent: 75 },
  { name: "Problem Solving", percent: 75 },
  { name: "Teamwork", percent: 85 },
  { name: "Leadership", percent: 80},
  { name: "Quick Learner", percent: 85}
];

/* ── Circular progress SVG ── */
function CircleProgress({ percent, animated }) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animated ? percent / 100 : 0) * circumference;

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      {/* Track */}
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="7"
      />
      {/* Progress arc */}
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
      {/* Percentage text */}
      <text
        x="60"
        y="65"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="16"
        fontWeight="700"
        fontFamily="Poppins, sans-serif"
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
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      {/* Blobs */}
      <div className="sk-blob sk-blob--l" />
      <div className="sk-blob sk-blob--r" />

      <div className="skills-inner">
        {/* ── LEFT: Technical Skills ── */}
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
                {/* Icon + name row */}
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
                {/* Progress track */}
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{
                      width: animated ? `${sk.percent}%` : "0%",
                      background: `linear-gradient(90deg, var(--cyan), ${sk.color === "#61dafb" ? "#61dafb" : "var(--cyan)"})`,
                      transitionDelay: `${i * 0.12}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Professional Skills ── */}
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
