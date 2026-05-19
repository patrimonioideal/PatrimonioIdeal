import { createClient } from '@supabase/supabase-js'

// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE SUPABASE
//
// 1. Ve a https://supabase.com y crea un proyecto gratuito.
// 2. En el dashboard: Settings → API → copia:
//      - Project URL  →  VITE_SUPABASE_URL
//      - anon public key  →  VITE_SUPABASE_ANON_KEY
// 3. Crea un archivo .env en la raíz del proyecto:
//
//      VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
//      VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6...
//
// 4. En el SQL Editor de Supabase, ejecuta el schema de abajo.
// ─────────────────────────────────────────────────────────────

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL   ?? '',
  import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''
)

// ─────────────────────────────────────────────────────────────
// SQL SCHEMA — copiar y ejecutar en Supabase SQL Editor
// ─────────────────────────────────────────────────────────────
//
// -- Tabla de firmas de apoyo
// create table if not exists firmas (
//   id          bigserial primary key,
//   nombre      text not null,
//   doc_hash    text not null unique,   -- hash SHA-256 de la cédula
//   ciudad      text,
//   email       text not null,
//   created_at  timestamptz default now()
// );
//
// -- Vista pública: solo el conteo (Row Level Security)
// create or replace view firmas_count as
//   select count(*) as total from firmas;
//
// -- Habilitar RLS en la tabla firmas
// alter table firmas enable row level security;
//
// -- Policy: cualquiera puede insertar (anon)
// create policy "insert_firma" on firmas
//   for insert to anon with check (true);
//
// -- Policy: nadie puede leer filas individuales (solo la vista de conteo)
// -- La vista firmas_count sí es pública porque no expone datos personales.
//
// -- Tabla de mensajes de contacto
// create table if not exists contactos (
//   id         bigserial primary key,
//   nombre     text not null,
//   email      text not null,
//   asunto     text,
//   mensaje    text not null,
//   created_at timestamptz default now()
// );
//
// alter table contactos enable row level security;
//
// create policy "insert_contacto" on contactos
//   for insert to anon with check (true);
//
// ─────────────────────────────────────────────────────────────

// ── HELPERS ──────────────────────────────────────────────────

/** Hash SHA-256 de la cédula para no almacenarla en claro */
export async function hashDoc(cedula) {
  const msgBuffer = new TextEncoder().encode(cedula.trim())
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
  const hashArray  = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

/** Obtener conteo de firmas */
export async function getFirmasCount() {
  const { data, error } = await supabase
    .from('firmas_count')
    .select('total')
    .single()
  if (error) throw error
  return Number(data?.total ?? 0)
}

/** Insertar firma */
export async function insertFirma({ nombre, cedula, ciudad, email }) {
  const doc_hash = await hashDoc(cedula)
  const { error } = await supabase
    .from('firmas')
    .insert({ nombre, doc_hash, ciudad, email })
  if (error) throw error
  return doc_hash
}

/** Insertar mensaje de contacto */
export async function insertContacto({ nombre, email, asunto, mensaje }) {
  const { error } = await supabase
    .from('contactos')
    .insert({ nombre, email, asunto, mensaje })
  if (error) throw error
}
