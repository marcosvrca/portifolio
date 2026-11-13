let currentLang = localStorage.getItem("lang") || "pt";

const i18n = {
  pt: {
    nav: {
      featured: "Destaque",
      projects: "Projetos",
      github: "GitHub",
      about: "Sobre"
    },

    header: {
      badge: "DESENVOLVEDOR FULL STACK",
      role: "Desenvolvedor Full Stack",
      title: "Olá, eu sou <span>Marcos Vinícius</span>",
      subtitle:
        "Desenvolvedor Full Stack. Construo aplicações web de ponta a ponta, do front-end às APIs, e uso automação e dados quando o problema pede indicadores ou integração.",
      btnFeatured: "Ver destaque",
      btnProjects: "Ver Projetos",
      btnResume: "Currículo",
      skip: "Pular para o conteúdo",
      menuOpen: "Abrir menu",
      menuClose: "Fechar menu",
      focusLabel: "Atuação",
      focus1: "Front-end",
      focus2: "Back-end",
      focus3: "Dados e automação",
      focusFeatured: "ERP em produção",
      langLabel: "Mudar para inglês"
    },

    featured: {
      kicker: "Projeto destaque · Código privado",
      title: "mvGrafix",
      tagline: "Gestão completa",
      lead: "ERP em produção para gráficas e quem trabalha com produção: pedidos, pipeline, orçamentos, vendas com BI, financeiro e um módulo de IA que lê a operação em tempo real. Já está em uso por clientes.",
      point1: "Painel executivo com pedidos ativos, atrasos, urgências e caixa do mês",
      point2: "Pipeline Kanban da produção (novo → impressão → corte → costura → pronto)",
      point3: "mvGrafix IA cruza fila, prazos, orçamentos e recebimentos",
      point4: "Vendas com BI, PDF de orçamento, e-mail de prazos e permissões por módulo",
      point5: "Alertas por e-mail, integração com WhatsApp e backup via CI/CD com redundância",
      more: "Ver mais",
      less: "Ver menos",
      private: "Repositório privado — sistema em operação com clientes. Prints com dados fictícios.",
      mod1: { title: "Visão geral", desc: "KPIs de produção e financeiro no mesmo painel." },
      mod2: { title: "mvGrafix IA", desc: "Leitura da operação: ritmo, funil e o que pede atenção hoje." },
      mod3: { title: "Pedidos", desc: "Inventário, pipeline, finalizados e novo pedido." },
      mod4: { title: "Vendas &amp; BI", desc: "Ticket médio, ciclo de recebimento e ranking de clientes." },
      mod5: { title: "Orçamentos", desc: "Conversão em pedido e PDF pronto para o cliente." },
      mod6: { title: "Financeiro", desc: "Caixa, recebíveis e notas fiscais com acesso por perfil." }
    },

    projects: {
      web: {
        title: "Projetos de <span>Desenvolvimento Web</span>",
        lead: "Entregas em front-end e sistemas web, com repositórios públicos atualizados direto do GitHub na mesma grade."
      },
      barber: {
        title: "Landing Page Barbearia",
        desc: "Landing page moderna e responsiva, focada em conversão e identidade visual premium."
      },
      recanto: {
        title: "Landing Page Recanto da Fé",
        desc: "Site institucional com foco em apresentação de serviços e presença digital."
      },
      ecommerce: {
        title: "Sistema de E-commerce",
        desc: "Projeto de carrinho de compras com regras de negócio, validações e backend estruturado."
      },
      taquaralto: {
        title: "Projeto Taquaralto",
        desc: "Sistema SaaS para rastreamento de sono, fitness e gestão esportiva."
      },
      gustavo: {
        title: "Site Gustavo Arquiteto",
        desc: "Landing institucional com layout refinado para escritório de arquitetura e portfólio visual."
      },
      gestao: {
        title: "Sistema de Gestão Comercial",
        desc: "Gestão completa de vendas, estoque, caixa e contas a pagar/receber para loja comercial."
      },
      agenda: {
        title: "Agenda — Agendamentos",
        desc: "Sistema de compromissos pessoais e em grupo, com permissões, arquivos e lembretes via WhatsApp."
      },
      chamados: {
        title: "Sistema de Chamados",
        desc: "Abertura de chamados via WhatsApp com painel web para agentes, protocolos e acompanhamento."
      },
      pagamentos: {
        title: "Página de Pagamentos",
        desc: "Interface para cobranças com PIX, boletos, QR Code e exportação de comprovantes em PDF."
      },
      paroquia: {
        title: "Paróquia Santo Antônio",
        desc: "Sistema web institucional com backend FastAPI, templates e deploy preparado para Railway."
      },
      bi: {
        title: "Projetos de <span>Dados & BI</span>",
        lead: "Visualização, indicadores e automações orientadas a dados."
      },
      pythonDash: {
        title: "Dashboard em Python",
        desc: "Análise de indicadores com visualização interativa usando Python."
      },
      pbi: {
        title: "Power BI Dashboard",
        desc: "Dashboard estratégico com KPIs e análise visual (prints disponíveis)."
      },
      pbi2: {
        title: "Novo Dashboard Power BI",
        desc: "Análise avançada de indicadores estratégicos."
      },
      futsalPerf: {
        title: "Futsal Performance",
        desc: "Scripts e análises em Python voltados a desempenho e dados de futsal."
      },
      sicon: {
        title: "Automação Sicon — Estoque",
        desc: "Automação em Python para fluxos de estoque integrados a sistemas corporativos."
      },
      view: "Ver projeto →",
      repo: "Ver repositório →",
      viewImages: "Ver imagens →",
      comingSoon: "Em breve →"
    },

    repos: {
      title: "Atividade no <span>GitHub</span>",
      lead: "Repositórios públicos sincronizados com a API do GitHub, ordenados por atualização recente.",
      loading: "Carregando repositórios…",
      error: "Não foi possível carregar os repositórios agora. Tente mais tarde.",
      all: "Ver todos os repositórios no GitHub →",
      introEyebrow: "GitHub",
      intro: "Acompanhe minha linha do tempo no GitHub",
      exit: "Sair da linha do tempo",
      portalHint: "Linha do tempo no GitHub",
      portalEnter: "Entrar na linha do tempo"
    },

    about: {
      title: "Sobre <span>Mim</span>",
      lead: "Desenvolvimento full stack aplicado a problemas reais, com dados e inteligência de negócio quando a decisão precisa de indicadores.",

      profile: {
        title: "👨‍💻 Perfil Profissional",
        text:
          "Sou <strong>Desenvolvedor Full Stack</strong>. Crio aplicações web, APIs e integrações, e complemento com automações e leitura de dados quando o negócio precisa. Busco soluções eficientes, escaláveis e orientadas a resultado."
      },

      dev: {
        title: "🚀 Desenvolvimento",
        item1: "Aplicações web e sistemas internos",
        item2: "APIs e integrações entre sistemas",
        item3: "Automações com Python e Power Automate",
        item4: "Landing pages e interfaces responsivas"
      },

      data: {
        title: "📊 Dados",
        text: "Utilizo dados como base para apoiar soluções de software, otimizar processos e gerar indicadores confiáveis.",
        item1: "Manipulação e análise com Python (Pandas)",
        item2: "Consultas SQL (MySQL, PostgreSQL)",
        item3: "Integração de dados entre sistemas"
      },

      bi: {
        title: "📈 Business Intelligence",
        text: "Desenvolvimento de dashboards e indicadores que transformam dados técnicos em informações claras para tomada de decisão.",
        item1: "Dashboards em Power BI e Python",
        item2: "Definição de KPIs",
        item3: "Apoio à gestão e estratégia"
      },

      stack: {
        title: "🛠️ Stack Principal",
        back: "Back-end",
        front: "Front-end",
        devops: "DevOps e containers",
        data: "Dados",
        bi: "BI",
        pyDash: "Dashboards em Python",
        auto: "Automação",
        vcs: "Versionamento"
      },

      education: {
        title: "🎓 Formação",
        text:
          "<strong>Técnico em Informática Integrado ao Ensino Médio</strong> – IFTO (Concluído 2019)<br><strong>Sistemas para Internet</strong> – Graduação – IFTO (Concluído 2025)<br><strong>Engenharia de Software</strong> – Pós-Graduação (Cursando)<br>Inglês e Espanhol – Intermediário"
      },

      footer:
        "Busco oportunidades como desenvolvedor full stack, onde possa criar aplicações, integrar sistemas e usar dados para gerar valor real ao negócio."
    },

    footer: {
      text: "© 2026 Marcos Vinícius • Todos os direitos reservados"
    }
  },

  en: {
    nav: {
      featured: "Featured",
      projects: "Projects",
      github: "GitHub",
      about: "About"
    },

    header: {
      badge: "FULL STACK DEVELOPER",
      role: "Full Stack Developer",
      title: "Hi, I'm <span>Marcos Vinícius</span>",
      subtitle:
        "Full Stack Developer. I build end-to-end web applications, from the front end to APIs, and use automation and data when the problem needs indicators or integration.",
      btnFeatured: "See featured",
      btnProjects: "View Projects",
      btnResume: "Resume",
      skip: "Skip to content",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      focusLabel: "What I build",
      focus1: "Front-end",
      focus2: "Back-end",
      focus3: "Data and automation",
      focusFeatured: "ERP in production",
      langLabel: "Mudar para português"
    },

    featured: {
      kicker: "Featured project · Private source",
      title: "mvGrafix",
      tagline: "Gestão completa",
      lead: "Production ERP for print shops and anyone running a production floor: orders, pipeline, quotes, sales BI, finance, and an AI module that reads operations in real time. Already in use by clients.",
      point1: "Executive dashboard with active orders, delays, urgents and monthly cash",
      point2: "Kanban production pipeline (new → print → cut → sew → ready)",
      point3: "mvGrafix IA crosses the queue, deadlines, quotes and receivables",
      point4: "Sales BI, quote PDFs, deadline emails and per-module permissions",
      point5: "Email alerts, WhatsApp integration and CI/CD backups with redundancy",
      more: "See more",
      less: "See less",
      private: "Private repository — live system used by clients. Screenshots use fictional data.",
      mod1: { title: "Overview", desc: "Production and finance KPIs in one panel." },
      mod2: { title: "mvGrafix IA", desc: "Operational readout: pace, funnel and what needs attention today." },
      mod3: { title: "Orders", desc: "Inventory, pipeline, completed jobs and new order form." },
      mod4: { title: "Sales &amp; BI", desc: "Average ticket, collection cycle and top customers." },
      mod5: { title: "Quotes", desc: "Convert to order and export a client-ready PDF." },
      mod6: { title: "Finance", desc: "Cash, receivables and invoices with role-based access." }
    },

    projects: {
      web: {
        title: "Web <span>Projects</span>",
        lead: "Front-end and web systems, plus public GitHub repositories kept in sync in the same grid."
      },
      barber: {
        title: "Barbershop Landing Page",
        desc: "Modern and responsive landing page focused on conversion and premium visual identity."
      },
      recanto: {
        title: "Recanto da Fé Landing Page",
        desc: "Institutional website focused on services presentation and digital presence."
      },
      ecommerce: {
        title: "E-commerce System",
        desc: "Shopping cart project with business rules, validations and structured backend."
      },
      taquaralto: {
        title: "Taquaralto Project",
        desc: "SaaS system for sleep tracking, fitness and sports management."
      },
      gustavo: {
        title: "Gustavo Architect Website",
        desc: "Institutional landing with a refined layout for an architecture studio and visual portfolio."
      },
      gestao: {
        title: "Commercial Management System",
        desc: "Full sales, inventory, cash register and accounts payable/receivable management for a retail store."
      },
      agenda: {
        title: "Agenda — Scheduling",
        desc: "Personal and group scheduling with permissions, files and WhatsApp reminders."
      },
      chamados: {
        title: "Ticketing System",
        desc: "WhatsApp ticket intake with a web panel for agents, protocols and follow-up."
      },
      pagamentos: {
        title: "Payments Page",
        desc: "Billing UI with PIX, boletos, QR Code and PDF receipt export."
      },
      paroquia: {
        title: "Santo Antônio Parish",
        desc: "Institutional web system with FastAPI backend, templates and Railway-ready deploy."
      },
      bi: {
        title: "<span>Data & BI</span> Projects",
        lead: "Visualization, KPIs and data-driven automations."
      },
      pythonDash: {
        title: "Python Dashboard",
        desc: "Indicator analysis with interactive visualization using Python."
      },
      pbi: {
        title: "Power BI Dashboard",
        desc: "Strategic dashboard with KPIs and visual analysis (screenshots available)."
      },
      pbi2: {
        title: "New Power BI Dashboard",
        desc: "Advanced strategic indicators analysis."
      },
      futsalPerf: {
        title: "Futsal Performance",
        desc: "Python scripts and analytics focused on futsal performance and data."
      },
      sicon: {
        title: "Sicon Stock Automation",
        desc: "Python automation for inventory workflows integrated with corporate systems."
      },
      view: "View project →",
      repo: "View repository →",
      viewImages: "View images →",
      comingSoon: "Coming soon →"
    },

    repos: {
      title: "GitHub <span>Activity</span>",
      lead: "Public repositories pulled from the GitHub API, sorted by recent updates.",
      loading: "Loading repositories…",
      error: "Repositories could not be loaded right now. Please try again later.",
      all: "View all repositories on GitHub →",
      introEyebrow: "GitHub",
      intro: "Follow my timeline on GitHub",
      exit: "Exit timeline",
      portalHint: "GitHub timeline",
      portalEnter: "Enter the timeline"
    },

    about: {
      title: "About <span>Me</span>",
      lead: "Full-stack development applied to real problems, with data and business intelligence when a decision needs indicators.",

      profile: {
        title: "👨‍💻 Professional Profile",
        text:
          "I am a <strong>Full Stack Developer</strong>. I build web applications, APIs and integrations, and add automations and data work when the business needs them. I aim for efficient, scalable and outcome-oriented solutions."
      },

      dev: {
        title: "🚀 Development",
        item1: "Web applications and internal systems",
        item2: "APIs and system integrations",
        item3: "Automations with Python and Power Automate",
        item4: "Landing pages and responsive interfaces"
      },

      data: {
        title: "📊 Data",
        text: "I use data as a basis to support software solutions, optimize processes and generate reliable indicators.",
        item1: "Data manipulation and analysis with Python (Pandas)",
        item2: "SQL queries (MySQL, PostgreSQL)",
        item3: "Data integration between systems"
      },

      bi: {
        title: "📈 Business Intelligence",
        text: "Development of dashboards and indicators that transform technical data into clear information for decision making.",
        item1: "Dashboards in Power BI and Python",
        item2: "KPI definition",
        item3: "Management and strategic support"
      },

      stack: {
        title: "🛠️ Main Stack",
        back: "Back-end",
        front: "Front-end",
        devops: "DevOps and containers",
        data: "Data",
        bi: "BI",
        pyDash: "Python Dashboards",
        auto: "Automation",
        vcs: "Version control"
      },

      education: {
        title: "🎓 Education",
        text:
          "<strong>Integrated High School IT Technician</strong> – IFTO (Completed 2019)<br><strong>Internet Systems</strong> – Bachelor's – IFTO (Completed 2025)<br><strong>Software Engineering</strong> – Postgraduate (In progress)<br>English and Spanish – Intermediate"
      },

      footer:
        "Looking for full stack developer opportunities where I can build applications, integrate systems and use data to create real business value."
    },

    footer: {
      text: "© 2026 Marcos Vinícius • All rights reserved"
    }
  }
};

/* ===============================
   APLICAÇÃO DO IDIOMA
================================ */
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.dataset.i18n.split(".");
    let value = i18n[currentLang];

    keys.forEach(k => value = value?.[k]);

    if (value) el.innerHTML = value;
  });

  document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";
  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.innerText = currentLang === "pt" ? "EN" : "PT";
    const label = i18n[currentLang]?.header?.langLabel;
    if (label) langBtn.setAttribute("aria-label", label);
  }

  document.dispatchEvent(new CustomEvent("langChanged", { detail: { lang: currentLang } }));
}

window.applyTranslations = applyTranslations;

/* ===============================
   BOTÃO DE TROCA
================================ */
document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  localStorage.setItem("lang", currentLang);
  applyTranslations();
});

/* Inicializa */
applyTranslations();
