import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Sun() {
  const sunRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.001
    }
  })

  return (
    <mesh ref={sunRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshBasicMaterial 
        color="#ffd700"
        emissive="#ff8c00"
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}