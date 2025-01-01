import { useState, useEffect } from 'react'
import * as THREE from 'three'

export function useTexture(url: string) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loader = new THREE.TextureLoader()
    
    loader.load(
      url,
      (loadedTexture) => {
        loadedTexture.encoding = THREE.sRGBEncoding
        setTexture(loadedTexture)
        setLoading(false)
      },
      undefined,
      (err) => {
        setError(err)
        setLoading(false)
      }
    )
  }, [url])

  return { texture, error, loading }
}