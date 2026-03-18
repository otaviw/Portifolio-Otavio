import { socialLinks } from '../../data/site.js'
import './SocialLinks.css'

function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links ${compact ? 'compact' : ''}`}>
      <p className="social-label">Conecte-se</p>
      <div className="social-list">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
            <span>{link.label}</span>
            <small>{link.handle}</small>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks
