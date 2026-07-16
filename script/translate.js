let currentLang = localStorage.getItem("lang") || "pt";

const i18n = {
  pt: {
    nav: {
      projects: "Projetos",
      github: "GitHub",
      about: "Sobre"
    },

    header: {
      badge: "DESENVOLVIMENTO WEB & DADOS",
      title: "Olá, eu sou <span>Marcos Vinícius</span>",
      subtitle:
        "Analista de TI com foco em Desenvolvimento Web, Automação e Análise de Dados. Crio soluções digitais modernas, dashboards estratégicos e automações inteligentes.",
      btnProjects: "Ver Projetos",
      btnResume: "Currículo"
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
        desc: "Análise avançada de indicadores estratégicos (imagem em breve)."
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
      lead: "Experiência em desenvolvimento, dados e inteligência de negócio aplicada a problemas reais.",

      profile: {
        title: "👨‍💻 Perfil Profissional",
        text:
          "Sou <strong>Desenvolvedor</strong> com foco em criação de aplicações web, automações e integrações de sistemas. Desenvolvo soluções eficientes, escaláveis e orientadas a negócio, utilizando boas práticas e tecnologias modernas."
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
        dev: "<strong>Dev:</strong> HTML, CSS, JavaScript, TypeScript, React, Node.js, Java, Spring Boot, PHP, Python, Android",
        data: "<strong>Dados:</strong> Python, Pandas, SQL, MySQL, PostgreSQL, Databricks",
        bi: "<strong>BI:</strong> Power BI, Dashboards em Python",
        auto: "<strong>Automação:</strong> Power Automate, n8n",
        vcs: "<strong>Versionamento:</strong> Git, GitHub, GitLab, Gitea",
        containers: "<strong>Containers:</strong> Docker, OpenShift, Harbor"
      },

      education: {
        title: "🎓 Formação",
        text:
          "<strong>Técnico em Informática Integrado ao Ensino Médio</strong> – IFTO (Concluído 2019)<br><strong>Sistemas para Internet</strong> – Graduação – IFTO (Concluído 2025)<br><strong>Engenharia de Software</strong> – Pós-Graduação (Cursando)<br>Inglês e Espanhol – Intermediário"
      },

      footer:
        "Busco oportunidades como desenvolvedor, onde possa criar soluções, automatizar processos e utilizar dados para gerar valor real ao negócio."
    },

    footer: {
      text: "© 2026 Marcos Vinícius • Todos os direitos reservados"
    }
  },

  en: {
    nav: {
      projects: "Projects",
      github: "GitHub",
      about: "About"
    },

    header: {
      badge: "WEB DEVELOPMENT & DATA",
      title: "Hi, I'm <span>Marcos Vinícius</span>",
      subtitle:
        "IT Analyst focused on Web Development, Automation and Data Analysis. I build modern digital solutions, strategic dashboards and smart automations.",
      btnProjects: "View Projects",
      btnResume: "Resume"
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
        desc: "Advanced strategic indicators analysis (image coming soon)."
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
      lead: "Experience across development, data and business intelligence applied to real problems.",

      profile: {
        title: "👨‍💻 Professional Profile",
        text:
          "I am a <strong>Developer</strong> focused on building web applications, automations and system integrations. I develop efficient, scalable and business-oriented solutions using best practices and modern technologies."
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
        dev: "<strong>Dev:</strong> HTML, CSS, JavaScript, TypeScript, React, Node.js, Java, Spring Boot, PHP, Python, Android",
        data: "<strong>Data:</strong> Python, Pandas, SQL, MySQL, PostgreSQL, Databricks",
        bi: "<strong>BI:</strong> Power BI, Python Dashboards",
        auto: "<strong>Automation:</strong> Power Automate, n8n",
        vcs: "<strong>Version Control:</strong> Git, GitHub, GitLab, Gitea",
        containers: "<strong>Containers:</strong> Docker, OpenShift, Harbor"
      },

      education: {
        title: "🎓 Education",
        text:
          "<strong>Integrated High School IT Technician</strong> – IFTO (Completed 2019)<br><strong>Internet Systems</strong> – Bachelor's – IFTO (Completed 2025)<br><strong>Software Engineering</strong> – Postgraduate (In progress)<br>English and Spanish – Intermediate"
      },

      footer:
        "Looking for opportunities as a developer where I can build solutions, automate processes and use data to generate real business value."
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

  document.documentElement.lang = currentLang;
  document.getElementById("langToggle").innerText =
    currentLang === "pt" ? "EN" : "PT";

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
