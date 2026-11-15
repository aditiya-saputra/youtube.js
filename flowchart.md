# YouTube Web Client Architecture & Workflow Flowcharts

Dokumentasi alur kerja dan *flowchart* untuk seluruh modul JavaScript YouTube yang telah diunduh dan dideobfuskasi ke dalam folder `deobfs/`.

---

## 1. Arsitektur Global & Relasi Antar File

Berikut adalah peta interaksi bagaimana ke-9 modul bekerja bersama saat halaman YouTube dimuat di browser:

```mermaid
flowchart TD
    subgraph Layer1["1. Browser Polyfills & Standards"]
        WC["webcomponents-sd.js<br/>(Shady DOM & ShadyCSS)"]
        WA["web-animations-next-lite.min.js<br/>(Web Animations API)"]
        IO["intersection-observer.min.js<br/>(Intersection Observer)"]
    end

    subgraph Layer2["2. Core Infrastructure & Networking"]
        SCHED["scheduler.js<br/>(yt.scheduler Priority Engine)"]
        SPF["spf.js<br/>(Structured Page Fragments Router)"]
        NET["network.js<br/>(SPF XHR / Network Transport)"]
        I18N["www-i18n-constants.js<br/>(Locale id_ID Constants)"]
    end

    subgraph Layer3["3. Application Framework"]
        KEVLAR["kevlar_base.js<br/>(YouTube Desktop SPA & Innertube Client)"]
    end

    subgraph Layer4["4. Media Playback Engine"]
        BASE["base.js<br/>(HTML5 Video Player & Cipher Decrambler)"]
    end

    WC & WA & IO --> KEVLAR
    SCHED --> KEVLAR
    SPF <--> NET
    SPF --> KEVLAR
    I18N --> KEVLAR
    KEVLAR --> BASE
```

---

## 2. `base.js` — YouTube HTML5 Video Player

**Peran:** Engine pemutar video HTML5 YouTube (`_yt_player`). Mengatur streaming video adaptif (DASH/MSE), pemecahan cipher signature & n-parameter, UI kontrol pemutar, subtitle, serta telemetri QoS.

### Alur Kerja (Flowchart)

```mermaid
flowchart TD
    Start([Inisialisasi base.js]) --> ScopeInit["Ekspos modul ke internal namespace _yt_player"]
    ScopeInit --> ReadConfig["Baca playerConfig dari ytcfg (video_id, sts, playback_params)"]
    ReadConfig --> FetchPlayerData["Ambil streaming data & formats (Innertube /player API)"]
    
    FetchPlayerData --> CheckCipher{"Format butuh dekripsi<br/>signature / n-token?"}
    
    CheckCipher -- Ya --> DecryptSignature["Eksekusi fungsi transform signature (swap, splice, reverse)"]
    DecryptSignature --> DecryptNToken["Hitung ulang parameter 'n' via algoritma n-token solver"]
    DecryptNToken --> BuildStreamingURL["Susun URL stream akhir dengan parameter terdekripsi"]
    CheckCipher -- Tidak --> BuildStreamingURL
    
    BuildStreamingURL --> MSEInit["Inisialisasi MediaSource Extensions (MSE)"]
    MSEInit --> AttachVideo["Lampirkan ke HTMLVideoElement (src = blob:...)"]
    
    AttachVideo --> StreamLoop["Loop Streaming Adaptif (ABR Engine):<br/>1. Monitor bandwidth & frame drop<br/>2. Request chunk media (audio/video)<br/>3. SourceBuffer.appendBuffer()"]
    
    StreamLoop --> EventBus{"Event Pemutar"}
    EventBus -->|User Action| HandleUI["Play, Pause, Seek, Speed, Subtitle"]
    EventBus -->|Telemetry Tick| SendQoS["Kirim metrik pemutaran ke /api/stats/playback"]
    EventBus -->|Video End| ShowEndScreen["Render kartu & rekomendasi video shorts/lainnya"]
```

### 2.1 Alur Rinci Pemecahan Cipher Signature (`s` -> `sig`)

