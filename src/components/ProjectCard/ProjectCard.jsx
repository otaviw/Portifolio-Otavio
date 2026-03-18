import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <article className="project-card" data-reveal>
      <div className="project-content">
        <p className="project-industry">{project.industry}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        {project.accessNote ? <p className="project-access-note">{project.accessNote}</p> : null}

        <ul className="project-tags">
          {project.technologies.slice(0, 4).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-actions">
          {project.liveUrl ? (
            <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              Abrir site
            </a>
          ) : null}

          <Link className="project-link" to={`/projetos/${project.slug}`}>
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
