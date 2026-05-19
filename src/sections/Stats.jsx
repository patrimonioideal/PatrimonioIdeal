import { useInView } from '../hooks/useInView'

export default function Stats({ t, firmaCount }) {
  const [ref, inView] = useInView()
  const stats = t.stats.map(s =>
    s.id === 'firmas' ? { ...s, value: firmaCount.toLocaleString('es-CO') } : s
  )

  return (
    <section className="bg-pd py-16 overflow-hidden relative">
      {/* Big watermark */}
      <p aria-hidden className="absolute inset-0 flex items-center justify-center
        font-display font-black text-white/[0.04] pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(6rem,20vw,16rem)' }}>
        2026
      </p>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-5 md:px-8
          grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className={`bg-pd px-8 py-12 text-center transition-all duration-600
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <p className="font-display font-black text-pp leading-none mb-2"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              {s.value}
            </p>
            <p className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-pl">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
