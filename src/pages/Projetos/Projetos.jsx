import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx'
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'
import projects from '../../data/projects.js'
import { contactData } from '../../data/site.js'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import './Projetos.css'

function Projetos() {
  useScrollReveal()

  return (
    <main className="page-shell projetos-page">
      <section className="projetos-hero" data-reveal>
        <p className="projetos-eyebrow">Projetos</p>
        <h1>Cases publicados</h1>
        <p>Projetos reais para mostrar direção visual, execução técnica e presença online.</p>
      </section>

      <section className="projetos-list-section">
        <SectionTitle
          eyebrow="Portfólio"
          title="Projetos disponíveis"
          description="Links públicos para visualização dos sites em produção."
        />

        <div className="projetos-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <CTASection
        title="Projetos com foco em presença digital e conversão"
        description="Desenvolvimento com foco em apresentação profissional e geração de contato."
        primaryAction={{ label: 'Falar no WhatsApp', href: contactData.whatsapp, external: true }}
        secondaryAction={{ label: 'Ver serviços', to: '/servicos' }}
      />
    </main>
  )
}

export default Projetos
