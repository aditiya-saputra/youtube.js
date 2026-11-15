(function () {
  'use strict';

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
    a = [typeof globalThis == "object" && globalThis, a, typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) {
        return c;
      }
    }
    throw Error("Cannot find global object");
  }
  var h = ca(this);
  function p(a, b) {
    if (b) {
      a: {
        var c = h;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var l = a[d];
          if (!(l in c)) {
            break a;
          }
          c = c[l];
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
  var da;
  if (typeof Object.setPrototypeOf == "function") {
    da = Object.setPrototypeOf;
  } else {
    var ea;
    a: {
      var ha = {
        a: true
      };
      var ia = {};
      try {
        ia.__proto__ = ha;
        ea = ia.a;
        break a;
      } catch (a) {}
      ea = false;
    }
    da = ea ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) {
        throw new TypeError(a + " is not extensible");
      }
      return a;
    } : null;
  }
  var ja = da;
  function ka(a, b) {
    a.prototype = aa(b.prototype);
    a.prototype.constructor = a;
    if (ja) {
      ja(a, b);
    } else {
      for (var c in b) {
        if (c != "prototype") {
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            if (d) {
              Object.defineProperty(a, c, d);
            }
          } else {
            a[c] = b[c];
          }
        }
      }
    }
    a.Ha = b.prototype;
  }
  function la(a) {
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
  function q(a) {
    var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
    if (b) {
      return b.call(a);
    }
    if (typeof a.length == "number") {
      return {
        next: la(a)
      };
    }
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  function ma(a) {
    if (!(a instanceof Array)) {
      a = q(a);
      for (var b, c = []; !(b = a.next()).done;) {
        c.push(b.value);
      }
      a = c;
    }
    return a;
  }
  function na(a, b) {
    var c;
    if (b && !b.done && (c = a.return)) {
      c.call(a);
    }
  }
  function oa(a) {
    if (!(a instanceof Object)) {
      throw new TypeError("Iterator result " + a + " is not an object");
    }
  }
  function r() {
    this.A = false;
    this.j = null;
    this.o = undefined;
    this.h = 1;
    this.m = this.u = 0;
    this.C = this.i = null;
  }
  function pa(a) {
    if (a.A) {
      throw new TypeError("Generator is already running");
    }
    a.A = true;
  }
  r.prototype.B = function (a) {
    this.o = a;
  };
  function t(a, b) {
    a.i = {
      M: b,
      O: true
    };
    a.h = a.u || a.m;
  }
  r.prototype.getNextAddressJsc = function () {
    return this.h;
  };
  r.prototype.getYieldResultJsc = function () {
    return this.o;
  };
  r.prototype.return = function (a) {
    this.i = {
      return: a
    };
    this.h = this.m;
  };
  r.prototype.return = r.prototype.return;
  r.prototype.K = function (a) {
    this.i = {
      D: a
    };
    if (this.m < a) {
      this.h = a;
      this.i = null;
    } else {
      this.h = this.m;
    }
  };
  r.prototype.jumpThroughFinallyBlocks = r.prototype.K;
  r.prototype.v = function (a, b) {
    this.h = b;
    return {
      value: a
    };
  };
  r.prototype.yield = r.prototype.v;
  r.prototype.aa = function (a, b) {
    a = q(a);
    var c = a.next();
    oa(c);
    if (c.done) {
      this.o = c.value;
      this.h = b;
    } else {
      this.j = a;
      return this.v(c.value, b);
    }
  };
  r.prototype.yieldAll = r.prototype.aa;
  r.prototype.D = function (a) {
    this.h = a;
  };
  r.prototype.jumpTo = r.prototype.D;
  r.prototype.L = function () {
    this.h = 0;
  };
  r.prototype.jumpToEnd = r.prototype.L;
  r.prototype.Y = function (a, b) {
    this.u = a;
    if (b != undefined) {
      this.m = b;
    }
  };
  r.prototype.setCatchFinallyBlocks = r.prototype.Y;
  r.prototype.Z = function (a) {
    this.u = 0;
    this.m = a || 0;
  };
  r.prototype.setFinallyBlock = r.prototype.Z;
  r.prototype.X = function (a, b) {
    this.h = a;
    this.u = b || 0;
  };
  r.prototype.leaveTryBlock = r.prototype.X;
  r.prototype.H = function (a) {
    this.u = a || 0;
    a = this.i.M;
    this.i = null;
    return a;
  };
  r.prototype.enterCatchBlock = r.prototype.H;
  r.prototype.I = function (a, b, c) {
    if (c) {
      this.C[c] = this.i;
    } else {
      this.C = [this.i];
    }
    this.u = a || 0;
    this.m = b || 0;
    this.i = null;
  };
  r.prototype.enterFinallyBlock = r.prototype.I;
  r.prototype.W = function (a, b) {
    b = this.C.splice(b || 0)[0];
    if (b = this.i = this.i || b) {
      if (b.O) {
        this.h = this.u || this.m;
      } else if (b.D != undefined && this.m < b.D) {
        this.h = b.D;
        this.i = null;
      } else {
        this.h = this.m;
      }
    } else {
      this.h = a;
    }
  };
  r.prototype.leaveFinallyBlock = r.prototype.W;
  r.prototype.J = function (a) {
    return new qa(a);
  };
  r.prototype.forIn = r.prototype.J;
  function qa(a) {
    this.j = a;
    this.h = [];
    for (var b in a) {
      this.h.push(b);
    }
    this.h.reverse();
  }
  qa.prototype.i = function () {
    while (this.h.length > 0) {
      var a = this.h.pop();
      if (a in this.j) {
        return a;
      }
    }
    return null;
  };
  qa.prototype.getNext = qa.prototype.i;
  function ra(a) {
    this.h = new r();
    this.i = a;
  }
  function sa(a, b) {
    pa(a.h);
    var c = a.h.j;
    if (c) {
      return ta(a, "return" in c ? c.return : function (d) {
        return {
          value: d,
          done: true
        };
      }, b, a.h.return);
    }
    a.h.return(b);
    return u(a);
  }
  function ta(a, b, c, d) {
    try {
      var l = b.call(a.h.j, c);
      oa(l);
      if (!l.done) {
        a.h.A = false;
        return l;
      }
      var m = l.value;
    } catch (g) {
      a.h.j = null;
      t(a.h, g);
      return u(a);
    }
    a.h.j = null;
    d.call(a.h, m);
    return u(a);
  }
  function u(a) {
    while (a.h.h) {
      try {
        var b = a.i(a.h);
        if (b) {
          a.h.A = false;
          return {
            value: b.value,
            done: false
          };
        }
      } catch (c) {
        a.h.o = undefined;
        t(a.h, c);
      }
    }
    a.h.A = false;
    if (a.h.i) {
      b = a.h.i;
      a.h.i = null;
      if (b.O) {
        throw b.M;
      }
      return {
        value: b.return,
        done: true
      };
    }
    return {
      value: undefined,
      done: true
    };
  }
  function ua(a) {
    this.next = function (b) {
      pa(a.h);
      if (a.h.j) {
        b = ta(a, a.h.j.next, b, a.h.B);
      } else {
        a.h.B(b);
        b = u(a);
      }
      return b;
    };
    this.throw = function (b) {
      pa(a.h);
      if (a.h.j) {
        var c = a.h.j.throw;
        if (c) {
          var d = ta(a, c, b, a.h.B);
        } else {
          b = a.h.j;
          a.h.j = null;
          try {
            if (b.return) {
              d = b.return();
              oa(d);
            }
            t(a.h, new TypeError("The iterator does not provide a 'throw' method."));
          } catch (l) {
            t(a.h, l);
          }
          d = u(a);
        }
      } else {
        t(a.h, b);
        d = u(a);
      }
      return d;
    };
    this.return = function (b) {
      return sa(a, b);
    };
    this[Symbol.iterator] = function () {
      return this;
    };
  }
  function va(a) {
    function b(d) {
      return a.next(d);
    }
    function c(d) {
      return a.throw(d);
    }
    return new Promise(function (d, l) {
      function m(g) {
        if (g.done) {
          d(g.value);
        } else {
          Promise.resolve(g.value).then(b, c).then(m, l);
        }
      }
      m(a.next());
    });
  }
  function wa(a) {
    return va(new ua(new ra(a)));
  }
  function v() {
    var a = Number(this);
    var b = [];
    for (var c = a; c < arguments.length; c++) {
      b[c - a] = arguments[c];
    }
    return b;
  }
  p("globalThis", function (a) {
    return a || h;
  });
  p("Symbol", function (a) {
    function b(m) {
      if (this instanceof b) {
        throw new TypeError("Symbol is not a constructor");
      }
      return new c(d + (m || "") + "_" + l++, m);
    }
    function c(m, g) {
      this.h = m;
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
    var l = 0;
    return b;
  });
  p("Symbol.iterator", function (a) {
    if (a) {
      return a;
    }
    a = Symbol("Symbol.iterator");
    ba(Array.prototype, a, {
      configurable: true,
      writable: true,
      value: function () {
        return xa(la(this));
      }
    });
    return a;
  });
  function xa(a) {
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
  p("Promise", function (a) {
    function b(g) {
      this.i = 0;
      this.j = undefined;
      this.h = [];
      this.v = false;
      var e = this.m();
      try {
        g(e.resolve, e.reject);
      } catch (f) {
        e.reject(f);
      }
    }
    function c() {
      this.h = null;
    }
    function d(g) {
      if (g instanceof b) {
        return g;
      } else {
        return new b(function (e) {
          e(g);
        });
      }
    }
    if (a) {
      return a;
    }
    c.prototype.i = function (g) {
      if (this.h == null) {
        this.h = [];
        var e = this;
        this.j(function () {
          e.o();
        });
      }
      this.h.push(g);
    };
    var l = h.setTimeout;
    c.prototype.j = function (g) {
      l(g, 0);
    };
    c.prototype.o = function () {
      while (this.h && this.h.length) {
        var g = this.h;
        this.h = [];
        for (var e = 0; e < g.length; ++e) {
          var f = g[e];
          g[e] = null;
          try {
            f();
          } catch (k) {
            this.m(k);
          }
        }
      }
      this.h = null;
    };
    c.prototype.m = function (g) {
      this.j(function () {
        throw g;
      });
    };
    b.prototype.m = function () {
      function g(k) {
        return function (n) {
          if (!f) {
            f = true;
            k.call(e, n);
          }
        };
      }
      var e = this;
      var f = false;
      return {
        resolve: g(this.I),
        reject: g(this.o)
      };
    };
    b.prototype.I = function (g) {
      if (g === this) {
        this.o(new TypeError("A Promise cannot resolve to itself"));
      } else if (g instanceof b) {
        this.K(g);
      } else {
        a: switch (typeof g) {
          case "object":
            var e = g != null;
            break a;
          case "function":
            e = true;
            break a;
          default:
            e = false;
        }
        if (e) {
          this.H(g);
        } else {
          this.u(g);
        }
      }
    };
    b.prototype.H = function (g) {
      var e = undefined;
      try {
        e = g.then;
      } catch (f) {
        this.o(f);
        return;
      }
      if (typeof e == "function") {
        this.L(e, g);
      } else {
        this.u(g);
      }
    };
    b.prototype.o = function (g) {
      this.A(2, g);
    };
    b.prototype.u = function (g) {
      this.A(1, g);
    };
    b.prototype.A = function (g, e) {
      if (this.i != 0) {
        throw Error("Cannot settle(" + g + ", " + e + "): Promise already settled in state" + this.i);
      }
      this.i = g;
      this.j = e;
      if (this.i === 2) {
        this.J();
      }
      this.B();
    };
    b.prototype.J = function () {
      var g = this;
      l(function () {
        if (g.C()) {
          var e = h.console;
          if (typeof e !== "undefined") {
            e.error(g.j);
          }
        }
      }, 1);
    };
    b.prototype.C = function () {
      if (this.v) {
        return false;
      }
      var g = h.CustomEvent;
      var e = h.Event;
      var f = h.dispatchEvent;
      if (typeof f === "undefined") {
        return true;
      }
      if (typeof g === "function") {
        g = new g("unhandledrejection", {
          cancelable: true
        });
      } else if (typeof e === "function") {
        g = new e("unhandledrejection", {
          cancelable: true
        });
      } else {
        g = h.document.createEvent("CustomEvent");
        g.initCustomEvent("unhandledrejection", false, true, g);
      }
      g.promise = this;
      g.reason = this.j;
      return f(g);
    };
    b.prototype.B = function () {
      if (this.h != null) {
        for (var g = 0; g < this.h.length; ++g) {
          m.i(this.h[g]);
        }
        this.h = null;
      }
    };
    var m = new c();
    b.prototype.K = function (g) {
      var e = this.m();
      g.F(e.resolve, e.reject);
    };
    b.prototype.L = function (g, e) {
      var f = this.m();
      try {
        g.call(e, f.resolve, f.reject);
      } catch (k) {
        f.reject(k);
      }
    };
    b.prototype.then = function (g, e) {
      function f(w, z) {
        if (typeof w == "function") {
          return function (W) {
            try {
              k(w(W));
            } catch (X) {
              n(X);
            }
          };
        } else {
          return z;
        }
      }
      var k;
      var n;
      var x = new b(function (w, z) {
        k = w;
        n = z;
      });
      this.F(f(g, k), f(e, n));
      return x;
    };
    b.prototype.catch = function (g) {
      return this.then(undefined, g);
    };
    b.prototype.F = function (g, e) {
      function f() {
        switch (k.i) {
          case 1:
            g(k.j);
            break;
          case 2:
            e(k.j);
            break;
          default:
            throw Error("Unexpected state: " + k.i);
        }
      }
      var k = this;
      if (this.h == null) {
        m.i(f);
      } else {
        this.h.push(f);
      }
      this.v = true;
    };
    b.resolve = d;
    b.reject = function (g) {
      return new b(function (e, f) {
        f(g);
      });
    };
    b.race = function (g) {
      return new b(function (e, f) {
        for (var k = q(g), n = k.next(); !n.done; n = k.next()) {
          d(n.value).F(e, f);
        }
      });
    };
    b.all = function (g) {
      var e = q(g);
      var f = e.next();
      if (f.done) {
        return d([]);
      } else {
        return new b(function (k, n) {
          function x(W) {
            return function (X) {
              w[W] = X;
              z--;
              if (z == 0) {
                k(w);
              }
            };
          }
          var w = [];
          var z = 0;
          do {
            w.push(undefined);
            z++;
            d(f.value).F(x(w.length - 1), n);
            f = e.next();
          } while (!f.done);
        });
      }
    };
    return b;
  });
  function y(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  var ya = typeof Object.assign == "function" ? Object.assign : function (a, b) {
    if (a == null) {
      throw new TypeError("No nullish arg");
    }
    a = Object(a);
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (d) {
        for (var l in d) {
          if (y(d, l)) {
            a[l] = d[l];
          }
        }
      }
    }
    return a;
  };
  p("Object.assign", function (a) {
    return a || ya;
  });
  p("WeakMap", function (a) {
    function b(f) {
      this.h = (e += Math.random() + 1).toString();
      if (f) {
        f = q(f);
        for (var k; !(k = f.next()).done;) {
          k = k.value;
          this.set(k[0], k[1]);
        }
      }
    }
    function c() {}
    function d(f) {
      var k = typeof f;
      return k === "object" && f !== null || k === "function";
    }
    function l(f) {
      if (!y(f, g)) {
        var k = new c();
        ba(f, g, {
          value: k
        });
      }
    }
    function m(f) {
      var k = Object[f];
      if (k) {
        Object[f] = function (n) {
          if (n instanceof c) {
            return n;
          }
          if (Object.isExtensible(n)) {
            l(n);
          }
          return k(n);
        };
      }
    }
    if (function () {
      if (!a || !Object.seal) {
        return false;
      }
      try {
        var f = Object.seal({});
        var k = Object.seal({});
        var n = new a([[f, 2], [k, 3]]);
        if (n.get(f) != 2 || n.get(k) != 3) {
          return false;
        }
        n.delete(f);
        n.set(k, 4);
        return !n.has(f) && n.get(k) == 4;
      } catch (x) {
        return false;
      }
    }()) {
      return a;
    }
    var g = "$jscomp_hidden_" + Math.random();
    m("freeze");
    m("preventExtensions");
    m("seal");
    var e = 0;
    b.prototype.set = function (f, k) {
      if (!d(f)) {
        throw Error("Invalid WeakMap key");
      }
      l(f);
      if (!y(f, g)) {
        throw Error("WeakMap key fail: " + f);
      }
      f[g][this.h] = k;
      return this;
    };
    b.prototype.get = function (f) {
      if (d(f) && y(f, g)) {
        return f[g][this.h];
      } else {
        return undefined;
      }
    };
    b.prototype.has = function (f) {
      return d(f) && y(f, g) && y(f[g], this.h);
    };
    b.prototype.delete = function (f) {
      if (d(f) && y(f, g) && y(f[g], this.h)) {
        return delete f[g][this.h];
      } else {
        return false;
      }
    };
    return b;
  });
  p("Map", function (a) {
    function b() {
      var e = {};
      return e.previous = e.next = e.head = e;
    }
    function c(e, f) {
      var k = e[1];
      return xa(function () {
        if (k) {
          while (k.head != e[1]) {
            k = k.previous;
          }
          while (k.next != k.head) {
            k = k.next;
            return {
              done: false,
              value: f(k)
            };
          }
          k = null;
        }
        return {
          done: true,
          value: undefined
        };
      });
    }
    function d(e, f) {
      var k = f && typeof f;
      if (k == "object" || k == "function") {
        if (m.has(f)) {
          k = m.get(f);
        } else {
          k = "" + ++g;
          m.set(f, k);
        }
      } else {
        k = "p_" + f;
      }
      var n = e[0][k];
      if (n && y(e[0], k)) {
        for (e = 0; e < n.length; e++) {
          var x = n[e];
          if (f !== f && x.key !== x.key || f === x.key) {
            return {
              id: k,
              list: n,
              index: e,
              entry: x
            };
          }
        }
      }
      return {
        id: k,
        list: n,
        index: -1,
        entry: undefined
      };
    }
    function l(e) {
      this[0] = {};
      this[1] = b();
      this.size = 0;
      if (e) {
        e = q(e);
        for (var f; !(f = e.next()).done;) {
          f = f.value;
          this.set(f[0], f[1]);
        }
      }
    }
    if (function () {
      if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") {
        return false;
      }
      try {
        var e = Object.seal({
          x: 4
        });
        var f = new a(q([[e, "s"]]));
        if (f.get(e) != "s" || f.size != 1 || f.get({
          x: 4
        }) || f.set({
          x: 4
        }, "t") != f || f.size != 2) {
          return false;
        }
        var k = f.entries();
        var n = k.next();
        if (n.done || n.value[0] != e || n.value[1] != "s") {
          return false;
        }
        n = k.next();
        return !n.done && n.value[0].x == 4 && n.value[1] == "t" && !!k.next().done;
      } catch (x) {
        return false;
      }
    }()) {
      return a;
    }
    var m = new WeakMap();
    l.prototype.set = function (e, f) {
      e = e === 0 ? 0 : e;
      var k = d(this, e);
      k.list ||= this[0][k.id] = [];
      if (k.entry) {
        k.entry.value = f;
      } else {
        k.entry = {
          next: this[1],
          previous: this[1].previous,
          head: this[1],
          key: e,
          value: f
        };
        k.list.push(k.entry);
        this[1].previous.next = k.entry;
        this[1].previous = k.entry;
        this.size++;
      }
      return this;
    };
    l.prototype.delete = function (e) {
      e = d(this, e);
      if (e.entry && e.list) {
        e.list.splice(e.index, 1);
        if (!e.list.length) {
          delete this[0][e.id];
        }
        e.entry.previous.next = e.entry.next;
        e.entry.next.previous = e.entry.previous;
        e.entry.head = null;
        this.size--;
        return true;
      } else {
        return false;
      }
    };
    l.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].previous = b();
      this.size = 0;
    };
    l.prototype.has = function (e) {
      return !!d(this, e).entry;
    };
    l.prototype.get = function (e) {
      return (e = d(this, e).entry) && e.value;
    };
    l.prototype.entries = function () {
      return c(this, function (e) {
        return [e.key, e.value];
      });
    };
    l.prototype.keys = function () {
      return c(this, function (e) {
        return e.key;
      });
    };
    l.prototype.values = function () {
      return c(this, function (e) {
        return e.value;
      });
    };
    l.prototype.forEach = function (e, f) {
      for (var k = this.entries(), n; !(n = k.next()).done;) {
        n = n.value;
        e.call(f, n[1], n[0], this);
      }
    };
    l.prototype[Symbol.iterator] = l.prototype.entries;
    var g = 0;
    return l;
  });
  p("Set", function (a) {
    function b(c) {
      this.h = new Map();
      if (c) {
        c = q(c);
        for (var d; !(d = c.next()).done;) {
          this.add(d.value);
        }
      }
      this.size = this.h.size;
    }
    if (function () {
      if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") {
        return false;
      }
      try {
        var c = Object.seal({
          x: 4
        });
        var d = new a(q([c]));
        if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
          x: 4
        }) != d || d.size != 2) {
          return false;
        }
        var l = d.entries();
        var m = l.next();
        if (m.done || m.value[0] != c || m.value[1] != c) {
          return false;
        }
        m = l.next();
        if (m.done || m.value[0] == c || m.value[0].x != 4 || m.value[1] != m.value[0]) {
          return false;
        } else {
          return l.next().done;
        }
      } catch (g) {
        return false;
      }
    }()) {
      return a;
    }
    b.prototype.add = function (c) {
      c = c === 0 ? 0 : c;
      this.h.set(c, c);
      this.size = this.h.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.h.delete(c);
      this.size = this.h.size;
      return c;
    };
    b.prototype.clear = function () {
      this.h.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.h.has(c);
    };
    b.prototype.entries = function () {
      return this.h.entries();
    };
    b.prototype.values = function () {
      return this.h.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var l = this;
      this.h.forEach(function (m) {
        return c.call(d, m, m, l);
      });
    };
    return b;
  });
  function za(a, b) {
    if (a instanceof String) {
      a += "";
    }
    var c = 0;
    var d = false;
    return xa(function () {
      if (!d && c < a.length) {
        var l = c++;
        return {
          value: b(l, a[l]),
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
  p("Array.prototype.entries", function (a) {
    if (a) {
      return a;
    } else {
      return function () {
        return za(this, function (b, c) {
          return [b, c];
        });
      };
    }
  });
  p("Array.prototype.keys", function (a) {
    if (a) {
      return a;
    } else {
      return function () {
        return za(this, function (b) {
          return b;
        });
      };
    }
  });
  p("Object.entries", function (a) {
    if (a) {
      return a;
    } else {
      return function (b) {
        var c = [];
        var d;
        for (d in b) {
          if (y(b, d)) {
            c.push([d, b[d]]);
          }
        }
        return c;
      };
    }
  }); /*
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
  var Aa = this || self;
  function A(a, b) {
    a = a.split(".");
    var c = Aa;
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
  function Ba(a) {
    throw Error("unexpected value " + a + "!");
  }
  ; /*
     Copyright Google LLC
    SPDX-License-Identifier: Apache-2.0
    */
  var B = {};
  var C = globalThis.trustedTypes;
  var Ca = C;
  var Da;
  function Ea() {
    var a = null;
    if (!Ca) {
      return a;
    }
    try {
      function b(c) {
        return c;
      }
      a = Ca.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b
      });
    } catch (c) {}
    return a;
  }
  function Fa() {
    if (Da === undefined) {
      Da = Ea();
    }
    return Da;
  }
  ;
  function D(a, b) {
    this.h = b;
  }
  D.prototype.toString = function () {
    return this.h + "";
  };
  function E(a) {
    var b = Fa();
    a = b ? b.createScriptURL(a) : a;
    return new D(B, a);
  }
  function Ga(a) {
    return a instanceof D;
  }
  function F(a) {
    if (Ga(a)) {
      return a.h;
    }
    throw Error("");
  }
  ;
  function G(a, b) {
    this.h = b;
  }
  G.prototype.toString = function () {
    return this.h;
  };
  function H(a) {
    return new G(B, a);
  }
  var Ha = H("about:blank");
  var Ia = H("about:invalid#zClosurez");
  function Ja(a) {
    return a instanceof G;
  }
  function Ka(a) {
    if (Ja(a)) {
      return a.h;
    }
    throw Error("");
  }
  ;
  function I(a) {
    this.fa = a;
  }
  function J(a) {
    return new I(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var K = {
    ya: J("tel"),
    ha: new I(function (a) {
      return /^callto:\+?\d*$/i.test(a);
    }),
    xa: new I(function (a) {
      return a.indexOf("ssh://") === 0;
    }),
    ua: J("rtsp"),
    S: J("data"),
    U: J("http"),
    V: J("https"),
    EXTENSION: new I(function (a) {
      return a.indexOf("chrome-extension://") === 0 || a.indexOf("moz-extension://") === 0 || a.indexOf("ms-browser-extension://") === 0 || a.indexOf("safari-web-extension://") === 0;
    }),
    T: J("ftp"),
    ca: new I(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
    ba: J("mailto"),
    oa: J("intent"),
    ta: J("market"),
    pa: J("itms"),
    qa: J("itms-appss"),
    ra: J("itms-services"),
    ka: J("fb-messenger"),
    Aa: J("whatsapp"),
    va: new I(function (a) {
      return a.indexOf("sip:") === 0 || a.indexOf("sips:") === 0;
    }),
    wa: J("sms"),
    za: J("vnd.youtube"),
    ma: J("googlehome"),
    na: J("googlehomesdk"),
    sa: J("line")
  };
  var La = [K.S, K.U, K.V, K.ba, K.T, K.ca];
  function Ma(a, b) {
    b = b === undefined ? La : b;
    if (Ja(a)) {
      return a;
    }
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof I && d.fa(a)) {
        return H(a);
      }
    }
  }
  function Na(a) {
    var b = window;
    if (typeof MediaSource !== "undefined" && a instanceof MediaSource || typeof b.ManagedMediaSource !== "undefined" && a instanceof b.ManagedMediaSource) {
      return H(URL.createObjectURL(a));
    }
    b = a.type;
    if (b.toLowerCase() === "application/octet-stream") {
      b = true;
    } else {
      b = b.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
      b = (b == null ? undefined : b.length) === 2 && (/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif|x-ms-bmp)$/i.test(b[1]) || /^video\/(?:3gpp|avi|mpeg|mpg|mp4|ogg|webm|x-flv|matroska|x-matroska|quicktime|x-ms-wmv)$/i.test(b[1]) || /^audio\/(?:3gpp2|3gpp|aac|amr|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|matroska|x-matroska|x-wav|wav|webm)$/i.test(b[1]) || /^font\/[\w-]+$/i.test(b[1]));
    }
    if (!b) {
      throw Error("");
    }
    return H(URL.createObjectURL(a));
  }
  function Oa(a) {
    try {
      var b = new URL(a);
    } catch (c) {
      return "https:";
    }
    return b.protocol;
  }
  var Pa = ["data:", "http:", "https:", "mailto:", "ftp:"];
  var Qa = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function Ra(a) {
    var b = !Qa.test(a);
    if (b) {
      Sa(a);
    }
    if (!b) {
      return a;
    }
  }
  function L(a) {
    if (a instanceof G) {
      return Ka(a);
    } else {
      return Ra(a);
    }
  }
  var Ta = [];
  function Sa() {}
  ;
  function Ua(a, b) {
    b = L(b);
    if (b !== undefined) {
      a.href = b;
    }
  }
  ;
  function Va(a, b) {
    b = L(b);
    if (b !== undefined) {
      a.href = b;
    }
  }
  ;
  function Wa(a, b) {
    a.href = F(b);
  }
  ;
  function Xa(a, b) {
    b = L(b);
    if (b !== undefined) {
      a.formAction = b;
    }
  }
  ;
  function Ya(a, b) {
    a.src = F(b);
  }
  ;
  function Za(a, b) {
    b = L(b);
    if (b !== undefined) {
      a.action = b;
    }
  }
  ;
  function M(a) {
    return {
      valueOf: a
    }.valueOf();
  }
  ;
  function N(a, b) {
    this.h = b;
  }
  N.prototype.toString = function () {
    return this.h + "";
  };
  function O(a) {
    var b = Fa();
    a = b ? b.createHTML(a) : a;
    return new N(B, a);
  }
  var $a = M(function () {
    return new N(B, C ? C.emptyHTML : "");
  });
  function ab(a) {
    return a instanceof N;
  }
  function P(a) {
    if (ab(a)) {
      return a.h;
    }
    throw Error("");
  }
  ;
  function bb(a, b) {
    a.src = F(b).toString();
  }
  function cb(a, b) {
    a.srcdoc = P(b);
  }
  var db = {
    la: 0,
    ia: 1,
    ja: 2,
    0: "FORMATTED_HTML_CONTENT",
    1: "EMBEDDED_INTERNAL_CONTENT",
    2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
  };
  function Q(a, b) {
    a.setAttribute("sandbox", "");
    for (var c = 0; c < b.length; c++) {
      if (!a.sandbox.supports || !!a.sandbox.supports(b[c])) {
        a.sandbox.add(b[c]);
      }
    }
  }
  function R(a, b) {
    b = Error.call(this, a + " cannot be used with intent " + db[b]);
    this.message = b.message;
    if ("stack" in b) {
      this.stack = b.stack;
    }
    this.type = a;
    this.name = "TypeCannotBeUsedWithIframeIntentError";
  }
  ka(R, Error);
  function eb(a, b) {
    b = L(b);
    if (b !== undefined) {
      a.formAction = b;
    }
  }
  ;
  function fb(a, b) {
    a.data = F(b);
  }
  ;
  function gb(a) {
    return hb("script", a);
  }
  function hb(a, b) {
    b = b === undefined ? document : b;
    var c;
    var d;
    b = (d = (c = b).querySelector) == null ? undefined : d.call(c, a + "[nonce]");
    if (b == null) {
      return "";
    } else {
      return b.nonce || b.getAttribute("nonce") || "";
    }
  }
  ;
  function ib(a, b) {
    this.h = b;
  }
  ib.prototype.toString = function () {
    return this.h + "";
  };
  function S(a) {
    var b = Fa();
    a = b ? b.createScript(a) : a;
    return new ib(B, a);
  }
  var jb = M(function () {
    return new ib(B, C ? C.emptyScript : "");
  });
  function kb(a) {
    return a instanceof ib;
  }
  function T(a) {
    if (kb(a)) {
      return a.h;
    }
    throw Error("");
  }
  ;
  function lb(a) {
    var b = gb(a.ownerDocument);
    if (b) {
      a.setAttribute("nonce", b);
    }
  }
  function mb(a, b, c) {
    a.src = F(b);
    if (!(c == null ? 0 : c.ga)) {
      lb(a);
    }
  }
  ;
  function nb(a, b) {
    this.h = b;
  }
  nb.prototype.toString = function () {
    return this.h;
  };
  function ob(a) {
    if (a instanceof nb) {
      return a.h;
    }
    throw Error("");
  }
  ;
  function pb(a, b, c, d) {
    if (a.length === 0) {
      throw Error("");
    }
    a = a.map(function (m) {
      return ob(m);
    });
    var l = c.toLowerCase();
    if (a.every(function (m) {
      return l.indexOf(m) !== 0;
    })) {
      throw Error("Attribute \"" + c + "\" does not match any of the allowed prefixes.");
    }
    b.setAttribute(c, d);
  }
  function qb(a) {
    if (/^(script|style)$/i.test(a.tagName)) {
      throw Error("");
    }
  }
  ;
  var rb = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");
  function sb(a, b, c) {
    a.href = F(b).toString();
    a.rel = c;
  }
  ;
  function tb(a, b) {
    this.h = b;
  }
  tb.prototype.toString = function () {
    return this.h;
  };
  function U(a) {
    return new tb(B, a);
  }
  function ub(a) {
    return a instanceof tb;
  }
  function vb(a) {
    if (ub(a)) {
      return a.h;
    }
    throw Error("");
  }
  ;
  var wb = ["href", "xlink:href"];
  function xb(a, b, c) {
    return a.parseFromString(P(b), c);
  }
  ;
  function yb(a, b, c) {
    b = Error.call(this, a + " was requested as a " + b + ", but the response Content-Type, \"" + c + " is not appropriate for this type of content.");
    this.message = b.message;
    if ("stack" in b) {
      this.stack = b.stack;
    }
    this.url = a;
  }
  ka(yb, Error);
  function zb(a, b) {
    return a.createContextualFragment(P(b));
  }
  ;
  function Ab(a) {
    return U(a.map(vb).join(""));
  }
  ;
  function V(a, b) {
    if (ab(a)) {
      return a;
    }
    a = Y(String(a));
    if (b == null ? 0 : b.Ea) {
      a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;");
    }
    if (b == null ? 0 : b.Da) {
      a = a.replace(/(\r\n|\n|\r)/g, "<br>");
    }
    if (b == null ? 0 : b.Fa) {
      a = a.replace(/(\t+)/g, "<span style=\"white-space:pre\">$1</span>");
    }
    return O(a);
  }
  function Y(a) {
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  function Bb(a) {
    return Cb("", a);
  }
  function Cb(a, b) {
    a = V(a);
    return O(b.map(function (c) {
      return P(V(c));
    }).join(P(a).toString()));
  }
  var Gb = /^[a-z][a-z\d-]*$/i;
  var Hb = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
  var Ib = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
  var Jb = ["action", "formaction", "href"];
  function Kb(a) {
    if (!Gb.test(a)) {
      throw Error("");
    }
    if (Hb.indexOf(a.toUpperCase()) !== -1) {
      throw Error("");
    }
  }
  function Lb(a) {
    var b = "";
    for (var c = Object.keys(a), d = 0; d < c.length; d++) {
      var l = c[d];
      var m = a[l];
      if (!Gb.test(l)) {
        throw Error("");
      }
      if (m !== undefined && m !== null) {
        if (/^on./i.test(l)) {
          throw Error("");
        }
        if (Jb.indexOf(l.toLowerCase()) !== -1) {
          m = Ja(m) ? m.toString() : Ra(String(m)) || "about:invalid#zClosurez";
        }
        m = l + "=\"" + V(String(m)) + "\"";
        b += " " + m;
      }
    }
    return b;
  }
  ;
  function Mb() {
    this.h = new Map();
  }
  Mb.prototype.format = function (a) {
    var b = this;
    var c = V("_safevalues_format_marker_:").toString();
    a = V(a).toString().replace(new RegExp("\\{" + c + "[\\w&#;]+\\}", "g"), function (d) {
      var l;
      if (l = b.h.get(d)) {
        d = "";
        switch (l.type) {
          case "html":
            d = l.N;
            break;
          case "startTag":
            d = "<" + l.tagName + l.attributes + ">";
            break;
          case "endTag":
            d = "</" + l.tagName + ">";
        }
        l = d;
      } else {
        l = d;
      }
      return l;
    });
    return O(a);
  };
  Mb.prototype.text = function (a) {
    a = {
      type: "html",
      N: V(a).toString()
    };
    var b = "{_safevalues_format_marker_:" + this.h.size + "_" + Math.random().toString(36).slice(2) + "}";
    this.h.set(V(b).toString(), a);
    return b;
  };
  function Nb(a, b) {
    var c = b.createRange();
    c.selectNode(b.body);
    a = O(a);
    return zb(c, a);
  }
  ;
  function Ob(a) {
    a = a.nodeName;
    if (typeof a === "string") {
      return a;
    } else {
      return "FORM";
    }
  }
  function Pb(a) {
    a = a.nodeType;
    return a === 1 || typeof a !== "number";
  }
  ;
  function Qb(a, b, c, d) {
    var l = new Map(Rb);
    this.j = a;
    this.h = l;
    this.m = b;
    this.o = c;
    this.i = d;
  }
  function Sb(a, b, c) {
    c = a.h.get(c);
    if (c == null ? 0 : c.has(b)) {
      return c.get(b);
    } else if (a.m.has(b)) {
      return {
        l: 1
      };
    } else if (c = a.o.get(b)) {
      return c;
    } else if (a.i && [].concat(ma(a.i)).some(function (d) {
      return b.indexOf(d) === 0;
    })) {
      return {
        l: 1
      };
    } else {
      return {
        l: 0
      };
    }
  }
  ;
  var Tb = "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ");
  var Rb = [["A", new Map([["href", {
    l: 7
  }]])], ["AREA", new Map([["href", {
    l: 7
  }]])], ["LINK", new Map([["href", {
    l: 5,
    conditions: new Map([["rel", new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])
  }]])], ["SOURCE", new Map([["src", {
    l: 5
  }], ["srcset", {
    l: 6
  }]])], ["IMG", new Map([["src", {
    l: 5
  }], ["srcset", {
    l: 6
  }]])], ["VIDEO", new Map([["src", {
    l: 5
  }]])], ["AUDIO", new Map([["src", {
    l: 5
  }]])]];
  var Ub = "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked cite color cols colspan controls controlslist coords crossorigin datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden inert ismap label lang loop max maxlength media minlength min multiple muted nonce open playsinline placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type usemap valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ");
  var Vb = [["dir", {
    l: 3,
    conditions: M(function () {
      return new Map([["dir", new Set(["auto", "ltr", "rtl"])]]);
    })
  }], ["async", {
    l: 3,
    conditions: M(function () {
      return new Map([["async", new Set(["async"])]]);
    })
  }], ["loading", {
    l: 3,
    conditions: M(function () {
      return new Map([["loading", new Set(["eager", "lazy"])]]);
    })
  }], ["poster", {
    l: 5
  }], ["target", {
    l: 3,
    conditions: M(function () {
      return new Map([["target", new Set(["_self", "_blank"])]]);
    })
  }]];
  var Wb = new Qb(new Set(Tb), new Set(Ub), new Map(Vb));
  var Xb = new Qb(new Set(Tb.concat(["BUTTON", "INPUT"])), new Set(M(function () {
    return Ub.concat(["class", "id", "name"]);
  })), new Map(M(function () {
    return Vb.concat([["style", {
      l: 1
    }]]);
  })));
  var Yb = new Qb(new Set(M(function () {
    return Tb.concat("STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" "));
  })), new Set(M(function () {
    return Ub.concat(["class", "id", "tabindex", "contenteditable", "name"]);
  })), new Map(M(function () {
    return Vb.concat([["style", {
      l: 1
    }]]);
  })), new Set(["data-", "aria-"]));
  function Zb(a) {
    this.h = a;
  }
  function $b(a, b) {
    var c = document.implementation.createHTMLDocument("");
    a = ac(a, b, c);
    c = c.body;
    c.appendChild(a);
    c = new XMLSerializer().serializeToString(c);
    c = c.slice(c.indexOf(">") + 1, c.lastIndexOf("</"));
    return O(c);
  }
  function ac(a, b, c) {
    b = Nb(b, c);
    b = document.createTreeWalker(b, 5, function (e) {
      if (e.nodeType === 3) {
        e = 1;
      } else if (Pb(e)) {
        e = Ob(e);
        if (e === null) {
          e = 2;
        } else {
          var f = a.h;
          e = e !== "FORM" && (f.j.has(e) || f.h.has(e)) ? 1 : 2;
        }
      } else {
        e = 2;
      }
      return e;
    });
    for (var d = b.nextNode(), l = c.createDocumentFragment(), m = l; d !== null;) {
      var g = undefined;
      if (d.nodeType === 3) {
        g = document.createTextNode(d.data);
      } else if (Pb(d)) {
        g = bc(a, d, c);
      } else {
        throw Error("");
      }
      m.appendChild(g);
      if (d = b.firstChild()) {
        m = g;
      } else {
        while (!(d = b.nextSibling()) && (d = b.parentNode())) {
          m = m.parentNode;
        }
      }
    }
    return l;
  }
  function bc(a, b, c) {
    var d = Ob(b);
    c = c.createElement(d);
    b = b.attributes;
    var l = q(b);
    var m = l.next();
    try {
      for (; !m.done; m = l.next()) {
        var g = m.value;
        var e = g.name;
        var f = g.value;
        var k = Sb(a.h, e, d);
        a: {
          var n = undefined;
          var x = k.conditions;
          if (x) {
            var w = q(x);
            var z = w.next();
            try {
              for (; !z.done; z = w.next()) {
                n = q(z.value);
                var W = n.next().value;
                var X = n.next().value;
                var fa = undefined;
                var Db = (fa = b.getNamedItem(W)) == null ? undefined : fa.value;
                if (Db && !X.has(Db)) {
                  var Eb = false;
                  break a;
                }
              }
            } finally {
              na(w, z);
            }
          }
          Eb = true;
        }
        if (Eb) {
          switch (k.l) {
            case 1:
              Z(c, e, f);
              break;
            case 2:
              throw Error();
            case 3:
              Z(c, e, f.toLowerCase());
              break;
            case 4:
              Z(c, e, f);
              break;
            case 5:
              Z(c, e, f);
              break;
            case 6:
              Z(c, e, f);
              break;
            case 7:
              fa = n = f;
              var Fb = Oa(fa);
              n = Fb !== undefined && Pa.indexOf(Fb.toLowerCase()) !== -1 ? fa : "about:invalid#zClosurez";
              Z(c, e, n);
          }
        }
      }
    } finally {
      na(l, m);
    }
    return c;
  }
  function Z(a, b, c) {
    a.setAttribute(b, c);
  }
  var cc = M(function () {
    return new Zb(Wb);
  });
  function dc(a) {
    return $b(cc, a);
  }
  var ec = M(function () {
    return new Zb(Xb);
  });
  var fc = M(function () {
    return new Zb(Yb);
  });
  function hc() {}
  function ic() {
    hc.apply(this, arguments);
  }
  ka(ic, hc);
  function jc(a) {
    var b = a.split(/[?#]/);
    var c = /[?]/.test(a) ? "?" + b[1] : "";
    return {
      G: b[0],
      P: c,
      fragment: /[#]/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
    };
  }
  function kc(a, b, c, d) {
    function l(g, e) {
      if (g != null) {
        if (Array.isArray(g)) {
          g.forEach(function (f) {
            return l(f, e);
          });
        } else {
          b += m + encodeURIComponent(e) + "=" + encodeURIComponent(g);
          m = "&";
        }
      }
    }
    var m = b.length ? "&" : "?";
    if (d.constructor === Object) {
      d = Object.entries(d);
    }
    if (Array.isArray(d)) {
      d.forEach(function (g) {
        return l(g[1], g[0]);
      });
    } else {
      d.forEach(l);
    }
    return E(a + b + c);
  }
  var lc = /[^#]*/;
  function mc(a) {
    return S(JSON.stringify(a).replace(/</g, "\\u003C"));
  }
  ;
  var nc = {
    0: 1,
    1: 1
  };
  var oc = {
    0: 0.1,
    1: 0.1
  };
  function pc(a, b) {
    var c;
    if (!(c = !b)) {
      c = !(Math.random() < (b.Ga ?? nc[b.R[0]] ?? 0));
    }
    if (c || window.SAFEVALUES_REPORTING === false || !("DocumentFragment" in window)) {
      return a;
    }
    if (Math.random() < (b.Ca ?? oc[b.R[0]] ?? 0)) {
      qc(b, "HEARTBEAT");
    }
    if (!rc(a, b)) {
      if (V(a).toString() !== a) {
        qc(b, "H_ESCAPE");
      }
    }
    return a;
  }
  function rc(a, b) {
    try {
      $b(fc, a);
    } catch (c) {
      qc(b, "H_SLSANITIZE");
      return true;
    }
    try {
      $b(ec, a);
    } catch (c) {
      qc(b, "H_RSANITIZE");
      return true;
    }
    try {
      dc(a);
    } catch (c) {
      qc(b, "H_SANITIZE");
      return true;
    }
    return false;
  }
  function qc(a, b) {
    (sc ?? navigator.sendBeacon.bind(navigator))("https://csp.withgoogle.com/csp/lcreport/" + a.R, JSON.stringify({
      host: window.location.hostname,
      type: b,
      additionalData: undefined
    }));
  }
  var sc;
  function tc(a) {
    if (a === null) {
      return "null";
    } else if (a === undefined) {
      return "undefined";
    } else {
      return a;
    }
  }
  ;
  A("safevalues_raw.safeAttrPrefix", function (a) {
    return new nb(B, a[0].toLowerCase());
  });
  A("safevalues_raw.htmlFragment", function (a) {
    return document.createRange().createContextualFragment(P(O(a[0])));
  });
  A("safevalues_raw.svgFragment", function (a) {
    var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var c = document.createRange();
    c.selectNodeContents(b);
    return c.createContextualFragment(P(O(a[0])));
  });
  A("safevalues_raw.concatHtmls", Bb);
  A("safevalues_raw.doctypeHtml", function () {
    return O("<!DOCTYPE html>");
  });
  A("safevalues_raw.htmlEscape", V);
  A("safevalues_raw.joinHtmls", Cb);
  A("safevalues_raw.scriptToHtml", function (a, b) {
    a = T(a).toString();
    var c = "<script";
    if (b == null ? 0 : b.id) {
      c += " id=\"" + Y(b.id) + "\"";
    }
    if (b == null ? 0 : b.nonce) {
      c += " nonce=\"" + Y(b.nonce) + "\"";
    }
    if (b == null ? 0 : b.type) {
      c += " type=\"" + Y(b.type) + "\"";
    }
    if (b == null ? 0 : b.defer) {
      c += " defer";
    }
    return O(c + (">" + a + "</script>"));
  });
  A("safevalues_raw.scriptUrlToHtml", function (a, b) {
    a = F(a).toString();
    a = "<script src=\"" + Y(a) + "\"";
    if (b == null ? 0 : b.async) {
      a += " async";
    }
    if ((b == null ? undefined : b.attributionSrc) !== undefined) {
      a += " attributionsrc=\"" + Y(b.attributionSrc) + "\"";
    }
    if (b == null ? 0 : b.ea) {
      a += " custom-element=\"" + Y(b.ea) + "\"";
    }
    if (b == null ? 0 : b.defer) {
      a += " defer";
    }
    if (b == null ? 0 : b.id) {
      a += " id=\"" + Y(b.id) + "\"";
    }
    if (b == null ? 0 : b.nonce) {
      a += " nonce=\"" + Y(b.nonce) + "\"";
    }
    if (b == null ? 0 : b.type) {
      a += " type=\"" + Y(b.type) + "\"";
    }
    if (b == null ? 0 : b.da) {
      a += " crossorigin=\"" + Y(b.da) + "\"";
    }
    return O(a + "></script>");
  });
  A("safevalues_raw.sanitizeHtml", function (a) {
    return $b(cc, a);
  });
  A("safevalues_raw.sanitizeHtmlAssertUnchanged", dc);
  A("safevalues_raw.sanitizeHtmlToFragment", function (a) {
    var b = document.implementation.createHTMLDocument("");
    return ac(cc, a, b);
  });
  A("safevalues_raw.HtmlSanitizerBuilder", ic);
  A("safevalues_raw.appendParams", function (a, b) {
    a = jc(F(a).toString());
    return kc(a.G, a.P, a.fragment, b);
  });
  A("safevalues_raw.replaceParams", function (a, b) {
    a = jc(F(a).toString());
    return kc(a.G, "", a.fragment, b);
  });
  A("safevalues_raw.appendPathSegment", function (a, b) {
    a = jc(F(a).toString());
    b = a.G + (a.G.slice(-1) === "/" ? "" : "/") + encodeURIComponent(b);
    return E(b + a.P + a.fragment);
  });
  A("safevalues_raw.objectUrlFromScript", function (a) {
    a = T(a).toString();
    return E(URL.createObjectURL(new Blob([a], {
      type: "text/javascript"
    })));
  });
  A("safevalues_raw.replaceFragment", function (a, b) {
    a = F(a).toString();
    return E(lc.exec(a)[0] + (b.trim() ? "#" + b : ""));
  });
  A("safevalues_raw.toAbsoluteResourceUrl", function (a) {
    a = F(a).toString();
    a = new URL(a, window.document.baseURI);
    return E(a.toString());
  });
  A("safevalues_raw.trustedResourceUrl", function (a) {
    var b = v.apply(1, arguments);
    if (b.length === 0) {
      return E(a[0]);
    }
    var c = a[0];
    for (var d = 0; d < b.length; d++) {
      c += encodeURIComponent(b[d]) + a[d + 1];
    }
    return E(c);
  });
  A("safevalues_raw.concatScripts", function (a) {
    return S(a.map(T).join(""));
  });
  A("safevalues_raw.safeScript", function (a) {
    return S(a.join(""));
  });
  A("safevalues_raw.safeScriptWithArgs", function (a) {
    return function () {
      var b = v.apply(0, arguments).map(function (c) {
        return mc(c).toString();
      });
      return S("(" + a.join("") + ")(" + b.join(",") + ")");
    };
  });
  A("safevalues_raw.valueAsScript", mc);
  A("safevalues_raw.concatStyleSheets", Ab);
  A("safevalues_raw.safeStyleSheet", function (a) {
    var b = v.apply(1, arguments);
    var c = "";
    for (var d = 0; d < a.length; d++) {
      c += a[d];
      if (d < b.length) {
        c += vb(b[d]);
      }
    }
    return U(c);
  });
  A("safevalues_raw.addJavaScriptUrlSanitizationCallback", function (a) {
    if (Ta.indexOf(a) === -1) {
      Ta.push(a);
    }
    Sa = function (b) {
      Ta.forEach(function (c) {
        c(b);
      });
    };
  });
  A("safevalues_raw.objectUrlFromSafeSource", Na);
  A("safevalues_raw.removeJavaScriptUrlSanitizationCallback", function (a) {
    a = Ta.indexOf(a);
    if (a !== -1) {
      Ta.splice(a, 1);
    }
  });
  A("safevalues_raw.safeUrl", function (a) {
    for (var b = v.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) {
      c.push(String(b[d]));
      c.push(a[d + 1]);
    }
    return H(c.join(""));
  });
  A("safevalues_raw.SanitizableUrlScheme", K);
  A("safevalues_raw.sanitizeUrl", function (a, b) {
    b = b === undefined ? La : b;
    b = Ma(a, b);
    if (b === undefined) {
      Sa(a.toString());
    }
    return b || Ia;
  });
  A("safevalues_raw.trySanitizeUrl", Ma);
  A("safevalues_raw.SafeAttributePrefix", nb);
  A("safevalues_raw.unwrapAttributePrefix", ob);
  A("safevalues_raw.EMPTY_HTML", $a);
  A("safevalues_raw.isHtml", ab);
  A("safevalues_raw.SafeHtml", N);
  A("safevalues_raw.unwrapHtml", P);
  A("safevalues_raw.isResourceUrl", Ga);
  A("safevalues_raw.TrustedResourceUrl", D);
  A("safevalues_raw.unwrapResourceUrl", F);
  A("safevalues_raw.EMPTY_SCRIPT", jb);
  A("safevalues_raw.isScript", kb);
  A("safevalues_raw.SafeScript", ib);
  A("safevalues_raw.unwrapScript", T);
  A("safevalues_raw.isStyleSheet", ub);
  A("safevalues_raw.SafeStyleSheet", tb);
  A("safevalues_raw.unwrapStyleSheet", vb);
  A("safevalues_raw.ABOUT_BLANK", Ha);
  A("safevalues_raw.INNOCUOUS_URL", Ia);
  A("safevalues_raw.isUrl", Ja);
  A("safevalues_raw.SafeUrl", G);
  A("safevalues_raw.unwrapUrl", Ka);
  A("safevalues_raw.reportOnlyHtmlPassthrough", pc);
  A("safevalues_raw.HtmlFormatter", Mb);
  A("safevalues_raw.createHtml", function (a, b, c) {
    Kb(a);
    var d = "<" + a;
    if (b) {
      d += Lb(b);
    }
    if (!Array.isArray(c)) {
      c = c === undefined ? [] : [c];
    }
    if (Ib.indexOf(a.toUpperCase()) !== -1) {
      d += ">";
    } else {
      b = Bb(c.map(function (l) {
        if (ab(l)) {
          return l;
        } else {
          return V(String(l));
        }
      }));
      d += ">" + b.toString() + "</" + a + ">";
    }
    return O(d);
  });
  A("safevalues_raw.styleSheetToHtml", function (a, b) {
    var c = {};
    if (b) {
      for (var d = Object.keys(b), l = 0; l < d.length; l++) {
        var m = d[l];
        if (m.toLowerCase() === "type") {
          throw Error("");
        }
        c[m] = b[m];
      }
    }
    c.type = "text/css";
    b = Lb(c);
    if (Array.isArray(a)) {
      a = Ab(a);
    }
    a = vb(a);
    return O("<style " + b + ">" + a + "</style>");
  });
  A("safevalues_raw.safeStyleRule", function (a) {
    var b = v.apply(1, arguments);
    var c = a[0];
    for (var d = 0; d < a.length - 1; d++) {
      c += String(b[d]);
      c += a[d + 1];
    }
    b = document.implementation.createHTMLDocument("");
    d = b.createElement("style");
    b.head.appendChild(d);
    b = d.sheet;
    b.insertRule(c, 0);
    if (b.cssRules.length === 1 && (c = b.cssRules[0], c instanceof CSSStyleRule)) {
      return U(c.cssText.replace(/</g, "\\3C "));
    }
  });
  A("safevalues_raw.dom.setAnchorHref", Ua);
  A("safevalues_raw.dom.setAnchorHref", Ua);
  A("safevalues_raw.dom.setAreaHref", Va);
  A("safevalues_raw.dom.setBaseHref", Wa);
  A("safevalues_raw.dom.setButtonFormaction", Xa);
  A("safevalues_raw.dom.buildPrefixedAttributeSetter", function (a) {
    var b = [a].concat(ma(v.apply(1, arguments)));
    return function (c, d, l) {
      pb(b, c, d, l);
    };
  });
  A("safevalues_raw.dom.elementInsertAdjacentHtml", function (a, b, c) {
    var d = b === "beforebegin" || b === "afterend" ? a.parentElement : a;
    if (d !== null) {
      qb(d);
    }
    a.insertAdjacentHTML(b, P(c));
  });
  A("safevalues_raw.dom.setElementAttribute", function (a, b, c) {
    if (a.namespaceURI !== "http://www.w3.org/1999/xhtml") {
      throw Error("Cannot set attribute '" + b + "' on '" + a.tagName + "'.Element is not in the HTML namespace");
    }
    b = b.toLowerCase();
    switch (a.tagName + " " + b) {
      case "A href":
        Ua(a, c);
        break;
      case "AREA href":
        Va(a, c);
        break;
      case "BASE href":
        Wa(a, c);
        break;
      case "BUTTON formaction":
        Xa(a, c);
        break;
      case "EMBED src":
        Ya(a, c);
        break;
      case "FORM action":
        Za(a, c);
        break;
      case "IFRAME src":
        bb(a, c);
        break;
      case "IFRAME srcdoc":
        cb(a, c);
        break;
      case "IFRAME sandbox":
        throw Error("Can't set 'sandbox' on iframe tags. Use setIframeSrcWithIntent or setIframeSrcdocWithIntent instead");
      case "INPUT formaction":
        eb(a, c);
        break;
      case "LINK href":
        throw Error("Can't set 'href' attribute on link tags. Use setLinkHrefAndRel instead");
      case "LINK rel":
        throw Error("Can't set 'rel' attribute on link tags. Use setLinkHrefAndRel instead");
      case "OBJECT data":
        fb(a, c);
        break;
      case "SCRIPT src":
        mb(a, c);
        break;
      default:
        if (/^on./.test(b)) {
          throw Error("Attribute \"" + b + "\" looks like an event handler attribute. Please use a safe alternative like addEventListener instead.");
        }
        a.setAttribute(b, c);
    }
  });
  A("safevalues_raw.dom.setElementInnerHtml", function (a, b) {
    if (a.nodeType === 1) {
      qb(a);
    }
    a.innerHTML = P(b);
  });
  A("safevalues_raw.dom.setElementOuterHtml", function (a, b) {
    var c = a.parentElement;
    if (c !== null) {
      qb(c);
    }
    a.outerHTML = P(b);
  });
  A("safevalues_raw.dom.setElementPrefixedAttribute", pb);
  A("safevalues_raw.dom.setEmbedSrc", Ya);
  A("safevalues_raw.dom.setFormAction", Za);
  A("safevalues_raw.dom.IframeIntent", db);
  A("safevalues_raw.dom.TypeCannotBeUsedWithIframeIntentError", R);
  A("safevalues_raw.dom.setIframeSrc", bb);
  A("safevalues_raw.dom.setIframeSrcWithIntent", function (a, b, c) {
    a.removeAttribute("srcdoc");
    switch (b) {
      case 0:
        if (c instanceof D) {
          throw new R("TrustedResourceUrl", 0);
        }
        Q(a, []);
        b = L(c);
        if (b !== undefined) {
          a.src = b;
        }
        break;
      case 1:
        if (!(c instanceof D)) {
          throw new R(typeof c, 1);
        }
        Q(a, "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "));
        bb(a, c);
        break;
      case 2:
        if (c instanceof D) {
          throw new R("TrustedResourceUrl", 2);
        }
        Q(a, "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "));
        b = L(c);
        if (b !== undefined) {
          a.src = b;
        }
        break;
      default:
        Ba(b);
    }
  });
  A("safevalues_raw.dom.setIframeSrcdoc", cb);
  A("safevalues_raw.dom.setIframeSrcdocWithIntent", function (a, b, c) {
    a.removeAttribute("src");
    switch (b) {
      case 0:
        if (c instanceof N) {
          throw new R("SafeHtml", 0);
        }
        a.Ba = "default-src 'none'";
        Q(a, []);
        cb(a, O(c));
        break;
      case 1:
        if (!(c instanceof N)) {
          throw new R("string", 1);
        }
        Q(a, "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "));
        cb(a, c);
        break;
      case 2:
        if (c instanceof N) {
          throw new R("SafeHtml", 1);
        }
        Q(a, ["allow-scripts", "allow-forms", "allow-popups", "allow-popups-to-escape-sandbox", "allow-storage-access-by-user-activation"]);
        cb(a, O(c));
        break;
      default:
        Ba(b);
    }
  });
  A("safevalues_raw.dom.setInputFormaction", eb);
  A("safevalues_raw.dom.setLinkHrefAndRel", function (a, b, c) {
    if (Ga(b)) {
      sb(a, b, c);
    } else {
      if (rb.indexOf(c) === -1) {
        throw Error("TrustedResourceUrl href attribute required with rel=\"" + c + "\"");
      }
      b = L(b);
      if (b !== undefined) {
        a.href = b;
        a.rel = c;
      }
    }
  });
  A("safevalues_raw.dom.setLinkWithResourceUrlHrefAndRel", sb);
  A("safevalues_raw.dom.setObjectData", fb);
  A("safevalues_raw.dom.setScriptSrc", mb);
  A("safevalues_raw.dom.setScriptTextContent", function (a, b, c) {
    a.textContent = T(b);
    if (!(c == null ? 0 : c.ga)) {
      lb(a);
    }
  });
  A("safevalues_raw.dom.setStyleTextContent", function (a, b) {
    a.textContent = vb(b);
  });
  A("safevalues_raw.dom.setSvgAttribute", function (a, b, c) {
    var d = b.toLowerCase();
    if (wb.indexOf(d) !== -1 || d.indexOf("on") === 0) {
      throw Error("");
    }
    a.setAttribute(b, c);
  });
  A("safevalues_raw.dom.setSvgUseHref", function (a, b) {
    var c = Oa(b);
    if (c !== "javascript:" && c !== "data:") {
      a.setAttribute("href", b);
    }
  });
  A("safevalues_raw.dom.documentExecCommand", function (a, b, c) {
    b = String(b);
    var d = c;
    if (b.toLowerCase() === "inserthtml") {
      d = P(c);
    }
    return a.execCommand(b, false, d);
  });
  A("safevalues_raw.dom.documentExecCommandInsertHtml", function (a, b) {
    return a.execCommand("insertHTML", false, P(b));
  });
  A("safevalues_raw.dom.documentWrite", function (a, b) {
    a.write(P(b));
  });
  A("safevalues_raw.dom.domParserParseFromString", xb);
  A("safevalues_raw.dom.domParserParseHtml", function (a, b) {
    return xb(a, b, "text/html");
  });
  A("safevalues_raw.dom.domParserParseXml", function (a, b) {
    a = xb(a, O(b), "text/xml");
    b = document.createNodeIterator(a, NodeFilter.SHOW_ELEMENT);
    for (var c; c = b.nextNode();) {
      c = c.namespaceURI;
      if (c === "http://www.w3.org/1999/xhtml" || c === "http://www.w3.org/2000/svg" || c === "http://www.w3.org/1998/Math/MathML") {
        throw Error("unsafe XML");
      }
    }
    return a;
  });
  A("safevalues_raw.dom.fetchResourceUrl", function (a, b) {
    var c;
    var d;
    var l;
    var m;
    var g;
    return wa(function (e) {
      if (e.h == 1) {
        return e.v(fetch(F(a).toString(), b), 2);
      }
      c = e.o;
      g = (d = c.headers.get("Content-Type")) == null ? undefined : (l = d.split(";", 2)) == null ? undefined : (m = l[0]) == null ? undefined : m.toLowerCase();
      return e.return({
        N: function () {
          var f;
          return wa(function (k) {
            if (k.h == 1) {
              if (g !== "text/html") {
                throw new yb(c.url, "SafeHtml", "text/html");
              }
              return k.v(c.text(), 2);
            }
            f = k.o;
            return k.return(O(f));
          });
        },
        script: function () {
          var f;
          return wa(function (k) {
            if (k.h == 1) {
              if (g !== "text/javascript" && g !== "application/javascript") {
                throw new yb(c.url, "SafeScript", "text/javascript");
              }
              return k.v(c.text(), 2);
            }
            f = k.o;
            return k.return(S(f));
          });
        },
        styleSheet: function () {
          var f;
          return wa(function (k) {
            if (k.h == 1) {
              if (g !== "text/css") {
                throw new yb(c.url, "SafeStyleSheet", "text/css");
              }
              return k.v(c.text(), 2);
            }
            f = k.o;
            return k.return(U(f));
          });
        }
      });
    });
  });
  A("safevalues_raw.dom.globalEval", function (a, b) {
    b = T(b);
    var c = a.eval(b);
    if (c === b) {
      c = a.eval(b.toString());
    }
    return c;
  });
  A("safevalues_raw.dom.locationAssign", function (a, b) {
    b = L(b);
    if (b !== undefined) {
      a.assign(b);
    }
  });
  A("safevalues_raw.dom.locationReplace", function (a, b) {
    b = L(b);
    if (b !== undefined) {
      a.replace(b);
    }
  });
  A("safevalues_raw.dom.setLocationHref", function (a, b) {
    b = L(b);
    if (b !== undefined) {
      a.href = b;
    }
  });
  A("safevalues_raw.dom.rangeCreateContextualFragment", zb);
  A("safevalues_raw.dom.serviceWorkerContainerRegister", function (a, b, c) {
    return a.register(F(b), c);
  });
  A("safevalues_raw.dom.objectUrlFromSafeSource", function (a) {
    return Na(a).toString();
  });
  A("safevalues_raw.dom.getScriptNonce", gb);
  A("safevalues_raw.dom.getStyleNonce", function (a) {
    return hb("style", a);
  });
  A("safevalues_raw.dom.windowOpen", function (a, b, c, d) {
    b = L(b);
    if (b !== undefined) {
      return a.open(b, c, d);
    } else {
      return null;
    }
  });
  A("safevalues_raw.dom.createWorker", function (a, b) {
    return new Worker(F(a), b);
  });
  A("safevalues_raw.dom.createSharedWorker", function (a, b) {
    return new SharedWorker(F(a), b);
  });
  A("safevalues_raw.dom.workerGlobalScopeImportScripts", function (a) {
    a.importScripts.apply(a, ma(v.apply(1, arguments).map(function (b) {
      return F(b);
    })));
  });
  A("safevalues_raw.restricted.legacy.legacyUnsafeHtml", function (a, b) {
    a = tc(a);
    return O(pc(a, b));
  });
  A("safevalues_raw.restricted.legacy.legacyUnsafeScript", function (a) {
    a = tc(a);
    return S(a);
  });
  A("safevalues_raw.restricted.legacy.legacyUnsafeResourceUrl", function (a) {
    a = tc(a);
    return E(a);
  });
  A("safevalues_raw.restricted.legacy.legacyUnsafeStyleSheet", function (a) {
    a = tc(a);
    return U(a);
  });
  A("safevalues_raw.restricted.legacy.superLenientlySanitizeHtml", function (a) {
    return $b(fc, a);
  });
  A("safevalues_raw.restricted.reviewed.htmlSafeByReview", function (a) {
    return O(a);
  });
  A("safevalues_raw.restricted.reviewed.scriptSafeByReview", function (a) {
    return S(a);
  });
  A("safevalues_raw.restricted.reviewed.resourceUrlSafeByReview", function (a) {
    return E(a);
  });
  A("safevalues_raw.restricted.reviewed.styleSheetSafeByReview", function (a) {
    return U(a);
  }); /*
      Copyright 2015 Bodymovin
      SPDX-License-Identifier: MIT
      Copyright 2014-2015, Epistemex by Ken Fyrstenberg and contributions by
      leeoniya SPDX-License-Identifier: MIT
      Copyright 2014 David Bau
      SPDX-License-Identifier: MIT
      Copyright 2014 - 2015, BezierEasing by Ga?tan Renaudeau
      SPDX-License-Identifier: MIT
      Transformation Matrix v2.0
      (c) Epistemex 2014-2015
      www.epistemex.com
      By Ken Fyrstenberg
      Contributions by leeoniya.
      License: MIT, header required.
      */
  (function () {
    if (typeof navigator != "undefined") {
      (function (R, ta) {
        (R = typeof globalThis != "undefined" ? globalThis : R || self).lottie = ta();
      })(this, function () {
        function R(c, a) {
          var b;
          var d;
          var e = c.length;
          for (b = 0; b < e; b += 1) {
            for (var f in d = c[b].prototype) {
              if (Object.prototype.hasOwnProperty.call(d, f)) {
                a.prototype[f] = d[f];
              }
            }
          }
        }
        function ta(c) {
          return Array.apply(null, {
            length: c
          });
        }
        function ya(c) {
          ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
            return typeof a;
          } : function (a) {
            if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
              return "symbol";
            } else {
              return typeof a;
            }
          };
          return ya(c);
        }
        function pc(c, a, b, d) {
          this.type = c;
          this.currentTime = a;
          this.totalTime = b;
          this.direction = d < 0 ? -1 : 1;
        }
        function Gc(c, a) {
          this.type = c;
          this.direction = a < 0 ? -1 : 1;
        }
        function Vc(c, a, b, d) {
          this.type = c;
          this.currentLoop = b;
          this.totalLoops = a;
          this.direction = d < 0 ? -1 : 1;
        }
        function Wc(c, a, b) {
          this.type = c;
          this.firstFrame = a;
          this.totalFrames = b;
        }
        function Xc(c, a) {
          this.type = c;
          this.target = a;
        }
        function ud(c, a) {
          this.type = "renderFrameError";
          this.nativeError = c;
          this.currentTime = a;
        }
        function Dd(c) {
          this.type = "configError";
          this.nativeError = c;
        }
        function Yc(c, a, b) {
          var d;
          var e;
          var f;
          var k;
          var n;
          f = b * (1 - a);
          k = b * (1 - (e = c * 6 - (d = Math.floor(c * 6))) * a);
          n = b * (1 - (1 - e) * a);
          switch (d % 6) {
            case 0:
              var h = b;
              var g = n;
              var q = f;
              break;
            case 1:
              h = k;
              g = b;
              q = f;
              break;
            case 2:
              h = f;
              g = b;
              q = n;
              break;
            case 3:
              h = f;
              g = k;
              q = b;
              break;
            case 4:
              h = n;
              g = f;
              q = b;
              break;
            case 5:
              h = b;
              g = f;
              q = k;
          }
          return [h, g, q];
        }
        function qc(c, a, b) {
          var d = Math.max(c, a, b);
          var e = Math.min(c, a, b);
          var f = d - e;
          switch (d) {
            case e:
              var k = 0;
              break;
            case c:
              k = (a - b + f * (a < b ? 6 : 0)) / (f * 6);
              break;
            case a:
              k = (b - c + f * 2) / (f * 6);
              break;
            case b:
              k = (c - a + f * 4) / (f * 6);
          }
          return [k, d === 0 ? 0 : f / d, d / 255];
        }
        function Hc(c, a) {
          c = qc(c[0] * 255, c[1] * 255, c[2] * 255);
          c[1] += a;
          if (c[1] > 1) {
            c[1] = 1;
          } else if (c[1] <= 0) {
            c[1] = 0;
          }
          return Yc(c[0], c[1], c[2]);
        }
        function Zc(c, a) {
          c = qc(c[0] * 255, c[1] * 255, c[2] * 255);
          c[2] += a;
          if (c[2] > 1) {
            c[2] = 1;
          } else if (c[2] < 0) {
            c[2] = 0;
          }
          return Yc(c[0], c[1], c[2]);
        }
        function $c(c, a) {
          c = qc(c[0] * 255, c[1] * 255, c[2] * 255);
          c[0] += a / 360;
          if (c[0] > 1) {
            --c[0];
          } else if (c[0] < 0) {
            c[0] += 1;
          }
          return Yc(c[0], c[1], c[2]);
        }
        function X(c) {
          return document.createElementNS("http://www.w3.org/2000/svg", c);
        }
        function W(c) {
          W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
            return typeof a;
          } : function (a) {
            if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
              return "symbol";
            } else {
              return typeof a;
            }
          };
          return W(c);
        }
        function Ic() {}
        function rc(c) {
          rc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) {
            return typeof a;
          } : function (a) {
            if (a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype) {
              return "symbol";
            } else {
              return typeof a;
            }
          };
          return rc(c);
        }
        function vd(c, a) {
          var b;
          var d = this.offsetTime;
          if (this.propType === "multidimensional") {
            b = la("float32", this.pv.length);
          }
          var e;
          var f;
          var k;
          var n;
          var h;
          var g;
          var q;
          var r;
          var v = a.lastIndex;
          var p = v;
          var l = this.keyframes.length - 1;
          for (var m = true; m;) {
            e = this.keyframes[p];
            f = this.keyframes[p + 1];
            if (p === l - 1 && c >= f.t - d) {
              if (e.h) {
                e = f;
              }
              v = 0;
              break;
            }
            if (f.t - d > c) {
              v = p;
              break;
            }
            if (p < l - 1) {
              p += 1;
            } else {
              v = 0;
              m = false;
            }
          }
          k = this.keyframesMetadata[p] || {};
          var t;
          m = f.t - d;
          d = e.t - d;
          if (e.to) {
            k.bezierData ||= Xa.buildBezierData(e.s, f.s || e.e, e.to, e.ti);
            var u = k.bezierData;
            if (c >= m || c < d) {
              var w = c >= m ? u.points.length - 1 : 0;
              h = u.points[w].point.length;
              for (n = 0; n < h; n += 1) {
                b[n] = u.points[w].point[n];
              }
            } else {
              if (k.__fnct) {
                r = k.__fnct;
              } else {
                r = kb.getBezierEasing(e.o.x, e.o.y, e.i.x, e.i.y, e.n).get;
                k.__fnct = r;
              }
              g = r((c - d) / (m - d));
              n = u.segmentLength * g;
              w = a.lastFrame < c && a._lastKeyframeIndex === p ? a._lastAddedLength : 0;
              q = a.lastFrame < c && a._lastKeyframeIndex === p ? a._lastPoint : 0;
              m = true;
              for (h = u.points.length; m;) {
                w += u.points[q].partialLength;
                if (n === 0 || g === 0 || q === u.points.length - 1) {
                  h = u.points[q].point.length;
                  for (n = 0; n < h; n += 1) {
                    b[n] = u.points[q].point[n];
                  }
                  break;
                }
                if (n >= w && n < w + u.points[q + 1].partialLength) {
                  c = (n - w) / u.points[q + 1].partialLength;
                  h = u.points[q].point.length;
                  for (n = 0; n < h; n += 1) {
                    b[n] = u.points[q].point[n] + (u.points[q + 1].point[n] - u.points[q].point[n]) * c;
                  }
                  break;
                }
                if (q < h - 1) {
                  q += 1;
                } else {
                  m = false;
                }
              }
              a._lastPoint = q;
              a._lastAddedLength = w - u.points[q].partialLength;
              a._lastKeyframeIndex = p;
            }
          } else {
            var x;
            var D;
            l = e.s.length;
            t = f.s || e.e;
            if (this.sh && e.h !== 1) {
              if (c >= m) {
                b[0] = t[0];
                b[1] = t[1];
                b[2] = t[2];
              } else if (c <= d) {
                b[0] = e.s[0];
                b[1] = e.s[1];
                b[2] = e.s[2];
              } else {
                k = sc(e.s);
                g = sc(t);
                p = b;
                m = (c - d) / (m - d);
                d = [];
                e = k[0];
                r = k[1];
                f = k[2];
                k = k[3];
                l = g[0];
                var K = g[1];
                var J = g[2];
                g = g[3];
                if ((w = e * l + r * K + f * J + k * g) < 0) {
                  w = -w;
                  l = -l;
                  K = -K;
                  J = -J;
                  g = -g;
                }
                if (1 - w > 0.000001) {
                  u = Math.acos(w);
                  q = Math.sin(u);
                  n = Math.sin((1 - m) * u) / q;
                  h = Math.sin(m * u) / q;
                } else {
                  n = 1 - m;
                  h = m;
                }
                d[0] = n * e + h * l;
                d[1] = n * r + h * K;
                d[2] = n * f + h * J;
                d[3] = n * k + h * g;
                c = d;
                u = c[0];
                w = c[1];
                q = c[2];
                c = c[3];
                n = Math.atan2(w * 2 * c - u * 2 * q, 1 - w * 2 * w - q * 2 * q);
                h = Math.asin(u * 2 * w + q * 2 * c);
                u = Math.atan2(u * 2 * c - w * 2 * q, 1 - u * 2 * u - q * 2 * q);
                p[0] = n / qa;
                p[1] = h / qa;
                p[2] = u / qa;
              }
            } else {
              for (p = 0; p < l; p += 1) {
                if (e.h !== 1) {
                  if (c >= m) {
                    g = 1;
                  } else if (c < d) {
                    g = 0;
                  } else {
                    if (e.o.x.constructor === Array) {
                      k.__fnct ||= [];
                      if (k.__fnct[p]) {
                        r = k.__fnct[p];
                      } else {
                        K = e.o.x[p] === undefined ? e.o.x[0] : e.o.x[p];
                        J = e.o.y[p] === undefined ? e.o.y[0] : e.o.y[p];
                        x = e.i.x[p] === undefined ? e.i.x[0] : e.i.x[p];
                        D = e.i.y[p] === undefined ? e.i.y[0] : e.i.y[p];
                        r = kb.getBezierEasing(K, J, x, D).get;
                        k.__fnct[p] = r;
                      }
                    } else if (k.__fnct) {
                      r = k.__fnct;
                    } else {
                      K = e.o.x;
                      J = e.o.y;
                      x = e.i.x;
                      D = e.i.y;
                      r = kb.getBezierEasing(K, J, x, D).get;
                      e.keyframeMetadata = r;
                    }
                    g = r((c - d) / (m - d));
                  }
                }
                t = f.s || e.e;
                u = e.h === 1 ? e.s[p] : e.s[p] + (t[p] - e.s[p]) * g;
                if (this.propType === "multidimensional") {
                  b[p] = u;
                } else {
                  b = u;
                }
              }
            }
          }
          a.lastIndex = v;
          return b;
        }
        function sc(c) {
          var a = c[0] * qa;
          var b = c[1] * qa;
          var d = c[2] * qa;
          c = Math.cos(a / 2);
          var e = Math.cos(b / 2);
          var f = Math.cos(d / 2);
          a = Math.sin(a / 2);
          b = Math.sin(b / 2);
          d = Math.sin(d / 2);
          return [a * b * f + c * e * d, a * e * f + c * b * d, c * b * f - a * e * d, c * e * f - a * b * d];
        }
        function ad() {
          var c = this.comp.renderedFrame - this.offsetTime;
          var a = this.keyframes[0].t - this.offsetTime;
          var b = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (c !== this._caching.lastFrame && (this._caching.lastFrame === Mb || (!(this._caching.lastFrame >= b) || !(c >= b)) && (!(this._caching.lastFrame < a) || !(c < a)))) {
            if (this._caching.lastFrame >= c) {
              this._caching._lastKeyframeIndex = -1;
              this._caching.lastIndex = 0;
            }
            this.pv = a = this.interpolateValue(c, this._caching);
          }
          this._caching.lastFrame = c;
          return this.pv;
        }
        function tc(c) {
          if (this.propType === "unidimensional") {
            var a = c * this.mult;
            if (pd(this.v - a) > 0.00001) {
              this.v = a;
              this._mdf = true;
            }
          } else {
            for (var b = 0, d = this.v.length; b < d;) {
              a = c[b] * this.mult;
              if (pd(this.v[b] - a) > 0.00001) {
                this.v[b] = a;
                this._mdf = true;
              }
              b += 1;
            }
          }
        }
        function uc() {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
            if (this.lock) {
              this.setVValue(this.pv);
            } else {
              var c;
              this.lock = true;
              this._mdf = this._isFirstFrame;
              var a = this.effectsSequence.length;
              var b = this.kf ? this.pv : this.data.k;
              for (c = 0; c < a; c += 1) {
                b = this.effectsSequence[c](b);
              }
              this.setVValue(b);
              this.lock = this._isFirstFrame = false;
              this.frameId = this.elem.globalData.frameId;
            }
          }
        }
        function Eb(c) {
          this.effectsSequence.push(c);
          this.container.addDynamicProperty(this);
        }
        function Kc(c, a, b, d) {
          this.propType = "unidimensional";
          this.mult = b || 1;
          this.data = a;
          this.v = b ? a.k * b : a.k;
          this.pv = a.k;
          this._mdf = false;
          this.elem = c;
          this.container = d;
          this.comp = c.comp;
          this.kf = this.k = false;
          this.vel = 0;
          this.effectsSequence = [];
          this._isFirstFrame = true;
          this.getValue = uc;
          this.setVValue = tc;
          this.addEffect = Eb;
        }
        function Lc(c, a, b, d) {
          this.propType = "multidimensional";
          this.mult = b || 1;
          this.data = a;
          this._mdf = false;
          this.elem = c;
          this.container = d;
          this.comp = c.comp;
          this.kf = this.k = false;
          this.frameId = -1;
          b = a.k.length;
          this.v = la("float32", b);
          this.pv = la("float32", b);
          this.vel = la("float32", b);
          for (c = 0; c < b; c += 1) {
            this.v[c] = a.k[c] * this.mult;
            this.pv[c] = a.k[c];
          }
          this._isFirstFrame = true;
          this.effectsSequence = [];
          this.getValue = uc;
          this.setVValue = tc;
          this.addEffect = Eb;
        }
        function Fd(c, a, b, d) {
          this.propType = "unidimensional";
          this.keyframes = a.k;
          this.keyframesMetadata = [];
          this.offsetTime = c.data.st;
          this.frameId = -1;
          this._caching = {
            lastFrame: Mb,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          };
          this.kf = this.k = true;
          this.data = a;
          this.mult = b || 1;
          this.elem = c;
          this.container = d;
          this.comp = c.comp;
          this.pv = this.v = Mb;
          this._isFirstFrame = true;
          this.getValue = uc;
          this.setVValue = tc;
          this.interpolateValue = vd;
          this.effectsSequence = [ad.bind(this)];
          this.addEffect = Eb;
        }
        function Gd(c, a, b, d) {
          var e;
          this.propType = "multidimensional";
          var f;
          var k;
          var n;
          var h;
          var g = a.k.length;
          for (e = 0; e < g - 1; e += 1) {
            if (a.k[e].to && a.k[e].s && a.k[e + 1] && a.k[e + 1].s) {
              f = a.k[e].s;
              k = a.k[e + 1].s;
              n = a.k[e].to;
              h = a.k[e].ti;
              if (f.length === 2 && (f[0] !== k[0] || f[1] !== k[1]) && Xa.pointOnLine2D(f[0], f[1], k[0], k[1], f[0] + n[0], f[1] + n[1]) && Xa.pointOnLine2D(f[0], f[1], k[0], k[1], k[0] + h[0], k[1] + h[1]) || f.length === 3 && (f[0] !== k[0] || f[1] !== k[1] || f[2] !== k[2]) && Xa.pointOnLine3D(f[0], f[1], f[2], k[0], k[1], k[2], f[0] + n[0], f[1] + n[1], f[2] + n[2]) && Xa.pointOnLine3D(f[0], f[1], f[2], k[0], k[1], k[2], k[0] + h[0], k[1] + h[1], k[2] + h[2])) {
                a.k[e].to = null;
                a.k[e].ti = null;
              }
              if (f[0] === k[0] && f[1] === k[1] && n[0] === 0 && n[1] === 0 && h[0] === 0 && h[1] === 0 && (f.length === 2 || f[2] === k[2] && n[2] === 0 && h[2] === 0)) {
                a.k[e].to = null;
                a.k[e].ti = null;
              }
            }
          }
          this.effectsSequence = [ad.bind(this)];
          this.data = a;
          this.keyframes = a.k;
          this.keyframesMetadata = [];
          this.offsetTime = c.data.st;
          this._isFirstFrame = this.kf = this.k = true;
          this.mult = b || 1;
          this.elem = c;
          this.container = d;
          this.comp = c.comp;
          this.getValue = uc;
          this.setVValue = tc;
          this.interpolateValue = vd;
          this.frameId = -1;
          c = a.k[0].s.length;
          this.v = la("float32", c);
          this.pv = la("float32", c);
          for (e = 0; e < c; e += 1) {
            this.v[e] = Mb;
            this.pv[e] = Mb;
          }
          this._caching = {
            lastFrame: Mb,
            lastIndex: 0,
            value: la("float32", c)
          };
          this.addEffect = Eb;
        }
        function Pa() {}
        function lb() {
          this.c = false;
          this._length = 0;
          this._maxLength = 8;
          this.v = ta(this._maxLength);
          this.o = ta(this._maxLength);
          this.i = ta(this._maxLength);
        }
        function Ia() {
          this._length = 0;
          this._maxLength = 4;
          this.shapes = ta(this._maxLength);
        }
        function fb() {
          Na.searchAnimations();
        }
        function Ta() {}
        function Za() {}
        function vc() {}
        function za() {}
        function Ra() {}
        function vb(c, a) {
          return Math.abs(c - a) * 100000 <= Math.min(Math.abs(c), Math.abs(a));
        }
        function Qa(c, a, b) {
          return [c[0] * (1 - b) + a[0] * b, c[1] * (1 - b) + a[1] * b];
        }
        function dc(c, a, b, d) {
          return [a * 3 - c - b * 3 + d, c * 3 - a * 6 + b * 3, c * -3 + a * 3, c];
        }
        function wc(c) {
          return new ma(c, c, c, c, false);
        }
        function ma(c, a, b, d, e) {
          if (e && mb(c, a)) {
            a = Qa(c, d, 1 / 3);
          }
          if (e && mb(b, d)) {
            b = Qa(c, d, 2 / 3);
          }
          e = dc(c[0], a[0], b[0], d[0]);
          var f = dc(c[1], a[1], b[1], d[1]);
          this.a = [e[0], f[0]];
          this.b = [e[1], f[1]];
          this.c = [e[2], f[2]];
          this.d = [e[3], f[3]];
          this.points = [c, a, b, d];
        }
        function dd(c, a) {
          var b = c.points[0][a];
          var d = c.points[c.points.length - 1][a];
          if (b > d) {
            var e = d;
            d = b;
            b = e;
          }
          e = c.a[a] * 3;
          var f = c.b[a] * 2;
          var k = c.c[a];
          if (e === 0) {
            e = [];
          } else {
            k = f * f - e * 4 * k;
            if (k < 0) {
              e = [];
            } else {
              f = -f / (e * 2);
              if (k === 0) {
                e = [f];
              } else {
                e = Math.sqrt(k) / (e * 2);
                e = [f - e, f + e];
              }
            }
          }
          for (f = 0; f < e.length; f += 1) {
            if (e[f] > 0 && e[f] < 1) {
              k = c.point(e[f])[a];
              if (k < b) {
                b = k;
              } else if (k > d) {
                d = k;
              }
            }
          }
          return {
            min: b,
            max: d
          };
        }
        function xc(c, a, b) {
          var d = c.boundingBox();
          return {
            cx: d.cx,
            cy: d.cy,
            width: d.width,
            height: d.height,
            bez: c,
            t: (a + b) / 2,
            t1: a,
            t2: b
          };
        }
        function wa(c) {
          var a = c.bez.split(0.5);
          return [xc(a[0], c.t1, c.t), xc(a[1], c.t, c.t2)];
        }
        function ec(c, a, b, d, e, f) {
          if (Math.abs(c.cx - a.cx) * 2 < c.width + a.width && Math.abs(c.cy - a.cy) * 2 < c.height + a.height) {
            if (b >= f || c.width <= d && c.height <= d && a.width <= d && a.height <= d) {
              e.push([c.t, a.t]);
            } else {
              c = wa(c);
              a = wa(a);
              ec(c[0], a[0], b + 1, d, e, f);
              ec(c[0], a[1], b + 1, d, e, f);
              ec(c[1], a[0], b + 1, d, e, f);
              ec(c[1], a[1], b + 1, d, e, f);
            }
          }
        }
        function fc(c, a) {
          return [c[1] * a[2] - c[2] * a[1], c[2] * a[0] - c[0] * a[2], c[0] * a[1] - c[1] * a[0]];
        }
        function yc(c, a, b, d) {
          b = [b[0], b[1], 1];
          d = [d[0], d[1], 1];
          c = fc(fc([c[0], c[1], 1], [a[0], a[1], 1]), fc(b, d));
          if (Math.abs(c[2]) <= 0.00001) {
            return null;
          } else {
            return [c[0] / c[2], c[1] / c[2]];
          }
        }
        function gb(c, a, b) {
          return [c[0] + Math.cos(a) * b, c[1] - Math.sin(a) * b];
        }
        function zc(c, a) {
          return Math.hypot(c[0] - a[0], c[1] - a[1]);
        }
        function mb(c, a) {
          return vb(c[0], a[0]) && vb(c[1], a[1]);
        }
        function hb() {}
        function Mc(c, a, b, d, e, f, k) {
          var n = b - Math.PI / 2;
          var h = b + Math.PI / 2;
          var g = a[0] + Math.cos(b) * d * e;
          a = a[1] - Math.sin(b) * d * e;
          c.setTripleAt(g, a, g + Math.cos(n) * f, a - Math.sin(n) * f, g + Math.cos(h) * k, a - Math.sin(h) * k, c.length());
        }
        function Fb(c, a, b, d, e, f, k) {
          var n;
          var h;
          var g = b === 0 ? a.length() - 1 : b - 1;
          var q = (b + 1) % a.length();
          g = a.v[g];
          q = a.v[q];
          n = [q[0] - g[0], q[1] - g[1]];
          h = -Math.PI * 0.5;
          q = [Math.cos(h) * n[0] - Math.sin(h) * n[1], Math.sin(h) * n[0] + Math.cos(h) * n[1]];
          n = Math.atan2(0, 1) - Math.atan2(q[1], q[0]);
          h = a.v[b % a._length];
          g = a.v[b === 0 ? a._length - 1 : b - 1];
          q = a.v[(b + 1) % a._length];
          g = f === 2 ? Math.sqrt(Math.pow(h[0] - g[0], 2) + Math.pow(h[1] - g[1], 2)) : 0;
          f = f === 2 ? Math.sqrt(Math.pow(h[0] - q[0], 2) + Math.pow(h[1] - q[1], 2)) : 0;
          Mc(c, a.v[b % a._length], n, k, d, f / ((e + 1) * 2), g / ((e + 1) * 2));
        }
        function Gb(c, a, b) {
          var d = Math.atan2(a[0] - c[0], a[1] - c[1]);
          return [gb(c, d, b), gb(a, d, b)];
        }
        function Hb(c, a) {
          var b;
          var d = (b = Gb(c.points[0], c.points[1], a))[0];
          var e = b[1];
          var f = (b = Gb(c.points[1], c.points[2], a))[0];
          var k = b[1];
          c = (b = Gb(c.points[2], c.points[3], a))[0];
          b = b[1];
          a = yc(d, e, f, k);
          if (a === null) {
            a = e;
          }
          e = yc(c, b, f, k);
          if (e === null) {
            e = c;
          }
          return new ma(d, a, e, b);
        }
        function ed(c, a, b, d, e) {
          var f = a.points[3];
          var k = b.points[0];
          if (d === 3 || mb(f, k)) {
            return f;
          } else if (d === 2) {
            e = -a.tangentAngle(1);
            b = -b.tangentAngle(0) + Math.PI;
            a = (a = yc(f, gb(f, e + Math.PI / 2, 100), k, gb(k, e + Math.PI / 2, 100))) ? zc(a, f) : zc(f, k) / 2;
            f = gb(f, e, a * 2 * Bb);
            c.setXYAt(f[0], f[1], "o", c.length() - 1);
            f = gb(k, b, a * 2 * Bb);
            c.setTripleAt(k[0], k[1], k[0], k[1], f[0], f[1], c.length());
            return k;
          } else if ((k = yc(mb(f, a.points[2]) ? a.points[0] : a.points[2], f, k, mb(k, b.points[1]) ? b.points[3] : b.points[1])) && zc(k, f) < e) {
            c.setTripleAt(k[0], k[1], k[0], k[1], k[0], k[1], c.length());
            return k;
          } else {
            return f;
          }
        }
        function Nc(c, a) {
          c = c.intersections(a);
          if (c.length && vb(c[0][0], 1)) {
            c.shift();
          }
          if (c.length) {
            return c[0];
          } else {
            return null;
          }
        }
        function Ib(c, a) {
          var b = c.slice();
          var d = a.slice();
          var e = Nc(c[c.length - 1], a[0]);
          if (e) {
            b[c.length - 1] = c[c.length - 1].split(e[0])[0];
            d[0] = a[0].split(e[1])[1];
          }
          if (c.length > 1 && a.length > 1 && (e = Nc(c[0], a[a.length - 1]))) {
            return [[c[0].split(e[0])[0]], [a[a.length - 1].split(e[1])[1]]];
          } else {
            return [b, d];
          }
        }
        function fd(c, a) {
          var b;
          var d;
          var e;
          var f;
          var k = c.inflectionPoints();
          if (k.length === 0) {
            return [Hb(c, a)];
          }
          if (k.length === 1 || vb(k[1], 1)) {
            b = (e = c.split(k[0]))[0];
            d = e[1];
            return [Hb(b, a), Hb(d, a)];
          }
          b = (e = c.split(k[0]))[0];
          c = (k[1] - k[0]) / (1 - k[0]);
          f = (e = e[1].split(c))[0];
          d = e[1];
          return [Hb(b, a), Hb(f, a), Hb(d, a)];
        }
        function hc() {}
        function gd(c) {
          var a = c.fStyle ? c.fStyle.split(" ") : [];
          var b = "normal";
          var d = "normal";
          for (var e = a.length, f = 0; f < e; f += 1) {
            switch (a[f].toLowerCase()) {
              case "italic":
                d = "italic";
                break;
              case "bold":
                b = "700";
                break;
              case "black":
                b = "900";
                break;
              case "medium":
                b = "500";
                break;
              case "regular":
              case "normal":
                b = "400";
                break;
              case "light":
              case "thin":
                b = "200";
            }
          }
          return {
            style: d,
            weight: c.fWeight || b
          };
        }
        function hd(c) {
          this.animationData = c;
        }
        function xb() {}
        function wd(c, a, b) {
          this.p = Q.getProp(a, c.v, 0, 0, b);
        }
        function xd(c, a, b) {
          this.p = Q.getProp(a, c.v, 0, 0, b);
        }
        function Oc(c, a, b) {
          this.p = Q.getProp(a, c.v, 1, 0, b);
        }
        function Hd(c, a, b) {
          this.p = Q.getProp(a, c.v, 1, 0, b);
        }
        function Id(c, a, b) {
          this.p = Q.getProp(a, c.v, 0, 0, b);
        }
        function Jd(c, a, b) {
          this.p = Q.getProp(a, c.v, 0, 0, b);
        }
        function Kd(c, a, b) {
          this.p = Q.getProp(a, c.v, 0, 0, b);
        }
        function Ld() {
          this.p = {};
        }
        function yd(c, a) {
          var b = c.ef || [];
          this.effectElements = [];
          var d = b.length;
          for (c = 0; c < d; c += 1) {
            var e = new Ac(b[c], a);
            this.effectElements.push(e);
          }
        }
        function Ac(c, a) {
          this.init(c, a);
        }
        function yb() {}
        function nb() {}
        function $a(c, a, b) {
          this.initFrame();
          this.initRenderable();
          this.assetData = a.getAssetData(c.refId);
          this.footageData = a.imageLoader.getAsset(this.assetData);
          this.initBaseData(c, a, b);
        }
        function Aa(c, a, b) {
          this.initFrame();
          this.initRenderable();
          this.assetData = a.getAssetData(c.refId);
          this.initBaseData(c, a, b);
          this._canPlay = this._isPlaying = false;
          b = this.globalData.getAssetsPath(this.assetData);
          this.audio = this.globalData.audioController.createAudio(b);
          this._currentTime = 0;
          this.globalData.audioController.addAudio(this);
          this._volume = this._volumeMultiplier = 1;
          this._previousVolume = null;
          this.tm = c.tm ? Q.getProp(this, c.tm, 0, a.frameRate, this) : {
            _placeholder: true
          };
          this.lv = Q.getProp(this, c.au && c.au.lv ? c.au.lv : {
            k: [100]
          }, 1, 0.01, this);
        }
        function ua() {}
        function Wa() {}
        function Fa(c, a, b) {
          this.data = c;
          this.element = a;
          this.globalData = b;
          this.storedData = [];
          this.masksProperties = this.data.masksProperties || [];
          this.maskElement = null;
          b = this.globalData.defs;
          var d = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = ta(d);
          this.solidPath = "";
          var e;
          var f;
          var k;
          var n;
          var h;
          var g = this.masksProperties;
          var q = 0;
          var r = [];
          var v = Ca();
          var p = "clipPath";
          var l = "clip-path";
          for (c = 0; c < d; c += 1) {
            if (g[c].mode !== "a" && g[c].mode !== "n" || g[c].inv || g[c].o.k !== 100 || g[c].o.x) {
              p = "mask";
              l = "mask";
            }
            if (g[c].mode !== "s" && g[c].mode !== "i" || q !== 0) {
              f = null;
            } else {
              (f = X("rect")).setAttribute("fill", "#ffffff");
              f.setAttribute("width", this.element.comp.data.w || 0);
              f.setAttribute("height", this.element.comp.data.h || 0);
              r.push(f);
            }
            a = X("path");
            if (g[c].mode === "n") {
              this.viewData[c] = {
                op: Q.getProp(this.element, g[c].o, 0, 0.01, this.element),
                prop: ja.getShapeProp(this.element, g[c], 3),
                elem: a,
                lastPath: ""
              };
              b.appendChild(a);
            } else {
              var m;
              q += 1;
              a.setAttribute("fill", g[c].mode === "s" ? "#000000" : "#ffffff");
              a.setAttribute("clip-rule", "nonzero");
              if (g[c].x.k !== 0) {
                p = "mask";
                l = "mask";
                h = Q.getProp(this.element, g[c].x, 0, null, this.element);
                m = Ca();
                (k = X("filter")).setAttribute("id", m);
                (n = X("feMorphology")).setAttribute("operator", "erode");
                n.setAttribute("in", "SourceGraphic");
                n.setAttribute("radius", "0");
                k.appendChild(n);
                b.appendChild(k);
                a.setAttribute("stroke", g[c].mode === "s" ? "#000000" : "#ffffff");
              } else {
                n = null;
                h = null;
              }
              this.storedData[c] = {
                elem: a,
                x: h,
                expan: n,
                lastPath: "",
                lastOperator: "",
                filterId: m,
                lastRadius: 0
              };
              if (g[c].mode === "i") {
                var t = r.length;
                var u = X("g");
                for (e = 0; e < t; e += 1) {
                  u.appendChild(r[e]);
                }
                e = X("mask");
                e.setAttribute("mask-type", "alpha");
                e.setAttribute("id", v + "_" + q);
                e.appendChild(a);
                b.appendChild(e);
                u.setAttribute("mask", "url(" + Ma + "#" + v + "_" + q + ")");
                r.length = 0;
                r.push(u);
              } else {
                r.push(a);
              }
              if (g[c].inv && !this.solidPath) {
                this.solidPath = this.createLayerSolidPath();
              }
              this.viewData[c] = {
                elem: a,
                lastPath: "",
                op: Q.getProp(this.element, g[c].o, 0, 0.01, this.element),
                prop: ja.getShapeProp(this.element, g[c], 3),
                invRect: f
              };
              if (!this.viewData[c].prop.k) {
                this.drawPath(g[c], this.viewData[c].prop.v, this.viewData[c]);
              }
            }
          }
          this.maskElement = X(p);
          d = r.length;
          for (c = 0; c < d; c += 1) {
            this.maskElement.appendChild(r[c]);
          }
          if (q > 0) {
            this.maskElement.setAttribute("id", v);
            this.element.maskedElement.setAttribute(l, "url(" + Ma + "#" + v + ")");
            b.appendChild(this.maskElement);
          }
          if (this.viewData.length) {
            this.element.addRenderableComponent(this);
          }
        }
        function La(c) {
          var a;
          var b = "SourceGraphic";
          var d = c.data.ef ? c.data.ef.length : 0;
          var e = Ca();
          var f = bc.createFilter(e, true);
          var k = 0;
          this.filters = [];
          for (a = 0; a < d; a += 1) {
            var n = null;
            var h = c.data.ef[a].ty;
            if (Uc[h]) {
              n = new Uc[h].effect(f, c.effectsManager.effectElements[a], c, Pc + k, b);
              b = Pc + k;
              if (Uc[h].countsAsEffect) {
                k += 1;
              }
            }
            if (n) {
              this.filters.push(n);
            }
          }
          if (k) {
            c.globalData.defs.appendChild(f);
            c.layerElement.setAttribute("filter", "url(" + Ma + "#" + e + ")");
          }
          if (this.filters.length) {
            c.addRenderableComponent(this);
          }
        }
        function ib() {}
        function ab() {}
        function Jb() {}
        function ob(c, a, b) {
          if ((this.assetData = a.getAssetData(c.refId)) && this.assetData.sid) {
            this.assetData = a.slotManager.getProp(this.assetData);
          }
          this.initElement(c, a, b);
          this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
          };
        }
        function jc(c, a) {
          this.elem = c;
          this.pos = a;
        }
        function kc() {}
        function lc(c, a, b) {
          this.caches = [];
          this.styles = [];
          this.transformers = c;
          this.lStr = "";
          this.sh = b;
          this.lvl = a;
          this._isAnimated = !!b.k;
          a = 0;
          for (b = c.length; a < b;) {
            if (c[a].mProps.dynamicProperties.length) {
              this._isAnimated = true;
              break;
            }
            a += 1;
          }
        }
        function zd(c, a) {
          this.data = c;
          this.type = c.ty;
          this.d = "";
          this.lvl = a;
          this._mdf = false;
          this.closed = c.hd === true;
          this.pElem = X("path");
          this.msElem = null;
        }
        function Bc(c, a, b, d) {
          this.elem = c;
          this.frameId = -1;
          this.dataProps = ta(a.length);
          this.renderer = b;
          this.k = false;
          this.dashStr = "";
          this.dashArray = la("float32", a.length ? a.length - 1 : 0);
          this.dashoffset = la("float32", 1);
          this.initDynamicPropertyContainer(d);
          var e = a.length || 0;
          for (b = 0; b < e; b += 1) {
            d = Q.getProp(c, a[b].v, 0, 0, this);
            this.k = d.k || this.k;
            this.dataProps[b] = {
              n: a[b].n,
              p: d
            };
          }
          if (!this.k) {
            this.getValue(true);
          }
          this._isAnimated = this.k;
        }
        function jd(c, a, b) {
          this.initDynamicPropertyContainer(c);
          this.getValue = this.iterateDynamicProperties;
          this.o = Q.getProp(c, a.o, 0, 0.01, this);
          this.w = Q.getProp(c, a.w, 0, null, this);
          this.d = new Bc(c, a.d || {}, "svg", this);
          this.c = Q.getProp(c, a.c, 1, 255, this);
          this.style = b;
          this._isAnimated = !!this._isAnimated;
        }
        function kd(c, a, b) {
          this.initDynamicPropertyContainer(c);
          this.getValue = this.iterateDynamicProperties;
          this.o = Q.getProp(c, a.o, 0, 0.01, this);
          this.c = Q.getProp(c, a.c, 1, 255, this);
          this.style = b;
        }
        function Cc(c, a, b) {
          this.initDynamicPropertyContainer(c);
          this.getValue = this.iterateDynamicProperties;
          this.style = b;
        }
        function mc(c, a, b) {
          this.data = a;
          this.c = la("uint8c", a.p * 4);
          var d = a.k.k[0].s ? a.k.k[0].s.length - a.p * 4 : a.k.k.length - a.p * 4;
          this.o = la("float32", d);
          this._omdf = this._cmdf = false;
          this._collapsable = this.checkCollapsable();
          this._hasOpacity = d;
          this.initDynamicPropertyContainer(b);
          this.prop = Q.getProp(c, a.k, 1, null, this);
          this.k = this.prop.k;
          this.getValue(true);
        }
        function Kb(c, a, b) {
          this.initDynamicPropertyContainer(c);
          this.getValue = this.iterateDynamicProperties;
          this.initGradientData(c, a, b);
        }
        function ld(c, a, b) {
          this.initDynamicPropertyContainer(c);
          this.getValue = this.iterateDynamicProperties;
          this.w = Q.getProp(c, a.w, 0, null, this);
          this.d = new Bc(c, a.d || {}, "svg", this);
          this.initGradientData(c, a, b);
          this._isAnimated = !!this._isAnimated;
        }
        function Dc() {
          this.it = [];
          this.prevViewData = [];
          this.gr = X("g");
        }
        function nc(c, a, b) {
          this.transform = {
            mProps: c,
            op: a,
            container: b
          };
          this.elements = [];
          this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
        }
        function Ba(c, a, b) {
          this.shapes = [];
          this.shapesData = c.shapes;
          this.stylesList = [];
          this.shapeModifiers = [];
          this.itemsData = [];
          this.processedElements = [];
          this.animatedContents = [];
          this.initElement(c, a, b);
          this.prevViewData = [];
        }
        function md(c, a, b, d, e, f) {
          this.o = c;
          this.sw = a;
          this.sc = b;
          this.fc = d;
          this.m = e;
          this.p = f;
          this._mdf = {
            o: true,
            sw: !!a,
            sc: !!b,
            fc: !!d,
            m: true,
            p: true
          };
        }
        function Sa(c, a) {
          this._frameId = Rc;
          this.v = this.pv = "";
          this.kf = false;
          this._isFirstFrame = true;
          this._mdf = false;
          if (a.d && a.d.sid) {
            a.d = c.globalData.slotManager.getProp(a.d);
          }
          this.data = a;
          this.elem = c;
          this.comp = this.elem.comp;
          this.keysIndex = 0;
          this.canResize = false;
          this.minimumFontSize = 1;
          this.effectsSequence = [];
          this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: false,
            strokeColorAnim: false,
            strokeWidthAnim: false,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: false
          };
          this.copyData(this.currentData, this.data.d.k[0].s);
          if (!this.searchProperty()) {
            this.completeTextData(this.currentData);
          }
        }
        function Ga(c, a, b) {
          var d = {
            propType: false
          };
          var e = Q.getProp;
          var f = a.a;
          this.a = {
            r: f.r ? e(c, f.r, 0, qa, b) : d,
            rx: f.rx ? e(c, f.rx, 0, qa, b) : d,
            ry: f.ry ? e(c, f.ry, 0, qa, b) : d,
            sk: f.sk ? e(c, f.sk, 0, qa, b) : d,
            sa: f.sa ? e(c, f.sa, 0, qa, b) : d,
            s: f.s ? e(c, f.s, 1, 0.01, b) : d,
            a: f.a ? e(c, f.a, 1, 0, b) : d,
            o: f.o ? e(c, f.o, 0, 0.01, b) : d,
            p: f.p ? e(c, f.p, 1, 0, b) : d,
            sw: f.sw ? e(c, f.sw, 0, 0, b) : d,
            sc: f.sc ? e(c, f.sc, 1, 0, b) : d,
            fc: f.fc ? e(c, f.fc, 1, 0, b) : d,
            fh: f.fh ? e(c, f.fh, 0, 0, b) : d,
            fs: f.fs ? e(c, f.fs, 0, 0.01, b) : d,
            fb: f.fb ? e(c, f.fb, 0, 0.01, b) : d,
            t: f.t ? e(c, f.t, 0, 0, b) : d
          };
          this.s = Pd.getTextSelectorProp(c, a.s, b);
          this.s.t = a.s.t;
        }
        function pb(c, a, b) {
          this._isFirstFrame = true;
          this._hasMaskedPath = false;
          this._frameId = -1;
          this._textData = c;
          this._renderType = a;
          this._elem = b;
          this._animatorsData = ta(this._textData.a.length);
          this._pathData = {};
          this._moreOptions = {
            alignment: {}
          };
          this.renderedLetters = [];
          this.lettersChangedFlag = false;
          this.initDynamicPropertyContainer(b);
        }
        function oa() {}
        function qb(c, a, b) {
          this.textSpans = [];
          this.renderType = "svg";
          this.initElement(c, a, b);
        }
        function rb(c, a, b) {
          this.initElement(c, a, b);
        }
        function Ka(c, a, b) {
          this.initFrame();
          this.initBaseData(c, a, b);
          this.initFrame();
          this.initTransform(c, a, b);
          this.initHierarchy();
        }
        function pa() {}
        function db() {}
        function bb(c, a, b) {
          this.layers = c.layers;
          this.supports3d = true;
          this.completeLayers = false;
          this.pendingElements = [];
          this.elements = this.layers ? ta(this.layers.length) : [];
          this.initElement(c, a, b);
          this.tm = c.tm ? Q.getProp(this, c.tm, 0, a.frameRate, this) : {
            _placeholder: true
          };
        }
        function Ha(c, a) {
          this.animationItem = c;
          this.layers = null;
          this.renderedFrame = -1;
          this.svgElement = X("svg");
          c = "";
          if (a && a.title) {
            var b = X("title");
            var d = Ca();
            b.setAttribute("id", d);
            b.textContent = a.title;
            this.svgElement.appendChild(b);
            c += d;
          }
          if (a && a.description) {
            b = X("desc");
            d = Ca();
            b.setAttribute("id", d);
            b.textContent = a.description;
            this.svgElement.appendChild(b);
            c += " " + d;
          }
          if (c) {
            this.svgElement.setAttribute("aria-labelledby", c);
          }
          c = X("defs");
          this.svgElement.appendChild(c);
          b = X("g");
          this.svgElement.appendChild(b);
          this.layerElement = b;
          this.renderConfig = {
            preserveAspectRatio: a && a.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: a && a.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: a && a.contentVisibility || "visible",
            progressiveLoad: a && a.progressiveLoad || false,
            hideOnTransparent: !a || a.hideOnTransparent !== false,
            viewBoxOnly: a && a.viewBoxOnly || false,
            viewBoxSize: a && a.viewBoxSize || false,
            className: a && a.className || "",
            id: a && a.id || "",
            focusable: a && a.focusable,
            filterSize: {
              width: a && a.filterSize && a.filterSize.width || "100%",
              height: a && a.filterSize && a.filterSize.height || "100%",
              x: a && a.filterSize && a.filterSize.x || "0%",
              y: a && a.filterSize && a.filterSize.y || "0%"
            },
            width: a && a.width,
            height: a && a.height,
            runExpressions: !a || a.runExpressions === undefined || a.runExpressions
          };
          this.globalData = {
            _mdf: false,
            frameNum: -1,
            defs: c,
            renderConfig: this.renderConfig
          };
          this.elements = [];
          this.pendingElements = [];
          this.destroyed = false;
          this.rendererType = "svg";
        }
        var jb = function () {
          var c = globalThis.safevalues_raw;
          if (!c) {
            console.error("Could not load raw safevalues");
          }
          return c;
        }();
        var Ma = "";
        var Qc = false;
        var Rc = -999999;
        var Ed = function () {
          function c(a) {
            this.audios = [];
            this.audioFactory = a;
            this._volume = 1;
            this._isMuted = false;
          }
          c.prototype = {
            addAudio: function (a) {
              this.audios.push(a);
            },
            pause: function () {
              var a;
              var b = this.audios.length;
              for (a = 0; a < b; a += 1) {
                this.audios[a].pause();
              }
            },
            resume: function () {
              var a;
              var b = this.audios.length;
              for (a = 0; a < b; a += 1) {
                this.audios[a].resume();
              }
            },
            setRate: function (a) {
              var b;
              var d = this.audios.length;
              for (b = 0; b < d; b += 1) {
                this.audios[b].setRate(a);
              }
            },
            createAudio: function (a) {
              if (this.audioFactory) {
                return this.audioFactory(a);
              } else if (window.Howl) {
                return new window.Howl({
                  src: [a]
                });
              } else {
                return {
                  isPlaying: false,
                  play: function () {
                    this.isPlaying = true;
                  },
                  seek: function () {
                    this.isPlaying = false;
                  },
                  playing: function () {},
                  rate: function () {},
                  setVolume: function () {}
                };
              }
            },
            setAudioFactory: function (a) {
              this.audioFactory = a;
            },
            setVolume: function (a) {
              this._volume = a;
              this._updateVolume();
            },
            mute: function () {
              this._isMuted = true;
              this._updateVolume();
            },
            unmute: function () {
              this._isMuted = false;
              this._updateVolume();
            },
            getVolume: function () {
              return this._volume;
            },
            _updateVolume: function () {
              var a;
              var b = this.audios.length;
              for (a = 0; a < b; a += 1) {
                this.audios[a].volume(this._volume * (this._isMuted ? 0 : 1));
              }
            }
          };
          return function () {
            return new c();
          };
        }();
        var la = function () {
          function c(a, b) {
            var d;
            var e = [];
            switch (a) {
              case "int16":
              case "uint8c":
                a = 1;
                break;
              default:
                a = 1.1;
            }
            for (d = 0; d < b; d += 1) {
              e.push(a);
            }
            return e;
          }
          if (typeof Uint8ClampedArray == "function" && typeof Float32Array == "function") {
            return function (a, b) {
              if (a === "float32") {
                return new Float32Array(b);
              } else if (a === "int16") {
                return new Int16Array(b);
              } else if (a === "uint8c") {
                return new Uint8ClampedArray(b);
              } else {
                return c(a, b);
              }
            };
          } else {
            return c;
          }
        }();
        var nd = true;
        var Lb = null;
        var Ad = "";
        var Oa = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        var eb = Math.pow;
        var oc = Math.sqrt;
        var Ab = Math.floor;
        Math.max;
        var Nd = Math.min;
        var cb = {};
        (function () {
          var c;
          var a = "abs acos acosh asin asinh atan atanh atan2 ceil cbrt expm1 clz32 cos cosh exp floor fround hypot imul log log1p log2 log10 max min pow random round sign sin sinh sqrt tan tanh trunc E LN10 LN2 LOG10E LOG2E PI SQRT1_2 SQRT2".split(" ");
          var b = a.length;
          for (c = 0; c < b; c += 1) {
            cb[a[c]] = Math[a[c]];
          }
        })();
        cb.random = Math.random;
        cb.abs = function (c) {
          if (ya(c) === "object" && c.length) {
            var a;
            var b = ta(c.length);
            var d = c.length;
            for (a = 0; a < d; a += 1) {
              b[a] = Math.abs(c[a]);
            }
            return b;
          }
          return Math.abs(c);
        };
        var sb = 150;
        var qa = Math.PI / 180;
        var Bb = 0.5519;
        var Sc;
        Sc = 0;
        function Ca() {
          return Ad + "__lottie_element_" + (Sc += 1);
        }
        (function () {
          var c;
          for (c = 0; c < 256; c += 1) {
            var a = c.toString(16);
            a.length;
          }
        })();
        var ra = function () {
          function c(g) {
            if (window.Worker && window.Blob && Qc) {
              g = new Blob(["var _workerSelf = self; self.onmessage = ", g.toString()], {
                type: "text/javascript"
              });
              g = jb.trustedResourceUrl(g);
              return jb.dom.createWorker(g);
            } else {
              d = g;
              return n;
            }
          }
          function a() {
            if (!e) {
              e = c(function (g) {
                h.dataManager ||= function () {
                  function r(F, G) {
                    var B;
                    var z;
                    var y;
                    var C;
                    var N = F.length;
                    for (z = 0; z < N; z += 1) {
                      if ("ks" in (B = F[z]) && !B.completed) {
                        B.completed = true;
                        if (B.hasMask) {
                          var P = B.masksProperties;
                          var ea = P.length;
                          for (y = 0; y < ea; y += 1) {
                            if (P[y].pt.k.i) {
                              l(P[y].pt.k);
                            } else {
                              var ia = P[y].pt.k.length;
                              for (C = 0; C < ia; C += 1) {
                                if (P[y].pt.k[C].s) {
                                  l(P[y].pt.k[C].s[0]);
                                }
                                if (P[y].pt.k[C].e) {
                                  l(P[y].pt.k[C].e[0]);
                                }
                              }
                            }
                          }
                        }
                        if (B.ty === 0) {
                          B.layers = v(B.refId, G);
                          r(B.layers, G);
                        } else if (B.ty === 4) {
                          p(B.shapes);
                        } else if (B.ty === 5 && B.t.a.length === 0) {
                          B.t.p;
                        }
                      }
                    }
                  }
                  function v(F, G) {
                    a: {
                      for (var B = 0, z = G.length; B < z;) {
                        if (G[B].id === F) {
                          F = G[B];
                          break a;
                        }
                        B += 1;
                      }
                      F = null;
                    }
                    if (F) {
                      if (F.layers.__used) {
                        return JSON.parse(JSON.stringify(F.layers));
                      } else {
                        F.layers.__used = true;
                        return F.layers;
                      }
                    } else {
                      return null;
                    }
                  }
                  function p(F) {
                    var G;
                    var B;
                    for (G = F.length - 1; G >= 0; --G) {
                      if (F[G].ty === "sh") {
                        if (F[G].ks.k.i) {
                          l(F[G].ks.k);
                        } else {
                          var z = F[G].ks.k.length;
                          for (B = 0; B < z; B += 1) {
                            if (F[G].ks.k[B].s) {
                              l(F[G].ks.k[B].s[0]);
                            }
                            if (F[G].ks.k[B].e) {
                              l(F[G].ks.k[B].e[0]);
                            }
                          }
                        }
                      } else if (F[G].ty === "gr") {
                        p(F[G].it);
                      }
                    }
                  }
                  function l(F) {
                    var G;
                    var B = F.i.length;
                    for (G = 0; G < B; G += 1) {
                      F.i[G][0] += F.v[G][0];
                      F.i[G][1] += F.v[G][1];
                      F.o[G][0] += F.v[G][0];
                      F.o[G][1] += F.v[G][1];
                    }
                  }
                  function m(F, G) {
                    G = G ? G.split(".") : [100, 100, 100];
                    return F[0] > G[0] || !(G[0] > F[0]) && (F[1] > G[1] || !(G[1] > F[1]) && (F[2] > G[2] || !(G[2] > F[2]) && null));
                  }
                  var t;
                  var u = function () {
                    function F(B) {
                      var z;
                      var y;
                      var C;
                      var N = B.length;
                      for (z = 0; z < N; z += 1) {
                        if (B[z].ty === 5) {
                          C = undefined;
                          C = (y = B[z]).t.d;
                          y.t.d = {
                            k: [{
                              s: C,
                              t: 0
                            }]
                          };
                        }
                      }
                    }
                    var G = [4, 4, 14];
                    return function (B) {
                      if (m(G, B.v) && (F(B.layers), B.assets)) {
                        var z;
                        var y = B.assets.length;
                        for (z = 0; z < y; z += 1) {
                          if (B.assets[z].layers) {
                            F(B.assets[z].layers);
                          }
                        }
                      }
                    };
                  }();
                  t = [4, 7, 99];
                  function w(F) {
                    if (F.chars && !m(t, F.v)) {
                      var G;
                      var B = F.chars.length;
                      for (G = 0; G < B; G += 1) {
                        var z = F.chars[G];
                        if (z.data && z.data.shapes) {
                          p(z.data.shapes);
                          z.data.ip = 0;
                          z.data.op = 99999;
                          z.data.st = 0;
                          z.data.sr = 1;
                          z.data.ks = {
                            p: {
                              k: [0, 0],
                              a: 0
                            },
                            s: {
                              k: [100, 100],
                              a: 0
                            },
                            a: {
                              k: [0, 0],
                              a: 0
                            },
                            r: {
                              k: 0,
                              a: 0
                            },
                            o: {
                              k: 100,
                              a: 0
                            }
                          };
                          if (!F.chars[G].t) {
                            z.data.shapes.push({
                              ty: "no"
                            });
                            z.data.shapes[0].it.push({
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              },
                              sk: {
                                k: 0,
                                a: 0
                              },
                              sa: {
                                k: 0,
                                a: 0
                              },
                              ty: "tr"
                            });
                          }
                        }
                      }
                    }
                  }
                  var x = function () {
                    function F(B) {
                      var z;
                      var y;
                      var C = B.length;
                      for (z = 0; z < C; z += 1) {
                        if (B[z].ty === 5) {
                          y = undefined;
                          if (typeof (y = B[z].t.p).a == "number") {
                            y.a = {
                              a: 0,
                              k: y.a
                            };
                          }
                          if (typeof y.p == "number") {
                            y.p = {
                              a: 0,
                              k: y.p
                            };
                          }
                          if (typeof y.r == "number") {
                            y.r = {
                              a: 0,
                              k: y.r
                            };
                          }
                        }
                      }
                    }
                    var G = [5, 7, 15];
                    return function (B) {
                      if (m(G, B.v) && (F(B.layers), B.assets)) {
                        var z;
                        var y = B.assets.length;
                        for (z = 0; z < y; z += 1) {
                          if (B.assets[z].layers) {
                            F(B.assets[z].layers);
                          }
                        }
                      }
                    };
                  }();
                  var D = function () {
                    function F(z) {
                      var y;
                      var C;
                      var N = z.length;
                      for (y = 0; y < N; y += 1) {
                        if (z[y].ty === "gr") {
                          F(z[y].it);
                        } else if (z[y].ty === "fl" || z[y].ty === "st") {
                          if (z[y].c.k && z[y].c.k[0].i) {
                            var P = z[y].c.k.length;
                            for (C = 0; C < P; C += 1) {
                              if (z[y].c.k[C].s) {
                                z[y].c.k[C].s[0] /= 255;
                                z[y].c.k[C].s[1] /= 255;
                                z[y].c.k[C].s[2] /= 255;
                                z[y].c.k[C].s[3] /= 255;
                              }
                              if (z[y].c.k[C].e) {
                                z[y].c.k[C].e[0] /= 255;
                                z[y].c.k[C].e[1] /= 255;
                                z[y].c.k[C].e[2] /= 255;
                                z[y].c.k[C].e[3] /= 255;
                              }
                            }
                          } else {
                            z[y].c.k[0] /= 255;
                            z[y].c.k[1] /= 255;
                            z[y].c.k[2] /= 255;
                            z[y].c.k[3] /= 255;
                          }
                        }
                      }
                    }
                    function G(z) {
                      var y;
                      var C = z.length;
                      for (y = 0; y < C; y += 1) {
                        if (z[y].ty === 4) {
                          F(z[y].shapes);
                        }
                      }
                    }
                    var B = [4, 1, 9];
                    return function (z) {
                      if (m(B, z.v) && (G(z.layers), z.assets)) {
                        var y;
                        var C = z.assets.length;
                        for (y = 0; y < C; y += 1) {
                          if (z.assets[y].layers) {
                            G(z.assets[y].layers);
                          }
                        }
                      }
                    };
                  }();
                  var K = function () {
                    function F(z) {
                      var y;
                      var C;
                      for (y = z.length - 1; y >= 0; --y) {
                        if (z[y].ty === "sh") {
                          if (z[y].ks.k.i) {
                            z[y].ks.k.c = z[y].closed;
                          } else {
                            var N = z[y].ks.k.length;
                            for (C = 0; C < N; C += 1) {
                              if (z[y].ks.k[C].s) {
                                z[y].ks.k[C].s[0].c = z[y].closed;
                              }
                              if (z[y].ks.k[C].e) {
                                z[y].ks.k[C].e[0].c = z[y].closed;
                              }
                            }
                          }
                        } else if (z[y].ty === "gr") {
                          F(z[y].it);
                        }
                      }
                    }
                    function G(z) {
                      var y;
                      var C;
                      var N;
                      var P;
                      var ea = z.length;
                      for (C = 0; C < ea; C += 1) {
                        if ((y = z[C]).hasMask) {
                          var ia = y.masksProperties;
                          var S = ia.length;
                          for (N = 0; N < S; N += 1) {
                            if (ia[N].pt.k.i) {
                              ia[N].pt.k.c = ia[N].cl;
                            } else {
                              var H = ia[N].pt.k.length;
                              for (P = 0; P < H; P += 1) {
                                if (ia[N].pt.k[P].s) {
                                  ia[N].pt.k[P].s[0].c = ia[N].cl;
                                }
                                if (ia[N].pt.k[P].e) {
                                  ia[N].pt.k[P].e[0].c = ia[N].cl;
                                }
                              }
                            }
                          }
                        }
                        if (y.ty === 4) {
                          F(y.shapes);
                        }
                      }
                    }
                    var B = [4, 4, 18];
                    return function (z) {
                      if (m(B, z.v) && (G(z.layers), z.assets)) {
                        var y;
                        var C = z.assets.length;
                        for (y = 0; y < C; y += 1) {
                          if (z.assets[y].layers) {
                            G(z.assets[y].layers);
                          }
                        }
                      }
                    };
                  }();
                  var J = {
                    completeData: function (F) {
                      if (!F.__complete) {
                        D(F);
                        u(F);
                        w(F);
                        x(F);
                        K(F);
                        r(F.layers, F.assets);
                        var G = F.chars;
                        var B = F.assets;
                        if (G) {
                          var z;
                          var y = G.length;
                          for (z = 0; z < y; z += 1) {
                            if (G[z].t === 1) {
                              G[z].data.layers = v(G[z].data.refId, B);
                              r(G[z].data.layers, B);
                            }
                          }
                        }
                        F.__complete = true;
                      }
                    }
                  };
                  J.checkColors = D;
                  J.checkChars = w;
                  J.checkPathProperties = x;
                  J.checkShapes = K;
                  J.completeLayers = r;
                  return J;
                }();
                h.assetLoader ||= function () {
                  function r(v) {
                    var p = v.getResponseHeader("content-type");
                    if (p && v.responseType === "json" && p.indexOf("json") !== -1 || v.response && W(v.response) === "object") {
                      return v.response;
                    } else if (v.response && typeof v.response == "string") {
                      return JSON.parse(v.response);
                    } else if (v.responseText) {
                      return JSON.parse(v.responseText);
                    } else {
                      return null;
                    }
                  }
                  return {
                    load: function (v, p, l, m) {
                      var t;
                      var u = new XMLHttpRequest();
                      try {
                        u.responseType = "json";
                      } catch (w) {}
                      u.onreadystatechange = function () {
                        if (u.readyState === 4) {
                          if (u.status === 200) {
                            t = r(u);
                            l(t);
                          } else {
                            try {
                              t = r(u);
                              l(t);
                            } catch (w) {
                              if (m) {
                                m(w);
                              }
                            }
                          }
                        }
                      };
                      try {
                        u.open("GET", v, true);
                      } catch (w) {
                        u.open("GET", p + "/" + v, true);
                      }
                      u.send();
                    }
                  };
                }();
                if (g.data.type === "loadAnimation") {
                  h.assetLoader.load(g.data.path, g.data.fullPath, function (r) {
                    h.dataManager.completeData(r);
                    h.postMessage({
                      id: g.data.id,
                      payload: r,
                      status: "success"
                    });
                  }, function () {
                    h.postMessage({
                      id: g.data.id,
                      status: "error"
                    });
                  });
                } else if (g.data.type === "complete") {
                  var q = g.data.animation;
                  h.dataManager.completeData(q);
                  h.postMessage({
                    id: g.data.id,
                    payload: q,
                    status: "success"
                  });
                } else if (g.data.type === "loadData") {
                  h.assetLoader.load(g.data.path, g.data.fullPath, function (r) {
                    h.postMessage({
                      id: g.data.id,
                      payload: r,
                      status: "success"
                    });
                  }, function () {
                    h.postMessage({
                      id: g.data.id,
                      status: "error"
                    });
                  });
                }
              });
              e.onmessage = function (g) {
                g = g.data;
                var q = g.id;
                var r = k[q];
                k[q] = null;
                if (g.status === "success") {
                  r.onComplete(g.payload);
                } else if (r.onError) {
                  r.onError();
                }
              };
            }
          }
          function b(g, q) {
            var r = "processId_" + (f += 1);
            k[r] = {
              onComplete: g,
              onError: q
            };
            return r;
          }
          var d;
          var e;
          var f = 1;
          var k = [];
          var n = {
            onmessage: function () {},
            postMessage: function (g) {
              d({
                data: g
              });
            }
          };
          var h = {
            postMessage: function (g) {
              n.onmessage({
                data: g
              });
            }
          };
          return {
            loadAnimation: function (g, q, r) {
              a();
              q = b(q, r);
              e.postMessage({
                type: "loadAnimation",
                path: g,
                fullPath: window.location.origin + window.location.pathname,
                id: q
              });
            },
            loadData: function (g, q, r) {
              a();
              q = b(q, r);
              e.postMessage({
                type: "loadData",
                path: g,
                fullPath: window.location.origin + window.location.pathname,
                id: q
              });
            },
            completeAnimation: function (g, q, r) {
              a();
              q = b(q, r);
              e.postMessage({
                type: "complete",
                animation: g,
                id: q
              });
            }
          };
        }();
        var wb = function () {
          function c() {
            this.loadedAssets += 1;
            if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb) {
              this.imagesLoadedCb(null);
            }
          }
          function a() {
            this.loadedFootagesCount += 1;
            if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb) {
              this.imagesLoadedCb(null);
            }
          }
          function b(n, h, g) {
            if (n.e) {
              h = n.p;
            } else if (h) {
              n = n.p;
              if (n.indexOf("images/") !== -1) {
                n = n.split("/")[1];
              }
              h += n;
            } else {
              h = g + (n.u ? n.u : "");
              h += n.p;
            }
            return h;
          }
          function d(n) {
            var h = 0;
            var g = setInterval(function () {
              if (n.getBBox().width || h > 500) {
                this._imageLoaded();
                clearInterval(g);
              }
              h += 1;
            }.bind(this), 50);
          }
          function e(n) {
            var h = {
              assetData: n
            };
            n = b(n, this.assetsPath, this.path);
            ra.loadData(n, function (g) {
              h.img = g;
              this._footageLoaded();
            }.bind(this), function () {
              h.img = {};
              this._footageLoaded();
            }.bind(this));
            return h;
          }
          function f() {
            this._imageLoaded = c.bind(this);
            this._footageLoaded = a.bind(this);
            this.testImageLoaded = d.bind(this);
            this.createFootageData = e.bind(this);
            this.path = this.assetsPath = "";
            this.loadedFootagesCount = this.loadedAssets = this.totalFootages = this.totalImages = 0;
            this.imagesLoadedCb = null;
            this.images = [];
          }
          var k = function () {
            var n = document.createElement("canvas");
            n.width = 1;
            n.height = 1;
            var h = n.getContext("2d");
            h.fillStyle = "rgba(0,0,0,0)";
            h.fillRect(0, 0, 1, 1);
            return n;
          }();
          f.prototype = {
            loadAssets: function (n, h) {
              this.imagesLoadedCb = h;
              var g = n.length;
              for (h = 0; h < g; h += 1) {
                if (!n[h].layers) {
                  if (n[h].t && n[h].t !== "seq") {
                    if (n[h].t === 3) {
                      this.totalFootages += 1;
                      this.images.push(this.createFootageData(n[h]));
                    }
                  } else {
                    this.totalImages += 1;
                    this.images.push(this._createImageData(n[h]));
                  }
                }
              }
            },
            setAssetsPath: function (n) {
              this.assetsPath = n || "";
            },
            setPath: function (n) {
              this.path = n || "";
            },
            loadedImages: function () {
              return this.totalImages === this.loadedAssets;
            },
            loadedFootages: function () {
              return this.totalFootages === this.loadedFootagesCount;
            },
            destroy: function () {
              this.imagesLoadedCb = null;
              this.images.length = 0;
            },
            getAsset: function (n) {
              for (var h = 0, g = this.images.length; h < g;) {
                if (this.images[h].assetData === n) {
                  return this.images[h].img;
                }
                h += 1;
              }
              return null;
            },
            createImgData: function (n) {
              var h = b(n, this.assetsPath, this.path);
              var g = document.createElement("img");
              g.crossOrigin = "anonymous";
              g.addEventListener("load", this._imageLoaded, false);
              g.addEventListener("error", function () {
                q.img = k;
                this._imageLoaded();
              }.bind(this), false);
              g.src = h;
              var q = {
                img: g,
                assetData: n
              };
              return q;
            },
            createImageData: function (n) {
              var h = b(n, this.assetsPath, this.path);
              var g = X("image");
              if (Oa) {
                this.testImageLoaded(g);
              } else {
                g.addEventListener("load", this._imageLoaded, false);
              }
              g.addEventListener("error", function () {
                q.img = k;
                this._imageLoaded();
              }.bind(this), false);
              g.setAttributeNS("http://www.w3.org/1999/xlink", "href", h);
              if (this._elementHelper.append) {
                this._elementHelper.append(g);
              } else {
                this._elementHelper.appendChild(g);
              }
              var q = {
                img: g,
                assetData: n
              };
              return q;
            },
            imageLoaded: c,
            footageLoaded: a,
            setCacheType: function (n, h) {
              if (n === "svg") {
                this._elementHelper = h;
                this._createImageData = this.createImageData.bind(this);
              } else {
                this._createImageData = this.createImgData.bind(this);
              }
            }
          };
          return f;
        }();
        Ic.prototype = {
          triggerEvent: function (c, a) {
            if (this._cbs[c]) {
              c = this._cbs[c];
              for (var b = 0; b < c.length; b += 1) {
                c[b](a);
              }
            }
          },
          addEventListener: function (c, a) {
            this._cbs[c] ||= [];
            this._cbs[c].push(a);
            return function () {
              this.removeEventListener(c, a);
            }.bind(this);
          },
          removeEventListener: function (c, a) {
            if (a) {
              if (this._cbs[c]) {
                for (var b = 0, d = this._cbs[c].length; b < d;) {
                  if (this._cbs[c][b] === a) {
                    this._cbs[c].splice(b, 1);
                    --b;
                    --d;
                  }
                  b += 1;
                }
                if (!this._cbs[c].length) {
                  this._cbs[c] = null;
                }
              }
            } else {
              this._cbs[c] = null;
            }
          }
        };
        var Ua = function () {
          return function (c) {
            var a = [];
            for (var b = 0; b < c.length; b += 1) {
              var d = c[b];
              d = {
                time: d.tm,
                duration: d.dr
              };
              try {
                d.payload = JSON.parse(c[b].cm);
              } catch (r) {
                try {
                  var e = d;
                  var f;
                  var k = undefined;
                  for (var n = c[b].cm.split("\r\n"), h = {}, g = 0, q = 0; q < n.length; q += 1) {
                    if ((k = n[q].split(":")).length === 2) {
                      h[k[0]] = k[1].trim();
                      g += 1;
                    }
                  }
                  if (g === 0) {
                    throw Error();
                  }
                  f = h;
                  e.payload = f;
                } catch (v) {
                  d.payload = {
                    name: c[b].cm
                  };
                }
              }
              a.push(d);
            }
            return a;
          };
        }();
        var Ec = function () {
          function c(a) {
            this.compositions.push(a);
          }
          return function () {
            function a(b) {
              for (var d = 0, e = this.compositions.length; d < e;) {
                if (this.compositions[d].data && this.compositions[d].data.nm === b) {
                  if (this.compositions[d].prepareFrame && this.compositions[d].data.xt) {
                    this.compositions[d].prepareFrame(this.currentFrame);
                  }
                  return this.compositions[d].compInterface;
                }
                d += 1;
              }
              return null;
            }
            a.compositions = [];
            a.currentFrame = 0;
            a.registerComposition = c;
            return a;
          };
        }();
        var Fc = {};
        function U() {
          this._cbs = [];
          this.path = this.name = "";
          this.isLoaded = false;
          this.frameMult = this.frameRate = this.totalFrames = this.firstFrame = this.currentRawFrame = this.currentFrame = 0;
          this.playDirection = this.playSpeed = 1;
          this.playCount = 0;
          this.animationData = {};
          this.assets = [];
          this.isPaused = true;
          this.autoplay = false;
          this.loop = true;
          this.renderer = null;
          this.animationID = Ca();
          this.assetsPath = "";
          this.segmentPos = this.timeCompleted = 0;
          this.isSubframeEnabled = nd;
          this.segments = [];
          this._idle = true;
          this._completedLoop = false;
          this.projectInterface = Ec();
          this.imagePreloader = new wb();
          this.audioController = Ed();
          this.markers = [];
          this.configAnimation = this.configAnimation.bind(this);
          this.onSetupError = this.onSetupError.bind(this);
          this.onSegmentComplete = this.onSegmentComplete.bind(this);
          this.drawnFrameEvent = new pc("drawnFrame", 0, 0, 0);
          this.expressionsPlugin = Lb;
        }
        R([Ic], U);
        U.prototype.setParams = function (c) {
          if (c.wrapper || c.container) {
            this.wrapper = c.wrapper || c.container;
          }
          var a = "svg";
          if (c.animType) {
            a = c.animType;
          } else if (c.renderer) {
            a = c.renderer;
          }
          var b = Fc[a];
          this.renderer = new b(this, c.rendererSettings);
          this.imagePreloader.setCacheType(a, this.renderer.globalData.defs);
          this.renderer.setProjectInterface(this.projectInterface);
          this.animType = a;
          if (c.loop === "" || c.loop === null || c.loop === undefined || c.loop === true) {
            this.loop = true;
          } else if (c.loop === false) {
            this.loop = false;
          } else {
            this.loop = parseInt(c.loop, 10);
          }
          this.autoplay = !("autoplay" in c) || c.autoplay;
          this.name = c.name ? c.name : "";
          this.autoloadSegments = !Object.prototype.hasOwnProperty.call(c, "autoloadSegments") || c.autoloadSegments;
          this.assetsPath = c.assetsPath;
          this.initialSegment = c.initialSegment;
          if (c.audioFactory) {
            this.audioController.setAudioFactory(c.audioFactory);
          }
          if (c.animationData) {
            this.setupAnimation(c.animationData);
          } else if (c.path) {
            if (c.path.lastIndexOf("\\") !== -1) {
              this.path = c.path.substr(0, c.path.lastIndexOf("\\") + 1);
            } else {
              this.path = c.path.substr(0, c.path.lastIndexOf("/") + 1);
            }
            this.fileName = c.path.substr(c.path.lastIndexOf("/") + 1);
            this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json"));
            ra.loadAnimation(c.path, this.configAnimation, this.onSetupError);
          }
        };
        U.prototype.onSetupError = function () {
          this.trigger("data_failed");
        };
        U.prototype.setupAnimation = function (c) {
          ra.completeAnimation(c, this.configAnimation);
        };
        U.prototype.setData = function (c, a) {
          if (a && rc(a) !== "object") {
            a = JSON.parse(a);
          }
          a = {
            wrapper: c,
            animationData: a
          };
          c = c.attributes;
          a.path = c.getNamedItem("data-animation-path") ? c.getNamedItem("data-animation-path").value : c.getNamedItem("data-bm-path") ? c.getNamedItem("data-bm-path").value : c.getNamedItem("bm-path") ? c.getNamedItem("bm-path").value : "";
          a.animType = c.getNamedItem("data-anim-type") ? c.getNamedItem("data-anim-type").value : c.getNamedItem("data-bm-type") ? c.getNamedItem("data-bm-type").value : c.getNamedItem("bm-type") ? c.getNamedItem("bm-type").value : c.getNamedItem("data-bm-renderer") ? c.getNamedItem("data-bm-renderer").value : c.getNamedItem("bm-renderer") ? c.getNamedItem("bm-renderer").value : function () {
            if (Fc.canvas) {
              return "canvas";
            }
            for (var d in Fc) {
              if (Fc[d]) {
                return d;
              }
            }
            return "";
          }() || "canvas";
          var b = c.getNamedItem("data-anim-loop") ? c.getNamedItem("data-anim-loop").value : c.getNamedItem("data-bm-loop") ? c.getNamedItem("data-bm-loop").value : c.getNamedItem("bm-loop") ? c.getNamedItem("bm-loop").value : "";
          if (b === "false") {
            a.loop = false;
          } else if (b === "true") {
            a.loop = true;
          } else if (b !== "") {
            a.loop = parseInt(b, 10);
          }
          b = c.getNamedItem("data-anim-autoplay") ? c.getNamedItem("data-anim-autoplay").value : c.getNamedItem("data-bm-autoplay") ? c.getNamedItem("data-bm-autoplay").value : !c.getNamedItem("bm-autoplay") || c.getNamedItem("bm-autoplay").value;
          a.autoplay = b !== "false";
          a.name = c.getNamedItem("data-name") ? c.getNamedItem("data-name").value : c.getNamedItem("data-bm-name") ? c.getNamedItem("data-bm-name").value : c.getNamedItem("bm-name") ? c.getNamedItem("bm-name").value : "";
          if ((c.getNamedItem("data-anim-prerender") ? c.getNamedItem("data-anim-prerender").value : c.getNamedItem("data-bm-prerender") ? c.getNamedItem("data-bm-prerender").value : c.getNamedItem("bm-prerender") ? c.getNamedItem("bm-prerender").value : "") === "false") {
            a.prerender = false;
          }
          if (a.path) {
            this.setParams(a);
          } else {
            this.trigger("destroy");
          }
        };
        U.prototype.includeLayers = function (c) {
          if (c.op > this.animationData.op) {
            this.animationData.op = c.op;
            this.totalFrames = Math.floor(c.op - this.animationData.ip);
          }
          var a;
          var b;
          var d = this.animationData.layers;
          var e = d.length;
          var f = c.layers;
          var k = f.length;
          for (b = 0; b < k; b += 1) {
            for (a = 0; a < e;) {
              if (d[a].id === f[b].id) {
                d[a] = f[b];
                break;
              }
              a += 1;
            }
          }
          if (c.chars || c.fonts) {
            this.renderer.globalData.fontManager.addChars(c.chars);
            this.renderer.globalData.fontManager.addFonts(c.fonts, this.renderer.globalData.defs);
          }
          if (c.assets) {
            e = c.assets.length;
            a = 0;
            for (; a < e; a += 1) {
              this.animationData.assets.push(c.assets[a]);
            }
          }
          this.animationData.__complete = false;
          ra.completeAnimation(this.animationData, this.onSegmentComplete);
        };
        U.prototype.onSegmentComplete = function (c) {
          this.animationData = c;
          if (c = Lb) {
            c.initExpressions(this);
          }
          this.loadNextSegment();
        };
        U.prototype.loadNextSegment = function () {
          var c = this.animationData.segments;
          if (!c || c.length === 0 || !this.autoloadSegments) {
            this.trigger("data_ready");
            this.timeCompleted = this.totalFrames;
            return;
          }
          c = c.shift();
          this.timeCompleted = c.time * this.frameRate;
          c = this.path + this.fileName + "_" + this.segmentPos + ".json";
          this.segmentPos += 1;
          ra.loadData(c, this.includeLayers.bind(this), function () {
            this.trigger("data_failed");
          }.bind(this));
        };
        U.prototype.loadSegments = function () {
          if (!this.animationData.segments) {
            this.timeCompleted = this.totalFrames;
          }
          this.loadNextSegment();
        };
        U.prototype.imagesLoaded = function () {
          this.trigger("loaded_images");
          this.checkLoaded();
        };
        U.prototype.preloadImages = function () {
          this.imagePreloader.setAssetsPath(this.assetsPath);
          this.imagePreloader.setPath(this.path);
          this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
        };
        U.prototype.configAnimation = function (c) {
          if (this.renderer) {
            try {
              this.animationData = c;
              if (this.initialSegment) {
                this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
                this.firstFrame = Math.round(this.initialSegment[0]);
              } else {
                this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
                this.firstFrame = Math.round(this.animationData.ip);
              }
              this.renderer.configAnimation(c);
              c.assets ||= [];
              this.assets = this.animationData.assets;
              this.frameRate = this.animationData.fr;
              this.frameMult = this.animationData.fr / 1000;
              this.renderer.searchExtraCompositions(c.assets);
              this.markers = Ua(c.markers || []);
              this.trigger("config_ready");
              this.preloadImages();
              this.loadSegments();
              this.updaFrameModifier();
              this.waitForFontsLoaded();
              if (this.isPaused) {
                this.audioController.pause();
              }
            } catch (a) {
              this.triggerConfigError(a);
            }
          }
        };
        U.prototype.waitForFontsLoaded = function () {
          if (this.renderer) {
            if (this.renderer.globalData.fontManager.isLoaded) {
              this.checkLoaded();
            } else {
              setTimeout(this.waitForFontsLoaded.bind(this), 20);
            }
          }
        };
        U.prototype.checkLoaded = function () {
          if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
            this.isLoaded = true;
            var c = Lb;
            if (c) {
              c.initExpressions(this);
            }
            this.renderer.initItems();
            setTimeout(function () {
              this.trigger("DOMLoaded");
            }.bind(this), 0);
            this.gotoFrame();
            if (this.autoplay) {
              this.play();
            }
          }
        };
        U.prototype.resize = function (c, a) {
          this.renderer.updateContainerSize(typeof c == "number" ? c : undefined, typeof a == "number" ? a : undefined);
        };
        U.prototype.setSubframe = function (c) {
          this.isSubframeEnabled = !!c;
        };
        U.prototype.gotoFrame = function () {
          this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame;
          if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) {
            this.currentFrame = this.timeCompleted;
          }
          this.trigger("enterFrame");
          this.renderFrame();
          this.trigger("drawnFrame");
        };
        U.prototype.renderFrame = function () {
          if (this.isLoaded !== false && this.renderer) {
            try {
              if (this.expressionsPlugin) {
                this.expressionsPlugin.resetFrame();
              }
              this.renderer.renderFrame(this.currentFrame + this.firstFrame);
            } catch (c) {
              this.triggerRenderFrameError(c);
            }
          }
        };
        U.prototype.play = function (c) {
          if (!c || this.name === c) {
            if (this.isPaused === true) {
              this.isPaused = false;
              this.trigger("_play");
              this.audioController.resume();
              if (this._idle) {
                this._idle = false;
                this.trigger("_active");
              }
            }
          }
        };
        U.prototype.pause = function (c) {
          if (!c || this.name === c) {
            if (this.isPaused === false) {
              this.isPaused = true;
              this.trigger("_pause");
              this._idle = true;
              this.trigger("_idle");
              this.audioController.pause();
            }
          }
        };
        U.prototype.togglePause = function (c) {
          if (!c || this.name === c) {
            if (this.isPaused === true) {
              this.play();
            } else {
              this.pause();
            }
          }
        };
        U.prototype.stop = function (c) {
          if (!c || this.name === c) {
            this.pause();
            this.playCount = 0;
            this._completedLoop = false;
            this.setCurrentRawFrameValue(0);
          }
        };
        U.prototype.getMarkerData = function (c) {
          var a;
          for (var b = 0; b < this.markers.length; b += 1) {
            if ((a = this.markers[b]).payload && a.payload.name === c) {
              return a;
            }
          }
          return null;
        };
        U.prototype.goToAndStop = function (c, a, b) {
          if (!b || this.name === b) {
            b = Number(c);
            if (isNaN(b)) {
              if (c = this.getMarkerData(c)) {
                this.goToAndStop(c.time, true);
              }
            } else if (a) {
              this.setCurrentRawFrameValue(c);
            } else {
              this.setCurrentRawFrameValue(c * this.frameModifier);
            }
            this.pause();
          }
        };
        U.prototype.goToAndPlay = function (c, a, b) {
          if (!b || this.name === b) {
            var d = Number(c);
            if (isNaN(d)) {
              if (c = this.getMarkerData(c)) {
                if (c.duration) {
                  this.playSegments([c.time, c.time + c.duration], true);
                } else {
                  this.goToAndStop(c.time, true);
                }
              }
            } else {
              this.goToAndStop(d, a, b);
            }
            this.play();
          }
        };
        U.prototype.advanceTime = function (c) {
          if (this.isPaused !== true && this.isLoaded !== false) {
            c = this.currentRawFrame + c * this.frameModifier;
            var a = false;
            if (c >= this.totalFrames - 1 && this.frameModifier > 0) {
              if (this.loop && this.playCount !== this.loop) {
                if (c >= this.totalFrames) {
                  this.playCount += 1;
                  if (!this.checkSegments(c % this.totalFrames)) {
                    this.setCurrentRawFrameValue(c % this.totalFrames);
                    this._completedLoop = true;
                    this.trigger("loopComplete");
                  }
                } else {
                  this.setCurrentRawFrameValue(c);
                }
              } else if (!this.checkSegments(c > this.totalFrames ? c % this.totalFrames : 0)) {
                a = true;
                c = this.totalFrames - 1;
              }
            } else if (c < 0) {
              if (!this.checkSegments(c % this.totalFrames)) {
                if (!this.loop || this.playCount-- <= 0 && this.loop !== true) {
                  a = true;
                  c = 0;
                } else {
                  this.setCurrentRawFrameValue(this.totalFrames + c % this.totalFrames);
                  if (this._completedLoop) {
                    this.trigger("loopComplete");
                  } else {
                    this._completedLoop = true;
                  }
                }
              }
            } else {
              this.setCurrentRawFrameValue(c);
            }
            if (a) {
              this.setCurrentRawFrameValue(c);
              this.pause();
              this.trigger("complete");
            }
          }
        };
        U.prototype.adjustSegment = function (c, a) {
          this.playCount = 0;
          if (c[1] < c[0]) {
            if (this.frameModifier > 0) {
              if (this.playSpeed < 0) {
                this.setSpeed(-this.playSpeed);
              } else {
                this.setDirection(-1);
              }
            }
            this.totalFrames = c[0] - c[1];
            this.timeCompleted = this.totalFrames;
            this.firstFrame = c[1];
            this.setCurrentRawFrameValue(this.totalFrames - 0.001 - a);
          } else if (c[1] > c[0]) {
            if (this.frameModifier < 0) {
              if (this.playSpeed < 0) {
                this.setSpeed(-this.playSpeed);
              } else {
                this.setDirection(1);
              }
            }
            this.totalFrames = c[1] - c[0];
            this.timeCompleted = this.totalFrames;
            this.firstFrame = c[0];
            this.setCurrentRawFrameValue(0.001 + a);
          }
          this.trigger("segmentStart");
        };
        U.prototype.setSegment = function (c, a) {
          var b = -1;
          if (this.isPaused) {
            if (this.currentRawFrame + this.firstFrame < c) {
              b = c;
            } else if (this.currentRawFrame + this.firstFrame > a) {
              b = a - c;
            }
          }
          this.firstFrame = c;
          this.timeCompleted = this.totalFrames = a - c;
          if (b !== -1) {
            this.goToAndStop(b, true);
          }
        };
        U.prototype.playSegments = function (c, a) {
          if (a) {
            this.segments.length = 0;
          }
          if (rc(c[0]) === "object") {
            var b;
            var d = c.length;
            for (b = 0; b < d; b += 1) {
              this.segments.push(c[b]);
            }
          } else {
            this.segments.push(c);
          }
          if (this.segments.length && a) {
            this.adjustSegment(this.segments.shift(), 0);
          }
          if (this.isPaused) {
            this.play();
          }
        };
        U.prototype.resetSegments = function (c) {
          this.segments.length = 0;
          this.segments.push([this.animationData.ip, this.animationData.op]);
          if (c) {
            this.checkSegments(0);
          }
        };
        U.prototype.checkSegments = function (c) {
          return !!this.segments.length && (this.adjustSegment(this.segments.shift(), c), true);
        };
        U.prototype.destroy = function (c) {
          if ((!c || this.name === c) && !!this.renderer) {
            this.renderer.destroy();
            this.imagePreloader.destroy();
            this.trigger("destroy");
            this._cbs = null;
            this.onEnterFrame = null;
            this.onLoopComplete = null;
            this.onComplete = null;
            this.onSegmentStart = null;
            this.onDestroy = null;
            this.renderer = null;
            this.expressionsPlugin = null;
            this.imagePreloader = null;
            this.projectInterface = null;
          }
        };
        U.prototype.setCurrentRawFrameValue = function (c) {
          this.currentRawFrame = c;
          this.gotoFrame();
        };
        U.prototype.setSpeed = function (c) {
          this.playSpeed = c;
          this.updaFrameModifier();
        };
        U.prototype.setDirection = function (c) {
          this.playDirection = c < 0 ? -1 : 1;
          this.updaFrameModifier();
        };
        U.prototype.setLoop = function (c) {
          this.loop = c;
        };
        U.prototype.setVolume = function (c, a) {
          if (!a || this.name === a) {
            this.audioController.setVolume(c);
          }
        };
        U.prototype.getVolume = function () {
          return this.audioController.getVolume();
        };
        U.prototype.mute = function (c) {
          if (!c || this.name === c) {
            this.audioController.mute();
          }
        };
        U.prototype.unmute = function (c) {
          if (!c || this.name === c) {
            this.audioController.unmute();
          }
        };
        U.prototype.updaFrameModifier = function () {
          this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
          this.audioController.setRate(this.playSpeed * this.playDirection);
        };
        U.prototype.getPath = function () {
          return this.path;
        };
        U.prototype.getAssetsPath = function (c) {
          if (c.e) {
            var a = c.p;
          } else if (this.assetsPath) {
            c = c.p;
            if (c.indexOf("images/") !== -1) {
              c = c.split("/")[1];
            }
            a = this.assetsPath + c;
          } else {
            a = this.path;
            a += c.u ? c.u : "";
            a += c.p;
          }
          return a;
        };
        U.prototype.getAssetData = function (c) {
          for (var a = 0, b = this.assets.length; a < b;) {
            if (c === this.assets[a].id) {
              return this.assets[a];
            }
            a += 1;
          }
          return null;
        };
        U.prototype.hide = function () {
          this.renderer.hide();
        };
        U.prototype.show = function () {
          this.renderer.show();
        };
        U.prototype.getDuration = function (c) {
          if (c) {
            return this.totalFrames;
          } else {
            return this.totalFrames / this.frameRate;
          }
        };
        U.prototype.updateDocumentData = function (c, a, b) {
          try {
            this.renderer.getElementByPath(c).updateDocumentData(a, b);
          } catch (d) {}
        };
        U.prototype.trigger = function (c) {
          if (this._cbs && this._cbs[c]) {
            switch (c) {
              case "enterFrame":
                this.triggerEvent(c, new pc(c, this.currentFrame, this.totalFrames, this.frameModifier));
                break;
              case "drawnFrame":
                this.drawnFrameEvent.currentTime = this.currentFrame;
                this.drawnFrameEvent.totalTime = this.totalFrames;
                this.drawnFrameEvent.direction = this.frameModifier;
                this.triggerEvent(c, this.drawnFrameEvent);
                break;
              case "loopComplete":
                this.triggerEvent(c, new Vc(c, this.loop, this.playCount, this.frameMult));
                break;
              case "complete":
                this.triggerEvent(c, new Gc(c, this.frameMult));
                break;
              case "segmentStart":
                this.triggerEvent(c, new Wc(c, this.firstFrame, this.totalFrames));
                break;
              case "destroy":
                this.triggerEvent(c, new Xc(c, this));
                break;
              default:
                this.triggerEvent(c);
            }
          }
          if (c === "enterFrame" && this.onEnterFrame) {
            this.onEnterFrame.call(this, new pc(c, this.currentFrame, this.totalFrames, this.frameMult));
          }
          if (c === "loopComplete" && this.onLoopComplete) {
            this.onLoopComplete.call(this, new Vc(c, this.loop, this.playCount, this.frameMult));
          }
          if (c === "complete" && this.onComplete) {
            this.onComplete.call(this, new Gc(c, this.frameMult));
          }
          if (c === "segmentStart" && this.onSegmentStart) {
            this.onSegmentStart.call(this, new Wc(c, this.firstFrame, this.totalFrames));
          }
          if (c === "destroy" && this.onDestroy) {
            this.onDestroy.call(this, new Xc(c, this));
          }
        };
        U.prototype.triggerRenderFrameError = function (c) {
          c = new ud(c, this.currentFrame);
          this.triggerEvent("error", c);
          if (this.onError) {
            this.onError.call(this, c);
          }
        };
        U.prototype.triggerConfigError = function (c) {
          c = new Dd(c, this.currentFrame);
          this.triggerEvent("error", c);
          if (this.onError) {
            this.onError.call(this, c);
          }
        };
        var Na = function () {
          function c(m) {
            var t = 0;
            for (m = m.target; t < r;) {
              if (g[t].animation === m) {
                g.splice(t, 1);
                --t;
                --r;
                if (!m.isPaused) {
                  d();
                }
              }
              t += 1;
            }
          }
          function a(m, t) {
            if (!m) {
              return null;
            }
            for (var u = 0; u < r;) {
              if (g[u].elem === m && g[u].elem !== null) {
                return g[u].animation;
              }
              u += 1;
            }
            u = new U();
            e(u, m);
            u.setData(m, t);
            return u;
          }
          function b() {
            v += 1;
            n();
          }
          function d() {
            --v;
          }
          function e(m, t) {
            m.addEventListener("destroy", c);
            m.addEventListener("_active", b);
            m.addEventListener("_idle", d);
            g.push({
              elem: t,
              animation: m
            });
            r += 1;
          }
          function f(m) {
            var t;
            var u = m - q;
            for (t = 0; t < r; t += 1) {
              g[t].animation.advanceTime(u);
            }
            q = m;
            if (v && !l) {
              window.requestAnimationFrame(f);
            } else {
              p = true;
            }
          }
          function k(m) {
            q = m;
            window.requestAnimationFrame(f);
          }
          function n() {
            if (!l && v && p) {
              window.requestAnimationFrame(k);
              p = false;
            }
          }
          var h = {};
          var g = [];
          var q = 0;
          var r = 0;
          var v = 0;
          var p = true;
          var l = false;
          h.registerAnimation = a;
          h.loadAnimation = function (m) {
            var t = new U();
            e(t, null);
            t.setParams(m);
            return t;
          };
          h.setSpeed = function (m, t) {
            var u;
            for (u = 0; u < r; u += 1) {
              g[u].animation.setSpeed(m, t);
            }
          };
          h.setDirection = function (m, t) {
            var u;
            for (u = 0; u < r; u += 1) {
              g[u].animation.setDirection(m, t);
            }
          };
          h.play = function (m) {
            var t;
            for (t = 0; t < r; t += 1) {
              g[t].animation.play(m);
            }
          };
          h.pause = function (m) {
            var t;
            for (t = 0; t < r; t += 1) {
              g[t].animation.pause(m);
            }
          };
          h.stop = function (m) {
            var t;
            for (t = 0; t < r; t += 1) {
              g[t].animation.stop(m);
            }
          };
          h.togglePause = function (m) {
            var t;
            for (t = 0; t < r; t += 1) {
              g[t].animation.togglePause(m);
            }
          };
          h.searchAnimations = function (m, t, u) {
            var w;
            var x = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin")));
            var D = x.length;
            for (w = 0; w < D; w += 1) {
              if (u) {
                x[w].setAttribute("data-bm-type", u);
              }
              a(x[w], m);
            }
            if (t && D === 0) {
              u ||= "svg";
              t = document.getElementsByTagName("body")[0];
              t.innerText = "";
              w = document.createElement("div");
              w.style.width = "100%";
              w.style.height = "100%";
              w.setAttribute("data-bm-type", u);
              t.appendChild(w);
              a(w, m);
            }
          };
          h.resize = function () {
            var m;
            for (m = 0; m < r; m += 1) {
              g[m].animation.resize();
            }
          };
          h.goToAndStop = function (m, t, u) {
            var w;
            for (w = 0; w < r; w += 1) {
              g[w].animation.goToAndStop(m, t, u);
            }
          };
          h.destroy = function (m) {
            var t;
            for (t = r - 1; t >= 0; --t) {
              g[t].animation.destroy(m);
            }
          };
          h.freeze = function () {
            l = true;
          };
          h.unfreeze = function () {
            l = false;
            n();
          };
          h.setVolume = function (m, t) {
            var u;
            for (u = 0; u < r; u += 1) {
              g[u].animation.setVolume(m, t);
            }
          };
          h.mute = function (m) {
            var t;
            for (t = 0; t < r; t += 1) {
              g[t].animation.mute(m);
            }
          };
          h.unmute = function (m) {
            var t;
            for (t = 0; t < r; t += 1) {
              g[t].animation.unmute(m);
            }
          };
          h.getRegisteredAnimations = function () {
            var m;
            var t = g.length;
            var u = [];
            for (m = 0; m < t; m += 1) {
              u.push(g[m].animation);
            }
            return u;
          };
          return h;
        }();
        var kb = function () {
          function c(e, f, k) {
            return (((1 - k * 3 + f * 3) * e + (k * 3 - f * 6)) * e + f * 3) * e;
          }
          function a(e) {
            this._p = e;
            this._mSampleValues = d ? new Float32Array(11) : Array(11);
            this._precomputed = false;
            this.get = this.get.bind(this);
          }
          var b = {};
          var d = typeof Float32Array == "function";
          a.prototype = {
            get: function (e) {
              var f = this._p[0];
              var k = this._p[1];
              var n = this._p[2];
              var h = this._p[3];
              if (!this._precomputed) {
                this._precompute();
              }
              if (f === k && n === h) {
                return e;
              } else if (e === 0) {
                return 0;
              } else if (e === 1) {
                return 1;
              } else {
                return c(this._getTForX(e), k, h);
              }
            },
            _precompute: function () {
              var e = this._p[0];
              var f = this._p[1];
              var k = this._p[2];
              var n = this._p[3];
              this._precomputed = true;
              if (e !== f || k !== n) {
                this._calcSampleValues();
              }
            },
            _calcSampleValues: function () {
              var e = this._p[0];
              var f = this._p[2];
              for (var k = 0; k < 11; ++k) {
                this._mSampleValues[k] = c(k * 0.1, e, f);
              }
            },
            _getTForX: function (e) {
              var f = this._p[0];
              var k = this._p[2];
              for (var n = this._mSampleValues, h = 0, g = 1; g !== 10 && n[g] <= e; ++g) {
                h += 0.1;
              }
              n = h + (e - n[--g]) / (n[g + 1] - n[g]) * 0.1;
              g = (1 - k * 3 + f * 3) * 3 * n * n + (k * 3 - f * 6) * 2 * n + f * 3;
              if (g >= 0.001) {
                return function (q, r, v, p) {
                  for (var l = 0; l < 4; ++l) {
                    var m = (1 - p * 3 + v * 3) * 3 * r * r + (p * 3 - v * 6) * 2 * r + v * 3;
                    if (m === 0) {
                      break;
                    }
                    r -= (c(r, v, p) - q) / m;
                  }
                  return r;
                }(e, n, f, k);
              } else if (g === 0) {
                return n;
              } else {
                return function (q, r, v, p, l) {
                  var m;
                  var t;
                  var u = 0;
                  do {
                    if ((m = c(t = r + (v - r) / 2, p, l) - q) > 0) {
                      v = t;
                    } else {
                      r = t;
                    }
                  } while (Math.abs(m) > 1e-7 && ++u < 10);
                  return t;
                }(e, h, h + 0.1, f, k);
              }
            }
          };
          return {
            getBezierEasing: function (e, f, k, n, h) {
              h = h || ("bez_" + e + "_" + f + "_" + k + "_" + n).replace(/\./g, "p");
              if (b[h]) {
                return b[h];
              }
              e = new a([e, f, k, n]);
              b[h] = e;
              return e;
            }
          };
        }();
        var T = {
          double: function (c) {
            return c.concat(ta(c.length));
          }
        };
        function va(c, a, b) {
          var d = 0;
          var e = c;
          var f = ta(e);
          return {
            newElement: function () {
              if (d) {
                return f[--d];
              } else {
                return a();
              }
            },
            release: function (k) {
              if (d === e) {
                f = T.double(f);
                e *= 2;
              }
              if (b) {
                b(k);
              }
              f[d] = k;
              d += 1;
            }
          };
        }
        var cc = va(8, function () {
          return {
            addedLength: 0,
            percents: la("float32", sb),
            lengths: la("float32", sb)
          };
        });
        var od = va(8, function () {
          return {
            lengths: [],
            totalLength: 0
          };
        }, function (c) {
          var a;
          var b = c.lengths.length;
          for (a = 0; a < b; a += 1) {
            cc.release(c.lengths[a]);
          }
          c.lengths.length = 0;
        });
        var Xa = function () {
          function c(g, q, r, v, p, l) {
            g = g * v + q * p + r * l - p * v - l * g - r * q;
            return g > -0.001 && g < 0.001;
          }
          function a(g) {
            this.segmentLength = 0;
            this.points = Array(g);
          }
          function b(g, q) {
            this.partialLength = g;
            this.point = q;
          }
          function d(g, q) {
            var r = q.percents;
            var v = q.lengths;
            var p = r.length;
            var l = Ab((p - 1) * g);
            g *= q.addedLength;
            q = 0;
            if (l === p - 1 || l === 0 || g === v[l]) {
              return r[l];
            }
            var m = v[l] > g ? -1 : 1;
            for (var t = true; t;) {
              if (v[l] <= g && v[l + 1] > g) {
                q = (g - v[l]) / (v[l + 1] - v[l]);
                t = false;
              } else {
                l += m;
              }
              if (l < 0 || l >= p - 1) {
                if (l === p - 1) {
                  return r[l];
                }
                t = false;
              }
            }
            return r[l] + (r[l + 1] - r[l]) * q;
          }
          var e = Math;
          function f(g, q, r, v) {
            var p;
            var l;
            var m;
            var t = sb;
            var u = 0;
            var w = [];
            var x = [];
            var D = cc.newElement();
            var K = r.length;
            for (p = 0; p < t; p += 1) {
              var J = p / (t - 1);
              for (l = m = 0; l < K; l += 1) {
                var F = eb(1 - J, 3) * g[l] + eb(1 - J, 2) * 3 * J * r[l] + (1 - J) * 3 * eb(J, 2) * v[l] + eb(J, 3) * q[l];
                w[l] = F;
                if (x[l] !== null) {
                  m += eb(w[l] - x[l], 2);
                }
                x[l] = w[l];
              }
              if (m) {
                u += oc(m);
              }
              D.percents[p] = J;
              D.lengths[p] = u;
            }
            D.addedLength = u;
            return D;
          }
          var k;
          k = {};
          function n(g, q, r, v) {
            var p = (g[0] + "_" + g[1] + "_" + q[0] + "_" + q[1] + "_" + r[0] + "_" + r[1] + "_" + v[0] + "_" + v[1]).replace(/\./g, "p");
            if (!k[p]) {
              var l;
              var m;
              var t;
              var u = sb;
              var w = 0;
              var x = null;
              if (g.length === 2 && (g[0] !== q[0] || g[1] !== q[1]) && c(g[0], g[1], q[0], q[1], g[0] + r[0], g[1] + r[1]) && c(g[0], g[1], q[0], q[1], q[0] + v[0], q[1] + v[1])) {
                u = 2;
              }
              var D = new a(u);
              var K = r.length;
              for (l = 0; l < u; l += 1) {
                var J = ta(K);
                var F = l / (u - 1);
                for (m = t = 0; m < K; m += 1) {
                  var G = eb(1 - F, 3) * g[m] + eb(1 - F, 2) * 3 * F * (g[m] + r[m]) + (1 - F) * 3 * eb(F, 2) * (q[m] + v[m]) + eb(F, 3) * q[m];
                  J[m] = G;
                  if (x !== null) {
                    t += eb(J[m] - x[m], 2);
                  }
                }
                w += t = oc(t);
                D.points[l] = new b(t, J);
                x = J;
              }
              D.segmentLength = w;
              k[p] = D;
            }
            return k[p];
          }
          var h = la("float32", 8);
          return {
            getSegmentsLength: function (g) {
              var q = od.newElement();
              var r = g.c;
              var v = g.v;
              var p = g.o;
              var l = g.i;
              var m = g._length;
              var t = q.lengths;
              var u = 0;
              for (g = 0; g < m - 1; g += 1) {
                t[g] = f(v[g], v[g + 1], p[g], l[g + 1]);
                u += t[g].addedLength;
              }
              if (r && m) {
                t[g] = f(v[g], v[0], p[g], l[0]);
                u += t[g].addedLength;
              }
              q.totalLength = u;
              return q;
            },
            getNewSegment: function (g, q, r, v, p, l, m) {
              if (p < 0) {
                p = 0;
              } else if (p > 1) {
                p = 1;
              }
              var t = d(p, m);
              var u = d(l > 1 ? 1 : l, m);
              l = g.length;
              var w = 1 - t;
              var x = 1 - u;
              m = w * w * w;
              p = t * w * w * 3;
              var D = t * t * w * 3;
              var K = t * t * t;
              var J = w * w * x;
              var F = t * w * x + w * t * x + w * w * u;
              var G = t * t * x + w * t * u + t * w * u;
              var B = t * t * u;
              var z = w * x * x;
              var y = t * x * x + w * u * x + w * x * u;
              w = t * u * x + w * u * u + t * x * u;
              t = t * u * u;
              var C = x * x * x;
              var N = u * x * x + x * u * x + x * x * u;
              x = u * u * x + x * u * u + u * x * u;
              var P = u * u * u;
              for (u = 0; u < l; u += 1) {
                h[u * 4] = e.round((m * g[u] + p * r[u] + D * v[u] + K * q[u]) * 1000) / 1000;
                h[u * 4 + 1] = e.round((J * g[u] + F * r[u] + G * v[u] + B * q[u]) * 1000) / 1000;
                h[u * 4 + 2] = e.round((z * g[u] + y * r[u] + w * v[u] + t * q[u]) * 1000) / 1000;
                h[u * 4 + 3] = e.round((C * g[u] + N * r[u] + x * v[u] + P * q[u]) * 1000) / 1000;
              }
              return h;
            },
            getPointInSegment: function (g, q, r, v, p, l) {
              p = d(p, l);
              l = 1 - p;
              return [e.round((l * l * l * g[0] + (p * l * l + l * p * l + l * l * p) * r[0] + (p * p * l + l * p * p + p * l * p) * v[0] + p * p * p * q[0]) * 1000) / 1000, e.round((l * l * l * g[1] + (p * l * l + l * p * l + l * l * p) * r[1] + (p * p * l + l * p * p + p * l * p) * v[1] + p * p * p * q[1]) * 1000) / 1000];
            },
            buildBezierData: n,
            pointOnLine2D: c,
            pointOnLine3D: function (g, q, r, v, p, l, m, t, u) {
              if (r === 0 && l === 0 && u === 0) {
                return c(g, q, v, p, m, t);
              }
              var w;
              var x = e.sqrt(e.pow(v - g, 2) + e.pow(p - q, 2) + e.pow(l - r, 2));
              g = e.sqrt(e.pow(m - g, 2) + e.pow(t - q, 2) + e.pow(u - r, 2));
              v = e.sqrt(e.pow(m - v, 2) + e.pow(t - p, 2) + e.pow(u - l, 2));
              return (w = x > g ? x > v ? x - g - v : v - g - x : v > g ? v - g - x : g - x - v) > -0.0001 && w < 0.0001;
            }
          };
        }();
        var Mb = Rc;
        var pd = Math.abs;
        var Q = {
          getProp: function (c, a, b, d, e) {
            if (a.sid) {
              a = c.globalData.slotManager.getProp(a);
            }
            if (a.k.length) {
              if (typeof a.k[0] == "number") {
                var f = new Lc(c, a, d, e);
              } else {
                switch (b) {
                  case 0:
                    f = new Fd(c, a, d, e);
                    break;
                  case 1:
                    f = new Gd(c, a, d, e);
                }
              }
            } else {
              f = new Kc(c, a, d, e);
            }
            if (f.effectsSequence.length) {
              e.addDynamicProperty(f);
            }
            return f;
          }
        };
        Pa.prototype = {
          addDynamicProperty: function (c) {
            if (this.dynamicProperties.indexOf(c) === -1) {
              this.dynamicProperties.push(c);
              this.container.addDynamicProperty(this);
              this._isAnimated = true;
            }
          },
          iterateDynamicProperties: function () {
            var c;
            this._mdf = false;
            var a = this.dynamicProperties.length;
            for (c = 0; c < a; c += 1) {
              this.dynamicProperties[c].getValue();
              if (this.dynamicProperties[c]._mdf) {
                this._mdf = true;
              }
            }
          },
          initDynamicPropertyContainer: function (c) {
            this.container = c;
            this.dynamicProperties = [];
            this._isAnimated = this._mdf = false;
          }
        };
        var Ya = va(8, function () {
          return la("float32", 2);
        });
        lb.prototype.setPathData = function (c, a) {
          this.c = c;
          this.setLength(a);
          for (c = 0; c < a;) {
            this.v[c] = Ya.newElement();
            this.o[c] = Ya.newElement();
            this.i[c] = Ya.newElement();
            c += 1;
          }
        };
        lb.prototype.setLength = function (c) {
          while (this._maxLength < c) {
            this.doubleArrayLength();
          }
          this._length = c;
        };
        lb.prototype.doubleArrayLength = function () {
          this.v = this.v.concat(ta(this._maxLength));
          this.i = this.i.concat(ta(this._maxLength));
          this.o = this.o.concat(ta(this._maxLength));
          this._maxLength *= 2;
        };
        lb.prototype.setXYAt = function (c, a, b, d, e) {
          this._length = Math.max(this._length, d + 1);
          if (this._length >= this._maxLength) {
            this.doubleArrayLength();
          }
          switch (b) {
            case "v":
              b = this.v;
              break;
            case "i":
              b = this.i;
              break;
            case "o":
              b = this.o;
              break;
            default:
              b = [];
          }
          if (!b[d] || b[d] && !e) {
            b[d] = Ya.newElement();
          }
          b[d][0] = c;
          b[d][1] = a;
        };
        lb.prototype.setTripleAt = function (c, a, b, d, e, f, k, n) {
          this.setXYAt(c, a, "v", k, n);
          this.setXYAt(b, d, "o", k, n);
          this.setXYAt(e, f, "i", k, n);
        };
        lb.prototype.reverse = function () {
          var c = new lb();
          c.setPathData(this.c, this._length);
          var a = this.v;
          var b = this.o;
          var d = this.i;
          var e = 0;
          if (this.c) {
            c.setTripleAt(a[0][0], a[0][1], d[0][0], d[0][1], b[0][0], b[0][1], 0, false);
            e = 1;
          }
          var f = this._length - 1;
          for (var k = this._length; e < k; e += 1) {
            c.setTripleAt(a[f][0], a[f][1], d[f][0], d[f][1], b[f][0], b[f][1], e, false);
            --f;
          }
          return c;
        };
        lb.prototype.length = function () {
          return this._length;
        };
        var Jc;
        (Jc = va(4, function () {
          return new lb();
        }, function (c) {
          var a;
          var b = c._length;
          for (a = 0; a < b; a += 1) {
            Ya.release(c.v[a]);
            Ya.release(c.i[a]);
            Ya.release(c.o[a]);
            c.v[a] = null;
            c.i[a] = null;
            c.o[a] = null;
          }
          c._length = 0;
          c.c = false;
        })).clone = function (c) {
          var a;
          var b = Jc.newElement();
          var d = c._length === undefined ? c.v.length : c._length;
          b.setLength(d);
          b.c = c.c;
          for (a = 0; a < d; a += 1) {
            b.setTripleAt(c.v[a][0], c.v[a][1], c.o[a][0], c.o[a][1], c.i[a][0], c.i[a][1], a);
          }
          return b;
        };
        var O = Jc;
        Ia.prototype.addShape = function (c) {
          if (this._length === this._maxLength) {
            this.shapes = this.shapes.concat(ta(this._maxLength));
            this._maxLength *= 2;
          }
          this.shapes[this._length] = c;
          this._length += 1;
        };
        Ia.prototype.releaseShapes = function () {
          var c;
          for (c = 0; c < this._length; c += 1) {
            O.release(this.shapes[c]);
          }
          this._length = 0;
        };
        var Cb;
        var Da;
        var Db;
        var zb;
        Cb = {
          newShapeCollection: function () {
            if (Da) {
              return zb[--Da];
            } else {
              return new Ia();
            }
          },
          release: function (c) {
            var a;
            var b = c._length;
            for (a = 0; a < b; a += 1) {
              O.release(c.shapes[a]);
            }
            c._length = 0;
            if (Da === Db) {
              zb = T.double(zb);
              Db *= 2;
            }
            zb[Da] = c;
            Da += 1;
          }
        };
        Da = 0;
        zb = ta(Db = 4);
        var Ea = Cb;
        var ja = function () {
          function c(v, p, l) {
            var m;
            var t;
            var u = l.lastIndex;
            var w = this.keyframes;
            if (v < w[0].t - this.offsetTime) {
              v = w[0].s[0];
              w = true;
              u = 0;
            } else if (v >= w[w.length - 1].t - this.offsetTime) {
              v = w[w.length - 1].s ? w[w.length - 1].s[0] : w[w.length - 2].e[0];
              w = true;
            } else {
              var x;
              var D = u;
              u = w.length - 1;
              for (x = true; x && (m = w[D], !((t = w[D + 1]).t - this.offsetTime > v));) {
                if (D < u - 1) {
                  D += 1;
                } else {
                  x = false;
                }
              }
              x = this.keyframesMetadata[D] || {};
              u = D;
              if (!(w = m.h === 1)) {
                if (v >= t.t - this.offsetTime) {
                  var K = 1;
                } else if (v < m.t - this.offsetTime) {
                  K = 0;
                } else {
                  var J;
                  if (x.__fnct) {
                    J = x.__fnct;
                  } else {
                    J = kb.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get;
                    x.__fnct = J;
                  }
                  K = J((v - (m.t - this.offsetTime)) / (t.t - this.offsetTime - (m.t - this.offsetTime)));
                }
                var F = t.s ? t.s[0] : m.e[0];
              }
              v = m.s[0];
            }
            m = p._length;
            t = v.i[0].length;
            l.lastIndex = u;
            for (l = 0; l < m; l += 1) {
              for (u = 0; u < t; u += 1) {
                D = w ? v.i[l][u] : v.i[l][u] + (F.i[l][u] - v.i[l][u]) * K;
                p.i[l][u] = D;
                D = w ? v.o[l][u] : v.o[l][u] + (F.o[l][u] - v.o[l][u]) * K;
                p.o[l][u] = D;
                D = w ? v.v[l][u] : v.v[l][u] + (F.v[l][u] - v.v[l][u]) * K;
                p.v[l][u] = D;
              }
            }
          }
          function a() {
            var v = this.comp.renderedFrame - this.offsetTime;
            var p = this.keyframes[0].t - this.offsetTime;
            var l = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            var m = this._caching.lastFrame;
            if (m === h || (!(m < p) || !(v < p)) && (!(m > l) || !(v > l))) {
              this._caching.lastIndex = m < v ? this._caching.lastIndex : 0;
              this.interpolateShape(v, this.pv, this._caching);
            }
            this._caching.lastFrame = v;
            return this.pv;
          }
          function b() {
            this.paths = this.localShapeCollection;
          }
          function d(v) {
            a: {
              var p = this.v;
              if (p._length !== v._length || p.c !== v.c) {
                p = false;
              } else {
                var l;
                var m = p._length;
                for (l = 0; l < m; l += 1) {
                  if (p.v[l][0] !== v.v[l][0] || p.v[l][1] !== v.v[l][1] || p.o[l][0] !== v.o[l][0] || p.o[l][1] !== v.o[l][1] || p.i[l][0] !== v.i[l][0] || p.i[l][1] !== v.i[l][1]) {
                    p = false;
                    break a;
                  }
                }
                p = true;
              }
            }
            if (!p) {
              this.v = O.clone(v);
              this.localShapeCollection.releaseShapes();
              this.localShapeCollection.addShape(this.v);
              this._mdf = true;
              this.paths = this.localShapeCollection;
            }
          }
          function e() {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (this.effectsSequence.length) {
                if (this.lock) {
                  this.setVValue(this.pv);
                } else {
                  var v;
                  this.lock = true;
                  this._mdf = false;
                  var p = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                  var l = this.effectsSequence.length;
                  for (v = 0; v < l; v += 1) {
                    p = this.effectsSequence[v](p);
                  }
                  this.setVValue(p);
                  this.lock = false;
                  this.frameId = this.elem.globalData.frameId;
                }
              } else {
                this._mdf = false;
              }
            }
          }
          function f(v, p, l) {
            this.propType = "shape";
            this.comp = v.comp;
            this.elem = this.container = v;
            this.data = p;
            this._mdf = this.kf = this.k = false;
            v = l === 3 ? p.pt.k : p.ks.k;
            this.v = O.clone(v);
            this.pv = O.clone(this.v);
            this.paths = this.localShapeCollection = Ea.newShapeCollection();
            this.paths.addShape(this.v);
            this.reset = b;
            this.effectsSequence = [];
          }
          function k(v) {
            this.effectsSequence.push(v);
            this.container.addDynamicProperty(this);
          }
          function n(v, p, l) {
            this.propType = "shape";
            this.comp = v.comp;
            this.container = this.elem = v;
            this.offsetTime = v.data.st;
            this.keyframes = l === 3 ? p.pt.k : p.ks.k;
            this.keyframesMetadata = [];
            this.kf = this.k = true;
            v = this.keyframes[0].s[0].i.length;
            this.v = O.newElement();
            this.v.setPathData(this.keyframes[0].s[0].c, v);
            this.pv = O.clone(this.v);
            this.paths = this.localShapeCollection = Ea.newShapeCollection();
            this.paths.addShape(this.v);
            this.lastFrame = h;
            this.reset = b;
            this._caching = {
              lastFrame: h,
              lastIndex: 0
            };
            this.effectsSequence = [a.bind(this)];
          }
          var h = -999999;
          f.prototype.interpolateShape = c;
          f.prototype.getValue = e;
          f.prototype.setVValue = d;
          f.prototype.addEffect = k;
          n.prototype.getValue = e;
          n.prototype.interpolateShape = c;
          n.prototype.setVValue = d;
          n.prototype.addEffect = k;
          var g = function () {
            function v(l, m) {
              this.v = O.newElement();
              this.v.setPathData(true, 4);
              this.paths = this.localShapeCollection = Ea.newShapeCollection();
              this.localShapeCollection.addShape(this.v);
              this.d = m.d;
              this.elem = l;
              this.comp = l.comp;
              this.frameId = -1;
              this.initDynamicPropertyContainer(l);
              this.p = Q.getProp(l, m.p, 1, 0, this);
              this.s = Q.getProp(l, m.s, 1, 0, this);
              if (this.dynamicProperties.length) {
                this.k = true;
              } else {
                this.k = false;
                this.convertEllToPath();
              }
            }
            var p = Bb;
            v.prototype = {
              reset: b,
              getValue: function () {
                if (this.elem.globalData.frameId !== this.frameId) {
                  this.frameId = this.elem.globalData.frameId;
                  this.iterateDynamicProperties();
                  if (this._mdf) {
                    this.convertEllToPath();
                  }
                }
              },
              convertEllToPath: function () {
                var l = this.p.v[0];
                var m = this.p.v[1];
                var t = this.s.v[0] / 2;
                var u = this.s.v[1] / 2;
                var w = this.d !== 3;
                var x = this.v;
                x.v[0][0] = l;
                x.v[0][1] = m - u;
                x.v[1][0] = w ? l + t : l - t;
                x.v[1][1] = m;
                x.v[2][0] = l;
                x.v[2][1] = m + u;
                x.v[3][0] = w ? l - t : l + t;
                x.v[3][1] = m;
                x.i[0][0] = w ? l - t * p : l + t * p;
                x.i[0][1] = m - u;
                x.i[1][0] = w ? l + t : l - t;
                x.i[1][1] = m - u * p;
                x.i[2][0] = w ? l + t * p : l - t * p;
                x.i[2][1] = m + u;
                x.i[3][0] = w ? l - t : l + t;
                x.i[3][1] = m + u * p;
                x.o[0][0] = w ? l + t * p : l - t * p;
                x.o[0][1] = m - u;
                x.o[1][0] = w ? l + t : l - t;
                x.o[1][1] = m + u * p;
                x.o[2][0] = w ? l - t * p : l + t * p;
                x.o[2][1] = m + u;
                x.o[3][0] = w ? l - t : l + t;
                x.o[3][1] = m - u * p;
              }
            };
            R([Pa], v);
            return v;
          }();
          var q = function () {
            function v(p, l) {
              this.v = O.newElement();
              this.v.setPathData(true, 0);
              this.elem = p;
              this.comp = p.comp;
              this.data = l;
              this.frameId = -1;
              this.d = l.d;
              this.initDynamicPropertyContainer(p);
              if (l.sy === 1) {
                this.ir = Q.getProp(p, l.ir, 0, 0, this);
                this.is = Q.getProp(p, l.is, 0, 0.01, this);
                this.convertToPath = this.convertStarToPath;
              } else {
                this.convertToPath = this.convertPolygonToPath;
              }
              this.pt = Q.getProp(p, l.pt, 0, 0, this);
              this.p = Q.getProp(p, l.p, 1, 0, this);
              this.r = Q.getProp(p, l.r, 0, qa, this);
              this.or = Q.getProp(p, l.or, 0, 0, this);
              this.os = Q.getProp(p, l.os, 0, 0.01, this);
              this.localShapeCollection = Ea.newShapeCollection();
              this.localShapeCollection.addShape(this.v);
              this.paths = this.localShapeCollection;
              if (this.dynamicProperties.length) {
                this.k = true;
              } else {
                this.k = false;
                this.convertToPath();
              }
            }
            v.prototype = {
              reset: b,
              getValue: function () {
                if (this.elem.globalData.frameId !== this.frameId) {
                  this.frameId = this.elem.globalData.frameId;
                  this.iterateDynamicProperties();
                  if (this._mdf) {
                    this.convertToPath();
                  }
                }
              },
              convertStarToPath: function () {
                var p;
                var l;
                var m = Math.floor(this.pt.v) * 2;
                var t = Math.PI * 2 / m;
                var u = true;
                var w = this.or.v;
                var x = this.ir.v;
                var D = this.os.v;
                var K = this.is.v;
                var J = Math.PI * 2 * w / (m * 2);
                var F = Math.PI * 2 * x / (m * 2);
                var G = -Math.PI / 2;
                G += this.r.v;
                var B = this.data.d === 3 ? -1 : 1;
                for (p = this.v._length = 0; p < m; p += 1) {
                  var z = u ? D : K;
                  var y = u ? J : F;
                  var C = (l = u ? w : x) * Math.cos(G);
                  l *= Math.sin(G);
                  var N = C === 0 && l === 0 ? 0 : l / Math.sqrt(C * C + l * l);
                  var P = C === 0 && l === 0 ? 0 : -C / Math.sqrt(C * C + l * l);
                  C += +this.p.v[0];
                  l += +this.p.v[1];
                  this.v.setTripleAt(C, l, C - N * y * z * B, l - P * y * z * B, C + N * y * z * B, l + P * y * z * B, p, true);
                  u = !u;
                  G += t * B;
                }
              },
              convertPolygonToPath: function () {
                var p;
                var l = Math.floor(this.pt.v);
                var m = Math.PI * 2 / l;
                var t = this.or.v;
                var u = this.os.v;
                var w = Math.PI * 2 * t / (l * 4);
                var x = -Math.PI * 0.5;
                var D = this.data.d === 3 ? -1 : 1;
                x += this.r.v;
                for (p = this.v._length = 0; p < l; p += 1) {
                  var K = t * Math.cos(x);
                  var J = t * Math.sin(x);
                  var F = K === 0 && J === 0 ? 0 : J / Math.sqrt(K * K + J * J);
                  var G = K === 0 && J === 0 ? 0 : -K / Math.sqrt(K * K + J * J);
                  K += +this.p.v[0];
                  J += +this.p.v[1];
                  this.v.setTripleAt(K, J, K - F * w * u * D, J - G * w * u * D, K + F * w * u * D, J + G * w * u * D, p, true);
                  x += m * D;
                }
                this.paths.length = 0;
                this.paths[0] = this.v;
              }
            };
            R([Pa], v);
            return v;
          }();
          var r = function () {
            function v(p, l) {
              this.v = O.newElement();
              this.v.c = true;
              this.localShapeCollection = Ea.newShapeCollection();
              this.localShapeCollection.addShape(this.v);
              this.paths = this.localShapeCollection;
              this.elem = p;
              this.comp = p.comp;
              this.frameId = -1;
              this.d = l.d;
              this.initDynamicPropertyContainer(p);
              this.p = Q.getProp(p, l.p, 1, 0, this);
              this.s = Q.getProp(p, l.s, 1, 0, this);
              this.r = Q.getProp(p, l.r, 0, 0, this);
              if (this.dynamicProperties.length) {
                this.k = true;
              } else {
                this.k = false;
                this.convertRectToPath();
              }
            }
            v.prototype = {
              convertRectToPath: function () {
                var p = this.p.v[0];
                var l = this.p.v[1];
                var m = this.s.v[0] / 2;
                var t = this.s.v[1] / 2;
                var u = Nd(m, t, this.r.v);
                var w = u * (1 - Bb);
                this.v._length = 0;
                if (this.d === 2 || this.d === 1) {
                  this.v.setTripleAt(p + m, l - t + u, p + m, l - t + u, p + m, l - t + w, 0, true);
                  this.v.setTripleAt(p + m, l + t - u, p + m, l + t - w, p + m, l + t - u, 1, true);
                  if (u !== 0) {
                    this.v.setTripleAt(p + m - u, l + t, p + m - u, l + t, p + m - w, l + t, 2, true);
                    this.v.setTripleAt(p - m + u, l + t, p - m + w, l + t, p - m + u, l + t, 3, true);
                    this.v.setTripleAt(p - m, l + t - u, p - m, l + t - u, p - m, l + t - w, 4, true);
                    this.v.setTripleAt(p - m, l - t + u, p - m, l - t + w, p - m, l - t + u, 5, true);
                    this.v.setTripleAt(p - m + u, l - t, p - m + u, l - t, p - m + w, l - t, 6, true);
                    this.v.setTripleAt(p + m - u, l - t, p + m - w, l - t, p + m - u, l - t, 7, true);
                  } else {
                    this.v.setTripleAt(p - m, l + t, p - m + w, l + t, p - m, l + t, 2);
                    this.v.setTripleAt(p - m, l - t, p - m, l - t + w, p - m, l - t, 3);
                  }
                } else {
                  this.v.setTripleAt(p + m, l - t + u, p + m, l - t + w, p + m, l - t + u, 0, true);
                  if (u !== 0) {
                    this.v.setTripleAt(p + m - u, l - t, p + m - u, l - t, p + m - w, l - t, 1, true);
                    this.v.setTripleAt(p - m + u, l - t, p - m + w, l - t, p - m + u, l - t, 2, true);
                    this.v.setTripleAt(p - m, l - t + u, p - m, l - t + u, p - m, l - t + w, 3, true);
                    this.v.setTripleAt(p - m, l + t - u, p - m, l + t - w, p - m, l + t - u, 4, true);
                    this.v.setTripleAt(p - m + u, l + t, p - m + u, l + t, p - m + w, l + t, 5, true);
                    this.v.setTripleAt(p + m - u, l + t, p + m - w, l + t, p + m - u, l + t, 6, true);
                    this.v.setTripleAt(p + m, l + t - u, p + m, l + t - u, p + m, l + t - w, 7, true);
                  } else {
                    this.v.setTripleAt(p - m, l - t, p - m + w, l - t, p - m, l - t, 1, true);
                    this.v.setTripleAt(p - m, l + t, p - m, l + t - w, p - m, l + t, 2, true);
                    this.v.setTripleAt(p + m, l + t, p + m - w, l + t, p + m, l + t, 3, true);
                  }
                }
              },
              getValue: function () {
                if (this.elem.globalData.frameId !== this.frameId) {
                  this.frameId = this.elem.globalData.frameId;
                  this.iterateDynamicProperties();
                  if (this._mdf) {
                    this.convertRectToPath();
                  }
                }
              },
              reset: b
            };
            R([Pa], v);
            return v;
          }();
          return {
            getShapeProp: function (v, p, l) {
              var m;
              if (l === 3 || l === 4) {
                m = (l === 3 ? p.pt : p.ks).k.length ? new n(v, p, l) : new f(v, p, l);
              } else if (l === 5) {
                m = new r(v, p);
              } else if (l === 6) {
                m = new g(v, p);
              } else if (l === 7) {
                m = new q(v, p);
              }
              if (m.k) {
                v.addDynamicProperty(m);
              }
              return m;
            },
            getConstructorFunction: function () {
              return f;
            },
            getKeyframedConstructorFunction: function () {
              return n;
            }
          };
        }();
        var Ja = function () {
          function c() {
            this.props[0] = 1;
            this.props[1] = 0;
            this.props[2] = 0;
            this.props[3] = 0;
            this.props[4] = 0;
            this.props[5] = 1;
            this.props[6] = 0;
            this.props[7] = 0;
            this.props[8] = 0;
            this.props[9] = 0;
            this.props[10] = 1;
            this.props[11] = 0;
            this.props[12] = 0;
            this.props[13] = 0;
            this.props[14] = 0;
            this.props[15] = 1;
            return this;
          }
          function a(H) {
            if (H === 0) {
              return this;
            }
            var A = P(H);
            H = ea(H);
            return this._t(A, -H, 0, 0, H, A, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function b(H) {
            if (H === 0) {
              return this;
            }
            var A = P(H);
            H = ea(H);
            return this._t(1, 0, 0, 0, 0, A, -H, 0, 0, H, A, 0, 0, 0, 0, 1);
          }
          function d(H) {
            if (H === 0) {
              return this;
            }
            var A = P(H);
            H = ea(H);
            return this._t(A, 0, H, 0, 0, 1, 0, 0, -H, 0, A, 0, 0, 0, 0, 1);
          }
          function e(H) {
            if (H === 0) {
              return this;
            }
            var A = P(H);
            H = ea(H);
            return this._t(A, -H, 0, 0, H, A, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function f(H, A) {
            return this._t(1, A, H, 1, 0, 0);
          }
          function k(H, A) {
            return this.shear(ia(H), ia(A));
          }
          function n(H, A) {
            var E = P(A);
            A = ea(A);
            return this._t(E, A, 0, 0, -A, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, ia(H), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(E, -A, 0, 0, A, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          }
          function h(H, A, E) {
            if (!E && E !== 0) {
              E = 1;
            }
            if (H === 1 && A === 1 && E === 1) {
              return this;
            } else {
              return this._t(H, 0, 0, 0, 0, A, 0, 0, 0, 0, E, 0, 0, 0, 0, 1);
            }
          }
          function g(H, A, E, M, Z, fa, aa, ha, da, Y, na, sa, L, I, ca, xa) {
            this.props[0] = H;
            this.props[1] = A;
            this.props[2] = E;
            this.props[3] = M;
            this.props[4] = Z;
            this.props[5] = fa;
            this.props[6] = aa;
            this.props[7] = ha;
            this.props[8] = da;
            this.props[9] = Y;
            this.props[10] = na;
            this.props[11] = sa;
            this.props[12] = L;
            this.props[13] = I;
            this.props[14] = ca;
            this.props[15] = xa;
            return this;
          }
          function q(H, A, E) {
            E = E || 0;
            if (H !== 0 || A !== 0 || E !== 0) {
              return this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, H, A, E, 1);
            } else {
              return this;
            }
          }
          function r(H, A, E, M, Z, fa, aa, ha, da, Y, na, sa, L, I, ca, xa) {
            var V = this.props;
            if (H === 1 && A === 0 && E === 0 && M === 0 && Z === 0 && fa === 1 && aa === 0 && ha === 0 && da === 0 && Y === 0 && na === 1 && sa === 0) {
              V[12] = V[12] * H + V[15] * L;
              V[13] = V[13] * fa + V[15] * I;
              V[14] = V[14] * na + V[15] * ca;
              V[15] *= xa;
              this._identityCalculated = false;
              return this;
            }
            var ba = V[0];
            var Nb = V[1];
            var Ob = V[2];
            var Pb = V[3];
            var Qb = V[4];
            var Rb = V[5];
            var Sb = V[6];
            var Tb = V[7];
            var Ub = V[8];
            var Vb = V[9];
            var Wb = V[10];
            var Xb = V[11];
            var Yb = V[12];
            var Zb = V[13];
            var $b = V[14];
            var ac = V[15];
            V[0] = ba * H + Nb * Z + Ob * da + Pb * L;
            V[1] = ba * A + Nb * fa + Ob * Y + Pb * I;
            V[2] = ba * E + Nb * aa + Ob * na + Pb * ca;
            V[3] = ba * M + Nb * ha + Ob * sa + Pb * xa;
            V[4] = Qb * H + Rb * Z + Sb * da + Tb * L;
            V[5] = Qb * A + Rb * fa + Sb * Y + Tb * I;
            V[6] = Qb * E + Rb * aa + Sb * na + Tb * ca;
            V[7] = Qb * M + Rb * ha + Sb * sa + Tb * xa;
            V[8] = Ub * H + Vb * Z + Wb * da + Xb * L;
            V[9] = Ub * A + Vb * fa + Wb * Y + Xb * I;
            V[10] = Ub * E + Vb * aa + Wb * na + Xb * ca;
            V[11] = Ub * M + Vb * ha + Wb * sa + Xb * xa;
            V[12] = Yb * H + Zb * Z + $b * da + ac * L;
            V[13] = Yb * A + Zb * fa + $b * Y + ac * I;
            V[14] = Yb * E + Zb * aa + $b * na + ac * ca;
            V[15] = Yb * M + Zb * ha + $b * sa + ac * xa;
            this._identityCalculated = false;
            return this;
          }
          function v(H) {
            H = H.props;
            return this.transform(H[0], H[1], H[2], H[3], H[4], H[5], H[6], H[7], H[8], H[9], H[10], H[11], H[12], H[13], H[14], H[15]);
          }
          function p() {
            if (!this._identityCalculated) {
              this._identity = this.props[0] === 1 && this.props[1] === 0 && this.props[2] === 0 && this.props[3] === 0 && this.props[4] === 0 && this.props[5] === 1 && this.props[6] === 0 && this.props[7] === 0 && this.props[8] === 0 && this.props[9] === 0 && this.props[10] === 1 && this.props[11] === 0 && this.props[12] === 0 && this.props[13] === 0 && this.props[14] === 0 && this.props[15] === 1;
              this._identityCalculated = true;
            }
            return this._identity;
          }
          function l(H) {
            for (var A = 0; A < 16;) {
              if (H.props[A] !== this.props[A]) {
                return false;
              }
              A += 1;
            }
            return true;
          }
          function m(H) {
            var A;
            for (A = 0; A < 16; A += 1) {
              H.props[A] = this.props[A];
            }
            return H;
          }
          function t(H) {
            var A;
            for (A = 0; A < 16; A += 1) {
              this.props[A] = H[A];
            }
          }
          function u(H, A, E) {
            return {
              x: H * this.props[0] + A * this.props[4] + E * this.props[8] + this.props[12],
              y: H * this.props[1] + A * this.props[5] + E * this.props[9] + this.props[13],
              z: H * this.props[2] + A * this.props[6] + E * this.props[10] + this.props[14]
            };
          }
          function w(H, A, E) {
            return H * this.props[0] + A * this.props[4] + E * this.props[8] + this.props[12];
          }
          function x(H, A, E) {
            return H * this.props[1] + A * this.props[5] + E * this.props[9] + this.props[13];
          }
          function D(H, A, E) {
            return H * this.props[2] + A * this.props[6] + E * this.props[10] + this.props[14];
          }
          function K() {
            var H = this.props[0] * this.props[5] - this.props[1] * this.props[4];
            var A = this.props[5] / H;
            var E = -this.props[1] / H;
            var M = -this.props[4] / H;
            var Z = this.props[0] / H;
            var fa = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / H;
            H = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / H;
            var aa = new Ja();
            aa.props[0] = A;
            aa.props[1] = E;
            aa.props[4] = M;
            aa.props[5] = Z;
            aa.props[12] = fa;
            aa.props[13] = H;
            return aa;
          }
          function J(H) {
            return this.getInverseMatrix().applyToPointArray(H[0], H[1], H[2] || 0);
          }
          function F(H) {
            var A;
            var E = H.length;
            var M = [];
            for (A = 0; A < E; A += 1) {
              M[A] = J(H[A]);
            }
            return M;
          }
          function G(H, A, E) {
            var M = la("float32", 6);
            if (this.isIdentity()) {
              M[0] = H[0];
              M[1] = H[1];
              M[2] = A[0];
              M[3] = A[1];
              M[4] = E[0];
              M[5] = E[1];
            } else {
              var Z = this.props[0];
              var fa = this.props[1];
              var aa = this.props[4];
              var ha = this.props[5];
              var da = this.props[12];
              var Y = this.props[13];
              M[0] = H[0] * Z + H[1] * aa + da;
              M[1] = H[0] * fa + H[1] * ha + Y;
              M[2] = A[0] * Z + A[1] * aa + da;
              M[3] = A[0] * fa + A[1] * ha + Y;
              M[4] = E[0] * Z + E[1] * aa + da;
              M[5] = E[0] * fa + E[1] * ha + Y;
            }
            return M;
          }
          function B(H, A, E) {
            if (this.isIdentity()) {
              return [H, A, E];
            } else {
              return [H * this.props[0] + A * this.props[4] + E * this.props[8] + this.props[12], H * this.props[1] + A * this.props[5] + E * this.props[9] + this.props[13], H * this.props[2] + A * this.props[6] + E * this.props[10] + this.props[14]];
            }
          }
          function z(H, A) {
            if (this.isIdentity()) {
              return H + "," + A;
            }
            var E = this.props;
            return Math.round((H * E[0] + A * E[4] + E[12]) * 100) / 100 + "," + Math.round((H * E[1] + A * E[5] + E[13]) * 100) / 100;
          }
          function y() {
            for (var H = 0, A = this.props, E = "matrix3d("; H < 16;) {
              E += S(A[H] * 10000) / 10000;
              E += H === 15 ? ")" : ",";
              H += 1;
            }
            return E;
          }
          function C(H) {
            if (H < 0.000001 && H > 0 || H > -0.000001 && H < 0) {
              return S(H * 10000) / 10000;
            } else {
              return H;
            }
          }
          function N() {
            var H = this.props;
            return "matrix(" + C(H[0]) + "," + C(H[1]) + "," + C(H[4]) + "," + C(H[5]) + "," + C(H[12]) + "," + C(H[13]) + ")";
          }
          var P = Math.cos;
          var ea = Math.sin;
          var ia = Math.tan;
          var S = Math.round;
          return function () {
            this.reset = c;
            this.rotate = a;
            this.rotateX = b;
            this.rotateY = d;
            this.rotateZ = e;
            this.skew = k;
            this.skewFromAxis = n;
            this.shear = f;
            this.scale = h;
            this.setTransform = g;
            this.translate = q;
            this.transform = r;
            this.multiply = v;
            this.applyToPoint = u;
            this.applyToX = w;
            this.applyToY = x;
            this.applyToZ = D;
            this.applyToPointArray = B;
            this.applyToTriplePoints = G;
            this.applyToPointStringified = z;
            this.toCSS = y;
            this.to2dCSS = N;
            this.clone = m;
            this.cloneFromProps = t;
            this.equals = l;
            this.inversePoints = F;
            this.inversePoint = J;
            this.getInverseMatrix = K;
            this._t = this.transform;
            this.isIdentity = p;
            this._identity = true;
            this._identityCalculated = false;
            this.props = la("float32", 16);
            this.reset();
          };
        }();
        var ka = {
          play: Na.play,
          pause: Na.pause,
          setLocationHref: function (c) {
            Ma = c;
          },
          togglePause: Na.togglePause,
          setSpeed: Na.setSpeed,
          setDirection: Na.setDirection,
          stop: Na.stop,
          searchAnimations: fb,
          registerAnimation: Na.registerAnimation
        };
        ka.loadAnimation = function (c) {
          return Na.loadAnimation(c);
        };
        ka.setSubframeRendering = function (c) {
          nd = !!c;
        };
        ka.resize = Na.resize;
        ka.goToAndStop = Na.goToAndStop;
        ka.destroy = Na.destroy;
        ka.setQuality = function (c) {
          if (typeof c == "string") {
            switch (c) {
              case "high":
                sb = 200;
                break;
              default:
              case "medium":
                sb = 50;
                break;
              case "low":
                sb = 10;
            }
          } else if (!isNaN(c) && c > 1) {
            sb = c;
          }
        };
        ka.inBrowser = function () {
          return typeof navigator != "undefined";
        };
        ka.installPlugin = function (c, a) {
          if (c === "expressions") {
            Lb = a;
          }
        };
        ka.freeze = Na.freeze;
        ka.unfreeze = Na.unfreeze;
        ka.setVolume = Na.setVolume;
        ka.mute = Na.mute;
        ka.unmute = Na.unmute;
        ka.getRegisteredAnimations = Na.getRegisteredAnimations;
        ka.useWebWorker = function (c) {
          Qc = !!c;
        };
        ka.setIDPrefix = function (c) {
          Ad = c;
        };
        ka.__getFactory = function (c) {
          switch (c) {
            case "propertyFactory":
              return Q;
            case "shapePropertyFactory":
              return ja;
            case "matrix":
              return Ja;
            default:
              return null;
          }
        };
        ka.version = "5.12.2";
        var bd = "";
        var cd = document.getElementsByTagName("script");
        var qd = cd[cd.length - 1] || {
          src: ""
        };
        bd = qd.src ? qd.src.replace(/^[^\?]+\??/, "") : "";
        (function (c) {
          for (var a = bd.split("&"), b = 0; b < a.length; b += 1) {
            var d = a[b].split("=");
            if (decodeURIComponent(d[0]) == c) {
              return decodeURIComponent(d[1]);
            }
          }
        })("renderer");
        var Od = setInterval(function () {
          if (document.readyState === "complete") {
            clearInterval(Od);
            fb();
          }
        }, 100);
        try {
          window.bodymovin = ka;
        } catch (c) {}
        var tb = function () {
          var c = {};
          var a = {};
          c.registerModifier = function (b, d) {
            a[b] ||= d;
          };
          c.getModifier = function (b, d, e) {
            return new a[b](d, e);
          };
          return c;
        }();
        Ta.prototype.initModifierProperties = function () {};
        Ta.prototype.addShapeToModifier = function () {};
        Ta.prototype.addShape = function (c) {
          if (!this.closed) {
            c.sh.container.addDynamicProperty(c.sh);
            var a = {
              shape: c.sh,
              data: c,
              localShapeCollection: Ea.newShapeCollection()
            };
            this.shapes.push(a);
            this.addShapeToModifier(a);
            if (this._isAnimated) {
              c.setAsAnimated();
            }
          }
        };
        Ta.prototype.init = function (c, a) {
          this.shapes = [];
          this.elem = c;
          this.initDynamicPropertyContainer(c);
          this.initModifierProperties(c, a);
          this.frameId = Rc;
          this.k = this.closed = false;
          if (this.dynamicProperties.length) {
            this.k = true;
          } else {
            this.getValue(true);
          }
        };
        Ta.prototype.processKeys = function () {
          if (this.elem.globalData.frameId !== this.frameId) {
            this.frameId = this.elem.globalData.frameId;
            this.iterateDynamicProperties();
          }
        };
        R([Pa], Ta);
        R([Ta], Za);
        Za.prototype.initModifierProperties = function (c, a) {
          this.s = Q.getProp(c, a.s, 0, 0.01, this);
          this.e = Q.getProp(c, a.e, 0, 0.01, this);
          this.o = Q.getProp(c, a.o, 0, 0, this);
          this.eValue = this.sValue = 0;
          this.getValue = this.processKeys;
          this.m = a.m;
          this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
        };
        Za.prototype.addShapeToModifier = function (c) {
          c.pathsData = [];
        };
        Za.prototype.calculateShapeEdges = function (c, a, b, d, e) {
          var f = [];
          if (a <= 1) {
            f.push({
              s: c,
              e: a
            });
          } else if (c >= 1) {
            f.push({
              s: c - 1,
              e: a - 1
            });
          } else {
            f.push({
              s: c,
              e: 1
            });
            f.push({
              s: 0,
              e: a - 1
            });
          }
          var k;
          a = [];
          var n = f.length;
          for (c = 0; c < n; c += 1) {
            if (!((k = f[c]).e * e < d) && !(k.s * e > d + b)) {
              var h = k.s * e <= d ? 0 : (k.s * e - d) / b;
              var g = k.e * e >= d + b ? 1 : (k.e * e - d) / b;
              a.push([h, g]);
            }
          }
          if (!a.length) {
            a.push([0, 0]);
          }
          return a;
        };
        Za.prototype.releasePathsData = function (c) {
          var a;
          var b = c.length;
          for (a = 0; a < b; a += 1) {
            od.release(c[a]);
          }
          c.length = 0;
          return c;
        };
        Za.prototype.processShapes = function (c) {
          var a;
          var b;
          var d;
          if (this._mdf || c) {
            var e = this.o.v % 360 / 360;
            if (e < 0) {
              e += 1;
            }
            if ((a = this.s.v > 1 ? 1 + e : this.s.v < 0 ? 0 + e : this.s.v + e) > (b = this.e.v > 1 ? 1 + e : this.e.v < 0 ? 0 + e : this.e.v + e)) {
              e = a;
              a = b;
              b = e;
            }
            a = Math.round(a * 10000) * 0.0001;
            b = Math.round(b * 10000) * 0.0001;
            this.sValue = a;
            this.eValue = b;
          } else {
            a = this.sValue;
            b = this.eValue;
          }
          var f;
          var k;
          var n;
          var h = this.shapes.length;
          var g = 0;
          if (b === a) {
            for (e = 0; e < h; e += 1) {
              this.shapes[e].localShapeCollection.releaseShapes();
              this.shapes[e].shape._mdf = true;
              this.shapes[e].shape.paths = this.shapes[e].localShapeCollection;
              if (this._mdf) {
                this.shapes[e].pathsData.length = 0;
              }
            }
          } else if (b === 1 && a === 0 || b === 0 && a === 1) {
            if (this._mdf) {
              for (e = 0; e < h; e += 1) {
                this.shapes[e].pathsData.length = 0;
                this.shapes[e].shape._mdf = true;
              }
            }
          } else {
            var q;
            var r = [];
            for (e = 0; e < h; e += 1) {
              if ((q = this.shapes[e]).shape._mdf || this._mdf || c || this.m === 2) {
                k = (d = q.shape.paths)._length;
                n = 0;
                if (!q.shape._mdf && q.pathsData.length) {
                  n = q.totalShapeLength;
                } else {
                  var v = this.releasePathsData(q.pathsData);
                  for (f = 0; f < k; f += 1) {
                    var p = Xa.getSegmentsLength(d.shapes[f]);
                    v.push(p);
                    n += p.totalLength;
                  }
                  q.totalShapeLength = n;
                  q.pathsData = v;
                }
                g += n;
                q.shape._mdf = true;
              } else {
                q.shape.paths = q.localShapeCollection;
              }
            }
            var l;
            d = a;
            v = b;
            p = 0;
            for (e = h - 1; e >= 0; --e) {
              if ((q = this.shapes[e]).shape._mdf) {
                (c = q.localShapeCollection).releaseShapes();
                if (this.m === 2 && h > 1) {
                  l = this.calculateShapeEdges(a, b, q.totalShapeLength, p, g);
                  p += q.totalShapeLength;
                } else {
                  l = [[d, v]];
                }
                k = l.length;
                for (f = 0; f < k; f += 1) {
                  d = l[f][0];
                  v = l[f][1];
                  r.length = 0;
                  if (v <= 1) {
                    r.push({
                      s: q.totalShapeLength * d,
                      e: q.totalShapeLength * v
                    });
                  } else if (d >= 1) {
                    r.push({
                      s: q.totalShapeLength * (d - 1),
                      e: q.totalShapeLength * (v - 1)
                    });
                  } else {
                    r.push({
                      s: q.totalShapeLength * d,
                      e: q.totalShapeLength
                    });
                    r.push({
                      s: 0,
                      e: q.totalShapeLength * (v - 1)
                    });
                  }
                  n = this.addShapes(q, r[0]);
                  if (r[0].s !== r[0].e) {
                    if (r.length > 1) {
                      if (q.shape.paths.shapes[q.shape.paths._length - 1].c) {
                        var m = n.pop();
                        this.addPaths(n, c);
                        n = this.addShapes(q, r[1], m);
                      } else {
                        this.addPaths(n, c);
                        n = this.addShapes(q, r[1]);
                      }
                    }
                    this.addPaths(n, c);
                  }
                }
                q.shape.paths = c;
              }
            }
          }
        };
        Za.prototype.addPaths = function (c, a) {
          var b;
          var d = c.length;
          for (b = 0; b < d; b += 1) {
            a.addShape(c[b]);
          }
        };
        Za.prototype.addSegment = function (c, a, b, d, e, f, k) {
          e.setXYAt(a[0], a[1], "o", f);
          e.setXYAt(b[0], b[1], "i", f + 1);
          if (k) {
            e.setXYAt(c[0], c[1], "v", f);
          }
          e.setXYAt(d[0], d[1], "v", f + 1);
        };
        Za.prototype.addSegmentFromArray = function (c, a, b, d) {
          a.setXYAt(c[1], c[5], "o", b);
          a.setXYAt(c[2], c[6], "i", b + 1);
          if (d) {
            a.setXYAt(c[0], c[4], "v", b);
          }
          a.setXYAt(c[3], c[7], "v", b + 1);
        };
        Za.prototype.addShapes = function (c, a, b) {
          var d;
          var e;
          var f;
          var k;
          var n;
          var h = c.pathsData;
          var g = c.shape.paths.shapes;
          var q = c.shape.paths._length;
          var r = 0;
          var v = [];
          var p = true;
          if (b) {
            f = b._length;
            n = b._length;
          } else {
            b = O.newElement();
            f = 0;
            n = 0;
          }
          v.push(b);
          for (c = 0; c < q; c += 1) {
            var l = h[c].lengths;
            b.c = g[c].c;
            var m = g[c].c ? l.length : l.length + 1;
            for (d = 1; d < m; d += 1) {
              if (r + (e = l[d - 1]).addedLength < a.s) {
                r += e.addedLength;
                b.c = false;
              } else {
                if (r > a.e) {
                  b.c = false;
                  break;
                }
                if (a.s <= r && a.e >= r + e.addedLength) {
                  this.addSegment(g[c].v[d - 1], g[c].o[d - 1], g[c].i[d], g[c].v[d], b, f, p);
                  p = false;
                } else {
                  k = Xa.getNewSegment(g[c].v[d - 1], g[c].v[d], g[c].o[d - 1], g[c].i[d], (a.s - r) / e.addedLength, (a.e - r) / e.addedLength, l[d - 1]);
                  this.addSegmentFromArray(k, b, f, p);
                  p = false;
                  b.c = false;
                }
                r += e.addedLength;
                f += 1;
              }
            }
            if (g[c].c && l.length) {
              e = l[d - 1];
              if (r <= a.e) {
                m = l[d - 1].addedLength;
                if (a.s <= r && a.e >= r + m) {
                  this.addSegment(g[c].v[d - 1], g[c].o[d - 1], g[c].i[0], g[c].v[0], b, f, p);
                  p = false;
                } else {
                  k = Xa.getNewSegment(g[c].v[d - 1], g[c].v[0], g[c].o[d - 1], g[c].i[0], (a.s - r) / m, (a.e - r) / m, l[d - 1]);
                  this.addSegmentFromArray(k, b, f, p);
                  p = false;
                  b.c = false;
                }
              } else {
                b.c = false;
              }
              r += e.addedLength;
              f += 1;
            }
            if (b._length) {
              b.setXYAt(b.v[n][0], b.v[n][1], "i", n);
              b.setXYAt(b.v[b._length - 1][0], b.v[b._length - 1][1], "o", b._length - 1);
            }
            if (r > a.e) {
              break;
            }
            if (c < q - 1) {
              b = O.newElement();
              p = true;
              v.push(b);
              f = 0;
            }
          }
          return v;
        };
        R([Ta], vc);
        vc.prototype.initModifierProperties = function (c, a) {
          this.getValue = this.processKeys;
          this.amount = Q.getProp(c, a.a, 0, null, this);
          this._isAnimated = !!this.amount.effectsSequence.length;
        };
        vc.prototype.processPath = function (c, a) {
          a /= 100;
          var b = [0, 0];
          var d = c._length;
          var e;
          for (e = 0; e < d; e += 1) {
            b[0] += c.v[e][0];
            b[1] += c.v[e][1];
          }
          b[0] /= d;
          b[1] /= d;
          var f = O.newElement();
          f.c = c.c;
          for (e = 0; e < d; e += 1) {
            var k = c.v[e][0] + (b[0] - c.v[e][0]) * a;
            var n = c.v[e][1] + (b[1] - c.v[e][1]) * a;
            var h = c.o[e][0] + (b[0] - c.o[e][0]) * -a;
            var g = c.o[e][1] + (b[1] - c.o[e][1]) * -a;
            var q = c.i[e][0] + (b[0] - c.i[e][0]) * -a;
            var r = c.i[e][1] + (b[1] - c.i[e][1]) * -a;
            f.setTripleAt(k, n, h, g, q, r, e);
          }
          return f;
        };
        vc.prototype.processShapes = function (c) {
          var a;
          var b;
          var d;
          var e;
          var f = this.shapes.length;
          var k = this.amount.v;
          if (k !== 0) {
            for (a = 0; a < f; a += 1) {
              e = (d = this.shapes[a]).localShapeCollection;
              if (d.shape._mdf || this._mdf || c) {
                e.releaseShapes();
                d.shape._mdf = true;
                var n = d.shape.paths.shapes;
                var h = d.shape.paths._length;
                for (b = 0; b < h; b += 1) {
                  e.addShape(this.processPath(n[b], k));
                }
              }
              d.shape.paths = d.localShapeCollection;
            }
          }
          if (!this.dynamicProperties.length) {
            this._mdf = false;
          }
        };
        var rd = function () {
          function c(b, d, e) {
            this.elem = b;
            this.frameId = -1;
            this.propType = "transform";
            this.data = d;
            this.v = new Ja();
            this.pre = new Ja();
            this.appliedTransformations = 0;
            this.initDynamicPropertyContainer(e || b);
            if (d.p && d.p.s) {
              this.px = Q.getProp(b, d.p.x, 0, 0, this);
              this.py = Q.getProp(b, d.p.y, 0, 0, this);
              if (d.p.z) {
                this.pz = Q.getProp(b, d.p.z, 0, 0, this);
              }
            } else {
              this.p = Q.getProp(b, d.p || {
                k: [0, 0, 0]
              }, 1, 0, this);
            }
            if (d.rx) {
              this.rx = Q.getProp(b, d.rx, 0, qa, this);
              this.ry = Q.getProp(b, d.ry, 0, qa, this);
              this.rz = Q.getProp(b, d.rz, 0, qa, this);
              if (d.or.k[0].ti) {
                var f = d.or.k.length;
                for (e = 0; e < f; e += 1) {
                  d.or.k[e].to = null;
                  d.or.k[e].ti = null;
                }
              }
              this.or = Q.getProp(b, d.or, 1, qa, this);
              this.or.sh = true;
            } else {
              this.r = Q.getProp(b, d.r || {
                k: 0
              }, 0, qa, this);
            }
            if (d.sk) {
              this.sk = Q.getProp(b, d.sk, 0, qa, this);
              this.sa = Q.getProp(b, d.sa, 0, qa, this);
            }
            this.a = Q.getProp(b, d.a || {
              k: [0, 0, 0]
            }, 1, 0, this);
            this.s = Q.getProp(b, d.s || {
              k: [100, 100, 100]
            }, 1, 0.01, this);
            if (d.o) {
              this.o = Q.getProp(b, d.o, 0, 0.01, b);
            } else {
              this.o = {
                _mdf: false,
                v: 1
              };
            }
            this._isDirty = true;
            if (!this.dynamicProperties.length) {
              this.getValue(true);
            }
          }
          var a = [0, 0];
          c.prototype = {
            applyToMatrix: function (b) {
              var d = this._mdf;
              this.iterateDynamicProperties();
              this._mdf = this._mdf || d;
              if (this.a) {
                b.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
              }
              if (this.s) {
                b.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
              }
              if (this.sk) {
                b.skewFromAxis(-this.sk.v, this.sa.v);
              }
              if (this.r) {
                b.rotate(-this.r.v);
              } else {
                b.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
              }
              if (this.data.p.s) {
                if (this.data.p.z) {
                  b.translate(this.px.v, this.py.v, -this.pz.v);
                } else {
                  b.translate(this.px.v, this.py.v, 0);
                }
              } else {
                b.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
              }
            },
            getValue: function (b) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty) {
                  this.precalculateMatrix();
                  this._isDirty = false;
                }
                this.iterateDynamicProperties();
                if (this._mdf || b) {
                  this.v.cloneFromProps(this.pre.props);
                  if (this.appliedTransformations < 1) {
                    this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
                  }
                  if (this.appliedTransformations < 2) {
                    this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
                  }
                  if (this.sk && this.appliedTransformations < 3) {
                    this.v.skewFromAxis(-this.sk.v, this.sa.v);
                  }
                  if (this.r && this.appliedTransformations < 4) {
                    this.v.rotate(-this.r.v);
                  } else if (!this.r && this.appliedTransformations < 4) {
                    this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
                  }
                  if (this.autoOriented) {
                    var d;
                    var e;
                    b = this.elem.globalData.frameRate;
                    if (this.p && this.p.keyframes && this.p.getValueAtTime) {
                      if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
                        d = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / b, 0);
                        e = this.p.getValueAtTime(this.p.keyframes[0].t / b, 0);
                      } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
                        d = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / b, 0);
                        e = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / b, 0);
                      } else {
                        d = this.p.pv;
                        e = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / b, this.p.offsetTime);
                      }
                    } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      d = [];
                      e = [];
                      var f = this.px;
                      var k = this.py;
                      if (f._caching.lastFrame + f.offsetTime <= f.keyframes[0].t) {
                        d[0] = f.getValueAtTime((f.keyframes[0].t + 0.01) / b, 0);
                        d[1] = k.getValueAtTime((k.keyframes[0].t + 0.01) / b, 0);
                        e[0] = f.getValueAtTime(f.keyframes[0].t / b, 0);
                        e[1] = k.getValueAtTime(k.keyframes[0].t / b, 0);
                      } else if (f._caching.lastFrame + f.offsetTime >= f.keyframes[f.keyframes.length - 1].t) {
                        d[0] = f.getValueAtTime(f.keyframes[f.keyframes.length - 1].t / b, 0);
                        d[1] = k.getValueAtTime(k.keyframes[k.keyframes.length - 1].t / b, 0);
                        e[0] = f.getValueAtTime((f.keyframes[f.keyframes.length - 1].t - 0.01) / b, 0);
                        e[1] = k.getValueAtTime((k.keyframes[k.keyframes.length - 1].t - 0.01) / b, 0);
                      } else {
                        d = [f.pv, k.pv];
                        e[0] = f.getValueAtTime((f._caching.lastFrame + f.offsetTime - 0.01) / b, f.offsetTime);
                        e[1] = k.getValueAtTime((k._caching.lastFrame + k.offsetTime - 0.01) / b, k.offsetTime);
                      }
                    } else {
                      d = e = a;
                    }
                    this.v.rotate(-Math.atan2(d[1] - e[1], d[0] - e[0]));
                  }
                  if (this.data.p && this.data.p.s) {
                    if (this.data.p.z) {
                      this.v.translate(this.px.v, this.py.v, -this.pz.v);
                    } else {
                      this.v.translate(this.px.v, this.py.v, 0);
                    }
                  } else {
                    this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                  }
                }
                this.frameId = this.elem.globalData.frameId;
              }
            },
            precalculateMatrix: function () {
              this.appliedTransformations = 0;
              this.pre.reset();
              if (!this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
                this.appliedTransformations = 2;
                if (this.sk) {
                  if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) {
                    return;
                  }
                  this.pre.skewFromAxis(-this.sk.v, this.sa.v);
                  this.appliedTransformations = 3;
                }
                if (this.r) {
                  if (!this.r.effectsSequence.length) {
                    this.pre.rotate(-this.r.v);
                    this.appliedTransformations = 4;
                  }
                } else if (!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
                  this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
                  this.appliedTransformations = 4;
                }
              }
            },
            autoOrient: function () {}
          };
          R([Pa], c);
          c.prototype.addDynamicProperty = function (b) {
            this._addDynamicProperty(b);
            this.elem.addDynamicProperty(b);
            this._isDirty = true;
          };
          c.prototype._addDynamicProperty = Pa.prototype.addDynamicProperty;
          return {
            getTransformProperty: function (b, d, e) {
              return new c(b, d, e);
            }
          };
        }();
        R([Ta], za);
        za.prototype.initModifierProperties = function (c, a) {
          this.getValue = this.processKeys;
          this.c = Q.getProp(c, a.c, 0, null, this);
          this.o = Q.getProp(c, a.o, 0, null, this);
          this.tr = rd.getTransformProperty(c, a.tr, this);
          this.so = Q.getProp(c, a.tr.so, 0, 0.01, this);
          this.eo = Q.getProp(c, a.tr.eo, 0, 0.01, this);
          this.data = a;
          if (!this.dynamicProperties.length) {
            this.getValue(true);
          }
          this._isAnimated = !!this.dynamicProperties.length;
          this.pMatrix = new Ja();
          this.rMatrix = new Ja();
          this.sMatrix = new Ja();
          this.tMatrix = new Ja();
          this.matrix = new Ja();
        };
        za.prototype.applyTransforms = function (c, a, b, d, e, f) {
          var k = f ? -1 : 1;
          var n = d.s.v[0] + (1 - d.s.v[0]) * (1 - e);
          var h = d.s.v[1] + (1 - d.s.v[1]) * (1 - e);
          c.translate(d.p.v[0] * k * e, d.p.v[1] * k * e, d.p.v[2]);
          a.translate(-d.a.v[0], -d.a.v[1], d.a.v[2]);
          a.rotate(-d.r.v * k * e);
          a.translate(d.a.v[0], d.a.v[1], d.a.v[2]);
          b.translate(-d.a.v[0], -d.a.v[1], d.a.v[2]);
          b.scale(f ? 1 / n : n, f ? 1 / h : h);
          b.translate(d.a.v[0], d.a.v[1], d.a.v[2]);
        };
        za.prototype.init = function (c, a, b, d) {
          this.elem = c;
          this.arr = a;
          this.pos = b;
          this.elemsData = d;
          this._currentCopies = 0;
          this._elements = [];
          this._groups = [];
          this.frameId = -1;
          this.initDynamicPropertyContainer(c);
          for (this.initModifierProperties(c, a[b]); b > 0;) {
            --b;
            this._elements.unshift(a[b]);
          }
          if (this.dynamicProperties.length) {
            this.k = true;
          } else {
            this.getValue(true);
          }
        };
        za.prototype.resetElements = function (c) {
          var a;
          var b = c.length;
          for (a = 0; a < b; a += 1) {
            c[a]._processed = false;
            if (c[a].ty === "gr") {
              this.resetElements(c[a].it);
            }
          }
        };
        za.prototype.cloneElements = function (c) {
          c = JSON.parse(JSON.stringify(c));
          this.resetElements(c);
          return c;
        };
        za.prototype.changeGroupRender = function (c, a) {
          var b;
          var d = c.length;
          for (b = 0; b < d; b += 1) {
            c[b]._render = a;
            if (c[b].ty === "gr") {
              this.changeGroupRender(c[b].it, a);
            }
          }
        };
        za.prototype.processShapes = function (c) {
          var a;
          var b;
          var d = false;
          if (this._mdf || c) {
            var e;
            var f = Math.ceil(this.c.v);
            if (this._groups.length < f) {
              while (this._groups.length < f) {
                d = {
                  it: this.cloneElements(this._elements),
                  ty: "gr"
                };
                d.it.push({
                  a: {
                    a: 0,
                    ix: 1,
                    k: [0, 0]
                  },
                  nm: "Transform",
                  o: {
                    a: 0,
                    ix: 7,
                    k: 100
                  },
                  p: {
                    a: 0,
                    ix: 2,
                    k: [0, 0]
                  },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [{
                      s: 0,
                      e: 0,
                      t: 0
                    }, {
                      s: 0,
                      e: 0,
                      t: 1
                    }]
                  },
                  s: {
                    a: 0,
                    ix: 3,
                    k: [100, 100]
                  },
                  sa: {
                    a: 0,
                    ix: 5,
                    k: 0
                  },
                  sk: {
                    a: 0,
                    ix: 4,
                    k: 0
                  },
                  ty: "tr"
                });
                this.arr.splice(0, 0, d);
                this._groups.splice(0, 0, d);
                this._currentCopies += 1;
              }
              this.elem.reloadShapes();
              d = true;
            }
            for (c = b = 0; c <= this._groups.length - 1; c += 1) {
              e = b < f;
              this._groups[c]._render = e;
              this.changeGroupRender(this._groups[c].it, e);
              if (!e) {
                var k = this.elemsData[c].it;
                k = k[k.length - 1];
                if (k.transform.op.v !== 0) {
                  k.transform.op._mdf = true;
                  k.transform.op.v = 0;
                } else {
                  k.transform.op._mdf = false;
                }
              }
              b += 1;
            }
            this._currentCopies = f;
            c = this.o.v;
            b = c % 1;
            var n = c > 0 ? Math.floor(c) : Math.ceil(c);
            e = this.pMatrix.props;
            f = this.rMatrix.props;
            k = this.sMatrix.props;
            this.pMatrix.reset();
            this.rMatrix.reset();
            this.sMatrix.reset();
            this.tMatrix.reset();
            this.matrix.reset();
            var h;
            var g;
            var q = 0;
            if (c > 0) {
              while (q < n) {
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                q += 1;
              }
              if (b) {
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, b, false);
                q += b;
              }
            } else if (c < 0) {
              while (q > n) {
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
                --q;
              }
              if (b) {
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -b, true);
                q -= b;
              }
            }
            c = this.data.m === 1 ? 0 : this._currentCopies - 1;
            var r = this.data.m === 1 ? 1 : -1;
            for (b = this._currentCopies; b;) {
              g = (n = (a = this.elemsData[c].it)[a.length - 1].transform.mProps.v.props).length;
              a[a.length - 1].transform.mProps._mdf = true;
              a[a.length - 1].transform.op._mdf = true;
              a[a.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (c / (this._currentCopies - 1));
              if (q !== 0) {
                if (c !== 0 && r === 1 || c !== this._currentCopies - 1 && r === -1) {
                  this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                }
                this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]);
                this.matrix.transform(k[0], k[1], k[2], k[3], k[4], k[5], k[6], k[7], k[8], k[9], k[10], k[11], k[12], k[13], k[14], k[15]);
                this.matrix.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
                for (h = 0; h < g; h += 1) {
                  n[h] = this.matrix.props[h];
                }
                this.matrix.reset();
              } else {
                this.matrix.reset();
                h = 0;
                for (; h < g; h += 1) {
                  n[h] = this.matrix.props[h];
                }
              }
              q += 1;
              --b;
              c += r;
            }
          } else {
            b = this._currentCopies;
            c = 0;
            r = 1;
            while (b) {
              (a = this.elemsData[c].it)[a.length - 1].transform.mProps.v.props;
              a[a.length - 1].transform.mProps._mdf = false;
              a[a.length - 1].transform.op._mdf = false;
              --b;
              c += r;
            }
          }
          return d;
        };
        za.prototype.addShape = function () {};
        R([Ta], Ra);
        Ra.prototype.initModifierProperties = function (c, a) {
          this.getValue = this.processKeys;
          this.rd = Q.getProp(c, a.r, 0, null, this);
          this._isAnimated = !!this.rd.effectsSequence.length;
        };
        Ra.prototype.processPath = function (c, a) {
          var b;
          var d = O.newElement();
          d.c = c.c;
          var e;
          var f;
          var k;
          var n;
          var h;
          var g;
          var q;
          var r;
          var v;
          var p = c._length;
          var l = 0;
          for (b = 0; b < p; b += 1) {
            var m = c.v[b];
            var t = c.o[b];
            var u = c.i[b];
            if (m[0] === t[0] && m[1] === t[1] && m[0] === u[0] && m[1] === u[1]) {
              if (b !== 0 && b !== p - 1 || c.c) {
                e = b === 0 ? c.v[p - 1] : c.v[b - 1];
                k = (f = Math.sqrt(Math.pow(m[0] - e[0], 2) + Math.pow(m[1] - e[1], 2))) ? Math.min(f / 2, a) / f : 0;
                n = r = m[0] + (e[0] - m[0]) * k;
                h = v = m[1] - (m[1] - e[1]) * k;
                g = n - (n - m[0]) * Bb;
                q = h - (h - m[1]) * Bb;
                d.setTripleAt(n, h, g, q, r, v, l);
                l += 1;
                e = b === p - 1 ? c.v[0] : c.v[b + 1];
                k = (f = Math.sqrt(Math.pow(m[0] - e[0], 2) + Math.pow(m[1] - e[1], 2))) ? Math.min(f / 2, a) / f : 0;
                n = g = m[0] + (e[0] - m[0]) * k;
                h = q = m[1] + (e[1] - m[1]) * k;
                r = n - (n - m[0]) * Bb;
                v = h - (h - m[1]) * Bb;
                d.setTripleAt(n, h, g, q, r, v, l);
                l += 1;
              } else {
                d.setTripleAt(m[0], m[1], t[0], t[1], u[0], u[1], l);
                l += 1;
              }
            } else {
              d.setTripleAt(c.v[b][0], c.v[b][1], c.o[b][0], c.o[b][1], c.i[b][0], c.i[b][1], l);
              l += 1;
            }
          }
          return d;
        };
        Ra.prototype.processShapes = function (c) {
          var a;
          var b;
          var d;
          var e;
          var f = this.shapes.length;
          var k = this.rd.v;
          if (k !== 0) {
            for (a = 0; a < f; a += 1) {
              e = (d = this.shapes[a]).localShapeCollection;
              if (d.shape._mdf || this._mdf || c) {
                e.releaseShapes();
                d.shape._mdf = true;
                var n = d.shape.paths.shapes;
                var h = d.shape.paths._length;
                for (b = 0; b < h; b += 1) {
                  e.addShape(this.processPath(n[b], k));
                }
              }
              d.shape.paths = d.localShapeCollection;
            }
          }
          if (!this.dynamicProperties.length) {
            this._mdf = false;
          }
        };
        ma.prototype.point = function (c) {
          return [((this.a[0] * c + this.b[0]) * c + this.c[0]) * c + this.d[0], ((this.a[1] * c + this.b[1]) * c + this.c[1]) * c + this.d[1]];
        };
        ma.prototype.derivative = function (c) {
          return [(c * 3 * this.a[0] + this.b[0] * 2) * c + this.c[0], (c * 3 * this.a[1] + this.b[1] * 2) * c + this.c[1]];
        };
        ma.prototype.tangentAngle = function (c) {
          c = this.derivative(c);
          return Math.atan2(c[1], c[0]);
        };
        ma.prototype.normalAngle = function (c) {
          c = this.derivative(c);
          return Math.atan2(c[0], c[1]);
        };
        ma.prototype.inflectionPoints = function () {
          var c = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (Math.abs(c) <= 0.00001) {
            return [];
          }
          var a = (this.a[1] * this.c[0] - this.a[0] * this.c[1]) * -0.5 / c;
          c = a * a - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / c;
          if (c < 0) {
            return [];
          }
          c = Math.sqrt(c);
          if (Math.abs(c) <= 0.00001) {
            if (c > 0 && c < 1) {
              return [a];
            } else {
              return [];
            }
          } else {
            return [a - c, a + c].filter(function (b) {
              return b > 0 && b < 1;
            });
          }
        };
        ma.prototype.split = function (c) {
          if (c <= 0) {
            return [wc(this.points[0]), this];
          }
          if (c >= 1) {
            return [this, wc(this.points[this.points.length - 1])];
          }
          var a = Qa(this.points[0], this.points[1], c);
          var b = Qa(this.points[1], this.points[2], c);
          var d = Qa(this.points[2], this.points[3], c);
          var e = Qa(a, b, c);
          b = Qa(b, d, c);
          c = Qa(e, b, c);
          return [new ma(this.points[0], a, e, c, true), new ma(c, b, d, this.points[3], true)];
        };
        ma.prototype.bounds = function () {
          return {
            x: dd(this, 0),
            y: dd(this, 1)
          };
        };
        ma.prototype.boundingBox = function () {
          var c = this.bounds();
          return {
            left: c.x.min,
            right: c.x.max,
            top: c.y.min,
            bottom: c.y.max,
            width: c.x.max - c.x.min,
            height: c.y.max - c.y.min,
            cx: (c.x.max + c.x.min) / 2,
            cy: (c.y.max + c.y.min) / 2
          };
        };
        ma.prototype.intersections = function (c, a = 2, b = 7) {
          var d = [];
          ec(xc(this, 0, 1), xc(c, 0, 1), 0, a, d, b);
          return d;
        };
        ma.shapeSegment = function (c, a) {
          var b = (a + 1) % c.length();
          return new ma(c.v[a], c.o[a], c.i[b], c.v[b], true);
        };
        ma.shapeSegmentInverted = function (c, a) {
          var b = (a + 1) % c.length();
          return new ma(c.v[b], c.i[b], c.o[a], c.v[a], true);
        };
        R([Ta], hb);
        hb.prototype.initModifierProperties = function (c, a) {
          this.getValue = this.processKeys;
          this.amplitude = Q.getProp(c, a.s, 0, null, this);
          this.frequency = Q.getProp(c, a.r, 0, null, this);
          this.pointsType = Q.getProp(c, a.pt, 0, null, this);
          this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
        };
        hb.prototype.processPath = function (c, a, b, d) {
          var e = c._length;
          var f = O.newElement();
          f.c = c.c;
          if (!c.c) {
            --e;
          }
          if (e === 0) {
            return f;
          }
          var k = -1;
          var n = ma.shapeSegment(c, 0);
          Fb(f, c, 0, a, b, d, k);
          for (var h = 0; h < e; h += 1) {
            var g = f;
            var q = a;
            for (var r = b, v = d, p = -k, l = 0; l < r; l += 1) {
              k = (l + 1) / (r + 1);
              var m = v === 2 ? Math.sqrt(Math.pow(n.points[3][0] - n.points[0][0], 2) + Math.pow(n.points[3][1] - n.points[0][1], 2)) : 0;
              var t = n.normalAngle(k);
              Mc(g, n.point(k), t, p, q, m / ((r + 1) * 2), m / ((r + 1) * 2));
              p = -p;
            }
            k = p;
            n = h !== e - 1 || c.c ? ma.shapeSegment(c, (h + 1) % e) : null;
            Fb(f, c, h + 1, a, b, d, k);
          }
          return f;
        };
        hb.prototype.processShapes = function (c) {
          var a;
          var b;
          var d;
          var e;
          var f = this.shapes.length;
          var k = this.amplitude.v;
          var n = Math.max(0, Math.round(this.frequency.v));
          var h = this.pointsType.v;
          if (k !== 0) {
            for (a = 0; a < f; a += 1) {
              e = (d = this.shapes[a]).localShapeCollection;
              if (d.shape._mdf || this._mdf || c) {
                e.releaseShapes();
                d.shape._mdf = true;
                var g = d.shape.paths.shapes;
                var q = d.shape.paths._length;
                for (b = 0; b < q; b += 1) {
                  e.addShape(this.processPath(g[b], k, n, h));
                }
              }
              d.shape.paths = d.localShapeCollection;
            }
          }
          if (!this.dynamicProperties.length) {
            this._mdf = false;
          }
        };
        R([Ta], hc);
        hc.prototype.initModifierProperties = function (c, a) {
          this.getValue = this.processKeys;
          this.amount = Q.getProp(c, a.a, 0, null, this);
          this.miterLimit = Q.getProp(c, a.ml, 0, null, this);
          this.lineJoin = a.lj;
          this._isAnimated = this.amount.effectsSequence.length !== 0;
        };
        hc.prototype.processPath = function (c, a, b, d) {
          var e = O.newElement();
          e.c = c.c;
          var f;
          var k = c.length();
          if (!c.c) {
            --k;
          }
          var n = [];
          for (f = 0; f < k; f += 1) {
            var h = ma.shapeSegment(c, f);
            n.push(fd(h, a));
          }
          if (!c.c) {
            for (f = k - 1; f >= 0; --f) {
              h = ma.shapeSegmentInverted(c, f);
              n.push(fd(h, a));
            }
          }
          f = n;
          for (n = 1; n < f.length; n += 1) {
            var g = Ib(f[n - 1], f[n]);
            f[n - 1] = g[0];
            f[n] = g[1];
          }
          if (f.length > 1) {
            g = Ib(f[f.length - 1], f[0]);
            f[f.length - 1] = g[0];
            f[0] = g[1];
          }
          n = f;
          a = c = null;
          for (f = 0; f < n.length; f += 1) {
            k = n[f];
            if (a) {
              c = ed(e, a, k[0], b, d);
            }
            a = k[k.length - 1];
            g = 0;
            for (; g < k.length; g += 1) {
              h = k[g];
              if (c && mb(h.points[0], c)) {
                e.setXYAt(h.points[1][0], h.points[1][1], "o", e.length() - 1);
              } else {
                e.setTripleAt(h.points[0][0], h.points[0][1], h.points[1][0], h.points[1][1], h.points[0][0], h.points[0][1], e.length());
              }
              e.setTripleAt(h.points[3][0], h.points[3][1], h.points[3][0], h.points[3][1], h.points[2][0], h.points[2][1], e.length());
              c = h.points[3];
            }
          }
          if (n.length) {
            ed(e, a, n[0][0], b, d);
          }
          return e;
        };
        hc.prototype.processShapes = function (c) {
          var a;
          var b;
          var d;
          var e;
          var f = this.shapes.length;
          var k = this.amount.v;
          var n = this.miterLimit.v;
          var h = this.lineJoin;
          if (k !== 0) {
            for (a = 0; a < f; a += 1) {
              e = (d = this.shapes[a]).localShapeCollection;
              if (d.shape._mdf || this._mdf || c) {
                e.releaseShapes();
                d.shape._mdf = true;
                var g = d.shape.paths.shapes;
                var q = d.shape.paths._length;
                for (b = 0; b < q; b += 1) {
                  e.addShape(this.processPath(g[b], k, h, n));
                }
              }
              d.shape.paths = d.localShapeCollection;
            }
          }
          if (!this.dynamicProperties.length) {
            this._mdf = false;
          }
        };
        var Va = function () {
          function c(h, g) {
            var q = document.createElement("span");
            q.setAttribute("aria-hidden", true);
            q.style.fontFamily = g;
            var r = document.createElement("span");
            r.innerText = "giItT1WQy@!-/#";
            q.style.position = "absolute";
            q.style.left = "-10000px";
            q.style.top = "-10000px";
            q.style.fontSize = "300px";
            q.style.fontVariant = "normal";
            q.style.fontStyle = "normal";
            q.style.fontWeight = "normal";
            q.style.letterSpacing = "0";
            q.appendChild(r);
            document.body.appendChild(q);
            var v = r.offsetWidth;
            var p = r.style;
            var l = h.split(",");
            var m = l.length;
            var t = [];
            for (h = 0; h < m; h += 1) {
              if (l[h] !== "sans-serif" && l[h] !== "monospace") {
                t.push(l[h]);
              }
            }
            h = t.join(",");
            p.fontFamily = h + ", " + g;
            return {
              node: r,
              w: v,
              parent: q
            };
          }
          function a(h, g) {
            var q = document.body && g ? "svg" : "canvas";
            var r = gd(h);
            if (q === "svg") {
              var v = X("text");
              v.style.fontSize = "100px";
              v.setAttribute("font-family", h.fFamily);
              v.setAttribute("font-style", r.style);
              v.setAttribute("font-weight", r.weight);
              v.textContent = "1";
              if (h.fClass) {
                v.style.fontFamily = "inherit";
                v.setAttribute("class", h.fClass);
              } else {
                v.style.fontFamily = h.fFamily;
              }
              g.appendChild(v);
              var p = v;
            } else {
              g = new OffscreenCanvas(500, 500).getContext("2d");
              g.font = r.style + " " + r.weight + " 100px " + h.fFamily;
              p = g;
            }
            return {
              measureText: function (l) {
                if (q === "svg") {
                  p.textContent = l;
                  return p.getComputedTextLength();
                } else {
                  return p.measureText(l).width;
                }
              }
            };
          }
          function b(h) {
            var g = 0;
            var q = h.charCodeAt(0);
            if (q >= 55296 && q <= 56319) {
              h = h.charCodeAt(1);
              if (h >= 56320 && h <= 57343) {
                g = (q - 55296) * 1024 + h - 56320 + 65536;
              }
            }
            return g;
          }
          function d(h) {
            h = b(h);
            return h >= 127462 && h <= 127487;
          }
          var e = {
            w: 0,
            size: 0,
            shapes: [],
            data: {
              shapes: []
            }
          };
          var f = [];
          f = f.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
          var k = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
          function n() {
            this.fonts = [];
            this.chars = null;
            this.typekitLoaded = 0;
            this._warned = this.isLoaded = false;
            this.initTime = Date.now();
            this.setIsLoadedBinded = this.setIsLoaded.bind(this);
            this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
          }
          n.isModifier = function (h, g) {
            h = h.toString(16) + g.toString(16);
            return k.indexOf(h) !== -1;
          };
          n.isZeroWidthJoiner = function (h) {
            return h === 8205;
          };
          n.isFlagEmoji = function (h) {
            return d(h.substr(0, 2)) && d(h.substr(2, 2));
          };
          n.isRegionalCode = d;
          n.isCombinedCharacter = function (h) {
            return f.indexOf(h) !== -1;
          };
          n.isRegionalFlag = function (h, g) {
            var q = b(h.substr(g, 2));
            if (q !== 127988) {
              return false;
            }
            var r = 0;
            for (g += 2; r < 5;) {
              if ((q = b(h.substr(g, 2))) < 917601 || q > 917626) {
                return false;
              }
              r += 1;
              g += 2;
            }
            return b(h.substr(g, 2)) === 917631;
          };
          n.isVariationSelector = function (h) {
            return h === 65039;
          };
          n.BLACK_FLAG_CODE_POINT = 127988;
          n.prototype = {
            addChars: function (h) {
              if (h) {
                var g;
                this.chars ||= [];
                var q;
                var r = h.length;
                var v = this.chars.length;
                for (g = 0; g < r; g += 1) {
                  var p = 0;
                  for (q = false; p < v;) {
                    if (this.chars[p].style === h[g].style && this.chars[p].fFamily === h[g].fFamily && this.chars[p].ch === h[g].ch) {
                      q = true;
                    }
                    p += 1;
                  }
                  if (!q) {
                    this.chars.push(h[g]);
                    v += 1;
                  }
                }
              }
            },
            addFonts: function (h, g) {
              if (h) {
                if (this.chars) {
                  this.isLoaded = true;
                  this.fonts = h.list;
                  return;
                }
                if (!document.body) {
                  this.isLoaded = true;
                  h.list.forEach(function (t) {
                    t.helper = a(t);
                    t.cache = {};
                  });
                  this.fonts = h.list;
                  return;
                }
                var q = h.list;
                var r = q.length;
                var v = r;
                for (h = 0; h < r; h += 1) {
                  var p;
                  var l;
                  var m = true;
                  q[h].loaded = false;
                  q[h].monoCase = c(q[h].fFamily, "monospace");
                  q[h].sansCase = c(q[h].fFamily, "sans-serif");
                  if (q[h].fPath) {
                    if (q[h].fOrigin === "p" || q[h].origin === 3) {
                      if ((p = document.querySelectorAll("style[f-forigin=\"p\"][f-family=\"" + q[h].fFamily + "\"], style[f-origin=\"3\"][f-family=\"" + q[h].fFamily + "\"]")).length > 0) {
                        m = false;
                      }
                      if (m) {
                        p = document.createElement("style");
                        p.setAttribute("f-forigin", q[h].fOrigin);
                        p.setAttribute("f-origin", q[h].origin);
                        p.setAttribute("f-family", q[h].fFamily);
                        p.type = "text/css";
                        p.innerText = "@font-face {font-family: " + q[h].fFamily + "; font-style: normal; src: url('" + q[h].fPath + "');}";
                        g.appendChild(p);
                      }
                    } else if (q[h].fOrigin === "g" || q[h].origin === 1) {
                      p = document.querySelectorAll("link[f-forigin=\"g\"], link[f-origin=\"1\"]");
                      for (l = 0; l < p.length; l += 1) {
                        if (p[l].href.indexOf(q[h].fPath) !== -1) {
                          m = false;
                        }
                      }
                      if (m) {
                        p = document.createElement("link");
                        p.setAttribute("f-forigin", q[h].fOrigin);
                        p.setAttribute("f-origin", q[h].origin);
                        p.type = "text/css";
                        p.rel = "stylesheet";
                        p.href = q[h].fPath;
                        document.body.appendChild(p);
                      }
                    } else if (q[h].fOrigin === "t" || q[h].origin === 2) {
                      p = document.querySelectorAll("script[f-forigin=\"t\"], script[f-origin=\"2\"]");
                      for (l = 0; l < p.length; l += 1) {
                        if (q[h].fPath === p[l].src) {
                          m = false;
                        }
                      }
                      if (m) {
                        p = document.createElement("link");
                        p.setAttribute("f-forigin", q[h].fOrigin);
                        p.setAttribute("f-origin", q[h].origin);
                        p.setAttribute("rel", "stylesheet");
                        p.setAttribute("href", q[h].fPath);
                        g.appendChild(p);
                      }
                    }
                  } else {
                    q[h].loaded = true;
                    --v;
                  }
                  q[h].helper = a(q[h], g);
                  q[h].cache = {};
                  this.fonts.push(q[h]);
                }
                if (v === 0) {
                  this.isLoaded = true;
                } else {
                  setTimeout(this.checkLoadedFonts.bind(this), 100);
                }
              } else {
                this.isLoaded = true;
              }
            },
            getCharData: function (h, g, q) {
              for (var r = 0, v = this.chars.length; r < v;) {
                if (this.chars[r].ch === h && this.chars[r].style === g && this.chars[r].fFamily === q) {
                  return this.chars[r];
                }
                r += 1;
              }
              if ((typeof h == "string" && h.charCodeAt(0) !== 13 || !h) && console && console.warn && !this._warned) {
                this._warned = true;
                console.warn("Missing character from exported characters list: ", h, g, q);
              }
              return e;
            },
            getFontByName: function (h) {
              for (var g = 0, q = this.fonts.length; g < q;) {
                if (this.fonts[g].fName === h) {
                  return this.fonts[g];
                }
                g += 1;
              }
              return this.fonts[0];
            },
            measureText: function (h, g, q) {
              g = this.getFontByName(g);
              if (!g.cache[h]) {
                var r = g.helper;
                if (h === " ") {
                  var v = r.measureText("|" + h + "|");
                  r = r.measureText("||");
                  g.cache[h] = (v - r) / 100;
                } else {
                  g.cache[h] = r.measureText(h) / 100;
                }
              }
              return g.cache[h] * q;
            },
            checkLoadedFonts: function () {
              var h;
              var g;
              var q;
              var r = this.fonts.length;
              var v = r;
              for (h = 0; h < r; h += 1) {
                if (this.fonts[h].loaded) {
                  --v;
                } else if (this.fonts[h].fOrigin === "n" || this.fonts[h].origin === 0) {
                  this.fonts[h].loaded = true;
                } else {
                  g = this.fonts[h].monoCase.node;
                  q = this.fonts[h].monoCase.w;
                  if (g.offsetWidth !== q) {
                    --v;
                    this.fonts[h].loaded = true;
                  } else {
                    g = this.fonts[h].sansCase.node;
                    q = this.fonts[h].sansCase.w;
                    if (g.offsetWidth !== q) {
                      --v;
                      this.fonts[h].loaded = true;
                    }
                  }
                  if (this.fonts[h].loaded) {
                    this.fonts[h].sansCase.parent.parentNode.removeChild(this.fonts[h].sansCase.parent);
                    this.fonts[h].monoCase.parent.parentNode.removeChild(this.fonts[h].monoCase.parent);
                  }
                }
              }
              if (v !== 0 && Date.now() - this.initTime < 5000) {
                setTimeout(this.checkLoadedFontsBinded, 20);
              } else {
                setTimeout(this.setIsLoadedBinded, 10);
              }
            },
            setIsLoaded: function () {
              this.isLoaded = true;
            }
          };
          return n;
        }();
        hd.prototype.getProp = function (c) {
          if (this.animationData.slots && this.animationData.slots[c.sid]) {
            return Object.assign(c, this.animationData.slots[c.sid].p);
          } else {
            return c;
          }
        };
        xb.prototype = {
          initRenderable: function () {
            this.isTransparent = this.hidden = this.isInRange = false;
            this.renderableComponents = [];
          },
          addRenderableComponent: function (c) {
            if (this.renderableComponents.indexOf(c) === -1) {
              this.renderableComponents.push(c);
            }
          },
          removeRenderableComponent: function (c) {
            if (this.renderableComponents.indexOf(c) !== -1) {
              this.renderableComponents.splice(this.renderableComponents.indexOf(c), 1);
            }
          },
          prepareRenderableFrame: function (c) {
            this.checkLayerLimits(c);
          },
          checkTransparency: function () {
            if (this.finalTransform.mProp.o.v <= 0) {
              if (!this.isTransparent && this.globalData.renderConfig.hideOnTransparent) {
                this.isTransparent = true;
                this.hide();
              }
            } else if (this.isTransparent) {
              this.isTransparent = false;
              this.show();
            }
          },
          checkLayerLimits: function (c) {
            if (this.data.ip - this.data.st <= c && this.data.op - this.data.st > c) {
              if (this.isInRange !== true) {
                this.globalData._mdf = true;
                this._mdf = true;
                this.isInRange = true;
                this.show();
              }
            } else if (this.isInRange !== false) {
              this.globalData._mdf = true;
              this.isInRange = false;
              this.hide();
            }
          },
          renderRenderable: function () {
            var c;
            var a = this.renderableComponents.length;
            for (c = 0; c < a; c += 1) {
              this.renderableComponents[c].renderFrame(this._isFirstFrame);
            }
          },
          sourceRectAtTime: function () {
            return {
              top: 0,
              left: 0,
              width: 100,
              height: 100
            };
          },
          getLayerSize: function () {
            if (this.data.ty === 5) {
              return {
                w: this.data.textData.width,
                h: this.data.textData.height
              };
            } else {
              return {
                w: this.data.width,
                h: this.data.height
              };
            }
          }
        };
        var Tc;
        Tc = {
          0: "source-over",
          1: "multiply",
          2: "screen",
          3: "overlay",
          4: "darken",
          5: "lighten",
          6: "color-dodge",
          7: "color-burn",
          8: "hard-light",
          9: "soft-light",
          10: "difference",
          11: "exclusion",
          12: "hue",
          13: "saturation",
          14: "color",
          15: "luminosity"
        };
        function ub(c) {
          return Tc[c] || "";
        }
        R([Pa], Ac);
        Ac.prototype.getValue = Ac.prototype.iterateDynamicProperties;
        Ac.prototype.init = function (c, a) {
          this.data = c;
          this.effectElements = [];
          this.initDynamicPropertyContainer(a);
          var b = this.data.ef.length;
          var d = this.data.ef;
          for (c = 0; c < b; c += 1) {
            switch (d[c].ty) {
              case 0:
                var e = new wd(d[c], a, this);
                break;
              case 1:
                e = new xd(d[c], a, this);
                break;
              case 2:
                e = new Oc(d[c], a, this);
                break;
              case 3:
                e = new Hd(d[c], a, this);
                break;
              case 4:
              case 7:
                e = new Kd(d[c], a, this);
                break;
              case 10:
                e = new Id(d[c], a, this);
                break;
              case 11:
                e = new Jd(d[c], a, this);
                break;
              case 5:
                e = new yd(d[c], a, this);
                break;
              default:
                e = new Ld(d[c], a, this);
            }
            if (e) {
              this.effectElements.push(e);
            }
          }
        };
        yb.prototype = {
          checkMasks: function () {
            if (!this.data.hasMask) {
              return false;
            }
            for (var c = 0, a = this.data.masksProperties.length; c < a;) {
              if (this.data.masksProperties[c].mode !== "n" && this.data.masksProperties[c].cl !== false) {
                return true;
              }
              c += 1;
            }
            return false;
          },
          initExpressions: function () {},
          setBlendMode: function () {
            var c = ub(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = c;
          },
          initBaseData: function (c, a, b) {
            this.globalData = a;
            this.comp = b;
            this.data = c;
            this.layerId = Ca();
            this.data.sr ||= 1;
            this.effectsManager = new yd(this.data, this, this.dynamicProperties);
          },
          getType: function () {
            return this.type;
          },
          sourceRectAtTime: function () {}
        };
        nb.prototype = {
          initFrame: function () {
            this._isFirstFrame = false;
            this.dynamicProperties = [];
            this._mdf = false;
          },
          prepareProperties: function (c, a) {
            var b = this.dynamicProperties.length;
            for (c = 0; c < b; c += 1) {
              if (a || this._isParent && this.dynamicProperties[c].propType === "transform") {
                this.dynamicProperties[c].getValue();
                if (this.dynamicProperties[c]._mdf) {
                  this.globalData._mdf = true;
                  this._mdf = true;
                }
              }
            }
          },
          addDynamicProperty: function (c) {
            if (this.dynamicProperties.indexOf(c) === -1) {
              this.dynamicProperties.push(c);
            }
          }
        };
        $a.prototype.prepareFrame = function () {};
        R([xb, yb, nb], $a);
        $a.prototype.getBaseElement = function () {
          return null;
        };
        $a.prototype.renderFrame = function () {};
        $a.prototype.destroy = function () {};
        $a.prototype.initExpressions = function () {};
        $a.prototype.getFootageData = function () {
          return this.footageData;
        };
        Aa.prototype.prepareFrame = function (c) {
          this.prepareRenderableFrame(c, true);
          this.prepareProperties(c, true);
          if (this.tm._placeholder) {
            this._currentTime = c / this.data.sr;
          } else {
            this._currentTime = c = this.tm.v;
          }
          this._volume = this.lv.v[0];
          c = this._volume * this._volumeMultiplier;
          if (this._previousVolume !== c) {
            this._previousVolume = c;
            this.audio.volume(c);
          }
        };
        R([xb, yb, nb], Aa);
        Aa.prototype.renderFrame = function () {
          if (this.isInRange && this._canPlay) {
            if (this._isPlaying) {
              if (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) {
                this.audio.seek(this._currentTime / this.globalData.frameRate);
              }
            } else {
              this.audio.play();
              this.audio.seek(this._currentTime / this.globalData.frameRate);
              this._isPlaying = true;
            }
          }
        };
        Aa.prototype.show = function () {};
        Aa.prototype.hide = function () {
          this.audio.pause();
          this._isPlaying = false;
        };
        Aa.prototype.pause = function () {
          this.audio.pause();
          this._canPlay = this._isPlaying = false;
        };
        Aa.prototype.resume = function () {
          this._canPlay = true;
        };
        Aa.prototype.setRate = function (c) {
          this.audio.rate(c);
        };
        Aa.prototype.volume = function (c) {
          this._volumeMultiplier = c;
          this._previousVolume = c * this._volume;
          this.audio.volume(this._previousVolume);
        };
        Aa.prototype.getBaseElement = function () {
          return null;
        };
        Aa.prototype.destroy = function () {};
        Aa.prototype.sourceRectAtTime = function () {};
        Aa.prototype.initExpressions = function () {};
        ua.prototype.checkLayers = function (c) {
          var a;
          var b = this.layers.length;
          this.completeLayers = true;
          for (--b; b >= 0; --b) {
            if (!this.elements[b]) {
              if ((a = this.layers[b]).ip - a.st <= c - this.layers[b].st && a.op - a.st > c - this.layers[b].st) {
                this.buildItem(b);
              }
            }
            this.completeLayers = !!this.elements[b] && this.completeLayers;
          }
          this.checkPendingElements();
        };
        ua.prototype.createItem = function (c) {
          switch (c.ty) {
            case 2:
              return this.createImage(c);
            case 0:
              return this.createComp(c);
            case 1:
              return this.createSolid(c);
            default:
              return this.createNull(c);
            case 4:
              return this.createShape(c);
            case 5:
              return this.createText(c);
            case 6:
              return this.createAudio(c);
            case 13:
              return this.createCamera(c);
            case 15:
              return this.createFootage(c);
          }
        };
        ua.prototype.createCamera = function () {
          throw Error("You're using a 3d camera. Try the html renderer.");
        };
        ua.prototype.createAudio = function (c) {
          return new Aa(c, this.globalData, this);
        };
        ua.prototype.createFootage = function (c) {
          return new $a(c, this.globalData, this);
        };
        ua.prototype.buildAllItems = function () {
          var c;
          var a = this.layers.length;
          for (c = 0; c < a; c += 1) {
            this.buildItem(c);
          }
          this.checkPendingElements();
        };
        ua.prototype.includeLayers = function (c) {
          var a;
          this.completeLayers = false;
          var b;
          var d = c.length;
          var e = this.layers.length;
          for (a = 0; a < d; a += 1) {
            for (b = 0; b < e;) {
              if (this.layers[b].id === c[a].id) {
                this.layers[b] = c[a];
                break;
              }
              b += 1;
            }
          }
        };
        ua.prototype.setProjectInterface = function (c) {
          this.globalData.projectInterface = c;
        };
        ua.prototype.initItems = function () {
          if (!this.globalData.progressiveLoad) {
            this.buildAllItems();
          }
        };
        ua.prototype.buildElementParenting = function (c, a, b) {
          var d = this.elements;
          var e = this.layers;
          for (var f = 0, k = e.length; f < k;) {
            if (e[f].ind == a) {
              if (d[f] && d[f] !== true) {
                b.push(d[f]);
                d[f].setAsParent();
                if (e[f].parent !== undefined) {
                  this.buildElementParenting(c, e[f].parent, b);
                } else {
                  c.setHierarchy(b);
                }
              } else {
                this.buildItem(f);
                this.addPendingElement(c);
              }
            }
            f += 1;
          }
        };
        ua.prototype.addPendingElement = function (c) {
          this.pendingElements.push(c);
        };
        ua.prototype.searchExtraCompositions = function (c) {
          var a;
          var b = c.length;
          for (a = 0; a < b; a += 1) {
            if (c[a].xt) {
              var d = this.createComp(c[a]);
              d.initExpressions();
              this.globalData.projectInterface.registerComposition(d);
            }
          }
        };
        ua.prototype.getElementById = function (c) {
          var a;
          var b = this.elements.length;
          for (a = 0; a < b; a += 1) {
            if (this.elements[a].data.ind === c) {
              return this.elements[a];
            }
          }
          return null;
        };
        ua.prototype.getElementByPath = function (c) {
          var a = c.shift();
          if (typeof a == "number") {
            var b = this.elements[a];
          } else {
            var d;
            var e = this.elements.length;
            for (d = 0; d < e; d += 1) {
              if (this.elements[d].data.nm === a) {
                b = this.elements[d];
                break;
              }
            }
          }
          if (c.length === 0) {
            return b;
          } else {
            return b.getElementByPath(c);
          }
        };
        ua.prototype.setupGlobalData = function (c, a) {
          this.globalData.fontManager = new Va();
          this.globalData.slotManager = new hd(c);
          this.globalData.fontManager.addChars(c.chars);
          this.globalData.fontManager.addFonts(c.fonts, a);
          this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
          this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
          this.globalData.imageLoader = this.animationItem.imagePreloader;
          this.globalData.audioController = this.animationItem.audioController;
          this.globalData.frameId = 0;
          this.globalData.frameRate = c.fr;
          this.globalData.nm = c.nm;
          this.globalData.compSize = {
            w: c.w,
            h: c.h
          };
        };
        Wa.prototype = {
          initTransform: function () {
            var c = new Ja();
            this.finalTransform = {
              mProp: this.data.ks ? rd.getTransformProperty(this, this.data.ks, this) : {
                o: 0
              },
              _matMdf: false,
              _localMatMdf: false,
              _opMdf: false,
              mat: c,
              localMat: c,
              localOpacity: 1
            };
            if (this.data.ao) {
              this.finalTransform.mProp.autoOriented = true;
            }
            this.data.ty;
          },
          renderTransform: function () {
            this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
            this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;
            if (this.hierarchy) {
              var c = this.finalTransform.mat;
              var a = 0;
              var b = this.hierarchy.length;
              if (!this.finalTransform._matMdf) {
                while (a < b) {
                  if (this.hierarchy[a].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = true;
                    break;
                  }
                  a += 1;
                }
              }
              if (this.finalTransform._matMdf) {
                a = this.finalTransform.mProp.v.props;
                c.cloneFromProps(a);
                a = 0;
                for (; a < b; a += 1) {
                  c.multiply(this.hierarchy[a].finalTransform.mProp.v);
                }
              }
            }
            if (this.finalTransform._matMdf) {
              this.finalTransform._localMatMdf = this.finalTransform._matMdf;
            }
            if (this.finalTransform._opMdf) {
              this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
            }
          },
          renderLocalTransform: function () {
            if (this.localTransforms) {
              var c = 0;
              var a = this.localTransforms.length;
              this.finalTransform._localMatMdf = this.finalTransform._matMdf;
              if (!this.finalTransform._localMatMdf || !this.finalTransform._opMdf) {
                while (c < a) {
                  if (this.localTransforms[c]._mdf) {
                    this.finalTransform._localMatMdf = true;
                  }
                  if (this.localTransforms[c]._opMdf && !this.finalTransform._opMdf) {
                    this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
                    this.finalTransform._opMdf = true;
                  }
                  c += 1;
                }
              }
              if (this.finalTransform._localMatMdf) {
                var b = this.finalTransform.localMat;
                this.localTransforms[0].matrix.clone(b);
                for (c = 1; c < a; c += 1) {
                  var d = this.localTransforms[c].matrix;
                  b.multiply(d);
                }
                b.multiply(this.finalTransform.mat);
              }
              if (this.finalTransform._opMdf) {
                b = this.finalTransform.localOpacity;
                for (c = 0; c < a; c += 1) {
                  b *= this.localTransforms[c].opacity * 0.01;
                }
                this.finalTransform.localOpacity = b;
              }
            }
          },
          searchEffectTransforms: function () {
            if (this.renderableEffectsManager) {
              var c = this.renderableEffectsManager.getEffects("transformEFfect");
              if (c.length) {
                this.localTransforms = [];
                this.finalTransform.localMat = new Ja();
                var a;
                var b = c.length;
                for (a = 0; a < b; a += 1) {
                  this.localTransforms.push(c[a]);
                }
              }
            }
          },
          globalToLocal: function (c) {
            var a = [];
            a.push(this.finalTransform);
            var b = true;
            var d = this.comp;
            for (; b;) {
              if (d.finalTransform) {
                if (d.data.hasMask) {
                  a.splice(0, 0, d.finalTransform);
                }
                d = d.comp;
              } else {
                b = false;
              }
            }
            var e = a.length;
            for (b = 0; b < e; b += 1) {
              d = a[b].mat.applyToPointArray(0, 0, 0);
              c = [c[0] - d[0], c[1] - d[1], 0];
            }
            return c;
          },
          mHelper: new Ja()
        };
        Fa.prototype.getMaskProperty = function (c) {
          return this.viewData[c].prop;
        };
        Fa.prototype.renderFrame = function (c) {
          var a;
          var b = this.element.finalTransform.mat;
          var d = this.masksProperties.length;
          for (a = 0; a < d; a += 1) {
            if (this.viewData[a].prop._mdf || c) {
              this.drawPath(this.masksProperties[a], this.viewData[a].prop.v, this.viewData[a]);
            }
            if (this.viewData[a].op._mdf || c) {
              this.viewData[a].elem.setAttribute("fill-opacity", this.viewData[a].op.v);
            }
            if (this.masksProperties[a].mode !== "n" && (this.viewData[a].invRect && (this.element.finalTransform.mProp._mdf || c) && this.viewData[a].invRect.setAttribute("transform", b.getInverseMatrix().to2dCSS()), this.storedData[a].x && (this.storedData[a].x._mdf || c))) {
              var e = this.storedData[a].expan;
              if (this.storedData[a].x.v < 0) {
                if (this.storedData[a].lastOperator !== "erode") {
                  this.storedData[a].lastOperator = "erode";
                  this.storedData[a].elem.setAttribute("filter", "url(" + Ma + "#" + this.storedData[a].filterId + ")");
                }
                e.setAttribute("radius", -this.storedData[a].x.v);
              } else {
                if (this.storedData[a].lastOperator !== "dilate") {
                  this.storedData[a].lastOperator = "dilate";
                  this.storedData[a].elem.setAttribute("filter", null);
                }
                this.storedData[a].elem.setAttribute("stroke-width", this.storedData[a].x.v * 2);
              }
            }
          }
        };
        Fa.prototype.getMaskelement = function () {
          return this.maskElement;
        };
        Fa.prototype.createLayerSolidPath = function () {
          var c = "M0,0 ";
          c += " h" + this.globalData.compSize.w;
          c += " v" + this.globalData.compSize.h;
          c += " h-" + this.globalData.compSize.w;
          return c + (" v-" + this.globalData.compSize.h + " ");
        };
        Fa.prototype.drawPath = function (c, a, b) {
          var d;
          var e = " M" + a.v[0][0] + "," + a.v[0][1];
          var f = a._length;
          for (d = 1; d < f; d += 1) {
            e += " C" + a.o[d - 1][0] + "," + a.o[d - 1][1] + " " + a.i[d][0] + "," + a.i[d][1] + " " + a.v[d][0] + "," + a.v[d][1];
          }
          if (a.c && f > 1) {
            e += " C" + a.o[d - 1][0] + "," + a.o[d - 1][1] + " " + a.i[0][0] + "," + a.i[0][1] + " " + a.v[0][0] + "," + a.v[0][1];
          }
          if (b.lastPath !== e) {
            d = "";
            if (b.elem) {
              if (a.c) {
                d = c.inv ? this.solidPath + e : e;
              }
              b.elem.setAttribute("d", d);
            }
            b.lastPath = e;
          }
        };
        Fa.prototype.destroy = function () {
          this.masksProperties = this.data = this.maskElement = this.globalData = this.element = null;
        };
        var bc = function () {
          var c = {};
          c.createFilter = function (a, b) {
            var d = X("filter");
            d.setAttribute("id", a);
            if (b !== true) {
              d.setAttribute("filterUnits", "objectBoundingBox");
              d.setAttribute("x", "0%");
              d.setAttribute("y", "0%");
              d.setAttribute("width", "100%");
              d.setAttribute("height", "100%");
            }
            return d;
          };
          c.createAlphaToLuminanceFilter = function () {
            var a = X("feColorMatrix");
            a.setAttribute("type", "matrix");
            a.setAttribute("color-interpolation-filters", "sRGB");
            a.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1");
            return a;
          };
          return c;
        }();
        var ic = function () {
          var c = {
            maskType: true,
            svgLumaHidden: true,
            offscreenCanvas: typeof OffscreenCanvas != "undefined"
          };
          if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
            c.maskType = false;
          }
          if (/firefox/i.test(navigator.userAgent)) {
            c.svgLumaHidden = false;
          }
          return c;
        }();
        var Uc = {};
        var Pc = "filter_result_";
        La.prototype.renderFrame = function (c) {
          var a;
          var b = this.filters.length;
          for (a = 0; a < b; a += 1) {
            this.filters[a].renderFrame(c);
          }
        };
        La.prototype.getEffects = function (c) {
          var a;
          var b = this.filters.length;
          var d = [];
          for (a = 0; a < b; a += 1) {
            if (this.filters[a].type === c) {
              d.push(this.filters[a]);
            }
          }
          return d;
        };
        ib.prototype = {
          initRendererElement: function () {
            this.layerElement = X("g");
          },
          createContainerElements: function () {
            this.matteElement = X("g");
            this.maskedElement = this.transformedElement = this.layerElement;
            this._sizeChanged = false;
            var c = null;
            if (this.data.td) {
              this.matteMasks = {};
              var a = X("g");
              a.setAttribute("id", this.layerId);
              a.appendChild(this.layerElement);
              c = a;
              this.globalData.defs.appendChild(a);
            } else if (this.data.tt) {
              this.matteElement.appendChild(this.layerElement);
              c = this.matteElement;
              this.baseElement = this.matteElement;
            } else {
              this.baseElement = this.layerElement;
            }
            if (this.data.ln) {
              this.layerElement.setAttribute("id", this.data.ln);
            }
            if (this.data.cl) {
              this.layerElement.setAttribute("class", this.data.cl);
            }
            if (this.data.ty === 0 && !this.data.hd) {
              var b = X("clipPath");
              var d = X("path");
              d.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
              a = Ca();
              b.setAttribute("id", a);
              b.appendChild(d);
              this.globalData.defs.appendChild(b);
              if (this.checkMasks()) {
                b = X("g");
                b.setAttribute("clip-path", "url(" + Ma + "#" + a + ")");
                b.appendChild(this.layerElement);
                this.transformedElement = b;
                if (c) {
                  c.appendChild(this.transformedElement);
                } else {
                  this.baseElement = this.transformedElement;
                }
              } else {
                this.layerElement.setAttribute("clip-path", "url(" + Ma + "#" + a + ")");
              }
            }
            if (this.data.bm !== 0) {
              this.setBlendMode();
            }
          },
          renderElement: function () {
            if (this.finalTransform._localMatMdf) {
              this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS());
            }
            if (this.finalTransform._opMdf) {
              this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
            }
          },
          destroyBaseElement: function () {
            this.matteElement = this.layerElement = null;
            this.maskManager.destroy();
          },
          getBaseElement: function () {
            if (this.data.hd) {
              return null;
            } else {
              return this.baseElement;
            }
          },
          createRenderableComponents: function () {
            this.maskManager = new Fa(this.data, this, this.globalData);
            this.renderableEffectsManager = new La(this);
            this.searchEffectTransforms();
          },
          getMatte: function (c) {
            this.matteMasks ||= {};
            if (!this.matteMasks[c]) {
              var a;
              var b;
              var d;
              var e;
              var f = this.layerId + "_" + c;
              if (c === 1 || c === 3) {
                var k = X("mask");
                k.setAttribute("id", f);
                k.setAttribute("mask-type", c === 3 ? "luminance" : "alpha");
                (d = X("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId);
                k.appendChild(d);
                this.globalData.defs.appendChild(k);
                if (!ic.maskType && c === 1) {
                  k.setAttribute("mask-type", "luminance");
                  a = Ca();
                  b = bc.createFilter(a);
                  this.globalData.defs.appendChild(b);
                  b.appendChild(bc.createAlphaToLuminanceFilter());
                  (e = X("g")).appendChild(d);
                  k.appendChild(e);
                  e.setAttribute("filter", "url(" + Ma + "#" + a + ")");
                }
              } else if (c === 2) {
                k = X("mask");
                k.setAttribute("id", f);
                k.setAttribute("mask-type", "alpha");
                var n = X("g");
                k.appendChild(n);
                a = Ca();
                b = bc.createFilter(a);
                d = X("feComponentTransfer");
                d.setAttribute("in", "SourceGraphic");
                b.appendChild(d);
                var h = X("feFuncA");
                h.setAttribute("type", "table");
                h.setAttribute("tableValues", "1.0 0.0");
                d.appendChild(h);
                this.globalData.defs.appendChild(b);
                h = X("rect");
                h.setAttribute("width", this.comp.data.w);
                h.setAttribute("height", this.comp.data.h);
                h.setAttribute("x", "0");
                h.setAttribute("y", "0");
                h.setAttribute("fill", "#ffffff");
                h.setAttribute("opacity", "0");
                n.setAttribute("filter", "url(" + Ma + "#" + a + ")");
                n.appendChild(h);
                (d = X("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId);
                n.appendChild(d);
                if (!ic.maskType) {
                  k.setAttribute("mask-type", "luminance");
                  b.appendChild(bc.createAlphaToLuminanceFilter());
                  e = X("g");
                  n.appendChild(h);
                  e.appendChild(this.layerElement);
                  n.appendChild(e);
                }
                this.globalData.defs.appendChild(k);
              }
              this.matteMasks[c] = f;
            }
            return this.matteMasks[c];
          },
          setMatte: function (c) {
            if (this.matteElement) {
              this.matteElement.setAttribute("mask", "url(" + Ma + "#" + c + ")");
            }
          }
        };
        ab.prototype = {
          initHierarchy: function () {
            this.hierarchy = [];
            this._isParent = false;
            this.checkParenting();
          },
          setHierarchy: function (c) {
            this.hierarchy = c;
          },
          setAsParent: function () {
            this._isParent = true;
          },
          checkParenting: function () {
            if (this.data.parent !== undefined) {
              this.comp.buildElementParenting(this, this.data.parent, []);
            }
          }
        };
        R([xb, function (c) {
          function a() {}
          a.prototype = c;
          return a;
        }({
          initElement: function (c, a, b) {
            this.initFrame();
            this.initBaseData(c, a, b);
            this.initTransform(c, a, b);
            this.initHierarchy();
            this.initRenderable();
            this.initRendererElement();
            this.createContainerElements();
            this.createRenderableComponents();
            this.createContent();
            this.hide();
          },
          hide: function () {
            if (!this.hidden && (!this.isInRange || !!this.isTransparent)) {
              (this.baseElement || this.layerElement).style.display = "none";
              this.hidden = true;
            }
          },
          show: function () {
            if (this.isInRange && !this.isTransparent) {
              if (!this.data.hd) {
                (this.baseElement || this.layerElement).style.display = "block";
              }
              this.hidden = false;
              this._isFirstFrame = true;
            }
          },
          renderFrame: function () {
            if (!this.data.hd && !this.hidden) {
              this.renderTransform();
              this.renderRenderable();
              this.renderLocalTransform();
              this.renderElement();
              this.renderInnerContent();
              this._isFirstFrame &&= false;
            }
          },
          renderInnerContent: function () {},
          prepareFrame: function (c) {
            this._mdf = false;
            this.prepareRenderableFrame(c);
            this.prepareProperties(c, this.isInRange);
            this.checkTransparency();
          },
          destroy: function () {
            this.innerElem = null;
            this.destroyBaseElement();
          }
        })], Jb);
        R([yb, Wa, ib, ab, nb, Jb], ob);
        ob.prototype.createContent = function () {
          var c = this.globalData.getAssetsPath(this.assetData);
          this.innerElem = X("image");
          this.innerElem.setAttribute("width", this.assetData.w + "px");
          this.innerElem.setAttribute("height", this.assetData.h + "px");
          this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
          this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", c);
          this.layerElement.appendChild(this.innerElem);
        };
        ob.prototype.sourceRectAtTime = function () {
          return this.sourceRect;
        };
        kc.prototype = {
          addShapeToModifiers: function (c) {
            var a;
            var b = this.shapeModifiers.length;
            for (a = 0; a < b; a += 1) {
              this.shapeModifiers[a].addShape(c);
            }
          },
          isShapeInAnimatedModifiers: function (c) {
            for (var a = this.shapeModifiers.length; a > 0;) {
              if (this.shapeModifiers[0].isAnimatedWithShape(c)) {
                return true;
              }
            }
            return false;
          },
          renderModifiers: function () {
            if (this.shapeModifiers.length) {
              var c;
              var a = this.shapes.length;
              for (c = 0; c < a; c += 1) {
                this.shapes[c].sh.reset();
              }
              for (c = this.shapeModifiers.length - 1; c >= 0 && !this.shapeModifiers[c].processShapes(this._isFirstFrame); --c);
            }
          },
          searchProcessedElement: function (c) {
            var a = this.processedElements;
            for (var b = 0, d = a.length; b < d;) {
              if (a[b].elem === c) {
                return a[b].pos;
              }
              b += 1;
            }
            return 0;
          },
          addProcessedElement: function (c, a) {
            var b = this.processedElements;
            for (var d = b.length; d;) {
              if (b[--d].elem === c) {
                b[d].pos = a;
                return;
              }
            }
            b.push(new jc(c, a));
          },
          prepareFrame: function (c) {
            this.prepareRenderableFrame(c);
            this.prepareProperties(c, this.isInRange);
          }
        };
        var id = {
          1: "butt",
          2: "round",
          3: "square"
        };
        var sd = {
          1: "miter",
          2: "round",
          3: "bevel"
        };
        lc.prototype.setAsAnimated = function () {
          this._isAnimated = true;
        };
        zd.prototype.reset = function () {
          this.d = "";
          this._mdf = false;
        };
        Bc.prototype.getValue = function (c) {
          if ((this.elem.globalData.frameId !== this.frameId || c) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || c, this._mdf)) {
            var a = this.dataProps.length;
            if (this.renderer === "svg") {
              this.dashStr = "";
            }
            for (c = 0; c < a; c += 1) {
              if (this.dataProps[c].n !== "o") {
                if (this.renderer === "svg") {
                  this.dashStr += " " + this.dataProps[c].p.v;
                } else {
                  this.dashArray[c] = this.dataProps[c].p.v;
                }
              } else {
                this.dashoffset[0] = this.dataProps[c].p.v;
              }
            }
          }
        };
        R([Pa], Bc);
        R([Pa], jd);
        R([Pa], kd);
        R([Pa], Cc);
        mc.prototype.comparePoints = function (c, a) {
          for (var b = 0, d = this.o.length / 2; b < d;) {
            if (Math.abs(c[b * 4] - c[a * 4 + b * 2]) > 0.01) {
              return false;
            }
            b += 1;
          }
          return true;
        };
        mc.prototype.checkCollapsable = function () {
          if (this.o.length / 2 != this.c.length / 4) {
            return false;
          }
          if (this.data.k.k[0].s) {
            for (var c = 0, a = this.data.k.k.length; c < a;) {
              if (!this.comparePoints(this.data.k.k[c].s, this.data.p)) {
                return false;
              }
              c += 1;
            }
          } else if (!this.comparePoints(this.data.k.k, this.data.p)) {
            return false;
          }
          return true;
        };
        mc.prototype.getValue = function (c) {
          this.prop.getValue();
          this._mdf = false;
          this._cmdf = false;
          this._omdf = false;
          if (this.prop._mdf || c) {
            var a;
            var b = this.data.p * 4;
            for (a = 0; a < b; a += 1) {
              var d = a % 4 == 0 ? 100 : 255;
              d = Math.round(this.prop.v[a] * d);
              if (this.c[a] !== d) {
                this.c[a] = d;
                this._cmdf = !c;
              }
            }
            if (this.o.length) {
              b = this.prop.v.length;
              a = this.data.p * 4;
              for (; a < b; a += 1) {
                d = a % 2 == 0 ? Math.round(this.prop.v[a] * 100) : this.prop.v[a];
                if (this.o[a - this.data.p * 4] !== d) {
                  this.o[a - this.data.p * 4] = d;
                  this._omdf = !c;
                }
              }
            }
            this._mdf = !c;
          }
        };
        R([Pa], mc);
        Kb.prototype.initGradientData = function (c, a, b) {
          this.o = Q.getProp(c, a.o, 0, 0.01, this);
          this.s = Q.getProp(c, a.s, 1, null, this);
          this.e = Q.getProp(c, a.e, 1, null, this);
          this.h = Q.getProp(c, a.h || {
            k: 0
          }, 0, 0.01, this);
          this.a = Q.getProp(c, a.a || {
            k: 0
          }, 0, qa, this);
          this.g = new mc(c, a.g, this);
          this.style = b;
          this.stops = [];
          this.setGradientData(b.pElem, a);
          this.setGradientOpacity(a, b);
          this._isAnimated = !!this._isAnimated;
        };
        Kb.prototype.setGradientData = function (c, a) {
          var b = Ca();
          var d = X(a.t === 1 ? "linearGradient" : "radialGradient");
          d.setAttribute("id", b);
          d.setAttribute("spreadMethod", "pad");
          d.setAttribute("gradientUnits", "userSpaceOnUse");
          var e;
          var f = [];
          var k = a.g.p * 4;
          for (e = 0; e < k; e += 4) {
            var n = X("stop");
            d.appendChild(n);
            f.push(n);
          }
          c.setAttribute(a.ty === "gf" ? "fill" : "stroke", "url(" + Ma + "#" + b + ")");
          this.gf = d;
          this.cst = f;
        };
        Kb.prototype.setGradientOpacity = function (c, a) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var b;
            var d;
            var e = X("mask");
            var f = X("path");
            e.appendChild(f);
            var k = Ca();
            var n = Ca();
            e.setAttribute("id", n);
            var h = X(c.t === 1 ? "linearGradient" : "radialGradient");
            h.setAttribute("id", k);
            h.setAttribute("spreadMethod", "pad");
            h.setAttribute("gradientUnits", "userSpaceOnUse");
            var g = c.g.k.k[0].s ? c.g.k.k[0].s.length : c.g.k.k.length;
            var q = this.stops;
            for (d = c.g.p * 4; d < g; d += 2) {
              (b = X("stop")).setAttribute("stop-color", "rgb(255,255,255)");
              h.appendChild(b);
              q.push(b);
            }
            f.setAttribute(c.ty === "gf" ? "fill" : "stroke", "url(" + Ma + "#" + k + ")");
            if (c.ty === "gs") {
              f.setAttribute("stroke-linecap", id[c.lc || 2]);
              f.setAttribute("stroke-linejoin", sd[c.lj || 2]);
              if (c.lj === 1) {
                f.setAttribute("stroke-miterlimit", c.ml);
              }
            }
            this.of = h;
            this.ms = e;
            this.ost = q;
            this.maskId = n;
            a.msElem = f;
          }
        };
        R([Pa], Kb);
        R([Kb, Pa], ld);
        function td(c, a, b, d) {
          if (a === 0) {
            return "";
          }
          var e = c.o;
          var f = c.i;
          var k = c.v;
          var n = " M" + d.applyToPointStringified(k[0][0], k[0][1]);
          for (c = 1; c < a; c += 1) {
            n += " C" + d.applyToPointStringified(e[c - 1][0], e[c - 1][1]) + " " + d.applyToPointStringified(f[c][0], f[c][1]) + " " + d.applyToPointStringified(k[c][0], k[c][1]);
          }
          if (b && a) {
            n += " C" + d.applyToPointStringified(e[c - 1][0], e[c - 1][1]) + " " + d.applyToPointStringified(f[0][0], f[0][1]) + " " + d.applyToPointStringified(k[0][0], k[0][1]);
            n += "z";
          }
          return n;
        }
        var Cd = function () {
          function c(g, q, r) {
            if (r || q.transform.op._mdf) {
              q.transform.container.setAttribute("opacity", q.transform.op.v);
            }
            if (r || q.transform.mProps._mdf) {
              q.transform.container.setAttribute("transform", q.transform.mProps.v.to2dCSS());
            }
          }
          function a() {}
          function b(g, q, r) {
            var v;
            var p;
            var l;
            var m;
            var t;
            var u = q.styles.length;
            var w = q.lvl;
            for (m = 0; m < u; m += 1) {
              p = q.sh._mdf || r;
              if (q.styles[m].lvl < w) {
                var x = h.reset();
                var D = w - q.styles[m].lvl;
                for (v = q.transformers.length - 1; !p && D > 0;) {
                  p = q.transformers[v].mProps._mdf || p;
                  --D;
                  --v;
                }
                if (p) {
                  D = w - q.styles[m].lvl;
                  v = q.transformers.length - 1;
                  while (D > 0) {
                    x.multiply(q.transformers[v].mProps.v);
                    --D;
                    --v;
                  }
                }
              } else {
                x = n;
              }
              v = (t = q.sh.paths)._length;
              if (p) {
                var K = "";
                for (D = 0; D < v; D += 1) {
                  if ((l = t.shapes[D]) && l._length) {
                    K += td(l, l._length, l.c, x);
                  }
                }
                q.caches[m] = K;
              } else {
                K = q.caches[m];
              }
              q.styles[m].d += g.hd === true ? "" : K;
              q.styles[m]._mdf = p || q.styles[m]._mdf;
            }
          }
          function d(g, q, r) {
            g = q.style;
            if (q.c._mdf || r) {
              g.pElem.setAttribute("fill", "rgb(" + Ab(q.c.v[0]) + "," + Ab(q.c.v[1]) + "," + Ab(q.c.v[2]) + ")");
            }
            if (q.o._mdf || r) {
              g.pElem.setAttribute("fill-opacity", q.o.v);
            }
          }
          function e(g, q, r) {
            f(g, q, r);
            k(g, q, r);
          }
          function f(g, q, r) {
            var v;
            var p;
            var l = q.gf;
            var m = q.g._hasOpacity;
            var t = q.s.v;
            var u = q.e.v;
            if (q.o._mdf || r) {
              var w = g.ty === "gf" ? "fill-opacity" : "stroke-opacity";
              q.style.pElem.setAttribute(w, q.o.v);
            }
            if (q.s._mdf || r) {
              w = g.t === 1 ? "x1" : "cx";
              var x = w === "x1" ? "y1" : "cy";
              l.setAttribute(w, t[0]);
              l.setAttribute(x, t[1]);
              if (m && !q.g._collapsable) {
                q.of.setAttribute(w, t[0]);
                q.of.setAttribute(x, t[1]);
              }
            }
            if (q.g._cmdf || r) {
              w = q.cst;
              var D = q.g.c;
              var K = w.length;
              for (x = 0; x < K; x += 1) {
                (v = w[x]).setAttribute("offset", D[x * 4] + "%");
                v.setAttribute("stop-color", "rgb(" + D[x * 4 + 1] + "," + D[x * 4 + 2] + "," + D[x * 4 + 3] + ")");
              }
            }
            if (m && (q.g._omdf || r)) {
              D = q.g.o;
              K = (w = q.g._collapsable ? q.cst : q.ost).length;
              x = 0;
              for (; x < K; x += 1) {
                v = w[x];
                if (!q.g._collapsable) {
                  v.setAttribute("offset", D[x * 2] + "%");
                }
                v.setAttribute("stop-opacity", D[x * 2 + 1]);
              }
            }
            if (g.t === 1) {
              if (q.e._mdf || r) {
                l.setAttribute("x2", u[0]);
                l.setAttribute("y2", u[1]);
                if (m && !q.g._collapsable) {
                  q.of.setAttribute("x2", u[0]);
                  q.of.setAttribute("y2", u[1]);
                }
              }
            } else {
              if (q.s._mdf || q.e._mdf || r) {
                p = Math.sqrt(Math.pow(t[0] - u[0], 2) + Math.pow(t[1] - u[1], 2));
                l.setAttribute("r", p);
                if (m && !q.g._collapsable) {
                  q.of.setAttribute("r", p);
                }
              }
              if (q.e._mdf || q.h._mdf || q.a._mdf || r) {
                p ||= Math.sqrt(Math.pow(t[0] - u[0], 2) + Math.pow(t[1] - u[1], 2));
                g = Math.atan2(u[1] - t[1], u[0] - t[0]);
                r = q.h.v;
                if (r >= 1) {
                  r = 0.99;
                } else if (r <= -1) {
                  r = -0.99;
                }
                r *= p;
                p = Math.cos(g + q.a.v) * r + t[0];
                t = Math.sin(g + q.a.v) * r + t[1];
                l.setAttribute("fx", p);
                l.setAttribute("fy", t);
                if (m && !q.g._collapsable) {
                  q.of.setAttribute("fx", p);
                  q.of.setAttribute("fy", t);
                }
              }
            }
          }
          function k(g, q, r) {
            g = q.style;
            var v = q.d;
            if (v && (v._mdf || r) && v.dashStr) {
              g.pElem.setAttribute("stroke-dasharray", v.dashStr);
              g.pElem.setAttribute("stroke-dashoffset", v.dashoffset[0]);
            }
            if (q.c && (q.c._mdf || r)) {
              g.pElem.setAttribute("stroke", "rgb(" + Ab(q.c.v[0]) + "," + Ab(q.c.v[1]) + "," + Ab(q.c.v[2]) + ")");
            }
            if (q.o._mdf || r) {
              g.pElem.setAttribute("stroke-opacity", q.o.v);
            }
            if (q.w._mdf || r) {
              g.pElem.setAttribute("stroke-width", q.w.v);
              if (g.msElem) {
                g.msElem.setAttribute("stroke-width", q.w.v);
              }
            }
          }
          var n = new Ja();
          var h = new Ja();
          return {
            createRenderFunction: function (g) {
              switch (g.ty) {
                case "fl":
                  return d;
                case "gf":
                  return f;
                case "gs":
                  return e;
                case "st":
                  return k;
                case "sh":
                case "el":
                case "rc":
                case "sr":
                  return b;
                case "tr":
                  return c;
                case "no":
                  return a;
                default:
                  return null;
              }
            }
          };
        }();
        R([yb, Wa, ib, kc, ab, nb, Jb], Ba);
        Ba.prototype.initSecondaryElement = function () {};
        Ba.prototype.identityMatrix = new Ja();
        Ba.prototype.buildExpressionInterface = function () {};
        Ba.prototype.createContent = function () {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
          this.filterUniqueShapes();
        };
        Ba.prototype.filterUniqueShapes = function () {
          var c;
          var a;
          var b;
          var d = this.shapes.length;
          var e = this.stylesList.length;
          var f = [];
          for (b = 0; b < e; b += 1) {
            var k = this.stylesList[b];
            var n = false;
            for (c = f.length = 0; c < d; c += 1) {
              if ((a = this.shapes[c]).styles.indexOf(k) !== -1) {
                f.push(a);
                n = a._isAnimated || n;
              }
            }
            if (f.length > 1 && n) {
              this.setShapesAsAnimated(f);
            }
          }
        };
        Ba.prototype.setShapesAsAnimated = function (c) {
          var a;
          var b = c.length;
          for (a = 0; a < b; a += 1) {
            c[a].setAsAnimated();
          }
        };
        Ba.prototype.createStyleElement = function (c, a) {
          a = new zd(c, a);
          var b = a.pElem;
          if (c.ty === "st") {
            var d = new jd(this, c, a);
          } else if (c.ty === "fl") {
            d = new kd(this, c, a);
          } else if (c.ty === "gf" || c.ty === "gs") {
            d = new (c.ty === "gf" ? Kb : ld)(this, c, a);
            this.globalData.defs.appendChild(d.gf);
            if (d.maskId) {
              this.globalData.defs.appendChild(d.ms);
              this.globalData.defs.appendChild(d.of);
              b.setAttribute("mask", "url(" + Ma + "#" + d.maskId + ")");
            }
          } else if (c.ty === "no") {
            d = new Cc(this, c, a);
          }
          if (c.ty === "st" || c.ty === "gs") {
            b.setAttribute("stroke-linecap", id[c.lc || 2]);
            b.setAttribute("stroke-linejoin", sd[c.lj || 2]);
            b.setAttribute("fill-opacity", "0");
            if (c.lj === 1) {
              b.setAttribute("stroke-miterlimit", c.ml);
            }
          }
          if (c.r === 2) {
            b.setAttribute("fill-rule", "evenodd");
          }
          if (c.ln) {
            b.setAttribute("id", c.ln);
          }
          if (c.cl) {
            b.setAttribute("class", c.cl);
          }
          if (c.bm) {
            b.style["mix-blend-mode"] = ub(c.bm);
          }
          this.stylesList.push(a);
          this.addToAnimatedContents(c, d);
          return d;
        };
        Ba.prototype.createGroupElement = function (c) {
          var a = new Dc();
          if (c.ln) {
            a.gr.setAttribute("id", c.ln);
          }
          if (c.cl) {
            a.gr.setAttribute("class", c.cl);
          }
          if (c.bm) {
            a.gr.style["mix-blend-mode"] = ub(c.bm);
          }
          return a;
        };
        Ba.prototype.createTransformElement = function (c, a) {
          var b = rd.getTransformProperty(this, c, this);
          a = new nc(b, b.o, a);
          this.addToAnimatedContents(c, a);
          return a;
        };
        Ba.prototype.createShapeElement = function (c, a, b) {
          var d = 4;
          if (c.ty === "rc") {
            d = 5;
          } else if (c.ty === "el") {
            d = 6;
          } else if (c.ty === "sr") {
            d = 7;
          }
          a = new lc(a, b, ja.getShapeProp(this, c, d, this));
          this.shapes.push(a);
          this.addShapeToModifiers(a);
          this.addToAnimatedContents(c, a);
          return a;
        };
        Ba.prototype.addToAnimatedContents = function (c, a) {
          for (var b = 0, d = this.animatedContents.length; b < d;) {
            if (this.animatedContents[b].element === a) {
              return;
            }
            b += 1;
          }
          this.animatedContents.push({
            fn: Cd.createRenderFunction(c),
            element: a,
            data: c
          });
        };
        Ba.prototype.setElementStyles = function (c) {
          var a = c.styles;
          var b = this.stylesList.length;
          for (c = 0; c < b; c += 1) {
            if (!this.stylesList[c].closed) {
              a.push(this.stylesList[c]);
            }
          }
        };
        Ba.prototype.reloadShapes = function () {
          var c;
          this._isFirstFrame = true;
          var a = this.itemsData.length;
          for (c = 0; c < a; c += 1) {
            this.prevViewData[c] = this.itemsData[c];
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
          this.filterUniqueShapes();
          a = this.dynamicProperties.length;
          for (c = 0; c < a; c += 1) {
            this.dynamicProperties[c].getValue();
          }
          this.renderModifiers();
        };
        Ba.prototype.searchShapes = function (c, a, b, d, e, f, k) {
          var n;
          var h;
          var g;
          var q = [].concat(f);
          var r = c.length - 1;
          var v = [];
          var p = [];
          for (f = r; f >= 0; --f) {
            if (g = this.searchProcessedElement(c[f])) {
              a[f] = b[g - 1];
            } else {
              c[f]._render = k;
            }
            if (c[f].ty === "fl" || c[f].ty === "st" || c[f].ty === "gf" || c[f].ty === "gs" || c[f].ty === "no") {
              if (g) {
                a[f].style.closed = false;
              } else {
                a[f] = this.createStyleElement(c[f], e);
              }
              if (c[f]._render && a[f].style.pElem.parentNode !== d) {
                d.appendChild(a[f].style.pElem);
              }
              v.push(a[f].style);
            } else if (c[f].ty === "gr") {
              if (g) {
                var l = a[f].it.length;
                for (r = 0; r < l; r += 1) {
                  a[f].prevViewData[r] = a[f].it[r];
                }
              } else {
                a[f] = this.createGroupElement(c[f]);
              }
              this.searchShapes(c[f].it, a[f].it, a[f].prevViewData, a[f].gr, e + 1, q, k);
              if (c[f]._render && a[f].gr.parentNode !== d) {
                d.appendChild(a[f].gr);
              }
            } else if (c[f].ty === "tr") {
              if (!g) {
                a[f] = this.createTransformElement(c[f], d);
              }
              n = a[f].transform;
              q.push(n);
            } else if (c[f].ty === "sh" || c[f].ty === "rc" || c[f].ty === "el" || c[f].ty === "sr") {
              if (!g) {
                a[f] = this.createShapeElement(c[f], q, e);
              }
              this.setElementStyles(a[f]);
            } else if (c[f].ty === "tm" || c[f].ty === "rd" || c[f].ty === "ms" || c[f].ty === "pb" || c[f].ty === "zz" || c[f].ty === "op") {
              if (g) {
                (h = a[f]).closed = false;
              } else {
                (h = tb.getModifier(c[f].ty)).init(this, c[f]);
                a[f] = h;
                this.shapeModifiers.push(h);
              }
              p.push(h);
            } else if (c[f].ty === "rp") {
              if (g) {
                (h = a[f]).closed = true;
              } else {
                h = tb.getModifier(c[f].ty);
                a[f] = h;
                h.init(this, c, f, a);
                this.shapeModifiers.push(h);
                k = false;
              }
              p.push(h);
            }
            this.addProcessedElement(c[f], f + 1);
          }
          r = v.length;
          for (f = 0; f < r; f += 1) {
            v[f].closed = true;
          }
          r = p.length;
          for (f = 0; f < r; f += 1) {
            p[f].closed = true;
          }
        };
        Ba.prototype.renderInnerContent = function () {
          var c;
          this.renderModifiers();
          var a = this.stylesList.length;
          for (c = 0; c < a; c += 1) {
            this.stylesList[c].reset();
          }
          this.renderShape();
          for (c = 0; c < a; c += 1) {
            if (this.stylesList[c]._mdf || this._isFirstFrame) {
              if (this.stylesList[c].msElem) {
                this.stylesList[c].msElem.setAttribute("d", this.stylesList[c].d);
                this.stylesList[c].d = "M0 0" + this.stylesList[c].d;
              }
              this.stylesList[c].pElem.setAttribute("d", this.stylesList[c].d || "M0 0");
            }
          }
        };
        Ba.prototype.renderShape = function () {
          var c;
          var a = this.animatedContents.length;
          for (c = 0; c < a; c += 1) {
            var b = this.animatedContents[c];
            if ((this._isFirstFrame || b.element._isAnimated) && b.data !== true) {
              b.fn(b.data, b.element, this._isFirstFrame);
            }
          }
        };
        Ba.prototype.destroy = function () {
          this.destroyBaseElement();
          this.itemsData = this.shapesData = null;
        };
        md.prototype.update = function (c, a, b, d, e, f) {
          this._mdf.o = false;
          this._mdf.sw = false;
          this._mdf.sc = false;
          this._mdf.fc = false;
          this._mdf.m = false;
          var k = this._mdf.p = false;
          if (this.o !== c) {
            this.o = c;
            this._mdf.o = true;
            k = true;
          }
          if (this.sw !== a) {
            this.sw = a;
            this._mdf.sw = true;
            k = true;
          }
          if (this.sc !== b) {
            this.sc = b;
            this._mdf.sc = true;
            k = true;
          }
          if (this.fc !== d) {
            this.fc = d;
            this._mdf.fc = true;
            k = true;
          }
          if (this.m !== e) {
            this.m = e;
            this._mdf.m = true;
            k = true;
          }
          if (!!f.length && (this.p[0] !== f[0] || this.p[1] !== f[1] || this.p[4] !== f[4] || this.p[5] !== f[5] || this.p[12] !== f[12] || this.p[13] !== f[13])) {
            this.p = f;
            this._mdf.p = true;
            k = true;
          }
          return k;
        };
        Sa.prototype.defaultBoxWidth = [0, 0];
        Sa.prototype.copyData = function (c, a) {
          for (var b in a) {
            if (Object.prototype.hasOwnProperty.call(a, b)) {
              c[b] = a[b];
            }
          }
          return c;
        };
        Sa.prototype.setCurrentData = function (c) {
          if (!c.__complete) {
            this.completeTextData(c);
          }
          this.currentData = c;
          this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
          this._mdf = true;
        };
        Sa.prototype.searchProperty = function () {
          return this.searchKeyframes();
        };
        Sa.prototype.searchKeyframes = function () {
          this.kf = this.data.d.k.length > 1;
          if (this.kf) {
            this.addEffect(this.getKeyframeValue.bind(this));
          }
          return this.kf;
        };
        Sa.prototype.addEffect = function (c) {
          this.effectsSequence.push(c);
          this.elem.addDynamicProperty(this);
        };
        Sa.prototype.getValue = function (c) {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || c) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var a = this.currentData;
            var b = this.keysIndex;
            if (this.lock) {
              this.setCurrentData(this.currentData);
            } else {
              this.lock = true;
              this._mdf = false;
              var d = this.effectsSequence.length;
              var e = c || this.data.d.k[this.keysIndex].s;
              for (c = 0; c < d; c += 1) {
                e = b !== this.keysIndex ? this.effectsSequence[c](e, e.t) : this.effectsSequence[c](this.currentData, e.t);
              }
              if (a !== e) {
                this.setCurrentData(e);
              }
              this.pv = this.v = this.currentData;
              this.lock = false;
              this.frameId = this.elem.globalData.frameId;
            }
          }
        };
        Sa.prototype.getKeyframeValue = function () {
          for (var c = this.data.d.k, a = this.elem.comp.renderedFrame, b = 0, d = c.length; b <= d - 1 && b !== d - 1 && !(c[b + 1].t > a);) {
            b += 1;
          }
          if (this.keysIndex !== b) {
            this.keysIndex = b;
          }
          return this.data.d.k[this.keysIndex].s;
        };
        Sa.prototype.buildFinalText = function (c) {
          var a;
          var b;
          var d = [];
          for (var e = 0, f = c.length, k, n = false, h; e < f;) {
            k = n;
            n = false;
            a = c.charCodeAt(e);
            h = c.charAt(e);
            if (Va.isCombinedCharacter(a)) {
              k = true;
            } else if (a >= 55296 && a <= 56319) {
              if (Va.isRegionalFlag(c, e)) {
                h = c.substr(e, 14);
              } else if ((b = c.charCodeAt(e + 1)) >= 56320 && b <= 57343) {
                if (Va.isModifier(a, b)) {
                  h = c.substr(e, 2);
                  k = true;
                } else {
                  h = Va.isFlagEmoji(c.substr(e, 4)) ? c.substr(e, 4) : c.substr(e, 2);
                }
              }
            } else if (a > 56319) {
              b = c.charCodeAt(e + 1);
              if (Va.isVariationSelector(a)) {
                k = true;
              }
            } else if (Va.isZeroWidthJoiner(a)) {
              k = true;
              n = true;
            }
            if (k) {
              d[d.length - 1] += h;
            } else {
              d.push(h);
            }
            e += h.length;
          }
          return d;
        };
        Sa.prototype.completeTextData = function (c) {
          c.__complete = true;
          var a;
          var b;
          var d = this.elem.globalData.fontManager;
          var e = this.data;
          var f = [];
          var k = 0;
          var n = e.m.g;
          var h = 0;
          var g = 0;
          var q = 0;
          var r = [];
          var v = 0;
          var p = d.getFontByName(c.f);
          var l = 0;
          var m = gd(p);
          c.fWeight = m.weight;
          c.fStyle = m.style;
          c.finalSize = c.s;
          c.finalText = this.buildFinalText(c.t);
          var t = c.finalText.length;
          c.finalLineHeight = c.lh;
          var u = c.tr / 1000 * c.finalSize;
          if (c.sz) {
            var w;
            var x;
            for (var D = true, K = c.sz[0], J = c.sz[1]; D;) {
              var F = w = 0;
              t = (x = this.buildFinalText(c.t)).length;
              u = c.tr / 1000 * c.finalSize;
              var G = -1;
              for (m = 0; m < t; m += 1) {
                var B = x[m].charCodeAt(0);
                var z = false;
                if (x[m] === " ") {
                  G = m;
                } else if (B === 13 || B === 3) {
                  F = 0;
                  z = true;
                  w += c.finalLineHeight || c.finalSize * 1.2;
                }
                if (d.chars) {
                  b = d.getCharData(x[m], p.fStyle, p.fFamily);
                  l = z ? 0 : b.w * c.finalSize / 100;
                } else {
                  l = d.measureText(x[m], c.f, c.finalSize);
                }
                if (F + l > K && x[m] !== " ") {
                  if (G === -1) {
                    t += 1;
                  } else {
                    m = G;
                  }
                  w += c.finalLineHeight || c.finalSize * 1.2;
                  x.splice(m, G === m ? 1 : 0, "\r");
                  G = -1;
                  F = 0;
                } else {
                  F += l;
                  F += u;
                }
              }
              w += p.ascent * c.finalSize / 100;
              if (this.canResize && c.finalSize > this.minimumFontSize && J < w) {
                --c.finalSize;
                c.finalLineHeight = c.finalSize * c.lh / c.s;
              } else {
                c.finalText = x;
                t = c.finalText.length;
                D = false;
              }
            }
          }
          F = -u;
          l = 0;
          var y;
          for (m = w = 0; m < t; m += 1) {
            z = false;
            if ((B = (y = c.finalText[m]).charCodeAt(0)) === 13 || B === 3) {
              w = 0;
              r.push(F);
              v = F > v ? F : v;
              F = u * -2;
              a = "";
              z = true;
              q += 1;
            } else {
              a = y;
            }
            if (d.chars) {
              b = d.getCharData(y, p.fStyle, d.getFontByName(c.f).fFamily);
              l = z ? 0 : b.w * c.finalSize / 100;
            } else {
              l = d.measureText(a, c.f, c.finalSize);
            }
            if (y === " ") {
              w += l + u;
            } else {
              F += l + u + w;
              w = 0;
            }
            f.push({
              l: l,
              an: l,
              add: h,
              n: z,
              anIndexes: [],
              val: a,
              line: q,
              animatorJustifyOffset: 0
            });
            if (n == 2) {
              h += l;
              if (a === "" || a === " " || m === t - 1) {
                for (a !== "" && a !== " " || (h -= l); g <= m;) {
                  f[g].an = h;
                  f[g].ind = k;
                  f[g].extra = l;
                  g += 1;
                }
                k += 1;
                h = 0;
              }
            } else if (n == 3) {
              h += l;
              if (a === "" || m === t - 1) {
                for (a === "" && (h -= l); g <= m;) {
                  f[g].an = h;
                  f[g].ind = k;
                  f[g].extra = l;
                  g += 1;
                }
                h = 0;
                k += 1;
              }
            } else {
              f[k].ind = k;
              f[k].extra = 0;
              k += 1;
            }
          }
          c.l = f;
          v = F > v ? F : v;
          r.push(F);
          if (c.sz) {
            c.boxWidth = c.sz[0];
            c.justifyOffset = 0;
          } else {
            c.boxWidth = v;
            switch (c.j) {
              case 1:
                c.justifyOffset = -c.boxWidth;
                break;
              case 2:
                c.justifyOffset = -c.boxWidth / 2;
                break;
              default:
                c.justifyOffset = 0;
            }
          }
          c.lineWidths = r;
          var C;
          d = e.a;
          a = d.length;
          k = [];
          for (z = 0; z < a; z += 1) {
            if ((b = d[z]).a.sc) {
              c.strokeColorAnim = true;
            }
            if (b.a.sw) {
              c.strokeWidthAnim = true;
            }
            if (b.a.fc || b.a.fh || b.a.fs || b.a.fb) {
              c.fillColorAnim = true;
            }
            h = 0;
            n = b.s.b;
            for (m = 0; m < t; m += 1) {
              (C = f[m]).anIndexes[z] = h;
              if (n == 1 && C.val !== "" || n == 2 && C.val !== "" && C.val !== " " || n == 3 && (C.n || C.val == " " || m == t - 1) || n == 4 && (C.n || m == t - 1)) {
                if (b.s.rn === 1) {
                  k.push(h);
                }
                h += 1;
              }
            }
            e.a[z].s.totalChars = h;
            var N;
            n = -1;
            if (b.s.rn === 1) {
              for (m = 0; m < t; m += 1) {
                if (n != (C = f[m]).anIndexes[z]) {
                  n = C.anIndexes[z];
                  N = k.splice(Math.floor(Math.random() * k.length), 1)[0];
                }
                C.anIndexes[z] = N;
              }
            }
          }
          c.yOffset = c.finalLineHeight || c.finalSize * 1.2;
          c.ls = c.ls || 0;
          c.ascent = p.ascent * c.finalSize / 100;
        };
        Sa.prototype.updateDocumentData = function (c, a) {
          a = a === undefined ? this.keysIndex : a;
          var b = this.copyData({}, this.data.d.k[a].s);
          b = this.copyData(b, c);
          this.data.d.k[a].s = b;
          this.recalculate(a);
          this.setCurrentData(b);
          this.elem.addDynamicProperty(this);
        };
        Sa.prototype.recalculate = function (c) {
          c = this.data.d.k[c].s;
          c.__complete = false;
          this.keysIndex = 0;
          this._isFirstFrame = true;
          this.getValue(c);
        };
        Sa.prototype.canResizeFont = function (c) {
          this.canResize = c;
          this.recalculate(this.keysIndex);
          this.elem.addDynamicProperty(this);
        };
        Sa.prototype.setMinimumFontSize = function (c) {
          this.minimumFontSize = Math.floor(c) || 1;
          this.recalculate(this.keysIndex);
          this.elem.addDynamicProperty(this);
        };
        var Pd = function () {
          function c(e, f) {
            this._currentTextLength = -1;
            this.k = false;
            this.data = f;
            this.elem = e;
            this.comp = e.comp;
            this.finalE = this.finalS = 0;
            this.initDynamicPropertyContainer(e);
            this.s = Q.getProp(e, f.s || {
              k: 0
            }, 0, 0, this);
            this.e = "e" in f ? Q.getProp(e, f.e, 0, 0, this) : {
              v: 100
            };
            this.o = Q.getProp(e, f.o || {
              k: 0
            }, 0, 0, this);
            this.xe = Q.getProp(e, f.xe || {
              k: 0
            }, 0, 0, this);
            this.ne = Q.getProp(e, f.ne || {
              k: 0
            }, 0, 0, this);
            this.sm = Q.getProp(e, f.sm || {
              k: 100
            }, 0, 0, this);
            this.a = Q.getProp(e, f.a, 0, 0.01, this);
            if (!this.dynamicProperties.length) {
              this.getValue();
            }
          }
          var a = Math.max;
          var b = Math.min;
          var d = Math.floor;
          c.prototype = {
            getMult: function (e) {
              if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
                this.getValue();
              }
              var f = 0;
              var k = 0;
              var n = 1;
              var h = 1;
              if (this.ne.v > 0) {
                f = this.ne.v / 100;
              } else {
                k = -this.ne.v / 100;
              }
              if (this.xe.v > 0) {
                n = 1 - this.xe.v / 100;
              } else {
                h = 1 + this.xe.v / 100;
              }
              f = kb.getBezierEasing(f, k, n, h).get;
              k = 0;
              n = this.finalS;
              h = this.finalE;
              var g = this.data.sh;
              if (g === 2) {
                k = f(k = h === n ? e >= h ? 1 : 0 : a(0, b(0.5 / (h - n) + (e - n) / (h - n), 1)));
              } else if (g === 3) {
                k = f(k = h === n ? e >= h ? 0 : 1 : 1 - a(0, b(0.5 / (h - n) + (e - n) / (h - n), 1)));
              } else if (g === 4) {
                if (h === n) {
                  k = 0;
                } else if ((k = a(0, b(0.5 / (h - n) + (e - n) / (h - n), 1))) < 0.5) {
                  k *= 2;
                } else {
                  k = 1 - (k - 0.5) * 2;
                }
                k = f(k);
              } else if (g === 5) {
                if (h === n) {
                  k = 0;
                } else {
                  k = h - n;
                  e = -k / 2 + b(a(0, e + 0.5 - n), h - n);
                  k /= 2;
                  k = Math.sqrt(1 - e * e / (k * k));
                }
                k = f(k);
              } else if (g === 6) {
                if (h === n) {
                  k = 0;
                } else {
                  e = b(a(0, e + 0.5 - n), h - n);
                  k = (1 + Math.cos(Math.PI + Math.PI * 2 * e / (h - n))) / 2;
                }
                k = f(k);
              } else {
                if (e >= d(n)) {
                  k = a(0, b(e - n < 0 ? b(h, 1) - (n - e) : h - e, 1));
                }
                k = f(k);
              }
              if (this.sm.v !== 100) {
                e = this.sm.v * 0.01;
                if (e === 0) {
                  e = 1e-8;
                }
                f = 0.5 - e * 0.5;
                if (k < f) {
                  k = 0;
                } else if ((k = (k - f) / e) > 1) {
                  k = 1;
                }
              }
              return k * this.a.v;
            },
            getValue: function (e) {
              this.iterateDynamicProperties();
              this._mdf = e || this._mdf;
              this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;
              if (e && this.data.r === 2) {
                this.e.v = this._currentTextLength;
              }
              var f = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
              var k = this.o.v / f;
              e = this.s.v / f + k;
              f = this.e.v / f + k;
              if (e > f) {
                k = e;
                e = f;
                f = k;
              }
              this.finalS = e;
              this.finalE = f;
            }
          };
          R([Pa], c);
          return {
            getTextSelectorProp: function (e, f, k) {
              return new c(e, f, k);
            }
          };
        }();
        pb.prototype.searchProperties = function () {
          var c;
          var a = this._textData.a.length;
          var b = Q.getProp;
          for (c = 0; c < a; c += 1) {
            var d = this._textData.a[c];
            this._animatorsData[c] = new Ga(this._elem, d, this);
          }
          if (this._textData.p && "m" in this._textData.p) {
            this._pathData = {
              a: b(this._elem, this._textData.p.a, 0, 0, this),
              f: b(this._elem, this._textData.p.f, 0, 0, this),
              l: b(this._elem, this._textData.p.l, 0, 0, this),
              r: b(this._elem, this._textData.p.r, 0, 0, this),
              p: b(this._elem, this._textData.p.p, 0, 0, this),
              m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            };
            this._hasMaskedPath = true;
          } else {
            this._hasMaskedPath = false;
          }
          this._moreOptions.alignment = b(this._elem, this._textData.m.a, 1, 0, this);
        };
        pb.prototype.getMeasures = function (c, a) {
          this.lettersChangedFlag = a;
          if (this._mdf || this._isFirstFrame || a || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = false;
            var b;
            var d;
            var e;
            var f;
            var k;
            var n;
            var h;
            var g;
            var q;
            var r;
            var v = this._moreOptions.alignment.v;
            var p = this._animatorsData;
            var l = this._textData;
            var m = this.mHelper;
            var t = this._renderType;
            var u = this.renderedLetters.length;
            var w = c.l;
            if (this._hasMaskedPath) {
              r = this._pathData.m;
              if (!this._pathData.n || this._pathData._mdf) {
                var x = r.v;
                if (this._pathData.r.v) {
                  x = x.reverse();
                }
                var D = {
                  tLength: 0,
                  segments: []
                };
                var K = x._length - 1;
                for (a = g = 0; a < K; a += 1) {
                  var J = Xa.buildBezierData(x.v[a], x.v[a + 1], [x.o[a][0] - x.v[a][0], x.o[a][1] - x.v[a][1]], [x.i[a + 1][0] - x.v[a + 1][0], x.i[a + 1][1] - x.v[a + 1][1]]);
                  D.tLength += J.segmentLength;
                  D.segments.push(J);
                  g += J.segmentLength;
                }
                a = K;
                if (r.v.c) {
                  J = Xa.buildBezierData(x.v[a], x.v[0], [x.o[a][0] - x.v[a][0], x.o[a][1] - x.v[a][1]], [x.i[0][0] - x.v[0][0], x.i[0][1] - x.v[0][1]]);
                  D.tLength += J.segmentLength;
                  D.segments.push(J);
                  g += J.segmentLength;
                }
                this._pathData.pi = D;
              }
              D = this._pathData.pi;
              b = this._pathData.f.v;
              k = 0;
              f = 1;
              d = 0;
              h = D.segments;
              if (b < 0 && r.v.c) {
                if (D.tLength < Math.abs(b)) {
                  b = -Math.abs(b) % D.tLength;
                }
                f = (n = h[k = h.length - 1].points).length - 1;
                while (b < 0) {
                  b += n[f].partialLength;
                  if (--f < 0) {
                    f = (n = h[--k].points).length - 1;
                  }
                }
              }
              var F = (n = h[k].points)[f - 1];
              var G = (x = n[f]).partialLength;
            }
            K = w.length;
            J = D = 0;
            var B;
            var z;
            var y;
            var C = c.finalSize * 1.2 * 0.714;
            var N = true;
            var P = p.length;
            var ea;
            var ia;
            var S;
            var H;
            var A;
            var E;
            var M;
            var Z;
            var fa;
            var aa = -1;
            var ha = b;
            var da = k;
            var Y = f;
            var na = -1;
            var sa = "";
            var L = this.defaultPropsArray;
            if (c.j === 2 || c.j === 1) {
              var I = S = 0;
              var ca = c.j === 2 ? -0.5 : -1;
              var xa = 0;
              var V = true;
              for (a = 0; a < K; a += 1) {
                if (w[a].n) {
                  for (S && (S += I); xa < a;) {
                    w[xa].animatorJustifyOffset = S;
                    xa += 1;
                  }
                  S = 0;
                  V = true;
                } else {
                  for (e = 0; e < P; e += 1) {
                    if ((B = p[e].a).t.propType) {
                      if (V && c.j === 2) {
                        I += B.t.v * ca;
                      }
                      if ((y = p[e].s.getMult(w[a].anIndexes[e], l.a[e].s.totalChars)).length) {
                        S += B.t.v * y[0] * ca;
                      } else {
                        S += B.t.v * y * ca;
                      }
                    }
                  }
                  V = false;
                }
              }
              for (S && (S += I); xa < a;) {
                w[xa].animatorJustifyOffset = S;
                xa += 1;
              }
            }
            for (a = 0; a < K; a += 1) {
              m.reset();
              S = 1;
              if (w[a].n) {
                D = 0;
                J += c.yOffset;
                J += N ? 1 : 0;
                b = ha;
                N = false;
                if (this._hasMaskedPath) {
                  f = Y;
                  F = (n = h[k = da].points)[f - 1];
                  G = (x = n[f]).partialLength;
                  d = 0;
                }
                e = M = fa = sa = "";
                L = this.defaultPropsArray;
              } else {
                if (this._hasMaskedPath) {
                  if (na !== w[a].line) {
                    switch (c.j) {
                      case 1:
                        b += g - c.lineWidths[w[a].line];
                        break;
                      case 2:
                        b += (g - c.lineWidths[w[a].line]) / 2;
                    }
                    na = w[a].line;
                  }
                  if (aa !== w[a].ind) {
                    if (w[aa]) {
                      b += w[aa].extra;
                    }
                    b += w[a].an / 2;
                    aa = w[a].ind;
                  }
                  b += v[0] * w[a].an * 0.005;
                  for (e = I = 0; e < P; e += 1) {
                    if ((B = p[e].a).p.propType) {
                      if ((y = p[e].s.getMult(w[a].anIndexes[e], l.a[e].s.totalChars)).length) {
                        I += B.p.v[0] * y[0];
                      } else {
                        I += B.p.v[0] * y;
                      }
                    }
                    if (B.a.propType) {
                      if ((y = p[e].s.getMult(w[a].anIndexes[e], l.a[e].s.totalChars)).length) {
                        I += B.a.v[0] * y[0];
                      } else {
                        I += B.a.v[0] * y;
                      }
                    }
                  }
                  e = true;
                  for (this._pathData.a.v && (b = w[0].an * 0.5 + (g - this._pathData.f.v - w[0].an * 0.5 - w[w.length - 1].an * 0.5) * aa / (K - 1), b += this._pathData.f.v); e;) {
                    if (d + G >= b + I || !n) {
                      q = (b + I - d) / x.partialLength;
                      ea = F.point[0] + (x.point[0] - F.point[0]) * q;
                      ia = F.point[1] + (x.point[1] - F.point[1]) * q;
                      m.translate(-v[0] * w[a].an * 0.005, -v[1] * C * 0.01);
                      e = false;
                    } else if (n) {
                      d += x.partialLength;
                      if ((f += 1) >= n.length) {
                        f = 0;
                        if (h[k += 1]) {
                          n = h[k].points;
                        } else if (r.v.c) {
                          f = 0;
                          n = h[k = 0].points;
                        } else {
                          d -= x.partialLength;
                          n = null;
                        }
                      }
                      if (n) {
                        F = x;
                        G = (x = n[f]).partialLength;
                      }
                    }
                  }
                  I = w[a].an / 2 - w[a].add;
                  m.translate(-I, 0, 0);
                } else {
                  I = w[a].an / 2 - w[a].add;
                  m.translate(-I, 0, 0);
                  m.translate(-v[0] * w[a].an * 0.005, -v[1] * C * 0.01, 0);
                }
                for (e = 0; e < P; e += 1) {
                  if ((B = p[e].a).t.propType) {
                    y = p[e].s.getMult(w[a].anIndexes[e], l.a[e].s.totalChars);
                    if (D !== 0 || c.j !== 0) {
                      if (this._hasMaskedPath) {
                        if (y.length) {
                          b += B.t.v * y[0];
                        } else {
                          b += B.t.v * y;
                        }
                      } else if (y.length) {
                        D += B.t.v * y[0];
                      } else {
                        D += B.t.v * y;
                      }
                    }
                  }
                }
                if (c.strokeWidthAnim) {
                  A = c.sw || 0;
                }
                if (c.strokeColorAnim) {
                  H = c.sc ? [c.sc[0], c.sc[1], c.sc[2]] : [0, 0, 0];
                }
                if (c.fillColorAnim && c.fc) {
                  E = [c.fc[0], c.fc[1], c.fc[2]];
                }
                for (e = 0; e < P; e += 1) {
                  if ((B = p[e].a).a.propType) {
                    if ((y = p[e].s.getMult(w[a].anIndexes[e], l.a[e].s.totalChars)).length) {
                      m.translate(-B.a.v[0] * y[0], -B.a.v[1] * y[1], B.a.v[2] * y[2]);
                    } else {
                      m.translate(-B.a.v[0] * y, -B.a.v[1] * y, B.a.v[2] * y);
                    }
                  }
                }
                for (e = 0; e < P; e += 1) {
                  if ((B = p[e].a).s.propType) {
                    if ((y = p[e].s.getMult(w[a].anIndexes[e], l.a[e].s.totalChars)).length) {
                      m.scale(1 + (B.s.v[0] - 1) * y[0], 1 + (B.s.v[1] - 1) * y[1], 1);
                    } else {
                      m.scale(1 + (B.s.v[0] - 1) * y, 1 + (B.s.v[1] - 1) * y, 1);
                    }
                  }
                }
                for (e = 0; e < P; e += 1) {
                  B = p[e].a;
                  y = p[e].s.getMult(w[a].anIndexes[e], l.a[e].s.totalChars);
                  if (B.sk.propType) {
                    if (y.length) {
                      m.skewFromAxis(-B.sk.v * y[0], B.sa.v * y[1]);
                    } else {
                      m.skewFromAxis(-B.sk.v * y, B.sa.v * y);
                    }
                  }
                  if (B.r.propType) {
                    if (y.length) {
                      m.rotateZ(-B.r.v * y[2]);
                    } else {
                      m.rotateZ(-B.r.v * y);
                    }
                  }
                  if (B.ry.propType) {
                    if (y.length) {
                      m.rotateY(B.ry.v * y[1]);
                    } else {
                      m.rotateY(B.ry.v * y);
                    }
                  }
                  if (B.rx.propType) {
                    if (y.length) {
                      m.rotateX(B.rx.v * y[0]);
                    } else {
                      m.rotateX(B.rx.v * y);
                    }
                  }
                  if (B.o.propType) {
                    if (y.length) {
                      S += (B.o.v * y[0] - S) * y[0];
                    } else {
                      S += (B.o.v * y - S) * y;
                    }
                  }
                  if (c.strokeWidthAnim && B.sw.propType) {
                    if (y.length) {
                      A += B.sw.v * y[0];
                    } else {
                      A += B.sw.v * y;
                    }
                  }
                  if (c.strokeColorAnim && B.sc.propType) {
                    for (ca = 0; ca < 3; ca += 1) {
                      if (y.length) {
                        H[ca] += (B.sc.v[ca] - H[ca]) * y[0];
                      } else {
                        H[ca] += (B.sc.v[ca] - H[ca]) * y;
                      }
                    }
                  }
                  if (c.fillColorAnim && c.fc) {
                    if (B.fc.propType) {
                      for (ca = 0; ca < 3; ca += 1) {
                        if (y.length) {
                          E[ca] += (B.fc.v[ca] - E[ca]) * y[0];
                        } else {
                          E[ca] += (B.fc.v[ca] - E[ca]) * y;
                        }
                      }
                    }
                    if (B.fh.propType) {
                      E = y.length ? $c(E, B.fh.v * y[0]) : $c(E, B.fh.v * y);
                    }
                    if (B.fs.propType) {
                      E = y.length ? Hc(E, B.fs.v * y[0]) : Hc(E, B.fs.v * y);
                    }
                    if (B.fb.propType) {
                      E = y.length ? Zc(E, B.fb.v * y[0]) : Zc(E, B.fb.v * y);
                    }
                  }
                }
                for (e = 0; e < P; e += 1) {
                  if ((B = p[e].a).p.propType) {
                    y = p[e].s.getMult(w[a].anIndexes[e], l.a[e].s.totalChars);
                    if (this._hasMaskedPath) {
                      if (y.length) {
                        m.translate(0, B.p.v[1] * y[0], -B.p.v[2] * y[1]);
                      } else {
                        m.translate(0, B.p.v[1] * y, -B.p.v[2] * y);
                      }
                    } else if (y.length) {
                      m.translate(B.p.v[0] * y[0], B.p.v[1] * y[1], -B.p.v[2] * y[2]);
                    } else {
                      m.translate(B.p.v[0] * y, B.p.v[1] * y, -B.p.v[2] * y);
                    }
                  }
                }
                if (c.strokeWidthAnim) {
                  M = A < 0 ? 0 : A;
                }
                if (c.strokeColorAnim) {
                  Z = "rgb(" + Math.round(H[0] * 255) + "," + Math.round(H[1] * 255) + "," + Math.round(H[2] * 255) + ")";
                }
                if (c.fillColorAnim && c.fc) {
                  fa = "rgb(" + Math.round(E[0] * 255) + "," + Math.round(E[1] * 255) + "," + Math.round(E[2] * 255) + ")";
                }
                if (this._hasMaskedPath) {
                  m.translate(0, -c.ls);
                  m.translate(0, v[1] * C * 0.01 + J, 0);
                  if (this._pathData.p.v) {
                    e = (x.point[1] - F.point[1]) / (x.point[0] - F.point[0]);
                    e = Math.atan(e) * 180 / Math.PI;
                    if (x.point[0] < F.point[0]) {
                      e += 180;
                    }
                    m.rotate(-e * Math.PI / 180);
                  }
                  m.translate(ea, ia, 0);
                  b -= v[0] * w[a].an * 0.005;
                  if (w[a + 1] && aa !== w[a + 1].ind) {
                    b += w[a].an / 2;
                    b += c.tr * 0.001 * c.finalSize;
                  }
                } else {
                  m.translate(D, J, 0);
                  if (c.ps) {
                    m.translate(c.ps[0], c.ps[1] + c.ascent, 0);
                  }
                  switch (c.j) {
                    case 1:
                      m.translate(w[a].animatorJustifyOffset + c.justifyOffset + (c.boxWidth - c.lineWidths[w[a].line]), 0, 0);
                      break;
                    case 2:
                      m.translate(w[a].animatorJustifyOffset + c.justifyOffset + (c.boxWidth - c.lineWidths[w[a].line]) / 2, 0, 0);
                  }
                  m.translate(0, -c.ls);
                  m.translate(I, 0, 0);
                  m.translate(v[0] * w[a].an * 0.005, v[1] * C * 0.01, 0);
                  D += w[a].l + c.tr * 0.001 * c.finalSize;
                }
                if (t === "html") {
                  sa = m.toCSS();
                } else if (t === "svg") {
                  sa = m.to2dCSS();
                } else {
                  L = [m.props[0], m.props[1], m.props[2], m.props[3], m.props[4], m.props[5], m.props[6], m.props[7], m.props[8], m.props[9], m.props[10], m.props[11], m.props[12], m.props[13], m.props[14], m.props[15]];
                }
                e = S;
              }
              if (u <= a) {
                z = new md(e, M, Z, fa, sa, L);
                this.renderedLetters.push(z);
                u += 1;
                this.lettersChangedFlag = true;
              } else {
                z = this.renderedLetters[a];
                this.lettersChangedFlag = z.update(e, M, Z, fa, sa, L) || this.lettersChangedFlag;
              }
            }
          }
        };
        pb.prototype.getValue = function () {
          if (this._elem.globalData.frameId !== this._frameId) {
            this._frameId = this._elem.globalData.frameId;
            this.iterateDynamicProperties();
          }
        };
        pb.prototype.mHelper = new Ja();
        pb.prototype.defaultPropsArray = [];
        R([Pa], pb);
        oa.prototype.initElement = function (c, a, b) {
          this.lettersChangedFlag = true;
          this.initFrame();
          this.initBaseData(c, a, b);
          this.textProperty = new Sa(this, c.t, this.dynamicProperties);
          this.textAnimator = new pb(c.t, this.renderType, this);
          this.initTransform(c, a, b);
          this.initHierarchy();
          this.initRenderable();
          this.initRendererElement();
          this.createContainerElements();
          this.createRenderableComponents();
          this.createContent();
          this.hide();
          this.textAnimator.searchProperties(this.dynamicProperties);
        };
        oa.prototype.prepareFrame = function (c) {
          this._mdf = false;
          this.prepareRenderableFrame(c);
          this.prepareProperties(c, this.isInRange);
        };
        oa.prototype.createPathShape = function (c, a) {
          var b;
          var d;
          var e = a.length;
          var f = "";
          for (b = 0; b < e; b += 1) {
            if (a[b].ty === "sh") {
              d = a[b].ks.k;
              f += td(d, d.i.length, true, c);
            }
          }
          return f;
        };
        oa.prototype.updateDocumentData = function (c, a) {
          this.textProperty.updateDocumentData(c, a);
        };
        oa.prototype.canResizeFont = function (c) {
          this.textProperty.canResizeFont(c);
        };
        oa.prototype.setMinimumFontSize = function (c) {
          this.textProperty.setMinimumFontSize(c);
        };
        oa.prototype.applyTextPropertiesToMatrix = function (c, a, b, d, e) {
          if (c.ps) {
            a.translate(c.ps[0], c.ps[1] + c.ascent, 0);
          }
          a.translate(0, -c.ls, 0);
          switch (c.j) {
            case 1:
              a.translate(c.justifyOffset + (c.boxWidth - c.lineWidths[b]), 0, 0);
              break;
            case 2:
              a.translate(c.justifyOffset + (c.boxWidth - c.lineWidths[b]) / 2, 0, 0);
          }
          a.translate(d, e, 0);
        };
        oa.prototype.buildColor = function (c) {
          return "rgb(" + Math.round(c[0] * 255) + "," + Math.round(c[1] * 255) + "," + Math.round(c[2] * 255) + ")";
        };
        oa.prototype.emptyProp = new md();
        oa.prototype.destroy = function () {};
        oa.prototype.validateText = function () {
          if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
            this.buildNewText();
            this.textProperty._isFirstFrame = false;
            this.textProperty._mdf = false;
          }
        };
        var Md = {
          shapes: []
        };
        R([yb, Wa, ib, ab, nb, Jb, oa], qb);
        qb.prototype.createContent = function () {
          if (this.data.singleShape && !this.globalData.fontManager.chars) {
            this.textContainer = X("text");
          }
        };
        qb.prototype.buildTextContents = function (c) {
          for (var a = 0, b = c.length, d = [], e = ""; a < b;) {
            if (c[a] === String.fromCharCode(13) || c[a] === String.fromCharCode(3)) {
              d.push(e);
              e = "";
            } else {
              e += c[a];
            }
            a += 1;
          }
          d.push(e);
          return d;
        };
        qb.prototype.buildShapeData = function (c, a) {
          if (c.shapes && c.shapes.length) {
            var b = c.shapes[0];
            if (b.it) {
              b = b.it[b.it.length - 1];
              if (b.s) {
                b.s.k[0] = a;
                b.s.k[1] = a;
              }
            }
          }
          return c;
        };
        qb.prototype.buildNewText = function () {
          this.addDynamicProperty(this);
          var c = this.textProperty.currentData;
          this.renderedLetters = ta(c ? c.l.length : 0);
          if (c.fc) {
            this.layerElement.setAttribute("fill", this.buildColor(c.fc));
          } else {
            this.layerElement.setAttribute("fill", "rgba(0,0,0,0)");
          }
          if (c.sc) {
            this.layerElement.setAttribute("stroke", this.buildColor(c.sc));
            this.layerElement.setAttribute("stroke-width", c.sw);
          }
          this.layerElement.setAttribute("font-size", c.finalSize);
          var a = this.globalData.fontManager.getFontByName(c.f);
          if (a.fClass) {
            this.layerElement.setAttribute("class", a.fClass);
          } else {
            this.layerElement.setAttribute("font-family", a.fFamily);
            var b = c.fWeight;
            var d = c.fStyle;
            this.layerElement.setAttribute("font-style", d);
            this.layerElement.setAttribute("font-weight", b);
          }
          this.layerElement.setAttribute("aria-label", c.t);
          var e;
          var f = c.l || [];
          var k = !!this.globalData.fontManager.chars;
          d = f.length;
          var n = this.mHelper;
          var h = this.data.singleShape;
          var g = 0;
          var q = 0;
          var r = true;
          var v = c.tr * 0.001 * c.finalSize;
          if (!h || k || c.sz) {
            var p = this.textSpans.length;
            for (b = 0; b < d; b += 1) {
              this.textSpans[b] ||= {
                span: null,
                childSpan: null,
                glyph: null
              };
              if (!k || !h || b === 0) {
                e = p > b ? this.textSpans[b].span : X(k ? "g" : "text");
                if (p <= b) {
                  e.setAttribute("stroke-linecap", "butt");
                  e.setAttribute("stroke-linejoin", "round");
                  e.setAttribute("stroke-miterlimit", "4");
                  this.textSpans[b].span = e;
                  if (k) {
                    var l = X("g");
                    e.appendChild(l);
                    this.textSpans[b].childSpan = l;
                  }
                  this.textSpans[b].span = e;
                  this.layerElement.appendChild(e);
                }
                e.style.display = "inherit";
              }
              n.reset();
              if (h) {
                if (f[b].n) {
                  g = -v;
                  q += c.yOffset;
                  q += r ? 1 : 0;
                  r = false;
                }
                this.applyTextPropertiesToMatrix(c, n, f[b].line, g, q);
                g += f[b].l || 0;
                g += v;
              }
              if (k) {
                if ((l = this.globalData.fontManager.getCharData(c.finalText[b], a.fStyle, this.globalData.fontManager.getFontByName(c.f).fFamily)).t === 1) {
                  var m = new bb(l.data, this.globalData, this);
                } else {
                  m = Md;
                  if (l.data && l.data.shapes) {
                    m = this.buildShapeData(l.data, c.finalSize);
                  }
                  m = new Ba(m, this.globalData, this);
                }
                if (this.textSpans[b].glyph) {
                  var t = this.textSpans[b].glyph;
                  this.textSpans[b].childSpan.removeChild(t.layerElement);
                  t.destroy();
                }
                this.textSpans[b].glyph = m;
                m._debug = true;
                m.prepareFrame(0);
                m.renderFrame();
                this.textSpans[b].childSpan.appendChild(m.layerElement);
                if (l.t === 1) {
                  this.textSpans[b].childSpan.setAttribute("transform", "scale(" + c.finalSize / 100 + "," + c.finalSize / 100 + ")");
                }
              } else {
                if (h) {
                  e.setAttribute("transform", "translate(" + n.props[12] + "," + n.props[13] + ")");
                }
                e.textContent = f[b].val;
                e.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
              }
            }
            if (h && e) {
              e.setAttribute("d", "");
            }
          } else {
            a = this.textContainer;
            switch (c.j) {
              case 1:
                e = "end";
                break;
              case 2:
                e = "middle";
                break;
              default:
                e = "start";
            }
            a.setAttribute("text-anchor", e);
            a.setAttribute("letter-spacing", v);
            v = this.buildTextContents(c.finalText);
            d = v.length;
            q = c.ps ? c.ps[1] + c.ascent : 0;
            for (b = 0; b < d; b += 1) {
              (e = this.textSpans[b].span || X("tspan")).textContent = v[b];
              e.setAttribute("x", 0);
              e.setAttribute("y", q);
              e.style.display = "inherit";
              a.appendChild(e);
              this.textSpans[b] ||= {
                span: null,
                glyph: null
              };
              this.textSpans[b].span = e;
              q += c.finalLineHeight;
            }
            this.layerElement.appendChild(a);
          }
          while (b < this.textSpans.length) {
            this.textSpans[b].span.style.display = "none";
            b += 1;
          }
          this._sizeChanged = true;
        };
        qb.prototype.sourceRectAtTime = function () {
          this.prepareFrame(this.comp.renderedFrame - this.data.st);
          this.renderInnerContent();
          if (this._sizeChanged) {
            this._sizeChanged = false;
            var c = this.layerElement.getBBox();
            this.bbox = {
              top: c.y,
              left: c.x,
              width: c.width,
              height: c.height
            };
          }
          return this.bbox;
        };
        qb.prototype.getValue = function () {
          var c;
          var a;
          var b = this.textSpans.length;
          this.renderedFrame = this.comp.renderedFrame;
          for (c = 0; c < b; c += 1) {
            if (a = this.textSpans[c].glyph) {
              a.prepareFrame(this.comp.renderedFrame - this.data.st);
              if (a._mdf) {
                this._mdf = true;
              }
            }
          }
        };
        qb.prototype.renderInnerContent = function () {
          this.validateText();
          if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var c;
            this._sizeChanged = true;
            var a;
            var b;
            var d;
            var e = this.textAnimator.renderedLetters;
            var f = this.textProperty.currentData.l;
            var k = f.length;
            for (c = 0; c < k; c += 1) {
              if (!f[c].n) {
                a = e[c];
                b = this.textSpans[c].span;
                if (d = this.textSpans[c].glyph) {
                  d.renderFrame();
                }
                if (a._mdf.m) {
                  b.setAttribute("transform", a.m);
                }
                if (a._mdf.o) {
                  b.setAttribute("opacity", a.o);
                }
                if (a._mdf.sw) {
                  b.setAttribute("stroke-width", a.sw);
                }
                if (a._mdf.sc) {
                  b.setAttribute("stroke", a.sc);
                }
                if (a._mdf.fc) {
                  b.setAttribute("fill", a.fc);
                }
              }
            }
          }
        };
        R([ob], rb);
        rb.prototype.createContent = function () {
          var c = X("rect");
          c.setAttribute("width", this.data.sw);
          c.setAttribute("height", this.data.sh);
          c.setAttribute("fill", this.data.sc);
          this.layerElement.appendChild(c);
        };
        Ka.prototype.prepareFrame = function (c) {
          this.prepareProperties(c, true);
        };
        Ka.prototype.renderFrame = function () {};
        Ka.prototype.getBaseElement = function () {
          return null;
        };
        Ka.prototype.destroy = function () {};
        Ka.prototype.sourceRectAtTime = function () {};
        Ka.prototype.hide = function () {};
        R([yb, Wa, ab, nb], Ka);
        R([ua], pa);
        pa.prototype.createNull = function (c) {
          return new Ka(c, this.globalData, this);
        };
        pa.prototype.createShape = function (c) {
          return new Ba(c, this.globalData, this);
        };
        pa.prototype.createText = function (c) {
          return new qb(c, this.globalData, this);
        };
        pa.prototype.createImage = function (c) {
          return new ob(c, this.globalData, this);
        };
        pa.prototype.createSolid = function (c) {
          return new rb(c, this.globalData, this);
        };
        pa.prototype.configAnimation = function (c) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
          if (this.renderConfig.viewBoxSize) {
            this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize);
          } else {
            this.svgElement.setAttribute("viewBox", "0 0 " + c.w + " " + c.h);
          }
          if (!this.renderConfig.viewBoxOnly) {
            this.svgElement.setAttribute("width", c.w);
            this.svgElement.setAttribute("height", c.h);
            this.svgElement.style.width = "100%";
            this.svgElement.style.height = "100%";
            this.svgElement.style.transform = "translate3d(0,0,0)";
            this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility;
          }
          if (this.renderConfig.width) {
            this.svgElement.setAttribute("width", this.renderConfig.width);
          }
          if (this.renderConfig.height) {
            this.svgElement.setAttribute("height", this.renderConfig.height);
          }
          if (this.renderConfig.className) {
            this.svgElement.setAttribute("class", this.renderConfig.className);
          }
          if (this.renderConfig.id) {
            this.svgElement.setAttribute("id", this.renderConfig.id);
          }
          if (this.renderConfig.focusable !== undefined) {
            this.svgElement.setAttribute("focusable", this.renderConfig.focusable);
          }
          this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio);
          this.animationItem.wrapper.appendChild(this.svgElement);
          var a = this.globalData.defs;
          this.setupGlobalData(c, a);
          this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
          this.data = c;
          var b = X("clipPath");
          var d = X("rect");
          d.setAttribute("width", c.w);
          d.setAttribute("height", c.h);
          d.setAttribute("x", 0);
          d.setAttribute("y", 0);
          var e = Ca();
          b.setAttribute("id", e);
          b.appendChild(d);
          this.layerElement.setAttribute("clip-path", "url(" + Ma + "#" + e + ")");
          a.appendChild(b);
          this.layers = c.layers;
          this.elements = ta(c.layers.length);
        };
        pa.prototype.destroy = function () {
          var c;
          if (this.animationItem.wrapper) {
            this.animationItem.wrapper.innerText = "";
          }
          this.layerElement = null;
          this.globalData.defs = null;
          var a = this.layers ? this.layers.length : 0;
          for (c = 0; c < a; c += 1) {
            if (this.elements[c] && this.elements[c].destroy) {
              this.elements[c].destroy();
            }
          }
          this.elements.length = 0;
          this.destroyed = true;
          this.animationItem = null;
        };
        pa.prototype.updateContainerSize = function () {};
        pa.prototype.findIndexByInd = function (c) {
          var a;
          var b = this.layers.length;
          for (a = 0; a < b; a += 1) {
            if (this.layers[a].ind === c) {
              return a;
            }
          }
          return -1;
        };
        pa.prototype.buildItem = function (c) {
          var a = this.elements;
          if (!a[c] && this.layers[c].ty !== 99) {
            a[c] = true;
            var b = this.createItem(this.layers[c]);
            a[c] = b;
            if (Lb) {
              if (this.layers[c].ty === 0) {
                this.globalData.projectInterface.registerComposition(b);
              }
              b.initExpressions();
            }
            this.appendElementInPos(b, c);
            if (this.layers[c].tt) {
              var d = "tp" in this.layers[c] ? this.findIndexByInd(this.layers[c].tp) : c - 1;
              if (d !== -1) {
                if (this.elements[d] && this.elements[d] !== true) {
                  c = a[d].getMatte(this.layers[c].tt);
                  b.setMatte(c);
                } else {
                  this.buildItem(d);
                  this.addPendingElement(b);
                }
              }
            }
          }
        };
        pa.prototype.checkPendingElements = function () {
          while (this.pendingElements.length) {
            var c = this.pendingElements.pop();
            c.checkParenting();
            if (c.data.tt) {
              for (var a = 0, b = this.elements.length; a < b;) {
                if (this.elements[a] === c) {
                  b = "tp" in c.data ? this.findIndexByInd(c.data.tp) : a - 1;
                  a = this.elements[b].getMatte(this.layers[a].tt);
                  c.setMatte(a);
                  break;
                }
                a += 1;
              }
            }
          }
        };
        pa.prototype.renderFrame = function (c) {
          if (this.renderedFrame !== c && !this.destroyed) {
            var a;
            if (c === null) {
              c = this.renderedFrame;
            } else {
              this.renderedFrame = c;
            }
            this.globalData.frameNum = c;
            this.globalData.frameId += 1;
            this.globalData.projectInterface.currentFrame = c;
            this.globalData._mdf = false;
            var b = this.layers.length;
            if (!this.completeLayers) {
              this.checkLayers(c);
            }
            for (a = b - 1; a >= 0; --a) {
              if (this.completeLayers || this.elements[a]) {
                this.elements[a].prepareFrame(c - this.layers[a].st);
              }
            }
            if (this.globalData._mdf) {
              for (a = 0; a < b; a += 1) {
                if (this.completeLayers || this.elements[a]) {
                  this.elements[a].renderFrame();
                }
              }
            }
          }
        };
        pa.prototype.appendElementInPos = function (c, a) {
          if (c = c.getBaseElement()) {
            var b;
            for (var d = 0; d < a;) {
              if (this.elements[d] && this.elements[d] !== true && this.elements[d].getBaseElement()) {
                b = this.elements[d].getBaseElement();
              }
              d += 1;
            }
            if (b) {
              this.layerElement.insertBefore(c, b);
            } else {
              this.layerElement.appendChild(c);
            }
          }
        };
        pa.prototype.hide = function () {
          this.layerElement.style.display = "none";
        };
        pa.prototype.show = function () {
          this.layerElement.style.display = "block";
        };
        R([yb, Wa, ab, nb, Jb], db);
        db.prototype.initElement = function (c, a, b) {
          this.initFrame();
          this.initBaseData(c, a, b);
          this.initTransform(c, a, b);
          this.initRenderable();
          this.initHierarchy();
          this.initRendererElement();
          this.createContainerElements();
          this.createRenderableComponents();
          if (!!this.data.xt || !a.progressiveLoad) {
            this.buildAllItems();
          }
          this.hide();
        };
        db.prototype.prepareFrame = function (c) {
          this._mdf = false;
          this.prepareRenderableFrame(c);
          this.prepareProperties(c, this.isInRange);
          if (this.isInRange || this.data.xt) {
            if (this.tm._placeholder) {
              this.renderedFrame = c / this.data.sr;
            } else {
              c = this.tm.v;
              if (c === this.data.op) {
                c = this.data.op - 1;
              }
              this.renderedFrame = c;
            }
            c = this.elements.length;
            if (!this.completeLayers) {
              this.checkLayers(this.renderedFrame);
            }
            --c;
            for (; c >= 0; --c) {
              if (this.completeLayers || this.elements[c]) {
                this.elements[c].prepareFrame(this.renderedFrame - this.layers[c].st);
                if (this.elements[c]._mdf) {
                  this._mdf = true;
                }
              }
            }
          }
        };
        db.prototype.renderInnerContent = function () {
          var c;
          var a = this.layers.length;
          for (c = 0; c < a; c += 1) {
            if (this.completeLayers || this.elements[c]) {
              this.elements[c].renderFrame();
            }
          }
        };
        db.prototype.setElements = function (c) {
          this.elements = c;
        };
        db.prototype.getElements = function () {
          return this.elements;
        };
        db.prototype.destroyElements = function () {
          var c;
          var a = this.layers.length;
          for (c = 0; c < a; c += 1) {
            if (this.elements[c]) {
              this.elements[c].destroy();
            }
          }
        };
        db.prototype.destroy = function () {
          this.destroyElements();
          this.destroyBaseElement();
        };
        R([pa, db, ib], bb);
        bb.prototype.createComp = function (c) {
          return new bb(c, this.globalData, this);
        };
        R([pa], Ha);
        Ha.prototype.createComp = function (c) {
          return new bb(c, this.globalData, this);
        };
        Fc.svg = Ha;
        tb.registerModifier("tm", Za);
        tb.registerModifier("pb", vc);
        tb.registerModifier("rp", za);
        tb.registerModifier("rd", Ra);
        tb.registerModifier("zz", hb);
        tb.registerModifier("op", hc);
        return ka;
      });
    }
  }).call(globalThis);
}).call(this);