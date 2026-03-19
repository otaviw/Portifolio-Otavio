import Button from '../../components/Button/Button.jsx'
import './NotFound.css'

function NotFound() {
  return (
    <main className="page-shell not-found-page">
      <section className="not-found-card" data-reveal>
        <p>404</p>
        <h1>Página não encontrada</h1>
        <span>O caminho acessado não existe no momento.</span>
        <Button to="/" size="lg">
          Voltar para Home
        </Button>
      </section>
    </main>
  )
}

export default NotFound
