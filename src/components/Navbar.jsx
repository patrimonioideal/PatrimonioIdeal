import { useState, useEffect } from 'react'

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { key: 'manifesto', href: '#manifesto' },
    { key: 'proposals', href: '#propuestas' },
    { key: 'founder',   href: '#fundadora'  },
    { key: 'support',   href: '#firmas'     },
    { key: 'program',   href: '/docs/programa-de-gobierno-2026.pdf', external: true },
  ]

  return (
    <>
      {/* ── DESKTOP NAV ─────────────────────────────── */}
      <header
        className={`fixed top-1.5 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? 'py-2' : 'py-3'}`}
      >
        <nav className={`mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between
          rounded-2xl transition-all duration-300
          ${scrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-sm shadow-pl/20 border border-pl/30'
            : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo(0,0)} className="flex-shrink-0 py-2">
            <img
              src="public/assets/patri-ideal.png"
              alt="Patrimonio Ideal"
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
              onError={e => { e.target.style.display = 'none' }}
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {links.map(l => (
              <li key={l.key}>
                <a
                  href={l.href}
                  target={l.external ? '_blank' : '_self'}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  className="text-[0.78rem] font-semibold tracking-wide uppercase text-ink/70
                    hover:text-pd transition-colors px-3 py-2 rounded-lg hover:bg-pd/8"
                >
                  {t.nav[l.key]}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="ml-2 text-[0.78rem] font-semibold tracking-wide uppercase
                  bg-pd text-white px-4 py-2 rounded-xl hover:bg-pb transition-colors"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>

          {/* Right side: lang + hamburger */}
          <div className="flex items-center gap-3">
            {/* Lang switcher */}
            <div className="flex gap-1 bg-cream-dark/60 rounded-lg p-0.5">
              {['es','en'].map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-[0.68rem] font-bold tracking-widest uppercase px-2.5 py-1
                    rounded-md transition-all cursor-pointer border-none
                    ${lang === l
                      ? 'bg-pd text-white shadow-sm'
                      : 'text-muted hover:text-pd bg-transparent'
                    }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center
                gap-[5px] cursor-pointer bg-transparent border-none rounded-lg
                hover:bg-pd/8 transition-colors"
              aria-label="Menú"
            >
              <span className={`block w-5 h-0.5 bg-ink rounded transition-all duration-300
                ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block w-5 h-0.5 bg-ink rounded transition-all duration-200
                ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-ink rounded transition-all duration-300
                ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── MOBILE MENU ─────────────────────────────── */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div className={`absolute right-0 top-0 bottom-0 w-72 bg-cream flex flex-col
          pt-24 pb-10 px-8 shadow-2xl transition-transform duration-300
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <ul className="list-none m-0 p-0 flex flex-col gap-1">
            {links.map(l => (
              <li key={l.key}>
                <a
                  href={l.href}
                  target={l.external ? '_blank' : '_self'}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="block font-display font-bold text-2xl text-ink py-3
                    border-b border-pl/30 hover:text-pd transition-colors"
                >
                  {t.nav[l.key]}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="block text-center font-semibold text-[0.9rem] uppercase tracking-wide
                  bg-pd text-white px-6 py-3 rounded-xl hover:bg-pb transition-colors"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>

          {/* Lang in mobile */}
          <div className="mt-auto flex gap-2">
            {['es','en'].map(l => (
              <button
                key={l}
                onClick={() => { setLang(l); setMenuOpen(false) }}
                className={`text-xs font-bold tracking-widest uppercase px-4 py-2
                  rounded-lg transition-all cursor-pointer border-none flex-1
                  ${lang === l ? 'bg-pd text-white' : 'bg-cream-dark text-muted'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Colombia stripe — very top */}
      <div className="fixed top-0 left-0 right-0 h-1.5 stripe-co z-[60]" />
    </>
  )
}
