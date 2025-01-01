import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface PlanetProps {
  name: string
  distance: number
  size: number
  color: string
  orbitSpeed: number
}

export function Planet({ distance, size, color, orbitSpeed }: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null)
  const orbitRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = clock.getElapsedTime() * orbitSpeed * 0.5
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={orbitRef}>
      <mesh 
        ref={planetRef}
        position={[distance, 0, 0]}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
      {/* Orbit line */}
      <line>
        <bufferGeometry>
          <float32BufferAttribute
            attach="attributes-position"
            count={64}
            array={new Float32Array(
              [...Array(65)].map((_, i) => {
                const angle = (i / 32) * Math.PI * 2
                return [
                  Math.cos(angle) * distance,
                  0,
                  Math.sin(angle) * distance,
                ]
              }).flat()
            )}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" opacity={0.2} transparent />
      </line>
    </group>
  )
}