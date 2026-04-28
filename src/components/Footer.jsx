import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  { label: 'Home',           href: '#hero'           },
  { label: 'About',          href: '#about'          },
  { label: 'Projects',       href: '#projects'       },
  { label: 'Skills',         href: '#skills'         },
  { label: 'Education',      href: '#education'      },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact'        },
]

const socials = [
  { label: 'GitHub',    href: 'https://github.com/Shiakh0112', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg> },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/shaikh-ashfaq-shaikh-qayyum', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: 'Twitter',   href: '#', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: 'Instagram', href: '#', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
]

const marqueeItems = ['React.js', '✦', 'Node.js', '✦', 'MongoDB', '✦', 'Express.js', '✦', 'GSAP', '✦', 'Full Stack Dev', '✦', 'Open To Work', '✦', 'MERN Stack', '✦']

export default function Footer() {
  const footerRef  = useRef(null)
  const nameRef    = useRef(null)
  const marquee1   = useRef(null)
  const marquee2   = useRef(null)
  const topLineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(topLineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: footerRef.current, start: 'top 90%' } }
      )
      gsap.fromTo(nameRef.current,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: nameRef.current, start: 'top 95%' } }
      )
      gsap.to(marquee1.current, { xPercent: -50, duration: 20, ease: 'none', repeat: -1 })
      gsap.to(marquee2.current, { xPercent:  50, duration: 25, ease: 'none', repeat: -1 })
    }, footerRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="relative overflow-hidden" style={{ background: '#070809', zIndex: 99 }}>

      {/* top gold line */}
      <div ref={topLineRef} style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(229,197,133,0.5) 20%, rgba(229,197,133,0.5) 80%, transparent)' }} />

      {/* marquee row 1 */}
      <div className="overflow-hidden" style={{ padding: '28px 0', borderBottom: '1px solid rgba(229,197,133,0.06)' }}>
        <div ref={marquee1} className="flex whitespace-nowrap w-max" style={{ gap: '40px' }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', color: item === '✦' ? 'var(--accent-light-gold)' : 'rgba(255,255,255,0.15)' }}>{item}</span>
          ))}
        </div>
      </div>

      {/* main footer body */}
      <div className="footer-body">
        <div className="footer-grid">

          {/* col 1 — brand */}
          <div>
            <div className="overflow-hidden" style={{ marginBottom: '20px' }}>
              <h2 ref={nameRef} style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 900, color: 'var(--text-white)', margin: 0, lineHeight: 1, letterSpacing: '-1px' }}>
              Shaikh <span style={{ color: 'var(--accent-light-gold)' }}>Ashfaq</span>
              </h2>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-gray)', lineHeight: 1.8, maxWidth: '280px', marginBottom: '28px' }}>
              MERN Stack Developer crafting fast, scalable, and visually stunning web experiences.
            </p>
            <div className="inline-flex items-center" style={{ gap: '8px', padding: '8px 16px', border: '1px solid rgba(229,197,133,0.2)', background: 'rgba(229,197,133,0.04)' }}>
              <span className="inline-block rounded-full" style={{ width: '6px', height: '6px', background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.8)', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-light-gold-text)' }}>Available for Work</span>
            </div>
          </div>

          {/* col 2 — nav */}
          <div>
            <h4 style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--accent-light-gold-text)', marginBottom: '24px' }}>Navigation</h4>
            <div className="flex flex-col" style={{ gap: '12px' }}>
              {navLinks.map(link => (
                <a key={link.label} href={link.href} className="flex items-center" style={{ fontSize: '13px', color: 'var(--text-gray)', gap: '8px', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-light-gold)'; e.currentTarget.style.paddingLeft = '8px' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-gray)';          e.currentTarget.style.paddingLeft = '0' }}
                >
                  <span style={{ fontSize: '8px', color: 'var(--accent-light-gold)', opacity: 0.5 }}>▶</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* col 3 — connect */}
          <div>
            <h4 style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--accent-light-gold-text)', marginBottom: '24px' }}>Connect</h4>
            <div className="flex flex-col" style={{ gap: '12px', marginBottom: '32px' }}>
              {[
                { icon: '✉', text: 'khatikashfaq992@gmail.com', href: 'mailto:khatikashfaq992@gmail.com' },
                { icon: '📍', text: 'India',         href: null },
              ].map(item => (
                <div key={item.text} className="flex items-center" style={{ gap: '10px' }}>
                  <span style={{ fontSize: '13px' }}>{item.icon}</span>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: '13px', color: 'var(--text-gray)', transition: 'color 0.3s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-light-gold)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-gray)'}
                      >{item.text}</a>
                    : <span style={{ fontSize: '13px', color: 'var(--text-gray)' }}>{item.text}</span>
                  }
                </div>
              ))}
            </div>
            <div className="flex" style={{ gap: '10px' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} title={s.label} target="_blank" rel="noreferrer" className="flex items-center justify-center" style={{ width: '38px', height: '38px', border: '1px solid rgba(229,197,133,0.15)', color: 'rgba(255,255,255,0.3)', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(229,197,133,0.6)'; e.currentTarget.style.color = 'var(--accent-light-gold)'; e.currentTarget.style.background = 'rgba(229,197,133,0.07)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(229,197,133,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
                >{s.svg}</a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="footer-bottom">
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.18)', letterSpacing: '1px' }}>© 2025 Shaikh Ashfaq. All rights reserved.</span>
          <span style={{ fontSize: '11px', color: 'rgba(229,197,133,0.25)', letterSpacing: '2px', textTransform: 'uppercase' }}>Designed & Built with ♥</span>
          <a href="#hero" className="flex items-center" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-light-gold-text)', gap: '6px', transition: 'gap 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.gap = '10px'}
            onMouseLeave={e => e.currentTarget.style.gap = '6px'}
          >Back to Top ↑</a>
        </div>
      </div>

      {/* marquee row 2 */}
      <div className="overflow-hidden" style={{ borderTop: '1px solid rgba(229,197,133,0.06)', padding: '20px 0' }}>
        <div ref={marquee2} className="flex whitespace-nowrap w-max" style={{ gap: '40px' }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', color: item === '✦' ? 'var(--accent-light-gold)' : 'rgba(255,255,255,0.08)' }}>{item}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .footer-body { padding: 72px 80px 48px; }
        .footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr; gap: 60px; margin-bottom: 64px; }
        .footer-bottom { border-top: 1px solid rgba(229,197,133,0.08); padding-top: 28px; display: flex; justify-content: space-between; align-items: center; }
        @media (max-width: 768px) {
          .footer-body { padding: 48px 24px 36px; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; margin-bottom: 40px; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
          .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 480px) {
          .footer-body { padding: 40px 16px 28px; }
          .footer-grid { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>
    </footer>
  )
}
