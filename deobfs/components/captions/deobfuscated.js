(function (g) {
  var window = this;
  "use strict";
  async function Stb(a) {
    if (a.C) {
      try {
        await a.C.promise;
      } catch {}
    }
  }
  async function Ttb(a, b, c) {
    a.A = g.pq(b, c);
  }
  async function Utb(a, b, c, d) {
    try {
      let e = a.U;
      if (a.Pa.O().N("html5_await_track_decoration_in_load_track") && (await Stb(a), a.oa() || a.U !== e)) {
        return;
      }
      let f = a.L(b, c);
      let h = a.Pa.O().N("html5_report_captions_ctmp_qoe");
      let k = (0, g.T)();
      await Ttb(a, f, {
        format: "RAW",
        onSuccess: l => {
          if (a.A) {
            a.A = null;
            if (h) {
              var m = (l.responseText.length / 1024).toFixed();
              let p = (0, g.T)();
              a.videoData.ea("capresp", {
                ms: p - k,
                kb: m
              });
            }
            m = l.getResponseHeader && l.getResponseHeader("Content-Length") ? Number(l.getResponseHeader("Content-Length")) : 0;
            d.jx(l.responseText, b, undefined, undefined, m);
          }
        },
        onError: h ? l => {
          a.videoData.ea("capfail", {
            status: l?.status ?? 0
          });
        } : undefined,
        withCredentials: true
      });
    } catch {}
  }
  function C3(a) {
    if (!a.isActive()) {
      a.start();
    }
  }
  function Vtb(a, b) {
    var c = new g.CG();
    c.languageCode = a.languageCode;
    c.languageName = a.languageName;
    c.name = a.name;
    c.displayName = a.displayName;
    c.kind = a.kind;
    c.isDefault = false;
    c.A = a.A;
    c.B = a.B;
    c.vssId = a.vssId;
    c.url = a.url;
    c.translationLanguage = b;
    if (a.xtags) {
      c.xtags = a.xtags;
    }
    if (a.captionId) {
      c.captionId = a.captionId;
    }
    return c;
  }
  function D3(a, b) {
    if (b) {
      return a.captionsInitialState;
    } else {
      return "CAPTIONS_INITIAL_STATE_UNKNOWN";
    }
  }
  function Wtb(a) {
    return g.RJ(a) || a.N("web_enable_caption_language_preference_stickiness");
  }
  async function Xtb(a, b) {
    a = a + "|" + b;
    b = await g.rs();
    if (!b) {
      throw g.Sr("gct");
    }
    return (await g.wK(b)).get("captions", a);
  }
  function Ytb(a, b, c) {
    Xtb(a, b).then(d => {
      if (d) {
        c(d.trackData, new g.CG(d.metadata));
      }
    });
  }
  function E3(a) {
    if (!Ztb.test(a)) {
      throw Error("'" + a + "' is not a valid hex color");
    }
    if (a.length == 4) {
      a = a.replace($tb, "#$1$1$2$2$3$3");
    }
    a = a.toLowerCase();
    a = parseInt(a.slice(1), 16);
    return [a >> 16, a >> 8 & 255, a & 255];
  }
  function aub() {
    var a = {};
    var b = "suggest_correction" in g.r0 ? g.r0.suggest_correction : "Edit caption";
    b = b || "";
    if (a) {
      for (let c of Object.keys(a)) {
        let d = () => String(a[c]);
        b = b.replace(new RegExp("\\$\\{" + c + "\\}", "gi"), d);
        b = b.replace(new RegExp("\\$" + c, "gi"), d);
      }
    }
    return b;
  }
  function F3() {
    return g.lr("yt-player-caption-display-settings");
  }
  function bub(a) {
    if (a) {
      Object.values(a.j).some(b => b.info.j() && b.info.deniedForCabr);
    }
  }
  function cub(a, b, c) {
    return Object.entries(a.j).some(([d, e]) => e.info.j() && !!e.info.deniedForCabr && (d === b || e.info.captionTrack?.languageCode === c));
  }
  function dub(a, b) {
    var c = g.Hb(a.segments, b);
    if (!(c >= 0) && (!(c < 0) || (-c - 1) % 2 !== 1)) {
      c = -c - 1;
      if (c > 0 && b - a.segments[c - 1] === 1 && c < a.segments.length && a.segments[c] - b === 1) {
        g.tb(a.segments, c);
        g.tb(a.segments, c - 1);
      } else if (c > 0 && b - a.segments[c - 1] === 1) {
        a.segments[c - 1] = b;
      } else if (c < a.segments.length && a.segments[c] - b === 1) {
        a.segments[c] = b;
      } else {
        g.Eb(a.segments, c, 0, b);
        g.Eb(a.segments, c + 1, 0, b);
      }
    }
  }
  function eub(a) {
    if (a.j && a.j.C) {
      return a.j.C + a.player.jc() < a.player.getCurrentTime();
    } else {
      return false;
    }
  }
  function fub(a, b) {
    if (a.policy.qt && a.player.Eo()) {
      var c = g.iI(b, a.policy, {});
      c.set("pot", a.player.Eo());
      c = c.gf();
    } else {
      c = g.iI(b, a.policy, {}).gf();
    }
    var d = {
      format: "RAW",
      withCredentials: true
    };
    if (a.policy.za) {
      d.method = "POST";
      let h = b.C;
      if (h && Object.keys(h).length > 0) {
        d.postBody = g.ky(h, g.tB);
      } else {
        d.postBody = (0, g.lM)([120, 0]);
      }
    }
    if (a.D) {
      d.responseType = "arraybuffer";
    }
    var e = ++a.fa;
    var f = (0, g.T)();
    a.A = g.tq(c, d, 3, 100, -1, h => {
      if (h.errorCode === "net.timeout") {
        a.player.ea("capnt", {
          rn: e++
        });
      }
    }).then(h => {
      if (a.policy.nY && e % 100 === 1) {
        var k = (0, g.T)();
        a.player.ea("caprsp", {
          rn: e,
          ms: k - f,
          kb: (h.xhr.responseText.length / 1024).toFixed()
        });
      }
      a: {
        h = h.xhr;
        a.oa();
        if (a.B) {
          var l = !(a.D ? h.response : h.responseText) || h.status >= 400;
          if (k = g.eIa(h)) {
            h = g.iI(a.B, a.policy, {});
            a.B.Ho(h, k);
            fub(a, a.B);
            break a;
          }
          if (l) {
            a.player.ea("capfail", {
              status: h.status
            });
          } else {
            g.wC("fcb_r", (0, g.T)(), a.player.getVideoData().Me || "");
            k = a.B.ob[0];
            l = k.Ea;
            if (a.U != null && a.K !== l) {
              if (a.D) {
                a.U(h.response, (k.segmentStartTime + a.player.jc()) * 1000);
              } else {
                a.U(h.responseText, (k.segmentStartTime + a.player.jc()) * 1000);
              }
              a.K = l;
            }
          }
        }
        a.B = null;
        a.A = null;
      }
    }).am(h => {
      a.B = null;
      a.A = null;
      a.player.ea("capfail", {
        rn: e,
        status: h.xhr?.status
      });
    });
    a.B = b;
    dub(a.C, a.B.ob[0].Ea);
  }
  function gub(a, b) {
    if (b != null && b in a.A.j) {
      a = a.A.j[b];
      if (a.info.deniedForCabr) {
        return null;
      } else {
        return a;
      }
    } else {
      return null;
    }
  }
  function hub(a, b, c) {
    var d = [];
    for (let e in a.A.j) {
      if (!a.A.j.hasOwnProperty(e)) {
        continue;
      }
      let f = a.A.j[e];
      if (g.ET(f, c || null) && !f.info.deniedForCabr) {
        let h = f.info.captionTrack;
        if (h && h.languageCode === b) {
          d.push(f);
        }
      }
    }
    if (d.length) {
      return d[0];
    } else {
      return null;
    }
  }
  function iub(a, b) {
    var c = [];
    for (let e in a.A.j) {
      if (!a.A.j.hasOwnProperty(e)) {
        continue;
      }
      var d = a.A.j[e];
      if (g.ET(d, b || null) && !d.info.deniedForCabr) {
        let f = d.info.id;
        let h = f;
        let k = `.${f}`;
        let l = "";
        let m = "";
        if (d = d.info.captionTrack) {
          f = d.languageCode;
          h = d.displayName;
          k = d.vssId;
          l = d.kind;
          m = d.id;
        }
        c.push(new g.CG({
          id: e,
          languageCode: f,
          languageName: h,
          is_servable: true,
          is_default: true,
          is_translateable: false,
          vss_id: k,
          kind: l,
          captionId: m
        }));
      }
    }
    return c;
  }
  function jub(a, b, c) {
    if (!a.j || !a.A) {
      a.j = [];
      a.A = [];
    }
    a.j.push(b);
    a.A.push(c);
  }
  function kub(a) {
    if (!a.j || !a.A) {
      return [a];
    }
    var b = a.end - a.start;
    var c = a.priority || 0;
    var d = [new G3(a.start, b, c, a.windowId, a.text, a.append, a.pD)];
    for (let e = 0; e < a.j.length; e++) {
      d.push(new G3(a.start, b, c, a.windowId, a.j[e], true, a.A[e]));
    }
    return d;
  }
  function lub(a, b, c, d, e) {
    var f = c / 360 * a.Oc;
    if (c >= b) {
      b = 640;
      if (e > d * 1.3) {
        b = 480;
      }
      f = d / b * a.Oc;
    }
    return f;
  }
  function mub(a) {
    var b = 1 + (a.fontSizeIncrement || 0) * 0.25;
    if (a.offset === 0 || a.offset === 2) {
      b *= 0.8;
    }
    return b;
  }
  function nub(a, b) {
    var c = "vertical-rl";
    if (a.j.aW === 1) {
      c = "vertical-lr";
    }
    if (g.YI) {
      c = c === "vertical-lr" ? "tb-lr" : "tb-rl";
    }
    g.Ue(b, "-o-writing-mode", c);
    g.Ue(b, "-webkit-writing-mode", c);
    g.Ue(b, "writing-mode", c);
    g.Ue(b, "text-orientation", "upright");
    g.qo(b, "ytp-vertical-caption");
    if (a.A.params.zk === 3) {
      g.Ue(b, "text-orientation", "");
      g.Ue(b, "transform", "rotate(180deg)");
    }
  }
  function oub(a, b) {
    var c = {};
    var d = b.background ? b.background : a.j.Bf.background;
    if (b.backgroundOpacity != null || b.background) {
      var e = b.backgroundOpacity ?? a.j.Bf.backgroundOpacity;
      d = E3(d);
      c.background = "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + e + ")";
      if (a.ub) {
        c["box-decoration-break"] = "clone";
        c["border-radius"] = `${a.Kb * 0.25}px`;
      }
    }
    if (b.fontSizeIncrement != null || b.offset != null) {
      c["font-size"] = `${a.Rb * mub(b)}px`;
    }
    if (a.Rh) {
      c["line-height"] = "1.375";
    }
    d = 1;
    e = b.color || a.j.Bf.color;
    if (b.color || b.textOpacity != null) {
      e = E3(e);
      d = b.textOpacity == null ? a.j.Bf.textOpacity : b.textOpacity;
      e = "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + d + ")";
      c.color = e;
      c.fill = e;
    }
    var f = b.charEdgeStyle;
    if (f === 0) {
      f = undefined;
    }
    if (f) {
      e = `rgba(34, 34, 34, ${d})`;
      let l = `rgba(204, 204, 204, ${d})`;
      if (b.HQ) {
        l = e = b.HQ;
      }
      let m = a.Rb / 16 / 2;
      let p = Math.max(m, 1);
      var h = Math.max(m * 2, 1);
      var k = Math.max(m * 3, 1);
      let q = Math.max(m * 5, 1);
      d = [];
      switch (f) {
        case 4:
          for (; k <= q; k += m) {
            d.push(`${h}px ${h}px ${k}px ${e}`);
          }
          break;
        case 1:
          h = window.devicePixelRatio >= 2 ? 0.5 : 1;
          for (f = p; f <= k; f += h) {
            d.push(`${f}px ${f}px ${e}`);
          }
          break;
        case 2:
          d.push(`${p}px ${p}px ${l}`);
          d.push(`-${p}px -${p}px ${e}`);
          break;
        case 3:
          for (k = 0; k < 5; k++) {
            d.push(`0 0 ${h}px ${e}`);
          }
      }
      c["text-shadow"] = d.join(", ");
    }
    e = "";
    switch (b.fontFamily) {
      case 1:
        e = "\"Courier New\", Courier, \"Nimbus Mono L\", \"Cutive Mono\", serif-monospace, monospace";
        break;
      case 2:
        e = "\"Times New Roman\", Times, Georgia, Cambria, \"PT Serif Caption\", serif";
        break;
      case 3:
        e = "\"Deja Vu Sans Mono\", \"Lucida Console\", Monaco, Consolas, \"PT Mono\", sans-serif-monospace, monospace";
        break;
      case 5:
        e = "\"Comic Sans MS\", Impact, Handlee, fantasy";
        break;
      case 6:
        e = "\"Monotype Corsiva\", \"URW Chancery L\", \"Apple Chancery\", \"Dancing Script\", cursive";
        break;
      case 7:
        e = g.Nq() ? "\"Carrois Gothic SC\", sans-serif-smallcaps" : "Arial, Helvetica, Verdana, \"Marcellus SC\", sans-serif";
        break;
      case 0:
      case 4:
        e = "\"YouTube Noto\", Roboto, Arial, Helvetica, Verdana, \"PT Sans Caption\", sans-serif";
    }
    if (e) {
      c["font-family"] = e;
    }
    e = b.offset;
    if (e == null) {
      e = a.j.Bf.offset;
    }
    switch (e) {
      case 0:
        c["vertical-align"] = "sub";
        break;
      case 2:
        c["vertical-align"] = "super";
    }
    if (b.fontFamily === 7) {
      c["font-variant"] = "small-caps";
    }
    if (b.bold) {
      c["font-weight"] = "bold";
    }
    if (b.italic) {
      c["font-style"] = "italic";
    }
    if (b.underline) {
      c["text-decoration"] = "underline";
    }
    if (b.e7) {
      c.visibility = "hidden";
    }
    if (b.DZ === 1 && a.D) {
      c["text-combine-upright"] = "all";
      c["text-orientation"] = "mixed";
      e = g.XJ || g.Pr;
      if (a.A.params.zk === 3) {
        c.transform = e ? "rotate(90deg)" : "rotate(180deg)";
      } else if (e) {
        c.transform = "rotate(-90deg)";
      }
    }
    if (b.textEmphasis === 1 || b.textEmphasis === 2 || b.textEmphasis === 3 || b.textEmphasis === 4 || b.textEmphasis === 5) {
      if (g.XJ) {
        c["font-weight"] = "bold";
      } else {
        c["text-emphasis-style"] = "filled circle";
        c["text-emphasis-color"] = "currentcolor";
        c["webkit-text-emphasis"] = "filled circle";
        switch (b.textEmphasis) {
          case 4:
          case 3:
            c["text-emphasis-position"] = "under left";
            c["webkit-text-emphasis-position"] = "under left";
            break;
          case 5:
          case 2:
            c["text-emphasis-position"] = "over right";
            c["webkit-text-emphasis-position"] = "over right";
        }
      }
    }
    return c;
  }
  function H3(a, b) {
    if (a.Zb && b.length === 0) {
      return 0;
    }
    a = 1;
    for (let c = 0; c < b.length; c++) {
      let d = b[c];
      if (typeof d.text === "string") {
        a += d.text.split("\n").length - 1;
        if (!d.append && c !== 0) {
          a++;
        }
      }
      if (d.j) {
        for (let e of d.j) {
          if (typeof e === "string") {
            a += e.split("\n").length - 1;
          }
        }
      }
    }
    return a;
  }
  function I3(a) {
    a = a.split("px");
    if (a.length > 0) {
      if (a = Number(a[0])) {
        return a;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }
  function pub(a, b, c) {
    if (b.length === 0 || c <= 0) {
      return [];
    }
    if (b.some(f => !!f.j && f.j.length > 0) && H3(a, b) > c) {
      var d = [];
      for (var e of b) {
        d.push(...kub(e));
      }
      b = d;
    }
    d = [];
    for (let f = b.length - 1; f >= 0; f--) {
      e = b[f];
      d.unshift(e);
      let h = H3(a, d);
      if (h > c) {
        d.shift();
        if (typeof e.text === "string") {
          a = e.text.split("\n");
          c = h - c;
          if (a.length - c > 0) {
            c = new G3(e.start, e.end - e.start, e.priority || 0, e.windowId, a.slice(c).join("\n"), e.append, e.pD);
            d.unshift(c);
          }
        }
        break;
      }
    }
    return d;
  }
  function rub(a, b, c, d) {
    a.sa = a.sa || !!c;
    qub(a, b.text, c || b.pD, b.append);
    if (b.j && b.A) {
      for (let e = 0; e < b.j.length; e++) {
        qub(a, b.j[e], d ? d[e] : c || b.A[e], true);
      }
    }
    a.L.push(b);
  }
  function uub(a) {
    if (a.K) {
      if (a.C) {
        sub(a);
      }
      var b = a.Va;
      if (b) {
        for (let d of a.ya) {
          let e = b.get(d);
          let f = e.xA;
          let h = e.RI;
          e.xA = null;
          let k = e.yK;
          var c;
          if ((c = k && h === e.oF) && !(c = f === k)) {
            a: {
              c = Object.keys(k);
              let l = Object.keys(f);
              if (c.length !== l.length) {
                c = false;
              } else {
                for (let m = 0; m < c.length; m++) {
                  let p = c[m];
                  if (p !== l[m] || k[p] !== f[p]) {
                    c = false;
                    break a;
                  }
                }
                c = true;
              }
            }
          }
          if (c) {
            e.yK = f;
          } else {
            d.style.cssText = "";
            g.Ue(d, f);
            if (h !== 0) {
              g.Ue(d, tub(h));
            }
            e.yK = f;
            e.oF = h;
          }
        }
        a.ya.length = 0;
      }
      while (a.B.children.length > a.Ha) {
        a.B.removeChild(a.B.lastElementChild);
      }
      a.K = false;
    }
  }
  function sub(a) {
    vub(a);
    for (var b = a.C; b.children.length > a.Ra;) {
      b.removeChild(b.lastElementChild);
    }
  }
  function wub(a) {
    if (a.C) {
      if (a.K) {
        sub(a);
      }
      var b = a.C;
      if (a.ub) {
        var c = a.j.textAlign;
        if (c === 0) {
          if (b = b.firstElementChild) {
            J3(a, b, 256);
          }
        } else if (c === 1 && (b = b.lastElementChild)) {
          J3(a, b, 512);
        }
      }
    }
    if (a.K && (b = a.B.children[a.Ha], a.Ha++, a.Ra = 0, b)) {
      a.C = b;
      return;
    }
    a.C = g.se("SPAN");
    g.Ue(a.C, {
      display: "block"
    });
    g.qo(a.C, "caption-visual-line");
    a.B.appendChild(a.C);
  }
  function J3(a, b, c) {
    a = a.Va?.get(b);
    if (a?.xA) {
      a.RI |= c;
    } else {
      g.Ue(b, tub(c));
      if (a) {
        a.oF |= c;
      }
    }
  }
  function xub(a, b) {
    var c = {
      display: "inline-block",
      "white-space": "pre-wrap"
    };
    Object.assign(c, oub(a, b));
    return c;
  }
  function yub(a, b, c) {
    if (a.K) {
      vub(a);
      var d = a.C.children[a.Ra] ?? null;
      a.Ra++;
      a.Fa = 0;
      a.Ka = d;
    } else {
      d = null;
    }
    var e = d;
    if (e) {
      if (!a.Va) {
        e.style.cssText = "";
      }
      d = e;
    } else {
      d = g.se("SPAN");
    }
    var f = d;
    b = c ? c.css : xub(a, b);
    if ((c = a.Va) && e !== null) {
      let h = c.get(f);
      if (!h) {
        h = {
          yK: null,
          oF: 0,
          xA: null,
          RI: 0
        };
        c.set(f, h);
      }
      if (!h.xA) {
        a.ya.push(f);
      }
      h.xA = b;
      h.RI = 0;
    } else {
      g.Ue(f, b);
      if (c && a.type !== 2) {
        c.set(f, {
          yK: b,
          oF: 0,
          xA: null,
          RI: 0
        });
      }
    }
    if (!e) {
      d.classList.add("ytp-caption-segment");
      a.C.appendChild(d);
    }
    e = a.K ? a.Ha : a.B.children.length;
    if (a.ub && e > 1) {
      e = a.j.textAlign;
      if (e === 0) {
        if (!d.previousElementSibling) {
          J3(a, d, 1);
        }
      } else if (e === 1) {
        J3(a, d, 2);
      }
    }
    if (d.previousElementSibling) {
      J3(a, d.previousElementSibling, 128);
      J3(a, d, 4);
    }
    return d;
  }
  function qub(a, b, c, d) {
    if (a.ta) {
      var e = a.ta;
      var f = c?.textEmphasis;
      var h = e.get(c);
      if (!h || h.textEmphasis !== f) {
        h = zub(a, c);
        h = {
          pD: h,
          css: xub(a, h),
          textEmphasis: f
        };
        e.set(c, h);
      }
      e = h;
    } else {
      e = null;
    }
    c = e ? e.pD : zub(a, c);
    if (f = !a.C) {
      wub(a);
    }
    h = a.za && a.X && (c === a.X || g.ec(c, a.X)) ? a.za : yub(a, c, e);
    var k = typeof b === "string";
    b = k ? b.split("\n") : [b];
    for (let p = 0; p < b.length; p++) {
      var l = p > 0 || !d;
      let q = b[p];
      if (l && !f) {
        wub(a);
        h = yub(a, c, e);
      } else if (l && f) {
        f = false;
      }
      if (q) {
        if (a.K) {
          var m = a;
          l = h;
          let u = l.childNodes[m.Fa] ?? null;
          m.Fa++;
          if (typeof q === "string" && u instanceof Text) {
            if (u.data !== q) {
              if (m.hh) {
                u.textContent = q;
              } else {
                u.data = q;
              }
            }
          } else {
            m = typeof q === "string" ? g.te(q) : q;
            if (u) {
              if (u !== m) {
                l.replaceChild(m, u);
              }
            } else {
              l.appendChild(m);
            }
          }
        } else {
          h.appendChild(k ? g.te(q) : q);
        }
        if (!k && q.tagName === "RUBY" && q.childElementCount === 4 && !g.XJ && !!g.Ye(q.children[2], "text-emphasis")) {
          l = a.D ? 16 : 8;
          if (g.Ye(q.children[2], "text-emphasis-position")) {
            l = a.D ? 64 : 32;
          }
          J3(a, h, l);
        }
      }
    }
    a.X = c;
    a.za = h;
  }
  function zub(a, b) {
    var c = {};
    Object.assign(c, a.j.Bf);
    Object.assign(c, b);
    Object.assign(c, a.Wf.Bf);
    if (a.hc) {
      c.backgroundOpacity = 0;
    }
    return c;
  }
  function Aub(a) {
    var b = a.Va;
    if (b) {
      for (let c of a.ya) {
        let d = b.get(c);
        if (d) {
          d.xA = null;
        }
      }
      a.ya.length = 0;
    }
  }
  function vub(a) {
    var b = a.Ka;
    if (b) {
      while (b.childNodes.length > a.Fa) {
        b.removeChild(b.lastChild);
      }
    }
    a.Ka = null;
  }
  function tub(a) {
    var b = Bub.get(a);
    if (!b) {
      b = {};
      for (let [c, d] of Cub) {
        let e = d;
        if (a & c) {
          Object.assign(b, e);
        }
      }
      Bub.set(a, b);
    }
    return b;
  }
  function Eub(a, b, c) {
    if (a === 255 && b === 255 || !a && !b) {
      return {
        ly: a,
        Kv: b,
        result: 0
      };
    }
    a = Dub[a];
    b = Dub[b];
    if (a & 128) {
      var d;
      if (d = !(b & 128)) {
        d = b;
        d = c.Qe() && c.Kv === d;
      }
      if (d) {
        return {
          ly: a,
          Kv: b,
          result: 1
        };
      }
    } else if (b & 128 && a >= 1 && a <= 31) {
      return {
        ly: a,
        Kv: b,
        result: 2
      };
    }
    return {
      ly: a,
      Kv: b,
      result: 3
    };
  }
  function Gub(a, b, c, d) {
    if (b === 255 && c === 255 || !b && !c) {
      if (++a.B === 45) {
        a.reset();
      }
      a.C.A.clear();
      a.D.A.clear();
    } else {
      a.B = 0;
      Fub(a.C, b, c, d);
    }
  }
  function Hub(a, b) {
    a.j.sort((c, d) => {
      var e = c.time - d.time;
      if (e === 0) {
        return c.order - d.order;
      } else {
        return e;
      }
    });
    for (let c of a.j) {
      a.time = c.time;
      if (c.type === 0) {
        Gub(a, c.KX, c.LX, b);
      } else if (c.type === 1 && a.A & 496) {
        Fub(a.D, c.KX, c.LX, b);
      }
    }
    a.j.length = 0;
  }
  function Mub(a, b) {
    switch (a) {
      case 0:
        return Iub[(b & 127) - 32];
      case 1:
        return Jub[b & 15];
      case 2:
        return Kub[b & 31];
      case 3:
        return Lub[b & 31];
    }
    return 0;
  }
  function K3(a, b) {
    if (a.style.type === 3) {
      var c = 0;
      var d = 0;
      var e = a.D.time + 0;
      var f = "";
      var h = "";
      var k = e;
      for (var l = 1; l <= 15; ++l) {
        var m = false;
        for (var p = d ? d : 1; p <= 32; ++p) {
          var q = a.B[l][p];
          if (q.j !== 0) {
            if (c === 0) {
              c = l;
              d = p;
            }
            m = String.fromCharCode(q.j);
            var u = q.timestamp;
            if (u < e) {
              e = u;
            }
            q.timestamp = k;
            if (h) {
              f += h;
              h = "";
            }
            f += m;
            m = true;
          }
          if ((q.j === 0 || p === 32) && m) {
            h = "\n";
            break;
          } else if (d && !m) {
            break;
          }
        }
        if (c && !m) {
          break;
        }
      }
      if (f) {
        b.C(c, d, e, k, f);
      }
    } else {
      d = c = 0;
      f = e = a.D.time + 0;
      h = 1;
      for (; h <= 15; ++h) {
        k = "";
        l = 1;
        for (; l <= 32; ++l) {
          p = a.B[h][l];
          q = p.j;
          if (q !== 0) {
            if (c === 0) {
              c = h;
              d = l;
            }
            m = String.fromCharCode(q);
            u = p.timestamp;
            if (u <= e) {
              e = u;
            }
            k += m;
            p.reset();
          }
          if (l === 32 || q === 0) {
            if (k) {
              b.C(c, d, e, f, k);
            }
            e = f;
            k = "";
            d = c = 0;
          }
        }
      }
    }
  }
  function L3(a) {
    return a.B[a.row][a.A];
  }
  function M3(a, b, c) {
    if (b >= 2 && a.A > 1) {
      --a.A;
      L3(a).j = 0;
    }
    var d = L3(a);
    d.timestamp = a.D.time + 0;
    d.j = Mub(b, c);
    if (a.A < 32) {
      a.A++;
    }
  }
  function Nub(a, b, c, d) {
    for (let h = 0; h < d; h++) {
      for (let k = 0; k <= 32; k++) {
        var e = a.B[b + h][k];
        var f = a.B[c + h][k];
        e.j = f.j;
        e.timestamp = f.timestamp;
      }
    }
  }
  function N3(a, b, c) {
    for (let d = 0; d < c; d++) {
      for (let e = 0; e <= 32; e++) {
        a.B[b + d][e].reset();
      }
    }
  }
  function O3(a) {
    a.row = a.j > 0 ? a.j : 1;
    a.A = 1;
    N3(a, 0, 15);
  }
  function Oub(a) {
    a.style.set(1);
    a.j = a.C;
    a.j.j = 0;
    a.j.style = a.style;
    a.B.mode = 1 << a.j.C;
  }
  function P3(a, b, c) {
    var d = a.A;
    var e = false;
    switch (a.style.get()) {
      case 4:
      case 1:
      case 2:
        if (a.style.get() !== 4 || !(d.j > 0)) {
          K3(d, c);
          O3(a.A);
          O3(a.C);
          d.row = 15;
          d.j = b;
          e = true;
        }
    }
    a.style.set(3);
    a.j = d;
    a.j.style = a.style;
    a.B.mode = 1 << d.C;
    if (e) {
      d.A = 1;
    } else if (d.j !== b) {
      if (d.j > b) {
        K3(d, c);
        N3(d, d.row - d.j, b);
      } else if (d.row < b) {
        b = d.j;
      }
      d.j = b;
    }
  }
  function Pub(a) {
    a.style.set(4);
    a.j = a.text;
    a.j.style = a.style;
    a.B.mode = 1 << a.j.C;
  }
  function Fub(a, b, c, d) {
    a.A.update();
    b = Eub(b, c, a.A);
    switch (b.result) {
      case 0:
        return;
      case 1:
      case 2:
        return;
    }
    var e = b.ly;
    b = b.Kv;
    if (e >= 32 || !e) {
      if (a.j.mode & a.j.A) {
        c = e;
        if (c & 128) {
          c = 127;
        }
        if (b & 128) {
          b = 127;
        }
        a = a.C.j;
        if (c & 96) {
          M3(a, 0, c);
        }
        if (b & 96) {
          M3(a, 0, b);
        }
        if (c !== 0 && b !== 0 && a.style.type === 3) {
          K3(a, d);
        }
      }
    } else if (e & 16) {
      a: if (!a.A.matches(e, b) && (c = a.A, c.ly = e, c.Kv = b, c.state = 2, c = e & 8 ? a.K : a.B, a.C = c, a.j.mode = 1 << (a.D << 2) + (c.D << 1) + (c.style.type === 4 ? 1 : 0), (a.j.mode | 1 << (a.D << 2) + (c.D << 1) + (c.style.type !== 4 ? 1 : 0)) & a.j.A)) {
        if (b & 64) {
          d = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(e & 7) << 1 | b >> 5 & 1];
          a = b & 16 ? ((b & 14) >> 1) * 4 : 0;
          b = c.j;
          switch (c.style.get()) {
            case 4:
              d = b.row;
              break;
            case 3:
              if (d !== b.row) {
                if (d < b.j && (d = b.j, d === b.row)) {
                  break;
                }
                var f = 1 + b.row - b.j;
                let h = 1 + d - b.j;
                Nub(b, h, f, b.j);
                c = f;
                e = b.j;
                if (h < f) {
                  f = h + e - f;
                  if (f > 0) {
                    c += f;
                    e -= f;
                  }
                } else {
                  f = f + e - h;
                  if (f > 0) {
                    e -= f;
                  }
                }
                N3(b, c, e);
              }
          }
          b.row = d;
          b.A = a + 1;
        } else {
          switch (e & 7) {
            case 1:
              switch (b & 112) {
                case 32:
                  M3(c.j, 0, 32);
                  break a;
                case 48:
                  if (b === 57) {
                    d = c.j;
                    L3(d).j = 0;
                    if (d.A < 32) {
                      d.A++;
                    }
                  } else {
                    M3(c.j, 1, b & 15);
                  }
              }
              break;
            case 2:
              if (b & 32) {
                M3(c.j, 2, b & 31);
              }
              break;
            case 3:
              if (b & 32) {
                M3(c.j, 3, b & 31);
              }
              break;
            case 4:
            case 5:
              if (b >= 32 && b <= 47) {
                switch (b) {
                  case 32:
                    Oub(c);
                    break;
                  case 33:
                    d = c.j;
                    if (d.A > 1) {
                      --d.A;
                      L3(d).j = 0;
                    }
                    break;
                  case 36:
                    d = c.j;
                    a = L3(d);
                    for (b = 0; b <= 15; b++) {
                      for (c = 0; c <= 32; c++) {
                        if (d.B[b][c] === a) {
                          for (; c <= 32; c++) {
                            d.B[b][c].reset();
                          }
                          break;
                        }
                      }
                    }
                    break;
                  case 37:
                    P3(c, 2, d);
                    break;
                  case 38:
                    P3(c, 3, d);
                    break;
                  case 39:
                    P3(c, 4, d);
                    break;
                  case 40:
                    M3(c.j, 0, 32);
                    break;
                  case 41:
                    d = c;
                    d.style.set(2);
                    d.j = d.A;
                    d.j.j = 0;
                    d.j.style = d.style;
                    d.B.mode = 1 << d.j.C;
                    break;
                  case 42:
                    d = c;
                    a = d.text;
                    a.j = 15;
                    a.style.set(4);
                    O3(a);
                    Pub(d);
                    break;
                  case 43:
                    Pub(c);
                    break;
                  case 44:
                    a = c;
                    b = a.A;
                    switch (a.style.get()) {
                      case 1:
                      case 2:
                      case 3:
                        K3(b, d);
                    }
                    N3(b, 0, 15);
                    break;
                  case 45:
                    b: {
                      b = c;
                      a = b.j;
                      switch (b.style.get()) {
                        default:
                        case 2:
                        case 1:
                          break b;
                        case 4:
                          if (a.row < 15) {
                            ++a.row;
                            a.A = 1;
                            break b;
                          }
                          break;
                        case 3:
                      }
                      if (a.j < 2) {
                        a.j = 2;
                        if (a.row < a.j) {
                          a.row = a.j;
                        }
                      }
                      b = a.row - a.j + 1;
                      K3(a, d);
                      Nub(a, b, b + 1, a.j - 1);
                      N3(a, a.row, 1);
                    }
                    break;
                  case 46:
                    N3(c.C, 0, 15);
                    break;
                  case 47:
                    a = c;
                    K3(a.A, d);
                    a.C.updateTime(a.B.time + 0);
                    d = a.C;
                    a.C = a.A;
                    a.A = d;
                    Oub(a);
                }
              }
              break;
            case 7:
              switch (b) {
                case 33:
                case 34:
                case 35:
                  d = c.j;
                  if ((d.A += b & 3) > 32) {
                    d.A = 32;
                  }
              }
          }
        }
      }
    }
  }
  function Rub(a, b, c, d, e, f, h) {
    var k = f[0];
    var l = h[k.getAttribute("p")];
    if (l.Yg === 1) {
      var m = f[1];
      var p = f[2];
      f = f[3];
      k.getAttribute("t");
      m.getAttribute("t");
      p.getAttribute("t");
      f.getAttribute("t");
      k.getAttribute("p");
      m.getAttribute("p");
      f.getAttribute("p");
      h = h[p.getAttribute("p")];
      k = Qub(k.textContent, m.textContent, p.textContent, f.textContent, h);
      return new G3(a, b, e, c, k, d, l);
    }
    switch (l.Yg) {
      case 9:
      case 10:
        l.textEmphasis = 1;
        break;
      case 11:
        l.textEmphasis = 2;
        break;
      case 12:
        l.textEmphasis = 3;
        break;
      case 13:
        l.textEmphasis = 4;
        break;
      case 14:
        l.textEmphasis = 5;
    }
    return new G3(a, b, e, c, k.textContent || "", d, l);
  }
  function Qub(a, b, c, d, e) {
    var f = g.Nq();
    var h = f ? g.se("DIV") : g.se("RUBY");
    var k = g.se("SPAN");
    k.textContent = a;
    h.appendChild(k);
    a = f ? g.se("DIV") : g.se("RP");
    a.textContent = b;
    h.appendChild(a);
    b = f ? g.se("DIV") : g.se("RT");
    b.textContent = c;
    h.appendChild(b);
    c = e.Yg;
    if (c === 10 || c === 11 || c === 12 || c === 13 || c === 14) {
      g.Ue(b, "text-emphasis-style", "filled circle");
      g.Ue(b, "text-emphasis-color", "currentcolor");
      g.Ue(b, "webkit-text-emphasis", "filled circle");
      if (e.Yg === 11 || e.Yg === 13) {
        g.Ue(b, "webkit-text-emphasis-position", "under left");
        g.Ue(b, "text-emphasis-position", "under left");
      }
    }
    c = true;
    if (e.Yg === 4 || e.Yg === 7 || e.Yg === 12 || e.Yg === 14) {
      g.Ue(h, "ruby-position", "over");
      g.Ue(h, "-webkit-ruby-position", "before");
    } else if (e.Yg === 5 || e.Yg === 6 || e.Yg === 11 || e.Yg === 13) {
      g.Ue(h, "ruby-position", "under");
      g.Ue(h, "-webkit-ruby-position", "after");
      c = false;
    }
    e = f ? g.se("DIV") : g.se("RP");
    e.textContent = d;
    h.appendChild(e);
    if (f) {
      d = c;
      g.Ue(h, {
        display: "inline-block",
        position: "relative"
      });
      f = h.firstElementChild.nextElementSibling;
      g.Ue(f, "display", "none");
      f = f.nextElementSibling;
      g.Ue(f, {
        "font-size": "0.5em",
        "line-height": "1.2em",
        "text-align": "center",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        width: "400%"
      });
      g.Ue(h.lastElementChild, "display", "none");
      if (d) {
        g.Ue(h, "padding-top", "0.6em");
        g.Ue(f, "top", "0");
      } else {
        g.Ue(h, "padding-bottom", "0.6em");
        g.Ue(f, "bottom", "0");
      }
    }
    return h;
  }
  function Sub(a) {
    var b = "_" + Q3++;
    return new R3(0, 2251799813685248, 0, b, a);
  }
  function S3(a) {
    if (a.params.rN != null) {
      a = a.params.rN;
    } else {
      var b;
      if (!(b = a.j.length > 1) && (b = a.j.length === 1)) {
        a = a.j[0];
        b = !!a.j && a.j.length > 0;
      }
      a = b ? 1 : 0;
    }
    return a;
  }
  function T3(a, b) {
    a = a.getAttribute(b);
    if (a != null) {
      return Number(a);
    }
  }
  function U3(a, b) {
    a = a.getAttribute(b);
    if (a != null) {
      return a === "1";
    }
  }
  function V3(a, b) {
    a = T3(a, b);
    if (a !== undefined) {
      return a;
    } else {
      return null;
    }
  }
  function X3(a, b) {
    a = a.getAttribute(b);
    if (a != null) {
      W3.test(a);
      return a;
    }
  }
  function Tub(a, b) {
    var c = {};
    var d = b.getAttribute("ws");
    Object.assign(c, d ? a.X[d] : a.C);
    a = V3(b, "mh");
    if (a != null) {
      c.rN = a;
    }
    a = V3(b, "ju");
    if (a != null) {
      c.textAlign = a;
    }
    a = V3(b, "pd");
    if (a != null) {
      c.zk = a;
    }
    a = V3(b, "sd");
    if (a != null) {
      c.aW = a;
    }
    a = X3(b, "wfc");
    if (a != null) {
      c.windowColor = a;
    }
    b = T3(b, "wfo");
    if (b !== undefined) {
      c.windowOpacity = b / 255;
    }
    return c;
  }
  function Uub(a, b) {
    var c = {};
    var d = b.getAttribute("wp");
    if (d) {
      Object.assign(c, a.U[d]);
    }
    a = V3(b, "ap");
    if (a != null) {
      c.fn = a;
    }
    a = T3(b, "cc");
    if (a != null) {
      c.Ov = a;
    }
    a = T3(b, "ah");
    if (a != null) {
      c.Fl = a;
    }
    a = T3(b, "rc");
    if (a != null) {
      c.xq = a;
    }
    b = T3(b, "av");
    if (b != null) {
      c.tp = b;
    }
    return c;
  }
  function Vub(a, b, c, d) {
    var e = {};
    Object.assign(e, Uub(a, b));
    Object.assign(e, Tub(a, b));
    if (d) {
      if (g.ec(e, a.C)) {
        d = a.D;
        e = a.C;
      } else {
        d = "_" + Q3++;
      }
    } else {
      d = b.getAttribute("id") || "_" + Q3++;
    }
    a = T3(b, "t") + c;
    b = T3(b, "d") || 2251799813685248;
    if (e.zk === 2 || e.zk === 3) {
      c = e.xq;
      e.xq = e.Ov;
      e.Ov = c;
    }
    return new R3(a, b, 0, d, e);
  }
  function Y3(a) {
    a = g.Pd(Math.round(a), 0, 16777215).toString(16).toUpperCase();
    return "#000000".substring(0, 7 - a.length) + a;
  }
  function Xub(a, b, c) {
    var d = [];
    for (let ya of b) {
      var e = (ya.tStartMs || 0) + c;
      var f = ya.dDurationMs || 0;
      if (ya.id) {
        b = String(ya.id);
        var h = Wub(a, ya, e, f, b);
        d.push(h);
        a.A.set(b, h);
      } else {
        var k = undefined;
        if (ya.wWinId) {
          b = ya.wWinId.toString();
          k = a.A.get(b);
        } else {
          b = "_" + Q3++;
          k = Wub(a, ya, e, f, b);
          d.push(k);
          if (!a.bL) {
            a.A.set(b, k);
          }
        }
        b = a;
        h = d;
        var l = ya;
        if (f === 0) {
          f = 5000;
        }
        let Oa = !!l.aAppend;
        let Sa = Oa ? 6 : 5;
        let Va = l.segs;
        let Vc = null;
        if (l.pPenId) {
          Vc = b.j.get(l.pPenId);
        }
        l = null;
        for (let Da = 0; Da < Va.length; Da++) {
          var m = Va[Da];
          var p = m.utf8;
          if (p) {
            var q = m.tOffsetMs || 0;
            var u = null;
            if (m.pPenId) {
              u = b.j.get(m.pPenId);
            }
            if (S3(k) === 2 && Oa && p === "\n") {
              continue;
            }
            m = null;
            var v = [];
            var z;
            if (z = u && u.Yg === 1) {
              a: {
                z = b;
                var F = Va;
                var M = Da;
                if (M + 3 >= F.length || !F[M + 1].pPenId || !F[M + 2].pPenId || !F[M + 3].pPenId) {
                  z = false;
                  break a;
                }
                var N = F[M + 1].pPenId;
                if ((N = z.j.get(N)) && N.Yg && N.Yg === 2) {
                  N = F[M + 2].pPenId;
                  N = z.j.get(N);
                  if (!N || !N.Yg || N.Yg < 3) {
                    z = false;
                  } else {
                    N = F[M + 3].pPenId;
                    N = z.j.get(N);
                    z = !!N && !!N.Yg && N.Yg === 2;
                  }
                } else {
                  z = false;
                }
              }
            }
            if (z) {
              q = Va[Da + 1].utf8;
              m = Va[Da + 3].utf8;
              z = Va[Da + 2].utf8;
              F = b.j.get(Va[Da + 2].pPenId);
              p = Qub(p, q, z, m, F);
              m = new G3(e, f, Sa, k.id, p, Oa, u);
              Da += 3;
            } else {
              if (p.indexOf("<") > -1) {
                v = b;
                z = u;
                F = Vc;
                M = e;
                N = f;
                var S = q;
                var R = Sa;
                var V = Oa;
                var X = k;
                let Tb = [];
                var ta = g.gZ(`<html>${p}</html>`);
                if (!ta.getElementsByTagName("parsererror").length && ta.firstChild?.childNodes.length) {
                  for (let Bc of ta.firstChild.childNodes) {
                    ta = Bc.textContent?.replace(/\n/g, "") ?? "";
                    if (Bc.nodeType === 3 && (!ta || ta.match(/^ *$/) != null)) {
                      continue;
                    }
                    let xd = {};
                    Object.assign(xd, z || F);
                    switch (Bc?.tagName) {
                      case "b":
                        xd.bold = true;
                        break;
                      case "i":
                        xd.italic = true;
                        break;
                      case "u":
                        xd.underline = true;
                    }
                    Tb.push(new G3(M + S, N - S, R, X.id, v.shareText(ta), V, xd));
                  }
                }
                v = Tb;
              }
              if (!v.length) {
                u = u || Vc;
                if (b.CF && l && l.start === e + q && l.end === e + f) {
                  jub(l, b.shareText(p), u);
                } else {
                  v = [new G3(e + q, f - q, Sa, k.id, b.shareText(p), Oa, u)];
                }
              }
            }
            if (v.length) {
              for (let Tb of v) {
                h.push(Tb);
                k.j.push(Tb);
              }
              l = v[v.length - 1];
            } else if (m) {
              h.push(m);
              k.j.push(m);
              l = m;
            }
          }
          Oa = true;
        }
      }
    }
    return d;
  }
  function Wub(a, b, c, d, e) {
    if (d === 0) {
      d = 2251799813685248;
    }
    var f = {};
    if (b.wpWinPosId) {
      Object.assign(f, a.C.get(b.wpWinPosId));
    }
    if (b.wsWinStyleId) {
      Object.assign(f, a.D.get(b.wsWinStyleId));
    }
    a = b.rcRowCount;
    if (a !== undefined) {
      f.xq = a;
    }
    b = b.ccColCount;
    if (b !== undefined) {
      f.Ov = b;
    }
    if (f.zk === 2 || f.zk === 3) {
      b = f.xq;
      f.xq = f.Ov;
      f.Ov = b;
    }
    return new R3(c, d, 0, e, f);
  }
  function Z3(a) {
    var b = a.byteOffset;
    a.byteOffset += 1;
    return a.j.getUint8(b);
  }
  function $3(a) {
    var b = a.byteOffset;
    a.byteOffset += 4;
    return a.j.getUint32(b);
  }
  function $ub(a) {
    if (typeof a === "string") {
      return false;
    }
    a = new Yub(a, 0);
    return Zub(a);
  }
  function Zub(a) {
    if (!(a.byteOffset < a.j.byteLength) || $3(a) !== 1380139777) {
      return false;
    }
    a.version = Z3(a);
    if (a.version > 1) {
      return false;
    }
    Z3(a);
    Z3(a);
    Z3(a);
    return true;
  }
  function avb(a, b) {
    if (!b) {
      return "";
    }
    if (a.D && a.A.params.aW !== 1) {
      b *= -1;
    }
    return `translate${a.D ? "X" : "Y"}(${b}px)`;
  }
  function bvb(a) {
    a.Xa = Array.from(a.element.getElementsByClassName("caption-visual-line"));
    for (var b = a.A.params.xq, c = 0, d = 0, e = a.Xa.length - 1; c < b && e > -1;) {
      var f = a.Xa[e];
      d += a.D ? f.offsetWidth : f.offsetHeight;
      c++;
      e--;
    }
    a.ha = d;
    b = Math;
    c = b.max;
    if (isNaN(a.bb)) {
      if (d = a.j.Ov) {
        e = g.se("SPAN");
        g.ze(e, "–".repeat(d));
        g.Ue(e, oub(a, a.j.Bf));
        a.B.appendChild(e);
        a.bb = e.offsetWidth;
        a.B.removeChild(e);
      } else {
        a.bb = 0;
      }
    }
    d = a.B;
    a.la = Math.min(c.call(b, a.bb, a.te, (a.D ? d.offsetHeight : d.offsetWidth) + 1), a.maxWidth);
  }
  function cvb(a, b) {
    bvb(a);
    var c = a.Xa.reduce((d, e) => (a.D ? e.offsetWidth : e.offsetHeight) + d, 0);
    c = a.ha - c;
    if (c !== a.qb) {
      let d = c > 0 && a.qb === 0;
      let e = c < a.qb;
      if (!b && !isNaN(c) && !d && !!e) {
        g.qo(a.element, "ytp-rollup-mode");
        a.V(a.element, "transitionend", a.uc);
      }
      g.Ue(a.B, "transform", avb(a, c));
      a.qb = c;
    }
    bvb(a);
  }
  function evb(a, b = g.wH(a, 1836019558)) {
    var c = b.map((h, k) => k * 1000);
    if (!b.length) {
      return c;
    }
    var d = dvb(a, b[0]);
    if (d === null) {
      return c;
    }
    var e = g.rH(a, 0, 1836476516);
    var f = e && g.sH(e) || 90000;
    return b.map((h, k) => {
      h = dvb(a, h);
      if (h === null) {
        return c[k];
      } else {
        return (h - d) / f * 1000;
      }
    });
  }
  function dvb(a, b) {
    var c = b.offset + b.size;
    b = g.rH(a, b.dataOffset, 1953653094);
    if (!b || b.offset >= c) {
      return null;
    }
    c = b.offset + b.size;
    a = g.rH(a, b.dataOffset, 1952867444);
    if (!a || a.offset >= c) {
      return null;
    } else {
      return g.vH(a);
    }
  }
  function kvb(a, b) {
    a.A = (c, d) => {
      if (a.J.O().experiments.Ua("html5_sabr_live_support_subfragmented_captions")) {
        a: {
          var e = null;
          if (a.j) {
            e = a.j.C(c);
            if (!e) {
              g.zB(a.logger, 350058965, `Discontinuous caption slice: accumulated ${a4(a.j)}, received ${a4(c)}`);
              a.j = null;
            }
          }
          if (!e) {
            if (c.info.j) {
              if (d = a.C) {
                d = a.C;
                e = c.info;
                d = d.pa === e.pa && d.Ea === e.Ea;
              }
              if (!d) {
                a.C = c.info;
                g.zB(a.logger, 350058965, `Dropping caption slice without segment start: ${a4(c)}`);
              }
              break a;
            }
            a.C = null;
            e = c;
            fvb(e);
          }
          a.j = e;
          if (c.info.ye) {
            gvb(e);
            hvb(a, e);
            d(a.xc);
            a.j = null;
          }
          ivb(a, e, b);
        }
      } else if (c.info.ye) {
        e = c;
        if (a.So.length > 0) {
          for (e = a.So.shift(); a.So.length > 0;) {
            e = e?.C(a.So.shift());
          }
          e = e?.C(c);
        }
        if (e) {
          fvb(e);
          gvb(e);
          c = e;
          hvb(a, c);
          d(a.xc);
          d = g.pI(c);
          jvb(a.D, d.buffer.slice(d.byteOffset, d.byteLength + d.byteOffset), b, c.info.B);
        } else {
          g.zB(a.logger, 350058965, "Empty slice");
        }
      } else {
        a.So.push(c);
      }
    };
    a.J.addEventListener("sabrCaptionsDataLoaded", a.A);
  }
  function hvb(a, b) {
    var {
      formatId: c,
      Ea: d,
      startTimeMs: e,
      durationMs: f
    } = a.wG(b);
    b = {
      formatId: c,
      startTimeMs: e,
      durationMs: f,
      Sf: d,
      Ld: d
    };
    var h = lvb(a.xc, b.startTimeMs);
    var k = h >= 0 ? a.xc[h] : null;
    var l = k ? k.startTimeMs + k.durationMs : 0;
    var m = b.startTimeMs + b.durationMs;
    if (!k || b.startTimeMs - l > a.K) {
      a.xc.splice(h + 1, 0, b);
    } else {
      k.durationMs = Math.max(l, m) - k.startTimeMs;
      k.Ld = Math.max(k.Ld, b.Ld);
    }
  }
  function ivb(a, b, c) {
    var d = mvb(a, b.info);
    var e = g.pI(b);
    var f = g.wH(e, 1836019558);
    var h = g.wH(e, 1835295092);
    if (f.length && h.length) {
      var k = f[0].offset;
      h = h[h.length - 1];
      var l = Math.max(d.A0, k);
      h = h.offset + h.size;
      var m = f.findIndex(p => p.offset >= l);
      if (!(h <= l) && !(m < 0)) {
        d.A0 = h;
        d = new Uint8Array(k + h - l);
        d.set(new Uint8Array(e.buffer, e.byteOffset, k));
        d.set(new Uint8Array(e.buffer, e.byteOffset + l, h - l), k);
        e = evb(e, f)[m];
        jvb(a.D, d.buffer, c, b.info.B + e / 1000);
      }
    }
  }
  function mvb(a, b) {
    var c = a.B.findIndex(e => e.pa === b.pa && e.Ea === b.Ea);
    var d;
    if (c >= 0) {
      d = a.B.splice(c, 1)[0];
    } else {
      d = {
        pa: b.pa,
        Ea: b.Ea,
        A0: 0
      };
    }
    a.B.push(d);
    if (a.B.length > 4) {
      a.B.shift();
    }
    return d;
  }
  function lvb(a, b) {
    a = g.Hb(a, {
      startTimeMs: b
    }, (c, d) => c.startTimeMs - d.startTimeMs);
    if (a >= 0) {
      return a;
    } else {
      return -a - 2;
    }
  }
  function fvb(a) {
    try {
      var b = g.sI(a) * 1000;
    } catch (c) {
      b = a.info.segmentStartTime * 1000;
    }
    if (b < 0) {
      b = a.info.segmentStartTime * 1000;
    }
    a.info.segmentStartTime = b / 1000;
    a.info.B = b / 1000;
  }
  function gvb(a) {
    try {
      var b = g.XHa(a) * 1000;
    } catch (c) {
      b = a.info.je * 1000;
    }
    if (b < 0) {
      b = a.info.je * 1000;
    }
    a.info.je = b / 1000;
    a.info.K = b / 1000;
  }
  function a4(a) {
    a = a.info;
    return `${a.pa.info.id}/seg=${a.Ea}/offset=${a.j}/length=${a.A}/eos=${a.ye}`;
  }
  function nvb(a, b) {
    if (!g.INa(a) || a.j != null && g.DT(b, a.j) && a.j.j.rawcc != null) {
      return false;
    }
    b = !!a.j && a.j.isManifestless && Object.values(a.j.j).some(c => g.ET(c, "386"));
    a = !!a.j && !a.j.isManifestless && g.wIa(a.j);
    return b || a;
  }
  function jvb(a, b, c, d) {
    if (a.ga) {
      if (a.U == null) {
        g.zB(a.logger, 350058965, "Null loaded track meta data at captions data received");
      } else {
        c.jx(b, a.U, d * 1000);
      }
    } else {
      g.zB(a.logger, 350058965, "Null Representation at captions data received");
    }
  }
  function ovb(a, b, c) {
    var d = [];
    for (let e in a.A.j) {
      if (!a.A.j.hasOwnProperty(e)) {
        continue;
      }
      let f = a.A.j[e];
      if (g.ET(f, c || null)) {
        let h = f.info.captionTrack;
        if (h && h.languageCode === b) {
          d.push(f);
        }
      }
    }
    if (d.length) {
      return d[0];
    } else {
      return null;
    }
  }
  function pvb(a, b) {
    var c = [];
    for (let e in a.A.j) {
      if (!a.A.j.hasOwnProperty(e)) {
        continue;
      }
      var d = a.A.j[e];
      if (g.ET(d, b || null)) {
        let f = d.info.id;
        let h = f;
        let k = `.${f}`;
        let l = "";
        let m = "";
        if (d = d.info.captionTrack) {
          f = d.languageCode;
          h = d.displayName;
          k = d.vssId;
          l = d.kind;
          m = d.id;
        }
        c.push(new g.CG({
          id: e,
          languageCode: f,
          languageName: h,
          is_servable: true,
          is_default: true,
          is_translateable: false,
          vss_id: k,
          kind: l,
          captionId: m
        }));
      }
    }
    return c;
  }
  function rvb(a) {
    var b = qvb.length;
    if (a.byteLength < b) {
      return false;
    }
    a = new Uint8Array(a, 0, b);
    for (let c = 0; c < b; c++) {
      if (qvb[c] !== a[c]) {
        return false;
      }
    }
    return true;
  }
  function b4(a) {
    a = a.split(":");
    var b = 0;
    for (let c of a) {
      b = b * 60 + Number(c);
    }
    return b * 1000;
  }
  function svb(a, b, c, d) {
    d = Object.assign({
      rN: 0
    }, d);
    return new R3(a, b, c, "_" + Q3++, d);
  }
  function tvb(a, b, c, d, e, f, h, k, l) {
    switch (h.tagName) {
      case "b":
        k.bold = true;
        break;
      case "i":
        k.italic = true;
        break;
      case "u":
        k.underline = true;
    }
    for (let p = 0; p < h.childNodes.length; p++) {
      var m = h.childNodes[p];
      if (m.nodeType === 3) {
        m = new G3(b, c, d, e.id, m.nodeValue, f || p > 0, g.bc(k) ? undefined : k);
        l.push(m);
        e.j.push(m);
      } else {
        let q = {};
        Object.assign(q, k);
        tvb(a, b, c, d, e, true, m, q, l);
      }
    }
  }
  function vvb(a, b, c) {
    if (typeof b === "string" || $ub(b)) {
      return [{
        trackData: b,
        UO: c
      }];
    }
    if (typeof b === "string" && b.substring(0, 6) === "WEBVTT" || typeof b !== "string" && rvb(b)) {
      return [{
        trackData: b,
        UO: c
      }];
    }
    var d = new DataView(b);
    if (d.byteLength <= 8 || d.getUint32(4) !== 1718909296) {
      return [];
    }
    var e = g.fHa(d);
    if (a.sc && e) {
      var f = g.lH(e);
      var h = g.mH(e);
      e = e.segmentNumber;
      if (f && e) {
        a.sc.FJ(e, f, h);
      }
    }
    a = g.wH(d, 1835295092);
    if (!a || !a.length || !a[0].size) {
      return [];
    }
    f = [];
    for (h = 0; h < a.length; h++) {
      e = a[h];
      e = new Uint8Array(b, e.dataOffset, e.size - (e.dataOffset - e.offset));
      e = g.Ux(e);
      f.push({
        trackData: e,
        UO: c + h * 1000
      });
    }
    uvb(d, f, c);
    return f = f.filter(k => !!k.trackData);
  }
  function xvb(a, b, c) {
    a.j ||= new wvb();
    a = a.j.B(b, c);
    if (Math.random() < 0.01) {
      g.Fu(Error("Deprecated subtitles format in web player: WebVTT"));
    }
    return a;
  }
  function uvb(a, b, c) {
    a = evb(a);
    var d = Math.min(a.length, b.length);
    for (let e = 0; e < d; e++) {
      b[e].UO = c + a[e];
    }
  }
  function yvb(a) {
    var b = {};
    if (a = g.FG(a)) {
      b.lang = a;
      if (g.Veb.test(a)) {
        b.zk = 1;
      }
    }
    return b;
  }
  function c4(a) {
    if (a.B === "HLS" && a.zb) {
      return true;
    } else {
      return a.ya && a.zb && a.B !== "LIVE" && a.B !== "SABR_LIVE";
    }
  }
  function zvb(a) {
    return !a.C && a.ya && a.fb && (a.B === "LIVE" || a.B === "SABR_LIVE");
  }
  function d4(a, b, c = false) {
    var d = a.Z.N("enable_player_captions_new_style_defaults") ? Avb : Bvb;
    var e = d.Bf;
    a.Zf = {};
    Object.assign(a.Zf, d);
    a.Zf.Bf = {};
    Object.assign(a.Zf.Bf, e);
    a.D = {
      Bf: {}
    };
    var f = b.backgroundOverride ? a.D : a.Zf;
    var h = b.background || e.background;
    W3.test(h);
    f.Bf.background = h;
    f = b.colorOverride ? a.D : a.Zf;
    h = b.color || e.color;
    W3.test(h);
    f.Bf.color = h;
    f = b.windowColorOverride ? a.D : a.Zf;
    h = b.windowColor || d.windowColor;
    W3.test(h);
    f.windowColor = h;
    f = b.backgroundOpacityOverride ? a.D : a.Zf;
    h = b.backgroundOpacity;
    if (h == null) {
      h = e.backgroundOpacity;
    }
    f.Bf.backgroundOpacity = h;
    f = b.fontSizeIncrementOverride ? a.D : a.Zf;
    h = b.fontSizeIncrement;
    if (h == null) {
      h = e.fontSizeIncrement;
    }
    f.Bf.fontSizeIncrement = h;
    h = b.fontStyleOverride ? a.D : a.Zf;
    f = b.fontStyle;
    if (f == null) {
      f = e.bold && e.italic ? 3 : e.bold ? 1 : e.italic ? 2 : 0;
    }
    h = h.Bf;
    switch (f) {
      case 1:
        h.bold = true;
        delete h.italic;
        break;
      case 2:
        delete h.bold;
        h.italic = true;
        break;
      case 3:
        h.bold = true;
        h.italic = true;
        break;
      default:
        delete h.bold;
        delete h.italic;
    }
    f = b.textOpacityOverride ? a.D : a.Zf;
    h = b.textOpacity;
    if (h == null) {
      h = e.textOpacity;
    }
    f.Bf.textOpacity = h;
    f = b.windowOpacityOverride ? a.D : a.Zf;
    h = b.windowOpacity;
    if (h == null) {
      h = d.windowOpacity;
    }
    f.windowOpacity = h;
    d = b.charEdgeStyleOverride ? a.D : a.Zf;
    f = b.charEdgeStyle;
    if (f == null) {
      f = e.charEdgeStyle;
    }
    d.Bf.charEdgeStyle = f;
    d = b.fontFamilyOverride ? a.D : a.Zf;
    f = b.fontFamily;
    if (f == null) {
      f = e.fontFamily;
    }
    d.Bf.fontFamily = f;
    if (a.loaded) {
      a.ub();
    }
    if (c) {
      g.kr("yt-player-caption-display-settings", b, 2592000);
    }
  }
  function e4(a, b, c) {
    if (b && !a.fa) {
      b = Sub({
        zk: 0,
        lang: "id"
      });
      a.fa = [b, new G3(b.start, b.end - b.start, 0, b.id, c ?? "Subtitel akan terlihat seperti ini")];
      a.player.qf(a.fa);
    } else if (!b && a.fa) {
      Cvb(a, a.fa);
      a.fa = null;
    }
  }
  function Evb(a) {
    if (a.Z.N("enable_player_captions_persistence_state_machine")) {
      var b = g.lr("yt-player-caption-persistence");
      if (b == null) {
        let c = g.sr().Ca(65);
        if (c === true) {
          b = false;
        } else {
          let d = g.RJ(a.Z) ? f4(a) : Dvb(a);
          if (d != null) {
            b = !!d;
          } else if (c === false) {
            b = true;
          }
        }
        if (b !== undefined) {
          g4(a, b);
        }
      }
      return b;
    }
  }
  function f4(a) {
    if (!a.J.isInline()) {
      return g.lr("yt-player-sticky-caption");
    }
  }
  function Dvb(a) {
    if (!a.storage) {
      return null;
    }
    try {
      var b = a.storage.get("module-enabled");
    } catch (c) {
      a.storage.remove("module-enabled");
    }
    return b;
  }
  function h4(a) {
    if (a.Z.N("enable_player_captions_persistence_state_machine")) {
      return Evb(a);
    }
    var b = undefined;
    var c = g.sr().Ca(65);
    if (g.RJ(a.Z) && c != null) {
      if (f4(a) != null) {
        return false;
      }
      b = !c;
    }
    return b;
  }
  function Fvb(a) {
    if (a.Z.Un === 1 || a.videoData.Wn === 1 || g.kL(a.videoData, "yt:cc") === "alwayson") {
      return true;
    }
    if (a.videoData.captionTracks.length) {
      var b = a.getAudioTrack().B;
    }
    if (a.Z.N("enable_player_captions_persistence_state_machine")) {
      var c = Evb(a);
      if (c !== undefined) {
        return !!c;
      }
    } else if (a.Z.Un === 2 && (g.RJ(a.Z) ? c = f4(a) : c = Dvb(a), c != null)) {
      return !!c;
    }
    c = D3(a.player.getAudioTrack(), g.RJ(a.Z));
    var d = g.kL(a.videoData, "yt:cc");
    if (h4(a) === undefined) {
      if (c === "CAPTIONS_INITIAL_STATE_ON_RECOMMENDED") {
        if (d) {
          return d === "on";
        } else {
          return true;
        }
      }
      if (c === "CAPTIONS_INITIAL_STATE_OFF_RECOMMENDED") {
        return d === "on";
      }
    } else {
      return d === "on";
    }
    return b === "ON" || g.kL(a.videoData, "yt:cc") === "on";
  }
  function i4(a, b = false) {
    if (a.A && !b || !a.videoData.captionTracks.length) {
      return false;
    }
    a = a.getAudioTrack();
    return !!a.j || a.B === "FORCED_ON";
  }
  function Gvb(a, b) {
    if (a.A) {
      var c = a.J.Qc().xb().textTracks;
      var d = null;
      if (a.B === "HLS") {
        d = a.A.getId();
      } else {
        d = a.A.toString();
      }
      for (let f = 0; f < c.length; f++) {
        var e = c[f];
        if (e.id === d) {
          if (b) {
            if (e.mode !== "showing") {
              e.mode = "showing";
              e = a.A;
              a.Jh(e, !!e, j4(a) ? "g" : a.L ? "m" : "s");
            }
          } else if (e.mode === "showing") {
            e.mode = "disabled";
          }
        }
      }
    }
  }
  function j4(a) {
    var b = k4(a);
    return !!b && a.A === b;
  }
  function Hvb(a, b) {
    if (a.B === "HLS") {
      return false;
    }
    if (g.vL(a.videoData)) {
      b = true;
    }
    b ||= a.B === "TTS" ? false : a.B !== "INNERTUBE";
    if (b || a.Z.N("web_watch_disable_account_level_captions_settings") && g.RJ(a.Z)) {
      return true;
    } else {
      return !!g.sr().Ca(66);
    }
  }
  function k4(a) {
    return a.X && a.X.j;
  }
  function l4(a, b) {
    if (!a.j) {
      return null;
    }
    if (a.X && a.X.C) {
      return a.X.C;
    }
    b = Hvb(a, b);
    b = g.hT(a.j.j, b);
    var c = null;
    if (Wtb(a.Z)) {
      var d = a.J.isInline() ? undefined : g.lr("yt-player-caption-sticky-language");
      var e = [d, a.videoData.captionsLanguagePreference, a.Z.captionsLanguagePreference, g.kL(a.videoData, "yt:cc_default_lang")];
      let k = false;
      for (let l = 0; l < e.length; l++) {
        let m = e[l];
        if (m) {
          k = true;
          for (var f = 0; f < b.length; f++) {
            if (g.FG(b[f]) === m) {
              return b[f];
            }
          }
          for (f = 0; f < b.length; f++) {
            if (g.FG(b[f]).split("-")[0] === m.split("-")[0]) {
              return b[f];
            }
          }
        }
      }
      if (k && a.j && (e = a.j.X, e.length)) {
        for (var h of e) {
          if (h.languageCode === d) {
            c = h;
            break;
          }
        }
      }
    } else {
      h = [a.videoData.captionsLanguagePreference, a.Z.captionsLanguagePreference, g.kL(a.videoData, "yt:cc_default_lang")];
      d = 0;
      for (; d < h.length; d++) {
        for (e = 0; e < b.length; e++) {
          if (g.FG(b[e]) === h[d]) {
            return b[e];
          }
        }
      }
    }
    h = null;
    if (a.X && a.X.A) {
      h = a.X.A;
    }
    h ||= b.find(k => k.isDefault) || null;
    h ||= b[0] || k4(a);
    if (h && c && g.FG(h).split("-")[0] !== c.languageCode.split("-")[0]) {
      h = Vtb(h, c);
    }
    return h;
  }
  function Ivb(a, b) {
    var c = g.hT(a.j.j, true);
    var d = [];
    for (let e = 0; e < c.length; e++) {
      let f = c[e];
      let h = g.se("TRACK");
      h.setAttribute("kind", "subtitles");
      h.setAttribute("label", g.EG(f));
      h.setAttribute("srclang", g.FG(f));
      h.setAttribute("id", f.toString());
      if (!a.ha) {
        h.setAttribute("src", a.j.L(f, "vtt"));
      }
      if (f === b) {
        h.setAttribute("default", "1");
      }
      d.push(h);
    }
    b = a.J.Qc();
    b.fa(d);
    d = b.xb();
    if (a.fb) {
      if (a.Z.Ja().j.Ca(g.o_) && a.ta) {
        a.ba.ud(a.ta);
        a.ta = null;
      }
      a.ta = a.ba.V(d.textTracks, "change", a.uc);
    }
  }
  function p4(a, b, c) {
    if (a.loaded) {
      a.unload();
    }
    if (c != null) {
      a.L = c;
      if (a.L) {
        if (a.Z.N("enable_player_captions_persistence_state_machine")) {
          g4(a, !!b);
        } else if (g.RJ(a.Z)) {
          m4(a, !!b);
        } else {
          n4(a, !!b);
        }
      }
    }
    if (b === null && !i4(a, true)) {
      a.Jh(b, !!b, a.L ? "m" : "s");
    }
    a.A = b;
    if (i4(a)) {
      a.A = k4(a);
    }
    o4(a, a.A ?? undefined);
    a.load();
  }
  function g4(a, b) {
    if (a.Z.N("enable_player_captions_persistence_state_machine")) {
      g.kr("yt-player-caption-persistence", b, 3122064000);
    }
  }
  function m4(a, b) {
    if (!a.J.isInline()) {
      g.kr("yt-player-sticky-caption", b, 2592000);
    }
  }
  function n4(a, b) {
    if (a.storage) {
      try {
        a.storage.set("module-enabled", b);
      } catch (c) {}
    }
  }
  function o4(a, b) {
    if (a.Z.N("html5_modify_caption_vss_logging")) {
      a.videoData.Qq = b;
    }
  }
  function Jvb(a, b) {
    var c = b.windowId;
    a.la[c] ||= [];
    a.la[c].push(b);
  }
  function Nvb(a, b) {
    var c = a.U[b.id];
    if (c && c.A !== b) {
      if (Kvb(a, c, b)) {
        Lvb(a, c, b);
        return;
      }
      c.dispose();
      delete a.U[b.id];
      a.Ka.delete(b.id);
      c = null;
    }
    if (!c) {
      a: {
        if (a.Z.Ja().j.Ca(g.m_)) {
          for (d of Object.keys(a.U)) {
            c = a.U[d];
            if (!a.la[d] && Kvb(a, c, b)) {
              var d = c;
              break a;
            }
          }
        }
        d = null;
      }
      if (d) {
        Lvb(a, d, b);
      } else if (d = Mvb(a, b)) {
        a.U[b.id] = d;
      }
    }
  }
  function Ovb(a) {
    for (let b of a.jb) {
      if (a.la[b.id]) {
        Nvb(a, b);
      }
    }
    a.jb.length = 0;
  }
  function Kvb(a, b, c) {
    if (!a.Z.Ja().j.Ca(g.m_)) {
      return false;
    }
    var d = q4(a);
    if (!d) {
      return false;
    }
    Pvb(a, c);
    var e = a.Va.getPlayerSize();
    var f = d.width;
    d = d.height;
    var h = e.width * a.ga.width;
    e = e.height * a.ga.height;
    a = a.J.isInline();
    var k = b.gh;
    return !!k && b.type !== 2 && S3(c) === b.type && g.ec(c.params, b.A.params) && f === k.videoWidth && d === k.videoHeight && h === b.jb && e === b.fb && a === k.isInline && g.ec(b.Zf, k.Zf) && !g.po(b.element, "ytp-dragging");
  }
  function Lvb(a, b, c) {
    delete a.U[b.A.id];
    b.A = c;
    b.element.id = `caption-window-${c.id}`;
    a.U[c.id] = b;
    a.Ka.add(c.id);
  }
  function Mvb(a, b) {
    var c = q4(a);
    if (!c) {
      return null;
    }
    Pvb(a, b);
    var d = a.Va.getPlayerSize();
    var e = d.height * a.ga.height;
    d = d.width * a.ga.width;
    switch (S3(b)) {
      case 1:
        return new Qvb(b, a.Zf, a.D, c.width, c.height, d, e, a.Z.experiments, a.Xa.bind(a), a.J);
      case 2:
        return new Rvb(b, a.Zf, a.D, c.width, c.height, d, e, a.Z.experiments, a.Xa.bind(a), a.J);
      default:
        return new r4(b, a.Zf, a.D, c.width, c.height, d, e, a.Z.experiments, a.Xa.bind(a), a.J);
    }
  }
  function q4(a) {
    var b = a.Va.getVideoContentRect(true).height;
    var c = a.Va.getVideoContentRect(true).width;
    if (!b || !c) {
      return null;
    }
    b *= a.ga.height;
    c *= a.ga.width;
    return {
      width: c,
      height: b
    };
  }
  function Pvb(a, b) {
    var c = a.A ? g.FG(a.A) : null;
    if (c && g.Veb.test(c)) {
      b.params.zk = 1;
    }
    if (a.Z.playerStyle === "google-live" && !a.Zf.isDefault) {
      Object.assign(b.params, a.Zf);
    }
  }
  function Cvb(a, b) {
    a.player.Vj(b);
    for (let c of b) {
      g.wb(a.sa, c);
    }
    C3(a.za);
  }
  function Svb(a, b) {
    a = a.K.element;
    var c = null;
    for (let e = b.length - 1; e >= 0; e--) {
      var d = b[e];
      if (d.oa()) {
        continue;
      }
      d = d.element;
      if (d.parentNode !== a || d.nextSibling !== c) {
        a.insertBefore(d, c);
      }
      c = d;
    }
  }
  function Tvb(a, b) {
    if (!a.j) {
      return {};
    }
    if (b) {
      if (!g.bc(b)) {
        a.ri(b.vss_id, "m");
      }
      if (a.C && a.B !== "HLS" || !g.Na(b)) {
        return;
      }
      if (g.bc(b)) {
        p4(a, null, true);
        return;
      }
      let d;
      var c = g.hT(a.j.j, true);
      for (let e = 0; e < c.length; e++) {
        let f = c[e];
        if (f.languageCode === b.languageCode && (!d || f.languageName === b.languageName && (f.captionId || "") === (b.captionId || "") && g.EG(f) === b.displayName)) {
          d = b.translationLanguage ? Vtb(f, b.translationLanguage) : f;
        }
      }
      a.EJ(b.position);
      if (!!d && (d !== a.A || !a.loaded)) {
        b = g.wG();
        c = g.FG(d);
        if (!b.length || c !== b[b.length - 1]) {
          b.push(c);
          g.kr("yt-player-caption-language-preferences", b);
        }
        if (Wtb(a.Z) && !a.J.isInline()) {
          g.kr("yt-player-caption-sticky-language", c, 2592000);
        }
        p4(a, d, true);
      }
    } else if (a.loaded && a.A && !j4(a)) {
      return a.A.j();
    } else {
      return {};
    }
    return "";
  }
  g.n2.prototype.FJ = g.da(67, function (a, b, c) {
    this.A.set(a, {
      Ey: b,
      kF: c
    });
  });
  g.o2.prototype.FJ = g.da(66, function (a, b, c) {
    this.ba.FJ(a, b, c);
  });
  g.$1.prototype.ba = g.da(65, function () {
    return false;
  });
  g.$1.prototype.D = g.da(64, function () {});
  g.a2.prototype.D = g.da(63, function (a, b, c) {
    this.oa();
    this.B();
    Utb(this, a, b, c);
  });
  g.b2.prototype.D = g.da(62, function (a, b, c) {
    this.oa();
    b = this.L(a, b);
    this.B();
    this.A = g.pq(b, {
      format: "RAW",
      onSuccess: d => {
        this.A = null;
        var e = d.getResponseHeader && d.getResponseHeader("Content-Length") ? Number(d.getResponseHeader("Content-Length")) : 0;
        c.jx(d.responseText, a, undefined, undefined, e);
      },
      withCredentials: true
    });
  });
  g.aW.prototype.U = g.da(61, function () {
    this.mediaElement.U();
  });
  g.PV.prototype.U = g.da(60, function () {
    var a = g.ge(document, "track", undefined, this.j);
    for (let b = 0; b < a.length; b++) {
      g.xe(a[b]);
    }
  });
  g.aW.prototype.Ha = g.da(59, function () {
    return this.mediaElement.Ha();
  });
  g.PV.prototype.Ha = g.da(58, function () {
    return !!this.j.textTracks && !!this.j.textTracks.addEventListener;
  });
  g.aW.prototype.Fa = g.da(57, function () {
    return this.mediaElement.Fa();
  });
  g.PV.prototype.Fa = g.da(56, function () {
    return !!this.j.textTracks;
  });
  g.aW.prototype.fa = g.da(55, function (a) {
    this.mediaElement.fa(a);
  });
  g.PV.prototype.fa = g.da(54, function (a) {
    for (let b = 0; b < a.length; b++) {
      this.j.appendChild(a[b]);
    }
  });
  g.C1.prototype.ri = g.da(40, function (a, b) {
    this.app.Qa().ri(a, b);
  });
  g.XX.prototype.ri = g.da(39, function (a, b) {
    this.da.ri(a, b);
  });
  g.R1.prototype.ri = g.da(38, function (a, b) {
    a = [a, b];
    g.qQ(this, g.pQ(this.provider), "cfi", a);
  });
  g.U1.prototype.ri = g.da(37, function (a, b) {
    if (this.qoe) {
      this.qoe.ri(a, b);
    }
  });
  g.cY.prototype.ri = g.da(36, function (a, b) {
    this.Bc.ri(a, b);
  });
  g.j2.prototype.ri = g.da(35, function () {});
  g.WX.prototype.ri = g.da(34, function (a, b) {
    g.AX(this, 38, [a, b]);
  });
  g.C1.prototype.Jh = g.da(33, function (a, b, c) {
    this.app.Qa().Jh(a, b, c);
  });
  g.XX.prototype.Jh = g.da(32, function (a, b, c) {
    this.da.Jh(a, b, c);
  });
  g.R1.prototype.Jh = g.da(31, function (a, b, c) {
    if (this.Xa !== a || this.zc !== b) {
      b = b === "rawcc" ? "" : b;
      c = [a, b, this.Xa, c];
      g.qQ(this, g.pQ(this.provider), "cfs", c);
      this.Xa = a;
      this.zc = b;
    }
  });
  g.U1.prototype.Jh = g.da(30, function (a, b, c) {
    if (this.qoe) {
      this.qoe.Jh(a, b, c);
    }
  });
  g.cY.prototype.Jh = g.da(29, function (a, b, c) {
    this.Bc.Jh(a, b, c);
  });
  g.j2.prototype.Jh = g.da(28, function () {});
  g.WX.prototype.Jh = g.da(27, function (a, b, c) {
    g.AX(this, 37, [a, b, c]);
  });
  g.q1.prototype.cM = g.da(9, function (a) {
    if (a = this.B(a)) {
      return a.j;
    } else {
      return 0;
    }
  });
  g.wO.prototype.cM = g.da(8, function () {
    return 0;
  });
  var $tb = /#(.)(.)(.)/;
  var Ztb = /^#(?:[0-9a-f]{3}){1,2}$/i;
  var Uvb = {
    en: "English"
  };
  var Vvb = class extends g.$1 {
    constructor(a) {
      super(a);
      this.A = new Set();
    }
    K(a) {
      var b = this.Pa.Qc();
      if (b && b.xb()) {
        b = b.xb().textTracks;
        for (let c of b) {
          if (c.kind === "subtitles" && !this.A.has(c.language) && c.language) {
            g.CT(this.j, new g.CG({
              languageCode: c.language,
              languageName: c.language,
              kind: c.kind,
              id: c.id,
              displayName: Uvb[c.label] || c.label,
              vss_id: `.${c.language}`
            }));
            this.A.add(c.language);
          }
        }
      }
      if (g.hT(this.j).length > 0) {
        a.Sj();
      }
    }
  };
  var Wvb = class {
    constructor() {
      this.segments = [];
    }
    contains(a) {
      a = g.Hb(this.segments, a);
      return a >= 0 || a < 0 && (-a - 1) % 2 === 1;
    }
    length() {
      return this.segments.length / 2;
    }
  };
  var Xvb = class extends g.Sj {
    constructor(a, b, c, d, e, f) {
      super();
      this.policy = a;
      this.player = b;
      this.pa = c;
      this.U = d;
      this.D = e;
      this.ba = f;
      this.C = new Wvb();
      this.K = -1;
      this.A = this.B = this.j = null;
      this.fa = 0;
      this.L = new g.jo(this.ga, 1000, this);
      this.events = new g.H0(this);
      g.L(this, this.L);
      g.L(this, this.events);
      this.events.V(b, "SEEK_COMPLETE", this.X);
      this.X();
      this.ga();
    }
    ka() {
      super.ka();
      if (this.A) {
        this.A.cancel();
      }
    }
    X() {
      this.seekTo(this.player.getCurrentTime());
    }
    seekTo(a) {
      a -= this.player.jc();
      var b = this.j;
      this.j = g.cb(this.pa.D(a).ob);
      if (b !== this.j && this.ba) {
        this.ba();
      }
    }
    reset() {
      this.C = new Wvb();
      this.K = -1;
      if (this.A) {
        this.A.cancel();
        this.A = null;
      }
    }
    ga() {
      this.oa();
      var a;
      if (a = this.j != null) {
        a = this.j;
        a = a.pa.B(a);
      }
      if (a && !this.A && (!this.j || !(this.j.segmentStartTime - this.player.getCurrentTime() > 30))) {
        a = this.j;
        a = a.pa.la(a);
        let e = a.ob[0];
        if (this.player.getVideoData().enableServerStitchedDai) {
          var b = this.player.kw();
          if (b) {
            var c = e.pa.info.id;
            let f = e.Ea;
            var d = a.ob[0].B;
            if (this.policy.za) {
              if (b = g.aTa(b, d, f, c, 3)) {
                a.C = b;
              }
            } else if (c = b.SL(d, f, c, 3)) {
              d = 2;
              if (b.Ip.has(f)) {
                d = 0;
              } else if (g.MW(b, f)) {
                d = 1;
              }
              b = d;
              if (b === 0) {
                if (c) {
                  a.j = new g.tf(c);
                }
              } else if (b === 2) {
                this.L.start();
                if (eub(this)) {
                  this.seekTo(this.player.getCurrentTime());
                }
                return;
              }
            }
          }
        }
        if (e.pa.index.Xp(e.Ea)) {
          if (!this.C.contains(a.ob[0].Ea)) {
            fub(this, a);
          }
          this.j = g.cb(a.ob);
        } else if (eub(this)) {
          this.seekTo(this.player.getCurrentTime());
        }
      }
      this.L.start();
    }
  };
  var Yvb = class extends g.$1 {
    constructor(a, b) {
      super(b);
      this.A = a;
      this.J = b;
      this.U = null;
      this.ga = false;
      this.logger = new g.yB("caps");
      this.fa = g.DT(this.J, this.A);
    }
    D(a, b, c) {
      this.B();
      b = gub(this, a.getId());
      if (!b) {
        b = a.languageCode;
        b = this.A.isManifestless ? hub(this, b, "386") : hub(this, b);
      }
      if (b) {
        var d = (b.index.cM(b.index.Pp()) - b.index.getStartTime(b.index.Pp())) * 1000;
        var e = new g.MYa(this.J.O());
        this.U = new Xvb(e, this.J, b, (f, h) => {
          c.jx(f, a, h, d);
        }, this.fa || g.GB(b.info), () => {
          if (this.U) {
            this.U.reset();
          }
          this.ga = true;
        });
      } else if (cub(this.A, a.getId(), a.languageCode)) {
        g.zB(this.logger, 564598495, "requested live caption track is denied for CABR");
      }
    }
    ba() {
      var a = this.ga;
      this.ga = false;
      return a;
    }
    K(a) {
      var b = this.J.O().N("html5_fallback_if_rawcc_missing");
      var c = this.A.j.rawcc != null;
      if (!this.fa || !c && b) {
        b = this.A.isManifestless ? iub(this, "386") : iub(this);
      } else {
        if (!c) {
          g.zB(this.logger, 386248249, "rawcc used but unavailable");
          return;
        }
        b = [new g.CG({
          id: "rawcc",
          languageCode: "rawcc",
          languageName: "CC1",
          is_servable: true,
          is_default: true,
          is_translateable: false,
          vss_id: ".en"
        }), new g.CG({
          id: "rawcc",
          languageCode: "rawcc",
          languageName: "CC3",
          is_servable: true,
          is_default: true,
          is_translateable: false,
          vss_id: ".en"
        })];
      }
      for (let d of b) {
        g.CT(this.j, d);
      }
      a.Sj();
    }
    B() {
      if (this.U) {
        this.U.dispose();
        this.U = null;
      }
    }
    L() {
      return "";
    }
  };
  var W3 = /^#(?:[0-9a-f]{3}){1,2}$/i;
  var Zvb = class {
    constructor() {
      this.current = new Map();
      this.previous = new Map();
    }
    get(a) {
      var b = this.current.get(a);
      if (b !== undefined) {
        return b;
      }
      b = this.previous.get(a);
      if (b !== undefined) {
        this.set(a, b);
      }
      return b;
    }
    set(a, b) {
      if (this.current.size >= 512) {
        let c = this.previous;
        c.clear();
        this.previous = this.current;
        this.current = c;
      }
      this.current.set(a, b);
    }
    clear() {
      this.current.clear();
      this.previous.clear();
    }
  };
  var $vb = ["left", "right", "center", "justify"];
  var G3 = class extends g.BM {
    constructor(a, b, c, d, e, f = false, h = null) {
      super(a, a + b, {
        priority: c,
        namespace: "captions"
      });
      this.windowId = d;
      this.text = e;
      this.append = f;
      this.pD = h;
    }
    toString() {
      return super.toString();
    }
  };
  var r4 = class extends g.Z {
    constructor(a, b, c, d, e, f, h, k, l, m) {
      var p = m.isInline() && true;
      var q = {};
      Object.assign(q, b);
      Object.assign(q, a.params);
      Object.assign(q, c);
      var u = {};
      Object.assign(u, b.Bf);
      if (a.params.Bf) {
        Object.assign(u, a.params.Bf);
      }
      Object.assign(u, c.Bf);
      if (p) {
        if (u.background) {
          q.windowColor = u.background;
        }
        q.windowOpacity = 0.6;
        u.backgroundOpacity = 0;
      }
      q.Bf = u;
      var v = q.zk === 1;
      var z = [{
        G: "span",
        S: "captions-text",
        W: {
          style: "word-wrap: normal; display: block;"
        }
      }];
      var F = k.Ua("caption_edit_on_hover") && m.getVideoData().getPlayerResponse()?.captions?.playerCaptionsTracklistRenderer?.openTranscriptCommand;
      if (F) {
        z.unshift({
          G: "button",
          S: "caption-edit",
          W: {
            tabindex: "0",
            "aria-label": aub()
          },
          Y: [{
            G: "svg",
            W: {
              fill: "#e3e3e3",
              height: "100%",
              viewBox: "5 5 38 38",
              width: "100%"
            },
            Y: [{
              G: "path",
              W: {
                d: "M9 39h2.2l24.25-24.25-1.1-1.1-1.1-1.1L9 36.8Zm-3 3v-6.4L35.4 6.2q.85-.85 2.12-.82 1.27.02 2.12.87L41.8 8.4q.85.85.85 2.1t-.85 2.1L12.4 42Zm33.5-31.55L37.45 8.4Zm-4.05 4.3-1.1-1.1-1.1-1.1 2.2 2.2Z"
              }
            }]
          }]
        });
      }
      super({
        G: "div",
        S: "caption-window",
        W: {
          id: `caption-window-${a.id}`,
          dir: v ? "rtl" : "ltr",
          tabindex: "0",
          lang: q.lang
        },
        Y: z
      });
      this.experiments = k;
      this.K = false;
      this.Fa = this.Ra = this.Ha = 0;
      this.Ka = null;
      this.ya = [];
      this.ge = 0;
      this.L = [];
      this.sa = false;
      this.A = a;
      this.X = this.za = null;
      this.jb = f;
      this.fb = h;
      this.C = null;
      this.maxWidth = f * 0.96;
      this.maxHeight = h * 0.96;
      this.j = q;
      this.Wf = c;
      this.Zf = b;
      this.B = this.qa("captions-text");
      a = this.B.style;
      this.ub = k.Ua("enable_player_captions_new_style_defaults") && ("boxDecorationBreak" in a || "WebkitBoxDecorationBreak" in a);
      this.Rh = k.Ua("enable_player_captions_new_style_defaults") && !k.Ua("disable_player_captions_new_line_height");
      a = Number(m.O().Ja().j.Ca(g.qdb));
      this.Oc = a > 0 ? a : 16;
      this.Rb = lub(this, d, e, f, h);
      this.Vf = l;
      if (F) {
        this.U = this.qa("caption-edit");
        this.V(this.U, "click", () => {
          this.Vf();
        });
      }
      this.type = 0;
      this.Kb = this.Rb * mub(u);
      this.hc = p;
      this.Zb = k.Ua("enable_centered_caption_for_tvfilm_video") && m.getVideoData().isTvfilmVideo;
      this.fa = m.O().Ja().j.Ca(g.ndb);
      this.zc = m.O().Ja().j.Ca(g.m_);
      this.hh = !(g.Kq() < 20);
      this.Va = this.zc && m.O().Ja().j.Ca(g.sdb) ? new WeakMap() : null;
      this.ta = m.O().Ja().j.Ca(g.odb) ? new Zvb() : null;
      this.gh = this.zc ? {
        videoWidth: d,
        videoHeight: e,
        isInline: m.isInline(),
        Zf: {
          ...b
        }
      } : null;
      b = new g.nV(this.element, true);
      g.L(this, b);
      b.subscribe("dragstart", this.Dg, this);
      b.subscribe("dragmove", this.Cg, this);
      b.subscribe("dragend", this.Bg, this);
      this.fd = this.bd = this.kd = this.jd = 0;
      b = "";
      if (this.j.windowOpacity) {
        b = E3(this.j.windowColor);
        b = "rgba(" + b[0] + "," + b[1] + "," + b[2] + "," + this.j.windowOpacity + ")";
      }
      d = {
        "background-color": b,
        display: this.j.isVisible === false ? "none" : "",
        "text-align": $vb[this.j.textAlign]
      };
      if (this.ub) {
        d["border-radius"] = b ? `${this.Kb * 0.25}px` : "";
      }
      if (this.D = this.A.params.zk === 2 || this.A.params.zk === 3) {
        nub(this, this.element);
      }
      g.Ue(this.element, d);
      if (p) {
        this.element.parentElement?.style.setProperty("--caption-window-color", b);
      }
      switch (this.j.fn) {
        case 0:
        case 1:
        case 2:
          g.qo(this.element, "ytp-caption-window-top");
          break;
        case 6:
        case 7:
        case 8:
          g.qo(this.element, "ytp-caption-window-bottom");
      }
    }
    Dg(a, b) {
      this.bd = a;
      this.fd = b;
      var c = g.hf(this.element, this.element.parentElement);
      this.jd = a - c.x;
      this.kd = b - c.y;
    }
    Cg(a, b) {
      if (a !== this.bd || b !== this.fd) {
        if (!g.po(this.element, "ytp-dragging")) {
          g.qo(this.element, "ytp-dragging");
        }
        var c = g.kf(this.element);
        a = a - this.jd - this.jb * 0.02;
        var d = b - this.kd - this.fb * 0.02;
        var e = (a + c.width / 2) / this.maxWidth * 3;
        e = Math.floor(g.Pd(e, 0, 2));
        var f = (d + c.height / 2) / this.maxHeight * 3;
        f = Math.floor(g.Pd(f, 0, 2));
        b = e + f * 3;
        a = (a + e / 2 * c.width) / this.maxWidth;
        a = g.Pd(a, 0, 1) * 100;
        c = (d + f / 2 * c.height) / this.maxHeight;
        c = g.Pd(c, 0, 1) * 100;
        this.A.params.fn = b;
        this.A.params.tp = c;
        this.A.params.Fl = a;
        this.A.params.isDefault = false;
        this.j.fn = b;
        this.j.tp = c;
        this.j.Fl = a;
        this.j.isDefault = false;
        this.Zf.fn = b;
        this.Zf.tp = c;
        this.Zf.Fl = a;
        this.Zf.isDefault = false;
        this.We();
      }
    }
    Bg() {
      g.so(this.element, "ytp-dragging");
    }
    We() {
      this.ba(this.L);
    }
    getType() {
      return this.type;
    }
    ba(a) {
      var b = this.hc ? 0 : Math.min(this.Jd(), this.maxWidth);
      var c = this.xd();
      var d = this.hc;
      if (d) {
        var e = getComputedStyle(this.B.parentNode);
        e = I3(e.borderLeftWidth) + I3(e.borderRightWidth) + I3(e.paddingLeft) + I3(e.paddingRight);
      } else {
        e = 0;
      }
      var f = "";
      if (this.A.params.zk === 3) {
        f = "rotate(180deg)";
      }
      var h = d ? `calc(96% - ${e}px)` : "96%";
      g.Ue(this.element, {
        top: 0,
        left: 0,
        right: "",
        bottom: "",
        width: b ? `${b}px` : "",
        height: c ? `${c}px` : "",
        "max-width": h,
        "max-height": h,
        margin: "",
        transform: ""
      });
      this.zb(a);
      f = {
        transform: f,
        top: "",
        left: "",
        width: b ? `${b}px` : "",
        height: c ? `${c}px` : "",
        "max-width": "",
        "max-height": ""
      };
      h = this.j.fn;
      var k = this.j.Fl;
      var l = this.j.tp;
      if (this.Zb && h != null) {
        k = 50;
        h = Math.floor(h / 3) * 3 + 1;
      }
      k = k * 0.96 + 2;
      switch (h) {
        case 0:
        case 3:
        case 6:
          if ((d = this.j.Bf.fontSizeIncrement) && d > 0 && this.j.zk !== 2 && this.j.zk !== 3) {
            k = Math.max(k / (1 + d * 2), 2);
          }
          f.left = `${k}%`;
          break;
        case 1:
        case 4:
        case 7:
          f.left = `${k}%`;
          let m = 0;
          if (!this.fa) {
            m = this.B.offsetWidth;
          }
          if (b || m) {
            b = b || m + 1;
            f.width = `${b}px`;
            f["margin-left"] = d ? `${b / -2 - e / 2}px` : `${b / -2}px`;
          } else {
            if (this.fa) {
              f.width = "max-content";
            }
            f.transform += " translateX(-50%)";
          }
          break;
        case 2:
        case 5:
        case 8:
          f.right = `${100 - k}%`;
      }
      d = l * 0.96 + 2;
      switch (h) {
        case 0:
        case 1:
        case 2:
          f.top = `${d}%`;
          break;
        case 3:
        case 4:
        case 5:
          f.top = `${d}%`;
          d = 0;
          if (!this.fa) {
            d = this.element.clientHeight;
          }
          if (c = c || d) {
            f.height = `${c}px`;
            f["margin-top"] = `${c / -2}px`;
          } else {
            f.transform += " translateY(-50%)";
          }
          break;
        case 6:
        case 7:
        case 8:
          f.bottom = `${100 - d}%`;
      }
      switch (h) {
        case 0:
        case 3:
        case 6:
          c = Math.max(0, 98 - k);
          break;
        case 2:
        case 5:
        case 8:
          c = Math.max(0, k - 2);
          break;
        default:
          c = Math.max(0, Math.min(k - 2, 98 - k) * 2);
      }
      f["max-width"] = e > 0 ? `calc(${c}% - ${e}px)` : `${c}%`;
      g.Ue(this.element, f);
      if (this.U) {
        if (this.fa) {
          c = this.Kb;
        } else {
          a = H3(this, a);
          c = this.Zb ? a > 0 ? this.B.offsetHeight / a : 0 : this.B.offsetHeight / a;
        }
        this.U.style.height = `${c}px`;
        this.U.style.width = `${c}px`;
        this.element.style.paddingLeft = `${c + 5}px`;
        this.element.style.paddingRight = `${c + 5}px`;
        if (!this.fa) {
          a = Number(this.element.style.marginLeft.replace("px", "")) - c - 5;
          c = Number(this.element.style.marginRight.replace("px", "")) - c - 5;
          this.element.style.marginLeft = `${a}px`;
          this.element.style.marginRight = `${c}px`;
        }
      }
    }
    zb(a, b = false) {
      if (this.type === 0 && this.A.params.xq !== undefined && this.experiments.Ua("web_enable_popon_asr_captions")) {
        a = pub(this, a, this.A.params.xq);
      }
      if (this.ta && window.devicePixelRatio !== this.ge) {
        this.ta.clear();
        this.ge = window.devicePixelRatio;
      }
      var c;
      for (c = 0; c < a.length && a[c] === this.L[c]; c++);
      if (this.sa || this.L.length > c) {
        c = 0;
        if (this.zc && this.type !== 2) {
          this.sa = false;
          this.L = [];
          this.C = this.X = this.za = null;
          this.K = true;
          this.Fa = this.Ra = this.Ha = 0;
          this.Ka = null;
          Aub(this);
        } else {
          this.sa = false;
          this.L = [];
          this.C = this.X = this.za = null;
          this.K = false;
          this.Ka = null;
          Aub(this);
          g.ve(this.B);
        }
      }
      for (; c < a.length; c++) {
        rub(this, a[c]);
      }
      if (!this.K || !b) {
        uub(this);
      }
    }
    Jd() {
      return 0;
    }
    xd() {
      return 0;
    }
    ka() {
      this.ta?.clear();
      super.ka();
    }
    toString() {
      return super.toString();
    }
  };
  var s4 = g.ne ? "1em" : "0.5em";
  var Cub = [[1, {
    "border-top-left-radius": "0"
  }], [2, {
    "border-top-right-radius": "0"
  }], [4, {
    "border-top-left-radius": "0",
    "border-bottom-left-radius": "0"
  }], [8, {
    "padding-top": s4
  }], [16, {
    "padding-right": s4
  }], [32, {
    "padding-bottom": s4
  }], [64, {
    "padding-left": s4
  }], [128, {
    "border-top-right-radius": "0",
    "border-bottom-right-radius": "0"
  }], [256, {
    "border-bottom-left-radius": "0"
  }], [512, {
    "border-bottom-right-radius": "0"
  }]];
  var Bub = new Map();
  var bwb = class {
    constructor() {
      this.B = this.time = this.mode = this.A = 0;
      this.C = new awb(this);
      this.D = new awb(this);
      this.j = [];
      this.clear();
    }
    clear() {
      this.B = this.time = this.mode = 0;
      this.j = [];
      this.reset();
    }
    reset() {
      this.mode = 0;
      this.C.reset(0);
      this.D.reset(1);
    }
  };
  var Dub = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139, 12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255];
  var cwb = class {
    constructor() {
      this.type = 0;
    }
    set(a) {
      this.type = a;
    }
    get() {
      return this.type;
    }
  };
  var dwb = class {
    constructor() {
      this.state = this.Kv = this.ly = 0;
    }
    clear() {
      this.state = 0;
    }
    update() {
      this.state = this.state === 2 ? 1 : 0;
    }
    Qe() {
      return this.state !== 0;
    }
    matches(a, b) {
      return this.Qe() && a === this.ly && b === this.Kv;
    }
  };
  var ewb = class {
    constructor() {
      this.timestamp = this.j = 0;
    }
    reset() {
      this.timestamp = this.j = 0;
    }
  };
  var t4 = class {
    constructor(a) {
      this.D = a;
      this.B = [];
      this.j = this.A = this.row = 0;
      this.style = new cwb();
      this.C = 0;
      for (a = 0; a <= 15; a++) {
        this.B[a] = [];
        for (let b = 0; b <= 32; b++) {
          this.B[a][b] = new ewb();
        }
      }
    }
    updateTime(a) {
      for (let b = 1; b <= 15; ++b) {
        for (let c = 1; c <= 32; ++c) {
          this.B[b][c].timestamp = a;
        }
      }
    }
    debugString() {
      var a = "\n";
      for (let b = 1; b <= 15; ++b) {
        for (let c = 1; c <= 32; ++c) {
          let d = this.B[b][c];
          a = d.j === 0 ? a + "_" : a + String.fromCharCode(d.j);
        }
        a += "\n";
      }
      return a;
    }
    reset(a) {
      for (let b = 0; b <= 15; b++) {
        for (let c = 0; c <= 32; c++) {
          this.B[b][c].reset();
        }
      }
      this.C = a;
      this.j = 0;
      this.A = this.row = 1;
    }
  };
  var Iub = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632];
  var Jub = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251];
  var Kub = [193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 9473, 169, 8480, 183, 8220, 8221, 192, 194, 199, 200, 202, 203, 235, 206, 207, 239, 212, 217, 249, 219, 171, 187];
  var Lub = [195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124, 126, 196, 228, 214, 246, 223, 165, 164, 9475, 197, 229, 216, 248, 9487, 9491, 9495, 9499];
  var fwb = class {
    constructor(a) {
      this.B = a;
      this.D = 0;
      this.style = new cwb();
      this.K = new t4(this.B);
      this.L = new t4(this.B);
      this.text = new t4(this.B);
      this.A = this.K;
      this.C = this.L;
      this.j = this.A;
    }
    reset(a, b) {
      this.D = b;
      this.style.set(2);
      this.A = this.K;
      this.C = this.L;
      this.j = this.A;
      var c = (a << 2) + (b << 1);
      this.K.reset(c);
      this.L.reset(c);
      this.text.reset((a << 2) + (b << 1) + 1);
    }
  };
  var awb = class {
    constructor(a) {
      this.j = a;
      this.D = 0;
      this.B = new fwb(this.j);
      this.K = new fwb(this.j);
      this.A = new dwb();
      this.C = this.B;
    }
    reset(a) {
      this.D = a;
      this.A.clear();
      this.C = this.B;
      this.B.reset(a, 0);
      this.K.reset(a, 1);
    }
  };
  var gwb = class {
    C() {}
  };
  var u4 = class extends g.Sj {
    reset() {}
  };
  var R3 = class extends g.BM {
    constructor(a, b, c, d, e) {
      super(a, a + b, {
        priority: c,
        namespace: "captions"
      });
      this.id = d;
      this.params = e;
      this.j = [];
    }
    toString() {
      return super.toString();
    }
  };
  var Q3 = 0;
  var hwb = class extends u4 {
    constructor(a, b = false) {
      super();
      this.C = a;
      this.CF = b;
      this.pens = {};
      this.U = {};
      this.X = {};
      this.D = "_" + Q3++;
      this.L = {};
      this.A = this.j = null;
      this.K = true;
    }
    reset() {
      this.L = {};
      this.A = this.j = null;
      this.K = true;
    }
    B(a, b) {
      a = a.firstChild;
      a.getAttribute("format");
      b = b || 0;
      Number.isFinite(b);
      a = Array.from(a.childNodes);
      for (var c of a) {
        if (c.nodeType === 1) {
          switch (c.tagName) {
            case "head":
              var d = c;
              break;
            case "body":
              var e = c;
          }
        }
      }
      if (d) {
        d = Array.from(d.childNodes);
        for (var f of d) {
          if (f.nodeType === 1) {
            switch (f.tagName) {
              case "pen":
                c = f.getAttribute("id");
                d = this.pens;
                a = {};
                var h = f.getAttribute("p");
                if (h) {
                  Object.assign(a, this.pens[h]);
                }
                h = U3(f, "b");
                if (h != null) {
                  a.bold = h;
                }
                h = U3(f, "i");
                if (h != null) {
                  a.italic = h;
                }
                h = U3(f, "u");
                if (h != null) {
                  a.underline = h;
                }
                h = V3(f, "et");
                if (h != null) {
                  a.charEdgeStyle = h;
                }
                h = V3(f, "of");
                if (h != null) {
                  a.offset = h;
                }
                h = X3(f, "bc");
                if (h != null) {
                  a.background = h;
                }
                h = X3(f, "ec");
                if (h != null) {
                  a.HQ = h;
                }
                h = X3(f, "fc");
                if (h != null) {
                  a.color = h;
                }
                h = V3(f, "fs");
                if (h != null && h !== 0) {
                  a.fontFamily = h;
                }
                h = T3(f, "sz");
                if (h !== undefined) {
                  a.fontSizeIncrement = h / 100 - 1;
                }
                h = T3(f, "bo");
                if (h !== undefined) {
                  a.backgroundOpacity = h / 255;
                }
                h = T3(f, "fo");
                if (h !== undefined) {
                  a.textOpacity = h / 255;
                }
                h = V3(f, "rb");
                if (h != null && h !== 10 && h !== 0) {
                  a.Yg = h > 10 ? h - 1 : h;
                }
                h = V3(f, "hg");
                if (h != null) {
                  a.DZ = h;
                }
                d[c] = a;
                break;
              case "ws":
                d = f.getAttribute("id");
                this.X[d] = Tub(this, f);
                break;
              case "wp":
                d = f.getAttribute("id");
                this.U[d] = Uub(this, f);
            }
          }
        }
      }
      if (e) {
        f = [];
        e = Array.from(e.childNodes);
        for (S of e) {
          if (S.nodeType === 1) {
            switch (S.tagName) {
              case "w":
                this.j = Vub(this, S, b, false);
                if ((e = this.L[this.j.id]) && e.end > this.j.start) {
                  e.end = this.j.start;
                }
                this.L[this.j.id] = this.j;
                f.push(this.j);
                break;
              case "p":
                var k = S;
                a = b;
                e = [];
                d = k.getAttribute("w") || this.D;
                c = !!U3(k, "a");
                a = (T3(k, "t") || 0) + a;
                h = T3(k, "d") || 5000;
                if (!c) {
                  if (!this.K && this.A && this.A.windowId === d && this.A.end > a) {
                    this.A.end = a;
                  }
                  var l = this.A && this.A.j;
                  if (l) {
                    if (l[l.length - 1] === "\n") {
                      l[l.length - 1] = "";
                    }
                  } else if (this.A && this.A.text === "\n") {
                    this.A.text = "";
                  }
                }
                l = c ? 6 : 5;
                var m = k.getAttribute("p");
                m = m ? this.pens[m] : null;
                let R = Array.from(k.childNodes);
                if (R.length) {
                  this.K = k.getAttribute("d") != null;
                }
                k = this.CF && k.getAttribute("d") != null;
                for (let V = 0; V < R.length; V++) {
                  var p = R[V];
                  var q = undefined;
                  if (V > 0) {
                    c = true;
                  }
                  let X;
                  if (p.nodeType === 1) {
                    X = p;
                  }
                  if (X && X.tagName === "s") {
                    if ((p = (p = X.getAttribute("p")) ? this.pens[p] : null) && p.Yg) {
                      if (p.Yg === 1) {
                        p = R.slice(V, V + 4);
                        if (p.length === 4) {
                          q = Rub(a, h, d, c, l, p, this.pens);
                          V += 3;
                        }
                      } else {
                        q = Rub(a, h, d, c, l, [X], this.pens);
                      }
                    }
                    if (!q) {
                      {
                        var u = X;
                        q = a;
                        p = h;
                        var v = d;
                        var z = c;
                        var F = l;
                        var M = k && e.length > 0 ? e[e.length - 1] : undefined;
                        let ta = u.textContent ? u.textContent : "";
                        var N = u.getAttribute("p");
                        N = N ? this.pens[N] : null;
                        u = T3(u, "t") || 0;
                        if (M && M.start === q + u && M.end === q + p) {
                          jub(M, ta, N);
                          q = null;
                        } else {
                          q = new G3(q + u, p - u, F, v, ta, z, N);
                        }
                      }
                    }
                    if (!q) {
                      continue;
                    }
                  } else {
                    q = new G3(a, h, l, d, p.textContent || "", c, m);
                  }
                  e.push(q);
                  this.A = q;
                }
                if (e.length > 0) {
                  if (e[0].windowId === this.D) {
                    this.j = Vub(this, S, b, true);
                    f.push(this.j);
                  }
                  for (let V of e) {
                    V.windowId = this.j.id;
                    this.j.j.push(V);
                    f.push(V);
                  }
                }
            }
          }
        }
        var S = f;
      } else {
        S = [];
      }
      return S;
    }
  };
  var iwb = new Map([[9, 1], [10, 1], [11, 2], [12, 3], [13, 4], [14, 5]]);
  var jwb = class extends u4 {
    constructor(a, b = {}) {
      super();
      this.L = a;
      this.j = new Map();
      this.C = new Map();
      this.D = new Map();
      this.A = new Map();
      this.K = null;
      this.CF = b.CF ?? false;
      this.bL = b.bL ?? false;
    }
    reset() {
      this.A.clear();
    }
    B(a, b) {
      a = JSON.parse(a);
      if (!a) {
        return [];
      }
      if (a.pens) {
        var c = a.pens;
        var d = 0;
        for (var e of c) {
          c = {};
          var f = e.pParentId;
          if (f) {
            Object.assign(c, this.j.get(f));
          }
          if (e.bAttr) {
            c.bold = true;
          }
          if (e.iAttr) {
            c.italic = true;
          }
          if (e.uAttr) {
            c.underline = true;
          }
          f = e.ofOffset;
          if (f != null) {
            c.offset = f;
          }
          if (e.szPenSize !== undefined) {
            c.fontSizeIncrement = e.szPenSize / 100 - 1;
          }
          f = e.etEdgeType;
          if (f != null) {
            c.charEdgeStyle = f;
          }
          if (e.ecEdgeColor !== undefined) {
            c.HQ = Y3(e.ecEdgeColor);
          }
          f = e.fsFontStyle;
          if (f != null && f !== 0) {
            c.fontFamily = f;
          }
          if (e.fcForeColor !== undefined) {
            c.color = Y3(e.fcForeColor);
          }
          if (e.foForeAlpha !== undefined) {
            c.textOpacity = e.foForeAlpha / 255;
          }
          if (e.bcBackColor !== undefined) {
            c.background = Y3(e.bcBackColor);
          }
          if (e.boBackAlpha !== undefined) {
            c.backgroundOpacity = e.boBackAlpha / 255;
          }
          if ((f = e.rbRuby) && f !== 10) {
            c.Yg = f > 10 ? f - 1 : f;
            c.textEmphasis = iwb.get(c.Yg);
          }
          if (e.hgHorizGroup) {
            c.DZ = e.hgHorizGroup;
          }
          this.j.set(d++, c);
        }
      }
      if (a.wsWinStyles) {
        d = a.wsWinStyles;
        e = 0;
        for (var h of d) {
          d = {};
          if (c = h.wsParentId) {
            Object.assign(d, this.D.get(c));
          } else {
            Object.assign(d, this.L);
          }
          if (h.mhModeHint !== undefined) {
            d.rN = h.mhModeHint;
          }
          if (h.juJustifCode !== undefined) {
            d.textAlign = h.juJustifCode;
          }
          if (h.pdPrintDir !== undefined) {
            d.zk = h.pdPrintDir;
          }
          if (h.sdScrollDir !== undefined) {
            d.aW = h.sdScrollDir;
          }
          if (h.wfcWinFillColor !== undefined) {
            d.windowColor = Y3(h.wfcWinFillColor);
          }
          if (h.wfoWinFillAlpha !== undefined) {
            d.windowOpacity = h.wfoWinFillAlpha / 255;
          }
          this.D.set(e++, d);
        }
      }
      if (a.wpWinPositions) {
        e = a.wpWinPositions;
        h = 0;
        for (var k of e) {
          e = {};
          if (d = k.wpParentId) {
            Object.assign(e, this.C.get(d));
          }
          if (k.ahHorPos !== undefined) {
            e.Fl = k.ahHorPos;
          }
          if (k.apPoint !== undefined) {
            e.fn = k.apPoint;
          }
          if (k.avVerPos !== undefined) {
            e.tp = k.avVerPos;
          }
          if (k.ccCols !== undefined) {
            e.Ov = k.ccCols;
          }
          if (k.rcRows !== undefined) {
            e.xq = k.rcRows;
          }
          this.C.set(h++, e);
        }
      }
      if (a.events) {
        k = a.events;
        if (this.bL) {
          this.K = new Map();
          try {
            var l = Xub(this, k, b);
          } finally {
            this.K = null;
          }
        } else {
          l = Xub(this, k, b);
        }
      } else {
        l = [];
      }
      return l;
    }
    shareText(a) {
      var b = this.K;
      if (!b) {
        return a;
      }
      var c = b.get(a);
      if (c !== undefined) {
        return c;
      }
      b.set(a, a);
      return a;
    }
  };
  var kwb = class extends g.$1 {
    constructor(a, b, c) {
      super(a);
      this.videoData = b;
      this.audioTrack = c;
      this.X = b.RK;
    }
    D(a, b, c) {
      Ytb(this.videoData.videoId, a.vssId, c.jx);
    }
    K(a) {
      if (this.audioTrack) {
        for (let b of this.audioTrack.captionTracks) {
          g.CT(this.j, b);
        }
      }
      a.Sj();
    }
  };
  var Qvb = class extends r4 {
    constructor(a, b, c, d, e, f, h, k, l, m) {
      super(a, b, c, d, e, f, h, k, l, m);
      this.type = 1;
      this.ha = m.O().Ja().j.Ca(g.odb) ? new Zvb() : null;
    }
    zb(a) {
      var b = this.A.j;
      super.zb(a, true);
      var c;
      var d;
      var e = f => {
        if (d && f === c) {
          return d;
        }
        var h = this.ha?.get(f);
        if (!h) {
          h = {};
          Object.assign(h, f);
          Object.assign(h, lwb);
          this.ha?.set(f, h);
        }
        c = f;
        return d = h;
      };
      for (a = a.length; a < b.length; a++) {
        let f = b[a];
        let h = e(f.pD);
        let k = f.A ? f.A.map(e) : undefined;
        rub(this, f, h, k);
      }
      uub(this);
    }
    ka() {
      this.ha?.clear();
      super.ka();
    }
  };
  var lwb = {
    e7: true
  };
  var Yub = class extends gwb {
    constructor(a, b) {
      super();
      this.trackData = a;
      this.K = b;
      this.version = this.D = this.B = this.byteOffset = 0;
      this.A = [];
      this.j = new DataView(this.trackData);
    }
    C(a, b, c, d, e) {
      if (c < d) {
        let f = "_" + Q3++;
        c = c / 1000 - this.K;
        d = d / 1000 - this.K;
        a = new R3(c, d - c, 5, f, {
          textAlign: 0,
          fn: 0,
          Fl: b * 2.5,
          tp: a * 5.33
        });
        e = new G3(c, d - c, 5, f, e);
        this.A.push(a);
        this.A.push(e);
      }
    }
  };
  var mwb = class extends u4 {
    constructor(a, b) {
      super();
      this.A = a;
      this.C = b;
      this.track = this.C.languageName === "CC3" ? 4 : 0;
      this.j = new bwb();
      this.j.A = 1 << this.track;
    }
    B(a) {
      a = new Yub(a, this.A);
      if (Zub(a)) {
        while (a.byteOffset < a.j.byteLength) {
          if (a.version === 0) {
            a.B = $3(a) * (1000 / 45);
          } else if (a.version === 1) {
            a.B = $3(a) * 4294967296 + $3(a);
          }
          a.D = Z3(a);
          for (; a.D > 0; a.D--) {
            var b = Z3(a);
            let c = Z3(a);
            let d = Z3(a);
            if (b & 4 && (b & 3) === this.track && (this.track === 0 || this.track === 1)) {
              b = this.j;
              b.j.push({
                time: a.B,
                type: this.track,
                KX: c,
                LX: d,
                order: b.j.length
              });
            }
          }
        }
        Hub(this.j, a);
        return a.A;
      }
      return [];
    }
    reset() {
      this.j.clear();
    }
  };
  var Rvb = class extends r4 {
    constructor(a, b, c, d, e, f, h, k, l, m) {
      super(a, b, c, d, e, f, h, k, l, m);
      this.type = 2;
      this.Xa = [];
      this.la = this.ha = this.qb = 0;
      this.bb = NaN;
      this.te = 0;
      this.Of = null;
      this.yf = new g.jo(this.uc, 433, this);
      if (this.U) {
        m.createClientVe(this.U, this, 167342);
        this.V(this.U, "click", () => {
          m.logClick(this.U);
        });
        a = new g.nV(this.element, true);
        g.L(this, a);
        a.subscribe("hoverstart", () => {
          m.logVisibility(this.U, true);
        }, this);
      }
      g.qo(this.element, "ytp-caption-window-rollup");
      g.L(this, this.yf);
      g.Ue(this.element, "overflow", "hidden");
    }
    We() {
      g.ko(this.yf);
    }
    uc() {
      this.element.removeEventListener("transitionend", this.uc, false);
      g.so(this.element, "ytp-rollup-mode");
      this.ba(this.Of, true);
    }
    xd() {
      if (this.D) {
        return this.la;
      } else {
        return this.ha;
      }
    }
    Jd() {
      if (this.D) {
        return this.ha;
      } else {
        return this.la;
      }
    }
    ba(a, b) {
      this.Of = a;
      if (this.A.params.xq) {
        var c = 0;
        for (let d = 0; d < this.L.length && c < a.length; d++) {
          if (this.L[d] === a[c]) {
            c++;
          }
        }
        if (c > 0 && c < a.length) {
          a = this.L.concat(a.slice(c));
        }
        this.te = this.la;
        this.ha = this.la = 0;
        super.ba(a);
        cvb(this, b);
      }
      super.ba(a);
    }
  };
  var nwb = class {
    constructor(a, b, c, d) {
      this.J = a;
      this.D = b;
      this.logger = c;
      this.Gb = d;
      this.xc = [];
      this.j = null;
      this.B = [];
      this.C = null;
      this.So = [];
      this.A = null;
      this.kc = {
        Dla: () => this.A,
        Dh: () => this.xc
      };
      a = this.J.O().experiments.j("html5_override_micro_discontinuities_threshold_ms");
      this.K = a > 0 ? a : 10;
    }
    unload() {
      if (this.A != null) {
        this.J.removeEventListener("sabrCaptionsDataLoaded", this.A);
        this.A = null;
      }
      this.xc = [];
      this.j = null;
      this.B = [];
      this.C = null;
      this.J.publish("sabrCaptionsBufferedRangesUpdated", this.xc);
    }
    wG(a) {
      return {
        formatId: g.IB(a.info.pa.info, this.Gb),
        Ea: a.info.Ea + (this.Gb ? 0 : 1),
        startTimeMs: a.info.B * 1000,
        durationMs: a.info.K * 1000
      };
    }
  };
  var owb = class extends g.$1 {
    constructor(a, b) {
      super(b);
      this.A = a;
      this.J = b;
      this.logger = new g.yB("caps");
      this.U = this.ga = null;
      this.fa = new nwb(this.J, this, this.logger, this.A.Gb);
    }
    D(a, b, c) {
      this.B();
      b = a.getId();
      b = b != null && b in this.A.j ? this.A.j[b] : null;
      if (!b) {
        b = a.languageCode;
        b = this.A.isManifestless ? ovb(this, b, "386") : ovb(this, b);
      }
      if (b) {
        this.U = a;
        this.ga = b;
        kvb(this.fa, c);
        this.J.publish("sabrCaptionsTrackChanged", g.IB(b.info, this.A.Gb));
      }
    }
    K(a) {
      var b = this.A.isManifestless ? pvb(this, "386") : pvb(this);
      for (let c of b) {
        g.CT(this.j, c);
      }
      a.Sj();
    }
    B() {
      if (this.U) {
        this.U = this.ga = null;
        this.fa.unload();
        this.J.publish("sabrCaptionsTrackChanged", null);
      }
    }
    L() {
      return "";
    }
  };
  var qvb = "WEBVTT".split("").map(a => a.charCodeAt(0));
  var wvb = class extends u4 {
    constructor() {
      super();
    }
    B(a, b) {
      if (a instanceof ArrayBuffer) {
        a = g.Ux(new Uint8Array(a));
      }
      var c = [];
      a = a.split(pwb);
      for (let z = 1; z < a.length; z++) {
        var d = a[z];
        var e = b;
        if (d !== "" && !qwb.test(d)) {
          var f = v4.exec(d);
          if (f && f.length >= 4) {
            var h = b4(f[1]);
            var k = b4(f[2]) - h;
            h += e;
            var l = (f = f[3]) ? f.split(" ") : [];
            f = {};
            var m = null;
            var p = "";
            var q = null;
            var u = "";
            for (let F of l) {
              l = F.split(":");
              if (l.length !== 2) {
                continue;
              }
              var v = l[1];
              switch (l[0]) {
                case "line":
                  l = v.split(",");
                  if (l[0].endsWith("%")) {
                    m = l[0];
                    f.tp = Number.parseInt(m, 10);
                    if (l.length === 2) {
                      p = l[1].trim();
                    }
                  }
                  break;
                case "position":
                  l = v.split(",");
                  q = l[0];
                  f.Fl = Number.parseInt(q, 10);
                  if (l.length === 2) {
                    u = l[1].trim();
                  }
                  break;
                case "align":
                  switch (v) {
                    case "start":
                      f.textAlign = 0;
                      break;
                    case "middle":
                      f.textAlign = 2;
                      break;
                    case "end":
                      f.textAlign = 1;
                  }
              }
            }
            if (!m && !p) {
              p = "end";
            }
            if (!q) {
              switch (f.textAlign) {
                case 0:
                  f.Fl = 0;
                  break;
                case 1:
                  f.Fl = 100;
                  break;
                case 2:
                  f.Fl = 50;
              }
            }
            if (f.textAlign != null) {
              m = 0;
              switch (p) {
                case "center":
                  m += 3;
                  break;
                case "end":
                  m += 6;
                  break;
                default:
                  m += 0;
              }
              switch (u) {
                case "line-left":
                  m += 0;
                  break;
                case "center":
                  m += 1;
                  break;
                case "line-right":
                  m += 2;
                  break;
                default:
                  switch (f.textAlign) {
                    case 0:
                      m += 0;
                      break;
                    case 2:
                      m += 1;
                      break;
                    case 1:
                      m += 2;
                  }
              }
              p = m < 0 || m > 8 ? 7 : m;
              f.fn = p;
            }
            d = d.substring(v4.lastIndex).replace(/[\x01-\x09\x0b-\x1f]/g, "");
            u = f;
            f = {};
            if (d.indexOf("<") < 0 && d.indexOf("&") < 0) {
              e = svb(h, k, 5, u);
              h = new G3(h, k, 5, e.id, d, false, g.bc(f) ? undefined : f);
              c.push(e);
              c.push(h);
              e.j.push(h);
            } else {
              p = d.split(rwb);
              if (p.length === 1) {
                d = 5;
                u = svb(h, k, d, u);
              } else {
                m = d = 6;
                u = Object.assign({
                  Ov: 32
                }, u);
                u = new R3(h, k, m, "_" + Q3++, u);
              }
              c.push(u);
              m = h;
              q = 0;
              for (; q < p.length; q++) {
                l = p[q];
                if (q % 2 === 0) {
                  v = g.gZ(`<html>${l}</html>`);
                  let F;
                  if (v.getElementsByTagName("parsererror").length) {
                    F = v.createElement("span");
                    F.appendChild(v.createTextNode(l));
                  } else {
                    F = v.firstChild;
                  }
                  tvb(this, m, k - (m - h), d, u, q > 0, F, f, c);
                } else {
                  m = b4(l) + e;
                }
              }
            }
          }
          v4.lastIndex = 0;
        }
      }
      return c;
    }
  };
  var qwb = /^NOTE/;
  var pwb = /(?:\r\n|\r|\n){2,}/;
  var v4 = RegExp("^((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})[\\t ]+-->[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})(?:[\\t ]*)(.*)(?:\\r\\n|\\r|\\n)", "gm");
  var rwb = RegExp("<((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})>");
  var swb = class extends g.Sj {
    constructor(a, b) {
      super();
      this.J = a;
      this.Z = b;
      this.j = null;
      this.sc = this.J.kw();
      this.logger = new g.yB("caps");
    }
    clear() {
      if (this.j) {
        this.j.dispose();
      }
      this.j = null;
    }
    reset() {
      if (this.j) {
        this.j.reset();
      }
    }
    ka() {
      super.ka();
      this.clear();
    }
  };
  var Bvb = {
    windowColor: "#080808",
    windowOpacity: 0,
    textAlign: 2,
    fn: 7,
    Fl: 50,
    tp: 100,
    isDefault: true,
    Bf: {
      background: "#080808",
      backgroundOpacity: 0.75,
      charEdgeStyle: 0,
      color: "#fff",
      fontFamily: 4,
      fontSizeIncrement: 0,
      textOpacity: 1,
      offset: 1
    }
  };
  var Avb = {
    windowColor: "#080808",
    windowOpacity: 0,
    textAlign: 0,
    fn: 7,
    Fl: 50,
    tp: 100,
    isDefault: true,
    Bf: {
      background: "#080808",
      backgroundOpacity: 0.7,
      charEdgeStyle: 0,
      color: "#fff",
      fontFamily: 4,
      fontSizeIncrement: 0,
      textOpacity: 1,
      offset: 1
    }
  };
  g.BT("captions", class extends g.Z1 {
    constructor(a) {
      super(a);
      this.J = a;
      this.sa = [];
      this.U = {};
      this.Ka = new Set();
      this.jb = [];
      this.la = {};
      this.L = false;
      this.B = "NONE";
      this.j = this.X = this.fa = this.Ha = this.bb = null;
      this.qb = {
        Sj: () => {
          this.Sj();
        },
        jx: (d, e, f, h, k = 0) => {
          var l = Number(this.videoData.O().Ja().j.Ca(g.Cdb) ?? 0);
          if (k > 0 && l > 0 && this.videoData.lengthSeconds > 0 && k / this.videoData.lengthSeconds > l) {
            this.J.ea("tts", {
              dropcap: k
            });
          } else {
            this.jx(d, e, f, h);
          }
        }
      };
      this.ta = this.A = null;
      this.Z = this.J.O();
      this.videoData = this.J.getVideoData();
      this.Va = this.J.ib();
      this.Zf = {
        Bf: {}
      };
      this.D = {
        Bf: {}
      };
      if (g.Ic(this.videoData)) {
        this.B = "OFFLINE";
      } else if (g.O0a(this.videoData, this.J)) {
        this.B = "HLS";
      } else if (nvb(this.videoData, this.J)) {
        this.B = "SABR_LIVE";
      } else if (g.P0a(this.videoData, this.J)) {
        this.B = "LIVE";
      } else if (this.videoData.captionTracks.length) {
        this.B = "INNERTUBE";
      } else if (this.videoData.Ra) {
        this.B = "TTS";
      }
      this.ya = this.Z.controlsType === "3";
      this.Ra = new swb(this.J, this.Z);
      this.ba = new g.H0(this);
      this.K = new g.Z({
        G: "div",
        S: "ytp-caption-window-container",
        W: {
          id: "ytp-caption-window-container"
        }
      });
      this.ga = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 1,
        height: 1
      };
      var b = null;
      var c = g.Ro("yt-html5-player-modules::subtitlesModuleData");
      if (c) {
        b = new g.Io(c);
      }
      this.storage = b;
      b = a.Qc();
      this.zb = !!b?.Fa();
      this.fb = !!b?.Ha();
      this.C = c4(this);
      this.ha = zvb(this);
      g.L(this, this.Ra);
      if (this.C) {
        this.Fa = this.za = null;
      } else {
        this.za = new g.io(this.Rb, undefined, this);
        g.L(this, this.za);
        this.Fa = new g.jo(this.zc, 2000, this);
        g.L(this, this.Fa);
      }
      g.L(this, this.ba);
      g.fM(this.player, this.K.element, 4);
      g.L(this, this.K);
      if (!this.C) {
        this.ba.V(a, "resize", this.ub);
      }
      b = g.DJ(this.Z) && !g.WF() && !this.J.isFullscreen();
      c = this.Z.Ja().j.Ca(g.o_) && g.iJ(this.Z) && g.ms;
      if (this.Kb = (b || c) && !this.C && !this.ha) {
        this.ba.V(a, b ? "resize" : "fullscreentoggled", this.Zb);
      }
      this.ba.V(a, "onPlaybackAudioChange", this.hc);
      this.ba.V(a, g.lA("captions"), d => {
        this.onCueRangeEnter(d);
      });
      this.ba.V(a, g.mA("captions"), d => {
        this.onCueRangeExit(d);
      });
      d4(this, F3() || {});
      g.OL(this.player, "onCaptionsModuleAvailable");
      if (this.B === "HLS" && this.C) {
        a = this.J.Qc().xb();
        if (this.fb) {
          this.ba.V(a.textTracks, "addtrack", this.Jc);
        }
      }
    }
    ka() {
      if (this.C || this.ha) {
        let a = this.J.Qc();
        if (a && !a.oa()) {
          a.U();
        }
      } else {
        e4(this, false);
      }
      super.ka();
    }
    EV() {
      return this.Z.N("html5_honor_caption_availabilities_in_audio_track") && this.B !== "LIVE" && this.B !== "SABR_LIVE";
    }
    Mn() {
      if (this.ya) {
        return this.C || this.ha;
      }
      if (this.B === "HLS") {
        return this.C;
      }
      var a = this.getAudioTrack();
      if (this.EV()) {
        if (!a.captionTracks.length) {
          return false;
        }
        if (!this.j) {
          return true;
        }
      }
      a = D3(a, g.RJ(this.Z));
      if (a === "CAPTIONS_INITIAL_STATE_ON_REQUIRED") {
        return true;
      } else if (a === "CAPTIONS_INITIAL_STATE_OFF_REQUIRED") {
        return i4(this);
      } else if (h4(this) || i4(this)) {
        return true;
      } else {
        return Fvb(this);
      }
    }
    load() {
      super.load();
      this.X = this.getAudioTrack();
      if (this.j) {
        if (this.A) {
          this.Ra.clear();
          if (this.C) {
            Gvb(this, true);
          } else if (this.player.getPresentingPlayerType() !== 3) {
            this.j.D(this.A, "json3", this.qb);
          }
          if ((this.B === "HLS" || !this.C) && !this.ha && !j4(this)) {
            g.OL(this.player, "captionschanged", this.A.j());
          }
        }
      } else {
        let a;
        if (this.B === "OFFLINE") {
          a = new kwb(this.player, this.videoData, this.getAudioTrack());
        } else if (this.B === "SABR_LIVE") {
          a = new owb(this.videoData.j, this.player);
        } else if (this.B === "HLS") {
          a = new Vvb(this.player);
        } else if (this.B === "LIVE") {
          a = new Yvb(this.videoData.j, this.player);
        } else if (this.B === "INNERTUBE") {
          a = new g.a2(this.player, this.videoData, this.getAudioTrack());
        } else {
          a = new g.b2(this.player, this.videoData.Ra, this.videoData.videoId, g.QNa(this.videoData), this.videoData.We, this.videoData.eventId);
        }
        this.j = a;
        g.L(this, this.j);
        this.j.K(this.qb);
      }
    }
    unload() {
      if (this.C && this.A) {
        Gvb(this, false);
      } else {
        if (this.Fa) {
          g.lo(this.Fa);
        }
        this.player.He("captions");
        this.sa = [];
        if (this.j) {
          this.j.B();
        }
        this.Ra.clear();
        if (this.fa) {
          this.player.qf(this.fa);
        }
        this.ub();
      }
      super.unload();
      this.player.Iq();
      g.OL(this.player, "captionschanged", {});
    }
    create() {
      if (this.Mn()) {
        this.load();
      }
      var a;
      a: {
        if (this.Z.N("web_player_nitrate_promo_tooltip") && this.videoData.getPlayerResponse()?.captions?.playerCaptionsTracklistRenderer?.enableTouchCaptionsNitrate && (a = this.videoData.getPlayerResponse()?.captions?.playerCaptionsTracklistRenderer?.captionTracks)) {
          for (let b of a) {
            if (b.kind === "asr" && b.languageCode === "en") {
              a = true;
              break a;
            }
          }
        }
        a = false;
      }
      if (a) {
        this.J.publish("showpromotooltip", this.K.element);
      }
    }
    Sj() {
      if (!g.hT(this.j.j, true).length) {
        if (this.B === "LIVE") {
          bub(this.videoData.j);
        }
      }
      var a = D3(this.player.getAudioTrack(), g.RJ(this.Z));
      a = a === "CAPTIONS_INITIAL_STATE_ON_REQUIRED" ? l4(this, this.L) : a === "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" && i4(this) ? k4(this) : h4(this) || this.L || Fvb(this) ? l4(this, this.L) : i4(this) ? k4(this) : null;
      if (this.B !== "HLS" && this.C || this.ha) {
        Ivb(this, a);
      } else {
        if (!this.A && a) {
          p4(this, a);
        }
        g.OL(this.player, "onCaptionsTrackListChanged");
        g.PL(this.player, "onApiChange");
      }
    }
    uc() {
      var a = this.J.Qc().xb().textTracks;
      var b = null;
      for (let c = 0; c < a.length; c++) {
        if (a[c].mode === "showing") {
          a: {
            b = g.hT(this.j.j, true);
            for (let d = 0; d < b.length; d++) {
              if (b[d].toString() === a[c].id) {
                b = b[d];
                break a;
              }
            }
            b = null;
          }
        }
      }
      if ((this.loaded ? this.A : null) !== b) {
        p4(this, b, true);
      }
    }
    Jc() {
      this.j?.K(this.qb);
    }
    Waa() {
      if (!!this.A || !this.C) {
        this.unload();
      }
    }
    jx(a, b, c, d) {
      if (a) {
        o4(this, this.A ?? undefined);
        if (this.j.ba()) {
          this.sa = [];
          this.J.He("captions");
          C3(this.za);
          this.Ra.reset();
        }
        a: {
          var e = this.Ra;
          d = d || 0;
          c = vvb(e, a, c || 0);
          a = [];
          try {
            for (let N of c) {
              let S = N.trackData;
              let R = N.UO;
              let V = e.Z.N("safari_live_drm_captions_fix");
              if (typeof S !== "string") {
                c = a;
                var f = c.concat;
                if (V && rvb(S)) {
                  var h = xvb(e, S, R);
                } else {
                  var k = e;
                  var l = b;
                  var m = S;
                  var p = R;
                  var q = d;
                  if (!$ub(m)) {
                    throw Error("Invalid binary caption track data");
                  }
                  k.j ||= new mwb(q, l);
                  h = k.j.B(m, p);
                }
                var u = f.call(c, h);
              } else {
                if (S.substring(0, 6) === "WEBVTT") {
                  var v = a.concat(xvb(e, S, R));
                } else {
                  c = a;
                  var z = c.concat;
                  b: {
                    l = e;
                    k = b;
                    if (S[0] === "{") {
                      try {
                        l.j ||= new jwb(yvb(k), {
                          CF: l.Z.Ja().j.Ca(g.pdb),
                          bL: l.Z.Ja().j.Ca(g.rdb)
                        });
                        var F = l.j.B(S, R);
                        break b;
                      } catch (ya) {
                        g.Du(ya);
                        F = [];
                        break b;
                      }
                    }
                    let X = g.gZ(S);
                    if (!X || !X.firstChild) {
                      let ya = Error("Invalid caption track data");
                      ya.params = S;
                      throw ya;
                    }
                    if (X.firstChild.tagName === "timedtext") {
                      if (Number(X.firstChild.getAttribute("format")) === 3) {
                        m = X;
                        l.j ||= new hwb(yvb(k), l.Z.Ja().j.Ca(g.pdb));
                        F = l.j.B(m, R);
                        break b;
                      }
                      let ya = Error("Unsupported subtitles format in web player (Format2)");
                      ya.params = S;
                      throw ya;
                    }
                    if (X.firstChild.tagName === "transcript") {
                      let ya = Error("Unsupported subtitles format in web player (Format1)");
                      ya.params = S;
                      throw ya;
                    }
                    let ta = Error("Invalid caption track data");
                    ta.params = S;
                    throw ta;
                  }
                  v = z.call(c, F);
                }
                u = v;
              }
              a = u;
            }
            var M = a;
            break a;
          } catch (N) {
            g.zB(e.logger, 187101178, `Captions parsing failed: ${N.message}. `);
            e.clear();
            M = [];
            break a;
          }
          M = undefined;
        }
        b = M;
        if (b.length > 0) {
          M = this.A;
          this.Jh(M, !!M, j4(this) ? "g" : this.L ? "m" : "s");
        }
        this.player.qf(b, undefined, this.B === "LIVE" || this.B === "SABR_LIVE");
        if (!!this.L && !this.ha && !j4(this) && !g.Wz(this.Z) && !g.CJ(this.Z) && !g.hw(this.Z) && !g.ZJ(this.Z) && !this.player.isInline()) {
          g.lo(this.Fa);
          b = Sub({
            fn: 0,
            Fl: 5,
            tp: 5,
            xq: 2,
            textAlign: 0,
            zk: 0,
            lang: "id"
          });
          this.Ha = [b];
          M = ["Klik ", " untuk mengubah setelan"];
          if (!this.bb) {
            e = new g.R_(g.Nv());
            g.L(this, e);
            this.bb = e.element;
          }
          e = b.end - b.start;
          if (u = g.EG(this.A)) {
            this.Ha.push(new G3(b.start, e, 0, b.id, u));
          }
          this.Ha.push(new G3(b.start, e, 0, b.id, M[0]), new G3(b.start, e, 0, b.id, this.bb, true), new G3(b.start, e, 0, b.id, M[1], true));
          this.player.qf(this.Ha);
          this.Fa.wd();
        }
        if (!!this.L && !this.ha && !j4(this)) {
          if (this.Z.N("enable_player_captions_persistence_state_machine")) {
            g4(this, true);
          } else if (g.RJ(this.Z)) {
            m4(this, true);
          } else {
            n4(this, true);
          }
          if (this.X) {
            this.X.C = this.A;
          }
          this.player.Iq();
        }
        this.L = false;
      }
    }
    onCueRangeEnter(a) {
      this.sa.push(a);
      C3(this.za);
    }
    onCueRangeExit(a) {
      g.wb(this.sa, a);
      if (this.j instanceof Yvb && this.j.fa) {
        this.player.Vj([a]);
      }
      C3(this.za);
    }
    getCaptionWindowContainerId() {
      return this.K.element.id;
    }
    zc() {
      Cvb(this, this.Ha);
      this.Ha = null;
    }
    Rb() {
      if (!this.Kb || !this.C) {
        this.za.stop();
        g.cc(this.la);
        this.sa.sort(g.kA);
        var a = this.sa;
        if (this.fa) {
          var b = g.fb(a, function (c) {
            return this.fa.indexOf(c) === -1;
          }, this);
          if (b.length) {
            a = b;
          }
        }
        for (let c of a) {
          if (c instanceof R3) {
            if (this.Z.Ja().j.Ca(g.m_)) {
              this.jb.push(c);
            } else {
              Nvb(this, c);
            }
          } else {
            Jvb(this, c);
          }
        }
        Ovb(this);
        a = this.Ka.size ? [] : null;
        for (let [c, d] of Object.entries(this.U)) {
          let e = c;
          let f = d;
          if (!this.la[e]) {
            f.dispose();
            delete this.U[e];
            continue;
          }
          b = this.Ka.has(e);
          if (!f.element.parentNode || b) {
            if (!(f instanceof Rvb) && !(f instanceof Qvb)) {
              g.Qb(this.U, (h, k) => {
                if (k !== e && h.A.params.fn === f.A.params.fn && h.A.params.Fl === f.A.params.Fl && h.A.params.tp === f.A.params.tp) {
                  h.dispose();
                  delete this.U[k];
                }
                return k === e;
              }, this);
            }
            if (!f.element.parentNode) {
              this.K.element.appendChild(f.element);
            }
            a?.push(f);
          }
          f.ba(this.la[e]);
        }
        if (a) {
          Svb(this, a);
          this.Ka.clear();
        }
      }
    }
    M$() {
      d4(this, {}, true);
      g.OL(this.player, "captionssettingschanged");
    }
    M6() {
      var a = this.Z.N("enable_player_captions_new_style_defaults") ? Avb : Bvb;
      var b = a.Bf;
      a = {
        background: b.background,
        backgroundOpacity: b.backgroundOpacity,
        charEdgeStyle: b.charEdgeStyle,
        color: b.color,
        fontFamily: b.fontFamily,
        fontSizeIncrement: b.fontSizeIncrement,
        fontStyle: b.bold && b.italic ? 3 : b.bold ? 1 : b.italic ? 2 : 0,
        textOpacity: b.textOpacity,
        windowColor: a.windowColor,
        windowOpacity: a.windowOpacity
      };
      b = F3() || {};
      if (b.background != null) {
        a.background = b.background;
      }
      if (b.backgroundOverride != null) {
        a.backgroundOverride = b.backgroundOverride;
      }
      if (b.backgroundOpacity != null) {
        a.backgroundOpacity = b.backgroundOpacity;
      }
      if (b.backgroundOpacityOverride != null) {
        a.backgroundOpacityOverride = b.backgroundOpacityOverride;
      }
      if (b.charEdgeStyle != null) {
        a.charEdgeStyle = b.charEdgeStyle;
      }
      if (b.charEdgeStyleOverride != null) {
        a.charEdgeStyleOverride = b.charEdgeStyleOverride;
      }
      if (b.color != null) {
        a.color = b.color;
      }
      if (b.colorOverride != null) {
        a.colorOverride = b.colorOverride;
      }
      if (b.fontFamily != null) {
        a.fontFamily = b.fontFamily;
      }
      if (b.fontFamilyOverride != null) {
        a.fontFamilyOverride = b.fontFamilyOverride;
      }
      if (b.fontSizeIncrement != null) {
        a.fontSizeIncrement = b.fontSizeIncrement;
      }
      if (b.fontSizeIncrementOverride != null) {
        a.fontSizeIncrementOverride = b.fontSizeIncrementOverride;
      }
      if (b.fontStyle != null) {
        a.fontStyle = b.fontStyle;
      }
      if (b.fontStyleOverride != null) {
        a.fontStyleOverride = b.fontStyleOverride;
      }
      if (b.textOpacity != null) {
        a.textOpacity = b.textOpacity;
      }
      if (b.textOpacityOverride != null) {
        a.textOpacityOverride = b.textOpacityOverride;
      }
      if (b.windowColor != null) {
        a.windowColor = b.windowColor;
      }
      if (b.windowColorOverride != null) {
        a.windowColorOverride = b.windowColorOverride;
      }
      if (b.windowOpacity != null) {
        a.windowOpacity = b.windowOpacity;
      }
      if (b.windowOpacityOverride != null) {
        a.windowOpacityOverride = b.windowOpacityOverride;
      }
      return a;
    }
    H2(a, b) {
      var c = {};
      Object.assign(c, F3());
      Object.assign(c, a);
      d4(this, c, b);
      g.OL(this.player, "captionssettingschanged");
    }
    ub() {
      if (!this.C && this.loaded) {
        g.Nb(this.U, function (a, b) {
          a.dispose();
          delete this.U[b];
        }, this);
        this.Rb();
      }
    }
    Bj(a, b) {
      switch (a) {
        case "fontSize":
          if (isNaN(b)) {
            break;
          }
          a = g.Pd(b, -2, 4);
          this.H2({
            fontSizeIncrement: a
          });
          return a;
        case "reload":
          if (b && !this.C) {
            p4(this, this.A, true);
          }
          break;
        case "stickyLoading":
          if (b !== undefined && this.Z.ga) {
            if (this.Z.N("enable_player_captions_persistence_state_machine")) {
              g4(this, !!b && !!b.userInitiated);
            } else if (g.RJ(this.Z)) {
              m4(this, !!b);
            } else {
              n4(this, !!b);
            }
          }
          break;
        case "track":
          return Tvb(this, b);
        case "tracklist":
          if (this.j) {
            return g.jb(g.hT(this.j.j, !!b && !!b.includeAsr), c => c.j());
          } else {
            return [];
          }
        case "translationLanguages":
          if (this.j) {
            return this.j.X.map(c => Object.assign({}, c));
          } else {
            return [];
          }
        case "sampleSubtitles":
          if (!this.C && b !== undefined) {
            e4(this, !!b);
          }
          break;
        case "sampleSubtitlesCustomized":
          if (!this.C) {
            e4(this, !!b, b);
          }
          break;
        case "recommendedTranslationLanguages":
          return g.wG();
        case "defaultTranslationSourceTrackIndices":
          if (this.j) {
            return this.j.ha;
          } else {
            return [];
          }
        case "serverDefaultTrack":
          if (this.Z.ga) {
            return this.getAudioTrack().A?.j() ?? null;
          }
      }
    }
    getOptions() {
      var a = "reload fontSize track tracklist translationLanguages sampleSubtitle".split(" ");
      if (this.Z.ga) {
        a.push("stickyLoading", "serverDefaultTrack");
      }
      return a;
    }
    Kr() {
      var a = this.A;
      if (this.J.Wp("captions")) {
        if (this.Z.N("html5_modify_caption_vss_logging")) {
          if (a = this.videoData.Qq ?? null) {
            return {
              cc: g.xGa(a)
            };
          } else {
            return {};
          }
        }
        if (a) {
          let b = a.vssId;
          if (a.translationLanguage && b) {
            b = `t${b}.${g.FG(a)}`;
          }
          return {
            cc: b
          };
        }
      }
      return {};
    }
    Gaa(a) {
      if (this.isSubtitlesOn()) {
        if (this.Z.N("enable_player_captions_persistence_state_machine") && a) {
          g4(this, false);
        } else if (g.RJ(this.Z)) {
          m4(this, false);
        } else {
          n4(this, false);
        }
        o4(this);
        p4(this, null, true);
      } else {
        this.j2(a);
      }
    }
    j2(a) {
      var b = j4(this) || !this.A ? l4(this, true) : this.A;
      if (b) {
        this.ri(b.vssId, "m");
      }
      if (!this.isSubtitlesOn()) {
        p4(this, b, this.Z.N("enable_player_captions_persistence_state_machine") ? a : true);
      }
    }
    isSubtitlesOn() {
      return !!this.loaded && !!this.A && !j4(this);
    }
    hc() {
      var a = j4(this);
      if (i4(this, a)) {
        p4(this, this.getAudioTrack().j, false);
      } else if (this.videoData.captionTracks.length) {
        if (this.loaded) {
          this.unload();
        }
        if (this.EV()) {
          this.L = false;
          this.A = null;
          if (this.j) {
            this.j.dispose();
            this.j = null;
          }
        }
        if (this.Mn()) {
          if (a) {
            p4(this, l4(this, false), false);
          } else {
            this.load();
          }
        }
      }
    }
    EJ(a) {
      if (a && (this.ga = {
        top: a.top,
        right: a.right,
        bottom: a.bottom,
        left: a.left,
        width: 1 - a.left - a.right,
        height: 1 - a.top - a.bottom
      }, this.K.element.style.top = `${this.ga.top * 100}%`, this.K.element.style.left = `${this.ga.left * 100}%`, this.K.element.style.width = `${this.ga.width * 100}%`, this.K.element.style.height = `${this.ga.height * 100}%`, this.K.element.style.position = "absolute", a = q4(this))) {
        this.K.element.style.width = `${a.width}px`;
        this.K.element.style.height = `${a.height}px`;
      }
    }
    onVideoDataChange(a, b) {
      if (a === "newdata") {
        this.videoData = b;
        if (this.loaded) {
          this.unload();
        }
        this.L = false;
        this.A = null;
        if (this.j) {
          this.j.dispose();
          this.j = null;
          g.OL(this.player, "captionschanged", {});
        }
        if (this.Mn()) {
          this.load();
        }
      }
    }
    getAudioTrack() {
      return this.player.getAudioTrack();
    }
    Zb() {
      if (this.Z.Ja().j.Ca(g.o_)) {
        if (this.loaded) {
          this.unload();
        }
        if (this.ta) {
          this.ba.ud(this.ta);
          this.ta = null;
        }
        var a = this.J.Qc();
        if (a && !a.oa()) {
          a.U();
        }
        this.ya = this.J.isFullscreen() || this.Z.controlsType === "3";
        this.C = c4(this);
        this.ha = zvb(this);
        if (this.j && (this.C || this.ha)) {
          Ivb(this, null);
        }
      } else {
        if ((a = this.J.Qc()) && !a.oa()) {
          a.U();
        }
        if (this.J.isFullscreen()) {
          this.C = this.ya = true;
          if (this.loaded) {
            this.Sj();
          }
        } else {
          this.ya = this.Z.controlsType === "3";
          this.C = c4(this);
        }
      }
      p4(this, this.A);
    }
    Xa() {
      var a = this.videoData.getPlayerResponse()?.captions?.playerCaptionsTracklistRenderer?.openTranscriptCommand;
      if (a) {
        g.KL(this.player, "innertubeCommand", a);
      }
    }
    Jh(a, b, c) {
      var d = /&|,|:|;|(\n)|(\s)|(\/)|(\\)/gm;
      var e = "";
      if (a) {
        e = a.vssId;
        e = e.replace(d, "");
      }
      var f = "";
      if (a && a.getId()) {
        f = a.getId() || "";
      }
      if (a && a.getXtags()) {
        a = a.getXtags();
        a = a.replace(d, "");
        f = f.concat(`;${a}`);
      }
      if (this.B === "HLS") {
        f = "";
      }
      this.J.Jh(b ? e : "", b ? f : "", c);
    }
    ri(a, b) {
      a = (a || "").replace(/&|,|:|;|(\n)|(\s)|(\/)|(\\)/gm, "");
      if (a.length > 0) {
        this.J.ri(a, b);
      }
    }
  });
})(_yt_player);