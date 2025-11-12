import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkSection from './components/WorkSection'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <WorkSection />
      <Services />
      <Contact />
      <footer className="py-10 text-center text-white/50 text-sm">© 2025 LiquidGlass Thumbnails. All rights reserved.</footer>
    </div>
  )
}

export default App
