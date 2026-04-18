import { useEffect, useState } from "react";
import "../styles/hero.css";
// Uncomment and update path when you have your photo:
// import photo from "../assets/images/photo.jpeg";

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

  /* ── Typewriter logic ── */
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80,
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

  const socials = [
    {
      label: "Facebook",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "Linkedin",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.27 8.27 0 0 0 4.83 1.55V7a4.85 4.85 0 0 1-1.06-.31z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="home" className="hero">
      {/* Ambient glow blob */}
      <div className="hero-blob" />

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <p className="hero-greeting">Hello, It's Me</p>

        <h1 className="hero-name">Someshwaran M</h1>

        <p className="hero-role-line">
          And I'm a{" "}
          <span className="hero-role-typed">
            {displayed}
            <span className="cursor">|</span>
          </span>
        </p>

        <p className="hero-desc">
         Full Stack Developer (Fresher) with hands-on experience in Python and React.js, gained through internships and academic projects. Skilled in building responsive web applications, developing REST APIs, and creating user-friendly interfaces. Passionate about developing scalable solutions and continuously learning modern technologies.Looking for an entry-level Full Stack Developer role to apply and enhance my skills.
        </p>

        {/* Social Icons */}
        <div className="hero-socials">
          {socials.map((s, i) => (
            <button
              key={s.label}
              className="social-btn"
              aria-label={s.label}
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              {s.icon}
            </button>
          ))}
        </div>

        <button className="btn-more">More About Me</button>
      </div>

      {/* RIGHT — Profile Photo */}
      <div className="hero-right">
        <div className="photo-ring-outer">
          <div className="photo-ring-inner">
            {/* Replace the placeholder below with your actual image: */}
            {/* <img className="profile-img" src={photo} alt="Someshwaran" /> */}
            <div className="profile-placeholder">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,0.15)"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="scroll-hint" aria-label="Scroll up">
        ↑
      </div>
    </section>
  );
}

export default Hero;
