import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'
import { contactData, homeTechStack } from '../../data/site.js'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import './Sobre.css'

function Sobre() {
  useScrollReveal()

  return (
    <main className="page-shell sobre-page">
      <section className="sobre-hero" data-reveal>
        <p className="sobre-eyebrow">Sobre</p>
        <h1>Otávio Carbone, desenvolvedor e designer web</h1>
        <p>
          Atuação em projetos digitais com foco em apresentação profissional, usabilidade e conversão.
        </p>
      </section>

      <section className="sobre-section">
        <SectionTitle
          eyebrow="Foco"
          title="Padrão de entrega"
          description="Visual limpo, código organizado e estrutura orientada a resultado."
        />

        <div className="sobre-pillars">
          <article data-reveal>
            <h3>Design com clareza</h3>
            <p>Interface moderna, leitura fácil e hierarquia visual bem definida.</p>
          </article>
          <article data-reveal>
            <h3>Desenvolvimento sólido</h3>
            <p>Projeto estruturado para evoluir sem perda de desempenho.</p>
          </article>
          <article data-reveal>
            <h3>Foco em conversão</h3>
            <p>Construção pensada para transformar visita em contato comercial.</p>
          </article>
        </div>
      </section>

      <section className="sobre-section">
        <SectionTitle eyebrow="Stack" title="Tecnologias e competências" />
        <ul className="sobre-stack" data-reveal>
          {homeTechStack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="sobre-section">
        <SectionTitle
          eyebrow="Resumo"
          title="Perfil profissional"
          description="Atuação com criação de sites, identidade visual digital e presença online."
        />

        <div className="sobre-timeline">
          <article data-reveal>
            <span>Perfil</span>
            <h3>Dev + Designer Web</h3>
            <p>Integração entre código e direção visual para entrega completa.</p>
          </article>
          <article data-reveal>
            <span>Atendimento</span>
            <h3>Bento Gonçalves e remoto</h3>
            <p>Atendimento local e online para projetos em diferentes regiões.</p>
          </article>
          <article data-reveal>
            <span>Objetivo</span>
            <h3>Projetos para vender mais</h3>
            <p>Sites pensados para posicionar marca e captar oportunidades reais.</p>
          </article>
        </div>
      </section>

      <CTASection
        title="Projeto novo com padrão profissional"
        description="Canal aberto para novas demandas de site e presença digital."
        primaryAction={{ label: 'Falar no WhatsApp', href: contactData.whatsapp, external: true }}
        secondaryAction={{ label: 'Ver serviços', to: '/servicos' }}
      />
    </main>
  )
}

export default Sobre
