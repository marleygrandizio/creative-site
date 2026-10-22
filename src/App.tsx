import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SunsetProductContent from './components/SunsetProductContent'
import './index.css'

function App() {
  return (
    <div id="top" className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <SunsetProductContent />
    </div>
  )
}

export default App