```mermaid
flowchart TD
    RawCipher["Input dari Innertube: signatureCipher<br/>(url, sp='sig', s='encrypted_token')"] --> SplitChar["Pecah string token jadi array karakter:<br/>s = s.split('')"]
    
    SplitChar --> OpsSequence["Eksekusi Serangkaian Operasi Transformasi Objek jB:"]
    
    subgraph TransformObj["Objek Transformasi jB (deobfs/base/deobfuscated.js:110164)"]
        direction TB
        OpSwap["jB.Fe(a, b): SWAP<br/>c = a[0]; a[0] = a[b % len]; a[b % len] = c;"]
        OpSplice["jB.FG(a, b): SPLICE<br/>a.splice(0, b); (Potong b karakter pertama)"]
        OpReverse["jB.Gz(a): REVERSE<br/>a.reverse(); (Balikkan urutan array)"]
    end
    
    OpsSequence --> TransformObj
    TransformObj --> JoinChar["Gabungkan kembali array karakter:<br/>sig = s.join('')"]
    JoinChar --> BuildStreamURL["Susun final streaming URL:<br/>url + '&' + sp + '=' + sig"]
```

### 2.2 Alur Rinci Pemecahan N-Token (Anti-Throttling Engine)

```mermaid
flowchart TD
    StreamURL["Video Stream URL mengandung parameter:<br/>...&n=raw_token&..."] --> ExtractN["Ekstrak nilai parameter n via regex / URLSearchParams"]
    
    ExtractN --> StateMachine["Eksekusi Algoritma Transformasi N-Token (Fungsi Bl, line 12401)"]
    
    subgraph NAlgorithm["State Machine Transformasi N (base.js)"]
        direction TB
        Step1["Modulo Array Index:<br/>c = (c % len + len) % len"]
        Step2["Reverse & Swap Karakter Array:<br/>a.reverse(), swap(0, c)"]
        Step3["Mutasi Indeks & Splice Rotasi:<br/>for (h = len; h;) push(splice(--h, 1)[0])"]
        Step4["Pemberian Parameter CDN Route:<br/>cmo=td / cmo=pf (Player Fallback Routing)"]
        Step1 --> Step2 --> Step3 --> Step4
    end
    
    StateMachine --> NAlgorithm
    NAlgorithm --> NewN["Hasilkan string transformed_n yang valid"]
    
    NewN --> CheckMatch{"Server CDN GoogleVideo<br/>validasi kecocokan n?"}
    CheckMatch -- "Gagal / Tidak Diubah" --> Throttled["Speed Throttled (< 50 KB/s)<br/>Buffering parah"]
    CheckMatch -- "Sukses" --> FullSpeed["Bandwidth Penuh (Unthrottled)<br/>Streaming HD/4K Lancar"]
```

---

## 3. `kevlar_base.js` — YouTube Desktop Web App (Kevlar SPA)

**Peran:** Core single-page application (SPA) desktop YouTube. Berisi ribuan komponen Polymer, routing aplikasi, state store (Redux/Flux-like), integrasi Service Worker, dan klien API Innertube.

### Alur Kerja (Flowchart)

```mermaid
flowchart TD
    Start([Eksekusi kevlar_base.js]) --> ContextBind["Bind ke window.default_kevlar_base"]
    ContextBind --> ModuleUnpack["Unpack modul internal (XRegExp, Unicode tables, Polymer bindings)"]
    ModuleUnpack --> InitState["Inisialisasi Global App State & Config (ytcfg)"]
    
    InitState --> RegisterElements["Daftarkan Custom Elements (ytd-app, ytd-watch-flexy, ytd-browse, dll.)"]
    RegisterElements --> BindSPF["Koneksikan ke SPF.js Router untuk navigasi tanpa reload"]
    
    BindSPF --> AppLoop{"Siklus Aplikasi"}
    
    AppLoop -->|Navigasi URL| RouterAction["Route handler memicu fetch Innertube endpoint (/youtubei/v1/...)"]
    RouterAction --> ReduxAction["Dispatch response data ke State Store"]
    ReduxAction --> DOMDiff["Render ulang view & komponen Polymer yang terdampak"]
    
    AppLoop -->|User Interaksi| InteractionHandler["Handle komentar, like, playlist, search bar"]
    InteractionHandler --> DispatchAPI["Kirim mutasi via Innertube Client"]
    
    AppLoop -->|Video Dipilih| MountPlayer["Instansiasi player container & picu loading base.js"]
```

