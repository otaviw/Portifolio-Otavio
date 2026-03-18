import { Link, useParams } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'
import projects from '../../data/projects.js'
import { contactData } from '../../data/site.js'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import './ProjetoDetalhe.css'

function ProjetoDetalhe() {
  useScrollReveal()
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="page-shell projeto-detalhe-page">
        <section className="project-not-found" data-reveal>
          <p>Projeto não encontrado.</p>
          <Button to="/projetos" variant="secondary" size="md">
            Voltar para projetos
          </Button>
        </section>
      </main>
    )
  }

  return (
    <main className="page-shell projeto-detalhe-page">
      <section className="project-top" data-reveal>
        <p className="project-industry">{project.industry}</p>
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>

        {project.liveUrl ? (
          <div className="project-live-link">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Abrir site publicado
            </a>
          </div>
        ) : null}

        <div className="project-meta">
          <article>
            <span>Duração</span>
            <p>{project.duration}</p>
          </article>
          <article>
            <span>Objetivo</span>
            <p>{project.objective}</p>
          </article>
          <article>
            <span>Resultado</span>
            <p>{project.result}</p>
          </article>
        </div>
      </section>

      <section className="project-extra" data-reveal>
        <article>
          <h2>Stack utilizada</h2>
          <ul className="project-tech-list">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </article>

        <article>
          <h2>Pontos principais</h2>
          <ul className="project-metric-list">
            {project.metrics.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="project-links" data-reveal>
        <Link to="/projetos">Voltar para todos os projetos</Link>
      </section>

      <CTASection
        title="Projeto com esse padrão visual e técnico"
        description="Fale no WhatsApp para iniciar uma nova entrega."
        primaryAction={{ label: 'Solicitar proposta', href: contactData.whatsapp, external: true }}
        secondaryAction={{ label: 'Conhecer serviços', to: '/servicos' }}
      />
    </main>
  )
}

export default ProjetoDetalhe
