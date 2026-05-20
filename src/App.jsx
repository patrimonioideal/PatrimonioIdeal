import { useState } from 'react'
import { useT } from './lib/i18n'
import { useFirmas } from './hooks/useFirmas'

import Navbar     from './components/Navbar'
import Hero       from './sections/Hero'
import Manifesto  from './sections/Manifesto'
import Proposals  from './sections/Proposals'
import Founder    from './sections/Founder'
import Stats      from './sections/Stats'
import Signatures from './sections/Signatures'
import Contact    from './sections/Contact'
import Documents  from './sections/Documents'
import Privacy    from './sections/Privacy'
import Footer     from './sections/Footer'
import News from './sections/News'

export default function App() {
  const [lang, setLang] = useState('es')
  const t = useT(lang)
  const { count } = useFirmas()

  return (
    <div className="grain">
      <Navbar   lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero       t={t} />
        <Manifesto  t={t} />
        <Proposals  t={t} />
        <Founder    t={t} />
        <News t={t} lang={lang} />
        <Stats      t={t} firmaCount={count} />
        <Signatures t={t} />
        <Contact    t={t} lang={lang} />
        <Documents  t={t} />
      </main>
      <Privacy t={t} />
      <Footer  t={t} lang={lang} />
    </div>
  )
}
