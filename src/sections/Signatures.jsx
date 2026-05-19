import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { useFirmas } from '../hooks/useFirmas'

function Input({ label, type = 'text', value, onChange, ...rest }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-pl">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="bg-white/7 border border-white/15 text-white rounded-xl
          px-4 py-3 text-[0.95rem] outline-none
          focus:border-pp focus:ring-1 focus:ring-pp/40
          transition-all placeholder:text-white/25 font-body"
        {...rest}
      />
    </div>
  )
}

export default function Signatures({ t }) {
  const s = t.signatures
  const { count, percent, loading, msg, isError, submit, META } = useFirmas()
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ nombre: '', cedula: '', ciudad: '', email: '', consent: false })

  const set = k => e => setForm(f => ({
    ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
  }))

  const onSubmit = async e => {
    e.preventDefault()
    const ok = await submit(
      { nombre: form.nombre, cedula: form.cedula, ciudad: form.ciudad, email: form.email, consent: form.consent },
      s
    )
    if (ok) setForm({ nombre: '', cedula: '', ciudad: '', email: '', consent: false })
  }

  return (
    <section id="firmas" className="py-24 md:py-32 bg-ink">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* Left */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-pl mb-4
              flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-pl" />
              {s.label}
            </p>
            <h2 className="font-display font-black text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              {s.title}
            </h2>
            <p className="text-white/60 leading-relaxed mb-10 text-[1.05rem]">
              {s.body}
            </p>

            {/* Progress */}
            <div className="mb-2">
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-pl to-pb transition-all duration-700"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[0.8rem] text-white/40">
                <span>
                  <span className="text-pp font-bold">{count.toLocaleString('es-CO')}</span>
                  {' '}{s.of} {META.toLocaleString('es-CO')} {s.sigs}
                </span>
                <span className="text-pp font-bold">{percent}%</span>
              </div>
            </div>

            {/* Big percentage */}
            <p className="font-display font-black text-pp leading-none mt-4"
              style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}>
              {percent}%
            </p>
          </div>

          {/* Right: form */}
          <div className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <form
              onSubmit={onSubmit}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-9"
              noValidate
            >
              <h3 className="font-display font-bold text-white text-[1.3rem] mb-6">
                {s.formTitle}
              </h3>

              <div className="flex flex-col gap-4">
                <Input label={s.name}  value={form.nombre} onChange={set('nombre')} autoComplete="name" />
                <div className="grid grid-cols-2 gap-3">
                  <Input label={s.doc}  value={form.cedula} onChange={set('cedula')} inputMode="numeric" maxLength={10} />
                  <Input label={s.city} value={form.ciudad} onChange={set('ciudad')} autoComplete="address-level2" />
                </div>
                <Input label={s.email} type="email" value={form.email} onChange={set('email')} autoComplete="email" />

                <label className="flex items-start gap-3 cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={set('consent')}
                    className="mt-0.5 w-4 h-4 accent-pb flex-shrink-0 cursor-pointer"
                  />
                  <span className="text-[0.8rem] text-white/50 leading-[1.55]">
                    {s.consent}
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-pb text-white font-bold tracking-wide uppercase
                    text-[0.88rem] py-3.5 rounded-xl hover:bg-pk
                    transition-colors cursor-pointer border-none
                    disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                >
                  {loading ? '…' : s.submit}
                </button>

                {msg && (
                  <p className={`text-[0.88rem] font-medium text-center ${isError ? 'text-[#ff6b9d]' : 'text-pp'}`}>
                    {msg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
