import './ServiceCard.css'

function ServiceCard({ service }) {
  return (
    <article className="service-card" data-reveal>
      <h3>{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <ul>
        {service.deliverables.map((deliverable) => (
          <li key={deliverable}>{deliverable}</li>
        ))}
      </ul>
    </article>
  )
}

export default ServiceCard
