import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <article className="project-card" data-reveal>
      <div className="project-visual">
        {project.cover ? (
          <img src={project.cover} alt={project.coverAlt || `Preview do projeto ${project.title}`} loading="lazy" />
        ) : (
          <div className="project-visual-fallback" aria-hidden="true">
            <strong>{project.title}</strong>
            <p>{project.subtitle || 'Preview visual em breve'}</p>
          </div>
        )}
        <div className="project-overlay">
          {project.liveUrl ? (
            <a className="project-overlay-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              Abrir site ↗
            </a>
          ) : (
            <span className="project-overlay-link muted">Acesso privado</span>
          )}
        </div>
      </div>

      <div className="project-content">
        <p className="project-industry">{project.industry}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        {project.accessNote ? <p className="project-access-note">{project.accessNote}</p> : null}

        {project.technologies?.length > 0 ? (
          <ul className="project-tags">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        ) : null}

        <div className="project-actions">
          {project.liveUrl ? (
            <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              Abrir site <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="project-link project-link-muted">Projeto com acesso privado</span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
