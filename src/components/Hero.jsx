import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";
import { FaWhatsapp, FaLinkedin ,FaGithub} from "react-icons/fa";
// ❌ removed import photo (important)

const roles = [
  "Frontend Developer",
  "Web Designer",
  "React Developer",
  "Full Stack Developer",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1600);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  const socials = [
  {
    label: "WhatsApp",
    link: "https://wa.me/9384712673",
    icon: <FaWhatsapp />,
  },
  
  {
    label: "Linkedin",
    link: "https://linkedin.com/in/someshwaran-m-dev",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    link: "https://github.com/Someshwaran-M",
    icon: <FaGithub />,
  },

];

  return (
    <section id="home" className="hero">
      <div className="hero-blob" />

      <motion.div className="hero-left" initial="hidden" animate="show">
        <motion.p variants={fadeUp} custom={1} className="hero-greeting">
          Hello, It's Me
        </motion.p>

        <motion.h1 variants={fadeUp} custom={2} className="hero-name">
          Someshwaran M
        </motion.h1>

        <motion.p variants={fadeUp} custom={3} className="hero-role-line">
          And I'm a{" "}
          <span className="hero-role-typed">
            {displayed}
            <span className="cursor">|</span>
          </span>
        </motion.p>

        <motion.p variants={fadeUp} custom={4} className="hero-desc">
          I Have hands-on experience in building scalable web applications 
          using React.js, Python, and Django. Skilled in developing responsive user interfaces, 
          designing RESTful APIs, and managing databases with MySQL. Experienced in integrating 
          frontend and backend systems to deliver efficient, user-focused solutions. Strong 
          problem-solving mindset with practical exposure through internships and real-world projects.
        </motion.p>

        <motion.div className="hero-socials" variants={fadeUp} custom={5}>
          {socials.map((s, i) => (
            <a
              key={s.label}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={6}
          style={{ display: "flex", gap: "12px" }}
        >
          <a href="#about" className="btn-more">
            More About Me
          </a>

          <a href="/Somesh_resume.pdf" download className="btn-more">
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* ✅ IMAGE FIXED */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="photo-ring-outer">
          <div className="photo-ring-inner">
            <img
              className="profile-img"
              src="/profile.jpg"
              alt="Someshwaran"
            />
          </div>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;