(function (g) {
  var window = this;
  "use strict";
  function Pwb(a, b) {
    g.KL(a, "onAutonavCoundownStarted", b);
  }
  function Qwb(a) {
    return a.isBackground() && a.fi();
  }
  function Rwb(a, b) {
    b = b.getWatchNextResponse()?.playerOverlays?.playerOverlayRenderer?.autoplay?.playerOverlayAutoplayRenderer?.nextButton?.buttonRenderer;
    a.ba = b?.navigationEndpoint;
    b = b?.trackingParams;
    if (a.playButton && b) {
      a.J.setTrackingParams(a.playButton.element, b);
    }
  }
  function G4(a) {
    var b = E4(a);
    var c = Math;
    var d = c.min;
    var e = a.L ? Date.now() - a.L : 0;
    c = d.call(c, e, b);
    F4(a, Math.ceil((b - c) / 1000));
    if (b - c <= 500 && a.j()) {
      a.select(true);
    } else if (a.j()) {
      a.U.start();
    }
  }
  function H4(a) {
    var b = a.J.vn(true, a.J.isFullscreen());
    g.uo(a.container.element, "ytp-autonav-endscreen-small-mode", a.nk(b));
    g.uo(a.container.element, "ytp-autonav-endscreen-is-premium", !!a.suggestion && !!a.suggestion.eaa);
    g.uo(a.J.getRootNode(), "ytp-autonav-endscreen-cancelled-state", !a.J.qg());
    g.uo(a.J.getRootNode(), "countdown-running", a.j());
    g.uo(a.container.element, "ytp-player-content", a.J.qg());
    if (!a.J.N("web_post_play_autonav_embiggening")) {
      g.Ue(a.overlay.element, {
        width: `${b.width}px`
      });
    }
    if (a.J.N("web_post_play_autonav_embiggening")) {
      var c = a.J.getRootNode().getBoundingClientRect();
      b = Math.min(720, c.width * 0.5);
      var d = b * 0.5625;
      c = c.height - 36 - 60;
      if (d > c) {
        d = c;
        b = 16 / 9 * d;
      }
      g.Ue(a.A.qa("ytp-autonav-endscreen-upnext-thumbnail"), {
        height: `${d}px`,
        width: `${b}px`
      });
      g.Ue(a.container.element, {
        width: `${b}px`
      });
    }
    if (!a.j()) {
      if (a.J.qg()) {
        F4(a, Math.round(E4(a) / 1000));
      } else {
        F4(a);
      }
      b = !!a.suggestion && !!a.suggestion.Bt;
      d = a.J.getVideoData();
      d = d.autonavState === 1 && d.Jc && a.J.qg() ? false : a.J.qg() || !a.suggestion || !a.suggestion.Bt;
      g.uo(a.container.element, "ytp-autonav-endscreen-upnext-alternative-header-only", !d && b);
      g.uo(a.container.element, "ytp-autonav-endscreen-upnext-no-alternative-header", d && !b);
      a.K.Cc(a.J.qg());
    }
  }
  function F4(a, b = -1) {
    a = a.A.qa("ytp-autonav-endscreen-upnext-header");
    g.ve(a);
    if (b >= 0) {
      b = String(b);
      let c = "Berikutnya dalam $SECONDS".match(RegExp("\\$SECONDS", "gi"))[0];
      let d = "Berikutnya dalam $SECONDS".indexOf(c);
      if (d >= 0) {
        a.appendChild(g.te("Berikutnya dalam $SECONDS".slice(0, d)));
        let e = g.se("span");
        g.oo(e, "ytp-autonav-endscreen-upnext-header-countdown-number");
        g.ze(e, b);
        a.appendChild(e);
        a.appendChild(g.te("Berikutnya dalam $SECONDS".slice(d + c.length)));
        return;
      }
    }
    g.ze(a, "Berikutnya");
  }
  function E4(a) {
    if (a.J.isFullscreen()) {
      a = a.J.getVideoData().jo;
      if (a === -1 || a === undefined) {
        return 8000;
      } else {
        return a;
      }
    } else if (a.J.gw() >= 0) {
      return a.J.gw();
    } else {
      return a.J.O().experiments.j("autoplay_time") || 10000;
    }
  }
  function I4(a, b) {
    b = Swb(a, b);
    var c = Math;
    var d = c.min;
    var e = (0, g.T)() - a.L;
    c = d.call(c, e, b);
    b = b === 0 ? 1 : Math.min(c / b, 1);
    a.sa.setAttribute("stroke-dashoffset", `${(b + 1) * -211}`);
    if (b >= 1 && a.j() && !a.isCasting()) {
      a.select(true);
    } else if (a.j()) {
      a.A.start();
    }
  }
  function Swb(a, b) {
    if (b) {
      return b;
    } else if (a.api.isFullscreen()) {
      a = a.api.getVideoData().jo;
      if (a === -1 || a === undefined) {
        return 8000;
      } else {
        return a;
      }
    } else if (a.api.gw() >= 0) {
      return a.api.gw();
    } else {
      return a.api.O().experiments.j("autoplay_time") || 10000;
    }
  }
  function J4(a) {
    return g.gM(a.player) && a.U() && !a.C;
  }
  function K4(a) {
    var b = a.qg();
    if (b !== a.X) {
      a.X = b;
      a.player.publish("autonavvisibility");
    }
  }
  function L4(a) {
    return g.gM(a.player) && a.U() && !a.D;
  }
  function M4(a) {
    var b = a.qg();
    if (b !== a.fa) {
      a.fa = b;
      a.player.publish("autonavvisibility");
    }
  }
  function Twb(a) {
    a = a.O();
    return a.kd && !a.disableOrganicUi;
  }
  function Uwb(a) {
    var b = a.player.getVideoData();
    if (!b || a.j === b.qb) {
      return false;
    }
    a.j = b.qb;
    return true;
  }
  function Vwb(a) {
    a.player.He("endscreen");
    var b = a.player.getVideoData();
    b = new g.BM(Math.max((b.lengthSeconds - 10) * 1000, 0), 2251799813685248, {
      id: "preload",
      namespace: "endscreen"
    });
    var c = new g.BM(2251799813685248, 2251799813685248, {
      id: "load",
      priority: 8,
      namespace: "endscreen"
    });
    a.player.qf([b, c]);
  }
  g.C1.prototype.gw = g.da(15, function () {
    return this.app.gw();
  });
  g.q2.prototype.gw = g.da(14, function () {
    return this.getVideoData().UE;
  });
  g.B1.prototype.UD = g.da(13, function (a) {
    this.Jk().UD(a);
  });
  g.jY.prototype.UD = g.da(12, function (a) {
    if (this.zU !== a) {
      this.zU = a;
      this.Xs();
    }
  });
  var N4 = class extends g.Z {
    constructor(a) {
      super({
        G: "div",
        S: "ytp-autonav-endscreen-countdown-overlay"
      });
      this.cancelCommand = this.ba = undefined;
      this.L = 0;
      if (a.N("web_post_play_autonav_embiggening")) {
        g.qo(this.element, "ytp-autonav-endscreen-upnext-updated");
      }
      this.container = new g.Z({
        G: "div",
        S: "ytp-autonav-endscreen-countdown-container"
      });
      g.L(this, this.container);
      this.container.Aa(this.element);
      var b = a.O();
      var c = b.C;
      this.J = a;
      this.suggestion = null;
      this.onVideoDataChange("newdata", this.J.getVideoData());
      this.V(a, "videodatachange", this.onVideoDataChange);
      this.A = new g.Z({
        G: "div",
        S: "ytp-autonav-endscreen-upnext-container",
        W: {
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}",
          "data-is-upcoming": "{{is_upcoming}}"
        },
        Y: [{
          G: "div",
          S: "ytp-autonav-endscreen-topbar-container",
          Y: [{
            G: "div",
            S: "ytp-autonav-endscreen-upnext-header"
          }, {
            G: "div",
            S: "ytp-autonav-endscreen-upnext-alternative-header",
            ma: "{{autoplayAlternativeHeader}}"
          }]
        }, {
          G: "a",
          S: "ytp-autonav-endscreen-link-container",
          W: {
            href: "{{url}}",
            target: c ? b.ba : ""
          },
          Y: [{
            G: "div",
            S: "ytp-autonav-endscreen-upnext-thumbnail",
            W: {
              style: "{{background}}"
            },
            Y: [{
              G: "div",
              W: {
                "aria-label": "{{timestamp}}"
              },
              Da: ["ytp-autonav-timestamp"],
              ma: "{{duration}}"
            }, {
              G: "div",
              Da: ["ytp-autonav-live-stamp"],
              ma: "Live"
            }, {
              G: "div",
              Da: ["ytp-autonav-upcoming-stamp"],
              ma: "Mendatang"
            }]
          }, {
            G: "div",
            S: "ytp-autonav-endscreen-video-info",
            Y: [{
              G: "div",
              S: "ytp-autonav-endscreen-premium-badge"
            }, {
              G: "div",
              S: "ytp-autonav-endscreen-upnext-title",
              ma: "{{title}}"
            }, {
              G: "div",
              S: "ytp-autonav-endscreen-upnext-author",
              ma: "{{author}}"
            }, {
              G: "div",
              S: "ytp-autonav-view-and-date",
              ma: "{{views_and_publish_time}}"
            }, {
              G: "div",
              S: "ytp-autonav-author-and-view",
              ma: "{{author_and_views}}"
            }]
          }]
        }]
      });
      g.L(this, this.A);
      this.A.Aa(this.container.element);
      if (!c) {
        this.V(this.A.qa("ytp-autonav-endscreen-link-container"), "click", this.la);
      }
      this.J.createClientVe(this.container.element, this, 115127);
      this.J.createClientVe(this.A.qa("ytp-autonav-endscreen-link-container"), this, 115128);
      this.closeButton = new g.Z({
        G: "button",
        S: "ytp-autonav-endscreen-upnext-header-close-button",
        W: {
          "aria-label": "Batalkan pemutaran otomatis"
        }
      });
      g.L(this, this.closeButton);
      if (a.N("web_post_play_autonav_embiggening")) {
        this.closeButton.listen("click", this.ha, this);
        this.J.createClientVe(this.closeButton.element, this, 115129);
        this.A.qa("ytp-autonav-endscreen-topbar-container").appendChild(this.closeButton.element);
      }
      this.overlay = new g.Z({
        G: "div",
        S: "ytp-autonav-overlay"
      });
      g.L(this, this.overlay);
      this.overlay.Aa(this.container.element);
      this.K = new g.Z({
        G: "div",
        S: "ytp-autonav-endscreen-button-container"
      });
      g.L(this, this.K);
      this.K.Aa(this.container.element);
      this.cancelButton = new g.Z({
        G: "button",
        Da: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-cancel-button", "ytp-autonav-endscreen-upnext-button-rounded"],
        W: {
          "aria-label": "Batalkan pemutaran otomatis"
        },
        ma: "Batalkan"
      });
      g.L(this, this.cancelButton);
      this.cancelButton.Aa(this.K.element);
      this.cancelButton.listen("click", this.ha, this);
      this.J.createClientVe(this.cancelButton.element, this, 115129);
      this.playButton = new g.Z({
        G: "a",
        Da: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-play-button", "ytp-autonav-endscreen-upnext-button-rounded"],
        W: {
          href: "{{url}}",
          role: "button",
          "aria-label": "Putar video selanjutnya"
        },
        ma: "Putar Sekarang"
      });
      g.L(this, this.playButton);
      this.playButton.Aa(this.K.element);
      this.playButton.listen("click", this.la, this);
      this.J.createServerVe(this.playButton.element, this.playButton, true);
      if (b = this.J.getVideoData()) {
        Rwb(this, b);
      }
      this.U = new g.jo(() => {
        G4(this);
      }, 500);
      g.L(this, this.U);
      this.fa();
      this.V(a, "autonavvisibility", this.fa);
    }
    X(a) {
      if (this.suggestion !== a) {
        this.suggestion = a;
        g.nT(this.A, a);
        this.playButton.updateValue("url", this.suggestion.wl());
        H4(this);
      }
    }
    j() {
      return this.L > 0;
    }
    D() {
      if (!this.j()) {
        this.L = Date.now();
        G4(this);
        Pwb(this.J, E4(this));
        g.uo(this.J.getRootNode(), "countdown-running", this.j());
      }
    }
    C() {
      this.B();
      G4(this);
      var a = this.A.qa("ytp-autonav-endscreen-upnext-header");
      if (a) {
        g.ze(a, "Berikutnya");
      }
    }
    B() {
      if (this.j()) {
        this.U.stop();
        this.L = 0;
      }
    }
    select(a = false) {
      this.J.nextVideo(false, a);
      this.B();
    }
    la(a) {
      if (g.GM(a, this.J)) {
        if (a.currentTarget === this.playButton.element) {
          this.J.logClick(this.playButton.element);
        } else if (a.currentTarget === this.A.qa("ytp-autonav-endscreen-link-container")) {
          a = this.A.qa("ytp-autonav-endscreen-link-container");
          this.J.logVisibility(a, true);
          this.J.logClick(a);
        }
        if (this.ba) {
          g.KL(this.J, "innertubeCommand", this.ba);
          this.B();
        } else {
          this.select();
        }
      }
    }
    ha() {
      this.J.logClick(this.cancelButton.element);
      g.$L(this.J, true);
      if (this.cancelCommand) {
        g.KL(this.J, "innertubeCommand", this.cancelCommand);
      }
    }
    onVideoDataChange(a, b) {
      Rwb(this, b);
      this.cancelCommand = b.getWatchNextResponse()?.playerOverlays?.playerOverlayRenderer?.autoplay?.playerOverlayAutoplayRenderer?.cancelButton?.buttonRenderer?.command;
    }
    fa() {
      var a = this.J.qg();
      if (this.Jb !== a) {
        this.Cc(a);
      }
      H4(this);
      this.J.logVisibility(this.container.element, a);
      this.J.logVisibility(this.cancelButton.element, a);
      this.J.logVisibility(this.A.qa("ytp-autonav-endscreen-link-container"), a);
      this.J.logVisibility(this.playButton.element, a);
    }
    nk(a) {
      return a.width < 400 || a.height < 459;
    }
  };
  var O4 = class extends g.Z {
    constructor(a, b) {
      super({
        G: "div",
        Da: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"]
      });
      this.created = false;
      this.player = a;
    }
    create() {
      this.created = true;
    }
    destroy() {
      this.created = false;
    }
    U() {
      return false;
    }
    qg() {
      return false;
    }
    ba() {
      return false;
    }
  };
  var Wwb = class extends g.Z {
    constructor(a) {
      super({
        G: "div",
        Da: ["ytp-upnext", "ytp-player-content"],
        W: {
          "aria-label": "{{aria_label}}"
        },
        Y: [{
          G: "div",
          S: "ytp-cued-thumbnail-overlay-image",
          W: {
            style: "{{background}}"
          }
        }, {
          G: "span",
          S: "ytp-upnext-top",
          Y: [{
            G: "span",
            S: "ytp-upnext-header",
            ma: "Berikutnya"
          }, {
            G: "span",
            S: "ytp-upnext-title",
            ma: "{{title}}"
          }, {
            G: "span",
            S: "ytp-upnext-author",
            ma: "{{author}}"
          }]
        }, {
          G: "a",
          S: "ytp-upnext-autoplay-icon",
          W: {
            role: "button",
            href: "{{url}}",
            "aria-label": "Putar video selanjutnya"
          },
          Y: [{
            G: "svg",
            W: {
              height: "100%",
              version: "1.1",
              viewBox: "0 0 72 72",
              width: "100%"
            },
            Y: [{
              G: "circle",
              S: "ytp-svg-autoplay-circle",
              W: {
                cx: "36",
                cy: "36",
                fill: "#fff",
                "fill-opacity": "0.3",
                r: "31.5"
              }
            }, {
              G: "circle",
              S: "ytp-svg-autoplay-ring",
              W: {
                cx: "-36",
                cy: "36",
                "fill-opacity": "0",
                r: "33.5",
                stroke: "#FFFFFF",
                "stroke-dasharray": "211",
                "stroke-dashoffset": "-211",
                "stroke-width": "4",
                transform: "rotate(-90)"
              }
            }, {
              G: "path",
              S: "ytp-svg-fill",
              W: {
                d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
              }
            }]
          }]
        }, {
          G: "span",
          S: "ytp-upnext-bottom",
          Y: [{
            G: "span",
            S: "ytp-upnext-cancel"
          }, {
            G: "span",
            S: "ytp-upnext-paused",
            ma: "Putar otomatis dijeda"
          }]
        }]
      });
      this.api = a;
      this.cancelButton = null;
      this.sa = this.qa("ytp-svg-autoplay-ring");
      this.U = this.notification = this.A = this.suggestion = null;
      this.ba = new g.jo(this.K, 5000, this);
      this.L = 0;
      var b = this.qa("ytp-upnext-cancel");
      this.cancelButton = new g.Z({
        G: "button",
        Da: ["ytp-upnext-cancel-button", "ytp-button"],
        W: {
          tabindex: "0",
          "aria-label": "Batalkan pemutaran otomatis"
        },
        ma: "Batalkan"
      });
      g.L(this, this.cancelButton);
      this.cancelButton.listen("click", this.ha, this);
      this.cancelButton.Aa(b);
      if (this.cancelButton) {
        this.api.createClientVe(this.cancelButton.element, this, 115129);
      }
      g.L(this, this.ba);
      this.api.createClientVe(this.element, this, 18788);
      b = this.qa("ytp-upnext-autoplay-icon");
      this.V(b, "click", this.la);
      this.api.createClientVe(b, this, 115130);
      this.fa();
      this.V(a, "autonavvisibility", this.fa);
      this.V(a, "mdxnowautoplaying", this.ta);
      this.V(a, "mdxautoplaycanceled", this.za);
      g.uo(this.element, "ytp-upnext-mobile", this.api.O().B);
    }
    K() {
      if (this.notification) {
        this.ba.stop();
        this.ud(this.U);
        this.U = null;
        this.notification.close();
        this.notification = null;
      }
    }
    X(a) {
      this.suggestion = a;
      g.nT(this, a, "hqdefault.jpg");
    }
    fa() {
      this.Cc(this.api.qg());
      this.api.logVisibility(this.element, this.api.qg());
      this.api.logVisibility(this.qa("ytp-upnext-autoplay-icon"), this.api.qg());
      if (this.cancelButton) {
        this.api.logVisibility(this.cancelButton.element, this.api.qg());
      }
    }
    ya() {
      window.focus();
      this.K();
    }
    D(a) {
      if (!this.j()) {
        g.lt("a11y-announce", `Berikutnya ${this.suggestion.title}`);
        this.L = (0, g.T)();
        this.A = new g.jo(() => {
          I4(this, a);
        }, 25);
        I4(this, a);
        Pwb(this.api, Swb(this, a));
      }
      g.so(this.element, "ytp-upnext-autoplay-paused");
    }
    hide() {
      super.hide();
    }
    j() {
      return !!this.A;
    }
    isCasting() {
      return this.api.getPresentingPlayerType() === 3;
    }
    C() {
      this.B();
      this.L = (0, g.T)();
      I4(this);
      g.qo(this.element, "ytp-upnext-autoplay-paused");
    }
    B() {
      if (this.j()) {
        this.A.dispose();
        this.A = null;
      }
    }
    select(a = false) {
      if (this.api.O().N("autonav_notifications") && a && window.Notification && typeof document.hasFocus === "function") {
        let b = Notification.permission;
        if (b === "default") {
          Notification.requestPermission();
        } else if (b === "granted" && !document.hasFocus()) {
          this.K();
          this.notification = new Notification("Berikutnya", {
            body: this.suggestion.title,
            icon: this.suggestion.Eh()
          });
          this.U = this.V(this.notification, "click", this.ya);
          this.ba.start();
        }
      }
      this.B();
      this.api.nextVideo(false, a);
    }
    la(a) {
      if (!g.ye(this.cancelButton.element, a.target) && g.GM(a, this.api)) {
        if (this.api.qg()) {
          this.api.logClick(this.qa("ytp-upnext-autoplay-icon"));
        }
        this.select();
      }
    }
    ha() {
      if (this.api.qg() && this.cancelButton) {
        this.api.logClick(this.cancelButton.element);
      }
      g.$L(this.api, true);
    }
    ta(a) {
      this.isCasting();
      this.show();
      this.D(a);
    }
    za() {
      this.isCasting();
      this.B();
      this.hide();
    }
    ka() {
      this.B();
      this.K();
      super.ka();
    }
  };
  var Xwb = class extends O4 {
    constructor(a) {
      super(a, "videowall-endscreen");
      this.J = a;
      this.stills = [];
      this.C = this.videoData = null;
      this.D = this.X = false;
      this.fa = null;
      g.qo(this.element, "modern-videowall-endscreen");
      this.A = new g.H0(this);
      g.L(this, this.A);
      this.K = new g.jo(() => {
        g.qo(this.element, "ytp-show-tiles");
      }, 0);
      g.L(this, this.K);
      this.table = new g.R_({
        G: "div",
        S: "ytp-modern-endscreen-content"
      });
      g.L(this, this.table);
      this.table.Aa(this.element);
      if (a.getVideoData().qb) {
        this.j = new N4(a);
      } else {
        this.j = new Wwb(a);
      }
      g.L(this, this.j);
      g.fM(this.player, this.j.element, 4);
      a.createClientVe(this.element, this, 158789);
      this.hide();
    }
    create() {
      super.create();
      var a = this.player.getVideoData();
      if (a) {
        this.videoData = a;
      }
      this.B();
      this.A.V(this.player, "appresize", this.B);
      this.A.V(this.player, "onVideoAreaChange", this.B);
      this.A.V(this.player, "videodatachange", this.onVideoDataChange);
      this.A.V(this.player, "autonavchange", this.L);
      this.A.V(this.player, "onAutonavCancelled", this.ha);
      a = this.videoData.autonavState;
      if (a !== this.fa) {
        this.L(a, false);
      }
      this.A.V(this.element, "transitionend", this.la);
    }
    destroy() {
      this.A.j();
      g.Pj(this.stills);
      this.stills = [];
      super.destroy();
      g.so(this.element, "ytp-show-tiles");
      this.K.stop();
      this.fa = this.videoData.autonavState;
    }
    U() {
      return this.videoData?.Jc || this.videoData.autonavState !== 1;
    }
    show() {
      var a = this.Jb;
      super.show();
      g.so(this.element, "ytp-show-tiles");
      if (this.player.O().B) {
        g.ko(this.K);
      } else {
        this.K.start();
      }
      if (this.D || this.C && this.C !== this.videoData.clientPlaybackNonce) {
        g.$L(this.player, false);
      }
      if (J4(this)) {
        K4(this);
        if (this.videoData.autonavState === 2) {
          if (this.player.getVisibilityState() === 3 || Qwb(this.player.Fi()) && this.player.N("web_player_pip_logging_fix")) {
            this.j.select(true);
          } else {
            this.j.D();
          }
        } else if (this.videoData.autonavState === 3) {
          this.j.C();
        }
      } else {
        g.$L(this.player, true);
        K4(this);
      }
      if (a !== this.Jb) {
        this.player.logVisibility(this.element, true);
      }
    }
    hide() {
      var a = this.Jb;
      super.hide();
      this.j.C();
      K4(this);
      if (a !== this.Jb) {
        this.player.logVisibility(this.element, false);
      }
    }
    la(a) {
      if (a.target === this.element) {
        this.B();
      }
    }
    B() {
      var a = this.videoData?.suggestions?.length ? this.videoData?.suggestions : [this.videoData?.U()];
      if (a.length) {
        var b = this.J.vn(true, this.J.isFullscreen());
        var c = Math.floor((b.width - 64 + 16) / (g.Pd(b.width * 0.27, 250, 450) + 16));
        b = Math.min(3, Math.floor((b.height - 64) / ((b.width - 64 - (c - 1) * 16) / c * 0.5625 + 70)));
        g.to(this.element, ["ytp-modern-endscreen-limit-rows-1", "ytp-modern-endscreen-limit-rows-2", "ytp-modern-endscreen-limit-rows-3"]);
        g.qo(this.element, `ytp-modern-endscreen-limit-rows-${b}`);
        g.uo(this.element, "ytp-modern-endscreen-single-item", c === 1);
        g.uo(this.element, "ytp-modern-endscreen-row-0", b === 0);
        c = this.table.element;
        c.ariaLive = "polite";
        this.j.X(this.videoData.U());
        if (this.j instanceof N4) {
          H4(this.j);
        }
        g.uo(this.element, "ytp-endscreen-takeover", J4(this));
        K4(this);
        b = 0;
        c.ariaBusy = "true";
        var d = a.length;
        for (let e = 0; e < d; e++) {
          let f = e % d;
          let h = this.stills[e];
          if (!h) {
            h = new g.ypb(this.player);
            this.stills[e] = h;
            c.appendChild(h.element);
          }
          g.o0a(h, a[f]);
          b++;
        }
        this.stills.length = b;
      }
    }
    onVideoDataChange() {
      var a = this.player.getVideoData({
        playerType: 1
      });
      if (this.videoData !== a) {
        if (a?.U()) {
          this.videoData = a;
          this.B();
        } else {
          this.player.ea("missg", {
            vid: a?.videoId || "",
            cpn: a?.clientPlaybackNonce || ""
          });
        }
      }
    }
    ba() {
      return this.j.j();
    }
    L(a, b = false) {
      var c = this.videoData?.Jc;
      if (a === 1) {
        if (!c || b) {
          this.D = false;
          this.C = this.videoData.clientPlaybackNonce;
        }
        this.j.B();
        if (this.Jb) {
          this.B();
        }
      } else {
        this.D = true;
        if (this.Jb && J4(this)) {
          if (a === 2) {
            this.j.D();
          } else if (a === 3) {
            this.j.C();
          }
        }
      }
    }
    ha(a) {
      if (a) {
        for (a = 0; a < this.stills.length; a++) {
          this.J.logVisibility(this.stills[a].element, true);
        }
        this.L(1, true);
      } else {
        this.C = null;
        this.D = false;
      }
      this.B();
    }
    qg() {
      return this.Jb && J4(this);
    }
  };
  var Ywb = class extends g.Z {
    constructor(a) {
      var b = a.O();
      var c = g.dB || g.WJ ? {
        style: "will-change: opacity"
      } : undefined;
      var d = b.C;
      var e = ["ytp-videowall-still"];
      if (b.B) {
        e.push("ytp-videowall-show-text");
      }
      super({
        G: "a",
        Da: e,
        W: {
          href: "{{url}}",
          target: d ? b.ba : "",
          "aria-label": "{{aria_label}}",
          "data-is-live": "{{is_live}}",
          "data-is-list": "{{is_list}}",
          "data-is-mix": "{{is_mix}}"
        },
        Y: [{
          G: "div",
          S: "ytp-videowall-still-image",
          W: {
            style: "{{background}}"
          }
        }, {
          G: "span",
          S: "ytp-videowall-still-info",
          W: {
            "aria-hidden": "true"
          },
          Y: [{
            G: "span",
            S: "ytp-videowall-still-info-bg",
            Y: [{
              G: "span",
              S: "ytp-videowall-still-info-content",
              W: c,
              Y: [{
                G: "span",
                S: "ytp-videowall-still-info-title",
                ma: "{{title}}"
              }, {
                G: "span",
                S: "ytp-videowall-still-info-author",
                ma: "{{author_and_views}}"
              }, {
                G: "span",
                S: "ytp-videowall-still-info-live",
                ma: "Live"
              }, {
                G: "span",
                S: "ytp-videowall-still-info-duration",
                ma: "{{duration}}"
              }]
            }]
          }]
        }, {
          G: "span",
          Da: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
          W: {
            "aria-hidden": "true"
          },
          Y: [{
            G: "span",
            S: "ytp-videowall-still-listlabel-icon"
          }, "Playlist", {
            G: "span",
            S: "ytp-videowall-still-listlabel-length",
            Y: [" (", {
              G: "span",
              ma: "{{playlist_length}}"
            }, ")"]
          }]
        }, {
          G: "span",
          Da: ["ytp-videowall-still-listlabel-mix", "ytp-videowall-still-listlabel"],
          W: {
            "aria-hidden": "true"
          },
          Y: [{
            G: "span",
            S: "ytp-videowall-still-listlabel-mix-icon"
          }, "Mix", {
            G: "span",
            S: "ytp-videowall-still-listlabel-length",
            ma: " (50+)"
          }]
        }]
      });
      this.suggestion = null;
      this.A = d;
      this.api = a;
      this.j = new g.H0(this);
      g.L(this, this.j);
      this.listen("click", this.onClick);
      this.listen("keypress", this.onKeyPress);
      this.j.V(a, "videodatachange", this.onVideoDataChange);
      a.createServerVe(this.element, this);
      this.onVideoDataChange();
    }
    select() {
      if (this.api.Lq(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, undefined, undefined, this.suggestion.UF || undefined)) {
        this.api.logClick(this.element);
      }
    }
    onClick(a) {
      if (g.GJ(this.api.O()) && this.api.N("web_player_log_click_before_generating_ve_conversion_params")) {
        this.api.logClick(this.element);
        let b = this.suggestion.wl();
        let c = {};
        g.dM(this.api, c);
        b = g.nj(b, c);
        g.HM(b, this.api, a);
      } else if (g.GM(a, this.api, this.A, this.suggestion.sessionData || undefined)) {
        this.select();
      }
    }
    onKeyPress(a) {
      switch (a.keyCode) {
        case 13:
        case 32:
          if (!a.defaultPrevented) {
            this.select();
            a.preventDefault();
          }
      }
    }
    onVideoDataChange() {
      var a = this.api.getVideoData();
      var b = this.api.O();
      this.A = a.oe ? false : b.C;
    }
  };
  var Zwb = class extends O4 {
    constructor(a) {
      super(a, "videowall-endscreen");
      this.J = a;
      this.C = 0;
      this.stills = [];
      this.D = this.videoData = null;
      this.K = this.fa = false;
      this.ha = null;
      this.B = new g.H0(this);
      g.L(this, this.B);
      this.L = new g.jo(() => {
        g.qo(this.element, "ytp-show-tiles");
      }, 0);
      g.L(this, this.L);
      var b = new g.Z({
        G: "button",
        Da: ["ytp-button", "ytp-endscreen-previous"],
        W: {
          "aria-label": "Sebelumnya"
        },
        Y: [g.Av()]
      });
      g.L(this, b);
      b.Aa(this.element);
      b.listen("click", this.ta, this);
      this.table = new g.R_({
        G: "div",
        S: "ytp-endscreen-content"
      });
      g.L(this, this.table);
      this.table.Aa(this.element);
      b = new g.Z({
        G: "button",
        Da: ["ytp-button", "ytp-endscreen-next"],
        W: {
          "aria-label": "Berikutnya"
        },
        Y: [g.Bv()]
      });
      g.L(this, b);
      b.Aa(this.element);
      b.listen("click", this.sa, this);
      if (a.getVideoData().qb) {
        this.j = new N4(a);
      } else {
        this.j = new Wwb(a);
      }
      g.L(this, this.j);
      g.fM(this.player, this.j.element, 4);
      a.createClientVe(this.element, this, 158789);
      this.hide();
    }
    create() {
      super.create();
      var a = this.player.getVideoData();
      if (a) {
        this.videoData = a;
      }
      this.A();
      this.B.V(this.player, "appresize", this.A);
      this.B.V(this.player, "onVideoAreaChange", this.A);
      this.B.V(this.player, "videodatachange", this.onVideoDataChange);
      this.B.V(this.player, "autonavchange", this.X);
      this.B.V(this.player, "onAutonavCancelled", this.la);
      a = this.videoData.autonavState;
      if (a !== this.ha) {
        this.X(a, false);
      }
      this.B.V(this.element, "transitionend", this.za);
    }
    destroy() {
      this.B.j();
      g.Pj(this.stills);
      this.stills = [];
      super.destroy();
      g.so(this.element, "ytp-show-tiles");
      this.L.stop();
      this.ha = this.videoData.autonavState;
    }
    U() {
      return this.videoData?.Jc || this.videoData?.autonavState !== 1;
    }
    show() {
      var a = this.Jb;
      super.show();
      g.so(this.element, "ytp-show-tiles");
      if (this.player.O().B) {
        g.ko(this.L);
      } else {
        this.L.start();
      }
      if (this.K || this.D && this.D !== this.videoData.clientPlaybackNonce) {
        g.$L(this.player, false);
      }
      if (L4(this)) {
        M4(this);
        if (this.videoData.autonavState === 2) {
          if (this.player.getVisibilityState() === 3 || Qwb(this.player.Fi()) && this.player.N("web_player_pip_logging_fix")) {
            this.j.select(true);
          } else {
            this.j.D();
          }
        } else if (this.videoData.autonavState === 3) {
          this.j.C();
        }
      } else {
        g.$L(this.player, true);
        M4(this);
      }
      if (a !== this.Jb) {
        this.player.logVisibility(this.element, true);
      }
    }
    hide() {
      var a = this.Jb;
      super.hide();
      this.j.C();
      M4(this);
      if (a !== this.Jb) {
        this.player.logVisibility(this.element, false);
      }
    }
    za(a) {
      if (a.target === this.element) {
        this.A();
      }
    }
    A() {
      var a = this.videoData?.suggestions?.length ? this.videoData?.suggestions : [this.videoData?.U()];
      if (a.length) {
        g.qo(this.element, "ytp-endscreen-paginate");
        var b = this.J.vn(true, this.J.isFullscreen());
        var c = g.RL(this.J);
        if (c) {
          c = c.Ji() ? 48 : 32;
          b.width -= c * 2;
        }
        var d = b.width / b.height;
        var e = 96 / 54;
        var f = c = 2;
        var h = Math.max(b.width / 96, 2);
        var k = Math.max(b.height / 54, 2);
        var l = a.length;
        var m = l * 4;
        for (m -= 4; m > 0 && (c < h || f < k);) {
          var p = c / 2;
          var q = f / 2;
          var u = c <= h - 2 && m >= q * 4;
          var v = f <= k - 2 && m >= p * 4;
          if ((p + 1) / q * e / d > d / (p / (q + 1) * e) && v) {
            m -= p * 4;
            f += 2;
          } else if (u) {
            m -= q * 4;
            c += 2;
          } else if (v) {
            m -= p * 4;
            f += 2;
          } else {
            break;
          }
        }
        e = false;
        if (m >= 12 && l * 4 - m <= 6 && (f >= 4 || c >= 4)) {
          e = true;
        }
        m = c * 96;
        h = f * 54;
        d = m / h < d ? b.height / h : b.width / m;
        d = Math.min(d, 2);
        m = Math.floor(Math.min(b.width, m * d));
        h = Math.floor(Math.min(b.height, h * d));
        b = this.table.element;
        b.ariaLive = "polite";
        g.jf(b, m, h);
        g.Ue(b, {
          marginLeft: `${m / -2}px`,
          marginTop: `${h / -2}px`
        });
        this.j.X(this.videoData.U());
        if (this.j instanceof N4) {
          H4(this.j);
        }
        g.uo(this.element, "ytp-endscreen-takeover", L4(this));
        M4(this);
        m += 4;
        h += 4;
        d = 0;
        b.ariaBusy = "true";
        for (k = 0; k < c; k++) {
          for (p = 0; p < f; p++) {
            u = d;
            v = 0;
            if (e && k >= c - 2 && p >= f - 2) {
              v = 1;
            } else if (p % 2 === 0 && k % 2 === 0) {
              if (p < 2 && k < 2) {
                if (p === 0 && k === 0) {
                  v = 2;
                }
              } else {
                v = 2;
              }
            }
            u = g.Qd(u + this.C, l);
            if (v !== 0) {
              q = this.stills[d];
              if (!q) {
                q = new Ywb(this.player);
                this.stills[d] = q;
                b.appendChild(q.element);
              }
              var z = Math.floor(h * p / f);
              let F = Math.floor(m * k / c);
              let M = Math.floor(h * (p + v) / f) - z - 4;
              let N = Math.floor(m * (k + v) / c) - F - 4;
              g.bf(q.element, F, z);
              g.jf(q.element, N, M);
              g.Ue(q.element, "transitionDelay", (p + k) / 20 + "s");
              g.uo(q.element, "ytp-videowall-still-mini", v === 1);
              g.uo(q.element, "ytp-videowall-still-large", v > 2);
              v = Math.max(N, M);
              g.uo(q.element, "ytp-videowall-still-round-large", v >= 256);
              g.uo(q.element, "ytp-videowall-still-round-medium", v > 96 && v < 256);
              g.uo(q.element, "ytp-videowall-still-round-small", v <= 96);
              u = a[u];
              if (q.suggestion !== u) {
                q.suggestion = u;
                v = q.api.O();
                z = g.po(q.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg";
                g.nT(q, u, z);
                if (g.GJ(v) && !q.api.N("web_player_log_click_before_generating_ve_conversion_params")) {
                  v = u.wl();
                  z = {};
                  g.NL(q.api, "addEmbedsConversionTrackingParams", [z]);
                  v = g.nj(v, z);
                  q.updateValue("url", v);
                }
                if (u = (u = u.sessionData) && u.itct) {
                  q.api.setTrackingParams(q.element, u);
                }
              }
              d++;
            }
          }
        }
        b.ariaBusy = "false";
        g.uo(this.element, "ytp-endscreen-paginate", d < l);
        for (a = this.stills.length - 1; a >= d; a--) {
          c = this.stills[a];
          g.xe(c.element);
          g.Oj(c);
        }
        this.stills.length = d;
      }
    }
    onVideoDataChange() {
      var a = this.player.getVideoData({
        playerType: 1
      });
      if (this.videoData !== a) {
        if (a?.U()) {
          this.C = 0;
          this.videoData = a;
          this.A();
        } else {
          this.player.ea("missg", {
            vid: a?.videoId || "",
            cpn: a?.clientPlaybackNonce || ""
          });
        }
      }
    }
    sa() {
      this.C += this.stills.length;
      this.A();
    }
    ta() {
      this.C -= this.stills.length;
      this.A();
    }
    ba() {
      return this.j.j();
    }
    X(a, b = false) {
      var c = this.videoData?.Jc;
      if (a === 1) {
        if (!c || b) {
          this.K = false;
          this.D = this.videoData.clientPlaybackNonce;
        }
        this.j.B();
        if (this.Jb) {
          this.A();
        }
      } else {
        this.K = true;
        if (this.Jb && L4(this)) {
          if (a === 2) {
            this.j.D();
          } else if (a === 3) {
            this.j.C();
          }
        }
      }
    }
    la(a) {
      if (a) {
        for (a = 0; a < this.stills.length; a++) {
          this.J.logVisibility(this.stills[a].element, true);
        }
        this.X(1, true);
      } else {
        this.D = null;
        this.K = false;
      }
      this.A();
    }
    qg() {
      return this.Jb && L4(this);
    }
  };
  var $wb = class extends g.Z {
    constructor(a) {
      super({
        G: "button",
        Da: ["ytp-watch-on-youtube-button", "ytp-button"],
        ma: "{{content}}"
      });
      this.J = a;
      this.buttonType = this.buttonType = 1;
      this.j();
      if (this.buttonType === 2) {
        g.qo(this.element, "ytp-continue-watching-button");
      }
      this.listen("click", this.onClick);
      this.listen("videodatachange", this.j);
      this.Cc(true);
    }
    j() {
      switch (this.buttonType) {
        case 1:
          var a = "Tonton lagi di YouTube";
          var b = 156915;
          break;
        case 2:
          a = "Lanjutkan menonton di YouTube";
          b = 156942;
          break;
        default:
          a = "Lanjutkan menonton di YouTube";
          b = 156942;
      }
      this.update({
        content: a
      });
      if (this.J.hasVe(this.element)) {
        this.J.destroyVe(this.element);
      }
      this.J.createClientVe(this.element, this, b);
    }
    onClick(a) {
      if (this.J.N("web_player_log_click_before_generating_ve_conversion_params")) {
        this.J.logClick(this.element);
      }
      g.HM(this.getVideoUrl(), this.J, a);
      if (!this.J.N("web_player_log_click_before_generating_ve_conversion_params")) {
        this.J.logClick(this.element);
      }
    }
    getVideoUrl() {
      var a = true;
      switch (this.buttonType) {
        case 1:
          a = true;
          break;
        case 2:
          a = false;
      }
      a = this.J.getVideoUrl(a, false, false, true);
      var b = this.J.O();
      if (g.GJ(b)) {
        let c = {};
        if (g.GJ(b)) {
          g.NL(this.J, "addEmbedsConversionTrackingParams", [c]);
        }
        a = g.nj(a, c);
      }
      return a;
    }
    logVisibility() {
      this.J.logVisibility(this.element, this.Jb && this.ga);
    }
    show() {
      super.show();
      this.logVisibility();
    }
    hide() {
      super.hide();
      this.logVisibility();
    }
    hd(a) {
      super.hd(a);
      this.logVisibility();
    }
  };
  var axb = class extends O4 {
    constructor(a) {
      super(a, "watch-again-on-youtube-endscreen");
      this.watchButton = new $wb(a);
      g.L(this, this.watchButton);
      this.watchButton.Aa(this.element);
      if (g.Z$a(a)) {
        this.j = new g.psb(a);
        g.L(this, this.j);
        this.A = new g.Z({
          G: "div",
          Da: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
          W: {
            tabIndex: "-1"
          },
          Y: [this.j]
        });
        g.L(this, this.A);
        this.j.Aa(this.A.element);
        this.A.Aa(this.element);
      }
      a.createClientVe(this.element, this, 156914);
      this.hide();
    }
    hasSuggestions() {
      return this.j?.hasSuggestions();
    }
    show() {
      if (this.player.getPlayerState() !== 3) {
        super.show();
        let b = this.A;
        if (b) {
          var a = this.j.hasSuggestions();
          g.uo(this.element, "ytp-shorts-branded-ui", a);
          if (a) {
            b.show();
          } else {
            b.hide();
          }
        }
        g.RL(this.player)?.UD(true);
        this.player.logVisibility(this.element, true);
        this.watchButton.hd(true);
      }
    }
    hide() {
      super.hide();
      g.RL(this.player)?.UD(false);
      this.player.logVisibility(this.element, false);
      this.watchButton.hd(false);
    }
  };
  g.BT("endscreen", class extends g.Z1 {
    constructor(a) {
      super(a);
      this.endScreen = null;
      this.j = this.A = false;
      this.listeners = new g.H0(this);
      g.L(this, this.listeners);
      var b = a.O();
      if (a.isEmbedsShortsMode()) {
        this.endScreen = new axb(a);
      } else if (Twb(a)) {
        this.A = true;
        Uwb(this);
        if (b.N("delhi_modern_endscreen")) {
          this.endScreen = new Xwb(a);
        } else {
          this.endScreen = new Zwb(a);
        }
      } else {
        this.endScreen = new O4(a);
      }
      g.L(this, this.endScreen);
      g.fM(a, this.endScreen.element, 4);
      Vwb(this);
      this.listeners.V(a, "videodatachange", this.onVideoDataChange, this);
      this.listeners.V(a, g.lA("endscreen"), c => {
        this.onCueRangeEnter(c);
      });
      this.listeners.V(a, g.mA("endscreen"), c => {
        this.onCueRangeExit(c);
      });
    }
    Mn() {
      var a = this.player.getVideoData();
      var b = a.mutedAutoplay && (a.limitedPlaybackDurationInSeconds > 0 || a.endSeconds > 0 || a.mutedAutoplayDurationMode !== 2);
      if (this.player.isEmbedsShortsMode() && !b) {
        return true;
      }
      var c = !!a.U() || !!a.suggestions?.length;
      c = !Twb(this.player) || c;
      var d = a.eB;
      var e = this.player.gG();
      return (c || !!a?.Jc) && !d && !e && !b;
    }
    qg() {
      return this.endScreen.qg();
    }
    t7() {
      if (this.qg()) {
        return this.endScreen.ba();
      } else {
        return false;
      }
    }
    ka() {
      this.player.He("endscreen");
      super.ka();
    }
    load() {
      {
        var a = this.player.getVideoData();
        let d = a.transitionEndpointAtEndOfStream;
        if (d && d.videoId) {
          var b = this.player.Ob().Qf.get("heartbeat");
          var c = a.U();
          if (!c || d.videoId !== c.videoId || a.fH) {
            c = this.player.O().Ja().j.Ca(g.Ceb);
            a = a.vv;
            let e = undefined;
            if (c && a) {
              g.lG(g.fG(), a);
              e = {
                itct: a
              };
            }
            this.player.Lq(d.videoId, e, undefined, true, true, d);
            if (b) {
              b.cN("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END", "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT");
            }
            b = true;
          } else {
            b = false;
          }
        } else {
          b = false;
        }
      }
      if (!b) {
        super.load();
        this.endScreen.show();
      }
    }
    unload() {
      super.unload();
      this.endScreen.hide();
      this.endScreen.destroy();
    }
    onCueRangeEnter(a) {
      if (this.Mn()) {
        if (!this.endScreen.created) {
          this.endScreen.create();
        }
        if (a.getId() === "load") {
          this.load();
        }
      }
    }
    onCueRangeExit(a) {
      if (a.getId() === "load" && this.loaded) {
        this.unload();
      }
    }
    onVideoDataChange() {
      Vwb(this);
      if (this.A && Uwb(this)) {
        if (this.endScreen) {
          this.endScreen.hide();
          if (this.endScreen.created) {
            this.endScreen.destroy();
          }
          this.endScreen.dispose();
        }
        this.endScreen = new Zwb(this.player);
        g.L(this, this.endScreen);
        g.fM(this.player, this.endScreen.element, 4);
      }
    }
  });
})(_yt_player);