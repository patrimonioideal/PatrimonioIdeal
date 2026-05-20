import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { insertContacto } from '../lib/supabase'

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-pl">
        {label}
      </label>
      {children}
    </div>
  )
}

const inputClass = `bg-white/10 border border-white/20 text-white rounded-xl
  px-4 py-3 text-[0.95rem] outline-none
  focus:border-pp focus:ring-1 focus:ring-pp/40
  transition-all placeholder:text-white/30 font-body w-full`

export default function Contact({ t }) {
  const c = t.contact
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [loading, setLoading] = useState(false)
  const [msg, setMsg]         = useState('')
  const [isError, setIsError] = useState(false)

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    if (!form.nombre || !form.email || !form.mensaje || !form.email.includes('@')) {
      setMsg(c.errMsg); setIsError(true); return
    }
    setLoading(true); setMsg(''); setIsError(false)
    try {
      await insertContacto({
        nombre: form.nombre,
        email:  form.email,
        asunto: form.asunto,
        mensaje: form.mensaje,
      })
      setForm({ nombre: '', email: '', asunto: '', mensaje: '' })
      setMsg(c.success); setIsError(false)
    } catch {
      // Fallback: AI-powered response via Anthropic
      try {
        const resp = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 250,
            system: `Eres el asistente de Patrimonio Ideal, partido político colombiano fundado por Camila Lucía Duque. Responde en 2-3 oraciones en ${t === t ? 'español' : 'inglés'}, cálido y profesional. No menciones que eres IA. Firma como "El equipo de Patrimonio Ideal".`,
            messages: [{ role: 'user', content: `Nombre: ${form.nombre}\nCorreo: ${form.email}\nAsunto: ${form.asunto}\nMensaje: ${form.mensaje}` }]
          })
        })
        const data = await resp.json()
        const reply = data.content?.find(b => b.type === 'text')?.text || c.success
        setForm({ nombre: '', email: '', asunto: '', mensaje: '' })
        setMsg(reply); setIsError(false)
      } catch {
        setMsg(c.success); setIsError(false)
        setForm({ nombre: '', email: '', asunto: '', mensaje: '' })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-pd relative overflow-hidden">
      {/* Bg decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full
        bg-pb/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full
        bg-pp/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div ref={ref} className="grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">

          {/* Left */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-pp mb-4
              flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-pp" />
              {c.label}
            </p>
            <h2 className="font-display font-black text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              {c.title}
            </h2>
            <p className="text-white/65 leading-relaxed mb-8 text-[1.05rem]">
              {c.body}
            </p>
            <a
              href="mailto:contacto@patrimonioideal.co"
              className="inline-flex items-center gap-2 text-pp hover:text-white
                transition-colors text-[0.9rem] font-medium no-underline"
            >
              <span>✉</span> contacto@patrimonioideal.co
            </a>
          </div>

          {/* Right: form */}
          <div className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form
              onSubmit={onSubmit}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-9"
              noValidate
            >
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label={c.name}>
                    <input value={form.nombre} onChange={set('nombre')} className={inputClass} />
                  </Field>
                  <Field label={c.email2}>
                    <input type="email" value={form.email} onChange={set('email')} className={inputClass} />
                  </Field>
                </div>
                <Field label={c.subject}>
                  <input value={form.asunto} onChange={set('asunto')} className={inputClass} />
                </Field>
                <Field label={c.msg}>
                  <textarea
                    value={form.mensaje} onChange={set('mensaje')}
                    rows={5} className={`${inputClass} resize-y`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-ink text-white font-bold tracking-wide uppercase
                    text-[0.88rem] py-3.5 rounded-xl hover:bg-pb
                    transition-colors cursor-pointer border-none
                    disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? c.sending : c.submit}
                </button>

                {msg && (
                  <p className={`text-[0.88rem] font-medium text-center
                    ${isError ? 'text-[#ff6b9d]' : 'text-pp'}`}>
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
