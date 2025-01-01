import { Canvas } from '@react-three/fiber'
import { CameraController } from './CameraController'
import { SolarSystem } from './SolarSystem'

export function Scene() {
  return (
    <Canvas 
      camera={{ 
        position: [30, 20, 30], 
        fov: 60,
        near: 0.1,
        far: 1000
      }}
    >
      <color attach="background" args={['#000010']} />
      <SolarSystem />
      <CameraController />
    </Canvas>
  )
}