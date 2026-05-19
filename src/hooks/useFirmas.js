import { useState, useEffect, useCallback } from 'react'
import { getFirmasCount, insertFirma } from '../lib/supabase'

const META = 50000

export function useFirmas() {
  const [count, setCount]     = useState(0)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg]         = useState('')
  const [isError, setIsError] = useState(false)

  // Load count on mount
  useEffect(() => {
    getFirmasCount()
      .then(setCount)
      .catch(() => setCount(0))
  }, [])

  const percent = Math.min(100, Math.round((count / META) * 100))

  const submit = useCallback(async ({ nombre, cedula, ciudad, email, consent }, t) => {
    if (!nombre || !cedula || !email || !consent || !email.includes('@')) {
      setMsg(t.error); setIsError(true); return false
    }
    setLoading(true); setMsg(''); setIsError(false)
    try {
      await insertFirma({ nombre, cedula, ciudad, email })
      const newCount = await getFirmasCount()
      setCount(newCount)
      setMsg(t.success); setIsError(false)
      return true
    } catch (err) {
      if (err?.code === '23505') {
        // unique constraint violation = duplicate
        setMsg(t.duplicate); setIsError(false)
      } else {
        setMsg(t.error); setIsError(true)
      }
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  return { count, percent, loading, msg, isError, submit, META }
}
