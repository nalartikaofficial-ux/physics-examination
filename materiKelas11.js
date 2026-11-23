// =========================================================================
// MATERI ESENSIAL & 11 VIRTUAL LAB MANDIRI KELAS 11 (SEMESTER 1)
// SMA MUHAMMADIYAH 18 JAKARTA — GURU: FADHILLAH UMAR, S.Pd.
// =========================================================================

window.MATERI_KELAS_11 = [
  {
    id: "xi-vektor",
    grade: "11",
    title: "Vektor & Penguraian Analitis",
    desc: "Vektor satuan, penguraian komponen sumbu X-Y, dan analisis resultan vektor gaya.",
    token: "VEKTOR11",
    ytId: "fW4m8_1r4fA",
    subLabs: [
      { id: "vector_2d", name: "1. Analisis Resultan Vektor 2D" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <h4 class="font-extrabold text-blue-900 text-sm mb-1.5">1. Penguraian Komponen Vektor Bidang (2D)</h4>
          <p class="text-xs text-slate-700 mb-1.5">Setiap vektor gaya $\\vec{F}$ yang membentuk sudut $\\theta$ terhadap sumbu-$x$ positif diuraikan menjadi dua komponen saling tegak lurus:</p>
          <div class="font-bold text-blue-900 text-sm">$$F_x = F\\cos\\theta \\quad | \\quad F_y = F\\sin\\theta$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1.5">2. Resultan & Arah Vektor Analitis</h4>
          <div class="font-bold text-emerald-900 text-sm mb-1">$$|\\vec{R}| = \\sqrt{(\\sum F_x)^2 + (\\sum F_y)^2} \\quad | \\quad \\tan\\alpha = \\frac{\\sum F_y}{\\sum F_x}$$</div>
          <p class="text-xs text-slate-700">Dalam notasi vektor satuan tiga dimensi: $\\vec{A} = A_x\\hat{i} + A_y\\hat{j} + A_z\\hat{k}$.</p>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Metode penguraian komponen sumbu X dan Y sangat akurat untuk menjumlahkan dua atau lebih vektor gaya sekaligus.</li>
        <li>Dua vektor yang saling tegak lurus ($90^\\circ$) menghasilkan besar resultan $|\\vec{R}| = \\sqrt{F_1^2 + F_2^2}$.</li>
      </ul>`,
    quickQuiz: {
      q: "Dua vektor gaya masing-masing $6\\text{ N}$ dan $8\\text{ N}$ saling mengapit sudut $90^\\circ$. Besar resultan kedua vektor adalah...",
      opts: ["$10\\text{ N}$", "$14\\text{ N}$", "$48\\text{ N}$"],
      ans: 0
    },
    questions: [
      { id: 1101, text: "Dua vektor gaya bekerja pada satu titik: $\\vec{F}_1 = 6\\hat{i} + 8\\hat{j}\\text{ N}$ dan $\\vec{F}_2 = 2\\hat{i} - 2\\hat{j}\\text{ N}$. Besar resultan $|\\vec{F}_1 + \\vec{F}_2|$ adalah...", options: ["$8\\text{ N}$", "$10\\text{ N}$", "$12\\text{ N}$", "$14\\text{ N}$"], correct: 1, discussion: "$\\vec{R} = 8\\hat{i} + 6\\hat{j}\\text{ N}$, sehingga $|\\vec{R}| = \\sqrt{8^2 + 6^2} = 10\\text{ N}$." }
    ]
  },
  {
    id: "xi-kinematika",
    grade: "11",
    title: "Kinematika Gerak (1D & 2D)",
    desc: "GLB, GLBB, gerak vertikal atas & bawah (GVA/GVB), gerak jatuh bebas (GJB), dan gerak parabola.",
    token: "GERAK11",
    ytId: "M8x1-2M8p_M",
    subLabs: [
      { id: "glb_lab", name: "1. GLB" },
      { id: "glbb_lab", name: "2. GLBB" },
      { id: "gva_gvb_lab", name: "3. Gerak Vertikal (GVA/GVB)" },
      { id: "gjb_lab", name: "4. Gerak Jatuh Bebas (GJB)" },
      { id: "projectile_lab", name: "5. Gerak Parabola" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <h4 class="font-extrabold text-blue-900 text-sm mb-1.5">1. Gerak Lurus Beraturan (GLB) & Berubah Beraturan (GLBB)</h4>
          <ul class="list-disc list-inside text-xs space-y-1 text-slate-700">
            <li><strong>GLB ($a = 0$, $v$ konstan):</strong> $s = v \\cdot t$</li>
            <li><strong>GLBB ($a$ konstan):</strong> $v_t = v_0 + at$  |  $s = v_0 t + \\frac{1}{2}at^2$  |  $v_t^2 = v_0^2 + 2as$</li>
          </ul>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1.5">2. Gerak Vertikal & Gerak Jatuh Bebas ($g = 10\\text{ m/s}^2$)</h4>
          <ul class="list-disc list-inside text-xs space-y-1 text-slate-700">
            <li><strong>Gerak Jatuh Bebas (GJB, $v_0 = 0$):</strong> $h = \\frac{1}{2}gt^2$  |  $v_t = \\sqrt{2gh}$</li>
            <li><strong>Gerak Vertikal Atas (GVA):</strong> Tinggi puncak $h_{\\max} = \\frac{v_0^2}{2g}$ saat $v_y = 0$, waktu puncak $t_{\\text{naik}} = \\frac{v_0}{g}$.</li>
          </ul>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
          <h4 class="font-extrabold text-amber-900 text-sm mb-1">3. Gerak Parabola (Perpaduan GLB Sumbu X & GLBB Sumbu Y)</h4>
          <div class="font-bold text-amber-900 text-xs">$$y_{\\max} = \\frac{v_0^2\\sin^2\\theta}{2g} \\quad | \\quad x_{\\max} = \\frac{v_0^2\\sin 2\\theta}{g}$$</div>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Pada gerak jatuh bebas tanpa hambatan udara, waktu jatuh benda hanya ditentukan oleh ketinggian awal dan gravitasi.</li>
        <li>Pada gerak parabola, kecepatan horizontal $v_x = v_0\\cos\\theta$ selalu konstan, sedangkan sudut $\\theta = 45^\\circ$ menghasilkan jarak terjauh.</li>
      </ul>`,
    quickQuiz: {
      q: "Peluru ditembakkan dengan kelajuan awal $20\\text{ m/s}$ pada sudut elevasi $45^\\circ$ ($g = 10\\text{ m/s}^2$). Jarak mendatar terjauh peluru adalah...",
      opts: ["$20\\text{ m}$", "$40\\text{ m}$", "$80\\text{ m}$"],
      ans: 1
    },
    questions: [
      { id: 1102, text: "Sebuah batu dilempar vertikal ke atas dengan kelajuan awal $20\\text{ m/s}$ ($g = 10\\text{ m/s}^2$). Ketinggian maksimum yang dicapai batu adalah...", options: ["$10\\text{ m}$", "$20\\text{ m}$", "$40\\text{ m}$", "$200\\text{ m}$"], correct: 1, discussion: "$h_{\\max} = \\frac{v_0^2}{2g} = \\frac{400}{20} = 20\\text{ meter}$." }
    ]
  },
  {
    id: "xi-dinamika",
    grade: "11",
    title: "Dinamika Gerak, Momentum & Rotasi",
    desc: "Hukum Newton & gaya gesek, momentum, impuls & tumbukan, serta dinamika gerak rotasi (torsi & inersia).",
    token: "GAYA11",
    ytId: "kKKM8Y-u7ds",
    subLabs: [
      { id: "newton_lab", name: "1. Hukum Newton & Gesekan" },
      { id: "momentum_lab", name: "2. Momentum, Impuls & Tumbukan" },
      { id: "rotation_lab", name: "3. Gerak Rotasi & Torsi" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <h4 class="font-extrabold text-blue-900 text-sm mb-1.5">1. Hukum II Newton & Gaya Gesek Kinetis</h4>
          <div class="font-bold text-blue-900 text-xs">$$\\sum F = m \\cdot a \\quad | \\quad f_k = \\mu_k \\cdot N$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1.5">2. Momentum, Impuls & Tumbukan</h4>
          <p class="text-xs text-slate-700 mb-1">Impuls ($I = F\\Delta t$) sama dengan perubahan momentum ($\\Delta p$). Pada tumbukan berlaku kekekalan momentum:</p>
          <div class="font-bold text-emerald-900 text-xs">$$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2' \\quad | \\quad e = -\\frac{v_2' - v_1'}{v_2 - v_1}$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
          <h4 class="font-extrabold text-amber-900 text-sm mb-1.5">3. Dinamika Rotasi (Momen Gaya & Momen Inersia)</h4>
          <div class="font-bold text-amber-900 text-xs">$$\\tau = r \\cdot F \\sin\\theta \\quad | \\quad \\sum \\tau = I \\cdot \\alpha$$</div>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Tumbukan lenting sempurna memiliki koefisien restitusi $e = 1$, sedangkan tumbukan tidak lenting sama sekali memiliki $e = 0$ (benda menyatu setelah bertumbukan).</li>
        <li>Momen gaya (torsi) bernilai maksimum ketika arah gaya tegak lurus lengan gaya ($\\theta = 90^\\circ$).</li>
      </ul>`,
    quickQuiz: {
      q: "Kunci inggris sepanjang $0{,}25\\text{ m}$ ditarik tegak lurus dengan gaya $40\\text{ N}$. Besar momen gaya (torsi) yang bekerja adalah...",
      opts: ["$5\\text{ N}\\cdot\\text{m}$", "$10\\text{ N}\\cdot\\text{m}$", "$160\\text{ N}\\cdot\\text{m}$"],
      ans: 1
    },
    questions: [
      { id: 1103, text: "Sebuah balok $4\\text{ kg}$ ditarik gaya mendatar $20\\text{ N}$ di atas lantai kasar ($\\mu_k = 0{,}25$, $g = 10\\text{ m/s}^2$). Percepatan balok adalah...", options: ["$1{,}5\\text{ m/s}^2$", "$2{,}5\\text{ m/s}^2$", "$3{,}0\\text{ m/s}^2$", "$4{,}0\\text{ m/s}^2$"], correct: 1, discussion: "$f_k = 0{,}25 \\times 40 = 10\\text{ N}$. $a = (20 - 10)/4 = 2{,}5\\text{ m/s}^2$." }
    ]
  },
  {
    id: "xi-fluida",
    grade: "11",
    title: "Fluida Statis & Fluida Dinamis",
    desc: "Tekanan hidrostatis, hukum Pascal & Archimedes, asas kontinuitas, serta persamaan Bernoulli.",
    token: "FLUIDA11",
    ytId: "b5SqYuWT4-4",
    subLabs: [
      { id: "fluid_static", name: "1. Fluida Statis (Hidrostatis)" },
      { id: "fluid_dynamic", name: "2. Fluida Dinamis (Kontinuitas & Venturi)" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <h4 class="font-extrabold text-blue-900 text-sm mb-1.5">1. Fluida Statis (Hidrostatis, Pascal & Archimedes)</h4>
          <div class="font-bold text-blue-900 text-xs">$$P_h = \\rho \\cdot g \\cdot h \\quad | \\quad \\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\quad | \\quad F_A = \\rho_f \\cdot g \\cdot V_{\\text{tercelup}}$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1.5">2. Fluida Dinamis (Kontinuitas & Hukum Bernoulli)</h4>
          <div class="font-bold text-emerald-900 text-xs">$$Q = A_1 v_1 = A_2 v_2 \\quad | \\quad P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho gh_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho gh_2$$</div>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Tekanan hidrostatis hanya bergantung pada massa jenis fluida, percepatan gravitasi, dan kedalaman vertikal dari permukaan.</li>
        <li>Pada pipa mendatar yang menyempit ($A_2 < A_1$), kelajuan fluida meningkat ($v_2 > v_1$) sehingga tekanan fluidanya menurun ($P_2 < P_1$).</li>
      </ul>`,
    quickQuiz: {
      q: "Air mengalir dalam pipa berpenampang $10\\text{ cm}^2$ dengan kelajuan $2\\text{ m/s}$ menuju bagian pipa menyempit seluas $4\\text{ cm}^2$. Kelajuan air di bagian sempit adalah...",
      opts: ["$0{,}8\\text{ m/s}$", "$5\\text{ m/s}$", "$8\\text{ m/s}$"],
      ans: 1
    },
    questions: [
      { id: 1104, text: "Tekanan hidrostatis pada kedalaman $2\\text{ m}$ di bawah permukaan air ($\\rho = 1000\\text{ kg/m}^3, g = 10\\text{ m/s}^2$) adalah...", options: ["$10.000\\text{ Pa}$", "$20.000\\text{ Pa}$", "$30.000\\text{ Pa}$", "$40.000\\text{ Pa}$"], correct: 1, discussion: "$P_h = \\rho g h = 1000 \\times 10 \\times 2 = 20.000\\text{ Pa}$." }
    ]
  }
];

// =========================================================================
// REGISTRASI 11 MESIN GRAFIS VIRTUAL LAB MANDIRI KELAS 11
// =========================================================================
window.VLAB_ENGINES = window.VLAB_ENGINES || {};

// 1. ANALISIS RESULTAN VEKTOR 2D
window.VLAB_ENGINES['vector_2d'] = {
  init(st, dom) {
    st.p1 = 6; st.p2 = 8; st.p3 = 60;
    dom.titleEl.innerText = "Virtual Lab: Analisis Resultan & Penguraian Vektor 2D";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Vektor Gaya (F₁ Horizontal, F₂ Sudut θ)</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Gaya F₁</span><span id="vl-v1">6 N</span></div>
      <input type="range" min="1" max="15" value="6" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' N'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Gaya F₂</span><span id="vl-v2">8 N</span></div>
      <input type="range" min="1" max="15" value="8" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' N'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Sudut Apit θ</span><span id="vl-v3">60°</span></div>
      <input type="range" min="0" max="90" step="5" value="60" class="w-full accent-amber-600" oninput="vlabState.p3=+this.value; document.getElementById('vl-v3').innerText=this.value+'°'; drawVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">F₁ (N)</th><th class="p-2.5">F₂ (N)</th><th class="p-2.5">Sudut θ</th><th class="p-2.5">Rx (N)</th><th class="p-2.5">Ry (N)</th><th class="p-2.5">Resultan |R| (N)</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const ox = 180, oy = 270, scale = 13, rad = st.p3 * Math.PI / 180;
    const f1x = st.p1, f2x = st.p2 * Math.cos(rad), f2y = st.p2 * Math.sin(rad);
    const rx = f1x + f2x, ry = f2y, rMag = Math.sqrt(rx * rx + ry * ry);
    const angleRes = (Math.atan2(ry, rx) * 180 / Math.PI).toFixed(1);

    // Sumbu Koordinat
    ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(140, oy); ctx.lineTo(540, oy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ox, 60); ctx.lineTo(ox, 310); ctx.stroke();

    // Vektor F1 (Biru)
    ctx.strokeStyle = '#1e40af'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + f1x * scale, oy); ctx.stroke();

    // Vektor F2 (Hijau)
    ctx.strokeStyle = '#059669'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + f2x * scale, oy - f2y * scale); ctx.stroke();

    // Garis Bantu Jajar Genjang
    ctx.strokeStyle = '#cbd5e1'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(ox + f1x * scale, oy); ctx.lineTo(ox + rx * scale, oy - ry * scale); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ox + f2x * scale, oy - f2y * scale); ctx.lineTo(ox + rx * scale, oy - ry * scale); ctx.stroke();

    // Resultan R (Emas/Oranye)
    ctx.strokeStyle = '#d97706'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + rx * scale, oy - ry * scale); ctx.stroke();
    ctx.setLineDash([]);

    dom.hudEl.innerHTML = `<div>Rx = <b>${rx.toFixed(2)} N</b> | Ry = <b>${ry.toFixed(2)} N</b></div><div>|R| = <b class="text-amber-700">${rMag.toFixed(2)} N</b> (Arah ${angleRes}°)</div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Uraian Komponen</div><p>F₂x = ${f2x.toFixed(2)} N, F₂y = ${f2y.toFixed(2)} N<br>Resultan |R| = <b>${rMag.toFixed(2)} N</b><br>Sudut Arah α = <b>${angleRes}°</b></p>`;
  },
  record(st, idx) {
    const rad = st.p3 * Math.PI / 180, rx = st.p1 + st.p2 * Math.cos(rad), ry = st.p2 * Math.sin(rad);
    return [idx, st.p1, st.p2, st.p3 + '°', rx.toFixed(2), ry.toFixed(2), Math.sqrt(rx * rx + ry * ry).toFixed(2)];
  }
};

