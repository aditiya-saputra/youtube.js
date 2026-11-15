(function () {
  'use strict';

  var f;
  var aa = typeof Object.create == "function" ? Object.create : function (a) {
    function b() {}
    b.prototype = a;
    return new b();
  };
  var g = typeof Object.defineProperties == "function" ? Object.defineProperty : function (a, b, c) {
    if (a == Array.prototype || a == Object.prototype) {
      return a;
    }
    a[b] = c.value;
    return a;
  };
  function ba(a) {
    a = [typeof globalThis == "object" && globalThis, a, typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) {
        return c;
      }
    }
    throw Error("Cannot find global object");
  }
  var ca = ba(this);
  function h(a, b) {
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
          g(c, a, {
            configurable: true,
            writable: true,
            value: b
          });
        }
      }
    }
  }
  var l;
  if (typeof Object.setPrototypeOf == "function") {
    l = Object.setPrototypeOf;
  } else {
    var m;
    a: {
      var da = {
        a: true
      };
      var n = {};
      try {
        n.__proto__ = da;
        m = n.a;
        break a;
      } catch (a) {}
      m = false;
    }
    l = m ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) {
        throw new TypeError(a + " is not extensible");
      }
      return a;
    } : null;
  }
  var p = l;
  function ea(a) {
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
  function r() {
    var a = fa;
    var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
    if (b) {
      return b.call(a);
    }
    if (typeof a.length == "number") {
      return {
        next: ea(a)
      };
    }
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  function t(a, b) {
    var c;
    if (b && !b.done && (c = a.return)) {
      c.call(a);
    }
  }
  h("Symbol", function (a) {
    function b(k) {
      if (this instanceof b) {
        throw new TypeError("Symbol is not a constructor");
      }
      return new c(d + (k || "") + "_" + e++, k);
    }
    function c(k, q) {
      this.h = k;
      g(this, "description", {
        configurable: true,
        writable: true,
        value: q
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
  h("Symbol.dispose", function (a) {
    if (a) {
      return a;
    } else {
      return Symbol("Symbol.dispose");
    }
  }); /*
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
  var u = this || self;
  function v(a) {
    a = a.split(".");
    var b = u;
    for (var c = 0; c < a.length; c++) {
      b = b[a[c]];
      if (b == null) {
        return null;
      }
    }
    return b;
  }
  function w(a, b) {
    a = a.split(".");
    var c = u;
    for (var d; a.length && (d = a.shift());) {
      if (a.length || b === undefined) {
        if (c[d] && c[d] !== Object.prototype[d]) {
          c = c[d];
        } else {
          c = c[d] = {};
        }
      } else {
        c[d] = b;
      }
    }
  }
  ;
  function x() {
    this.B = this.B;
    this.D = this.D;
  }
  x.prototype.B = false;
  x.prototype.dispose = function () {
    if (!this.B) {
      this.B = true;
      this.I();
    }
  };
  x.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  x.prototype.I = function () {
    if (this.D) {
      while (this.D.length) {
        this.D.shift()();
      }
    }
  };
  var y = u.window;
  var z;
  var A;
  var B = (y == null ? undefined : (z = y.yt) == null ? undefined : z.config_) || (y == null ? undefined : (A = y.ytcfg) == null ? undefined : A.data_) || {};
  w("yt.config_", B);
  function C(a) {
    a = D(a);
    if (typeof a === "string" && a === "false") {
      return false;
    } else {
      return !!a;
    }
  }
  function D(a, b) {
    var c = {};
    a = ("EXPERIMENT_FLAGS" in B ? B.EXPERIMENT_FLAGS : c)[a];
    if (a !== undefined) {
      return a;
    } else {
      return b;
    }
  }
  ;
  var E = 1000 / 60;
  var ha = Number(D("web_emulated_idle_callback_delay", 300) || 0);
  var F = E - 3;
  var fa = [8, 5, 4, 3, 2, 1, 0];
  function G(a) {
    a = a === undefined ? {} : a;
    x.call(this);
    var b = this;
    this.j = [];
    this.i = {};
    this.G = this.h = 0;
    this.F = this.m = false;
    this.A = [];
    this.C = this.H = false;
    var c = r();
    var d = c.next();
    try {
      for (; !d.done; d = c.next()) {
        this.j[d.value] = [];
      }
    } finally {
      t(c, d);
    }
    this.l = 0;
    this.S = a.timeout || 1;
    this.v = F;
    this.o = 0;
    this.J = this.V.bind(this);
    this.R = this.W.bind(this);
    this.M = this.T.bind(this);
    this.N = this.U.bind(this);
    this.O = this.L.bind(this);
    this.P = function () {
      b.L(performance.now());
    };
    this.K = !!window.requestIdleCallback && !!window.cancelIdleCallback && !C("disable_scheduler_requestIdleCallback");
    if ((this.u = a.useRaf !== false && !!window.requestAnimationFrame) || C("enable_scheduler_simulate_raf")) {
      document.addEventListener("visibilitychange", this.J);
    }
  }
  G.prototype = aa(x.prototype);
  G.prototype.constructor = G;
  if (p) {
    p(G, x);
  } else {
    for (var H in x) {
      if (H != "prototype") {
        if (Object.defineProperties) {
          var I = Object.getOwnPropertyDescriptor(x, H);
          if (I) {
            Object.defineProperty(G, H, I);
          }
        } else {
          G[H] = x[H];
        }
      }
    }
  }
  function J(a, b) {
    var c = Date.now();
    K(b);
    b = Date.now() - c;
    if (!a.m) {
      a.v -= b;
    }
  }
  function L(a, b, c, d) {
    ++a.G;
    if (c === 10) {
      J(a, b);
      return a.G;
    }
    var e = a.G;
    a.i[e] = b;
    if (a.m && !d) {
      a.A.push({
        id: e,
        priority: c
      });
    } else {
      a.j[c].push(e);
      if (!a.F && !a.m) {
        if (a.h !== 0 && M(a) !== a.o) {
          N(a);
        }
        a.start();
      }
    }
    return e;
  }
  function O(a) {
    a.A.length = 0;
    for (var b = 5; b >= 0; b--) {
      a.j[b].length = 0;
    }
    a.j[8].length = 0;
    a.i = {};
    N(a);
  }
  function M(a) {
    var b = C("enable_scheduler_simulate_raf");
    if (a.j[8].length) {
      if (a.C) {
        return 4;
      }
      if (b) {
        if (!document.hidden) {
          if (a.u) {
            return 3;
          } else {
            return 5;
          }
        }
      } else if (!document.hidden && a.u) {
        return 3;
      }
    }
    for (var c = 5; c >= a.l; c--) {
      if (a.j[c].length > 0) {
        if (c > 0) {
          if (b) {
            if (document.hidden) {
              return 2;
            } else if (a.u) {
              return 3;
            } else {
              return 5;
            }
          } else if (!document.hidden && a.u) {
            return 3;
          } else {
            return 2;
          }
        } else {
          return 1;
        }
      }
    }
    return 0;
  }
  function P(a) {
    var b = v("yt.logging.errors.log");
    if (b) {
      b(a);
    }
  }
  function K(a) {
    try {
      a();
    } catch (b) {
      P(b);
    }
  }
  function Q(a) {
    var b = r();
    var c = b.next();
    try {
      for (; !c.done; c = b.next()) {
        if (a.j[c.value].length) {
          return true;
        }
      }
    } finally {
      t(b, c);
    }
    return false;
  }
  f = G.prototype;
  f.U = function (a) {
    var b = undefined;
    if (a) {
      b = a.timeRemaining();
    }
    this.H = true;
    R(this, b);
    this.H = false;
  };
  f.W = function () {
    R(this);
  };
  f.T = function () {
    S(this);
  };
  f.L = function (a) {
    this.C = true;
    var b = M(this);
    if (b === 4 && b !== this.o) {
      N(this);
      this.start();
    }
    R(this, undefined, a);
    this.C = false;
  };
  f.V = function () {
    if (!document.hidden) {
      S(this);
    }
    if (this.h) {
      N(this);
      this.start();
    }
  };
  function S(a) {
    N(a);
    a.m = true;
    var b = Date.now();
    for (var c = a.j[8]; c.length;) {
      var d = c.shift();
      var e = a.i[d];
      delete a.i[d];
      if (e) {
        K(e);
      }
    }
    T(a);
    a.m = false;
    if (Q(a)) {
      a.start();
    }
    a.v -= Date.now() - b;
  }
  function T(a) {
    for (var b = 0, c = a.A.length; b < c; b++) {
      var d = a.A[b];
      a.j[d.priority].push(d.id);
    }
    a.A.length = 0;
  }
  function R(a, b, c) {
    if (!a.C || a.o !== 4 || !a.h) {
      N(a);
    }
    a.m = true;
    b = Date.now() + (b || a.v);
    for (var d = a.j[5]; d.length;) {
      var e = d.shift();
      var k = a.i[e];
      delete a.i[e];
      if (k) {
        try {
          k(c);
        } catch (na) {
          P(na);
        }
      }
    }
    for (d = a.j[4]; d.length;) {
      c = d.shift();
      e = a.i[c];
      delete a.i[c];
      if (e) {
        K(e);
      }
    }
    d = a.H ? 0 : 1;
    d = a.l > d ? a.l : d;
    if (!(Date.now() >= b)) {
      do {
        a: {
          e = a;
          k = d;
          for (var q = 3; q >= k; q--) {
            for (c = e.j[q]; c.length;) {
              var Y = c.shift();
              var Z = e.i[Y];
              delete e.i[Y];
              if (Z) {
                c = Z;
                break a;
              }
            }
          }
          c = null;
        }
        if (c) {
          K(c);
        }
      } while (c && Date.now() < b);
    }
    a.m = false;
    T(a);
    a.v = F;
    if (Q(a)) {
      a.start();
    }
  }
  f.start = function () {
    this.F = false;
    if (this.h === 0) {
      this.o = M(this);
      switch (this.o) {
        case 1:
          var a = this.N;
          this.h = this.K ? window.requestIdleCallback(a, {
            timeout: 3000
          }) : window.setTimeout(a, ha);
          break;
        case 2:
          this.h = window.setTimeout(this.R, this.S);
          break;
        case 3:
          this.h = window.requestAnimationFrame(this.O);
          break;
        case 4:
          this.h = window.setTimeout(this.M, 0);
          break;
        case 5:
          this.h = window.setTimeout(this.P, E);
      }
    }
  };
  function N(a) {
    if (a.h) {
      switch (a.o) {
        case 1:
          var b = a.h;
          if (a.K) {
            window.cancelIdleCallback(b);
          } else {
            window.clearTimeout(b);
          }
          break;
        case 5:
        case 2:
        case 4:
          window.clearTimeout(a.h);
          break;
        case 3:
          window.cancelAnimationFrame(a.h);
      }
      a.h = 0;
    }
  }
  f.I = function () {
    O(this);
    N(this);
    if (this.u || C("enable_scheduler_simulate_raf")) {
      document.removeEventListener("visibilitychange", this.J);
    }
    x.prototype.I.call(this);
  };
  var U = v("yt.scheduler.instance.timerIdMap_") || {};
  var ia = Number(D("kevlar_tuner_scheduler_soft_state_timer_ms", 800) || 0);
  var V = 0;
  var W = 0;
  function X() {
    var a = v("ytglobal.schedulerInstanceInstance_");
    if (!a || a.B) {
      a = new G(("scheduler" in B ? B.scheduler : undefined) || {});
      w("ytglobal.schedulerInstanceInstance_", a);
    }
    return a;
  }
  function ja() {
    ka();
    var a = v("ytglobal.schedulerInstanceInstance_");
    if (a) {
      if (a && typeof a.dispose == "function") {
        a.dispose();
      }
      w("ytglobal.schedulerInstanceInstance_", null);
    }
  }
  function ka() {
    O(X());
    for (var a in U) {
      if (U.hasOwnProperty(a)) {
        delete U[Number(a)];
      }
    }
  }
  function la(a, b, c) {
    if (!c) {
      c = c === undefined;
      return -L(X(), a, b, c);
    }
    var d = window.setTimeout(function () {
      var e = L(X(), a, b);
      U[d] = e;
    }, c);
    return d;
  }
  function ma(a) {
    var b = X();
    J(b, a);
  }
  function oa(a) {
    var b = X();
    if (a < 0) {
      delete b.i[-a];
    } else {
      var c = U[a];
      if (c) {
        delete b.i[c];
        delete U[a];
      } else {
        window.clearTimeout(a);
      }
    }
  }
  function pa() {
    qa();
  }
  function qa() {
    window.clearTimeout(V);
    X().start();
  }
  function ra() {
    var a = X();
    N(a);
    a.F = true;
    window.clearTimeout(V);
    V = window.setTimeout(pa, ia);
  }
  function sa() {
    window.clearTimeout(W);
    W = window.setTimeout(function () {
      ta(0);
    }, ia);
  }
  function ta(a) {
    sa();
    var b = X();
    b.l = a;
    b.start();
  }
  function ua(a) {
    sa();
    var b = X();
    if (b.l > a) {
      b.l = a;
      b.start();
    }
  }
  function va() {
    window.clearTimeout(W);
    var a = X();
    a.l = 0;
    a.start();
  }
  ;
  if (!v("yt.scheduler.initialized")) {
    w("yt.scheduler.instance.dispose", ja);
    w("yt.scheduler.instance.addJob", la);
    w("yt.scheduler.instance.addImmediateJob", ma);
    w("yt.scheduler.instance.cancelJob", oa);
    w("yt.scheduler.instance.cancelAllJobs", ka);
    w("yt.scheduler.instance.start", qa);
    w("yt.scheduler.instance.pause", ra);
    w("yt.scheduler.instance.setPriorityThreshold", ta);
    w("yt.scheduler.instance.enablePriorityThreshold", ua);
    w("yt.scheduler.instance.clearPriorityThreshold", va);
    w("yt.scheduler.initialized", true);
  }
}).call(this);