import Button from '../Button/Button.jsx'
import { contactData } from '../../data/site.js'
import './ContactCard.css'

function ContactCard() {
  return (
    <article className="contact-card" data-reveal>
      <p className="contact-eyebrow">Contato direto</p>
      <h2>Projeto de site com foco em venda e posicionamento.</h2>
      <p className="contact-description">
        Atendimento para site institucional, landing page, portfólio e reformulação visual.
      </p>

      <div className="contact-actions">
        <Button href={contactData.whatsapp} external size="lg">
          WhatsApp
        </Button>
        <Button variant="secondary" href={`mailto:${contactData.email}`} size="lg">
          E-mail
        </Button>
      </div>

      <ul className="contact-list">
        <li>
          <span>E-mail</span>
          <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
        </li>
        <li>
          <span>Localização</span>
          <p>{contactData.location}</p>
        </li>
      </ul>
    </article>
  )
}

export default ContactCard