// 2A. GLB
window.VLAB_ENGINES['glb_lab'] = {
  init(st, dom) {
    st.p1 = 5;
    dom.titleEl.innerText = "Virtual Lab: Gerak Lurus Beraturan (GLB — Kecepatan Konstan)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Parameter GLB (a = 0)</h4>
      <div class="flex justify-between text-xs font-bold"><span>Kecepatan (v)</span><span id="vl-v1">5 m/s</span></div>
      <input type="range" min="1" max="15" value="5" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' m/s'; resetVLab();">`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Kecepatan v (m/s)</th><th class="p-2.5">Waktu t (s)</th><th class="p-2.5">Jarak s = v·t (m)</th></tr>`;
  },
  step(st, dt) {
    st.t += dt;
    if (st.p1 * st.t >= 60) st.playing = false;
  },
  draw(ctx, W, H, st, dom) {
    const s = Math.min(60, st.p1 * st.t);
    ctx.fillStyle = '#cbd5e1'; ctx.fillRect(0, 270, W, 90);
    // Mistar lintasan
    for (let m = 0; m <= 60; m += 10) {
      const mx = 60 + (m / 60) * (W - 140);
      ctx.fillStyle = '#475569'; ctx.font = '10px JetBrains Mono'; ctx.fillText(m + 'm', mx, 290);
    }
    const bx = 60 + (s / 60) * (W - 140);
    ctx.fillStyle = '#1e40af'; ctx.fillRect(bx - 25, 225, 50, 45);
    dom.hudEl.innerHTML = `<div>t = <b>${st.t.toFixed(2)} s</b> | v = <b>${st.p1} m/s</b></div><div>Jarak s = <b class="text-blue-800">${s.toFixed(2)} m</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Analisis GLB</div><p>Kecepatan tetap <b>${st.p1} m/s</b>.<br>Jarak tempuh s = v · t = <b>${s.toFixed(2)} m</b></p>`;
  },
  record(st, idx) {
    const s = Math.min(60, st.p1 * st.t);
    return [idx, st.p1, st.t.toFixed(2), s.toFixed(2)];
  }
};

