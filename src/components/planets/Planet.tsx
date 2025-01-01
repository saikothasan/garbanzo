import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { PlanetDetails } from './PlanetDetails'
import { PlanetRings } from './PlanetRings'
import { PlanetAtmosphere } from './PlanetAtmosphere'
import { useTexture } from '../../hooks/useTexture'

interface PlanetProps {
  name: string
  distance: number
  size: number
  color: string
  orbitSpeed: number
  hasRings?: boolean
  hasAtmosphere?: boolean
  textureUrl?: string
}

export function Planet({ 
  name, 
  distance, 
  size, 
  color, 
  orbitSpeed,
  hasRings = false,
  hasAtmosphere = false,
  textureUrl
}: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null)
  const orbitRef = useRef<THREE.Group>(null)
  const { texture, loading } = useTexture(textureUrl || '')

  const orbitPoints = useMemo(() => {
    return new Float32Array(
      [...Array(65)].map((_, i) => {
        const angle = (i / 32) * Math.PI * 2
        return [
          Math.cos(angle) * distance,
          0,
          Math.sin(angle) * distance,
        ]
      }).flat()
    )
  }, [distance])

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = clock.getElapsedTime() * orbitSpeed * 0.5
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01
    }
  })

  if (loading) return null

  return (
    <group ref={orbitRef}>
      <group position={[distance, 0, 0]}>
        <mesh ref={planetRef}>
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial
            color={color}
            metalness={0.4}
            roughness={0.7}
            normalScale={new THREE.Vector2(0.5, 0.5)}
            map={texture || undefined}
          />
        </mesh>
        {hasRings && <PlanetRings radius={size} color={color} />}
        {hasAtmosphere && <PlanetAtmosphere radius={size} color={color} />}
        <PlanetDetails 
          name={name}
          distance={distance}
          size={size}
        />
      </group>
      <line>
        <bufferGeometry>
          <float32BufferAttribute
            attach="attributes-position"
            count={64}
            array={orbitPoints}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" opacity={0.2} transparent />
      </line>
    </group>
  )
}