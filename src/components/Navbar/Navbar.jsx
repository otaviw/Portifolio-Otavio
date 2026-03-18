import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button.jsx'
import { contactData } from '../../data/site.js'
import './Navbar.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Posts', to: '/posts' },
  { label: 'Sobre', to: '/sobre' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 900) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  const handleToggle = () => setIsOpen((current) => !current)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink className="brand" to="/" onClick={closeMenu}>
          <span className="brand-copy">
            Otávio
            <small>Web Studio</small>
          </span>
        </NavLink>

        <button
          className={`mobile-toggle ${isOpen ? 'open' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          type="button"
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
        </button>

        <div className={`nav-panel ${isOpen ? 'open' : ''}`}>
          <nav aria-label="Navegação principal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to={item.to}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Button
            className="nav-cta"
            size="sm"
            href={contactData.whatsapp}
            external
            onClick={closeMenu}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
