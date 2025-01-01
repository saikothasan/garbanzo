export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight 
        position={[0, 0, 0]} 
        intensity={2} 
        color="#ffd700"
        distance={100}
        decay={2}
      />
      <hemisphereLight 
        intensity={0.1}
        color="#ffffff"
        groundColor="#000000"
      />
    </>
  )
}