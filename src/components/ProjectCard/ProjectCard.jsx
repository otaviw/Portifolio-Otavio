import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <article className="project-card" data-reveal>
      <div className="project-visual">
        {project.cover ? (
          <img src={project.cover} alt={project.coverAlt || `Preview do projeto ${project.title}`} loading="lazy" />
        ) : (
          <div className="project-visual-fallback" aria-hidden="true">
            <span>Sem imagem por enquanto</span>
            <strong>{project.title}</strong>
            <p>Preview visual será adicionado em breve.</p>
          </div>
        )}
      </div>

      <div className="project-content">
        <p className="project-industry">{project.industry}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        {project.accessNote ? <p className="project-access-note">{project.accessNote}</p> : null}

        <div className="project-actions">
          {project.liveUrl ? (
            <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              Abrir site
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
