/* =====================================================================
   Human / Otherwise — application logic
   Classic script (no ES modules) so it runs directly from file://.
   Depends on the global `CONTENT` defined in content.js.
   ===================================================================== */
(function () {
  "use strict";

  var C = window.CONTENT;
  if (!C) { console.error("CONTENT failed to load."); return; }

  /* ---- DOM refs --------------------------------------------------- */
  var app = document.getElementById("app");
  var topbar = document.getElementById("topbar");
  var stepLabel = document.getElementById("stepLabel");
  var restartBtn = document.getElementById("restart");
  var brandBtn = document.getElementById("brand");
  var progressLine = document.getElementById("progressLine");
  var cursorGlow = document.querySelector(".cursor-glow");

  var modalRoot = document.getElementById("modalRoot");
  var modalPanel = document.getElementById("modalPanel");
  var modalBackdrop = document.getElementById("modalBackdrop");

  /* ---- flow & routing maps --------------------------------------- */
  var MODULES = C.modules;                       // ordered
  var MODULE_IDS = MODULES.map(function (m) { return m.id; });

  function moduleById(id) {
    for (var i = 0; i < MODULES.length; i++) if (MODULES[i].id === id) return MODULES[i];
    return null;
  }

  function hashFor(view) {
    if (view === "landing") return "#/";
    if (view.indexOf("module-") === 0) return "#/module/" + view.slice(7);
    return "#/" + view;
  }
  function viewFromHash(hash) {
    var h = (hash || "").replace(/^#\/?/, "").replace(/\/$/, "");
    if (!h) return "landing";
    if (h.indexOf("module/") === 0) {
      var id = h.slice(7);
      return moduleById(id) ? "module-" + id : "landing";
    }
    if (h === "intro" || h === "instructions" || h === "results" || h === "reflection") return h;
    return "landing";
  }

  /* ---- state & persistence --------------------------------------- */
  var STORAGE_KEY = "ho_state_v1";
  var state = { answers: {} };
  MODULE_IDS.forEach(function (id) { state.answers[id] = null; });

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      if (data && data.answers) {
        MODULE_IDS.forEach(function (id) {
          var a = data.answers[id];
          if (a && /^[A-E]$/.test(a)) state.answers[id] = a;
        });
      }
    } catch (e) { /* storage unavailable — run in-memory */ }
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: state.answers })); }
    catch (e) { /* ignore */ }
  }
  function clearState() {
    MODULE_IDS.forEach(function (id) { state.answers[id] = null; });
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  }

  function answeredCount() {
    return MODULE_IDS.filter(function (id) { return state.answers[id]; }).length;
  }
  function firstUnansweredView() {
    for (var i = 0; i < MODULE_IDS.length; i++) {
      if (!state.answers[MODULE_IDS[i]]) return "module-" + MODULE_IDS[i];
    }
    return null;
  }

  /* ---- scoring (spec §12.2 / §12.3) ------------------------------ */
  function computeScores(answers) {
    var s = {}; C.finalOrder.forEach(function (k) { s[k] = 0; });
    MODULE_IDS.forEach(function (id) {
      var a = answers[id];
      if (!a) return;
      var contrib = C.scoring[id][a] || [];
      contrib.forEach(function (p) { s[p] += 1; });
    });
    return s;
  }

  function computeResult(answers) {
    var scores = computeScores(answers);
    var max = -1;
    C.finalOrder.forEach(function (k) { if (scores[k] > max) max = scores[k]; });
    var tied = C.finalOrder.filter(function (k) { return scores[k] === max; });
    if (tied.length === 1) return { key: tied[0], scores: scores };

    // deterministic tie-break: judgement -> consent -> survival
    for (var t = 0; t < C.tieBreak.length; t++) {
      var modKey = C.tieBreak[t];
      var ans = answers[modKey];
      if (!ans) continue;
      var mapped = C.scoring[modKey][ans] || [];
      var inter = tied.filter(function (p) { return mapped.indexOf(p) !== -1; });
      if (inter.length === 1) return { key: inter[0], scores: scores };
      if (inter.length > 1) tied = inter; // narrow, keep breaking
    }
    // final deterministic fallback by fixed profile order
    tied.sort(function (a, b) { return C.finalOrder.indexOf(a) - C.finalOrder.indexOf(b); });
    return { key: tied[0], scores: scores };
  }

  /* ---- small html helpers ---------------------------------------- */
  function paras(arr) { return arr.map(function (p) { return "<p>" + p + "</p>"; }).join(""); }
  var ARROW = '<svg class="btn__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var CHECK = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.4" opacity="0.5"/><path d="M7.5 12.4l3 3 6-6.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var CHEVRON = '<svg class="sig__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function pad2(n) { return (n < 10 ? "0" : "") + n; }

  /* ================================================================ *
   *  VIEW RENDERERS — each returns an HTML string for .view
   * ================================================================ */

  function vLanding() {
    var L = C.landing;
    return '' +
      '<section class="view hero" tabindex="-1" aria-label="Welcome">' +
        '<p class="hero__eyebrow">An Interactive Reading of <span style="color:var(--text-2)">Dawn</span></p>' +
        '<h1 class="hero__title">' +
          '<span class="ln1">' + L.title[0] + '</span>' +
          '<span class="slash">/</span>' +
          '<span class="ln2">' + L.title[1] + '</span>' +
        '</h1>' +
        '<p class="hero__sub">' + L.subtitle + '</p>' +
        '<p class="hero__hook">' + L.hook + '</p>' +
        '<p class="hero__body">' + L.body + '</p>' +
        '<div class="cta-row hero__cta">' +
          '<button class="btn btn--primary btn--lg" data-go="intro">' + L.primary + ' ' + ARROW + '</button>' +
          '<button class="btn btn--ghost btn--lg" data-modal="about">' + L.secondary + '</button>' +
        '</div>' +
        '<div class="scrollhint" aria-hidden="true"><span class="scrollhint__dot"></span>Enter the experience</div>' +
      '</section>';
  }

  function vIntro() {
    var I = C.intro;
    return '' +
      '<section class="view page" tabindex="-1">' +
        '<p class="eyebrow">The Premise</p>' +
        '<h1 class="reading__title">' + I.heading + '</h1>' +
        '<div class="reading__body dropcap">' + paras(I.body) + '</div>' +
        '<div class="divider-actions">' +
          '<button class="btn btn--ghost" data-go="landing">Back</button>' +
          '<span class="spacer"></span>' +
          '<button class="btn btn--primary" data-go="instructions">' + I.primary + ' ' + ARROW + '</button>' +
        '</div>' +
      '</section>';
  }

  function vInstructions() {
    var S = C.instructions;
    var steps = S.steps.map(function (t, i) {
      return '<li><span class="num">' + (i + 1) + '</span><span>' + t + '</span></li>';
    }).join("");
    return '' +
      '<section class="view page" tabindex="-1">' +
        '<p class="eyebrow">How It Works</p>' +
        '<h1 class="reading__title">' + S.heading + '</h1>' +
        '<div class="reading__body">' + paras(S.body) + '</div>' +
        '<ul class="steplist" style="margin-top:34px">' + steps + '</ul>' +
        '<div class="divider-actions">' +
          '<button class="btn btn--ghost" data-go="landing">' + S.secondary + '</button>' +
          '<span class="spacer"></span>' +
          '<button class="btn btn--primary" data-go="module-' + MODULE_IDS[0] + '">' + S.primary + ' ' + ARROW + '</button>' +
        '</div>' +
      '</section>';
  }

  function vModule(mod) {
    var idx = MODULE_IDS.indexOf(mod.id);
    var selected = state.answers[mod.id];
    var prevView = idx === 0 ? "instructions" : "module-" + MODULE_IDS[idx - 1];
    var nextView = idx === MODULE_IDS.length - 1 ? "results" : "module-" + MODULE_IDS[idx + 1];

    var cards = mod.choices.map(function (ch) {
      var on = selected === ch.key;
      return '' +
        '<button class="card' + (on ? ' is-selected' : '') + '" role="radio" aria-checked="' + on + '" ' +
          'data-choice="' + ch.key + '" data-module="' + mod.id + '">' +
          '<span class="card__badge" aria-hidden="true">' + ch.key + '</span>' +
          '<span class="card__text">' + ch.text + '</span>' +
          '<span class="card__check" aria-hidden="true">' + CHECK + '</span>' +
        '</button>';
    }).join("");

    var sig = "";
    if (mod.significance) {
      var tag = mod.significance.authored
        ? '<span class="sig__tag" title="Editorial note">Editorial expansion — review</span>'
        : '';
      sig = '' +
        '<div class="sig" data-sig>' +
          '<button class="sig__summary" aria-expanded="false" data-sig-toggle>' +
            'Significance in Dawn ' + CHEVRON +
          '</button>' +
          '<div class="sig__panel" data-sig-panel>' +
            '<div class="sig__inner">' + tag + paras(mod.significance.paragraphs) + '</div>' +
          '</div>' +
        '</div>';
    }

    var transition = mod.transition
      ? '<p class="transition">' + mod.transition + '</p>' : '';

    var continueDisabled = selected ? "" : ' aria-disabled="true" disabled';
    var hint = selected ? "" : '<span class="hint" data-hint>Select a response to continue</span>';

    return '' +
      '<section class="view module" tabindex="-1">' +
        '<div class="module__head">' +
          '<p class="eyebrow">Module ' + pad2(mod.n) + ' / 05</p>' +
          '<h1 class="module__title">' + mod.title + '</h1>' +
          '<p class="module__tagline">' + mod.tagline + '</p>' +
        '</div>' +
        '<div class="module__setup">' + paras(mod.setup) + '</div>' +
        '<div class="module__question">' +
          '<span class="module__qlabel">The Question</span>' +
          '<p class="module__qtext">' + mod.question + '</p>' +
        '</div>' +
        '<div class="choices" role="radiogroup" aria-label="' + mod.title + ' — choose one response">' + cards + '</div>' +
        sig +
        transition +
        '<div class="module__actions">' +
          '<button class="btn btn--ghost" data-go="' + prevView + '">Back</button>' +
          '<span class="spacer"></span>' +
          hint +
          '<button class="btn btn--primary" data-continue data-next="' + nextView + '"' + continueDisabled + '>' +
            mod.continueLabel + ' ' + ARROW +
          '</button>' +
        '</div>' +
      '</section>';
  }

  function vResults() {
    var res = computeResult(state.answers);
    var p = C.profiles[res.key];
    var R = C.results;

    var interp = p.interpretation.map(function (t, i) {
      return '<p style="--i:' + (i + 3) + '">' + t + '</p>';
    }).join("");

    var rows = p.breakdown.map(function (row) {
      return '<div class="breakdown__row"><span class="breakdown__k">' + row[0] + '</span>' +
             '<span class="breakdown__v">' + row[1] + '</span></div>';
    }).join("");

    return '' +
      '<section class="view result" tabindex="-1">' +
        '<div class="result__head">' +
          '<p class="eyebrow" style="justify-content:center">Synthesis</p>' +
          '<h1 class="result__heading">' + R.heading + '</h1>' +
          '<p class="result__intro">' + R.intro + '</p>' +
        '</div>' +
        '<div class="profile stagger">' +
          '<div class="profile__rule" style="--i:0"><span class="kicker">Your Profile</span><span class="line"></span></div>' +
          '<h2 class="profile__title" style="--i:1">' + p.name + '</h2>' +
          '<p class="profile__identity" style="--i:2">' + p.identity + '</p>' +
          '<div class="profile__interp">' + interp + '</div>' +
          '<div class="breakdown" style="--i:' + (p.interpretation.length + 3) + '">' +
            '<p class="breakdown__title">Thematic Breakdown</p>' +
            '<div class="breakdown__grid">' + rows + '</div>' +
          '</div>' +
          '<div class="reflectioncard" style="--i:' + (p.interpretation.length + 4) + '">' +
            '<p class="reflectioncard__title">A Question to Sit With</p>' +
            '<p class="reflectioncard__prompt">' + p.reflection + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="result__footer">' +
          '<p class="result__closing">' + R.footer.closing + '</p>' +
          '<p class="result__footerbody">' + R.footer.paragraph + '</p>' +
          '<div class="cta-row result__actions">' +
            '<button class="btn btn--ghost" data-modal="dmap">View My Decision Map</button>' +
            '<button class="btn btn--primary" data-go="reflection">Read the Reflection Page ' + ARROW + '</button>' +
            '<button class="btn btn--ghost" data-restart>Restart Experience</button>' +
          '</div>' +
        '</div>' +
      '</section>';
  }

  function vReflection() {
    var Rf = C.reflection;
    var reviewBtn = answeredCount() > 0
      ? '<button class="btn btn--ghost" data-modal="dmap">Review My Answers</button>' : '';
    return '' +
      '<section class="view page" tabindex="-1">' +
        '<p class="eyebrow">Reflection</p>' +
        '<h1 class="reading__title">' + Rf.heading + '</h1>' +
        '<div class="reading__body dropcap">' + paras(Rf.body) + '</div>' +
        '<div class="panel" style="margin-top:34px">' +
          '<p class="breakdown__title">' + Rf.objectiveHeading + '</p>' +
          '<p style="color:var(--text-2);margin:0">' + Rf.objective + '</p>' +
        '</div>' +
        '<div class="divider-actions">' +
          '<button class="btn btn--ghost" data-restart>Restart Experience</button>' +
          reviewBtn +
          '<span class="spacer"></span>' +
          '<button class="btn btn--primary" data-go="landing">Return Home ' + ARROW + '</button>' +
        '</div>' +
      '</section>';
  }

  /* ================================================================ *
   *  MODALS
   * ================================================================ */
  var lastFocused = null;

  function openModal(html, wire) {
    lastFocused = document.activeElement;
    modalPanel.innerHTML = html;
    modalRoot.classList.add("is-open");
    modalRoot.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (typeof wire === "function") wire(modalPanel);
    // focus first focusable / panel
    var focusable = modalPanel.querySelector("button, [href], input, [tabindex]");
    (focusable || modalPanel).focus();
  }
  function closeModal() {
    modalRoot.classList.remove("is-open");
    modalRoot.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    modalPanel.innerHTML = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function closeIcon() {
    return '<button class="modal__close" data-close aria-label="Close">' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
      '<path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>';
  }

  function modalAbout() {
    var html = '' +
      '<div class="modal__head">' +
        '<h2 class="modal__title">About <em>Dawn</em></h2>' + closeIcon() +
      '</div>' +
      '<div class="modal__body">' + paras(C.intro.body) + '</div>' +
      '<div class="cta-row" style="margin-top:24px">' +
        '<button class="btn btn--primary" data-go="intro" data-close>Begin Experience ' + ARROW + '</button>' +
        '<button class="btn btn--ghost" data-close>Close</button>' +
      '</div>';
    openModal(html);
  }

  function modalDecisionMap() {
    var res = computeResult(state.answers);
    var rows = MODULES.map(function (mod) {
      var a = state.answers[mod.id];
      var choice = null;
      for (var i = 0; i < mod.choices.length; i++) if (mod.choices[i].key === a) choice = mod.choices[i];
      var tags = "";
      if (a) {
        tags = (C.scoring[mod.id][a] || []).map(function (k) {
          return '<span class="dmap__tag">' + C.profiles[k].name + '</span>';
        }).join("");
      }
      return '' +
        '<div class="dmap__row">' +
          '<span class="dmap__badge">' + (a || "—") + '</span>' +
          '<div>' +
            '<p class="dmap__mod">Module ' + pad2(mod.n) + ' · ' + mod.title + '</p>' +
            '<p class="dmap__choice">' + (choice ? choice.text : "<em>Not yet answered</em>") + '</p>' +
            (tags ? '<div class="dmap__tags">' + tags + '</div>' : '') +
          '</div>' +
        '</div>';
    }).join("");

    var maxScore = 1;
    C.finalOrder.forEach(function (k) { if (res.scores[k] > maxScore) maxScore = res.scores[k]; });
    var bars = C.finalOrder.map(function (k) {
      var top = k === res.key;
      var pct = Math.round((res.scores[k] / maxScore) * 100);
      return '' +
        '<div class="bar">' +
          '<span class="bar__name' + (top ? ' is-top' : '') + '">' + C.profiles[k].name + '</span>' +
          '<span class="bar__track"><span class="bar__fill' + (top ? ' is-top' : '') + '" data-pct="' + pct + '"></span></span>' +
          '<span class="bar__num">' + res.scores[k] + '</span>' +
        '</div>';
    }).join("");

    var html = '' +
      '<div class="modal__head">' +
        '<h2 class="modal__title">Your Decision Map</h2>' + closeIcon() +
      '</div>' +
      '<div class="modal__body">' +
        '<div class="dmap">' + rows + '</div>' +
        '<div class="dmap__scores">' +
          '<p class="dmap__scoretitle">Profile Weighting</p>' + bars +
        '</div>' +
      '</div>';

    openModal(html, function (panel) {
      // animate bars after paint
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          panel.querySelectorAll(".bar__fill").forEach(function (el) {
            el.style.width = el.getAttribute("data-pct") + "%";
          });
        });
      });
    });
  }

  function modalRestartConfirm() {
    var html = '' +
      '<div class="modal__head">' +
        '<h2 class="modal__title">Restart the experience?</h2>' + closeIcon() +
      '</div>' +
      '<div class="modal__body">' +
        '<p>This will clear your five responses and return you to the beginning. ' +
        'Your interpretive profile will be reset.</p>' +
        '<div class="cta-row" style="margin-top:24px">' +
          '<button class="btn btn--primary" data-do-restart>Restart ' + ARROW + '</button>' +
          '<button class="btn btn--ghost" data-close>Keep My Answers</button>' +
        '</div>' +
      '</div>';
    openModal(html, function (panel) {
      panel.querySelector("[data-do-restart]").addEventListener("click", function () {
        clearState();
        closeModal();
        go("landing");
      });
    });
  }

  /* ================================================================ *
   *  ROUTER & RENDER
   * ================================================================ */
  function go(view) {
    var h = hashFor(view);
    if (location.hash === h) { onRoute(); }   // re-render if same hash
    else { location.hash = h; }               // triggers hashchange -> onRoute
  }

  function resolveView() {
    var view = viewFromHash(location.hash);
    if (view === "results" && answeredCount() < 5) {
      var redirect = firstUnansweredView() || "instructions";
      history.replaceState(null, "", hashFor(redirect));
      return redirect;
    }
    return view;
  }

  function render(view) {
    var html, isHero = false;
    if (view === "landing") { html = vLanding(); isHero = true; }
    else if (view === "intro") html = vIntro();
    else if (view === "instructions") html = vInstructions();
    else if (view.indexOf("module-") === 0) html = vModule(moduleById(view.slice(7)));
    else if (view === "results") html = vResults();
    else if (view === "reflection") html = vReflection();
    else { html = vLanding(); isHero = true; }

    app.className = "stage" + (isHero ? " is-hero" : "");
    app.innerHTML = html;

    wireView();
    updateChrome(view);
    window.scrollTo(0, 0);

    // move focus to the view container for screen-reader continuity
    var v = app.querySelector(".view");
    if (v) { try { v.focus({ preventScroll: true }); } catch (e) { v.focus(); } }
  }

  function onRoute() { render(resolveView()); }

  /* ---- chrome: top bar + progress -------------------------------- */
  function updateChrome(view) {
    var answered = answeredCount();
    var pct = (answered / MODULE_IDS.length) * 100;
    var label = "";
    var isModule = view.indexOf("module-") === 0;

    if (isModule) {
      var mod = moduleById(view.slice(7));
      pct = Math.max(pct, ((mod.n - 1) / MODULE_IDS.length) * 100);
      label = 'Module <b>' + pad2(mod.n) + '</b> of 05';
    } else if (view === "results") {
      pct = 100; label = "Interpretive Result";
    } else if (view === "reflection") {
      pct = answered === MODULE_IDS.length ? 100 : pct; label = "Reflection";
    }

    progressLine.style.width = pct + "%";

    if (label) { stepLabel.hidden = false; stepLabel.innerHTML = label; }
    else { stepLabel.hidden = true; }

    var showRestart = view !== "landing" && answered > 0;
    restartBtn.hidden = !showRestart;

    // hide top bar on the landing hero for a cleaner opening
    topbar.classList.toggle("is-hidden", view === "landing");
  }

  /* ================================================================ *
   *  WIRING (event delegation per render)
   * ================================================================ */
  function wireView() {
    // navigation buttons
    app.querySelectorAll("[data-go]").forEach(function (btn) {
      btn.addEventListener("click", function () { go(btn.getAttribute("data-go")); });
    });
    // open modals
    app.querySelectorAll("[data-modal]").forEach(function (btn) {
      btn.addEventListener("click", function () { openNamedModal(btn.getAttribute("data-modal")); });
    });
    // restart
    app.querySelectorAll("[data-restart]").forEach(function (btn) {
      btn.addEventListener("click", modalRestartConfirm);
    });
    // answer cards
    app.querySelectorAll("[data-choice]").forEach(function (card) {
      card.addEventListener("click", function () {
        selectChoice(card.getAttribute("data-module"), card.getAttribute("data-choice"));
      });
    });
    // continue (gated)
    app.querySelectorAll("[data-continue]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (btn.hasAttribute("disabled")) return;
        go(btn.getAttribute("data-next"));
      });
    });
    // significance expandable
    var sig = app.querySelector("[data-sig]");
    if (sig) wireSignificance(sig);
  }

  function openNamedModal(name) {
    if (name === "about") modalAbout();
    else if (name === "dmap") modalDecisionMap();
  }

  function selectChoice(moduleId, key) {
    state.answers[moduleId] = key;
    saveState();

    // update card states in place (no full re-render — keeps it smooth)
    var group = app.querySelector(".choices");
    if (group) {
      group.querySelectorAll(".card").forEach(function (c) {
        var on = c.getAttribute("data-choice") === key;
        c.classList.toggle("is-selected", on);
        c.setAttribute("aria-checked", on ? "true" : "false");
      });
    }
    // enable continue + drop hint
    var cont = app.querySelector("[data-continue]");
    if (cont) { cont.removeAttribute("disabled"); cont.removeAttribute("aria-disabled"); }
    var hint = app.querySelector("[data-hint]");
    if (hint) hint.parentNode.removeChild(hint);

    // refresh progress immediately
    updateChrome(viewFromHash(location.hash));
  }

  function wireSignificance(sig) {
    var summary = sig.querySelector("[data-sig-toggle]");
    var panel = sig.querySelector("[data-sig-panel]");
    summary.addEventListener("click", function () {
      var open = sig.classList.toggle("is-open");
      summary.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        panel.style.height = "auto";
        var h = panel.scrollHeight;
        panel.style.height = "0px";
        // force reflow then animate to measured height
        void panel.offsetHeight;
        panel.style.height = h + "px";
        panel.style.opacity = "1";
        var done = function () {
          panel.style.height = "auto";
          panel.removeEventListener("transitionend", done);
        };
        panel.addEventListener("transitionend", done);
      } else {
        panel.style.height = panel.scrollHeight + "px";
        void panel.offsetHeight;
        panel.style.height = "0px";
        panel.style.opacity = "0";
      }
    });
  }

  /* ================================================================ *
   *  GLOBAL LISTENERS
   * ================================================================ */
  brandBtn.addEventListener("click", function () { go("landing"); });
  restartBtn.addEventListener("click", modalRestartConfirm);

  modalBackdrop.addEventListener("click", closeModal);
  modalRoot.addEventListener("click", function (e) {
    var t = e.target;
    // close on any [data-close]; if it's also [data-go], navigate after closing
    var closer = t.closest ? t.closest("[data-close]") : null;
    if (closer) {
      var goView = closer.getAttribute("data-go");
      closeModal();
      if (goView) go(goView);
    }
  });

  document.addEventListener("keydown", function (e) {
    // Esc closes modal
    if (e.key === "Escape" && modalRoot.classList.contains("is-open")) {
      closeModal(); return;
    }
    if (modalRoot.classList.contains("is-open")) return;

    // letter / number selection inside a module
    var view = viewFromHash(location.hash);
    if (view.indexOf("module-") !== 0) return;
    var mod = moduleById(view.slice(7));
    var key = null;
    if (/^[a-eA-E]$/.test(e.key)) key = e.key.toUpperCase();
    else if (/^[1-5]$/.test(e.key)) key = "ABCDE".charAt(parseInt(e.key, 10) - 1);
    if (key) {
      var exists = mod.choices.some(function (c) { return c.key === key; });
      if (exists) { e.preventDefault(); selectChoice(mod.id, key); }
    }
  });

  // cursor spotlight (skipped for reduced-motion / touch)
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    var gx = 0, gy = 0, ticking = false;
    window.addEventListener("pointermove", function (e) {
      gx = e.clientX; gy = e.clientY;
      document.body.classList.add("has-pointer");
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(function () {
          cursorGlow.style.transform = "translate(" + gx + "px," + gy + "px)";
          ticking = false;
        });
      }
    }, { passive: true });
    window.addEventListener("pointerleave", function () {
      document.body.classList.remove("has-pointer");
    });
  }

  window.addEventListener("hashchange", onRoute);

  /* ---- boot ------------------------------------------------------- */
  loadState();
  onRoute();

  // expose a tiny test hook for verification (no UI impact)
  window.__HO__ = { computeScores: computeScores, computeResult: computeResult };
})();
