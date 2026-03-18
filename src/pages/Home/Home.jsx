import HeroSection from '../../components/HeroSection/HeroSection.jsx'
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx'
import ServiceCard from '../../components/ServiceCard/ServiceCard.jsx'
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'
import services from '../../data/services.js'
import projects from '../../data/projects.js'
import posts from '../../data/posts.js'
import { contactData, homeTechStack, processSteps, credibilityItems } from '../../data/site.js'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import './Home.css'

function Home() {
  useScrollReveal()

  const featuredProjects = projects.slice(0, 3)
  const homePosts = posts.length ? [...posts, ...posts] : []
  const heroStats = [
    { value: `${projects.length}+`, label: 'Projetos reais em produção' },
    { value: 'Design + Código', label: 'Entrega completa no mesmo fluxo' },
    { value: 'WhatsApp direto', label: 'Contato rápido para iniciar briefing' },
  ]

  return (
    <main className="page-shell home-page">
      <HeroSection
        eyebrow="Otávio Carbone - Dev e Designer Web"
        title="Sites modernos para"
        highlightedText="vender mais"
        description="Criação de sites com visual premium, foco em conversão e entrega rápida."
        stats={heroStats}
        primaryAction={{ label: 'Falar no WhatsApp', href: contactData.whatsapp, external: true }}
        secondaryAction={{ label: 'Ver projetos', to: '/projetos' }}
      />

      <section className="home-section">
        <SectionTitle
          eyebrow="Serviços"
          title="Soluções para presença digital"
          description="Estrutura completa para marcas que precisam comunicar valor e converter mais."
        />
        <div className="home-grid home-grid-services">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionTitle
          eyebrow="Projetos"
          title="Projetos publicados"
          description="Cases reais disponíveis para navegação e demonstração comercial."
        />
        <div className="home-grid home-grid-projects">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionTitle
          eyebrow="Confiança"
          title="Por que esse formato funciona"
          description="Apresentação direta, execução técnica sólida e canal rápido para converter em projeto."
        />
        <div className="home-proof-grid">
          {credibilityItems.map((item) => (
            <article key={item.id} className="home-proof-card" data-reveal>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionTitle
          eyebrow="Posts"
          title="Posts para redes sociais"
          description="Vitrine visual dos criativos já publicados."
        />
        <div className="home-posts-marquee" data-reveal>
          <div className="home-posts-track">
            {homePosts.map((post, index) => (
              <div className="home-post-item" key={`${post.id}-${index}`}>
                <img src={post.image} alt={post.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <SectionTitle eyebrow="Stack" title="Tecnologias utilizadas" />
        <ul className="tech-grid" data-reveal>
          {homeTechStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="home-section">
        <SectionTitle eyebrow="Processo" title="Como os projetos são conduzidos" />
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article key={step.id} className="process-card" data-reveal>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Quer um site com esse padrão?"
        description="Chame no WhatsApp para alinhar escopo, prazo e valor do projeto."
        primaryAction={{ label: 'Iniciar no WhatsApp', href: contactData.whatsapp, external: true }}
        secondaryAction={{ label: 'Ver serviços', to: '/servicos' }}
      />
    </main>
  )
}

export default Home
