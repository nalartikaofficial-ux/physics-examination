// =========================================================================
// MATERI ESENSIAL SEMESTER 1 (KELAS 10, 11, 12) - SMA MUHAMMADIYAH 18 JAKARTA
// =========================================================================

window.MATERI_SEMESTER_1 = [
  // ================= GRADE 10 (SEMESTER 1) =================
  {
    id: "x-pengukuran",
    grade: "10",
    title: "Scientific Measurement & Lab Work",
    desc: "Base/derived dimensions, significant figures, vernier calipers, and measurement uncertainty.",
    token: "UKUR10",
    labType: "caliper",
    labBadge: "Vernier Caliper Lab",
    ytId: "mhIOylZMg6Q",
    conceptHtml: `
      <div class="space-y-3">
        <p><strong>1. Besaran Pokok & Analisis Dimensi:</strong> Setiap besaran turunan dapat dinyatakan dalam kombinasi tujuh dimensi besaran pokok ($[M]$ massa, $[L]$ panjang, $[T]$ waktu).</p>
        <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl font-bold text-blue-900">
          $$[F] = [M][L][T]^{-2} \\quad | \\quad [W] = [E] = [M][L]^2[T]^{-2} \\quad | \\quad [P] = [M][L]^{-1}[T]^{-2}$$
        </div>
        <p><strong>2. Pembacaan Jangka Sorong & Mikrometer:</strong></p>
        <ul class="list-disc list-inside text-xs space-y-1 text-slate-600">
          <li><strong>Jangka Sorong:</strong> $\\text{Hasil} = \\text{Skala Utama} + (\\text{Skala Nonius} \\times 0{,}01\\text{ cm})$</li>
          <li><strong>Mikrometer Sekrup:</strong> $\\text{Hasil} = \\text{Skala Utama} + (\\text{Skala Putar} \\times 0{,}01\\text{ mm})$</li>
        </ul>
      </div>`,
    conclusionHtml: `<ul class="list-disc list-inside space-y-1.5"><li>Angka penting menjaga akurasi hasil pengolahan data eksperimen.</li><li>Dimensi ruas kiri dan ruas kanan suatu persamaan fisika yang benar harus selalu identik.</li></ul>`,
    quickQuiz: { q: "Dimensi dari Energi Mekanik ($E_m = mgh + \\frac{1}{2}mv^2$) adalah...", opts: ["$[M][L][T]^{-2}$", "$[M][L]^2[T]^{-2}$", "$[M][L]^2[T]^{-3}$"], ans: 1 },
    questions: [
      { id: 1001, text: "The dimension of Work / Energy ($W = F \\cdot s$) in SI base units is...", options: ["$[M][L][T]^{-1}$", "$[M][L][T]^{-2}$", "$[M][L]^2[T]^{-2}$", "$[M][L]^2[T]^{-1}$"], correct: 2, discussion: "Work unit is $\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$, giving dimension $[M][L]^2[T]^{-2}$." }
    ]
  },
  {
    id: "x-energi",
    grade: "10",
    title: "Renewable Energy & Conservation",
    desc: "Kinetic & potential energy, wind turbines, solar cells, and energy conversion efficiency.",
    token: "ENERGI10",
    labType: "turbine",
    labBadge: "Wind Turbine Lab",
    ytId: "mhIOylZMg6Q",
    conceptHtml: `
      <div class="space-y-3">
        <p><strong>1. Transformasi Energi pada Pembangkit Listrik:</strong> Turbin angin dan PLTA mengubah energi mekanik fluida bergerak menjadi energi listrik melalui generator induksi.</p>
        <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl font-bold text-emerald-900">
          $$P_{\\text{angin}} = \\frac{1}{2} \\rho A v^3 \\quad | \\quad \\eta = \\frac{P_{\\text{keluaran}}}{P_{\\text{masukan}}} \\times 100\\%$$
        </div>
        <p class="text-xs text-slate-600">Daya angin berbanding lurus dengan <strong>pangkat tiga kelajuan angin ($v^3$)</strong>, sehingga kenaikan kecepatan angin 2 kali lipat menghasilkan daya 8 kali lipat.</p>
      </div>`,
    conclusionHtml: `<ul class="list-disc list-inside space-y-1.5"><li>Energi terbarukan memanfaatkan siklus alam yang berkelanjutan (surya, angin, air, panas bumi).</li><li>Efisiensi konversi selalu di bawah 100% karena sebagian energi berubah menjadi panas/gesekan.</li></ul>`,
    quickQuiz: { q: "Jika kecepatan angin meningkat menjadi 2 kali semula, daya kinetik yang ditangkap turbin menjadi...", opts: ["2 kali semula", "4 kali semula", "8 kali semula"], ans: 2 },
    questions: [
      { id: 1002, text: "Which of the following is considered a non-renewable energy source?", options: ["Solar Power", "Geothermal Energy", "Coal / Fossil Fuel", "Wind Turbine"], correct: 2, discussion: "Coal is a finite fossil fuel and therefore non-renewable." }
    ]
  },
  {
    id: "x-pemanasan-global",
    grade: "10",
    title: "Global Warming: Concepts & Solutions",
    desc: "Greenhouse effect physics, infrared absorption, albedo, and carbon mitigation.",
    token: "IKLIM10",
    labType: "climate",
    labBadge: "Climate Radiation Lab",
    ytId: "mhIOylZMg6Q",
    conceptHtml: `
      <div class="space-y-3">
        <p><strong>1. Mekanisme Fisis Efek Rumah Kaca:</strong> Radiasi matahari gelombang pendek menembus atmosfer dan menghangatkan permukaan bumi. Bumi memancarkan kembali energi berupa <strong>radiasi inframerah gelombang panjang</strong> yang diserap dan dipantulkan kembali oleh molekul gas rumah kaca ($\\text{CO}_2, \\text{CH}_4, \\text{H}_2\\text{O}$).</p>
        <p><strong>2. Efek Albedo:</strong> Permukaan es kutub yang putih memantulkan hingga 80% radiasi surya. Mencairnya es menurunkan albedo bumi dan mempercepat pemanasan.</p>
      </div>`,
    conclusionHtml: `<ul class="list-disc list-inside space-y-1.5"><li>Peningkatan konsentrasi $\\text{CO}_2$ mempertebal lapisan perangkap panas atmosfer.</li><li>Mitigasi dilakukan melalui efisiensi energi, reboisasi, dan transisi energi bersih.</li></ul>`,
    quickQuiz: { q: "Jenis radiasi yang diserap dan diperangkap oleh gas rumah kaca di atmosfer adalah...", opts: ["Sinar Ultraviolet", "Radiasi Inframerah", "Sinar Gamma"], ans: 1 },
    questions: [
      { id: 1003, text: "The primary greenhouse gas emitted through anthropogenic activities is...", options: ["$\\text{CO}_2$", "$\\text{O}_2$", "$\\text{N}_2$", "$\\text{He}$"], correct: 0, discussion: "Carbon dioxide ($\\text{CO}_2$) is the most prevalent anthropogenic greenhouse gas." }
    ]
  },

  // ================= GRADE 11 (SEMESTER 1) =================
  {
    id: "xi-vektor",
    grade: "11",
    title: "Vector Analysis & Decomposition",
    desc: "Unit vectors, analytical addition of vector components, dot and cross products.",
    token: "VEKTOR11",
    labType: "vector",
    labBadge: "2D Vector Lab",
    ytId: "mhIOylZMg6Q",
    conceptHtml: `
      <div class="space-y-3">
        <p><strong>1. Penguraian Vektor Bidang (2D):</strong> Setiap vektor gaya $\\vec{F}$ yang membentuk sudut $\\theta$ terhadap sumbu-$x$ positif diuraikan menjadi komponen saling tegak lurus:</p>
        <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl font-bold text-blue-900">
          $$F_x = F\\cos\\theta \\quad | \\quad F_y = F\\sin\\theta \\quad | \\quad |\\vec{R}| = \\sqrt{(\\sum F_x)^2 + (\\sum F_y)^2}$$
        </div>
        <p class="text-xs text-slate-600"><strong>Vektor Satuan:</strong> $\\vec{A} = A_x\\hat{i} + A_y\\hat{j} + A_z\\hat{k}$. Penjumlahan vektor dilakukan per komponen sejenis ($\\hat{i}$ dengan $\\hat{i}$, $\\hat{j}$ dengan $\\hat{j}$).</p>
      </div>`,
    conclusionHtml: `<ul class="list-disc list-inside space-y-1.5"><li>Metode analitis jauh lebih presisi dibanding metode grafis poligon untuk banyak vektor.</li><li>Arah resultan terhadap sumbu-$x$ ditentukan melalui $\\tan\\alpha = \\frac{\\sum F_y}{\\sum F_x}$.</li></ul>`,
    quickQuiz: { q: "Jika $\\vec{F}_1 = 3\\hat{i} + 4\\hat{j}\\text{ N}$ dan $\\vec{F}_2 = 5\\hat{i} + 2\\hat{j}\\text{ N}$, maka besar resultannya $|\\vec{F}_1 + \\vec{F}_2|$ adalah...", opts: ["$8\\text{ N}$", "$10\\text{ N}$", "$14\\text{ N}$"], ans: 1 },
    questions: [
      { id: 1101, text: "Two force vectors act on a particle: $\\vec{F}_1 = 6\\hat{i} + 8\\hat{j}\\text{ N}$ and $\\vec{F}_2 = 2\\hat{i} - 2\\hat{j}\\text{ N}$. Find the resultant magnitude $|\\vec{F}_1 + \\vec{F}_2|$!", options: ["$8\\text{ N}$", "$10\\text{ N}$", "$12\\text{ N}$", "$14\\text{ N}$"], correct: 1, discussion: "$\\vec{R} = 8\\hat{i} + 6\\hat{j}\\text{ N}$. Magnitude $|\\vec{R}| = \\sqrt{8^2 + 6^2} = 10\\text{ N}$." }
    ]
  },
  {
    id: "xi-kinematika",
    grade: "11",
    title: "Kinematics Analysis (1D & 2D)",
    desc: "Calculus kinematics (derivatives/integrals), projectile motion, and circular motion.",
    token: "GERAK11",
    labType: "projectile",
    labBadge: "Projectile Lab",
    ytId: "mhIOylZMg6Q",
    conceptHtml: `
      <div class="space-y-3">
        <p><strong>1. Kinematika Turunan & Integral:</strong> Kecepatan sesaat adalah turunan pertama fungsi posisi terhadap waktu ($v = \\frac{dx}{dt}$), dan percepatan sesaat adalah turunan kecepatan ($a = \\frac{dv}{dt}$).</p>
        <p><strong>2. Gerak Parabola (2D):</strong></p>
        <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl font-bold text-blue-900">
          $$x(t) = (v_0\\cos\\theta)t \\quad | \\quad y(t) = (v_0\\sin\\theta)t - \\frac{1}{2}gt^2$$
          $$y_{\\max} = \\frac{v_0^2\\sin^2\\theta}{2g} \\quad | \\quad x_{\\max} = \\frac{v_0^2\\sin 2\\theta}{g}$$
        </div>
      </div>`,
    conclusionHtml: `<ul class="list-disc list-inside space-y-1.5"><li>Komponen gerak horizontal selalu GLB ($a_x = 0$), sedangkan komponen vertikal selalu GLBB ($a_y = -g$).</li><li>Sudut elevasi $45^\\circ$ menghasilkan jangkauan mendatar maksimum.</li></ul>`,
    quickQuiz: { q: "Di titik puncak lintasan gerak parabola, komponen kecepatan yang bernilai nol adalah...", opts: ["Kecepatan horizontal ($v_x$)", "Kecepatan vertikal ($v_y$)", "Kedua komponen kecepatan"], ans: 1 },
    questions: [
      { id: 1102, text: "A particle moves with position function $x(t) = 2t^3 - 4t + 5\\text{ m}$. What is the acceleration at $t = 3\\text{ s}$?", options: ["$18\\text{ m/s}^2$", "$36\\text{ m/s}^2$", "$48\\text{ m/s}^2$", "$54\\text{ m/s}^2$"], correct: 1, discussion: "$v(t) = 6t^2 - 4$, $a(t) = 12t$. At $t=3\\text{ s} \\rightarrow a(3) = 36\\text{ m/s}^2$." }
    ]
  },
  {
    id: "xi-dinamika",
    grade: "11",
    title: "Dynamics of Motion (Newton's Laws)",
    desc: "Newton's laws, kinetic/static friction, incline planes, and connected pulley systems.",
    token: "GAYA11",
    labType: "dynamics",
    labBadge: "Newton & Friction Lab",
    ytId: "mhIOylZMg6Q",
    conceptHtml: `
      <div class="space-y-3">
        <p><strong>1. Hukum II Newton & Gaya Gesek Kinetis:</strong> Percepatan sistem benda ditentukan oleh resultan gaya yang searah gerak dikurangi gaya penghambat (gesekan):</p>
        <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl font-bold text-blue-900">
          $$\\sum F = m \\cdot a \\quad | \\quad f_k = \\mu_k \\cdot N$$
        </div>
        <p class="text-xs text-slate-600">Pada bidang datar tanpa gaya vertikal luar, gaya normal $N = m \\cdot g$. Pada bidang miring sudut $\\theta$, $N = m g \\cos\\theta$ dan komponen gaya berat sejajar bidang adalah $w_x = m g \\sin\\theta$.</p>
      </div>`,
    conclusionHtml: `<ul class="list-disc list-inside space-y-1.5"><li>Gaya gesek statis maksimum ($f_s = \\mu_s N$) menahan benda agar tetap diam hingga gaya tarik melampauinya.</li><li>Setelah bergerak, bekerja gaya gesek kinetis ($f_k = \\mu_k N$) yang nilainya konstan.</li></ul>`,
    quickQuiz: { q: "Balok $2\\text{ kg}$ di lantai kasar ($\\mu_k = 0{,}2$, $g = 10\\text{ m/s}^2$) ditarik gaya $10\\text{ N}$. Percepatan balok adalah...", opts: ["$2\\text{ m/s}^2$", "$3\\text{ m/s}^2$", "$5\\text{ m/s}^2$"], ans: 1 },
    questions: [
      { id: 1103, text: "A $4\\text{ kg}$ block is pulled on a rough surface ($\\mu_k = 0.25$) by $F = 20\\text{ N}$ ($g = 10\\text{ m/s}^2$). The acceleration is...", options: ["$1.5\\text{ m/s}^2$", "$2.5\\text{ m/s}^2$", "$3.0\\text{ m/s}^2$", "$4.0\\text{ m/s}^2$"], correct: 1, discussion: "$f_k = \\mu_k N = 0.25 \\times 40 = 10\\text{ N}$. $a = (20 - 10)/4 = 2.5\\text{ m/s}^2$." }
    ]
  },
  {
    id: "xi-energi-mekanik",
    grade: "11",
    title: "Work & Conservation of Mechanical Energy",
    desc: "Potential & kinetic energy, conservative vs dissipative systems, roller coaster & incline physics.",
    token: "ENERGI11",
    labType: "energy",
    labBadge: "Mechanical Energy Lab",
    ytId: "mhIOylZMg6Q",
    conceptHtml: `
      <div class="space-y-3">
        <p><strong>1. Energi Potensial & Energi Kinetik:</strong> Energi mekanik ($E_m$) adalah jumlah total energi potensial gravitasi ($E_p = mgh$) dan energi kinetik ($E_k = \\frac{1}{2}mv^2$).</p>
        <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl font-bold text-blue-900">
          $$E_{m1} = E_{m2} \\Rightarrow mgh_1 + \\frac{1}{2}mv_1^2 = mgh_2 + \\frac{1}{2}mv_2^2$$
        </div>
        <p><strong>2. Sistem Disipatif (Dengan Gaya Gesek):</strong> Bila lintasan kasar ($\\mu > 0$), sebagian energi mekanik terkonversi menjadi energi termal (panas):</p>
        <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl font-bold text-rose-900">
          $$W_{\\text{gesek}} = E_{m2} - E_{m1} = -E_{\\text{termal}}$$
        </div>
      </div>`,
    conclusionHtml: `<ul class="list-disc list-inside space-y-1.5"><li>Pada lintasan licin, kelajuan benda di dasar lintasan hanya bergantung pada selisih ketinggian: $v = \\sqrt{2g\\Delta h}$.</li><li>Di titik tertinggi ($v=0$), $E_p$ maksimum dan $E_k = 0$. Di titik terendah ($h=0$), $E_k$ maksimum.</li><li>Energi tidak pernah hilang pada lintasan kasar, melainkan berubah menjadi energi panas.</li></ul>`,
    quickQuiz: { q: "Benda $2\\text{ kg}$ jatuh bebas dari ketinggian $5\\text{ m}$ ($g = 10\\text{ m/s}^2$). Kelajuan benda tepat saat menyentuh tanah adalah...", opts: ["$5\\text{ m/s}$", "$10\\text{ m/s}$", "$50\\text{ m/s}$"], ans: 1 },
    questions: [
      { id: 1105, text: "A $2\\text{ kg}$ ball falls freely from a height of $5\\text{ m}$ ($g = 10\\text{ m/s}^2$) without air resistance. What is its speed right before hitting the ground?", options: ["$5\\text{ m/s}$", "$10\\text{ m/s}$", "$25\\text{ m/s}$", "$50\\text{ m/s}$"], correct: 1, discussion: "$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 5} = \\sqrt{100} = 10\\text{ m/s}$." },
      { id: 1106, text: "A $4\\text{ kg}$ block slides down a rough incline from $h = 5\\text{ m}$ ($v_0 = 0$) and reaches the bottom at $8\\text{ m/s}$. How much mechanical energy is converted into thermal energy?", options: ["$32\\text{ J}$", "$72\\text{ J}$", "$128\\text{ J}$", "$200\\text{ J}$"], correct: 1, discussion: "$E_{m1} = mgh = 4(10)(5) = 200\\text{ J}$. $E_{m2} = \\frac{1}{2}(4)(8^2) = 128\\text{ J}$. $E_{\\text{termal}} = 200 - 128 = 72\\text{ J}$." }
    ]
  },
  {
    id: "xi-fluida",
    grade: "11",
    title: "Fluid Mechanics (Static & Dynamic)",
    desc: "Hydrostatic pressure, Pascal's principle, Archimedes buoyancy, continuity, and Bernoulli.",
    token: "FLUIDA11",
    labType: "fluid",
    labBadge: "Hydrostatic Lab",
    ytId: "mhIOylZMg6Q",
    conceptHtml: `
      <div class="space-y-3">
        <p><strong>1. Fluida Statis:</strong> Tekanan hidrostatis sebanding dengan massa jenis fluida dan kedalaman titik dari permukaan bebas ($P_h = \\rho g h$). Gaya apung Archimedes dirumuskan $F_A = \\rho_f \\cdot g \\cdot V_{\\text{tercelup}}$.</p>
        <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl font-bold text-blue-900">
          $$P_{\\text{total}} = P_0 + \\rho g h \\quad | \\quad A_1 v_1 = A_2 v_2$$
        </div>
      </div>`,
    conclusionHtml: `<ul class="list-disc list-inside space-y-1.5"><li>Tekanan hidrostatis tidak bergantung pada bentuk wadah, melainkan hanya pada kedalaman vertikal $h$.</li><li>Menurut Hukum Bernoulli, pada bagian pipa yang menyempit kelajuan fluida meningkat sehingga tekanannya menurun.</li></ul>`,
    quickQuiz: { q: "Tekanan hidrostatis pada kedalaman $2\\text{ m}$ di dalam air ($\\rho = 1000\\text{ kg/m}^3, g = 10\\text{ m/s}^2$) adalah...", opts: ["$2.000\\text{ Pa}$", "$20.000\\text{ Pa}$", "$200.000\\text{ Pa}$"], ans: 1 },
    questions: [
      { id: 1104, text: "Hydrostatic pressure at depth $2\\text{ m}$ under water ($\\rho = 1000\\text{ kg/m}^3, g = 10\\text{ m/s}^2$) is...", options: ["$10.000\\text{ Pa}$", "$20.000\\text{ Pa}$", "$30.000\\text{ Pa}$", "$40.000\\text{ Pa}$"], correct: 1, discussion: "$P_h = \\rho g h = 1000 \\times 10 \\times 2 = 20.000\\text{ Pa}$." }
    ]
  },

  // ================= GRADE 12 (SEMESTER 1) =================
  {
    id: "xii-statis",
    grade: "12",
    title: "Electrostatics & Capacitance",
    desc: "Coulomb's Law, electric field strength, electric potential, and parallel plate capacitors.",
    token: "STATIK12",
    labType: "dc",
    labBadge: "Electrostatics & Circuit Lab",
    ytId: "mhIOylZMg6Q",
    conceptHtml: `
      <div class="space-y-3">
        <p><strong>1. Hukum Coulomb & Medan Listrik:</strong> Gaya interaksi elektrostatis antara dua muatan titik berbanding lurus dengan besar kedua muatan dan berbanding terbalik dengan kuadrat jaraknya:</p>
        <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl font-bold text-blue-900">
          $$F = k \\frac{|q_1 q_2|}{r^2} \\quad | \\quad E = k \\frac{|q|}{r^2} \\quad | \\quad C = \\frac{Q}{V}$$
        </div>
      </div>`,
    conclusionHtml: `<ul class="list-disc list-inside space-y-1.5"><li>Gaya Coulomb dan Medan Listrik merupakan besaran vektor, sedangkan Potensial Listrik ($V = kq/r$) adalah besaran skalar.</li><li>Kapasitor menyimpan energi listrik sebesar $W = \\frac{1}{2}CV^2$.</li></ul>`,
    quickQuiz: { q: "Jika jarak dua muatan diperbesar menjadi 3 kali semula, gaya Coulomb menjadi...", opts: ["1/3 kali semula", "1/6 kali semula", "1/9 kali semula"], ans: 2 },
    questions: [
      { id: 1201, text: "Two charges $q_1 = 2\\,\\mu\\text{C}$ and $q_2 = 3\\,\\mu\\text{C}$ are $3\\text{ cm}$ apart ($k = 9\\times 10^9\\text{ N m}^2/\\text{C}^2$). The Coulomb force is...", options: ["$30\\text{ N}$", "$60\\text{ N}$", "$90\\text{ N}$", "$120\\text{ N}$"], correct: 1, discussion: "$F = \\frac{k q_1 q_2}{r^2} = \\frac{9\\times 10^9 \\times 6\\times 10^{-12}}{(0.03)^2} = 60\\text{ N}$." }
    ]
  },
  {
    id: "xii-dc",
    grade: "12",
    title: "Direct Current Electricity (DC)",
    desc: "Ohm's Law, Kirchhoff's loop laws, series/parallel resistors, and electrical power.",
    token: "LISTRIK12",
    labType: "dc",
    labBadge: "Ohm's Law DC Lab",
    ytId: "mhIOylZMg6Q",
    conceptHtml: `
      <div class="space-y-3">
        <p><strong>1. Hukum Ohm & Hukum Kirchhoff:</strong> Jumlah arus yang masuk ke suatu titik percabangan sama dengan jumlah arus yang keluar ($\\sum I_{\\text{masuk}} = \\sum I_{\\text{keluar}}$).</p>
        <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl font-bold text-blue-900">
          $$I = \\frac{V}{R} \\quad | \\quad P = V \\cdot I = I^2 R = \\frac{V^2}{R}$$
        </div>
      </div>`,
    conclusionHtml: `<ul class="list-disc list-inside space-y-1.5"><li>Hambatan pengganti seri: $R_s = R_1 + R_2 + \\dots$ (memperbesar hambatan).</li><li>Hambatan pengganti paralel: $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots$ (memperkecil hambatan).</li></ul>`,
    quickQuiz: { q: "Lampu $12\\text{ V} / 24\\text{ W}$ dialiri arus normal sebesar...", opts: ["$0{,}5\\text{ A}$", "$2\\text{ A}$", "$12\\text{ A}$"], ans: 1 },
    questions: [
      { id: 1202, text: "A conductor with $R = 12\\,\\Omega$ carries a current of $2\\text{ A}$ for $5\\text{ s}$. The total charge passed is...", options: ["$5\\text{ C}$", "$10\\text{ C}$", "$15\\text{ C}$", "$20\\text{ C}$"], correct: 1, discussion: "$Q = I \\cdot t = 2 \\times 5 = 10\\text{ C}$." }
    ]
  },
  {
    id: "xii-magnet",
    grade: "12",
    title: "Magnetism & Magnetic Induction",
    desc: "Biot-Savart Law, Lorentz force, Faraday's law of induction, and Lenz's law.",
    token: "MAGNET12",
    labType: "dc",
    labBadge: "Electromagnetic Lab",
    ytId: "mhIOylZMg6Q",
    conceptHtml: `
      <div class="space-y-3">
        <p><strong>1. Medan Magnet & Gaya Lorentz:</strong> Kawat lurus panjang berarus $I$ menghasilkan induksi magnetik $B = \\frac{\\mu_0 I}{2\\pi a}$ pada jarak $a$.</p>
        <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl font-bold text-blue-900">
          $$F_L = B I L \\sin\\theta \\quad | \\quad \\varepsilon = -N \\frac{\\Delta\\Phi}{\\Delta t}$$
        </div>
      </div>`,
    conclusionHtml: `<ul class="list-disc list-inside space-y-1.5"><li>GGL induksi hanya muncul ketika terjadi perubahan fluks magnetik pada kumparan.</li><li>Transformator step-up menaikkan tegangan dengan jumlah lilitan sekunder lebih banyak ($N_s > N_p$).</li></ul>`,
    quickQuiz: { q: "GGL induksi pada kumparan dapat diperbesar dengan cara berikut, KECUALI...", opts: ["Memperbanyak jumlah lilitan", "Menggerakkan magnet lebih cepat", "Mendiamkan magnet di dalam kumparan"], ans: 2 },
    questions: [
      { id: 1203, text: "A straight wire carries $5\\text{ A}$. Magnetic field at distance $10\\text{ cm}$ ($\\mu_0 = 4\\pi\\times 10^{-7}$) is...", options: ["$10^{-5}\\text{ T}$", "$2\\times 10^{-5}\\text{ T}$", "$10^{-6}\\text{ T}$", "$2\\times 10^{-6}\\text{ T}$"], correct: 0, discussion: "$B = \\frac{\\mu_0 I}{2\\pi a} = \\frac{4\\pi \\times 10^{-7} \\times 5}{2\\pi \\times 0.1} = 10^{-5}\\text{ Tesla}$." }
    ]
  },
  {
    id: "xii-ac",
    grade: "12",
    title: "Alternating Current Circuits (AC)",
    desc: "Sinusoidal AC, R-L-C series impedance, phase angle, power factor, and resonance.",
    token: "AC12",
    labType: "dc",
    labBadge: "AC Impedance Lab",
    ytId: "mhIOylZMg6Q",
    conceptHtml: `
      <div class="space-y-3">
        <p><strong>1. Impedansi Rangkaian Seri R-L-C:</strong> Hambatan total rangkaian arus bolak-balik ditentukan secara fasor:</p>
        <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl font-bold text-blue-900">
          $$Z = \\sqrt{R^2 + (X_L - X_C)^2} \\quad | \\quad f_r = \\frac{1}{2\\pi\\sqrt{LC}}$$
        </div>
      </div>`,
    conclusionHtml: `<ul class="list-disc list-inside space-y-1.5"><li>Jika $X_L > X_C$, rangkaian bersifat induktif (tegangan mendahului arus).</li><li>Saat resonansi ($X_L = X_C$), impedansi minimum ($Z = R$) dan arus mencapai nilai maksimum.</li></ul>`,
    quickQuiz: { q: "Pada saat terjadi resonansi dalam rangkaian seri R-L-C, besar impedansi $Z$ sama dengan...", opts: ["$0$", "$R$", "$X_L + X_C$"], ans: 1 },
    questions: [
      { id: 1204, text: "In an RLC series circuit, resonance occurs when...", options: ["$X_L = X_C$", "$X_L > X_C$", "$R = 0$", "$Z = 0$"], correct: 0, discussion: "Resonance happens when inductive reactance equals capacitive reactance ($X_L = X_C$)." }
    ]
  },
  {
    id: "xii-gelombang-em",
    grade: "12",
    title: "Electromagnetic Waves & Spectrum",
    desc: "EM wave spectrum, wavelength/frequency relationships, photon energy, and applications.",
    token: "GELOMBANG12",
    labType: "projectile",
    labBadge: "Wave Propagation Lab",
    ytId: "mhIOylZMg6Q",
    conceptHtml: `
      <div class="space-y-3">
        <p><strong>1. Sifat & Spektrum Gelombang EM:</strong> Gelombang elektromagnetik merupakan gelombang transversal yang dapat merambat di ruang hampa dengan kelajuan cahaya $c = 3 \\times 10^8\\text{ m/s}$.</p>
        <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl font-bold text-blue-900">
          $$c = \\lambda \\cdot f \\quad | \\quad E = h \\cdot f = \\frac{h c}{\\lambda}$$
        </div>
      </div>`,
    conclusionHtml: `<ul class="list-disc list-inside space-y-1.5"><li>Semakin tinggi frekuensi gelombang EM, semakin besar energi foton dan daya tembusnya.</li><li>Gelombang radio memiliki panjang gelombang paling besar, sedangkan sinar gamma paling kecil.</li></ul>`,
    quickQuiz: { q: "Kelajuan seluruh spektrum gelombang elektromagnetik di ruang hampa adalah...", opts: ["$3 \\times 10^6\\text{ m/s}$", "$3 \\times 10^8\\text{ m/s}$", "$3 \\times 10^{10}\\text{ m/s}$"], ans: 1 },
    questions: [
      { id: 1205, text: "Which electromagnetic wave has the highest photon energy?", options: ["Radio Waves", "Microwaves", "Visible Light", "Gamma Rays"], correct: 3, discussion: "Gamma rays have the highest frequency and therefore highest photon energy ($E = hf$)." }
    ]
  }
];
