import { useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { Planet } from './planets/Planet'
import { Sun } from './Sun'
import { SpaceEnvironment } from './effects/SpaceEnvironment'
import { LoadingScreen } from './LoadingScreen'

export function SolarSystem() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <Suspense fallback={<LoadingScreen />}>
      <SpaceEnvironment />
      <group ref={groupRef}>
        <Sun />
        <Planet 
          name="Mercury"
          distance={4}
          size={0.4}
          color="#A0522D"
          orbitSpeed={4.1}
          textureUrl="https://raw.githubusercontent.com/saikothasan/garbanzo/refs/heads/main/public/2k_mercury.jpg"
        />
        <Planet 
          name="Venus"
          distance={7}
          size={0.9}
          color="#DEB887"
          orbitSpeed={1.6}
          hasAtmosphere
          textureUrl="https://raw.githubusercontent.com/saikothasan/garbanzo/refs/heads/main/public/2k_venus_surface.jpg"
        />
        <Planet 
          name="Earth"
          distance={10}
          size={1}
          color="#4169E1"
          orbitSpeed={1}
          hasAtmosphere
          textureUrl="https://raw.githubusercontent.com/saikothasan/garbanzo/refs/heads/main/public/2k_earth_daymap.jpg"
        />
        <Planet 
          name="Mars"
          distance={13}
          size={0.5}
          color="#CD5C5C"
          orbitSpeed={0.5}
          textureUrl="https://raw.githubusercontent.com/saikothasan/garbanzo/refs/heads/main/public/2k_mars.jpg"
        />
        <Planet 
          name="Jupiter"
          distance={17}
          size={2}
          color="#DAA520"
          orbitSpeed={0.3}
          hasAtmosphere
          textureUrl="https://raw.githubusercontent.com/saikothasan/garbanzo/refs/heads/main/public/2k_jupiter.jpg"
        />
        <Planet 
          name="Saturn"
          distance={21}
          size={1.7}
          color="#F4A460"
          orbitSpeed={0.2}
          hasRings
          textureUrl="https://raw.githubusercontent.com/saikothasan/garbanzo/refs/heads/main/public/2k_saturn.jpg"
        />
      </group>
    </Suspense>
  )
}
