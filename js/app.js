"use strict";

const stage = document.getElementById("slideStage");
const sectionLabel = document.getElementById("sectionLabel");
const counter = document.getElementById("slideCounter");
const progress = document.getElementById("progressFill");
const progressTrack = document.getElementById("progressTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const navPanel = document.getElementById("navPanel") || document.getElementById("navSide");
const navList = document.getElementById("navList");
const navToggle = document.getElementById("tocToggle") || document.getElementById("navToggle");
const navClose = document.getElementById("navClose");
const toast = document.getElementById("toast");
const themeToggle = document.getElementById("themeToggle");
const themeToggleIcon = themeToggle ? themeToggle.querySelector("i") : null;
let current = 0;

/* ==========================================================================
   TEMA CLARO / OSCURO
   ========================================================================== */
function getSavedTheme() {
  const saved = localStorage.getItem("owasp_theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.classList.add("light-theme");
    document.body.classList.add("light-theme");
    if (themeToggleIcon) themeToggleIcon.className = "ph ph-sun";
  } else {
    document.documentElement.classList.remove("light-theme");
    document.body.classList.remove("light-theme");
    if (themeToggleIcon) themeToggleIcon.className = "ph ph-moon";
  }
  localStorage.setItem("owasp_theme", theme);
}

function initTheme() {
  const theme = getSavedTheme();
  applyTheme(theme);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.classList.contains("light-theme");
    applyTheme(isLight ? "dark" : "light");
    showToast(isLight ? "Tema oscuro activado" : "Tema claro activado");
  });
}

/* ==========================================================================
   RENDERIZADO DE DIAPOSITIVAS
   ========================================================================== */
const icon = (name) => `<i class="ph ${name}" aria-hidden="true"></i>`;
const chip = (value) => `<span class="tag">${value}</span>`;

function wrapCard(inner, accentClass = "") {
  return `<div class="glass-card ${accentClass}">${inner}</div>`;
}

function renderSlide(s) {
  /* ── Portada ── */
  if (s.type === "cover") {
    return `
<article class="slide">
  <div class="cover">
    <div class="cover-top">
      <div class="cover-badge"><i class="ph ph-shield-check"></i> BRIEFING DE SEGURIDAD</div>
      <span class="kicker">${s.kicker}</span>
      <h1>${s.title}</h1>
      <p class="cover-sub">${s.subtitle}</p>
      <div class="cover-tags">${s.tags.map(chip).join("")}</div>
    </div>
    <div class="cover-bottom">
      <div class="cover-hint"><kbd>→</kbd> INICIAR RECORRIDO</div>
      <div class="final-note">${s.note}</div>
    </div>
  </div>
</article>`;
  }

  /* ── Contexto (3 tarjetas) ── */
  if (s.type === "overview") {
    return `
<article class="slide">
  <div class="slide-content">
    <div class="slide-section kicker-section">
      <span class="kicker">${s.kicker}</span>
      <h2>${s.title}</h2>
    </div>
    <div class="slide-section">
      <p class="lead">${s.lead}</p>
    </div>
    <div class="slide-section">
      ${wrapCard(`
        <div class="overview-grid">
          ${s.cards.map((c) => `
            <div class="overview-card">
              <div class="card-head">
                <span class="num">${c[0]}</span>
                <div class="card-icon">${icon(c[3])}</div>
              </div>
              <h3>${c[1]}</h3>
              <p>${c[2]}</p>
            </div>
          `).join("")}
        </div>
      `, "accented3")}
    </div>
    <div class="slide-section">
      <div class="final-note">${s.note}</div>
    </div>
  </div>
</article>`;
  }

  /* ── Mapa de amenazas (10 insignias) ── */
  if (s.type === "risk-overview") {
    return `
<article class="slide">
  <div class="slide-content">
    <div class="slide-section kicker-section">
      <span class="kicker">${s.kicker}</span>
      <h2>${s.title}</h2>
    </div>
    <div class="slide-section">
      <p class="lead">${s.lead}</p>
    </div>
    <div class="slide-section">
      ${wrapCard(`
        <div class="risk-map">
          ${s.risks.map((x) => `
            <div class="risk-badge">
              <span class="code">${x[0]}</span>
              <span class="name">${x[1]}</span>
            </div>
          `).join("")}
        </div>
      `, "accented")}
    </div>
    <div class="slide-section">
      <div class="final-note">${s.note}</div>
    </div>
  </div>
</article>`;
  }

  /* ── Bloques de 2 riesgos (pair-risk) ── */
  if (s.type === "pair-risk") {
    return `
<article class="slide">
  <div class="slide-content">
    <div class="slide-section kicker-section">
      <span class="kicker">${s.kicker}</span>
      <h2>${s.title}</h2>
    </div>
    <div class="slide-section">
      <p class="lead">${s.lead}</p>
    </div>
    <div class="slide-section">
      ${wrapCard(`
        <div class="pair-grid">
          ${s.risks.map((r, i) => {
            const accentClass = i === 0 ? "accented" : (i === 1 ? "accented2" : "accented3");
            const codeClass = i === 0 ? "risk-code" : (i === 1 ? "risk-code2" : "risk-code3");
            return `
            <div class="risk-panel ${accentClass}">
              <div class="risk-head">
                <span class="${codeClass}">${r.code}</span>
                <span class="risk-index">${r.code}</span>
              </div>
              <span class="risk-english">${r.english}</span>
              <h3>${r.name}</h3>
              <p class="risk-summary">${r.summary}</p>
              <div class="risk-block ${accentClass}">
                <span class="block-label">${icon("ph-terminal-window")} ESCENARIO</span>
                <p>${r.example}</p>
              </div>
              <div class="risk-block ${accentClass}">
                <span class="block-label">${icon("ph-shield-check")} PREVENCIÓN</span>
                <p>${r.prevention}</p>
              </div>
              <div class="risk-block ${accentClass}">
                <span class="block-label">${icon("ph-warning-octagon")} IMPACTO</span>
                <p>${r.impact}</p>
              </div>
              <div class="risk-signal"><strong>${icon("ph-alarm")} INDICADOR DE ALERTA</strong><br>${r.signal}</div>
            </div>`;
          }).join("")}
        </div>
      `, "")}
    </div>
    <div class="slide-section">
      <div class="final-note">${s.note}</div>
    </div>
  </div>
</article>`;
  }

  /* ── Ciclo de vida (5 fases) ── */
  if (s.type === "lifecycle") {
    return `
<article class="slide">
  <div class="slide-content">
    <div class="slide-section kicker-section">
      <span class="kicker">${s.kicker}</span>
      <h2>${s.title}</h2>
    </div>
    <div class="slide-section">
      <p class="lead">${s.lead}</p>
    </div>
    <div class="slide-section">
      ${wrapCard(`
        <div class="lifecycle-flow">
          ${s.items.map((x) => `
            <div class="phase">
              <span class="num">${x[0]}</span>
              <div>
                <h3>${x[1]}</h3>
                <p>${x[2]}</p>
              </div>
            </div>
          `).join("")}
        </div>
      `, "accented2")}
    </div>
    <div class="slide-section">
      <div class="final-note">${s.note}</div>
    </div>
  </div>
</article>`;
  }

  /* ── Cierre ── */
  if (s.type === "closing") {
    return `
<article class="slide">
  <div class="slide-content">
    <div class="slide-section kicker-section">
      <span class="kicker">${s.kicker}</span>
      <h2>${s.title}</h2>
    </div>
    <div class="slide-section">
      <p class="lead">${s.lead}</p>
    </div>
    <div class="slide-section">
      ${wrapCard(`
        <div class="conclusion-grid">
          ${s.items.map((x) => `
            <div class="conclusion-card">
              <span>${x[0]}</span>
              <h3>${x[1]}</h3>
            </div>
          `).join("")}
        </div>
      `, "accented3")}
    </div>
    <div class="slide-section">
      ${wrapCard(`
        <div class="source-list">
          ${s.sources.map((x) => `
            <div class="source-item">
              ${icon("ph-link")}
              <span>${x[0]}</span>
              <a href="${x[1]}" target="_blank" rel="noopener noreferrer">${icon("ph-arrow-square-out")} Abrir</a>
            </div>
          `).join("")}
        </div>
      `, "")}
    </div>
    <div class="slide-section">
      <div class="final-note">${s.note}</div>
    </div>
  </div>
</article>`;
  }

  return `<article class="slide"><div class="slide-content"><div class="slide-section"><h2>${s.title || "Contenido"}</h2></div></div></article>`;
}

