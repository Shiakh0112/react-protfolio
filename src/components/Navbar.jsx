import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "Home",      href: "#hero"      },
  { label: "About",     href: "#about"     },
  { label: "Projects",  href: "#projects"  },
  { label: "Skills",    href: "#skills"    },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const navRef  = useRef(null);
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-logo", { y: -40, opacity: 0, duration: 1, ease: "power3.out" });
      gsap.from(".nav-link", { y: -30, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out", delay: 0.3 });
      gsap.fromTo(".nav-cta", { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.7 });
    }, navRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const el = menuRef.current;
    if (!el || !open) return;
    gsap.fromTo(el, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" });
    gsap.fromTo(".mobile-link", { x: -20, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.07, duration: 0.3, ease: "power3.out", delay: 0.1 });
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 w-full flex justify-between items-center" style={{ zIndex: 100, backgroundColor: "var(--primary-black)", height: "10vh" }}>

        {/* stripes bg */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, overflow: "hidden" }}>
          <div style={{
            width: "100%", height: "100%", opacity: 0.4, position: "relative",
            backgroundImage: 'url("https://z-cdn-media.chatglm.cn/files/91ee1bdc-43da-4278-92a1-564057104174.png?auth_key=1873913502-2ebddf3294ac44f5b9603abd80fb7bc5-0-863923b8798fc3530c98c6a1a21af565")',
            backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "150px", height: "100%", background: "linear-gradient(to right, rgba(26,26,26,1), rgba(26,26,26,0))" }} />
            <div style={{ position: "absolute", top: 0, right: 0, width: "150px", height: "100%", background: "linear-gradient(to left, rgba(26,26,26,1), rgba(26,26,26,0))" }} />
          </div>
        </div>

        {/* nav content */}
        <div className="flex justify-between items-center w-full mx-auto relative" style={{ maxWidth: "1400px", padding: "0 20px", zIndex: 2, height: "10vh" }}>

          {/* logo */}
          <div className="nav-logo" style={{
            fontFamily: '"Playfair Display", serif', fontSize: "24px",
            fontWeight: 700, color: "var(--text-white)", letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}>
            <span style={{ color: 'var(--accent-light-gold)' }}>S</span>haikh
            <span style={{
              display: 'inline-block',
              marginLeft: '8px',
              padding: '2px 10px',
              border: '1px solid var(--accent-light-gold)',
              color: 'var(--accent-light-gold)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontFamily: '"Montserrat", sans-serif',
              verticalAlign: 'middle',
            }}>Ashfaq</span>
          </div>

          {/* desktop links */}
          <div className="desktop-links flex" style={{ gap: "30px" }}>
            {links.map(({ label, href }) => (
              <a key={label} href={href} className="nav-link" style={{
                fontSize: "15px", fontWeight: 500, textTransform: "uppercase",
                letterSpacing: "1.5px", color: "var(--text-white)", textDecoration: "none",
                position: "relative", textShadow: "1px 1px 2px rgba(0,0,0,0.5)", transition: "color 0.3s ease",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--accent-light-gold-text)"; e.currentTarget.querySelector("span").style.width = "100%"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-white)"; e.currentTarget.querySelector("span").style.width = "0"; }}
              >
                {label}
                <span style={{ display: "block", position: "absolute", bottom: "-5px", left: 0, width: "0", height: "2px", backgroundColor: "var(--text-white)", transition: "width 0.3s ease" }} />
              </a>
            ))}
          </div>

          {/* desktop CTA + hamburger */}
          <div className="flex items-center" style={{ gap: "12px" }}>
            <a href="#contact" className="nav-cta desktop-cta" style={{
              padding: "10px 24px", backgroundColor: "transparent",
              border: "1px solid var(--accent-light-gold)", color: "var(--accent-light-gold)",
              fontSize: "12px", fontWeight: 600, textTransform: "uppercase",
              letterSpacing: "1px", textDecoration: "none",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)", transition: "all 0.3s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--accent-light-gold)"; e.currentTarget.style.color = "var(--primary-black)"; e.currentTarget.style.boxShadow = "0 0 15px rgba(229,197,133,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--accent-light-gold)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Contact Me
            </a>

            {/* Theme toggle */}
            <button onClick={toggleTheme} title="Toggle theme" style={{
              width: '38px', height: '38px',
              border: '1px solid var(--accent-light-gold)',
              background: 'transparent',
              color: 'var(--accent-light-gold)',
              fontSize: '16px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light-gold)'; e.currentTarget.style.color = 'var(--primary-black)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent-light-gold)' }}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* hamburger — mobile only */}
            <button className="hamburger" onClick={() => setOpen(p => !p)} style={{
              display: "none", flexDirection: "column", gap: "5px",
              background: "none", border: "none", cursor: "pointer", padding: "4px",
            }}>
              <span style={{ display: "block", width: "24px", height: "2px", background: open ? "var(--accent-light-gold)" : "var(--text-white)", transition: "all 0.3s ease", transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
              <span style={{ display: "block", width: "24px", height: "2px", background: "var(--accent-light-gold)", transition: "all 0.3s ease", opacity: open ? 0 : 1 }} />
              <span style={{ display: "block", width: "24px", height: "2px", background: open ? "var(--accent-light-gold)" : "var(--text-white)", transition: "all 0.3s ease", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      <div ref={menuRef} style={{
        display: open ? "flex" : "none", position: "fixed", top: "10vh", left: 0,
        width: "100%", flexDirection: "column",
        background: "rgba(15,16,20,0.98)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(229,197,133,0.15)", zIndex: 150,
        gap: "4px", padding: "0 24px",
      }}>
        {links.map(({ label, href }) => (
          <a key={label} href={href} className="mobile-link" onClick={closeMenu} style={{
            fontSize: "22px", fontWeight: 700, fontFamily: '"Playfair Display", serif',
            color: "var(--text-white)", textDecoration: "none",
            padding: "12px 0", borderBottom: "1px solid rgba(229,197,133,0.07)",
            transition: "color 0.3s ease", letterSpacing: "1px",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-light-gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-white)")}
          >
            {label}
          </a>
        ))}
        <a href="#contact" className="mobile-link" onClick={closeMenu} style={{
          marginTop: "20px", padding: "14px 0", textAlign: "center",
          border: "1px solid var(--accent-light-gold)", color: "var(--accent-light-gold)",
          fontSize: "12px", fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "3px", textDecoration: "none", transition: "all 0.3s ease",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-light-gold)"; e.currentTarget.style.color = "#0f1014"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent-light-gold)"; }}
        >
          Contact Me
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-links { display: none !important; }
          .desktop-cta   { display: none !important; }
          .hamburger     { display: flex !important; }
        }
      `}</style>
    </>
  );
}
