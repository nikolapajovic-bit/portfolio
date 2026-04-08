'use client'

import { useEffect, useState } from 'react'

const projects = [
  {
    num: '01',
    name: 'NextGen eCommerce',
    desc: 'Full-stack eCommerce platform with admin dashboard, CRUD operations, and analytics. Built for real-world scale.',
    stack: ['Next.js', 'Java', 'MySQL'],
    link: 'https://github.com/nikolapajovic-bit/nextgen-frontend',
  },
  {
    num: '02',
    name: 'EcoLiving',
    desc: 'Mobile app for sustainable living — eco tips, carbon footprint calculator, and an interactive recycling map.',
    stack: ['React Native', 'Node.js', 'MongoDB'],
    link: 'https://ecoliving-ecru.vercel.app',
  },
  {
    num: '03',
    name: 'CS2 Tournament System',
    desc: 'Live tournament management — brackets, team handling, match scheduling, and a full admin dashboard.',
    stack: ['Next.js', 'Node.js', 'MongoDB'],
    link: 'https://cs2-turnir.vercel.app',
  },
  {
    num: '04',
    name: 'MovieVerse',
    desc: 'Cinema ticketing web application that provides users with browsing and purchasing their favorite movie tickets.',
    stack: ['Angular', 'Angular Material', 'Axios'],
    link: 'https://github.com/nikolapajovic-bit/MovieVerse'
  }
]

const skills = [
  'Next.js',
  'Angular',
  'Node.js',
  'React Native',
  'MongoDB',
  'Java',
  'MySQL',
  'TypeScript',
  'REST APIs',
]

const tickerItems = [
  'Next.js',
  'Node.js',
  'React Native',
  'MongoDB',
  'Java',
  'MySQL',
  'Full-Stack',
  'Mobile Dev',
  'Angular',
  'Axios',
]

export default function HomeClient() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
        <div className="mb-6">
          <span className="font-syne-mono text-xs uppercase tracking-widest2 px-3 py-2 border rounded-sm inline-block" style={{ borderColor: 'var(--paper-subtle)', color: 'var(--muted)' }}>
            Software Engineer
          </span>
          <span className="ml-4 font-syne-mono text-xs uppercase tracking-widest text-accent inline-flex items-center gap-2">
            <span className="status-dot w-2 h-2 rounded-full"></span>
            Open to work
          </span>
        </div>

        <h1 className="font-syne font-extrabold text-[clamp(5rem,13vw,10rem)] leading-[0.9] relative">
          <span className="block animate-gradient-x">
            NIKOLA
          </span>
          <span className="block text-outline">PAJOVIĆ</span>
        </h1>

        <p className="mt-8 text-[1rem] max-w-xl text-paper-mid">
          4th year Software Engineering student. I build things that live on the web and in your pocket.
        </p>

        <a
          href="mailto:nikpajovic@gmail.com"
          className="btn-primary mt-6 inline-block"
        >
          Get in touch ↗
        </a>
      </section>

      {/* TECH TICKER */}
      <div className="overflow-hidden py-3 border-t border-b border-border">
        <div className="ticker-inner whitespace-nowrap flex gap-10">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="font-syne-mono text-xs uppercase tracking-widest4 px-6 inline-flex items-center after:content-['✦'] after:text-[8px] text-paper-dim">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT / SKILLS */}
      <section id="about" className="section-block grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="section-label">About me</span>
          <h2 className="font-syne font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1] mt-2">
            Building things <span style={{ color: 'var(--accent)' }}>actually</span> matter.
          </h2>
        </div>
        <div>
          <p className="text-[0.95rem] leading-7 mb-6 text-paper-mid">
            I'm a passionate software engineering student with real experience shipping full-stack web and mobile applications. I care about clean code, good architecture, and products people actually enjoy using.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="tech-bubble">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-block">
        <div className="flex justify-between items-baseline mb-12 border-t border-border pt-6">
          <h2 className="font-syne font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-none">
            Selected Work
          </h2>
          <span className="font-syne-mono text-xs uppercase tracking-widest text-paper-dim">
            0{projects.length} projects
          </span>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((p) => (
            <a key={p.num} href={p.link} target="_blank" className="project-row">
              <span className="p-num font-syne-mono text-sm pt-1">{p.num}</span>
              <div>
                <h3 className="font-syne font-bold text-[clamp(1.4rem,3vw,2rem)] mb-2">{p.name}</h3>
                <p className="text-sm leading-6 mb-3 text-paper-dim">{p.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.stack.map((t) => (
                    <span key={t} className="tech-bubble">{t}</span>
                  ))}
                </div>
              </div>
              <span className="p-arrow text-xl pt-1 transition-all">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="section-block section-alt flex flex-col md:flex-row justify-between items-center gap-8 mt-16">
        <h2 className="font-syne font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05]">
          Let's build<br />something.
        </h2>
        <a href="mailto:nikpajovic@gmail.com" className="btn-primary mt-4 md:mt-0">
          Send a message ↗
        </a>
      </section>
    </>
  )
}