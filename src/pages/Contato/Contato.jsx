import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx'
import ContactCard from '../../components/ContactCard/ContactCard.jsx'
import SocialLinks from '../../components/SocialLinks/SocialLinks.jsx'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import './Contato.css'

function Contato() {
  useScrollReveal()

  return (
    <main className="page-shell contato-page">
      <section className="contato-hero" data-reveal>
        <p className="contato-eyebrow">Contato</p>
        <h1>Projeto de site com direção estratégica</h1>
        <p>Canal direto para iniciar briefing, alinhar escopo e definir prazos.</p>
      </section>

      <section className="contato-grid-section">
        <SectionTitle
          eyebrow="Próximo passo"
          title="Canal de atendimento"
          description="WhatsApp para retorno rápido e e-mail para briefing completo."
        />

        <div className="contato-grid">
          <ContactCard />

          <aside className="contato-side" data-reveal>
            <SocialLinks />

            <article className="contato-info">
              <h3>Informações para orçamento</h3>
              <ul>
                <li>Tipo de site</li>
                <li>Prazo esperado</li>
                <li>Referências visuais</li>
                <li>Objetivo comercial</li>
              </ul>
            </article>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Contato
