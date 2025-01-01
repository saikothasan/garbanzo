import { useState } from 'react'
import { Html } from '@react-three/drei'
import { Info } from 'lucide-react'

interface PlanetDetailsProps {
  name: string
  distance: number
  size: number
}

export function PlanetDetails({ name, distance, size }: PlanetDetailsProps) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <Html position={[0, size * 2, 0]}>
      <div 
        className={`bg-black/80 text-white p-2 rounded-lg text-sm transform transition-all duration-200 ${
          showInfo ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        style={{ 
          minWidth: '150px',
          pointerEvents: showInfo ? 'auto' : 'none'
        }}
      >
        <h3 className="font-bold mb-1">{name}</h3>
        <p>Distance from Sun: {distance.toFixed(1)} AU</p>
        <p>Relative Size: {size.toFixed(1)}x Earth</p>
      </div>
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="absolute top-0 right-0 bg-white/10 p-1 rounded-full hover:bg-white/20 transition-colors"
      >
        <Info className="w-4 h-4 text-white" />
      </button>
    </Html>
  )
}