// 2B. GLBB
window.VLAB_ENGINES['glbb_lab'] = {
  init(st, dom) {
    st.p1 = 2; st.p2 = 4;
    dom.titleEl.innerText = "Virtual Lab: Gerak Lurus Berubah Beraturan (GLBB)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Parameter GLBB</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Kecepatan Awal (v₀)</span><span id="vl-v1">2 m/s</span></div>
      <input type="range" min="0" max="10" value="2" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' m/s'; resetVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Percepatan (a)</span><span id="vl-v2">4 m/s²</span></div>
      <input type="range" min="1" max="8" value="4" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' m/s²'; resetVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Waktu t (s)</th><th class="p-2.5">Kecepatan vₜ (m/s)</th><th class="p-2.5">Jarak s (m)</th></tr>`;
  },
  step(st, dt) {
    st.t += dt;
    const s = st.p1 * st.t + 0.5 * st.p2 * st.t * st.t;
    if (s >= 80) st.playing = false;
  },
  draw(ctx, W, H, st, dom) {
    const vt = st.p1 + st.p2 * st.t;
    const s = Math.min(80, st.p1 * st.t + 0.5 * st.p2 * st.t * st.t);
    ctx.fillStyle = '#cbd5e1'; ctx.fillRect(0, 270, W, 90);
    const bx = 60 + (s / 80) * (W - 140);
    ctx.fillStyle = '#059669'; ctx.fillRect(bx - 25, 225, 50, 45);
    dom.hudEl.innerHTML = `<div>t = <b>${st.t.toFixed(2)} s</b> | vₜ = <b>${vt.toFixed(2)} m/s</b></div><div>Jarak s = <b class="text-emerald-700">${s.toFixed(2)} m</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Analisis GLBB</div><p>vₜ = v₀ + a·t = <b>${vt.toFixed(2)} m/s</b><br>s = v₀t + ½at² = <b>${s.toFixed(2)} m</b></p>`;
  },
  record(st, idx) {
    const vt = st.p1 + st.p2 * st.t, s = Math.min(80, st.p1 * st.t + 0.5 * st.p2 * st.t * st.t);
    return [idx, st.t.toFixed(2), vt.toFixed(2), s.toFixed(2)];
  }
};

// 2C. GERAK VERTIKAL ATAS & BAWAH (GVA / GVB)
window.VLAB_ENGINES['gva_gvb_lab'] = {
  init(st, dom) {
    st.p1 = 20;
    dom.titleEl.innerText = "Virtual Lab: Gerak Vertikal ke Atas & Bawah (GVA/GVB — g = 10 m/s²)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Lemparan Vertikal ke Atas</h4>
      <div class="flex justify-between text-xs font-bold"><span>Kecepatan Awal (v₀)</span><span id="vl-v1">20 m/s</span></div>
      <input type="range" min="10" max="30" step="5" value="20" class="w-full accent-rose-600" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' m/s'; resetVLab();">`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">v₀ (m/s)</th><th class="p-2.5">Waktu t (s)</th><th class="p-2.5">Ketinggian y (m)</th><th class="p-2.5">Kecepatan vᵧ (m/s)</th></tr>`;
  },
  step(st, dt) {
    st.t += dt;
    const tTotal = (2 * st.p1) / 10;
    if (st.t >= tTotal) { st.t = tTotal; st.playing = false; }
  },
  draw(ctx, W, H, st, dom) {
    const y = Math.max(0, st.p1 * st.t - 5 * st.t * st.t);
    const vy = st.p1 - 10 * st.t;
    const yMax = (st.p1 * st.p1) / 20;
    ctx.fillStyle = '#e2e8f0'; ctx.fillRect(0, 310, W, 50);
    const by = 310 - (y / Math.max(45, yMax)) * 240 - 12;
    ctx.beginPath(); ctx.arc(360, by, 12, 0, Math.PI * 2); ctx.fillStyle = '#e11d48'; ctx.fill();
    dom.hudEl.innerHTML = `<div>t = <b>${st.t.toFixed(2)} s</b> | y = <b>${y.toFixed(2)} m</b></div><div>vᵧ = <b>${vy.toFixed(2)} m/s</b> | y_max = <b>${yMax.toFixed(1)} m</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Gerak Vertikal</div><p>Tinggi Maksimum: <b>${yMax.toFixed(1)} m</b><br>Waktu Naik ke Puncak: <b>${(st.p1 / 10).toFixed(1)} s</b></p>`;
  },
  record(st, idx) {
    return [idx, st.p1, st.t.toFixed(2), Math.max(0, st.p1 * st.t - 5 * st.t * st.t).toFixed(2), (st.p1 - 10 * st.t).toFixed(2)];
  }
};

