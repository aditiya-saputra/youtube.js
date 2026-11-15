(function () {
  var aa = typeof Object.create == "function" ? Object.create : function (a) {
    function b() {}
    b.prototype = a;
    return new b();
  };
  var l = typeof Object.defineProperties == "function" ? Object.defineProperty : function (a, b, c) {
    if (a == Array.prototype || a == Object.prototype) {
      return a;
    }
    a[b] = c.value;
    return a;
  };
  function ba(a) {
    a = [typeof globalThis == "object" && globalThis, a, typeof window == "object" && window, typeof self == "object" && self, typeof n == "object" && n];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) {
        return c;
      }
    }
    throw Error("Cannot find global object");
  }
  var ca = ba(this);
  function p(a, b) {
    if (b) {
      a: {
        var c = ca;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) {
            break a;
          }
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        if (b != d && b != null) {
          l(c, a, {
            configurable: true,
            writable: true,
            value: b
          });
        }
      }
    }
  }
  function da(a) {
    var b = 0;
    return function () {
      if (b < a.length) {
        return {
          done: false,
          value: a[b++]
        };
      } else {
        return {
          done: true
        };
      }
    };
  }
  p("Symbol", function (a) {
    function b(f) {
      if (this instanceof b) {
        throw new TypeError("Symbol is not a constructor");
      }
      return new c(d + (f || "") + "_" + e++, f);
    }
    function c(f, h) {
      this.i = f;
      l(this, "description", {
        configurable: true,
        writable: true,
        value: h
      });
    }
    if (a) {
      return a;
    }
    c.prototype.toString = function () {
      return this.i;
    };
    var d = "jscomp_symbol_" + (Math.random() * 1000000000 >>> 0) + "_";
    var e = 0;
    return b;
  });
  p("Symbol.iterator", function (a) {
    if (a) {
      return a;
    }
    a = Symbol("Symbol.iterator");
    l(Array.prototype, a, {
      configurable: true,
      writable: true,
      value: function () {
        return r(da(this));
      }
    });
    return a;
  });
  function r(a) {
    var b = (typeof Iterator != "undefined" && Iterator.prototype && !Iterator.prototype.next ? Iterator.prototype : null) || Object.prototype;
    var c = aa(b);
    c.next = a;
    if (!b[Symbol.iterator]) {
      c[Symbol.iterator] = function () {
        return this;
      };
    }
    return c;
  }
  function ea(a, b) {
    if (a instanceof String) {
      a += "";
    }
    var c = 0;
    var d = false;
    return r(function () {
      if (!d && c < a.length) {
        var e = c++;
        return {
          value: b(e, a[e]),
          done: false
        };
      }
      d = true;
      return {
        done: true,
        value: undefined
      };
    });
  }
  p("Array.prototype.keys", function (a) {
    if (a) {
      return a;
    } else {
      return function () {
        return ea(this, function (b) {
          return b;
        });
      };
    }
  }); /*
      Copyright Google LLC
      SPDX-License-Identifier: Apache-2.0
      */
  var u = {};
  function v(a) {
    if (u !== u) {
      throw Error("Bad secret");
    }
    this.i = a;
  }
  v.prototype.toString = function () {
    return this.i;
  };
  new v("about:blank");
  new v("about:invalid#zClosurez");
  var w = [];
  function x(a) {
    console.warn("A URL with content '" + a + "' was sanitized away.");
  }
  if (w.indexOf(x) === -1) {
    w.push(x);
  }
  function y(a, b, c) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var e = d.slice();
      e.push.apply(e, arguments);
      return a.apply(b, e);
    };
  }
  function fa(a, b) {
    if (a) {
      var c = Array.prototype.slice.call(arguments, 1);
      try {
        return a.apply(null, c);
      } catch (d) {
        return d;
      }
    }
  }
  var z = window.performance && window.performance.timing && window.performance.now ? function () {
    return window.performance.timing.navigationStart + window.performance.now();
  } : function () {
    return new Date().getTime();
  };
  function A(a, b) {
    if (a.forEach) {
      a.forEach(b, undefined);
    } else {
      for (var c = 0, d = a.length; c < d; c++) {
        if (c in a) {
          b.call(undefined, a[c], c, a);
        }
      }
    }
  }
  function C(a, b) {
    if (a.some) {
      return a.some(b, undefined);
    }
    for (var c = 0, d = a.length; c < d; c++) {
      if (c in a && b.call(undefined, a[c], c, a)) {
        return true;
      }
    }
    return false;
  }
  function D(a) {
    if (Object.prototype.toString.call(a) == "[object Array]") {
      return a;
    } else {
      return [a];
    }
  }
  ;
  function E(a, b) {
    return F[a] = b;
  }
  var F = window._spf_state || {};
  window._spf_state = F;
  var G = {};
  if (!("config" in F)) {
    E("config", G);
  }
  G = F.config;
  function H(a) {
    var b = I();
    if (a in b) {
      delete b[a];
    }
  }
  function ha() {
    var a = I();
    for (b in a) {
      if (!J(a[b])) {
        delete a[b];
      }
    }
    a = I();
    var b = parseInt(G["cache-max"], 10);
    b = isNaN(b) ? Infinity : b;
    b = Object.keys(a).length - b;
    if (!(b <= 0)) {
      for (var c = 0; c < b; c++) {
        var d = Infinity;
        var e;
        for (e in a) {
          if (a[e].count < d) {
            var f = e;
            d = a[e].count;
          }
        }
        delete a[f];
      }
    }
  }
  function J(a) {
    if (!a || !("data" in a)) {
      return false;
    }
    var b = a.life;
    b = isNaN(b) ? Infinity : b;
    a = a.time;
    return z() - a < b;
  }
  function K(a) {
    var b = parseInt(F["cache-counter"], 10) || 0;
    b++;
    E("cache-counter", b);
    a.count = b;
  }
  function I() {
    if ("cache-storage" in F) {
      return F["cache-storage"];
    } else {
      return E("cache-storage", {});
    }
  }
  ;
  function L(a, b) {
    var c = a.length - b.length;
    return c >= 0 && a.indexOf(b, c) == c;
  }
  var M = String.prototype.trim ? function (a) {
    return a.trim();
  } : function (a) {
    return a.replace(/^\s+|\s+$/g, "");
  };
  function N(a, b) {
    a = a.split(b);
    var c = a.length == 1;
    return [a[0], c ? "" : b, c ? "" : a.slice(1).join(b)];
  }
  ;
  function O(a) {
    if (a.data && Object.prototype.toString.call(a.data) == "[object String]" && a.data.lastIndexOf("spf:", 0) == 0) {
      P(a.data.substring(4));
    }
  }
  function P(a) {
    var b = Q[a];
    if (b) {
      delete Q[a];
      b();
    }
  }
  function R(a) {
    if (window.addEventListener) {
      window.addEventListener("message", a, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", a);
    }
  }
  function S(a) {
    if (window.removeEventListener) {
      window.removeEventListener("message", a, false);
    } else if (window.detachEvent) {
      window.detachEvent("onmessage", a);
    }
  }
  var T = function () {
    function a() {
      b = false;
    }
    if (!window.postMessage) {
      return false;
    }
    var b = true;
    R(a);
    window.postMessage("", "*");
    S(a);
    return b;
  }();
  var Q = {};
  if (!("async-defers" in F)) {
    E("async-defers", Q);
  }
  Q = F["async-defers"];
  if (T) {
    if ("async-listener" in F) {
      S(F["async-listener"]);
    }
    R(O);
    E("async-listener", O);
  }
  var ia = {};
  if (!("ps-s" in F)) {
    E("ps-s", ia);
  }
  ia = F["ps-s"];
  function U(a) {
    var b = document.createElement("a");
    b.href = a;
    b.href = b.href;
    a = {
      href: b.href,
      protocol: b.protocol,
      host: b.host,
      hostname: b.hostname,
      port: b.port,
      pathname: b.pathname,
      search: b.search,
      hash: b.hash,
      username: b.username,
      password: b.password
    };
    a.origin = a.protocol + "//" + a.host;
    if (!a.pathname || a.pathname[0] != "/") {
      a.pathname = "/" + a.pathname;
    }
    return a;
  }
  function ja(a) {
    a = U(a);
    return N(a.href, "#")[0];
  }
  ; /*
    SPF
    (c) 2012-2017 Google Inc.
    https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
    */
  var ka = {};
  var la = {};
  var ma = {};
  if (!("rsrc-s" in F)) {
    E("rsrc-s", ka);
  }
  ka = F["rsrc-s"];
  if (!("rsrc-n" in F)) {
    E("rsrc-n", la);
  }
  la = F["rsrc-n"];
  if (!("rsrc-u" in F)) {
    E("rsrc-u", ma);
  }
  ma = F["rsrc-u"];
  var na = {};
  if (!("js-d" in F)) {
    E("js-d", na);
  }
  na = F["js-d"];
  var oa = {};
  if (!("js-u" in F)) {
    E("js-u", oa);
  }
  oa = F["js-u"]; /*
                  Copyright 2012-2017 Google Inc. All Rights Reserved.
                  Use of this source code is governed by The MIT License.
                  SPDX-License-Identifier: MIT
                  */
  function pa(a, b, c) {
    if (b) {
      b = [];
      var d = 0;
      if (c) {
        a += "\r\n";
      }
      var e = a.indexOf("[\r\n", d);
      for (e > -1 && (d = e + 3); (e = a.indexOf(",\r\n", d)) > -1;) {
        var f = M(a.substring(d, e));
        d = e + 3;
        if (f) {
          b.push(JSON.parse(f));
        }
      }
      e = a.indexOf("]\r\n", d);
      if (e > -1) {
        f = M(a.substring(d, e));
        d = e + 3;
        if (f) {
          b.push(JSON.parse(f));
        }
      }
      f = "";
      if (a.length > d) {
        f = a.substring(d);
        if (c && L(f, "\r\n")) {
          f = f.substring(0, f.length - 2);
        }
      }
      b = V(b);
      return {
        o: b,
        h: f
      };
    }
    a = JSON.parse(a);
    b = V(D(a));
    return {
      o: b,
      h: ""
    };
  }
  function V(a) {
    var b = D(a);
    A(b, function (c) {
      if (c) {
        c.head &&= W(c.head);
        if (c.body) {
          for (var d in c.body) {
            c.body[d] = W(c.body[d]);
          }
        }
        c.foot &&= W(c.foot);
      }
    });
    return a;
  }
  function W(a) {
    var b = new qa();
    if (!a) {
      return b;
    }
    if (Object.prototype.toString.call(a) != "[object String]") {
      if (a.scripts) {
        A(a.scripts, function (c) {
          b.scripts.push({
            url: c.url || "",
            text: c.text || "",
            name: c.name || "",
            async: c.async || false
          });
        });
      }
      if (a.styles) {
        A(a.styles, function (c) {
          b.styles.push({
            url: c.url || "",
            text: c.text || "",
            name: c.name || ""
          });
        });
      }
      if (a.links) {
        A(a.links, function (c) {
          if (c.rel == "spf-preconnect") {
            b.links.push({
              url: c.url || "",
              rel: c.rel || ""
            });
          }
        });
      }
      b.html = a.html || "";
      return b;
    }
    a = a.replace(ra, function (c, d, e, f) {
      if (d == "script") {
        d = (d = e.match(X)) ? d[1] : "";
        var h = e.match(sa);
        h = h ? h[1] : "";
        var k = ta.test(e);
        e = ua.exec(e);
        if (e = !e || e[1].indexOf("/javascript") != -1 || e[1].indexOf("/x-javascript") != -1 || e[1].indexOf("/ecmascript") != -1) {
          b.scripts.push({
            url: h,
            text: f,
            name: d,
            async: k
          });
          return "";
        } else {
          return c;
        }
      }
      if (d == "style" && (d = (d = e.match(X)) ? d[1] : "", e = ua.exec(e), e = !e || e[1].indexOf("text/css") != -1)) {
        b.styles.push({
          url: "",
          text: f,
          name: d
        });
        return "";
      } else {
        return c;
      }
    });
    a = a.replace(va, function (c, d) {
      var e = d.match(wa);
      e = e ? e[1] : "";
      if (e == "stylesheet") {
        e = (e = d.match(X)) ? e[1] : "";
        d = (d = d.match(xa)) ? d[1] : "";
        b.styles.push({
          url: d,
          text: "",
          name: e
        });
        return "";
      } else if (e == "spf-preconnect") {
        d = (d = d.match(xa)) ? d[1] : "";
        b.links.push({
          url: d,
          rel: e
        });
        return "";
      } else {
        return c;
      }
    });
    b.html = a;
    return b;
  }
  function qa() {
    this.html = "";
    this.scripts = [];
    this.styles = [];
    this.links = [];
  }
  (function () {
    var a = document.createElement("div");
    if ("transition" in a.style) {
      return true;
    } else {
      return C(["webkit", "Moz", "Ms", "O", "Khtml"], function (b) {
        return b + "Transition" in a.style;
      });
    }
  })();
  var va = /\x3clink([\s\S]*?)\x3e/ig;
  var ra = /\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig;
  var ta = /(?:\s|^)async(?:\s|=|$)/i;
  var xa = /(?:\s|^)href\s*=\s*["']?([^\s"']+)/i;
  var X = /(?:\s|^)name\s*=\s*["']?([^\s"']+)/i;
  var wa = /(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i;
  var sa = /(?:\s|^)src\s*=\s*["']?([^\s"']+)/i;
  var ua = /(?:\s|^)type\s*=\s*["']([^"']+)["']/i;
  function ya(a, b, c, d) {
    var e = d || {};
    var f = false;
    var h = 0;
    var k;
    var g = new XMLHttpRequest();
    g.open(a, b, true);
    g.timing = {};
    var m = g.abort;
    g.abort = function () {
      clearTimeout(k);
      g.onreadystatechange = null;
      m.call(g);
    };
    g.onreadystatechange = function () {
      var q = g.timing;
      if (g.readyState == 2) {
        q.responseStart = q.responseStart || z();
        if (g.responseType == "json") {
          f = false;
        } else if (G["assume-all-json-requests-chunked"] || (g.getResponseHeader("Transfer-Encoding") || "").toLowerCase().indexOf("chunked") > -1) {
          f = true;
        } else {
          q = g.getResponseHeader("X-Firefox-Spdy");
          var B = window.chrome && chrome.loadTimes && chrome.loadTimes();
          B = B && B.wasFetchedViaSpdy;
          f = !!q || !!B;
        }
        if (e.v) {
          e.v(g);
        }
      } else if (g.readyState == 3) {
        if (f && e.m) {
          q = g.responseText.substring(h);
          h = g.responseText.length;
          e.m(g, q);
        }
      } else if (g.readyState == 4) {
        q.responseEnd = q.responseEnd || z();
        if (window.performance && window.performance.getEntriesByName) {
          g.resourceTiming = window.performance.getEntriesByName(b).pop();
        }
        if (f && e.m && g.responseText.length > h) {
          q = g.responseText.substring(h);
          h = g.responseText.length;
          e.m(g, q);
        }
        clearTimeout(k);
        if (e.u) {
          e.u(g);
        }
      }
    };
    if ("responseType" in g && e.responseType == "json") {
      g.responseType = "json";
    }
    if (e.withCredentials) {
      g.withCredentials = e.withCredentials;
    }
    d = "FormData" in window && c instanceof FormData;
    a = a == "POST" && !d;
    if (e.headers) {
      for (var t in e.headers) {
        g.setRequestHeader(t, e.headers[t]);
        if (t.toLowerCase() == "content-type") {
          a = false;
        }
      }
    }
    if (a) {
      g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (e.D > 0) {
      k = setTimeout(function () {
        g.abort();
        if (e.B) {
          e.B(g);
        }
      }, e.D);
    }
    g.timing.fetchStart = z();
    g.send(c);
    return g;
  }
  ;
  function za(a, b, c, d, e) {
    var f = false;
    c.responseStart = c.responseEnd = z();
    if (b.type && b.type.lastIndexOf("navigate", 0) == 0) {
      c.navigationStart = c.startTime;
      if (!G["cache-unified"]) {
        H(d);
        f = true;
      }
    }
    if (b.l && e.type == "multipart") {
      A(e.parts, function (h) {
        h.timing ||= {};
        h.timing.spfCached = !!c.spfCached;
        h.timing.spfPrefetched = !!c.spfPrefetched;
        b.l(a, h);
      });
    }
    Aa(a, b, c, e, f);
  }
  function Ba(a, b, c) {
    a = c.getResponseHeader("X-SPF-Response-Type") || "";
    b.i = a.toLowerCase().indexOf("multipart") != -1;
  }
  function Ca(a, b, c, d, e, f, h) {
    if (d.i) {
      f = d.h + f;
      try {
        var k = pa(f, true, h);
      } catch (g) {
        e.abort();
        if (b.j) {
          b.j(a, g, e);
        }
        return;
      }
      if (b.l) {
        A(k.o, function (g) {
          g.timing ||= {};
          g.timing.spfCached = !!c.spfCached;
          g.timing.spfPrefetched = !!c.spfPrefetched;
          b.l(a, g);
        });
      }
      d.complete = d.complete.concat(k.o);
      d.h = k.h;
    }
  }
  function Da(a, b, c, d, e) {
    if (e.timing) {
      for (var f in e.timing) {
        c[f] = e.timing[f];
      }
    }
    if (e.resourceTiming) {
      if (b.type == "load") {
        for (var h in e.resourceTiming) {
          c[h] = e.resourceTiming[h];
        }
      } else if (window.performance && window.performance.timing && (f = window.performance.timing.navigationStart, f + e.resourceTiming.startTime >= c.startTime)) {
        for (var k in e.resourceTiming) {
          h = e.resourceTiming[k];
          if (h !== undefined && (L(k, "Start") || L(k, "End") || k == "startTime")) {
            c[k] = f + Math.round(h);
          }
        }
      }
    }
    if (b.type != "load") {
      c.navigationStart = c.startTime;
    }
    if (d.complete.length) {
      d.h = M(d.h);
      if (d.h) {
        Ca(a, b, c, d, e, "", true);
      }
    }
    if (e.responseType == "json") {
      if (!e.response) {
        if (b.j) {
          b.j(a, Error("JSON response parsing failed"), e);
        }
        return;
      }
      var g = V(D(e.response));
    } else {
      try {
        g = pa(e.responseText).o;
      } catch (t) {
        if (b.j) {
          b.j(a, t, e);
        }
        return;
      }
    }
    if (b.l && g.length > 1) {
      for (d = d.complete.length; d < g.length; d++) {
        e = g[d];
        e.timing ||= {};
        e.timing.spfCached = !!c.spfCached;
        e.timing.spfPrefetched = !!c.spfPrefetched;
        b.l(a, e);
      }
    }
    if (g.length > 1) {
      var m;
      A(g, function (t) {
        if (t.cacheType) {
          m = t.cacheType;
        }
      });
      g = {
        parts: g,
        type: "multipart"
      };
      if (m) {
        g.cacheType = m;
      }
    } else {
      g = g.length == 1 ? g[0] : {};
    }
    Aa(a, b, c, g, true);
  }
  function Aa(a, b, c, d, e) {
    if (e && b.method != "POST" && (e = Ea(a, b.current, d.cacheType, b.type, true))) {
      d.cacheKey = e;
      var f = {
        response: d,
        type: b.type || ""
      };
      var h = parseInt(G["cache-lifetime"], 10);
      var k = parseInt(G["cache-max"], 10);
      if (!(h <= 0) && !(k <= 0)) {
        k = I();
        f = {
          data: f,
          life: h,
          time: z(),
          count: 0
        };
        K(f);
        k[e] = f;
        setTimeout(ha, 1000);
      }
    }
    d.timing = c;
    if (b.A) {
      b.A(a, d);
    }
  }
  function Ea(a, b, c, d, e) {
    a = ja(a);
    var f;
    if (G["cache-unified"]) {
      f = a;
    } else if (d == "navigate-back" || d == "navigate-forward") {
      f = "history " + a;
    } else if (d == "navigate") {
      f = (e ? "history " : "prefetch ") + a;
    } else if (d == "prefetch") {
      f = e ? "prefetch " + a : "";
    }
    if (b && c == "url") {
      f += " previous " + b;
    } else if (b && c == "path") {
      f += " previous " + U(b).pathname;
    }
    return f || "";
  }
  function Fa(a, b) {
    var c = [];
    if (b) {
      c.push(a + " previous " + b);
      c.push(a + " previous " + U(b).pathname);
    }
    c.push(a);
    var d = null;
    C(c, function (e) {
      a: {
        var f = I();
        if (e in f) {
          f = f[e];
          if (J(f)) {
            K(f);
            f = f.data;
            break a;
          }
          H(e);
        }
        f = undefined;
      }
      if (f) {
        d = {
          key: e,
          response: f.response,
          type: f.type
        };
      }
      return !!f;
    });
    return d;
  }
  function Ga() {
    this.i = false;
    this.h = "";
    this.complete = [];
  }
  ;
  function Y(a, b) {
    if (a) {
      var c = Array.prototype.slice.call(arguments);
      c[0] = a;
      c = fa.apply(null, c);
    }
    return c !== false;
  }
  ;
  function Ha(a, b, c, d) {
    Y((a || {}).onError, {
      url: b,
      err: c,
      xhr: d
    });
  }
  function Ia(a, b, c) {
    if (Y((a || {}).onPartProcess, {
      url: b,
      part: c
    })) {
      Y((a || {}).onPartDone, {
        url: b,
        part: c
      });
    }
  }
  function Ja(a, b, c) {
    var d;
    if (!(d = c.type == "multipart")) {
      d = Y((a || {}).onProcess, {
        url: b,
        response: c
      });
    }
    if (d) {
      Y((a || {}).onDone, {
        url: b,
        response: c
      });
    }
  }
  var Ka = {
    request: function (a, b) {
      b = b || {};
      b = {
        method: b.method,
        headers: b.experimental_headers,
        l: y(Ia, null, b),
        j: y(Ha, null, b),
        A: y(Ja, null, b),
        F: b.postData,
        type: "",
        current: window.location.href,
        C: window.location.href
      };
      b.method = ((b.method || "GET") + "").toUpperCase();
      b.type = b.type || "request";
      var c = a;
      var d = G["url-identifier"] || "";
      if (d) {
        d = d.replace("__type__", b.type || "");
        var e = N(c, "#");
        var f = N(e[0], "?");
        c = f[0];
        var h = f[1];
        f = f[2];
        var k = e[1];
        e = e[2];
        if (d.lastIndexOf("?", 0) == 0) {
          if (h) {
            d = d.replace("?", "&");
          }
          f += d;
        } else {
          if (d.lastIndexOf(".", 0) == 0) {
            if (L(c, "/")) {
              d = "index" + d;
            } else {
              var g = c.lastIndexOf(".");
              if (g > -1) {
                c = c.substring(0, g);
              }
            }
          } else if (L(c, "/") && d.lastIndexOf("/", 0) == 0) {
            d = d.substring(1);
          }
          c += d;
        }
        c = c + h + f + k + e;
      }
      d = ja(c);
      c = {};
      c.spfUrl = d;
      c.startTime = z();
      c.fetchStart = c.startTime;
      h = Ea(a, b.current, null, b.type, false);
      h = Fa(h, b.current);
      c.spfPrefetched = !!h && h.type == "prefetch";
      c.spfCached = !!h;
      if (h) {
        a = y(za, null, a, b, c, h.key, h.response);
        b = window._spf_state = window._spf_state || {};
        var m = parseInt(b.uid, 10) || 0;
        m++;
        b = b.uid = m;
        Q[b] = a;
        if (T) {
          window.postMessage("spf:" + b, "*");
        } else {
          window.setTimeout(y(P, null, b), 0);
        }
        a = null;
      } else {
        h = {};
        if (f = G["request-headers"]) {
          for (m in f) {
            k = f[m];
            h[m] = k == null ? "" : String(k);
          }
        }
        if (b.headers) {
          for (m in b.headers) {
            k = b.headers[m];
            h[m] = k == null ? "" : String(k);
          }
        }
        if (b.C != null) {
          h["X-SPF-Referer"] = b.C;
        }
        if (b.current != null) {
          h["X-SPF-Previous"] = b.current;
        }
        if (m = G["advanced-header-identifier"]) {
          h["X-SPF-Request"] = m.replace("__type__", b.type);
          h.Accept = "application/json";
        }
        m = new Ga();
        f = y(Da, null, a, b, c, m);
        a = {
          headers: h,
          D: G["request-timeout"],
          v: y(Ba, null, a, m),
          m: y(Ca, null, a, b, c, m),
          u: f,
          B: f
        };
        if (b.withCredentials) {
          a.withCredentials = b.withCredentials;
        }
        if (G["advanced-response-type-json"]) {
          a.responseType = "json";
        }
        a = b.method == "POST" ? ya("POST", d, b.F, a) : ya("GET", d, null, a);
      }
      return a;
    }
  };
  var n = this;
  n.spf = n.spf || {};
  var La = n.spf;
  var Z;
  for (Z in Ka) {
    La[Z] = Ka[Z];
  }
}).call(this);