function render(index) {
  current = Math.max(0, Math.min(index, SLIDES.length - 1));
  const s = SLIDES[current];
  stage.innerHTML = renderSlide(s);
  sectionLabel.textContent = s.section;
  counter.innerHTML = `${String(current + 1).padStart(2, "0")} <span class="slash">/</span> ${String(SLIDES.length).padStart(2, "0")}`;
  progress.style.width = `${((current + 1) / SLIDES.length) * 100}%`;
  progressTrack.setAttribute("aria-valuemax", String(SLIDES.length));
  progressTrack.setAttribute("aria-valuenow", String(current + 1));
  document.querySelectorAll(".nav-item").forEach((el, i) => el.setAttribute("aria-current", i === current ? "true" : "false"));
  stage.scrollTop = 0;
}

function buildNav() {
  navList.innerHTML = SLIDES.map((s, i) => `
    <button class="nav-item" data-index="${i}" aria-current="${i === 0}">
      <span class="num">${String(i + 1).padStart(2, "0")}</span>
      <span class="title">${s.id === "inicio" ? "Portada — La superficie de ataque" : s.id === "defensa" ? "Cierre — Defensa en profundidad" : s.title.replace(/<[^>]*>/g, "")}</span>
      <span class="sec">${s.section}</span>
    </button>
  `).join("");
  navList.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-index]");
    if (b) {
      render(Number(b.dataset.index));
      toggleNav(false);
    }
  });
}

function toggleNav(force) {
  const open = typeof force === "boolean" ? force : navPanel.hidden;
  navPanel.hidden = !open;
  navToggle.setAttribute("aria-expanded", String(open));
  if (open) navList.querySelector("button")?.focus();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1700);
}

/* ==========================================================================
   EVENTOS — Sin botones Anterior/Siguiente (eliminados por diseño)
   Se mantiene navegación por teclado y touch de forma silenciosa.
   ========================================================================== */
navToggle.addEventListener("click", () => toggleNav());
navClose.addEventListener("click", () => toggleNav(false));

document.getElementById("fullscreenBtn").addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch {
    showToast("Pantalla completa no disponible en este navegador.");
  }
});

document.addEventListener("keydown", (e) => {
  if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
  if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); render(current + 1); }
  if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); render(current - 1); }
  if (e.key.toLowerCase() === "i") { toggleNav(); }
  if (e.key === "Escape" && !navPanel.hidden) toggleNav(false);
  if (e.key === "Home") render(0);
  if (e.key === "End") render(SLIDES.length - 1);
});

let touchStartX = 0;
stage.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
stage.addEventListener("touchend", (e) => {
  const delta = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(delta) > 70) render(current + (delta < 0 ? 1 : -1));
}, { passive: true });

/* Inicialización */
initTheme();
buildNav();
render(0);