// 2D. GERAK JATUH BEBAS (GJB)
window.VLAB_ENGINES['gjb_lab'] = {
  init(st, dom) {
    st.p1 = 45;
    dom.titleEl.innerText = "Virtual Lab: Gerak Jatuh Bebas (GJB — v₀ = 0, g = 10 m/s²)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Ketinggian Awal Gedung</h4>
      <div class="flex justify-between text-xs font-bold"><span>Ketinggian (H)</span><span id="vl-v1">45 m</span></div>
      <input type="range" min="20" max="80" step="5" value="45" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' m'; resetVLab();">`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Waktu t (s)</th><th class="p-2.5">Ketinggian h (m)</th><th class="p-2.5">Kelajuan v (m/s)</th></tr>`;
  },
  step(st, dt) {
    st.t += dt;
    const tFall = Math.sqrt((2 * st.p1) / 10);
    if (st.t >= tFall) { st.t = tFall; st.playing = false; }
  },
  draw(ctx, W, H, st, dom) {
    const hCurr = Math.max(0, st.p1 - 5 * st.t * st.t);
    const vCurr = 10 * st.t;
    ctx.fillStyle = '#e2e8f0'; ctx.fillRect(0, 310, W, 50);
    // Gedung
    const topY = 310 - (st.p1 / 80) * 240;
    ctx.fillStyle = '#94a3b8'; ctx.fillRect(260, topY, 60, 310 - topY);
    const by = 310 - (hCurr / 80) * 240 - 12;
    ctx.beginPath(); ctx.arc(360, by, 12, 0, Math.PI * 2); ctx.fillStyle = '#1e40af'; ctx.fill();
    dom.hudEl.innerHTML = `<div>t = <b>${st.t.toFixed(2)} s</b> | h = <b>${hCurr.toFixed(2)} m</b></div><div>Kelajuan v = <b class="text-blue-800">${vCurr.toFixed(2)} m/s</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Gerak Jatuh Bebas</div><p>Waktu Jatuh Total: <b>${Math.sqrt((2 * st.p1) / 10).toFixed(2)} s</b><br>Kelajuan Saat Tiba di Tanah: <b>${Math.sqrt(20 * st.p1).toFixed(2)} m/s</b></p>`;
  },
  record(st, idx) {
    return [idx, st.t.toFixed(2), Math.max(0, st.p1 - 5 * st.t * st.t).toFixed(2), (10 * st.t).toFixed(2)];
  }
};

