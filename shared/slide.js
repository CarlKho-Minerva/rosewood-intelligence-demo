/*
 * Rosewood Intelligence — demo flipbook navigation
 *
 * Each slide is a standalone HTML file in pre/, during/, or post/.
 * The <body> declares:
 *   data-steps="N"           how many internal animation steps before advancing
 *   data-prev="../path.html" optional previous-slide URL
 *   data-next="../path.html" optional next-slide URL
 *   data-mode="Server|Admin" optional mode chip shown top-right
 *
 * Internal steps are driven by the body class `.step-0 ... .step-N`. Use those
 * selectors in CSS to choreograph the per-slide animation.
 *
 * Right-click, ArrowRight, Space, and PageDown advance one step (or to the
 * next slide once all steps are consumed). ArrowLeft / PageUp regress. F
 * toggles fullscreen. Esc exits fullscreen via the browser default.
 *
 * Any element with `.video-slot[data-src]` is hydrated into a real <video>
 * on load. Drop a path into data-src and the placeholder is replaced.
 */
(function () {
  const slide = document.body;
  const totalSteps = parseInt(slide.dataset.steps || '0', 10);
  const prev = slide.dataset.prev || null;
  const next = slide.dataset.next || null;
  let step = 0;

  function setStep(n) {
    slide.classList.remove('step-' + step);
    step = Math.max(0, Math.min(n, totalSteps));
    slide.classList.add('step-' + step);
    slide.dataset.step = String(step);
    renderStepDots();
  }

  function advance() {
    if (step < totalSteps) {
      setStep(step + 1);
    } else if (next) {
      slide.classList.add('exiting');
      setTimeout(() => { window.location.href = next; }, 280);
    }
  }

  function regress() {
    if (step > 0) {
      setStep(step - 1);
    } else if (prev) {
      slide.classList.add('exiting');
      setTimeout(() => { window.location.href = prev; }, 240);
    }
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen && document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
    }
  }

  function renderStepDots() {
    const dots = document.querySelector('.chrome .steps');
    if (!dots) return;
    dots.innerHTML = '';
    for (let i = 0; i <= totalSteps; i++) {
      const s = document.createElement('span');
      if (i <= step) s.classList.add('on');
      dots.appendChild(s);
    }
  }

  function hydrateVideos() {
    document.querySelectorAll('.video-slot[data-src]').forEach((slot) => {
      const src = slot.getAttribute('data-src');
      if (!src) return;
      slot.innerHTML = '';
      const video = document.createElement('video');
      video.src = src;
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.autoplay = true;
      video.preload = 'auto';
      slot.appendChild(video);
    });
  }

  function injectChrome() {
    if (document.querySelector('.chrome')) return;
    const mode = slide.dataset.mode || '';
    const tag = slide.dataset.tag || '';
    const phase = slide.dataset.phase || '';
    const idx = slide.dataset.index || '';
    const total = slide.dataset.total || '';
    const chrome = document.createElement('div');
    chrome.className = 'chrome';
    chrome.innerHTML = `
      <div class="top-line"></div>
      ${tag ? `<div class="slide-tag">${tag}${idx ? ' · ' + idx + (total ? '/' + total : '') : ''}${phase ? ' · ' + phase : ''}</div>` : ''}
      <div class="brand"><span class="mark">R</span><span>Rosewood Intelligence</span></div>
      ${mode ? `<div class="mode${mode.toLowerCase() === 'admin' ? ' admin' : ''}">${mode}</div>` : ''}
      <div class="steps"></div>
      <div class="hint">→ or right-click</div>
    `;
    document.body.appendChild(chrome);
  }

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    advance();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      advance();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      regress();
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    } else if (e.key === 'r' || e.key === 'R') {
      setStep(0);
    } else if (e.key === 'Home') {
      setStep(0);
    } else if (e.key === 'End') {
      setStep(totalSteps);
    }
  });

  // click-to-advance on the body too (left click)
  document.addEventListener('click', (e) => {
    if (e.target.closest('a, button, input, video')) return;
    advance();
  });

  injectChrome();
  setStep(0);
  hydrateVideos();
})();
