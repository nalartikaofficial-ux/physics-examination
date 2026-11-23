// =========================================================================
// MATERI ESENSIAL & 8 VIRTUAL LAB MANDIRI KELAS 10 (SEMESTER 1)
// SMA MUHAMMADIYAH 18 JAKARTA — GURU: FADHILLAH UMAR, S.Pd.
// =========================================================================

window.MATERI_KELAS_10 = [
  {
    id: "x-pengukuran",
    grade: "10",
    title: "Pengukuran & Kerja Ilmiah",
    desc: "Jangka sorong, mikrometer sekrup, termometer 4 skala, neraca tiga lengan, angka penting, dan dimensi.",
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
          <h4 class="font-extrabold text-blue-900 text-sm mb-1.5">A. Alat Ukur Panjang Presisi</h4>
          <ul class="list-disc list-inside text-xs space-y-1.5 text-slate-700">
            <li><strong>Jangka Sorong (Ketelitian $0{,}01\\text{ cm}$ / $0{,}1\\text{ mm}$):</strong> Digunakan mengukur diameter luar, diameter dalam, dan kedalaman tabung.<br>
            <span class="font-bold text-blue-900">$\\text{Hasil} = \\text{Skala Utama (SU)} + (\\text{Skala Nonius (SN)} \\times 0{,}01\\text{ cm})$</span></li>
            <li><strong>Mikrometer Sekrup (Ketelitian $0{,}01\\text{ mm}$):</strong> Digunakan mengukur ketebalan pelat tipis atau diameter kawat.<br>
            <span class="font-bold text-blue-900">$\\text{Hasil} = \\text{Skala Utama (SU)} + (\\text{Skala Putar (SP)} \\times 0{,}01\\text{ mm})$</span></li>
          </ul>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1.5">B. Alat Ukur Suhu & Massa</h4>
          <ul class="list-disc list-inside text-xs space-y-1.5 text-slate-700">
            <li><strong>Konversi Termometer:</strong> Perbandingan titik tetap bawah dan atas menghasilkan:<br>
            <span class="font-bold text-emerald-900">$\\text{C} : \\text{R} : (\\text{F} - 32) : (\\text{K} - 273) = 5 : 4 : 9 : 5$</span></li>
            <li><strong>Neraca Ohaus Tiga Lengan:</strong> Ketelitian $0{,}1\\text{ gram}$ dengan menjumlahkan lengan ratusan, puluhan, dan satuan.</li>
          </ul>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
          <h4 class="font-extrabold text-amber-900 text-sm mb-1">C. Analisis Dimensi Besaran Turunan</h4>
          <p class="text-xs text-slate-700">Gaya: $[F] = [M][L][T]^{-2}$  |  Usaha/Energi: $[W] = [M][L]^2[T]^{-2}$  |  Daya: $[P] = [M][L]^2[T]^{-3}$  |  Tekanan: $[p] = [M][L]^{-1}[T]^{-2}$.</p>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Pemilihan alat ukur wajib menyesuaikan tingkat ketelitian benda yang diukur.</li>
        <li>Ketidakpastian pengukuran tunggal bernilai setengah dari nilai skala terkecil ($\\Delta x = \\frac{1}{2}\\text{ nst}$).</li>
        <li>Analisis dimensi memverifikasi kesetaraan satuan pada kedua ruas persamaan fisika.</li>
      </ul>`,
    quickQuiz: {
      q: "Hasil pengukuran mikrometer sekrup menunjukkan skala utama $4{,}5\\text{ mm}$ dan skala putar berimpit di garis ke-$23$. Tebal pelat logam adalah...",
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
    desc: "Energi potensial gravitasi, energi kinetik, hukum kekekalan energi mekanik, dan transformasi energi.",
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
          <p class="text-xs text-slate-700 mb-1">Energi yang dimiliki benda karena posisi ketinggiannya ($h$) terhadap bidang acuan:</p>
          <div class="font-bold text-blue-900 text-sm">$$E_p = m \\cdot g \\cdot h$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <h4 class="font-extrabold text-emerald-900 text-sm mb-1">2. Energi Kinetik ($E_k$)</h4>
          <p class="text-xs text-slate-700 mb-1">Energi yang dimiliki benda akibat geraknya ($E_k$ berbanding lurus dengan kuadrat kelajuan $v^2$):</p>
          <div class="font-bold text-emerald-900 text-sm">$$E_k = \\frac{1}{2} \\cdot m \\cdot v^2$$</div>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
          <h4 class="font-extrabold text-amber-900 text-sm mb-1">3. Hukum Kekekalan Energi Mekanik ($E_m$)</h4>
          <p class="text-xs text-slate-700 mb-1">Pada lintasan licin (gaya konservatif), jumlah energi potensial dan kinetik selalu tetap:</p>
          <div class="font-bold text-amber-900 text-sm">$$E_{m1} = E_{m2} \\Rightarrow mgh_1 + \\frac{1}{2}mv_1^2 = mgh_2 + \\frac{1}{2}mv_2^2$$</div>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Pada benda jatuh bebas, energi potensial berkurang dan seluruhnya berubah menjadi energi kinetik.</li>
        <li>Kelajuan benda jatuh bebas dari ketinggian $H$ tanpa kecepatan awal adalah $v = \\sqrt{2gH}$ (tidak bergantung pada massa).</li>
        <li>Jika lintasan kasar ($\\mu > 0$), sebagian energi mekanik terkonversi menjadi energi panas (termal).</li>
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
          <h4 class="font-extrabold text-sky-900 text-sm mb-1">2. Efek Albedo & Keseimbangan Termal Bumi</h4>
          <p class="text-xs text-slate-700 leading-relaxed"><strong>Albedo</strong> adalah fraksi radiasi matahari yang dipantulkan kembali ke angkasa. Es kutub memiliki albedo tinggi ($\\sim 80\\%$). Mencairnya es menurunkan albedo bumi sehingga lebih banyak energi panas terserap lautan.</p>
        </div>
      </div>`,
    conclusionHtml: `
      <ul class="list-disc list-inside space-y-2">
        <li>Efek rumah kaca alami menjaga suhu bumi tetap layak huni ($\\sim 14^\\circ\\text{C}$), namun emisi fosil berlebih memicu pemanasan global.</li>
        <li>Mitigasi dilakukan melalui efisiensi energi, reboisasi, dan transisi menuju energi terbarukan.</li>
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

// =========================================================================
// REGISTRASI MESIN GRAFIS VIRTUAL LAB MANDIRI KELAS 10
// =========================================================================
window.VLAB_ENGINES = window.VLAB_ENGINES || {};

// 1A. JANGKA SORONG (VERNIER CALIPER)
window.VLAB_ENGINES['caliper'] = {
  init(st, dom) {
    st.p1 = 24; // 2.40 cm
    dom.titleEl.innerText = "Virtual Lab 1A: Jangka Sorong (Ketelitian 0,01 cm)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Kontrol Rahang Geser</h4>
      <div class="flex justify-between text-xs font-bold"><span>Diameter Silinder</span><span id="vl-v1" class="text-blue-800">2,40 cm</span></div>
      <input type="range" min="4" max="65" step="1" value="24" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=(this.value/10).toFixed(2).replace('.',',')+' cm'; drawVLab();">
      <p class="text-[11px] text-slate-500">Garis merah menunjukkan skala nonius yang berimpit lurus dengan skala utama.</p>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Skala Utama (cm)</th><th class="p-2.5">Skala Nonius (cm)</th><th class="p-2.5">Hasil Ukur (cm)</th><th class="p-2.5">Dalam mm</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const valCm = (st.p1 / 10).toFixed(2);
    const su = Math.floor(st.p1 / 10).toFixed(1);
    const snIdx = st.p1 % 10;
    const sn = (snIdx * 0.01).toFixed(2);

    // Rahang Tetap & Batang Skala Utama
    ctx.fillStyle = '#0d2347'; ctx.fillRect(60, 75, 22, 165);
    ctx.fillStyle = '#e2e8f0'; ctx.fillRect(82, 105, 580, 48);
    ctx.strokeStyle = '#334155'; ctx.lineWidth = 1.5; ctx.strokeRect(82, 105, 580, 48);

    // Garis Skala Utama (cm & mm)
    for (let i = 0; i <= 70; i++) {
      const x = 100 + i * 7.8;
      const tickH = i % 10 === 0 ? 22 : (i % 5 === 0 ? 15 : 10);
      ctx.beginPath(); ctx.moveTo(x, 153); ctx.lineTo(x, 153 - tickH); ctx.stroke();
      if (i % 10 === 0) {
        ctx.fillStyle = '#0f172a'; ctx.font = 'bold 11px JetBrains Mono';
        ctx.fillText(i / 10, x - 3, 125);
      }
    }

    // Rahang Geser & Skala Nonius
    const shift = st.p1 * 7.8;
    ctx.fillStyle = 'rgba(30, 64, 175, 0.14)'; ctx.fillRect(100 + shift, 153, 95, 44);
    ctx.strokeStyle = '#1e40af'; ctx.strokeRect(100 + shift, 153, 95, 44);
    ctx.fillStyle = '#1e40af'; ctx.fillRect(82 + shift, 153, 18, 87);

    for (let j = 0; j <= 10; j++) {
      const vx = 100 + shift + j * 7.02;
      ctx.strokeStyle = (j === snIdx) ? '#e11d48' : '#1e40af';
      ctx.lineWidth = (j === snIdx) ? 2.5 : 1.2;
      ctx.beginPath(); ctx.moveTo(vx, 153); ctx.lineTo(vx, 172); ctx.stroke();
      if (j === 0 || j === 5 || j === 10 || j === snIdx) {
        ctx.fillStyle = (j === snIdx) ? '#e11d48' : '#1e3a8a';
        ctx.font = 'bold 10px JetBrains Mono';
        ctx.fillText(j, vx - 3, 186);
      }
    }

    // Benda Silinder Terjepit
    if (shift > 4) {
      ctx.fillStyle = '#d97706'; ctx.fillRect(82, 200, shift, 38);
      ctx.strokeStyle = '#92400e'; ctx.strokeRect(82, 200, shift, 38);
    }

    dom.hudEl.innerHTML = `<div>Pembacaan: <b class="text-blue-800">${valCm} cm</b> (${st.p1} mm)</div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Rincian Skala</div><p>Skala Utama (SU): <b>${su} cm</b><br>Skala Nonius ke-${snIdx}: <b>${sn} cm</b><br>Total: <b>${valCm} cm</b></p>`;
  },
  record(st, idx) {
    const su = Math.floor(st.p1 / 10).toFixed(1), sn = ((st.p1 % 10) * 0.01).toFixed(2), cm = (st.p1 / 10).toFixed(2);
    return [idx, su, sn, cm, st.p1 + ' mm'];
  }
};

// 1B. MIKROMETER SEKRUP
window.VLAB_ENGINES['micrometer'] = {
  init(st, dom) {
    st.p1 = 435; // 4.35 mm
    dom.titleEl.innerText = "Virtual Lab 1B: Mikrometer Sekrup (Ketelitian 0,01 mm)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Kontrol Thimble (Selubung Putar)</h4>
      <div class="flex justify-between text-xs font-bold"><span>Ketebalan Benda</span><span id="vl-v1" class="text-blue-800">4,35 mm</span></div>
      <input type="range" min="50" max="950" step="5" value="435" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=(this.value/100).toFixed(2).replace('.',',')+' mm'; drawVLab();">`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Skala Utama (mm)</th><th class="p-2.5">Skala Putar (mm)</th><th class="p-2.5">Hasil Ukur (mm)</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const valMm = (st.p1 / 100).toFixed(2);
    const su = (Math.floor(st.p1 / 50) * 0.5).toFixed(1);
    const spIdx = st.p1 % 50;
    const sp = (spIdx * 0.01).toFixed(2);

    // Frame U & Anvil
    ctx.strokeStyle = '#334155'; ctx.lineWidth = 14;
    ctx.beginPath(); ctx.arc(170, 210, 95, 0.1 * Math.PI, 0.9 * Math.PI); ctx.stroke();
    ctx.fillStyle = '#64748b'; ctx.fillRect(75, 145, 55, 36);

    // Benda Ukur
    const gap = (st.p1 / 100) * 11;
    ctx.fillStyle = '#d97706'; ctx.fillRect(130, 138, gap, 50);

    // Spindle & Sleeve (Skala Utama)
    const sx = 130 + gap;
    ctx.fillStyle = '#94a3b8'; ctx.fillRect(sx, 152, 40, 22);
    ctx.fillStyle = '#f1f5f9'; ctx.fillRect(sx + 40, 135, 170, 56);
    ctx.strokeStyle = '#0f172a'; ctx.lineWidth = 1.5; ctx.strokeRect(sx + 40, 135, 170, 56);
    ctx.beginPath(); ctx.moveTo(sx + 40, 163); ctx.lineTo(sx + 210, 163); ctx.stroke();

    for (let k = 0; k <= 10; k++) {
      const tx = sx + 48 + k * 14;
      ctx.beginPath(); ctx.moveTo(tx, 163); ctx.lineTo(tx, 148); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(tx + 7, 163); ctx.lineTo(tx + 7, 176); ctx.stroke();
    }

    // Thimble (Skala Putar)
    ctx.fillStyle = '#1e3a8a'; ctx.fillRect(sx + 210, 120, 85, 86);
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 11px JetBrains Mono';
    ctx.fillText(`Garis: ${spIdx}`, sx + 220, 167);

    dom.hudEl.innerHTML = `<div>Ketebalan: <b class="text-blue-800">${valMm} mm</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Rincian Mikrometer</div><p>Skala Utama: <b>${su} mm</b><br>Skala Putar ke-${spIdx}: <b>${sp} mm</b><br>Total: <b>${valMm} mm</b></p>`;
  },
  record(st, idx) {
    return [idx, (Math.floor(st.p1 / 50) * 0.5).toFixed(1), ((st.p1 % 50) * 0.01).toFixed(2), (st.p1 / 100).toFixed(2)];
  }
};

