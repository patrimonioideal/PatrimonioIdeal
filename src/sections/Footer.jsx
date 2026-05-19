export default function Footer({ t, lang }) {
  const f = t.footer
  const navLinks = [
    { key: 'manifesto', href: '#manifesto' },
    { key: 'proposals', href: '#propuestas' },
    { key: 'founder',   href: '#fundadora'  },
    { key: 'support',   href: '#firmas'     },
    { key: 'contact',   href: '#contacto'   },
    { key: 'privacy',   href: '#privacidad' },
  ]

  return (
    <footer className="bg-cream border-t-2 border-pl/20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center
          justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-2">
            <img
              src="assets/patri-ideal.png"
              alt="Patrimonio Ideal"
              className="h-10"
              onError={e => { e.target.style.display = 'none' }}
            />
            <p className="text-[0.72rem] text-muted">{f.founded}</p>
            <a
              href="docs/programa-de-gobierno-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-pd
                hover:text-pb transition-colors no-underline border-b border-pl
                pb-px self-start"
            >
              {f.program}
            </a>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 list-none m-0 p-0">
              {navLinks.map(l => (
                <li key={l.key}>
                  <a
                    href={l.href}
                    className="text-[0.75rem] font-medium tracking-[0.08em] uppercase
                      text-muted hover:text-pd transition-colors no-underline"
                  >
                    {t.nav[l.key] ?? t.footer.privacy}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copy */}
          <p className="text-[0.75rem] text-muted">{f.copy}</p>
        </div>
      </div>

      {/* Colombia stripe */}
      <div className="h-1.5 stripe-co" />
    </footer>
  )
}
