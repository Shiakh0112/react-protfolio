import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bestProjects as best } from "../assets/data";

gsap.registerPlugin(ScrollTrigger);

// ── Mobile: GSAP horizontal scroll ──────────────────────────────────
function MobileHorizontal() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const init = () => {
      const totalScroll = track.scrollWidth - window.innerWidth;
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(track, { x: -(self.progress * totalScroll) });
        },
      });
      return st;
    };

    const st = init();
    return () => st.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="best-projects"
      className="relative overflow-hidden flex flex-col"
      style={{
        background: "var(--primary-black)",
        zIndex: 99,
        height: "100vh",
      }}
    >
      {/* Header */}
      <div
        className="text-center flex-shrink-0"
        style={{ padding: "40px 24px 8px" }}
      >
        <span
          className="block"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "4px",
            color: "var(--accent-light-gold-text)",
            marginBottom: "8px",
          }}
        >
          ✦ Best Work
        </span>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(24px, 6vw, 36px)",
            fontWeight: 700,
            color: "var(--text-white)",
            margin: "0 0 8px",
          }}
        >
          Featured Showcase
        </h2>
        <p
          style={{
            fontSize: "10px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "rgba(229,197,133,0.35)",
            margin: 0,
          }}
        >
          scroll down to explore →
        </p>
      </div>

      {/* horizontal track */}
      <div className="flex-1 flex items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            gap: "16px",
            paddingLeft: "24px",
            paddingRight: "24px",
            width: "max-content",
            willChange: "transform",
          }}
        >
          {best.map((p) => (
            <div
              key={p.id}
              className="flex-shrink-0 overflow-hidden flex flex-col"
              style={{
                width: "75vw",
                maxWidth: "300px",
                height: "380px",
                border: "1px solid rgba(229,197,133,0.15)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                className="relative overflow-hidden w-full"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,16,20,0.7) 0%, transparent 60%)",
                  }}
                />
                <span
                  className="absolute"
                  style={{
                    bottom: "10px",
                    left: "12px",
                    fontSize: "9px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                    color: "var(--accent-light-gold-text)",
                  }}
                >
                  ✦ {String(p.id).padStart(2, "0")}
                </span>
              </div>
              <div className="flex-1 flex flex-col" style={{ padding: "14px" }}>
                <h3
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text-white)",
                    margin: "0 0 6px",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--text-gray)",
                    lineHeight: 1.7,
                    margin: "0 0 10px",
                  }}
                >
                  {p.desc.slice(0, 70)}...
                </p>
                <div
                  className="flex flex-wrap"
                  style={{ gap: "4px", marginBottom: "12px" }}
                >
                  {p.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "8px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        padding: "3px 7px",
                        background: "rgba(229,197,133,0.07)",
                        border: "1px solid rgba(229,197,133,0.2)",
                        color: "var(--accent-light-gold)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link
                    to={`/best-project/${p.id}`}
                    className="inline-block"
                    style={{
                      fontSize: "9px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      color: "var(--primary-dark)",
                      background: "var(--accent-light-gold)",
                      padding: "7px 14px",
                    }}
                  >
                    View →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Desktop: pinned vertical scroll ─────────────────────────────────
function DesktopPinned() {
  const sectionRef = useRef(null);
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const total = best.length;
    const vh = window.innerHeight;
    const scrollDist = vh * (total - 1);

    for (let i = 1; i < total; i++) {
      gsap.set(`.left-panel-${i}`, { yPercent: 100 });
      gsap.set(`.right-panel-${i}`, { yPercent: 100 });
    }

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${scrollDist}`,
      pin: true,
      pinSpacing: true,
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        const slot = p * (total - 1);
        for (let i = 1; i < total; i++) {
          const panelProgress = gsap.utils.clamp(0, 1, slot - (i - 1));
          const y = (1 - panelProgress) * 100;
          gsap.set(`.left-panel-${i}`, { yPercent: y });
          gsap.set(`.right-panel-${i}`, { yPercent: y });
        }
        const dotTop = 80 - p * 60;
        gsap.set(dotRef.current, { top: `${dotTop}%` });
        gsap.set(glowRef.current, { top: `${dotTop}%` });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="best-projects"
      className="relative overflow-hidden flex flex-col"
      style={{
        height: "100vh",
        background: "var(--primary-black)",
        zIndex: 99,
      }}
    >
      <div
        className="text-center flex-shrink-0"
        style={{ padding: "36px 60px 20px" }}
      >
        <span
          className="block"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "4px",
            color: "var(--accent-light-gold-text)",
            marginBottom: "8px",
          }}
        >
          ✦ Best Work
        </span>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 700,
            color: "var(--text-white)",
            margin: 0,
          }}
        >
          Featured Showcase
        </h2>
      </div>

      <div
        className="flex-1 overflow-hidden mx-auto w-full"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 60px 1fr",
          padding: "0 60px 40px",
          maxWidth: "1200px",
        }}
      >
        {/* LEFT */}
        <div className="relative overflow-hidden">
          {best.map((p, i) => (
            <div
              key={p.id}
              className={`left-panel-${i}`}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "16px",
                paddingRight: "40px",
                background: "var(--primary-black)",
                zIndex: i + 1,
              }}
            >
              <div
                className="overflow-hidden w-full"
                style={{
                  maxWidth: "280px",
                  aspectRatio: "4/3",
                  border: "1px solid rgba(229,197,133,0.2)",
                }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.06)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  color: "var(--accent-light-gold-text)",
                }}
              >
                ✦ Project {String(p.id).padStart(2, "00")}
              </span>
              <div className="flex items-center justify-between">
                <h3
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "var(--text-white)",
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  {p.title}
                </h3>
                <Link
                  to={`/best-project/${p.id}`}
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    color: "var(--accent-light-gold)",
                    whiteSpace: "nowrap",
                    marginLeft: "16px",
                    transition: "gap 0.3s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
                >
                  View →
                </Link>
              </div>
              <div className="flex" style={{ gap: "12px" }}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block self-start"
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "var(--primary-dark)",
                    background: "var(--accent-light-gold)",
                    padding: "10px 24px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "var(--accent-light-gold)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  🔗 Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block self-start"
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "var(--accent-light-gold)",
                    background: "transparent",
                    border: "1px solid rgba(229,197,133,0.4)",
                    padding: "10px 24px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(229,197,133,0.1)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  ⌥ GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className="flex justify-center relative">
          <div
            style={{
              width: "1px",
              height: "100%",
              background:
                "linear-gradient(to bottom, transparent, rgba(229,197,133,0.5) 15%, rgba(229,197,133,0.5) 85%, transparent)",
            }}
          />
          <div
            ref={glowRef}
            className="absolute"
            style={{
              top: "80%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(201,169,97,0.4) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
          <div
            ref={dotRef}
            className="absolute"
            style={{
              top: "80%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "var(--accent-light-gold)",
              boxShadow: "0 0 16px rgba(229,197,133,0.9)",
              zIndex: 10,
            }}
          />
          {best.map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                top: `${25 + i * 25}%`,
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "4px",
                height: "4px",
                background: "rgba(229,197,133,0.25)",
              }}
            />
          ))}
        </div>

        {/* RIGHT */}
        <div className="relative overflow-hidden">
          {best.map((p, i) => (
            <div
              key={p.id}
              className={`right-panel-${i}`}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "16px",
                paddingLeft: "40px",
                background: "var(--primary-black)",
                zIndex: i + 1,
              }}
            >
              {/* 3D flip card - image only */}
              <div
                style={{
                  perspective: "800px",
                  width: "100%",
                  aspectRatio: "16/10",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.querySelector(".bp-cube").style.transform =
                    "rotateY(180deg)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.querySelector(".bp-cube").style.transform =
                    "rotateY(0deg)")
                }
              >
                <div
                  className="bp-cube"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.9s cubic-bezier(0.4,0.2,0.2,1)",
                  }}
                >
                  {/* FRONT — detailImg */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backfaceVisibility: "hidden",
                      overflow: "hidden",
                      border: "1px solid rgba(229,197,133,0.2)",
                    }}
                  >
                    <img
                      src={p.detailImg}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(15,16,20,0.5) 0%, transparent 50%)",
                      }}
                    />
                  </div>
                  {/* BACK — full desc + links */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      background: "#1a1508",
                      border: "1px solid rgba(229,197,133,0.35)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        color: "var(--text-gray)",
                        lineHeight: 1.7,
                        margin: 0,
                        overflow: "auto",
                        flex: 1,
                      }}
                    >
                      {p.desc.slice(0, 600)}...
                    </p>
                    <div
                      className="flex"
                      style={{
                        gap: "8px",
                        marginTop: "12px",
                        flexShrink: 0,
                        flexWrap: "wrap",
                      }}
                    >
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: "9px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          padding: "7px 12px",
                          background: "var(--accent-light-gold)",
                          color: "#0f1014",
                          transition: "all 0.3s ease",
                          whiteSpace: "nowrap",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "#fff")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background =
                            "var(--accent-light-gold)")
                        }
                      >
                        🔗 Live
                      </a>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: "9px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          padding: "7px 12px",
                          background: "transparent",
                          border: "1px solid rgba(229,197,133,0.4)",
                          color: "var(--accent-light-gold)",
                          transition: "all 0.3s ease",
                          whiteSpace: "nowrap",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            "rgba(229,197,133,0.1)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        ⌥ GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags below image - always visible */}
              <div className="flex flex-wrap" style={{ gap: "8px" }}>
                {p.tags.slice(0, 14).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      padding: "5px 14px",
                      background: "rgba(229,197,133,0.07)",
                      border: "1px solid rgba(229,197,133,0.2)",
                      color: "var(--accent-light-gold)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BestProjects() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return isMobile ? <MobileHorizontal /> : <DesktopPinned />;
}
