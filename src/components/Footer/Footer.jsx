import { Link } from 'react-router-dom'
import SocialLinks from '../SocialLinks/SocialLinks.jsx'
import { contactData } from '../../data/site.js'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="footer-title">Otávio Carbone - Dev e Designer Web</p>
          <p>Sites modernos para apresentar negócios, gerar confiança e aumentar conversão.</p>
        </div>

        <div>
          <p className="footer-subtitle">Navegação</p>
          <div className="footer-links">
            <Link to="/projetos">Projetos</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/contato">Contato</Link>
          </div>
        </div>

        <div>
          <p className="footer-subtitle">Contato</p>
          <div className="footer-contact">
            <a href={contactData.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
            <p>{contactData.location}</p>
          </div>
        </div>

        <SocialLinks compact />
      </div>
      <p className="footer-copy">© 2026 Otávio Carbone. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer
