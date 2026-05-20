import { useState, useEffect } from 'react'
import { getPosts } from '../lib/supabase'

export function usePosts() {
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(() => setPosts([]))
      .finally(() => setLoading(false))
  }, [])

  return { posts, loading }
}