// 2E. GERAK PARABOLA
window.VLAB_ENGINES['projectile_lab'] = {
  init(st, dom) {
    st.p1 = 20; st.p2 = 45;
    dom.titleEl.innerText = "Virtual Lab: Gerak Parabola (2D Projectile Motion)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Peluncuran Proyektil (g = 10 m/s²)</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Kecepatan Awal (v₀)</span><span id="vl-v1">20 m/s</span></div>
      <input type="range" min="10" max="30" step="2" value="20" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' m/s'; resetVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Sudut Elevasi (θ)</span><span id="vl-v2">45°</span></div>
      <input type="range" min="15" max="75" step="5" value="45" class="w-full accent-amber-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+'°'; resetVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">v₀ (m/s)</th><th class="p-2.5">Sudut θ</th><th class="p-2.5">t (s)</th><th class="p-2.5">Jarak x (m)</th><th class="p-2.5">Tinggi y (m)</th></tr>`;
  },
  step(st, dt) {
    st.t += dt;
    const rad = st.p2 * Math.PI / 180, tMax = (2 * st.p1 * Math.sin(rad)) / 10;
    if (st.t >= tMax) { st.t = tMax; st.playing = false; }
  },
  draw(ctx, W, H, st, dom) {
    const baseY = 305, scale = 5.5, rad = st.p2 * Math.PI / 180;
    ctx.fillStyle = '#e2e8f0'; ctx.fillRect(0, baseY, W, H - baseY);

    // Gambar jejak lintasan parabola
    const tTotal = (2 * st.p1 * Math.sin(rad)) / 10;
    ctx.strokeStyle = '#93c5fd'; ctx.setLineDash([4, 4]); ctx.lineWidth = 2; ctx.beginPath();
    for (let i = 0; i <= 50; i++) {
      const ti = (i / 50) * tTotal;
      const xi = st.p1 * Math.cos(rad) * ti;
      const yi = st.p1 * Math.sin(rad) * ti - 5 * ti * ti;
      if (i === 0) ctx.moveTo(60 + xi * scale, baseY - yi * scale);
      else ctx.lineTo(60 + xi * scale, baseY - yi * scale);
    }
    ctx.stroke(); ctx.setLineDash([]);

    const x = st.p1 * Math.cos(rad) * st.t;
    const y = Math.max(0, st.p1 * Math.sin(rad) * st.t - 5 * st.t * st.t);
    ctx.beginPath(); ctx.arc(60 + x * scale, baseY - y * scale - 8, 9, 0, Math.PI * 2); ctx.fillStyle = '#1e40af'; ctx.fill();

    const xMax = (st.p1 * st.p1 * Math.sin(2 * rad)) / 10;
    const yMax = (st.p1 * st.p1 * Math.pow(Math.sin(rad), 2)) / 20;
    dom.hudEl.innerHTML = `<div>t = <b>${st.t.toFixed(2)} s</b> | x = <b>${x.toFixed(2)} m</b> | y = <b>${y.toFixed(2)} m</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Parameter Parabola</div><p>Jarak Maksimum (x_max): <b>${xMax.toFixed(1)} m</b><br>Tinggi Puncak (y_max): <b>${yMax.toFixed(1)} m</b></p>`;
  },
  record(st, idx) {
    const rad = st.p2 * Math.PI / 180;
    return [idx, st.p1, st.p2 + '°', st.t.toFixed(2), (st.p1 * Math.cos(rad) * st.t).toFixed(2), Math.max(0, st.p1 * Math.sin(rad) * st.t - 5 * st.t * st.t).toFixed(2)];
  }
};

// 3A. HUKUM NEWTON & GAYA GESEK
window.VLAB_ENGINES['newton_lab'] = {
  init(st, dom) {
    st.p1 = 4; st.p2 = 20; st.p3 = 0.25;
    dom.titleEl.innerText = "Virtual Lab: Hukum II Newton & Gaya Gesek Kinetis";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Gaya & Gesekan (g = 10 m/s²)</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Massa Balok (m)</span><span id="vl-v1">4 kg</span></div>
      <input type="range" min="1" max="10" value="4" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' kg'; resetVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Gaya Tarik (F)</span><span id="vl-v2">20 N</span></div>
      <input type="range" min="0" max="50" step="5" value="20" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' N'; resetVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Koefisien Gesek (μₖ)</span><span id="vl-v3">0.25</span></div>
      <input type="range" min="0" max="0.5" step="0.05" value="0.25" class="w-full accent-rose-600" oninput="vlabState.p3=+this.value; document.getElementById('vl-v3').innerText=(+this.value).toFixed(2); resetVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">m (kg)</th><th class="p-2.5">F (N)</th><th class="p-2.5">fₖ (N)</th><th class="p-2.5">Percepatan a (m/s²)</th></tr>`;
  },
  step(st, dt) {
    st.t += dt;
    const fk = st.p3 * st.p1 * 10, a = Math.max(0, (st.p2 - fk) / st.p1);
    st.x = 0.08 + 0.5 * a * st.t * st.t * 0.025;
    if (st.x >= 0.82) st.playing = false;
  },
  draw(ctx, W, H, st, dom) {
    const baseY = 275; ctx.fillStyle = '#cbd5e1'; ctx.fillRect(0, baseY, W, H - baseY);
    const bx = 60 + Math.min(0.82, st.x) * (W - 180);
    ctx.fillStyle = '#0d2347'; ctx.fillRect(bx, baseY - 54, 74, 54);
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 12px Plus Jakarta Sans'; ctx.fillText(`${st.p1} kg`, bx + 20, baseY - 22);

    const fk = st.p3 * st.p1 * 10, a = Math.max(0, (st.p2 - fk) / st.p1);
    // Vektor F kanan & fk kiri
    if (st.p2 > 0) { ctx.strokeStyle = '#059669'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(bx + 74, baseY - 27); ctx.lineTo(bx + 74 + st.p2 * 2, baseY - 27); ctx.stroke(); }
    if (fk > 0) { ctx.strokeStyle = '#e11d48'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(bx, baseY - 12); ctx.lineTo(bx - fk * 2, baseY - 12); ctx.stroke(); }

    dom.hudEl.innerHTML = `<div>Gaya Gesek fₖ: <b>${fk.toFixed(1)} N</b></div><div>Percepatan a: <b class="text-emerald-700">${a.toFixed(2)} m/s²</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Hukum II Newton</div><p>Gaya Normal N = ${st.p1 * 10} N<br>a = (F − fₖ)/m = <b>${a.toFixed(2)} m/s²</b></p>`;
  },
  record(st, idx) {
    const fk = st.p3 * st.p1 * 10;
    return [idx, st.p1, st.p2, fk.toFixed(1), Math.max(0, (st.p2 - fk) / st.p1).toFixed(2)];
  }
};

