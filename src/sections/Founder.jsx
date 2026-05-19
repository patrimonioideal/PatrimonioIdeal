import { useInView } from '../hooks/useInView'

export default function Founder({ t }) {
  const f = t.founder
  const [ref, inView] = useInView()

  return (
    <section id="fundadora" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: avatar + decorative */}
          <div className="relative flex justify-center lg:justify-start" ref={ref}>
            {/* Geometric backdrop */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full border-2 border-pl/30 animate-float" />
              <div className="absolute w-52 h-52 rounded-full border border-pb/20 animate-float-alt" />
            </div>

            {/* Avatar card */}
            <div className={`relative z-10 transition-all duration-700
              ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

              {/* Shadow card */}
              <div className="absolute inset-0 bg-pd rounded-3xl translate-x-3 translate-y-3" />

              <div className="relative bg-gradient-to-br from-pl/60 to-pp/40
                rounded-3xl w-64 h-72 md:w-72 md:h-80 flex flex-col items-center
                justify-center border border-pl/30 shadow-xl overflow-hidden">

                {/* SVG pattern bg */}
                <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden>
                  <defs>
                    <pattern id="geo" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M20 0 L40 20 L20 40 L0 20 Z"
                        fill="none" stroke="#7b4fa6" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#geo)" />
                </svg>

                <span className="text-7xl mb-3 z-10">👩‍💻</span>
                <p className="z-10 font-display font-bold text-pd text-center px-4 leading-snug">
                  {f.name}
                </p>
                <p className="z-10 text-xs text-muted/80 mt-1 text-center px-4">
                  {f.role}
                </p>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className={`transition-all duration-700 delay-200
            ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>

            <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-pb mb-4
              flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-pb" />
              {f.label}
            </p>

            <h2 className="font-display font-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              <em className="italic text-pd not-italic"
                style={{ fontStyle: 'italic' }}>Camila Lucía</em>
              <br />Duque
            </h2>

            <p className="text-muted leading-relaxed mb-4 text-[1.05rem]">{f.p1}</p>
            <p className="text-muted leading-relaxed mb-8 text-[1.05rem]">{f.p2}</p>

            {/* Quote */}
            <blockquote className="relative bg-ink text-white rounded-2xl p-6
              border-l-4 border-pb overflow-hidden">
              <div className="absolute top-3 right-4 font-display text-5xl text-pb/20
                font-black leading-none select-none">"</div>
              <p className="font-display italic text-lg text-pp leading-snug relative z-10">
                {f.quote}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
