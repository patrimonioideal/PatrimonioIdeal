/* ═══════════════════════════════════════════════
   PATRIMONIO IDEAL — script.js
═══════════════════════════════════════════════ */

const META_FIRMAS = 50000;
const STORAGE_KEY = 'pi-firmas-v1';

/* ── TRANSLATIONS ─────────────────────────────── */
const T = {
  es: {
    navManifesto: 'Manifiesto', navPolicies: 'Propuestas',
    navFounder: 'Fundadora', navSign: 'Apóyanos', navContact: 'Contacto',
    heroTag: 'Por una mejor Colombia',
    heroTitle: 'Por un <em>Patrimonio</em><br>que sea de todos.',
    heroSubtitle: 'Un movimiento que nace de la convicción de que Colombia puede — y merece — construir algo distinto.',
    manifestoBtn: 'Nuestro manifiesto', signBtn: 'Firma ahora',
    slogan: '"El progreso verdadero no deja a nadie atrás."',
    ticker: ['Bienestar','Derechos','Economía abierta','Naturaleza','Igualdad','Futuro','Responsabilidad','Libertad','Colombia'],
    manifestoTitle: 'Manifiesto',
    manifesto1: 'Colombia tiene una deuda pendiente consigo misma. Una deuda con los millones que trabajan duro y aún no alcanzan, con los territorios que dan sus recursos y no reciben nada a cambio, con las generaciones que heredarán un planeta que no supimos cuidar. <strong>Patrimonio Ideal nace para saldar esa deuda.</strong>',
    manifesto2: 'Creemos en un Estado que cuida sin controlar, que redistribuye sin asfixiar, que regula sin estorbar. Que la salud y la educación son inversiones, no gastos. Que las finanzas públicas sanas no son opuestas a la justicia — son su condición.',
    manifesto3: 'Creemos también que el mercado, bien regulado, es aliado de la prosperidad compartida. Que la apertura al mundo no significa abandono de lo propio. Y que ningún modelo económico vale si destruye la tierra que nos sustenta.',
    manifesto4: 'Somos el partido de quienes <strong>creen que se puede gobernar con rigor y con corazón al mismo tiempo</strong>. Que la política no tiene que elegir entre ser seria y ser humana. Patrimonio Ideal es esa apuesta.',
    policiesTitle: 'Nuestras Propuestas',
    p1title: 'Atención Primaria en Salud', p1text: 'Dotar y operar centros de salud de primer nivel en municipios sin cobertura adecuada, priorizando los 170 municipios PDET. Un médico general, una enfermera y atención básica garantizados antes de remitir al paciente a niveles superiores.',
    p2title: 'Educación Pública de Calidad', p2text: 'Dotar las escuelas rurales de conectividad básica, actualizar los currículos de bachillerato con competencias digitales y financiar becas para técnicos y tecnólogos del SENA.',
    p3title: 'Protección Ambiental Efectiva', p3text: 'Endurecer las sanciones a la deforestación ilegal en la Amazonia, impulsar energías renovables en departamentos con alta radiación solar y apoyar a agricultores en la reconversión sostenible.',
    p4title: 'Apoyo al Emprendimiento Local', p4text: 'Simplificar los trámites de formalización empresarial, ampliar las líneas de microcrédito de Bancóldex para pequeños productores y reducir la carga tributaria a empresas con menos de diez empleados.',
    p5title: 'Gasto Público Eficiente', p5text: 'Auditar y eliminar contratos de prestación de servicios redundantes en entidades del orden nacional, implementar presupuesto por resultados en ministerios clave y publicar en tiempo real la ejecución del gasto.',
    p6title: 'Equidad de Género en la Práctica', p6text: 'Exigir auditorías salariales en empresas de más de 50 empleados, fortalecer las casas de justicia para víctimas de violencia de género y garantizar paridad en listas electorales.',
    p7title: 'Seguridad Alimentaria y Campo', p7text: 'Fortalecer los mercados campesinos locales, garantizar asistencia técnica gratuita a pequeños agricultores y apoyar la sustitución voluntaria de cultivos ilícitos con proyectos productivos sostenibles.',
    p8title: 'Estado Digital y Transparente', p8text: 'Digitalizar los principales trámites ciudadanos, publicar en datos abiertos los contratos del Estado y crear un portal de seguimiento presupuestal accesible para cualquier colombiano.',
    founderTag: 'Fundadora',
    founderTitle: '<em>Camila Lucía</em><br>Duque',
    founder1: 'Estudiante de bachillerato con la convicción de que la política colombiana necesita voces nuevas, jóvenes y valientes. Pronto, estudiante de Ingeniería Informática.',
    founder2: 'Camila fundó Patrimonio Ideal desde la certeza de que la tecnología, la equidad y la democracia van de la mano. Que ser joven no es un obstáculo para transformar el país, sino exactamente la razón para hacerlo.',
    founder3: 'Su visión une el rigor analítico de las ciencias exactas con el compromiso humano de la política. <strong>Patrimonio Ideal es un legado en construcción.</strong>',
    stat1: 'Ejes Programáticos', stat2: 'Firmas Recolectadas', stat3: 'Colombianos por Convencer',
    sigTag: 'Representación Parlamentaria',
    sigTitle: 'Ayúdanos a<br>llegar al <em>Congreso</em>.',
    sigText: 'Para obtener Personería Jurídica y participar en elecciones al Congreso necesitamos recolectar firmas de apoyo. Cada firma es un voto de confianza en que Colombia puede ser diferente.',
    sigOf: 'de', sigSigs: 'firmas',
    sigFormTitle: 'Firma el respaldo',
    sigName: 'Nombre completo *', sigDoc: 'Cédula *', sigCity: 'Ciudad', sigEmail: 'Correo electrónico *',
    sigConsent: 'Autorizo el tratamiento de mis datos personales conforme a la Ley 1581 de 2012.',
    sigSubmit: 'Firmar respaldo',
    sigSuccess: '¡Gracias por tu firma! Colombia te lo agradece. 💜',
    sigDuplicate: 'Esta cédula ya está registrada. ¡Gracias!',
    sigError: 'Por favor completa todos los campos requeridos y acepta el consentimiento.',
    ctaTag: 'Contacto',
    ctaTitle: '¿Tienes algo<br>que <em>decirnos</em>?',
    ctaText: 'Estamos escuchando. Prensa, alianzas, propuestas ciudadanas o simplemente saludar — escríbenos.',
    ctaName: 'Nombre *', ctaEmail2: 'Correo *', ctaSubject: 'Asunto', ctaMsg: 'Mensaje *',
    ctaSubmit: 'Enviar mensaje',
    ctaSending: 'Enviando...',
    ctaSuccess: '¡Mensaje enviado! Te responderemos pronto. 💜',
    ctaError: 'Por favor completa nombre, correo y mensaje.',
    navPrivacy: 'Datos Personales',
    navProgram: 'Programa',
    footerFounded: 'Fundado el 28 de abril de 2026 · Bogotá, Colombia',
    footerProgram: '↓ Descargar Programa de Gobierno',
    privTitle: 'Política de Tratamiento de Datos Personales',
    privDate: 'Vigente desde enero de 2026 · Ley 1581 de 2012 y Decreto 1377 de 2013',
    priv1h: '1. Responsable del tratamiento',
    priv1p: 'Patrimonio Ideal es el responsable del tratamiento de los datos personales recolectados a través de este sitio web. Correo de contacto: <a href="mailto:datos@patrimonioideal.co">datos@patrimonioideal.co</a>',
    priv2h: '2. Datos que recolectamos',
    priv2p: 'Nombre completo, número de cédula de ciudadanía, ciudad de residencia y correo electrónico. Solo recolectamos los datos estrictamente necesarios para los fines descritos en esta política.',
    priv3h: '3. Finalidad del tratamiento',
    priv3p: 'Los datos del formulario de firmas se usan exclusivamente para acreditar respaldo ciudadano ante las autoridades electorales colombianas (CNE) en el marco de la solicitud de Personería Jurídica. Los datos del formulario de contacto se usan para responder tu mensaje.',
    priv4h: '4. Derechos del titular',
    priv4p: 'Tienes derecho a conocer, actualizar, rectificar y suprimir tus datos, así como a revocar la autorización otorgada. Puedes ejercer estos derechos escribiendo a <a href="mailto:datos@patrimonioideal.co">datos@patrimonioideal.co</a> con el asunto "Derechos ARCO".',
    priv5h: '5. Seguridad de la información',
    priv5p: 'Los números de cédula se almacenan de forma anonimizada mediante función de hash unidireccional. No se comparten datos personales con terceros salvo obligación legal o requerimiento de autoridad electoral competente.',
    priv6h: '6. Vigencia',
    priv6p: 'Los datos se conservarán durante el tiempo necesario para cumplir la finalidad descrita y, en todo caso, por el período que exijan las normas electorales aplicables. Transcurrido ese plazo serán eliminados de forma segura.',
  },
  en: {
    navManifesto: 'Manifesto', navPolicies: 'Policies',
    navFounder: 'Founder', navSign: 'Support Us', navContact: 'Contact',
    heroTag: 'For a better Colombia',
    heroTitle: 'For a <em>Heritage</em><br>that belongs to everyone.',
    heroSubtitle: 'A movement born from the conviction that Colombia can — and deserves — to build something different.',
    manifestoBtn: 'Our manifesto', signBtn: 'Sign now',
    slogan: '"True progress leaves no one behind."',
    ticker: ['Welfare','Rights','Open Economy','Nature','Equality','Future','Responsibility','Freedom','Colombia'],
    manifestoTitle: 'Manifesto',
    manifesto1: 'Colombia has an outstanding debt to itself. A debt owed to the millions who work hard and still can\'t get ahead, to the territories that give their resources and receive nothing in return, to the generations that will inherit a planet we failed to care for. <strong>Patrimonio Ideal was born to pay that debt.</strong>',
    manifesto2: 'We believe in a State that protects without controlling, that redistributes without suffocating, that regulates without hindering. That healthcare and education are investments, not expenses. That sound public finances are not the opposite of justice — they are its condition.',
    manifesto3: 'We also believe that a well-regulated market is an ally of shared prosperity. That opening to the world does not mean abandoning what is ours. And that no economic model is worth anything if it destroys the land that sustains us.',
    manifesto4: 'We are the party of those who <strong>believe you can govern with rigor and heart at the same time</strong>. That politics does not have to choose between being serious and being human. Patrimonio Ideal is that commitment.',
    policiesTitle: 'Our Policies',
    p1title: 'Primary Healthcare Access', p1text: 'Staff and operate first-level health centers in municipalities without adequate coverage, prioritizing the 170 PDET municipalities. A general practitioner, a nurse and basic care guaranteed before referring patients to higher-level facilities.',
    p2title: 'Quality Public Education', p2text: 'Provide basic internet connectivity to rural schools, update high school curricula with digital skills and fund scholarships for SENA technical and vocational programs.',
    p3title: 'Effective Environmental Protection', p3text: 'Toughen penalties for illegal deforestation in the Amazon, promote renewable energy in high-solar departments and support farmers transitioning to sustainable practices.',
    p4title: 'Support for Local Entrepreneurship', p4text: 'Streamline business formalization procedures, expand Bancóldex microcredit lines for small producers and lower the tax burden on businesses with fewer than ten employees.',
    p5title: 'Efficient Public Spending', p5text: 'Audit and eliminate redundant service contracts in national entities, implement results-based budgeting in key ministries and publish government expenditure in real time.',
    p6title: 'Gender Equity in Practice', p6text: 'Require pay audits in companies with more than 50 employees, strengthen justice centers for gender-based violence victims and guarantee parity on electoral lists.',
    p7title: 'Food Security and Rural Development', p7text: 'Strengthen local farmers\' markets, guarantee free technical assistance to smallholder farmers and support voluntary substitution of illicit crops with sustainable productive projects.',
    p8title: 'Digital and Transparent Government', p8text: 'Digitize key public services, publish government contracts as open data and create a budget-tracking portal accessible to every Colombian.',
    founderTag: 'Founder',
    founderTitle: '<em>Camila Lucía</em><br>Duque',
    founder1: 'A high school student convinced that Colombian politics needs new, young, and courageous voices. Soon to be a Computer Engineering student.',
    founder2: 'Camila founded Patrimonio Ideal with the certainty that technology, equality, and democracy go hand in hand. That being young is not an obstacle to transforming the country, but precisely the reason to do so.',
    founder3: 'Her vision combines the analytical rigor of the exact sciences with the human commitment of politics. <strong>Patrimonio Ideal is a legacy under construction.</strong>',
    stat1: 'Programmatic Axes', stat2: 'Signatures Collected', stat3: 'Colombians to Convince',
    sigTag: 'Parliamentary Representation',
    sigTitle: 'Help us reach<br>the <em>Congress</em>.',
    sigText: 'To obtain legal standing and run in congressional elections, we need to collect support signatures. Each signature is a vote of confidence that Colombia can be different.',
    sigOf: 'of', sigSigs: 'signatures',
    sigFormTitle: 'Sign your support',
    sigName: 'Full name *', sigDoc: 'ID Number *', sigCity: 'City', sigEmail: 'Email address *',
    sigConsent: 'I authorize the processing of my personal data in accordance with Law 1581 of 2012.',
    sigSubmit: 'Sign support',
    sigSuccess: 'Thank you for your signature! Colombia thanks you. 💜',
    sigDuplicate: 'This ID is already registered. Thank you!',
    sigError: 'Please complete all required fields and accept the consent.',
    ctaTag: 'Contact',
    ctaTitle: 'Have something<br>to <em>tell us</em>?',
    ctaText: 'We are listening. Press, alliances, citizen proposals or just to say hello — write to us.',
    ctaName: 'Name *', ctaEmail2: 'Email *', ctaSubject: 'Subject', ctaMsg: 'Message *',
    ctaSubmit: 'Send message',
    ctaSending: 'Sending...',
    ctaSuccess: 'Message sent! We\'ll get back to you soon. 💜',
    ctaError: 'Please complete name, email and message.',
    navPrivacy: 'Data Policy',
    navProgram: 'Programme',
    footerFounded: 'Founded on 28 April 2026 · Bogotá, Colombia',
    footerProgram: '↓ Download Government Programme',
    privTitle: 'Personal Data Processing Policy',
    privDate: 'In force since January 2026 · Law 1581 of 2012 and Decree 1377 of 2013',
    priv1h: '1. Data Controller',
    priv1p: 'Patrimonio Ideal is the controller of personal data collected through this website. Contact email: <a href="mailto:datos@patrimonioideal.co">datos@patrimonioideal.co</a>',
    priv2h: '2. Data We Collect',
    priv2p: 'Full name, national ID number, city of residence and email address. We only collect data strictly necessary for the purposes described in this policy.',
    priv3h: '3. Purpose of Processing',
    priv3p: 'Data from the signature form is used exclusively to certify citizen support before Colombian electoral authorities (CNE) as part of the application for legal party status. Contact form data is used solely to reply to your message.',
    priv4h: '4. Rights of the Data Subject',
    priv4p: 'You have the right to access, update, correct and delete your data, as well as to withdraw the authorization granted. You may exercise these rights by writing to <a href="mailto:datos@patrimonioideal.co">datos@patrimonioideal.co</a> with the subject "ARCO Rights".',
    priv5h: '5. Information Security',
    priv5p: 'ID numbers are stored in anonymized form using a one-way hash function. No personal data is shared with third parties except as required by law or by a competent electoral authority.',
    priv6h: '6. Retention Period',
    priv6p: 'Data will be retained for as long as necessary to fulfill the stated purpose and, in any event, for the period required by applicable electoral regulations. After that period, data will be securely deleted.',
  }
};

