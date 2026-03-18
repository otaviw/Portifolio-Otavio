import './AnimatedBackground.css'

function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="glow glow-left"></div>
      <div className="glow glow-right"></div>
      <div className="grid-layer"></div>
      <div className="noise-layer"></div>
    </div>
  )
}

export default AnimatedBackground
