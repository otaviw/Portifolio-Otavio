import post1 from '../assets/posts/Post 1.jpg'
import post2 from '../assets/posts/Post 2.jpg'
import post3 from '../assets/posts/Post 3.jpg'
import post4 from '../assets/posts/Post 4.jpg'
import post5 from '../assets/posts/Post 5.jpg'
import post6 from '../assets/posts/Post 6.jpg'
import post7 from '../assets/posts/Post 7.jpg'
import post8 from '../assets/posts/Post 8.jpg'
import post9 from '../assets/posts/Post 9.jpg'
import post10 from '../assets/posts/Post 10.jpg'
import post11 from '../assets/posts/Post 11.jpg'

const posts = [
  {
    id: 'post-campanha-lancamento',
    slug: 'campanha-lancamento-produto',
    title: 'Campanha de lançamento com visual de alto impacto',
    summary:
      'Criativo pensado para chamar atenção nos primeiros segundos e direcionar o clique para a página de oferta.',
    category: 'Campanha',
    date: '2026-02-02',
    cover: post1,
    tags: ['Instagram', 'Design', 'Conversão'],
    gallery: [post1],
    content: [
      'Este post foi criado para abrir uma sequência de lançamento com uma mensagem direta, leitura rápida e hierarquia visual forte.',
      'O objetivo principal foi aumentar a taxa de cliques para a landing page, destacando oferta e benefício de forma clara.',
      'A direção visual priorizou contraste alto, tipografia marcante e composição limpa para manter o foco na ação.',
    ],
  },
  {
    id: 'post-autoridade-servico',
    slug: 'post-autoridade-servico-web',
    title: 'Post de autoridade para posicionar serviço web',
    summary:
      'Peça visual para reforçar percepção de nível técnico e aumentar confiança antes do contato comercial.',
    category: 'Posicionamento',
    date: '2026-02-08',
    cover: post2,
    tags: ['Branding', 'Posicionamento', 'Site'],
    gallery: [post2],
    content: [
      'A proposta deste material foi apresentar valor de forma objetiva, sem texto excessivo e sem distrações visuais.',
      'O conteúdo trabalha prova de capacidade com estrutura de leitura curta, ideal para retenção no feed.',
      'A composição mantém equilíbrio entre estética premium e comunicação comercial para gerar percepção de qualidade.',
    ],
  },
  {
    id: 'post-prova-social',
    slug: 'post-prova-social-resultados',
    title: 'Criativo para evidenciar resultado e prova social',
    summary:
      'Formato voltado a mostrar resultado de projeto com linguagem simples e foco em confiança de marca.',
    category: 'Prova social',
    date: '2026-02-12',
    cover: post3,
    tags: ['Resultados', 'Confiança', 'Marca'],
    gallery: [post3],
    content: [
      'O layout foi pensado para destacar resultado sem poluir a leitura, mantendo foco em poucas informações essenciais.',
      'A peça utiliza ritmo visual para conduzir o olhar até o principal argumento comercial do post.',
      'Esse formato ajuda a reduzir objeção de novos clientes e fortalece a etapa de consideração da oferta.',
    ],
  },
  {
    id: 'post-oferta-direta',
    slug: 'post-oferta-direta-servicos',
    title: 'Post de oferta direta para captação de leads',
    summary:
      'Peça com CTA claro para acelerar contato no WhatsApp e gerar oportunidade comercial imediata.',
    category: 'Oferta',
    date: '2026-02-17',
    cover: post4,
    tags: ['Lead', 'WhatsApp', 'Oferta'],
    gallery: [post4],
    content: [
      'A estrutura visual prioriza chamada principal, benefício e ação em sequência simples.',
      'O objetivo foi remover fricção e facilitar decisão rápida para quem já está em momento de compra.',
      'O resultado esperado desse formato é aumento de mensagens qualificadas vindas de redes sociais.',
    ],
  },
  {
    id: 'post-dica-ux',
    slug: 'post-dica-ux-para-sites',
    title: 'Post educativo com dica prática de UX para sites',
    summary:
      'Conteúdo curto para gerar valor, engajamento e percepção de autoridade técnica sem ser complexo.',
    category: 'Educativo',
    date: '2026-02-21',
    cover: post5,
    tags: ['UX', 'Conteúdo', 'Autoridade'],
    gallery: [post5],
    content: [
      'Este post foi criado para ensinar um conceito aplicável no mesmo dia, com linguagem objetiva.',
      'A estratégia foi equilibrar educação e venda indireta, fortalecendo relacionamento com audiência.',
      'No final, o criativo conduz para uma próxima etapa natural: análise de site ou orçamento.',
    ],
  },
  {
    id: 'post-rebranding-digital',
    slug: 'post-rebranding-digital',
    title: 'Visual para comunicar reposicionamento digital',
    summary:
      'Criativo voltado para marcas em transição de imagem, com estética mais moderna e profissional.',
    category: 'Branding',
    date: '2026-02-24',
    cover: post6,
    tags: ['Rebranding', 'Design', 'Identidade'],
    gallery: [post6],
    content: [
      'O foco desse material foi atualizar percepção de marca com uma linguagem visual mais madura.',
      'Foi utilizada uma composição minimalista para valorizar mensagem e manter alto padrão de acabamento.',
      'Esse tipo de post funciona bem para anunciar nova fase de negócio e reforçar credibilidade.',
    ],
  },
  {
    id: 'post-bastidores-projeto',
    slug: 'post-bastidores-projeto-web',
    title: 'Post de bastidores mostrando processo de criação',
    summary:
      'Formato que humaniza a entrega, reforça método e aproxima potenciais clientes da solução.',
    category: 'Bastidores',
    date: '2026-02-27',
    cover: post7,
    tags: ['Processo', 'Transparência', 'Projeto'],
    gallery: [post7],
    content: [
      'A proposta foi mostrar como o projeto é conduzido, sem entrar em termos técnicos desnecessários.',
      'Com isso, o conteúdo reduz incerteza de quem está avaliando contratar um novo site.',
      'A narrativa foi construída para transmitir organização, clareza de etapas e confiança.',
    ],
  },
  {
    id: 'post-call-to-action',
    slug: 'post-call-to-action-comercial',
    title: 'Post com chamada comercial de alta intenção',
    summary:
      'Criativo com foco total em ação: abrir conversa, validar demanda e encaminhar proposta.',
    category: 'Comercial',
    date: '2026-03-01',
    cover: post8,
    tags: ['CTA', 'Venda', 'Conversão'],
    gallery: [post8],
    content: [
      'O design segue uma estrutura objetiva para reduzir distração e destacar o próximo passo.',
      'Esse formato foi construído para captar contatos de pessoas já prontas para iniciar projeto.',
      'A linguagem visual mantém padrão premium, mas sempre com prioridade em desempenho comercial.',
    ],
  },
  {
    id: 'post-projeto-resumo',
    slug: 'post-resumo-projeto-site',
    title: 'Resumo visual de projeto com foco em resultado',
    summary:
      'Peça de apresentação rápida para mostrar antes e depois de um projeto publicado.',
    category: 'Projeto',
    date: '2026-03-04',
    cover: post9,
    tags: ['Projeto', 'Resultado', 'Portfólio'],
    gallery: [post9],
    content: [
      'A ideia central foi mostrar evolução do projeto com linguagem de fácil compreensão.',
      'O post valoriza o resultado final sem excesso de texto, mantendo impacto visual no feed.',
      'Esse tipo de conteúdo ajuda a transformar portfólio em argumento comercial recorrente.',
    ],
  },
  {
    id: 'post-institucional-marca',
    slug: 'post-institucional-marca',
    title: 'Post institucional para reforço de imagem profissional',
    summary:
      'Conteúdo voltado a consistência de marca e presença digital com aparência premium.',
    category: 'Institucional',
    date: '2026-03-09',
    cover: post10,
    tags: ['Institucional', 'Imagem', 'Marca'],
    gallery: [post10],
    content: [
      'O criativo foi desenhado para fortalecer percepção de valor no longo prazo.',
      'A estrutura visual equilibra sofisticação e simplicidade para manter leitura confortável.',
      'Esse formato é útil para manter frequência de conteúdo com padrão visual consistente.',
    ],
  },
  {
    id: 'post-portfolio-chamada',
    slug: 'post-chamada-portfolio-servicos',
    title: 'Chamada para portfólio e serviços de criação de sites',
    summary:
      'Peça final de sequência comercial com direcionamento para portfólio e contato.',
    category: 'Portfólio',
    date: '2026-03-13',
    cover: post11,
    tags: ['Portfólio', 'Serviços', 'Contato'],
    gallery: [post11],
    content: [
      'Este post foi pensado para encerrar uma sequência de conteúdo e abrir conversa comercial.',
      'O material conecta prova visual com chamada de ação, sem perder clareza na proposta.',
      'A execução reforça posicionamento profissional e convida para avançar no projeto.',
    ],
  },
]

export default posts