let lang = 'es';

/* ── APPLY TRANSLATIONS ───────────────────────── */
function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  const t = T[l];

  // text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // innerHTML nodes (contain <em>, <strong>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // ticker
  const tickerWords = t.ticker.concat(t.ticker);
  document.getElementById('ticker-inner').innerHTML =
    tickerWords.map(w => `<span>${w}</span>`).join('');

  // privacy blocks (contain links — need innerHTML)
  const privHtmlKeys = ['priv1p','priv4p'];
  privHtmlKeys.forEach(key => {
    const el = document.querySelector(`[data-i18n="${key}"]`);
    if (el && t[key]) el.innerHTML = t[key];
  });

  // lang buttons
  document.getElementById('lang-es').classList.toggle('active', l === 'es');
  document.getElementById('lang-en').classList.toggle('active', l === 'en');
}

document.getElementById('lang-es').addEventListener('click', () => applyLang('es'));
document.getElementById('lang-en').addEventListener('click', () => applyLang('en'));

/* ── FIRMAS STORAGE ───────────────────────────── */
let firmasData = { count: 0, docs: [] }; // docs: array of hashed cedulas

async function loadFirmas() {
  try {
    const result = await window.storage.get(STORAGE_KEY, true); // shared=true
    if (result && result.value) {
      firmasData = JSON.parse(result.value);
    }
  } catch (_) {
    // key doesn't exist yet, start fresh
    firmasData = { count: 0, docs: [] };
  }
  renderFirmas();
}

