import Button from '../Button/Button.jsx'
import './HeroSection.css'

function HeroIcon({ type }) {
  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5Zm.02 6H2V22h3V9.5Zm5 0H7V22h3v-6.1c0-1.7.3-3.4 2.4-3.4 2.1 0 2.1 2 2.1 3.5V22h3v-6.6c0-3.3-.7-5.9-4.6-5.9-1.8 0-3 .9-3.5 1.8V9.5Z" />
      </svg>
    )
  }
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.4-1-1-1.3-1-1.3-.9-.6.1-.6.1-.6 1 0 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.9.1-.7.3-1.1.6-1.4-2.3-.2-4.7-1.2-4.7-5.3 0-1.2.4-2.1 1-2.9-.1-.2-.4-1.3.1-2.8 0 0 .8-.3 2.9 1.1a9.7 9.7 0 0 1 5.2 0c2.1-1.4 2.9-1.1 2.9-1.1.5 1.5.2 2.6.1 2.8.6.8 1 1.7 1 2.9 0 4.1-2.4 5.1-4.7 5.3.4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
      </svg>
    )
  }
  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.2 1.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Z" />
    </svg>
  )
}

const heroTechStack = ['React', 'Node.js', 'Laravel', 'TypeScript', 'SQL', 'WebSocket']

function HeroSection({
  eyebrow,
  title,
  highlightedText,
  description,
  points = [],
  contactLinks = [],
  primaryAction,
  secondaryAction,
}) {
  return (
    <section className="hero-section">
      <div className="hero-shell">
        <div className="hero-main">
          <p className="hero-eyebrow">{eyebrow}</p>

          <h1>
            {title} <span className="text-shimmer">{highlightedText}</span>
          </h1>

          <p className="hero-description">{description}</p>

          {points.length > 0 ? (
            <ul className="hero-points">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}

          <div className="hero-actions">
            <Button
              className="btn-contact-primary"
              size="lg"
              to={primaryAction.to}
              href={primaryAction.href}
              external={primaryAction.external}
            >
              {primaryAction.label}
            </Button>
            {secondaryAction ? (
              <Button
                size="lg"
                variant="secondary"
                to={secondaryAction.to}
                href={secondaryAction.href}
                external={secondaryAction.external}
              >
                {secondaryAction.label}
              </Button>
            ) : null}
          </div>

          <div className="hero-tech-row">
            <span className="hero-tech-label">Stack</span>
            {heroTechStack.map((tech) => (
              <span key={tech} className="hero-tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <aside className="hero-side">
          {contactLinks.length > 0 ? (
            <div className="hero-socials">
              {contactLinks.map((item) => (
                <a
                  key={item.id}
                  className="hero-social-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <HeroIcon type={item.icon} />
                  <span>{item.label}</span>
                  <svg className="hero-social-arrow" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </a>
              ))}
            </div>
          ) : null}

          <div className="hero-code-window" aria-hidden="true">
            <div className="hero-code-head">
              <span></span>
              <span></span>
              <span></span>
              <small className="hero-code-filename">projeto.config.js</small>
            </div>
            <div className="hero-code-body">
              <p className="typing-line line-1">
                <small>const</small> projeto = {'{'}
              </p>
              <p className="typing-line line-2">&nbsp;&nbsp;frontend: <em>'React'</em>,</p>
              <p className="typing-line line-3">&nbsp;&nbsp;backend: <em>'Laravel'</em>,</p>
              <p className="typing-line line-4">&nbsp;&nbsp;foco: <em>'ecommerce + vendas'</em></p>
              <p className="typing-line line-5">{'};'}</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
