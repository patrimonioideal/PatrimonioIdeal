import { useEffect, useRef } from 'react'

export default function Hero({ t }) {
  const h = t.hero

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-cream pt-20"
    >
      {/* ── BIG BG TYPOGRAPHY ─────────────────────── */}
      <p
        aria-hidden
        className="absolute inset-0 flex items-center justify-center
          font-display font-black text-pd/[0.04] leading-none text-center
          pointer-events-none select-none px-4 break-words"
        style={{ fontSize: 'clamp(5rem, 22vw, 18rem)', wordBreak: 'break-all' }}
      >
        P.I.
      </p>

      {/* ── FLOATING BLOBS ────────────────────────── */}
      <div className="absolute top-[15%] right-[8%] w-64 h-64 rounded-full
        bg-gradient-to-br from-pp/40 to-pb/20 blur-3xl animate-float
        pointer-events-none" />
      <div className="absolute top-[40%] left-[5%] w-48 h-48 rounded-full
        bg-gradient-to-br from-pl/30 to-pp/20 blur-2xl animate-float-alt
        pointer-events-none" />
      <div className="absolute bottom-[20%] right-[15%] w-32 h-32 rounded-full
        bg-pb/20 blur-2xl animate-float pointer-events-none" />

      {/* ── MAIN CONTENT ──────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-0 w-full">

        {/* Tag */}
        <p className="text-[0.72rem] font-semibold tracking-[0.25em] uppercase
          text-muted mb-8 flex items-center gap-3 stagger">
          <span className="inline-block w-8 h-px bg-muted/50" />
          {h.tag}
        </p>

        {/* Giant title */}
        <h1 className="font-display font-black leading-[0.92] mb-10 stagger"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)' }}>
          <span className="block text-ink">{h.title1}</span>
          <span className="block italic text-pd relative inline-block">
            {h.title2}
            {/* wavy underline drawn as SVG for control */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="10" viewBox="0 0 300 10" preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0,5 Q37.5,0 75,5 T150,5 T225,5 T300,5"
                fill="none" stroke="#e879b8" strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="block text-ink">{h.title3}</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end pb-0">
          {/* Left: subtitle + CTAs */}
          <div className="stagger">
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-lg">
              {h.sub}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#manifesto"
                className="inline-flex items-center gap-2 bg-pd text-white font-semibold
                  text-sm uppercase tracking-wide px-6 py-3.5 rounded-xl
                  hover:bg-pb hover:-translate-y-0.5 transition-all duration-200 no-underline"
              >
                {h.cta1}
                <span aria-hidden>→</span>
              </a>
              <a
                href="#firmas"
                className="inline-flex items-center gap-2 text-pd font-semibold
                  text-sm uppercase tracking-wide px-6 py-3.5 rounded-xl
                  border-2 border-pd/30 hover:border-pb hover:text-pb
                  transition-all duration-200 no-underline"
              >
                {h.cta2}
                <span aria-hidden>✦</span>
              </a>
            </div>
          </div>

          {/* Right: slogan card */}
          <div className="hidden lg:block">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-pb/20 rounded-2xl translate-x-2 translate-y-2" />
              <div className="relative bg-ink text-white rounded-2xl p-8
                border border-ink shadow-xl max-w-sm">
                <p className="font-display text-2xl italic leading-snug text-pp">
                  {h.slogan}
                </p>
                <p className="mt-4 text-[0.7rem] font-semibold tracking-[0.2em]
                  uppercase text-white/40">
                  — Patrimonio Ideal, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TICKER ────────────────────────────────── */}
      <div className="relative z-10 mt-16 bg-pb overflow-hidden py-3.5">
        <div className="ticker-inner inline-block whitespace-nowrap">
          {[...t.ticker, ...t.ticker].map((w, i) => (
            <span
              key={i}
              className="mx-8 text-[0.78rem] font-bold tracking-[0.18em] uppercase text-white"
            >
              <span className="text-pp/60 mr-2">✦</span>{w}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
