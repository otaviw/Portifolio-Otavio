import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projetos', href: '/#projetos-home' },
  { label: 'Posts', href: '/#posts-home' },
  { label: 'Contato', href: '/#contato-home' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Sobre', to: '/sobre' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()

  // Close menu on resize
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 900) setIsOpen(false)
    }
    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  // Scroll detection for navbar style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy: highlight nav link of current visible section
  useEffect(() => {
    setActiveSection('')
    if (location.pathname !== '/') return undefined

    const sectionIds = navItems
      .filter((item) => item.href?.startsWith('/#'))
      .map((item) => item.href.slice(2))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -50% 0px', threshold: 0 }
    )

    const raf = requestAnimationFrame(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    })

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [location.pathname])

  const handleToggle = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink className="brand" to="/" onClick={closeMenu}>
          <span className="brand-copy">
            Otávio Carbone
            <small>Web Design & Desenvolvimento</small>
          </span>
        </NavLink>

        <button
          className={`mobile-toggle${isOpen ? ' open' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          type="button"
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
        </button>

        <div className={`nav-panel${isOpen ? ' open' : ''}`}>
          <nav aria-label="Navegação principal">
            {navItems.map((item) => {
              if (item.href) {
                const sectionId = item.href.startsWith('/#') ? item.href.slice(2) : null
                const isActive = Boolean(sectionId && activeSection === sectionId)
                return (
                  <a
                    key={item.href}
                    className={`nav-link${isActive ? ' active' : ''}`}
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                )
              }
              return (
                <NavLink
                  key={item.to}
                  end={item.to === '/'}
                  className={({ isActive: routeActive }) => {
                    const active = item.to === '/'
                      ? routeActive && !activeSection
                      : routeActive
                    return `nav-link${active ? ' active' : ''}`
                  }}
                  to={item.to}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
