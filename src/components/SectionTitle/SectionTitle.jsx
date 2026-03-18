import './SectionTitle.css'

function SectionTitle({ eyebrow, title, description, center = false }) {
  return (
    <header className={`section-title ${center ? 'center' : ''}`} data-reveal>
      {eyebrow ? <p className="section-title-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-title-description">{description}</p> : null}
    </header>
  )
}

export default SectionTitle
