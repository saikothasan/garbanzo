import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface RingsProps {
  radius: number
  color: string
}

export function PlanetRings({ radius, color }: RingsProps) {
  const ringsRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (ringsRef.current) {
      ringsRef.current.rotation.x = Math.PI / 3
    }
  })

  return (
    <mesh ref={ringsRef}>
      <torusGeometry args={[radius * 1.5, radius * 0.2, 2, 50]} />
      <meshStandardMaterial 
        color={color} 
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}