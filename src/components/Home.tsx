'use client'

const projects = [
  {
    name: 'NextGen eCommerce',
    desc: 'Full-stack eCommerce platform with admin dashboard, CRUD operations, and analytics. Built for real-world scale.',
    stack: ['Next.js', 'Java', 'MySQL'],
    link: 'https://github.com/nikolapajovic-bit/nextgen-frontend',
    status: 'Repository',
  },
  {
    name: 'EcoLiving',
    desc: 'Mobile app for sustainable living — eco tips, carbon footprint calculator, and an interactive recycling map.',
    stack: ['React Native', 'Node.js', 'MongoDB'],
    link: 'https://ecoliving-ecru.vercel.app',
    status: 'Live',
  },
  {
    name: 'CS2 Tournament System',
    desc: 'Live tournament management — brackets, team handling, match scheduling, and a full admin dashboard.',
    stack: ['Next.js', 'Node.js', 'MongoDB'],
    link: 'https://cs2-turnir.vercel.app',
    status: 'Live',
  },
  {
    name: 'MovieVerse',
    desc: 'Cinema ticketing web application for browsing and purchasing movie tickets.',
    stack: ['Angular', 'Angular Material', 'Axios'],
    link: 'https://github.com/nikolapajovic-bit/MovieVerse',
    status: 'Repository',
  },
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

export default function HomeClient() {
  return (
    <>
      <div className="glow-field">
        <div className="glow glow-cyan" />
        <div className="glow glow-purple" />
      </div>

      {/* HERO */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative">
        <span className="status-pill mb-8">
          <span className="status-dot" />
          Open to work
        </span>

        <h1 className="font-syne font-extrabold text-[clamp(2.8rem,8vw,6.5rem)] leading-none">
          Nikola Pajović —<br />
          <span className="text-grad">full-stack engineer.</span>
        </h1>

        <p className="mt-7 text-[1.1rem] max-w-xl text-paper-mid font-light">
          4th year Software Engineering student. I build things that live on the web and in your pocket.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <a href="mailto:nikpajovic@gmail.com" className="btn-primary">
            Get in touch →
          </a>
          <a href="#projects" className="btn-ghost">
            See the work
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-block">
        <span className="section-label">// About</span>
        <h2 className="font-syne font-bold text-[clamp(2rem,4.2vw,3rem)] leading-[1.1] mt-2 mb-10">
          Real products, <span className="text-grad">shipped and running.</span>
        </h2>

        <div className="glass-panel grid md:grid-cols-2 gap-14 items-start">
          <p className="text-[1.02rem] leading-7 text-paper-mid font-light">
            I&apos;m a passionate software engineering student with real experience shipping
            full-stack web and mobile applications — from e-commerce platforms with admin
            dashboards to live tournament management systems used by real players.
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="tech-bubble">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-block">
        <div className="flex justify-between items-baseline mb-10 border-t border-border pt-8">
          <div>
            <span className="section-label">// Selected work</span>
            <h2 className="font-syne font-extrabold text-[clamp(2rem,4.5vw,3.2rem)] leading-none mt-2">
              Projects worth a look.
            </h2>
          </div>
          <span className="section-label whitespace-nowrap">{projects.length} projects</span>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <a key={p.name} href={p.link} target="_blank" className="proj-card">
              <div className="proj-top">
                <span className="proj-tag">{p.status}</span>
                <span className="proj-arrow">↗</span>
              </div>

              <h3 className="proj-name">{p.name}</h3>
              <p className="proj-desc">{p.desc}</p>

              <div className="stack-row">
                {p.stack.map((t) => (
                  <span key={t} className="stack-chip">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-block">
        <div className="contact-panel">
          <span className="section-label">// Get in touch</span>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] mt-3 mb-9">
            Let&apos;s build <span className="text-grad">something.</span>
          </h2>
          <a href="mailto:nikpajovic@gmail.com" className="btn-primary">
            Send a message →
          </a>
        </div>
      </section>
    </>
  )
}