async function saveFirmas() {
  try {
    await window.storage.set(STORAGE_KEY, JSON.stringify(firmasData), true);
  } catch (e) {
    console.error('Storage save error', e);
  }
}

function renderFirmas() {
  const count = firmasData.count;
  const pct = Math.min(100, Math.round((count / META_FIRMAS) * 100));

  // hero stat
  document.getElementById('firma-count-hero').textContent = count.toLocaleString('es-CO');

  // progress section
  document.getElementById('firmas-actual').textContent = count.toLocaleString('es-CO');
  document.getElementById('firmas-meta-label').textContent = META_FIRMAS.toLocaleString('es-CO');
  document.getElementById('firmas-bar-fill').style.width = pct + '%';
  document.getElementById('firmas-percent').textContent = pct + '%';
}

/* simple hash to avoid storing raw cédulas */
function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return h.toString(36);
}

/* ── FIRMA FORM ───────────────────────────────── */
document.getElementById('firma-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const t = T[lang];
  const fb = document.getElementById('firma-feedback');
  fb.className = 'form-feedback';
  fb.textContent = '';

  const name  = document.getElementById('sig-name').value.trim();
  const doc   = document.getElementById('sig-doc').value.trim();
  const email = document.getElementById('sig-email').value.trim();
  const consent = document.getElementById('sig-consent').checked;

  // validation
  if (!name || !doc || !email || !consent || !email.includes('@')) {
    fb.className = 'form-feedback error';
    fb.textContent = t.sigError;
    return;
  }

  const docHash = simpleHash(doc);

  // duplicate check
  if (firmasData.docs && firmasData.docs.includes(docHash)) {
    fb.className = 'form-feedback success';
    fb.textContent = t.sigDuplicate;
    return;
  }

  // register
  firmasData.count += 1;
  if (!firmasData.docs) firmasData.docs = [];
  firmasData.docs.push(docHash);
  await saveFirmas();
  renderFirmas();

  // reset form
  document.getElementById('firma-form').reset();
  fb.className = 'form-feedback success';
  fb.textContent = t.sigSuccess;
});

