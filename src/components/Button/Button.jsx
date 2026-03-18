import { Link } from 'react-router-dom'
import './Button.css'

function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
}) {
  const buttonClassName = ['btn', `btn-${variant}`, `btn-${size}`, className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link className={buttonClassName} to={to} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        className={buttonClassName}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={buttonClassName} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
