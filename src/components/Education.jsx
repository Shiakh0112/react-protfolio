import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { education } from '../assets/data'

gsap.registerPlugin(ScrollTrigger)

function EduRow({ item, isLast, isOpen, onToggle }) {
  const rowRef   = useRef(null)
  const imgRef   = useRef(null)
  const bodyRef  = useRef(null)
  const rafRef   = useRef(null)
  const pos      = useRef({ x: 0, y: 0 })
  const cur      = useRef({ x: 0, y: 0 })
  const hovering = useRef(false)

  useEffect(() => {
    const loop = () => {
      if (hovering.current && rowRef.current && imgRef.current) {
        cur.current.x += (pos.current.x - cur.current.x) * 0.1
        cur.current.y += (pos.current.y - cur.current.y) * 0.1
        const rect = rowRef.current.getBoundingClientRect()
        imgRef.current.style.left = (cur.current.x - rect.left) + 'px'
        imgRef.current.style.top  = (cur.current.y - rect.top)  + 'px'
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  useEffect(() => {
    const el = bodyRef.current
    if (!el) return
    if (isOpen) {
      hovering.current = false
      gsap.to(imgRef.current, { opacity: 0, scale: 0.85, duration: 0.25 })
      gsap.fromTo(el,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' }
      )
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.4, ease: 'power3.inOut' })
    }
  }, [isOpen])

  return (
    <div
      ref={rowRef}
      className="edu-row relative overflow-hidden"
      style={{
        borderTop: '1px solid rgba(229,197,133,0.12)',
        ...(isLast ? { borderBottom: '1px solid rgba(229,197,133,0.12)' } : {}),
      }}
      onMouseMove={e => { pos.current = { x: e.clientX, y: e.clientY } }}
      onMouseEnter={() => {
        if (isOpen) return
        hovering.current = true
        gsap.to(imgRef.current, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' })
      }}
      onMouseLeave={() => {
        hovering.current = false
        gsap.to(imgRef.current, { opacity: 0, scale: 0.85, duration: 0.25 })
      }}
    >
      {/* cursor image */}
      <div ref={imgRef} className="absolute overflow-hidden pointer-events-none" style={{
        width: '80px', height: '80px',
        borderRadius: '50%',
        transform: 'translate(-50%, -70%)',
        zIndex: 10,
        opacity: 0,
        border: '2px solid rgba(229,197,133,0.5)',
        boxShadow: '0 0 20px rgba(201,169,97,0.3)',
      }}>
        <img src={item.img} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,12,16,0.4), transparent)' }} />
      </div>

      {/* header */}
      <div onClick={onToggle} className="edu-row-header" style={{ cursor: 'pointer' }}>
        <span style={{
          fontSize: '11px', fontWeight: 700,
          color: 'var(--accent-light-gold-text)',
          letterSpacing: '2px', textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>{item.year}</span>

        <div>
          <span style={{
            fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '2px', color: 'var(--accent-light-gold)',
            background: 'rgba(229,197,133,0.08)',
            border: '1px solid rgba(229,197,133,0.2)',
            padding: '3px 10px',
          }}>{item.type}</span>
          <h3 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 700,
            color: 'var(--text-white)', margin: '8px 0 4px',
          }}>{item.degree}</h3>
          <p style={{ fontSize: '12px', color: 'var(--text-gray)', margin: 0, letterSpacing: '0.5px' }}>
            {item.school}
          </p>
        </div>

        <div className="flex items-center justify-center flex-shrink-0" style={{
          width: '36px', height: '36px',
          border: `1px solid ${isOpen ? 'rgba(229,197,133,0.6)' : 'rgba(229,197,133,0.25)'}`,
          transition: 'transform 0.4s ease, border-color 0.3s',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>
          <span style={{ color: 'var(--accent-light-gold)', fontSize: '20px', lineHeight: '1', display: 'block', textAlign: 'center' }}>+</span>
        </div>
      </div>

      {/* expandable body */}
      <div ref={bodyRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <div className="edu-body-grid">
          <div>
            <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: 1.9, margin: '0 0 24px' }}>
              {item.desc}
            </p>
            <div className="flex flex-wrap" style={{ gap: '8px' }}>
              {item.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: '10px', fontWeight: 600, textTransform: 'uppercase',
                  letterSpacing: '1px', padding: '5px 14px',
                  background: 'rgba(229,197,133,0.06)',
                  border: '1px solid rgba(229,197,133,0.18)',
                  color: 'var(--accent-light-gold)',
                }}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden self-start" style={{
            border: '1px solid rgba(229,197,133,0.15)',
            aspectRatio: '4/3',
          }}>
            <img src={item.img} alt={item.school} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  const [openId, setOpenId] = useState(null)
  const sectionRef          = useRef(null)
  const headingRef          = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { yPercent: 60, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } }
      )
      gsap.utils.toArray('.edu-row').forEach((row, i) => {
        gsap.fromTo(row,
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: { trigger: row, start: 'top 88%' } }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="education" className="edu-section relative overflow-hidden" style={{ background: '#0a0c10', zIndex: 99 }}>

      {/* orb */}
      <div className="absolute pointer-events-none" style={{
        top: '20%', right: '-100px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,97,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* top line */}
      <div className="absolute" style={{
        top: 0, left: '10%', right: '10%', height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(229,197,133,0.3), transparent)',
      }} />

      <div className="text-center" style={{ marginBottom: '80px' }}>
        <span className="block" style={{
          fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '4px', color: 'var(--accent-light-gold-text)',
          marginBottom: '12px',
        }}>✦ My Journey</span>
        <h2 ref={headingRef} style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
          color: 'var(--text-white)', margin: 0, lineHeight: 1.1,
        }}>Education</h2>
      </div>

      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        {education.map((item, i) => (
          <EduRow
            key={item.id}
            item={item}
            isLast={i === education.length - 1}
            isOpen={openId === item.id}
            onToggle={() => setOpenId(openId === item.id ? null : item.id)}
          />
        ))}
      </div>

      {/* bottom line */}
      <div className="absolute" style={{
        bottom: 0, left: '10%', right: '10%', height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(229,197,133,0.3), transparent)',
      }} />

      <style>{`
        .edu-section { padding: 120px 60px; }
        .edu-row-header {
          display: grid;
          grid-template-columns: 120px 1fr auto;
          align-items: center;
          gap: 32px;
          padding: 28px 0;
        }
        .edu-body-grid {
          display: grid;
          grid-template-columns: 1fr 260px;
          gap: 40px;
          padding-bottom: 36px;
          padding-left: 152px;
        }
        @media (max-width: 768px) {
          .edu-section { padding: 80px 24px; }
          .edu-row-header {
            grid-template-columns: 1fr auto;
            gap: 16px;
            padding: 20px 0;
          }
          .edu-row-header span:first-child { display: none; }
          .edu-body-grid {
            grid-template-columns: 1fr;
            padding-left: 0;
            gap: 20px;
          }
        }
        @media (max-width: 480px) {
          .edu-section { padding: 72px 16px; }
          .edu-row-header { gap: 12px; padding: 16px 0; }
        }
      `}</style>
    </section>
  )
}
