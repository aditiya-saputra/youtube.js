(function () {
  var aa = typeof Object.create == "function" ? Object.create : function (a) {
    function b() {}
    b.prototype = a;
    return new b();
  };
  var ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function (a, b, c) {
    if (a == Array.prototype || a == Object.prototype) {
      return a;
    }
    a[b] = c.value;
    return a;
  };
  function ca(a) {
    a = [typeof globalThis == "object" && globalThis, a, typeof window == "object" && window, typeof self == "object" && self, typeof da == "object" && da];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) {
        return c;
      }
    }
    throw Error("Cannot find global object");
  }
  var ea = ca(this);
  function fa(a, b) {
    if (b) {
      a: {
        var c = ea;
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
          ba(c, a, {
            configurable: true,
            writable: true,
            value: b
          });
        }
      }
    }
  }
  function ha(a) {
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
  fa("globalThis", function (a) {
    return a || ea;
  });
  fa("Symbol", function (a) {
    function b(f) {
      if (this instanceof b) {
        throw new TypeError("Symbol is not a constructor");
      }
      return new c(d + (f || "") + "_" + e++, f);
    }
    function c(f, g) {
      this.h = f;
      ba(this, "description", {
        configurable: true,
        writable: true,
        value: g
      });
    }
    if (a) {
      return a;
    }
    c.prototype.toString = function () {
      return this.h;
    };
    var d = "jscomp_symbol_" + (Math.random() * 1000000000 >>> 0) + "_";
    var e = 0;
    return b;
  });
  fa("Symbol.iterator", function (a) {
    if (a) {
      return a;
    }
    a = Symbol("Symbol.iterator");
    ba(Array.prototype, a, {
      configurable: true,
      writable: true,
      value: function () {
        return ia(ha(this));
      }
    });
    return a;
  });
  function ia(a) {
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
  function ja(a, b) {
    if (a instanceof String) {
      a += "";
    }
    var c = 0;
    var d = false;
    return ia(function () {
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
  fa("Array.prototype.keys", function (a) {
    if (a) {
      return a;
    } else {
      return function () {
        return ja(this, function (b) {
          return b;
        });
      };
    }
  }); /*
      Copyright Google LLC
      SPDX-License-Identifier: Apache-2.0
      */
  var ka = {};
  function la() {
    if (ka !== ka) {
      throw Error("Bad secret");
    }
  }
  ;
  var ma = globalThis.trustedTypes;
  var na;
  function oa() {
    var a = null;
    if (!ma) {
      return a;
    }
    try {
      function b(c) {
        return c;
      }
      a = ma.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b
      });
    } catch (c) {
      throw c;
    }
    return a;
  }
  function pa() {
    if (na === undefined) {
      na = oa();
    }
    return na;
  }
  ;
  function qa(a) {
    la();
    this.h = a;
  }
  qa.prototype.toString = function () {
    return this.h + "";
  };
  function sa(a) {
    la();
    this.h = a;
  }
  sa.prototype.toString = function () {
    return this.h;
  };
  new sa("about:blank");
  new sa("about:invalid#zClosurez");
  var ta = [];
  function ua(a) {
    console.warn("A URL with content '" + a + "' was sanitized away.");
  }
  if (ta.indexOf(ua) === -1) {
    ta.push(ua);
  }
  function va(a) {
    la();
    this.h = a;
  }
  va.prototype.toString = function () {
    return this.h + "";
  };
  function wa(a, b) {
    if (b instanceof qa) {
      b = b.h;
    } else {
      throw Error("Unexpected type when unwrapping TrustedResourceUrl");
    }
    a.src = b;
    var c;
    b = a.ownerDocument;
    b = b === undefined ? document : b;
    var d;
    b = (d = (c = b).querySelector) == null ? undefined : d.call(c, "script[nonce]");
    if (c = b == null ? "" : b.nonce || b.getAttribute("nonce") || "") {
      a.setAttribute("nonce", c);
    }
  }
  ;
  function xa(a, b) {
    if (a.nodeType === 1) {
      var c = a.tagName;
      if (/^(script|style)$/i.test(c)) {
        a = c.toLowerCase() === "script" ? "Use setScriptTextContent with a SafeScript." : "Use setStyleTextContent with a SafeStyleSheet.";
        throw Error(a);
      }
    }
    if (b instanceof va) {
      b = b.h;
    } else {
      throw Error("Unexpected type when unwrapping SafeHtml");
    }
    a.innerHTML = b;
  }
  ;
  function ya(a) {
    a = za(a);
    if (typeof a !== "string") {
      throw Error("Expected a string");
    }
    var b = pa();
    a = b ? b.createHTML(a) : a;
    return new va(a);
  }
  function Aa(a) {
    a = za(a);
    if (typeof a !== "string") {
      throw Error("Expected a string");
    }
    var b = pa();
    a = b ? b.createScriptURL(a) : a;
    return new qa(a);
  }
  function za(a) {
    if (a === null) {
      return "null";
    } else if (a === undefined) {
      return "undefined";
    } else {
      return a;
    }
  }
  ;
  function l(a, b, c) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var e = d.slice();
      e.push.apply(e, arguments);
      return a.apply(b, e);
    };
  }
  function Ba(a, b) {
    if (a) {
      var c = Array.prototype.slice.call(arguments, 1);
      try {
        return a.apply(null, c);
      } catch (d) {
        return d;
      }
    }
  }
  function n(a, b) {
    if (document.createEvent) {
      var c = document.createEvent("CustomEvent");
      c.initCustomEvent(a, true, true, b);
      return document.dispatchEvent(c);
    }
    return true;
  }
  var p = window.performance && window.performance.timing && window.performance.now ? function () {
    return window.performance.timing.navigationStart + window.performance.now();
  } : function () {
    return new Date().getTime();
  };
  function Ca() {}
  ;
  function q(a, b) {
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
  function Da(a, b) {
    if (a.every) {
      return a.every(b, undefined);
    }
    for (var c = 0, d = a.length; c < d; c++) {
      if (c in a && !b.call(undefined, a[c], c, a)) {
        return false;
      }
    }
    return true;
  }
  function Ea(a, b) {
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
  function Fa(a, b) {
    if (a.filter) {
      return a.filter(b, undefined);
    }
    var c = [];
    q(a, function (d, e, f) {
      if (b.call(undefined, d, e, f)) {
        c.push(d);
      }
    });
    return c;
  }
  function Ga(a, b) {
    if (a.map) {
      return a.map(b, undefined);
    }
    var c = [];
    c.length = a.length;
    q(a, function (d, e, f) {
      c[e] = b.call(undefined, d, e, f);
    });
    return c;
  }
  function r(a) {
    if (Object.prototype.toString.call(a) == "[object Array]") {
      return a;
    } else {
      return [a];
    }
  }
  ;
  function v(a, b) {
    return w[a] = b;
  }
  var w = window._spf_state || {};
  window._spf_state = w;
  function x(a, b) {
    var c = a.length - b.length;
    return c >= 0 && a.indexOf(b, c) == c;
  }
  function Ha(a) {
    return Object.prototype.toString.call(a) == "[object String]";
  }
  var Ia = String.prototype.trim ? function (a) {
    return a.trim();
  } : function (a) {
    return a.replace(/^\s+|\s+$/g, "");
  };
  function y(a, b) {
    a = a.split(b);
    var c = a.length == 1;
    return [a[0], c ? "" : b, c ? "" : a.slice(1).join(b)];
  }
  function Ja() {
    return "spfName".replace(/([A-Z])/g, "-$1").toLowerCase();
  }
  ;
  function Ka(a) {
    if (a.data && Ha(a.data) && a.data.lastIndexOf("spf:", 0) == 0) {
      La(a.data.substring(4));
    }
  }
  function La(a) {
    var b = Ma[a];
    if (b) {
      delete Ma[a];
      b();
    }
  }
  function Na(a) {
    if (window.addEventListener) {
      window.addEventListener("message", a, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", a);
    }
  }
  function Oa(a) {
    if (window.removeEventListener) {
      window.removeEventListener("message", a, false);
    } else if (window.detachEvent) {
      window.detachEvent("onmessage", a);
    }
  }
  var Pa = function () {
    function a() {
      b = false;
    }
    if (!window.postMessage) {
      return false;
    }
    var b = true;
    Na(a);
    window.postMessage("", "*");
    Oa(a);
    return b;
  }();
  var Ma = {};
  if (!("async-defers" in w)) {
    v("async-defers", Ma);
  }
  Ma = w["async-defers"];
  if (Pa) {
    if ("async-listener" in w) {
      Oa(w["async-listener"]);
    }
    Na(Ka);
    v("async-listener", Ka);
  }
  var Qa = {
    "animation-class": "spf-animate",
    "animation-duration": 425,
    "cache-lifetime": 600000,
    "cache-max": 50,
    "cache-unified": false,
    "link-class": "spf-link",
    "nolink-class": "spf-nolink",
    "navigate-limit": 20,
    "navigate-lifetime": 86400000,
    "reload-identifier": null,
    "request-timeout": 0,
    "url-identifier": "?spf=__type__"
  };
  var z = {};
  if (!("config" in w)) {
    v("config", z);
  }
  z = w.config;
  function Ra(a) {
    var b = A();
    if (a in b) {
      delete b[a];
    }
  }
  function Sa() {
    var a = A();
    for (b in a) {
      if (!Ta(a[b])) {
        delete a[b];
      }
    }
    a = A();
    var b = parseInt(z["cache-max"], 10);
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
  function Ta(a) {
    if (!a || !("data" in a)) {
      return false;
    }
    var b = a.life;
    b = isNaN(b) ? Infinity : b;
    a = a.time;
    return p() - a < b;
  }
  function Va(a) {
    var b = parseInt(w["cache-counter"], 10) || 0;
    b++;
    v("cache-counter", b);
    a.count = b;
  }
  function A(a) {
    if (!a && "cache-storage" in w) {
      return w["cache-storage"];
    } else {
      return v("cache-storage", a || {});
    }
  }
  ;
  function Wa(a) {
    if (a.classList) {
      return a.classList;
    } else {
      return a.className && a.className.match(/\S+/g) || [];
    }
  }
  function Xa(a, b) {
    if (b) {
      if (a.classList) {
        return a.classList.contains(b);
      }
      a = Wa(a);
      return Ea(a, function (c) {
        return c == b;
      });
    }
    return false;
  }
  function D(a, b) {
    if (b) {
      if (a.classList) {
        a.classList.add(b);
      } else if (!Xa(a, b)) {
        a.className += " " + b;
      }
    }
  }
  function E(a, b) {
    if (b) {
      if (a.classList) {
        a.classList.remove(b);
      } else {
        var c = Wa(a);
        c = Fa(c, function (d) {
          return d != b;
        });
        a.className = c.join(" ");
      }
    }
  }
  ;
  function Ya(a) {
    var b = document.body;
    if (b.dataset) {
      b.dataset.spfName = a;
    } else {
      b.setAttribute("data-" + Ja(), a);
    }
  }
  ;
  function Za(a, b) {
    b = b || document;
    if (b.querySelectorAll) {
      return b.querySelectorAll(a);
    } else {
      return [];
    }
  }
  function $a(a, b, c) {
    while (a) {
      if (b(a)) {
        return a;
      }
      if (c && a == c) {
        break;
      }
      a = a.parentNode;
    }
    return null;
  }
  function ab(a, b, c) {
    b = b || document;
    var d = b.createElement("iframe");
    d.id = a || "";
    d.src = "javascript:\"\"";
    d.style.display = "none";
    if (c) {
      d.onload = l(c, null, d);
    }
    b.body.appendChild(d);
    return d;
  }
  ;
  function bb(a, b, c) {
    var d = null;
    var e = window.history.state;
    if (e) {
      d = {};
      for (var f in e) {
        d[f] = e[f];
      }
    }
    if (b) {
      d = d || {};
      for (f in b) {
        d[f] = b[f];
      }
    }
    cb(true, a, d, c);
  }
  function cb(a, b, c, d) {
    if (b || c) {
      b = b || window.location.href;
      c = c || {};
      var e = p();
      v("history-timestamp", e);
      c["spf-timestamp"] = e;
      if (a) {
        db(c, b);
      } else {
        a = eb().contentWindow.history.pushState;
        if (typeof a == "function") {
          a.call(window.history, c, "", b);
        } else {
          throw Error("history.pushState is not a function.");
        }
      }
      v("history-url", b);
      if (d &&= w["history-callback"]) {
        d(b, c);
      }
    }
  }
  function fb(a) {
    var b = window.location.href;
    if (w["history-ignore-pop"]) {
      v("history-ignore-pop", false);
    } else if (a.state) {
      a = a.state;
      var c = a["spf-timestamp"];
      if (b == w["history-url"]) {
        v("history-timestamp", c);
        db(a, b);
      } else {
        a["spf-back"] = c < parseInt(w["history-timestamp"], 10);
        a["spf-current"] = w["history-url"];
        v("history-timestamp", c);
        v("history-url", b);
        if (c = w["history-callback"]) {
          c(b, a);
        }
      }
    }
  }
  function db(a, b) {
    var c = eb().contentWindow.history.replaceState;
    if (typeof c == "function") {
      c.call(window.history, a, "", b);
    } else {
      throw Error("history.replaceState is not a function");
    }
  }
  function eb() {
    var a = document.getElementById("history-iframe");
    a ||= ab("history-iframe");
    return a;
  }
  ;
  function gb(a, b) {
    if (a && b) {
      if (!(a in F)) {
        F[a] = [];
      }
      F[a].push(b);
    }
  }
  function hb(a, b) {
    if (a in F && b) {
      Da(F[a], function (c, d, e) {
        if (c == b) {
          e[d] = null;
          return false;
        } else {
          return true;
        }
      });
    }
  }
  function ib(a) {
    if (a in F) {
      q(F[a], function (b, c, d) {
        d[c] = null;
        if (b) {
          b();
        }
      });
    }
  }
  var F = {};
  if (!("ps-s" in w)) {
    v("ps-s", F);
  }
  F = w["ps-s"];
  function G(a, b, c) {
    var d = K[a];
    if (a && b) {
      d ||= K[a] = {
        items: [],
        B: 0,
        A: 0,
        H: 1
      };
      return d.items.push({
        K: b,
        delay: c || 0
      });
    } else {
      return d && d.items.length || 0;
    }
  }
  function L(a, b) {
    var c = K[a];
    if (c) {
      var d = !!c.B || !!c.A;
      if (c.H > 0 && (b || !d)) {
        jb(a, b);
      }
    }
  }
  function kb(a) {
    if (a = K[a]) {
      a.H--;
    }
  }
  function lb(a, b) {
    var c = K[a];
    if (c) {
      c.H++;
      L(a, b);
    }
  }
  function mb(a) {
    var b = K[a];
    if (b) {
      nb(b);
      delete K[a];
    }
  }
  function jb(a, b) {
    var c = K[a];
    if (c && (nb(c), c.H > 0 && c.items.length)) {
      var d = c.items[0];
      if (d) {
        a = l(function (e, f) {
          f();
          e();
        }, null, l(jb, null, a, b));
        if (b) {
          c.items.shift();
          a(d.K);
        } else {
          ob(c, d, a);
        }
      }
    }
  }
  function ob(a, b, c) {
    if (b.delay) {
      c = l(c, null, Ca);
      a.A = setTimeout(c, b.delay);
      b.delay = 0;
    } else {
      a.items.shift();
      c = l(c, null, b.K);
      if (b = (b = z["advanced-task-scheduler"]) && b.addTask) {
        a.B = b(c);
      } else {
        a.A = setTimeout(c, 0);
      }
    }
  }
  function nb(a) {
    if (a.B) {
      var b = z["advanced-task-scheduler"];
      if (b = b && b.cancelTask) {
        b(a.B);
      }
      a.B = 0;
    }
    if (a.A) {
      clearTimeout(a.A);
      a.A = 0;
    }
  }
  var K = {};
  function M(a) {
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
  function N(a, b) {
    a = M(a);
    if (b) {
      return a.href;
    } else {
      return y(a.href, "#")[0];
    }
  }
  function pb(a, b) {
    var c = y(a, "#");
    a = c[0];
    q(b, function (d) {
      a = a.replace(new RegExp("([?&])" + d + "(?:=[^&]*)?(?:(?=[&])|$)", "g"), function (e, f) {
        if (f == "?") {
          return f;
        } else {
          return "";
        }
      });
    });
    if (x(a, "?")) {
      a = a.slice(0, -1);
    }
    return a + c[1] + c[2];
  }
  function qb(a) {
    var b = z["advanced-persistent-parameters"] || "";
    var c = y(a, "#");
    a = c[0];
    var d = a.indexOf("?") != -1 ? "&" : "?";
    a += b ? d + b : "";
    return a + c[1] + c[2];
  }
  ; /*
    SPF
    (c) 2012-2017 Google Inc.
    https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
    */
  function rb(a, b, c, d) {
    var e = a == "js";
    b = O(a, b);
    var f = c || "^" + b;
    var g = P(a, f);
    var h;
    if (c && (h = Q[P(a, c)]) && b != h) {
      n(e ? "spfjsbeforeunload" : "spfcssbeforeunload", {
        name: c,
        url: h
      });
      e = h;
      delete Q[P(a, c)];
      if (e) {
        delete R[P(a, e)];
      }
      delete F[P(a, c)];
      gb(g, l(sb, null, a, c, h));
    }
    if ((e = R[P(a, b)]) && f != e) {
      delete Q[P(a, e)];
      delete R[P(a, b)];
      var k = P(a, e);
      if (k && g && k in F) {
        F[g] = (F[g] || []).concat(F[k]);
        delete F[k];
      }
    }
    R[P(a, b)] = f;
    Q[P(a, f)] = b;
    gb(g, d);
    d = l(tb, null, a);
    if (T[P(a, b)]) {
      if (e && f != e && (a = ub(a, b))) {
        a.setAttribute("name", c || "");
      }
      d();
    } else if ((a = vb(a, b, d, undefined, undefined, h)) && c) {
      a.setAttribute("name", c);
    }
  }
  function wb(a, b) {
    var c = Q[P(a, b)];
    delete Q[P(a, b)];
    if (c) {
      delete R[P(a, c)];
    }
    delete F[P(a, b)];
    sb(a, b, c);
  }
  function sb(a, b, c) {
    if (c) {
      n(a == "js" ? "spfjsunload" : "spfcssunload", {
        name: b,
        url: c
      });
      xb(a, c);
    }
  }
  function tb(a) {
    var b = P(a, "");
    var c;
    for (c in F) {
      if (c.indexOf(b) == 0 && Da(c.substring(b.length).split("|"), l(yb, null, a))) {
        ib(c);
      }
    }
  }
  function vb(a, b, c, d, e, f) {
    function g() {
      T[P(a, b, e)] &&= 2;
      if (h && m && m.parentNode && k == document) {
        m.parentNode.removeChild(m);
      }
      if (c) {
        setTimeout(c, 0);
      }
      return null;
    }
    var h = a == "js";
    b = O(a, b);
    T[P(a, b, e)] = 1;
    var k = d || document;
    var m = k.createElement(h ? "script" : "link");
    if (!b) {
      return g();
    }
    d = zb(b);
    m.className = P(a, d);
    if ("onload" in m) {
      m.onerror = m.onload = g;
    } else {
      m.onreadystatechange = function () {
        if (/^c|loade/.test(m.readyState)) {
          g();
        }
      };
    }
    d = k.getElementsByTagName("head")[0] || k.body;
    if (h) {
      m.async = true;
      wa(m, Aa(b));
      d.insertBefore(m, d.firstChild);
    } else {
      m.rel = "stylesheet";
      m.href = b;
      if (f = f ? ub(a, f, d) : null) {
        d.insertBefore(m, f);
      } else {
        d.appendChild(m);
      }
    }
    return m;
  }
  function xb(a, b) {
    b = O(a, b);
    var c = ub(a, b);
    if (c && c.parentNode) {
      c.parentNode.removeChild(c);
    }
    delete T[P(a, b)];
  }
  function ub(a, b, c) {
    b = zb(b);
    return Za("." + P(a, b), c)[0];
  }
  function Ab(a) {
    var b = a == "js";
    var c = [];
    q(Za(b ? "script[src]" : "link[rel~=\"stylesheet\"]"), function (d) {
      var e = b ? d.src : d.href;
      e = O(a, e);
      if (!T[P(a, e)]) {
        T[P(a, e)] = 2;
        var f = zb(e);
        D(d, P(a, f));
        if (f = d.getAttribute("name")) {
          R[P(a, e)] = f;
          Q[P(a, f)] = e;
        }
        c.push(d);
      }
    });
  }
  function Bb(a, b, c) {
    if (b && (b = O(a, b), c || !T[P(a, b)])) {
      if (c && a == "img") {
        Cb(b);
      } else {
        var d = zb(b);
        var e = P(a, d);
        var f = P(a, "prefetch");
        d = document.getElementById(f);
        if (!d) {
          d = ab(f, null, function (g) {
            g.title = f;
            L(f, true);
          });
        } else if (!c && d.contentWindow.document.getElementById(e)) {
          return;
        }
        a = l(Db, null, d, a, b, e, f);
        if (d.title) {
          a();
        } else {
          G(f, a);
        }
      }
    }
  }
  function Db(a, b, c, d, e) {
    var f = b == "js";
    var g = b == "css";
    a = a.contentWindow.document;
    var h = a.getElementById(d);
    if (h) {
      h.parentNode.removeChild(h);
    }
    if (f) {
      h = a.createElement("object");
      if (Eb) {
        a.createElement("script").src = c;
      } else {
        h.data = c;
      }
      h.id = d;
      a.body.appendChild(h);
    } else if (g) {
      h = vb(b, c, null, a, e);
      h.id = d;
    } else {
      h = a.createElement("img");
      if (Eb) {
        c = c + "#" + p();
      }
      h.src = c;
      h.id = d;
      a.body.appendChild(h);
    }
  }
  function Cb(a) {
    var b = new Image();
    if (Eb) {
      a = a + "#" + p();
    }
    b.src = a;
  }
  function Fb(a, b, c) {
    var d = a == "js";
    var e = Q[P(a, c)];
    var f = b.replace(/\s/g, "");
    f = f || "";
    var g = 0;
    for (var h = 0, k = f.length; h < k; ++h) {
      g = g * 31 + f.charCodeAt(h);
      g %= 4294967296;
    }
    f = "hash-" + g;
    Q[P(a, c)] = f;
    if (!Gb(a, f) && (b = Hb(a, b))) {
      T[P(a, f)] = 2;
      if (b && !d) {
        d = zb(f);
        b.className = P(a, d);
        b.setAttribute("name", c);
      }
      if (e = e && e[0]) {
        xb(a, e);
      }
    }
  }
  function Hb(a, b) {
    b = Ia(b);
    if (!b) {
      return null;
    }
    var c = document.getElementsByTagName("head")[0] || document.body;
    if (a == "js") {
      a = document.createElement("script");
      a.text = b;
      c.appendChild(a);
      c.removeChild(a);
    } else {
      a = document.createElement("style");
      c.appendChild(a);
      if ("styleSheet" in a) {
        a.styleSheet.cssText = b;
      } else {
        a.appendChild(document.createTextNode(b));
      }
    }
    return a;
  }
  function O(a, b) {
    var c = "rsrc-p-" + a;
    if (b) {
      var d = b.indexOf("//");
      if (d < 0) {
        if (b.lastIndexOf("hash-", 0) == 0) {
          return b;
        }
        c = w[c] || "";
        if (Ha(c)) {
          b = c + b;
        } else {
          for (var e in c) {
            b = b.replace(e, c[e]);
          }
        }
        if (a != "img") {
          b = b.indexOf("." + a) < 0 ? b + "." + a : b;
        }
        b = N(b);
      } else if (d == 0) {
        b = N(b);
      }
    }
    return b;
  }
  function P(a, b, c) {
    return a + "-" + b + (c ? "-" + c : "");
  }
  function zb(a) {
    if (a) {
      return String(a).replace(/[^\w]/g, "");
    } else {
      return "";
    }
  }
  function Gb(a, b) {
    a = T[P(a, b)];
    return b == "" || a == 2;
  }
  function yb(a, b) {
    b = Q[P(a, b)];
    return b != undefined && Gb(a, b);
  }
  var T = {};
  var R = {};
  var Q = {};
  var Eb = navigator.userAgent.indexOf(" Trident/") != -1;
  if (!("rsrc-s" in w)) {
    v("rsrc-s", T);
  }
  T = w["rsrc-s"];
  if (!("rsrc-n" in w)) {
    v("rsrc-n", R);
  }
  R = w["rsrc-n"];
  if (!("rsrc-u" in w)) {
    v("rsrc-u", Q);
  }
  Q = w["rsrc-u"];
  function Ib(a) {
    a = r(a);
    q(a, function (b) {
      Bb("img", b, true);
    });
  }
  ;
  function Jb(a, b, c) {
    rb("js", a, b, c);
  }
  function Kb(a) {
    wb("js", a);
  }
  function Lb(a, b) {
    vb("js", a, b);
  }
  function Mb(a) {
    a = r(a);
    q(a, function (b) {
      Bb("js", b);
    });
  }
  function Nb(a, b, c) {
    a = r(a);
    a = Fa(a, function (g) {
      return !!g;
    });
    var d = [];
    q(a, function (g) {
      if (Q[P("js", g)] == undefined) {
        d.push(g);
      }
    });
    var e = !d.length;
    if (b) {
      var f = Da(a, l(yb, null, "js"));
      if (e && f) {
        b();
      } else {
        a = P("js", a.sort().join("|"));
        gb(a, b);
      }
    }
    if (c && !e) {
      c(d);
    }
  }
  function Ob(a, b) {
    a = r(a);
    q(a, function (c) {
      if (c) {
        var d = Pb[c] || c;
        d = O("js", d);
        var e = Q[P("js", c)];
        if (e && d != e) {
          Qb(c);
        }
      }
    });
    Nb(a, b, Rb);
  }
  function Rb(a) {
    q(a, function (b) {
      function c() {
        Jb(e, b);
      }
      var d = U[b];
      var e = Pb[b] || b;
      if (d) {
        Ob(d, c);
      } else {
        c();
      }
    });
  }
  function Qb(a) {
    a = r(a);
    q(a, function (b) {
      var c = [];
      var d;
      for (d in U) {
        var e = U[d];
        e = r(e);
        q(e, function (f) {
          if (f == b) {
            c.push(d);
          }
        });
      }
      q(c, function (f) {
        Qb(f);
      });
      Kb(b);
    });
  }
  function Sb(a, b) {
    Fb("js", a, b);
  }
  function Tb(a) {
    Hb("js", a);
  }
  var U = {};
  if (!("js-d" in w)) {
    v("js-d", U);
  }
  U = w["js-d"];
  var Pb = {};
  if (!("js-u" in w)) {
    v("js-u", Pb);
  }
  Pb = w["js-u"];
  function Ub(a, b, c) {
    rb("css", a, b, c);
  }
  function Vb(a, b) {
    vb("css", a, b);
  }
  function Wb(a) {
    a = r(a);
    q(a, function (b) {
      Bb("css", b);
    });
  }
  ; /*
    Copyright 2012-2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by The MIT License.
    SPDX-License-Identifier: MIT
    */
  function Xb(a, b, c) {
    if (b) {
      b = [];
      var d = 0;
      if (c) {
        a += "\r\n";
      }
      var e = a.indexOf("[\r\n", d);
      for (e > -1 && (d = e + 3); (e = a.indexOf(",\r\n", d)) > -1;) {
        var f = Ia(a.substring(d, e));
        d = e + 3;
        if (f) {
          b.push(JSON.parse(f));
        }
      }
      e = a.indexOf("]\r\n", d);
      if (e > -1) {
        f = Ia(a.substring(d, e));
        d = e + 3;
        if (f) {
          b.push(JSON.parse(f));
        }
      }
      f = "";
      if (a.length > d) {
        f = a.substring(d);
        if (c && x(f, "\r\n")) {
          f = f.substring(0, f.length - 2);
        }
      }
      b = Yb(b);
      return {
        G: b,
        l: f
      };
    }
    a = JSON.parse(a);
    b = Yb(r(a));
    return {
      G: b,
      l: ""
    };
  }
  function V(a, b, c, d) {
    var e = c && c.type.lastIndexOf("navigate", 0) == 0;
    var f = c && c.reverse;
    var g = c && !!c.position;
    var h = c && c.u;
    var k = b.name || "";
    var m = "process " + N(a);
    var B = !z["experimental-process-async"];
    var u = 0;
    b.timing ||= {};
    if (b.title) {
      document.title = b.title;
    }
    if (e && b.url && N(b.url) != N(window.location.href)) {
      bb(b.url + window.location.hash);
    }
    if (b.head) {
      u = l(function (t, C) {
        t = W(t);
        Zb(t);
        $b(t);
        kb(m);
        ac(t, function () {
          C.spfProcessHead = p();
          lb(m, B);
        });
      }, null, b.head, b.timing);
      u = G(m, u);
    }
    if (b.attr) {
      u = l(function (t, C) {
        for (var I in t) {
          var H = document.getElementById(I);
          if (H) {
            var S = undefined;
            var ra = H;
            var bc = t[I];
            for (S in bc) {
              H = bc[S];
              if (S == "class") {
                ra.className = H;
              } else if (S == "style") {
                ra.style.cssText = H;
              } else {
                ra.setAttribute(S, H);
                if (S == "value") {
                  ra[S] = H;
                }
              }
            }
          }
        }
        C.spfProcessAttr = p();
      }, null, b.attr, b.timing);
      u = G(m, u);
    }
    var J = b.body || {};
    var bd = u;
    var Ua;
    for (Ua in J) {
      u = l(function (t, C) {
        if (t = document.getElementById(t)) {
          if (!!e && !g && !h) {
            v("nav-scroll-position", null);
            v("nav-scroll-url", null);
            window.scroll(0, 0);
            h = true;
            if (c) {
              c.u = true;
            }
          }
          var I = W(C);
          $b(I);
          function H() {
            kb(m);
            ac(I, function () {
              lb(m, B);
            });
          }
          C = z["animation-class"];
          if (cc && Xa(t, C)) {
            t = new dc(t, I.html, C, k, !!f);
            kb(m);
            L(t.key, true);
            G(t.key, l(ec, null, t), 0);
            G(t.key, l(fc, null, t), 17);
            G(t.key, l(hc, null, t), t.duration);
            G(t.key, l(function () {
              H();
              lb(m, B);
            }, null), 0);
            L(t.key);
          } else if (C = z["experimental-html-handler"]) {
            kb(m);
            C(I.html, t, function () {
              H();
              lb(m, B);
            });
          } else {
            xa(t, ya(I.html));
            H();
          }
        }
      }, null, Ua, J[Ua], b.timing);
      u = G(m, u);
    }
    J = u - bd;
    if (b.foot) {
      u = l(function (t, C, I) {
        if (I) {
          C.spfProcessBody = p();
        }
        t = W(t);
        $b(t);
        kb(m);
        ac(t, function () {
          C.spfProcessFoot = p();
          lb(m, B);
        });
      }, null, b.foot, b.timing, J);
      u = G(m, u);
    } else if (J) {
      u = l(function (t) {
        t.spfProcessBody = p();
      }, null, b.timing);
      u = G(m, u);
    }
    if (d) {
      u = G(m, l(d, null, a, b));
    }
    L(m, B);
  }
  function ic(a, b, c, d) {
    c = "preprocess " + N(a);
    if (b.head) {
      var e = l(function (h) {
        h = W(h);
        Zb(h);
        jc(h);
        kc(h);
      }, null, b.head);
      G(c, e);
    }
    var f = b.body || {};
    var g;
    for (g in f) {
      if (f[g]) {
        e = l(function (h, k) {
          h = W(k);
          jc(h);
          kc(h);
        }, null, g, f[g]);
        G(c, e);
      }
    }
    if (b.foot) {
      e = l(function (h) {
        h = W(h);
        jc(h);
        kc(h);
      }, null, b.foot);
      G(c, e);
    }
    if (d) {
      G(c, l(d, null, a, b));
    }
    L(c);
  }
  function ec(a) {
    D(a.element, a.C);
    D(a.element, a.N);
    D(a.element, a.J);
    D(a.element, a.T);
    D(a.element, a.U);
    a.v = document.createElement("div");
    a.v.className = a.X;
    var b = a.element;
    var c = a.v;
    if (c) {
      for (var d; d = b.firstChild;) {
        c.appendChild(d);
      }
      b.appendChild(c);
    }
    a.h = document.createElement("div");
    a.h.className = a.W;
    xa(a.h, ya(a.V));
    if (a.reverse) {
      b = a.v;
      b.parentNode.insertBefore(a.h, b);
    } else {
      b = a.v;
      b.parentNode.insertBefore(a.h, b.nextSibling);
    }
  }
  function fc(a) {
    E(a.element, a.T);
    E(a.element, a.U);
    D(a.element, a.L);
    D(a.element, a.M);
  }
  function hc(a) {
    a.element.removeChild(a.v);
    var b = a.h;
    var c;
    var d = b.parentNode;
    if (d && d.nodeType != 11) {
      if (b.removeNode) {
        b.removeNode(false);
      } else {
        while (c = b.firstChild) {
          d.insertBefore(c, b);
        }
        d.removeChild(b);
      }
    }
    E(a.element, a.L);
    E(a.element, a.M);
    E(a.element, a.N);
    E(a.element, a.J);
    E(a.element, a.C);
  }
  function Yb(a) {
    var b = r(a);
    q(b, function (c) {
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
    var b = new lc();
    if (!a) {
      return b;
    }
    if (!Ha(a)) {
      if (a.scripts) {
        q(a.scripts, function (c) {
          b.scripts.push({
            url: c.url || "",
            text: c.text || "",
            name: c.name || "",
            async: c.async || false
          });
        });
      }
      if (a.styles) {
        q(a.styles, function (c) {
          b.styles.push({
            url: c.url || "",
            text: c.text || "",
            name: c.name || ""
          });
        });
      }
      if (a.links) {
        q(a.links, function (c) {
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
    a = a.replace(mc, function (c, d, e, f) {
      if (d == "script") {
        d = (d = e.match(nc)) ? d[1] : "";
        var g = e.match(oc);
        g = g ? g[1] : "";
        var h = pc.test(e);
        e = qc.exec(e);
        if (e = !e || e[1].indexOf("/javascript") != -1 || e[1].indexOf("/x-javascript") != -1 || e[1].indexOf("/ecmascript") != -1) {
          b.scripts.push({
            url: g,
            text: f,
            name: d,
            async: h
          });
          return "";
        } else {
          return c;
        }
      }
      if (d == "style" && (d = (d = e.match(nc)) ? d[1] : "", e = qc.exec(e), e = !e || e[1].indexOf("text/css") != -1)) {
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
    a = a.replace(rc, function (c, d) {
      var e = d.match(sc);
      e = e ? e[1] : "";
      if (e == "stylesheet") {
        e = (e = d.match(nc)) ? e[1] : "";
        d = (d = d.match(tc)) ? d[1] : "";
        b.styles.push({
          url: d,
          text: "",
          name: e
        });
        return "";
      } else if (e == "spf-preconnect") {
        d = (d = d.match(tc)) ? d[1] : "";
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
  function ac(a, b) {
    if (a.scripts.length <= 0) {
      if (b) {
        b();
      }
    } else {
      var c = -1;
      function d() {
        c++;
        if (c < a.scripts.length) {
          var e = a.scripts[c];
          function f() {}
          if (e.url) {
            f = e.name ? l(Jb, null, e.url, e.name) : l(Lb, null, e.url);
          } else if (e.text) {
            f = e.name ? l(Sb, null, e.text, e.name) : l(Tb, null, e.text);
          }
          if (e.url && !e.async) {
            f(d);
          } else {
            f();
            d();
          }
        } else if (b) {
          b();
        }
      }
      d();
    }
  }
  function kc(a) {
    if (!(a.scripts.length <= 0)) {
      a = Ga(a.scripts, function (b) {
        return b.url;
      });
      Mb(a);
    }
  }
  function $b(a) {
    if (!(a.styles.length <= 0)) {
      q(a.styles, function (b) {
        if (b.url) {
          if (b.name) {
            Ub(b.url, b.name);
          } else {
            Vb(b.url);
          }
        } else if (b.text) {
          if (b.name) {
            Fb("css", b.text, b.name);
          } else {
            Hb("css", b.text);
          }
        }
      });
    }
  }
  function jc(a) {
    if (!(a.styles.length <= 0)) {
      a = Ga(a.styles, function (b) {
        return b.url;
      });
      Wb(a);
    }
  }
  function Zb(a) {
    if (!(a.links.length <= 0)) {
      a = Ga(a.links, function (b) {
        if (b.rel == "spf-preconnect") {
          return b.url;
        } else {
          return "";
        }
      });
      Ib(a);
    }
  }
  function dc(a, b, c, d, e) {
    var f = parseInt(z["animation-duration"], 10);
    this.element = a;
    this.V = b;
    this.duration = f;
    this.reverse = e;
    b = document.body;
    b = (b.dataset ? b.dataset.spfName : b.getAttribute("data-" + Ja())) || "";
    f = parseInt(w.uid, 10) || 0;
    f++;
    this.key = a["spf-key"] ||= "" + v("uid", f);
    this.N = b && c + "-from-" + b;
    this.J = d && c + "-to-" + d;
    this.v = null;
    this.X = c + "-old";
    this.h = null;
    this.W = c + "-new";
    this.C = c + (e ? "-reverse" : "-forward");
    this.T = c + "-start";
    this.U = this.C + "-start";
    this.L = c + "-end";
    this.M = this.C + "-end";
  }
  function lc() {
    this.html = "";
    this.scripts = [];
    this.styles = [];
    this.links = [];
  }
  var cc = function () {
    var a = document.createElement("div");
    if ("transition" in a.style) {
      return true;
    } else {
      return Ea(["webkit", "Moz", "Ms", "O", "Khtml"], function (b) {
        return b + "Transition" in a.style;
      });
    }
  }();
  var rc = /\x3clink([\s\S]*?)\x3e/ig;
  var mc = /\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig;
  var pc = /(?:\s|^)async(?:\s|=|$)/i;
  var tc = /(?:\s|^)href\s*=\s*["']?([^\s"']+)/i;
  var nc = /(?:\s|^)name\s*=\s*["']?([^\s"']+)/i;
  var sc = /(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i;
  var oc = /(?:\s|^)src\s*=\s*["']?([^\s"']+)/i;
  var qc = /(?:\s|^)type\s*=\s*["']([^"']+)["']/i;
  function uc(a, b, c, d) {
    var e = d || {};
    var f = false;
    var g = 0;
    var h;
    var k = new XMLHttpRequest();
    k.open(a, b, true);
    k.timing = {};
    var m = k.abort;
    k.abort = function () {
      clearTimeout(h);
      k.onreadystatechange = null;
      m.call(k);
    };
    k.onreadystatechange = function () {
      var u = k.timing;
      if (k.readyState == 2) {
        u.responseStart = u.responseStart || p();
        if (k.responseType == "json") {
          f = false;
        } else if (z["assume-all-json-requests-chunked"] || (k.getResponseHeader("Transfer-Encoding") || "").toLowerCase().indexOf("chunked") > -1) {
          f = true;
        } else {
          u = k.getResponseHeader("X-Firefox-Spdy");
          var J = window.chrome && chrome.loadTimes && chrome.loadTimes();
          J = J && J.wasFetchedViaSpdy;
          f = !!u || !!J;
        }
        if (e.P) {
          e.P(k);
        }
      } else if (k.readyState == 3) {
        if (f && e.D) {
          u = k.responseText.substring(g);
          g = k.responseText.length;
          e.D(k, u);
        }
      } else if (k.readyState == 4) {
        u.responseEnd = u.responseEnd || p();
        if (window.performance && window.performance.getEntriesByName) {
          k.resourceTiming = window.performance.getEntriesByName(b).pop();
        }
        if (f && e.D && k.responseText.length > g) {
          u = k.responseText.substring(g);
          g = k.responseText.length;
          e.D(k, u);
        }
        clearTimeout(h);
        if (e.O) {
          e.O(k);
        }
      }
    };
    if ("responseType" in k && e.responseType == "json") {
      k.responseType = "json";
    }
    if (e.withCredentials) {
      k.withCredentials = e.withCredentials;
    }
    d = "FormData" in window && c instanceof FormData;
    a = a == "POST" && !d;
    if (e.headers) {
      for (var B in e.headers) {
        k.setRequestHeader(B, e.headers[B]);
        if (B.toLowerCase() == "content-type") {
          a = false;
        }
      }
    }
    if (a) {
      k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (e.S > 0) {
      h = setTimeout(function () {
        k.abort();
        if (e.R) {
          e.R(k);
        }
      }, e.S);
    }
    k.timing.fetchStart = p();
    k.send(c);
    return k;
  }
  ;
  function vc(a, b) {
    b = b || {};
    b.method = ((b.method || "GET") + "").toUpperCase();
    b.type = b.type || "request";
    var c = a;
    var d = z["url-identifier"] || "";
    if (d) {
      d = d.replace("__type__", b.type || "");
      var e = y(c, "#");
      var f = y(e[0], "?");
      c = f[0];
      var g = f[1];
      f = f[2];
      var h = e[1];
      e = e[2];
      if (d.lastIndexOf("?", 0) == 0) {
        if (g) {
          d = d.replace("?", "&");
        }
        f += d;
      } else {
        if (d.lastIndexOf(".", 0) == 0) {
          if (x(c, "/")) {
            d = "index" + d;
          } else {
            var k = c.lastIndexOf(".");
            if (k > -1) {
              c = c.substring(0, k);
            }
          }
        } else if (x(c, "/") && d.lastIndexOf("/", 0) == 0) {
          d = d.substring(1);
        }
        c += d;
      }
      c = c + g + f + h + e;
    }
    d = N(c);
    c = {};
    c.spfUrl = d;
    c.startTime = p();
    c.fetchStart = c.startTime;
    g = wc(a, b.current, null, b.type, false);
    g = xc(g, b.current);
    c.spfPrefetched = !!g && g.type == "prefetch";
    c.spfCached = !!g;
    if (g) {
      a = l(yc, null, a, b, c, g.key, g.response);
      b = window._spf_state = window._spf_state || {};
      var m = parseInt(b.uid, 10) || 0;
      m++;
      b = b.uid = m;
      Ma[b] = a;
      if (Pa) {
        window.postMessage("spf:" + b, "*");
      } else {
        window.setTimeout(l(La, null, b), 0);
      }
      return null;
    }
    g = {};
    if (f = z["request-headers"]) {
      for (m in f) {
        h = f[m];
        g[m] = h == null ? "" : String(h);
      }
    }
    if (b.headers) {
      for (m in b.headers) {
        h = b.headers[m];
        g[m] = h == null ? "" : String(h);
      }
    }
    if (b.j != null) {
      g["X-SPF-Referer"] = b.j;
    }
    if (b.current != null) {
      g["X-SPF-Previous"] = b.current;
    }
    if (m = z["advanced-header-identifier"]) {
      g["X-SPF-Request"] = m.replace("__type__", b.type);
      g.Accept = "application/json";
    }
    m = new zc();
    f = l(Ac, null, a, b, c, m);
    a = {
      headers: g,
      S: z["request-timeout"],
      P: l(Bc, null, a, m),
      D: l(Cc, null, a, b, c, m),
      O: f,
      R: f
    };
    if (b.withCredentials) {
      a.withCredentials = b.withCredentials;
    }
    if (z["advanced-response-type-json"]) {
      a.responseType = "json";
    }
    if (b.method == "POST") {
      return uc("POST", d, b.I, a);
    } else {
      return uc("GET", d, null, a);
    }
  }
  function yc(a, b, c, d, e) {
    var f = false;
    c.responseStart = c.responseEnd = p();
    if (b.type && b.type.lastIndexOf("navigate", 0) == 0) {
      c.navigationStart = c.startTime;
      if (!z["cache-unified"]) {
        Ra(d);
        f = true;
      }
    }
    if (b.o && e.type == "multipart") {
      q(e.parts, function (g) {
        g.timing ||= {};
        g.timing.spfCached = !!c.spfCached;
        g.timing.spfPrefetched = !!c.spfPrefetched;
        b.o(a, g);
      });
    }
    Dc(a, b, c, e, f);
  }
  function Bc(a, b, c) {
    a = c.getResponseHeader("X-SPF-Response-Type") || "";
    b.h = a.toLowerCase().indexOf("multipart") != -1;
  }
  function Cc(a, b, c, d, e, f, g) {
    if (d.h) {
      f = d.l + f;
      try {
        var h = Xb(f, true, g);
      } catch (k) {
        e.abort();
        if (b.m) {
          b.m(a, k, e);
        }
        return;
      }
      if (b.o) {
        q(h.G, function (k) {
          k.timing ||= {};
          k.timing.spfCached = !!c.spfCached;
          k.timing.spfPrefetched = !!c.spfPrefetched;
          b.o(a, k);
        });
      }
      d.complete = d.complete.concat(h.G);
      d.l = h.l;
    }
  }
  function Ac(a, b, c, d, e) {
    if (e.timing) {
      for (var f in e.timing) {
        c[f] = e.timing[f];
      }
    }
    if (e.resourceTiming) {
      if (b.type == "load") {
        for (var g in e.resourceTiming) {
          c[g] = e.resourceTiming[g];
        }
      } else if (window.performance && window.performance.timing && (f = window.performance.timing.navigationStart, f + e.resourceTiming.startTime >= c.startTime)) {
        for (var h in e.resourceTiming) {
          g = e.resourceTiming[h];
          if (g !== undefined && (x(h, "Start") || x(h, "End") || h == "startTime")) {
            c[h] = f + Math.round(g);
          }
        }
      }
    }
    if (b.type != "load") {
      c.navigationStart = c.startTime;
    }
    if (d.complete.length) {
      d.l = Ia(d.l);
      if (d.l) {
        Cc(a, b, c, d, e, "", true);
      }
    }
    if (e.responseType == "json") {
      if (!e.response) {
        if (b.m) {
          b.m(a, Error("JSON response parsing failed"), e);
        }
        return;
      }
      var k = Yb(r(e.response));
    } else {
      try {
        k = Xb(e.responseText).G;
      } catch (B) {
        if (b.m) {
          b.m(a, B, e);
        }
        return;
      }
    }
    if (b.o && k.length > 1) {
      for (d = d.complete.length; d < k.length; d++) {
        e = k[d];
        e.timing ||= {};
        e.timing.spfCached = !!c.spfCached;
        e.timing.spfPrefetched = !!c.spfPrefetched;
        b.o(a, e);
      }
    }
    if (k.length > 1) {
      var m;
      q(k, function (B) {
        if (B.cacheType) {
          m = B.cacheType;
        }
      });
      k = {
        parts: k,
        type: "multipart"
      };
      if (m) {
        k.cacheType = m;
      }
    } else {
      k = k.length == 1 ? k[0] : {};
    }
    Dc(a, b, c, k, true);
  }
  function Dc(a, b, c, d, e) {
    if (e && b.method != "POST" && (e = wc(a, b.current, d.cacheType, b.type, true))) {
      d.cacheKey = e;
      var f = {
        response: d,
        type: b.type || ""
      };
      var g = parseInt(z["cache-lifetime"], 10);
      var h = parseInt(z["cache-max"], 10);
      if (!(g <= 0) && !(h <= 0)) {
        h = A();
        f = {
          data: f,
          life: g,
          time: p(),
          count: 0
        };
        Va(f);
        h[e] = f;
        setTimeout(Sa, 1000);
      }
    }
    d.timing = c;
    if (b.F) {
      b.F(a, d);
    }
  }
  function wc(a, b, c, d, e) {
    a = N(a);
    var f;
    if (z["cache-unified"]) {
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
      f += " previous " + M(b).pathname;
    }
    return f || "";
  }
  function xc(a, b) {
    var c = [];
    if (b) {
      c.push(a + " previous " + b);
      c.push(a + " previous " + M(b).pathname);
    }
    c.push(a);
    var d = null;
    Ea(c, function (e) {
      a: {
        var f = A();
        if (e in f) {
          f = f[e];
          if (Ta(f)) {
            Va(f);
            f = f.data;
            break a;
          }
          Ra(e);
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
  function zc() {
    this.h = false;
    this.l = "";
    this.complete = [];
  }
  ;
  function Ec(a) {
    return $a(a, function (b) {
      return Xa(b, z["link-class"]);
    });
  }
  function Fc(a) {
    return $a(a, function (b) {
      return Xa(b, z["nolink-class"]);
    });
  }
  function Gc(a, b) {
    return $a(a, function (c) {
      return c.href && c.tagName.toLowerCase() != "img";
    }, b);
  }
  function Hc(a) {
    if (a.metaKey || a.altKey || a.ctrlKey || a.shiftKey || a.button > 0) {
      return null;
    }
    var b = Ec(a.target);
    if (!b || z["nolink-class"] && Fc(a.target)) {
      return null;
    } else if (a = Gc(a.target, b)) {
      return a.href;
    } else {
      return null;
    }
  }
  function Ic() {
    if (!w["nav-init"]) {
      return false;
    }
    var a = parseInt(w["nav-counter"], 10) || 0;
    a++;
    var b = parseInt(z["navigate-limit"], 10);
    b = isNaN(b) ? Infinity : b;
    if (a > b) {
      return false;
    }
    a = parseInt(w["nav-init-time"], 10);
    a--;
    a = p() - a;
    b = parseInt(z["navigate-lifetime"], 10);
    b = isNaN(b) ? Infinity : b;
    return !(a > b);
  }
  function Jc(a, b) {
    b = b || window.location.href;
    return a.indexOf("#") == -1 || !(a = N(a), b = N(b), a == b);
  }
  function Kc(a) {
    if (!a.defaultPrevented) {
      var b = Hc(a);
      if (b) {
        b = qb(b);
        if (M(b).origin == M(window.location.href).origin && Ic() && n("spfclick", {
          url: b,
          target: a.target
        })) {
          Lc(b, {}, new Mc());
          a.preventDefault();
        }
      }
    }
  }
  function Nc(a) {
    var b = Hc(a);
    if (b) {
      setTimeout(function () {
        Oc(b);
      }, 0);
    }
  }
  function Pc() {
    var a = w["nav-scroll-position"] || null;
    var b = w["nav-scroll-url"] || "";
    a = a && b == window.location.href ? a : null;
    Qc();
    if (a) {
      window.scroll.apply(null, a);
    }
  }
  function Rc(a, b) {
    b = new Mc({
      current: b && b["spf-current"],
      history: true,
      position: b && b["spf-position"],
      j: b && b["spf-referer"],
      reverse: !!b && !!b["spf-back"]
    });
    var c = z["reload-identifier"];
    if (c) {
      a = pb(a, [c]);
    }
    if (M(a).origin != M(window.location.href).origin) {
      X(a, "9");
    } else if (Ic()) {
      if (n("spfhistory", {
        url: a,
        referer: b.j,
        previous: b.current
      })) {
        if (b.position) {
          v("nav-scroll-position", [window.pageXOffset, window.pageYOffset]);
          v("nav-scroll-url", window.location.href);
        }
        Lc(a, {}, b);
      }
    } else {
      X(a, "1");
    }
  }
  function Lc(a, b, c) {
    Sc();
    if (Jc(a, c.current)) {
      if (Tc(a, c.j, c.current, b)) {
        v("nav-counter", (parseInt(w["nav-counter"], 10) || 0) + 1);
        Uc(a);
        var d = N(a);
        var e = "preprocess " + N(d);
        for (f in K) {
          if (e != f && f.lastIndexOf("preprocess", 0) == 0) {
            mb(f);
          }
        }
        d = Vc()[d];
        v("nav-request", d);
        v("nav-promote", null);
        v("nav-promote-time", null);
        if (d && d.readyState != 4) {
          d = "preprocess " + N(a);
          e = "promote " + N(a);
          v("nav-promote", a);
          v("nav-promote-time", p());
          mb(d);
          L(e, true);
          if (!c.history) {
            Wc(a, c.j, l(Y, null, b));
          }
        } else {
          d = l(Y, null, b);
          e = l(Xc, null, b, c);
          var f = l(Yc, null, b, c);
          if (!z["advanced-navigate-persist-timing"]) {
            Zc();
          }
          c.type = "navigate";
          if (c.history) {
            c.type += c.reverse ? "-back" : "-forward";
          }
          b = vc(a, {
            method: b.method,
            headers: b.headers,
            o: e,
            m: d,
            F: f,
            I: b.postData,
            type: c.type,
            current: c.current,
            j: c.j
          });
          v("nav-request", b);
          if (!c.history) {
            Wc(a, c.j, d);
          }
        }
      } else {
        X(a, "2");
      }
    } else {
      if (!c.history) {
        Wc(a, c.j, l(Y, null, b));
      }
      $c(a, c);
    }
  }
  function $c(a, b) {
    if (b.position) {
      Qc();
      window.scroll.apply(null, b.position);
      b.u = true;
    } else {
      a = y(a, "#");
      if (a[2]) {
        if (a = document.getElementById(a[2])) {
          Qc();
          a.scrollIntoView();
          b.u = true;
        }
      } else if (!b.u) {
        Qc();
        window.scroll(0, 0);
        b.u = true;
      }
    }
  }
  function Wc(a, b, c) {
    try {
      bb(null, {
        "spf-position": [window.pageXOffset, window.pageYOffset]
      });
      if (N(a, true) != window.location.href) {
        cb(false, a, {
          "spf-referer": b
        });
      }
    } catch (d) {
      Sc();
      c(a, d);
    }
  }
  function Y(a, b, c, d) {
    v("nav-request", null);
    if (ad(b, c, a, undefined, d)) {
      X(b, "10", c);
    }
  }
  function Xc(a, b, c, d) {
    if (cd(c, d, a)) {
      if (d.reload) {
        X(c, "5");
      } else if (d.redirect) {
        dd(a, d.redirect);
      } else {
        try {
          V(c, d, b, function () {
            ed(c, d, a);
          });
        } catch (e) {
          Y(a, c, e);
        }
      }
    } else {
      X(c, "3");
    }
  }
  function Yc(a, b, c, d) {
    v("nav-request", null);
    if (w["nav-promote"] == b.i) {
      var e = d.timing || {};
      e.navigationStart = w["nav-promote-time"];
      e.spfPrefetched = true;
    }
    var f = d.type == "multipart";
    if (!f) {
      if (!fd(c, d, a)) {
        X(c, "4");
        return;
      }
      if (d.reload) {
        X(c, "5");
        return;
      }
      if (d.redirect) {
        dd(a, d.redirect);
        return;
      }
    }
    try {
      V(c, f ? {} : d, b, function () {
        var g = d.name || "";
        if (f) {
          q(d.parts, function (h) {
            g = h.name || g;
          });
        }
        Ya(g);
        $c(c, b);
        gd(c, d, a);
      });
    } catch (g) {
      Y(a, c, g);
    }
  }
  function dd(a, b) {
    try {
      b += window.location.hash;
      bb(b, null, true);
    } catch (c) {
      Sc();
      Y(a, b, c);
    }
  }
  function Sc() {
    var a = w["nav-request"];
    if (a) {
      a.abort();
      v("nav-request", null);
    }
  }
  function Z(a, b) {
    if (a) {
      var c = Array.prototype.slice.call(arguments);
      c[0] = a;
      c = Ba.apply(null, c);
    }
    return c !== false;
  }
  function X(a, b, c) {
    c = c ? c.message : "";
    Sc();
    Uc();
    var d = b;
    if (c) {
      d += " Message: " + c;
    }
    n("spfreload", {
      url: a,
      reason: d
    });
    var e = window.location.href;
    if (z["experimental-remove-history"] && e == a) {
      v("history-ignore-pop", true);
      window.history.back();
    }
    setTimeout(function () {
      var f = z["reload-identifier"];
      if (f) {
        var g = {};
        g[f] = encodeURIComponent(b);
        f = a;
        var h = y(f, "#");
        f = h[0];
        var k = f.indexOf("?") != -1 ? "&" : "?";
        var m;
        for (m in g) {
          f += k + m;
          if (g[m]) {
            f += "=" + g[m];
          }
          k = "&";
        }
        a = f + h[1] + h[2];
      }
      window.location.href = a;
      if (!Jc(a, e)) {
        window.location.reload();
      }
    }, 0);
  }
  function hd(a, b, c) {
    c.i = c.i || a;
    if (Tc(a, undefined, undefined, b, true)) {
      var d = l(id, null, false, b, c);
      var e = l(jd, null, false, b, c);
      var f = l(kd, null, false, b, c);
      c.type = "load";
      vc(a, {
        method: b.method,
        headers: b.headers,
        o: e,
        m: d,
        F: f,
        I: b.postData,
        type: c.type,
        withCredentials: b.withCredentials
      });
    }
  }
  function Oc(a, b) {
    a = qb(a);
    ld(a, b || {}, new Mc());
  }
  function ld(a, b, c) {
    c.i = c.i || a;
    if (Tc(a, undefined, undefined, b, true)) {
      var d = l(id, null, true, b, c);
      var e = l(jd, null, true, b, c);
      var f = l(kd, null, true, b, c);
      c.type = "prefetch";
      b = vc(a, {
        method: b.method,
        headers: b.headers,
        o: e,
        m: d,
        F: f,
        I: b.postData,
        type: c.type,
        current: c.current
      });
      a = N(a);
      Vc()[a] = b;
    }
  }
  function id(a, b, c, d, e) {
    if (a) {
      md(d);
    }
    if (a && w["nav-promote"] == c.i) {
      Y(b, d, e);
    } else {
      ad(d, e, b, true);
    }
  }
  function jd(a, b, c, d, e) {
    if (cd(d, e, b, true)) {
      if (e.reload) {
        if (!a) {
          return;
        }
        if (w["nav-promote"] == c.i) {
          X(d, "5");
          return;
        }
      }
      if (e.redirect) {
        nd(a, b, c, e.redirect);
      } else {
        if (a) {
          var f = l(Xc, null, b, c, d, e);
          var g = "promote " + N(c.i);
          G(g, f);
          if (w["nav-promote"] == c.i) {
            L(g, true);
            return;
          }
        }
        (a ? ic : V)(d, e, c, function () {
          ed(d, e, b, true);
        });
      }
    }
  }
  function kd(a, b, c, d, e) {
    var f = e.type == "multipart";
    if (!f) {
      if (!fd(d, e, b, true)) {
        X(d, "4");
        return;
      }
      if (e.reload) {
        if (!a) {
          return;
        }
        if (w["nav-promote"] == c.i) {
          X(d, "5");
          return;
        }
      }
      if (e.redirect) {
        nd(a, b, c, e.redirect);
        return;
      }
    }
    var g = "promote " + N(c.i);
    if (a) {
      md(d);
      if (w["nav-promote"] == c.i) {
        G(g, l(Yc, null, b, c, d, e));
        L(g, true);
        return;
      }
      mb(g);
    }
    g = a ? ic : V;
    try {
      g(d, f ? {} : e, c, function () {
        gd(d, e, b, true);
      });
    } catch (h) {
      id(a, b, c, d, h);
    }
  }
  function nd(a, b, c, d) {
    a = a ? ld : hd;
    var e = {};
    q("onError onRequest onPartProcess onPartDone onProcess onDone".split(" "), function (f) {
      e[f] = b[f];
    });
    a(d, e, c);
  }
  function ad(a, b, c, d, e) {
    a = {
      url: a,
      err: b,
      xhr: e
    };
    if ((c = Z((c || {}).onError, a)) && !d) {
      c = n("spferror", a);
    }
    return c;
  }
  function Tc(a, b, c, d, e) {
    a = {
      url: a,
      referer: b,
      previous: c
    };
    if ((d = Z((d || {}).onRequest, a)) && !e) {
      d = n("spfrequest", a);
    }
    return d;
  }
  function cd(a, b, c, d) {
    a = {
      url: a,
      part: b
    };
    if ((c = Z((c || {}).onPartProcess, a)) && !d) {
      c = n("spfpartprocess", a);
    }
    return c;
  }
  function ed(a, b, c, d) {
    a = {
      url: a,
      part: b
    };
    if (Z((c || {}).onPartDone, a) && !d) {
      n("spfpartdone", a);
    }
  }
  function fd(a, b, c, d) {
    a = {
      url: a,
      response: b
    };
    if ((c = Z((c || {}).onProcess, a)) && !d) {
      c = n("spfprocess", a);
    }
    return c;
  }
  function gd(a, b, c, d) {
    a = {
      url: a,
      response: b
    };
    if (Z((c || {}).onDone, a) && !d) {
      n("spfdone", a);
    }
  }
  function md(a) {
    a = N(a);
    var b = Vc();
    var c = b[a];
    if (c) {
      c.abort();
    }
    delete b[a];
  }
  function Uc(a) {
    var b = Vc();
    a = a && N(a);
    for (var c in b) {
      if (a != c) {
        md(c);
      }
    }
  }
  var Zc;
  var od = window.performance && (window.performance.clearResourceTimings || window.performance.webkitClearResourceTimings || window.performance.mozClearResourceTimings || window.performance.msClearResourceTimings || window.performance.oClearResourceTimings);
  Zc = od ? l(od, window.performance) : Ca;
  function Vc() {
    if ("nav-prefetches" in w) {
      return w["nav-prefetches"];
    } else {
      return v("nav-prefetches", {});
    }
  }
  function Qc() {
    v("nav-scroll-position", null);
    v("nav-scroll-url", null);
  }
  function Mc(a) {
    a = a || {};
    this.current = a.history && a.current ? a.current : window.location.href;
    this.history = !!a.history;
    this.i = a.i || "";
    this.position = a.position || null;
    this.j = a.j != undefined ? a.j : window.location.href;
    this.reverse = !!a.reverse;
    this.u = !!a.u;
    this.type = a.type || "";
  }
  ;
  function pd() {
    Ab("js");
    Ab("css");
    if (document.readyState == "complete") {
      if (document.removeEventListener) {
        document.removeEventListener("DOMContentLoaded", pd, false);
      } else if (document.detachEvent) {
        document.detachEvent("onreadystatechange", pd);
      }
    }
  }
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", pd, false);
  } else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", pd);
  }
  pd();
  var qd = {
    init: function (a) {
      var b = typeof window.history.pushState == "function" || !!eb().contentWindow.history.pushState;
      a = a || {};
      for (var c in Qa) {
        z[c] = c in a ? a[c] : Qa[c];
      }
      for (c in a) {
        if (!(c in Qa)) {
          z[c] = a[c];
        }
      }
      if (b) {
        c = ad;
        if (!w["history-init"] && window.addEventListener) {
          a = window.location.href;
          window.addEventListener("popstate", fb, false);
          v("history-init", true);
          v("history-callback", Rc);
          v("history-error-callback", c);
          v("history-listener", fb);
          v("history-url", a);
          v("history-timestamp", p());
          var d = {
            "spf-referer": document.referrer
          };
          try {
            bb(a, d);
          } catch (e) {
            if (c) {
              c(a, e);
            }
          }
        }
        if (!w["nav-init"] && document.addEventListener) {
          v("nav-init", true);
          v("nav-init-time", p());
          v("nav-counter", 0);
          document.addEventListener("click", Kc, false);
          v("nav-listener", Kc);
          if (!!z["experimental-prefetch-mousedown"] && !("ontouchstart" in window) && !(window.navigator.maxTouchPoints > 0) && !(window.navigator.msMaxTouchPoints > 0)) {
            document.addEventListener("mousedown", Nc, false);
            v("nav-mousedown-listener", Nc);
          }
          document.addEventListener("scroll", Pc, false);
          v("nav-scroll-listener", Pc);
        }
      }
      return b;
    },
    dispose: function () {
      if (typeof History != "undefined" && History.prototype.pushState) {
        Sc();
        if (w["nav-init"]) {
          if (document.removeEventListener) {
            document.removeEventListener("click", w["nav-listener"], false);
            document.removeEventListener("mousedown", w["nav-mousedown-listener"], false);
            document.removeEventListener("scroll", w["nav-scroll-listener"], false);
          }
          v("nav-listener", null);
          v("nav-mousedown-listener", null);
          v("nav-scroll-listener", null);
          v("nav-scroll-position", null);
          v("nav-scroll-url", null);
          v("nav-init", false);
          v("nav-init-time", null);
          v("nav-counter", null);
        }
        if (w["history-init"]) {
          if (window.removeEventListener) {
            window.removeEventListener("popstate", w["history-listener"], false);
          }
          v("history-init", false);
          v("history-callback", null);
          v("history-error-callback", null);
          v("history-listener", null);
          v("history-url", null);
          v("history-timestamp", 0);
        }
      }
      for (var a in z) {
        delete z[a];
      }
    },
    navigate: function (a, b) {
      if (a) {
        a = qb(a);
        if (M(a).origin == M(window.location.href).origin) {
          if (Ic()) {
            Lc(a, b || {}, new Mc());
          } else {
            X(a, "1");
          }
        } else {
          X(a, "9");
        }
      }
    },
    load: function (a, b) {
      a = qb(a);
      hd(a, b || {}, new Mc());
    },
    prefetch: Oc,
    process: function (a, b) {
      function c(f, g, h, k) {
        if (f == g && b) {
          b(k);
        }
      }
      var d = window.location.href;
      if (a.type == "multipart") {
        a = a.parts;
        var e = a.length - 1;
        q(a, function (f, g) {
          V(d, f, null, l(c, null, g, e));
        });
      } else {
        V(d, a, null, l(c, null, 0, 0));
      }
    }
  };
  var rd = {
    cache: {
      remove: Ra,
      clear: function () {
        A({});
      }
    },
    script: {
      load: Jb,
      get: Lb,
      ready: Nb,
      done: function (a) {
        Q[P("js", a)] = "";
        tb("js");
      },
      require: Ob,
      declare: function (a, b) {
        if (a) {
          for (var c in a) {
            U[c] = a[c];
          }
          if (b) {
            for (c in b) {
              Pb[c] = b[c];
            }
          }
        }
      },
      path: function (a) {
        v("rsrc-p-js", a);
      },
      unload: Kb,
      ignore: function (a, b) {
        a = r(a);
        a = P("js", a.sort().join("|"));
        hb(a, b);
      },
      unrequire: Qb,
      prefetch: Mb
    },
    style: {
      load: Ub,
      get: Vb,
      unload: function (a) {
        wb("css", a);
      },
      path: function (a) {
        v("rsrc-p-css", a);
      },
      prefetch: Wb
    }
  };
  var da = this;
  da.spf = da.spf || {};
  var sd = da.spf;
  var td;
  for (td in qd) {
    sd[td] = qd[td];
  }
  for (var ud in rd) {
    for (var vd in rd[ud]) {
      sd[ud] = sd[ud] || {};
      sd[ud][vd] = rd[ud][vd];
    }
  }
  n("spfready");
}).call(this);