import { Loader } from 'lucide-react'

export function LoadingScreen() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="text-white text-center">
        <Loader className="w-8 h-8 animate-spin mx-auto mb-4" />
        <p className="text-lg">Loading Solar System...</p>
      </div>
    </div>
  )
}