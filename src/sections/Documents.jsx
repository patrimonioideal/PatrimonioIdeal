import { useInView } from '../hooks/useInView'

function DocCard({ title, file, desc, index }) {
  const [ref, inView] = useInView()
  return (
    <a
      ref={ref}
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className={`card-tilt group flex flex-col gap-3 bg-white/5 border border-white/10
        rounded-2xl p-6 hover:bg-white/10 hover:border-pp/30
        transition-all duration-500 no-underline
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display font-bold text-white text-[1rem] leading-snug
          group-hover:text-pp transition-colors">
          {title}
        </h3>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10
          flex items-center justify-center text-pp text-sm
          group-hover:bg-pb group-hover:text-white transition-all">
          ↓
        </span>
      </div>
      <p className="text-[0.82rem] text-white/45">{desc}</p>
    </a>
  )
}

export default function Documents({ t }) {
  const d = t.docs
  const [ref, inView] = useInView()

  return (
    <section className="py-20 bg-ink border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p ref={ref}
          className={`text-[0.7rem] font-bold tracking-[0.28em] uppercase text-pl mb-8
            flex items-center gap-3 transition-all duration-700
            ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block w-6 h-px bg-pl" />
          {d.label}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {d.items.map((item, i) => (
            <DocCard key={i} index={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