---

## 4. `spf.js` — Structured Page Fragments (SPA Router)

**Peran:** Framework pjax/SPA dari YouTube. Mengubah link navigasi reguler menjadi AJAX requests, menerima potongan JSON (head, body, CSS/JS), dan menukar elemen DOM secara dinamis tanpa me-refresh seluruh halaman.

### Alur Kerja (Flowchart)

```mermaid
flowchart TD
    Start([spf.init]) --> InterceptLinks["Cegat semua event klik <a> yang memiliki rel='spf-link'"]
    InterceptLinks --> InterceptHistory["Pasang event listener window.onpopstate"]
    
    UserNav([Klik Link / Back-Forward]) --> CheckCache{"Apakah data halaman<br/>ada di memory cache?"}
    
    CheckCache -- Ya --> RenderPage["Ekstrak fragmen HTML dari cache"]
    CheckCache -- Tidak --> RequestNetwork["Kirim request via spf.net (network.js)"]
    
    RequestNetwork --> ParseJSON["Terima respons JSON berisi:<br/>- fragment body (HTML)<br/>- assets (JS/CSS)<br/>- page title & metadata"]
    
    ParseJSON --> RenderPage
    RenderPage --> SwapDOM["Ganti DOM target container dengan HTML baru"]
    SwapDOM --> LoadAssets["Muat CSS baru & jalankan script modul yang dibutuhkan"]
    LoadAssets --> UpdateHistory["Update URL via history.pushState / replaceState"]
    UpdateHistory --> FireReady["Dispatch event 'spfready' & 'spfprocess'"]
```

---

## 5. `network.js` — SPF Network Transport

**Peran:** Lapisan transport jaringan untuk SPF. Menyusun XMLHttpRequest dengan header khusus YouTube (`X-SPF-*`), mengukur Resource Timing, menangani timeout, dan parsing payload JSON.

### Alur Kerja (Flowchart)

```mermaid
flowchart TD
    Start([spf.net.request]) --> PrepConfig["Baca opsi: URL, method, postData, withCredentials"]
    PrepConfig --> BuildHeaders["Tambahkan Custom Header SPF:<br/>- X-SPF-Referer<br/>- X-SPF-Previous<br/>- X-SPF-Request<br/>- Accept: application/json"]
    
    BuildHeaders --> StartXHR["Inisialisasi XMLHttpRequest / Fetch"]
    StartXHR --> MarkTiming["Catat waktu mulai: fetchStart (Performance API)"]
    
    StartXHR --> NetworkWait{"Status Jaringan"}
    
    NetworkWait -->|Success 200 OK| OnComplete["OnReadyState: parse response JSON & hitung latency"]
    NetworkWait -->|Timeout| OnTimeout["Batalkan request (abort) & fallback navigasi standar"]
    NetworkWait -->|Error / Offline| OnError["Tangani error jaringan & trigger retry / notifikasi UI"]
    
    OnComplete --> CallbackSPF["Kirim respons terurai ke handler spf.js"]
```

---

## 6. `scheduler.js` — YouTube Cooperative Task Scheduler

**Peran:** Mesin penjadwal prioritas tugas (`yt.scheduler`). Membagi beban kerja CPU ke dalam microtask dan idle-callbacks (`requestIdleCallback`) agar animasi dan streaming video tidak patah-patah (anti jank).

### Alur Kerja (Flowchart)

```mermaid
flowchart TD
    Start([Task Didaftarkan]) --> Enqueue["yt.scheduler.instance.add(task, priority)"]
    Enqueue --> PriorityCheck{"Apakah prioritas task<br/>>= priorityThreshold?"}
    
    PriorityCheck -- Tidak --> Postpone["Tahan task di antrean tertunda (queue)"]
    PriorityCheck -- Ya --> ScheduleExecution["Daftarkan ke requestIdleCallback / MessageChannel / setTimeout"]
    
    ScheduleExecution --> FrameBoundary["Tunggu frame kosong (Idle Phase)"]
    FrameBoundary --> ExecuteTask["Jalankan callback task"]
    
    ExecuteTask --> CheckTimeRemaining{"Masih ada sisa waktu<br/>dalam frame (< 16ms)?"}
    CheckTimeRemaining -- Ya --> RunNext["Lanjutkan eksekusi task berikutnya dalam antrean"]
    CheckTimeRemaining -- Tidak --> YieldMain["Yield CPU kembali ke browser untuk rendering frame"]
    YieldMain --> ScheduleExecution
```

