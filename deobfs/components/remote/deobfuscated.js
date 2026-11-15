(function (g) {
  var window = this;
  "use strict";
  function w6(a, b) {
    return g.Yb(a, b);
  }
  function xBb(a) {
    if (a instanceof g.dk) {
      return a;
    }
    if (typeof a.no == "function") {
      return a.no(false);
    }
    if (g.Ma(a)) {
      let b = 0;
      let c = new g.dk();
      c.next = function () {
        while (true) {
          if (b >= a.length) {
            return g.RZ;
          }
          if (b in a) {
            return g.ek(a[b++]);
          }
          b++;
        }
      };
      return c;
    }
    throw Error("Not implemented");
  }
  function yBb(a, b, c) {
    if (g.Ma(a)) {
      g.db(a, b, c);
    } else {
      for (a = xBb(a);;) {
        let {
          done: d,
          value: e
        } = a.next();
        if (d) {
          break;
        }
        b.call(c, e, undefined, a);
      }
    }
  }
  function x6(a) {
    g.kn(a, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ g.Ua()).toString(36));
    return a;
  }
  function y6(a, b, c) {
    if (!Array.isArray(c)) {
      c = [String(c)];
    }
    g.yja(a.C, b, c);
  }
  function zBb(a, b) {
    var c = [];
    yBb(b, function (d) {
      try {
        var e = g.Lo.prototype.A.call(this, d, true);
      } catch (f) {
        if (f == "Storage: Invalid value was encountered") {
          return;
        }
        throw f;
      }
      if (e === undefined) {
        c.push(d);
      } else if (g.yka(e)) {
        c.push(d);
      }
    }, a);
    return c;
  }
  function ABb(a, b) {
    zBb(a, b).forEach(function (c) {
      g.Lo.prototype.remove.call(this, c);
    }, a);
  }
  function BBb(a) {
    if (a.fb) {
      if (a.fb.locationOverrideToken) {
        return {
          locationOverrideToken: a.fb.locationOverrideToken
        };
      }
      if (a.fb.latitudeE7 != null && a.fb.longitudeE7 != null) {
        return {
          latitudeE7: a.fb.latitudeE7,
          longitudeE7: a.fb.longitudeE7
        };
      }
    }
    return null;
  }
  function CBb(a, b) {
    if (!g.rb(a, b)) {
      a.push(b);
    }
  }
  function z6(a) {
    var b = 0;
    for (let c in a) {
      b++;
    }
    return b;
  }
  function DBb(a) {
    try {
      return g.Ha.JSON.parse(a);
    } catch (b) {}
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
      try {
        return eval("(" + a + ")");
      } catch (b) {}
    }
    throw Error("Invalid JSON string: " + a);
  }
  function A6(a) {
    if (g.Ha.JSON) {
      try {
        return g.Ha.JSON.parse(a);
      } catch (b) {}
    }
    return DBb(a);
  }
  function EBb(a, b, c, d) {
    var e = new g.bn(null);
    if (a) {
      g.cn(e, a);
    }
    if (b) {
      g.dn(e, b);
    }
    if (c) {
      g.en(e, c);
    }
    if (d) {
      e.A = d;
    }
    return e;
  }
  function GBb(a, b) {
    return new FBb(a, b);
  }
  function B6(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function HBb(a, b) {
    return a === b;
  }
  function C6(a, b) {
    this.A = {};
    this.j = [];
    this.Rx = this.size = 0;
    var c = arguments.length;
    if (c > 1) {
      if (c % 2) {
        throw Error("Uneven number of arguments");
      }
      for (var d = 0; d < c; d += 2) {
        this.set(arguments[d], arguments[d + 1]);
      }
    } else if (a) {
      if (a instanceof C6) {
        c = [...a.keys()];
        d = 0;
        for (; d < c.length; d++) {
          this.set(c[d], a.get(c[d]));
        }
      } else {
        for (d in a) {
          this.set(d, a[d]);
        }
      }
    }
  }
  function D6(a) {
    if (a.size != a.j.length) {
      for (var b = 0, c = 0; b < a.j.length;) {
        var d = a.j[b];
        if (B6(a.A, d)) {
          a.j[c++] = d;
        }
        b++;
      }
      a.j.length = c;
    }
    if (a.size != a.j.length) {
      b = {};
      for (d = c = 0; c < a.j.length;) {
        let e = a.j[c];
        if (!B6(b, e)) {
          a.j[d++] = e;
          b[e] = 1;
        }
        c++;
      }
      a.j.length = d;
    }
  }
  function E6(a) {
    this.name = this.id = "";
    this.clientName = "UNKNOWN_INTERFACE";
    this.app = this.clientVersion = "";
    this.type = "REMOTE_CONTROL";
    this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
    this.capabilities = new Set();
    this.j = new Set();
    this.A = new Set();
    this.experiments = new Set();
    this.theme = "u";
    new C6();
    this.model = this.brand = "";
    this.year = 0;
    this.chipset = this.osVersion = this.os = "";
    this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
    if (a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.clientVersion = a.clientVersion || "", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || "", this.theme = a.theme || "u", IBb(this, a.capabilities || ""), JBb(this, a.activeDeviceCapabilities || ""), KBb(this, a.compatibleSenderThemes || ""), LBb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo)) {
      a = JSON.parse(a);
      this.brand = a.brand || "";
      this.model = a.model || "";
      this.year = a.year || 0;
      this.os = a.os || "";
      this.osVersion = a.osVersion || "";
      this.chipset = a.chipset || "";
      this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE";
      this.clientVersion = a.clientVersion || "";
      this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN";
    }
  }
  function IBb(a, b) {
    a.capabilities.clear();
    g.fb(b.split(","), g.Ta(w6, MBb)).forEach(c => {
      a.capabilities.add(c);
    });
  }
  function JBb(a, b) {
    a.j.clear();
    g.fb(b.split(","), g.Ta(w6, NBb)).forEach(c => {
      a.j.add(c);
    });
  }
  function KBb(a, b) {
    a.A.clear();
    g.fb(b.split(","), g.Ta(w6, OBb)).forEach(c => {
      a.A.add(c);
    });
  }
  function LBb(a, b) {
    a.experiments.clear();
    b.split(",").forEach(c => {
      a.experiments.add(c);
    });
  }
  function F6(a) {
    a = a || {};
    this.name = a.name || "";
    this.id = a.id || a.screenId || "";
    this.token = a.token || a.loungeToken || "";
    this.uuid = a.uuid || a.dialId || "";
    this.idType = a.screenIdType || "normal";
    this.secret = a.screenIdSecret || "";
  }
  function G6(a, b) {
    return !!b && (a.id == b || a.uuid == b);
  }
  function PBb(a) {
    return {
      name: a.name,
      screenId: a.id,
      loungeToken: a.token,
      dialId: a.uuid,
      screenIdType: a.idType,
      screenIdSecret: a.secret
    };
  }
  function QBb(a) {
    return new F6(a);
  }
  function RBb(a) {
    if (Array.isArray(a)) {
      return g.jb(a, QBb);
    } else {
      return [];
    }
  }
  function H6(a) {
    if (a) {
      return `{name:"${a.name}",id:${a.id.substr(0, 6)}..,token:${a.token ? ".." + a.token.slice(-6) : "-"},uuid:${a.uuid ? ".." + a.uuid.slice(-6) : "-"},idType:${a.idType},secret:${a.secret ? ".." + a.secret.slice(-6) : "-"}}`;
    } else {
      return "null";
    }
  }
  function I6(a) {
    if (Array.isArray(a)) {
      return "[" + g.jb(a, H6).join(",") + "]";
    } else {
      return "null";
    }
  }
  function J6() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
      var b = Math.random() * 16 | 0;
      return (a == "x" ? b : b & 3 | 8).toString(16);
    });
  }
  function SBb(a) {
    return g.jb(a, function (b) {
      return {
        key: b.id,
        name: b.name
      };
    });
  }
  function K6(a, b) {
    return g.pb(a, function (c) {
      if (c || b) {
        if (!c != !b) {
          return false;
        } else {
          return c.id == b.id;
        }
      } else {
        return true;
      }
    });
  }
  function L6(a, b) {
    return g.pb(a, function (c) {
      return G6(c, b);
    });
  }
  function TBb() {
    var a = g.jr.uG();
    if (a) {
      ABb(a, a.j.no(true));
    }
  }
  function M6() {
    var a = g.lr("yt-remote-connected-devices") || [];
    g.Jb(a);
    return a;
  }
  function UBb(a) {
    if (a.length == 0) {
      return [];
    }
    var b = a[0].indexOf("#");
    var c = b == -1 ? a[0] : a[0].substring(0, b);
    return g.jb(a, function (d, e) {
      if (e == 0) {
        return d;
      } else {
        return d.substring(c.length);
      }
    });
  }
  function VBb(a) {
    g.kr("yt-remote-connected-devices", a, 86400);
  }
  function O6() {
    if (N6) {
      return N6;
    }
    var a = g.lr("yt-remote-device-id");
    if (!a) {
      a = J6();
      g.kr("yt-remote-device-id", a, 31536000);
    }
    for (var b = M6(), c = 1, d = a; g.rb(b, d);) {
      c++;
      d = a + "#" + c;
    }
    return N6 = d;
  }
  function P6() {
    var a = M6();
    var b = O6();
    if (g.nr()) {
      g.Lb(a, b);
    }
    a = UBb(a);
    if (a.length == 0) {
      try {
        g.Dq("remote_sid");
      } catch (c) {}
    } else {
      try {
        g.Bq("remote_sid", a.join(","), -1);
      } catch (c) {}
    }
  }
  function WBb() {
    return g.lr("yt-remote-session-browser-channel");
  }
  function XBb() {
    return g.lr("yt-remote-local-screens") || [];
  }
  function YBb() {
    g.kr("yt-remote-lounge-token-expiration", true, 86400);
  }
  function ZBb(a) {
    if (a.length > 5) {
      a = a.slice(a.length - 5);
    }
    var b = g.jb(XBb(), function (d) {
      return d.loungeToken;
    });
    var c = g.jb(a, function (d) {
      return d.loungeToken;
    });
    if (g.nb(c, function (d) {
      return !g.rb(b, d);
    })) {
      YBb();
    }
    g.kr("yt-remote-local-screens", a, 31536000);
  }
  function Q6(a) {
    if (!a) {
      g.mr("yt-remote-session-screen-id");
      g.mr("yt-remote-session-video-id");
    }
    P6();
    a = M6();
    g.wb(a, O6());
    VBb(a);
  }
  function $Bb() {
    if (!R6) {
      let a = g.Ro();
      if (a) {
        R6 = new g.Io(a);
      }
    }
  }
  function aCb() {
    $Bb();
    if (R6) {
      return !!R6.get("yt-remote-use-staging-server");
    } else {
      return false;
    }
  }
  function S6(a, ...b) {
    g.gt[a] = true;
    try {
      let c = g.et();
      if (c) {
        c.publish(a, ...b);
      }
    } finally {
      g.gt[a] = false;
    }
  }
  function V6() {
    if (!U6) {
      U6 = new g.zm(new bCb());
      let a = g.fq("client_streamz_web_flush_count", -1);
      if (a !== -1) {
        U6.C = a;
      }
    }
    return U6;
  }
  function W6() {
    var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
    if (a) {
      return parseInt(a[1], 10);
    } else {
      return 0;
    }
  }
  function cCb(a) {
    return !!document.currentScript && (document.currentScript.src.indexOf("?" + a) != -1 || document.currentScript.src.indexOf("&" + a) != -1);
  }
  function dCb() {
    if (typeof window.__onGCastApiAvailable == "function") {
      return window.__onGCastApiAvailable;
    } else {
      return null;
    }
  }
  function X6(a) {
    if (a.length) {
      eCb(a.shift(), function () {
        X6(a);
      });
    } else {
      Y6();
    }
  }
  function Y6() {
    var a = dCb();
    if (a) {
      a(false, "No cast extension found");
    }
  }
  function eCb(a, b, c) {
    var d = document.createElement("script");
    d.onerror = b;
    if (c) {
      d.onload = c;
    }
    g.sd(d, g.Dp(a));
    (document.head || document.documentElement).appendChild(d);
  }
  function fCb(a) {
    return "chrome-extension://" + a + "/cast_sender.js";
  }
  function gCb() {
    var a = W6();
    var b = [];
    if (a > 1) {
      let c = a - 1;
      b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
      b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
    }
    return b;
  }
  function Z6() {
    if (hCb) {
      var a = 2;
      var b = dCb();
      function c() {
        a--;
        if (a == 0 && b) {
          b(true);
        }
      }
      window.__onGCastApiAvailable = c;
      eCb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Y6, c);
    }
  }
  function iCb() {
    Z6();
    var a = gCb();
    a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
    X6(a);
  }
  function kCb() {
    Z6();
    var a = gCb();
    a.push(...jCb.map(fCb));
    a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
    X6(a);
  }
  function $6(a, b, c) {
    g.Sj.call(this);
    this.K = c != null ? a.bind(c) : a;
    this.Mk = b;
    this.D = () => {
      lCb(this);
      if (this.B) {
        this.ke = g.hm(this.D, this.B - g.Ua());
        this.B = null;
      } else if (this.A) {
        this.j = true;
      } else {
        this.j = false;
        this.K.apply(null, this.C);
      }
    };
    this.j = false;
    this.A = 0;
    this.B = this.ke = null;
    this.C = [];
  }
  function lCb(a) {
    if (a.ke) {
      g.Ha.clearTimeout(a.ke);
      a.ke = null;
    }
  }
  function a7() {
    this.j = g.Ua();
  }
  function mCb() {
    b7 ||= new a7();
  }
  function nCb() {
    b7 ||= new a7();
  }
  function c7() {
    g.Dl.call(this, "p");
  }
  function d7() {
    g.Dl.call(this, "o");
  }
  function e7() {
    return oCb = oCb || new g.Sl();
  }
  function pCb(a) {
    g.Dl.call(this, "serverreachability", a);
  }
  function f7(a) {
    var b = e7();
    b.dispatchEvent(new pCb(b, a));
  }
  function qCb(a) {
    g.Dl.call(this, "statevent", a);
  }
  function g7(a) {
    var b = e7();
    b.dispatchEvent(new qCb(b, a));
  }
  function rCb(a, b, c, d) {
    g.Dl.call(this, "timingevent", a);
    this.size = b;
    this.rtt = c;
    this.retries = d;
  }
  function h7(a, b) {
    if (typeof a !== "function") {
      throw Error("Fn must not be null and must be a function");
    }
    return g.Ha.setTimeout(function () {
      a();
    }, b);
  }
  function i7() {}
  function j7(a, b, c) {
    this.B = a;
    this.jb = b;
    this.fb = c || 1;
    this.Rc = new g.pn(this);
    this.Ka = 45000;
    this.la = null;
    this.D = false;
    this.U = this.ya = this.L = this.sa = this.ba = this.Ra = this.X = null;
    this.ga = [];
    this.j = null;
    this.K = 0;
    this.C = this.fa = null;
    this.Va = -1;
    this.ha = false;
    this.Ha = 0;
    this.za = null;
    this.bb = this.ta = this.Xa = this.Fa = false;
    this.A = new sCb();
  }
  function sCb() {
    this.B = null;
    this.j = "";
    this.A = false;
  }
  function k7(a, b, c) {
    a.sa = 1;
    a.L = x6(b.clone());
    a.U = c;
    a.Fa = true;
    tCb(a, null);
  }
  function tCb(a, b) {
    a.ba = Date.now();
    l7(a);
    a.ya = a.L.clone();
    y6(a.ya, "t", a.fb);
    a.K = 0;
    var c = a.B.za;
    a.A = new sCb();
    a.j = uCb(a.B, c ? b : null, !a.U);
    if (a.Ha > 0) {
      a.za = new g.t_(a.GW.bind(a, a.j), a.Ha);
    }
    a.Rc.listen(a.j, "readystatechange", a.G3);
    b = a.la ? g.fc(a.la) : {};
    if (a.U) {
      a.fa ||= "POST";
      b["Content-Type"] = "application/x-www-form-urlencoded";
      a.j.send(a.ya, a.fa, a.U, b);
    } else {
      a.fa = "GET";
      a.j.send(a.ya, a.fa, null, b);
    }
    f7(1);
  }
  function wCb(a) {
    if (!vCb(a)) {
      return g.um(a.j);
    }
    var b = g.vm(a.j);
    if (b === "") {
      return "";
    }
    var c = "";
    var d = b.length;
    var e = g.tm(a.j) == 4;
    if (!a.A.B) {
      if (typeof TextDecoder === "undefined") {
        m7(a);
        n7(a);
        return "";
      }
      a.A.B = new g.Ha.TextDecoder();
    }
    for (let f = 0; f < d; f++) {
      a.A.A = true;
      c += a.A.B.decode(b[f], {
        stream: !e || f != d - 1
      });
    }
    b.length = 0;
    a.A.j += c;
    a.K = 0;
    return a.A.j;
  }
  function vCb(a) {
    if (a.j) {
      return a.fa == "GET" && a.sa != 2 && a.B.bd;
    } else {
      return false;
    }
  }
  function yCb(a, b) {
    var c = a.K;
    var d = b.indexOf("\n", c);
    if (d == -1) {
      return o7;
    }
    c = Number(b.substring(c, d));
    if (isNaN(c)) {
      return xCb;
    }
    d += 1;
    if (d + c > b.length) {
      return o7;
    }
    b = b.slice(d, d + c);
    a.K = d + c;
    return b;
  }
  function l7(a) {
    a.Ra = Date.now() + a.Ka;
    zCb(a, a.Ka);
  }
  function zCb(a, b) {
    if (a.X != null) {
      throw Error("WatchDog timer not null");
    }
    a.X = h7(() => {
      a.X = null;
      var c = Date.now();
      if (c - a.Ra >= 0) {
        if (a.sa != 2) {
          f7(3);
          g7(17);
        }
        m7(a);
        a.C = 2;
        n7(a);
      } else {
        zCb(a, a.Ra - c);
      }
    }, b);
  }
  function p7(a) {
    if (a.X) {
      g.Ha.clearTimeout(a.X);
      a.X = null;
    }
  }
  function n7(a) {
    if (!a.B.Fh() && !a.ha) {
      ACb(a.B, a);
    }
  }
  function m7(a) {
    p7(a);
    g.Oj(a.za);
    a.za = null;
    a.Rc.removeAll();
    if (a.j) {
      let b = a.j;
      a.j = null;
      b.abort();
      b.dispose();
    }
  }
  function w7(a, b) {
    try {
      var c = a.B;
      if (c.Sa != 0 && (c.j == a || q7(c.A, a))) {
        if (!a.ta && q7(c.A, a) && c.Sa == 3) {
          try {
            var d = c.fd.j.parse(b);
          } catch (m) {
            d = null;
          }
          if (Array.isArray(d) && d.length == 3) {
            BCb(c, d, a);
            if (r7(c.A) <= 1 && c.Xa) {
              try {
                c.Xa();
              } catch (m) {}
              c.Xa = undefined;
            }
          } else {
            s7(c, 11);
          }
        } else {
          if (a.ta || c.j == a) {
            t7(c);
          }
          if (!g.qc(b)) {
            var e = c.fd.j.parse(b);
            for (b = 0; b < e.length; b++) {
              let m = e[b];
              let p = m[0];
              if (!(p <= c.ta)) {
                c.ta = p;
                m = m[1];
                if (c.Sa == 2) {
                  if (m[0] == "c") {
                    c.Ha = m[1];
                    c.qb = m[2];
                    let q = m[3];
                    if (q != null) {
                      c.HW = q;
                    }
                    let u = m[5];
                    if (u != null && typeof u === "number" && u > 0) {
                      c.Ka = u * 1.5;
                    }
                    d = c;
                    let v = a.bS();
                    if (v) {
                      let z = g.wm(v, "X-Client-Wire-Protocol");
                      if (z) {
                        var f = d.A;
                        if (!f.j && (z.indexOf("spdy") != -1 || z.indexOf("quic") != -1 || z.indexOf("h2") != -1)) {
                          f.C = f.D;
                          f.j = new Set();
                          if (f.A) {
                            u7(f, f.A);
                            f.A = null;
                          }
                        }
                      }
                      if (d.ha) {
                        let F = g.wm(v, "X-HTTP-Session-Id");
                        if (F) {
                          d.fh = F;
                          g.kn(d.sa, d.ha, F);
                        }
                      }
                    }
                    c.Sa = 3;
                    if (c.C) {
                      c.C.NW();
                    }
                    c.Kb = Date.now() - a.ba;
                    d = c;
                    var h = a;
                    d.Zb = CCb(d, d.za ? d.qb : null, d.ub);
                    if (h.ta) {
                      DCb(d.A, h);
                      var k = h;
                      var l = d.Ka;
                      if (l) {
                        k.setTimeout(l);
                      }
                      if (k.X) {
                        p7(k);
                        l7(k);
                      }
                      d.j = h;
                    } else {
                      ECb(d);
                    }
                    if (c.B.length > 0) {
                      v7(c);
                    }
                  } else if (m[0] == "stop" || m[0] == "close") {
                    s7(c, 7);
                  }
                } else if (c.Sa == 3) {
                  if (m[0] == "stop" || m[0] == "close") {
                    if (m[0] == "stop") {
                      s7(c, 7);
                    } else {
                      c.disconnect();
                    }
                  } else if (m[0] != "noop" && c.C) {
                    c.C.MW(m);
                  }
                  c.ga = 0;
                }
              }
            }
          }
        }
      }
      f7(4);
    } catch (m) {}
  }
  function FCb(a) {
    this.D = a || 10;
    if (g.Ha.PerformanceNavigationTiming) {
      a = g.Ha.performance.getEntriesByType("navigation");
      a = a.length > 0 && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2");
    } else {
      a = !!g.Ha.chrome && !!g.Ha.chrome.loadTimes && !!g.Ha.chrome.loadTimes() && !!g.Ha.chrome.loadTimes().wasFetchedViaSpdy;
    }
    this.C = a ? this.D : 1;
    this.j = null;
    if (this.C > 1) {
      this.j = new Set();
    }
    this.A = null;
    this.B = [];
  }
  function GCb(a) {
    if (a.A) {
      return true;
    } else if (a.j) {
      return a.j.size >= a.C;
    } else {
      return false;
    }
  }
  function r7(a) {
    if (a.A) {
      return 1;
    } else if (a.j) {
      return a.j.size;
    } else {
      return 0;
    }
  }
  function q7(a, b) {
    if (a.A) {
      return a.A == b;
    } else if (a.j) {
      return a.j.has(b);
    } else {
      return false;
    }
  }
  function u7(a, b) {
    if (a.j) {
      a.j.add(b);
    } else {
      a.A = b;
    }
  }
  function DCb(a, b) {
    if (a.A && a.A == b) {
      a.A = null;
    } else if (a.j && a.j.has(b)) {
      a.j.delete(b);
    }
  }
  function x7(a) {
    if (a.A != null) {
      return a.B.concat(a.A.ga);
    }
    if (a.j != null && a.j.size !== 0) {
      let b = a.B;
      for (let c of a.j.values()) {
        b = b.concat(c.ga);
      }
      return b;
    }
    return g.zb(a.B);
  }
  function JCb(a, b) {
    var c = !b;
    b = new g.bn(b || "//www.google.com/images/cleardot.gif");
    if (!g.Ha.location || g.Ha.location.protocol != "http") {
      g.cn(b, "https");
    }
    x6(b);
    if (c) {
      HCb(b.toString(), a);
    } else {
      ICb(b.toString(), a);
    }
  }
  function HCb(a, b) {
    var c = new i7();
    if (g.Ha.Image) {
      let d = new Image();
      d.onload = g.Ta(y7, c, "TestLoadImage: loaded", true, b, d);
      d.onerror = g.Ta(y7, c, "TestLoadImage: error", false, b, d);
      d.onabort = g.Ta(y7, c, "TestLoadImage: abort", false, b, d);
      d.ontimeout = g.Ta(y7, c, "TestLoadImage: timeout", false, b, d);
      g.Ha.setTimeout(function () {
        if (d.ontimeout) {
          d.ontimeout();
        }
      }, 10000);
      d.src = a;
    } else {
      b(false);
    }
  }
  function ICb(a, b) {
    var c = new i7();
    var d = new AbortController();
    var e = setTimeout(() => {
      d.abort();
      y7(c, "TestPingServer: timeout", false, b);
    }, 10000);
    fetch(a, {
      signal: d.signal
    }).then(f => {
      clearTimeout(e);
      if (f.ok) {
        y7(c, "TestPingServer: ok", true, b);
      } else {
        y7(c, "TestPingServer: server error", false, b);
      }
    }).catch(() => {
      clearTimeout(e);
      y7(c, "TestPingServer: error", false, b);
    });
  }
  function y7(a, b, c, d, e) {
    try {
      if (e) {
        e.onload = null;
        e.onerror = null;
        e.onabort = null;
        e.ontimeout = null;
      }
      d(c);
    } catch (f) {}
  }
  function KCb() {
    this.j = new z7();
  }
  function A7(a, b, c) {
    if (c && c.o7) {
      return c.o7[a] || b;
    } else {
      return b;
    }
  }
  function LCb(a) {
    this.B = [];
    this.qb = this.Zb = this.sa = this.ub = this.j = this.fh = this.ha = this.la = this.K = this.bb = this.U = null;
    this.Jd = this.Fa = 0;
    this.kd = A7("failFast", false, a);
    this.ya = this.X = this.L = this.D = this.C = null;
    this.zb = true;
    this.uc = this.ta = -1;
    this.jb = this.ga = this.ba = 0;
    this.jd = A7("baseRetryDelayMs", 5000, a);
    this.ge = A7("retryDelaySeedMs", 10000, a);
    this.xd = A7("forwardChannelMaxRetries", 2, a);
    this.Jc = A7("forwardChannelRequestTimeoutMs", 20000, a);
    this.zc = a && a.noa || undefined;
    this.We = a && a.Rma || undefined;
    this.bd = a && a.moa || false;
    this.Ka = undefined;
    this.za = a && a.vaa || false;
    this.Ha = "";
    this.A = new FCb(a && a.Tja);
    this.hc = Math.min(a && a.Lma || 1000, 1000);
    this.fd = new KCb();
    this.Va = a && a.wka || false;
    this.Rc = a && a.kka || false;
    if (this.Va && this.Rc) {
      this.Rc = false;
    }
    this.te = a && a.Jja || false;
    if (a && a.zka) {
      this.zb = false;
    }
    this.Oc = !this.Va && this.zb && a && a.hka || false;
    this.Rb = undefined;
    if (a && a.v_ && a.v_ > 0) {
      this.Rb = a.v_;
    }
    this.Xa = undefined;
    this.Kb = 0;
    this.Ra = false;
    this.fb = this.fa = null;
  }
  function C7(a) {
    if (a.j) {
      B7(a);
      a.j.cancel();
      a.j = null;
    }
  }
  function MCb(a) {
    C7(a);
    if (a.L) {
      g.Ha.clearTimeout(a.L);
      a.L = null;
    }
    t7(a);
    a.A.cancel();
    if (a.D) {
      if (typeof a.D === "number") {
        g.Ha.clearTimeout(a.D);
      }
      a.D = null;
    }
  }
  function v7(a) {
    if (!GCb(a.A) && !a.D) {
      a.D = true;
      g.cm(a.JW, a);
      a.ba = 0;
    }
  }
  function OCb(a, b) {
    if (r7(a.A) >= a.A.C - (a.D ? 1 : 0)) {
      return false;
    }
    if (a.D) {
      a.B = b.ga.concat(a.B);
      return true;
    }
    if (a.Sa == 1 || a.Sa == 2 || a.ba >= (a.kd ? 0 : a.xd)) {
      return false;
    }
    a.D = h7(a.JW.bind(a, b), NCb(a, a.ba));
    a.ba++;
    return true;
  }
  function QCb(a, b) {
    var c;
    if (b) {
      c = b.jb;
    } else {
      c = a.Fa++;
    }
    var d = a.sa.clone();
    g.kn(d, "SID", a.Ha);
    g.kn(d, "RID", c);
    g.kn(d, "AID", a.ta);
    D7(a, d);
    if (a.K && a.U) {
      g.on(d, a.K, a.U);
    }
    c = new j7(a, c, a.ba + 1);
    if (a.K === null) {
      c.la = a.U;
    }
    if (b) {
      a.B = b.ga.concat(a.B);
    }
    b = PCb(a, c, a.hc);
    c.setTimeout(Math.round(a.Jc * 0.5) + Math.round(a.Jc * 0.5 * Math.random()));
    u7(a.A, c);
    k7(c, d, b);
  }
  function D7(a, b) {
    if (a.la) {
      g.Nb(a.la, function (c, d) {
        g.kn(b, d, c);
      });
    }
    if (a.C) {
      g.Nb({}, function (c, d) {
        g.kn(b, d, c);
      });
    }
  }
  function PCb(a, b, c) {
    c = Math.min(a.B.length, c);
    var d = a.C ? a.C.H3.bind(a.C, a) : null;
    a: {
      var e = a.B;
      let k = -1;
      while (true) {
        let l = ["count=" + c];
        if (k == -1) {
          if (c > 0) {
            k = e[0].mapId;
            l.push("ofs=" + k);
          } else {
            k = 0;
          }
        } else {
          l.push("ofs=" + k);
        }
        let m = true;
        for (let p = 0; p < c; p++) {
          var f = e[p].mapId;
          let q = e[p].map;
          f -= k;
          if (f < 0) {
            k = Math.max(0, e[p].mapId - 100);
            m = false;
          } else {
            try {
              f = "req" + f + "_" || "";
              try {
                var h = q instanceof Map ? q : Object.entries(q);
                for (let [u, v] of h) {
                  let z = v;
                  if (g.Na(v)) {
                    z = g.nm(v);
                  }
                  l.push(f + u + "=" + encodeURIComponent(z));
                }
              } catch (u) {
                l.push(f + "type=" + encodeURIComponent("_badmap"));
                throw u;
              }
            } catch (u) {
              if (d) {
                d(q);
              }
            }
          }
        }
        if (m) {
          h = l.join("&");
          break a;
        }
      }
      h = undefined;
    }
    a = a.B.splice(0, c);
    b.ga = a;
    return h;
  }
  function ECb(a) {
    if (!a.j && !a.L) {
      a.jb = 1;
      g.cm(a.IW, a);
      a.ga = 0;
    }
  }
  function E7(a) {
    if (a.j || a.L || a.ga >= 3) {
      return false;
    }
    a.jb++;
    a.L = h7(() => a.IW(), NCb(a, a.ga));
    a.ga++;
    return true;
  }
  function B7(a) {
    if (a.fa != null) {
      g.Ha.clearTimeout(a.fa);
      a.fa = null;
    }
  }
  function RCb(a) {
    a.j = new j7(a, "rpc", a.jb);
    if (a.K === null) {
      a.j.la = a.U;
    }
    a.j.Ha = 0;
    var b = a.Zb.clone();
    g.kn(b, "RID", "rpc");
    g.kn(b, "SID", a.Ha);
    g.kn(b, "AID", a.ta);
    g.kn(b, "CI", a.ya ? "0" : "1");
    if (!a.ya && a.Rb) {
      g.kn(b, "TO", a.Rb);
    }
    g.kn(b, "TYPE", "xmlhttp");
    D7(a, b);
    if (a.K && a.U) {
      g.on(b, a.K, a.U);
    }
    if (a.Ka) {
      a.j.setTimeout(a.Ka);
    }
    var c = a.j;
    a = a.qb;
    c.sa = 1;
    c.L = x6(b.clone());
    c.U = null;
    c.Fa = true;
    tCb(c, a);
  }
  function BCb(a, b, c) {
    if (b[0] == 0) {
      SCb(a, c);
    } else {
      a.uc = b[1];
      if (a.uc - a.ta > 0 && b[2] < 37500 && a.ya && a.ga == 0 && !a.X) {
        a.X = h7(() => {
          if (a.X != null) {
            a.X = null;
            C7(a);
            E7(a);
            g7(19);
          }
        }, 6000);
      }
    }
  }
  function SCb(a, b) {
    if (!a.L) {
      if (a.j) {
        if (a.j.ba + 3000 < b.ba) {
          t7(a);
          C7(a);
        } else {
          return;
        }
      }
      E7(a);
      g7(18);
    }
  }
  function t7(a) {
    if (a.X != null) {
      g.Ha.clearTimeout(a.X);
      a.X = null;
    }
  }
  function ACb(a, b) {
    var c = null;
    if (a.j == b) {
      t7(a);
      B7(a);
      a.j = null;
      var d = 2;
    } else if (q7(a.A, b)) {
      c = b.ga;
      DCb(a.A, b);
      d = 1;
    } else {
      return;
    }
    if (a.Sa != 0) {
      if (b.D) {
        if (d == 1) {
          c = b.U ? b.U.length : 0;
          b = Date.now() - b.ba;
          var e = a.ba;
          d = e7();
          d.dispatchEvent(new rCb(d, c, b, e));
          v7(a);
        } else {
          ECb(a);
        }
      } else {
        var f = b.Va;
        e = b.getLastError();
        if (e == 3 || e == 0 && f > 0 || (d != 1 || !OCb(a, b)) && (d != 2 || !E7(a))) {
          if (c && c.length > 0) {
            b = a.A;
            b.B = b.B.concat(c);
          }
          switch (e) {
            case 1:
              s7(a, 5);
              break;
            case 4:
              s7(a, 10);
              break;
            case 3:
              s7(a, 6);
              break;
            default:
              s7(a, 2);
          }
        }
      }
    }
  }
  function NCb(a, b) {
    var c = a.jd + Math.floor(Math.random() * a.ge);
    if (!a.isActive()) {
      c *= 2;
    }
    return c * b;
  }
  function s7(a, b) {
    if (b == 2) {
      JCb(c => {
        if (c) {
          g7(2);
        } else {
          g7(1);
        }
      }, a.We);
    } else {
      g7(2);
    }
    TCb(a, b);
  }
  function TCb(a, b) {
    a.Sa = 0;
    if (a.C) {
      a.C.LW(b);
    }
    UCb(a);
    MCb(a);
  }
  function UCb(a) {
    a.Sa = 0;
    a.fb = [];
    if (a.C) {
      let b = x7(a.A);
      if (b.length != 0 || a.B.length != 0) {
        g.Bb(a.fb, b);
        g.Bb(a.fb, a.B);
        a.A.B.length = 0;
        g.zb(a.B);
        a.B.length = 0;
      }
      a.C.KW();
    }
  }
  function VCb(a) {
    if (a.Sa == 0) {
      return a.fb;
    }
    var b = [];
    g.Bb(b, x7(a.A));
    g.Bb(b, a.B);
    return b;
  }
  function CCb(a, b, c) {
    var d = g.ln(c);
    if (d.j != "") {
      if (b) {
        g.dn(d, b + "." + d.j);
      }
      g.en(d, d.B);
    } else {
      d = g.Ha.location;
      d = EBb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c);
    }
    b = a.ha;
    c = a.fh;
    if (b && c) {
      g.kn(d, b, c);
    }
    g.kn(d, "VER", a.HW);
    D7(a, d);
    return d;
  }
  function uCb(a, b, c) {
    if (b && !a.za) {
      throw Error("Can't create secondary domain capable XhrIo object.");
    }
    b = a.bd && !a.zc ? new g.qm(new g.Ym({
      U1: c
    })) : new g.qm(a.zc);
    b.L = a.za;
    return b;
  }
  function WCb() {}
  function XCb() {}
  function G7(a, b) {
    g.Sl.call(this);
    this.j = new LCb(b);
    this.K = a;
    this.A = b && b.i8 || null;
    a = b && b.h8 || null;
    if (b && b.Sja) {
      if (a) {
        a["X-Client-Protocol"] = "webchannel";
      } else {
        a = {
          "X-Client-Protocol": "webchannel"
        };
      }
    }
    this.j.U = a;
    a = b && b.tma || null;
    if (b && b.I_) {
      if (a) {
        a["X-WebChannel-Content-Type"] = b.I_;
      } else {
        a = {
          "X-WebChannel-Content-Type": b.I_
        };
      }
    }
    if (b && b.RX) {
      if (a) {
        a["X-WebChannel-Client-Profile"] = b.RX;
      } else {
        a = {
          "X-WebChannel-Client-Profile": b.RX
        };
      }
    }
    this.j.bb = a;
    if ((a = b && b.qma) && !g.qc(a)) {
      this.j.K = a;
    }
    this.L = b && b.vaa || false;
    this.D = b && b.zna || false;
    if ((b = b && b.h7) && !g.qc(b)) {
      this.j.ha = b;
      if (g.Xb(this.A, b)) {
        a = this.A;
        if (b in a) {
          delete a[b];
        }
      }
    }
    this.B = new F7(this);
  }
  function YCb(a) {
    c7.call(this);
    if (a.__headers__) {
      this.headers = a.__headers__;
      this.statusCode = a.__status__;
      delete a.__headers__;
      delete a.__status__;
    }
    var b = a.__sm__;
    if (b) {
      this.data = (this.j = g.Sb(b)) ? g.dc(b, this.j) : b;
    } else {
      this.data = a;
    }
  }
  function ZCb(a) {
    d7.call(this);
    this.status = 1;
    this.errorCode = a;
  }
  function F7(a) {
    this.j = a;
  }
  function H7(a, b) {
    this.C = a;
    this.j = b;
  }
  function I7(a, b) {
    if (typeof a !== "function") {
      throw Error("Fn must not be null and must be a function");
    }
    return g.Ha.setTimeout(function () {
      a();
    }, b);
  }
  function K7() {
    J7.dispatchEvent(new $Cb());
  }
  function L7(a, b, c) {
    this.j = a;
    this.K = b;
    this.D = c || 1;
    this.A = 45000;
    this.B = new g.pn(this);
    this.C = new g.gm();
    this.C.setInterval(250);
  }
  function bDb(a, b, c) {
    a.dK = 1;
    a.JE = x6(b.clone());
    a.ey = c;
    a.CP = true;
    aDb(a, null);
  }
  function M7(a, b, c, d, e) {
    a.dK = 1;
    a.JE = x6(b.clone());
    a.ey = null;
    a.CP = c;
    if (e) {
      a.t1 = false;
    }
    aDb(a, d);
  }
  function aDb(a, b) {
    a.NE = Date.now();
    N7(a);
    a.cK = a.JE.clone();
    y6(a.cK, "t", a.D);
    a.fK = 0;
    a.al = a.j.FP(a.j.OE() ? b : null);
    if (a.DP > 0) {
      a.bK = new g.t_(a.OW.bind(a, a.al), a.DP);
    }
    a.B.listen(a.al, "readystatechange", a.I3);
    b = a.by ? g.fc(a.by) : {};
    if (a.ey) {
      a.eK = "POST";
      b["Content-Type"] = "application/x-www-form-urlencoded";
      a.al.send(a.cK, a.eK, a.ey, b);
    } else {
      a.eK = "GET";
      if (a.t1 && !g.ne) {
        b.Connection = "close";
      }
      a.al.send(a.cK, a.eK, null, b);
    }
    a.j.xu(1);
  }
  function dDb(a, b) {
    var c = a.fK;
    var d = b.indexOf("\n", c);
    if (d == -1) {
      return O7;
    }
    c = Number(b.substring(c, d));
    if (isNaN(c)) {
      return cDb;
    }
    d += 1;
    if (d + c > b.length) {
      return O7;
    }
    b = b.slice(d, d + c);
    a.fK = d + c;
    return b;
  }
  function N7(a) {
    a.EP = Date.now() + a.A;
    eDb(a, a.A);
  }
  function eDb(a, b) {
    if (a.jB != null) {
      throw Error("WatchDog timer not null");
    }
    a.jB = I7(() => {
      a.jB = null;
      var c = Date.now();
      if (c - a.EP >= 0) {
        if (a.dK != 2) {
          a.j.xu(3);
        }
        P7(a);
        a.iB = 2;
        K7();
        Q7(a);
      } else {
        eDb(a, a.EP - c);
      }
    }, b);
  }
  function fDb(a) {
    if (a.jB) {
      g.Ha.clearTimeout(a.jB);
      a.jB = null;
    }
  }
  function Q7(a) {
    if (!a.j.Fh() && !a.KE) {
      a.j.HP(a);
    }
  }
  function P7(a) {
    fDb(a);
    g.Oj(a.bK);
    a.bK = null;
    a.C.stop();
    a.B.removeAll();
    if (a.al) {
      let b = a.al;
      a.al = null;
      b.abort();
      b.dispose();
    }
    a.q2 &&= null;
  }
  function gDb(a, b) {
    try {
      a.j.PW(a, b);
      a.j.xu(4);
    } catch (c) {}
  }
  function iDb(a, b) {
    if (!b) {
      b = new g.bn("//www.google.com/images/cleardot.gif");
      x6(b);
    }
    hDb(b.toString(), 10000, a);
  }
  function jDb(a, b, c, d, e) {
    if (d == 0) {
      c(false);
    } else {
      var f = e || 0;
      d--;
      hDb(a, b, function (h) {
        if (h) {
          c(true);
        } else {
          g.Ha.setTimeout(function () {
            jDb(a, b, c, d, f);
          }, f);
        }
      });
    }
  }
  function hDb(a, b, c) {
    var d = new Image();
    d.onload = function () {
      try {
        R7(d);
        c(true);
      } catch (e) {}
    };
    d.onerror = function () {
      try {
        R7(d);
        c(false);
      } catch (e) {}
    };
    d.onabort = function () {
      try {
        R7(d);
        c(false);
      } catch (e) {}
    };
    d.ontimeout = function () {
      try {
        R7(d);
        c(false);
      } catch (e) {}
    };
    g.Ha.setTimeout(function () {
      if (d.ontimeout) {
        d.ontimeout();
      }
    }, b);
    d.src = a;
  }
  function R7(a) {
    a.onload = null;
    a.onerror = null;
    a.onabort = null;
    a.ontimeout = null;
  }
  function kDb(a) {
    this.j = a;
    this.A = new z7();
  }
  function lDb(a) {
    var b = S7(a.j, a.uF, "/mail/images/cleardot.gif");
    x6(b);
    jDb(b.toString(), 5000, c => {
      if (c) {
        a.Sa = 2;
        T7(a);
      } else {
        K7();
        var d = a.j;
        d.Oq = d.Qv.jt;
        U7(d, 9);
      }
      if (c) {
        a.xu(2);
      }
    }, 3, 2000);
    a.xu(1);
  }
  function T7(a) {
    var b = a.j.C;
    if (b != null) {
      K7();
      if (b) {
        K7();
        V7(a.j, a, false);
      } else {
        K7();
        V7(a.j, a, true);
      }
    } else {
      a.bn = new L7(a);
      a.bn.by = a.GP;
      b = a.j;
      b = S7(b, b.OE() ? a.gK : null, a.IP);
      K7();
      y6(b, "TYPE", "xmlhttp");
      M7(a.bn, b, false, a.gK, false);
    }
  }
  function W7(a, b, c) {
    this.Sa = 1;
    this.j = [];
    this.A = [];
    this.B = new z7();
    this.L = a || null;
    this.C = b ?? null;
    this.K = c || false;
  }
  function mDb(a, b) {
    this.mapId = a;
    this.map = b;
    this.context = null;
  }
  function nDb(a, b, c, d) {
    g.Dl.call(this, "timingevent", a);
    this.size = b;
    this.rtt = c;
    this.retries = d;
  }
  function oDb(a) {
    g.Dl.call(this, "serverreachability", a);
  }
  function pDb(a) {
    a.J3(1, 0);
    a.QE = S7(a, null, a.KP);
    X7(a);
  }
  function qDb(a) {
    if (a.Qv) {
      a.Qv.abort();
      a.Qv = null;
    }
    if (a.yi) {
      a.yi.cancel();
      a.yi = null;
    }
    if (a.Nq) {
      g.Ha.clearTimeout(a.Nq);
      a.Nq = null;
    }
    Y7(a);
    if (a.ym) {
      a.ym.cancel();
      a.ym = null;
    }
    if (a.Av) {
      g.Ha.clearTimeout(a.Av);
      a.Av = null;
    }
  }
  function Z7(a, b) {
    if (a.Sa == 0) {
      throw Error("Invalid operation: sending map when state is closed");
    }
    a.j.push(new mDb(a.K3++, b));
    if (a.Sa == 2 || a.Sa == 3) {
      X7(a);
    }
  }
  function rDb(a) {
    var b = 0;
    if (a.yi) {
      b++;
    }
    if (a.ym) {
      b++;
    }
    return b;
  }
  function X7(a) {
    if (!a.ym && !a.Av) {
      a.Av = I7(b => a.SW(b), 0);
      a.lB = 0;
    }
  }
  function tDb(a, b) {
    if (a.Sa == 1) {
      if (!b) {
        a.RE = Math.floor(Math.random() * 100000);
        let c = a.RE++;
        b = new L7(a, c);
        b.by = a.ko;
        let d = $7(a);
        let e = a.QE.clone();
        g.kn(e, "RID", c);
        g.kn(e, "CVER", "1");
        a8(a, e);
        bDb(b, e, d);
        a.ym = b;
        a.Sa = 2;
      }
    } else if (a.Sa == 3) {
      if (b) {
        sDb(a, b);
      } else if (a.j.length != 0 && !a.ym) {
        sDb(a);
      }
    }
  }
  function sDb(a, b) {
    if (b) {
      if (a.gy > 6) {
        a.j = a.A.concat(a.j);
        a.A.length = 0;
        var c = a.RE - 1;
        b = $7(a);
      } else {
        c = b.K;
        b = b.ey;
      }
    } else {
      c = a.RE++;
      b = $7(a);
    }
    var d = a.QE.clone();
    g.kn(d, "SID", a.nB);
    g.kn(d, "RID", c);
    g.kn(d, "AID", a.mB);
    a8(a, d);
    c = new L7(a, c, a.lB + 1);
    c.by = a.ko;
    c.setTimeout(10000 + Math.round(Math.random() * 10000));
    a.ym = c;
    bDb(c, d, b);
  }
  function a8(a, b) {
    if (a.xj && (a = a.xj.XW(a))) {
      g.Nb(a, function (c, d) {
        g.kn(b, d, c);
      });
    }
  }
  function $7(a) {
    var b = Math.min(a.j.length, 1000);
    var c = ["count=" + b];
    if (a.gy > 6 && b > 0) {
      var d = a.j[0].mapId;
      c.push("ofs=" + d);
    } else {
      d = 0;
    }
    for (let e = 0; e < b; e++) {
      let f = a.j[e].mapId;
      let h = a.j[e].map;
      f = a.gy <= 6 ? e : f - d;
      try {
        g.Nb(h, function (k, l) {
          c.push("req" + f + "_" + l + "=" + encodeURIComponent(k));
        });
      } catch (k) {
        c.push("req" + f + "_type=" + encodeURIComponent("_badmap"));
      }
    }
    a.A = a.A.concat(a.j.splice(0, b));
    return c.join("&");
  }
  function vDb(a) {
    if (!a.yi && !a.Nq) {
      a.D = 1;
      a.Nq = I7(() => {
        a.Nq = null;
        uDb(a);
      }, 0);
      a.kB = 0;
    }
  }
  function b8(a) {
    if (a.yi || a.Nq || a.kB >= 3) {
      return false;
    }
    a.D++;
    a.Nq = I7(() => {
      a.Nq = null;
      uDb(a);
    }, wDb(a, a.kB));
    a.kB++;
    return true;
  }
  function uDb(a) {
    a.yi = new L7(a, "rpc", a.D);
    a.yi.by = a.ko;
    a.yi.DP = 0;
    var b = a.QW.clone();
    g.kn(b, "RID", "rpc");
    g.kn(b, "SID", a.nB);
    g.kn(b, "CI", a.pP ? "0" : "1");
    g.kn(b, "AID", a.mB);
    a8(a, b);
    g.kn(b, "TYPE", "xmlhttp");
    M7(a.yi, b, true, a.JP, false);
  }
  function V7(a, b, c) {
    a.pP = a.C == null ? c : !a.C;
    a.Oq = b.jt;
    if (!a.K) {
      pDb(a);
    }
  }
  function yDb(a, b) {
    if (b[0] == 0) {
      xDb(a);
    } else {
      a.RW = b[1];
      if (a.RW - a.mB > 0 && b[2] < 37500 && a.pP && a.kB == 0 && !a.hy) {
        a.hy = I7(() => {
          if (a.hy != null) {
            a.hy = null;
            a.yi.cancel();
            a.yi = null;
            b8(a);
            K7();
          }
        }, 6000);
      }
    }
  }
  function xDb(a) {
    if (!a.Nq) {
      if (a.yi) {
        if (a.yi.NE + 3000 < a.ym.NE) {
          Y7(a);
          a.yi.cancel();
          a.yi = null;
        } else {
          return;
        }
      }
      b8(a);
      K7();
    }
  }
  function Y7(a) {
    if (a.hy != null) {
      g.Ha.clearTimeout(a.hy);
      a.hy = null;
    }
  }
  function wDb(a, b) {
    var c = 5000 + Math.floor(Math.random() * 10000);
    if (!a.isActive()) {
      c *= 2;
    }
    return c * b;
  }
  function U7(a, b) {
    if (b == 2 || b == 9) {
      let c = null;
      if (a.xj) {
        c = null;
      }
      iDb(d => {
        if (d) {
          K7();
        } else {
          K7();
          zDb(a, 8);
        }
      }, c);
    } else {
      K7();
    }
    zDb(a, b);
  }
  function zDb(a, b) {
    a.Sa = 0;
    if (a.xj) {
      a.xj.TW(b);
    }
    ADb(a);
    qDb(a);
  }
  function ADb(a) {
    a.Sa = 0;
    a.Oq = -1;
    if (a.xj) {
      if (a.A.length == 0 && a.j.length == 0) {
        a.xj.LP();
      } else {
        let b = g.zb(a.A);
        let c = g.zb(a.j);
        a.A.length = 0;
        a.j.length = 0;
        a.xj.LP(b, c);
      }
    }
  }
  function S7(a, b, c) {
    var d = g.ln(c);
    if (d.j != "") {
      if (b) {
        g.dn(d, b + "." + d.j);
      }
      g.en(d, d.B);
    } else {
      let e = window.location;
      d = EBb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
    }
    if (a.PE) {
      g.Nb(a.PE, function (e, f) {
        g.kn(d, f, e);
      });
    }
    g.kn(d, "VER", a.gy);
    a8(a, d);
    return d;
  }
  function BDb() {}
  function CDb() {
    this.j = [];
    this.A = [];
  }
  function DDb(a) {
    return a.j.length === 0 && a.A.length === 0;
  }
  function EDb(a, b) {
    this.action = a;
    this.params = b || {};
  }
  function c8(a, b) {
    g.Sj.call(this);
    this.j = new g.jo(this.Z9, 0, this);
    g.L(this, this.j);
    this.Mk = 5000;
    this.retryCount = this.CH = 0;
    if (typeof a === "function") {
      if (b) {
        a = (0, g.Ra)(a, b);
      }
    } else if (a && typeof a.handleEvent === "function") {
      a = (0, g.Ra)(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
    this.A = a;
  }
  function d8(a, b, c = false, d = () => "", e = false, f = false, h = false, k = () => g.am({}), l = false, m, p, q) {
    this.ya = q;
    this.Fa = a;
    this.fa = b;
    this.L = new g.Ho();
    this.K = p;
    this.A = (this.B = !!m) ? m(() => {
      this.AO();
    }) : new c8(this.AO, this);
    this.j = null;
    this.X = false;
    this.ba = null;
    this.la = "";
    this.ha = this.ga = 0;
    this.C = [];
    this.bb = c;
    this.ta = d;
    this.U = f;
    this.za = k;
    this.fb = h;
    this.sa = null;
    this.D = g.am();
    this.jb = e;
    this.Xa = l;
    this.Rc = new FDb();
    this.Ha = new GDb();
    this.Va = new HDb();
    this.Ra = new IDb();
    this.Ka = new JDb();
    this.qb = new KDb();
    this.ub = new LDb();
  }
  function MDb(a, b, c, d, e) {
    e8(a);
    if (a.j) {
      let f = g.Mp("ID_TOKEN");
      let h = a.j.ko || {};
      if (f) {
        h["x-youtube-identity-token"] = f;
      } else {
        delete h["x-youtube-identity-token"];
      }
      a.j.ko = h;
    }
    if (d) {
      if (d.getState() == 3 || rDb(d) != 0) {
        d.getState();
      }
      a.j.connect(b, c, a.fa, d.nB, d.mB);
    } else if (e) {
      a.j.connect(b, c, a.fa, e.sessionId, e.arrayId);
    } else {
      a.j.connect(b, c, a.fa);
    }
    if (a.B && !a.A.isActive()) {
      a.A.start();
    }
    if (a.K) {
      a.K.boa();
    }
  }
  function ODb(a, b) {
    if (a.Xa) {
      return !Object.values(NDb).includes(b);
    } else {
      return false;
    }
  }
  async function PDb(a) {
    try {
      await f8(a);
    } finally {
      var b = a.C;
      a.C = [];
      var c = b;
      b = b.length;
      for (let d = 0; d < b; ++d) {
        Z7(a.j, c[d]);
      }
      g8(a);
      g8(a);
    }
  }
  function g8(a) {
    a.publish("handlerOpened");
    a.Rc.Pe("BROWSER_CHANNEL");
  }
  function e8(a) {
    if (a.j) {
      let b = a.ta();
      let c = a.j.ko || {};
      if (b) {
        c["x-youtube-lounge-xsrf-token"] = b;
      } else {
        delete c["x-youtube-lounge-xsrf-token"];
      }
      a.j.ko = c;
    }
  }
  function f8(a) {
    if (!a.fb) {
      return QDb(a);
    }
    if (a.sa === null) {
      a.sa = QDb(a);
    }
    return a.sa;
  }
  function QDb(a) {
    return g.em(a.za().then(b => {
      if (a.j) {
        let c = a.j.ko || {};
        if (b && Object.keys(b).length > 0) {
          c = {
            ...c,
            ...b
          };
        } else {
          delete c.Authorization;
        }
        a.j.ko = c;
      }
    }).am(() => {}), () => {
      a.sa = null;
    });
  }
  function h8(a) {
    this.scheme = "https";
    this.port = this.domain = "";
    this.j = "/api/lounge";
    this.A = true;
    a = a || document.location.href;
    var b = Number(g.fj(a)[4] || null) || "";
    if (b) {
      this.port = ":" + b;
    }
    this.domain = g.gj(a) || "";
    a = g.Lc();
    if (a.search("MSIE") >= 0) {
      a = a.match(/MSIE ([\d.]+)/)[1];
      if (g.tc(a, "10.0") < 0) {
        this.A = false;
      }
    }
  }
  function i8(a, b) {
    var c = a.j;
    if (a.A) {
      c = a.scheme + "://" + a.domain + a.port + a.j;
    }
    return g.nj(c + b, {});
  }
  function RDb(a) {
    g.Ll(a.channel, "m", () => {
      a.K = 3;
      a.B.reset();
      a.U = null;
      a.L = 0;
      for (let b of a.ba) {
        if (a.channel) {
          a.channel.send(b);
        }
      }
      a.ba = [];
      a.publish("webChannelOpened");
      a.ta.Pe("WEB_CHANNEL");
    });
    g.Ll(a.channel, "n", () => {
      a.K = 0;
      if (!a.B.isActive()) {
        a.publish("webChannelClosed");
      }
      var b = a.channel?.C().B();
      if (b) {
        a.ba = [...b];
      }
      a.ha.Pe("WEB_CHANNEL");
    });
    g.Ll(a.channel, "p", b => {
      var c = b.data;
      if (c[0] === "gracefulReconnect") {
        a.B.start();
        if (a.channel) {
          a.channel.close();
        }
      } else {
        a.publish("webChannelMessage", new EDb(c[0], c[1]));
      }
      a.Li = b.statusCode;
      a.sa.Pe("WEB_CHANNEL");
    });
    g.Ll(a.channel, "o", () => {
      if (a.Li !== 401) {
        a.B.start();
      }
      a.publish("webChannelError");
      a.la.Pe("WEB_CHANNEL", "");
    });
  }
  function j8(a) {
    var b = a.fa();
    if (b) {
      a.C["x-youtube-lounge-xsrf-token"] = b;
    } else {
      delete a.C["x-youtube-lounge-xsrf-token"];
    }
  }
  function VDb(a, b, c = () => "", d, e) {
    var f = () => new d8(i8(a, "/bc"), b, false, c, d);
    if (g.eq("enable_mdx_web_channel_desktop")) {
      return new SDb(() => new TDb(i8(a, "/wc"), b, c));
    } else {
      return new UDb(f, e);
    }
  }
  function ZDb() {
    var a = WDb;
    XDb();
    k8.push(a);
    YDb();
  }
  function l8(a, b) {
    XDb();
    var c = $Db(a, String(b));
    if (k8.length == 0) {
      aEb(c);
    } else {
      YDb();
      g.db(k8, function (d) {
        d(c);
      });
    }
  }
  function m8(a) {
    l8("CP", a);
  }
  function XDb() {
    if (!k8) {
      k8 = g.Ja("yt.mdx.remote.debug.handlers_") || [];
      g.Ia("yt.mdx.remote.debug.handlers_", k8);
    }
  }
  function aEb(a) {
    var b = (n8 + 1) % 50;
    n8 = b;
    o8[b] = a;
    p8 ||= b == 49;
  }
  function YDb() {
    var a = k8;
    if (o8[0]) {
      var b = p8 ? n8 : -1;
      do {
        b = (b + 1) % 50;
        let c = o8[b];
        g.db(a, function (d) {
          d(c);
        });
      } while (b != n8);
      o8 = Array(50);
      n8 = -1;
      p8 = false;
    }
  }
  function $Db(a, b) {
    var c = (Date.now() - bEb) / 1000;
    if (c.toFixed) {
      c = c.toFixed(3);
    }
    var d = [];
    d.push("[", c + "s", "] ");
    d.push("[", "yt.mdx.remote", "] ");
    d.push(a + ": " + b, "\n");
    return d.join("");
  }
  function cEb(a, b) {
    var c = a.get(b.uuid) || a.get(b.id);
    if (c) {
      a = c.name;
      c.id = b.id || c.id;
      c.name = b.name;
      c.token = b.token;
      c.uuid = b.uuid || c.uuid;
      return c.name != a;
    }
    a.screens.push(b);
    return true;
  }
  function dEb(a, b) {
    var c = a.screens.length != b.length;
    a.screens = g.fb(a.screens, function (e) {
      return !!K6(b, e);
    });
    var d = b.length;
    for (let e = 0; e < d; e++) {
      c = cEb(a, b[e]) || c;
    }
    return c;
  }
  function eEb(a, b) {
    var c = a.screens.length;
    a.screens = g.fb(a.screens, function (d) {
      return !(d || b ? !d != !b ? 0 : d.id == b.id : 1);
    });
    return a.screens.length < c;
  }
  function fEb(a) {
    if (a.screens.length) {
      let b = g.jb(a.screens, function (d) {
        return d.id;
      });
      let c = i8(a.A, "/pairing/get_lounge_token_batch");
      a.A.sendRequest("POST", c, {
        screen_ids: b.join(",")
      }, (0, g.Ra)(a.W6, a), (0, g.Ra)(a.V6, a));
    }
  }
  function q8(a) {
    if (g.eq("deprecate_pair_servlet_enabled")) {
      return dEb(a, []);
    }
    var b = RBb(XBb());
    b = g.fb(b, function (c) {
      return !c.uuid;
    });
    return dEb(a, b);
  }
  function r8(a, b) {
    ZBb(g.jb(a.screens, PBb));
    if (b) {
      YBb();
    }
  }
  function s8(a) {
    l8("OnlineScreenService", a);
  }
  function t8(a) {
    if (!isNaN(a.B)) {
      g.mq(a.B);
    }
    a.B = g.kq((0, g.Ra)(a.L, a), a.C > 0 && a.C < g.Ua() ? 20000 : 10000);
  }
  function u8(a, b) {
    a: if (z6(b) != z6(a.j)) {
      var c = false;
    } else {
      c = g.Wb(b);
      var d = c.length;
      for (let e = 0; e < d; ++e) {
        if (!a.j[c[e]]) {
          c = false;
          break a;
        }
      }
      c = true;
    }
    if (!c) {
      s8("Updated online screens: " + g.nm(a.j));
      a.j = b;
      a.publish("screenChange");
    }
    gEb(a);
  }
  function v8(a, b, c) {
    var d = i8(a.D, "/pairing/get_screen_availability");
    a.D.sendRequest("POST", d, {
      lounge_token: b.token
    }, (0, g.Ra)(function (e) {
      e = e.screens || [];
      var f = e.length;
      for (let h = 0; h < f; ++h) {
        if (e[h].loungeToken == b.token) {
          c(e[h].status == "online");
          return;
        }
      }
      c(false);
    }, a), (0, g.Ra)(function () {
      c(false);
    }, a));
  }
  function gEb(a) {
    a = g.Wb(g.Ob(a.j, function (b) {
      return b;
    }));
    g.Jb(a);
    if (a.length) {
      g.kr("yt-remote-online-screen-ids", a.join(","), 60);
    } else {
      g.mr("yt-remote-online-screen-ids");
    }
  }
  function hEb(a) {
    var b = {};
    g.db(a.K(), function (c) {
      if (c.token) {
        b[c.token] = c.id;
      } else {
        this.eh("Requesting availability of screen w/o lounge token.");
      }
    });
    return b;
  }
  function jEb(a, b, c, d, e, f) {
    a.info("getAutomaticScreenByIds " + c + " / " + b);
    c ||= a.D[b];
    var h = a.tn();
    var k = c ? L6(h, c) : null;
    if (!c || !a.L && !k) {
      k = L6(h, b);
    }
    if (k) {
      k.uuid = b;
      let l = w8(a, k);
      v8(a.j, l, function (m) {
        e(m ? l : null);
      });
    } else if (c) {
      iEb(a, c, (0, g.Ra)(function (l) {
        var m = w8(this, new F6({
          name: d,
          screenId: c,
          loungeToken: l,
          dialId: b || ""
        }));
        v8(this.j, m, function (p) {
          e(p ? m : null);
        });
      }, a), f);
    } else {
      e(null);
    }
  }
  function kEb(a, b) {
    var c = a.screens.length;
    for (let d = 0; d < c; ++d) {
      if (a.screens[d].name == b) {
        return a.screens[d];
      }
    }
    return null;
  }
  function lEb(a, b, c) {
    v8(a.j, b, c);
  }
  function iEb(a, b, c, d) {
    a.info("requestLoungeToken_ for " + b);
    var e = {
      postParams: {
        screen_ids: b
      },
      method: "POST",
      context: a,
      onSuccess: function (f, h) {
        f = h && h.screens || [];
        if (f[0] && f[0].screenId == b) {
          c(f[0].loungeToken);
        } else {
          d(Error("Missing lounge token in token response"));
        }
      },
      onError: function () {
        d(Error("Request screen lounge token failed"));
      }
    };
    g.pq(i8(a.C, "/pairing/get_lounge_token_batch"), e);
  }
  function mEb(a) {
    a.screens = a.A.tn();
    var b = a.D;
    var c = {};
    for (var d in b) {
      c[b[d]] = d;
    }
    b = a.screens.length;
    for (d = 0; d < b; ++d) {
      let e = a.screens[d];
      e.uuid = c[e.id] || "";
    }
    a.info("Updated manual screens: " + I6(a.screens));
  }
  function pEb(a) {
    x8(a);
    a.A = new nEb(a.C);
    a.A.subscribe("screenChange", (0, g.Ra)(a.a7, a));
    mEb(a);
    if (!a.L) {
      a.B = RBb(g.lr("yt-remote-automatic-screen-cache") || []);
    }
    x8(a);
    a.info("Initializing automatic screens: " + I6(a.B));
    a.j = new oEb(a.C, (0, g.Ra)(a.tn, a, true));
    a.j.subscribe("screenChange", (0, g.Ra)(function () {
      this.publish("onlineScreenChange");
    }, a));
  }
  function w8(a, b) {
    var c = a.get(b.id);
    if (c) {
      c.uuid = b.uuid;
      b = c;
    } else {
      if (c = L6(a.B, b.uuid)) {
        c.id = b.id;
        c.token = b.token;
        b = c;
      } else {
        a.B.push(b);
      }
      if (!a.L) {
        qEb(a);
      }
    }
    x8(a);
    a.D[b.uuid] = b.id;
    g.kr("yt-remote-device-id-map", a.D, 31536000);
    return b;
  }
  function qEb(a) {
    a = g.fb(a.B, b => b.idType != "shortLived");
    g.kr("yt-remote-automatic-screen-cache", g.jb(a, PBb));
  }
  function x8(a) {
    a.D = g.lr("yt-remote-device-id-map") || {};
  }
  function y8(a, b) {
    a.j = b;
    a.publish("sessionScreen", a.j);
  }
  function rEb(a, b) {
    if (a.j) {
      a.j.token = b;
      w8(a.D, a.j);
    }
    a.publish("sessionScreen", a.j);
  }
  function z8(a, b) {
    l8(a.ta, b);
  }
  function tEb(a, b) {
    g.mq(a.ba);
    a.ba = 0;
    if (b) {
      if (a.config_.enableCastLoungeToken && b.loungeToken) {
        if (b.deviceId) {
          if (!a.j || a.j.uuid != b.deviceId) {
            if (b.loungeTokenRefreshIntervalMs) {
              sEb(a, {
                name: a.A.friendlyName,
                screenId: b.screenId,
                loungeToken: b.loungeToken,
                dialId: b.deviceId,
                screenIdType: "shortLived"
              }, b.loungeTokenRefreshIntervalMs);
            } else {
              g.Pp(Error(`No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: ${JSON.stringify(b)}.`));
              A8(a, b.screenId);
            }
          }
        } else {
          g.Pp(Error(`No device id presents in mdxSessionStatusData: ${JSON.stringify(b)}.`));
          A8(a, b.screenId);
        }
      } else {
        A8(a, b.screenId);
      }
    } else {
      a.C(Error("Waiting for session status timed out."));
    }
  }
  function uEb(a) {
    g.mq(a.ga);
    a.ga = 0;
    g.mq(a.U);
    a.U = 0;
    g.mq(a.ba);
    a.ba = 0;
    g.mq(a.K);
    a.K = 0;
    g.mq(a.X);
    a.X = 0;
  }
  function vEb(a, b) {
    a.info("sendYoutubeMessage_: " + b + " " + g.nm());
    var c = {
      type: b
    };
    if (a.B) {
      a.B.sendMessage("urn:x-cast:com.google.youtube.mdx", c, () => {}, (0, g.Ra)(function () {
        z8(this, "Failed to send message: " + b + ".");
      }, a));
    } else {
      z8(a, "Sending yt message without session: " + g.nm(c));
    }
  }
  function xEb(a) {
    vEb(a, "getLoungeToken");
    g.mq(a.K);
    a.K = g.kq(() => {
      wEb(a, null);
    }, 30000);
  }
  function B8(a, b) {
    g.mq(a.X);
    a.X = 0;
    if (b == 0) {
      xEb(a);
    } else {
      a.X = g.kq(() => {
        xEb(a);
      }, b);
    }
  }
  function wEb(a, b) {
    g.mq(a.K);
    a.K = 0;
    var c = null;
    if (b) {
      if (b.loungeToken) {
        if (a.j?.token == b.loungeToken) {
          c = "staleLoungeToken";
        }
      } else {
        c = "missingLoungeToken";
      }
    } else {
      c = "noLoungeTokenResponse";
    }
    if (c) {
      a.info(`Did not receive a new lounge token in onLoungeToken_ with data: ${JSON.stringify(b)}, error: ${c}`);
      B8(a, 30000);
    } else {
      rEb(a, b.loungeToken);
      B8(a, b.loungeTokenRefreshIntervalMs);
    }
  }
  function A8(a, b) {
    if (b) {
      a.info("onConnectedScreenId_: Received screenId: " + b);
      if (!a.j || a.j.id != b) {
        a.ya(b, c => {
          y8(a, c);
        }, () => a.C(), 5);
      }
    } else {
      a.C(Error("Waiting for session status timed out."));
    }
  }
  function yEb(a, b, c, d) {
    g.mq(a.U);
    a.U = 0;
    lEb(a.D, b, e => {
      if (e || d < 0) {
        c(e);
      } else {
        a.U = g.kq(() => {
          yEb(a, b, c, d - 1);
        }, 300);
      }
    });
  }
  function sEb(a, b, c) {
    a.info(`onConnectedScreenData_: Received screenData: ${JSON.stringify(b)}`);
    var d = new F6(b);
    yEb(a, d, e => {
      if (e) {
        w8(a.D, d);
        y8(a, d);
        B8(a, c);
      } else {
        g.Pp(Error(`CastSession, RemoteScreen from screenData: ${JSON.stringify(b)} is not online.`));
        a.C();
      }
    }, 5);
  }
  function C8(a) {
    return new Promise(b => {
      a.ha = J6();
      if (a.Fa) {
        let c = new chrome.cast.DialLaunchResponse(true, zEb(a));
        b(c);
        AEb(a);
      } else {
        a.fa = () => {
          g.mq(a.ba);
          a.fa = () => {};
          a.ba = NaN;
          var c = new chrome.cast.DialLaunchResponse(true, zEb(a));
          b(c);
          AEb(a);
        };
        a.ba = g.kq(() => {
          a.fa();
        }, 100);
      }
    });
  }
  function BEb(a) {
    g.mq(a.U);
    a.U = 0;
    g.mq(a.X);
    a.X = 0;
    a.K();
    a.K = () => {};
    g.mq(a.ba);
  }
  function D8(a) {
    return !!a.config_.enableDialLoungeToken && !!a.B?.getDialAppInfo;
  }
  function E8(a, b) {
    a.info(`getDialAppInfoWithTimeout_ ${b}`);
    if (D8(a)) {
      g.mq(a.X);
      a.X = 0;
      if (b == 0) {
        CEb(a);
      } else {
        a.X = g.kq(() => {
          CEb(a);
        }, b);
      }
    }
  }
  function AEb(a) {
    a.K = a.D.ZW(a.ha, a.A.label, a.A.friendlyName, D8(a), (b, c) => {
      a.K = () => {};
      y8(a, b);
      if (b.idType == "shortLived" && c > 0) {
        E8(a, c);
      }
    }, b => {
      a.K = () => {};
      a.C(b);
    });
  }
  function zEb(a) {
    var b = {
      pairingCode: a.ha,
      theme: a.Ha
    };
    if (aCb()) {
      b.env_useStageMdx = 1;
    }
    return g.mj(b);
  }
  function DEb(a, b) {
    var c = a.ga.receiver.label;
    var d = a.A.friendlyName;
    return new Promise(e => {
      jEb(a.D, c, b, d, f => {
        if (f && f.token) {
          y8(a, f);
        }
        e(f);
      }, f => {
        z8(a, "Failed to get DIAL screen: " + f);
        e(null);
      });
    }).then(e => e && e.token ? new chrome.cast.DialLaunchResponse(false) : C8(a));
  }
  function FEb(a, b, c) {
    a.info(`initOnConnectedScreenDataPromise_: Received screenData: ${JSON.stringify(b)}`);
    var d = new F6(b);
    return new Promise(e => {
      EEb(a, d, f => {
        if (f) {
          w8(a.D, d);
          y8(a, d);
          E8(a, c);
        } else {
          g.Pp(Error(`DialSession, RemoteScreen from screenData: ${JSON.stringify(b)} is not online.`));
        }
        e(f);
      }, 5);
    }).then(e => e ? new chrome.cast.DialLaunchResponse(false) : C8(a));
  }
  function EEb(a, b, c, d) {
    g.mq(a.U);
    a.U = 0;
    lEb(a.D, b, e => {
      if (e || d < 0) {
        c(e);
      } else {
        a.U = g.kq(() => {
          EEb(a, b, c, d - 1);
        }, 300);
      }
    });
  }
  function CEb(a) {
    if (D8(a)) {
      a.B.getDialAppInfo(b => {
        a.info(`getDialAppInfo dialLaunchData: ${JSON.stringify(b)}`);
        b = b.extraData || {};
        var c = null;
        if (b.loungeToken) {
          if (a.j?.token == b.loungeToken) {
            c = "staleLoungeToken";
          }
        } else {
          c = "missingLoungeToken";
        }
        if (c) {
          E8(a, 30000);
        } else {
          rEb(a, b.loungeToken);
          E8(a, b.loungeTokenRefreshIntervalMs);
        }
      }, b => {
        a.info(`getDialAppInfo error: ${b}`);
        E8(a, 30000);
      });
    }
  }
  function WDb(a) {
    if (window.chrome && chrome.cast && chrome.cast.logMessage) {
      chrome.cast.logMessage(a);
    }
  }
  function HEb(a) {
    var b = a.A.YW();
    var c = a.j && a.j.A;
    a = g.jb(b, function (d) {
      if (c && G6(d, c.label)) {
        c = null;
      }
      var e = d.uuid ? d.uuid : d.id;
      var f = GEb(this, d);
      if (f) {
        f.label = e;
        f.friendlyName = d.name;
      } else {
        f = new chrome.cast.Receiver(e, d.name);
        f.receiverType = chrome.cast.ReceiverType.CUSTOM;
      }
      return f;
    }, a);
    if (c) {
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        c = new chrome.cast.Receiver(c.label, c.friendlyName);
        c.receiverType = chrome.cast.ReceiverType.CUSTOM;
      }
      a.push(c);
    }
    return a;
  }
  function F8(a) {
    return a.U || !!a.B.length || !!a.j;
  }
  function G8(a) {
    l8("Controller", a);
  }
  function H8(a, b, c) {
    if (b != a.j) {
      g.Oj(a.j);
      if (a.j = b) {
        if (c) {
          a.publish("yt-remote-cast2-receiver-resumed", b.A);
        } else {
          a.publish("yt-remote-cast2-receiver-selected", b.A);
        }
        b.subscribe("sessionScreen", (0, g.Ra)(a.ga, a, b));
        b.subscribe("sessionFailed", () => IEb(a, b));
        if (b.j) {
          a.publish("yt-remote-cast2-session-change", b.j);
        } else if (c) {
          a.j.L(null);
        }
      } else {
        a.publish("yt-remote-cast2-session-change", null);
      }
    }
  }
  function GEb(a, b) {
    if (b) {
      return g.pb(a.B, function (c) {
        return G6(b, c.label);
      }, a);
    } else {
      return null;
    }
  }
  function IEb(a, b) {
    if (a.j == b) {
      a.publish("yt-remote-cast2-session-failed");
    }
  }
  function OEb(a, b, c, d) {
    if (d.disableCastApi) {
      I8("Cannot initialize because disabled by Mdx config.");
    } else if (JEb()) {
      if (KEb(b, d)) {
        J8(true);
        if (window.chrome && chrome.cast && chrome.cast.isAvailable) {
          LEb(a, c);
        } else {
          window.__onGCastApiAvailable = function (e, f) {
            if (e) {
              LEb(a, c);
            } else {
              K8("Failed to load cast API: " + f);
              L8(false);
              J8(false);
              g.mr("yt-remote-cast-available");
              g.mr("yt-remote-cast-receiver");
              MEb();
              c(false);
            }
          };
          if (d.loadCastApiSetupScript) {
            g.mt(NEb);
          } else if (window.navigator.userAgent.indexOf("Android") >= 0 && window.navigator.userAgent.indexOf("Chrome/") >= 0 && window.navigator.presentation) {
            if (W6() >= 60) {
              iCb();
            }
          } else if (!window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf("Edge") >= 0) {
            Y6();
          } else if (W6() >= 89) {
            kCb();
          } else {
            Z6();
            X6(jCb.map(fCb));
          }
        }
      }
    } else {
      I8("Cannot initialize because not running Chrome");
    }
  }
  function MEb() {
    I8("dispose");
    var a = M8();
    if (a) {
      a.dispose();
    }
    g.Ia("yt.mdx.remote.cloudview.instance_", null);
    PEb(false);
    g.kt(N8);
    N8.length = 0;
  }
  function O8() {
    return !!g.lr("yt-remote-cast-installed");
  }
  function QEb() {
    var a = g.lr("yt-remote-cast-receiver");
    if (a) {
      return a.friendlyName;
    } else {
      return null;
    }
  }
  function REb() {
    I8("clearCurrentReceiver");
    g.mr("yt-remote-cast-receiver");
  }
  function SEb() {
    if (O8()) {
      if (M8()) {
        return M8().getCastSession();
      } else {
        K8("getCastSelector: Cast is not initialized.");
        return null;
      }
    } else {
      K8("getCastSelector: Cast API is not installed!");
      return null;
    }
  }
  function Q8() {
    if (O8()) {
      if (M8()) {
        if (P8()) {
          I8("Requesting cast selector.");
          M8().requestSession();
        } else {
          I8("Wait for cast API to be ready to request the session.");
          N8.push(g.jt("yt-remote-cast2-api-ready", Q8));
        }
      } else {
        K8("requestCastSelector: Cast is not initialized.");
      }
    } else {
      K8("requestCastSelector: Cast API is not installed!");
    }
  }
  function R8(a, b) {
    if (P8()) {
      M8().setConnectedScreenStatus(a, b);
    } else {
      K8("setConnectedScreenStatus called before ready.");
    }
  }
  function JEb() {
    var a = g.Lc().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
    return g.dB || a;
  }
  function TEb(a, b) {
    M8().init(a, b);
  }
  function KEb(a, b) {
    var c = false;
    if (!M8()) {
      a = new S8(a, b);
      a.subscribe("yt-remote-cast2-availability-change", function (d) {
        g.kr("yt-remote-cast-available", d);
        S6("yt-remote-cast2-availability-change", d);
      });
      a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
        I8("onReceiverSelected: " + d.friendlyName);
        g.kr("yt-remote-cast-receiver", d);
        S6("yt-remote-cast2-receiver-selected", d);
      });
      a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
        I8("onReceiverResumed: " + d.friendlyName);
        g.kr("yt-remote-cast-receiver", d);
        S6("yt-remote-cast2-receiver-resumed", d);
      });
      a.subscribe("yt-remote-cast2-session-change", function (d) {
        I8("onSessionChange: " + H6(d));
        if (!d) {
          g.mr("yt-remote-cast-receiver");
        }
        S6("yt-remote-cast2-session-change", d);
      });
      g.Ia("yt.mdx.remote.cloudview.instance_", a);
      c = true;
    }
    I8("cloudview.createSingleton_: " + c);
    return c;
  }
  function M8() {
    return g.Ja("yt.mdx.remote.cloudview.instance_");
  }
  function LEb(a, b) {
    L8(true);
    J8(false);
    TEb(a, function (c) {
      if (c) {
        PEb(true);
        g.lt("yt-remote-cast2-api-ready");
      } else {
        K8("Failed to initialize cast API.");
        L8(false);
        g.mr("yt-remote-cast-available");
        g.mr("yt-remote-cast-receiver");
        MEb();
      }
      b(c);
    });
  }
  function I8(a) {
    l8("cloudview", a);
  }
  function K8(a) {
    l8("cloudview", a);
  }
  function L8(a) {
    I8("setCastInstalled_ " + a);
    g.kr("yt-remote-cast-installed", a);
  }
  function P8() {
    return !!g.Ja("yt.mdx.remote.cloudview.apiReady_");
  }
  function PEb(a) {
    I8("setApiReady_ " + a);
    g.Ia("yt.mdx.remote.cloudview.apiReady_", a);
  }
  function J8(a) {
    g.Ia("yt.mdx.remote.cloudview.initializing_", a);
  }
  function T8(a) {
    this.index = -1;
    this.videoId = this.listId = "";
    this.volume = this.playerState = -1;
    this.muted = false;
    this.audioTrackId = null;
    this.D = this.K = 0;
    this.trackData = null;
    this.hasNext = this.hasPrevious = false;
    this.loadedTime = this.B = this.L = this.A = 0;
    this.j = NaN;
    this.C = false;
    this.reset(a);
  }
  function U8(a) {
    a.audioTrackId = null;
    a.trackData = null;
    a.playerState = -1;
    a.hasPrevious = false;
    a.hasNext = false;
    a.K = 0;
    a.D = g.Ua();
    a.A = 0;
    a.L = 0;
    a.B = 0;
    a.loadedTime = 0;
    a.j = NaN;
    a.C = false;
  }
  function V8(a) {
    if (a.isPlaying()) {
      return (g.Ua() - a.D) / 1000;
    } else {
      return 0;
    }
  }
  function W8(a, b) {
    a.K = b;
    a.D = g.Ua();
  }
  function X8(a) {
    switch (a.playerState) {
      case 1:
      case 1081:
        return (g.Ua() - a.D) / 1000 + a.K;
      case -1000:
        return 0;
    }
    return a.K;
  }
  function UEb(a) {
    if (a.C) {
      return a.L + V8(a);
    } else {
      return a.L;
    }
  }
  function Y8(a, b, c) {
    var d = a.videoId;
    a.videoId = b;
    a.index = c;
    if (b != d) {
      U8(a);
    }
  }
  function Z8(a) {
    var b = {
      index: a.index,
      listId: a.listId,
      videoId: a.videoId,
      playerState: a.playerState,
      volume: a.volume,
      muted: a.muted,
      audioTrackId: a.audioTrackId
    };
    b.trackData = g.hc(a.trackData);
    b.hasPrevious = a.hasPrevious;
    b.hasNext = a.hasNext;
    b.playerTime = a.K;
    b.playerTimeAt = a.D;
    b.seekableStart = a.A;
    b.seekableEnd = a.L;
    b.duration = a.B;
    b.loadedTime = a.loadedTime;
    b.liveIngestionTime = a.j;
    return b;
  }
  function VEb(a) {
    g.db("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function (b) {
      this.K.push(this.B.subscribe(b, g.Ta(this.za, b), this));
    }, a);
  }
  function $8(a, b) {
    if (a.A) {
      a.A.removeUpdateListener(a.ga);
      a.A.removeMediaListener(a.U);
      a.D(null);
    }
    a.A = b;
    if (a.A) {
      m8("Setting cast session: " + a.A.sessionId);
      a.A.addUpdateListener(a.ga);
      a.A.addMediaListener(a.U);
      if (a.A.media.length) {
        a.D(a.A.media[0]);
      }
    }
  }
  function a9(a) {
    return new T8(a.B.getPlayerContextData());
  }
  function b9(a) {
    return a.getState() == 1;
  }
  function d9(a, b, c) {
    return (0, g.Ra)(function (d) {
      this.eh("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
      if (d.code != chrome.cast.ErrorCode.TIMEOUT) {
        this.eh("Retrying " + b + " using MDx browser channel.");
        c9(this, b, c);
      }
    }, a);
  }
  function c9(a, b, c) {
    a.B.sendMessage(b, c);
  }
  function f9(a, b, c) {
    var d = a9(a);
    W8(d, c);
    if (d.playerState != -1000) {
      d.playerState = b;
    }
    e9(a, d);
  }
  function g9(a, b) {
    var c = a.C;
    if (c.j.length + c.A.length < 50) {
      a.C.enqueue(b);
    }
  }
  function e9(a, b) {
    WEb(a);
    a.B.setPlayerContextData(Z8(b));
    VEb(a);
  }
  function WEb(a) {
    g.db(a.K, function (b) {
      this.B.unsubscribeByKey(b);
    }, a);
    a.K.length = 0;
  }
  function XEb(a) {
    var b = a.j.media;
    var c = a.j.customData;
    if (b && c) {
      var d = a9(a);
      if (b.contentId != d.videoId) {
        m8("Cast changing video to: " + b.contentId);
      }
      d.videoId = b.contentId;
      d.playerState = c.playerState;
      W8(d, a.j.getEstimatedTime());
      e9(a, d);
    } else {
      m8("No cast media video. Ignoring state update.");
    }
  }
  function YEb(a) {
    h9("Channel opened");
    if (a.sa) {
      a.sa = false;
      i9(a);
      a.la = g.kq(() => {
        h9("Timing out waiting for a screen.");
        a.L(1);
      }, 15000);
    }
  }
  function jFb(a, b) {
    b = b.message;
    if (b.params) {
      h9("Received: action=" + b.action + ", params=" + g.nm(b.params));
    } else {
      h9("Received: action=" + b.action + " {}");
    }
    switch (b.action) {
      case "loungeStatus":
        b = A6(b.params.devices);
        a.B = g.jb(b, function (d) {
          return new E6(d);
        });
        b = !!g.pb(a.B, function (d) {
          return d.type == "LOUNGE_SCREEN";
        });
        ZEb(a, b);
        b = a.Ha("mlm");
        a.publish("multiStateLoopEnabled", b);
        break;
      case "loungeScreenDisconnected":
        g.xb(a.B, function (d) {
          return d.type == "LOUNGE_SCREEN";
        });
        ZEb(a, false);
        break;
      case "remoteConnected":
        let c = new E6(A6(b.params.device));
        if (!g.pb(a.B, function (d) {
          return d.equals(c);
        })) {
          CBb(a.B, c);
        }
        break;
      case "remoteDisconnected":
        c = new E6(A6(b.params.device));
        g.xb(a.B, function (d) {
          return d.equals(c);
        });
        break;
      case "gracefulDisconnect":
        break;
      case "playlistModified":
        $Eb(a, b, "QUEUE_MODIFIED");
        break;
      case "nowPlaying":
        aFb(a, b);
        break;
      case "onStateChange":
        bFb(a, b);
        break;
      case "onAdStateChange":
        cFb(a, b);
        break;
      case "onVolumeChanged":
        dFb(a, b);
        break;
      case "onSubtitlesTrackChanged":
        eFb(a, b);
        break;
      case "nowAutoplaying":
        fFb(a, b);
        break;
      case "autoplayDismissed":
        a.publish("autoplayDismissed");
        break;
      case "autoplayUpNext":
        gFb(a, b);
        break;
      case "onAutoplayModeChanged":
        hFb(a, b);
        break;
      case "onHasPreviousNextChanged":
        iFb(a, b);
        break;
      case "requestAssistedSignIn":
        a.publish("assistedSignInRequested", b.params.authCode);
        break;
      case "onLoopModeChanged":
        a.publish("loopModeChange", b.params.loopMode);
        break;
      default:
        h9("Unrecognized action: " + b.action);
    }
  }
  function h9(a) {
    l8("conn", a);
  }
  function kFb(a) {
    a.K = g.kq(() => {
      h9("Connecting timeout");
      a.L(1);
    }, 20000);
  }
  function j9(a, b) {
    a.publish("proxyStateChange", b);
  }
  function k9(a) {
    g.mq(a.K);
    a.K = NaN;
  }
  function l9(a) {
    g.mq(a.ha);
    a.ha = NaN;
  }
  function i9(a) {
    g.mq(a.la);
    a.la = NaN;
  }
  function lFb(a) {
    return g.pb(a.B, function (b) {
      return b.type == "LOUNGE_SCREEN";
    });
  }
  function m9(a, b, c) {
    if (c) {
      h9("Sending: action=" + b + ", params=" + g.nm(c));
    } else {
      h9("Sending: action=" + b);
    }
    a.A.sendMessage(b, c);
  }
  function mFb(a) {
    l9(a);
    a.ha = g.kq(() => {
      m9(a, "getNowPlaying");
    }, 20000);
  }
  function nFb(a) {
    g.mq(a.ba);
    a.ba = g.kq(() => {
      a.L(1);
    }, 86400000);
  }
  function ZEb(a, b) {
    var c = null;
    if (b) {
      let d = lFb(a);
      if (d) {
        c = {
          clientName: d.clientName,
          deviceMake: d.brand,
          deviceModel: d.model,
          osVersion: d.osVersion
        };
      }
    }
    g.Ia("yt.mdx.remote.remoteClient_", c);
    if (b) {
      k9(a);
      i9(a);
    }
    c = a.A.lz() && isNaN(a.K);
    if (b == c) {
      if (b) {
        j9(a, 1);
        m9(a, "getSubtitlesTrack");
      }
    } else if (b) {
      if (a.Fa()) {
        a.j.reset();
      }
      j9(a, 1);
      m9(a, "getNowPlaying");
      nFb(a);
    } else {
      a.L(1);
    }
  }
  function eFb(a, b) {
    var c = b.params.videoId;
    delete b.params.videoId;
    if (c == a.j.videoId) {
      if (g.bc(b.params)) {
        a.j.trackData = null;
      } else {
        a.j.trackData = b.params;
      }
      a.publish("remotePlayerChange");
    }
  }
  function $Eb(a, b, c) {
    var d = b.params.videoId || b.params.video_id;
    var e = parseInt(b.params.currentIndex, 10);
    a.j.listId = b.params.listId || a.j.listId;
    Y8(a.j, d, e);
    a.publish("remoteQueueChange", c);
  }
  function bFb(a, b) {
    var c = parseInt(b.params.currentTime || b.params.current_time, 10);
    W8(a.j, isNaN(c) ? 0 : c);
    c = parseInt(b.params.state, 10);
    c = isNaN(c) ? -1 : c;
    if (c == -1 && a.j.playerState == -1000) {
      c = -1000;
    }
    a.j.playerState = c;
    c = Number(b.params.loadedTime);
    a.j.loadedTime = isNaN(c) ? 0 : c;
    a.j.bp(Number(b.params.duration));
    c = a.j;
    var d = Number(b.params.liveIngestionTime);
    c.j = d;
    c.C = !isNaN(d);
    c = a.j;
    d = Number(b.params.seekableStartTime);
    b = Number(b.params.seekableEndTime);
    c.A = isNaN(d) ? 0 : d;
    c.L = isNaN(b) ? 0 : b;
    if (a.j.playerState == 1) {
      mFb(a);
    } else {
      l9(a);
    }
    a.publish("remotePlayerChange");
  }
  function aFb(a, b) {
    b.params = b.params || {};
    $Eb(a, b, "NOW_PLAYING_MAY_CHANGE");
    bFb(a, b);
    a.publish("autoplayDismissed");
  }
  function cFb(a, b) {
    if (a.j.playerState != -1000) {
      var c = 1085;
      switch (parseInt(b.params.adState, 10)) {
        case 1:
          c = 1081;
          break;
        case 2:
          c = 1084;
          break;
        case 0:
          c = 1083;
      }
      a.j.playerState = c;
      b = parseInt(b.params.currentTime, 10);
      W8(a.j, isNaN(b) ? 0 : b);
      a.publish("remotePlayerChange");
    }
  }
  function dFb(a, b) {
    var c = b.params.muted == "true";
    a.j.volume = parseInt(b.params.volume, 10);
    a.j.muted = c;
    a.publish("remotePlayerChange");
  }
  function fFb(a, b) {
    a.U = b.params.videoId;
    a.publish("nowAutoplaying", parseInt(b.params.timeout, 10));
  }
  function gFb(a, b) {
    a.U = b.params.videoId || null;
    a.publish("autoplayUpNext", a.U);
  }
  function hFb(a, b) {
    a.D = b.params.autoplayMode;
    a.publish("autoplayModeChange", a.D);
    if (a.D == "DISABLED") {
      a.publish("autoplayDismissed");
    }
  }
  function iFb(a, b) {
    var c = b.params.hasNext == "true";
    a.j.hasPrevious = b.params.hasPrevious == "true";
    a.j.hasNext = c;
    a.publish("previousNextChange");
  }
  function rFb(a, b) {
    $Bb();
    if (!R6 || !R6.get("yt-remote-disable-remote-module-for-dev")) {
      b = g.Mp("MDX_CONFIG") || b;
      TBb();
      P6();
      if (!n9) {
        n9 = new h8(b ? b.loungeApiHost : undefined);
        if (aCb()) {
          n9.j = "/api/loungedev";
        }
      }
      if (!o9) {
        o9 = g.Ja("yt.mdx.remote.deferredProxies_") || [];
        g.Ia("yt.mdx.remote.deferredProxies_", o9);
      }
      oFb();
      var c = p9();
      if (!c) {
        let e = new q9(b ? b.disableAutomaticScreenCache || false : false);
        g.Ia("yt.mdx.remote.screenService_", e);
        c = p9();
        var d = {};
        if (b) {
          d = {
            appId: b.appId,
            disableDial: b.disableDial,
            theme: b.theme,
            loadCastApiSetupScript: b.loadCastApiSetupScript,
            disableCastApi: b.disableCastApi,
            enableDialLoungeToken: b.enableDialLoungeToken,
            enableCastLoungeToken: b.enableCastLoungeToken,
            forceMirroring: b.forceMirroring
          };
        }
        g.Ia("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || false : false);
        OEb(a, e, function (f) {
          if (f) {
            if (r9()) {
              R8(r9(), "YouTube TV");
            }
          } else {
            e.subscribe("onlineScreenChange", function () {
              S6("yt-remote-receiver-availability-change");
            });
          }
        }, d);
      }
      if (b && !g.Ja("yt.mdx.remote.initialized_")) {
        g.Ia("yt.mdx.remote.initialized_", true);
        s9("Initializing: " + g.nm(b));
        t9.push(g.jt("yt-remote-cast2-api-ready", function () {
          S6("yt-remote-api-ready");
        }));
        t9.push(g.jt("yt-remote-cast2-availability-change", function () {
          S6("yt-remote-receiver-availability-change");
        }));
        t9.push(g.jt("yt-remote-cast2-receiver-selected", function () {
          u9(null);
          S6("yt-remote-auto-connect", "cast-selector-receiver");
        }));
        t9.push(g.jt("yt-remote-cast2-receiver-resumed", function () {
          S6("yt-remote-receiver-resumed", "cast-selector-receiver");
        }));
        t9.push(g.jt("yt-remote-cast2-session-change", pFb));
        t9.push(g.jt("yt-remote-connection-change", function (e) {
          if (e) {
            R8(r9(), "YouTube TV");
          } else if (!v9()) {
            R8(null, null);
            REb();
          }
        }));
        t9.push(g.jt("yt-remote-cast2-session-failed", () => {
          S6("yt-remote-connection-failed");
        }));
        a = w9();
        if (b.isAuto) {
          a.id += "#dial";
        }
        d = b.capabilities || [];
        if (d.length > 0) {
          a.capabilities = d;
        }
        a.name = b.device;
        a.app = b.app;
        if (b = b.theme) {
          a.theme = b;
        }
        s9(" -- with channel params: " + g.nm(a));
        if (a) {
          g.kr("yt-remote-session-app", a.app);
          g.kr("yt-remote-session-name", a.name);
        } else {
          g.mr("yt-remote-session-app");
          g.mr("yt-remote-session-name");
        }
        g.Ia("yt.mdx.remote.channelParams_", a);
        c.start();
        if (!r9()) {
          qFb();
        }
      }
    }
  }
  function sFb() {
    var a = p9().Hi.$_gos();
    var b = x9();
    if (b && y9()) {
      if (!K6(a, b)) {
        a.push(b);
      }
    }
    return SBb(a);
  }
  function z9() {
    var a = tFb();
    if (!a && O8() && QEb()) {
      a = {
        key: "cast-selector-receiver",
        name: QEb()
      };
    }
    return a;
  }
  function tFb() {
    var a = sFb();
    var b = x9();
    b ||= v9();
    return g.pb(a, function (c) {
      return !!b && !!G6(b, c.key);
    });
  }
  function x9() {
    var a = r9();
    if (!a) {
      return null;
    }
    var b = p9().tn();
    return L6(b, a);
  }
  function pFb(a) {
    s9("remote.onCastSessionChange_: " + H6(a));
    if (a) {
      var b = x9();
      if (b && b.id == a.id) {
        R8(b.id, "YouTube TV");
        if (a.idType == "shortLived" && (a = a.token)) {
          if (A9) {
            A9.token = a;
          }
          if (b = y9()) {
            b.Yu(a);
          }
        }
      } else {
        if (b) {
          B9();
        }
        C9(a, 1);
      }
    } else if (y9()) {
      B9();
    }
  }
  function B9() {
    if (P8()) {
      M8().stopSession();
    } else {
      K8("stopSession called before API ready.");
    }
    var a = y9();
    if (a) {
      a.disconnect(1);
      D9(null);
    }
  }
  function E9() {
    var a = y9();
    return !!a && a.getProxyState() != 3;
  }
  function s9(a) {
    l8("remote", a);
  }
  function p9() {
    if (!F9) {
      let a = g.Ja("yt.mdx.remote.screenService_");
      F9 = a ? new uFb(a) : null;
    }
    return F9;
  }
  function r9() {
    return g.Ja("yt.mdx.remote.currentScreenId_");
  }
  function vFb(a) {
    g.Ia("yt.mdx.remote.currentScreenId_", a);
  }
  function wFb() {
    return g.Ja("yt.mdx.remote.connectData_");
  }
  function u9(a) {
    g.Ia("yt.mdx.remote.connectData_", a);
  }
  function y9() {
    return g.Ja("yt.mdx.remote.connection_");
  }
  function D9(a) {
    var b = y9();
    u9(null);
    if (!a) {
      vFb("");
    }
    g.Ia("yt.mdx.remote.connection_", a);
    if (o9) {
      g.db(o9, function (c) {
        c(a);
      });
      o9.length = 0;
    }
    if (b && !a) {
      S6("yt-remote-connection-change", false);
    } else if (!b && a) {
      S6("yt-remote-connection-change", true);
    }
  }
  function v9() {
    var a = g.nr();
    if (!a) {
      return null;
    }
    var b = p9();
    if (!b) {
      return null;
    }
    b = b.tn();
    return L6(b, a);
  }
  function C9(a, b) {
    r9();
    if (x9()) {
      x9();
    }
    if (G9) {
      A9 = a;
    } else {
      vFb(a.id);
      var c = g.Ja("yt.mdx.remote.enableConnectWithInitialState_") || false;
      a = new H9(a, c);
      a.connect(b, wFb());
      a.subscribe("beforeDisconnect", function (d) {
        S6("yt-remote-before-disconnect", d);
      });
      a.subscribe("beforeDispose", function () {
        if (y9()) {
          y9();
          D9(null);
        }
      });
      a.subscribe("browserChannelAuthError", () => {
        var d = x9();
        if (d && d.idType == "shortLived") {
          if (P8()) {
            M8().handleBrowserChannelAuthError();
          } else {
            K8("refreshLoungeToken called before API ready.");
          }
        }
      });
      D9(a);
    }
  }
  function qFb() {
    var a = v9();
    if (a) {
      s9("Resume connection to: " + H6(a));
      C9(a, 0);
    } else {
      Q6();
      REb();
      s9("Skipping connecting because no session screen found.");
    }
  }
  function oFb() {
    var a = w9();
    if (g.bc(a)) {
      a = O6();
      var b = g.lr("yt-remote-session-name") || "";
      let c = g.lr("yt-remote-session-app") || "";
      a = {
        device: "REMOTE_CONTROL",
        id: a,
        name: b,
        app: c,
        mdxVersion: 3
      };
      a.authuser = String(g.Mp("SESSION_INDEX", "0"));
      if (b = g.Mp("DELEGATED_SESSION_ID")) {
        a.pageId = String(b);
      }
      g.Ia("yt.mdx.remote.channelParams_", a);
    }
  }
  function w9() {
    return g.Ja("yt.mdx.remote.channelParams_") || {};
  }
  function xFb(a, b) {
    if (I9(a)) {
      a.Mc.unsubscribe("remotePlayerChange", a.C, a);
      let c = Math.round(b.volume);
      b = !!b.muted;
      let d = a9(a.Mc);
      if (c !== d.volume || b !== d.muted) {
        a.Mc.setVolume(c, b);
        a.ga.start();
      }
      a.Mc.subscribe("remotePlayerChange", a.C, a);
    }
  }
  function I9(a) {
    return a9(a.Mc).videoId === J9(a).videoId;
  }
  function K9(a, b) {
    var c = a.J.getPlaylist();
    if (c?.listId) {
      var d = c.index;
      var e = c.listId.toString();
    }
    c = J9(a);
    a.Mc.playVideo(c.videoId, b, d, e, c.playerParams, c.X, BBb(c));
    a.Yc(new g.iC(1));
  }
  function L9(a, b) {
    if (I9(a) && !a.D) {
      let c = null;
      if (b) {
        c = {
          style: a.J.getSubtitlesUserSettings()
        };
        Object.assign(c, b);
      }
      a.Mc.L(J9(a).videoId, c);
      a.B = a9(a.Mc).trackData;
    }
  }
  function yFb(a, b) {
    if (b) {
      let c = a.J.getOption("captions", "tracklist", {
        HZ: 1
      });
      if (c && c.length) {
        a.J.setOption("captions", "track", b);
        a.D = false;
      } else {
        a.J.loadModule("captions");
        a.D = true;
      }
    } else {
      a.J.setOption("captions", "track", {});
    }
  }
  function zFb(a) {
    a.Ed(0);
    a.j.stop();
    a.Yc(new g.iC(64));
  }
  function J9(a) {
    return a.J.getVideoData({
      playerType: 1
    });
  }
  function AFb(a) {
    var b = a.player.O();
    if (!b.N("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.lI || !a.wD) {
      return false;
    } else {
      return g.RJ(b) || g.VJ(b);
    }
  }
  function BFb(a, b, c) {
    a.Ve = c;
    a.player.publish("presentingplayerstatechange", new g.uC(c, b));
  }
  function M9(a, b, ...c) {
    if (a.loaded) {
      a.Cp.Ho(b, ...c);
    }
  }
  function N9(a) {
    if (a.jI) {
      a.player.removeEventListener("presentingplayerstatechange", a.jI);
      a.jI = null;
    }
  }
  function O9(a, b) {
    if (b.key !== a.Tv.key) {
      if (b.key === a.Ur.key) {
        B9();
      } else {
        if (AFb(a)) {
          CFb(a);
        }
        a.Tv = b;
        if (!g.hw(a.player.O())) {
          {
            let f = a.player.getPlaylistId();
            var c = a.player.getVideoData({
              playerType: 1
            });
            let h = c.videoId;
            if (!f && !h || (a.player.getAppState() === 2 || a.player.getAppState() === 1) && a.player.O().N("should_clear_video_data_on_player_cued_unstarted")) {
              c = null;
            } else {
              var d = a.player.getPlaylist();
              if (d) {
                var e = [];
                for (let k = 0; k < d.length; k++) {
                  e[k] = g.xT(d, k).videoId;
                }
              } else {
                e = [h];
              }
              d = a.player.getCurrentTime(1);
              a = {
                videoIds: e,
                listId: f,
                videoId: h,
                playerParams: c.playerParams,
                clickTrackingParams: c.X,
                index: Math.max(a.player.getPlaylistIndex(), 0),
                currentTime: d === 0 ? undefined : d
              };
              if (c = BBb(c)) {
                a.locationInfo = c;
              }
              c = a;
            }
          }
          s9("Connecting to: " + g.nm(b));
          if (b.key == "cast-selector-receiver") {
            u9(c || null);
            b = c || null;
            if (P8()) {
              M8().setLaunchParams(b);
            } else {
              K8("setLaunchParams called before ready.");
            }
          } else if (!c && E9() && r9() == b.key) {
            S6("yt-remote-connection-change", true);
          } else {
            B9();
            u9(c || null);
            c = p9().tn();
            if (b = L6(c, b.key)) {
              C9(b, 1);
            }
          }
        }
      }
    }
  }
  function CFb(a) {
    if (a.player.getPlayerStateObject().isPlaying()) {
      a.player.pauseVideo();
    } else {
      a.jI = b => {
        if (!a.lI && b.Gd(8)) {
          a.player.pauseVideo();
          N9(a);
        }
      };
      a.player.addEventListener("presentingplayerstatechange", a.jI);
    }
    if (a.wD) {
      a.wD.Od();
    }
    if (!y9()) {
      G9 = true;
    }
  }
  g.C1.prototype.II = g.da(47, function () {
    this.app.kk().II();
  });
  g.l2.prototype.II = g.da(46, function () {
    this.ii = null;
  });
  g.C1.prototype.eJ = g.da(45, function (a) {
    this.app.kk().eJ(a);
  });
  g.l2.prototype.eJ = g.da(44, function (a) {
    this.ii = a;
  });
  g.e_.prototype.lC = g.da(6, function () {
    return g.Qh(this, 3);
  });
  g.vu.prototype.lC = g.da(5, function () {
    return g.Qh(this, 11);
  });
  g.$Z.prototype.A = g.da(4, function (a) {
    g.lm(this.B, "/client_streamz/bg/ec", a, undefined, undefined);
  });
  g.a_.prototype.A = g.da(3, function (a) {
    g.lm(this.B, "/client_streamz/bg/cec", a, undefined, undefined);
  });
  g.b_.prototype.A = g.da(2, function (a) {
    g.lm(this.B, "/client_streamz/bg/po/csc", a, undefined, undefined);
  });
  g.c_.prototype.A = g.da(1, function (a) {
    g.lm(this.B, "/client_streamz/bg/po/ctav", a, undefined, undefined);
  });
  g.d_.prototype.A = g.da(0, function (a) {
    g.lm(this.B, "/client_streamz/bg/po/cwsc", a, undefined, undefined);
  });
  var FDb = class {
    constructor() {
      var a = V6();
      this.B = a;
      g.km(a, "/client_streamz/youtube/living_room/mdx/channel/opened", g.cl("channel_type"));
    }
    Pe(a) {
      g.mm(this.B, "/client_streamz/youtube/living_room/mdx/channel/opened", a);
    }
    A(a) {
      g.lm(this.B, "/client_streamz/youtube/living_room/mdx/channel/opened", a, undefined);
    }
    j() {
      return this.B.j("/client_streamz/youtube/living_room/mdx/channel/opened");
    }
  };
  var GDb = class {
    constructor() {
      var a = V6();
      this.B = a;
      g.km(a, "/client_streamz/youtube/living_room/mdx/channel/closed", g.cl("channel_type"));
    }
    Pe(a) {
      g.mm(this.B, "/client_streamz/youtube/living_room/mdx/channel/closed", a);
    }
    A(a) {
      g.lm(this.B, "/client_streamz/youtube/living_room/mdx/channel/closed", a, undefined);
    }
    j() {
      return this.B.j("/client_streamz/youtube/living_room/mdx/channel/closed");
    }
  };
  var IDb = class {
    constructor() {
      var a = V6();
      this.B = a;
      g.km(a, "/client_streamz/youtube/living_room/mdx/channel/message_received", g.cl("channel_type"));
    }
    Pe(a) {
      g.mm(this.B, "/client_streamz/youtube/living_room/mdx/channel/message_received", a);
    }
    A(a) {
      g.lm(this.B, "/client_streamz/youtube/living_room/mdx/channel/message_received", a, undefined);
    }
    j() {
      return this.B.j("/client_streamz/youtube/living_room/mdx/channel/message_received");
    }
  };
  var HDb = class {
    constructor() {
      var a = V6();
      this.B = a;
      g.km(a, "/client_streamz/youtube/living_room/mdx/channel/success");
    }
    Pe() {
      g.mm(this.B, "/client_streamz/youtube/living_room/mdx/channel/success");
    }
    A(a) {
      g.lm(this.B, "/client_streamz/youtube/living_room/mdx/channel/success", a);
    }
    j() {
      return this.B.j("/client_streamz/youtube/living_room/mdx/channel/success");
    }
  };
  var JDb = class {
    constructor() {
      var a = V6();
      this.B = a;
      g.km(a, "/client_streamz/youtube/living_room/mdx/channel/error", g.cl("channel_type"), g.cl("error_type"));
    }
    Pe(a, b) {
      g.mm(this.B, "/client_streamz/youtube/living_room/mdx/channel/error", a, b);
    }
    A(a) {
      g.lm(this.B, "/client_streamz/youtube/living_room/mdx/channel/error", a, undefined, undefined);
    }
    j() {
      return this.B.j("/client_streamz/youtube/living_room/mdx/channel/error");
    }
  };
  var KDb = class {
    constructor() {
      var a = V6();
      this.B = a;
      g.km(a, "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps");
    }
    Pe() {
      g.mm(this.B, "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps");
    }
    A(a) {
      g.lm(this.B, "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a);
    }
    j() {
      return this.B.j("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps");
    }
  };
  var LDb = class {
    constructor() {
      var a = V6();
      this.B = a;
      g.km(a, "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps");
    }
    Pe() {
      g.mm(this.B, "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps");
    }
    A(a) {
      g.lm(this.B, "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", a);
    }
    j() {
      return this.B.j("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps");
    }
  };
  var FBb = class {
    constructor(a, b) {
      this.j = a[g.Ha.Symbol.iterator]();
      this.A = b;
    }
    [Symbol.iterator]() {
      return this;
    }
    next() {
      var a = this.j.next();
      return {
        value: a.done ? undefined : this.A.call(undefined, a.value),
        done: a.done
      };
    }
  };
  g.G = C6.prototype;
  g.G.Fo = function () {
    D6(this);
    var a = [];
    for (let b = 0; b < this.j.length; b++) {
      a.push(this.A[this.j[b]]);
    }
    return a;
  };
  g.G.Gr = function () {
    D6(this);
    return this.j.concat();
  };
  g.G.has = function (a) {
    return B6(this.A, a);
  };
  g.G.equals = function (a, b) {
    if (this === a) {
      return true;
    }
    if (this.size != a.size) {
      return false;
    }
    b = b || HBb;
    D6(this);
    var c;
    for (let d = 0; c = this.j[d]; d++) {
      if (!b(this.get(c), a.get(c))) {
        return false;
      }
    }
    return true;
  };
  g.G.clear = function () {
    this.A = {};
    this.Rx = this.size = this.j.length = 0;
  };
  g.G.remove = function (a) {
    return this.delete(a);
  };
  g.G.delete = function (a) {
    if (B6(this.A, a)) {
      delete this.A[a];
      --this.size;
      this.Rx++;
      if (this.j.length > this.size * 2) {
        D6(this);
      }
      return true;
    } else {
      return false;
    }
  };
  g.G.get = function (a, b) {
    if (B6(this.A, a)) {
      return this.A[a];
    } else {
      return b;
    }
  };
  g.G.set = function (a, b) {
    if (!B6(this.A, a)) {
      this.size += 1;
      this.j.push(a);
      this.Rx++;
    }
    this.A[a] = b;
  };
  g.G.forEach = function (a, b) {
    var c = [...this.keys()];
    for (let d = 0; d < c.length; d++) {
      let e = c[d];
      let f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  g.G.clone = function () {
    return new C6(this);
  };
  g.G.keys = function () {
    return g.Bo(this.no(true)).j();
  };
  g.G.values = function () {
    return g.Bo(this.no(false)).j();
  };
  g.G.entries = function () {
    var a = this;
    return GBb(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  g.G.no = function (a) {
    D6(this);
    var b = 0;
    var c = this.Rx;
    var d = this;
    var e = new g.dk();
    e.next = function () {
      if (c != d.Rx) {
        throw Error("The map has changed since the iterator was created");
      }
      if (b >= d.j.length) {
        return g.RZ;
      }
      var f = d.j[b++];
      return g.ek(a ? f : d.A[f]);
    };
    return e;
  };
  var NBb = {
    vba: "ACTIVE_DEVICE_REPORTED_CAPABILITY_UNSPECIFIED",
    uba: "ACTIVE_DEVICE_REPORTED_CAPABILITY_ADS_HEARTBEAT"
  };
  var MBb = {
    zca: "atp",
    Uha: "ska",
    nha: "que",
    cga: "mus",
    Sha: "sus",
    sea: "dsp",
    Dha: "seq",
    Rfa: "mic",
    Dda: "dpa",
    Zfa: "mlm",
    Bda: "dsdtr",
    hga: "ntb",
    Gia: "vsp",
    Qda: "scn",
    pha: "rpe",
    xda: "dcn",
    yda: "dcp",
    Bga: "pas",
    Ada: "drq",
    oga: "opf",
    Pda: "els",
    Oda: "isg",
    Iha: "svq",
    aga: "mvp",
    wba: "ads",
    dia: "stcp",
    Lha: "sads",
    zda: "dloc",
    Fda: "dcw",
    yba: "asw",
    xba: "apw",
    zba: "wrc",
    Rga: "pcw",
    mfa: "ipv",
    mga: "ndt",
    hda: "ctops",
    lea: "gsrm",
    Kfa: "ltkr",
    Kca: "bpq"
  };
  var OBb = {
    Fia: "u",
    Vca: "cl",
    ofa: "k",
    Mea: "i",
    nda: "cr",
    dga: "m",
    fea: "g",
    o4: "up"
  };
  var NDb = {
    jga: "nowPlaying",
    sga: "onStateChange",
    Hba: "adPlaying",
    qga: "onAdStateChange",
    kga: "nowPlayingShorts",
    rga: "onShortsStateChange"
  };
  E6.prototype.equals = function (a) {
    if (a) {
      return this.id == a.id;
    } else {
      return false;
    }
  };
  var N6 = "";
  var R6 = null;
  var bCb = class extends g.ujb {
    constructor() {
      super();
    }
  };
  var U6;
  var hCb = cCb("loadCastFramework") || cCb("loadCastApplicationFramework");
  var jCb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
  g.Za($6, g.Sj);
  g.G = $6.prototype;
  g.G.F3 = function (a) {
    this.C = arguments;
    this.j = false;
    if (this.ke) {
      this.B = g.Ua() + this.Mk;
    } else {
      this.ke = g.hm(this.D, this.Mk);
    }
  };
  g.G.stop = function () {
    lCb(this);
    this.B = null;
    this.j = false;
    this.C = [];
  };
  g.G.pause = function () {
    ++this.A;
  };
  g.G.resume = function () {
    if (this.A) {
      --this.A;
      if (!this.A && this.j) {
        this.j = false;
        this.K.apply(null, this.C);
      }
    }
  };
  g.G.ka = function () {
    this.stop();
    $6.Mh.ka.call(this);
  };
  var b7 = null;
  a7.prototype.set = function (a) {
    this.j = a;
  };
  a7.prototype.reset = function () {
    this.set(g.Ua());
  };
  a7.prototype.get = function () {
    return this.j;
  };
  g.Za(nCb, mCb);
  var z7 = class {
    stringify(a) {
      return g.Ha.JSON.stringify(a, undefined);
    }
    parse(a) {
      return g.Ha.JSON.parse(a, undefined);
    }
  };
  g.Za(c7, g.Dl);
  g.Za(d7, g.Dl);
  var oCb = null;
  g.Za(pCb, g.Dl);
  g.Za(qCb, g.Dl);
  g.Za(rCb, g.Dl);
  i7.prototype.debug = function () {};
  i7.prototype.info = function () {};
  i7.prototype.warning = function () {};
  var xCb = {};
  var o7 = {};
  g.G = j7.prototype;
  g.G.setTimeout = function (a) {
    this.Ka = a;
  };
  g.G.G3 = function (a) {
    a = a.target;
    var b = this.za;
    if (b && g.tm(a) == 3) {
      b.C();
    } else {
      this.GW(a);
    }
  };
  g.G.GW = function (a) {
    try {
      if (a == this.j) {
        a: {
          let e = g.tm(this.j);
          let f = this.j.A;
          let h = this.j.getStatus();
          if (!(e < 3) && (e != 3 || this.j && (this.A.A || g.um(this.j) || g.vm(this.j)))) {
            if (!this.ha && e == 4 && f != 7) {
              if (f == 8 || h <= 0) {
                f7(3);
              } else {
                f7(2);
              }
            }
            p7(this);
            var b = this.j.getStatus();
            this.Va = b;
            var c = wCb(this);
            if (this.D = b == 200) {
              if (this.Xa && !this.ta) {
                b: {
                  if (this.j) {
                    let k = g.wm(this.j, "X-HTTP-Initial-Response");
                    if (k && !g.qc(k)) {
                      var d = k;
                      break b;
                    }
                  }
                  d = null;
                }
                if (a = d) {
                  this.ta = true;
                  w7(this, a);
                } else {
                  this.D = false;
                  this.C = 3;
                  g7(12);
                  m7(this);
                  n7(this);
                  break a;
                }
              }
              if (this.Fa) {
                a = true;
                let k;
                while (!this.ha && this.K < c.length) {
                  k = yCb(this, c);
                  if (k == o7) {
                    if (e == 4) {
                      this.C = 4;
                      g7(14);
                      a = false;
                    }
                    break;
                  } else if (k == xCb) {
                    this.C = 4;
                    g7(15);
                    a = false;
                    break;
                  } else {
                    w7(this, k);
                  }
                }
                if (vCb(this) && this.K != 0) {
                  this.A.j = this.A.j.slice(this.K);
                  this.K = 0;
                }
                if (e == 4 && c.length == 0 && !this.A.A) {
                  this.C = 1;
                  g7(16);
                  a = false;
                }
                this.D = this.D && a;
                if (a) {
                  if (c.length > 0 && !this.bb) {
                    this.bb = true;
                    this.B.RT(this);
                  }
                } else {
                  m7(this);
                  n7(this);
                }
              } else {
                w7(this, c);
              }
              if (e == 4) {
                m7(this);
              }
              if (this.D && !this.ha) {
                if (e == 4) {
                  ACb(this.B, this);
                } else {
                  this.D = false;
                  l7(this);
                }
              }
            } else {
              g.Xha(this.j);
              if (b == 400 && c.indexOf("Unknown SID") > 0) {
                this.C = 3;
                g7(12);
              } else {
                this.C = 0;
                g7(13);
              }
              m7(this);
              n7(this);
            }
          }
        }
      }
    } catch (e) {} finally {}
  };
  g.G.cancel = function () {
    this.ha = true;
    m7(this);
  };
  g.G.getLastError = function () {
    return this.C;
  };
  g.G.bS = function () {
    return this.j;
  };
  var DFb = class {
    constructor(a, b) {
      this.mapId = a;
      this.map = b;
      this.context = null;
    }
  };
  FCb.prototype.cancel = function () {
    this.B = x7(this);
    if (this.A) {
      this.A.cancel();
      this.A = null;
    } else if (this.j && this.j.size !== 0) {
      for (let a of this.j.values()) {
        a.cancel();
      }
      this.j.clear();
    }
  };
  g.G = LCb.prototype;
  g.G.HW = 8;
  g.G.Sa = 1;
  g.G.connect = function (a, b, c, d) {
    g7(0);
    this.ub = a;
    this.la = b || {};
    if (c && d !== undefined) {
      this.la.OSID = c;
      this.la.OAID = d;
    }
    this.ya = this.zb;
    this.sa = CCb(this, null, this.ub);
    v7(this);
  };
  g.G.disconnect = function () {
    MCb(this);
    if (this.Sa == 3) {
      var a = this.Fa++;
      var b = this.sa.clone();
      g.kn(b, "SID", this.Ha);
      g.kn(b, "RID", a);
      g.kn(b, "TYPE", "terminate");
      D7(this, b);
      a = new j7(this, a);
      a.sa = 2;
      a.L = x6(b.clone());
      b = false;
      if (g.Ha.navigator && g.Ha.navigator.sendBeacon) {
        try {
          b = g.Ha.navigator.sendBeacon(a.L.toString(), "");
        } catch {}
      }
      if (!b && g.Ha.Image) {
        new Image().src = a.L;
        b = true;
      }
      if (!b) {
        a.j = uCb(a.B, null);
        a.j.send(a.L);
      }
      a.ba = Date.now();
      l7(a);
    }
    UCb(this);
  };
  g.G.Fh = function () {
    return this.Sa == 0;
  };
  g.G.getState = function () {
    return this.Sa;
  };
  g.G.JW = function (a) {
    if (this.D) {
      this.D = null;
      if (this.Sa == 1) {
        if (!a) {
          this.Fa = Math.floor(Math.random() * 100000);
          a = this.Fa++;
          let e = new j7(this, a);
          let f = this.U;
          if (this.bb) {
            if (f) {
              f = g.fc(f);
              g.jc(f, this.bb);
            } else {
              f = this.bb;
            }
          }
          if (this.K === null && !this.Rc) {
            e.la = f;
            f = null;
          }
          if (this.Va) {
            a: {
              var b = 0;
              for (var c = 0; c < this.B.length; c++) {
                b: {
                  var d = this.B[c];
                  if ("__data__" in d.map && (d = d.map.__data__, typeof d === "string")) {
                    d = d.length;
                    break b;
                  }
                  d = undefined;
                }
                if (d === undefined) {
                  break;
                }
                b += d;
                if (b > 4096) {
                  b = c;
                  break a;
                }
                if (b === 4096 || c === this.B.length - 1) {
                  b = c + 1;
                  break a;
                }
              }
              b = this.hc;
            }
          } else {
            b = this.hc;
          }
          b = PCb(this, e, b);
          c = this.sa.clone();
          g.kn(c, "RID", a);
          g.kn(c, "CVER", 22);
          if (this.ha) {
            g.kn(c, "X-HTTP-Session-Id", this.ha);
          }
          D7(this, c);
          if (f) {
            if (this.Rc) {
              b = "headers=" + g.Ad(g.zja(f)) + "&" + b;
            } else if (this.K) {
              g.on(c, this.K, f);
            }
          }
          u7(this.A, e);
          if (this.te) {
            g.kn(c, "TYPE", "init");
          }
          if (this.Va) {
            g.kn(c, "$req", b);
            g.kn(c, "SID", "null");
            e.Xa = true;
            k7(e, c, null);
          } else {
            k7(e, c, b);
          }
          this.Sa = 2;
        }
      } else if (this.Sa == 3) {
        if (a) {
          QCb(this, a);
        } else if (this.B.length != 0 && !GCb(this.A)) {
          QCb(this);
        }
      }
    }
  };
  g.G.IW = function () {
    this.L = null;
    RCb(this);
    if (!!this.Oc && !this.Ra && this.j != null && !(this.Kb <= 0)) {
      this.fa = h7(() => {
        if (this.fa) {
          this.fa = null;
          this.ya = false;
          this.Ra = true;
          g7(10);
          C7(this);
          RCb(this);
        }
      }, this.Kb * 4);
    }
  };
  g.G.RT = function (a) {
    if (this.j == a && this.Oc && !this.Ra) {
      B7(this);
      this.Ra = true;
      g7(11);
    }
  };
  g.G.isActive = function () {
    return !!this.C && this.C.isActive(this);
  };
  g.G = WCb.prototype;
  g.G.NW = function () {};
  g.G.MW = function () {};
  g.G.LW = function () {};
  g.G.KW = function () {};
  g.G.isActive = function () {
    return true;
  };
  g.G.H3 = function () {};
  g.Za(G7, g.Sl);
  G7.prototype.open = function () {
    this.j.C = this.B;
    if (this.L) {
      this.j.za = true;
    }
    this.j.connect(this.K, this.A || undefined);
  };
  G7.prototype.close = function () {
    this.j.disconnect();
  };
  G7.prototype.send = function (a) {
    var b = this.j;
    if (typeof a === "string") {
      var c = {
        __data__: a
      };
      a = c;
    } else if (this.D) {
      c = {};
      c.__data__ = g.nm(a);
      a = c;
    }
    b.B.push(new DFb(b.Jd++, a));
    if (b.Sa == 3) {
      v7(b);
    }
  };
  G7.prototype.ka = function () {
    this.j.C = null;
    delete this.B;
    this.j.disconnect();
    delete this.j;
    G7.Mh.ka.call(this);
  };
  g.Za(YCb, c7);
  g.Za(ZCb, d7);
  g.Za(F7, WCb);
  F7.prototype.NW = function () {
    this.j.dispatchEvent("m");
  };
  F7.prototype.MW = function (a) {
    this.j.dispatchEvent(new YCb(a));
  };
  F7.prototype.LW = function (a) {
    this.j.dispatchEvent(new ZCb(a));
  };
  F7.prototype.KW = function () {
    this.j.dispatchEvent("n");
  };
  G7.prototype.C = function () {
    return new H7(this, this.j);
  };
  H7.prototype.A = function () {
    return r7(this.j.A);
  };
  H7.prototype.B = function () {
    return VCb(this.j).map(a => {
      var b = this.C;
      a = a.map;
      if ("__data__" in a) {
        a = a.__data__;
        b = b.D ? DBb(a) : a;
      } else {
        b = a;
      }
      return b;
    });
  };
  H7.prototype.commit = function (a) {
    this.j.Xa = a;
  };
  var J7 = new g.Sl();
  var $Cb = class extends g.Dl {
    constructor() {
      super("statevent", J7);
    }
  };
  g.G = L7.prototype;
  g.G.by = null;
  g.G.zv = false;
  g.G.jB = null;
  g.G.EP = null;
  g.G.NE = null;
  g.G.dK = null;
  g.G.JE = null;
  g.G.cK = null;
  g.G.ey = null;
  g.G.al = null;
  g.G.fK = 0;
  g.G.q2 = null;
  g.G.eK = null;
  g.G.iB = null;
  g.G.ME = -1;
  g.G.t1 = true;
  g.G.KE = false;
  g.G.CP = false;
  g.G.DP = 0;
  g.G.bK = null;
  var cDb = {};
  var O7 = {};
  g.G = L7.prototype;
  g.G.setTimeout = function (a) {
    this.A = a;
  };
  g.G.I3 = function (a) {
    a = a.target;
    var b = this.bK;
    if (b && g.tm(a) == 3) {
      b.C();
    } else {
      this.OW(a);
    }
  };
  g.G.OW = function (a) {
    try {
      if (a == this.al) {
        a: {
          let b = g.tm(this.al);
          let c = this.al.A;
          let d = this.al.getStatus();
          if (g.ne && !g.Od("420+")) {
            if (b < 4) {
              break a;
            }
          } else if (b < 3 || b == 3 && !g.um(this.al)) {
            break a;
          }
          if (!this.KE && b == 4 && c != 7) {
            if (c == 8 || d <= 0) {
              this.j.xu(3);
            } else {
              this.j.xu(2);
            }
          }
          fDb(this);
          let e = this.al.getStatus();
          this.ME = e;
          let f = g.um(this.al);
          if (this.zv = e == 200) {
            if (b == 4) {
              P7(this);
            }
            if (this.CP) {
              for (a = true; !this.KE && this.fK < f.length;) {
                let h = dDb(this, f);
                if (h == O7) {
                  if (b == 4) {
                    this.iB = 4;
                    K7();
                    a = false;
                  }
                  break;
                } else if (h == cDb) {
                  this.iB = 4;
                  K7();
                  a = false;
                  break;
                } else {
                  gDb(this, h);
                }
              }
              if (b == 4 && f.length == 0) {
                this.iB = 1;
                K7();
                a = false;
              }
              this.zv = this.zv && a;
              if (!a) {
                P7(this);
                Q7(this);
              }
            } else {
              gDb(this, f);
            }
            if (this.zv && !this.KE) {
              if (b == 4) {
                this.j.HP(this);
              } else {
                this.zv = false;
                N7(this);
              }
            }
          } else {
            this.iB = e == 400 && f.indexOf("Unknown SID") > 0 ? 3 : 0;
            K7();
            P7(this);
            Q7(this);
          }
        }
      }
    } catch (b) {} finally {}
  };
  g.G.cancel = function () {
    this.KE = true;
    P7(this);
  };
  g.G.getLastError = function () {
    return this.iB;
  };
  g.G = kDb.prototype;
  g.G.GP = null;
  g.G.bn = null;
  g.G.qO = false;
  g.G.IP = null;
  g.G.Sa = null;
  g.G.jt = -1;
  g.G.gK = null;
  g.G.uF = null;
  g.G.connect = function (a) {
    this.IP = a;
    a = S7(this.j, null, this.IP);
    K7();
    Date.now();
    var b = this.j.L;
    if (b != null) {
      this.gK = b[0];
      if (this.uF = b[1]) {
        this.Sa = 1;
        lDb(this);
      } else {
        this.Sa = 2;
        T7(this);
      }
    } else {
      y6(a, "MODE", "init");
      this.bn = new L7(this);
      this.bn.by = this.GP;
      M7(this.bn, a, false, null, true);
      this.Sa = 0;
    }
  };
  g.G.FP = function (a) {
    return this.j.FP(a);
  };
  g.G.abort = function () {
    if (this.bn) {
      this.bn.cancel();
      this.bn = null;
    }
    this.jt = -1;
  };
  g.G.Fh = function () {
    return false;
  };
  g.G.PW = function (a, b) {
    this.jt = a.ME;
    if (this.Sa == 0) {
      if (b) {
        try {
          var c = this.A.parse(b);
        } catch (d) {
          a = this.j;
          a.Oq = this.jt;
          U7(a, 2);
          return;
        }
        this.gK = c[0];
        this.uF = c[1];
      } else {
        a = this.j;
        a.Oq = this.jt;
        U7(a, 2);
      }
    } else if (this.Sa == 2) {
      if (this.qO) {
        K7();
        Date.now();
      } else if (b == "11111") {
        K7();
        this.qO = true;
        Date.now();
        this.jt = 200;
        this.bn.cancel();
        K7();
        V7(this.j, this, true);
      } else {
        K7();
        Date.now();
        this.qO = false;
      }
    }
  };
  g.G.HP = function () {
    this.jt = this.bn.ME;
    if (this.bn.zv) {
      if (this.Sa == 0) {
        if (this.uF) {
          this.Sa = 1;
          lDb(this);
        } else {
          this.Sa = 2;
          T7(this);
        }
      } else if (this.Sa == 2) {
        if (this.qO) {
          K7();
          V7(this.j, this, true);
        } else {
          K7();
          V7(this.j, this, false);
        }
      }
    } else {
      if (this.Sa == 0) {
        K7();
      } else if (this.Sa == 2) {
        K7();
      }
      var a = this.j;
      this.bn.getLastError();
      a.Oq = this.jt;
      U7(a, 2);
    }
  };
  g.G.OE = function () {
    return this.j.OE();
  };
  g.G.isActive = function () {
    return this.j.isActive();
  };
  g.G.xu = function (a) {
    this.j.xu(a);
  };
  g.G = W7.prototype;
  g.G.ko = null;
  g.G.PE = null;
  g.G.nB = "";
  g.G.ym = null;
  g.G.yi = null;
  g.G.KP = null;
  g.G.QE = null;
  g.G.QW = null;
  g.G.JP = null;
  g.G.RE = 0;
  g.G.K3 = 0;
  g.G.xj = null;
  g.G.Av = null;
  g.G.Nq = null;
  g.G.hy = null;
  g.G.Qv = null;
  g.G.pP = null;
  g.G.mB = -1;
  g.G.RW = -1;
  g.G.Oq = -1;
  g.G.lB = 0;
  g.G.kB = 0;
  g.G.gy = 8;
  var EFb = {
    OK: 0,
    uha: 2,
    Gfa: 4,
    lga: 5,
    Eia: 6,
    STOP: 7,
    X3: 8,
    Fca: 9,
    Cca: 10,
    Eca: 11,
    Aba: 12
  };
  g.Za(nDb, g.Dl);
  g.Za(oDb, g.Dl);
  g.G = W7.prototype;
  g.G.connect = function (a, b, c, d, e) {
    K7();
    this.KP = b;
    this.PE = c || {};
    if (d && e !== undefined) {
      this.PE.OSID = d;
      this.PE.OAID = e;
    }
    if (this.K) {
      I7(this.UX.bind(this, a), 100);
      pDb(this);
    } else {
      this.UX(a);
    }
  };
  g.G.disconnect = function () {
    qDb(this);
    if (this.Sa == 3) {
      var a = this.RE++;
      let b = this.QE.clone();
      g.kn(b, "SID", this.nB);
      g.kn(b, "RID", a);
      g.kn(b, "TYPE", "terminate");
      a8(this, b);
      a = new L7(this, a);
      a.dK = 2;
      a.JE = x6(b.clone());
      new Image().src = a.JE.toString();
      a.NE = Date.now();
      N7(a);
    }
    ADb(this);
  };
  g.G.UX = function (a) {
    this.Qv = new kDb(this);
    this.Qv.GP = this.ko;
    this.Qv.A = this.B;
    this.Qv.connect(a);
  };
  g.G.Fh = function () {
    return this.Sa == 0;
  };
  g.G.getState = function () {
    return this.Sa;
  };
  g.G.SW = function (a) {
    this.Av = null;
    tDb(this, a);
  };
  g.G.PW = function (a, b) {
    if (this.Sa != 0 && (this.yi == a || this.ym == a)) {
      this.Oq = a.ME;
      if (this.ym == a && this.Sa == 3) {
        if (this.gy > 7) {
          try {
            var c = this.B.parse(b);
          } catch (d) {
            c = null;
          }
          if (Array.isArray(c) && c.length == 3) {
            yDb(this, c);
          } else {
            U7(this, 11);
          }
        } else if (b != "y2f%") {
          U7(this, 11);
        }
      } else {
        if (this.yi == a) {
          Y7(this);
        }
        if (!g.qc(b)) {
          a = this.B.parse(b);
          b = 0;
          for (; b < a.length; b++) {
            c = a[b];
            this.mB = c[0];
            c = c[1];
            if (this.Sa == 2) {
              if (c[0] == "c") {
                this.nB = c[1];
                this.JP = c[2];
                c = c[3];
                if (c != null) {
                  this.gy = c;
                } else {
                  this.gy = 6;
                }
                this.Sa = 3;
                if (this.xj) {
                  this.xj.VW();
                }
                this.QW = S7(this, this.OE() ? this.JP : null, this.KP);
                vDb(this);
              } else if (c[0] == "stop") {
                U7(this, 7);
              }
            } else if (this.Sa == 3) {
              if (c[0] == "stop") {
                U7(this, 7);
              } else if (c[0] != "noop" && this.xj) {
                this.xj.UW(c);
              }
              this.kB = 0;
            }
          }
        }
      }
    }
  };
  g.G.HP = function (a) {
    if (this.yi == a) {
      Y7(this);
      this.yi = null;
      var b = 2;
    } else if (this.ym == a) {
      this.ym = null;
      b = 1;
    } else {
      return;
    }
    this.Oq = a.ME;
    if (this.Sa != 0) {
      if (a.zv) {
        if (b == 1) {
          b = a.ey ? a.ey.length : 0;
          a = Date.now() - a.NE;
          var c = J7;
          c.dispatchEvent(new nDb(c, b, a, this.lB));
          X7(this);
          if (this.xj) {
            this.xj.WW(this, this.A);
          }
          this.A.length = 0;
        } else {
          vDb(this);
        }
      } else {
        c = a.getLastError();
        var d;
        if (!(d = c == 3 || c == 7 || c == 0 && this.Oq > 0)) {
          if (d = b == 1) {
            if (this.ym || this.Av || this.Sa == 1 || this.lB >= 2) {
              d = false;
            } else {
              this.Av = I7(this.SW.bind(this, a), wDb(this, this.lB));
              this.lB++;
              d = true;
            }
          }
          d = !d && (b != 2 || !b8(this));
        }
        if (d) {
          switch (c) {
            case 1:
              U7(this, 5);
              break;
            case 4:
              U7(this, 10);
              break;
            case 3:
              U7(this, 6);
              break;
            case 7:
              U7(this, 12);
              break;
            default:
              U7(this, 2);
          }
        }
      }
    }
  };
  g.G.J3 = function (a) {
    if (!g.rb(arguments, this.Sa)) {
      throw Error("Unexpected channel state: " + this.Sa);
    }
  };
  g.G.FP = function (a) {
    if (a) {
      throw Error("Can't create secondary domain capable XhrIo object.");
    }
    a = new g.qm();
    a.L = false;
    return a;
  };
  g.G.isActive = function () {
    return !!this.xj && this.xj.isActive(this);
  };
  g.G.xu = function (a) {
    var b = J7;
    b.dispatchEvent(new oDb(b, a));
  };
  g.G.OE = function () {
    return false;
  };
  new nCb();
  g.G = BDb.prototype;
  g.G.VW = function () {};
  g.G.UW = function () {};
  g.G.WW = function () {};
  g.G.TW = function () {};
  g.G.LP = function () {};
  g.G.XW = function () {
    return {};
  };
  g.G.isActive = function () {
    return true;
  };
  g.G = CDb.prototype;
  g.G.enqueue = function (a) {
    this.A.push(a);
  };
  g.G.clear = function () {
    this.j = [];
    this.A = [];
  };
  g.G.contains = function (a) {
    return g.rb(this.j, a) || g.rb(this.A, a);
  };
  g.G.remove = function (a) {
    {
      var b = this.j;
      let c = Array.prototype.lastIndexOf.call(b, a, b.length - 1);
      if (c >= 0) {
        g.tb(b, c);
        b = true;
      } else {
        b = false;
      }
    }
    return b || g.wb(this.A, a);
  };
  g.G.Fo = function () {
    var a = [];
    for (var b = this.j.length - 1; b >= 0; --b) {
      a.push(this.j[b]);
    }
    b = this.A.length;
    for (let c = 0; c < b; ++c) {
      a.push(this.A[c]);
    }
    return a;
  };
  var FFb = class extends g.Dl {
    constructor(a) {
      super("channelMessage");
      this.message = a;
    }
  };
  var GFb = class extends g.Dl {
    constructor(a) {
      super("channelError");
      this.error = a;
    }
  };
  g.Za(c8, g.Sj);
  g.G = c8.prototype;
  g.G.Z9 = function () {
    this.retryCount++;
    this.Mk = Math.min(300000, this.Mk * 2);
    this.A();
    if (this.CH) {
      this.start();
    }
  };
  g.G.lC = function () {
    return this.retryCount;
  };
  g.G.start = function () {
    var a = this.Mk + Math.random() * 15000;
    this.j.wd(a);
    this.CH = Date.now() + a;
  };
  g.G.stop = function () {
    this.j.stop();
    this.CH = 0;
  };
  g.G.isActive = function () {
    return this.j.isActive();
  };
  g.G.reset = function () {
    this.j.stop();
    this.retryCount = 0;
    this.Mk = 5000;
  };
  g.Za(d8, BDb);
  g.G = d8.prototype;
  g.G.subscribe = function (a, b, c) {
    return this.L.subscribe(a, b, c);
  };
  g.G.unsubscribe = function (a, b, c) {
    return this.L.unsubscribe(a, b, c);
  };
  g.G.unsubscribeByKey = function (a) {
    return this.L.unsubscribeByKey(a);
  };
  g.G.publish = function (a, b) {
    return this.L.publish.apply(this.L, arguments);
  };
  g.G.dispose = function () {
    if (!this.X) {
      this.X = true;
      g.Oj(this.L);
      this.disconnect();
      g.Oj(this.A);
      this.A = null;
      this.ta = () => "";
      this.za = () => g.am({});
    }
  };
  g.G.oa = function () {
    return this.X;
  };
  g.G.connect = async function (a, b, c) {
    try {
      if (this.U) {
        await this.D;
      }
    } finally {
      if (this.X || this.j && this.j.getState() == 2 && !this.B) {
        return;
      }
      this.la = "";
      if (!this.B) {
        this.A.stop();
      }
      a = a ? g.fc(a) : null;
      if (this.j && this.ya) {
        let h = this.ya();
        if (h) {
          a = a || {};
          a.cachedSessionState = h;
        }
      }
      this.ba = a;
      this.ga = b || 0;
      let d = this.Fa + "/test";
      let e = this.Fa + "/bind";
      b = new W7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.bb);
      let f = this.j;
      if (f) {
        f.xj = null;
      }
      b.xj = this;
      this.j = b;
      if (this.U) {
        this.D = f8(this).then(() => MDb(this, d, e, f, c));
        return this.D.then(() => {
          this.D = g.am();
        });
      }
      MDb(this, d, e, f, c);
    }
  };
  g.G.disconnect = function (a) {
    try {
      if (this.U) {
        this.D.cancel();
        this.D = g.am();
      }
    } finally {
      this.ha = a || 0;
      if (this.A) {
        this.A.stop();
      }
      e8(this);
      if (this.j) {
        if (this.j.getState() == 3) {
          tDb(this.j);
        }
        this.j.disconnect();
      }
      this.ha = 0;
    }
  };
  g.G.sendMessage = async function (a, b) {
    try {
      if (this.U) {
        await this.D;
      }
    } finally {
      if (this.X) {
        return;
      }
      let c = {
        _sc: a
      };
      if (b) {
        g.jc(c, b);
      }
      if (this.A.isActive() || (this.j ? this.j.getState() : 0) == 2) {
        this.C.push(c);
      } else if (this.lz()) {
        try {
          if (this.U && !ODb(this, a)) {
            await f8(this);
          }
        } finally {
          if (this.lz()) {
            ODb(this, a);
            e8(this);
            Z7(this.j, c);
          }
        }
      }
    }
  };
  g.G.VW = function () {
    if (this.K && this.A && this.A.lC() > 0) {
      this.K.Ima(this.A.lC(), this.B, true);
      this.K.Jma();
    }
    if (this.K) {
      this.K.Mja();
    }
    if (this.B) {
      this.A.stop();
      g.Oj(this.A);
      this.A = new c8(this.AO, this);
      this.B = false;
    } else {
      this.A.reset();
    }
    this.ba = null;
    this.ga = 0;
    if (this.C.length) {
      if (this.U) {
        PDb(this);
      } else {
        var a = this.C;
        this.C = [];
        var b = a.length;
        for (let c = 0; c < b; ++c) {
          Z7(this.j, a[c]);
        }
        g8(this);
        g8(this);
      }
    } else {
      g8(this);
    }
  };
  g.G.TW = function (a) {
    var b = a == 2 && this.j.Oq == 401;
    if (a != 4 && !b) {
      if (this.B && !this.A.isActive()) {
        g.Oj(this.A);
        this.A = new c8(this.AO, this);
        this.B = false;
      }
      this.A.start();
    }
    this.publish("handlerError", a, b);
    b = Object.keys(EFb).find(c => EFb[c] === a);
    this.Ka.Pe("BROWSER_CHANNEL", b ?? "UNKNOWN");
  };
  g.G.LP = function (a, b) {
    if (!this.A.isActive()) {
      this.publish("handlerClosed");
    } else if (b) {
      let c = b.length;
      for (let d = 0; d < c; ++d) {
        let e = b[d].map;
        if (e) {
          this.C.push(e);
        }
      }
    }
    this.Ha.Pe("BROWSER_CHANNEL");
    if (a) {
      this.qb.A(a.length);
    }
    if (b) {
      this.ub.A(b.length);
    }
  };
  g.G.WW = function (a, b) {
    if (b != null && a != null) {
      this.Va.Pe();
    }
  };
  g.G.XW = function (a) {
    var b = {
      v: 2
    };
    if (this.la) {
      b.gsessionid = this.la;
    }
    if (!a || a.getState() == 1 && a.QE) {
      if (this.ga != 0) {
        b.ui = "" + this.ga;
      }
      if (this.ba) {
        g.jc(b, this.ba);
      }
    }
    if (this.ha != 0) {
      b.ui = "" + this.ha;
    }
    return b;
  };
  g.G.UW = function (a) {
    if (a[0] == "S") {
      this.la = a[1];
    } else if (a[0] == "gracefulReconnect") {
      this.A.start();
      this.j.disconnect();
    } else {
      this.publish("handlerMessage", new EDb(a[0], a[1]));
    }
    this.Ra.Pe("BROWSER_CHANNEL");
  };
  g.G.lz = function () {
    return !!this.j && this.j.getState() == 3;
  };
  g.G.Yu = function (a) {
    if (!(this.fa.loungeIdToken = a)) {
      this.A.stop();
    }
    if (this.jb && this.j) {
      let b = this.j.ko || {};
      if (a) {
        b["X-YouTube-LoungeId-Token"] = a;
      } else {
        delete b["X-YouTube-LoungeId-Token"];
      }
      this.j.ko = b;
    }
  };
  g.G.getDeviceId = function () {
    return this.fa.id;
  };
  g.G.pw = function () {
    if (this.A.isActive()) {
      return this.A.CH - Date.now();
    } else {
      return NaN;
    }
  };
  g.G.mA = function () {
    var a = this.A;
    g.ko(a.j);
    a.start();
  };
  g.G.AO = function () {
    this.A.isActive();
    if (rDb(this.j) == 0) {
      this.connect(this.ba, this.ga);
    }
  };
  h8.prototype.sendRequest = function (a, b, c, d, e, f, h) {
    a = {
      format: f ? "RAW" : "JSON",
      method: a,
      context: this,
      timeout: 5000,
      withCredentials: !!h,
      onSuccess: g.Ta(this.C, d, !f),
      onError: g.Ta(this.B, e),
      onTimeout: g.Ta(this.D, e)
    };
    if (c) {
      a.postParams = c;
      a.headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
    }
    return g.pq(b, a);
  };
  h8.prototype.C = function (a, b, c, d) {
    if (b) {
      a(d);
    } else {
      a({
        text: c.responseText
      });
    }
  };
  h8.prototype.B = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  h8.prototype.D = function (a) {
    a(Error("request timed out"));
  };
  var UDb = class extends g.Sl {
    constructor(a, b) {
      super();
      this.handler = a();
      this.handler.subscribe("handlerOpened", this.j, this);
      this.handler.subscribe("handlerClosed", this.onClosed, this);
      this.handler.subscribe("handlerError", (c, d) => {
        this.onError(d);
      });
      this.handler.subscribe("handlerMessage", this.onMessage, this);
      this.A = b;
    }
    connect(a, b, c) {
      this.handler.connect(a, b, c);
    }
    disconnect(a) {
      this.handler.disconnect(a);
    }
    mA() {
      this.handler.mA();
    }
    getDeviceId() {
      return this.handler.getDeviceId();
    }
    pw() {
      return this.handler.pw();
    }
    lz() {
      return this.handler.lz();
    }
    j() {
      this.dispatchEvent("channelOpened");
      var a = this.handler;
      var b = this.A;
      g.kr("yt-remote-session-browser-channel", {
        firstTestResults: [""],
        secondTestResults: !a.j.pP,
        sessionId: a.j.nB,
        arrayId: a.j.mB
      });
      g.kr("yt-remote-session-screen-id", b);
      a = M6();
      b = O6();
      if (!g.rb(a, b)) {
        a.push(b);
      }
      VBb(a);
      P6();
    }
    onClosed() {
      this.dispatchEvent("channelClosed");
    }
    onMessage(a) {
      this.dispatchEvent(new FFb(a));
    }
    onError(a) {
      this.dispatchEvent(new GFb(a ? 1 : 0));
    }
    sendMessage(a, b) {
      this.handler.sendMessage(a, b);
    }
    Yu(a) {
      this.handler.Yu(a);
    }
    dispose() {
      this.handler.dispose();
    }
  };
  var TDb = class {
    constructor(a, b, c = () => "") {
      new XCb();
      var d = new g.Ho();
      this.pathPrefix = a;
      this.j = b;
      this.fa = c;
      this.D = d;
      this.U = null;
      this.X = this.L = 0;
      this.channel = null;
      this.K = 0;
      this.B = new c8(() => {
        this.B.isActive();
        if (this.channel?.C().A() === 0) {
          this.connect(this.U, this.L);
        }
      });
      this.C = {};
      this.A = {};
      this.ga = false;
      this.logger = null;
      this.ba = [];
      this.Li = undefined;
      this.ta = new FDb();
      this.ha = new GDb();
      this.sa = new IDb();
      this.la = new JDb();
    }
    connect(a = {}, b = 0) {
      if (this.K !== 2) {
        this.B.stop();
        this.U = a;
        this.L = b;
        j8(this);
        if (a = g.Mp("ID_TOKEN")) {
          this.C["x-youtube-identity-token"] = a;
        } else {
          delete this.C["x-youtube-identity-token"];
        }
        if (this.j) {
          this.A.device = this.j.device;
          this.A.name = this.j.name;
          this.A.app = this.j.app;
          this.A.id = this.j.id;
          if (this.j.a8) {
            this.A.mdxVersion = `${this.j.a8}`;
          }
          if (this.j.theme) {
            this.A.theme = this.j.theme;
          }
          if (this.j.capabilities) {
            this.A.capabilities = this.j.capabilities;
          }
          if (this.j.x5) {
            this.A.cst = this.j.x5;
          }
          if (this.j.authuser) {
            this.A.authuser = this.j.authuser;
          }
          if (this.j.pageId) {
            this.A.pageId = this.j.pageId;
          }
        }
        if (this.L !== 0) {
          this.A.ui = `${this.L}`;
        } else {
          delete this.A.ui;
        }
        Object.assign(this.A, this.U);
        this.channel = new G7(this.pathPrefix, {
          h7: "gsessionid",
          h8: this.C,
          i8: this.A
        });
        this.channel.open();
        this.K = 2;
        RDb(this);
      }
    }
    disconnect(a = 0) {
      this.X = a;
      this.B.stop();
      j8(this);
      if (this.channel) {
        if (this.X !== 0) {
          this.A.ui = `${this.X}`;
        } else {
          delete this.A.ui;
        }
        this.channel.close();
      }
      this.X = 0;
    }
    pw() {
      if (this.B.isActive()) {
        return this.B.CH - Date.now();
      } else {
        return NaN;
      }
    }
    mA() {
      var a = this.B;
      g.ko(a.j);
      a.start();
    }
    sendMessage(a, b) {
      if (this.channel) {
        j8(this);
        this.channel.send({
          _sc: a,
          ...b
        });
      }
    }
    Yu(a) {
      if (!a) {
        this.B.stop();
      }
      if (a) {
        this.C["X-YouTube-LoungeId-Token"] = a;
      } else {
        delete this.C["X-YouTube-LoungeId-Token"];
      }
    }
    getDeviceId() {
      if (this.j) {
        return this.j.id;
      } else {
        return "";
      }
    }
    publish(a, ...b) {
      return this.D.publish(a, ...b);
    }
    subscribe(a, b, c) {
      return this.D.subscribe(a, b, c);
    }
    unsubscribe(a, b, c) {
      return this.D.unsubscribe(a, b, c);
    }
    unsubscribeByKey(a) {
      return this.D.unsubscribeByKey(a);
    }
    dispose() {
      if (!this.ga) {
        this.ga = true;
        g.Oj(this.D);
        this.disconnect();
        g.Oj(this.B);
        this.fa = () => "";
      }
    }
    oa() {
      return this.ga;
    }
  };
  var SDb = class extends g.Sl {
    constructor(a) {
      super();
      this.j = a();
      this.j.subscribe("webChannelOpened", this.A, this);
      this.j.subscribe("webChannelClosed", this.onClosed, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.onMessage, this);
    }
    connect(a, b) {
      this.j.connect(a, b);
    }
    disconnect(a) {
      this.j.disconnect(a);
    }
    mA() {
      this.j.mA();
    }
    getDeviceId() {
      return this.j.getDeviceId();
    }
    pw() {
      return this.j.pw();
    }
    lz() {
      return this.j.K === 3;
    }
    A() {
      this.dispatchEvent("channelOpened");
    }
    onClosed() {
      this.dispatchEvent("channelClosed");
    }
    onMessage(a) {
      this.dispatchEvent(new FFb(a));
    }
    onError() {
      this.dispatchEvent(new GFb(this.j.Li === 401 ? 1 : 0));
    }
    sendMessage(a, b) {
      this.j.sendMessage(a, b);
    }
    Yu(a) {
      this.j.Yu(a);
    }
    dispose() {
      this.j.dispose();
    }
  };
  var bEb = Date.now();
  var k8 = null;
  var o8 = Array(50);
  var n8 = -1;
  var p8 = false;
  var P9 = class extends g.Q_ {
    constructor(a) {
      super();
      this.K = a;
      this.screens = [];
    }
  };
  P9.prototype.tn = function () {
    return this.screens;
  };
  P9.prototype.contains = function (a) {
    return !!K6(this.screens, a);
  };
  P9.prototype.get = function (a) {
    if (a) {
      return L6(this.screens, a);
    } else {
      return null;
    }
  };
  P9.prototype.info = function (a) {
    l8(this.K, a);
  };
  var IFb = class extends g.Q_ {
    constructor(a, b, c, d, e) {
      super();
      this.C = a;
      this.ba = b;
      this.U = c;
      this.ga = d;
      this.X = e;
      this.A = 0;
      this.j = null;
      this.ke = NaN;
    }
    start() {
      if (!this.j && isNaN(this.ke)) {
        this.B();
      }
    }
    stop() {
      if (this.j) {
        this.j.abort();
        this.j = null;
      }
      if (!isNaN(this.ke)) {
        g.mq(this.ke);
        this.ke = NaN;
      }
    }
    ka() {
      this.stop();
      super.ka();
    }
    B() {
      this.ke = NaN;
      this.j = g.pq(i8(this.C, "/pairing/get_screen"), {
        method: "POST",
        postParams: {
          pairing_code: this.ba
        },
        timeout: 5000,
        onSuccess: (0, g.Ra)(this.K, this),
        onError: (0, g.Ra)(this.D, this),
        onTimeout: (0, g.Ra)(this.L, this)
      });
    }
    K(a, b) {
      this.j = null;
      a = b.screen || {};
      a.dialId = this.U;
      a.name = this.ga;
      b = -1;
      if (this.X && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs) {
        a.screenIdType = "shortLived";
        a.loungeToken = a.shortLivedLoungeToken.value;
        b = a.shortLivedLoungeToken.refreshIntervalMs;
      }
      this.publish("pairingComplete", new F6(a), b);
    }
    D(a) {
      this.j = null;
      if (a.status && a.status == 404) {
        if (this.A >= HFb.length) {
          this.publish("pairingFailed", Error("DIAL polling timed out"));
        } else {
          a = HFb[this.A];
          this.ke = g.kq((0, g.Ra)(this.B, this), a);
          this.A++;
        }
      } else {
        this.publish("pairingFailed", Error("Server error " + a.status));
      }
    }
    L() {
      this.j = null;
      this.publish("pairingFailed", Error("Server not responding"));
    }
  };
  var HFb = [2000, 2000, 1000, 1000, 1000, 2000, 2000, 5000, 5000, 10000];
  var nEb = class extends P9 {
    constructor(a) {
      super("LocalScreenService");
      this.A = a;
      this.j = NaN;
      q8(this);
      this.info("Initializing with " + I6(this.screens));
    }
    ka() {
      g.mq(this.j);
      super.ka();
    }
  };
  g.G = nEb.prototype;
  g.G.start = function () {
    if (q8(this)) {
      this.publish("screenChange");
    }
    if (!g.lr("yt-remote-lounge-token-expiration")) {
      fEb(this);
    }
    g.mq(this.j);
    this.j = g.kq((0, g.Ra)(this.start, this), 10000);
  };
  g.G.add = function (a, b) {
    q8(this);
    cEb(this, a);
    r8(this, false);
    this.publish("screenChange");
    b(a);
    if (!a.token) {
      fEb(this);
    }
  };
  g.G.remove = function (a, b) {
    var c = q8(this);
    if (eEb(this, a)) {
      r8(this, false);
      c = true;
    }
    b(a);
    if (c) {
      this.publish("screenChange");
    }
  };
  g.G.nP = function (a, b, c, d) {
    var e = q8(this);
    var f = this.get(a.id);
    if (f) {
      if (f.name != b) {
        f.name = b;
        r8(this, false);
        e = true;
      }
      c(a);
    } else {
      d(Error("no such local screen."));
    }
    if (e) {
      this.publish("screenChange");
    }
  };
  g.G.W6 = function (a) {
    q8(this);
    var b = this.screens.length;
    a = a && a.screens || [];
    var c = a.length;
    for (let d = 0; d < c; ++d) {
      let e = a[d];
      let f = this.get(e.screenId);
      if (f) {
        f.token = e.loungeToken;
        --b;
      }
    }
    r8(this, !b);
    if (b) {
      l8(this.K, "Missed " + b + " lounge tokens.");
    }
  };
  g.G.V6 = function (a) {
    l8(this.K, "Requesting lounge tokens failed: " + a);
  };
  var oEb = class extends g.Q_ {
    constructor(a, b) {
      super();
      this.K = b;
      b = (b = g.lr("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      var c = {};
      var d = this.K();
      var e = d.length;
      for (let f = 0; f < e; ++f) {
        let h = d[f].id;
        c[h] = g.rb(b, h);
      }
      this.j = c;
      this.D = a;
      this.B = this.C = NaN;
      this.A = null;
      s8("Initialized with " + g.nm(this.j));
    }
    isOnline(a) {
      return !!this.j[a];
    }
    start() {
      var a = parseInt(g.lr("yt-remote-fast-check-period") || "0", 10);
      if (this.C = g.Ua() - 14400000 < a ? 0 : a) {
        t8(this);
      } else {
        this.C = g.Ua() + 300000;
        g.kr("yt-remote-fast-check-period", this.C);
        this.L();
      }
    }
    update() {
      s8("Updating availability on schedule.");
      var a = this.K();
      var b = g.Ob(this.j, function (c, d) {
        return c && !!L6(a, d);
      }, this);
      u8(this, b);
    }
    ka() {
      g.mq(this.B);
      this.B = NaN;
      if (this.A) {
        this.A.abort();
        this.A = null;
      }
      super.ka();
    }
    L() {
      g.mq(this.B);
      this.B = NaN;
      if (this.A) {
        this.A.abort();
      }
      var a = hEb(this);
      if (z6(a)) {
        var b = i8(this.D, "/pairing/get_screen_availability");
        var c = {
          lounge_token: g.Wb(a).join(",")
        };
        this.A = this.D.sendRequest("POST", b, c, (0, g.Ra)(this.X, this, a), (0, g.Ra)(this.U, this));
      } else {
        u8(this, {});
        t8(this);
      }
    }
    X(a, b) {
      this.A = null;
      var c = g.Wb(hEb(this));
      if (g.Kb(c, g.Wb(a))) {
        b = b.screens || [];
        c = {};
        var d = b.length;
        for (let e = 0; e < d; ++e) {
          c[a[b[e].loungeToken]] = b[e].status == "online";
        }
        u8(this, c);
        t8(this);
      } else {
        this.eh("Changing Screen set during request.");
        this.L();
      }
    }
    U(a) {
      this.eh("Screen availability failed: " + a);
      this.A = null;
      t8(this);
    }
    eh(a) {
      l8("OnlineScreenService", a);
    }
  };
  var q9 = class extends P9 {
    constructor(a = false) {
      var b = n9;
      super("ScreenService");
      this.C = b;
      this.L = a;
      this.j = this.A = null;
      this.B = [];
      this.D = {};
      pEb(this);
    }
    ka() {
      g.Oj(this.A);
      g.Oj(this.j);
      super.ka();
    }
  };
  g.G = q9.prototype;
  g.G.start = function () {
    this.A.start();
    this.j.start();
    if (this.screens.length) {
      this.publish("screenChange");
      if (!g.bc(this.j.j)) {
        this.publish("onlineScreenChange");
      }
    }
  };
  g.G.add = function (a, b, c) {
    this.A.add(a, b, c);
  };
  g.G.remove = function (a, b, c) {
    this.A.remove(a, b, c);
    this.j.update();
  };
  g.G.nP = function (a, b, c, d) {
    if (this.A.contains(a)) {
      this.A.nP(a, b, c, d);
    } else {
      a = "Updating name of unknown screen: " + a.name;
      l8(this.K, a);
      d(Error(a));
    }
  };
  g.G.tn = function (a) {
    if (a) {
      return this.screens;
    } else {
      return g.yb(this.screens, g.fb(this.B, function (b) {
        return !this.contains(b);
      }, this));
    }
  };
  g.G.YW = function () {
    return g.fb(this.tn(true), function (a) {
      return this.j.isOnline(a.id);
    }, this);
  };
  g.G.ZW = function (a, b, c, d, e, f) {
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var h = new IFb(this.C, a, b, c, d);
    h.subscribe("pairingComplete", (k, l) => {
      g.Oj(h);
      e(w8(this, k), l);
    });
    h.subscribe("pairingFailed", k => {
      g.Oj(h);
      f(k);
    });
    h.start();
    return (0, g.Ra)(h.stop, h);
  };
  g.G.L3 = function (a, b, c, d) {
    g.pq(i8(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: {
        pairing_code: a
      },
      timeout: 5000,
      onSuccess: (0, g.Ra)(function (e, f) {
        e = new F6(f.screen || {});
        if (!e.name || kEb(this, e.name)) {
          a: {
            f = e.name;
            let h = 2;
            let k = b(f, h);
            while (kEb(this, k)) {
              h++;
              if (h > 20) {
                break a;
              }
              k = b(f, h);
            }
            f = k;
          }
          e.name = f;
        }
        c(w8(this, e));
      }, this),
      onError: (0, g.Ra)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.Ra)(function () {
        d(Error("pairing request timed out."));
      }, this)
    });
  };
  g.G.a7 = function () {
    mEb(this);
    this.publish("screenChange");
    this.j.update();
  };
  q9.prototype.dispose = q9.prototype.dispose;
  var Q9 = class extends g.Q_ {
    constructor(a, b, c) {
      super();
      this.ta = c;
      this.D = a;
      this.A = b;
      this.j = null;
    }
    ka() {
      this.sa("");
      super.ka();
    }
  };
  Q9.prototype.C = function (a) {
    if (!this.oa()) {
      if (a) {
        z8(this, "" + a);
        this.publish("sessionFailed");
      }
      this.j = null;
      this.publish("sessionScreen", null);
    }
  };
  Q9.prototype.info = function (a) {
    l8(this.ta, a);
  };
  Q9.prototype.za = function () {
    return null;
  };
  Q9.prototype.sa = function (a) {
    var b = this.A;
    if (a) {
      b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []);
      b.displayStatus.showStop = true;
    } else {
      b.displayStatus = null;
    }
    chrome.cast.setReceiverDisplayStatus(b, (0, g.Ra)(function () {
      this.info("Updated receiver status for " + b.friendlyName + ": " + a);
    }, this), (0, g.Ra)(function () {
      z8(this, "Failed to update receiver status for: " + b.friendlyName);
    }, this));
  };
  var R9 = class extends Q9 {
    constructor(a, b, c) {
      super(a, b, "CastSession");
      this.config_ = c;
      this.B = null;
      this.fa = (0, g.Ra)(this.Fa, this);
      this.ha = (0, g.Ra)(this.Ha, this);
      this.ba = g.kq(() => {
        tEb(this, null);
      }, 120000);
      this.X = this.K = this.U = this.ga = 0;
    }
    la(a) {
      if (this.B) {
        if (this.B == a) {
          return;
        }
        z8(this, "Overriding cast session with new session object");
        uEb(this);
        this.B.removeUpdateListener(this.fa);
        this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ha);
      }
      this.B = a;
      this.B.addUpdateListener(this.fa);
      this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.ha);
      vEb(this, "getMdxSessionStatus");
    }
    L(a) {
      this.info("launchWithParams no-op for Cast: " + g.nm(a));
    }
    stop() {
      if (this.B) {
        this.B.stop((0, g.Ra)(function () {
          this.C();
        }, this), (0, g.Ra)(function () {
          this.C(Error("Failed to stop receiver app."));
        }, this));
      } else {
        this.C(Error("Stopping cast device without session."));
      }
    }
    sa() {}
    ka() {
      this.info("disposeInternal");
      uEb(this);
      if (this.B) {
        this.B.removeUpdateListener(this.fa);
        this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.ha);
      }
      this.B = null;
      super.ka();
    }
    Ha(a, b) {
      if (!this.oa()) {
        if (b) {
          b = A6(b);
          if (g.Na(b)) {
            a = "" + b.type;
            b = b.data || {};
            this.info("onYoutubeMessage_: " + a + " " + g.nm(b));
            switch (a) {
              case "mdxSessionStatus":
                tEb(this, b);
                break;
              case "loungeToken":
                wEb(this, b);
                break;
              default:
                z8(this, "Unknown youtube message: " + a);
            }
          } else {
            z8(this, "Unable to parse message.");
          }
        } else {
          z8(this, "No data in message.");
        }
      }
    }
    ya(a, b, c, d) {
      g.mq(this.ga);
      this.ga = 0;
      jEb(this.D, this.A.label, a, this.A.friendlyName, (0, g.Ra)(function (e) {
        if (e) {
          b(e);
        } else if (d >= 0) {
          z8(this, "Screen " + a + " appears to be offline. " + d + " retries left.");
          this.ga = g.kq((0, g.Ra)(this.ya, this, a, b, c, d - 1), 300);
        } else {
          c(Error("Unable to fetch screen."));
        }
      }, this), c);
    }
    za() {
      return this.B;
    }
    Fa(a) {
      if (!this.oa() && !a) {
        z8(this, "Cast session died.");
        this.C();
      }
    }
  };
  var JFb = class extends Q9 {
    constructor(a, b, c, d) {
      super(a, b, "DialSession");
      this.config_ = d;
      this.B = this.ga = null;
      this.ha = "";
      this.Ha = c;
      this.Fa = null;
      this.fa = () => {};
      this.ba = NaN;
      this.ya = (0, g.Ra)(this.Ka, this);
      this.K = () => {};
      this.X = this.U = 0;
    }
    la(a) {
      this.B = a;
      this.B.addUpdateListener(this.ya);
    }
    L(a) {
      this.Fa = a;
      this.fa();
    }
    stop() {
      BEb(this);
      if (this.B) {
        this.B.stop((0, g.Ra)(this.C, this, null), (0, g.Ra)(this.C, this, "Failed to stop DIAL device."));
      } else {
        this.C();
      }
    }
    ka() {
      BEb(this);
      if (this.B) {
        this.B.removeUpdateListener(this.ya);
      }
      this.B = null;
      super.ka();
    }
    Ka(a) {
      if (!this.oa() && !a) {
        z8(this, "DIAL session died.");
        this.K();
        this.K = () => {};
        this.C();
      }
    }
  };
  var KFb = class extends Q9 {
    constructor(a, b) {
      super(a, b, "ManualSession");
      this.B = g.kq((0, g.Ra)(this.L, this, null), 150);
    }
    stop() {
      this.C();
    }
    la() {}
    L() {
      g.mq(this.B);
      this.B = NaN;
      var a = L6(this.D.tn(), this.A.label);
      if (a) {
        y8(this, a);
      } else {
        this.C(Error("No such screen"));
      }
    }
    ka() {
      g.mq(this.B);
      this.B = NaN;
      super.ka();
    }
  };
  var S8 = class extends g.Q_ {
    constructor(a, b) {
      super();
      this.config_ = b;
      this.A = a;
      this.ha = b.appId || "233637DE";
      this.C = b.theme || "cl";
      this.la = b.disableCastApi || false;
      this.L = b.forceMirroring || false;
      this.j = null;
      this.U = false;
      this.B = [];
      this.K = (0, g.Ra)(this.ta, this);
    }
    init(a, b) {
      chrome.cast.timeout.requestSession = 30000;
      var c = new chrome.cast.SessionRequest(this.ha, [chrome.cast.Capability.AUDIO_OUT]);
      if (g.eq("desktop_enable_cast_connect")) {
        c.androidReceiverCompatible = true;
      }
      if (!this.la) {
        c.dialRequest = new chrome.cast.DialRequest("YouTube");
      }
      var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
      a = a || this.L ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
      var e = (0, g.Ra)(this.za, this);
      c = new chrome.cast.ApiConfig(c, (0, g.Ra)(this.X, this), e, d, a);
      c.customDialLaunchCallback = (0, g.Ra)(this.sa, this);
      chrome.cast.initialize(c, (0, g.Ra)(function () {
        if (!this.oa()) {
          chrome.cast.addReceiverActionListener(this.K);
          ZDb();
          this.A.subscribe("onlineScreenChange", (0, g.Ra)(this.D, this));
          this.B = HEb(this);
          chrome.cast.setCustomReceivers(this.B, () => {}, (0, g.Ra)(function (f) {
            this.eh("Failed to set initial custom receivers: " + g.nm(f));
          }, this));
          this.publish("yt-remote-cast2-availability-change", F8(this));
          b(true);
        }
      }, this), (0, g.Ra)(function (f) {
        this.eh("Failed to initialize API: " + g.nm(f));
        b(false);
      }, this));
    }
    Fa(a, b) {
      G8("Setting connected screen ID: " + a + " -> " + b);
      if (this.j) {
        var c = this.j.j;
        if (!a || c && c.id != a) {
          G8("Unsetting old screen status: " + this.j.A.friendlyName);
          H8(this, null);
        }
      }
      if (a && b) {
        if (!this.j) {
          a = L6(this.A.tn(), a);
          if (!a) {
            G8("setConnectedScreenStatus: Unknown screen.");
            return;
          }
          if (a.idType == "shortLived") {
            G8("setConnectedScreenStatus: Screen with id type to be short lived.");
            return;
          }
          c = GEb(this, a);
          if (!c) {
            G8("setConnectedScreenStatus: Connected receiver not custom...");
            c = new chrome.cast.Receiver(a.uuid ? a.uuid : a.id, a.name);
            c.receiverType = chrome.cast.ReceiverType.CUSTOM;
            this.B.push(c);
            chrome.cast.setCustomReceivers(this.B, () => {}, (0, g.Ra)(function (d) {
              this.eh("Failed to set initial custom receivers: " + g.nm(d));
            }, this));
          }
          G8("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
          H8(this, new KFb(this.A, c), true);
        }
        this.j.sa(b);
      } else {
        G8("setConnectedScreenStatus: no screen.");
      }
    }
    Ha(a) {
      if (this.oa()) {
        this.eh("Setting connection data on disposed cast v2");
      } else if (this.j) {
        this.j.L(a);
      } else {
        this.eh("Setting connection data without a session");
      }
    }
    fa() {
      if (this.oa()) {
        this.eh("Stopping session on disposed cast v2");
      } else if (this.j) {
        this.j.stop();
        H8(this, null);
      } else {
        G8("Stopping non-existing session");
      }
    }
    requestSession() {
      chrome.cast.requestSession((0, g.Ra)(this.X, this), (0, g.Ra)(this.ya, this));
    }
    ka() {
      this.A.unsubscribe("onlineScreenChange", (0, g.Ra)(this.D, this));
      if (window.chrome && chrome.cast) {
        chrome.cast.removeReceiverActionListener(this.K);
      }
      var a = WDb;
      var b = g.Ja("yt.mdx.remote.debug.handlers_");
      g.wb(b || [], a);
      g.Oj(this.j);
      super.ka();
    }
    eh(a) {
      l8("Controller", a);
    }
    ga(a, b) {
      if (this.j == a) {
        if (!b) {
          H8(this, null);
        }
        this.publish("yt-remote-cast2-session-change", b);
      }
    }
    ta(a, b) {
      if (!this.oa()) {
        if (a) {
          a.friendlyName = chrome.cast.unescape(a.friendlyName);
          G8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b);
          switch (b) {
            case chrome.cast.ReceiverAction.CAST:
              if (this.j) {
                if (this.j.A.label != a.label) {
                  G8("onReceiverAction_: Stopping active receiver: " + this.j.A.friendlyName);
                  this.j.stop();
                } else {
                  G8("onReceiverAction_: Casting to active receiver.");
                  if (this.j.j) {
                    this.publish("yt-remote-cast2-session-change", this.j.j);
                  }
                  break;
                }
              }
              switch (a.receiverType) {
                case chrome.cast.ReceiverType.CUSTOM:
                  H8(this, new KFb(this.A, a));
                  break;
                case chrome.cast.ReceiverType.DIAL:
                  H8(this, new JFb(this.A, a, this.C, this.config_));
                  break;
                case chrome.cast.ReceiverType.CAST:
                  H8(this, new R9(this.A, a, this.config_));
                  break;
                default:
                  this.eh("Unknown receiver type: " + a.receiverType);
              }
              break;
            case chrome.cast.ReceiverAction.STOP:
              if (this.j && this.j.A.label == a.label) {
                this.j.stop();
              } else {
                this.eh("Stopping receiver w/o session: " + a.friendlyName);
              }
          }
        } else {
          this.eh("onReceiverAction_ called without receiver.");
        }
      }
    }
    sa(a) {
      if (this.oa()) {
        return Promise.reject(Error("disposed"));
      }
      var b = a.receiver;
      if (b.receiverType != chrome.cast.ReceiverType.DIAL) {
        this.eh("Not DIAL receiver: " + b.friendlyName);
        b.receiverType = chrome.cast.ReceiverType.DIAL;
      }
      var c = this.j ? this.j.A : null;
      if (!c || c.label != b.label) {
        this.eh("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName);
        return Promise.reject(Error("illegal DIAL launch"));
      }
      if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
        if (this.j.j) {
          G8("Reselecting dial screen.");
          this.publish("yt-remote-cast2-session-change", this.j.j);
          return Promise.resolve(new chrome.cast.DialLaunchResponse(false));
        }
        this.eh("Changing CAST intent from \"" + c.receiverType + "\" to \"dial\" for " + b.friendlyName);
        H8(this, new JFb(this.A, b, this.C, this.config_));
      }
      b = this.j;
      b.ga = a;
      if (b.ga.appState == chrome.cast.DialAppState.RUNNING) {
        a = b.ga.extraData || {};
        c = a.screenId || null;
        if (D8(b) && a.loungeToken) {
          if (a.loungeTokenRefreshIntervalMs) {
            a = FEb(b, {
              name: b.A.friendlyName,
              screenId: a.screenId,
              loungeToken: a.loungeToken,
              dialId: b.ga.receiver.label,
              screenIdType: "shortLived"
            }, a.loungeTokenRefreshIntervalMs);
          } else {
            g.Pp(Error(`No loungeTokenRefreshIntervalMs presents in additionalData: ${JSON.stringify(a)}.`));
            a = DEb(b, c);
          }
        } else {
          a = DEb(b, c);
        }
      } else {
        a = C8(b);
      }
      return a;
    }
    X(a) {
      if (!this.oa() && !this.L) {
        G8("New cast session ID: " + a.sessionId);
        var b = a.receiver;
        if (b.receiverType != chrome.cast.ReceiverType.CUSTOM) {
          if (!this.j) {
            if (b.receiverType == chrome.cast.ReceiverType.CAST) {
              G8("Got resumed cast session before resumed mdx connection.");
              b.friendlyName = chrome.cast.unescape(b.friendlyName);
              H8(this, new R9(this.A, b, this.config_), true);
            } else {
              this.eh("Got non-cast session without previous mdx receiver event, or mdx resume.");
              return;
            }
          }
          var c = this.j.A;
          var d = L6(this.A.tn(), c.label);
          if (d && G6(d, b.label) && c.receiverType != chrome.cast.ReceiverType.CAST && b.receiverType == chrome.cast.ReceiverType.CAST) {
            G8("onSessionEstablished_: manual to cast session change " + b.friendlyName);
            g.Oj(this.j);
            this.j = new R9(this.A, b, this.config_);
            this.j.subscribe("sessionScreen", (0, g.Ra)(this.ga, this, this.j));
            this.j.subscribe("sessionFailed", () => IEb(this, this.j));
            this.j.L(null);
          }
          this.j.la(a);
        }
      }
    }
    ba() {
      if (this.j) {
        return this.j.za();
      } else {
        return null;
      }
    }
    ya(a) {
      if (!this.oa()) {
        this.eh("Failed to estabilish a session: " + g.nm(a));
        if (a.code != chrome.cast.ErrorCode.CANCEL) {
          H8(this, null);
        }
        this.publish("yt-remote-cast2-session-failed");
      }
    }
    za(a) {
      G8("Receiver availability updated: " + a);
      if (!this.oa()) {
        var b = F8(this);
        this.U = a == chrome.cast.ReceiverAvailability.AVAILABLE;
        if (F8(this) != b) {
          this.publish("yt-remote-cast2-availability-change", F8(this));
        }
      }
    }
    D() {
      if (!this.oa()) {
        this.B = HEb(this);
        G8("Updating custom receivers: " + g.nm(this.B));
        chrome.cast.setCustomReceivers(this.B, () => {}, (0, g.Ra)(function () {
          this.eh("Failed to set custom receivers.");
        }, this));
        this.publish("yt-remote-cast2-availability-change", F8(this));
      }
    }
  };
  S8.prototype.setLaunchParams = S8.prototype.Ha;
  S8.prototype.setConnectedScreenStatus = S8.prototype.Fa;
  S8.prototype.stopSession = S8.prototype.fa;
  S8.prototype.getCastSession = S8.prototype.ba;
  S8.prototype.requestSession = S8.prototype.requestSession;
  S8.prototype.init = S8.prototype.init;
  S8.prototype.dispose = S8.prototype.dispose;
  var N8 = [];
  var NEb = (0, g.Zd)`https://www.gstatic.com/cv/js/sender/v1/cast_sender.js`;
  g.G = T8.prototype;
  g.G.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    U8(this);
    this.volume = -1;
    this.muted = false;
    if (a) {
      this.index = a.index;
      this.listId = a.listId;
      this.videoId = a.videoId;
      this.playerState = a.playerState;
      this.volume = a.volume;
      this.muted = a.muted;
      this.audioTrackId = a.audioTrackId;
      this.trackData = a.trackData;
      this.hasPrevious = a.hasPrevious;
      this.hasNext = a.hasNext;
      this.K = a.playerTime;
      this.D = a.playerTimeAt;
      this.A = a.seekableStart;
      this.L = a.seekableEnd;
      this.B = a.duration;
      this.loadedTime = a.loadedTime;
      this.j = a.liveIngestionTime;
      this.C = !isNaN(this.j);
    }
  };
  g.G.isPlaying = function () {
    return this.playerState == 1;
  };
  g.G.isBuffering = function () {
    return this.playerState == 3;
  };
  g.G.bp = function (a) {
    this.B = isNaN(a) ? 0 : a;
  };
  g.G.getDuration = function () {
    if (this.C) {
      return this.B + V8(this);
    } else {
      return this.B;
    }
  };
  g.G.clone = function () {
    return new T8(Z8(this));
  };
  var LFb = class extends g.Q_ {
    constructor() {
      var a = y9();
      super();
      this.Sa = 0;
      this.B = a;
      this.K = [];
      this.C = new CDb();
      this.A = this.j = null;
      this.ga = (0, g.Ra)(this.sa, this);
      this.U = (0, g.Ra)(this.D, this);
      this.X = (0, g.Ra)(this.la, this);
      this.ha = (0, g.Ra)(this.ta, this);
      var b = 0;
      if (a) {
        b = a.getProxyState();
        if (b != 3) {
          a.subscribe("proxyStateChange", this.fa, this);
          VEb(this);
        }
      } else {
        b = 3;
      }
      if (b != 0) {
        g.kq(() => {
          this.fa(b);
        }, 0);
      }
      if (a = SEb()) {
        $8(this, a);
      }
      this.subscribe("yt-remote-cast2-session-change", this.ha);
    }
    getState() {
      return this.Sa;
    }
    pw() {
      return this.B.getReconnectTimeout();
    }
    mA() {
      this.B.reconnect();
    }
    play() {
      if (b9(this)) {
        if (this.j) {
          this.j.play(null, g.Ie, d9(this, "play"));
        } else {
          c9(this, "play");
        }
        f9(this, 1, X8(a9(this)));
        this.publish("remotePlayerChange");
      } else {
        g9(this, this.play);
      }
    }
    pause() {
      if (b9(this)) {
        if (this.j) {
          this.j.pause(null, g.Ie, d9(this, "pause"));
        } else {
          c9(this, "pause");
        }
        f9(this, 2, X8(a9(this)));
        this.publish("remotePlayerChange");
      } else {
        g9(this, this.pause);
      }
    }
    seekTo(a) {
      if (b9(this)) {
        if (this.j) {
          let b = a9(this);
          let c = new chrome.cast.media.SeekRequest();
          c.currentTime = a;
          if (b.isPlaying() || b.isBuffering()) {
            c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START;
          } else {
            c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
          }
          this.j.seek(c, g.Ie, d9(this, "seekTo", {
            newTime: a
          }));
        } else {
          c9(this, "seekTo", {
            newTime: a
          });
        }
        f9(this, 3, a);
        this.publish("remotePlayerChange");
      } else {
        g9(this, g.Ta(this.seekTo, a));
      }
    }
    stop() {
      if (b9(this)) {
        if (this.j) {
          this.j.stop(null, g.Ie, d9(this, "stopVideo"));
        } else {
          c9(this, "stopVideo");
        }
        var a = a9(this);
        a.index = -1;
        a.videoId = "";
        U8(a);
        e9(this, a);
        this.publish("remotePlayerChange");
      } else {
        g9(this, this.stop);
      }
    }
    setVolume(a, b) {
      if (b9(this)) {
        var c = a9(this);
        if (this.A) {
          if (c.volume != a) {
            let d = Math.round(a) / 100;
            this.A.setReceiverVolumeLevel(d, (0, g.Ra)(function () {
              m8("set receiver volume: " + d);
            }, this), (0, g.Ra)(function () {
              this.eh("failed to set receiver volume.");
            }, this));
          }
          if (c.muted != b) {
            this.A.setReceiverMuted(b, (0, g.Ra)(function () {
              m8("set receiver muted: " + b);
            }, this), (0, g.Ra)(function () {
              this.eh("failed to set receiver muted.");
            }, this));
          }
        } else {
          let d = {
            volume: a,
            muted: b
          };
          if (c.volume != -1) {
            d.delta = a - c.volume;
          }
          c9(this, "setVolume", d);
        }
        c.muted = b;
        c.volume = a;
        e9(this, c);
      } else {
        g9(this, g.Ta(this.setVolume, a, b));
      }
    }
    L(a, b) {
      if (b9(this)) {
        var c = a9(this);
        a = {
          videoId: a
        };
        if (b) {
          c.trackData = {
            trackName: b.name,
            languageCode: b.languageCode,
            sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
            languageName: b.languageName,
            kind: b.kind
          };
          a.style = g.nm(b.style);
          g.jc(a, c.trackData);
        }
        c9(this, "setSubtitlesTrack", a);
        e9(this, c);
      } else {
        g9(this, g.Ta(this.L, a, b));
      }
    }
    setAudioTrack(a, b) {
      if (b9(this)) {
        b = b.getLanguageInfo().getId();
        c9(this, "setAudioTrack", {
          videoId: a,
          audioTrackId: b
        });
        a = a9(this);
        a.audioTrackId = b;
        e9(this, a);
      } else {
        g9(this, g.Ta(this.setAudioTrack, a, b));
      }
    }
    playVideo(a, b, c, d = null, e = null, f = null, h = null) {
      var k = a9(this);
      var l = {
        videoId: a
      };
      if (c !== undefined) {
        l.currentIndex = c;
      }
      Y8(k, a, c || 0);
      if (b !== undefined) {
        W8(k, b);
        l.currentTime = b;
      }
      if (d) {
        l.listId = d;
      }
      if (e) {
        l.playerParams = e;
      }
      if (f) {
        l.clickTrackingParams = f;
      }
      if (h) {
        l.locationInfo = g.nm(h);
      }
      c9(this, "setPlaylist", l);
      if (!d) {
        e9(this, k);
      }
    }
    iO(a, b) {
      if (b9(this)) {
        if (a && b) {
          let c = a9(this);
          Y8(c, a, b);
          e9(this, c);
        }
        c9(this, "previous");
      } else {
        g9(this, g.Ta(this.iO, a, b));
      }
    }
    nextVideo(a, b) {
      if (b9(this)) {
        if (a && b) {
          let c = a9(this);
          Y8(c, a, b);
          e9(this, c);
        }
        c9(this, "next");
      } else {
        g9(this, g.Ta(this.nextVideo, a, b));
      }
    }
    MQ() {
      if (b9(this)) {
        c9(this, "clearPlaylist");
        var a = a9(this);
        a.reset();
        e9(this, a);
        this.publish("remotePlayerChange");
      } else {
        g9(this, this.MQ);
      }
    }
    ba() {
      if (b9(this)) {
        c9(this, "dismissAutoplay");
      } else {
        g9(this, this.ba);
      }
    }
    dispose() {
      if (this.Sa != 3) {
        let a = this.Sa;
        this.Sa = 3;
        this.publish("proxyStateChange", a, this.Sa);
      }
      super.dispose();
    }
    ka() {
      WEb(this);
      this.B = null;
      this.C.clear();
      $8(this, null);
      super.ka();
    }
    fa(a) {
      if ((a != this.Sa || a == 2) && this.Sa != 3 && a != 0) {
        var b = this.Sa;
        this.Sa = a;
        this.publish("proxyStateChange", b, a);
        if (a == 1) {
          while (!DDb(this.C)) {
            b = a = this.C;
            if (b.j.length === 0) {
              b.j = b.A;
              b.j.reverse();
              b.A = [];
            }
            a.j.pop().apply(this);
          }
        } else if (a == 3) {
          this.dispose();
        }
      }
    }
    za(a, b) {
      this.publish(a, b);
    }
    sa(a) {
      if (!a) {
        this.D(null);
        $8(this, null);
      } else if (this.A.receiver.volume) {
        a = this.A.receiver.volume;
        let b = a9(this);
        let c = Math.round(a.level * 100 || 0);
        if (b.volume != c || b.muted != a.muted) {
          m8("Cast volume update: " + a.level + (a.muted ? " muted" : ""));
          b.volume = c;
          b.muted = !!a.muted;
          e9(this, b);
        }
      }
    }
    D(a) {
      m8("Cast media: " + !!a);
      if (this.j) {
        this.j.removeUpdateListener(this.X);
      }
      if (this.j = a) {
        this.j.addUpdateListener(this.X);
        XEb(this);
        this.publish("remotePlayerChange");
      }
    }
    la(a) {
      if (a) {
        XEb(this);
        this.publish("remotePlayerChange");
      } else {
        this.D(null);
      }
    }
    cW() {
      c9(this, "sendDebugCommand", {
        debugCommand: "stats4nerds "
      });
    }
    ta() {
      var a = SEb();
      if (a) {
        $8(this, a);
      }
    }
    eh(a) {
      l8("CP", a);
    }
  };
  var H9 = class extends g.Q_ {
    constructor(a, b = false) {
      var c = n9;
      var d = w9();
      super();
      this.K = NaN;
      this.sa = false;
      this.ba = this.ga = this.ha = this.la = NaN;
      this.fa = [];
      this.D = this.U = this.C = this.j = this.A = null;
      this.Ka = c;
      this.ya = b;
      this.fa.push(g.wt(window, "beforeunload", () => {
        this.L(2);
      }));
      this.B = [];
      this.j = new T8();
      this.Va = a.id;
      this.za = a.idType;
      this.A = VDb(this.Ka, d, this.ta, this.za == "shortLived", this.Va);
      this.A.listen("channelOpened", () => {
        YEb(this);
      });
      this.A.listen("channelClosed", () => {
        h9("Channel closed");
        if (isNaN(this.K)) {
          Q6(true);
        } else {
          Q6();
        }
        this.dispose();
      });
      this.A.listen("channelError", e => {
        Q6();
        if (isNaN(this.X())) {
          if (e == 1 && this.za == "shortLived") {
            this.publish("browserChannelAuthError", e);
          }
          h9(`Channel error: ${e} without reconnection`);
          this.dispose();
        } else {
          this.sa = true;
          h9("Channel error: " + e + " with reconnection in " + this.X() + " ms");
          j9(this, 2);
        }
      });
      this.A.listen("channelMessage", e => {
        jFb(this, e);
      });
      this.A.Yu(a.token);
      this.subscribe("remoteQueueChange", () => {
        var e = this.j.videoId;
        if (g.nr()) {
          g.kr("yt-remote-session-video-id", e);
        }
      });
    }
    connect(a, b) {
      if (b) {
        var c = b.listId;
        let d = b.videoId;
        let e = b.videoIds;
        let f = b.playerParams;
        let h = b.clickTrackingParams;
        let k = b.index;
        let l = {
          videoId: d
        };
        let m = b.currentTime;
        let p = b.locationInfo;
        b = b.loopMode;
        if (m !== undefined) {
          l.currentTime = m <= 5 ? 0 : m;
        }
        if (f) {
          l.playerParams = f;
        }
        if (p) {
          l.locationInfo = p;
        }
        if (h) {
          l.clickTrackingParams = h;
        }
        if (c) {
          l.listId = c;
        }
        if (e && e.length > 0) {
          l.videoIds = e.join(",");
        }
        if (k !== undefined) {
          l.currentIndex = k;
        }
        if (this.ya) {
          l.loopMode = b || "LOOP_MODE_OFF";
        }
        if (c) {
          this.j.listId = c;
        }
        this.j.videoId = d;
        this.j.index = k || 0;
        this.j.state = 3;
        W8(this.j, m);
        this.D = "UNSUPPORTED";
        c = this.ya ? "setInitialState" : "setPlaylist";
        h9(`Connecting with ${c} and params: ${g.nm(l)}`);
        this.A.connect({
          method: c,
          params: g.nm(l)
        }, a, WBb());
      } else {
        h9("Connecting without params");
        this.A.connect({}, a, WBb());
      }
      kFb(this);
    }
    Yu(a) {
      this.A.Yu(a);
    }
    dispose() {
      if (!this.oa()) {
        g.Ia("yt.mdx.remote.remoteClient_", null);
        this.publish("beforeDispose");
        j9(this, 3);
      }
      super.dispose();
    }
    ka() {
      k9(this);
      l9(this);
      i9(this);
      g.mq(this.ga);
      this.ga = NaN;
      g.mq(this.ba);
      this.ba = NaN;
      this.C = null;
      g.xt(this.fa);
      this.fa.length = 0;
      this.A.dispose();
      super.ka();
      this.D = this.U = this.B = this.j = this.A = null;
    }
    Ha(a) {
      if (!this.B || this.B.length === 0) {
        return false;
      }
      for (let b of this.B) {
        if (!b.capabilities.has(a)) {
          return false;
        }
      }
      return true;
    }
    jb() {
      var a = 3;
      if (!this.oa()) {
        a = 0;
        if (isNaN(this.X())) {
          if (this.A.lz() && isNaN(this.K)) {
            a = 1;
          }
        } else {
          a = 2;
        }
      }
      return a;
    }
    L(a) {
      h9("Disconnecting with " + a);
      g.Ia("yt.mdx.remote.remoteClient_", null);
      k9(this);
      this.publish("beforeDisconnect", a);
      if (a == 1) {
        Q6();
      }
      this.A.disconnect(a);
      this.dispose();
    }
    fb() {
      var a = this.j;
      if (this.C) {
        a = this.j.clone();
        Y8(a, this.C, a.index);
      }
      return Z8(a);
    }
    ub(a) {
      var b = new T8(a);
      if (b.videoId && b.videoId != this.j.videoId) {
        this.C = b.videoId;
        g.mq(this.ga);
        this.ga = g.kq(() => {
          if (this.C) {
            let d = this.C;
            this.C = null;
            if (this.j.videoId != d) {
              m9(this, "getNowPlaying");
            }
          }
        }, 5000);
      }
      var c = [];
      if (this.j.listId != b.listId || this.j.videoId != b.videoId || this.j.index != b.index) {
        c.push("remoteQueueChange");
      }
      if (this.j.playerState != b.playerState || this.j.volume != b.volume || this.j.muted != b.muted || X8(this.j) != X8(b) || g.nm(this.j.trackData) != g.nm(b.trackData)) {
        c.push("remotePlayerChange");
      }
      this.j.reset(a);
      g.db(c, function (d) {
        this.publish(d);
      }, this);
    }
    Fa() {
      var a = this.A.getDeviceId();
      var b = g.pb(this.B, function (c) {
        return c.type == "REMOTE_CONTROL" && c.id != a;
      });
      if (b) {
        return b.id;
      } else {
        return "";
      }
    }
    X() {
      return this.A.pw();
    }
    Xa() {
      return this.D || "UNSUPPORTED";
    }
    bb() {
      return this.U || "";
    }
    Ra() {
      if (!isNaN(this.X())) {
        this.A.mA();
      }
    }
    qb(a, b) {
      m9(this, a, b);
      nFb(this);
    }
    ta() {
      var a = g.Cq("SAPISID", "") || g.Cq("__Secure-1PAPISID") || "";
      var b = g.Cq("__Secure-3PAPISID", "") || "";
      if (!a && !b) {
        return "";
      }
      a = g.Tf(g.Qf(a), 2);
      b = g.Tf(g.Qf(b), 2);
      return g.Tf(g.Qf(`,${a},${b}`), 2);
    }
  };
  H9.prototype.subscribe = H9.prototype.subscribe;
  H9.prototype.unsubscribeByKey = H9.prototype.unsubscribeByKey;
  H9.prototype.getProxyState = H9.prototype.jb;
  H9.prototype.disconnect = H9.prototype.L;
  H9.prototype.getPlayerContextData = H9.prototype.fb;
  H9.prototype.setPlayerContextData = H9.prototype.ub;
  H9.prototype.getOtherConnectedRemoteId = H9.prototype.Fa;
  H9.prototype.getReconnectTimeout = H9.prototype.X;
  H9.prototype.getAutoplayMode = H9.prototype.Xa;
  H9.prototype.getAutoplayVideoId = H9.prototype.bb;
  H9.prototype.reconnect = H9.prototype.Ra;
  H9.prototype.sendMessage = H9.prototype.qb;
  H9.prototype.getXsrfToken = H9.prototype.ta;
  H9.prototype.isCapabilitySupportedOnConnectedDevices = H9.prototype.Ha;
  var uFb = class extends P9 {
    constructor(a) {
      super("ScreenServiceProxy");
      this.Hi = a;
      this.j = [];
      this.j.push(this.Hi.$_s("screenChange", (0, g.Ra)(this.A, this)));
      this.j.push(this.Hi.$_s("onlineScreenChange", (0, g.Ra)(this.B, this)));
    }
    tn(a) {
      return this.Hi.$_gs(a);
    }
    contains(a) {
      return !!this.Hi.$_c(a);
    }
    get(a) {
      return this.Hi.$_g(a);
    }
    start() {
      this.Hi.$_st();
    }
    add(a, b, c) {
      this.Hi.$_a(a, b, c);
    }
    remove(a, b, c) {
      this.Hi.$_r(a, b, c);
    }
    nP(a, b, c, d) {
      this.Hi.$_un(a, b, c, d);
    }
    ka() {
      var a = this.j.length;
      for (let b = 0; b < a; ++b) {
        this.Hi.$_ubk(this.j[b]);
      }
      this.j.length = 0;
      this.Hi = null;
      super.ka();
    }
    A() {
      this.publish("screenChange");
    }
    B() {
      this.publish("onlineScreenChange");
    }
  };
  q9.prototype.$_st = q9.prototype.start;
  q9.prototype.$_gspc = q9.prototype.L3;
  q9.prototype.$_gsppc = q9.prototype.ZW;
  q9.prototype.$_c = q9.prototype.contains;
  q9.prototype.$_g = q9.prototype.get;
  q9.prototype.$_a = q9.prototype.add;
  q9.prototype.$_un = q9.prototype.nP;
  q9.prototype.$_r = q9.prototype.remove;
  q9.prototype.$_gs = q9.prototype.tn;
  q9.prototype.$_gos = q9.prototype.YW;
  q9.prototype.$_s = q9.prototype.subscribe;
  q9.prototype.$_ubk = q9.prototype.unsubscribeByKey;
  var A9 = null;
  var G9 = false;
  var n9 = null;
  var o9 = null;
  var F9 = null;
  var t9 = [];
  var MFb = class extends g.Sj {
    constructor(a, b, c) {
      super();
      this.module = a;
      this.J = b;
      this.Mc = c;
      this.events = new g.H0(this);
      this.D = false;
      this.L = new g.iC(64);
      this.j = new g.jo(this.sa, 500, this);
      this.A = new g.jo(this.ta, 1000, this);
      this.X = new $6(this.Ra, 0, this);
      this.B = {};
      this.ga = new g.jo(this.ya, 1000, this);
      this.U = new g.t_(this.seekTo, 1000, this);
      this.Fa = this.events.V(this.J, "onVolumeChange", d => {
        xFb(this, d);
      });
      g.L(this, this.events);
      this.events.V(b, "onCaptionsTrackListChanged", this.Ka);
      this.events.V(b, "captionschanged", this.Ha);
      this.events.V(b, "captionssettingschanged", this.za);
      this.events.V(b, "videoplayerreset", this.K);
      this.events.V(b, "mdxautoplaycancel", () => {
        this.Mc.ba();
      });
      if (b.N("enable_mdx_video_play_directly")) {
        this.events.V(b, "videodatachange", () => {
          if (!AFb(this.module) && !I9(this)) {
            K9(this, 0);
          }
        });
      }
      a = this.Mc;
      a.oa();
      a.subscribe("proxyStateChange", this.la, this);
      a.subscribe("remotePlayerChange", this.C, this);
      a.subscribe("remoteQueueChange", this.K, this);
      a.subscribe("previousNextChange", this.ha, this);
      a.subscribe("nowAutoplaying", this.fa, this);
      a.subscribe("autoplayDismissed", this.ba, this);
      g.L(this, this.j);
      g.L(this, this.A);
      g.L(this, this.X);
      g.L(this, this.ga);
      g.L(this, this.U);
      this.za();
      this.K();
      this.C();
    }
    ka() {
      super.ka();
      this.j.stop();
      this.A.stop();
      this.X.stop();
      var a = this.Mc;
      a.unsubscribe("proxyStateChange", this.la, this);
      a.unsubscribe("remotePlayerChange", this.C, this);
      a.unsubscribe("remoteQueueChange", this.K, this);
      a.unsubscribe("previousNextChange", this.ha, this);
      a.unsubscribe("nowAutoplaying", this.fa, this);
      a.unsubscribe("autoplayDismissed", this.ba, this);
      this.Mc = this.module = null;
    }
    Ho(a, ...b) {
      if (this.Mc.Sa != 2) {
        if (I9(this)) {
          if (a9(this.Mc).playerState != 1081 || a !== "control_seek") {
            switch (a) {
              case "control_toggle_play_pause":
                if (a9(this.Mc).isPlaying()) {
                  this.Mc.pause();
                } else {
                  this.Mc.play();
                }
                break;
              case "control_play":
                this.Mc.play();
                break;
              case "control_pause":
                this.Mc.pause();
                break;
              case "control_seek":
                this.U.C(b[0], b[1]);
                break;
              case "control_subtitles_set_track":
                L9(this, b[0]);
                break;
              case "control_set_audio_track":
                this.setAudioTrack(b[0]);
            }
          }
        } else {
          switch (a) {
            case "control_toggle_play_pause":
            case "control_play":
            case "control_pause":
              a = this.J.getCurrentTime();
              K9(this, a === 0 ? undefined : a);
              break;
            case "control_seek":
              K9(this, b[0]);
              break;
            case "control_subtitles_set_track":
              L9(this, b[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(b[0]);
          }
        }
      }
    }
    Ha(a) {
      this.X.F3(a);
    }
    Ra(a) {
      this.Ho("control_subtitles_set_track", g.bc(a) ? null : a);
    }
    za() {
      var a = this.J.getOption("captions", "track");
      if (!g.bc(a)) {
        L9(this, a);
      }
    }
    Ed(a) {
      this.module.Ed(a, this.J.getVideoData().lengthSeconds);
    }
    Ka() {
      if (!g.bc(this.B)) {
        yFb(this, this.B);
      }
      this.D = false;
    }
    la(a, b) {
      this.A.stop();
      if (b === 2) {
        this.ta();
      }
    }
    C() {
      if (I9(this)) {
        this.j.stop();
        var a = a9(this.Mc);
        switch (a.playerState) {
          case 1080:
          case 1081:
          case 1084:
          case 1085:
            this.module.hj = 1;
            break;
          case 1082:
          case 1083:
            this.module.hj = 0;
            break;
          default:
            this.module.hj = -1;
        }
        switch (a.playerState) {
          case 1081:
          case 1:
            this.Yc(new g.iC(8));
            this.sa();
            break;
          case 1085:
          case 3:
            this.Yc(new g.iC(9));
            break;
          case 1083:
          case 0:
            this.Yc(new g.iC(2));
            this.U.stop();
            this.Ed(this.J.getVideoData().lengthSeconds);
            break;
          case 1084:
            this.Yc(new g.iC(4));
            break;
          case 2:
            this.Yc(new g.iC(4));
            this.Ed(X8(a));
            break;
          case -1:
            this.Yc(new g.iC(64));
            break;
          case -1000:
            this.Yc(new g.iC(128, {
              errorCode: "mdx.remoteerror",
              errorMessage: "Video ini tidak tersedia untuk pemutaran jarak jauh",
              Ky: 2
            }));
        }
        let c = a9(this.Mc).trackData;
        a = c;
        var b = this.B;
        if (!(a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1)) {
          this.B = c;
          yFb(this, c);
        }
        a = a9(this.Mc);
        if (a.volume !== -1 && (Math.round(this.J.getVolume()) !== a.volume || this.J.isMuted() !== a.muted) && !this.ga.isActive()) {
          this.ya();
        }
      } else {
        zFb(this);
      }
    }
    ha() {
      this.J.publish("mdxpreviousnextchange");
    }
    K() {
      if (!I9(this)) {
        zFb(this);
      }
    }
    fa(a) {
      if (!isNaN(a)) {
        this.J.publish("mdxnowautoplaying", a);
      }
    }
    ba() {
      this.J.publish("mdxautoplaycanceled");
    }
    setAudioTrack(a) {
      if (I9(this)) {
        this.Mc.setAudioTrack(J9(this).videoId, a);
      }
    }
    seekTo(a, b) {
      if (a9(this.Mc).playerState === -1) {
        K9(this, a);
      } else if (b) {
        this.Mc.seekTo(a);
      }
    }
    ya() {
      if (I9(this)) {
        var a = a9(this.Mc);
        this.events.ud(this.Fa);
        if (a.muted) {
          this.J.mute();
        } else {
          this.J.unMute();
        }
        this.J.setVolume(a.volume);
        this.Fa = this.events.V(this.J, "onVolumeChange", b => {
          xFb(this, b);
        });
      }
    }
    sa() {
      this.j.stop();
      if (!this.Mc.oa()) {
        var a = a9(this.Mc);
        if (a.isPlaying()) {
          this.Yc(new g.iC(8));
        }
        this.Ed(X8(a));
        this.j.start();
      }
    }
    ta() {
      this.A.stop();
      this.j.stop();
      var a = this.Mc.pw();
      if (this.Mc.Sa == 2 && !isNaN(a)) {
        this.A.start();
      }
    }
    Yc(a) {
      this.A.stop();
      var b = this.L;
      if (!g.pC(b, a)) {
        let c = a.va(2);
        if (c !== this.L.va(2)) {
          this.J.VD(c);
        }
        this.L = a;
        BFb(this.module, b, a);
      }
    }
  };
  var NFb = class extends g.j2 {
    constructor(a, b) {
      super(a);
      this.j = b;
    }
    getCurrentTime() {
      return this.j.getCurrentTime();
    }
    getDuration() {
      return this.j.getDuration();
    }
    xe() {
      return this.j.xe();
    }
    zm() {
      return this.j.zm();
    }
    Ei() {
      return this.j.Ei();
    }
    Ot() {
      return this.j.Ot();
    }
    getPlayerState() {
      return this.j.Ve;
    }
    isAtLiveHead() {
      return this.j.isAtLiveHead();
    }
    pauseVideo() {
      M9(this.j, "control_pause");
    }
    async playVideo() {
      M9(this.j, "control_play");
    }
    seekTo(a, b) {
      M9(this.j, "control_seek", a, !b?.DJ);
    }
    Nx(a) {
      M9(this.j, "control_set_audio_track", a);
      return true;
    }
  };
  var OFb = class extends g.Z {
    constructor() {
      super({
        G: "div",
        S: "ytp-mdx-popup-dialog",
        W: {
          role: "dialog"
        },
        Y: [{
          G: "div",
          S: "ytp-mdx-popup-dialog-inner-content",
          Y: [{
            G: "div",
            S: "ytp-mdx-popup-title",
            ma: "Anda telah logout"
          }, {
            G: "div",
            S: "ytp-mdx-popup-description",
            ma: "Video yang Anda tonton dapat ditambahkan ke histori tontonan TV, dan akan memengaruhi rekomendasi konten di TV. Untuk mencegahnya, batalkan dan login ke YouTube di komputer Anda"
          }, {
            G: "div",
            S: "ytp-mdx-privacy-popup-buttons",
            Y: [{
              G: "button",
              Da: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
              ma: "Batalkan"
            }, {
              G: "button",
              Da: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
              ma: "Konfirmasi"
            }]
          }]
        }]
      });
      this.fade = new g.Y_(this, 250);
      this.cancelButton = this.qa("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.qa("ytp-mdx-privacy-popup-confirm");
      g.L(this, this.fade);
      this.V(this.cancelButton, "click", this.j);
      this.V(this.confirmButton, "click", this.A);
    }
    Od() {
      this.fade.show();
    }
    bc() {
      this.fade.hide();
    }
    j() {
      S6("mdx-privacy-popup-cancel");
      this.bc();
    }
    A() {
      S6("mdx-privacy-popup-confirm");
      this.bc();
    }
  };
  var PFb = class extends g.Z {
    constructor(a) {
      super({
        G: "div",
        S: "ytp-remote",
        Y: [{
          G: "div",
          S: "ytp-remote-display-status",
          Y: [{
            G: "div",
            S: "ytp-remote-display-status-icon",
            Y: [g.tra()]
          }, {
            G: "div",
            S: "ytp-remote-display-status-text",
            ma: "{{statustext}}"
          }]
        }]
      });
      this.api = a;
      this.fade = new g.Y_(this, 250);
      g.L(this, this.fade);
      this.V(a, "presentingplayerstatechange", this.onStateChange);
      this.Hd(a.getPlayerStateObject());
    }
    onStateChange(a) {
      this.Hd(a.state);
    }
    Hd(a) {
      if (this.api.getPresentingPlayerType() === 3) {
        let b = {
          RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
        };
        a = a.va(128) ? g.tA("Terjadi error pada $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.tA("Diputar di $RECEIVER_NAME", b) : g.tA("Terhubung ke $RECEIVER_NAME", b);
        this.updateValue("statustext", a);
        this.fade.show();
      } else {
        this.fade.hide();
      }
    }
  };
  var QFb = class extends g.I1 {
    constructor(a, b) {
      super("Diputar di", 1, a, b);
      this.J = a;
      this.ox = {};
      this.V(a, "onMdxReceiversChange", this.K);
      this.V(a, "presentingplayerstatechange", this.K);
      this.K();
    }
    K() {
      var a = this.J.getOption("remote", "receivers");
      if (a && a.length > 1 && !this.J.getOption("remote", "quickCast")) {
        this.ox = g.Mb(a, this.D, this);
        this.C(g.jb(a, this.D));
        a = this.J.getOption("remote", "currentReceiver");
        a = this.D(a);
        if (this.options[a]) {
          this.A(a);
        }
        this.enable(true);
      } else {
        this.enable(false);
      }
    }
    D(a) {
      return a.key;
    }
    B(a) {
      if (a === "cast-selector-receiver") {
        return "Transmisi...";
      } else {
        return this.ox[a].name;
      }
    }
    j(a) {
      super.j(a);
      this.J.setOption("remote", "currentReceiver", this.ox[a]);
      this.tb.bc();
    }
  };
  g.BT("remote", class extends g.Z1 {
    constructor(a) {
      super(a);
      this.Ur = {
        key: J6(),
        name: "Komputer ini"
      };
      this.Cp = null;
      this.subscriptions = [];
      this.IU = this.Mc = null;
      this.ox = [this.Ur];
      this.Tv = this.Ur;
      this.Ve = new g.iC(64);
      this.f_ = 0;
      this.hj = -1;
      this.lI = false;
      this.ii = this.jI = this.wD = null;
      if (!g.CJ(this.player.O()) && !g.hw(this.player.O())) {
        a = this.player;
        var b = g.RL(a);
        if (b &&= b.Ij()) {
          b = new QFb(a, b);
          g.L(this, b);
        }
        b = new PFb(a);
        g.L(this, b);
        g.fM(a, b.element, 4);
        this.wD = new OFb();
        g.L(this, this.wD);
        g.fM(a, this.wD.element, 4);
        this.lI = !!v9();
      }
    }
    create() {
      var a = this.player.O();
      var b = g.EJ(a);
      a = {
        device: "Desktop",
        app: "youtube-desktop",
        loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
        enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
        enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
      };
      rFb(b, a);
      this.subscriptions.push(g.jt("yt-remote-before-disconnect", this.C8, this));
      this.subscriptions.push(g.jt("yt-remote-connection-change", this.G9, this));
      this.subscriptions.push(g.jt("yt-remote-receiver-availability-change", this.q0, this));
      this.subscriptions.push(g.jt("yt-remote-auto-connect", this.F9, this));
      this.subscriptions.push(g.jt("yt-remote-receiver-resumed", this.E9, this));
      this.subscriptions.push(g.jt("mdx-privacy-popup-confirm", this.y$, this));
      this.subscriptions.push(g.jt("mdx-privacy-popup-cancel", this.x$, this));
      this.q0();
    }
    load() {
      this.player.cancelPlayback();
      super.load();
      this.ii = new NFb(this.player.O(), this);
      this.player.eJ(this.ii);
      this.Cp = new MFb(this, this.player, this.Mc);
      var a = (a = wFb()) ? a.currentTime : 0;
      var b = E9() ? new LFb() : null;
      if (a == 0 && b) {
        a = X8(a9(b));
      }
      if (a !== 0) {
        this.Ed(a);
      }
      BFb(this, this.Ve, this.Ve);
      this.player.Ks(6);
    }
    unload() {
      this.player.publish("mdxautoplaycanceled");
      this.player.II();
      this.Tv = this.Ur;
      g.Pj(this.Cp, this.Mc);
      this.Mc = this.ii = this.Cp = null;
      super.unload();
      this.player.Ks(5);
      N9(this);
    }
    ka() {
      g.kt(this.subscriptions);
      super.ka();
    }
    getAdState() {
      return this.hj;
    }
    hasPrevious() {
      if (this.Mc) {
        return a9(this.Mc).hasPrevious;
      } else {
        return false;
      }
    }
    hasNext() {
      if (this.Mc) {
        return a9(this.Mc).hasNext;
      } else {
        return false;
      }
    }
    Ed(a, b) {
      this.f_ = a || 0;
      this.player.publish("progresssync", a, b);
      g.OL(this.player, "onVideoProgress", a || 0);
    }
    getCurrentTime() {
      return this.f_;
    }
    getDuration() {
      return a9(this.Mc).getDuration() || 0;
    }
    xe() {
      var a = a9(this.Mc);
      if (a.C) {
        return a.j + V8(a);
      } else {
        return a.j;
      }
    }
    zm() {
      return a9(this.Mc).loadedTime;
    }
    Ei() {
      return UEb(a9(this.Mc));
    }
    Ot() {
      var a = a9(this.Mc);
      if (a.A > 0) {
        return a.A + V8(a);
      } else {
        return a.A;
      }
    }
    getProgressState() {
      var a = a9(this.Mc);
      var b = this.player.getVideoData();
      return {
        airingStart: 0,
        airingEnd: 0,
        allowSeeking: a.playerState != 1081 && this.player.gi(),
        clipEnd: b.clipEnd,
        clipStart: b.clipStart,
        current: this.getCurrentTime(),
        displayedStart: -1,
        duration: this.getDuration(),
        ingestionTime: this.xe(),
        isAtLiveHead: this.isAtLiveHead(),
        loaded: this.zm(),
        seekableEnd: this.Ei(),
        seekableStart: this.Ot(),
        offset: 0,
        viewerLivestreamJoinMediaTime: 0
      };
    }
    isAtLiveHead() {
      return UEb(a9(this.Mc)) - this.getCurrentTime() <= 1;
    }
    nextVideo() {
      if (this.Mc) {
        this.Mc.nextVideo();
      }
    }
    iO() {
      if (this.Mc) {
        this.Mc.iO();
      }
    }
    C8(a) {
      if (a === 1) {
        this.IU = this.Mc ? a9(this.Mc) : null;
      }
    }
    G9() {
      var a = E9() ? new LFb() : null;
      if (a) {
        let b = this.Tv;
        if (this.loaded) {
          this.unload();
        }
        this.Mc = a;
        this.IU = null;
        if (b.key !== this.Ur.key) {
          this.Tv = b;
          this.load();
        }
      } else {
        g.Oj(this.Mc);
        this.Mc = null;
        if (this.loaded) {
          this.unload();
          if ((a = this.IU) && a.videoId === this.player.getVideoData().videoId) {
            this.player.cueVideoById(a.videoId, X8(a));
          }
        }
      }
      this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3);
    }
    q0() {
      var a = [this.Ur];
      var b = a.concat;
      var c = sFb();
      if (O8() && g.lr("yt-remote-cast-available")) {
        c.push({
          key: "cast-selector-receiver",
          name: "Cast..."
        });
      }
      this.ox = b.call(a, c);
      a = z9() || this.Ur;
      O9(this, a);
      g.OL(this.player, "onMdxReceiversChange");
    }
    F9() {
      var a = z9();
      O9(this, a);
    }
    E9() {
      this.Tv = z9();
    }
    y$() {
      this.lI = true;
      N9(this);
      G9 = false;
      if (A9) {
        C9(A9, 1);
      }
      A9 = null;
    }
    x$() {
      this.lI = false;
      N9(this);
      O9(this, this.Ur);
      this.Tv = this.Ur;
      G9 = false;
      A9 = null;
      this.player.playVideo();
    }
    Bj(a, b) {
      switch (a) {
        case "casting":
          return this.loaded;
        case "receivers":
          return this.ox;
        case "currentReceiver":
          if (b) {
            if (b.key === "cast-selector-receiver") {
              Q8();
            } else {
              O9(this, b);
            }
          }
          if (this.loaded) {
            return this.Tv;
          } else {
            return this.Ur;
          }
        case "quickCast":
          if (this.ox.length === 2 && this.ox[1].key === "cast-selector-receiver") {
            if (b) {
              Q8();
            }
            return true;
          } else {
            return false;
          }
      }
    }
    cW() {
      this.Mc.cW();
    }
    av() {
      return false;
    }
    getOptions() {
      return ["casting", "receivers", "currentReceiver", "quickCast"];
    }
    isLoggedIn() {
      if (g.Mp("PLAYER_CONFIG")?.args?.authuser !== undefined) {
        return true;
      } else {
        return !!g.Mp("SESSION_INDEX") || !!g.Mp("LOGGED_IN");
      }
    }
  });
})(_yt_player);