import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx'
import ServiceCard from '../../components/ServiceCard/ServiceCard.jsx'
import services from '../../data/services.js'
import { processSteps } from '../../data/site.js'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import './Servicos.css'

const serviceBenefits = [
  {
    id: 'estrutura-comercial',
    title: 'Estrutura comercial clara',
    description: 'Cada seção é pensada para reduzir objeção e aumentar chance de contato.',
  },
  {
    id: 'visual-premium',
    title: 'Visual premium',
    description: 'Design limpo, forte e atual para transmitir alto nível de entrega.',
  },
  {
    id: 'base-escalavel',
    title: 'Base escalável',
    description: 'Código organizado para crescimento sem perder desempenho e consistência.',
  },
]

function Servicos() {
  useScrollReveal()

  return (
    <main className="page-shell servicos-page">
      <section className="servicos-hero" data-reveal>
        <p className="servicos-eyebrow">Serviços</p>
        <h1>Sites estratégicos para vender mais e posicionar melhor sua marca</h1>
        <p>
          Entregas com direção visual, copy comercial e desenvolvimento moderno para gerar resultado real.
        </p>
      </section>

      <section className="servicos-list-section">
        <SectionTitle
          eyebrow="Entrega"
          title="Serviços disponíveis"
          description="Formatos flexíveis para negócios em fase de lançamento, reposicionamento ou crescimento."
        />

        <div className="servicos-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index + 1} />
          ))}
        </div>
      </section>

      <section className="servicos-benefits" data-reveal>
        <SectionTitle
          eyebrow="Qualidade"
          title="O que você ganha no projeto"
          description="Além do visual, o foco é criar uma base que converte e sustenta evolução digital."
        />

        <div className="servicos-benefits-grid">
          {serviceBenefits.map((benefit) => (
            <article key={benefit.id}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="servicos-process" data-reveal>
        <SectionTitle
          eyebrow="Método"
          title="Fluxo de execução"
          description="Processo objetivo, com etapas claras do briefing à publicação."
        />

        <div className="servicos-process-grid">
          {processSteps.map((step, index) => (
            <article key={step.id}>
              <span>{`0${index + 1}`}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Servicos
