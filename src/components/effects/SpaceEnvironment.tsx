import { Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export function SpaceEnvironment() {
  const starsRef = useRef<THREE.Points>(null)

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.02
    }
  })

  return (
    <>
      <Stars 
        ref={starsRef}
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        fade 
        speed={1}
      />
      <fog attach="fog" args={['#000010', 30, 100]} />
      <hemisphereLight 
        intensity={0.1} 
        groundColor="#000000"
        position={[0, 50, 0]} 
      />
    </>
  )
}