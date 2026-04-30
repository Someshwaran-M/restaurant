import { useEffect, useRef } from "react";
import { motion } from "framer-motion"; // ✅ FIXED
import "../styles/about.css";

function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

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
      { threshold: 0.15 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-blob about-blob--left" />
      <div className="about-blob about-blob--right" />

      {/* LEFT — IMAGE */}
      <motion.div
        className="about-left"
        ref={leftRef}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-ring-outer">
          <div className="about-ring-inner">
            <img
              className="profile-img"
              src="/profile.jpg"   // ✅ FIXED (use public)
              alt="Someshwaran"
            />
          </div>
        </div>
      </motion.div>

      {/* RIGHT — CONTENT */}
      <motion.div
        className="about-right"
        ref={rightRef}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="about-title">
          About <span className="about-title--cyan">Me</span>
        </h2>

        <h3 className="about-role">Full Stack Developer</h3>

        <p className="about-desc">
          I am a passionate Full Stack Developer with strong skills in React.js,
          Python, and Django. I specialize in building responsive web applications,
          developing REST APIs, and creating user-friendly interfaces.
        </p>

        <p className="about-desc">
          During my internships, I worked on real-world projects where I implemented
          dynamic features, optimized performance, and improved application usability.
          I enjoy solving problems and writing clean, efficient code.
        </p>

        <p className="about-desc">
          I am currently seeking an entry-level developer role where I can contribute
          to impactful projects while continuously learning and growing in the IT industry.
        </p>

        {/* ✅ REALISTIC STATS */}
        <div className="about-stats">
          <div className="stat-chip">
            <span className="stat-number">Fresher</span>
            <span className="stat-label">Status</span>
          </div>
          <div className="stat-chip">
            <span className="stat-number">3+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-chip">
            <span className="stat-number">2</span>
            <span className="stat-label">Internships</span>
          </div>
        </div>

        <a href="#projects" className="about-btn">
          View Projects
        </a>
      </motion.div>
    </section>
  );
}

export default About;