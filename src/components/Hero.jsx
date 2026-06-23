import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import passportPhoto from "../assets/images/PassportPhoto.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const btnRef = useRef(null);
  const btnTextRef = useRef(null);
  const roleRef = useRef(null);

  const roles = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React.js Developer",
    "Node.js Developer",
    "Problem Solver",
    "UI/UX Enthusiast",
    "Team Player",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = roleRef.current;
      if (!el) return;
      gsap.to(el, {
        opacity: 0,
        y: -12,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setRoleIndex((i) => (i + 1) % roles.length);
          gsap.fromTo(
            el,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
          );
        },
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-tag", { opacity: 0, y: 20, duration: 1, delay: 0.5 });
      gsap.from(".hero-h1", { opacity: 0, y: 30, duration: 1.2, delay: 0.7 });
      gsap.from(".hero-p", { opacity: 0, y: 30, duration: 1.2, delay: 0.9 });
      gsap.from(".hero-btn", { opacity: 0, y: 20, duration: 1, delay: 1.1 });
      gsap.from(".photo-frame", {
        opacity: 0,
        x: 50,
        duration: 1.5,
        delay: 0.5,
      });
    }, heroRef);
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
      opacity: 1,
      backgroundColor: "var(--accent-light-gold)",
      boxShadow: "none",
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

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-section relative overflow-hidden flex items-center "
      style={{
        zIndex: 1,
        height: "100vh",
        minHeight: "600px",
        padding: "0 60px",
        background: "var(--primary-dark)",
      }}
    >
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div key={i} className="absolute pointer-events-none" style={{
          left: `${8 + i * 7.5}%`,
          top: `${20 + (i % 5) * 14}%`,
          width: i % 3 === 0 ? '3px' : '2px',
          height: i % 3 === 0 ? '3px' : '2px',
          borderRadius: '50%',
          background: 'rgba(229,197,133,0.5)',
          boxShadow: '0 0 6px rgba(229,197,133,0.4)',
          animation: `floatParticle ${3 + (i % 4)}s ease-in-out infinite`,
          animationDelay: `${i * 0.4}s`,
          zIndex: 1,
        }} />
      ))}

      {/* Ceiling light */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "100%",
          zIndex: 1,
          background:
            "radial-gradient(ellipse at top, rgba(201,169,97,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Content grid */}
      <div
        className="hero-grid relative w-full mx-auto"
        style={{
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          maxWidth: "1200px",
          alignItems: "center",
          gap: "60px",
        }}
      >
        {/* Left text */}
        <div className="hero-left" style={{ paddingRight: "40px" }}>
          <span
            className="hero-tag inline-block"
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--accent-light-gold)",
              textTransform: "uppercase",
              letterSpacing: "3px",
              marginBottom: "20px",
            }}
          >
            MERN Stack Developer
          </span>

          <h1
            className="hero-h1"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "56px",
              lineHeight: 1.1,
              marginBottom: "25px",
              fontWeight: 700,
              color: "var(--text-white)",
            }}
          >
            Transforming Ideas into <br />
            <span
              style={{ color: "var(--accent-light-gold)", fontStyle: "italic" }}
            >
              Digital Reality
            </span>
          </h1>

          {/* Rotating role */}
          <div
            className="flex items-center"
            style={{ gap: "10px", marginBottom: "24px" }}
          >
            <span
              style={{
                fontSize: "12px",
                color: "var(--text-gray)",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              I am a
            </span>
            <span
              ref={roleRef}
              className="inline-block"
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--accent-light-gold)",
                textTransform: "uppercase",
                letterSpacing: "2px",
                borderLeft: "2px solid var(--accent-light-gold)",
                paddingLeft: "10px",
              }}
            >
              {roles[roleIndex]}
            </span>
          </div>

          <p
            className="hero-p"
            style={{
              fontSize: "16px",
              color: "var(--text-gray)",
              marginBottom: "35px",
              maxWidth: "480px",
              lineHeight: 1.8,
            }}
          >
            I build full-stack web applications using MongoDB, Express.js,
            React, and Node.js. Passionate about creating fast, scalable, and
            user-friendly digital products from frontend to backend.
          </p>

          <div className="flex items-center flex-wrap" style={{ gap: "16px" }}>
            <div
              className="inline-block"
              onMouseMove={onBtnMove}
              onMouseEnter={() =>
                gsap.to(btnRef.current, {
                  scale: 1.05,
                  backgroundColor: "var(--text-white)",
                  boxShadow: "0 5px 20px rgba(229,197,133,0.3)",
                  duration: 0.3,
                })
              }
              onMouseLeave={onBtnOut}
            >
              <a
                ref={btnRef}
                href="https://drive.google.com/file/d/1IxQnSN2uiDYBe3xeKLMwu4b_FCEKZpJI/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="hero-btn inline-block relative overflow-hidden"
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
                  ref={btnTextRef}
                  className="relative"
                  style={{ zIndex: 1 }}
                >
                  ↓ Download Resume
                </span>
              </a>
            </div>

            {/* Ghost button */}
            <a
              href="#projects"
              className="hero-btn inline-block relative overflow-hidden"
              style={{
                padding: "15px 35px",
                backgroundColor: "transparent",
                border: "1px solid rgba(229,197,133,0.5)",
                color: "var(--accent-light-gold)",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(229,197,133,0.08)"; e.currentTarget.style.borderColor = "var(--accent-light-gold)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(229,197,133,0.5)"; }}
            >
              View Projects →
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="hero-scroll-hint flex items-center" style={{ gap: "12px", marginTop: "48px" }}>
            <div style={{ position: "relative", width: "20px", height: "32px", border: "1.5px solid rgba(229,197,133,0.4)", borderRadius: "10px" }}>
              <div style={{
                position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)",
                width: "3px", height: "6px", borderRadius: "2px",
                background: "var(--accent-light-gold)",
                animation: "scrollDot 1.8s ease-in-out infinite",
              }} />
            </div>
            <span style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: "var(--text-gray)" }}>Scroll</span>
          </div>
        </div>

        {/* Right image */}
        <div className="hero-right relative flex justify-center items-center">
          <div
            className="photo-frame relative"
            style={{
              width: "400px",
              height: "500px",
              border: "1px solid rgba(229,197,133,0.3)",
              padding: "15px",
            }}
          >
            <div
              className="absolute"
              style={{
                top: "-10px",
                left: "-10px",
                width: "100%",
                height: "100%",
                border: "1px solid rgba(229,197,133,0.2)",
                zIndex: -1,
              }}
            />
            <div
              className="relative overflow-hidden w-full h-full"
              style={{ background: "#0f1014" }}
            >
              <div className="absolute" style={{
                top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: '200px', height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(201,169,97,0.18) 0%, transparent 70%)',
                filter: 'blur(20px)',
                animation: 'glowPulse 3s ease-in-out infinite',
                zIndex: 0,
              }} />
              <img
                src={passportPhoto}
                alt="Profile"
                className="relative w-full h-full object-cover"
                style={{ zIndex: 1 }}
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(15,16,20,0.4) 0%, transparent 50%)',
                zIndex: 2,
              }} />
            </div>
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
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50%       { transform: translateY(-18px) translateX(6px); opacity: 1; }
        }
        @keyframes scrollDot {
          0%   { transform: translateX(-50%) translateY(0); opacity: 1; }
          100% { transform: translateX(-50%) translateY(12px); opacity: 0; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-left { padding-right: 0 !important; order: 2; }
          .hero-right { order: 1; justify-content: center; }
          .hero-h1 { font-size: 36px !important; }
          .hero-p { font-size: 14px !important; margin: 0 auto 28px !important; }
          .photo-frame { width: 260px !important; height: 320px !important; }
          .hero-section { padding: 0 24px !important; height: auto !important; min-height: 100vh !important; padding-top: 120px !important; padding-bottom: 60px !important; }
          .hero-scroll-hint { display: none !important; }
        }
        @media (min-width: 769px) {
          .hero-section { padding-top: 10vh !important; }
        }
        @media (max-width: 480px) {
          .hero-h1 { font-size: 28px !important; }
          .photo-frame { width: 220px !important; height: 270px !important; }
        }
      `}</style>
    </section>
  );
}
