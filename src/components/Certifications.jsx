import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { certifications, extraCertifications } from '../assets/data'

gsap.registerPlugin(ScrollTrigger)

export default function Certifications() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { yPercent: 60, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } }
      )
      gsap.utils.toArray('.cert-card').forEach((card, i) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            delay: i * 0.15,
            scrollTrigger: { trigger: card, start: 'top 88%' } }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="certifications" className="relative overflow-hidden" style={{ background: '#0a0c10', zIndex: 99, padding: '120px 60px' }}>

      {/* top line */}
      <div className="absolute" style={{ top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(229,197,133,0.3), transparent)' }} />

      {/* Header */}
      <div className="text-center" style={{ marginBottom: '72px' }}>
        <span className="block" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--accent-light-gold-text)', marginBottom: '12px' }}>✦ My Credentials</span>
        <h2 ref={headingRef} style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: 'var(--text-white)', margin: 0, lineHeight: 1.1 }}>Certifications</h2>
      </div>

      {/* Cards */}
      <div className="mx-auto" style={{ maxWidth: '900px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card relative" style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(229,197,133,0.15)',
            padding: '32px 28px',
            transition: 'border-color 0.3s ease, transform 0.3s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(229,197,133,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(229,197,133,0.15)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            {/* corner accents */}
            <div className="absolute" style={{ top: 0, left: 0, width: '36px', height: '36px', borderTop: '2px solid rgba(229,197,133,0.5)', borderLeft: '2px solid rgba(229,197,133,0.5)' }} />
            <div className="absolute" style={{ bottom: 0, right: 0, width: '36px', height: '36px', borderBottom: '2px solid rgba(229,197,133,0.5)', borderRight: '2px solid rgba(229,197,133,0.5)' }} />

            {/* icon */}
            <div className="flex items-center justify-center" style={{ width: '48px', height: '48px', background: 'rgba(229,197,133,0.08)', border: '1px solid rgba(229,197,133,0.2)', marginBottom: '20px', fontSize: '22px' }}>
              🏆
            </div>

            {/* title */}
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '18px', fontWeight: 700, color: 'var(--text-white)', margin: '0 0 8px', lineHeight: 1.3 }}>{cert.title}</h3>

            {/* issuer + date */}
            <div className="flex items-center justify-between" style={{ marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-light-gold-text)' }}>{cert.issuer}</span>
              <span style={{ fontSize: '11px', color: 'var(--text-gray)', letterSpacing: '1px' }}>{cert.date}</span>
            </div>

            {/* grade + studentId */}
            {(cert.grade || cert.studentId) && (
              <div className="flex items-center" style={{ gap: '16px', marginBottom: '8px' }}>
                {cert.grade && <span style={{ fontSize: '11px', color: 'var(--text-gray)' }}>Grade: <strong style={{ color: 'var(--accent-light-gold)' }}>{cert.grade}</strong></span>}
                {cert.studentId && <span style={{ fontSize: '11px', color: 'var(--text-gray)' }}>ID: <strong style={{ color: 'var(--text-white)' }}>{cert.studentId}</strong></span>}
              </div>
            )}

            {/* partners */}
            {cert.partners && (
              <div style={{ marginBottom: '16px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(229,197,133,0.5)' }}>{cert.partners}</span>
              </div>
            )}

            {/* desc */}
            <p style={{ fontSize: '13px', color: 'var(--text-gray)', lineHeight: 1.8, margin: '0 0 20px' }}>{cert.desc}</p>

            {/* tags */}
            <div className="flex flex-wrap" style={{ gap: '6px', marginBottom: '20px' }}>
              {cert.tags.map(tag => (
                <span key={tag} style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 10px', background: 'rgba(229,197,133,0.07)', border: '1px solid rgba(229,197,133,0.2)', color: 'var(--accent-light-gold)' }}>{tag}</span>
              ))}
            </div>

            {/* verify link */}
            <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="inline-flex items-center" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent-light-gold)', gap: '6px', transition: 'gap 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.gap = '10px'}
              onMouseLeave={e => e.currentTarget.style.gap = '6px'}
            >Verify Certificate →</a>
          </div>
        ))}
      </div>

      {/* Extra Certificate Image Cards */}
      <div className="mx-auto" style={{ maxWidth: '1100px', marginTop: '60px' }}>
        <p className="text-center" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', color: 'rgba(229,197,133,0.4)', marginBottom: '32px' }}>✦ Course Completion Certificates</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {extraCertifications.map((cert) => (
            <div key={cert.id} className="cert-card relative overflow-hidden" style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(229,197,133,0.15)',
              transition: 'border-color 0.3s ease, transform 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(229,197,133,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(229,197,133,0.15)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* certificate image */}
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={cert.img} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              {/* card details */}
              <div style={{ padding: '16px 18px' }}>
                <h4 style={{ fontFamily: '"Playfair Display", serif', fontSize: '15px', fontWeight: 700, color: 'var(--text-white)', margin: '0 0 4px' }}>{cert.title}</h4>
                <p style={{ fontSize: '11px', color: 'var(--accent-light-gold-text)', margin: '0 0 4px', fontWeight: 600 }}>{cert.issuer}</p>
                <p style={{ fontSize: '10px', color: 'var(--text-gray)', margin: '0 0 4px' }}>{cert.course}</p>
                {cert.duration && <p style={{ fontSize: '10px', color: 'var(--text-gray)', margin: '0 0 8px' }}>{cert.duration}</p>}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '10px', color: 'rgba(229,197,133,0.5)', letterSpacing: '1px' }}>{cert.partners}</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-gray)' }}>{cert.date}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {cert.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '8px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', background: 'rgba(229,197,133,0.07)', border: '1px solid rgba(229,197,133,0.2)', color: 'var(--accent-light-gold)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom line */}
      <div className="absolute" style={{ bottom: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(229,197,133,0.3), transparent)' }} />

      <style>{`
        @media (max-width: 768px) {
          #certifications { padding: 80px 24px !important; }
        }
        @media (max-width: 480px) {
          #certifications { padding: 72px 16px !important; }
        }
      `}</style>
    </section>
  )
}