---

## 7. `webcomponents-sd.js` — Shady DOM & ShadyCSS Polyfill

**Peran:** Polyfill Shady DOM dan ShadyCSS untuk browser yang tidak memiliki implementasi native Shadow DOM v1. Mengemulasikan enkapsulasi CSS dan tree scoping pada komponen Polymer YouTube.

### Alur Kerja (Flowchart)

```mermaid
flowchart TD
    Start([Inisialisasi Shady DOM]) --> CheckNative{"Native Shadow DOM<br/>didukung browser?"}
    CheckNative -- Ya --> PassThrough["Gunakan native attachShadow & CSS scoping bawaan"]
    CheckNative -- Tidak --> ApplyPolyfill["Override metode DOM: attachShadow, childNodes, appendChild"]
    
    ApplyPolyfill --> ShadyCSS["Inisialisasi window.ShadyCSS (CustomStyleInterface)"]
    ShadyCSS --> ParseStyles["Scan semua tag <style> di WebComponent template"]
    ParseStyles --> RewriteSelectors["Tulis ulang selector CSS dengan scope hash: .style-scope.ytd-app"]
    RewriteSelectors --> InjectCSS["Suntikkan CSS ter-scope ke <head> dokumen"]
    
    InjectCSS --> MutationObserverLoop["Pasang MutationObserver untuk memantau node baru & re-scoping otomatis"]
```

---

## 8. `web-animations-next-lite.min.js` — Web Animations API Polyfill

**Peran:** Implementasi standar Web Animations API (WAAPI) lite. Menyediakan dukungan `Element.prototype.animate()`, `KeyframeEffect`, dan `GroupEffect` untuk transisi fluid di UI YouTube.

### Alur Kerja (Flowchart)

```mermaid
flowchart TD
    Start([element.animate dipanggil]) --> BuildEffect["Buat instance KeyframeEffect (keyframes, timing options)"]
    BuildEffect --> RegisterAnimation["Buat Animation Player & masukkan ke active timeline"]
    RegisterAnimation --> RequestAF["Jadwalkan tick animasi via requestAnimationFrame"]
    
    RequestAF --> RAFLoop["Tick Per Frame:<br/>1. Hitung currentTime dari timeline<br/>2. Hitung progress pecahan (0.0 .. 1.0)<br/>3. Interpolasi nilai properti CSS (transform, opacity)"]
    
    RAFLoop --> ApplyInline["Terapkan nilai interpolasi ke element.style"]
    ApplyInline --> CheckDone{"Animasi selesai?"}
    CheckDone -- Tidak --> RequestAF
    CheckDone -- Ya --> DispatchFinish["Dispatch event 'finish' & selesaikan Promise player"]
```

---

## 9. `intersection-observer.min.js` — Intersection Observer Polyfill

**Peran:** Polyfill standar W3C Intersection Observer. Mengamati visibilitas elemen terhadap viewport browser; esensial untuk lazy loading thumbnail video dan penghitungan impresi metrik iklan.

### Alur Kerja (Flowchart)

```mermaid
flowchart TD
    Start([new IntersectionObserver]) --> StoreConfig["Simpan root element, rootMargin, dan thresholds array"]
    StoreConfig --> Observe["observer.observe(targetElement)"]
    
    Observe --> AttachListeners["Pasang listener: window.scroll, window.resize, mutation"]
    AttachListeners --> TriggerCheck["Event terpicu / Polling timer tick"]
    
    TriggerCheck --> ComputeRects["Hitung getBoundingClientRect() target vs root rect"]
    ComputeRects --> CalcRatio["Hitung intersectionRatio = areaIrisan / areaTarget"]
    
    CalcRatio --> ThresholdCrossed{"Apakah ratio melewati<br/>salah satu threshold?"}
    ThresholdCrossed -- Ya --> QueueEntry["Buat IntersectionObserverEntry & masukkan ke antrean callback"]
    ThresholdCrossed -- Tidak --> Idle[Menunggu event berikutnya]
    
    QueueEntry --> FireCallback["Jalankan callback observer (misal: load gambar thumbnail)"]
```

