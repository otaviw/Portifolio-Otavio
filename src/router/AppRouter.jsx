import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Servicos from '../pages/Servicos/Servicos.jsx'
import Sobre from '../pages/Sobre/Sobre.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/projetos" element={<Navigate to="/#projetos-home" replace />} />
      <Route path="/projetos/:slug" element={<Navigate to="/#projetos-home" replace />} />
      <Route path="/posts" element={<Navigate to="/#posts-home" replace />} />
      <Route path="/posts/:slug" element={<Navigate to="/#posts-home" replace />} />
      <Route path="/contato" element={<Navigate to="/#contato-home" replace />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
