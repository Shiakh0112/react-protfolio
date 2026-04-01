import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { allProjects } from '../assets/data'

gsap.registerPlugin(ScrollTrigger)

const tabs = [
  { key: 'all',       label: 'All'        },
  { key: 'frontend',  label: 'Frontend'   },
  { key: 'backend',   label: 'Backend'    },
  { key: 'fullstack', label: 'Full Stack' },
]

export default function Projects() {
  const [active, setActive] = useState('all')
  const [page, setPage] = useState(1)
  const sectionRef = useRef(null)
  const cardsRef   = useRef(null)
  const [perPage, setPerPage] = useState(window.innerWidth < 768 ? 4 : 6)

  useEffect(() => {
    const handler = () => setPerPage(window.innerWidth < 768 ? 4 : 6)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.proj-tag',  { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: '.proj-tag',     start: 'top 85%' } })
      gsap.from('.proj-char', { y: 60, opacity: 0, duration: 0.6, stagger: 0.03, ease: 'power3.out', scrollTrigger: { trigger: '.proj-heading', start: 'top 85%' } })
      gsap.from('.proj-tab',  { y: 20, opacity: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: '.proj-tabs',    start: 'top 88%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.proj-card')
    if (!cards) return
    gsap.fromTo(cards, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out' })
  }, [active])

  const filtered = active === 'all' ? allProjects : allProjects.filter(p => p.category === active)
  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice((page - 1) * perPage, page * perPage)

  const handleTabChange = (key) => {
    setActive(key)
    setPage(1)
  }

  return (
    <section ref={sectionRef} id="projects" className="proj-section relative overflow-hidden" style={{ background: 'var(--primary-dark)', zIndex: 99 }}>

      <div className="mx-auto" style={{ maxWidth: '1200px' }}>

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <span className="proj-tag block" style={{
            fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '4px', color: 'var(--accent-light-gold-text)',
            marginBottom: '16px',
          }}>
            ✦ My Work
          </span>
          <h2 className="proj-heading" style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 700,
            color: 'var(--text-white)', lineHeight: 1.1,
          }}>
            {'Featured Projects'.split('').map((c, i) => (
              <span key={i} className="proj-char inline-block">
                {c === ' ' ? '\u00A0' : c}
              </span>
            ))}
          </h2>
        </div>

        {/* Tabs */}
        <div className="proj-tabs flex justify-center items-center flex-wrap" style={{
          gap: '0 20px', marginBottom: '56px',
          borderBottom: '1px solid rgba(229,197,133,0.15)', paddingBottom: '0',
        }}>
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              className="proj-tab"
              onClick={() => handleTabChange(key)}
              style={{
                padding: '0 0 16px 0', fontSize: '13px', fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '2.5px', cursor: 'pointer',
                transition: 'all 0.3s ease', fontFamily: "'Montserrat', sans-serif",
                background: 'transparent', border: 'none', outline: 'none',
                color: active === key ? 'var(--accent-light-gold-text)' : 'var(--text-gray)',
                borderBottom: active === key ? '2px solid var(--accent-light-gold-text)' : '2px solid transparent',
                marginBottom: '-1px',
              }}
              onMouseEnter={e => { if (active !== key) e.currentTarget.style.color = 'var(--text-white)' }}
              onMouseLeave={e => { if (active !== key) e.currentTarget.style.color = 'var(--text-gray)' }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="proj-grid">
          {paginated.map((p) => (
            <div key={p.id} className="proj-card overflow-hidden flex flex-col" style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(229,197,133,0.15)',
              cursor: 'pointer',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-light-gold)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(229,197,133,0.15)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Rubik cube 3D */}
              <div className="relative overflow-hidden flex items-center justify-center" style={{ height: '260px', background: '#0a0b0e' }}
                onMouseEnter={e => e.currentTarget.querySelector('.cube').style.transform = 'rotateY(180deg)'}
                onMouseLeave={e => e.currentTarget.querySelector('.cube').style.transform = 'rotateY(0deg)'}
              >
                {/* category badge */}
                <span className="absolute" style={{
                  top: '12px', left: '12px', zIndex: 10,
                  fontSize: '9px', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '2px', color: 'var(--accent-light-gold)',
                  border: '1px solid var(--border-color)', padding: '3px 10px',
                  background: 'rgba(15,16,20,0.8)',
                }}>{tabs.find(t => t.key === p.category)?.label ?? p.category}</span>

                <div style={{ perspective: '600px', width: '180px', height: '180px' }}>
                  <div className="cube" style={{
                    width: '180px', height: '180px',
                    position: 'relative', transformStyle: 'preserve-3d',
                    transform: 'rotateX(0deg) rotateY(0deg)',
                    transition: 'transform 0.9s cubic-bezier(0.4,0.2,0.2,1)',
                  }}>
                    {/* FRONT */}
                    <div style={{ position:'absolute', width:'180px', height:'180px', transform:'rotateY(0deg) translateZ(90px)', overflow:'hidden', border:'1px solid rgba(229,197,133,0.3)' }}>
                      <img src={p.img} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                    </div>
                    {/* BACK */}
                    <div style={{ position:'absolute', width:'180px', height:'180px', transform:'rotateY(180deg) translateZ(90px)', background:'#1e1a10', border:'1px solid rgba(229,197,133,0.4)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'16px', gap:'10px' }}>
                      <p style={{ fontSize:'10px', color:'var(--text-gray)', lineHeight:1.6, textAlign:'center', margin:0 }}>{p.desc.slice(0,80)}...</p>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:'5px', justifyContent:'center' }}>
                        {p.tags.slice(0,3).map(tag => <span key={tag} style={{ fontSize:'9px', fontWeight:700, textTransform:'uppercase', padding:'3px 8px', background:'rgba(229,197,133,0.12)', border:'1px solid rgba(229,197,133,0.3)', color:'var(--accent-light-gold)' }}>{tag}</span>)}
                      </div>
                    </div>
                    {/* RIGHT */}
                    <div style={{ position:'absolute', width:'180px', height:'180px', transform:'rotateY(90deg) translateZ(90px)', background:'#16171c', border:'1px solid rgba(229,197,133,0.2)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <span style={{ fontFamily:'"Playfair Display",serif', fontSize:'48px', fontWeight:700, color:'rgba(229,197,133,0.2)' }}>{String(p.id).padStart(2,'0')}</span>
                    </div>
                    {/* LEFT */}
                    <div style={{ position:'absolute', width:'180px', height:'180px', transform:'rotateY(-90deg) translateZ(90px)', background:'#12130f', border:'1px solid rgba(229,197,133,0.2)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <span style={{ fontSize:'11px', fontWeight:700, textTransform:'uppercase', letterSpacing:'2px', color:'rgba(229,197,133,0.3)' }}>MERN</span>
                    </div>
                    {/* TOP */}
                    <div style={{ position:'absolute', width:'180px', height:'180px', transform:'rotateX(90deg) translateZ(90px)',  background:'#1a1b22', border:'1px solid rgba(229,197,133,0.15)' }} />
                    {/* BOTTOM */}
                    <div style={{ position:'absolute', width:'180px', height:'180px', transform:'rotateX(-90deg) translateZ(90px)', background:'#0f1014', border:'1px solid rgba(229,197,133,0.1)'  }} />
                  </div>
                </div>
              </div>

              {/* Card bottom */}
              <div className="flex justify-between items-center mt-auto" style={{
                padding: '16px 18px 18px',
                borderTop: '1px solid rgba(229,197,133,0.1)',
              }}>
                <h3 style={{
                  fontFamily: '"Playfair Display", serif', fontSize: '16px',
                  fontWeight: 700, color: 'var(--text-white)',
                  margin: 0, flex: 1, paddingRight: '12px',
                }}>{p.title.length > 27 ? p.title.slice(0, 27) + '...' : p.title}</h3>
                <Link to={`/project/${p.id}`} className="inline-flex items-center whitespace-nowrap" style={{
                  fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '1.5px', color: 'var(--accent-light-gold)',
                  gap: '6px', transition: 'gap 0.3s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.gap = '12px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '6px'}
                >View <span>→</span></Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center" style={{ gap: '8px', marginTop: '48px' }}>
            <button
              onClick={() => { setPage(p => p - 1); cardsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
              disabled={page === 1}
              style={{
                width: '40px', height: '40px',
                border: '1px solid rgba(229,197,133,0.3)',
                background: 'transparent', color: 'var(--accent-light-gold)',
                fontSize: '16px', cursor: page === 1 ? 'not-allowed' : 'pointer',
                opacity: page === 1 ? 0.3 : 1,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { if (page !== 1) e.currentTarget.style.background = 'rgba(229,197,133,0.1)' }}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >←</button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button key={n} onClick={() => { setPage(n); cardsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                style={{
                  width: '40px', height: '40px',
                  border: `1px solid ${page === n ? 'var(--accent-light-gold)' : 'rgba(229,197,133,0.2)'}`,
                  background: page === n ? 'var(--accent-light-gold)' : 'transparent',
                  color: page === n ? 'var(--primary-black)' : 'var(--text-gray)',
                  fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { if (page !== n) { e.currentTarget.style.borderColor = 'rgba(229,197,133,0.6)'; e.currentTarget.style.color = 'var(--accent-light-gold)' } }}
                onMouseLeave={e => { if (page !== n) { e.currentTarget.style.borderColor = 'rgba(229,197,133,0.2)'; e.currentTarget.style.color = 'var(--text-gray)' } }}
              >{n}</button>
            ))}

            <button
              onClick={() => { setPage(p => p + 1); cardsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
              disabled={page === totalPages}
              style={{
                width: '40px', height: '40px',
                border: '1px solid rgba(229,197,133,0.3)',
                background: 'transparent', color: 'var(--accent-light-gold)',
                fontSize: '16px', cursor: page === totalPages ? 'not-allowed' : 'pointer',
                opacity: page === totalPages ? 0.3 : 1,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { if (page !== totalPages) e.currentTarget.style.background = 'rgba(229,197,133,0.1)' }}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >→</button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes cubeHover {
          0%   { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(-20deg) rotateY(180deg); }
        }
        .proj-section { padding: 120px 60px; }
        .proj-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 1024px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .proj-section { padding: 80px 24px !important; }
          .proj-grid { grid-template-columns: 1fr !important; }
          .proj-tabs { gap: 0 12px !important; }
          .proj-tab { font-size: 11px !important; letter-spacing: 1.5px !important; }
        }
        @media (max-width: 480px) {
          .proj-section { padding: 72px 16px !important; }
          .proj-tab { font-size: 10px !important; letter-spacing: 1px !important; }
        }
      `}</style>
    </section>
  )
}
