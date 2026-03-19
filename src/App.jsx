import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import AppRouter from './router/AppRouter.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <>
      <AnimatedBackground />
      <ScrollToTop />
      <div className="app-chrome">
        <Navbar />
        <AppRouter />
        <Footer />
      </div>
    </>
  )
}

export default App
