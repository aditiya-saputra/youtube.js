# YouTube.js — YouTube Client JavaScript Teardown & Reverse Engineering

Koleksi lengkap, hasil deobfuskasi, dan analisis arsitektur modul JavaScript client-side produksi YouTube (Web Desktop & HTML5 Player).

---

## 📋 Daftar Isi

- [Arsitektur Global](#-arsitektur-global)
- [Katalog Komponen YouTube](#-katalog-komponen-youtube)
  - [1. Core Player Engine & Ekstensi](#1-core-player-engine--ekstensi)
  - [2. Desktop Application Framework (Kevlar SPA)](#2-desktop-application-framework-kevlar-spa)
  - [3. Networking, Router & Penjadwalan](#3-networking-router--penjadwalan)
  - [4. Background Workers & Serialization](#4-background-workers--serialization)
  - [5. Polyfills & Standar Web](#5-polyfills--standar-web)
- [Struktur Direktori](#-struktur-direktori)
- [Panduan Deobfuskasi](#-panduan-deobfuskasi)
- [Dokumentasi Alur Kerja & Flowchart](#-dokumentasi-alur-kerja--flowchart)

---

## 🏛 Arsitektur Global

YouTube Web dibangun di atas arsitektur berlapis:
1. **Polyfill Layer:** Menyamakan kemampuan browser lawas dengan standar modern (Shadow DOM, Web Animations, IntersectionObserver).
2. **Infrastructure & Network:** SPF (Structured Page Fragments) untuk navigasi kilat tanpa reload dan scheduler tugas kooperatif berprioritas (`yt.scheduler`).
3. **Application Layer (Kevlar):** SPA berbasis Custom Elements & Polymer yang berkomunikasi dengan API Innertube.
4. **Media Engine (Player):** Core HTML5 video player (`base.js`) dengan streaming adaptif MSE/DASH dan modul modular (captions, endscreen, remote casting, embed).

Diagram detail alur data dan eksekusi per berkas dapat dilihat di **[`flowchart.md`](flowchart.md)**.

---

## 📦 Katalog Komponen YouTube

Total **20 berkas JavaScript** client YouTube telah diunduh dan dideobfuskasi:

### 1. Core Player Engine & Ekstensi

| Berkas | Ukuran | Lokasi Deobfuskasi | Deskripsi & Fungsi |
|---|---|---|---|
| `base.js` | 2.6 MB | `deobfs/base/` | Engine utama HTML5 Player (`_yt_player`), dekripsi signature/n-token cipher, streaming MSE adaptif. |
| `components/captions.js` | 77 KB | `deobfs/components/captions/` | Parser & renderer closed-caption / subtitle (Timed Text, VTT). |
| `components/endscreen.js` | 28 KB | `deobfs/components/endscreen/` | Render kartu rekomendasi interaktif di akhir video. |
| `components/remote.js` | 118 KB | `deobfs/components/remote/` | Modul Cast & Remote Screen (Google Cast / Chromecast / DIAL protocol). |
| `components/miniplayer.js` | 7.5 KB | `deobfs/components/miniplayer/` | Kontroler floating mini-player / Picture-in-Picture. |
| `components/annotations_module.js` | 69 KB | `deobfs/components/annotations_module/` | Anotasi video, kartu info (`info-cards`), dan elemen interaktif. |
| `components/embed.js` | 32 KB | `deobfs/components/embed/` | Runtime khusus untuk IFrame Embed API (`youtube.com/embed/...`). |

### 2. Desktop Application Framework (Kevlar SPA)

| Berkas | Ukuran | Lokasi Deobfuskasi | Deskripsi & Fungsi |
|---|---|---|---|
| `kevlar_base.js` | 9.4 MB | `deobfs/kevlar_base/` | Runtime utama SPA YouTube Desktop (Polymer components, Innertube API client, XRegExp). |
| `www-i18n-constants.js` | 6.2 KB | `deobfs/www-i18n-constants/` | Simbol tanggal, waktu, dan format jam/hari bahasa Indonesia (`id_ID`). |
| `components/lottie-light.js` | 206 KB | `deobfs/components/lottie-light/` | Mesin animasi vektor Lottie untuk ikon animasi mikro (tombol like, subscribe). |

### 3. Networking, Router & Penjadwalan

| Berkas | Ukuran | Lokasi Deobfuskasi | Deskripsi & Fungsi |
|---|---|---|---|
| `spf.js` | 38 KB | `deobfs/spf/` | Framework navigasi dinamis PWA (Structured Page Fragments) milik YouTube. |
| `network.js` | 15 KB | `deobfs/network/` | Transport XHR khusus SPF dengan header kustom (`X-SPF-Referer`, dll.). |
| `scheduler.js` | 8.1 KB | `deobfs/scheduler/` | Task scheduler kooperatif (`yt.scheduler`) berbasis `requestIdleCallback`. |

### 4. Background Workers & Serialization

| Berkas | Ukuran | Lokasi Deobfuskasi | Deskripsi & Fungsi |
|---|---|---|---|
| `components/serviceworker.js` | 238 KB | `deobfs/components/serviceworker/` | YouTube Service Worker untuk offline cache, push notifikasi, dan background sync. |
| `components/worker-performance.js` | 2.6 KB | `deobfs/components/worker-performance/` | Pengumpul metrik performa & timing thread Web Worker. |
| `components/worker-serialization.js` | 30 KB | `deobfs/components/worker-serialization/` | Serialisasi data cepat (binary/Protobuf) antar Web Worker dan main thread. |

### 5. Polyfills & Standar Web

| Berkas | Ukuran | Lokasi Deobfuskasi | Deskripsi & Fungsi |
|---|---|---|---|
| `webcomponents-sd.js` | 78 KB | `deobfs/webcomponents-sd/` | Shady DOM & ShadyCSS polyfill untuk enkapsulasi template Polymer. |
| `web-animations-next-lite.min.js` | 50 KB | `deobfs/web-animations-next-lite.min/` | Polyfill Web Animations API (WAAPI) untuk animasi CSS modern. |
| `intersection-observer.min.js` | 5.5 KB | `deobfs/intersection-observer.min/` | W3C IntersectionObserver polyfill untuk lazy loading gambar thumbnail. |
| `components/custom-elements-es5-adapter.js` | 2.0 KB | `deobfs/components/custom-elements-es5-adapter/` | Adapter Custom Elements v1 agar kompatibel dengan kompilasi ES5. |

---

## 📁 Struktur Direktori

```text
youtube.js/
├── README.md                              # Dokumentasi repositori & katalog komponen
├── flowchart.md                           # Flowchart alur kerja Mermaid per modul
│
├── *.js                                   # Berkas JS client utama (minified asli)
│   ├── base.js                            # Core Player
│   ├── kevlar_base.js                     # Desktop SPA
│   ├── spf.js, network.js, scheduler.js   # Infra & Navigasi
│   └── ...                                # Polyfill standar
│
├── components/                            # Komponen ekstensi & worker tambahan
│   ├── captions.js, endscreen.js          # Player plugins
│   ├── remote.js, miniplayer.js, embed.js # Controller & embed runtime
│   ├── serviceworker.js                   # PWA Service Worker
│   ├── lottie-light.js                    # Vector Animation Engine
│   └── worker-*.js                        # Web Worker utilities
│
└── deobfs/                                # Hasil deobfuskasi (Webcrack / Unpack)
    ├── base/deobfuscated.js               # Player terurai (~170k baris)
    ├── kevlar_base/                       # SPA terurai (~400k baris + unpacked modules)
    └── components/                        # Deobfuscated ekstensi & plugins
```

---

## 🛠 Panduan Deobfuskasi

Seluruh berkas diproses menggunakan **`webcrack`** (unminify, deobfuscate, AST transform, & bundle unpacker) dan **`js-beautify`**:

```bash
# Instalasi tools secara global
npm i -g webcrack js-beautify

# Deobfuskasi satu berkas
webcrack base.js -o deobfs/base

# Format rapi dengan js-beautify
js-beautify base.js -o base.pretty.js

# Deobfuskasi batch seluruh berkas
for f in *.js; do
  webcrack "$f" -o "deobfs/${f%.js}" || js-beautify "$f" -o "deobfs/$f"
done
```

---

## 📊 Dokumentasi Alur Kerja & Flowchart

Buka berkas **[`flowchart.md`](flowchart.md)** untuk melihat diagram Mermaid lengkap dari:
- Inisialisasi Player & alur pemecahan cipher signature/n-token.
- Siklus hidup SPA Kevlar & integrasi API Innertube.
- Mekanisme pergantian DOM dinamis oleh SPF Router.
- Penjadwalan tugas kooperatif `yt.scheduler`.
- Enkapsulasi Shady DOM & animasi Web Animations API.