---

## 10. `www-i18n-constants.js` — Closure i18n Date/Time Constants (id_ID)

**Peran:** Konstanta lokalisasi Closure Library (`goog.i18n.DateTimeSymbols`) khusus bahasa Indonesia (`id_ID`). Menyediakan format tanggal, nama bulan, nama hari, dan unit waktu relatif ("x menit yang lalu").

### Alur Kerja (Flowchart)

```mermaid
flowchart TD
    Start([Load www-i18n-constants.js]) --> InitClosure["Deteksi global scope (Closure Library environment)"]
    InitClosure --> RegisterSymbols["Definisikan simbol DateTimeSymbols_id_ID:<br/>- MONTHS: Januari, Februari, ...<br/>- WEEKDAYS: Minggu, Senin, ...<br/>- FORMATS: d MMM y, HH.mm, dll."]
    
    RegisterSymbols --> RelativeTimeUnits["Definisikan aturan plural & singkatan unit waktu:<br/>- DETIK: other{# dtk}<br/>- MENIT: other{# mnt}<br/>- JAM: other{# j}<br/>- HARI: other{# hr}"]
    
    RelativeTimeUnits --> ExposeGlobal["Ekspos ke goog.i18n.DateTimeSymbols & formatters"]
    ExposeGlobal --> ConsumeByApps["Digunakan oleh Kevlar & Player untuk merender tanggal upload, durasi video, dan live chat timestamps"]
```

---

## 11. Komponen Ekstensi Tambahan

### 11.1 `components/serviceworker.js` — YouTube PWA Service Worker
```mermaid
flowchart TD
    SWInstall([Event: install]) --> Precaching["Pre-cache shell assets & offline fallback pages"]
    Precaching --> SWActivate([Event: activate])
    SWActivate --> ClaimClients["clients.claim() & bersihkan cache versi usang"]
    
    FetchEvent([Event: fetch]) --> InterceptStrategy{"Tipe Request"}
    InterceptStrategy -->|Watch Page HTML| NetworkFirst["Network-First: Coba jaringan -> Fallback cache"]
    InterceptStrategy -->|Static Assets JS/CSS| CacheFirst["Cache-First: Ambil cache -> Background revalidate"]
    InterceptStrategy -->|Video Media Stream| BypassSW["Bypass SW (MediaSource langsung streaming)"]
    
    SyncEvent([Event: sync / push]) --> HandleBackground["Background sync analitik & kirim Web Push notifications"]
```

### 11.2 `components/captions.js` — Subtitle & Closed Captions Engine
```mermaid
flowchart TD
    StartCaptions([User Aktifkan Subtitle]) --> FetchFormat["Ambil daftar track dari player response (timedtext)"]
    FetchFormat --> DownloadTrack["Fetch format XML/VTT (misal: /api/timedtext?v=...&lang=id)"]
    DownloadTrack --> ParseCue["Parse timestamp (start, durasi) & format teks (gaya, posisi, warna)"]
    ParseCue --> SyncLoop["Loop Sinkronisasi Pemutaran:<br/>Bandingkan video.currentTime dengan Cue interval"]
    SyncLoop --> RenderSubtitle["Render teks subtitle ke overlay container pemutar"]
```

### 11.3 `components/remote.js` — Google Cast & Remote Screen Controller
```mermaid
flowchart TD
    CastClick([Klik Ikon Cast]) --> ScanDevices["Deteksi Chromecast & Smart TV via Cast SDK / DIAL"]
    ScanDevices --> ConnectSession["Inisialisasi Peer Session / WebSocket pairing (m.youtube.com/api/lounge)"]
    ConnectSession --> SyncPlayback["Mirroring status: sync video_id, timestamp, volume, playlist"]
    SyncPlayback --> RemoteLoop["Kirim perintah remote (play/pause/seek) ke layar eksternal"]
```

