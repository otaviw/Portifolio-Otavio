import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx'
import ServiceCard from '../../components/ServiceCard/ServiceCard.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'
import services from '../../data/services.js'
import { contactData, processSteps } from '../../data/site.js'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import './Servicos.css'

function Servicos() {
  useScrollReveal()

  return (
    <main className="page-shell servicos-page">
      <section className="servicos-hero" data-reveal>
        <p className="servicos-eyebrow">Serviços</p>
        <h1>Sites prontos para posicionar e vender melhor</h1>
        <p>Projetos com design atual, estrutura clara e foco em conversão.</p>
      </section>

      <section className="servicos-list-section">
        <SectionTitle
          eyebrow="Entrega"
          title="Serviços disponíveis"
          description="Formatos flexíveis para diferentes momentos e objetivos de negócio."
        />
        <div className="servicos-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="servicos-process" data-reveal>
        <SectionTitle
          eyebrow="Método"
          title="Fluxo de execução"
          description="Processo objetivo, do briefing à publicação."
        />

        <div className="servicos-process-grid">
          {processSteps.map((step, index) => (
            <article key={step.id}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Projeto novo ou reformulação?"
        description="Atendimento focado em estrutura, visual e conversão."
        primaryAction={{ label: 'Iniciar no WhatsApp', href: contactData.whatsapp, external: true }}
        secondaryAction={{ label: 'Ver projetos', to: '/projetos' }}
      />
    </main>
  )
}

export default Servicos
