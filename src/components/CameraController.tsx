import { useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function CameraController() {
  const { camera } = useThree()

  useEffect(() => {
    // Set initial camera target to origin
    camera.lookAt(0, 0, 0)
  }, [camera])

  return (
    <OrbitControls 
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={15}
      maxDistance={200}
      maxPolarAngle={Math.PI / 1.5}
      minPolarAngle={Math.PI / 6}
      dampingFactor={0.05}
      rotateSpeed={0.5}
      zoomSpeed={0.8}
      enableDamping={true}
    />
  )
}