// 1C. TERMOMETER 4 SKALA
window.VLAB_ENGINES['thermometer'] = {
  init(st, dom) {
    st.p1 = 25;
    dom.titleEl.innerText = "Virtual Lab 1C: Perbandingan & Konversi Skala Termometer";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Pengatur Suhu (°C)</h4>
      <div class="flex justify-between text-xs font-bold"><span>Suhu Celcius</span><span id="vl-v1" class="text-rose-700">25 °C</span></div>
      <input type="range" min="0" max="100" step="5" value="25" class="w-full accent-rose-600" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' °C'; drawVLab();">`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Celcius (°C)</th><th class="p-2.5">Reamur (°R)</th><th class="p-2.5">Fahrenheit (°F)</th><th class="p-2.5">Kelvin (K)</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const c = st.p1, r = (0.8 * c).toFixed(1), f = (1.8 * c + 32).toFixed(1), k = (c + 273).toFixed(1);
    const items = [
      { label: 'Celcius', val: c + ' °C', min: '0°', max: '100°', col: '#e11d48' },
      { label: 'Reamur', val: r + ' °R', min: '0°', max: '80°', col: '#d97706' },
      { label: 'Fahrenheit', val: f + ' °F', min: '32°', max: '212°', col: '#2563eb' },
      { label: 'Kelvin', val: k + ' K', min: '273', max: '373', col: '#059669' }
    ];
    items.forEach((it, i) => {
      const x = 135 + i * 145;
      ctx.fillStyle = '#e2e8f0'; ctx.fillRect(x, 85, 22, 185);
      const fillH = (c / 100) * 175;
      ctx.fillStyle = it.col; ctx.fillRect(x + 4, 270 - fillH, 14, fillH);
      ctx.beginPath(); ctx.arc(x + 11, 276, 17, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#0f172a'; ctx.font = 'bold 11px Plus Jakarta Sans';
      ctx.fillText(it.val, x - 12, 72);
      ctx.fillText(it.label, x - 14, 315);
      ctx.fillStyle = '#64748b'; ctx.font = '10px JetBrains Mono';
      ctx.fillText(it.max, x + 28, 95);
      ctx.fillText(it.min, x + 28, 268);
    });
    dom.hudEl.innerHTML = `<div>${c}°C = ${r}°R = ${f}°F = ${k} K</div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Hasil Konversi</div><p>Celcius: <b>${c} °C</b><br>Reamur: <b>${r} °R</b><br>Fahrenheit: <b>${f} °F</b><br>Kelvin: <b>${k} K</b></p>`;
  },
  record(st, idx) {
    const c = st.p1;
    return [idx, c + ' °C', (0.8 * c).toFixed(1) + ' °R', (1.8 * c + 32).toFixed(1) + ' °F', (c + 273).toFixed(1) + ' K'];
  }
};

// 1D. NERACA OHAUS TIGA LENGAN
window.VLAB_ENGINES['balance'] = {
  init(st, dom) {
    st.p1 = 200; st.p2 = 40; st.p3 = 6.5;
    dom.titleEl.innerText = "Virtual Lab 1D: Neraca Ohaus Tiga Lengan (Ketelitian 0,1 g)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Posisi Beban Geser</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Lengan Ratusan</span><span id="vl-v1">200 g</span></div>
      <input type="range" min="0" max="500" step="100" value="200" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' g'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Lengan Puluhan</span><span id="vl-v2">40 g</span></div>
      <input type="range" min="0" max="90" step="10" value="40" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' g'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Lengan Satuan</span><span id="vl-v3">6.5 g</span></div>
      <input type="range" min="0" max="9.5" step="0.5" value="6.5" class="w-full accent-amber-600" oninput="vlabState.p3=+this.value; document.getElementById('vl-v3').innerText=this.value+' g'; drawVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Ratusan (g)</th><th class="p-2.5">Puluhan (g)</th><th class="p-2.5">Satuan (g)</th><th class="p-2.5">Massa Total (g)</th><th class="p-2.5">Dalam kg</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const tot = st.p1 + st.p2 + st.p3;
    const arms = [
      { label: 'Lengan Ratusan (0–500 g)', val: st.p1, max: 500, y: 110, col: '#1e40af' },
      { label: 'Lengan Puluhan (0–100 g)', val: st.p2, max: 100, y: 180, col: '#059669' },
      { label: 'Lengan Satuan (0–10 g)', val: st.p3, max: 10, y: 250, col: '#d97706' }
    ];
    arms.forEach(a => {
      ctx.fillStyle = '#cbd5e1'; ctx.fillRect(100, a.y, 520, 14);
      const px = 100 + (a.val / a.max) * 490;
      ctx.fillStyle = a.col; ctx.fillRect(px, a.y - 10, 26, 34);
      ctx.fillStyle = '#0f172a'; ctx.font = 'bold 11px Plus Jakarta Sans';
      ctx.fillText(`${a.label}: ${a.val} g`, 100, a.y - 16);
    });
    dom.hudEl.innerHTML = `<div>Massa Total: <b class="text-blue-800">${tot.toFixed(1)} gram</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Pembacaan Neraca</div><p>Ratusan: ${st.p1} g<br>Puluhan: ${st.p2} g<br>Satuan: ${st.p3.toFixed(1)} g<br>Total: <b>${tot.toFixed(1)} g</b> (${(tot/1000).toFixed(4)} kg)</p>`;
  },
  record(st, idx) {
    const tot = st.p1 + st.p2 + st.p3;
    return [idx, st.p1, st.p2, st.p3.toFixed(1), tot.toFixed(1) + ' g', (tot / 1000).toFixed(4) + ' kg'];
  }
};

// 2A. ENERGI POTENSIAL (Ep)
window.VLAB_ENGINES['ep_lab'] = {
  init(st, dom) {
    st.p1 = 3; st.p2 = 10;
    dom.titleEl.innerText = "Virtual Lab 2A: Eksplorasi Energi Potensial Gravitasi (Ep = m·g·h)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Variabel Percobaan (g = 10 m/s²)</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Massa Benda (m)</span><span id="vl-v1">3 kg</span></div>
      <input type="range" min="1" max="10" step="1" value="3" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' kg'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Ketinggian (h)</span><span id="vl-v2">10 m</span></div>
      <input type="range" min="0" max="20" step="1" value="10" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' m'; drawVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Massa m (kg)</th><th class="p-2.5">Gravitasi g (m/s²)</th><th class="p-2.5">Ketinggian h (m)</th><th class="p-2.5">Energi Potensial Ep (J)</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const ep = st.p1 * 10 * st.p2;
    ctx.fillStyle = '#e2e8f0'; ctx.fillRect(0, 300, W, 60);
    ctx.strokeStyle = '#94a3b8'; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(180, 60); ctx.lineTo(180, 300); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = '#475569'; ctx.font = '11px JetBrains Mono'; ctx.fillText('20 m', 135, 65); ctx.fillText('10 m', 135, 180); ctx.fillText('0 m', 142, 298);

    const by = 300 - (st.p2 / 20) * 230 - 15;
    ctx.beginPath(); ctx.arc(260, by, 15, 0, Math.PI * 2); ctx.fillStyle = '#1e40af'; ctx.fill();
    ctx.strokeStyle = '#d97706'; ctx.lineWidth = 3; ctx.stroke();

    // Batang Ep
    const barH = (ep / 2000) * 220;
    ctx.fillStyle = '#2563eb'; ctx.fillRect(460, 300 - barH, 60, barH);
    ctx.fillStyle = '#0f172a'; ctx.font = 'bold 12px Plus Jakarta Sans'; ctx.fillText(`Ep = ${ep} J`, 455, 290 - barH);

    dom.hudEl.innerHTML = `<div>m = <b>${st.p1} kg</b> | h = <b>${st.p2} m</b></div><div>Ep = <b class="text-blue-800">${ep} Joule</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Analisis Energi Potensial</div><p>Ep = m · g · h = ${st.p1} × 10 × ${st.p2} = <b>${ep} Joule</b></p>`;
  },
  record(st, idx) {
    return [idx, st.p1, 10, st.p2, (st.p1 * 10 * st.p2) + ' J'];
  }
};

// 2B. ENERGI KINETIK (Ek)
window.VLAB_ENGINES['ek_lab'] = {
  init(st, dom) {
    st.p1 = 2; st.p2 = 6;
    dom.titleEl.innerText = "Virtual Lab 2B: Eksplorasi Energi Kinetik (Ek = ½·m·v²)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Variabel Massa & Kelajuan</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Massa Benda (m)</span><span id="vl-v1">2 kg</span></div>
      <input type="range" min="1" max="10" step="1" value="2" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' kg'; resetVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Kelajuan (v)</span><span id="vl-v2">6 m/s</span></div>
      <input type="range" min="0" max="15" step="1" value="6" class="w-full accent-emerald-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' m/s'; resetVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Massa m (kg)</th><th class="p-2.5">Kelajuan v (m/s)</th><th class="p-2.5">v² (m²/s²)</th><th class="p-2.5">Energi Kinetik Ek (J)</th></tr>`;
  },
  step(st, dt) {
    st.t += dt;
    st.x = 0.06 + ((st.p2 * st.t) % 60) / 70;
  },
  draw(ctx, W, H, st, dom) {
    const ek = 0.5 * st.p1 * st.p2 * st.p2;
    ctx.fillStyle = '#cbd5e1'; ctx.fillRect(0, 270, W, 90);
    const bx = 60 + st.x * (W - 180);
    ctx.fillStyle = '#059669'; ctx.fillRect(bx, 220, 70, 50);
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 12px Plus Jakarta Sans'; ctx.fillText(`${st.p1} kg`, bx + 18, 250);

    // Panah Vektor Kecepatan
    if (st.p2 > 0) {
      ctx.strokeStyle = '#d97706'; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(bx + 75, 245); ctx.lineTo(bx + 75 + st.p2 * 6, 245); ctx.stroke();
    }

    dom.hudEl.innerHTML = `<div>m = <b>${st.p1} kg</b> | v = <b>${st.p2} m/s</b></div><div>Ek = <b class="text-emerald-700">${ek} Joule</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Analisis Energi Kinetik</div><p>Ek = ½ · m · v² = ½ · ${st.p1} · (${st.p2})² = <b>${ek} Joule</b></p>`;
  },
  record(st, idx) {
    return [idx, st.p1, st.p2, st.p2 * st.p2, (0.5 * st.p1 * st.p2 * st.p2) + ' J'];
  }
};

// 2C. HUKUM KEKEKALAN ENERGI MEKANIK (Em)
window.VLAB_ENGINES['em_lab'] = {
  init(st, dom) {
    st.p1 = 2; st.p2 = 8; st.p3 = 0;
    dom.titleEl.innerText = "Virtual Lab 2C: Hukum Kekekalan Energi Mekanik (Lintasan Parabolik)";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Parameter Lintasan (g = 10 m/s²)</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Massa Benda (m)</span><span id="vl-v1">2 kg</span></div>
      <input type="range" min="1" max="10" step="1" value="2" class="w-full accent-blue-700" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' kg'; resetVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Ketinggian Awal (h₀)</span><span id="vl-v2">8 m</span></div>
      <input type="range" min="2" max="10" step="1" value="8" class="w-full accent-blue-700" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+' m'; resetVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Koefisien Gesek (μ)</span><span id="vl-v3">0.00</span></div>
      <input type="range" min="0" max="0.25" step="0.05" value="0" class="w-full accent-rose-600" oninput="vlabState.p3=+this.value; document.getElementById('vl-v3').innerText=(+this.value).toFixed(2); resetVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">m (kg)</th><th class="p-2.5">h (m)</th><th class="p-2.5">v (m/s)</th><th class="p-2.5">Ep (J)</th><th class="p-2.5">Ek (J)</th><th class="p-2.5">Em = Ep + Ek (J)</th></tr>`;
  },
  step(st, dt) {
    st.t += dt;
    const u = (st.x - 0.5) * 2;
    const slope = (4 * st.p2 * u) / 12;
    const sinT = slope / Math.sqrt(1 + slope * slope);
    const cosT = 1 / Math.sqrt(1 + slope * slope);
    let a = -10 * sinT;
    if (st.p3 > 0 && Math.abs(st.vx) > 0.001) {
      a -= (st.vx > 0 ? 1 : -1) * st.p3 * 10 * cosT;
    }
    st.vx += a * dt;
    st.x += (st.vx * dt) / 12;
    if (st.x < 0.03) { st.x = 0.03; st.vx = Math.abs(st.vx) * 0.85; }
    if (st.x > 0.97) { st.x = 0.97; st.vx = -Math.abs(st.vx) * 0.85; }
  },
  draw(ctx, W, H, st, dom) {
    const baseY = 310, scaleY = 23;
    ctx.fillStyle = '#e2e8f0'; ctx.fillRect(0, baseY, W, H - baseY);
    ctx.beginPath();
    for (let i = 0; i <= 100; i++) {
      const nx = i / 100, u = (nx - 0.5) * 2;
      const py = baseY - (st.p2 * u * u) * scaleY, px = 40 + nx * (W - 80);
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.strokeStyle = st.p3 > 0 ? '#e11d48' : '#0d2347'; ctx.lineWidth = 5; ctx.stroke();

    const uBall = (st.x - 0.5) * 2;
    const hCurr = st.p2 * uBall * uBall;
    const em0 = st.p1 * 10 * (st.p2 * 0.9 * 0.9);
    const ep = st.p1 * 10 * hCurr;
    let ek = st.p3 === 0 ? Math.max(0, em0 - ep) : 0.5 * st.p1 * st.vx * st.vx;
    const vCurr = Math.sqrt((2 * ek) / st.p1);

    const bx = 40 + st.x * (W - 80), by = baseY - hCurr * scaleY - 12;
    ctx.beginPath(); ctx.arc(bx, by, 12, 0, Math.PI * 2);
    ctx.fillStyle = '#d97706'; ctx.fill(); ctx.strokeStyle = '#0d2347'; ctx.lineWidth = 3; ctx.stroke();

    const maxE = Math.max(1, em0);
    dom.hudEl.innerHTML = `<div>Ketinggian (h): <b>${hCurr.toFixed(2)} m</b></div><div>Kelajuan (v): <b class="text-emerald-700">${vCurr.toFixed(2)} m/s</b></div>`;
    dom.telEl.innerHTML = `
      <div class="font-bold text-slate-800 mb-1">Grafik Kekekalan Energi</div>
      <div><div class="flex justify-between text-blue-700 font-bold"><span>Ep</span><span>${ep.toFixed(1)} J</span></div><div class="h-2.5 bg-slate-100 rounded-full overflow-hidden"><div class="h-full bg-blue-600" style="width:${Math.min(100,(ep/maxE)*100)}%"></div></div></div>
      <div><div class="flex justify-between text-emerald-700 font-bold"><span>Ek</span><span>${ek.toFixed(1)} J</span></div><div class="h-2.5 bg-slate-100 rounded-full overflow-hidden"><div class="h-full bg-emerald-500" style="width:${Math.min(100,(ek/maxE)*100)}%"></div></div></div>
      <div><div class="flex justify-between text-amber-700 font-bold"><span>Em Total</span><span>${(ep+ek).toFixed(1)} J</span></div><div class="h-2.5 bg-slate-100 rounded-full overflow-hidden"><div class="h-full bg-amber-500" style="width:${Math.min(100,((ep+ek)/maxE)*100)}%"></div></div></div>`;
  },
  record(st, idx) {
    const u = (st.x - 0.5) * 2, h = st.p2 * u * u, ep = st.p1 * 10 * h, em0 = st.p1 * 10 * st.p2 * 0.81;
    const ek = st.p3 === 0 ? Math.max(0, em0 - ep) : 0.5 * st.p1 * st.vx * st.vx;
    return [idx, st.p1, h.toFixed(2), Math.sqrt((2 * ek) / st.p1).toFixed(2), ep.toFixed(1), ek.toFixed(1), (ep + ek).toFixed(1)];
  }
};

// 3A. EFEK RUMAH KACA
window.VLAB_ENGINES['climate'] = {
  init(st, dom) {
    st.p1 = 420; st.p2 = 30;
    dom.titleEl.innerText = "Virtual Lab 3A: Simulasi Efek Rumah Kaca & Keseimbangan Radiasi Bumi";
    dom.ctrlEl.innerHTML = `
      <h4 class="text-xs font-extrabold uppercase text-blue-900">Kontrol Atmosfer Bumi</h4>
      <div><div class="flex justify-between text-xs font-bold"><span>Konsentrasi Gas CO₂</span><span id="vl-v1">420 ppm</span></div>
      <input type="range" min="280" max="800" step="20" value="420" class="w-full accent-rose-600" oninput="vlabState.p1=+this.value; document.getElementById('vl-v1').innerText=this.value+' ppm'; drawVLab();"></div>
      <div><div class="flex justify-between text-xs font-bold"><span>Albedo Tutupan Es (%)</span><span id="vl-v2">30%</span></div>
      <input type="range" min="10" max="60" step="5" value="30" class="w-full accent-sky-600" oninput="vlabState.p2=+this.value; document.getElementById('vl-v2').innerText=this.value+'%'; drawVLab();"></div>`;
    dom.theadEl.innerHTML = `<tr><th class="p-2.5">#</th><th class="p-2.5">Kadar CO₂ (ppm)</th><th class="p-2.5">Albedo Es (%)</th><th class="p-2.5">Radiasi IR Terperangkap</th><th class="p-2.5">Suhu Rata-Rata Bumi (°C)</th></tr>`;
  },
  draw(ctx, W, H, st, dom) {
    const temp = 14 + (st.p1 - 280) * 0.008 - (st.p2 - 30) * 0.08;
    // Matahari
    ctx.beginPath(); ctx.arc(110, 80, 35, 0, Math.PI * 2); ctx.fillStyle = '#f59e0b'; ctx.fill();
    // Bumi & Lapisan Gas Rumah Kaca
    ctx.beginPath(); ctx.arc(380, 200, 72, 0, Math.PI * 2); ctx.fillStyle = '#2563eb'; ctx.fill();
    ctx.beginPath(); ctx.arc(380, 200, 96, 0, Math.PI * 2); ctx.strokeStyle = `rgba(225, 29, 72, ${st.p1 / 850})`; ctx.lineWidth = 14; ctx.stroke();

    dom.hudEl.innerHTML = `<div>CO₂: <b>${st.p1} ppm</b> | Albedo: <b>${st.p2}%</b></div><div>Suhu Bumi: <b class="text-rose-700">${temp.toFixed(2)} °C</b></div>`;
    dom.telEl.innerHTML = `<div class="font-bold text-slate-800">Analisis Keseimbangan Termal</div><p>Lapisan gas CO₂ (${st.p1} ppm) menyerap radiasi inframerah bumi sehingga suhu rata-rata permukaan menjadi <b>${temp.toFixed(2)} °C</b>.</p>`;
  },
  record(st, idx) {
    const temp = 14 + (st.p1 - 280) * 0.008 - (st.p2 - 30) * 0.08;
    return [idx, st.p1, st.p2 + '%', Math.round((st.p1 / 850) * 100) + '%', temp.toFixed(2) + ' °C'];
  }
};
