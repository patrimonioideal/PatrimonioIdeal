import { useState } from 'react'

export default function Privacy({ t }) {
  const p = t.privacy
  const [open, setOpen] = useState(false)

  return (
    <section id="privacidad" className="bg-cream border-t border-pl/20 py-14">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-3 text-[0.75rem] font-bold tracking-[0.18em]
            uppercase text-muted hover:text-pd transition-colors cursor-pointer
            bg-transparent border-none p-0 mb-0"
        >
          <span>{open ? '▲' : '▼'}</span>
          {p.title}
          <span className="text-muted/50 font-normal normal-case tracking-normal
            text-[0.72rem]">— {p.date}</span>
        </button>

        {open && (
          <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10
            animate-fade-up">
            {p.blocks.map((b, i) => (
              <div key={i}>
                <h3 className="text-[0.72rem] font-bold tracking-[0.14em] uppercase
                  text-pd mb-1.5">
                  {b.h}
                </h3>
                <p className="text-[0.88rem] text-muted leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: b.p }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
