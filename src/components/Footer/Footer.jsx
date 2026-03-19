import { Link } from 'react-router-dom'
import SocialLinks from '../SocialLinks/SocialLinks.jsx'
import { contactData } from '../../data/site.js'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="footer-title">Otávio Carbone</p>
          <p>
            Criação de sites modernos para posicionar melhor sua marca, transmitir confiança e aumentar
            geração de contatos.
          </p>
        </div>

        <div>
          <p className="footer-subtitle">Navegação</p>
          <div className="footer-links">
            <a href="/#projetos-home">Projetos</a>
            <Link to="/servicos">Serviços</Link>
            <a href="/#posts-home">Posts</a>
            <a href="/#contato-home">Contato</a>
          </div>
        </div>

        <div>
          <p className="footer-subtitle">Contato</p>
          <div className="footer-contact">
            <a href={contactData.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp: {contactData.whatsappLabel}
            </a>
            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
            <p>{contactData.location}</p>
          </div>
        </div>

        <SocialLinks compact />
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Otávio Carbone. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer
