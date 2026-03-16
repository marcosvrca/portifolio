let currentLang = localStorage.getItem("lang") || "pt";

const i18n = {
  pt: {
    header: {
      badge: "DESENVOLVIMENTO WEB & DADOS",
      title: "Olá, eu sou <span>Marcos Vinícius</span>",
      subtitle:
        "Analista de TI com foco em Desenvolvimento Web, Automação e Análise de Dados. Crio soluções digitais modernas, dashboards estratégicos e automações inteligentes.",
      btnProjects: "Ver Projetos",
      btnResume: "Currículo"
    },

    projects: {
      web: { title: "Projetos de <span>Desenvolvimento Web</span>" },
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
      bi: { title: "Projetos de <span>Dados & BI</span>" },
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
      view: "Ver projeto →",
      repo: "Ver repositório →",
      viewImages: "Ver imagens →",
      comingSoon: "Em breve →"
    },

    about: {
      title: "Sobre <span>Mim</span>",

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
        dev: "<strong>Dev:</strong> HTML, CSS, JavaScript, Java, Python, Spring Boot",
        data: "<strong>Dados:</strong> Python, Pandas, SQL, Databricks",
        bi: "<strong>BI:</strong> Power BI, Dashboards em Python",
        auto: "<strong>Automação:</strong> Power Automate, n8n"
      },

      education: {
        title: "🎓 Formação",
        text:
          "<strong>Sistemas para Internet</strong> – IFTO (Concluído 2025)<br><strong>Técnico em Informática</strong> – IFTO<br>Inglês e Espanhol – Intermediário"
      },

      footer:
        "Busco oportunidades como desenvolvedor, onde possa criar soluções, automatizar processos e utilizar dados para gerar valor real ao negócio."
    },

    footer: {
      text: "© 2026 Marcos Vinícius • Todos os direitos reservados"
    }
  },

  en: {
    header: {
      badge: "WEB DEVELOPMENT & DATA",
      title: "Hi, I'm <span>Marcos Vinícius</span>",
      subtitle:
        "IT Analyst focused on Web Development, Automation and Data Analysis. I build modern digital solutions, strategic dashboards and smart automations.",
      btnProjects: "View Projects",
      btnResume: "Resume"
    },

    projects: {
      web: { title: "Web <span>Projects</span>" },
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
      bi: { title: "<span>Data & BI</span> Projects" },
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
      view: "View project →",
      repo: "View repository →",
      viewImages: "View images →",
      comingSoon: "Coming soon →"
    },

    about: {
      title: "About <span>Me</span>",

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
        dev: "<strong>Dev:</strong> HTML, CSS, JavaScript, Java, Python, Spring Boot",
        data: "<strong>Data:</strong> Python, Pandas, SQL, Databricks",
        bi: "<strong>BI:</strong> Power BI, Python Dashboards",
        auto: "<strong>Automation:</strong> Power Automate, n8n"
      },

      education: {
        title: "🎓 Education",
        text:
          "<strong>Internet Systems</strong> – IFTO (Graduated 2025)<br><strong>IT Technician</strong> – IFTO<br>English and Spanish – Intermediate"
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
}

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
