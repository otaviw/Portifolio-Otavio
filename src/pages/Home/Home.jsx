import HeroSection from '../../components/HeroSection/HeroSection.jsx'
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx'
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx'
import ContactCard from '../../components/ContactCard/ContactCard.jsx'
import projects from '../../data/projects.js'
import posts from '../../data/posts.js'
import { contactData, credibilityItems, processSteps, socialLinks } from '../../data/site.js'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import './Home.css'

function Home() {
  useScrollReveal()

  const featuredProjects = projects.slice(0, 3)
  const homePosts = posts.length ? [...posts, ...posts] : []

  const githubLink = socialLinks.find((item) => item.label === 'GitHub')
  const linkedinLink = socialLinks.find((item) => item.label === 'LinkedIn')
  const instagramLink = socialLinks.find((item) => item.label === 'Instagram')

  const heroLinks = [
    { id: 'linkedin', label: 'LinkedIn', href: linkedinLink?.url || '/', icon: 'linkedin' },
    { id: 'github', label: 'GitHub', href: githubLink?.url || '/', icon: 'github' },
    { id: 'instagram', label: 'Instagram', href: instagramLink?.url || '/', icon: 'instagram' },
    { id: 'curriculo', label: 'Currículo', href: contactData.resumeUrl, icon: 'resume' },
  ]

  return (
    <main className="page-shell home-page">
      <HeroSection
        eyebrow="Desenvolvimento Web Fullstack"
        title="Sites modernos com"
        highlightedText="frontend forte e backend estratégico"
        description="Criação de sites, e-commerces e sistemas completos para gerar resultado real com design, performance e integração de APIs."
        contactLinks={heroLinks}
        primaryAction={{ label: 'Solicitar projeto no WhatsApp', href: contactData.whatsapp, external: true }}
        secondaryAction={{ label: 'Ver projetos', href: '#projetos-home' }}
      />

      <section id="diferenciais-home" className="home-section">
        <SectionTitle
          eyebrow="Diferenciais"
          title="Estrutura pensada para vender"
          description="Cada projeto é construído para unir estética premium, clareza comercial e base técnica sólida."
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

      <section id="projetos-home" className="home-section">
        <SectionTitle
          eyebrow="Projetos"
          title="Trabalhos em destaque"
          description="Alguns projetos para mostrar o estilo visual e a qualidade das entregas."
        />

        <div className="home-grid home-grid-projects">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="posts-home" className="home-section">
        <SectionTitle
          eyebrow="Posts"
          title="Conteúdo para redes sociais"
          description="Carrossel com os criativos já produzidos para reforçar presença digital."
        />

        <div className="home-posts-marquee" data-reveal>
          <div className="home-posts-track">
            {homePosts.map((post, index) => (
              <div className="home-post-item" key={`${post.id}-${index}`}>
                <img src={post.cover} alt={post.title} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="processo-home" className="home-section">
        <SectionTitle
          eyebrow="Processo"
          title="Como conduzo cada projeto"
          description="Fluxo objetivo para reduzir retrabalho e acelerar entrega com qualidade."
        />

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article key={step.id} className="process-card" data-reveal>
              <span>{`0${index + 1}`}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contato-home" className="home-section home-contact-cta">
        <SectionTitle
          eyebrow="Contato"
          title="Vamos tirar seu projeto do papel"
          description="Canal direto para alinhar escopo, prazo e investimento do seu site ou sistema, com resposta rápida."
        />

        <ContactCard />
      </section>
    </main>
  )
}

export default Home
