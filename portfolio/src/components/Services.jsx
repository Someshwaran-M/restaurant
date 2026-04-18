import { useEffect, useRef } from "react";
import "../styles/services.css";

const services = [
  {
    id: 1,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptate iste temporibus impedit reiciendis praesentium, eaque molestiae officia voluptas exercitationem? Est recusandae dolorem culpa qui incidunt, velit itaque nulla!",
  },
  {
    id: 2,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptate iste temporibus impedit reiciendis praesentium, eaque molestiae officia voluptas exercitationem? Est recusandae dolorem culpa qui incidunt, velit itaque nulla!",
  },
  {
    id: 3,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="var(--cyan)">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
    title: "App Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptate iste temporibus impedit reiciendis praesentium, eaque molestiae officia voluptas exercitationem? Est recusandae dolorem culpa qui incidunt, velit itaque nulla!",
  },
  {
    id: 4,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "SEO Optimization",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptate iste temporibus impedit reiciendis praesentium, eaque molestiae officia voluptas exercitationem? Est recusandae dolorem culpa qui incidunt, velit itaque nulla!",
  },
  {
    id: 5,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptate iste temporibus impedit reiciendis praesentium, eaque molestiae officia voluptas exercitationem? Est recusandae dolorem culpa qui incidunt, velit itaque nulla!",
  },
  {
    id: 6,
    icon: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Content Writing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptate iste temporibus impedit reiciendis praesentium, eaque molestiae officia voluptas exercitationem? Est recusandae dolorem culpa qui incidunt, velit itaque nulla!",
  },
];

function Services() {
  const cardsRef = useRef([]);

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
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services">
      {/* Background blobs */}
      <div className="srv-blob srv-blob--tl" />
      <div className="srv-blob srv-blob--br" />

      {/* Section heading */}
      <div className="services-header">
        <h2 className="services-title">
          My <span className="services-title--cyan">Services</span>
        </h2>
      </div>

      {/* Cards grid */}
      <div className="services-grid">
        {services.map((srv, i) => (
          <div
            key={srv.id}
            className="srv-card"
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* Glowing border effect layer */}
            <div className="srv-card__glow" />

            <div className="srv-card__icon">{srv.icon}</div>
            <h3 className="srv-card__title">{srv.title}</h3>
            <p className="srv-card__desc">{srv.desc}</p>
            <button className="srv-card__btn">learn more</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
