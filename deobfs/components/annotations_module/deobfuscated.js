(function (g) {
  var window = this;
  "use strict";
  function J2(a) {
    a.publish("cardstatechange", a.km() && a.er() ? 1 : 0);
  }
  function K2(a, b) {
    var c = g.Ma(b);
    var d = c ? b : arguments;
    for (c = c ? 0 : 1; c < d.length; c++) {
      if (a == null) {
        return;
      }
      a = a[d[c]];
    }
    return a;
  }
  function qsb(a) {
    var b = g.df(a);
    a = g.kf(a);
    return new g.Re(b.x, b.y, a.width, a.height);
  }
  function rsb(a, b, c) {
    var d;
    return d = g.wt(a, b, function (...e) {
      g.xt(d);
      c.apply(a, e);
    }, {});
  }
  function O2() {
    if (!L2) {
      if (M2) {
        L2 = new g.io(function (a) {
          N2(a);
        }, M2);
      } else {
        L2 = new g.jo(function () {
          N2(g.Ua());
        }, 20);
      }
    }
    if (!L2.isActive()) {
      L2.start();
    }
  }
  function N2(a) {
    g.Nb(P2, function (b) {
      ssb(b, a);
    });
    if (!g.bc(P2)) {
      O2();
    }
  }
  function Q2(a, b, c, d) {
    g.vo.call(this);
    if (!Array.isArray(a) || !Array.isArray(b)) {
      throw Error("Start and end parameters must be arrays");
    }
    if (a.length != b.length) {
      throw Error("Start and end points must be the same length");
    }
    this.j = a;
    this.K = b;
    this.duration = c;
    this.C = d;
    this.coords = [];
    this.progress = this.D = 0;
    this.B = null;
  }
  function ssb(a, b) {
    if (b < a.startTime) {
      a.endTime = b + a.endTime - a.startTime;
      a.startTime = b;
    }
    a.progress = (b - a.startTime) / (a.endTime - a.startTime);
    if (a.progress > 1) {
      a.progress = 1;
    }
    a.D = 1000 / (b - a.B);
    a.B = b;
    tsb(a, a.progress);
    if (a.progress == 1) {
      a.Sa = 0;
      (0, R2.lP)(a);
      a.onFinish();
      a.Au();
    } else if (a.isPlaying()) {
      a.BP();
    }
  }
  function tsb(a, b) {
    if (typeof a.C === "function") {
      b = a.C(b);
    }
    a.coords = Array(a.j.length);
    for (let c = 0; c < a.j.length; c++) {
      a.coords[c] = (a.K[c] - a.j[c]) * b + a.j[c];
    }
  }
  function usb(a, b) {
    g.Dl.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.z = b.coords[2];
    this.duration = b.duration;
    this.progress = b.progress;
    this.fps = b.D;
    this.state = b.Sa;
  }
  function S2(a, b, c, d, e) {
    Q2.call(this, b, c, d, e);
    this.element = a;
  }
  function T2(a, b, c, d, e) {
    if (b.length != 2 || c.length != 2) {
      throw Error("Start and end points must be 2D");
    }
    S2.call(this, a, b, c, d, e);
  }
  function vsb(a) {
    return Math.pow(a, 3);
  }
  function wsb(a) {
    return a * 3 * a - a * 2 * a * a;
  }
  function U2(a) {
    return a.baseUrl || null;
  }
  function V2(a, b) {
    return g.fb(g.jb(a, b), c => !!c);
  }
  function xsb(a, b, c) {
    function d(Oa) {
      var Sa = Oa.hovercardButton;
      if (!Sa) {
        return null;
      }
      Sa = Sa.subscribeButtonRenderer;
      if (!Sa) {
        return null;
      }
      var Va = f(Sa.unsubscribedButtonText);
      var Vc = f(Sa.subscribedButtonText);
      if (Sa.subscribed) {
        var Da = f(Sa.subscriberCountWithUnsubscribeText);
        var Tb = f(Sa.subscriberCountText);
      } else {
        Da = f(Sa.subscriberCountText);
        Tb = f(Sa.subscriberCountWithSubscribeText);
      }
      var Bc = null;
      if (Oa.signinEndpoint && ((Bc = K2(Oa, "signinEndpoint", "webNavigationEndpointData", "url")) || (Bc = g.Q(Sa.signInEndpoint?.commandMetadata, g.$T)?.url), !Bc)) {
        return null;
      } else if (Va && (Vc || Bc)) {
        return {
          subscribed: Sa.subscribed,
          subscribeText: Va,
          subscribeCount: Da,
          unsubscribeText: Vc,
          unsubscribeCount: Tb,
          enabled: Sa.enabled,
          signinUrl: Bc,
          classic: Oa.useClassicSubscribeButton
        };
      } else {
        return null;
      }
    }
    function e(Oa) {
      if (Oa) {
        var Sa = [];
        var Va = Oa.videoId;
        if (Va) {
          Sa.push("v=" + Va);
        }
        if (Va = Oa.playlistId) {
          Sa.push("list=" + Va);
        }
        if (Oa = Oa.startTimeSeconds) {
          Sa.push("t=" + Oa);
        }
        return "/watch?" + Sa.join("&");
      }
    }
    function f(Oa) {
      if (!Oa) {
        return null;
      }
      var Sa = Oa.simpleText;
      if (Sa) {
        return Sa;
      } else if (Oa.runs) {
        return g.jb(Oa.runs, Va => Va.text).join("");
      } else {
        return null;
      }
    }
    b = b.endscreenElementRenderer;
    if (!b) {
      return null;
    }
    var h = b.style;
    var k = b.endpoint || {};
    var l = null;
    var m = null;
    var p = false;
    var q = null;
    var u = null;
    var v = null;
    var z = null;
    var F = false;
    var M = null;
    var N = null;
    var S = null;
    var R = null;
    var V = null;
    var X = null;
    if (h === "VIDEO") {
      if (g.Q(k, g.xv)) {
        l = g.Q(k, g.xv).url;
      } else {
        X = g.Q(k, g.IK);
        l = e(X);
      }
      m = false;
      q = a;
      if (b.thumbnailOverlays) {
        p = b.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer;
        u = f(p.text);
        p = p.style === "LIVE";
      } else {
        u = f(b.videoDuration);
      }
    } else if (h === "PLAYLIST") {
      if (g.Q(k, g.xv)) {
        l = g.Q(k, g.xv).url;
      } else {
        X = g.Q(k, g.IK);
        l = e(X);
      }
      m = false;
      q = a;
      v = f(b.playlistLength);
    } else if (h === "CHANNEL") {
      if (F = K2(k, "browseEndpoint", "browseId")) {
        z = F;
        l = `/channel/${z}`;
      }
      m = false;
      q = "new";
      if (F = !!b.isSubscribe) {
        M = d(b);
      } else {
        N = f(b.subscribersText);
      }
    } else if (h === "WEBSITE") {
      if (S = K2(k, "urlEndpoint", "url")) {
        l = S;
      }
      m = true;
      q = "new";
      S = b.icon.thumbnails[0].url;
    } else if (h === "CREATOR_MERCHANDISE") {
      if (b.productPrice) {
        R = f(b.productPrice);
      }
      if (b.additionalFeesText) {
        V = f(b.additionalFeesText);
      }
      if (m = K2(k, "urlEndpoint", "url")) {
        l = m;
      }
      m = true;
      q = "new";
    }
    a = K2(b, "title", "accessibility", "accessibilityData", "label");
    var ta = b.endpoint ? b.endpoint.clickTrackingParams : null;
    var ya = "";
    if (b.metadata) {
      let Oa = f(b.metadata);
      if (Oa) {
        ya = Oa;
      }
    }
    return {
      id: `element-${c}`,
      type: h,
      title: f(b.title),
      metadata: ya,
      callToAction: f(b.callToAction),
      iY: b.image,
      iconUrl: S,
      left: Number(b.left),
      width: Number(b.width),
      top: Number(b.top),
      aspectRatio: Number(b.aspectRatio),
      startMs: Math.floor(Number(b.startMs)),
      endMs: Math.floor(Number(b.endMs)),
      videoDuration: u,
      aH: p,
      playlistLength: v,
      channelId: z,
      subscribeButton: M,
      subscribersText: N,
      isSubscribe: F,
      targetUrl: l || null,
      z7: m,
      sessionData: ta ? {
        itct: ta
      } : null,
      zaa: q,
      qB: a ? a : null,
      isPlaceholder: b.isPlaceholder,
      impressionUrls: V2(b.impressionUrls || [], U2),
      g7: V2(b.hovercardShowUrls || [], U2),
      clickUrls: V2(k.loggingUrls || [], U2),
      visualElement: g.Qu(b.trackingParams),
      productPrice: R,
      additionalFeesText: V,
      watchEndpoint: X || null
    };
  }
  function W2(a, b) {
    var c = {
      startMs: Math.floor(Number(a.startMs)),
      impressionUrls: V2(a.impressionUrls || [], U2),
      elements: V2(a.elements || [], (d, e) => xsb(b, d, e))
    };
    if (a.trackingParams) {
      c.visualElement = g.Qu(a.trackingParams);
    }
    return c;
  }
  function X2(a) {
    return a.player.O().playerStyle === "creator-endscreen-editor";
  }
  function ysb(a) {
    if (a.player.getVideoData().oe) {
      return "current";
    } else if (a.X) {
      return "new";
    } else {
      return "current";
    }
  }
  function Y2(a, b, c = true) {
    a.player.He("creatorendscreen");
    if (a.B) {
      a.B.dispose();
      a.B = null;
      a.D.dispose();
      a.D = null;
    }
    for (var d of Object.values(a.A)) {
      d.dispose();
    }
    a.A = {};
    a.K = {};
    if (a.U.length > 0) {
      a.U.forEach(e => {
        e.dispose();
      });
      a.U.length = 0;
    }
    if (a.j) {
      g.so(a.j, "ytp-ce-element-show");
      a.j.setAttribute("aria-hidden", "true");
    }
    a.L = 0;
    if ((a.endscreen = b) && b.elements) {
      if (c) {
        zsb(a);
      }
      c = [];
      d = new g.BM(b.startMs, 2251799813685247, {
        id: "ytp-ce-in-endscreen",
        namespace: "creatorendscreen"
      });
      c.push(d);
      if (!a.player.O().B) {
        a.B = new g.Z({
          G: "div",
          S: "ytp-ce-shadow"
        });
        g.fM(a.player, a.B.element, 4);
        a.D = new g.Y_(a.B, 200);
      }
      for (d = 0; d < b.elements.length; ++d) {
        let e = b.elements[d];
        let f = Asb(a, e);
        if (!f) {
          g.Fu(new g.tn("buildEndscreenElement null", e));
          continue;
        }
        a.A[e.id] = f;
        a.K[e.id] = e;
        g.fM(a.player, f.element, 4);
        let h = new g.BM(e.startMs, e.endMs, {
          id: "ytp-ce-element-" + e.id,
          namespace: "creatorendscreen"
        });
        c.push(h);
        Bsb(a, f, e);
      }
      a.player.qf(c);
      a.Xb();
    }
  }
  function Csb(a) {
    var b = a.player.getVideoData();
    var c = b.videoId;
    if (a.C) {
      a.C.abort();
    }
    c = {
      method: "POST",
      onFinish: e => {
        var f = a.C = null;
        if (e.status === 200) {
          e = e.responseText;
          if (e.substring(0, 3) === ")]}") {
            e = e.substring(3);
            f = JSON.parse(e);
            f = W2(f, ysb(a));
          }
        }
        Y2(a, f);
      },
      urlParams: {
        v: c
      },
      withCredentials: true
    };
    if (a.X) {
      c.urlParams.ptype = "embedded";
    }
    var d = b.ZE;
    if (d) {
      c.postParams = {
        ad_tracking: d
      };
    }
    if (b = g.ENa(b)) {
      b = g.ed(b);
      if (b = g.ad(b)) {
        a.C = g.pq(b, c);
      }
    }
  }
  function zsb(a) {
    var b = g.Tu();
    var c = g.Uu();
    if (c && b && a.endscreen.visualElement) {
      g.zc(g.bv)(undefined, c, b, a.endscreen.visualElement);
    }
  }
  function Asb(a, b) {
    var c = null;
    switch (b.type) {
      case "VIDEO":
        a = {
          G: "div",
          Da: ["ytp-ce-element", "ytp-ce-video"],
          W: {
            tabindex: "0",
            "aria-label": b.qB || "",
            "aria-hidden": "true"
          },
          Y: [{
            G: "div",
            S: "ytp-ce-element-shadow"
          }, {
            G: "div",
            S: "ytp-ce-covering-image",
            W: Z2(b)
          }, {
            G: "div",
            S: "ytp-ce-covering-shadow-top"
          }, {
            G: "a",
            S: "ytp-ce-covering-overlay",
            W: {
              href: $2(a, b.targetUrl),
              tabindex: "-1"
            },
            Y: [{
              G: "div",
              Da: ["ytp-ce-video-title", "ytp-webkit-ellipsis"],
              W: {
                dir: g.yo(b.title || "")
              },
              ma: b.title
            }, {
              G: "div",
              S: b.aH ? "ytp-ce-live-video-duration" : "ytp-ce-video-duration",
              ma: b.videoDuration || undefined
            }]
          }]
        };
        c = new g.Z(a);
        break;
      case "PLAYLIST":
        a = {
          G: "div",
          Da: ["ytp-ce-element", "ytp-ce-playlist"],
          W: {
            tabindex: "0",
            "aria-label": b.qB || "",
            "aria-hidden": "true"
          },
          Y: [{
            G: "div",
            S: "ytp-ce-element-shadow"
          }, {
            G: "div",
            S: "ytp-ce-covering-image",
            W: Z2(b)
          }, {
            G: "div",
            S: "ytp-ce-covering-shadow-top"
          }, {
            G: "a",
            S: "ytp-ce-covering-overlay",
            W: {
              href: $2(a, b.targetUrl),
              tabindex: "-1"
            },
            Y: [{
              G: "div",
              Da: ["ytp-ce-playlist-title", "ytp-webkit-ellipsis"],
              W: {
                dir: g.yo(b.title || "")
              },
              ma: b.title
            }, {
              G: "div",
              S: "ytp-ce-playlist-count",
              Y: [{
                G: "div",
                S: "ytp-ce-playlist-icon"
              }, {
                G: "div",
                S: "ytp-ce-playlist-count-text",
                ma: b.playlistLength || undefined
              }]
            }]
          }]
        };
        c = new g.Z(a);
        break;
      case "CHANNEL":
        c = {
          G: "div",
          Da: ["ytp-ce-element", "ytp-ce-channel", b.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"],
          W: {
            tabindex: "0",
            "aria-label": b.qB || "",
            "aria-hidden": "true"
          },
          Y: [{
            G: "div",
            S: "ytp-ce-element-shadow"
          }, {
            G: "div",
            S: "ytp-ce-expanding-overlay",
            Y: [{
              G: "div",
              S: "ytp-ce-expanding-overlay-hider"
            }, {
              G: "div",
              S: "ytp-ce-expanding-overlay-background"
            }, {
              G: "div",
              S: "ytp-ce-expanding-overlay-content",
              Y: [{
                G: "div",
                S: "ytp-ce-expanding-overlay-body",
                Y: [{
                  G: "div",
                  S: "ytp-ce-expanding-overlay-body-padding",
                  Y: [{
                    G: "a",
                    Da: ["ytp-ce-channel-title", "ytp-ce-link"],
                    W: {
                      href: $2(a, b.targetUrl),
                      target: "_blank",
                      tabindex: "-1",
                      dir: g.yo(b.title || "")
                    },
                    ma: b.title
                  }, b.subscribeButton ? {
                    G: "div",
                    S: "ytp-ce-subscribe-container",
                    Y: [{
                      G: "div",
                      S: "ytp-ce-channel-subscribe"
                    }]
                  } : "", b.subscribersText ? {
                    G: "div",
                    S: "ytp-ce-channel-subscribers-text",
                    W: b.qB ? {
                      "aria-hidden": "true"
                    } : {},
                    ma: b.subscribersText
                  } : "", b.metadata ? {
                    G: "div",
                    Da: ["ytp-ce-channel-metadata", "yt-ui-ellipsis", "yt-ui-ellipsis-3"],
                    ma: b.metadata
                  } : ""]
                }]
              }]
            }]
          }, {
            G: "div",
            S: "ytp-ce-expanding-image",
            W: Z2(b)
          }]
        };
        c = new g.Z(c);
        let e = g.ge(document, "div", "ytp-ce-channel-subscribe", c.element)[0];
        if (b.subscribeButton && b.channelId) {
          g.qo(e, "ytp-ce-subscribe-button");
          let f;
          if (a.player.O().B) {
            var d = null;
            f = b.sessionData.itct;
          } else {
            d = "endscreen";
            f = null;
          }
          d = new Dsb(b.subscribeButton.subscribeText, b.subscribeButton.subscribeCount, b.subscribeButton.unsubscribeText, b.subscribeButton.unsubscribeCount, !!b.subscribeButton.enabled, !!b.subscribeButton.classic, b.channelId, !!b.subscribeButton.subscribed, d, f, a.player);
          e.appendChild(d.element);
          a.U.push(d);
        }
        break;
      case "WEBSITE":
        a = {
          G: "div",
          Da: ["ytp-ce-element", "ytp-ce-website"],
          W: {
            tabindex: "0",
            "aria-label": b.qB || "",
            "aria-hidden": "true"
          },
          Y: [{
            G: "div",
            S: "ytp-ce-element-shadow"
          }, {
            G: "div",
            S: "ytp-ce-expanding-overlay",
            Y: [{
              G: "div",
              S: "ytp-ce-expanding-overlay-hider"
            }, {
              G: "div",
              S: "ytp-ce-expanding-overlay-background"
            }, {
              G: "div",
              S: "ytp-ce-expanding-overlay-content",
              Y: [{
                G: "div",
                S: "ytp-ce-expanding-overlay-body",
                Y: [{
                  G: "div",
                  S: "ytp-ce-expanding-overlay-body-padding",
                  Y: [{
                    G: "div",
                    S: "ytp-ce-website-title",
                    W: {
                      dir: g.yo(b.title || "")
                    },
                    ma: b.title
                  }, {
                    G: "div",
                    S: "ytp-ce-website-metadata",
                    ma: b.metadata
                  }, {
                    G: "a",
                    Da: ["ytp-ce-website-goto", "ytp-ce-link"],
                    W: {
                      href: $2(a, b.targetUrl),
                      target: "_blank",
                      tabindex: "-1"
                    },
                    ma: b.callToAction
                  }]
                }]
              }]
            }]
          }, {
            G: "div",
            S: "ytp-ce-expanding-image",
            W: Z2(b)
          }, {
            G: "div",
            S: "ytp-ce-expanding-icon",
            W: Esb(b.iconUrl)
          }]
        };
        c = new g.Z(a);
        break;
      case "CREATOR_MERCHANDISE":
        c = "";
        if (b.productPrice) {
          c = {
            G: "div",
            S: "ytp-ce-merchandise-price-container",
            Y: [{
              G: "div",
              S: "ytp-ce-merchandise-price",
              ma: b.productPrice
            }]
          };
          if (b.additionalFeesText) {
            c.Y.push({
              G: "div",
              S: "ytp-ce-merchandise-additional-fees",
              ma: b.additionalFeesText
            });
          }
        }
        a = {
          G: "div",
          Da: ["ytp-ce-element", "ytp-ce-merchandise"],
          W: {
            tabindex: "0",
            "aria-label": b.qB || "",
            "aria-hidden": "true"
          },
          Y: [{
            G: "div",
            S: "ytp-ce-element-shadow"
          }, {
            G: "div",
            S: "ytp-ce-expanding-overlay",
            Y: [{
              G: "div",
              S: "ytp-ce-expanding-overlay-hider"
            }, {
              G: "div",
              S: "ytp-ce-expanding-overlay-background"
            }, {
              G: "div",
              S: "ytp-ce-expanding-overlay-content",
              Y: [{
                G: "div",
                S: "ytp-ce-expanding-overlay-body",
                Y: [{
                  G: "div",
                  S: "ytp-ce-expanding-overlay-body-padding",
                  Y: [{
                    G: "div",
                    S: "ytp-ce-merchandise-title",
                    W: {
                      dir: g.yo(b.title || "")
                    },
                    ma: b.title
                  }, c, {
                    G: "div",
                    S: "ytp-ce-merchandise-metadata",
                    ma: b.metadata
                  }, {
                    G: "a",
                    Da: ["ytp-ce-merchandise-goto", "ytp-ce-link"],
                    W: {
                      href: $2(a, b.targetUrl),
                      target: "_blank",
                      tabindex: "-1"
                    },
                    ma: b.callToAction
                  }]
                }]
              }]
            }]
          }, {
            G: "div",
            S: "ytp-ce-expanding-image",
            W: Z2(b)
          }, {
            G: "div",
            S: "ytp-ce-merchandise-invideo-cta-container",
            Y: [{
              G: "div",
              S: "ytp-ce-merchandise-invideo-cta",
              ma: b.callToAction || undefined
            }]
          }]
        };
        c = new g.Z(a);
    }
    if (b.isPlaceholder) {
      g.qo(c.element, "ytp-ce-placeholder");
    }
    return c;
  }
  function Bsb(a, b, c) {
    function d() {
      h(1);
    }
    function e() {
      h(-1);
    }
    b.listen("mouseenter", () => {
      a3(a, b, c);
    });
    b.listen("mouseleave", () => {
      b3(a, b, c);
    });
    if (!a.player.O().B) {
      b.listen("click", () => {
        g.qo(b.element, "ytp-ce-element-hover");
      });
    }
    b.listen("click", k => {
      Fsb(a, c, k);
    });
    b.listen("keypress", k => {
      Fsb(a, c, k);
    });
    b.listen("focus", () => {
      a3(a, b, c);
    });
    b.listen("blur", () => {
      b3(a, b, c);
    });
    b.listen("touchstart", () => {
      a3(a, b, c);
    });
    var f = g.he("ytp-ce-expanding-overlay-hider", b.element);
    if (f) {
      b.V(f, "touchstart", k => {
        k.stopPropagation();
        g.so(b.element, "ytp-ce-element-hover");
        g.so(b.element, "ytp-ce-force-expand");
      });
    }
    b.listen("keydown", k => {
      a.ga = k.keyCode === 9 && !k.shiftKey;
    });
    var h = k => {
      a.L += k;
      if (a.L > 0) {
        g.qo(b.element, "ytp-ce-force-expand");
        c3(a, c.id, true);
      } else {
        g.so(b.element, "ytp-ce-force-expand");
        g.so(b.element, "ytp-ce-element-hover");
        c3(a, c.id, false);
      }
    };
    f = k => {
      if (k) {
        b.listen("blur", () => {
          if (k.style.display != "none" && a.ga) {
            k.focus();
          }
        });
        b.V(k, "focus", d);
        b.V(k, "blur", e);
      }
    };
    f(g.he("ytp-sb-subscribe", b.element));
    f(g.he("ytp-sb-unsubscribe", b.element));
    b.listen("focus", d);
    b.listen("blur", e);
  }
  function d3(a, b, c) {
    function d() {
      if (!f) {
        e++;
        if (e === b.length) {
          h.stop();
          if (c) {
            c();
          }
        }
      }
    }
    if (!b || b.length === 0 || X2(a)) {
      if (c) {
        c();
      }
    } else {
      b = Gsb(a, b);
      var e = 0;
      var f = false;
      var h = new g.jo(() => {
        f = true;
        if (c) {
          c();
        }
      }, 1000, a);
      h.start();
      for (a = 0; a < b.length; a++) {
        g.Vs(b[a], d);
      }
    }
  }
  function Z2(a) {
    if (a.iY) {
      var b = a.iY.thumbnails;
    }
    return Esb(b ? b[b.length - 1].url : null);
  }
  function $2(a, b) {
    a = a.player.O();
    if (b) {
      if (b.startsWith("//")) {
        return a.protocol + ":" + b;
      }
      if (b.startsWith("/")) {
        return g.aK(a) + b;
      }
    } else {
      return "";
    }
    return b;
  }
  function Esb(a) {
    if (a) {
      return {
        style: "background-image: url(" + a + ")"
      };
    } else {
      return {};
    }
  }
  function a3(a, b, c) {
    if (!g.po(b.element, "ytp-ce-element-hover")) {
      if (c.type === "VIDEO" || c.type === "PLAYLIST") {
        g.qo(b.element, "ytp-ce-element-hover");
      } else if (a.player.O().B) {
        new g.jo(() => {
          g.qo(b.element, "ytp-ce-element-hover");
        }, 200).start();
      } else {
        g.qo(b.element, "ytp-ce-element-hover");
      }
      d3(a, c.g7);
      c3(a, c.id, true);
    }
  }
  function b3(a, b, c) {
    g.so(b.element, "ytp-ce-element-hover");
    g.so(b.element, "ytp-ce-force-expand");
    c3(a, c.id, false);
  }
  function Fsb(a, b, c) {
    if (b.targetUrl && (!c || c.type !== "keypress" || c.keyCode === 13)) {
      for (var d = c.target; d && !g.po(d, "ytp-ce-element");) {
        if (g.po(d, "subscribe-label")) {
          e3(a, b);
        }
        if (g.po(d, "ytp-ce-channel-subscribe")) {
          return;
        }
        d = d.parentElement || null;
      }
      if (!d || g.po(d, "ytp-ce-element-hover")) {
        c.preventDefault();
        c.stopPropagation();
        if (d = a.A[b.id]) {
          b3(a, d, b);
          d.element.blur();
        }
        if (c.ctrlKey || c.metaKey || b.zaa === "new") {
          e3(a, b);
          a.player.sendVideoStatsEngageEvent(17, undefined);
          a.player.pauseVideo();
          c = g.ed($2(a, b.targetUrl));
          c = g.ad(c);
          g.qz(c, undefined, b.sessionData);
        } else {
          let e = g.RJ(a.player.O()) || a.player.getVideoData().oe;
          let f = () => {
            var h = $2(a, b.targetUrl);
            var k = b.sessionData;
            var l = b.watchEndpoint;
            var m = g.Vp(h);
            if (e && m && (m.v || m.list)) {
              a.player.Lq(m.v, k, m.list, false, undefined, l || undefined);
            } else {
              g.pz(h, k);
            }
          };
          e3(a, b, () => {
            a.player.sendVideoStatsEngageEvent(17, f);
          });
        }
      }
    }
  }
  function c3(a, b, c) {
    if (a.B) {
      if (c) {
        a.D.show();
      } else {
        a.D.hide();
      }
    }
    for (let d of Object.keys(a.A)) {
      if (d !== b) {
        g.uo(a.A[d].element, "ytp-ce-element-shadow-show", c);
      }
    }
  }
  function e3(a, b, c) {
    d3(a, b.clickUrls, c);
    if ((a = g.Uu()) && b.z7) {
      g.nv(a, b.visualElement);
    }
  }
  function Gsb(a, b) {
    var c = a.player.getVideoData().clientPlaybackNonce;
    a = a.player.getCurrentTime().toFixed(2);
    c = {
      CPN: c,
      AD_CPN: c,
      MT: a
    };
    a = [];
    for (let d = 0; d < b.length; d++) {
      a.push(Hsb(b[d], c));
    }
    return a;
  }
  function Hsb(a, b) {
    return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, c => {
      var d = unescape(c);
      d = d.substring(1, d.length - 1);
      if (b[d]) {
        return escape(b[d]);
      } else {
        return c;
      }
    });
  }
  function Isb(a) {
    if (typeof a === "string") {
      return a;
    } else {
      return "";
    }
  }
  function f3(a, b, c) {
    for (let d in b) {
      if (b[d] === a) {
        return a;
      }
    }
    return c;
  }
  function g3(a) {
    if (!a) {
      return null;
    }
    var b = g.ed(Isb(a.value));
    b = g.ad(b);
    if (!b) {
      return null;
    }
    var c = f3(a.target, Jsb, "current");
    if (c == null) {
      a = null;
    } else {
      var d = a.show_link_icon;
      a = new Ksb(b, c, d === "true" || d === "false" ? d === "true" : true, a.pause_on_navigation ?? true);
    }
    return a;
  }
  function Osb(a) {
    if (!a) {
      return null;
    }
    var b = f3(a.type, Lsb);
    var c = f3(a.trigger, Msb);
    a = a.url;
    a = Array.isArray(a) && a.length ? a[0] : a;
    a = g3(a ? a : null);
    if (b) {
      return new Nsb(b, c, a);
    } else {
      return null;
    }
  }
  function Psb(a, b) {
    return g.pb(a.action, b);
  }
  function h3(a, b) {
    a = "background-image: url(" + a + ");";
    var c = [];
    if (b) {
      c.push(b);
    }
    return {
      G: "div",
      S: "iv-card-image",
      W: {
        style: a
      },
      Y: c
    };
  }
  function j3(a) {
    if (a.customMessage) {
      return i3("div", "iv-card-message", a.customMessage);
    } else {
      return "";
    }
  }
  function k3(a) {
    if (!a.metaInfo || a.metaInfo.length === 0) {
      return "";
    }
    var b = [];
    for (let c of a.metaInfo) {
      b.push(i3("li", "", c));
    }
    return {
      G: "ul",
      S: "iv-card-meta-info",
      Y: b
    };
  }
  function l3(a, b, c, d) {
    if (d) {
      for (let e of b) {
        a.j(e, d, c.id, c.sessionData, c.Wk.click, 5);
      }
    }
  }
  function i3(a, b, c) {
    if (b) {
      if (typeof b === "string") {
        b = {
          class: b
        };
      } else if (Array.isArray(b)) {
        b = {
          class: b.join(" ")
        };
      }
    } else {
      b = {};
    }
    b.dir = g.yo(c);
    return {
      G: a,
      W: b,
      ma: c
    };
  }
  function Qsb(a) {
    if (!a.customMessage) {
      return "";
    }
    var b = ["iv-card-action", "iv-card-primary-link"];
    var c = {};
    if (a.vF) {
      b.push("iv-card-action-icon");
      c.style = "background-image: url(" + a.vF + ");";
    }
    c.dir = g.yo(a.customMessage);
    var d = [{
      G: "span",
      ma: a.customMessage
    }];
    if (a.showLinkIcon) {
      d.push("\xA0");
      d.push({
        G: "span",
        S: "iv-card-link-icon"
      });
    }
    return {
      G: "div",
      Da: b,
      W: c,
      Y: d
    };
  }
  function Rsb(a) {
    var b;
    if ((b = a) && !(b = a.length > 1 ? a.charAt(0) === "/" && a.charAt(1) !== "/" : a === "/")) {
      b = a.replace(/^(https?:)?\/\//, "").split("/", 1);
      b = !b || b.length < 1 || !b[0] ? [] : b[0].toLowerCase().split(".").reverse();
      b = b[0] === "com" && b[1] === "youtube" || b[0] === "be" && b[1] === "youtu";
    }
    if (b) {
      return a.indexOf("/redirect?") === -1;
    } else {
      return false;
    }
  }
  function Ssb(a, b) {
    if (b) {
      return b;
    } else if (Rsb(a)) {
      return "current";
    } else {
      return "new";
    }
  }
  function m3(a, b, c, d, e, f, h) {
    a.context.j.listen(b, "click", k => {
      a.Ka(c, d, e, f || [], h || 0, k);
    });
    a.context.j.listen(b, "touchstart", () => {
      a.fb = false;
    });
    a.context.j.listen(b, "touchmove", () => {
      a.fb = true;
    });
  }
  function Tsb(a) {
    if (g.Q(a, g.xv)?.url) {
      return g.Q(a, g.xv).url;
    }
    if ((a = g.Q(a, g.IK)) && a.videoId) {
      let b = "/watch?v=" + a.videoId;
      if (a.playlistId) {
        b += "&list=" + a.playlistId;
      }
      if (a.index) {
        b += "&index=" + a.index;
      }
      if (a.startTimeSeconds) {
        b += "&t=" + a.startTimeSeconds;
      }
      return b;
    }
    return null;
  }
  function n3(a, b, c) {
    return {
      EZ: (a.impressionLoggingUrlsV2s || []).map(d => d.baseUrl || ""),
      click: (c.loggingUrls || []).map(d => d.baseUrl || ""),
      close: (b.dismissLoggingUrlsV2s || []).map(d => d.baseUrl || ""),
      b2: (b.impressionLoggingUrlsV2s || []).map(d => d.baseUrl || ""),
      ZO: (b.clickLoggingUrlsV2s || []).map(d => d.baseUrl || "")
    };
  }
  function r3(a, b) {
    if (b.onClickCommand && g.Q(b.onClickCommand, g.Lfb)?.targetId === "engagement-panel-error-corrections") {
      a.ba = b;
      var c = true;
    } else {
      c = false;
    }
    if (!c || Usb(a, b)) {
      if (c = Vsb(a, b)) {
        var d = {
          kg: b,
          GQ: c.element,
          u_: false
        };
        if (b.onClickCommand) {
          if (!a.ub) {
            Wsb(a);
          }
          o3(a, b.id);
          c = a.findLastIndex(d);
          g.Eb(a.cards, c, 0, d);
        } else {
          if (!a.isInitialized) {
            Xsb(a);
          }
          o3(a, b.id);
          let e = a.findLastIndex(d);
          g.Eb(a.cards, e, 0, d);
          c.Aa(a.A, e);
          a.sa();
        }
        if (b.autoOpen) {
          a.addCueRange(b.startMs, 2251799813685248, b.id, () => {
            if (!a.B) {
              a.j = d;
              p3(a);
              Ysb(a, d);
              q3(a, "YOUTUBE_DRAWER_AUTO_OPEN", false);
            }
          });
        } else {
          c = a.context.J.getCurrentTime() * 1000;
          if (c < 5000 && c > b.startMs) {
            Zsb(a, d);
          }
          a.addCueRange(b.startMs, b.startMs + 1, b.id, () => {
            Zsb(a, d);
          });
          p3(a);
        }
      }
    }
  }
  function s3(a) {
    if (a.B) {
      a.Xa.hide();
      a.Fa.j();
      g.so(a.context.J.getRootNode(), g.yG.IV_DRAWER_OPEN);
      a.B = false;
      J2(a.J);
      if (a.D) {
        a.D.stop();
      }
      a.D = new g.jo(() => {
        if (a.za) {
          a.za.focus();
          a.za = null;
        }
      }, 330);
      a.D.start();
    }
  }
  function $sb(a, b) {
    b = b.data;
    if (b.autoOpenMs) {
      a.addCueRange(b.autoOpenMs, 2251799813685248, "", () => {
        q3(a, "YOUTUBE_DRAWER_AUTO_OPEN");
      });
    }
    if (b.autoCloseMs) {
      a.addCueRange(b.autoCloseMs, 2251799813685248, "", () => {
        s3(a);
      });
    }
    var c = b.headerText;
    g.ze(a.qb, c);
    if (a.U) {
      a.U.setAttribute("data-tooltip-title", c);
    }
    if (b.eventId) {
      a.eventId = b.eventId;
    }
    a.ta = g.Qu(b.trackingParams);
    a.L = g.Qu(b.closeTrackingParams);
    a.Pg = g.Qu(b.iconTrackingParams);
  }
  function t3(a, b, c) {
    var d = -1;
    var e = -1;
    for (let f = 0; f < a.length; f++) {
      if (a[f].height === b || a[f].width === c) {
        return a[f];
      }
      if (((a[f].height || 0) < b || (a[f].width || 0) < c) && (d < 0 || (a[d].height || 0) < (a[f].height || 0) || (a[d].width || 0) < (a[f].width || 0))) {
        d = f;
      } else if (((a[f].height || 0) >= b || (a[f].width || 0) >= c) && (e < 0 || (a[e].height || 0) > (a[f].height || 0) || (a[e].width || 0) > (a[f].width || 0))) {
        e = f;
      }
    }
    return a[e >= 0 ? e : d];
  }
  function u3(a, b, c, d) {
    return {
      feature: c.feature ? c.feature : "cards",
      src_vid: a.context.videoData.videoId,
      annotation_id: b,
      ei: a.context.videoData.eventId || "",
      itct: d.trackingParams || ""
    };
  }
  function atb(a, b) {
    var c = b.cardId ? b.cardId : `cr:${a.K}`;
    var d = a.J.O().experiments.Ua("enable_error_corrections_infocard_web_client");
    if (!b.content && b.teaser.simpleCardTeaserRenderer && d) {
      d = b.teaser.simpleCardTeaserRenderer;
      var e = b.icon ? b.icon.infoCardIconRenderer : null;
      if (d.channelAvatar && d.channelAvatar.thumbnails && d.channelAvatar.thumbnails.length > 0) {
        var f = t3(d.channelAvatar.thumbnails, 22, 22).url;
      }
      b = {
        id: c,
        timestamp: a.K,
        type: "simple",
        teaserText: g.wv(d.message),
        teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
        startMs: Number(b.cueRanges[0].startCardActiveMs),
        autoOpen: !!b.autoOpen,
        sessionData: {},
        sponsored: false,
        Wk: {},
        jr: null,
        Zm: d.trackingParams ? g.Qu(d.trackingParams) : null,
        Pg: e && e.trackingParams ? g.Qu(e.trackingParams) : null,
        imageUrl: "",
        displayDomain: null,
        showLinkIcon: false,
        vF: null,
        title: "",
        customMessage: "",
        url: null,
        onClickCommand: d.onTapCommand || null,
        wJ: f
      };
      r3(a, b);
    } else if (b.content?.simpleCardContentRenderer) {
      if (!b.cueRanges.length) {
        return;
      }
      f = b.content?.simpleCardContentRenderer;
      d = b.teaser.simpleCardTeaserRenderer;
      e = b.icon ? b.icon.infoCardIconRenderer : null;
      b = {
        id: c,
        timestamp: a.K,
        type: "simple",
        teaserText: g.wv(d.message),
        teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
        startMs: Number(b.cueRanges[0].startCardActiveMs),
        autoOpen: !!b.autoOpen,
        sessionData: u3(a, c, b, f),
        sponsored: false,
        Wk: n3(f, d, f.command),
        jr: f.trackingParams ? g.Qu(f.trackingParams) : null,
        Zm: d.trackingParams ? g.Qu(d.trackingParams) : null,
        Pg: e && e.trackingParams ? g.Qu(e.trackingParams) : null,
        imageUrl: t3(f.image.thumbnails, 290, 290).url,
        displayDomain: f.displayDomain ? g.wv(f.displayDomain) : null,
        showLinkIcon: !!f.showLinkIcon,
        vF: null,
        title: f.title ? g.wv(f.title) : "",
        customMessage: f.callToAction ? g.wv(f.callToAction) : "",
        url: g.Q(f.command, g.xv).url ? g3({
          pause_on_navigation: !a.context.videoData.isLivePlayback,
          target: "new",
          value: g.Q(f.command, g.xv).url
        }) : null,
        onClickCommand: null
      };
      r3(a, b);
    } else if (b.content?.collaboratorInfoCardContentRenderer) {
      if (!b.cueRanges.length) {
        return;
      }
      f = b.content?.collaboratorInfoCardContentRenderer;
      d = b.teaser.simpleCardTeaserRenderer;
      e = b.icon ? b.icon.infoCardIconRenderer : null;
      b = {
        id: c,
        timestamp: a.K,
        type: "collaborator",
        teaserText: g.wv(d.message),
        teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
        startMs: Number(b.cueRanges[0].startCardActiveMs),
        autoOpen: !!b.autoOpen,
        sessionData: u3(a, c, b, f),
        sponsored: false,
        Wk: n3(f, d, f.endpoint),
        jr: f.trackingParams ? g.Qu(f.trackingParams) : null,
        Zm: d.trackingParams ? g.Qu(d.trackingParams) : null,
        Pg: e && e.trackingParams ? g.Qu(e.trackingParams) : null,
        channelId: g.Q(f.endpoint, g.C_).browseId,
        customMessage: f.customText ? g.wv(f.customText) : null,
        profileImageUrl: t3(f.channelAvatar.thumbnails, 290, 290).url,
        title: f.channelName ? g.wv(f.channelName) : "",
        metaInfo: [f.subscriberCountText ? g.wv(f.subscriberCountText) : ""],
        url: g3({
          pause_on_navigation: !a.context.videoData.isLivePlayback,
          target: "new",
          value: g.Q(f.endpoint, g.C_).canonicalBaseUrl ? g.Q(f.endpoint, g.C_).canonicalBaseUrl : `/channel/${g.Q(f.endpoint, g.C_).browseId}`
        }),
        onClickCommand: null
      };
      r3(a, b);
    } else if (b.content?.playlistInfoCardContentRenderer) {
      if (!b.cueRanges.length) {
        return;
      }
      f = b.content?.playlistInfoCardContentRenderer;
      d = b.teaser.simpleCardTeaserRenderer;
      e = b.icon ? b.icon.infoCardIconRenderer : null;
      b = {
        id: c,
        timestamp: a.K,
        type: "playlist",
        teaserText: g.wv(d.message),
        teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
        startMs: Number(b.cueRanges[0].startCardActiveMs),
        autoOpen: !!b.autoOpen,
        sessionData: u3(a, c, b, f),
        sponsored: false,
        Wk: n3(f, d, f.action),
        jr: f.trackingParams ? g.Qu(f.trackingParams) : null,
        Zm: d.trackingParams ? g.Qu(d.trackingParams) : null,
        Pg: e && e.trackingParams ? g.Qu(e.trackingParams) : null,
        xJ: t3(f.playlistThumbnail.thumbnails, 258, 290).url,
        customMessage: f.customMessage ? g.wv(f.customMessage) : null,
        playlistVideoCount: g.wv(f.playlistVideoCount),
        title: f.playlistTitle ? g.wv(f.playlistTitle) : "",
        metaInfo: [f.channelName ? g.wv(f.channelName) : "", f.videoCountText ? g.wv(f.videoCountText) : ""],
        url: g3({
          pause_on_navigation: !a.context.videoData.isLivePlayback,
          target: "new",
          value: Tsb(f.action)
        }),
        onClickCommand: null
      };
      r3(a, b);
    } else if (b.content?.videoInfoCardContentRenderer) {
      if (!b.cueRanges.length) {
        return;
      }
      f = b.content?.videoInfoCardContentRenderer;
      d = b.teaser.simpleCardTeaserRenderer;
      e = b.icon ? b.icon.infoCardIconRenderer : null;
      b = {
        id: c,
        timestamp: a.K,
        type: "video",
        teaserText: g.wv(d.message),
        teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
        startMs: Number(b.cueRanges[0].startCardActiveMs),
        autoOpen: !!b.autoOpen,
        sessionData: u3(a, c, b, f),
        sponsored: false,
        Wk: n3(f, d, f.action),
        jr: f.trackingParams ? g.Qu(f.trackingParams) : null,
        Zm: d.trackingParams ? g.Qu(d.trackingParams) : null,
        Pg: e && e.trackingParams ? g.Qu(e.trackingParams) : null,
        xJ: t3(f.videoThumbnail.thumbnails, 258, 290).url,
        videoDuration: f.lengthString ? g.wv(f.lengthString) : null,
        customMessage: f.customMessage ? g.wv(f.customMessage) : null,
        title: f.videoTitle ? g.wv(f.videoTitle) : "",
        metaInfo: [f.channelName ? g.wv(f.channelName) : "", f.viewCountText ? g.wv(f.viewCountText) : ""],
        isLiveNow: !!f.badge,
        url: g3({
          pause_on_navigation: !a.context.videoData.isLivePlayback,
          target: "new",
          value: Tsb(f.action)
        }),
        onClickCommand: null
      };
      r3(a, b);
    }
    a.K++;
  }
  function btb(a, b) {
    return g.pb(a.cards, c => c.kg.id === b);
  }
  function p3(a) {
    g.uo(a.J.getRootNode(), "ytp-cards-shopping-active", ctb(a));
  }
  function o3(a, b) {
    if (b = btb(a, b)) {
      if (b === a.j) {
        a.j = null;
      }
      a.J.removeCueRange(b.kg.id);
      g.xe(b.GQ);
      g.wb(a.cards, b);
      a.sa();
      p3(a);
    }
  }
  function q3(a, b, c) {
    if (!a.B) {
      a.Xa.show();
      a.Ha = new g.jo(() => {
        g.qo(a.context.J.getRootNode(), g.yG.IV_DRAWER_OPEN);
      }, 0);
      a.Ha.start();
      a.Fa.V(a.A, "mousewheel", e => {
        a.la.start();
        e.preventDefault();
        e = e || window.event;
        var f = 0;
        if (e.type === "MozMousePixelScroll") {
          f = e.axis === e.HORIZONTAL_AXIS === false ? e.detail : 0;
        } else if (window.opera) {
          f = e.detail;
        } else {
          f = e.wheelDelta % 120 === 0 ? "WebkitTransform" in document.documentElement.style ? window.chrome && navigator.platform.indexOf("Mac") === 0 ? e.wheelDeltaY / -30 : e.wheelDeltaY / -1.2 : e.wheelDelta / -1.6 : e.wheelDeltaY / -3;
        }
        if (e = f) {
          a.A.scrollTop += e;
        }
      });
      a.B = true;
      var d = g.Uu();
      if (d && a.ta && a.L) {
        g.lv(d, [a.ta, a.L]);
      }
      b = {
        TRIGGER_TYPE: b
      };
      for (let e of a.cards) {
        if (!e.u_) {
          e.u_ = true;
          dtb(a.context.logger, e.kg.Wk.EZ, b);
        }
        if (d) {
          g.lv(d, [e.kg.jr]);
        }
      }
      J2(a.J);
      if (c) {
        a.D = new g.jo(() => {
          a.za = a.U;
          a.jb.focus();
        }, 330);
        a.D.start();
      }
    }
  }
  function Xsb(a) {
    g.ro(a.xb(), [g.yG.STOP_EVENT_PROPAGATION, "iv-drawer-manager"]);
    g.fM(a.J, a.C, 5);
    a.iQ();
    a.U = g.he("ytp-cards-button", a.J.getRootNode());
    a.jb = g.he("iv-drawer-close-button", a.C);
    a.isInitialized = true;
  }
  function Wsb(a) {
    a.ga.push(g.jt("iv-teaser-shown", a.Rb, a));
    a.ga.push(g.jt("iv-teaser-hidden", a.zc, a));
    a.ga.push(g.jt("iv-teaser-clicked", a.Kb, a));
    a.ub = true;
  }
  function Usb(a, b) {
    a.ba = b;
    var c = a.J.getVideoData();
    if (!c) {
      return false;
    }
    c = g.rK(c.getWatchNextResponse());
    if (c?.markersMap) {
      for (let e = 0; c?.markersMap.length > e; e++) {
        var d = c?.markersMap[e];
        if (d.key === "ERROR_CORRECTION_MARKERS" && (d = d.value?.markers) && d.length > 0) {
          b.startMs = g.Q(d[0], g.w3a)?.timeRangeStartMillis || 0;
          a.ba = null;
          return true;
        }
      }
    }
    return false;
  }
  function Vsb(a, b) {
    switch (b.type) {
      case "simple":
        a = a.ha;
        var c = b.displayDomain ? {
          G: "div",
          S: "iv-card-image-text",
          ma: b.displayDomain
        } : undefined;
        var d = Qsb(b);
        c = {
          G: "div",
          Da: ["iv-card"],
          Y: [{
            G: "a",
            S: "iv-click-target",
            W: {
              href: b.url ? b.url.j() || "" : ""
            },
            Y: [h3(b.imageUrl, c), {
              G: "div",
              S: "iv-card-content",
              Y: [i3("h2", undefined, b.title), d]
            }]
          }]
        };
        c = new g.Z(c);
        l3(a, g.fe("iv-click-target", c.element), b, b.url);
        b = c;
        break;
      case "collaborator":
        a = a.ha;
        c = {
          G: "div",
          Da: ["iv-card", "iv-card-channel"],
          Y: [{
            G: "a",
            Da: ["iv-click-target"],
            W: {
              href: b.url.j() || "",
              "data-ytid": b.channelId
            },
            Y: [h3(b.profileImageUrl), {
              G: "div",
              S: "iv-card-content",
              Y: [j3(b), {
                G: "h2",
                S: "iv-card-primary-link",
                ma: b.title
              }, k3(b)]
            }]
          }]
        };
        c = new g.Z(c);
        l3(a, g.fe("iv-click-target", c.element), b, b.url);
        b = c;
        break;
      case "playlist":
        a = a.ha;
        c = {
          G: "div",
          Da: ["iv-card", "iv-card-playlist"],
          Y: [{
            G: "a",
            S: "iv-click-target",
            W: {
              href: b.url.j() || ""
            },
            Y: [h3(b.xJ, {
              G: "div",
              S: "iv-card-image-overlay",
              Y: [{
                G: "span",
                S: "iv-card-playlist-video-count",
                ma: b.playlistVideoCount
              }]
            }), {
              G: "div",
              S: "iv-card-content",
              Y: [j3(b), i3("h2", "iv-card-primary-link", b.title), k3(b)]
            }]
          }]
        };
        c = new g.Z(c);
        l3(a, g.fe("iv-click-target", c.element), b, b.url);
        b = c;
        break;
      case "productListing":
        a = a.ha;
        var e = b.offers.length != 0;
        c = ["iv-card"];
        d = "";
        var f = Qsb(b);
        if (e) {
          c.push("iv-card-product-listing");
          d = "iv-card-primary-link";
          f = b.offers[0];
          e = [];
          if (f.price) {
            e.push({
              G: "div",
              S: "iv-card-offer-price",
              ma: f.price
            });
          }
          if (f.merchant) {
            e.push({
              G: "div",
              S: "iv-card-offer-merchant",
              ma: f.merchant
            });
          }
          f = {
            G: "div",
            Y: e
          };
        }
        e = b.url ? b.url.j() || "" : "";
        c = {
          G: "div",
          Da: c,
          W: {
            tabindex: "0"
          },
          Y: [{
            G: "a",
            Da: ["iv-card-image", "iv-click-target"],
            W: {
              style: "background-image: url(" + b.imageUrl + ");",
              href: e,
              "aria-hidden": "true",
              tabindex: "-1"
            }
          }, {
            G: "div",
            S: "iv-card-content",
            Y: [b.sponsored ? {
              G: "div",
              S: "iv-card-sponsored",
              Y: ["Bersponsor", {
                G: "div",
                S: "iv-ad-info-container",
                Y: [{
                  G: "div",
                  S: "iv-ad-info",
                  ma: "{{adInfo}}"
                }, {
                  G: "div",
                  S: "iv-ad-info-icon-container",
                  Y: [{
                    G: "div",
                    S: "iv-ad-info-icon"
                  }, {
                    G: "div",
                    S: "iv-ad-info-callout"
                  }]
                }]
              }]
            } : "", {
              G: "a",
              S: "iv-click-target",
              W: {
                href: e
              },
              Y: [i3("h2", d, b.title), f]
            }]
          }]
        };
        c = new g.Z(c);
        d = g.se("span");
        g.ze(d, "Anda melihat produk ini karena menurut kami relevan dengan video tersebut. Google dapat menerima kompensasi dari penjual.");
        c.setContent(d, "adInfo");
        l3(a, g.fe("iv-click-target", c.element), b, b.url);
        b = c;
        break;
      case "video":
        a = a.ha;
        c = b.isLiveNow ? {
          G: "span",
          Da: ["yt-badge", "yt-badge-live"],
          ma: "LIVE SEKARANG"
        } : null;
        c = {
          G: "div",
          Da: ["iv-card", "iv-card-video"],
          Y: [{
            G: "a",
            S: "iv-click-target",
            W: {
              href: b.url?.j() || ""
            },
            Y: [h3(b.xJ, b.videoDuration ? {
              G: "span",
              S: "iv-card-video-duration",
              ma: b.videoDuration
            } : undefined), {
              G: "div",
              S: "iv-card-content",
              Y: [j3(b), i3("h2", "iv-card-primary-link", b.title), k3(b), c]
            }]
          }]
        };
        c = new g.Z(c);
        l3(a, g.fe("iv-click-target", c.element), b, b.url);
        b = c;
        break;
      default:
        return null;
    }
    return b;
  }
  function Zsb(a, b) {
    if (!g.po(a.J.getRootNode(), "ytp-cards-teaser-shown")) {
      if (a.j !== b) {
        var c = g.Uu();
        var d = a.j ? a.j.kg.Pg : a.Pg;
        if (c && d) {
          g.mv(c, [d]);
        }
        a.j = b;
        p3(a);
      }
      if (!(c = a.isInitialized && a.xb().style.display == "none")) {
        c = a.context.J.getPlayerState();
        d = c === 0 && a.context.J.getCurrentTime() === 0;
        c = c !== 1 && c !== 3 && !d;
      }
      if (!c) {
        if (b.kg.teaserDurationMs) {
          a.J.QD(true, {
            teaserText: b.kg.teaserText,
            durationMs: b.kg.teaserDurationMs,
            onClickCommand: b.kg.onClickCommand,
            wJ: b.kg.wJ ?? null
          });
        }
      }
      if (!a.bb.isActive()) {
        if (!a.B || !a.la.isActive() && a.ya) {
          Ysb(a, b);
        }
        a.bb.start(910 + b.kg.teaserDurationMs);
      }
    }
  }
  function ctb(a) {
    if (a.j) {
      return a.j.kg.type === "productListing";
    } else if (a.J.N("enable_wn_infocards")) {
      return !!a.cards?.length && g.nb(a.cards, b => b.kg.type === "productListing");
    } else {
      return g.nb(a.cards, b => b.kg.type === "productListing");
    }
  }
  function Ysb(a, b) {
    if (a.X.Jb) {
      b = new Q2([0, a.A.scrollTop], [0, b.GQ.offsetTop], 600, wsb);
      a.context.B.listen(b, "animate", c => {
        a.A.scrollTop = c.y;
      });
      a.context.B.listen(b, "finish", c => {
        a.A.scrollTop = c.y;
      });
      b.play();
    } else {
      a.X.Cc(true);
      a.A.scrollTop = b.GQ.offsetTop;
      a.X.Cc(false);
    }
  }
  function v3(a) {
    if (a.j && a.j.kg) {
      return a.j.kg;
    } else if (a.cards[0] && a.cards[0].kg) {
      return a.cards[0].kg;
    } else {
      return null;
    }
  }
  function etb(a) {
    var b = a.annotation.data;
    if ("start_ms" in b && "end_ms" in b) {
      a.addCueRange(Number(b.start_ms), Number(b.end_ms), a.annotation.id, () => {
        a.show();
      }, () => {
        a.hide();
      });
    }
  }
  function ftb(a, b) {
    var c = qsb(b).width;
    g.bf(b, c);
    c = new T2(b, [c, b.offsetTop], [c - c, b.offsetTop], 200, vsb);
    g.L(a, c);
    a.context.B.listen(c, "begin", () => {
      g.lf(b, true);
    });
    c.play();
  }
  function w3(a, b, c) {
    c.stopPropagation();
    gtb(a);
    htb(a, b);
    a.j.focus();
  }
  function itb(a) {
    var b = a.annotation.data;
    if (a.annotation.style === "cta") {
      var c = 6;
    } else if (a.annotation.style === "video" || a.annotation.style === "playlist") {
      c = 7;
    }
    a.K = b.collapsedelay_ms || a.K;
    var d = ["iv-promo", "iv-promo-inactive"];
    a.xb().setAttribute("aria-hidden", "true");
    a.xb().setAttribute("aria-label", "Promosi");
    a.xb().tabIndex = 0;
    var e = a.annotation.gf();
    var f = b.image_url;
    if (f) {
      var h = a.createElement({
        G: "div",
        Da: ["iv-promo-img", "iv-click-target"]
      });
      f = a.createElement({
        G: "img",
        W: {
          src: f,
          "aria-hidden": "true"
        }
      });
      h.appendChild(f);
      if (b.video_duration && !b.is_live) {
        f = a.createElement({
          G: "span",
          S: "iv-promo-video-duration",
          ma: b.video_duration
        });
        h.appendChild(f);
      } else if (b.playlist_length) {
        f = a.createElement({
          G: "span",
          S: "iv-promo-playlist-length",
          ma: b.playlist_length.toString()
        });
        h.appendChild(f);
      }
      if (e) {
        m3(a, h, e, a.annotation.id, b.session_data, undefined, c);
      }
    }
    if (e) {
      f = a.createElement({
        G: "a",
        S: "iv-promo-txt"
      });
      g.hd(f, e.j());
      a.j = f;
    } else {
      a.j = a.createElement({
        G: "div",
        S: "iv-promo-txt"
      });
    }
    switch (a.annotation.style) {
      case "cta":
      case "website":
        var k = a.createElement({
          G: "p",
          Y: [{
            G: "strong",
            ma: b.text_line_1
          }]
        });
        var l = a.createElement({
          G: "p",
          Y: [{
            G: "span",
            S: "iv-promo-link",
            ma: b.text_line_2
          }]
        });
        if (f = b.text_line_3) {
          d.push("iv-promo-website-card-cta-redesign");
          var m = a.createElement({
            G: "button",
            Da: ["iv-promo-round-expand-icon", "ytp-button"]
          });
          f = a.createElement({
            G: "button",
            Da: ["iv-button", "iv-promo-button"],
            Y: [{
              G: "span",
              S: "iv-button-content",
              ma: f
            }]
          });
          var p = a.createElement({
            G: "div",
            S: "iv-promo-button-container"
          });
          p.appendChild(f);
          if (e) {
            m3(a, a.xb(), e, a.annotation.id, b.session_data, undefined, c);
          }
        }
        g.qo(a.j, "iv-click-target");
        if (e) {
          m3(a, a.j, e, a.annotation.id, b.session_data, undefined, c);
        }
        break;
      case "playlist":
      case "video":
        k = a.createElement({
          G: "p",
          Y: [{
            G: "span",
            ma: b.text_line_1
          }]
        });
        l = a.createElement({
          G: "p",
          Y: [{
            G: "strong",
            ma: b.text_line_2
          }]
        });
        if (b.is_live) {
          k = l;
          l = a.createElement({
            G: "span",
            Da: ["yt-badge", "iv-promo-badge-live"],
            ma: "LIVE SEKARANG"
          });
        }
        g.qo(a.j, "iv-click-target");
        if (e) {
          m3(a, a.j, e, a.annotation.id, b.session_data, undefined, c);
        }
        d.push("iv-promo-video");
    }
    if (k) {
      a.j.appendChild(k);
    }
    if (l) {
      a.j.appendChild(l);
    }
    a.L.appendChild(a.j);
    if (p) {
      a.L.appendChild(p);
    }
    c = a.createElement({
      G: "div",
      S: "iv-promo-actions"
    });
    a.A = a.createElement({
      G: "button",
      Da: ["iv-promo-expand", "ytp-button"]
    });
    a.A.title = "Luaskan";
    a.context.j.listen(a.A, "click", q => {
      w3(a, 5000, q);
    });
    c.appendChild(a.A);
    g.lf(a.A, false);
    a.context.j.listen(a.xb(), "mouseover", a.la, a);
    a.context.j.listen(a.xb(), "mouseout", a.ha, a);
    a.context.j.listen(a.xb(), "touchend", q => {
      w3(a, 5000, q);
    });
    a.B = a.createElement({
      G: "button",
      Da: ["iv-promo-close", "ytp-button"]
    });
    a.B.title = "Tutup";
    a.context.j.listen(a.B, "click", a.annotation.style === "cta" && b.text_line_3 ? a.ba : a.ga, a);
    c.appendChild(a.B);
    g.ro(a.xb(), d);
    if (h) {
      g.ue(a.xb(), h);
      if (m) {
        h.appendChild(m);
      }
    }
    g.ue(a.xb(), a.L);
    g.ue(a.xb(), c);
  }
  function x3(a) {
    if (a.C) {
      g.Ha.clearTimeout(a.C);
      a.C = null;
    }
  }
  function gtb(a) {
    a.D.stop();
    if (a.isCollapsed) {
      g.to(a.xb(), ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]);
      a.isCollapsed = false;
      if (a.j) {
        a.j.removeAttribute("aria-hidden");
      }
      g.lf(a.A, false);
      g.lf(a.B, true);
    }
  }
  function htb(a, b) {
    a.C ||= g.hm(function () {
      x3(this);
      jtb(this);
    }, b, a);
  }
  function jtb(a) {
    if (!a.isCollapsed && !a.U && !a.C) {
      g.qo(a.xb(), "iv-promo-collapsed");
      a.isCollapsed = true;
      a.D.start();
    }
  }
  function dtb(a, b, c) {
    if (b) {
      if (c) {
        y3(a, b.map(d => g.Hn(d, c)));
      } else {
        y3(a, b);
      }
    }
  }
  function y3(a, b, c, d) {
    var e = 1;
    var f = undefined;
    var h = -1;
    if (c) {
      let k = false;
      f = () => {
        e--;
        if (!e && !k) {
          clearTimeout(h);
          k = true;
          c();
        }
      };
      h = setTimeout(() => {
        k = true;
        c();
      }, 1000);
    }
    for (let k of b || []) {
      e++;
      g.Vs(k, f);
    }
    if (d) {
      e++;
      if (d !== 0) {
        a.J.sendVideoStatsEngageEvent(d, f);
      }
    }
  }
  function ktb(a) {
    return a === "annotation-editor" || a === "live-dashboard";
  }
  function ltb(a) {
    if (a.C) {
      a.player.removeEventListener("videodatachange", a.C);
      a.C = null;
    }
  }
  function mtb(a) {
    a = a.createElement({
      G: "div",
      Da: ["annotation", "annotation-type-custom"]
    });
    g.lf(a, false);
    return a;
  }
  function A3(a, b) {
    var c = false;
    var d = b.getElementsByTagName("annotations");
    if (d && !(d.length < 1) && (d = d[0].getAttribute("itct"))) {
      var e = g.Uu();
      if (e) {
        var f = g.Tu();
        if (f) {
          g.zc(g.av)(undefined, e, f, [g.Qu(d)]);
        }
      }
    }
    b = b.getElementsByTagName("annotation");
    for (d = 0; d < b.length; d++) {
      var h = ntb(a, b[d]);
      e = null;
      try {
        a: {
          if (!h) {
            e = null;
            break a;
          }
          var k = h.id;
          f = /.+/;
          let v = typeof k === "string" && f != null && k != null && k.match(f) ? k : "";
          let z = f3(h.type, otb);
          let F = f3(h.style, ptb);
          let M = Isb(h.data);
          let N = M.length !== 0 ? JSON.parse(M) : {};
          b: {
            var l = h.action;
            f = Osb;
            if (l == null) {
              var m = null;
              break b;
            }
            if (g.Ma(l)) {
              h = [];
              for (let R of l) {
                let V = f(R);
                if (V) {
                  h.push(V);
                }
              }
              m = h;
              break b;
            }
            let S = f(l);
            m = S ? [S] : [];
          }
          f = m;
          e = v && z ? new qtb(v, z, F, f, N) : null;
        }
      } catch (v) {}
      if (e) {
        if (e.type === "branding" || e.type === "promotion") {
          f = a;
          h = e;
          var p = mtb(f);
          var q = null;
          switch (h.type) {
            case "branding":
              if (f.player.O().xd) {
                break;
              }
              q = h.gf();
              if (q?.value) {
                var u = g.ln(q.value);
                if (!u.j && u.A.startsWith("/")) {
                  g.dn(u, "www.youtube.com");
                  g.cn(u, "https");
                  q.value = u.toString();
                }
              }
              if (f.player.N("web_player_overlay_positioned_layout")) {
                p.setAttribute("data-overlay-order", "11");
                f.player.Yi(p, 4, true);
              } else {
                f.A.element.appendChild(p);
              }
              q = new rtb(p, z3(f), h);
              break;
            case "promotion":
              g.fM(f.player, p, 4);
              q = new stb(p, z3(f), h);
          }
          if (q) {
            q.fa();
          }
          if (f = q) {
            g.L(a, f);
            a.K[e.id] = f;
          }
        } else if (e.type === "card" || e.type === "drawer") {
          if (!a.j) {
            a.j = ttb(a);
            g.L(a, a.j);
          }
          if (e.type === "card") {
            p = a.j;
            u = (c = e) && c.data && c.data.card_type;
            e = c.data;
            if (u) {
              f = e.tracking || {};
              f = {
                EZ: f.impression,
                click: f.click,
                close: f.close,
                b2: f.teaser_impression,
                ZO: f.teaser_click
              };
              h = e.tracking_params || {};
              q = null;
              switch (u) {
                case "collaborator":
                  c = {
                    id: c.id,
                    timestamp: e.timestamp || 0,
                    type: e.card_type,
                    teaserText: e.teaser_text,
                    teaserDurationMs: e.teaser_duration_ms,
                    startMs: e.start_ms,
                    autoOpen: e.auto_open || false,
                    sessionData: e.session_data || {},
                    sponsored: e.sponsored || false,
                    Wk: f,
                    jr: h.card ? g.Qu(h.card) : null,
                    Zm: h.teaser ? g.Qu(h.teaser) : null,
                    Pg: h.icon ? g.Qu(h.icon) : null,
                    channelId: e.channel_id,
                    customMessage: e.custom_message ? e.custom_message : null,
                    profileImageUrl: e.image_url,
                    title: e.title,
                    metaInfo: e.meta_info,
                    url: g3({
                      pause_on_navigation: e.pause_on_navigation,
                      target: e.target || "new",
                      value: e.url
                    }),
                    onClickCommand: null
                  };
                  r3(p, c);
                  break;
                case "playlist":
                  c = {
                    id: c.id,
                    timestamp: e.timestamp || 0,
                    type: e.card_type,
                    teaserText: e.teaser_text,
                    teaserDurationMs: e.teaser_duration_ms,
                    startMs: e.start_ms,
                    autoOpen: e.auto_open || false,
                    sessionData: e.session_data || {},
                    sponsored: e.sponsored || false,
                    Wk: f,
                    jr: h.card ? g.Qu(h.card) : null,
                    Zm: h.teaser ? g.Qu(h.teaser) : null,
                    Pg: h.icon ? g.Qu(h.icon) : null,
                    xJ: e.image_url,
                    playlistVideoCount: e.playlist_video_count,
                    customMessage: e.custom_message ? e.custom_message : null,
                    title: e.title,
                    metaInfo: e.meta_info,
                    url: g3({
                      pause_on_navigation: e.pause_on_navigation,
                      target: e.target || "new",
                      value: e.url
                    }),
                    onClickCommand: null
                  };
                  r3(p, c);
                  break;
                case "productListing":
                  if (e.signin_url) {
                    q = g3({
                      target: "current",
                      value: e.signin_url
                    });
                  }
                  u = [];
                  let v = e.offers || [];
                  for (let z = 0; z < v.length; z++) {
                    u.push(new utb(g.Dd(v[z].merchant), g.Dd(v[z].price)));
                  }
                  c = {
                    id: c.id,
                    timestamp: e.timestamp || 0,
                    type: e.card_type,
                    teaserText: e.teaser_text,
                    teaserDurationMs: e.teaser_duration_ms,
                    startMs: e.start_ms,
                    autoOpen: e.auto_open || false,
                    sessionData: e.session_data || {},
                    sponsored: e.sponsored || false,
                    Wk: f,
                    jr: h.card ? g.Qu(h.card) : null,
                    Zm: h.teaser ? g.Qu(h.teaser) : null,
                    Pg: h.icon ? g.Qu(h.icon) : null,
                    imageUrl: e.image_url,
                    displayDomain: e.display_domain ? e.display_domain : null,
                    showLinkIcon: !!e.show_link_icon,
                    vF: e.button_icon_url ? e.button_icon_url : null,
                    title: e.title,
                    customMessage: e.custom_message ? e.custom_message : null,
                    url: g3({
                      pause_on_navigation: e.pause_on_navigation,
                      target: e.target || "new",
                      value: e.url
                    }),
                    Xna: q,
                    Wna: e.signin_title ? e.signin_title : undefined,
                    Vna: e.signin_message ? e.signin_message : undefined,
                    offers: u,
                    onClickCommand: null
                  };
                  r3(p, c);
                  break;
                case "simple":
                  c = {
                    id: c.id,
                    timestamp: e.timestamp || 0,
                    type: e.card_type,
                    teaserText: e.teaser_text,
                    teaserDurationMs: e.teaser_duration_ms,
                    startMs: e.start_ms,
                    autoOpen: e.auto_open || false,
                    sessionData: e.session_data || {},
                    sponsored: e.sponsored || false,
                    Wk: f,
                    jr: h.card ? g.Qu(h.card) : null,
                    Zm: h.teaser ? g.Qu(h.teaser) : null,
                    Pg: h.icon ? g.Qu(h.icon) : null,
                    imageUrl: e.image_url,
                    displayDomain: e.display_domain ? e.display_domain : null,
                    showLinkIcon: !!e.show_link_icon,
                    vF: e.button_icon_url ? e.button_icon_url : null,
                    title: e.title,
                    customMessage: e.custom_message ? e.custom_message : null,
                    url: g3({
                      pause_on_navigation: e.pause_on_navigation,
                      target: e.target || "new",
                      value: e.url
                    }),
                    onClickCommand: null
                  };
                  r3(p, c);
                  break;
                case "video":
                  c = {
                    id: c.id,
                    timestamp: e.timestamp || 0,
                    type: e.card_type,
                    teaserText: e.teaser_text,
                    teaserDurationMs: e.teaser_duration_ms,
                    startMs: e.start_ms,
                    autoOpen: e.auto_open || false,
                    sessionData: e.session_data || {},
                    sponsored: e.sponsored || false,
                    Wk: f,
                    jr: h.card ? g.Qu(h.card) : null,
                    Zm: h.teaser ? g.Qu(h.teaser) : null,
                    Pg: h.icon ? g.Qu(h.icon) : null,
                    xJ: e.image_url,
                    videoDuration: e.video_duration || null,
                    customMessage: e.custom_message ? e.custom_message : null,
                    title: e.title,
                    metaInfo: e.meta_info,
                    isLiveNow: !!e.is_live_now,
                    url: g3({
                      pause_on_navigation: e.pause_on_navigation,
                      target: e.target || "new",
                      value: e.url
                    }),
                    onClickCommand: null
                  };
                  r3(p, c);
              }
            }
          } else {
            $sb(a.j, e);
          }
          c = true;
        }
      }
    }
    if (c) {
      J2(a.player);
      a.X();
    }
  }
  function vtb(a) {
    var b = a.player.O();
    a = a.player.getVideoData();
    return (b.annotationsLoadPolicy || a.annotationsLoadPolicy) === 1 && !a.kK || !!b.Fa.get(a.videoId) || !!g.rL(a) || !!g.sL(a);
  }
  function wtb(a, b) {
    b = !b.isCued() && !b.va(1024);
    a.A.Cc(b);
    a.B.Cc(b);
  }
  function Atb(a, b) {
    var c = b.videoId;
    var d = f => {
      var h = a.loadNumber;
      a.L = null;
      if (a.loaded && a.loadNumber === h && a.player.getVideoData().videoId === c && (f = g.cq(f) && f.responseXML ? f.responseXML : null)) {
        A3(a, f);
        g.qo(a.player.getRootNode(), "iv-module-loaded");
      }
    };
    if (g.Dr()) {
      d = xtb(a, d);
    }
    var e = {
      format: "XML",
      onFinish: d,
      onError: () => {
        a.L = null;
      },
      urlParams: {}
    };
    if (b.isPharma) {
      e.urlParams.pharma = "1";
    }
    e.method = "POST";
    e.withCredentials = true;
    if (d = a.player.O().Fa.get(c)) {
      ytb(e, d);
    }
    d = d && d.SK;
    if (!b.vK || d) {
      a.C = () => {
        if (!a.ba) {
          a.onVideoDataChange(e);
        }
        var f = a.player.getVideoData();
        if (g.qL(f) && !a.ga) {
          ztb(a, f);
        }
      };
      a.player.addEventListener("videodatachange", a.C);
    }
  }
  function B3(a, b) {
    var c = false;
    if (!a.j) {
      a.j = ttb(a);
      g.L(a, a.j);
    }
    for (var d of b.cards || []) {
      if (d.cardRenderer) {
        atb(a.j, d.cardRenderer);
        c = true;
      }
    }
    if (c) {
      if (!g.qL(a.player.getVideoData())) {
        c = a.j;
        d = b.headerText ? g.wv(b.headerText) : "";
        g.ze(c.qb, d);
        if (c.U) {
          c.U.setAttribute("data-tooltip-title", d);
        }
        if (c.context.videoData.eventId) {
          c.eventId = c.context.videoData.eventId;
        }
        c.ta = b.trackingParams ? g.Qu(b.trackingParams) : null;
        c.L = b.closeButton.infoCardIconRenderer.trackingParams ? g.Qu(b.closeButton.infoCardIconRenderer.trackingParams) : null;
        c.Pg = b.icon.infoCardIconRenderer.trackingParams ? g.Qu(b.icon.infoCardIconRenderer.trackingParams) : null;
        a.X();
      }
      J2(a.player);
    }
  }
  function ztb(a, b) {
    if (b = b.getWatchNextResponse()?.cards?.cardCollectionRenderer) {
      a.ga = true;
      B3(a, b);
      if (b.headerText && a.Bi) {
        b = g.wv(b.headerText);
        a.Bi.setAttribute("data-tooltip-title", b);
      }
    }
  }
  function xtb(a, b) {
    return (...c) => {
      if (!a.oa()) {
        a.fa.push(g.Jn.bl(() => {
          b(...c);
        }));
      }
    };
  }
  function ytb(a, b) {
    a.method = "POST";
    a.postParams = a.postParams || {};
    if (b.SK) {
      a.postParams.ic_coll = b.SK;
    }
    if (b.o2) {
      a.postParams.ic_track = b.o2;
    }
  }
  function ntb(a, b) {
    var c = {};
    for (var d of b.attributes) {
      c[d.name] = d.nodeValue;
    }
    for (d = 0; d < b.childNodes.length; d++) {
      let f = b.childNodes[d];
      if (!g.Na(f) || f.nodeType != 1) {
        continue;
      }
      var e = undefined;
      if (c[f.tagName]) {
        e = c[f.tagName];
      } else if (f.tagName === "data") {
        if (f.childNodes.length > 0) {
          e = f.childNodes[0].nodeValue;
          c[f.tagName] = typeof e === "string" ? e.trim() : e;
        }
        continue;
      } else {
        e = [];
        c[f.tagName] = e;
      }
      if (f && f.tagName === "TEXT") {
        if (f.childNodes.length === 1 && f.childNodes[0].nodeType === 3) {
          e.push(f.childNodes[0].nodeValue);
        } else {
          e.push("");
        }
      } else if (f) {
        e.push(ntb(a, f));
      }
    }
    return c;
  }
  function z3(a) {
    if (!a.U) {
      let b = new Btb(a);
      g.L(a, b);
      let c = new g.pn(a);
      g.L(a, c);
      a.U = new Ctb(b, c, a.player.O(), a.player.getVideoData(), a.logger, a.player, a.Cg);
    }
    return a.U;
  }
  function Dtb(a) {
    var b = a.player.getVideoData();
    if (b.Iv) {
      var c = a.player.O().Fa.get(b.videoId);
      if (c) {
        var d = {
          format: "XML",
          urlParams: {},
          method: "POST",
          withCredentials: true,
          onFinish: (e, f, h) => {
            e = a.loadNumber;
            f = b.videoId;
            if (a.loaded && a.loadNumber === e && a.player.getVideoData().videoId === f && (h = g.cq(h) && h.responseXML ? h.responseXML : null)) {
              A3(a, h);
            }
          }
        };
        if (g.Dr()) {
          d.onFinish = xtb(a, d.onFinish);
        }
        d.postParams = {
          ic_only: "1"
        };
        ytb(d, c);
        a.ba = true;
        g.pq(b.Iv, d);
      }
    }
  }
  function ttb(a) {
    var b = new g.Z({
      G: "div"
    });
    g.lf(b.element, false);
    var c = new Etb(a.player, b.element, z3(a));
    g.L(c, b);
    b.Aa(a.A.element);
    c.fa();
    return c;
  }
  function Ftb(a, b, c, d, e) {
    if (!a.player.O().xd) {
      var f = [];
      if (b.navigationEndpoint && g.Q(b.navigationEndpoint, g.C_) && g.Q(b.navigationEndpoint, g.C_).browseId) {
        f.push(new Nsb("openUrl", "click", new Ksb(`/channel/${g.Q(b.navigationEndpoint, g.C_).browseId}`, "new", true, true)));
      }
      var h = b.watermark.thumbnails[0];
      d = {
        channel_name: b.channelName,
        end_ms: b.endTimeMs,
        image_height: h.height,
        image_type: 1,
        image_url: h.url,
        image_width: h.width,
        is_mobile: false,
        session_data: {
          annotation_id: c,
          ei: e,
          feature: "iv",
          itct: b.trackingParams,
          src_vid: d
        },
        start_ms: b.startTimeMs
      };
      if (b.subscribeButton && g.Q(b.subscribeButton, g.UK)) {
        d.channel_id = g.Q(b.subscribeButton, g.UK).channelId;
        b = g.Q(b.subscribeButton, g.UK);
        h = e = null;
        if (b.subscribed) {
          if (b.subscriberCountWithUnsubscribeText) {
            e = g.wv(b.subscriberCountWithUnsubscribeText);
          }
          if (b.subscriberCountText) {
            h = g.wv(b.subscriberCountText);
          }
        } else {
          if (b.subscriberCountText) {
            e = g.wv(b.subscriberCountText);
          }
          if (b.subscriberCountWithSubscribeText) {
            h = g.wv(b.subscriberCountWithSubscribeText);
          }
        }
        let k = g.Q(b.signInEndpoint?.commandMetadata, g.$T)?.url || "";
        b = {
          subscribeText: g.wv(b.unsubscribedButtonText),
          subscribeCount: e || "",
          unsubscribeText: g.wv(b.subscribedButtonText),
          unsubscribeCount: h || "",
          enabled: b.enabled || false,
          classic: false,
          subscribed: b.subscribed || false,
          feature: "iv",
          signInUrl: k
        };
        d.standalone_subscribe_button_data = b;
      }
      f = new qtb(c, "branding", "branding", f, d);
      d = mtb(a);
      if (a.player.N("web_player_overlay_positioned_layout")) {
        d.setAttribute("data-overlay-order", "11");
        a.player.Yi(d, 4, true);
      } else {
        a.A.element.appendChild(d);
      }
      f = new rtb(d, z3(a), f);
      f.fa();
      g.L(f, f);
      a.K[c] = f;
    }
  }
  g.C1.prototype.QD = g.da(41, function (a, b) {
    var c = g.HT(this.Ob());
    if (c) {
      c.QD(a, b);
    }
  });
  var R2 = {
    Aca: function () {}
  };
  var P2 = {};
  var M2 = null;
  var L2 = null;
  R2.dka = N2;
  R2.Bja = P2;
  R2.Hja = null;
  Object.defineProperty(R2, "animationDelay_", {
    get: () => L2,
    set: a => {
      L2 = a;
    }
  });
  R2.G$ = function (a) {
    var b = g.Qa(a);
    if (!(b in P2)) {
      P2[b] = a;
    }
    O2();
  };
  R2.Dna = function (a) {
    var b = L2 && L2.isActive();
    g.Oj(L2);
    L2 = null;
    M2 = a;
    if (b) {
      O2();
    }
  };
  R2.goa = function () {
    M2 = null;
    g.Oj(L2);
    L2 = null;
    g.cc(P2);
  };
  R2.TIMEOUT = 20;
  R2.lP = function (a) {
    a = g.Qa(a);
    delete P2[a];
    if (g.bc(P2) && L2) {
      L2.stop();
    }
  };
  g.Za(Q2, g.vo);
  g.G = Q2.prototype;
  g.G.getDuration = function () {
    return this.duration;
  };
  g.G.play = function (a) {
    if (a || this.Sa == 0) {
      this.progress = 0;
      this.coords = this.j;
    } else if (this.isPlaying()) {
      return false;
    }
    (0, R2.lP)(this);
    this.startTime = a = g.Ua();
    if (this.isPaused()) {
      this.startTime -= this.duration * this.progress;
    }
    this.endTime = this.startTime + this.duration;
    this.B = this.startTime;
    if (!this.progress) {
      this.AN();
    }
    this.Lp("play");
    if (this.isPaused()) {
      this.Lp("resume");
    }
    this.Sa = 1;
    (0, R2.G$)(this);
    ssb(this, a);
    return true;
  };
  g.G.stop = function (a) {
    (0, R2.lP)(this);
    this.Sa = 0;
    if (a) {
      this.progress = 1;
    }
    tsb(this, this.progress);
    this.onStop();
    this.Au();
  };
  g.G.pause = function () {
    if (this.isPlaying()) {
      (0, R2.lP)(this);
      this.Sa = -1;
      this.Lp("pause");
    }
  };
  g.G.ka = function () {
    if (this.Sa != 0) {
      this.stop(false);
    }
    this.Lp("destroy");
    Q2.Mh.ka.call(this);
  };
  g.G.destroy = function () {
    this.dispose();
  };
  g.G.BP = function () {
    this.Lp("animate");
  };
  g.G.Lp = function (a) {
    this.dispatchEvent(new usb(a, this));
  };
  g.Za(usb, g.Dl);
  g.Za(S2, Q2);
  S2.prototype.A = function () {};
  S2.prototype.BP = function () {
    this.A();
    S2.Mh.BP.call(this);
  };
  S2.prototype.Au = function () {
    this.A();
    S2.Mh.Au.call(this);
  };
  S2.prototype.AN = function () {
    this.A();
    S2.Mh.AN.call(this);
  };
  g.Za(T2, S2);
  T2.prototype.A = function () {
    this.element.style.left = Math.round(this.coords[0]) + "px";
    this.element.style.top = Math.round(this.coords[1]) + "px";
  };
  var Btb = class extends g.Sj {
    constructor(a) {
      super();
      this.listeners = [];
      this.context = a || window;
    }
    listen(a, b, c, d) {
      c = c.bind(d || this.context);
      a = g.wt(a, b, c);
      this.listeners.push(a);
      return a;
    }
    YM(a, b, c, d) {
      c = c.bind(d || this.context);
      a = rsb(a, b, c);
      this.listeners.push(a);
      return a;
    }
    ud(a) {
      g.xt(a);
      g.wb(this.listeners, a);
    }
    removeAll() {
      g.xt(this.listeners);
      this.listeners.length = 0;
    }
    ka() {
      this.removeAll();
      super.ka();
    }
  };
  var Dsb = class extends g.Z {
    constructor(a, b, c, d, e, f, h, k, l, m, p) {
      a = a.charAt(0) + a.substring(1).toLowerCase();
      c = c.charAt(0) + c.substring(1).toLowerCase();
      if (b === "0" || b === "-1") {
        b = null;
      }
      if (d === "0" || d === "-1") {
        d = null;
      }
      var q = p.O();
      var u = q.userDisplayName && g.EJ(q);
      super({
        G: "div",
        Da: ["ytp-button", "ytp-sb"],
        Y: [{
          G: "div",
          S: "ytp-sb-subscribe",
          W: u ? {
            "data-tooltip-title": g.tA("Subscribe sebagai $USER_NAME", {
              USER_NAME: q.userDisplayName
            }),
            "aria-label": "Subscribe ke channel",
            "data-tooltip-image": g.$J(q),
            "data-tooltip-opaque": String(g.GJ(q)),
            tabindex: "0",
            role: "button"
          } : {
            "aria-label": "Subscribe ke channel"
          },
          Y: [{
            G: "div",
            S: "ytp-sb-text",
            Y: [{
              G: "div",
              S: "ytp-sb-icon"
            }, a]
          }, b ? {
            G: "div",
            S: "ytp-sb-count",
            ma: b
          } : ""]
        }, {
          G: "div",
          S: "ytp-sb-unsubscribe",
          W: u ? {
            "data-tooltip-title": g.tA("Sudah subscribe sebagai $USER_NAME", {
              USER_NAME: q.userDisplayName
            }),
            "aria-label": "Unsubscribe dari channel",
            "data-tooltip-image": g.$J(q),
            "data-tooltip-opaque": String(g.GJ(q)),
            tabindex: "0",
            role: "button"
          } : {
            "aria-label": "Unsubscribe dari channel"
          },
          Y: [{
            G: "div",
            S: "ytp-sb-text",
            Y: [{
              G: "div",
              S: "ytp-sb-icon"
            }, c]
          }, d ? {
            G: "div",
            S: "ytp-sb-count",
            ma: d
          } : ""]
        }],
        W: {
          "aria-live": "polite"
        }
      });
      this.channelId = h;
      this.J = p;
      var v = this.qa("ytp-sb-subscribe");
      var z = this.qa("ytp-sb-unsubscribe");
      if (f) {
        g.qo(this.element, "ytp-sb-classic");
      }
      if (e) {
        if (k) {
          this.j();
        } else {
          this.A();
        }
        var F = () => {
          if (q.ta) {
            var N = this.channelId;
            if (l || m) {
              var S = {
                c: N
              };
              var R;
              if (g.oG.isInitialized()) {
                R = g.bGa(S);
              }
              S = R || "";
              if (R = p.getVideoData()) {
                if (R = R.subscribeCommand) {
                  var V = p.ul();
                  if (V) {
                    V.Zv(R, {
                      botguardResponse: S,
                      feature: l
                    });
                    g.KL(p, "SUBSCRIBE", N);
                  } else {
                    g.Du(Error("No innertube service available when updating subscriptions."));
                  }
                } else {
                  g.Du(Error("No subscribe command in videoData."));
                }
              } else {
                g.Du(Error("No video data available when updating subscription."));
              }
            }
            z.focus();
            z.removeAttribute("aria-hidden");
            v.setAttribute("aria-hidden", "true");
          } else {
            g.kU(g.MJ(this.J.O()), "sb_button", this.B);
          }
        };
        var M = () => {
          var N = this.channelId;
          if (l || m) {
            var S = p.getVideoData();
            p.ul().Zv(S.unsubscribeCommand, {
              feature: l
            });
            g.KL(p, "UNSUBSCRIBE", N);
          }
          v.focus();
          v.removeAttribute("aria-hidden");
          z.setAttribute("aria-hidden", "true");
        };
        this.V(v, "click", F);
        this.V(z, "click", M);
        this.V(v, "keypress", N => {
          if (N.keyCode === 13) {
            F(N);
          }
        });
        this.V(z, "keypress", N => {
          if (N.keyCode === 13) {
            M(N);
          }
        });
        this.V(p, "SUBSCRIBE", this.j);
        this.V(p, "UNSUBSCRIBE", this.A);
      } else {
        g.qo(v, "ytp-sb-disabled");
        g.qo(z, "ytp-sb-disabled");
      }
    }
    B() {
      window.location.reload();
    }
    j() {
      g.qo(this.element, "ytp-sb-subscribed");
    }
    A() {
      g.so(this.element, "ytp-sb-subscribed");
    }
  };
  var Ktb = class extends g.Z1 {
    constructor(a) {
      super(a);
      this.C = this.endscreen = null;
      this.A = {};
      this.K = {};
      this.D = this.B = null;
      this.U = [];
      this.j = null;
      this.ga = true;
      this.L = 0;
      a = a.O();
      this.X = g.EJ(a) || a.la === "profilepage";
      this.events = new g.H0(this);
      g.L(this, this.events);
      this.events.V(this.player, g.lA("creatorendscreen"), this.onCueRangeEnter);
      this.events.V(this.player, g.mA("creatorendscreen"), this.onCueRangeExit);
      this.events.V(this.player, "resize", this.Xb);
      this.events.V(window, "focus", this.ba);
      this.load();
      var b = g.se("STYLE");
      (g.ee("HEAD")[0] || document.body).appendChild(b);
      this.addOnDisposeCallback(() => {
        g.xe(b);
      });
      if (b.sheet) {
        b.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0);
        b.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}", 0);
      }
    }
    load() {
      super.load();
      if (!X2(this)) {
        var a = g.FNa(this.player.getVideoData());
        if (a) {
          a = W2(a, ysb(this));
          Y2(this, a, false);
        } else {
          Csb(this);
        }
      }
    }
    unload() {
      Y2(this, null);
      if (this.C) {
        this.C.abort();
        this.C = null;
      }
      super.unload();
    }
    Bj(a, b) {
      if (X2(this)) {
        if (a === "loadCustomEndscreenRenderer") {
          a = W2(b, "new");
          Y2(this, a);
          return true;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    getOptions() {
      if (X2(this)) {
        return ["loadCustomEndscreenRenderer"];
      } else {
        return [];
      }
    }
    Xb() {
      if (this.endscreen && this.endscreen.elements) {
        var a = this.player.getVideoContentRect();
        if (a && a.width !== 0 && a.height !== 0) {
          var b = this.player.getPlayerSize();
          if (b && b.width !== 0 && b.height !== 0) {
            var c = a.width / a.height;
            var d = 0;
            var e = -1;
            for (var f = 0; f < Gtb.length; f++) {
              var h = Math.abs(b.width - Gtb[f]);
              if (e === -1 || d >= h) {
                e = f;
                d = h;
              }
            }
            d = Htb[e];
            if (this.B) {
              g.Ue(this.B.element, "outline-width", Math.max(b.width, b.height) + "px");
            }
            for (b = 0; b < this.endscreen.elements.length; ++b) {
              f = this.endscreen.elements[b].id;
              e = this.A[f];
              h = this.K[f];
              if (!e || !h) {
                continue;
              }
              let l = h.width * c / h.aspectRatio;
              var k = Math.round(h.width * a.width);
              f = Math.round(l * a.height);
              let m = a.left + Math.round(h.left * a.width);
              let p = a.top + Math.round(h.top * a.height);
              g.jf(e.element, k, f);
              g.bf(e.element, m, p);
              g.to(e.element, Itb);
              if (k > 256 || f > 256) {
                g.qo(e.element, "ytp-ce-large-round");
              } else if (k > 96 || f > 96) {
                g.qo(e.element, "ytp-ce-medium-round");
              } else {
                g.qo(e.element, "ytp-ce-small-round");
              }
              g.to(e.element, Jtb);
              k = h.left + h.width / 2;
              h = h.top + l / 2;
              g.qo(e.element, k <= 0.5 && h <= 0.5 ? "ytp-ce-top-left-quad" : k > 0.5 && h <= 0.5 ? "ytp-ce-top-right-quad" : k <= 0.5 && h > 0.5 ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad");
              g.to(e.element, Htb);
              g.qo(e.element, d);
              if (e = g.ge(document, "div", "ytp-ce-expanding-overlay-body", e.element)[0]) {
                g.Ue(e, "height", `${f}px`);
              }
            }
          }
        }
      }
    }
    onCueRangeEnter(a) {
      if (this.endscreen) {
        if (a.getId() === "ytp-ce-in-endscreen") {
          d3(this, this.endscreen.impressionUrls);
          if ((a = g.Uu()) && this.endscreen.visualElement) {
            g.kv(a, this.endscreen.visualElement);
          }
          if (this.j) {
            g.qo(this.j, "ytp-ce-element-show");
            this.j.removeAttribute("aria-hidden");
            if (this.player.km()) {
              g.qo(this.j, "ytp-ce-hide-button-lower");
            } else {
              g.so(this.j, "ytp-ce-hide-button-lower");
            }
          }
        } else {
          a = a.getId().substring(15);
          var b = this.A[a];
          var c = this.K[a];
          g.qo(b.element, "ytp-ce-element-show");
          b.element.removeAttribute("aria-hidden");
          b = this.player.getRootNode();
          g.qo(b, "ytp-ce-shown");
          d3(this, c.impressionUrls);
          if (b = g.Uu()) {
            g.kv(b, c.visualElement);
          }
          if (this.player.O().ga) {
            g.KL(this.player, "endscreenelementshown", a);
          }
        }
      }
    }
    onCueRangeExit(a) {
      if (a.getId() === "ytp-ce-in-endscreen") {
        if (this.j) {
          g.so(this.j, "ytp-ce-element-show");
          this.j.setAttribute("aria-hidden", "true");
        }
      } else {
        a = a.getId().substring(15);
        var b = this.A[a];
        g.so(b.element, "ytp-ce-element-show");
        b.element.setAttribute("aria-hidden", "true");
        b = this.player.getRootNode();
        g.so(b, "ytp-ce-shown");
        if (this.player.O().ga) {
          g.KL(this.player, "endscreenelementhidden", a);
        }
      }
    }
    ba(a) {
      if (a.target === window) {
        new g.jo(() => {
          for (let b of Object.values(this.A)) {
            g.to(b.element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"]);
          }
        }, 0).start();
      }
    }
    Cc(a) {
      for (let b of Object.values(this.A)) {
        if (a) {
          b.element.setAttribute("hidden", "");
        } else {
          b.element.removeAttribute("hidden");
        }
      }
    }
    Y$(a) {
      if (this.j) {
        this.player.getRootNode().removeChild(this.j);
      }
      if (a) {
        g.qo(a, "ytp-ce-hide-button-container");
        this.j = a;
        g.fM(this.player, this.j, 4);
      }
    }
  };
  var Gtb = [346, 426, 470, 506, 570, 640, 853, 1280, 1920];
  var Htb = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" ");
  var Jtb = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"];
  var Itb = ["ytp-ce-small-round", "ytp-ce-medium-round", "ytp-ce-large-round"];
  var Ksb = class {
    constructor(a, b, c, d) {
      this.value = a;
      this.target = b;
      this.showLinkIcon = c;
      this.A = d;
    }
    j() {
      if (this.value) {
        return this.value;
      } else {
        return null;
      }
    }
  };
  var Jsb = {
    rda: "current",
    iga: "new"
  };
  var Nsb = class {
    constructor(a, b, c) {
      this.type = a;
      this.trigger = b;
      this.url = c;
    }
  };
  var Lsb = {
    CLOSE: "close",
    tga: "openUrl",
    SUBSCRIBE: "subscribe"
  };
  var Msb = {
    Wca: "click",
    CLOSE: "close",
    yea: "hidden",
    Bha: "rollOut",
    Cha: "rollOver",
    Oha: "shown"
  };
  var qtb = class {
    constructor(a, b, c, d, e) {
      this.id = a;
      this.type = b;
      this.style = c;
      this.data = e;
      this.action = d || [];
    }
    gf() {
      var a = Psb(this, b => b.type === "openUrl" && b.url != null);
      if (a) {
        return a.url;
      } else {
        return null;
      }
    }
  };
  var ptb = {
    Yba: "anchored",
    j3: "branding",
    CHANNEL: "channel",
    qda: "cta",
    Bea: "highlightText",
    pfa: "label",
    PLAYLIST: "playlist",
    POPUP: "popup",
    Xha: "speech",
    SUBSCRIBE: "subscribe",
    jia: "title",
    VIDEO: "video",
    Qia: "website"
  };
  var otb = {
    j3: "branding",
    Lca: "card",
    Eda: "drawer",
    Aea: "highlight",
    Mfa: "marker",
    Pga: "promotion",
    TEXT: "text",
    uja: "widget"
  };
  var Ltb = [".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}", ".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", ".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", ".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}", ".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", ".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}"];
  var Mtb = [".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", ".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}", ".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", ".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}"];
  var Ntb = class {
    constructor(a, b) {
      this.context = a;
      this.j = b;
    }
  };
  var utb = class {
    constructor(a, b) {
      this.merchant = a;
      this.price = b;
    }
  };
  var Otb = class extends g.Sj {
    constructor(a, b) {
      super();
      this.element = a;
      this.context = b;
      this.fb = false;
      this.Ra = new Map();
      this.Va = new Map();
      this.context.J.addEventListener(g.lA("annotations_module"), c => {
        if (c = this.Ra.get(c)) {
          c.apply(this);
        }
      });
      this.context.J.addEventListener(g.mA("annotations_module"), c => {
        if (c = this.Va.get(c)) {
          c.apply(this);
        }
      });
    }
    addCueRange(a, b, c, d, e) {
      a = new g.BM(a, b, {
        id: c,
        namespace: "annotations_module"
      });
      if (d) {
        this.Ra.set(a, d);
      }
      if (e) {
        this.Va.set(a, e);
      }
      this.context.J.qf([a], 1);
    }
    fa() {
      this.context.A.subscribe("resize", this.sa, this);
    }
    xb() {
      return this.element;
    }
    Ka(a, b, c, d, e, f) {
      if (this.fb) {
        return false;
      }
      if (f) {
        f.stopPropagation();
        f.preventDefault();
      }
      this.navigate(a, c, d, e);
      return false;
    }
    show() {}
    hide() {}
    destroy() {
      g.xe(this.xb());
    }
    sa() {}
    navigate(a, b, c, d) {
      var e = a.j();
      if (e) {
        var f = Ssb(e, a.target);
        var h = () => {
          if (a.A) {
            this.context.J.pauseVideo();
          }
          var k = this.context.videoData.oe || false;
          var l = g.Vp(e || "");
          if (k && l && (l.v || l.list)) {
            this.context.J.Lq(l.v, b, l.list, false);
          } else {
            g.qz(e || "", f === "current" ? "_top" : undefined, b);
          }
        };
        if (f === "new") {
          h();
          h = null;
        }
        y3(this.context.logger, c, h, d);
        if (!Rsb(e)) {
          c = g.Uu();
          d = b.itct;
          if (c && d) {
            g.nv(c, g.Qu(d));
          }
        }
      }
    }
    ka() {
      this.Ra.clear();
      this.Va.clear();
      super.ka();
    }
    createElement(a) {
      a = new g.Z(a);
      g.L(this, a);
      return a.element;
    }
  };
  var Etb = class extends Otb {
    constructor(a, b, c) {
      super(b, c);
      this.J = a;
      this.eventId = null;
      this.ub = this.ya = this.zb = this.B = this.isInitialized = false;
      this.cards = [];
      this.jb = this.U = this.za = this.D = this.Ha = this.j = null;
      this.ga = [];
      this.ba = this.L = this.Pg = this.ta = null;
      this.K = 0;
      this.la = new g.jo(() => {}, c.Z.gh ? 4000 : 3000);
      g.L(this, this.la);
      this.bb = new g.jo(() => {});
      g.L(this, this.bb);
      this.ha = new Ntb(c, (d, e, f, h, k, l) => {
        m3(this, d, e, f, h, k, l);
      });
      this.X = new g.Z({
        G: "div",
        S: "iv-drawer",
        W: {
          id: "iv-drawer"
        },
        Y: [{
          G: "div",
          S: "iv-drawer-header",
          W: {
            "aria-role": "heading"
          },
          Y: [{
            G: "span",
            S: "iv-drawer-header-text"
          }, {
            G: "button",
            Da: ["iv-drawer-close-button", "ytp-button"],
            W: {
              "aria-label": "Sembunyikan kartu",
              tabindex: "0"
            }
          }]
        }, {
          G: "div",
          S: "iv-drawer-content"
        }]
      });
      g.L(this, this.X);
      this.C = this.X.element;
      this.Xa = new g.Y_(this.X, 330);
      g.L(this, this.Xa);
      this.qb = g.he("iv-drawer-header-text", this.C);
      this.A = g.he("iv-drawer-content", this.C);
      this.addCueRange(0, c.videoData.lengthSeconds * 1000, "", () => {
        if (this.zb) {
          q3(this, "YOUTUBE_DRAWER_AUTO_OPEN");
        }
      }, () => {
        if (this.zb = this.B) {
          s3(this);
        }
      });
      this.Fa = new g.H0(this);
      g.L(this, this.Fa);
      this.J.addEventListener("videodatachange", this.Vp.bind(this));
    }
    Vp() {
      if (this.ba) {
        r3(this, this.ba);
      }
    }
    isAvailable() {
      var a;
      if (a = !!this.cards.length) {
        if (a = this.J.getRootNode()) {
          a = g.kf(a);
          a = a.width > 173 && a.height > 173;
        } else {
          a = false;
        }
      }
      return a;
    }
    sa() {
      var a = this.isAvailable();
      g.lf(this.xb(), a);
      g.uo(this.context.J.getRootNode(), g.yG.IV_DRAWER_ENABLED, a);
      J2(this.J);
    }
    destroy() {
      this.J.QD(false);
      try {
        this.J.getRootNode().removeChild(this.C);
      } catch (a) {}
      g.kt(this.ga);
      this.Fa.j();
      if (this.Ha) {
        this.Ha.dispose();
      }
      if (this.D) {
        this.D.dispose();
      }
      super.destroy();
    }
    iQ() {
      this.context.j.listen(g.he("iv-drawer-close-button", this.C), "click", this.hc, this);
      this.context.j.listen(this.A, "touchend", () => {
        this.la.start();
      });
      this.context.j.listen(this.A, "scroll", this.Zb, this);
      this.context.A.subscribe("onHideControls", () => {
        this.ya = true;
      });
      this.context.A.subscribe("onShowControls", () => {
        this.ya = false;
      });
      this.context.A.subscribe("onVideoAreaChange", () => {
        this.ya = g.po(this.J.getRootNode(), "ytp-autohide");
      });
      this.ga.push(g.jt("iv-button-shown", this.uc, this));
      this.ga.push(g.jt("iv-button-hidden", this.Jc, this));
      Wsb(this);
    }
    findLastIndex(a) {
      if (this.cards.length === 0) {
        return 0;
      }
      var b = g.qb(this.cards, c => a.kg.startMs > c.kg.startMs || a.kg.startMs === c.kg.startMs && a.kg.timestamp >= c.kg.timestamp);
      if (b === -1) {
        return 0;
      } else {
        return b + 1;
      }
    }
    hc() {
      if (this.B) {
        y3(this.context.logger, v3(this).Wk.close);
        var a = g.Uu();
        if (a && this.L) {
          g.nv(a, this.L);
        }
        s3(this);
      }
    }
    Zb() {
      g.uo(this.C, "iv-drawer-scrolled", this.A.scrollTop > 0);
    }
    uc() {
      var a = g.Uu();
      var b = v3(this);
      b = b ? b.Pg : this.Pg;
      if (a && b) {
        g.lv(a, [b]);
      }
    }
    Jc() {
      var a = g.Uu();
      var b = v3(this);
      b = b ? b.Pg : this.Pg;
      if (a && b) {
        g.mv(a, [b]);
      }
    }
    Rb() {
      var a = v3(this);
      y3(this.context.logger, a.Wk.b2);
      var b = g.Uu();
      if (b && a) {
        let c = [];
        if (a.Zm) {
          c.push(a.Zm);
        }
        if (a.Pg) {
          c.push(a.Pg);
        }
        if (c.length > 0) {
          g.lv(b, c);
        }
      }
    }
    zc() {
      var a = g.Uu();
      var b = v3(this);
      if (a && b) {
        g.mv(a, [b.Zm]);
      }
    }
    Kb(a) {
      var b = v3(this);
      var c = g.Uu();
      if (this.j) {
        if (a) {
          a = this.context.logger;
          y3(a, b.Wk.ZO);
          a.J.sendVideoStatsEngageEvent(4, undefined);
          if (c && b.Zm) {
            g.nv(c, b.Zm);
          }
        } else {
          a = this.context.logger;
          y3(a, b.Wk.ZO);
          a.J.sendVideoStatsEngageEvent(4, undefined);
          if (c && b.Pg) {
            g.nv(c, b.Pg);
          }
        }
      } else {
        a = this.context.logger;
        y3(a, b.Wk.ZO);
        a.J.sendVideoStatsEngageEvent(4, undefined);
        if (c && this.Pg) {
          g.nv(c, this.Pg);
        }
      }
    }
  };
  var Ptb = class extends Otb {
    constructor(a, b, c) {
      super(a, b);
      this.annotation = c;
      this.isActive = false;
    }
    fa() {
      super.fa();
      etb(this);
    }
    show() {
      super.show();
      var a = g.Uu();
      var b = this.annotation.data;
      if (a && b && (b = b.session_data)) {
        g.lv(a, [g.Qu(b.itct)]);
      }
    }
    hide() {
      super.hide();
      var a = g.Uu();
      var b = this.annotation.data;
      if (a && b && (b = b.session_data)) {
        g.mv(a, [g.Qu(b.itct)]);
      }
    }
  };
  var rtb = class extends Ptb {
    constructor(a, b, c) {
      super(a, b, c);
      this.j = null;
      this.A = false;
    }
    show() {
      if (!this.isActive) {
        super.show();
        if (!this.A) {
          g.qo(this.xb(), "iv-branding");
          let a = this.annotation.data;
          this.j = this.createElement({
            G: "img",
            Da: ["branding-img", "iv-click-target"],
            W: {
              "aria-label": "Watermark channel",
              src: a.image_url,
              width: a.image_width,
              height: a.image_height
            }
          });
          g.lf(this.j, false);
          let b = this.createElement({
            G: "button",
            Da: ["branding-img-container", "ytp-button"]
          });
          b.appendChild(this.j);
          this.xb().appendChild(b);
          let c = this.annotation.gf();
          if (c) {
            m3(this, b, c, this.annotation.id, a.session_data);
          }
          this.A = true;
        }
        g.lf(this.xb(), true);
        this.isActive = true;
        if (this.j) {
          try {
            ftb(this, this.j);
          } catch {}
          g.qo(this.context.J.getRootNode(), "ytp-branding-shown");
          this.context.J.getRootNode().style.setProperty("--branding-image-width", `${this.j.getAttribute("width")}px`);
        }
      }
    }
    hide() {
      if (this.isActive) {
        super.hide();
        g.lf(this.xb(), false);
        this.isActive = false;
        g.so(this.context.J.getRootNode(), "ytp-branding-shown");
      }
    }
    destroy() {
      g.so(this.context.J.getRootNode(), "ytp-branding-shown");
      super.destroy();
    }
  };
  var Ctb = class {
    constructor(a, b, c, d, e, f, h) {
      this.j = a;
      this.B = b;
      this.Z = c;
      this.videoData = d;
      this.logger = e;
      this.J = f;
      this.A = h;
    }
  };
  var stb = class extends Ptb {
    constructor(a, b, c) {
      super(a, b, c);
      this.U = this.isCollapsed = this.X = false;
      this.K = 5000;
      this.A = this.B = this.j = this.C = null;
      this.L = this.createElement({
        G: "div",
        Da: ["iv-promo-contents"]
      });
      this.D = new g.jo(() => {
        this.j.setAttribute("aria-hidden", "true");
        g.lf(this.B, false);
        g.lf(this.A, true);
      }, 700, this);
      g.L(this, this.D);
    }
    show() {
      if (!this.isActive) {
        super.show();
        if (!this.X) {
          itb(this);
          this.X = true;
        }
        g.lf(this.xb(), true);
        g.hm(function () {
          g.so(this.xb(), "iv-promo-inactive");
        }, 100, this);
        this.xb().removeAttribute("aria-hidden");
        this.isActive = true;
        x3(this);
        gtb(this);
        htb(this, this.K);
      }
    }
    hide() {
      if (this.isActive) {
        g.qo(this.xb(), "iv-promo-inactive");
        this.isActive = false;
        this.xb().setAttribute("aria-hidden", "true");
      }
    }
    Ka(a, b, c, d, e, f) {
      if (this.isCollapsed) {
        return false;
      } else {
        return super.Ka(a, b, c, d, e, f);
      }
    }
    la(a) {
      this.U = true;
      w3(this, 500, a);
    }
    ha() {
      this.U = false;
      jtb(this);
    }
    ga(a) {
      a.stopPropagation();
      this.hide();
    }
    ba(a) {
      a.stopPropagation();
      x3(this);
      this.isCollapsed = true;
      g.qo(this.xb(), "iv-promo-collapsed-no-delay");
      this.D.start();
    }
    destroy() {
      this.D.dispose();
      super.destroy();
    }
  };
  var Qtb = class {
    constructor(a) {
      this.J = a;
    }
  };
  g.BT("annotations_module", class extends g.Z1 {
    constructor(a) {
      super(a);
      this.ga = this.ba = false;
      this.loadNumber = 0;
      this.K = {};
      this.logger = new Qtb(this.player);
      this.D = new g.H0(this);
      this.L = this.C = null;
      this.events = new g.H0(this);
      this.Bi = this.U = this.j = null;
      this.fa = [];
      g.L(this, this.D);
      this.D.V(this.player, "onVideoAreaChange", () => {
        this.publish("onVideoAreaChange");
      });
      this.D.V(this.player, "onHideControls", () => {
        this.publish("onHideControls");
      });
      this.D.V(this.player, "onShowControls", () => {
        this.publish("onShowControls");
      });
      this.D.V(this.player, "resize", c => {
        this.publish("resize", c);
      });
      this.D.V(this.player, "presentingplayerstatechange", c => {
        this.publish("presentingplayerstatechange", c);
      });
      this.subscribe("presentingplayerstatechange", this.la, this);
      this.subscribe("resize", this.X, this);
      this.player.O().Fa.subscribe("vast_info_card_add", this.ha, this);
      g.L(this, this.events);
      this.sa = this.createElement({
        G: "div",
        S: "video-custom-annotations"
      });
      this.A = new g.Z({
        G: "div",
        Da: ["ytp-player-content", "ytp-iv-player-content"]
      });
      g.L(this, this.A);
      g.fM(this.player, this.A.element, 4);
      this.A.hide();
      this.B = new g.Z({
        G: "div",
        Da: ["ytp-iv-video-content"]
      });
      g.L(this, this.B);
      a = this.createElement({
        G: "div",
        S: "video-annotations"
      });
      a.appendChild(this.sa);
      this.B.element.appendChild(a);
      if (this.Mn()) {
        this.load();
      } else if (this.player.N("web_fix_annotations")) {
        this.C = () => {
          if (!this.loaded && !this.oa() && !!this.Mn()) {
            ltb(this);
            this.load();
          }
        };
        this.player.addEventListener("videodatachange", this.C);
      }
      var b = this.createElement({
        G: "style"
      });
      (g.ee("HEAD")[0] || document.body).appendChild(b);
      this.addOnDisposeCallback(() => {
        g.xe(b);
      });
      if (a = b.sheet) {
        for (let c of Ltb) {
          a.insertRule(c, 0);
        }
        for (let c of Mtb) {
          a.insertRule(c, 0);
        }
      }
    }
    Bj(a, b) {
      if (!ktb(this.player.O().playerStyle)) {
        return null;
      }
      switch (a) {
        case "loadCustomAnnotationsXml":
          if (a = g.gZ(b)) {
            A3(this, a);
          }
          return true;
        case "removeCustomAnnotationById":
          if (b && this.j) {
            o3(this.j, b);
            J2(this.player);
          }
          return true;
      }
      return null;
    }
    getOptions() {
      if (ktb(this.player.O().playerStyle)) {
        return ["loadCustomAnnotationsXml", "removeCustomAnnotationById"];
      } else {
        return [];
      }
    }
    Mn() {
      var a = this.player.getVideoData();
      var b = a.getWatchNextResponse()?.playerOverlays?.playerOverlayRenderer;
      if (a.oe || this.player.isMutedByEmbedsMutedAutoplay()) {
        return false;
      } else if (this.player.N("web_fix_annotations")) {
        if (vtb(this)) {
          if (b?.isWatermarkEnforced === true) {
            return true;
          } else {
            return b?.isAnnotationsEnabled ?? false;
          }
        } else {
          return false;
        }
      } else {
        return vtb(this);
      }
    }
    X() {
      if (this.B) {
        var a = this.player.ib().getVideoContentRect(true);
        g.jf(this.B.element, a.width, a.height);
        g.bf(this.B.element, a.left, a.top);
      }
      if (this.j) {
        var b = this.player.vn();
        a = this.j;
        b = b.width;
        g.uo(a.C, "iv-drawer-small", b <= 426);
        g.uo(a.C, "iv-drawer-big", b >= 1280);
      }
    }
    la(a) {
      wtb(this, a.state);
      if (a.state.va(2)) {
        if (this.km() && this.er() && this.player.getPresentingPlayerType() !== 2) {
          this.RD(false);
        }
        this.QD(false);
      }
    }
    load() {
      super.load();
      wtb(this, this.player.getPlayerStateObject());
      this.loadNumber++;
      var a = this.player.getVideoData();
      Atb(this, a);
      g.fM(this.player, this.B.element, 4);
      this.X();
      var b = g.sL(a);
      var c = g.rL(a);
      if (this.player.N("web_fix_annotations")) {
        if (b && (b.featuredChannel && Ftb(this, b.featuredChannel, b.annotationId || "branding", a.videoId || null, a.eventId || null), b = this.player.getVideoData().getWatchNextResponse()?.playerOverlays?.playerOverlayRenderer, b?.isWatermarkEnforced && !b?.isAnnotationsEnabled)) {
          return;
        }
        if (c) {
          B3(this, c);
        }
      } else {
        if (c) {
          B3(this, c);
        }
        if (b && b.featuredChannel) {
          Ftb(this, b.featuredChannel, b.annotationId || "branding", a.videoId || null, a.eventId || null);
        }
      }
      this.Bi = g.he("ytp-cards-button", this.player.getRootNode());
      if (g.qL(a)) {
        ztb(this, a);
      }
    }
    onVideoDataChange() {}
    unload() {
      this.player.He("annotations_module");
      for (let a of Object.keys(this.K)) {
        this.K[a].destroy();
      }
      this.U = null;
      if (this.j) {
        this.j.destroy();
        this.j = null;
        J2(this.player);
      }
      this.ba = false;
      if (this.L) {
        this.L.abort();
        this.L = null;
      }
      this.ga = false;
      this.K = {};
      this.A.hide();
      super.unload();
      this.B.detach();
      ltb(this);
    }
    ha(a) {
      if (a === this.player.getVideoData().videoId) {
        if (this.loaded) {
          Dtb(this);
        } else {
          this.load();
        }
      }
    }
    km() {
      return this.j?.isAvailable() || this.ga;
    }
    er() {
      return !!this.j && this.j.B;
    }
    RD(a, b = false, c) {
      this.km();
      if (this.j) {
        if (a) {
          if (c) {
            q3(this.j, c, b);
          } else {
            q3(this.j, "YOUTUBE_DRAWER_AUTO_OPEN", b);
          }
        } else {
          s3(this.j);
        }
      }
    }
    QD(a, b) {
      this.player.publish(a ? "cardsteasershow" : "cardsteaserhide", b);
    }
    ka() {
      this.player.O().Fa.unsubscribe("vast_info_card_add", this.ha, this);
      g.so(this.player.getRootNode(), g.yG.IV_DRAWER_OPEN);
      var a = this.fa;
      var b = g.Jn;
      for (let c = 0, d = a.length; c < d; c++) {
        b.dk(a[c]);
      }
      this.fa.length = 0;
      super.ka();
    }
    createElement(a) {
      a = new g.Z(a);
      g.L(this, a);
      return a.element;
    }
  });
  g.BT("creatorendscreen", Ktb);
})(_yt_player);