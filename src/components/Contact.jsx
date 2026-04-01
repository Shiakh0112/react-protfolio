import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix leaflet default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

gsap.registerPlugin(ScrollTrigger);

// ── Replace these with your EmailJS credentials ──
const SERVICE_ID = "service_ca795es";
const TEMPLATE_ID = "template_dra53j8";
const PUBLIC_KEY = "onusMOTr-tFoCv8wp";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Shiakh0112",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shaikh-ashfaq-shaikh-qayyum",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(229,197,133,0.15)",
  padding: "14px 18px",
  fontSize: "13px",
  color: "var(--text-white)",
  fontFamily: '"Montserrat", sans-serif',
  outline: "none",
  transition: "border-color 0.3s ease",
};

const pts = [
  { top: "12%", left: "8%", size: 3 },
  { top: "25%", left: "18%", size: 2 },
  { top: "70%", left: "6%", size: 4 },
  { top: "80%", left: "22%", size: 2 },
  { top: "15%", right: "10%", size: 3 },
  { top: "40%", right: "7%", size: 2 },
  { top: "65%", right: "15%", size: 4 },
  { top: "88%", right: "25%", size: 2 },
  { top: "50%", left: "3%", size: 2 },
  { top: "35%", right: "3%", size: 3 },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const headRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const btnTextRef = useRef(null);
  const lineLeftRef = useRef(null);
  const lineRightRef = useRef(null);
  const socialsRef = useRef(null);
  const formRef = useRef(null);
  const leftRef = useRef(null);
  const particlesRef = useRef([]);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgTextRef.current,
        { xPercent: -8 },
        {
          xPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
      tl.fromTo(
        lineLeftRef.current,
        { scaleX: 0, transformOrigin: "right center" },
        { scaleX: 1, duration: 0.8, ease: "power3.out" },
      )
        .fromTo(
          lineRightRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.8, ease: "power3.out" },
          "<",
        )
        .fromTo(
          headRef.current,
          { yPercent: 80, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, ease: "power4.out" },
          "-=0.4",
        )
        .fromTo(
          subRef.current,
          { yPercent: 40, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          leftRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          formRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "<",
        )
        .fromTo(
          btnRef.current,
          { scale: 0.7, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)" },
          "-=0.3",
        )
        .fromTo(
          socialsRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.3",
        );
      particlesRef.current.forEach((p, i) => {
        if (!p) return;
        gsap.to(p, {
          y: gsap.utils.random(-30, 30),
          x: gsap.utils.random(-20, 20),
          duration: gsap.utils.random(3, 6),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onBtnMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const dy = (e.clientY - rect.top - rect.height / 2) * 0.35;
    gsap.to(btnRef.current, {
      x: dx,
      y: dy,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(btnTextRef.current, {
      x: dx * 0.5,
      y: dy * 0.5,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const onBtnOut = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1,0.4)",
    });
    gsap.to(btnTextRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1,0.4)",
    });
  };
  const focusInput = (e) =>
    (e.target.style.borderColor = "rgba(229,197,133,0.6)");
  const blurInput = (e) =>
    (e.target.style.borderColor = "rgba(229,197,133,0.15)");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    setStatus("sending");
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.get("from_name"),
          from_email: data.get("from_email"),
          subject: data.get("subject"),
          message: data.get("message"),
        },
        PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section relative overflow-hidden flex flex-col items-center justify-center"
      style={{ background: "#0a0c10", minHeight: "100vh", zIndex: 99 }}
    >
      {/* top border */}
      <div
        className="absolute"
        style={{
          top: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(229,197,133,0.4), transparent)",
        }}
      />

      {/* bg ghost text */}
      <div
        ref={bgTextRef}
        className="absolute whitespace-nowrap pointer-events-none select-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: '"Playfair Display", serif',
          fontSize: "clamp(80px, 18vw, 220px)",
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: "1px rgba(229,197,133,0.05)",
          letterSpacing: "-4px",
          zIndex: 0,
        }}
      >
        CONTACT ME
      </div>

      {/* particles */}
      {pts.map((p, i) => (
        <div
          key={i}
          ref={(el) => (particlesRef.current[i] = el)}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            width: p.size + "px",
            height: p.size + "px",
            background: "rgba(229,197,133,0.5)",
            boxShadow: `0 0 ${p.size * 3}px rgba(229,197,133,0.4)`,
          }}
        />
      ))}

      {/* center glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(201,169,97,0.06) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* CONTENT */}
      <div
        className="relative text-center w-full mx-auto"
        style={{ zIndex: 1, maxWidth: "1100px" }}
      >
        {/* label + lines */}
        <div
          className="flex items-center justify-center"
          style={{ gap: "20px", marginBottom: "32px" }}
        >
          <div
            ref={lineLeftRef}
            style={{
              width: "80px",
              height: "1px",
              background:
                "linear-gradient(to left, rgba(229,197,133,0.6), transparent)",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "5px",
              color: "var(--accent-light-gold-text)",
            }}
          >
            ✦ Get In Touch
          </span>
          <div
            ref={lineRightRef}
            style={{
              width: "80px",
              height: "1px",
              background:
                "linear-gradient(to right, rgba(229,197,133,0.6), transparent)",
            }}
          />
        </div>

        {/* heading */}
        <div className="overflow-hidden" style={{ marginBottom: "12px" }}>
          <h2
            ref={headRef}
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(40px, 7vw, 88px)",
              fontWeight: 900,
              color: "var(--text-white)",
              lineHeight: 1,
              margin: 0,
              letterSpacing: "-2px",
            }}
          >
            Let's Build
            <span
              className="block"
              style={{
                WebkitTextStroke: "1px rgba(229,197,133,0.8)",
                color: "transparent",
              }}
            >
              Something Great
            </span>
          </h2>
        </div>

        {/* sub */}
        <p
          ref={subRef}
          style={{
            fontSize: "15px",
            color: "var(--text-gray)",
            maxWidth: "460px",
            margin: "0 auto 64px",
            lineHeight: 1.8,
          }}
        >
          Open to full-time roles, freelance projects, and exciting
          collaborations. Drop a message — I respond within 24 hours.
        </p>

        {/* TWO COLUMN */}
        <div className="contact-grid">
          {/* LEFT */}
          <div ref={leftRef} className="flex flex-col" style={{ gap: "36px" }}>
            <p
              style={{
                fontSize: "13px",
                color: "var(--text-gray)",
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              I'm currently available for new opportunities. Whether you have a
              project in mind, want to collaborate, or just want to say hi — my
              inbox is always open.
            </p>

            <div className="flex flex-col" style={{ gap: "20px" }}>
              {[
                {
                  icon: "✉",
                  label: "Email",
                  value: "khatikashfaq992@gmail.com",
                  href: "mailto:khatikashfaq992@gmail.com",
                },
                { icon: "📍", label: "Location", value: "Jalgaon, Maharashtra", href: null },
                {
                  icon: "⚡",
                  label: "Status",
                  value: "Available for work",
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center"
                  style={{ gap: "16px" }}
                >
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: "42px",
                      height: "42px",
                      border: "1px solid rgba(229,197,133,0.2)",
                      fontSize: "16px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        color: "var(--accent-light-gold-text)",
                        marginBottom: "2px",
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{ fontSize: "13px", color: "var(--text-white)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        style={{ fontSize: "13px", color: "var(--text-white)" }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  color: "var(--accent-light-gold-text)",
                  marginBottom: "16px",
                }}
              >
                Follow Me
              </div>
              <div ref={socialsRef} className="flex" style={{ gap: "12px" }}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    title={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center"
                    style={{
                      width: "44px",
                      height: "44px",
                      border: "1px solid rgba(229,197,133,0.2)",
                      color: "var(--text-gray)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(229,197,133,0.7)";
                      e.currentTarget.style.color = "var(--accent-light-gold)";
                      e.currentTarget.style.background =
                        "rgba(229,197,133,0.07)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(229,197,133,0.2)";
                      e.currentTarget.style.color = "var(--text-gray)";
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div style={{ width: '100%', height: '200px', border: '1px solid rgba(229,197,133,0.2)', overflow: 'hidden' }}>
              <MapContainer
                center={[21.0077, 75.5626]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ width: '100%', height: '100%' }}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                />
                <Marker position={[21.0077, 75.5626]}>
                  <Popup style={{ color: '#000' }}>Jalgaon, Maharashtra</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* RIGHT — form */}
          <form
            ref={formRef}
            className="flex flex-col"
            style={{ gap: "16px" }}
            onSubmit={handleSubmit}
          >
            <div className="contact-form-row">
              <div>
                <label
                  className="block"
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "var(--accent-light-gold-text)",
                    marginBottom: "8px",
                  }}
                >
                  Your Name
                </label>
                <input
                  name="from_name"
                  type="text"
                  placeholder="John Doe"
                  required
                  style={inputStyle}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>
              <div>
                <label
                  className="block"
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "var(--accent-light-gold-text)",
                    marginBottom: "8px",
                  }}
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  required
                  style={inputStyle}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>
            </div>
            <div>
              <label
                className="block"
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "var(--accent-light-gold-text)",
                  marginBottom: "8px",
                }}
              >
                Email Address
              </label>
              <input
                name="from_email"
                type="email"
                placeholder="john@example.com"
                required
                style={inputStyle}
                onFocus={focusInput}
                onBlur={blurInput}
              />
            </div>
            <div>
              <label
                className="block"
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "var(--accent-light-gold-text)",
                  marginBottom: "8px",
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                style={{ ...inputStyle, resize: "none" }}
                onFocus={focusInput}
                onBlur={blurInput}
              />
            </div>

            {/* status message */}
            {status === "success" && (
              <p
                style={{
                  fontSize: "12px",
                  color: "#4ade80",
                  fontWeight: 600,
                  letterSpacing: "1px",
                }}
              >
                ✓ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p
                style={{
                  fontSize: "12px",
                  color: "#f87171",
                  fontWeight: 600,
                  letterSpacing: "1px",
                }}
              >
                ✕ Something went wrong. Please try again.
              </p>
            )}

            <div
              className="inline-block self-start"
              onMouseMove={onBtnMove}
              onMouseEnter={() =>
                gsap.to(btnRef.current, {
                  scale: 1.05,
                  backgroundColor: "var(--text-white)",
                  y: -2,
                  boxShadow: "0 5px 20px rgba(229,197,133,0.3)",
                  duration: 0.3,
                })
              }
              onMouseLeave={() => {
                onBtnOut();
                gsap.to(btnRef.current, {
                  backgroundColor: "var(--accent-light-gold)",
                  boxShadow: "none",
                  duration: 0.3,
                });
              }}
            >
              <button
                ref={btnRef}
                type="submit"
                disabled={status === "sending"}
                className="flex items-center relative overflow-hidden"
                style={{
                  gap: "12px",
                  padding: "15px 35px",
                  backgroundColor: "var(--accent-light-gold)",
                  color: "var(--primary-black)",
                  border: "none",
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
                    animation: "btnShimmer 3s infinite",
                  }}
                />
                <span
                  ref={btnTextRef}
                  className="relative"
                  style={{ zIndex: 1 }}
                >
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* footer strip */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid rgba(229,197,133,0.08)",
          padding: "20px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "2px",
          }}
        >
          © 2025
        </span>
        <span
          style={{
            fontSize: "11px",
            color: "rgba(229,197,133,0.3)",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Designed & Built with ♥
        </span>
        <span
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "2px",
          }}
        >
          MERN Stack Dev
        </span>
      </div>

      <style>{`
        @keyframes btnShimmer { 0% { transform: translateX(-100%) } 60% { transform: translateX(100%) } 100% { transform: translateX(100%) } }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
        .contact-section { padding: 120px 60px 80px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; text-align: left; margin-bottom: 64px; align-items: start; }
        .contact-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 768px) { .contact-section { padding: 80px 24px 100px; } .contact-grid { grid-template-columns: 1fr; gap: 40px; } .contact-form-row { grid-template-columns: 1fr; } }
        @media (max-width: 480px) { .contact-section { padding: 72px 16px 100px; } }
      `}</style>
    </section>
  );
}