### 11.4 `components/embed.js` — IFrame Embed API Runtime
```mermaid
flowchart TD
    EmbedInit([IFrame Loaded]) --> ParseEmbedParams["Baca URL params (enablejsapi, origin, autoplay, controls)"]
    ParseEmbedParams --> PostMessageBus["Pasang event listener window.onmessage (PostMessage Protocol)"]
    PostMessageBus --> OnCommand{"Menerima Pesan Host"}
    OnCommand -->|playVideo / pauseVideo| ControlPlayer["Kendalikan instance pemutar internal"]
    OnCommand -->|addEventListener| RegisterHostEvent["Laporkan stateChange (BUFFERING, PLAYING, ENDED) via postMessage"]
```

### 11.5 `components/endscreen.js` — End Screen & Rekomendasi Video
```mermaid
flowchart TD
    VideoNearEnd([video.currentTime mendekati akhir]) --> FetchEndscreen["Ambil payload endscreenRenderer dari playerResponse"]
    FetchEndscreen --> ParseCards["Parse elemen: thumbnail, judul, channel, clickTrackingParams"]
    ParseCards --> RenderOverlay["Render kartu interaktif di atas canvas video player"]
    RenderOverlay --> UserAction{"User berinteraksi"}
    UserAction -->|Klik Kartu| NavigateVideo["Kirim clickTrackingParams & picu navigasi ke video rekomendasi"]
    UserAction -->|Abaikan / Biarkan Selesai| TriggerAutoplay["Jika autoplay aktif, hitung mundur dan putar next video"]
```

### 11.6 `components/miniplayer.js` — Floating Miniplayer / PiP Controller
```mermaid
flowchart TD
    MiniToggle([User scroll ke bawah / klik tombol miniplayer]) --> CalcPosition["Hitung dimensi & posisi sudut kanan bawah layar"]
    CalcPosition --> DetachDOM["Pindahkan elemen video dari ytd-watch-flexy ke ytd-miniplayer container"]
    DetachDOM --> ScaleVideo["Ubah ukuran viewport video player tanpa me-reset MSE buffer"]
    ScaleVideo --> MiniControls["Tampilkan kontrol mini: Play/Pause, Close, Expand kembali"]
```

### 11.7 `components/lottie-light.js` & `components/worker-serialization.js` — Animasi Mikro & Worker IPC
```mermaid
flowchart TD
    subgraph UIThread["Main UI Thread"]
        LikeClick([Klik Tombol Like / Subscribe]) --> TriggerLottie["Panggil lottie.loadAnimation(JSON vektor)"]
        TriggerLottie --> CanvasRender["Render frame animasi partikel dinamis di canvas/SVG"]
        HeavyData([Data respon Innertube besar]) --> SerializeWorker["Kirim raw payload ke Web Worker"]
    end

    subgraph WorkerThread["Background Web Worker"]
        SerializeWorker --> WorkerDeserializer["worker-serialization.js: Fast binary / Protobuf parsing"]
        WorkerDeserializer --> WorkerPerf["worker-performance.js: Catat waktu pemrosesan thread"]
        WorkerPerf --> ReturnData["Kirim data terurai kembali ke main UI thread"]
    end
```

---

## 12. Alur Telemetri, Pengumpulan Data & Umpan Balik Rekomendasi (Feedback Loop)

Bagian ini mendokumentasikan bagaimana client JavaScript YouTube mengumpulkan data perilaku penonton (*telemetry signals*) dan mengirimkannya ke sistem rekomendasi Google (*Candidate Generation & Ranking DNN*):

