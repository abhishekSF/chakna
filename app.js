(function () {
  const $ = (id) => document.getElementById(id);
  const state = {
    type: null,
    origin: "all",
    brand: null,
    serve: null,
    diet: "all",
    mode: "classic"
  };

  function show(id) {
    document.querySelectorAll(".screen").forEach((el) => el.classList.remove("on"));
    $(id).classList.add("on");
    window.scrollTo(0, 0);
  }

  function originLabel(o) {
    if (o === "imfl") return "IMFL";
    if (o === "indian") return "Indian";
    return "Imported";
  }

  $("enter").onclick = () => show("home");
  $("back-home").onclick = () => show("home");
  $("back-brands").onclick = () => renderBrands();
  $("back-serve").onclick = () => renderServe();
  $("back-diet").onclick = () => renderDiet();

  $("types").innerHTML = CHAKNA.types
    .map(
      (t) =>
        `<button class="type-tile" data-type="${t.id}"><strong>${t.name}</strong><small>${t.line}</small></button>`
    )
    .join("");

  $("types").onclick = (e) => {
    const btn = e.target.closest("[data-type]");
    if (!btn) return;
    state.type = btn.dataset.type;
    state.brand = null;
    state.serve = null;
    renderBrands();
  };

  function renderBrands() {
    const list = CHAKNA.brands.filter((b) => {
      if (b.type !== state.type) return false;
      if (state.origin !== "all" && b.origin !== state.origin) return false;
      const q = $("q").value.trim().toLowerCase();
      if (q && !b.name.toLowerCase().includes(q)) return false;
      return true;
    });
    const typeName = CHAKNA.types.find((t) => t.id === state.type).name;
    $("brands-title").textContent = typeName;
    $("brand-list").innerHTML = list
      .map(
        (b) =>
          `<button class="brand-row" data-brand="${b.id}"><span><b>${b.name}</b><small>${b.line}</small></span><span class="tag">${originLabel(b.origin)}</span></button>`
      )
      .join("");
    if (!list.length) $("brand-list").innerHTML = `<p class="empty">Nothing in this filter yet.</p>`;
    show("brands");
  }

  $("q").oninput = renderBrands;
  $("origins").onclick = (e) => {
    const btn = e.target.closest("[data-origin]");
    if (!btn) return;
    state.origin = btn.dataset.origin;
    [...$("origins").children].forEach((c) => c.classList.toggle("on", c === btn));
    renderBrands();
  };

  $("brand-list").onclick = (e) => {
    const btn = e.target.closest("[data-brand]");
    if (!btn) return;
    state.brand = CHAKNA.brands.find((b) => b.id === btn.dataset.brand);
    renderServe();
  };

  function renderServe() {
    $("serve-crumb").textContent = state.brand.name;
    $("serve-list").innerHTML = CHAKNA.serves[state.type]
      .map((s) => `<button class="serve-btn" data-serve="${s.id}">${s.name}</button>`)
      .join("");
    show("serve");
  }

  $("serve-list").onclick = (e) => {
    const btn = e.target.closest("[data-serve]");
    if (!btn) return;
    state.serve = btn.dataset.serve;
    renderDiet();
  };

  function renderDiet() {
    $("diet-crumb").textContent = state.brand.name;
    show("diet");
  }

  $("diet-list").onclick = (e) => {
    const btn = e.target.closest("[data-diet]");
    if (!btn) return;
    state.diet = btn.dataset.diet;
    renderResults();
  };

  $("modes").onclick = (e) => {
    const btn = e.target.closest("[data-mode]");
    if (!btn) return;
    state.mode = btn.dataset.mode;
    [...$("modes").children].forEach((c) => c.classList.toggle("on", c === btn));
    renderResults();
  };

  function renderResults() {
    $("result-title").textContent = state.brand.name;
    const serveName = CHAKNA.serves[state.type].find((s) => s.id === state.serve).name;
    $("result-crumb").textContent = serveName + " · " + (state.diet === "all" ? "all plates" : state.diet);

    const matched = CHAKNA.snacks.filter((s) => CHAKNA.matchSnack(s, state.type, state.serve));
    const sections = [
      { id: "light", title: "Light snacks" },
      { id: "veg", title: "Veg starters" },
      { id: "nonveg", title: "Non-veg starters" }
    ];

    $("results-body").innerHTML = sections
      .filter((sec) => state.diet === "all" || state.diet === sec.id)
      .map((sec) => {
        let items = matched.filter((s) => s.cat === sec.id);
        if (state.mode === "lighter") {
          const light = items.filter((s) => s.mode === "lighter");
          items = light.length ? light : items.filter((s) => s.mode === "classic" && s.cat === "light");
        } else {
          items = items.filter((s) => s.mode === "classic" || (s.cat === "light" && s.id === "makhana"));
        }
        if (!items.length) return "";
        return `<section class="block"><h3>${sec.title}</h3>${items
          .map(
            (s) =>
              `<article class="snack"><div class="row"><strong>${s.name}</strong><span class="meta">${s.effort}</span></div><p>${s.why}</p></article>`
          )
          .join("")}</section>`;
      })
      .join("");

    if (!$("results-body").innerHTML) {
      $("results-body").innerHTML = `<p class="empty">No plates in this filter. Try Show all.</p>`;
    }
    show("results");
  }

  const svgs = [
    '<svg viewBox="0 0 64 64"><ellipse cx="32" cy="36" rx="18" ry="10"/><path d="M18 34c6-8 22-8 28 0"/></svg>',
    '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="14"/><circle cx="32" cy="32" r="4"/></svg>',
    '<svg viewBox="0 0 64 64"><path d="M20 48c8-22 16-22 24 0"/><path d="M24 30c4-10 12-10 16 0"/></svg>',
    '<svg viewBox="0 0 64 64"><path d="M18 40c10 10 18 10 28 0"/><path d="M22 36c8 8 14 8 20 0"/></svg>',
    '<svg viewBox="0 0 64 64"><path d="M32 12c-6 14-14 28 0 40 14-12 6-26 0-40z"/></svg>'
  ];
  const field = document.querySelector(".snack-field");
  for (let i = 0; i < 16; i++) {
    const wrap = document.createElement("div");
    wrap.innerHTML = svgs[i % svgs.length];
    const svg = wrap.firstChild;
    svg.style.left = (i * 19) % 92 + "%";
    svg.style.top = (i * 27) % 88 + "%";
    field.appendChild(svg);
  }
})();
