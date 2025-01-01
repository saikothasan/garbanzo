import { Info } from 'lucide-react'

export function InfoPanel() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <Info className="w-5 h-5" />
          <h2 className="text-xl font-bold">Solar System Explorer</h2>
        </div>
        <p className="text-sm opacity-80">
          Navigate through our solar system using your mouse:
          <br />
          • Left click + drag to rotate the view
          <br />
          • Right click + drag to pan
          <br />
          • Scroll to zoom in/out
        </p>
      </div>
    </div>
  )
}