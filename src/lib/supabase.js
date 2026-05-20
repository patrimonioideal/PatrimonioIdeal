import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL  ?? ''
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''
const isConfigured = SUPABASE_URL.startsWith('https://') && SUPABASE_KEY.length > 10

export const supabase = isConfigured
  ? createClient(SUPABASE_URL, SUPABASE_KEY)
  : null

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
  if (!supabase) return 0
  const { data, error } = await supabase
    .from('firmas_count')
    .select('total')
    .single()
  if (error) throw error
  return Number(data?.total ?? 0)
}

/** Insertar firma */
export async function insertFirma({ nombre, cedula, ciudad, email }) {
  if (!supabase) throw new Error('Supabase no configurado')
  const doc_hash = await hashDoc(cedula)
  const { error } = await supabase
    .from('firmas')
    .insert({ nombre, doc_hash, ciudad, email })
  if (error) throw error
  return doc_hash
}

/** Insertar mensaje de contacto */
export async function insertContacto({ nombre, email, asunto, mensaje }) {
  if (!supabase) throw new Error('Supabase no configurado')
  const { error } = await supabase
    .from('contactos')
    .insert({ nombre, email, asunto, mensaje })
  if (error) throw error
}

/** Obtener posts publicados */
export async function getPosts() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('publicado', true)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}