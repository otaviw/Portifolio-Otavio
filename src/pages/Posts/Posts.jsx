import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx'
import CTASection from '../../components/CTASection/CTASection.jsx'
import posts from '../../data/posts.js'
import { contactData } from '../../data/site.js'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import './Posts.css'

function Posts() {
  useScrollReveal()

  const showcaseItems = posts.length ? [...posts, ...posts] : []

  return (
    <main className="page-shell posts-page">
      <section className="posts-hero" data-reveal>
        <p className="posts-eyebrow">Posts</p>
        <h1>Conteúdo para redes sociais</h1>
        <p>Carrossel com materiais reais para reforçar identidade visual e presença digital.</p>
      </section>

      <section className="posts-showcase" data-reveal>
        <SectionTitle
          eyebrow="Vitrine"
          title="Posts em destaque"
          description="Exibição contínua para mostrar padrão visual de conteúdo para redes sociais."
        />

        <div className="posts-marquee">
          <div className="posts-track">
            {showcaseItems.map((post, index) => (
              <div className="showcase-item" key={`${post.id}-${index}`}>
                <img src={post.image} alt={post.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Quer esse padrão no seu projeto?"
        description="Fale no WhatsApp para estruturar site e conteúdo com direção comercial."
        primaryAction={{ label: 'Falar no WhatsApp', href: contactData.whatsapp, external: true }}
        secondaryAction={{ label: 'Ver projetos', to: '/projetos' }}
      />
    </main>
  )
}

export default Posts
