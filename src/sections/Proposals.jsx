import { useInView } from '../hooks/useInView'

function PolicyCard({ icon, title, body, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`card-tilt group bg-cream rounded-2xl p-6 border border-pl/20
        hover:border-pb/40 hover:shadow-lg hover:shadow-pb/10
        transition-all duration-500
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <span className="text-3xl mb-4 block">{icon}</span>
      <h3 className="font-display font-bold text-[1rem] text-pd mb-2 leading-snug
        group-hover:text-pb transition-colors">
        {title}
      </h3>
      <p className="text-muted text-[0.9rem] leading-relaxed">{body}</p>
    </div>
  )
}

export default function Proposals({ t }) {
  const p = t.proposals
  const [ref, inView] = useInView()

  return (
    <section id="propuestas" className="py-24 md:py-32 bg-cream-dark/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div ref={ref} className="mb-14 flex flex-col md:flex-row md:items-end
          gap-4 md:gap-8 justify-between">
          <div>
            <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-pb mb-3
              flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-pb" />
              {p.label}
            </p>
            <h2
              className={`font-display font-black leading-tight transition-all duration-700
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              {p.title}
            </h2>
          </div>
          <p className={`text-muted text-sm max-w-xs transition-all duration-700 delay-150
            ${inView ? 'opacity-100' : 'opacity-0'}`}>
            Viables desde el Congreso, la Presidencia o las alcaldías.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {p.items.map((item, i) => (
            <PolicyCard key={i} index={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