// 3B. MOMENTUM, IMPULS & TUMBUKAN
window.VLAB_ENGINES['momentum_lab'] = {
  init(st, dom) {
    st.p1 = 2; st.p2 = 6; st.p3 = 1;
    dom.titleEl.innerText = "Virtual Lab: Momentum, Impuls & Tumbukan Dua Benda";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Tumbukan (m₂ = 2 kg diam, v₂ = 0)</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Massa Bola 1 (m₁)</span><span id="vl-v1">2 kg</span></div>
      <input type="range" min="1" max="6" value="2" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' kg'; resetVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Kecepatan Awal (v₁)</span><span id="vl-v2">6 m/s</span></div>
      <input type="range" min="2" max="10" value="6" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' m/s'; resetVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Koefisien Restitusi (e)</span><span id="vl-v3">1.0</span></div>
      <input type="range" min="0" max="1" step="0.5" value="1" class="w-full accent-amber-600" oninput="vlabState.p3=+this.value; document.getElementById('vl-v3').innerText=(+this.value).toFixed(1); resetVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">m₁ (kg)</th><th class="p-2.5">v₁ Awal</th><th class="p-2.5">Restitusi e</th><th class="p-2.5">v₁' Akhir</th><th class="p-2.5">v₂' Akhir</th></tr>`;
  },
  step(st, dt) {
    st.t += dt;
    if (st.t > 3.5) st.playing = false;
  },
  draw(ctx, W, H, st, dom) {
    const baseY = 265; ctx.fillStyle = '#cbd5e1'; ctx.fillRect(0, baseY, W, H - baseY);
    const m1 = st.p1, v1 = st.p2, m2 = 2, e = st.p3;
    const v1After = (m1 * v1 - m2 * e * v1) / (m1 + m2);
    const v2After = (m1 * v1 * (1 + e)) / (m1 + m2);

    let x1 = 140 + v1 * 38 * Math.min(1.2, st.t), x2 = 380;
    if (st.t > 1.2) {
      const dt = st.t - 1.2;
      x1 = 342 + v1After * 38 * dt;
      x2 = 380 + v2After * 38 * dt;
    }
    ctx.beginPath(); ctx.arc(x1, baseY - 19, 19, 0, Math.PI * 2); ctx.fillStyle = '#1e40af'; ctx.fill();
    ctx.beginPath(); ctx.arc(x2, baseY - 19, 19, 0, Math.PI * 2); ctx.fillStyle = '#d97706'; ctx.fill();

    dom.hudEl.innerHTML = `<div>v₁' = <b>${v1After.toFixed(2)} m/s</b> | v₂' = <b>${v2After.toFixed(2)} m/s</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Kekekalan Momentum</div><p>Momentum Awal: <b>${(m1 * v1).toFixed(1)} kg·m/s</b><br>Setelah Tumbukan: v₁' = <b>${v1After.toFixed(2)} m/s</b>, v₂' = <b>${v2After.toFixed(2)} m/s</b></p>`;
  },
  record(st, idx) {
    const m1 = st.p1, v1 = st.p2, e = st.p3;
    return [idx, m1, v1, e.toFixed(1), ((m1 * v1 - 2 * e * v1) / (m1 + 2)).toFixed(2), ((m1 * v1 * (1 + e)) / (m1 + 2)).toFixed(2)];
  }
};

// 3C. GERAK ROTASI & TORSI
window.VLAB_ENGINES['rotation_lab'] = {
  init(st, dom) {
    st.p1 = 40; st.p2 = 0.5; st.p3 = 90;
    dom.titleEl.innerText = "Virtual Lab: Dinamika Rotasi, Torsi (τ) & Percepatan Sudut (α)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Parameter Torsi (Inersia I = 2 kg·m²)</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Gaya Putar (F)</span><span id="vl-v1">40 N</span></div>
      <input type="range" min="10" max="80" step="10" value="40" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' N'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Lengan Gaya (r)</span><span id="vl-v2">0.5 m</span></div>
      <input type="range" min="0.2" max="1.0" step="0.1" value="0.5" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=(+this.value).toFixed(1)+' m'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Sudut Gaya (θ)</span><span id="vl-v3">90°</span></div>
      <input type="range" min="30" max="90" step="30" value="90" class="w-full accent-amber-600" oninput="vlabState.p3=+this.value; document.getElementById('vl-v3').innerText=this.value+'°'; drawVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Gaya F (N)</th><th class="p-2.5">Lengan r (m)</th><th class="p-2.5">Sudut θ</th><th class="p-2.5">Torsi τ (N·m)</th><th class="p-2.5">α = τ/I (rad/s²)</th></tr>`;
  },
  step(st, dt) { st.t += dt; },
  draw(ctx, W, H, st, dom) {
    const tau = st.p2 * st.p1 * Math.sin(st.p3 * Math.PI / 180);
    const alpha = tau / 2;
    const angle = 0.5 * alpha * st.t * st.t;

    ctx.save(); ctx.translate(360, 180); ctx.rotate(-angle);
    ctx.strokeStyle = '#1e40af'; ctx.lineWidth = 10;
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(st.p2 * 220, 0); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, 16, 0, Math.PI * 2); ctx.fillStyle = '#0f172a'; ctx.fill();
    ctx.restore();

    dom.hudEl.innerHTML = `<div>Torsi τ = <b>${tau.toFixed(2)} N·m</b></div><div>Percepatan Sudut α = <b class="text-emerald-700">${alpha.toFixed(2)} rad/s²</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Dinamika Rotasi</div><p>τ = r · F · sin θ = <b>${tau.toFixed(2)} N·m</b><br>α = τ / I = <b>${alpha.toFixed(2)} rad/s²</b></p>`;
  },
  record(st, idx) {
    const tau = st.p2 * st.p1 * Math.sin(st.p3 * Math.PI / 180);
    return [idx, st.p1, st.p2.toFixed(1), st.p3 + '°', tau.toFixed(2), (tau / 2).toFixed(2)];
  }
};

