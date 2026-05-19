# Patrimonio Ideal — Sitio Web

Stack: **React 18 + Vite + TailwindCSS v3 + Supabase**

---

## 1. Instalación (Arch Linux)

```bash
# Node.js (si no lo tienes)
sudo pacman -S nodejs npm

# Dependencias del proyecto
npm install
```

---

## 2. Configurar Supabase

### 2.1 Crear proyecto
1. Ve a [supabase.com](https://supabase.com) y crea una cuenta gratuita.
2. Crea un nuevo proyecto (elige región más cercana, ej. `us-east-1`).
3. Espera ~2 min a que se inicialice.

### 2.2 Crear las tablas

En el **SQL Editor** de tu proyecto Supabase, ejecuta:

```sql
-- Tabla de firmas
create table if not exists firmas (
  id         bigserial primary key,
  nombre     text not null,
  doc_hash   text not null unique,
  ciudad     text,
  email      text not null,
  created_at timestamptz default now()
);

-- Vista pública de conteo (no expone datos personales)
create or replace view firmas_count as
  select count(*) as total from firmas;

-- Row Level Security
alter table firmas enable row level security;

create policy "insert_firma" on firmas
  for insert to anon with check (true);

-- Tabla de mensajes de contacto
create table if not exists contactos (
  id         bigserial primary key,
  nombre     text not null,
  email      text not null,
  asunto     text,
  mensaje    text not null,
  created_at timestamptz default now()
);

alter table contactos enable row level security;

create policy "insert_contacto" on contactos
  for insert to anon with check (true);
```

### 2.3 Obtener credenciales
En Supabase: **Settings → API** → copia:
- `Project URL`
- `anon public` key

### 2.4 Crear `.env`
```bash
cp .env.example .env
```
Rellena con tus valores:
```
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
```

---

## 3. Archivos estáticos

Coloca estos archivos en la carpeta `public/`:

```
public/
├── assets/
│   ├── patri-ideal.png          ← logo del partido
│   └── patrimonio-fvcn.ico      ← favicon
└── docs/
    ├── programa-de-gobierno-2026.pdf
    ├── estatutos-patrimonio-ideal.pdf
    ├── codigo-de-etica.pdf
    └── formulario-inscripcion-militante.pdf
```

---

## 4. Desarrollo local

```bash
npm run dev
# → http://localhost:5173
```

---

## 5. Build para producción

```bash
npm run build
# Genera la carpeta dist/
```

Para previsualizar el build:
```bash
npm run preview
```

---

## 6. Deploy

### Opción A — Vercel (recomendado, gratis)
```bash
# Instalar CLI
npm i -g vercel

# Deploy
vercel

# Configurar variables de entorno en vercel.com:
# → Settings → Environment Variables
# → VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY
```

### Opción B — Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Opción C — GitHub Pages (estático)
```bash
# En vite.config.js añade: base: '/nombre-repo/'
npm run build
# Sube la carpeta dist/ a la rama gh-pages
```

---

## 7. Estructura del proyecto

```
pi-web/
├── public/
│   ├── assets/          ← logo, favicon
│   └── docs/            ← PDFs descargables
├── src/
│   ├── components/
│   │   └── Navbar.jsx   ← nav desktop + menú móvil
│   ├── hooks/
│   │   ├── useInView.js ← animaciones al hacer scroll
│   │   └── useFirmas.js ← estado y lógica de firmas
│   ├── lib/
│   │   ├── i18n.js      ← traducciones ES/EN completas
│   │   └── supabase.js  ← cliente Supabase + helpers
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Manifesto.jsx
│   │   ├── Proposals.jsx
│   │   ├── Founder.jsx
│   │   ├── Stats.jsx
│   │   ├── Signatures.jsx
│   │   ├── Contact.jsx
│   │   ├── Documents.jsx
│   │   ├── Privacy.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .env.example
└── .gitignore
```

---

## 8. Ver datos de Supabase

En el dashboard de Supabase:
- **Table Editor** → `firmas` → ver todas las firmas recibidas
- **Table Editor** → `contactos` → ver mensajes de contacto
- **SQL Editor** → `select * from firmas_count;` → conteo actual

Para exportar firmas como CSV:
```sql
copy (select nombre, ciudad, email, created_at from firmas order by created_at)
to '/tmp/firmas.csv' csv header;
```
O desde el Table Editor → botón **Export**.
