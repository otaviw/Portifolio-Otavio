# Portfólio Premium - React + Vite

Portfólio multipágina com foco em conversão de clientes para serviços de criação de sites.

## Stack

- React
- Vite
- React Router
- CSS tradicional (sem Tailwind e sem Bootstrap)

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura principal

```text
src/
  assets/
    posts/
    projects/
  components/
    AnimatedBackground/
    Button/
    ContactCard/
    CTASection/
    Footer/
    HeroSection/
    Navbar/
    PostCard/
    ProjectCard/
    SectionTitle/
    ServiceCard/
    SocialLinks/
  data/
    posts.js
    projects.js
    services.js
    site.js
  hooks/
    useScrollReveal.js
  pages/
    Home/
    Projetos/
    ProjetoDetalhe/
    Servicos/
    Posts/
    PostDetalhe/
    Sobre/
    Contato/
    NotFound/
  router/
    AppRouter.jsx
  styles/
    global.css
  App.jsx
  main.jsx
```

## Rotas disponíveis

- `/` Home
- `/projetos`
- `/projetos/:slug`
- `/servicos`
- `/posts`
- `/posts/:slug`
- `/sobre`
- `/contato`
- `*` página 404

## Onde editar com facilidade

- **Cores, tipografia e visual global**: `src/styles/global.css`
- **Textos da Home e seções comerciais**: `src/pages/Home/Home.jsx`
- **Projetos (cards + detalhe)**: `src/data/projects.js`
- **Posts (lista + detalhe)**: `src/data/posts.js`
- **Serviços**: `src/data/services.js`
- **Contato, redes, stack e processo**: `src/data/site.js`
- **Navbar e Footer**: `src/components/Navbar/` e `src/components/Footer/`

## Personalização rápida

1. Atualizar WhatsApp, e-mail e localização em `src/data/site.js`.
2. Adicionar novos projetos em `src/data/projects.js`.
3. Adicionar novos posts em `src/data/posts.js`.
4. Ajustar copy comercial principal em `src/pages/Home/Home.jsx`.
5. Publicar em Vercel/Netlify com domínio próprio.

## Observações de arquitetura

- Cada página possui seu próprio CSS.
- Cada componente reutilizável possui seu próprio CSS.
- Dados estão separados da camada visual para facilitar evolução.
- A estrutura está pronta para migrar dados para CMS/API no futuro.
