import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skillCategories as categories } from '../assets/data'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subRef     = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { yPercent: 60, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(subRef.current,
        { yPercent: 40, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: subRef.current, start: 'top 85%' } }
      )
      gsap.utils.toArray('.skill-card').forEach((card, i) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            delay: (i % 2) * 0.15,
            scrollTrigger: { trigger: card, start: 'top 88%' } }
        )
      })
      gsap.utils.toArray('.skill-bar-fill').forEach((bar) => {
        const target = bar.dataset.level
        gsap.fromTo(bar,
          { width: '0%' },
          { width: `${target}%`, duration: 1.2, ease: 'power2.out',
            scrollTrigger: { trigger: bar, start: 'top 90%' } }
        )
      })
      gsap.utils.toArray('.skills-orb').forEach((orb, i) => {
        gsap.to(orb, {
          y: i % 2 === 0 ? -60 : 60,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="skills-section relative overflow-hidden" style={{ background: '#0d1117', zIndex: 99 }}>

      {/* background orbs */}
      <div className="skills-orb absolute pointer-events-none" style={{
        top: '10%', left: '-80px',
        width: '320px', height: '320px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,97,0.07) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div className="skills-orb absolute pointer-events-none" style={{
        bottom: '10%', right: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,97,0.06) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }} />

      {/* top border line */}
      <div className="absolute" style={{
        top: 0, left: '10%', right: '10%',
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(229,197,133,0.3), transparent)',
      }} />

      {/* Header */}
      <div className="text-center" style={{ marginBottom: '72px' }}>
        <span className="block" style={{
          fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '4px', color: 'var(--accent-light-gold-text)',
          marginBottom: '12px',
        }}>✦ My Arsenal</span>
        <h2 ref={headingRef} style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
          color: 'var(--text-white)', margin: '0 0 16px',
          lineHeight: 1.1,
        }}>Technical Skills</h2>
        <p ref={subRef} className="mx-auto" style={{
          fontSize: '14px', color: 'var(--text-gray)',
          maxWidth: '480px', lineHeight: 1.8,
        }}>
          Full stack expertise across the entire development lifecycle —
          from pixel-perfect UIs to scalable server architectures.
        </p>
      </div>

      {/* Grid */}
      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.label} className="skill-card relative" style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(229,197,133,0.12)',
            padding: '32px 28px',
            transition: 'border-color 0.3s ease, transform 0.3s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(229,197,133,0.35)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(229,197,133,0.12)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {/* corner accents */}
            <div className="absolute" style={{
              top: 0, left: 0,
              width: '40px', height: '40px',
              borderTop: '2px solid rgba(229,197,133,0.5)',
              borderLeft: '2px solid rgba(229,197,133,0.5)',
            }} />
            <div className="absolute" style={{
              bottom: 0, right: 0,
              width: '40px', height: '40px',
              borderBottom: '2px solid rgba(229,197,133,0.5)',
              borderRight: '2px solid rgba(229,197,133,0.5)',
            }} />

            {/* category header */}
            <div className="flex items-center" style={{ gap: '10px', marginBottom: '28px' }}>
              <span style={{ fontSize: '20px', color: 'var(--accent-light-gold)', lineHeight: 1 }}>{cat.icon}</span>
              <h3 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '18px', fontWeight: 700,
                color: 'var(--text-white)', margin: 0,
                textTransform: 'uppercase', letterSpacing: '2px',
              }}>{cat.label}</h3>
            </div>

            {/* skills list */}
            <div className="flex flex-col" style={{ gap: '16px' }}>
              {cat.skills.map((sk) => (
                <div key={sk.name}>
                  <div className="flex justify-between" style={{ marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-white)', letterSpacing: '0.5px' }}>
                      {sk.name}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--accent-light-gold-text)', fontWeight: 700 }}>
                      {sk.level}%
                    </span>
                  </div>
                  {/* track */}
                  <div className="relative overflow-hidden" style={{
                    height: '3px',
                    background: 'rgba(255,255,255,0.06)',
                  }}>
                    <div
                      className="skill-bar-fill relative"
                      data-level={sk.level}
                      style={{
                        height: '100%',
                        width: '0%',
                        background: 'linear-gradient(to right, rgba(201,169,97,0.6), var(--accent-light-gold))',
                      }}
                    >
                      {/* shimmer */}
                      <div className="absolute" style={{
                        top: 0, right: 0,
                        width: '20px', height: '100%',
                        background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent)',
                        animation: 'shimmer 2s infinite',
                      }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* bottom border line */}
      <div className="absolute" style={{
        bottom: 0, left: '10%', right: '10%',
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(229,197,133,0.3), transparent)',
      }} />

      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-40px); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateX(40px); opacity: 0; }
        }
        .skills-section { padding: 120px 60px; }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .skills-section { padding: 80px 24px; }
          .skills-grid { grid-template-columns: 1fr; gap: 20px; }
        }
        @media (max-width: 480px) {
          .skills-section { padding: 72px 16px; }
          .skill-card { padding: 24px 18px !important; }
        }
      `}</style>
    </section>
  )
}
