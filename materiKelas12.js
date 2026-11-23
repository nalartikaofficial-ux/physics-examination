// =========================================================================
// MATERI ESENSIAL & 8 VIRTUAL LAB MANDIRI KELAS 12 (SEMESTER 1)
// SMA MUHAMMADIYAH 18 JAKARTA — GURU: FADHILLAH UMAR, S.Pd.
// =========================================================================

window.MATERI_KELAS_12 = [
  {
    id: "xii-statis",
    grade: "12",
    title: "Listrik Statis & Kapasitor",
    desc: "Hukum Coulomb, kuat medan listrik, potensial listrik, energi kapasitor, serta rangkaian seri & paralel kapasitor.",
    token: "STATIK12",
    ytId: "TFlVWf8stg4",
    subLabs: [
      { id: "coulomb_lab", name: "1. Coulomb, Medan & Potensial" },
      { id: "capacitor_lab", name: "2. Kapasitor & Rangkaian Seri-Paralel" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <h4 class="font-extrabold text-blue-900 text-sm mb-1.5">1. Hukum Coulomb, Medan Listrik & Potensial Listrik</h4>
          <p class="text-xs text-slate-700 mb-1.5">Dengan konstanta $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$:</p>
          <div class="font-bold text-blue-900 text-xs">$$F = k\\frac{|q_1 q_2|}{r^2} \\quad | \\quad E = k\\frac{|q|}{r^2} \\quad | \\quad V = k\\frac{q}{r}$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1.5">2. Kapasitor, Energi & Rangkaian Kapasitor</h4>
          <ul class="list-disc list-inside text-xs space-y-1 text-slate-700">
            <li><strong>Kapasitansi & Energi:</strong> $C = \\frac{Q}{V}$  |  $W = \\frac{1}{2}CV^2 = \\frac{1}{2}QV$</li>
            <li><strong>Rangkaian Seri:</strong> $\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2}$ (muatan sama: $Q_1 = Q_2$)</li>
            <li><strong>Rangkaian Paralel:</strong> $C_p = C_1 + C_2$ (tegangan sama: $V_1 = V_2$)</li>
          </ul>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Gaya Coulomb dan Medan Listrik merupakan besaran vektor (memiliki arah), sedangkan Potensial Listrik ($V$) adalah besaran skalar.</li>
        <li>Kapasitor yang dirangkai paralel memperbesar kapasitas total ($C_p = C_1 + C_2$) dan menyimpan energi listrik lebih besar pada tegangan yang sama.</li>
      </ul>`,
    quickQuiz: {
      q: "Dua kapasitor identik masing-masing $6\\,\\mu\\text{F}$ dirangkai secara seri, lalu dihubungkan dengan tegangan $10\\text{ V}$. Energi total yang tersimpan adalah...",
      opts: ["$150\\,\\mu\\text{J}$", "$300\\,\\mu\\text{J}$", "$600\\,\\mu\\text{J}$"],
      ans: 0
    },
    questions: [
      { id: 1201, text: "Dua muatan titik $q_1 = 2\\,\\mu\\text{C}$ dan $q_2 = 3\\,\\mu\\text{C}$ terpisah sejauh $3\\text{ cm}$ ($k = 9\\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$). Besar gaya Coulomb yang bekerja adalah...", options: ["$30\\text{ N}$", "$60\\text{ N}$", "$90\\text{ N}$", "$120\\text{ N}$"], correct: 1, discussion: "$F = \\frac{9\\times 10^9 \\times 2\\times 10^{-6} \\times 3\\times 10^{-6}}{(0{,}03)^2} = \\frac{54\\times 10^{-3}}{9\\times 10^{-4}} = 60\\text{ N}$." }
    ]
  },
  {
    id: "xii-dc",
    grade: "12",
    title: "Listrik Dinamis Arus Searah (DC)",
    desc: "Hukum Ohm, resistor seri & paralel, hukum Kirchhoff, daya listrik, dan konsumsi energi listrik.",
    token: "LISTRIK12",
    ytId: "zYS9kdS56l8",
    subLabs: [
      { id: "ohm_circuit_lab", name: "1. Hukum Ohm, Seri & Paralel" },
      { id: "power_energy_lab", name: "2. Daya & Energi Listrik" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <h4 class="font-extrabold text-blue-900 text-sm mb-1.5">1. Hukum Ohm & Susunan Resistor</h4>
          <ul class="list-disc list-inside text-xs space-y-1 text-slate-700">
            <li><strong>Hukum Ohm:</strong> $I = \\frac{V}{R_{\\text{total}}}$</li>
            <li><strong>Susunan Seri:</strong> $R_s = R_1 + R_2$ (kuat arus sama, pembagi tegangan)</li>
            <li><strong>Susunan Paralel:</strong> $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2}$ (tegangan sama, pembagi arus)</li>
          </ul>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1.5">2. Daya Listrik ($P$) & Energi Listrik ($W$)</h4>
          <div class="font-bold text-emerald-900 text-xs">$$P = V \\cdot I = I^2 R = \\frac{V^2}{R} \\quad | \\quad W = P \\cdot t = V \\cdot I \\cdot t$$</div>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Pada rangkaian paralel, hambatan pengganti selalu lebih kecil daripada hambatan terkecil penyusunnya sehingga arus total lebih besar.</li>
        <li>Satuan energi listrik rumah tangga menggunakan kilowatt-jam ($1\\text{ kWh} = 3{,}6 \\times 10^6\\text{ Joule}$).</li>
      </ul>`,
    quickQuiz: {
      q: "Dua resistor $6\\,\\Omega$ dan $3\\,\\Omega$ disusun paralel lalu dihubungkan ke baterai $12\\text{ V}$. Kuat arus total yang keluar dari baterai adalah...",
      opts: ["$2\\text{ A}$", "$4\\text{ A}$", "$6\\text{ A}$"],
      ans: 2
    },
    questions: [
      { id: 1202, text: "Sebuah penghantar berhambatan $12\\,\\Omega$ dialiri arus listrik $2\\text{ A}$ selama $5\\text{ sekon}$. Besar energi listrik yang diserap adalah...", options: ["$120\\text{ J}$", "$240\\text{ J}$", "$480\\text{ J}$", "$600\\text{ J}$"], correct: 1, discussion: "$W = I^2 \\cdot R \\cdot t = 2^2 \\times 12 \\times 5 = 240\\text{ Joule}$." }
    ]
  },
  {
    id: "xii-magnet",
    grade: "12",
    title: "Medan Magnet & Gaya Lorentz",
    desc: "Induksi magnetik kawat lurus, kawat melingkar, solenoida, serta gaya Lorentz pada penghantar & muatan.",
    token: "MAGNET12",
    ytId: "39b66m4uV04",
    subLabs: [
      { id: "mag_field_lab", name: "1. Medan Magnet (B)" },
      { id: "lorentz_lab", name: "2. Gaya Lorentz (F_L)" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <h4 class="font-extrabold text-blue-900 text-sm mb-1.5">1. Induksi Magnetik ($\\mu_0 = 4\\pi \\times 10^{-7}\\text{ Wb/A}\\cdot\\text{m}$)</h4>
          <ul class="list-disc list-inside text-xs space-y-1 text-slate-700">
            <li><strong>Kawat Lurus Panjang:</strong> $B = \\frac{\\mu_0 I}{2\\pi a}$</li>
            <li><strong>Pusat Solenoida:</strong> $B = \\frac{\\mu_0 I N}{L}$ (di ujung solenoida: $B_{\\text{ujung}} = \\frac{1}{2}B_{\\text{pusat}}$)</li>
          </ul>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1.5">2. Gaya Lorentz</h4>
          <div class="font-bold text-emerald-900 text-xs">$$F_L = B \\cdot I \\cdot L \\sin\\theta \\quad | \\quad F_L = q \\cdot v \\cdot B \\sin\\theta$$</div>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Arah medan magnet di sekitar kawat berarus ditentukan dengan kaidah tangan kanan pertama (ibu jari = arus $I$, lipatan empat jari = arah $B$).</li>
        <li>Arah gaya Lorentz ditentukan dengan kaidah tangan kanan terbuka (ibu jari = $I$, empat jari = $B$, telapak tangan = arah dorong $F_L$).</li>
      </ul>`,
    quickQuiz: {
      q: "Kawat lurus sepanjang $0{,}5\\text{ m}$ berarus $4\\text{ A}$ berada tegak lurus dalam medan magnet homogen $0{,}2\\text{ T}$. Besar gaya Lorentz pada kawat adalah...",
      opts: ["$0{,}2\\text{ N}$", "$0{,}4\\text{ N}$", "$4{,}0\\text{ N}$"],
      ans: 1
    },
    questions: [
      { id: 1203, text: "Seutas kawat lurus panjang dialiri arus $5\\text{ A}$. Besar induksi magnetik pada titik berjarak $10\\text{ cm}$ dari kawat ($\\mu_0 = 4\\pi\\times 10^{-7}$) adalah...", options: ["$10^{-5}\\text{ T}$", "$2\\times 10^{-5}\\text{ T}$", "$10^{-6}\\text{ T}$", "$2\\times 10^{-6}\\text{ T}$"], correct: 0, discussion: "$B = \\frac{4\\pi \\times 10^{-7} \\times 5}{2\\pi \\times 0{,}1} = 10^{-5}\\text{ Tesla}$." }
    ]
  },
  {
    id: "xii-ac",
    grade: "12",
    title: "Listrik Arus Bolak-Balik (AC)",
    desc: "Gelombang tegangan & arus sinusoidal AC, nilai efektif vs maksimum, reaktansi, serta impedansi rangkaian RLC.",
    token: "AC12",
    ytId: "S7g52v0S_O8",
    subLabs: [
      { id: "ac_rlc_lab", name: "1. Gelombang AC, Nilai Efektif & RLC" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <h4 class="font-extrabold text-blue-900 text-sm mb-1.5">1. Nilai Maksimum & Nilai Efektif Arus/Tegangan AC</h4>
          <p class="text-xs text-slate-700 mb-1">Alat ukur AC (amperemeter & voltmeter AC) selalu membaca <strong>nilai efektif</strong>:</p>
          <div class="font-bold text-blue-900 text-xs">$$V_{\\text{ef}} = \\frac{V_{\\max}}{\\sqrt{2}} \\quad | \\quad I_{\\text{ef}} = \\frac{I_{\\max}}{\\sqrt{2}}$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1.5">2. Impedansi Rangkaian Seri R-L-C</h4>
          <div class="font-bold text-emerald-900 text-xs">$$Z = \\sqrt{R^2 + (X_L - X_C)^2} \\quad | \\quad I_{\\text{ef}} = \\frac{V_{\\text{ef}}}{Z}$$</div>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Tegangan listrik PLN $220\\text{ V}$ merupakan nilai tegangan efektif ($V_{\\text{ef}}$), sehingga tegangan puncaknya mencapai $220\\sqrt{2}\\text{ V}$.</li>
        <li>Resonansi pada rangkaian RLC terjadi ketika $X_L = X_C$, menghasilkan impedansi minimum ($Z = R$) dan arus efektif maksimum.</li>
      </ul>`,
    quickQuiz: {
      q: "Sebuah sumber tegangan AC memiliki persamaan $V = 100\\sqrt{2}\\sin(100\\pi t)\\text{ volt}$. Nilai tegangan efektif yang terbaca voltmeter AC adalah...",
      opts: ["$50\\text{ V}$", "$100\\text{ V}$", "$100\\sqrt{2}\\text{ V}$"],
      ans: 1
    },
    questions: [
      { id: 1204, text: "Pada rangkaian seri R-L-C dengan $R = 6\\,\\Omega$, $X_L = 12\\,\\Omega$, dan $X_C = 4\\,\\Omega$, besar impedansi total rangkaian adalah...", options: ["$8\\,\\Omega$", "$10\\,\\Omega$", "$14\\,\\Omega$", "$22\\,\\Omega$"], correct: 1, discussion: "$Z = \\sqrt{6^2 + (12 - 4)^2} = \\sqrt{36 + 64} = 10\\,\\Omega$." }
    ]
  },
  {
    id: "xii-gelombang-em",
    grade: "12",
    title: "Gelombang Elektromagnetik",
    desc: "Konsep perambatan gelombang EM, urutan spektrum panjang gelombang & frekuensi, serta manfaat dalam kehidupan.",
    token: "GELOMBANG12",
    ytId: "cfXzwh3KadE",
    subLabs: [
      { id: "em_spectrum_lab", name: "1. Spektrum & Aplikasi Gelombang EM" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <h4 class="font-extrabold text-blue-900 text-sm mb-1.5">1. Sifat & Persamaan Gelombang Elektromagnetik</h4>
          <p class="text-xs text-slate-700 mb-1">Merupakan gelombang transversal (medan listrik $\\vec{E} \\perp \\vec{B}$) yang merambat tanpa medium dengan kelajuan $c = 3 \\times 10^8\\text{ m/s}$:</p>
          <div class="font-bold text-blue-900 text-xs">$$c = \\lambda \\cdot f \\quad | \\quad E_{\\text{foton}} = h \\cdot f = \\frac{hc}{\\lambda}$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
          <h4 class="font-extrabold text-amber-900 text-sm mb-1.5">2. Urutan Spektrum (Frekuensi Rendah $\\rightarrow$ Tinggi)</h4>
          <p class="text-xs text-slate-700 leading-relaxed"><strong>Gelombang Radio</strong> (komunikasi/TV) → <strong>Gelombang Mikro</strong> (radar/microwave) → <strong>Inframerah</strong> (remote/termografi) → <strong>Cahaya Tampak</strong> (optik/fotosintesis) → <strong>Ultraviolet</strong> (sterilisasi/vitamin D) → <strong>Sinar-X</strong> (rontgen medis) → <strong>Sinar Gamma</strong> (radioterapi kanker).</p>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Semua gelombang elektromagnetik merambat dengan kecepatan sama di ruang hampa ($3 \\times 10^8\\text{ m/s}$), yang membedakan hanyalah frekuensi dan panjang gelombangnya.</li>
        <li>Sinar-X dan Sinar Gamma memiliki frekuensi sangat tinggi sehingga berenergi besar dan mampu menembus jaringan.</li>
      </ul>`,
    quickQuiz: {
      q: "Spektrum gelombang elektromagnetik yang dimanfaatkan untuk mendeteksi keretakan tulang (radiografi medis) adalah...",
      opts: ["Gelombang Mikro", "Sinar Inframerah", "Sinar-X"],
      ans: 2
    },
    questions: [
      { id: 1205, text: "Gelombang elektromagnetik yang memiliki panjang gelombang paling besar tetapi energinya paling kecil adalah...", options: ["Gelombang Radio", "Sinar Ultraviolet", "Sinar-X", "Sinar Gamma"], correct: 0, discussion: "Gelombang radio berada di ujung spektrum dengan panjang gelombang terpanjang dan frekuensi terendah." }
    ]
  }
];

// =========================================================================
// REGISTRASI 8 MESIN GRAFIS VIRTUAL LAB MANDIRI KELAS 12
// =========================================================================
window.VLAB_ENGINES = window.VLAB_ENGINES || {};

// 1A. HUKUM COULOMB, MEDAN LISTRIK & POTENSIAL LISTRIK
window.VLAB_ENGINES['coulomb_lab'] = {
  init(st, dom) {
    st.p1 = 4; st.p2 = -3; st.p3 = 3; // q1 (uC), q2 (uC), r (cm)
    dom.titleEl.innerText = "Virtual Lab: Hukum Coulomb, Medan Listrik & Potensial Listrik";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Muatan Titik & Jarak Pisah</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Muatan q₁</span><span id="vl-v1">+4 μC</span></div>
      <input type="range" min="-6" max="6" step="1" value="4" class="w-full accent-rose-600" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=(this.value>0?'+':'')+this.value+' μC'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Muatan q₂</span><span id="vl-v2">-3 μC</span></div>
      <input type="range" min="-6" max="6" step="1" value="-3" class="w-full accent-blue-700" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=(this.value>0?'+':'')+this.value+' μC'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Jarak Pisah (r)</span><span id="vl-v3">3 cm</span></div>
      <input type="range" min="1" max="6" step="1" value="3" class="w-full accent-amber-600" oninput="vlabState.p3=+this.value; document.getElementById('vl-v3').innerText=this.value+' cm'; drawVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">q₁ (μC)</th><th class="p-2.5">q₂ (μC)</th><th class="p-2.5">r (cm)</th><th class="p-2.5">Gaya F (N)</th><th class="p-2.5">Medan E₁ di q₂ (N/C)</th><th class="p-2.5">Potensial V₁ (kV)</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const k = 9e9, q1 = st.p1 * 1e-6, q2 = st.p2 * 1e-6, r = st.p3 * 1e-2;
    const F = (k * Math.abs(q1 * q2)) / (r * r);
    const E1 = (k * Math.abs(q1)) / (r * r);
    const V1 = (k * q1) / r;
    const attract = (st.p1 * st.p2) < 0;

    const x1 = 360 - st.p3 * 36, x2 = 360 + st.p3 * 36, cy = 185;
    // Garis Jarak
    ctx.strokeStyle = '#94a3b8'; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(x1, cy + 35); ctx.lineTo(x2, cy + 35); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = '#475569'; ctx.font = 'bold 11px JetBrains Mono'; ctx.fillText(`r = ${st.p3} cm`, 335, cy + 52);

    // Panah Gaya Coulomb
    if (st.p1 !== 0 && st.p2 !== 0) {
      ctx.strokeStyle = attract ? '#059669' : '#e11d48'; ctx.lineWidth = 4;
      const dir1 = attract ? 1 : -1;
      ctx.beginPath(); ctx.moveTo(x1, cy); ctx.lineTo(x1 + dir1 * 55, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x2, cy); ctx.lineTo(x2 - dir1 * 55, cy); ctx.stroke();
    }

    // Bola Muatan
    ctx.beginPath(); ctx.arc(x1, cy, 20, 0, Math.PI * 2); ctx.fillStyle = st.p1 >= 0 ? '#e11d48' : '#1e40af'; ctx.fill();
    ctx.fillStyle = '#fff'; ctx.fillText(`${st.p1}μC`, x1 - 14, cy + 4);

    ctx.beginPath(); ctx.arc(x2, cy, 20, 0, Math.PI * 2); ctx.fillStyle = st.p2 >= 0 ? '#e11d48' : '#1e40af'; ctx.fill();
    ctx.fillStyle = '#fff'; ctx.fillText(`${st.p2}μC`, x2 - 14, cy + 4);

    dom.hudEl.innerHTML = `<div>Gaya Coulomb: <b class="text-blue-800">${F.toFixed(1)} N</b> (${st.p1*st.p2 === 0 ? 'Netral' : (attract ? 'Tarik-Menarik' : 'Tolak-Menolak')})</div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Besaran Elektrostatis</div><p>Gaya F = <b>${F.toFixed(1)} N</b><br>Medan E₁ = <b>${(E1 / 1e6).toFixed(2)} × 10⁶ N/C</b><br>Potensial V₁ = <b>${(V1 / 1000).toFixed(0)} kV</b></p>`;
  },
  record(st, idx) {
    const k = 9e9, q1 = st.p1 * 1e-6, q2 = st.p2 * 1e-6, r = st.p3 * 1e-2;
    return [idx, st.p1, st.p2, st.p3, ((k * Math.abs(q1 * q2)) / (r * r)).toFixed(1), (((k * Math.abs(q1)) / (r * r)) / 1e6).toFixed(2) + 'e6', (((k * q1) / r) / 1000).toFixed(0)];
  }
};

// 1B. KAPASITOR & RANGKAIAN SERI-PARALEL
window.VLAB_ENGINES['capacitor_lab'] = {
  init(st, dom) {
    st.p1 = 12; st.p2 = 6; st.p3 = 1; // V (Volt), C (uF identik), mode (1=Seri, 2=Paralel)
    dom.titleEl.innerText = "Virtual Lab: Kapasitor, Energi Kapasitor & Rangkaian Seri-Paralel";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Dua Kapasitor Identik (C₁ = C₂ = C)</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Tegangan Sumber (V)</span><span id="vl-v1">12 V</span></div>
      <input type="range" min="4" max="24" step="2" value="12" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' V'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Kapasitansi Tiap C</span><span id="vl-v2">6 μF</span></div>
      <input type="range" min="2" max="12" step="2" value="6" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' μF'; drawVLab();"></div>
      <div><label class="block text-xs font-bold mb-1">Jenis Rangkaian</label>
      <select class="w-full p-2 rounded-lg border text-xs font-bold bg-white" onchange="vlabState.p3=+this.value; drawVLab();">
        <option value="1">Rangkaian Seri (1/Cs = 1/C₁ + 1/C₂)</option>
        <option value="2">Rangkaian Paralel (Cp = C₁ + C₂)</option>
      </select></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Rangkaian</th><th class="p-2.5">V (Volt)</th><th class="p-2.5">C Total (μF)</th><th class="p-2.5">Muatan Q (μC)</th><th class="p-2.5">Energi W (μJ)</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const isSeri = st.p3 === 1;
    const cTot = isSeri ? st.p2 / 2 : st.p2 * 2;
    const Q = cTot * st.p1;
    const W_en = 0.5 * cTot * st.p1 * st.p1;

    ctx.strokeStyle = '#0d2347'; ctx.lineWidth = 3;
    ctx.strokeRect(200, 90, 320, 170);
    ctx.fillStyle = '#dbeafe'; ctx.fillRect(175, 150, 50, 50); ctx.strokeRect(175, 150, 50, 50);
    ctx.fillStyle = '#1e3a8a'; ctx.font = 'bold 12px sans-serif'; ctx.fillText(`${st.p1} V`, 186, 180);

    // Simbol Kapasitor
    ctx.fillStyle = '#fef3c7'; ctx.fillRect(320, 70, 80, 40);
    ctx.fillStyle = '#92400e'; ctx.fillText(isSeri ? `Seri: ${cTot} μF` : `Paralel: ${cTot} μF`, 326, 95);

    dom.hudEl.innerHTML = `<div>C_total = <b>${cTot} μF</b> | Muatan Q = <b>${Q} μC</b></div><div>Energi Tersimpan W = <b class="text-emerald-700">${W_en} μJ</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Analisis Kapasitor</div><p>Mode: <b>${isSeri ? 'Seri' : 'Paralel'}</b><br>C_total = <b>${cTot} μF</b><br>W = ½·C·V² = <b>${W_en} μJ</b></p>`;
  },
  record(st, idx) {
    const isSeri = st.p3 === 1, cTot = isSeri ? st.p2 / 2 : st.p2 * 2;
    return [idx, isSeri ? 'Seri' : 'Paralel', st.p1, cTot, cTot * st.p1, 0.5 * cTot * st.p1 * st.p1];
  }
};

// 2A. HUKUM OHM, RESISTOR SERI & PARALEL (DC)
window.VLAB_ENGINES['ohm_circuit_lab'] = {
  init(st, dom) {
    st.p1 = 12; st.p2 = 6; st.p3 = 1; // V, R (dua resistor identik R), mode (1=Seri, 2=Paralel)
    dom.titleEl.innerText = "Virtual Lab: Hukum Ohm, Resistor Seri & Paralel (DC)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Rangkaian DC (R₁ = R₂ = R)</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Tegangan Baterai (V)</span><span id="vl-v1">12 V</span></div>
      <input type="range" min="6" max="24" step="6" value="12" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' V'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Hambatan Tiap R</span><span id="vl-v2">6 Ω</span></div>
      <input type="range" min="2" max="12" step="2" value="6" class="w-full accent-amber-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' Ω'; drawVLab();"></div>
      <div><label class="block text-xs font-bold mb-1">Susunan Resistor</label>
      <select class="w-full p-2 rounded-lg border text-xs font-bold bg-white" onchange="vlabState.p3=+this.value; drawVLab();">
        <option value="1">Susunan Seri (Rs = R₁ + R₂)</option>
        <option value="2">Susunan Paralel (1/Rp = 1/R₁ + 1/R₂)</option>
      </select></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Susunan</th><th class="p-2.5">V (Volt)</th><th class="p-2.5">R Total (Ω)</th><th class="p-2.5">Arus Total I (A)</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const isSeri = st.p3 === 1;
    const rTot = isSeri ? st.p2 * 2 : st.p2 / 2;
    const I = st.p1 / rTot;

    ctx.strokeStyle = '#0d2347'; ctx.lineWidth = 4;
    ctx.strokeRect(200, 90, 320, 170);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(170, 150, 60, 50); ctx.strokeRect(170, 150, 60, 50);
    ctx.fillStyle = '#0d2347'; ctx.font = 'bold 13px sans-serif'; ctx.fillText(`${st.p1} V`, 183, 180);

    ctx.fillStyle = '#fef3c7'; ctx.fillRect(300, 70, 120, 40); ctx.strokeRect(300, 70, 120, 40);
    ctx.fillStyle = '#92400e'; ctx.fillText(`R_tot = ${rTot} Ω`, 322, 95);

    dom.hudEl.innerHTML = `<div>R_total = <b>${rTot} Ω</b></div><div>Kuat Arus I = <b class="text-emerald-700">${I.toFixed(2)} A</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Hukum Ohm</div><p>Susunan: <b>${isSeri ? 'Seri' : 'Paralel'}</b><br>I = V / R_total = ${st.p1} / ${rTot} = <b>${I.toFixed(2)} A</b></p>`;
  },
  record(st, idx) {
    const isSeri = st.p3 === 1, rTot = isSeri ? st.p2 * 2 : st.p2 / 2;
    return [idx, isSeri ? 'Seri' : 'Paralel', st.p1, rTot, (st.p1 / rTot).toFixed(2)];
  }
};

// 2B. DAYA & ENERGI LISTRIK
window.VLAB_ENGINES['power_energy_lab'] = {
  init(st, dom) {
    st.p1 = 220; st.p2 = 2; st.p3 = 5; // V (Volt), I (Ampere), t (Jam)
    dom.titleEl.innerText = "Virtual Lab: Daya Listrik (P) & Konsumsi Energi Listrik (W)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Parameter Beban Listrik</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Tegangan (V)</span><span id="vl-v1">220 V</span></div>
      <input type="range" min="110" max="220" step="110" value="220" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' V'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Kuat Arus (I)</span><span id="vl-v2">2 A</span></div>
      <input type="range" min="1" max="10" step="1" value="2" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' A'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Lama Pemakaian (t)</span><span id="vl-v3">5 jam</span></div>
      <input type="range" min="1" max="24" step="1" value="5" class="w-full accent-amber-600" oninput="vlabState.p3=+this.value; document.getElementById('vl-v3').innerText=this.value+' jam'; drawVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">V (Volt)</th><th class="p-2.5">I (A)</th><th class="p-2.5">Daya P (Watt)</th><th class="p-2.5">Waktu (Jam)</th><th class="p-2.5">Energi (kWh)</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const P = st.p1 * st.p2;
    const kwh = (P * st.p3) / 1000;
    const joule = P * st.p3 * 3600;

    // Visual meteran daya
    ctx.fillStyle = '#0f172a'; ctx.fillRect(210, 95, 300, 150);
    ctx.fillStyle = '#10b981'; ctx.font = 'bold 26px JetBrains Mono';
    ctx.fillText(`${P} WATT`, 285, 160);
    ctx.fillStyle = '#fbbf24'; ctx.font = 'bold 16px JetBrains Mono';
    ctx.fillText(`Energi: ${kwh.toFixed(2)} kWh`, 275, 205);

    dom.hudEl.innerHTML = `<div>Daya P = <b>${P} W</b></div><div>Energi W = <b class="text-amber-700">${kwh.toFixed(2)} kWh</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Kalkulasi Daya & Energi</div><p>P = V · I = <b>${P} Watt</b><br>W = <b>${kwh.toFixed(2)} kWh</b> (${(joule / 1e6).toFixed(2)} MJ)</p>`;
  },
  record(st, idx) {
    const P = st.p1 * st.p2;
    return [idx, st.p1, st.p2, P, st.p3, ((P * st.p3) / 1000).toFixed(2)];
  }
};

// 3A. MEDAN MAGNET (B)
window.VLAB_ENGINES['mag_field_lab'] = {
  init(st, dom) {
    st.p1 = 5; st.p2 = 10; // I (Ampere), jarak a (cm)
    dom.titleEl.innerText = "Virtual Lab: Induksi Magnetik Kawat Lurus Berarus (μ₀ = 4π × 10⁻⁷)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Parameter Kawat Berarus</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Kuat Arus (I)</span><span id="vl-v1">5 A</span></div>
      <input type="range" min="1" max="15" step="1" value="5" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' A'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Jarak Titik Uji (a)</span><span id="vl-v2">10 cm</span></div>
      <input type="range" min="2" max="20" step="2" value="10" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' cm'; drawVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Arus I (A)</th><th class="p-2.5">Jarak a (cm)</th><th class="p-2.5">Induksi Magnetik B (Tesla)</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const B = (2e-7 * st.p1) / (st.p2 / 100);
    // Kawat vertikal + titik uji P
    ctx.strokeStyle = '#d97706'; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.moveTo(240, 50); ctx.lineTo(240, 310); ctx.stroke();
    const px = 240 + st.p2 * 16;
    ctx.setLineDash([4, 4]); ctx.strokeStyle = '#64748b'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(240, 180); ctx.lineTo(px, 180); ctx.stroke(); ctx.setLineDash([]);
    ctx.beginPath(); ctx.arc(px, 180, 9, 0, Math.PI * 2); ctx.fillStyle = '#1e40af'; ctx.fill();

    dom.hudEl.innerHTML = `<div>I = <b>${st.p1} A</b> | a = <b>${st.p2} cm</b></div><div>Medan Magnet B = <b class="text-blue-800">${B.toExponential(2)} T</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Hukum Biot-Savart</div><p>B = (μ₀·I) / (2π·a) = <b>${B.toExponential(2)} Tesla</b></p>`;
  },
  record(st, idx) {
    const B = (2e-7 * st.p1) / (st.p2 / 100);
    return [idx, st.p1, st.p2, B.toExponential(2)];
  }
};

// 3B. GAYA LORENTZ
window.VLAB_ENGINES['lorentz_lab'] = {
  init(st, dom) {
    st.p1 = 0.5; st.p2 = 4; st.p3 = 90; // B (Tesla), I (Ampere), sudut theta
    dom.titleEl.innerText = "Virtual Lab: Gaya Lorentz pada Kawat Berarus (L = 0,5 m)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Medan Magnet & Arus (L = 0,5 m)</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Medan Magnet (B)</span><span id="vl-v1">0.5 T</span></div>
      <input type="range" min="0.1" max="1.0" step="0.1" value="0.5" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=(+this.value).toFixed(1)+' T'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Kuat Arus (I)</span><span id="vl-v2">4 A</span></div>
      <input type="range" min="1" max="10" step="1" value="4" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' A'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Sudut B & I (θ)</span><span id="vl-v3">90°</span></div>
      <input type="range" min="0" max="90" step="30" value="90" class="w-full accent-amber-600" oninput="vlabState.p3=+this.value; document.getElementById('vl-v3').innerText=this.value+'°'; drawVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">B (Tesla)</th><th class="p-2.5">I (A)</th><th class="p-2.5">Sudut θ</th><th class="p-2.5">Gaya Lorentz F_L (N)</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const FL = st.p1 * st.p2 * 0.5 * Math.sin(st.p3 * Math.PI / 180);
    // Kutub U-S
    ctx.fillStyle = '#fee2e2'; ctx.fillRect(180, 70, 360, 45); ctx.fillStyle = '#991b1b'; ctx.font = 'bold 14px sans-serif'; ctx.fillText('KUTUB UTARA (N)', 300, 98);
    ctx.fillStyle = '#dbeafe'; ctx.fillRect(180, 245, 360, 45); ctx.fillStyle = '#1e40af'; ctx.fillText('KUTUB SELATAN (S)', 295, 273);
    // Kawat & Panah F_L
    ctx.strokeStyle = '#d97706'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(220, 180); ctx.lineTo(500, 180); ctx.stroke();
    if (FL > 0) {
      ctx.strokeStyle = '#059669'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(360, 180); ctx.lineTo(360, 180 - FL * 25); ctx.stroke();
    }
    dom.hudEl.innerHTML = `<div>Gaya Lorentz F_L = <b class="text-emerald-700">${FL.toFixed(2)} N</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Analisis Gaya Lorentz</div><p>F_L = B · I · L · sin θ = <b>${FL.toFixed(2)} Newton</b></p>`;
  },
  record(st, idx) {
    const FL = st.p1 * st.p2 * 0.5 * Math.sin(st.p3 * Math.PI / 180);
    return [idx, st.p1.toFixed(1), st.p2, st.p3 + '°', FL.toFixed(2)];
  }
};

// 4A. LISTRIK ARUS BOLAK-BALIK (AC), NILAI EFEKTIF & RLC
window.VLAB_ENGINES['ac_rlc_lab'] = {
  init(st, dom) {
    st.p1 = 100; st.p2 = 6; st.p3 = 8; // V_max (Volt), R (Ohm), |XL - XC| (Ohm)
    dom.titleEl.innerText = "Virtual Lab: Gelombang Sinusoidal AC, Nilai Efektif & Impedansi RLC";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Sumber AC & Rangkaian Seri RLC</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Tegangan Maksimum (Vₘₐₓ)</span><span id="vl-v1">100 V</span></div>
      <input type="range" min="50" max="300" step="50" value="100" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' V'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Resistor (R)</span><span id="vl-v2">6 Ω</span></div>
      <input type="range" min="2" max="12" step="2" value="6" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' Ω'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Selisih Reaktansi |X_L − X_C|</span><span id="vl-v3">8 Ω</span></div>
      <input type="range" min="0" max="16" step="2" value="8" class="w-full accent-amber-600" oninput="vlabState.p3=+this.value; document.getElementById('vl-v3').innerText=this.value+' Ω'; drawVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">V_max (V)</th><th class="p-2.5">V_efektif (V)</th><th class="p-2.5">Impedansi Z (Ω)</th><th class="p-2.5">I_efektif (A)</th></tr>`;
  },
  step(st, dt) { st.t += dt * 4; },
  draw(ctx, W, H, st, dom) {
    const vEf = st.p1 / Math.SQRT2;
    const Z = Math.sqrt(st.p2 * st.p2 + st.p3 * st.p3);
    const iEf = vEf / Z;

    // Sumbu Osiloskop
    const midY = 185;
    ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(50, midY); ctx.lineTo(670, midY); ctx.stroke();

    // Gelombang Sinusoidal Tegangan AC
    ctx.strokeStyle = '#1e40af'; ctx.lineWidth = 3.5; ctx.beginPath();
    const amp = (st.p1 / 300) * 115;
    for (let x = 50; x <= 670; x += 4) {
      const y = midY - amp * Math.sin((x - 50) * 0.025 - st.t);
      if (x === 50) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();

    dom.hudEl.innerHTML = `<div>V_ef = <b>${vEf.toFixed(1)} V</b> | Z = <b>${Z.toFixed(2)} Ω</b></div><div>Arus Efektif I_ef = <b class="text-emerald-700">${iEf.toFixed(2)} A</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Analisis Arus AC</div><p>V_ef = V_max / √2 = <b>${vEf.toFixed(1)} V</b><br>Impedansi Z = <b>${Z.toFixed(2)} Ω</b>${st.p3 === 0 ? ' (RESONANSI!)' : ''}<br>I_ef = <b>${iEf.toFixed(2)} A</b></p>`;
  },
  record(st, idx) {
    const vEf = st.p1 / Math.SQRT2, Z = Math.sqrt(st.p2 * st.p2 + st.p3 * st.p3);
    return [idx, st.p1, vEf.toFixed(1), Z.toFixed(2), (vEf / Z).toFixed(2)];
  }
};

// 5A. SPEKTRUM & MANFAAT GELOMBANG ELEKTROMAGNETIK
window.VLAB_ENGINES['em_spectrum_lab'] = {
  init(st, dom) {
    st.p1 = 3; // Index spektrum 0..6
    dom.titleEl.innerText = "Virtual Lab: Spektrum Gelombang Elektromagnetik & Aplikasi";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Pilih Pita Spektrum (c = 3 × 10⁸ m/s)</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Frekuensi Rendah ↔ Tinggi</span><span id="vl-v1">Cahaya Tampak</span></div>
      <input type="range" min="0" max="6" step="1" value="3" class="w-full accent-indigo-700" oninput="vlabState.p1=+this.value; drawVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Jenis Gelombang</th><th class="p-2.5">Frekuensi (Hz)</th><th class="p-2.5">Panjang Gelombang</th><th class="p-2.5">Manfaat Utama</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const bands = [
      { name: 'Gelombang Radio', f: '10⁷ Hz', lam: '30 m', use: 'Siaran radio, TV & komunikasi satelit', col: '#ef4444', wl: 90 },
      { name: 'Gelombang Mikro', f: '10¹⁰ Hz', lam: '3 cm', use: 'Radar pesawat, Wi-Fi & pemanas microwave', col: '#f97316', wl: 65 },
      { name: 'Sinar Inframerah', f: '10¹³ Hz', lam: '30 μm', use: 'Remote control, kamera termal & terapi fisik', col: '#eab308', wl: 45 },
      { name: 'Cahaya Tampak', f: '5×10¹⁴ Hz', lam: '600 nm', use: 'Penglihatan manusia, serat optik & fotosintesis', col: '#10b981', wl: 30 },
      { name: 'Sinar Ultraviolet', f: '10¹⁶ Hz', lam: '30 nm', use: 'Sterilisasi alat medis & pembentukan vitamin D', col: '#06b6d4', wl: 20 },
      { name: 'Sinar-X (Rontgen)', f: '10¹⁸ Hz', lam: '0,3 nm', use: 'Foto rontgen tulang & pemindai bagasi bandara', col: '#3b82f6', wl: 13 },
      { name: 'Sinar Gamma', f: '10²⁰ Hz', lam: '3 pm', use: 'Radioterapi sel kanker & sterilisasi mutasi bibit', col: '#8b5cf6', wl: 8 }
    ];
    const b = bands[st.p1];
    const lbl = document.getElementById('vl-v1'); if (lbl) lbl.innerText = b.name;

    // Gambar gelombang dengan kerapatan sesuai frekuensi
    ctx.strokeStyle = b.col; ctx.lineWidth = 4; ctx.beginPath();
    for (let x = 60; x <= 660; x += 2) {
      const y = 185 - 75 * Math.sin((x - 60) * (2 * Math.PI / b.wl));
      if (x === 60) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();

    dom.hudEl.innerHTML = `<div>Spektrum: <b style="color:${b.col}">${b.name}</b> | f ≈ <b>${b.f}</b> | λ ≈ <b>${b.lam}</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Aplikasi Sehari-hari</div><p><b>${b.name}:</b> ${b.use}.</p>`;
  },
  record(st, idx) {
    const bands = [
      ['Gelombang Radio', '10⁷ Hz', '30 m', 'Komunikasi & Siaran'],
      ['Gelombang Mikro', '10¹⁰ Hz', '3 cm', 'Radar & Microwave'],
      ['Sinar Inframerah', '10¹³ Hz', '30 μm', 'Remote & Kamera Termal'],
      ['Cahaya Tampak', '5×10¹⁴ Hz', '600 nm', 'Optik & Fotosintesis'],
      ['Sinar Ultraviolet', '10¹⁶ Hz', '30 nm', 'Sterilisasi & Vitamin D'],
      ['Sinar-X', '10¹⁸ Hz', '0,3 nm', 'Radiografi Medis'],
      ['Sinar Gamma', '10²⁰ Hz', '3 pm', 'Radioterapi Kanker']
    ];
    return [idx, ...bands[st.p1]];
  }
};
