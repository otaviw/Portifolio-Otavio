import { useState } from 'react'
import profileImage from '../../assets/about/profile-2.jpg'
import useScrollReveal from '../../hooks/useScrollReveal.js'
import './Sobre.css'

const techIcons = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'WebSocket', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
]

const capabilityItems = [
  'Sistemas web completos (frontend + backend)',
  'Sites e e-commerces com foco em resultado',
  'Integrações com APIs e automações',
  'Projetos modernos, performáticos e escaláveis',
]

const differentiators = [
  'Integração com IA e chatbots',
  'Experiência com aplicações em produção',
  'Evolução constante em desenvolvimento fullstack com foco em projetos reais, integrações e performance',
]

const experiences = [
  {
    title: 'Desenvolvedor (CLT)',
    company: 'Atuação profissional',
    period: '2026 - Atual',
    description:
      'Atuação no desenvolvimento de sistemas web, trabalhando com frontend e backend, integração com APIs e manutenção de aplicações em produção. Foco em performance, organização de código e entrega de soluções funcionais para o negócio.',
  },
  {
    title: 'Desenvolvedor (Estágio)',
    company: 'Primeira experiência profissional',
    period: '2025',
    description:
      'Primeira experiência profissional na área, atuando no desenvolvimento de sistemas e suporte em projetos reais. Aprendizado prático em tecnologias web, lógica de programação e estruturação de aplicações.',
  },
  {
    title: 'Desenvolvedor Fullstack (Freelancer)',
    company: 'Projetos independentes',
    period: '2024 - Atual',
    description:
      'Desenvolvimento de sites, e-commerces e sistemas personalizados, utilizando React no frontend e Laravel no backend. Criação de soluções completas com foco comercial e integração com APIs.',
  },
]

const education = [
  {
    degree: 'Análise e Desenvolvimento de Sistemas (ADS)',
    institution: 'Ensino superior',
    period: '2026 - Atual',
    description: 'Formação focada em desenvolvimento de software, arquitetura de sistemas e boas práticas de programação.',
  },
  {
    degree: 'Técnico em Informática',
    institution: 'Formação técnica',
    period: '2023 - 2025',
    description: 'Formação com foco em desenvolvimento web, banco de dados, lógica de programação e projetos práticos.',
  },
]

function Sobre() {
  useScrollReveal()
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <main className="page-shell sobre-page">
      <section className="sobre-hero" data-reveal>
        <div className="sobre-hero-grid">
          <div className="sobre-hero-content">
            <p className="sobre-eyebrow">Sobre mim</p>
            <h1>Desenvolvedor fullstack focado em resultados reais</h1>
            <p>
              Sou desenvolvedor fullstack com foco na criação de sistemas web modernos, performáticos e
              voltados para resultados reais. Tenho experiência com desenvolvimento de aplicações completas, do
              frontend ao backend, utilizando tecnologias como React e Laravel.
            </p>
            <p>
              Atualmente trabalho como desenvolvedor e também atuo em projetos práticos que envolvem
              integrações com APIs, automações e soluções para negócios. Busco constantemente evoluir minhas
              habilidades, criando projetos cada vez mais robustos, escaláveis e com foco na experiência do
              usuário.
            </p>
          </div>

          <figure className="sobre-hero-photo">
            <img src={profileImage} alt="Foto de Otávio Carbone" loading="lazy" decoding="async" />
          </figure>
        </div>
      </section>

      <section className="sobre-tabs-section">
        <header className="sobre-tabs-header" data-reveal>
          <p className="sobre-eyebrow">Perfil profissional</p>
          <h2>Habilidades, experiência e educação</h2>
          <p>Resumo direto das principais informações profissionais.</p>
        </header>

        <div className="sobre-tabs" data-reveal>
          <button
            type="button"
            className={activeTab === 'skills' ? 'active' : ''}
            onClick={() => setActiveTab('skills')}
          >
            Habilidades
          </button>
          <button
            type="button"
            className={activeTab === 'experience' ? 'active' : ''}
            onClick={() => setActiveTab('experience')}
          >
            Experiência
          </button>
          <button
            type="button"
            className={activeTab === 'education' ? 'active' : ''}
            onClick={() => setActiveTab('education')}
          >
            Educação
          </button>
        </div>

        <div className="sobre-panel" data-reveal>
          {activeTab === 'skills' ? (
            <div className="sobre-skills">
              <div className="sobre-tech-grid">
                {techIcons.map((item) => (
                  <article key={item.name}>
                    <div>
                      <img src={item.icon} alt={item.name} loading="lazy" decoding="async" />
                    </div>
                    <span>{item.name}</span>
                  </article>
                ))}
              </div>

              <div className="sobre-skill-block">
                <h3>Principais habilidades</h3>
                <ul>
                  {capabilityItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="sobre-skill-block">
                <h3>Diferenciais</h3>
                <ul>
                  {differentiators.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}

          {activeTab === 'experience' ? (
            <div className="sobre-list-grid">
              {experiences.map((item) => (
                <article key={item.title}>
                  <span>{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="sobre-company">{item.company}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          ) : null}

          {activeTab === 'education' ? (
            <div className="sobre-list-grid">
              {education.map((item) => (
                <article key={item.degree}>
                  <span>{item.period}</span>
                  <h3>{item.degree}</h3>
                  <p className="sobre-company">{item.institution}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  )
}

export default Sobre
