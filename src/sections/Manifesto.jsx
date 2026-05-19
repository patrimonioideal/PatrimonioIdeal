import { useInView } from '../hooks/useInView'

export default function Manifesto({ t }) {
  const m = t.manifesto
  const [ref, inView] = useInView()

  return (
    <section id="manifesto" className="bg-ink text-white relative overflow-hidden py-24 md:py-32">

      {/* Decorative large number */}
      <p aria-hidden className="absolute right-6 top-6 font-display font-black
        text-white/[0.04] leading-none pointer-events-none select-none"
        style={{ fontSize: 'clamp(6rem, 18vw, 14rem)' }}>01</p>

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Label */}
        <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-pb mb-6
          flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-pb" />
          {m.label}
        </p>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

          {/* Left: title + highlight */}
          <div ref={ref}>
            <h2
              className={`font-display font-black leading-[1.05] mb-10 transition-all duration-700
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
            >
              {m.title}
            </h2>

            {/* Pull quote */}
            <div className="relative pl-6 border-l-2 border-pb">
              <p className="font-display text-xl md:text-2xl italic text-pp leading-snug">
                {m.highlight}
              </p>
            </div>
          </div>

          {/* Right: paragraphs */}
          <div
            className={`flex flex-col gap-5 transition-all duration-700 delay-150
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {[m.p1, m.p2, m.p3, m.p4].map((p, i) => (
              <p key={i} className="text-white/75 leading-relaxed text-[1.05rem]">
                {i === 3
                  ? <strong className="text-white font-semibold">{p}</strong>
                  : p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 stripe-co opacity-60" />
    </section>
  )
}
