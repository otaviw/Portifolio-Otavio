# Portfólio Premium React + Vite

Portfólio multipágina com foco principal em conversão de clientes para serviços de criação de sites.

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

## Onde editar cada parte

- Textos da Home: `src/pages/Home/Home.jsx`
- Textos de serviços: `src/data/services.js`
- Lista de projetos e detalhes: `src/data/projects.js`
- Lista de posts (carrossel): `src/data/posts.js`
- Contatos, links sociais, stack e prova de confiança: `src/data/site.js`
- Cores globais, tipografia e layout base: `src/styles/global.css`
- Navbar e rodapé: `src/components/Navbar/` e `src/components/Footer/`

## Rotas disponíveis

- `/` Home
- `/projetos`
- `/projetos/:slug`
- `/servicos`
- `/posts`
- `/sobre`
- `/contato`
- `*` página 404

## Personalização rápida para publicar

1. Atualizar WhatsApp e e-mail em `src/data/site.js`.
2. Trocar/ajustar projetos em `src/data/projects.js`.
3. Substituir imagens de posts em `src/assets/posts/` e atualizar `src/data/posts.js`.
4. Ajustar copy principal em `src/pages/Home/Home.jsx` e `src/pages/Servicos/Servicos.jsx`.
5. Publicar em Vercel/Netlify com domínio próprio.

## Observações de arquitetura

- Cada página tem seu próprio CSS.
- Cada componente reutilizável tem seu próprio CSS.
- Dados separados da camada visual para facilitar crescimento.
- Estrutura pronta para migrar dados para CMS/API no futuro.
