import { useState, useEffect, useRef } from "react";
import "../styles/contact.css";

// ─── HOOK ───────────────────────────────────────────────────────────────────────
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
      { threshold: 0.12, ...options },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

// ─── DATA ───────────────────────────────────────────────────────────────────────
const contactItems = [
  {
    icon: "📧",
    label: "Email",
    value: "msomesh43@gmail.com",
    href: "mailto:msomesh43@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 9384712673",
    href: "tel:+91 9384712673",
  },
  { icon: "📍", label: "Location", value: "Namakkal,Tamil Nadu, India", href: "#" },
];

const socialLinks = [
  { icon: "🐙", label: "GitHub", href: "https://github.com" },
  { icon: "💼", label: "LinkedIn", href: "https://linkedin.com" },
  { icon: "🐦", label: "Twitter", href: "https://twitter.com" },
  { icon: "📸", label: "Instagram", href: "https://instagram.com" },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────────
function SendIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ─── CONTACT FORM ────────────────────────────────────────────────────────────────
function ContactForm({ isVisible }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // ── Replace this with your real API / EmailJS / Formspree call ──
    await new Promise((res) => setTimeout(res, 1800));

    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <div className={`contact-form-wrap ${isVisible ? "visible" : ""}`}>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {/* Row: Name + Email */}
        <div className="form-row">
          <div className="field">
            <label htmlFor="cf-name">Your Name</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="cf-email">Email Address</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Subject */}
        <div className="field">
          <label htmlFor="cf-subject">Subject</label>
          <input
            id="cf-subject"
            name="subject"
            type="text"
            placeholder="Project enquiry / Collaboration / Other"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div className="field">
          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            name="message"
            placeholder="Tell me about your project, idea, or just say hi..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Success banner */}
        {status === "success" && (
          <div className="success-banner">
            <CheckIcon />
            Message sent! I'll get back to you soon.
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className={`submit-btn ${status === "sending" ? "sending" : ""}`}
          disabled={status !== "idle"}
        >
          {status === "sending" ? (
            <>
              <span className="spinner" />
              <span>Sending…</span>
            </>
          ) : status === "success" ? (
            <>
              <CheckIcon />
              <span>Sent!</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <SendIcon />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────────
export default function Contact() {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [infoRef, infoVisible] = useIntersectionObserver();
  const [formRef, formVisible] = useIntersectionObserver();

  return (
    <section id="contact" className="contact-section">
      {/* Animated background blobs */}
      <div className="contact-blob blob-1" />
      <div className="contact-blob blob-2" />

      {/* ── Title ── */}
      <div
        ref={titleRef}
        className={`contact-title-wrap ${titleVisible ? "visible" : ""}`}
      >
        <h2 className="contact-title">
          Get In<span>Touch</span>
        </h2>
        <p className="contact-subtitle">Let's work together</p>
      </div>

      {/* ── Two-column layout ── */}
      <div className="contact-layout">
        {/* Info panel */}
        <div
          ref={infoRef}
          className={`contact-info ${infoVisible ? "visible" : ""}`}
        >
          <h3 className="info-headline">
            Let's build something <em>amazing</em> together
          </h3>
          <p className="info-desc">
            I'm currently available for freelance work and full-time
            opportunities. Whether you have a project in mind or just want to
            say hello, feel free to reach out — I'll get back to you as soon as
            possible.
          </p>

          {/* Contact items */}
          <div className="contact-items">
            {contactItems.map((item) => (
              <a
                key={item.label}
                className="contact-item"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <div className="item-icon">{item.icon}</div>
                <div className="item-text">
                  <span className="item-label">{item.label}</span>
                  <span className="item-value">{item.value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Social row */}
          <div className="social-row">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                className="social-btn"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Form panel */}
        <div ref={formRef}>
          <ContactForm isVisible={formVisible} />
        </div>
      </div>
    </section>
  );
}
