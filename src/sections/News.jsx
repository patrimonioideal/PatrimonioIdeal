import { useInView } from '../hooks/useInView'
import { usePosts }  from '../hooks/usePosts'

const CATS = {
  Partido:      { es: 'Partido',      en: 'Party'     },
  Propuestas:   { es: 'Propuestas',   en: 'Policies'  },
  Prensa:       { es: 'Prensa',       en: 'Press'     },
  Comunidad:    { es: 'Comunidad',    en: 'Community' },
}

function PostCard({ post, lang, index }) {
  const [ref, inView] = useInView()
  const titulo   = lang === 'es' ? post.titulo_es   : post.titulo_en
  const extracto = lang === 'es' ? post.extracto_es : post.extracto_en
  const cat      = CATS[post.categoria]?.[lang] ?? post.categoria
  const fecha    = new Date(post.created_at).toLocaleDateString(
    lang === 'es' ? 'es-CO' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )
  const href = post.url_externa ?? null

  return (
    <article
      ref={ref}
      className={`card-tilt group flex flex-col bg-cream rounded-2xl
        border border-pl/20 overflow-hidden
        hover:border-pb/40 hover:shadow-lg hover:shadow-pb/10
        transition-all duration-500
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Imagen */}
      {post.imagen_url && (
        <div className="h-44 overflow-hidden bg-pl/20">
          <img
            src={post.imagen_url}
            alt={titulo}
            className="w-full h-full object-cover group-hover:scale-105
              transition-transform duration-500"
          />
        </div>
      )}

      {/* Sin imagen: franja de color */}
      {!post.imagen_url && (
        <div className="h-2 bg-gradient-to-r from-pl to-pb" />
      )}

      <div className="flex flex-col gap-3 p-6 flex-1">
        {/* Categoría + fecha */}
        <div className="flex items-center justify-between gap-2">
          {cat && (
            <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase
              bg-pl/20 text-pd px-2.5 py-1 rounded-full">
              {cat}
            </span>
          )}
          <time className="text-[0.72rem] text-muted ml-auto">{fecha}</time>
        </div>

        {/* Título */}
        <h3 className="font-display font-bold text-[1.05rem] text-ink leading-snug
          group-hover:text-pd transition-colors">
          {titulo}
        </h3>

        {/* Extracto */}
        <p className="text-muted text-[0.88rem] leading-relaxed flex-1">
          {extracto}
        </p>

        {/* Link */}
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold
              text-pd hover:text-pb transition-colors no-underline mt-auto pt-2
              border-t border-pl/20 w-full"
          >
            {lang === 'es' ? 'Leer más' : 'Read more'}
            <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default function News({ t, lang }) {
  const { posts, loading } = usePosts()
  const [ref, inView] = useInView()

  const label = lang === 'es' ? 'Noticias' : 'News'
  const title = lang === 'es' ? 'Lo último del partido.' : 'Latest from the party.'
  const empty = lang === 'es' ? 'Próximamente.' : 'Coming soon.'

  return (
    <section id="noticias" className="py-24 md:py-32 bg-cream-dark/40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div ref={ref} className="mb-14">
          <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-pb mb-3
            flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-pb" />
            {label}
          </p>
          <h2
            className={`font-display font-black leading-tight transition-all duration-700
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            {title}
          </h2>
        </div>

        {loading && (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 rounded-full border-2 border-pl border-t-pb animate-spin" />
          </div>
        )}

        {!loading && posts.length === 0 && (
          <p className="text-muted text-center py-16 text-lg">{empty}</p>
        )}

        {!loading && posts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} lang={lang} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}