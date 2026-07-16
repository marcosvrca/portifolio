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
  const MAX_REPOS = 40;

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

  /* —— Experiência imersiva da linha do tempo —— */
  function initTimelineExperience() {
    const portal = document.getElementById("projetos-github");
    const experience = document.getElementById("timeline-experience");
    const scrollEl = document.getElementById("timeline-experience-scroll");
    const exitBtn = document.getElementById("timeline-exit");
    const enterBtn = document.getElementById("timeline-portal-enter");
    const endSentinel = document.getElementById("timeline-end-sentinel");
    if (!portal || !experience || !scrollEl || !exitBtn) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ENTER_MS = reduceMotion ? 40 : 420;
    const READY_MS = reduceMotion ? 60 : 980;
    const CONTENT_MS = reduceMotion ? 80 : 1500;
    const LEAVE_MS = reduceMotion ? 40 : 1250;

    let active = false;
    let locked = false;
    let leaving = false;
    let enterTimers = [];
    let endArmed = false;
    let endHoldTimer = null;
    let pendingAutoEnter = null;
    let lastScrollY = window.scrollY;
    let scrollingDown = true;
    const END_HOLD_MS = 7000;

    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        if (Math.abs(y - lastScrollY) > 2) {
          scrollingDown = y > lastScrollY;
        }
        lastScrollY = y;
      },
      { passive: true }
    );

    function clearEnterTimers() {
      enterTimers.forEach((id) => clearTimeout(id));
      enterTimers = [];
    }

    function clearEndHold() {
      if (endHoldTimer) {
        clearTimeout(endHoldTimer);
        endHoldTimer = null;
      }
    }

    function clearPendingAutoEnter() {
      if (pendingAutoEnter) {
        clearTimeout(pendingAutoEnter);
        pendingAutoEnter = null;
      }
    }

    function scheduleEndExit() {
      if (endHoldTimer || !active || leaving || !endArmed) return;
      endHoldTimer = setTimeout(() => {
        endHoldTimer = null;
        if (active && !leaving) {
          exitTimeline();
        }
      }, END_HOLD_MS);
    }

    function enterTimeline({ fromButton = false } = {}) {
      if (active || leaving) return;
      if (locked && !fromButton) return;

      active = true;
      locked = true;
      endArmed = false;
      clearEnterTimers();
      clearEndHold();
      clearPendingAutoEnter();

      experience.classList.remove("is-leaving", "is-ready", "show-content");
      experience.classList.add("is-active", "is-entering");
      experience.setAttribute("aria-hidden", "false");
      document.body.classList.add("timeline-mode");
      document.body.classList.remove("timeline-leaving");
      portal.classList.add("is-visited");
      scrollEl.scrollTop = 0;

      enterTimers.push(
        setTimeout(() => {
          experience.classList.add("is-ready");
        }, READY_MS)
      );
      enterTimers.push(
        setTimeout(() => {
          experience.classList.add("show-content");
          // Só auto-sai ao fim se houver rolagem real
          enterTimers.push(
            setTimeout(() => {
              const canScroll =
                scrollEl.scrollHeight > scrollEl.clientHeight + 120;
              endArmed = canScroll;
              // Revela cards já visíveis no painel
              scrollEl.querySelectorAll(".timeline-card.card:not(.show)").forEach((card) => {
                const rect = card.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                  card.classList.add("show");
                }
              });
            }, 400)
          );
        }, CONTENT_MS)
      );
    }

    function exitTimeline() {
      if (!active || leaving) return;
      leaving = true;
      endArmed = false;
      clearEnterTimers();
      clearEndHold();
      clearPendingAutoEnter();

      // Reinicia as ondas para a animação de colapso
      experience.classList.remove("is-entering");
      void experience.offsetWidth;

      experience.classList.add("is-leaving");
      experience.classList.remove("is-ready", "show-content");
      document.body.classList.add("timeline-leaving");

      setTimeout(() => {
        experience.classList.remove("is-active", "is-leaving");
        experience.setAttribute("aria-hidden", "true");
        document.body.classList.remove("timeline-mode", "timeline-leaving");
        scrollEl.scrollTop = 0;
        active = false;
        leaving = false;
        // Mantém locked: não reabre ao voltar pro portfólio
        locked = true;
        scrollingDown = false;

        // Volta ao portal — próximo scroll continua no Sobre mim
        const top =
          portal.getBoundingClientRect().top +
          window.scrollY -
          (parseInt(getComputedStyle(portal).scrollMarginTop, 10) || 88);
        window.scrollTo({
          top: Math.max(0, top),
          behavior: reduceMotion ? "auto" : "smooth",
        });
      }, LEAVE_MS);
    }

    const portalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            portal.classList.add("is-armed");
            // Só abre automaticamente ao descer a página
            if (
              !active &&
              !leaving &&
              !locked &&
              scrollingDown &&
              !pendingAutoEnter
            ) {
              pendingAutoEnter = setTimeout(() => {
                pendingAutoEnter = null;
                if (!active && !leaving && !locked && scrollingDown) {
                  enterTimeline();
                }
              }, ENTER_MS);
            }
          } else {
            portal.classList.remove("is-armed");
            clearPendingAutoEnter();
            // Não altera lock enquanto a timeline está aberta / saindo
            if (active || leaving) return;
            // Saiu do portal para cima → liberado para entrar no próximo scroll down
            if (entry.boundingClientRect.top > 0) {
              locked = false;
            }
          }
        });
      },
      { threshold: 0.42, rootMargin: "0px 0px -8% 0px" }
    );
    portalObserver.observe(portal);

    if (endSentinel) {
      const endObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              active &&
              endArmed &&
              !leaving &&
              scrollEl.scrollTop > 80
            ) {
              // Espera 15s no fim para dar tempo de abrir "ver todos os repositórios"
              scheduleEndExit();
            } else if (!entry.isIntersecting) {
              clearEndHold();
            }
          });
        },
        { root: scrollEl, threshold: 0.55 }
      );
      endObserver.observe(endSentinel);
    }

    exitBtn.addEventListener("click", () => exitTimeline());
    if (enterBtn) {
      enterBtn.addEventListener("click", () => enterTimeline({ fromButton: true }));
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && active) {
        e.preventDefault();
        exitTimeline();
      }
    });

    // Links âncora para #curriculo / #projetos não devem ficar presos na timeline
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        if (active) exitTimeline();
      });
    });
  }

  initTimelineExperience();
})();