```mermaid
flowchart TD
    subgraph ClientSensors["1. Sensor Perilaku di Sisi Client"]
        MouseKB["Interaksi Fisik (Mouse, Keyboard, Scroll)"] --> LACT["Hitung LACT (Last Active Client Time)"]
        VisAPI["Page Visibility API & IntersectionObserver"] --> INVIEW["Hitung inview (0: tab background, 1: aktif ditonton)"]
        PlayLoop["Loop Playback base.js"] --> SEGMENTS["Catat Segmen Watch Time (detik tonton nyata vs skip)"]
        Hover["Hover kursor di thumbnail beranda"] --> INLINE["inlinePlayback: Rekam durasi preview (tanpa klik)"]
        Impressions["Thumbnail masuk viewport"] --> VE["Ekstrak veType & trackingParams unik"]
    end

    subgraph TelemetryAggregation["2. Agregasi & Validasi Client (base.js / kevlar_base.js)"]
        SEGMENTS --> DelayCheck{"Durasi tonton ><br/>delayThresholdMet (5-30 dtk)?"}
        DelayCheck -- Tidak --> BounceSignal["Tandai kemungkinan Bounce / Clickbait"]
        DelayCheck -- Ya --> ValidWatch["Tandai Valid Engaged View"]
        
        LACT & INVIEW & ValidWatch --> VSSPayload["Susun Payload VSS3 / Watchtime:<br/>- cmt (current media time)<br/>- len (durasi media)<br/>- lact (status atensi)<br/>- inview (visibilitas layar)<br/>- cpn (client playback nonce)<br/>- serializedWatchEndpointLoggingContext"]
    end

    subgraph NetworkDispatch["3. Pengiriman Jaringan ke Endpoint Google"]
        VSSPayload --> SendWatchtime["POST /api/stats/watchtime (Heartbeat berkala)"]
        BounceSignal --> SendWatchtime
        VE --> SendGEL["POST /youtubei/v1/log_event (Global Event Logging / Clearcut)"]
        INLINE --> SendWatchtime
    end

    subgraph RecommendationEngine["4. Algoritma Rekomendasi Server (Google Brain / Deep Neural Networks)"]
        SendWatchtime & SendGEL --> CandidateGen["Candidate Generation:<br/>Filter jutaan video menjadi ratusan berdasarkan topik & riwayat watchtime"]
        CandidateGen --> RankingDNN["Ranking Model:<br/>Skor video berdasarkan retensi segmen + completion rate + atensi LACT"]
        RankingDNN --> NewFeed["Hasilkan Rekomendasi Baru yang Disesuaikan di Beranda / Up-Next"]
    end
```

---

## 13. Alur End-to-End: Siklus Hidup dari Klik URL hingga Video Selesai

```mermaid
sequenceDiagram
    autonumber
    actor User as User
    participant Browser as Browser Window
    participant Polyfills as Polyfills (WC/WA/IO)
    participant SPF as SPF Router & Network
    participant Kevlar as Kevlar Desktop SPA
    participant Player as base.js Player Engine
    participant Innertube as YouTube Backend / CDN

    User->>Browser: Buka https://youtube.com/watch?v=xyz
    Browser->>Polyfills: Inisialisasi ShadyDOM, WebAnimations, IntersectionObserver
    Browser->>SPF: Inisialisasi router & pasang listener onpopstate
    SPF->>Innertube: Request data halaman watch via network.js
    Innertube-->>SPF: Response JSON (HTML fragments, scripts, ytcfg config)
    SPF->>Kevlar: Suntikkan fragmen ke DOM & render elemen ytd-watch-flexy
    Kevlar->>Player: Instansiasi pemutar video (_yt_player)
    Player->>Innertube: Fetch playerResponse (streaming URLs, cipher data)
    Innertube-->>Player: Kembalikan formats data & encrypted signature/n-token
    Player->>Player: Jalankan deobfuscated decipher algorithm (swap, reverse, splice)
    Player->>Innertube: Request audio/video media chunks via MSE (MediaSource)
    Innertube-->>Player: Stream byte chunks (DASH itags)
    Player->>Browser: Putar video di HTML5 <video> element
    
    loop Heartbeat Telemetri (Tiap 10-30 detik)
        Player->>Innertube: Kirim /api/stats/watchtime (segments, lact, inview, cpn)
    end

    User->>Browser: Video mendekati akhir
    Player->>Player: Inisialisasi endscreen.js & render kartu rekomendasi
    Player->>Innertube: Kirim quartile 100% completeUrls
```

---

## 14. Ringkasan Lengkap 20 Berkas Client YouTube

