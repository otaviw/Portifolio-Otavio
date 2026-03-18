import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Projetos from '../pages/Projetos/Projetos.jsx'
import ProjetoDetalhe from '../pages/ProjetoDetalhe/ProjetoDetalhe.jsx'
import Servicos from '../pages/Servicos/Servicos.jsx'
import Posts from '../pages/Posts/Posts.jsx'
import Sobre from '../pages/Sobre/Sobre.jsx'
import Contato from '../pages/Contato/Contato.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/projetos/:slug" element={<ProjetoDetalhe />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
