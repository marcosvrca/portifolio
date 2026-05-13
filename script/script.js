(function () {
  const GH_USER = "marcosvrca";
  const EXCLUDE_NAMES = new Set([
    "json",
    "jsonprova",
    "jsonprova2",
    "arquivo-json",
    "atividade11",
    "testjsonserver",
    "teste-myjsonserver",
    "jsonserver",
  ]);
  /** Repositórios já exibidos como cards fixos acima */
  const FEATURED_SLUGS = new Set([
    "landingpage-barbearia",
    "landingpage-recantodafe",
    "gustavo_arquiteto",
    "carrinho_compras",
    "proejto-taquaralto",
  ]);
  const MAX_REPOS = 15;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".card").forEach((el) => revealObserver.observe(el));

  function formatRepoTitle(name) {
    return name
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatDate(iso) {
    if (!iso) return "";
    const lang = localStorage.getItem("lang") || "pt";
    const locale = lang === "en" ? "en-US" : "pt-BR";
    try {
      return new Date(iso).toLocaleDateString(locale, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return iso;
    }
  }

  function isWebGridRepo(repo) {
    if (repo.fork) return false;
    if (EXCLUDE_NAMES.has(repo.name)) return false;
    if (FEATURED_SLUGS.has(repo.name)) return false;
    if (repo.language === "Python") return false;
    return true;
  }

  function normalizeUrl(raw) {
    if (!raw || typeof raw !== "string") return "";
    const t = raw.trim();
    if (!t) return "";
    try {
      return new URL(t).href;
    } catch {
      try {
        return new URL(t.replace(/^\/\//, ""), "https://").href;
      } catch {
        return "";
      }
    }
  }

  function attrHref(url) {
    return String(url || "")
      .trim()
      .replace(/"/g, "%22")
      .replace(/'/g, "%27");
  }

  function buildLinksHtml(repo) {
    const home = normalizeUrl(repo.homepage || "");
    const repoUrl = repo.html_url || "";
    if (home) {
      return `
        <div class="card-links">
          <a href="${attrHref(home)}" target="_blank" rel="noopener noreferrer"><span data-i18n="projects.view">Ver projeto →</span></a>
          <a href="${attrHref(repoUrl)}" target="_blank" rel="noopener noreferrer"><span data-i18n="projects.repo">Ver repositório →</span></a>
        </div>`;
    }
    return `
        <div class="card-links">
          <a href="${attrHref(repoUrl)}" target="_blank" rel="noopener noreferrer"><span data-i18n="projects.repo">Ver repositório →</span></a>
        </div>`;
  }

  async function loadGithubWebRepos() {
    const grid = document.getElementById("web-projects-grid");
    const loadingEl = document.getElementById("github-web-loading");
    if (!grid) return;

    try {
      const res = await fetch(
        `https://api.github.com/users/${GH_USER}/repos?per_page=40&sort=updated&type=owner`
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const repos = await res.json();
      const list = repos.filter(isWebGridRepo).slice(0, MAX_REPOS);

      if (loadingEl) loadingEl.remove();

      list.forEach((repo) => {
        const card = document.createElement("article");
        card.className = "card gh-repo-card";
        const title = formatRepoTitle(repo.name);
        const desc =
          repo.description && repo.description.trim()
            ? escapeHtml(repo.description)
            : `GitHub · ${escapeHtml(repo.name)}`;
        const langTag = repo.language
          ? `<span class="tag">${escapeHtml(repo.language)}</span>`
          : "";
        const ghTag = `<span class="tag">GitHub</span>`;
        const stars =
          repo.stargazers_count > 0
            ? `<span><i class="fa-regular fa-star" aria-hidden="true"></i> ${repo.stargazers_count}</span>`
            : "";
        const updated = `<span class="repo-updated"><i class="fa-regular fa-clock" aria-hidden="true"></i> ${formatDate(repo.updated_at)}</span>`;

        card.dataset.updated = repo.updated_at || "";
        card.innerHTML = `
          <h3>${escapeHtml(title)}</h3>
          <p>${desc}</p>
          <div class="tags">${langTag}${ghTag}</div>
          <div class="gh-repo-meta">${stars}${updated}</div>
          ${buildLinksHtml(repo)}
        `;
        grid.appendChild(card);
        revealObserver.observe(card);
      });

      if (typeof window.applyTranslations === "function") {
        window.applyTranslations();
      }
    } catch {
      if (loadingEl) {
        loadingEl.className = "github-web-loading repos-error";
        loadingEl.setAttribute("data-i18n", "repos.error");
        loadingEl.textContent = "";
        if (typeof window.applyTranslations === "function") {
          window.applyTranslations();
        }
      }
    }
  }

  loadGithubWebRepos();

  document.addEventListener("langChanged", () => {
    document.querySelectorAll(".gh-repo-card[data-updated]").forEach((card) => {
      const el = card.querySelector(".repo-updated");
      if (el && card.dataset.updated) {
        const icon = '<i class="fa-regular fa-clock" aria-hidden="true"></i> ';
        el.innerHTML = icon + formatDate(card.dataset.updated);
      }
    });
  });
})();
