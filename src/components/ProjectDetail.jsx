import { useParams, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { allProjects, bestProjects } from '../assets/data'

const tabs = [
  { key: 'all',       label: 'All'        },
  { key: 'frontend',  label: 'Frontend'   },
  { key: 'backend',   label: 'Backend'    },
  { key: 'fullstack', label: 'Full Stack' },
]

export default function ProjectDetail() {
  const { id } = useParams()
  const { pathname } = useLocation()
  const isBest = pathname.startsWith('/best-project')
  const list = isBest ? bestProjects : allProjects
  const p = list.find(p => p.id === (isBest ? id : Number(id)))

  const [imgExpanded, setImgExpanded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!p) return (
    <div style={{ background: 'var(--primary-dark)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--text-gray)', fontSize: '16px', marginBottom: '20px' }}>Project not found.</p>
        <Link to="/" style={{ color: 'var(--accent-light-gold)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>← Back to Home</Link>
      </div>
    </div>
  )

  return (
    <div style={{ background: 'var(--primary-dark)', minHeight: '100vh' }}>

      {/* back button */}
      <div style={{ padding: '24px 60px 0' }}>
        <Link to="/#projects" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '2px', color: 'var(--accent-light-gold)',
          transition: 'gap 0.3s ease',
        }}
          onMouseEnter={e => e.currentTarget.style.gap = '14px'}
          onMouseLeave={e => e.currentTarget.style.gap = '8px'}
        >← Back to Projects</Link>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 60px 80px' }}>

        {/* hero image */}
        <div
          onMouseEnter={() => setImgExpanded(true)}
          onMouseLeave={() => setImgExpanded(false)}
          style={{
            width: '100%',
            maxHeight: imgExpanded ? '1000px' : '400px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '40px',
            border: '1px solid rgba(229,197,133,0.2)',
            transition: 'max-height 0.8s cubic-bezier(0.4,0,0.2,1)',
            cursor: 'zoom-in',
          }}
        >
          <img src={p.detailImg} alt={p.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,16,20,0.7) 0%, transparent 60%)', opacity: imgExpanded ? 0 : 1, transition: 'opacity 0.5s ease' }} />
          <span style={{
            position: 'absolute', bottom: '20px', left: '24px',
            fontSize: '9px', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '3px', color: 'var(--accent-light-gold)',
            border: '1px solid rgba(229,197,133,0.4)', padding: '4px 12px',
            background: 'rgba(15,16,20,0.8)',
            opacity: imgExpanded ? 0 : 1, transition: 'opacity 0.3s ease',
          }}>{p.category ? (tabs.find(t => t.key === p.category)?.label ?? p.category) : 'Best Project'}</span>
        </div>

        {/* title */}
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: 'var(--text-white)', margin: '0 0 28px', lineHeight: 1.2 }}>{p.title}</h1>

        {/* meta info grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Language',   value: p.language  },
            { label: 'Start Date', value: p.startDate },
            { label: 'End Date',   value: p.endDate   },
          ].map(item => (
            <div key={item.label} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)', borderLeft: '2px solid var(--accent-light-gold)' }}>
              <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-light-gold-text)', marginBottom: '6px' }}>{item.label}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-white)', fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* divider */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, rgba(229,197,133,0.3), transparent)', marginBottom: '28px' }} />

        {/* description */}
        <div style={{ marginBottom: '28px' }}>
          {p.desc.split('\n').map((line, i) => {
            const trimmed = line.trim()
            if (!trimmed) return null
            const isBullet = trimmed.startsWith('•') || trimmed.startsWith('-')
            const text = isBullet ? trimmed.slice(1).trim() : trimmed
            return (
              <div key={i} className="flex" style={{ gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent-light-gold)', fontSize: '14px', lineHeight: 1.9, flexShrink: 0 }}>✦</span>
                <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: 1.9, margin: 0 }}>{text}</p>
              </div>
            )
          })}
        </div>

        {/* tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
          {p.tags.map(tag => (
            <span key={tag} style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', padding: '6px 16px', background: 'rgba(229,197,133,0.07)', border: '1px solid rgba(229,197,133,0.2)', color: 'var(--accent-light-gold)' }}>{tag}</span>
          ))}
        </div>

        {/* divider */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, rgba(229,197,133,0.3), transparent)', marginBottom: '32px' }} />

        {/* links */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href={p.link} target="_blank" rel="noreferrer" style={{
            fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px',
            padding: '12px 28px', background: 'var(--accent-light-gold)', color: 'var(--primary-black)',
            transition: 'all 0.3s ease', display: 'inline-block',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#fff'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent-light-gold)'}
          >🔗 Live Demo</a>
          <a href={p.github} target="_blank" rel="noreferrer" style={{
            fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px',
            padding: '12px 28px', background: 'transparent', border: '1px solid rgba(229,197,133,0.4)',
            color: 'var(--accent-light-gold)', transition: 'all 0.3s ease', display: 'inline-block',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(229,197,133,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >⌥ GitHub Repo</a>
        </div>
      </div>
    </div>
  )
}
