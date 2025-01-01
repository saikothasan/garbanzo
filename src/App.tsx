import { ErrorBoundary } from './components/ErrorBoundary'
import { Scene } from './components/Scene'

function App() {
  return (
    <ErrorBoundary>
      <div className="w-full h-screen relative">
        <Scene />
      </div>
    </ErrorBoundary>
  )
}

export default App;
