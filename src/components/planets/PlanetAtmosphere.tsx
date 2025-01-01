import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface AtmosphereProps {
  radius: number
  color: string
}

export function PlanetAtmosphere({ radius, color }: AtmosphereProps) {
  const atmosphereRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <mesh ref={atmosphereRef}>
      <sphereGeometry args={[radius * 1.05, 32, 32]} />
      <meshPhongMaterial
        color={color}
        transparent
        opacity={0.2}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}