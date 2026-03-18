import Button from '../Button/Button.jsx'
import './HeroSection.css'

function HeroSection({
  eyebrow,
  title,
  highlightedText,
  description,
  stats = [],
  primaryAction,
  secondaryAction,
}) {
  return (
    <section className="hero-section" data-reveal>
      <p className="hero-eyebrow">{eyebrow}</p>
      <h1>
        {title} <span>{highlightedText}</span>
      </h1>
      <p className="hero-description">{description}</p>

      <div className="hero-actions">
        <Button
          size="lg"
          to={primaryAction.to}
          href={primaryAction.href}
          external={primaryAction.external}
        >
          {primaryAction.label}
        </Button>
        <Button
          size="lg"
          variant="secondary"
          to={secondaryAction.to}
          href={secondaryAction.href}
          external={secondaryAction.external}
        >
          {secondaryAction.label}
        </Button>
      </div>

      {stats.length > 0 ? (
        <div className="hero-stats">
          {stats.map((stat) => (
            <article className="hero-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  )
}

export default HeroSection