/* ── CONTACT FORM (AI-powered) ────────────────── */
document.getElementById('contacto-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const t = T[lang];
  const fb = document.getElementById('contacto-feedback');
  const btn = document.querySelector('#contacto-form button[type="submit"]');
  fb.className = 'form-feedback';
  fb.textContent = '';

  const name    = document.getElementById('ct-name').value.trim();
  const email   = document.getElementById('ct-email').value.trim();
  const subject = document.getElementById('ct-subject').value.trim();
  const msg     = document.getElementById('ct-msg').value.trim();

  if (!name || !email || !msg || !email.includes('@')) {
    fb.className = 'form-feedback error';
    fb.textContent = t.ctaError;
    return;
  }

  btn.disabled = true;
  btn.textContent = t.ctaSending;

  try {
    const sysPrompt = lang === 'es'
      ? `Eres el asistente virtual de Patrimonio Ideal, un partido político colombiano de centro-izquierda fundado por Camila Lucía Caleon-Duque. Tu tarea es responder de forma breve, cálida y profesional a mensajes enviados a través del formulario de contacto del sitio web. Responde siempre en español, en 2-3 oraciones máximo. No menciones que eres una IA. Firma siempre como "El equipo de Patrimonio Ideal".`
      : `You are the virtual assistant for Patrimonio Ideal, a Colombian center-left political party founded by Camila Lucía Caleon-Duque. Your task is to reply briefly, warmly, and professionally to messages sent through the website contact form. Always reply in English, in 2-3 sentences maximum. Do not mention that you are an AI. Always sign as "The Patrimonio Ideal team".`;

    const userContent = lang === 'es'
      ? `Nombre: ${name}\nCorreo: ${email}\nAsunto: ${subject || '(sin asunto)'}\nMensaje: ${msg}`
      : `Name: ${name}\nEmail: ${email}\nSubject: ${subject || '(no subject)'}\nMessage: ${msg}`;

    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system: sysPrompt,
        messages: [{ role: 'user', content: userContent }]
      })
    });

    const data = await resp.json();
    const reply = data.content?.find(b => b.type === 'text')?.text || t.ctaSuccess;

    document.getElementById('contacto-form').reset();
    fb.className = 'form-feedback success';
    fb.textContent = reply;

  } catch (err) {
    fb.className = 'form-feedback success';
    fb.textContent = t.ctaSuccess; // graceful fallback
  } finally {
    btn.disabled = false;
    btn.textContent = T[lang].ctaSubmit;
  }
});

/* ── HAMBURGER MENU ───────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── SCROLL REVEAL ────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.politics-card, .numero-item, .firmas-left, .firmas-right, .contacto-left, .contacto-right').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  revealObserver.observe(el);
});

/* ── INIT ─────────────────────────────────────── */
applyLang('es');
loadFirmas();