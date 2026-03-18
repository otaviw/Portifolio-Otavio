import Button from '../Button/Button.jsx'
import './CTASection.css'

function CTASection({ title, description, primaryAction, secondaryAction }) {
  return (
    <section className="cta-section" data-reveal>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="cta-actions">
        <Button
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
    </section>
  )
}

export default CTASection