// 4A. FLUIDA STATIS
window.VLAB_ENGINES['fluid_static'] = {
  init(st, dom) {
    st.p1 = 4; st.p2 = 1000;
    dom.titleEl.innerText = "Virtual Lab: Fluida Statis (Sensor Tekanan Hidrostatis)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Tangki Fluida (g = 10 m/s²)</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Kedalaman (h)</span><span id="vl-v1">4 m</span></div>
      <input type="range" min="0" max="10" value="4" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' m'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Massa Jenis (ρ)</span><span id="vl-v2">1000 kg/m³</span></div>
      <select class="w-full p-2 rounded-lg border text-xs font-bold bg-white mt-1" onchange="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' kg/m³'; drawVLab();">
        <option value="1000">Air Murni (1000 kg/m³)</option>
        <option value="800">Minyak (800 kg/m³)</option>
        <option value="13600">Raksa (13600 kg/m³)</option>
      </select></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">ρ (kg/m³)</th><th class="p-2.5">h (m)</th><th class="p-2.5">P Hidrostatis (Pa)</th><th class="p-2.5">P Total (kPa)</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    ctx.fillStyle = st.p2 === 13600 ? '#cbd5e1' : (st.p2 === 800 ? '#fef08a' : '#bae6fd');
    ctx.fillRect(180, 65, 360, 240);
    ctx.strokeStyle = '#0284c7'; ctx.lineWidth = 3; ctx.strokeRect(180, 65, 360, 240);
    const sy = 65 + (st.p1 / 10) * 225;
    ctx.beginPath(); ctx.arc(360, sy, 10, 0, Math.PI * 2); ctx.fillStyle = '#e11d48'; ctx.fill();

    const ph = st.p2 * 10 * st.p1;
    dom.hudEl.innerHTML = `<div>Kedalaman h: <b>${st.p1} m</b></div><div>P_hidrostatis: <b class="text-blue-800">${ph.toLocaleString()} Pa</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Tekanan Fluida</div><p>P_h = ρ · g · h = <b>${(ph / 1000).toFixed(2)} kPa</b><br>P_mutlak (+100 kPa atm) = <b>${(100 + ph / 1000).toFixed(2)} kPa</b></p>`;
  },
  record(st, idx) {
    const ph = st.p2 * 10 * st.p1;
    return [idx, st.p2, st.p1, ph.toLocaleString(), (100 + ph / 1000).toFixed(2)];
  }
};

