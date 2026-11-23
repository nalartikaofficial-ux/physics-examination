// =========================================================================
// MATERI ESENSIAL & 11 VIRTUAL LAB KELAS 11 (SEMESTER 1)
// SMA MUHAMMADIYAH 18 JAKARTA
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
          <h4 class="font-extrabold text-blue-900 text-sm mb-1">1. Penguraian Komponen Vektor Bidang (2D)</h4>
          <p class="text-xs text-slate-700 mb-1.5">Sebuah vektor gaya $\\vec{F}$ yang membentuk sudut $\\theta$ terhadap sumbu-$x$ positif diuraikan menjadi komponen horizontal dan vertikal:</p>
          <div class="font-bold text-blue-900 text-sm">$$F_x = F\\cos\\theta \\quad | \\quad F_y = F\\sin\\theta$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1">2. Besar & Arah Resultan Vektor</h4>
          <div class="font-bold text-emerald-900 text-sm mb-1">$$|\\vec{R}| = \\sqrt{(\\sum F_x)^2 + (\\sum F_y)^2} \\quad | \\quad \\tan\\alpha = \\frac{\\sum F_y}{\\sum F_x}$$</div>
          <p class="text-xs text-slate-700">Dalam notasi vektor satuan: $\\vec{R} = R_x\\hat{i} + R_y\\hat{j} + R_z\\hat{k}$.</p>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Metode analisis komponen jauh lebih teliti dibanding metode grafis poligon/jajar genjang untuk menjumlahkan banyak vektor.</li>
        <li>Dua vektor saling tegak lurus ($90^\\circ$) menghasilkan resultan $|\\vec{R}| = \\sqrt{F_1^2 + F_2^2}$.</li>
      </ul>`,
    quickQuiz: {
      q: "Dua buah vektor gaya saling tegak lurus masing-masing sebesar $6\\text{ N}$ dan $8\\text{ N}$. Besar resultan kedua vektor adalah...",
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
          <h4 class="font-extrabold text-blue-900 text-sm mb-1">1. GLB & GLBB</h4>
          <ul class="list-disc list-inside text-xs space-y-1 text-slate-700">
            <li><strong>GLB ($a = 0$, $v$ konstan):</strong> $s = v \\cdot t$</li>
            <li><strong>GLBB ($a$ konstan):</strong> $v_t = v_0 + a t$  |  $s = v_0 t + \\frac{1}{2} a t^2$  |  $v_t^2 = v_0^2 + 2 a s$</li>
          </ul>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1">2. Gerak Vertikal & Jatuh Bebas ($a = \\pm g$)</h4>
          <ul class="list-disc list-inside text-xs space-y-1 text-slate-700">
            <li><strong>Gerak Jatuh Bebas ($v_0 = 0$):</strong> $h = \\frac{1}{2}gt^2$  |  $v_t = \\sqrt{2gh}$</li>
            <li><strong>Gerak Vertikal ke Atas (GVA):</strong> Tinggi maksimum $h_{\\max} = \\frac{v_0^2}{2g}$, waktu puncak $t_{\\text{puncak}} = \\frac{v_0}{g}$.</li>
          </ul>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
          <h4 class="font-extrabold text-amber-900 text-sm mb-1">3. Gerak Parabola (Perpaduan GLB & GLBB)</h4>
          <div class="font-bold text-amber-900 text-xs">$$y_{\\max} = \\frac{v_0^2\\sin^2\\theta}{2g} \\quad | \\quad x_{\\max} = \\frac{v_0^2\\sin 2\\theta}{g}$$</div>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Pada gerak jatuh bebas tanpa gesekan udara, waktu jatuh benda hanya bergantung pada ketinggian awal dan gravitasi, bukan massa benda.</li>
        <li>Pada gerak parabola, kecepatan horizontal $v_x = v_0\\cos\\theta$ selalu tetap, sedangkan di titik puncak $v_y = 0$.</li>
      </ul>`,
    quickQuiz: {
      q: "Peluru ditembakkan dengan kecepatan awal $20\\text{ m/s}$ dan sudut elevasi $45^\\circ$ ($g = 10\\text{ m/s}^2$). Jarak mendatar maksimum peluru adalah...",
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
      { id: "momentum_lab", name: "2. Momentum & Tumbukan" },
      { id: "rotation_lab", name: "3. Gerak Rotasi & Torsi" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <h4 class="font-extrabold text-blue-900 text-sm mb-1">1. Hukum II Newton & Gaya Gesek</h4>
          <div class="font-bold text-blue-900 text-xs">$$\\sum F = m \\cdot a \\quad | \\quad f_k = \\mu_k \\cdot N$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1">2. Momentum, Impuls & Tumbukan</h4>
          <p class="text-xs text-slate-700 mb-1">Impuls sama dengan perubahan momentum ($I = F\\Delta t = \\Delta p$). Berlaku Hukum Kekekalan Momentum:</p>
          <div class="font-bold text-emerald-900 text-xs">$$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2' \\quad | \\quad e = -\\frac{v_2' - v_1'}{v_2 - v_1}$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
          <h4 class="font-extrabold text-amber-900 text-sm mb-1">3. Dinamika Rotasi (Torsi & Momen Inersia)</h4>
          <div class="font-bold text-amber-900 text-xs">$$\\tau = r \\cdot F \\sin\\theta \\quad | \\quad \\sum \\tau = I \\cdot \\alpha$$</div>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Tumbukan lenting sempurna memiliki koefisien restitusi $e = 1$, sedangkan tumbukan tidak lenting sama sekali memiliki $e = 0$ (kedua benda menyatu setelah bertumbukan).</li>
        <li>Momen gaya (torsi) terbesar diperoleh ketika gaya bekerja tegak lurus lengan gaya ($\\theta = 90^\\circ$).</li>
      </ul>`,
    quickQuiz: {
      q: "Sebuah kunci inggris sepanjang $0{,}25\\text{ m}$ ditarik tegak lurus dengan gaya $40\\text{ N}$. Besar momen gaya (torsi) yang dihasilkan adalah...",
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
      { id: "fluid_static", name: "1. Fluida Statis (Hidrostatis & Archimedes)" },
      { id: "fluid_dynamic", name: "2. Fluida Dinamis (Kontinuitas & Venturi)" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <h4 class="font-extrabold text-blue-900 text-sm mb-1">1. Fluida Statis (Hidrostatis, Pascal, Archimedes)</h4>
          <div class="font-bold text-blue-900 text-xs">$$P_h = \\rho \\cdot g \\cdot h \\quad | \\quad \\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\quad | \\quad F_A = \\rho_f \\cdot g \\cdot V_{\\text{tercelup}}$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1">2. Fluida Dinamis (Kontinuitas & Bernoulli)</h4>
          <div class="font-bold text-emerald-900 text-xs">$$Q = A_1 v_1 = A_2 v_2 \\quad | \\quad P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2$$</div>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Tekanan hidrostatis semakin besar seiring bertambahnya kedalaman titik ukur dari permukaan fluida.</li>
        <li>Pada pipa mendatar yang menyempit ($A_2 < A_1$), kelajuan aliran air meningkat ($v_2 > v_1$) sehingga tekanan fluidanya turun ($P_2 < P_1$).</li>
      </ul>`,
    quickQuiz: {
      q: "Air mengalir melalui pipa berpenampang $10\\text{ cm}^2$ dengan kelajuan $2\\text{ m/s}$ menuju bagian pipa yang menyempit seluas $4\\text{ cm}^2$. Kelajuan air di bagian sempit adalah...",
      opts: ["$0{,}8\\text{ m/s}$", "$5\\text{ m/s}$", "$8\\text{ m/s}$"],
      ans: 1
    },
    questions: [
      { id: 1104, text: "Tekanan hidrostatis pada kedalaman $2\\text{ m}$ di bawah permukaan air ($\\rho = 1000\\text{ kg/m}^3, g = 10\\text{ m/s}^2$) adalah...", options: ["$10.000\\text{ Pa}$", "$20.000\\text{ Pa}$", "$30.000\\text{ Pa}$", "$40.000\\text{ Pa}$"], correct: 1, discussion: "$P_h = \\rho g h = 1000 \\times 10 \\times 2 = 20.000\\text{ Pa}$." }
    ]
  }
];
