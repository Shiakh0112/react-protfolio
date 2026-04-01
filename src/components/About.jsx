import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../assets/images/about2.JPG";
gsap.registerPlugin(ScrollTrigger);

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
  "REST APIs",
  "JWT Auth",
];

export default function About() {
  const sectionRef = useRef(null);
  const aboutBtnRef = useRef(null);
  const aboutBtnTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-img-wrap", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-img-wrap", start: "top 80%" },
      });
      gsap.from(".about-img-border", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: { trigger: ".about-img-wrap", start: "top 80%" },
      });
      gsap.from(".about-tag", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-tag", start: "top 85%" },
      });
      gsap.from(".about-char", {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-heading", start: "top 85%" },
      });
      gsap.from(".about-divider", {
        scaleX: 0,
        duration: 1,
        ease: "power3.out",
        transformOrigin: "left",
        scrollTrigger: { trigger: ".about-divider", start: "top 90%" },
      });
      gsap.from(".about-para", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-para", start: "top 85%" },
      });
      gsap.from(".info-item", {
        x: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".info-grid", start: "top 85%" },
      });
      gsap.from(".about-btn", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-btn", start: "top 90%" },
      });
      gsap.from(".exp-num", {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: { trigger: ".exp-badge", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onAboutBtnMove = (e) => {
    const rect = aboutBtnRef.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const dy = (e.clientY - rect.top - rect.height / 2) * 0.35;
    gsap.to(aboutBtnRef.current, {
      x: dx,
      y: dy,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(aboutBtnTextRef.current, {
      x: dx * 0.5,
      y: dy * 0.5,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const onAboutBtnOut = () => {
    gsap.to(aboutBtnRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      backgroundColor: "var(--accent-light-gold)",
      boxShadow: "none",
      duration: 0.6,
      ease: "elastic.out(1,0.4)",
    });
    gsap.to(aboutBtnTextRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1,0.4)",
    });
  };

  const heading = "About Me";

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section relative overflow-hidden"
      style={{ background: "var(--primary-black)", zIndex: 99 }}
    >
      <div className="about-grid mx-auto" style={{ maxWidth: "1200px" }}>
        {/* LEFT — Image */}
        <div className="about-img-wrap relative w-full">
          {/* outer decorative border */}
          <div
            className="about-img-border absolute pointer-events-none"
            style={{
              top: "-16px",
              left: "-16px",
              width: "100%",
              height: "100%",
              border: "1px solid rgba(229,197,133,0.15)",
            }}
          />

          {/* main frame */}
          <div
            className="relative w-full"
            style={{
              aspectRatio: "4/5",
              border: "1px solid var(--border-color)",
              padding: "12px",
            }}
          >
            <div
              className="relative overflow-hidden w-full h-full flex items-center justify-center"
              style={{
                background: "linear-gradient(160deg, #1f2028 0%, #0f1014 100%)",
              }}
            >
              {/* light sweep */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 40%, rgba(229,197,133,0.06) 50%, transparent 60%)",
                  animation: "lightMove 8s ease-in-out infinite",
                }}
              />

              <span
                className="relative"
                style={{
                  zIndex: 1,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  color: "var(--accent-light-gold)",
                }}
              >
                <img
                  src={about}
                  alt="Profile"
                  className="relative w-full object-cover about-img"
                  style={{
                    zIndex: 1,
                    mixBlendMode: "screen",
                    objectPosition: "50% 50%",
                  }}
                />
              </span>
            </div>
          </div>

          {/* Experience badge */}
          <div
            className="exp-badge absolute text-center"
            style={{
              bottom: "-20px",
              right: "-20px",
              background: "var(--accent-gold)",
              color: "var(--primary-dark)",
              padding: "20px 24px",
              zIndex: 2,
            }}
          >
            <span
              className="block"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "28px",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              Fresh
            </span>
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Graduate
            </span>
          </div>
        </div>

        {/* RIGHT — Details */}
        <div className="flex flex-col" style={{ gap: "24px" }}>
          <span
            className="about-tag"
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "4px",
              color: "var(--accent-light-gold-text)",
            }}
          >
            ✦ Get To Know Me
          </span>

          <h2
            className="about-heading"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(36px, 4vw, 52px)",
              lineHeight: 1.1,
              fontWeight: 700,
              color: "var(--text-white)",
            }}
          >
            {heading.split("").map((c, i) => (
              <span key={i} className="about-char inline-block">
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
          </h2>

          <div
            className="about-divider"
            style={{
              height: "1px",
              width: "80px",
              background:
                "linear-gradient(to right, var(--accent-light-gold), transparent)",
            }}
          />

          <p
            className="about-para"
            style={{
              fontSize: "15px",
              color: "var(--text-gray)",
              lineHeight: 1.8,
            }}
          >
            I'm a passionate Full Stack MERN Developer who loves building
            end-to-end web applications — from pixel-perfect frontends to robust
            backend APIs.
          </p>

          <p
            className="about-para"
            style={{
              fontSize: "15px",
              color: "var(--text-gray)",
              lineHeight: 1.8,
            }}
          >
            I work with MongoDB, Express.js, React, and Node.js to craft fast,
            scalable, and modern digital products. Always learning, always
            building.
          </p>

          {/* Info grid */}
          <div className="info-grid about-info-grid">
            {[
              ["Name", "Shaikh Ashfaq Shaikh Qayyum"],
              ["Status", "Open to Opportunities"],
            ].map(([label, value]) => (
              <div
                className="info-item"
                key={label}
                style={{
                  padding: "16px 20px",
                  background: "rgba(255,255,255,0.02)",
                  borderLeft: "2px solid var(--accent-light-gold)",
                }}
              >
                <span
                  className="block"
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "var(--accent-light-gold)",
                    marginBottom: "6px",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "var(--text-white)",
                    fontWeight: 500,
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <span
              className="block"
              style={{
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "3px",
                color: "var(--text-gray)",
                marginBottom: "14px",
              }}
            >
              Tech Stack
            </span>
            <div className="skills-row flex flex-wrap" style={{ gap: "8px" }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag inline-block whitespace-nowrap"
                  style={{
                    padding: "6px 14px",
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    border: "1px solid rgba(229,197,133,0.35)",
                    color: "var(--accent-light-gold)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--accent-light-gold)";
                    e.currentTarget.style.color = "var(--primary-dark)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--accent-light-gold)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="inline-block self-start"
            style={{ marginTop: "8px" }}
            onMouseMove={onAboutBtnMove}
            onMouseEnter={() =>
              gsap.to(aboutBtnRef.current, {
                scale: 1.05,
                backgroundColor: "var(--text-white)",
                boxShadow: "0 5px 20px rgba(229,197,133,0.3)",
                duration: 0.3,
              })
            }
            onMouseLeave={onAboutBtnOut}
          >
            <a
              ref={aboutBtnRef}
              href="#projects"
              className="about-btn inline-block relative overflow-hidden"
              style={{
                padding: "15px 35px",
                backgroundColor: "var(--accent-light-gold)",
                color: "var(--primary-black)",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
                textDecoration: "none",
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
                ref={aboutBtnTextRef}
                className="relative"
                style={{ zIndex: 1 }}
              >
                View My Work →
              </span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes btnShimmer {
          0%   { transform: translateX(-100%) }
          60%  { transform: translateX(100%) }
          100% { transform: translateX(100%) }
        }
        @keyframes lightMove {
          0%   { transform: translate(-30%, -30%) rotate(0deg); }
          50%  { transform: translate(30%, 30%) rotate(180deg); }
          100% { transform: translate(-30%, -30%) rotate(360deg); }
        }
        .about-section { padding: 120px 60px; }
        .about-img { height: 93vh; }
        @media (max-width: 1024px) { .about-img { height: 75vh !important; } }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 4px;
        }
        @media (max-width: 900px) {
          .about-section { padding: 80px 32px !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-img-wrap { max-width: 420px; margin: 0 auto; width: 100%; }
          .about-img { height: 66vh !important; }
        }
        @media (max-width: 600px) {
          .about-section { padding: 72px 20px !important; }
          .about-grid { gap: 40px !important; }
          .about-info-grid { grid-template-columns: 1fr !important; }
          .about-btn { align-self: center !important; }
          .exp-badge { bottom: -16px !important; right: -8px !important; padding: 14px 16px !important; }
          .about-img-wrap { max-width: 320px; }
          .skills-row { gap: 6px !important; }
          .skill-tag { padding: 5px 10px !important; font-size: 10px !important; letter-spacing: 0.5px !important; }
        }
      `}</style>
    </section>
  );
}