// 4B. FLUIDA DINAMIS (KONTINUITAS & BERNOULLI)
window.VLAB_ENGINES['fluid_dynamic'] = {
  init(st, dom) {
    st.p1 = 10; st.p2 = 4; st.p3 = 2;
    dom.titleEl.innerText = "Virtual Lab: Fluida Dinamis (Asas Kontinuitas & Pipa Venturi)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Pipa Menyempit (ρ = 1000 kg/m³)</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Luas Pipa Besar (A₁)</span><span id="vl-v1">10 cm²</span></div>
      <input type="range" min="6" max="16" step="2" value="10" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' cm²'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Luas Pipa Sempit (A₂)</span><span id="vl-v2">4 cm²</span></div>
      <input type="range" min="2" max="6" step="1" value="4" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' cm²'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Kelajuan Awal (v₁)</span><span id="vl-v3">2 m/s</span></div>
      <input type="range" min="1" max="5" step="1" value="2" class="w-full accent-amber-600" oninput="vlabState.p3=+this.value; document.getElementById('vl-v3').innerText=this.value+' m/s'; drawVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">A₁ (cm²)</th><th class="p-2.5">A₂ (cm²)</th><th class="p-2.5">v₁ (m/s)</th><th class="p-2.5">v₂ (m/s)</th><th class="p-2.5">ΔP Bernoulli (Pa)</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const v2 = (st.p1 * st.p3) / st.p2;
    const dP = 0.5 * 1000 * (v2 * v2 - st.p3 * st.p3);
    ctx.fillStyle = '#bae6fd'; ctx.fillRect(120, 110, 220, 120); ctx.fillRect(340, 145, 240, 50);
    ctx.strokeStyle = '#0284c7'; ctx.lineWidth = 3; ctx.strokeRect(120, 110, 220, 120); ctx.strokeRect(340, 145, 240, 50);
    dom.hudEl.innerHTML = `<div>v₁ = <b>${st.p3} m/s</b> → v₂ = <b class="text-blue-800">${v2.toFixed(2)} m/s</b></div><div>Selisih Tekanan ΔP = <b>${dP.toLocaleString()} Pa</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Kontinuitas & Bernoulli</div><p>Debit Q = <b>${st.p1 * st.p3} cm³/s</b><br>Kelajuan Pipa Sempit v₂ = <b>${v2.toFixed(2)} m/s</b></p>`;
  },
  record(st, idx) {
    const v2 = (st.p1 * st.p3) / st.p2;
    return [idx, st.p1, st.p2, st.p3, v2.toFixed(2), (0.5 * 1000 * (v2 * v2 - st.p3 * st.p3)).toLocaleString()];
  }
};
