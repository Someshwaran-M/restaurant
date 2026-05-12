import { useState, useEffect, useRef } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";

/* ─── HOOK ───────────────────────── */
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
      { threshold: 0.12, ...options }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

/* 🔥 CONTACT ITEMS (SVG ICONS) */
const contactItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
    label: "Email",
    value: "msomesh43@gmail.com",
    href: "mailto:msomesh43@gmail.com",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.89.32 1.76.6 2.6a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 4 4l.66-.24a2 2 0 0 1 2.11.45c.84.28 1.71.48 2.6.6A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Phone",
    value: "+91 9384712673",
    href: "tel:+919384712673",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
    label: "Location",
    value: "Namakkal, Tamil Nadu, India",
    href: "#",
  },
];

/* 🔥 SOCIAL ICONS */
const socialLinks = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.3c-3.1.7-3.7-1.3-3.7-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 2.7.8 3.3 2 .1-.7.4-1.1.7-1.3-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 1.1.9-.2 1.8-.3 2.7-.3s1.8.1 2.7.3c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.7C23.2 5.4 18.3.5 12 .5z"/>
      </svg>
    ),
    label: "GitHub",
    href: "https://github.com/Someshwaran-M",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
        <path d="M20.45 20.45h-3.6v-5.5c0-1.3-.03-3-1.85-3-1.85 0-2.13 1.45-2.13 2.94v5.56H9.27V9h3.46v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.09 2.09 0 110-4.17 2.09 2.09 0 010 4.17zM7.14 20.45H3.54V9h3.6v11.45z"/>
      </svg>
    ),
    label: "LinkedIn",
    href: "https://linkedin.com/in/someshwaran-m-dev",
  },
];

/* ICONS */
function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* FORM */
function ContactForm({ isVisible }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  try {
    await emailjs.send(
      "service_l6wwgmo",
      "template_v3z3tt3",
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "ITIZsfkr8FcYyycK6"
    );

    setStatus("success");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setStatus("idle"), 3000);

  } catch (error) {
    console.error(error);
    setStatus("idle");
    alert("Failed to send message");
  }
};

  return (
    <div className={`contact-form-wrap ${isVisible ? "visible" : ""}`}>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input
  type="email"
  name="email"
  placeholder="Email"
  value={form.email}
  onChange={handleChange}
  required
/>
        </div>

        <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />

        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />

        {status === "success" && (
          <div className="success-banner">
            <CheckIcon /> Message sent!
          </div>
        )}

        <button type="submit" className="submit-btn">
          {status === "sending" ? "Sending..." : "Send Message"}
          <SendIcon />
        </button>
      </form>
    </div>
  );
}

/* MAIN */
export default function Contact() {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [infoRef, infoVisible] = useIntersectionObserver();
  const [formRef, formVisible] = useIntersectionObserver();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-blob blob-1" />
      <div className="contact-blob blob-2" />

      <div ref={titleRef} className={`contact-title-wrap ${titleVisible ? "visible" : ""}`}>
        <h2 className="contact-title">Get In <span>Touch</span></h2>
      </div>

      <div className="contact-layout">
        <div ref={infoRef} className={`contact-info ${infoVisible ? "visible" : ""}`}>
          {contactItems.map((item) => (
            <a key={item.label} className="contact-item" href={item.href}>
              <div className="item-icon">{item.icon}</div>
              <div>
                <strong>{item.label}</strong>
                <p>{item.value}</p>
              </div>
            </a>
          ))}

          <div className="social-row">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" className="social-btn">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div ref={formRef}>
          <ContactForm isVisible={formVisible} />
        </div>
      </div>
    </section>
  );
}