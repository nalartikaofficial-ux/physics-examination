// =========================================================================
// MATERI ESENSIAL & 8 VIRTUAL LAB KELAS 10 (SEMESTER 1)
// SMA MUHAMMADIYAH 18 JAKARTA
// =========================================================================

window.MATERI_KELAS_10 = [
  {
    id: "x-pengukuran",
    grade: "10",
    title: "Pengukuran & Kerja Ilmiah",
    desc: "Jangka sorong, mikrometer sekrup, termometer, neraca tiga lengan, angka penting, dan analisis dimensi.",
    token: "UKUR10",
    ytId: "2v9P7wN9f5E",
    subLabs: [
      { id: "caliper", name: "1. Jangka Sorong" },
      { id: "micrometer", name: "2. Mikrometer Sekrup" },
      { id: "thermometer", name: "3. Termometer" },
      { id: "balance", name: "4. Neraca Ohaus" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <h4 class="font-extrabold text-blue-900 text-sm mb-1">A. Alat Ukur Panjang Presisi</h4>
          <ul class="list-disc list-inside text-xs space-y-1 text-slate-700">
            <li><strong>Jangka Sorong (Ketelitian $0{,}01\\text{ cm}$ / $0{,}1\\text{ mm}$):</strong><br>$\\text{Hasil} = \\text{Skala Utama} + (\\text{Skala Nonius} \\times 0{,}01\\text{ cm})$</li>
            <li><strong>Mikrometer Sekrup (Ketelitian $0{,}01\\text{ mm}$):</strong><br>$\\text{Hasil} = \\text{Skala Utama} + (\\text{Skala Putar} \\times 0{,}01\\text{ mm})$</li>
          </ul>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1">B. Alat Ukur Suhu & Massa</h4>
          <ul class="list-disc list-inside text-xs space-y-1 text-slate-700">
            <li><strong>Termometer:</strong> Perbandingan skala $\\text{C} : \\text{R} : (\\text{F} - 32) : (\\text{K} - 273) = 5 : 4 : 9 : 5$.</li>
            <li><strong>Neraca Ohaus Tiga Lengan:</strong> Menjumlahkan posisi anak timbangan lengan ratusan, puluhan, dan satuan (ketelitian $0{,}1\\text{ gram}$).</li>
          </ul>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
          <h4 class="font-extrabold text-amber-900 text-sm mb-1">C. Analisis Dimensi Besaran Turunan</h4>
          <p class="text-xs text-slate-700">Gaya: $[F] = [M][L][T]^{-2}$  |  Usaha/Energi: $[W] = [M][L]^2[T]^{-2}$  |  Tekanan: $[P] = [M][L]^{-1}[T]^{-2}$.</p>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Pemilihan alat ukur disesuaikan dengan tingkat ketelitian yang dibutuhkan (mikrometer untuk ketebalan pelat tipis, jangka sorong untuk diameter silinder).</li>
        <li>Setiap pengukuran tunggal memiliki ketidakpastian mutlak sebesar $\\Delta x = \\frac{1}{2} \\times \\text{nilai skala terkecil (nst)}$.</li>
        <li>Analisis dimensi digunakan untuk menguji kebenaran suatu persamaan fisika.</li>
      </ul>`,
    quickQuiz: {
      q: "Hasil pengukuran mikrometer sekrup menunjukkan skala utama $4{,}5\\text{ mm}$ dan skala putar berimpit di angka $23$. Tebal benda adalah...",
      opts: ["$4{,}23\\text{ mm}$", "$4{,}73\\text{ mm}$", "$6{,}80\\text{ mm}$"],
      ans: 1
    },
    questions: [
      { id: 1001, text: "Dimensi dari Usaha / Energi ($W = F \\cdot s$) dalam besaran pokok adalah...", options: ["$[M][L][T]^{-1}$", "$[M][L][T]^{-2}$", "$[M][L]^2[T]^{-2}$", "$[M][L]^2[T]^{-1}$"], correct: 2, discussion: "Satuan usaha adalah $\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$, sehingga dimensinya $[M][L]^2[T]^{-2}$." }
    ]
  },
  {
    id: "x-energi",
    grade: "10",
    title: "Energi & Kekekalan Energi Mekanik",
    desc: "Energi potensial gravitasi, energi kinetik, hukum kekekalan energi mekanik, dan energi terbarukan.",
    token: "ENERGI10",
    ytId: "mhIOylZMg6Q",
    subLabs: [
      { id: "ep_lab", name: "1. Energi Potensial (Ep)" },
      { id: "ek_lab", name: "2. Energi Kinetik (Ek)" },
      { id: "em_lab", name: "3. Energi Mekanik (Em)" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
          <h4 class="font-extrabold text-blue-900 text-sm mb-1">1. Energi Potensial Gravitasi ($E_p$)</h4>
          <p class="text-xs text-slate-700 mb-1">Energi yang tersimpan akibat posisi ketinggian benda terhadap acuan tanah:</p>
          <div class="font-bold text-blue-900 text-sm">$$E_p = m \\cdot g \\cdot h$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1">2. Energi Kinetik ($E_k$)</h4>
          <p class="text-xs text-slate-700 mb-1">Energi yang dimiliki benda karena kelajuan geraknya ($E_k \\propto v^2$):</p>
          <div class="font-bold text-emerald-900 text-sm">$$E_k = \\frac{1}{2} \\cdot m \\cdot v^2$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
          <h4 class="font-extrabold text-amber-900 text-sm mb-1">3. Hukum Kekekalan Energi Mekanik ($E_m$)</h4>
          <p class="text-xs text-slate-700 mb-1">Pada lintasan licin tanpa gesekan, total energi mekanik selalu konstan:</p>
          <div class="font-bold text-amber-900 text-sm">$$E_{m1} = E_{m2} \\Rightarrow E_{p1} + E_{k1} = E_{p2} + E_{k2}$$</div>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Saat benda jatuh bebas, energi potensial berkurang dan berubah menjadi energi kinetik dengan jumlah total tetap.</li>
        <li>Jika kelajuan benda menjadi 2 kali lipat, energi kinetiknya menjadi 4 kali lipat.</li>
        <li>Pada lintasan kasar ($\\mu > 0$), sebagian energi mekanik berubah menjadi energi panas (termal).</li>
      </ul>`,
    quickQuiz: {
      q: "Benda bermassa $2\\text{ kg}$ jatuh bebas dari ketinggian $5\\text{ m}$ ($g = 10\\text{ m/s}^2$). Kelajuan benda tepat saat menyentuh tanah adalah...",
      opts: ["$5\\text{ m/s}$", "$10\\text{ m/s}$", "$50\\text{ m/s}$"],
      ans: 1
    },
    questions: [
      { id: 1002, text: "Sebuah benda bermassa $2\\text{ kg}$ berada pada ketinggian $10\\text{ m}$ ($g = 10\\text{ m/s}^2$). Besar energi potensialnya adalah...", options: ["$20\\text{ J}$", "$100\\text{ J}$", "$200\\text{ J}$", "$400\\text{ J}$"], correct: 2, discussion: "$E_p = mgh = 2 \\times 10 \\times 10 = 200\\text{ Joule}$." }
    ]
  },
  {
    id: "x-pemanasan-global",
    grade: "10",
    title: "Pemanasan Global & Perubahan Iklim",
    desc: "Mekanisme efek rumah kaca, gas emisi karbon, efek albedo es kutub, dan mitigasi energi bersih.",
    token: "IKLIM10",
    ytId: "G4H1N_yXBiA",
    subLabs: [
      { id: "climate", name: "1. Simulasi Efek Rumah Kaca" }
    ],
    conceptHtml: `
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
          <h4 class="font-extrabold text-rose-900 text-sm mb-1">1. Fisika Efek Rumah Kaca (Greenhouse Effect)</h4>
          <p class="text-xs text-slate-700 leading-relaxed">Radiasi matahari berpanjang gelombang pendek menembus atmosfer dan menghangatkan permukaan bumi. Permukaan bumi memancarkan kembali panas berupa <strong>radiasi inframerah gelombang panjang</strong> yang diserap dan dipantulkan kembali ke permukaan oleh gas rumah kaca ($\\text{CO}_2, \\text{CH}_4, \\text{N}_2\\text{O}$).</p>
        </div>
        <div class="p-4 rounded-2xl bg-sky-50/70 border border-sky-200">
          <h4 class="font-extrabold text-sky-900 text-sm mb-1">2. Efek Albedo & Umpan Balik Iklim</h4>
          <p class="text-xs text-slate-700 leading-relaxed"><strong>Albedo</strong> adalah fraksi radiasi matahari yang dipantulkan permukaan bumi. Lapisan es kutub memiliki albedo tinggi ($\\sim 80\\%$). Ketika es mencair akibat kenaikan suhu, permukaan laut gelap menyerap lebih banyak panas sehingga pemanasan semakin cepat.</p>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Efek rumah kaca alami menjaga suhu bumi tetap hangat ($\\sim 14^\\circ\\text{C}$), namun emisi fosil berlebih memicu pemanasan global.</li>
        <li>Solusi mitigasi meliputi transisi ke energi terbarukan, efisiensi energi, dan konservasi hutan.</li>
      </ul>`,
    quickQuiz: {
      q: "Radiasi panas yang dipancarkan kembali oleh permukaan bumi dan diperangkap gas rumah kaca adalah...",
      opts: ["Sinar Ultraviolet", "Radiasi Inframerah", "Sinar-X"],
      ans: 1
    },
    questions: [
      { id: 1003, text: "Gas rumah kaca utama yang dihasilkan dari pembakaran bahan bakar fosil dan aktivitas industri adalah...", options: ["$\\text{CO}_2$", "$\\text{O}_2$", "$\\text{N}_2$", "$\\text{He}$"], correct: 0, discussion: "Karbon dioksida ($\\text{CO}_2$) merupakan kontributor utama peningkatan efek rumah kaca antropogenik." }
    ]
  }
];
