import Button from '../Button/Button.jsx'
import { contactData } from '../../data/site.js'
import './ContactCard.css'

function ContactCard() {
  return (
    <article className="contact-card" data-reveal>
      <p className="contact-eyebrow">Contato direto</p>
      <h2>Projeto de site com foco em resultado comercial.</h2>
      <p className="contact-description">
        Atendimento para site institucional, landing page, portfólio e redesign com direção estratégica.
      </p>

      <div className="contact-actions">
        <Button className="btn-contact-primary" href={contactData.whatsapp} external size="lg">
          Falar no WhatsApp
        </Button>
        <Button variant="secondary" href={`mailto:${contactData.email}`} size="lg">
          Enviar e-mail
        </Button>
      </div>

      <ul className="contact-list">
        <li>
          <span>WhatsApp</span>
          <a href={contactData.whatsapp} target="_blank" rel="noreferrer">
            {contactData.whatsappLabel}
          </a>
        </li>
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
