import { useEffect, useRef } from "react";
import "../styles/about.css";
// import photo from "../assets/images/photo.jpeg"; // ← uncomment with your photo path

function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  /* Scroll-triggered reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      {/* Ambient blobs */}
      <div className="about-blob about-blob--left" />
      <div className="about-blob about-blob--right" />

      {/* ── LEFT — Photo ring ── */}
      <div className="about-left" ref={leftRef}>
        <div className="about-ring-outer">
          <div className="about-ring-inner">
            {/*
              Replace the placeholder below with your real photo:
              <img className="about-photo" src={photo} alt="Someshwaran" />
            */}
            <div className="about-photo-placeholder">
              <svg
                width="90"
                height="90"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,0.12)"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT — Content ── */}
      <div className="about-right" ref={rightRef}>
        <h2 className="about-title">
          About <span className="about-title--cyan">Me</span>
        </h2>

        <h3 className="about-role">Full Stack Developer!</h3>

        <p className="about-desc">
          I am a passionate Full Stack Developer with a strong foundation in Python and React.
          js, gained through internships and academic projects. I have hands-on experience in
           building responsive web applications, developing REST APIs, and creating intuitive
            user interfaces using modern frontend technologies like HTML, CSS, and JavaScript.
        </p>
        <p className="about-desc">
          During my internships, I worked on real-world applications, implementing features 
          such as data management systems, search functionality, and performance optimization.
           I enjoy solving problems, writing clean and efficient code, and continuously 
           learning new technologies to improve my development skills.
        </p>
        <p className="about-desc">
          I am highly motivated to start my professional journey as a software developer, 
          where I can contribute to meaningful projects and grow within the IT industry.
        </p>

        {/* Stats chips — extra details */}
        <div className="about-stats">
          <div className="stat-chip">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-chip">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects Done</span>
          </div>
          <div className="stat-chip">
            <span className="stat-number">10+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>

        <button className="about-btn">More About Me</button>
      </div>
    </section>
  );
}

export default About;