| No | File Asli | File Deobfuskasi | Ukuran | Kategori | Tanggung Jawab Utama |
|:---:|---|---|:---:|:---:|---|
| 1 | `base.js` | `deobfs/base/deobfuscated.js` | 2.6 MB | Core Player | Engine HTML5 Player, decipher signature/n-token, MSE adaptive streaming. |
| 2 | `kevlar_base.js` | `deobfs/kevlar_base/deobfuscated.js` | 9.4 MB | App Framework | Desktop SPA, Custom Elements Polymer, Innertube API client. |
| 3 | `spf.js` | `deobfs/spf/deobfuscated.js` | 38 KB | Navigation | PWA pjax router, pergantian fragmen DOM dinamis tanpa refresh halaman. |
| 4 | `network.js` | `deobfs/network/deobfuscated.js` | 15 KB | Network | Layer XHR transport khusus SPF dengan header kustom (`X-SPF-*`). |
| 5 | `scheduler.js` | `deobfs/scheduler/deobfuscated.js` | 8.1 KB | Infrastructure | Cooperative task scheduler (`yt.scheduler`) berbasis idle budget CPU. |
| 6 | `webcomponents-sd.js` | `deobfs/webcomponents-sd/deobfuscated.js` | 78 KB | Polyfill | Shady DOM & ShadyCSS untuk enkapsulasi CSS template Polymer. |
| 7 | `web-animations-next-lite.min.js` | `deobfs/web-animations-next-lite.min/deobfuscated.js` | 50 KB | Polyfill | Web Animations API (WAAPI) lite untuk animasi fluida UI. |
| 8 | `intersection-observer.min.js` | `deobfs/intersection-observer.min/deobfuscated.js` | 5.5 KB | Polyfill | W3C IntersectionObserver untuk lazy-loading gambar thumbnail. |
| 9 | `www-i18n-constants.js` | `deobfs/www-i18n-constants/deobfuscated.js` | 6.2 KB | Localization | Simbol tanggal & waktu bahasa Indonesia (`id_ID`) Closure Library. |
| 10 | `components/captions.js` | `deobfs/components/captions/deobfuscated.js` | 77 KB | Player Plugin | Parser subtitle XML/VTT & sinkronisasi waktu tampilan teks. |
| 11 | `components/endscreen.js` | `deobfs/components/endscreen/deobfuscated.js` | 28 KB | Player Plugin | Render kartu rekomendasi interaktif di akhir video & link tracking. |
| 12 | `components/remote.js` | `deobfs/components/remote/deobfuscated.js` | 118 KB | Player Plugin | Kontroler Google Cast / Chromecast & pairing WebSocket Lounge. |
| 13 | `components/miniplayer.js` | `deobfs/components/miniplayer/deobfuscated.js` | 7.5 KB | Player Plugin | Floating Picture-in-Picture controller saat scroll halaman. |
| 14 | `components/annotations_module.js` | `deobfs/components/annotations_module/deobfuscated.js` | 69 KB | Player Plugin | Anotasi video lama, kartu info sudut kanan atas, dan survey. |
| 15 | `components/embed.js` | `deobfs/components/embed/deobfuscated.js` | 32 KB | Player Plugin | Runtime IFrame Embed API & bridge komunikasi `postMessage`. |
| 16 | `components/serviceworker.js` | `deobfs/components/serviceworker/deobfuscated.js` | 238 KB | Worker / PWA | Service worker PWA: offline fallback cache, background sync, web push. |
| 17 | `components/lottie-light.js` | `deobfs/components/lottie-light/deobfuscated.js` | 206 KB | UI Component | Renderer animasi vektor Lottie untuk animasi tombol like, subscribe. |
| 18 | `components/worker-performance.js` | `deobfs/components/worker-performance/deobfuscated.js` | 2.6 KB | Worker Infra | Pengukur latency dan metrik eksekusi Web Worker. |
| 19 | `components/worker-serialization.js` | `deobfs/components/worker-serialization/deobfuscated.js` | 30 KB | Worker Infra | Serialisasi biner cepat / Protobuf antar Web Worker dan Main Thread. |
| 20 | `components/custom-elements-es5-adapter.js` | `deobfs/components/custom-elements-es5-adapter/deobfuscated.js` | 2.0 KB | Polyfill | Bridge adapter Custom Elements v1 agar kompatibel dengan ES5. |

