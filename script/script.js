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

  /** Data do último push (código); GitHub também expõe updated_at (qualquer atividade no repo). */
  function repoActivityDate(repo) {
    const raw = repo.pushed_at || repo.updated_at || "";
    const t = new Date(raw).getTime();
    return Number.isNaN(t) ? 0 : t;
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

  function buildIconRowHtml(repo) {
    const home = normalizeUrl(repo.homepage || "");
    const repoUrl = repo.html_url || "";
    const parts = [];
    if (home) {
      parts.push(
        `<a href="${attrHref(home)}" class="card-icon-link" target="_blank" rel="noopener noreferrer" aria-label="Site" title="Site"><i class="fa-solid fa-globe" aria-hidden="true"></i></a>`
      );
    }
    if (repoUrl) {
      parts.push(
        `<a href="${attrHref(repoUrl)}" class="card-icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><i class="fab fa-github" aria-hidden="true"></i></a>`
      );
    }
    return `<div class="card-icon-row">${parts.join("")}</div>`;
  }

  async function loadGithubWebRepos() {
    const timeline = document.getElementById("github-timeline");
    const loadingEl = document.getElementById("github-web-loading");
    if (!timeline) return;

    try {
      const res = await fetch(
        `https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=pushed&direction=desc&type=owner`
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const repos = await res.json();
      // Ordenar por último push antes de filtrar e limitar — evita ficar só com repos antigos
      // quando o slice era aplicado antes do sort.
      const sorted = [...repos].sort(
        (a, b) => repoActivityDate(b) - repoActivityDate(a)
      );
      const list = sorted.filter(isWebGridRepo).slice(0, MAX_REPOS);

      if (loadingEl) loadingEl.remove();

      list.forEach((repo, index) => {
        const row = document.createElement("div");
        row.className = "timeline-item";
        const iso = repo.pushed_at || repo.updated_at || "";
        const dateLabel = formatDate(iso);
        const rail = document.createElement("div");
        rail.className = "timeline-rail";
        rail.setAttribute("aria-hidden", "true");
        rail.innerHTML = `
          <time class="timeline-date" datetime="${escapeHtml(iso)}">${escapeHtml(dateLabel)}</time>
          <span class="timeline-dot"></span>
        `;

        const card = document.createElement("article");
        const tone = index % 5;
        card.className = "card gh-repo-card timeline-card project-card";
        card.dataset.mediaTone = String(tone);
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
        const updated = `<span class="repo-updated"><i class="fa-regular fa-clock" aria-hidden="true"></i> ${formatDate(repo.pushed_at || repo.updated_at)}</span>`;

        card.dataset.updated = repo.pushed_at || repo.updated_at || "";
        card.innerHTML = `
          <div class="card-media" aria-hidden="true"></div>
          <div class="card-body">
            <h3>${escapeHtml(title)}</h3>
            <p>${desc}</p>
            <div class="tags">${langTag}${ghTag}</div>
            <div class="gh-repo-meta">${stars}${updated}</div>
          </div>
          ${buildIconRowHtml(repo)}
        `;

        if (index % 2 === 0) {
          row.appendChild(rail);
          row.appendChild(card);
        } else {
          row.appendChild(card);
          row.appendChild(rail);
        }
        timeline.appendChild(row);
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
    document.querySelectorAll(".timeline-date[datetime]").forEach((el) => {
      const iso = el.getAttribute("datetime");
      if (iso) {
        el.textContent = formatDate(iso);
      }
    });
  });
})();
