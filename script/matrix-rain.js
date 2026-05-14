(function () {
  const canvas = document.getElementById("matrixRain");
  if (!canvas || !canvas.getContext) return;

  const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fontSize = 15;
  const chars = "01";
  /** Rastro: alpha menor = desaparece mais devagar (efeito mais “lento”) */
  const trail = "rgba(7, 10, 18, 0.075)";
  /** Multiplicador global da queda (menor = mais lento) */
  const fallFactor = 0.42;

  /** @type {CanvasRenderingContext2D | null} */
  let ctx = null;
  let w = 0;
  let h = 0;
  let columns = 0;
  /** @type {number[]} */
  let drops = [];
  /** @type {number[]} */
  let speeds = [];
  let rafId = 0;

  function hideCanvas() {
    canvas.style.display = "none";
  }

  function showCanvas() {
    canvas.style.display = "block";
  }

  function ensureCtx() {
    if (!ctx) {
      ctx = canvas.getContext("2d", { alpha: true });
    }
    return ctx;
  }

  function resize() {
    if (!ctx) return;
    const rectW = window.innerWidth;
    const rectH = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(rectW * dpr);
    canvas.height = Math.floor(rectH * dpr);
    canvas.style.width = rectW + "px";
    canvas.style.height = rectH + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    w = rectW;
    h = rectH;
    const nextCols = Math.ceil(w / fontSize);
    if (nextCols !== columns) {
      columns = nextCols;
      drops = new Array(columns);
      speeds = new Array(columns);
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * (h / fontSize) * -0.5;
        speeds[i] = 0.28 + Math.random() * 0.42;
      }
    }
  }

  function draw() {
    if (!ctx || mqReduce.matches) return;
    ctx.fillStyle = trail;
    ctx.fillRect(0, 0, w, h);
    ctx.font = `600 ${fontSize}px ui-monospace, Consolas, "Cascadia Code", "Courier New", monospace`;

    for (let i = 0; i < columns; i++) {
      const text = chars[(Math.random() * chars.length) | 0];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      const headFlash = Math.random() > 0.97;
      ctx.fillStyle = headFlash
        ? "rgba(230, 255, 235, 0.92)"
        : `rgba(0, 255, ${55 + ((Math.random() * 120) | 0)}, ${0.32 + Math.random() * 0.58})`;
      ctx.fillText(text, x, y);

      drops[i] += (speeds[i] || 1) * fallFactor;
      if (drops[i] * fontSize > h && Math.random() > 0.978) {
        drops[i] = 0;
      }
    }

    rafId = requestAnimationFrame(draw);
  }

  function start() {
    if (mqReduce.matches) {
      cancelAnimationFrame(rafId);
      rafId = 0;
      hideCanvas();
      return;
    }
    ensureCtx();
    showCanvas();
    resize();
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(draw);
  }

  mqReduce.addEventListener("change", start);

  let resizeT = 0;
  window.addEventListener(
    "resize",
    function () {
      clearTimeout(resizeT);
      resizeT = setTimeout(function () {
        if (!mqReduce.matches) resize();
      }, 120);
    },
    { passive: true }
  );

  if (mqReduce.matches) {
    hideCanvas();
  } else {
    start();
  }
})();
