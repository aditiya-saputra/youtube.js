'use strict';

var r;
var aa = typeof Object.create == "function" ? Object.create : function (a) {
  function b() {}
  b.prototype = a;
  return new b();
};
var ca = typeof Object.defineProperties == "function" ? Object.defineProperty : function (a, b, c) {
  if (a == Array.prototype || a == Object.prototype) {
    return a;
  }
  a[b] = c.value;
  return a;
};
function da(a) {
  a = [typeof globalThis == "object" && globalThis, a, typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) {
      return c;
    }
  }
  throw Error("Cannot find global object");
}
var ea = da(this);
function t(a, b) {
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
        ca(c, a, {
          configurable: true,
          writable: true,
          value: b
        });
      }
    }
  }
}
var fa;
if (typeof Object.setPrototypeOf == "function") {
  fa = Object.setPrototypeOf;
} else {
  var ha;
  a: {
    var ia = {
      a: true
    };
    var ja = {};
    try {
      ja.__proto__ = ia;
      ha = ja.a;
      break a;
    } catch (a) {}
    ha = false;
  }
  fa = ha ? function (a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) {
      throw new TypeError(a + " is not extensible");
    }
    return a;
  } : null;
}
var ka = fa;
function u(a, b) {
  a.prototype = aa(b.prototype);
  a.prototype.constructor = a;
  if (ka) {
    ka(a, b);
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
  a.Da = b.prototype;
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
function v(a) {
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
function w(a) {
  if (!(a instanceof Array)) {
    a = v(a);
    for (var b, c = []; !(b = a.next()).done;) {
      c.push(b.value);
    }
    a = c;
  }
  return a;
}
function A(a, b) {
  var c;
  if (b && !b.done && (c = a.return)) {
    c.call(a);
  }
}
function ma(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
var na = typeof Object.assign == "function" ? Object.assign : function (a, b) {
  if (a == null) {
    throw new TypeError("No nullish arg");
  }
  a = Object(a);
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (d) {
      for (var e in d) {
        if (ma(d, e)) {
          a[e] = d[e];
        }
      }
    }
  }
  return a;
};
function ra(a) {
  if (!(a instanceof Object)) {
    throw new TypeError("Iterator result " + a + " is not an object");
  }
}
function B() {
  this.ga = false;
  this.A = null;
  this.j = undefined;
  this.i = 1;
  this.C = this.S = 0;
  this.Ea = this.m = null;
}
function sa(a) {
  if (a.ga) {
    throw new TypeError("Generator is already running");
  }
  a.ga = true;
}
B.prototype.qa = function (a) {
  this.j = a;
};
function ta(a, b) {
  a.m = {
    uc: b,
    Ec: true
  };
  a.i = a.S || a.C;
}
B.prototype.getNextAddressJsc = function () {
  return this.i;
};
B.prototype.getYieldResultJsc = function () {
  return this.j;
};
B.prototype.return = function (a) {
  this.m = {
    return: a
  };
  this.i = this.C;
};
B.prototype.return = B.prototype.return;
B.prototype.Mb = function (a) {
  this.m = {
    v: a
  };
  if (this.C < a) {
    this.i = a;
    this.m = null;
  } else {
    this.i = this.C;
  }
};
B.prototype.jumpThroughFinallyBlocks = B.prototype.Mb;
B.prototype.h = function (a, b) {
  this.i = b;
  return {
    value: a
  };
};
B.prototype.yield = B.prototype.h;
B.prototype.Nb = function (a, b) {
  a = v(a);
  var c = a.next();
  ra(c);
  if (c.done) {
    this.j = c.value;
    this.i = b;
  } else {
    this.A = a;
    return this.h(c.value, b);
  }
};
B.prototype.yieldAll = B.prototype.Nb;
B.prototype.v = function (a) {
  this.i = a;
};
B.prototype.jumpTo = B.prototype.v;
B.prototype.u = function () {
  this.i = 0;
};
B.prototype.jumpToEnd = B.prototype.u;
B.prototype.P = function (a, b) {
  this.S = a;
  if (b != undefined) {
    this.C = b;
  }
};
B.prototype.setCatchFinallyBlocks = B.prototype.P;
B.prototype.ub = function (a) {
  this.S = 0;
  this.C = a || 0;
};
B.prototype.setFinallyBlock = B.prototype.ub;
B.prototype.na = function (a, b) {
  this.i = a;
  this.S = b || 0;
};
B.prototype.leaveTryBlock = B.prototype.na;
B.prototype.N = function (a) {
  this.S = a || 0;
  a = this.m.uc;
  this.m = null;
  return a;
};
B.prototype.enterCatchBlock = B.prototype.N;
B.prototype.ra = function (a, b, c) {
  if (c) {
    this.Ea[c] = this.m;
  } else {
    this.Ea = [this.m];
  }
  this.S = a || 0;
  this.C = b || 0;
  this.m = null;
};
B.prototype.enterFinallyBlock = B.prototype.ra;
B.prototype.Va = function (a, b) {
  b = this.Ea.splice(b || 0)[0];
  if (b = this.m = this.m || b) {
    if (b.Ec) {
      this.i = this.S || this.C;
    } else if (b.v != undefined && this.C < b.v) {
      this.i = b.v;
      this.m = null;
    } else {
      this.i = this.C;
    }
  } else {
    this.i = a;
  }
};
B.prototype.leaveFinallyBlock = B.prototype.Va;
B.prototype.Lb = function (a) {
  return new ua(a);
};
B.prototype.forIn = B.prototype.Lb;
function ua(a) {
  this.j = a;
  this.h = [];
  for (var b in a) {
    this.h.push(b);
  }
  this.h.reverse();
}
ua.prototype.i = function () {
  while (this.h.length > 0) {
    var a = this.h.pop();
    if (a in this.j) {
      return a;
    }
  }
  return null;
};
ua.prototype.getNext = ua.prototype.i;
function wa(a) {
  this.h = new B();
  this.i = a;
}
function xa(a, b) {
  sa(a.h);
  var c = a.h.A;
  if (c) {
    return ya(a, "return" in c ? c.return : function (d) {
      return {
        value: d,
        done: true
      };
    }, b, a.h.return);
  }
  a.h.return(b);
  return Aa(a);
}
function ya(a, b, c, d) {
  try {
    var e = b.call(a.h.A, c);
    ra(e);
    if (!e.done) {
      a.h.ga = false;
      return e;
    }
    var f = e.value;
  } catch (g) {
    a.h.A = null;
    ta(a.h, g);
    return Aa(a);
  }
  a.h.A = null;
  d.call(a.h, f);
  return Aa(a);
}
function Aa(a) {
  while (a.h.i) {
    try {
      var b = a.i(a.h);
      if (b) {
        a.h.ga = false;
        return {
          value: b.value,
          done: false
        };
      }
    } catch (c) {
      a.h.j = undefined;
      ta(a.h, c);
    }
  }
  a.h.ga = false;
  if (a.h.m) {
    b = a.h.m;
    a.h.m = null;
    if (b.Ec) {
      throw b.uc;
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
function Ba(a) {
  this.next = function (b) {
    sa(a.h);
    if (a.h.A) {
      b = ya(a, a.h.A.next, b, a.h.qa);
    } else {
      a.h.qa(b);
      b = Aa(a);
    }
    return b;
  };
  this.throw = function (b) {
    sa(a.h);
    if (a.h.A) {
      var c = a.h.A.throw;
      if (c) {
        var d = ya(a, c, b, a.h.qa);
      } else {
        b = a.h.A;
        a.h.A = null;
        try {
          if (b.return) {
            d = b.return();
            ra(d);
          }
          ta(a.h, new TypeError("The iterator does not provide a 'throw' method."));
        } catch (e) {
          ta(a.h, e);
        }
        d = Aa(a);
      }
    } else {
      ta(a.h, b);
      d = Aa(a);
    }
    return d;
  };
  this.return = function (b) {
    return xa(a, b);
  };
  this[Symbol.iterator] = function () {
    return this;
  };
}
function Ca(a) {
  function b(d) {
    return a.next(d);
  }
  function c(d) {
    return a.throw(d);
  }
  return new Promise(function (d, e) {
    function f(g) {
      if (g.done) {
        d(g.value);
      } else {
        Promise.resolve(g.value).then(b, c).then(f, e);
      }
    }
    f(a.next());
  });
}
function C(a) {
  return Ca(new Ba(new wa(a)));
}
function Da() {
  var a = Number(this);
  var b = [];
  for (var c = a; c < arguments.length; c++) {
    b[c - a] = arguments[c];
  }
  return b;
}
t("globalThis", function (a) {
  return a || ea;
});
t("Reflect.setPrototypeOf", function (a) {
  if (a) {
    return a;
  } else if (ka) {
    return function (b, c) {
      try {
        ka(b, c);
        return true;
      } catch (d) {
        return false;
      }
    };
  } else {
    return null;
  }
});
t("Symbol", function (a) {
  function b(f) {
    if (this instanceof b) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new c(d + (f || "") + "_" + e++, f);
  }
  function c(f, g) {
    this.h = f;
    ca(this, "description", {
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
t("Symbol.iterator", function (a) {
  if (a) {
    return a;
  }
  a = Symbol("Symbol.iterator");
  ca(Array.prototype, a, {
    configurable: true,
    writable: true,
    value: function () {
      return Ea(la(this));
    }
  });
  return a;
});
function Ea(a) {
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
t("Promise", function (a) {
  function b(g) {
    this.h = 0;
    this.j = undefined;
    this.i = [];
    this.C = false;
    var h = this.m();
    try {
      g(h.resolve, h.reject);
    } catch (k) {
      h.reject(k);
    }
  }
  function c() {
    this.h = null;
  }
  function d(g) {
    if (g instanceof b) {
      return g;
    } else {
      return new b(function (h) {
        h(g);
      });
    }
  }
  if (a) {
    return a;
  }
  c.prototype.i = function (g) {
    if (this.h == null) {
      this.h = [];
      var h = this;
      this.j(function () {
        h.u();
      });
    }
    this.h.push(g);
  };
  var e = ea.setTimeout;
  c.prototype.j = function (g) {
    e(g, 0);
  };
  c.prototype.u = function () {
    while (this.h && this.h.length) {
      var g = this.h;
      this.h = [];
      for (var h = 0; h < g.length; ++h) {
        var k = g[h];
        g[h] = null;
        try {
          k();
        } catch (l) {
          this.m(l);
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
    function g(l) {
      return function (m) {
        if (!k) {
          k = true;
          l.call(h, m);
        }
      };
    }
    var h = this;
    var k = false;
    return {
      resolve: g(this.na),
      reject: g(this.u)
    };
  };
  b.prototype.na = function (g) {
    if (g === this) {
      this.u(new TypeError("A Promise cannot resolve to itself"));
    } else if (g instanceof b) {
      this.ra(g);
    } else {
      a: switch (typeof g) {
        case "object":
          var h = g != null;
          break a;
        case "function":
          h = true;
          break a;
        default:
          h = false;
      }
      if (h) {
        this.ga(g);
      } else {
        this.A(g);
      }
    }
  };
  b.prototype.ga = function (g) {
    var h = undefined;
    try {
      h = g.then;
    } catch (k) {
      this.u(k);
      return;
    }
    if (typeof h == "function") {
      this.Ea(h, g);
    } else {
      this.A(g);
    }
  };
  b.prototype.u = function (g) {
    this.N(2, g);
  };
  b.prototype.A = function (g) {
    this.N(1, g);
  };
  b.prototype.N = function (g, h) {
    if (this.h != 0) {
      throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
    }
    this.h = g;
    this.j = h;
    if (this.h === 2) {
      this.qa();
    }
    this.P();
  };
  b.prototype.qa = function () {
    var g = this;
    e(function () {
      if (g.S()) {
        var h = ea.console;
        if (typeof h !== "undefined") {
          h.error(g.j);
        }
      }
    }, 1);
  };
  b.prototype.S = function () {
    if (this.C) {
      return false;
    }
    var g = ea.CustomEvent;
    var h = ea.Event;
    var k = ea.dispatchEvent;
    if (typeof k === "undefined") {
      return true;
    }
    if (typeof g === "function") {
      g = new g("unhandledrejection", {
        cancelable: true
      });
    } else if (typeof h === "function") {
      g = new h("unhandledrejection", {
        cancelable: true
      });
    } else {
      g = ea.document.createEvent("CustomEvent");
      g.initCustomEvent("unhandledrejection", false, true, g);
    }
    g.promise = this;
    g.reason = this.j;
    return k(g);
  };
  b.prototype.P = function () {
    if (this.i != null) {
      for (var g = 0; g < this.i.length; ++g) {
        f.i(this.i[g]);
      }
      this.i = null;
    }
  };
  var f = new c();
  b.prototype.ra = function (g) {
    var h = this.m();
    g.zb(h.resolve, h.reject);
  };
  b.prototype.Ea = function (g, h) {
    var k = this.m();
    try {
      g.call(h, k.resolve, k.reject);
    } catch (l) {
      k.reject(l);
    }
  };
  b.prototype.then = function (g, h) {
    function k(q, p) {
      if (typeof q == "function") {
        return function (x) {
          try {
            l(q(x));
          } catch (y) {
            m(y);
          }
        };
      } else {
        return p;
      }
    }
    var l;
    var m;
    var n = new b(function (q, p) {
      l = q;
      m = p;
    });
    this.zb(k(g, l), k(h, m));
    return n;
  };
  b.prototype.catch = function (g) {
    return this.then(undefined, g);
  };
  b.prototype.zb = function (g, h) {
    function k() {
      switch (l.h) {
        case 1:
          g(l.j);
          break;
        case 2:
          h(l.j);
          break;
        default:
          throw Error("Unexpected state: " + l.h);
      }
    }
    var l = this;
    if (this.i == null) {
      f.i(k);
    } else {
      this.i.push(k);
    }
    this.C = true;
  };
  b.resolve = d;
  b.reject = function (g) {
    return new b(function (h, k) {
      k(g);
    });
  };
  b.race = function (g) {
    return new b(function (h, k) {
      for (var l = v(g), m = l.next(); !m.done; m = l.next()) {
        d(m.value).zb(h, k);
      }
    });
  };
  b.all = function (g) {
    var h = v(g);
    var k = h.next();
    if (k.done) {
      return d([]);
    } else {
      return new b(function (l, m) {
        function n(x) {
          return function (y) {
            q[x] = y;
            p--;
            if (p == 0) {
              l(q);
            }
          };
        }
        var q = [];
        var p = 0;
        do {
          q.push(undefined);
          p++;
          d(k.value).zb(n(q.length - 1), m);
          k = h.next();
        } while (!k.done);
      });
    }
  };
  return b;
});
t("Object.setPrototypeOf", function (a) {
  return a || ka;
});
t("Object.assign", function (a) {
  return a || na;
});
t("Symbol.dispose", function (a) {
  if (a) {
    return a;
  } else {
    return Symbol("Symbol.dispose");
  }
});
t("WeakMap", function (a) {
  function b(k) {
    this.h = (h += Math.random() + 1).toString();
    if (k) {
      k = v(k);
      for (var l; !(l = k.next()).done;) {
        l = l.value;
        this.set(l[0], l[1]);
      }
    }
  }
  function c() {}
  function d(k) {
    var l = typeof k;
    return l === "object" && k !== null || l === "function";
  }
  function e(k) {
    if (!ma(k, g)) {
      var l = new c();
      ca(k, g, {
        value: l
      });
    }
  }
  function f(k) {
    var l = Object[k];
    if (l) {
      Object[k] = function (m) {
        if (m instanceof c) {
          return m;
        }
        if (Object.isExtensible(m)) {
          e(m);
        }
        return l(m);
      };
    }
  }
  if (function () {
    if (!a || !Object.seal) {
      return false;
    }
    try {
      var k = Object.seal({});
      var l = Object.seal({});
      var m = new a([[k, 2], [l, 3]]);
      if (m.get(k) != 2 || m.get(l) != 3) {
        return false;
      }
      m.delete(k);
      m.set(l, 4);
      return !m.has(k) && m.get(l) == 4;
    } catch (n) {
      return false;
    }
  }()) {
    return a;
  }
  var g = "$jscomp_hidden_" + Math.random();
  f("freeze");
  f("preventExtensions");
  f("seal");
  var h = 0;
  b.prototype.set = function (k, l) {
    if (!d(k)) {
      throw Error("Invalid WeakMap key");
    }
    e(k);
    if (!ma(k, g)) {
      throw Error("WeakMap key fail: " + k);
    }
    k[g][this.h] = l;
    return this;
  };
  b.prototype.get = function (k) {
    if (d(k) && ma(k, g)) {
      return k[g][this.h];
    } else {
      return undefined;
    }
  };
  b.prototype.has = function (k) {
    return d(k) && ma(k, g) && ma(k[g], this.h);
  };
  b.prototype.delete = function (k) {
    if (d(k) && ma(k, g) && ma(k[g], this.h)) {
      return delete k[g][this.h];
    } else {
      return false;
    }
  };
  return b;
});
t("Map", function (a) {
  function b() {
    var h = {};
    return h.previous = h.next = h.head = h;
  }
  function c(h, k) {
    var l = h[1];
    return Ea(function () {
      if (l) {
        while (l.head != h[1]) {
          l = l.previous;
        }
        while (l.next != l.head) {
          l = l.next;
          return {
            done: false,
            value: k(l)
          };
        }
        l = null;
      }
      return {
        done: true,
        value: undefined
      };
    });
  }
  function d(h, k) {
    var l = k && typeof k;
    if (l == "object" || l == "function") {
      if (f.has(k)) {
        l = f.get(k);
      } else {
        l = "" + ++g;
        f.set(k, l);
      }
    } else {
      l = "p_" + k;
    }
    var m = h[0][l];
    if (m && ma(h[0], l)) {
      for (h = 0; h < m.length; h++) {
        var n = m[h];
        if (k !== k && n.key !== n.key || k === n.key) {
          return {
            id: l,
            list: m,
            index: h,
            entry: n
          };
        }
      }
    }
    return {
      id: l,
      list: m,
      index: -1,
      entry: undefined
    };
  }
  function e(h) {
    this[0] = {};
    this[1] = b();
    this.size = 0;
    if (h) {
      h = v(h);
      for (var k; !(k = h.next()).done;) {
        k = k.value;
        this.set(k[0], k[1]);
      }
    }
  }
  if (function () {
    if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") {
      return false;
    }
    try {
      var h = Object.seal({
        x: 4
      });
      var k = new a(v([[h, "s"]]));
      if (k.get(h) != "s" || k.size != 1 || k.get({
        x: 4
      }) || k.set({
        x: 4
      }, "t") != k || k.size != 2) {
        return false;
      }
      var l = k.entries();
      var m = l.next();
      if (m.done || m.value[0] != h || m.value[1] != "s") {
        return false;
      }
      m = l.next();
      return !m.done && m.value[0].x == 4 && m.value[1] == "t" && !!l.next().done;
    } catch (n) {
      return false;
    }
  }()) {
    return a;
  }
  var f = new WeakMap();
  e.prototype.set = function (h, k) {
    h = h === 0 ? 0 : h;
    var l = d(this, h);
    l.list ||= this[0][l.id] = [];
    if (l.entry) {
      l.entry.value = k;
    } else {
      l.entry = {
        next: this[1],
        previous: this[1].previous,
        head: this[1],
        key: h,
        value: k
      };
      l.list.push(l.entry);
      this[1].previous.next = l.entry;
      this[1].previous = l.entry;
      this.size++;
    }
    return this;
  };
  e.prototype.delete = function (h) {
    h = d(this, h);
    if (h.entry && h.list) {
      h.list.splice(h.index, 1);
      if (!h.list.length) {
        delete this[0][h.id];
      }
      h.entry.previous.next = h.entry.next;
      h.entry.next.previous = h.entry.previous;
      h.entry.head = null;
      this.size--;
      return true;
    } else {
      return false;
    }
  };
  e.prototype.clear = function () {
    this[0] = {};
    this[1] = this[1].previous = b();
    this.size = 0;
  };
  e.prototype.has = function (h) {
    return !!d(this, h).entry;
  };
  e.prototype.get = function (h) {
    return (h = d(this, h).entry) && h.value;
  };
  e.prototype.entries = function () {
    return c(this, function (h) {
      return [h.key, h.value];
    });
  };
  e.prototype.keys = function () {
    return c(this, function (h) {
      return h.key;
    });
  };
  e.prototype.values = function () {
    return c(this, function (h) {
      return h.value;
    });
  };
  e.prototype.forEach = function (h, k) {
    for (var l = this.entries(), m; !(m = l.next()).done;) {
      m = m.value;
      h.call(k, m[1], m[0], this);
    }
  };
  e.prototype[Symbol.iterator] = e.prototype.entries;
  var g = 0;
  return e;
});
t("Set", function (a) {
  function b(c) {
    this.h = new Map();
    if (c) {
      c = v(c);
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
      var d = new a(v([c]));
      if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
        x: 4
      }) != d || d.size != 2) {
        return false;
      }
      var e = d.entries();
      var f = e.next();
      if (f.done || f.value[0] != c || f.value[1] != c) {
        return false;
      }
      f = e.next();
      if (f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0]) {
        return false;
      } else {
        return e.next().done;
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
    var e = this;
    this.h.forEach(function (f) {
      return c.call(d, f, f, e);
    });
  };
  return b;
});
function Fa(a, b) {
  if (a instanceof String) {
    a += "";
  }
  var c = 0;
  var d = false;
  return Ea(function () {
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
t("Array.prototype.entries", function (a) {
  if (a) {
    return a;
  } else {
    return function () {
      return Fa(this, function (b, c) {
        return [b, c];
      });
    };
  }
});
t("Array.prototype.keys", function (a) {
  if (a) {
    return a;
  } else {
    return function () {
      return Fa(this, function (b) {
        return b;
      });
    };
  }
});
function Ga(a, b, c) {
  if (a == null) {
    throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
  }
  if (b instanceof RegExp) {
    throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
  }
  return a + "";
}
t("String.prototype.startsWith", function (a) {
  if (a) {
    return a;
  } else {
    return function (b, c) {
      var d = Ga(this, b, "startsWith");
      b += "";
      var e = d.length;
      var f = b.length;
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var g = 0; g < f && c < e;) {
        if (d[c++] != b[g++]) {
          return false;
        }
      }
      return g >= f;
    };
  }
});
t("String.prototype.endsWith", function (a) {
  if (a) {
    return a;
  } else {
    return function (b, c) {
      var d = Ga(this, b, "endsWith");
      b += "";
      if (c === undefined) {
        c = d.length;
      }
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var e = b.length; e > 0 && c > 0;) {
        if (d[--c] != b[--e]) {
          return false;
        }
      }
      return e <= 0;
    };
  }
});
t("Number.isFinite", function (a) {
  if (a) {
    return a;
  } else {
    return function (b) {
      if (typeof b !== "number") {
        return false;
      } else {
        return !isNaN(b) && b !== Infinity && b !== -Infinity;
      }
    };
  }
});
t("Array.prototype.find", function (a) {
  if (a) {
    return a;
  } else {
    return function (b, c) {
      a: {
        var d = this;
        if (d instanceof String) {
          d = String(d);
        }
        for (var e = d.length, f = 0; f < e; f++) {
          var g = d[f];
          if (b.call(c, g, f, d)) {
            b = g;
            break a;
          }
        }
        b = undefined;
      }
      return b;
    };
  }
});
t("Object.values", function (a) {
  if (a) {
    return a;
  } else {
    return function (b) {
      var c = [];
      var d;
      for (d in b) {
        if (ma(b, d)) {
          c.push(b[d]);
        }
      }
      return c;
    };
  }
});
t("Object.is", function (a) {
  if (a) {
    return a;
  } else {
    return function (b, c) {
      if (b === c) {
        return b !== 0 || 1 / b === 1 / c;
      } else {
        return b !== b && c !== c;
      }
    };
  }
});
t("Array.prototype.includes", function (a) {
  if (a) {
    return a;
  } else {
    return function (b, c) {
      var d = this;
      if (d instanceof String) {
        d = String(d);
      }
      var e = d.length;
      c = c || 0;
      for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
        var f = d[c];
        if (f === b || Object.is(f, b)) {
          return true;
        }
      }
      return false;
    };
  }
});
t("String.prototype.includes", function (a) {
  if (a) {
    return a;
  } else {
    return function (b, c) {
      return Ga(this, b, "includes").indexOf(b, c || 0) !== -1;
    };
  }
});
t("Array.from", function (a) {
  if (a) {
    return a;
  } else {
    return function (b, c, d) {
      c = c ?? function (h) {
        return h;
      };
      var e = [];
      var f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
      if (typeof f == "function") {
        b = f.call(b);
        var g = 0;
        while (!(f = b.next()).done) {
          e.push(c.call(d, f.value, g++));
        }
      } else {
        f = b.length;
        g = 0;
        for (; g < f; g++) {
          e.push(c.call(d, b[g], g));
        }
      }
      return e;
    };
  }
});
t("Object.entries", function (a) {
  if (a) {
    return a;
  } else {
    return function (b) {
      var c = [];
      var d;
      for (d in b) {
        if (ma(b, d)) {
          c.push([d, b[d]]);
        }
      }
      return c;
    };
  }
});
t("Number.MAX_SAFE_INTEGER", function () {
  return 9007199254740991;
});
t("Number.MIN_SAFE_INTEGER", function () {
  return -9007199254740991;
});
t("Number.isInteger", function (a) {
  if (a) {
    return a;
  } else {
    return function (b) {
      if (Number.isFinite(b)) {
        return b === Math.floor(b);
      } else {
        return false;
      }
    };
  }
});
t("Number.isSafeInteger", function (a) {
  if (a) {
    return a;
  } else {
    return function (b) {
      return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER;
    };
  }
});
t("Math.trunc", function (a) {
  if (a) {
    return a;
  } else {
    return function (b) {
      b = Number(b);
      if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) {
        return b;
      }
      var c = Math.floor(Math.abs(b));
      if (b < 0) {
        return -c;
      } else {
        return c;
      }
    };
  }
});
t("Number.isNaN", function (a) {
  if (a) {
    return a;
  } else {
    return function (b) {
      return typeof b === "number" && isNaN(b);
    };
  }
});
t("Array.prototype.values", function (a) {
  if (a) {
    return a;
  } else {
    return function () {
      return Fa(this, function (b, c) {
        return c;
      });
    };
  }
}); /*
    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
    */
var E = this || self;
function F(a, b) {
  a = a.split(".");
  b = b || E;
  for (var c = 0; c < a.length; c++) {
    b = b[a[c]];
    if (b == null) {
      return null;
    }
  }
  return b;
}
function Ha(a) {
  var b = typeof a;
  b = b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
  return b == "array" || b == "object" && typeof a.length == "number";
}
function Ia(a) {
  var b = typeof a;
  return b == "object" && a != null || b == "function";
}
function Ja(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function Ka(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }
  return function () {
    return a.apply(b, arguments);
  };
}
function La(a, b, c) {
  La = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ja : Ka;
  return La.apply(null, arguments);
}
function Ma() {
  return Date.now();
}
function G(a, b) {
  a = a.split(".");
  var c = E;
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
function Na(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.Da = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.ee = function (d, e, f) {
    var g = Array(arguments.length - 2);
    for (var h = 2; h < arguments.length; h++) {
      g[h - 2] = arguments[h];
    }
    return b.prototype[e].apply(d, g);
  };
}
;
function Oa(a) {
  var b = Da.apply(1, arguments).filter(Boolean).join("&");
  if (!b) {
    return a;
  }
  var c = a.match(/[?&]adurl=/);
  if (c) {
    return a.slice(0, c.index + 1) + b + "&" + a.slice(c.index + 1);
  } else {
    return a + (a.indexOf("?") < 0 ? "?" : "&") + b;
  }
}
function Pa(a, b) {
  if (b) {
    return "&" + a + "=" + encodeURIComponent(b);
  } else {
    return "";
  }
}
function Qa(a) {
  var b = a.url;
  a = a.ye;
  this.i = b;
  this.m = a;
  this.j = new Date().getTime() - 1704067200000;
  this.h = {};
  for (var c = /[?&]([^&=]+)=([^&]*)/g; a = c.exec(b);) {
    this.h[a[1]] = a[2];
  }
}
function Ra(a) {
  a = a.m;
  if (!a) {
    return "";
  }
  var b = Pa("uap", a.platform) + Pa("uapv", a.platformVersion) + Pa("uafv", a.uaFullVersion) + Pa("uaa", a.architecture) + Pa("uam", a.model) + Pa("uab", a.bitness);
  if (a.fullVersionList) {
    b += "&uafvl=" + encodeURIComponent(a.fullVersionList.map(function (c) {
      return encodeURIComponent(c.brand) + ";" + encodeURIComponent(c.version);
    }).join("|"));
  }
  if (a.wow64 != null) {
    b += "&uaw=" + Number(a.wow64);
  }
  return b.slice(1);
}
;
function Sa(a, b) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Sa);
  } else {
    var c = Error().stack;
    if (c) {
      this.stack = c;
    }
  }
  if (a) {
    this.message = String(a);
  }
  if (b !== undefined) {
    this.cause = b;
  }
}
Na(Sa, Error);
Sa.prototype.name = "CustomError";
var Ta = String.prototype.trim ? function (a) {
  return a.trim();
} : function (a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
}; /*
   Copyright Google LLC
   SPDX-License-Identifier: Apache-2.0
   */
var Ua = globalThis.trustedTypes;
var Va;
function Wa() {
  var a = null;
  if (!Ua) {
    return a;
  }
  try {
    function b(c) {
      return c;
    }
    a = Ua.createPolicy("goog#html", {
      createHTML: b,
      createScript: b,
      createScriptURL: b
    });
  } catch (c) {}
  return a;
}
function Xa() {
  if (Va === undefined) {
    Va = Wa();
  }
  return Va;
}
;
function Ya(a) {
  this.h = a;
}
Ya.prototype.toString = function () {
  return this.h + "";
};
function Za(a, b) {
  throw Error(b === undefined ? "unexpected value " + a + "!" : b);
}
;
function $a(a) {
  this.h = a;
}
$a.prototype.toString = function () {
  return this.h + "";
};
var ab = Array.prototype.indexOf ? function (a, b) {
  return Array.prototype.indexOf.call(a, b, undefined);
} : function (a, b) {
  if (typeof a === "string") {
    if (typeof b !== "string" || b.length != 1) {
      return -1;
    } else {
      return a.indexOf(b, 0);
    }
  }
  for (var c = 0; c < a.length; c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return -1;
};
var bb = Array.prototype.forEach ? function (a, b) {
  Array.prototype.forEach.call(a, b, undefined);
} : function (a, b) {
  for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++) {
    if (e in d) {
      b.call(undefined, d[e], e, a);
    }
  }
};
function cb(a, b) {
  b = ab(a, b);
  var c;
  if (c = b >= 0) {
    Array.prototype.splice.call(a, b, 1);
  }
  return c;
}
function db(a, b) {
  for (var c = 1; c < arguments.length; c++) {
    var d = arguments[c];
    if (Ha(d)) {
      var e = a.length || 0;
      var f = d.length || 0;
      a.length = e + f;
      for (var g = 0; g < f; g++) {
        a[e + g] = d[g];
      }
    } else {
      a.push(d);
    }
  }
}
;
function eb(a, b) {
  a.__closure__error__context__984382 ||= {};
  a.__closure__error__context__984382.severity = b;
}
;
function gb(a) {
  var b = F("window.location.href");
  if (a == null) {
    a = "Unknown Error of type \"null/undefined\"";
  }
  if (typeof a === "string") {
    return {
      message: a,
      name: "Unknown error",
      lineNumber: "Not available",
      fileName: b,
      stack: "Not available"
    };
  }
  var c = false;
  try {
    var d = a.lineNumber || a.line || "Not available";
  } catch (g) {
    d = "Not available";
    c = true;
  }
  try {
    var e = a.fileName || a.filename || a.sourceURL || E.$googDebugFname || b;
  } catch (g) {
    e = "Not available";
    c = true;
  }
  b = hb(a);
  if (!!c || !a.lineNumber || !a.fileName || !a.stack || !a.message || !a.name) {
    c = a.message;
    if (c == null) {
      if (a.constructor && a.constructor instanceof Function) {
        if (a.constructor.name) {
          c = a.constructor.name;
        } else {
          c = a.constructor;
          if (ib[c]) {
            c = ib[c];
          } else {
            c = String(c);
            if (!ib[c]) {
              var f = /function\s+([^\(]+)/m.exec(c);
              ib[c] = f ? f[1] : "[Anonymous]";
            }
            c = ib[c];
          }
        }
        c = "Unknown Error of type \"" + c + "\"";
      } else {
        c = "Unknown Error of unknown type";
      }
      if (typeof a.toString === "function" && Object.prototype.toString !== a.toString) {
        c += ": " + a.toString();
      }
    }
    return {
      message: c,
      name: a.name || "UnknownError",
      lineNumber: d,
      fileName: e,
      stack: b || "Not available"
    };
  }
  return {
    message: a.message,
    name: a.name,
    lineNumber: a.lineNumber,
    fileName: a.fileName,
    stack: b
  };
}
function hb(a, b) {
  b ||= {};
  b[jb(a)] = true;
  var c = a.stack || "";
  var d = a.cause;
  if (d && !b[jb(d)]) {
    c += "\nCaused by: ";
    if (!d.stack || d.stack.indexOf(d.toString()) != 0) {
      c += typeof d === "string" ? d : d.message + "\n";
    }
    c += hb(d, b);
  }
  a = a.errors;
  if (Array.isArray(a)) {
    d = 1;
    var e;
    for (e = 0; e < a.length && !(d > 4); e++) {
      if (!b[jb(a[e])]) {
        c += "\nInner error " + d++ + ": ";
        if (!a[e].stack || a[e].stack.indexOf(a[e].toString()) != 0) {
          c += typeof a[e] === "string" ? a[e] : a[e].message + "\n";
        }
        c += hb(a[e], b);
      }
    }
    if (e < a.length) {
      c += "\n... " + (a.length - e) + " more inner errors";
    }
  }
  return c;
}
function jb(a) {
  var b = "";
  if (typeof a.toString === "function") {
    b = "" + a;
  }
  return b + a.stack;
}
var ib = {};
var kb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
function lb(a) {
  if (a) {
    return decodeURI(a);
  } else {
    return a;
  }
}
function mb(a) {
  return lb(a.match(kb)[3] || null);
}
function nb(a, b, c) {
  if (Array.isArray(b)) {
    for (var d = 0; d < b.length; d++) {
      nb(a, String(b[d]), c);
    }
  } else if (b != null) {
    c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))));
  }
}
function ob(a) {
  var b = [];
  var c;
  for (c in a) {
    nb(c, a[c], b);
  }
  return b.join("&");
}
var pb = /#|$/;
function qb(a) {
  E.setTimeout(function () {
    throw a;
  }, 0);
}
;
var rb;
var sb = F("CLOSURE_FLAGS");
var tb = sb && sb[748402147];
rb = tb ?? true;
function ub() {
  var a = E.navigator;
  if (a &&= a.userAgent) {
    return a;
  } else {
    return "";
  }
}
function I(a) {
  return ub().indexOf(a) != -1;
}
;
function wb() {
  return I("iPhone") && !I("iPod") && !I("iPad");
}
;
var xb = I("Edge");
var yb = wb() || I("iPod");
var zb = I("iPad");
var Ab = I("Safari") && (!I("Chrome") && !I("CriOS") || !!I("Edge")) && !I("Silk") && !I("Coast") && !I("Opera") && !I("Edge") && !I("Edg/") && !I("OPR") && !I("Firefox") && !I("FxiOS") && !I("Silk") && !I("Android") && !wb() && !I("iPad") && !I("iPod");
var Bb = {};
var Cb = null;
var Db = undefined;
function Eb(a) {
  a = Error(a);
  eb(a, "warning");
  return a;
}
;
function Fb() {
  return typeof BigInt === "function";
}
;
var Hb = typeof Symbol === "function" && typeof Symbol() === "symbol";
function Ib(a, b, c) {
  if (typeof Symbol === "function" && typeof Symbol() === "symbol") {
    if ((c === undefined ? 0 : c) && Symbol.for && a) {
      return Symbol.for(a);
    } else if (a != null) {
      return Symbol(a);
    } else {
      return Symbol();
    }
  } else {
    return b;
  }
}
var Jb = Ib("jas", undefined, true);
var Kb = Ib(undefined, "1oa");
var Mb = Ib(undefined, "0actk");
var Nb = Ib("m_m", "ne", true);
var Ob = {
  sd: {
    value: 0,
    configurable: true,
    writable: true,
    enumerable: false
  }
};
var Pb = Object.defineProperties;
var J = Hb ? Jb : "sd";
var Qb;
var Rb = [];
Sb(Rb, 7);
Qb = Object.freeze(Rb);
function Tb(a, b) {
  if (!Hb && !(J in a)) {
    Pb(a, Ob);
  }
  a[J] |= b;
}
function Sb(a, b) {
  if (!Hb && !(J in a)) {
    Pb(a, Ob);
  }
  a[J] = b;
}
;
var Ub = {};
function Vb(a, b) {
  if (b === undefined) {
    return a.h !== Wb && !!((a.B[J] | 0) & 2);
  } else {
    return !!(b & 2) && a.h !== Wb;
  }
}
var Wb = {};
var Xb = {};
function Yb(a) {
  a.le = true;
  return a;
}
;
var Zb = Yb(function (a) {
  return typeof a === "number";
});
var $b = Yb(function (a) {
  return typeof a === "string";
});
var ac = Yb(function (a) {
  return typeof a === "boolean";
});
var bc = Yb(function (a) {
  return a != null && typeof a === "object" && typeof a.then === "function";
});
var cc = typeof E.BigInt === "function" && typeof E.BigInt(0) === "bigint";
function dc(a) {
  var b = a;
  if ($b(b)) {
    if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) {
      throw Error(String(b));
    }
  } else if (Zb(b) && !Number.isSafeInteger(b)) {
    throw Error(String(b));
  }
  if (cc) {
    return BigInt(a);
  } else {
    return a = ac(a) ? a ? "1" : "0" : $b(a) ? a.trim() || "0" : String(a);
  }
}
var kc = Yb(function (a) {
  if (cc) {
    return a >= ec && a <= fc;
  } else if (a[0] === "-") {
    return hc(a, ic);
  } else {
    return hc(a, jc);
  }
});
var ic = Number.MIN_SAFE_INTEGER.toString();
var ec = cc ? BigInt(Number.MIN_SAFE_INTEGER) : undefined;
var jc = Number.MAX_SAFE_INTEGER.toString();
var fc = cc ? BigInt(Number.MAX_SAFE_INTEGER) : undefined;
function hc(a, b) {
  if (a.length > b.length) {
    return false;
  }
  if (a.length < b.length || a === b) {
    return true;
  }
  for (var c = 0; c < a.length; c++) {
    var d = a[c];
    var e = b[c];
    if (d > e) {
      return false;
    }
    if (d < e) {
      return true;
    }
  }
}
;
var lc = 0;
var mc = 0;
function nc(a) {
  var b = a >>> 0;
  lc = b;
  mc = (a - b) / 4294967296 >>> 0;
}
function oc(a) {
  if (a < 0) {
    nc(0 - a);
    var b = v(pc(lc, mc));
    a = b.next().value;
    b = b.next().value;
    lc = a >>> 0;
    mc = b >>> 0;
  } else {
    nc(a);
  }
}
function sc(a, b) {
  b >>>= 0;
  a >>>= 0;
  if (b <= 2097151) {
    var c = "" + (b * 4294967296 + a);
  } else if (Fb()) {
    c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
  } else {
    c = (a >>> 24 | b << 8) & 16777215;
    b = b >> 16 & 65535;
    a = (a & 16777215) + c * 6777216 + b * 6710656;
    c += b * 8147497;
    b *= 2;
    if (a >= 10000000) {
      c += a / 10000000 >>> 0;
      a %= 10000000;
    }
    if (c >= 10000000) {
      b += c / 10000000 >>> 0;
      c %= 10000000;
    }
    c = b + tc(c) + tc(a);
  }
  return c;
}
function tc(a) {
  a = String(a);
  return "0000000".slice(a.length) + a;
}
function uc() {
  var a = lc;
  var b = mc;
  if (b & -2147483648) {
    if (Fb()) {
      a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
    } else {
      b = v(pc(a, b));
      a = b.next().value;
      b = b.next().value;
      a = "-" + sc(a, b);
    }
  } else {
    a = sc(a, b);
  }
  return a;
}
function pc(a, b) {
  b = ~b;
  if (a) {
    a = ~a + 1;
  } else {
    b += 1;
  }
  return [a, b];
}
;
var vc = typeof BigInt === "function" ? BigInt.asIntN : undefined;
var wc = Number.isSafeInteger;
var xc = Number.isFinite;
var yc = Math.trunc;
function zc(a) {
  return a.displayName || a.name || "unknown type name";
}
var Ac = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Bc(a) {
  switch (typeof a) {
    case "bigint":
      return true;
    case "number":
      return xc(a);
    case "string":
      return Ac.test(a);
    default:
      return false;
  }
}
function Cc(a) {
  if (a != null) {
    if (typeof a !== "number") {
      throw Eb("int32");
    }
    if (!xc(a)) {
      throw Eb("int32");
    }
    a |= 0;
  }
  return a;
}
function Dc(a) {
  if (a == null) {
    return a;
  }
  if (typeof a === "string" && a) {
    a = +a;
  } else if (typeof a !== "number") {
    return;
  }
  if (xc(a)) {
    return a | 0;
  } else {
    return undefined;
  }
}
function Ec(a) {
  var b = undefined;
  if (b == null) {
    b = 1024;
  }
  if (!Bc(a)) {
    throw Eb("int64");
  }
  var c = typeof a;
  switch (b) {
    case 512:
      switch (c) {
        case "string":
          return Fc(a);
        case "bigint":
          return String(vc(64, a));
        default:
          return Gc(a);
      }
    case 1024:
      switch (c) {
        case "string":
          b = yc(Number(a));
          if (wc(b)) {
            a = dc(b);
          } else {
            b = a.indexOf(".");
            if (b !== -1) {
              a = a.substring(0, b);
            }
            a = Fb() ? dc(vc(64, BigInt(a))) : dc(Hc(a));
          }
          return a;
        case "bigint":
          return dc(vc(64, a));
        default:
          return dc(wc(a) ? a : Gc(a));
      }
    case 0:
      switch (c) {
        case "string":
          return Fc(a);
        case "bigint":
          return dc(vc(64, a));
        default:
          Bc(a);
          a = yc(a);
          if (!wc(a)) {
            oc(a);
            b = lc;
            c = mc;
            if (a = c & -2147483648) {
              b = ~b + 1 >>> 0;
              c = ~c >>> 0;
              if (b == 0) {
                c = c + 1 >>> 0;
              }
            }
            var d = c * 4294967296 + (b >>> 0);
            b = Number.isSafeInteger(d) ? d : sc(b, c);
            a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b;
          }
          return a;
      }
    default:
      return Za(b, "Unknown format requested type for int64");
  }
}
function Ic(a) {
  if (a == null) {
    return a;
  } else {
    return Ec(a);
  }
}
function Hc(a) {
  var b = a.length;
  if (a[0] === "-" ? b < 20 || b === 20 && a <= "-9223372036854775808" : b < 19 || b === 19 && a <= "9223372036854775807") {
    return a;
  }
  if (a.length < 16) {
    oc(Number(a));
  } else if (Fb()) {
    a = BigInt(a);
    lc = Number(a & BigInt(4294967295)) >>> 0;
    mc = Number(a >> BigInt(32) & BigInt(4294967295));
  } else {
    b = +(a[0] === "-");
    mc = lc = 0;
    for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) {
      d = Number(a.slice(d, e));
      mc *= 1000000;
      lc = lc * 1000000 + d;
      if (lc >= 4294967296) {
        mc += Math.trunc(lc / 4294967296);
        mc >>>= 0;
        lc >>>= 0;
      }
    }
    if (b) {
      b = v(pc(lc, mc));
      a = b.next().value;
      b = b.next().value;
      lc = a;
      mc = b;
    }
  }
  return uc();
}
function Gc(a) {
  Bc(a);
  a = yc(a);
  if (wc(a)) {
    a = String(a);
  } else {
    oc(a);
    a = uc();
  }
  return a;
}
function Fc(a) {
  Bc(a);
  var b = yc(Number(a));
  if (wc(b)) {
    return String(b);
  }
  b = a.indexOf(".");
  if (b !== -1) {
    a = a.substring(0, b);
  }
  return Hc(a);
}
function Jc(a) {
  if (a != null && typeof a !== "string") {
    throw Error();
  }
  return a;
}
function Kc(a, b) {
  if (!(a instanceof b)) {
    throw Error("Expected instanceof " + zc(b) + " but got " + (a && zc(a.constructor)));
  }
  return a;
}
function Lc(a, b, c) {
  if (a != null && a[Nb] === Ub) {
    return a;
  }
  if (Array.isArray(a)) {
    var d = a[J] | 0;
    c = d | c & 32 | c & 2;
    if (c !== d) {
      Sb(a, c);
    }
    return new b(a);
  }
}
;
function Mc(a) {
  return a;
}
;
function Nc(a, b, c, d) {
  var e = d !== undefined;
  d = !!d;
  var f = [];
  var g = a.length;
  var h = 4294967295;
  var k = false;
  var l = !!(b & 64);
  var m = l ? b & 128 ? 0 : -1 : undefined;
  if (!(b & 1)) {
    var n = g && a[g - 1];
    if (n != null && typeof n === "object" && n.constructor === Object) {
      g--;
      h = g;
    } else {
      n = undefined;
    }
    if (l && !(b & 128) && !e) {
      k = true;
      var q;
      h = ((q = Oc) != null ? q : Mc)(h - m, m, a, n, undefined) + m;
    }
  }
  b = undefined;
  for (e = 0; e < g; e++) {
    q = a[e];
    if (q != null && (q = c(q, d)) != null) {
      if (l && e >= h) {
        var p = e - m;
        var x = undefined;
        ((x = b) != null ? x : b = {})[p] = q;
      } else {
        f[e] = q;
      }
    }
  }
  if (n) {
    for (var y in n) {
      a = n[y];
      if (a != null && (a = c(a, d)) != null) {
        g = +y;
        e = undefined;
        if (l && !Number.isNaN(g) && (e = g + m) < h) {
          f[e] = a;
        } else {
          g = undefined;
          ((g = b) != null ? g : b = {})[y] = a;
        }
      }
    }
  }
  if (b) {
    if (k) {
      f.push(b);
    } else {
      f[h] = b;
    }
  }
  return f;
}
function Pc(a) {
  switch (typeof a) {
    case "number":
      if (Number.isFinite(a)) {
        return a;
      } else {
        return "" + a;
      }
    case "bigint":
      if (kc(a)) {
        return Number(a);
      } else {
        return "" + a;
      }
    case "boolean":
      if (a) {
        return 1;
      } else {
        return 0;
      }
    case "object":
      if (Array.isArray(a)) {
        var b = a[J] | 0;
        if (a.length === 0 && b & 1) {
          return undefined;
        } else {
          return Nc(a, b, Pc);
        }
      }
      if (a != null && a[Nb] === Ub) {
        return Qc(a);
      }
      return;
  }
  return a;
}
var Oc;
function Qc(a) {
  a = a.B;
  return Nc(a, a[J] | 0, Pc);
}
;
function L(a, b, c, d) {
  d = d === undefined ? 0 : d;
  if (a == null) {
    var e = 32;
    if (c) {
      a = [c];
      e |= 128;
    } else {
      a = [];
    }
    if (b) {
      e = e & -16760833 | (b & 1023) << 14;
    }
  } else {
    if (!Array.isArray(a)) {
      throw Error("narr");
    }
    e = a[J] | 0;
    if (rb && e & 1) {
      throw Error("rfarr");
    }
    if (e & 2048 && !(e & 2)) {
      Rc();
    }
    if (e & 256) {
      throw Error("farr");
    }
    if (e & 64) {
      if ((e | d) !== e) {
        Sb(a, e | d);
      }
      return a;
    }
    if (c && (e |= 128, c !== a[0])) {
      throw Error("mid");
    }
    a: {
      c = a;
      e |= 64;
      var f = c.length;
      if (f) {
        var g = f - 1;
        var h = c[g];
        if (h != null && typeof h === "object" && h.constructor === Object) {
          b = e & 128 ? 0 : -1;
          g -= b;
          if (g >= 1024) {
            throw Error("pvtlmt");
          }
          for (var k in h) {
            f = +k;
            if (f < g) {
              c[f + b] = h[k];
              delete h[k];
            }
          }
          e = e & -16760833 | (g & 1023) << 14;
          break a;
        }
      }
      if (b) {
        k = Math.max(b, f - (e & 128 ? 0 : -1));
        if (k > 1024) {
          throw Error("spvt");
        }
        e = e & -16760833 | (k & 1023) << 14;
      }
    }
  }
  Sb(a, e | 64 | d);
  return a;
}
function Rc() {
  if (rb) {
    throw Error("carr");
  }
  if (Mb != null) {
    var a;
    var b = (a = Db) != null ? a : Db = {};
    a = b[Mb] || 0;
    if (!(a >= 5)) {
      b[Mb] = a + 1;
      b = Error();
      eb(b, "incident");
      qb(b);
    }
  }
}
;
function Sc(a, b) {
  if (typeof a !== "object") {
    return a;
  }
  if (Array.isArray(a)) {
    var c = a[J] | 0;
    if (a.length === 0 && c & 1) {
      a = undefined;
    } else if (!(c & 2)) {
      if (!b || c & 4096 || c & 16) {
        a = Tc(a, c, false, b && !(c & 16));
      } else {
        Tb(a, 34);
        if (c & 4) {
          Object.freeze(a);
        }
      }
    }
    return a;
  }
  if (a != null && a[Nb] === Ub) {
    b = a.B;
    c = b[J] | 0;
    if (Vb(a, c)) {
      return a;
    } else if (Uc(a, b, c)) {
      return Vc(a, b);
    } else {
      return Tc(b, c);
    }
  }
}
function Vc(a, b, c) {
  a = new a.constructor(b);
  if (c) {
    a.h = Wb;
  }
  a.j = Wb;
  return a;
}
function Tc(a, b, c, d) {
  if (d == null) {
    d = !!(b & 34);
  }
  a = Nc(a, b, Sc, d);
  d = 32;
  if (c) {
    d |= 2;
  }
  b = b & 16769217 | d;
  Sb(a, b);
  return a;
}
function Wc(a) {
  if (a.h !== Wb) {
    return false;
  }
  var b = a.B;
  b = Tc(b, b[J] | 0);
  Tb(b, 2048);
  a.B = b;
  a.h = undefined;
  a.j = undefined;
  return true;
}
function Xc(a) {
  if (!Wc(a) && Vb(a, a.B[J] | 0)) {
    throw Error();
  }
}
function Yc(a, b = a[J] | 0) {
  if (b & 32 && !(b & 4096)) {
    Sb(a, b | 4096);
  }
}
function Uc(a, b, c) {
  if (c & 2) {
    return true;
  } else if (c & 32 && !(c & 4096)) {
    Sb(b, c | 2);
    a.h = Wb;
    return true;
  } else {
    return false;
  }
}
;
var Zc = {};
function $c(a, b, c, d) {
  Object.isExtensible(a);
  b = ad(a.B, b, c);
  if (b !== null || d && a.j !== Wb) {
    return b;
  }
}
function bd(a, b, c, d) {
  return ad(a, b, c, d);
}
function ad(a, b, c, d) {
  if (b === -1) {
    return null;
  }
  var e = b + (c ? 0 : -1);
  var f = a.length - 1;
  if (!(f < 1 + (c ? 0 : -1))) {
    if (e >= f) {
      var g = a[f];
      if (g != null && typeof g === "object" && g.constructor === Object) {
        c = g[b];
        var h = true;
      } else if (e === f) {
        c = g;
      } else {
        return;
      }
    } else {
      c = a[e];
    }
    if (d && c != null) {
      d = d(c);
      if (d == null) {
        return d;
      }
      if (!Object.is(d, c)) {
        if (h) {
          g[b] = d;
        } else {
          a[e] = d;
        }
        return d;
      }
    }
    return c;
  }
}
function cd(a, b, c) {
  Xc(a);
  var d = a.B;
  dd(d, d[J] | 0, b, c);
  return a;
}
function dd(a, b, c, d, e) {
  var f = c + (e ? 0 : -1);
  var g = a.length - 1;
  if (g >= 1 + (e ? 0 : -1) && f >= g) {
    var h = a[g];
    if (h != null && typeof h === "object" && h.constructor === Object) {
      h[c] = d;
      return b;
    }
  }
  if (f <= g) {
    a[f] = d;
    return b;
  }
  if (d !== undefined) {
    g = (b ??= a[J] | 0) >> 14 & 1023 || 536870912;
    if (c >= g) {
      if (d != null) {
        f = {};
        a[g + (e ? 0 : -1)] = (f[c] = d, f);
      }
    } else {
      a[f] = d;
    }
  }
  return b;
}
function ed(a, b, c, d) {
  Xc(a);
  var e = a.B;
  var f = e[J] | 0;
  if (d == null) {
    var g = fd(e);
    if (gd(g, e, f, c) === b) {
      g.set(c, 0);
    } else {
      return a;
    }
  } else {
    if (b !== 0) {
      c.includes(b);
    }
    g = fd(e);
    var h = gd(g, e, f, c);
    if (h !== b) {
      if (h) {
        f = dd(e, f, h);
      }
      g.set(c, b);
    }
  }
  dd(e, f, b, d);
  return a;
}
function fd(a) {
  if (Hb) {
    var b;
    if ((b = a[Kb]) != null) {
      return b;
    } else {
      return a[Kb] = new Map();
    }
  }
  if (Kb in a) {
    return a[Kb];
  }
  b = new Map();
  Object.defineProperty(a, Kb, {
    value: b
  });
  return b;
}
function gd(a, b, c, d) {
  var e = a.get(d);
  if (e != null) {
    return e;
  }
  for (var f = e = 0; f < d.length; f++) {
    var g = d[f];
    if (ad(b, g) != null) {
      if (e !== 0) {
        c = dd(b, c, e);
      }
      e = g;
    }
  }
  a.set(d, e);
  return e;
}
function hd(a, b, c, d, e) {
  var f = false;
  d = bd(a, d, e, function (g) {
    var h = Lc(g, c, b);
    f = h !== g && h != null;
    return h;
  });
  if (d != null) {
    if (f && !Vb(d)) {
      Yc(a, b);
    }
    return d;
  }
}
function id(a, b, c, d) {
  var e = a.B;
  var f = e[J] | 0;
  b = hd(e, f, b, c, d);
  if (b == null) {
    return b;
  }
  f = e[J] | 0;
  if (!Vb(a, f)) {
    var g = b;
    var h = g.B;
    var k = h[J] | 0;
    g = Vb(g, k) ? Uc(g, h, k) ? Vc(g, h, true) : new g.constructor(Tc(h, k, false)) : g;
    if (g !== b) {
      if (Wc(a)) {
        e = a.B;
        f = e[J] | 0;
      }
      b = g;
      f = dd(e, f, c, b, d);
      Yc(e, f);
    }
  }
  return b;
}
function jd(a, b) {
  if (a != null) {
    Kc(a, b);
  } else {
    a = undefined;
  }
  return a;
}
function kd(a, b, c, d) {
  d = jd(d, b);
  cd(a, c, d);
  if (d && !Vb(d)) {
    Yc(a.B);
  }
  return a;
}
function ld(a, b, c, d) {
  Xc(a);
  var e = a.B;
  var f = e;
  var g = e[J] | 0;
  var h = (a ? Vb(a, g) : g & 2) ? 1 : 2;
  if (h === 2 && a && Wc(a)) {
    f = a.B;
    g = f[J] | 0;
  }
  a = ad(f, b);
  var k = Array.isArray(a) ? a : Qb;
  var l = k === Qb ? 7 : k[J] | 0;
  a = l;
  if (g & 2) {
    a |= 2;
  }
  var m = a | 1;
  if (a = !(m & 4)) {
    var n = g;
    var q = !!(m & 2);
    if (q) {
      n |= 2;
    }
    var p = !q;
    var x = true;
    for (var y = 0, z = 0; y < k.length; y++) {
      var H = Lc(k[y], c, n);
      if (H instanceof c) {
        if (!q) {
          var D = Vb(H);
          p &&= !D;
          x &&= D;
        }
        k[z++] = H;
      }
    }
    if (z < y) {
      k.length = z;
    }
    m |= 4;
    m = x ? m & -4097 : m | 4096;
    m = p ? m | 8 : m & -9;
  }
  if (m !== l) {
    Sb(k, m);
    if (m & 2) {
      Object.freeze(k);
    }
  }
  m = l = m;
  if ((n = !!(l & 2) && !!(l & 4) || !!(l & 256)) && h === 2) {
    k = Array.prototype.slice.call(k);
    m = 0;
    l = (g & 2 ? l | 2 : l & -3) & -273;
    g = dd(f, g, b, k);
    n = false;
  }
  if (!n) {
    if (h === 1 || (h !== 4 ? 0 : l & 2 || !(l & 16) && g & 32)) {
      l |= !k.length || a && !(l & 4096) || g & 32 && !(l & 4096) && !(l & 16) ? 2 : 256;
      if (l !== m) {
        Sb(k, l);
      }
      Object.freeze(k);
    } else if (l !== m) {
      Sb(k, l);
    }
  }
  if (!(l & 2) && (!!(l & 4096) || !!(l & 16))) {
    Yc(f, g);
  }
  b = k;
  d = d != null ? Kc(d, c) : new c();
  b.push(d);
  h = c = b === Qb ? 7 : b[J] | 0;
  if (d = Vb(d)) {
    c &= -9;
    if (b.length === 1) {
      c &= -4097;
    }
  } else {
    c |= 4096;
  }
  if (c !== h) {
    Sb(b, c);
  }
  if (!d) {
    Yc(e);
  }
}
function md(a, b, c) {
  a = $c(a, b, undefined, c);
  if (a == null || typeof a === "string") {
    return a;
  } else {
    return undefined;
  }
}
function nd(a, b) {
  return md(a, b) ?? "";
}
function od(a, b) {
  var c = c === undefined ? 0 : c;
  a = $c(a, b);
  a = a == null ? a : xc(a) ? a | 0 : undefined;
  return a ?? c;
}
function pd(a, b) {
  var c = sd;
  var d = a.B;
  c = gd(fd(d), d, undefined, c);
  return md(a, c === b ? b : -1, Zc);
}
function M(a, b, c) {
  return cd(a, b, Jc(c));
}
function td(a, b, c) {
  if (c != null) {
    if (!xc(c)) {
      throw Eb("enum");
    }
    c |= 0;
  }
  return cd(a, b, c);
}
;
function N(a, b, c) {
  this.B = L(a, b, c, 2048);
}
N.prototype.toJSON = function () {
  return Qc(this);
};
N.prototype.clone = function () {
  var a = this.B;
  var b = a[J] | 0;
  if (Uc(this, a, b)) {
    return Vc(this, a, true);
  } else {
    return new this.constructor(Tc(a, b, false));
  }
};
N.prototype[Nb] = Ub;
N.prototype.toString = function () {
  return this.B.toString();
};
var ud = window;
function vd() {}
;
function wd(a) {
  var b = xd;
  if (b) {
    for (var c in b) {
      if (Object.prototype.hasOwnProperty.call(b, c)) {
        a(b[c], c, b);
      }
    }
  }
}
function yd() {
  var a = [];
  wd(function (b) {
    a.push(b);
  });
  return a;
}
;
var xd = {
  Kd: "allow-forms",
  Ld: "allow-modals",
  Md: "allow-orientation-lock",
  Nd: "allow-pointer-lock",
  Od: "allow-popups",
  Pd: "allow-popups-to-escape-sandbox",
  Qd: "allow-presentation",
  Rd: "allow-same-origin",
  Sd: "allow-scripts",
  Td: "allow-top-navigation",
  Ud: "allow-top-navigation-by-user-activation"
};
var zd = function (a) {
  var b = false;
  var c;
  return function () {
    if (!b) {
      c = a();
      b = true;
    }
    return c;
  };
}(function () {
  return yd();
});
function Ad() {
  var a = Bd();
  var b = {};
  bb(zd(), function (c) {
    if (a.sandbox && a.sandbox.supports && a.sandbox.supports(c)) {
      b[c] = true;
    }
  });
  return b;
}
function Bd() {
  var a = a === undefined ? document : a;
  return a.createElement("iframe");
}
;
function Cd(a, b) {
  this.width = a;
  this.height = b;
}
r = Cd.prototype;
r.clone = function () {
  return new Cd(this.width, this.height);
};
r.aspectRatio = function () {
  return this.width / this.height;
};
r.ceil = function () {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
r.floor = function () {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
r.round = function () {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
r.scale = function (a, b) {
  b = typeof b === "number" ? b : a;
  this.width *= a;
  this.height *= b;
  return this;
};
function Dd(a, b) {
  for (var c in a) {
    b.call(undefined, a[c], c, a);
  }
}
function Ed(a) {
  if (!a || typeof a !== "object") {
    return a;
  }
  if (typeof a.clone === "function") {
    return a.clone();
  }
  if (typeof Map !== "undefined" && a instanceof Map) {
    return new Map(a);
  }
  if (typeof Set !== "undefined" && a instanceof Set) {
    return new Set(a);
  }
  if (a instanceof Date) {
    return new Date(a.getTime());
  }
  var b = Array.isArray(a) ? [] : typeof ArrayBuffer !== "function" || typeof ArrayBuffer.isView !== "function" || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
  var c;
  for (c in a) {
    b[c] = Ed(a[c]);
  }
  return b;
}
var Fd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Gd(a, b) {
  var c;
  var d;
  for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0; f < Fd.length; f++) {
      c = Fd[f];
      if (Object.prototype.hasOwnProperty.call(d, c)) {
        a[c] = d[c];
      }
    }
  }
}
;
var Hd = new Date().getTime();
function Id(a) {
  if (!a) {
    return "";
  }
  if (/^about:(?:blank|srcdoc)$/.test(a)) {
    return window.origin || "";
  }
  if (a.indexOf("blob:") === 0) {
    a = a.substring(5);
  }
  a = a.split("#")[0].split("?")[0];
  a = a.toLowerCase();
  if (a.indexOf("//") == 0) {
    a = window.location.protocol + a;
  }
  if (!/^[\w\-]*:\/\//.test(a)) {
    a = window.location.href;
  }
  var b = a.substring(a.indexOf("://") + 3);
  var c = b.indexOf("/");
  if (c != -1) {
    b = b.substring(0, c);
  }
  c = a.substring(0, a.indexOf("://"));
  if (!c) {
    throw Error("URI is missing protocol: " + a);
  }
  if (c !== "http" && c !== "https" && c !== "chrome-extension" && c !== "moz-extension" && c !== "file" && c !== "android-app" && c !== "chrome-search" && c !== "chrome-untrusted" && c !== "chrome" && c !== "app" && c !== "devtools") {
    throw Error("Invalid URI scheme in origin: " + c);
  }
  a = "";
  var d = b.indexOf(":");
  if (d != -1) {
    var e = b.substring(d + 1);
    b = b.substring(0, d);
    if (c === "http" && e !== "80" || c === "https" && e !== "443") {
      a = ":" + e;
    }
  }
  return c + "://" + b + a;
}
;
function Jd() {
  function a() {
    e[0] = 1732584193;
    e[1] = 4023233417;
    e[2] = 2562383102;
    e[3] = 271733878;
    e[4] = 3285377520;
    m = l = 0;
  }
  function b(n) {
    var q = g;
    for (var p = 0; p < 64; p += 4) {
      q[p / 4] = n[p] << 24 | n[p + 1] << 16 | n[p + 2] << 8 | n[p + 3];
    }
    for (p = 16; p < 80; p++) {
      n = q[p - 3] ^ q[p - 8] ^ q[p - 14] ^ q[p - 16];
      q[p] = (n << 1 | n >>> 31) & -1;
    }
    n = e[0];
    var x = e[1];
    var y = e[2];
    var z = e[3];
    var H = e[4];
    for (p = 0; p < 80; p++) {
      if (p < 40) {
        if (p < 20) {
          var D = z ^ x & (y ^ z);
          var P = 1518500249;
        } else {
          D = x ^ y ^ z;
          P = 1859775393;
        }
      } else if (p < 60) {
        D = x & y | z & (x | y);
        P = 2400959708;
      } else {
        D = x ^ y ^ z;
        P = 3395469782;
      }
      D = ((n << 5 | n >>> 27) & -1) + D + H + P + q[p] & -1;
      H = z;
      z = y;
      y = (x << 30 | x >>> 2) & -1;
      x = n;
      n = D;
    }
    e[0] = e[0] + n & -1;
    e[1] = e[1] + x & -1;
    e[2] = e[2] + y & -1;
    e[3] = e[3] + z & -1;
    e[4] = e[4] + H & -1;
  }
  function c(n, q) {
    if (typeof n === "string") {
      n = unescape(encodeURIComponent(n));
      var p = [];
      for (var x = 0, y = n.length; x < y; ++x) {
        p.push(n.charCodeAt(x));
      }
      n = p;
    }
    q ||= n.length;
    p = 0;
    if (l == 0) {
      while (p + 64 < q) {
        b(n.slice(p, p + 64));
        p += 64;
        m += 64;
      }
    }
    while (p < q) {
      f[l++] = n[p++];
      m++;
      if (l == 64) {
        l = 0;
        b(f);
        while (p + 64 < q) {
          b(n.slice(p, p + 64));
          p += 64;
          m += 64;
        }
      }
    }
  }
  function d() {
    var n = [];
    var q = m * 8;
    if (l < 56) {
      c(h, 56 - l);
    } else {
      c(h, 64 - (l - 56));
    }
    for (var p = 63; p >= 56; p--) {
      f[p] = q & 255;
      q >>>= 8;
    }
    b(f);
    for (p = q = 0; p < 5; p++) {
      for (var x = 24; x >= 0; x -= 8) {
        n[q++] = e[p] >> x & 255;
      }
    }
    return n;
  }
  var e = [];
  var f = [];
  var g = [];
  var h = [128];
  for (var k = 1; k < 64; ++k) {
    h[k] = 0;
  }
  var l;
  var m;
  a();
  return {
    reset: a,
    update: c,
    digest: d,
    bd: function () {
      for (var n = d(), q = "", p = 0; p < n.length; p++) {
        q += "0123456789ABCDEF".charAt(Math.floor(n[p] / 16)) + "0123456789ABCDEF".charAt(n[p] % 16);
      }
      return q;
    }
  };
}
;
function Kd(a, b, c) {
  var d = String(E == null ? undefined : E.location.href);
  if (d && a && b) {
    return [b, Ld(Id(d), a, c || null)].join(" ");
  } else {
    return null;
  }
}
function Ld(a, b, c) {
  var d = [];
  var e = [];
  if ((Array.isArray(c) ? 2 : 1) == 1) {
    e = [b, a];
    bb(d, function (h) {
      e.push(h);
    });
    return Md(e.join(" "));
  }
  var f = [];
  var g = [];
  bb(c, function (h) {
    g.push(h.key);
    f.push(h.value);
  });
  c = Math.floor(new Date().getTime() / 1000);
  e = f.length == 0 ? [c, b, a] : [f.join(":"), c, b, a];
  bb(d, function (h) {
    e.push(h);
  });
  a = Md(e.join(" "));
  a = [c, a];
  if (g.length != 0) {
    a.push(g.join(""));
  }
  return a.join("_");
}
function Md(a) {
  var b = Jd();
  b.update(a);
  return b.bd().toLowerCase();
}
;
function Nd(a) {
  this.h = a || {
    cookie: ""
  };
}
r = Nd.prototype;
r.isEnabled = function () {
  if (!E.navigator.cookieEnabled) {
    return false;
  }
  if (this.h.cookie) {
    return true;
  }
  this.set("TESTCOOKIESENABLED", "1", {
    Vb: 60
  });
  if (this.get("TESTCOOKIESENABLED") !== "1") {
    return false;
  }
  this.remove("TESTCOOKIESENABLED");
  return true;
};
r.set = function (a, b, c) {
  var d = false;
  if (typeof c === "object") {
    var e = c.sameSite;
    d = c.secure || false;
    var f = c.domain || undefined;
    var g = c.path || undefined;
    var h = c.Vb;
  }
  if (/[;=\s]/.test(a)) {
    throw Error("Invalid cookie name \"" + a + "\"");
  }
  if (/[;\r\n]/.test(b)) {
    throw Error("Invalid cookie value \"" + b + "\"");
  }
  if (h === undefined) {
    h = -1;
  }
  c = f ? ";domain=" + f : "";
  g = g ? ";path=" + g : "";
  d = d ? ";secure" : "";
  h = h < 0 ? "" : h == 0 ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Date.now() + h * 1000).toUTCString();
  this.h.cookie = a + "=" + b + c + g + h + d + (e != null ? ";samesite=" + e : "");
};
r.get = function (a, b) {
  var c = a + "=";
  for (var d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
    f = Ta(d[e]);
    if (f.lastIndexOf(c, 0) == 0) {
      return f.slice(c.length);
    }
    if (f == a) {
      return "";
    }
  }
  return b;
};
r.remove = function (a, b, c) {
  var d = this.get(a) !== undefined;
  this.set(a, "", {
    Vb: 0,
    path: b,
    domain: c
  });
  return d;
};
r.clear = function () {
  for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) {
    e = Ta(a[f]);
    d = e.indexOf("=");
    if (d == -1) {
      b.push("");
      c.push(e);
    } else {
      b.push(e.substring(0, d));
      c.push(e.substring(d + 1));
    }
  }
  for (a = b.length - 1; a >= 0; a--) {
    this.remove(b[a]);
  }
};
var Od = new Nd(typeof document == "undefined" ? null : document);
var Pd = null;
var Qd = "";
var Rd = 0;
var Sd = null;
function Td() {
  Pd = null;
  Qd = "";
  Rd = 0;
}
function Ud() {
  var a = (E == null ? undefined : E.cookieStore) || null;
  if (Sd !== a) {
    if (Sd) {
      Sd.removeEventListener("change", Td);
      Sd = null;
    }
    if (typeof EventTarget !== "undefined" && a instanceof EventTarget) {
      Sd = a;
      a.addEventListener("change", Td);
    }
  }
}
function Vd() {
  var a = E.__SAPISID || E.__APISID || E.__3PSAPISID || E.__1PSAPISID || E.__OVERRIDE_SID;
  if (a) {
    return true;
  }
  if (typeof document !== "undefined") {
    a = new Nd(document);
    a = a.get("SAPISID") || a.get("APISID") || a.get("__Secure-3PAPISID") || a.get("__Secure-1PAPISID");
  }
  return !!a;
}
function Wd(a, b) {
  var c = a ? E.__SAPISID : E.__APISID;
  if (!c && typeof document !== "undefined") {
    c = new Nd(document);
    c = c.get(a ? "SAPISID" : "APISID") || c.get("__Secure-3PAPISID");
  }
  if (c) {
    return Kd(c, a ? "SAPISIDHASH" : "APISIDHASH", b);
  } else {
    return null;
  }
}
function Xd(a, b, c, d) {
  if (!(a = E[a]) && typeof document !== "undefined") {
    a = new Nd(document).get(b);
  }
  if (a) {
    return Kd(a, c, d);
  } else {
    return null;
  }
}
function Yd(a) {
  Ud();
  var b = Id(E == null ? undefined : E.location.href);
  var c = b.indexOf("https:") == 0 || b.indexOf("chrome-extension:") == 0 || b.indexOf("chrome-untrusted://new-tab-page") == 0 || b.indexOf("moz-extension:") == 0;
  b = Array.isArray(a) ? b + "|v2|" + a.map(function (g) {
    return g.key + ":" + g.value;
  }).join(",") : b + "|v1";
  var d = Date.now();
  var e = d - Rd;
  if (c && Pd != null && Qd === b && e >= 0 && e < 1000) {
    return Pd;
  }
  e = [];
  if (Vd()) {
    var f = Wd(c, a);
    if (f) {
      e.push(f);
    }
    if (c) {
      if (f = Xd("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) {
        e.push(f);
      }
      if (a = Xd("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) {
        e.push(a);
      }
    }
  }
  a = e.length == 0 ? null : e.join(" ");
  if (c) {
    Pd = a;
    Qd = b;
    Rd = d;
  }
  return a;
}
;
var Zd = typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function" ? function (a) {
  return a && AsyncContext.Snapshot.wrap(a);
} : function (a) {
  return a;
};
function $d() {
  this.La = this.La;
  this.m = this.m;
}
$d.prototype.La = false;
$d.prototype.dispose = function () {
  if (!this.La) {
    this.La = true;
    this.wa();
  }
};
$d.prototype[Symbol.dispose] = function () {
  this.dispose();
};
$d.prototype.addOnDisposeCallback = function (a, b) {
  if (this.La) {
    if (b !== undefined) {
      a.call(b);
    } else {
      a();
    }
  } else {
    this.m ||= [];
    if (b) {
      a = a.bind(b);
    }
    this.m.push(a);
  }
};
$d.prototype.wa = function () {
  if (this.m) {
    while (this.m.length) {
      this.m.shift()();
    }
  }
};
function ae(a, b) {
  this.type = a;
  this.h = this.target = b;
  this.defaultPrevented = false;
}
ae.prototype.i = function () {
  this.defaultPrevented = true;
};
function be(a, b) {
  ae.call(this, a ? a.type : "");
  this.relatedTarget = this.h = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.timeStamp = 0;
  this.j = null;
  if (a) {
    this.init(a, b);
  }
}
Na(be, ae);
be.prototype.init = function (a, b) {
  var c = this.type = a.type;
  var d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
  this.target = a.target || a.srcElement;
  this.h = b;
  b = a.relatedTarget;
  if (!b) {
    if (c == "mouseover") {
      b = a.fromElement;
    } else if (c == "mouseout") {
      b = a.toElement;
    }
  }
  this.relatedTarget = b;
  if (d) {
    this.clientX = d.clientX !== undefined ? d.clientX : d.pageX;
    this.clientY = d.clientY !== undefined ? d.clientY : d.pageY;
    this.screenX = d.screenX || 0;
    this.screenY = d.screenY || 0;
  } else {
    this.clientX = a.clientX !== undefined ? a.clientX : a.pageX;
    this.clientY = a.clientY !== undefined ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
  }
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.key = a.key || "";
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.pointerId = a.pointerId || 0;
  this.pointerType = a.pointerType;
  this.state = a.state;
  this.timeStamp = a.timeStamp;
  this.j = a;
  if (a.defaultPrevented) {
    be.Da.i.call(this);
  }
};
be.prototype.i = function () {
  be.Da.i.call(this);
  var a = this.j;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    a.returnValue = false;
  }
};
var ce = function () {
  if (!E.addEventListener || !Object.defineProperty) {
    return false;
  }
  var a = false;
  var b = Object.defineProperty({}, "passive", {
    get: function () {
      a = true;
    }
  });
  try {
    function c() {}
    E.addEventListener("test", c, b);
    E.removeEventListener("test", c, b);
  } catch (d) {}
  return a;
}();
var de = "closure_listenable_" + (Math.random() * 1000000 | 0);
var ee = 0;
function fe(a, b, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.handler = e;
  this.key = ++ee;
  this.sb = this.yb = false;
}
function ge(a) {
  a.sb = true;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.handler = null;
}
;
function he(a) {
  this.src = a;
  this.listeners = {};
  this.h = 0;
}
he.prototype.add = function (a, b, c, d, e) {
  var f = a.toString();
  a = this.listeners[f];
  if (!a) {
    a = this.listeners[f] = [];
    this.h++;
  }
  var g = ie(a, b, d, e);
  if (g > -1) {
    b = a[g];
    if (!c) {
      b.yb = false;
    }
  } else {
    b = new fe(b, this.src, f, !!d, e);
    b.yb = c;
    a.push(b);
  }
  return b;
};
he.prototype.remove = function (a, b, c, d) {
  a = a.toString();
  if (!(a in this.listeners)) {
    return false;
  }
  var e = this.listeners[a];
  b = ie(e, b, c, d);
  if (b > -1) {
    ge(e[b]);
    Array.prototype.splice.call(e, b, 1);
    if (e.length == 0) {
      delete this.listeners[a];
      this.h--;
    }
    return true;
  } else {
    return false;
  }
};
function je(a, b) {
  var c = b.type;
  if (c in a.listeners && cb(a.listeners[c], b)) {
    ge(b);
    if (a.listeners[c].length == 0) {
      delete a.listeners[c];
      a.h--;
    }
  }
}
function ie(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.sb && f.listener == b && f.capture == !!c && f.handler == d) {
      return e;
    }
  }
  return -1;
}
;
var ke = "closure_lm_" + (Math.random() * 1000000 | 0);
var le = {};
var me = 0;
function ne(a, b, c, d, e) {
  if (d && d.once) {
    oe(a, b, c, d, e);
  } else if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++) {
      ne(a, b[f], c, d, e);
    }
  } else {
    c = pe(c);
    if (a && a[de]) {
      a.Oa(b, c, Ia(d) ? !!d.capture : !!d, e);
    } else {
      qe(a, b, c, false, d, e);
    }
  }
}
function qe(a, b, c, d, e, f) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var g = Ia(e) ? !!e.capture : !!e;
  var h = re(a);
  if (!h) {
    a[ke] = h = new he(a);
  }
  c = h.add(b, c, d, g, f);
  if (!c.proxy) {
    d = se();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) {
      if (!ce) {
        e = g;
      }
      if (e === undefined) {
        e = false;
      }
      a.addEventListener(b.toString(), d, e);
    } else if (a.attachEvent) {
      a.attachEvent(te(b.toString()), d);
    } else if (a.addListener && a.removeListener) {
      a.addListener(d);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
    me++;
  }
}
function se() {
  function a(c) {
    return b.call(a.src, a.listener, c);
  }
  var b = ue;
  return a;
}
function oe(a, b, c, d, e) {
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++) {
      oe(a, b[f], c, d, e);
    }
  } else {
    c = pe(c);
    if (a && a[de]) {
      a.h.add(String(b), c, true, Ia(d) ? !!d.capture : !!d, e);
    } else {
      qe(a, b, c, true, d, e);
    }
  }
}
function ve(a, b, c, d, e) {
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++) {
      ve(a, b[f], c, d, e);
    }
  } else {
    d = Ia(d) ? !!d.capture : !!d;
    c = pe(c);
    if (a && a[de]) {
      a.h.remove(String(b), c, d, e);
    } else if (a &&= re(a)) {
      b = a.listeners[b.toString()];
      a = -1;
      if (b) {
        a = ie(b, c, d, e);
      }
      if (c = a > -1 ? b[a] : null) {
        we(c);
      }
    }
  }
}
function we(a) {
  if (typeof a !== "number" && a && !a.sb) {
    var b = a.src;
    if (b && b[de]) {
      je(b.h, a);
    } else {
      var c = a.type;
      var d = a.proxy;
      if (b.removeEventListener) {
        b.removeEventListener(c, d, a.capture);
      } else if (b.detachEvent) {
        b.detachEvent(te(c), d);
      } else if (b.addListener && b.removeListener) {
        b.removeListener(d);
      }
      me--;
      if (c = re(b)) {
        je(c, a);
        if (c.h == 0) {
          c.src = null;
          b[ke] = null;
        }
      } else {
        ge(a);
      }
    }
  }
}
function te(a) {
  if (a in le) {
    return le[a];
  } else {
    return le[a] = "on" + a;
  }
}
function ue(a, b) {
  if (a.sb) {
    a = true;
  } else {
    b = new be(b, this);
    var c = a.listener;
    var d = a.handler || a.src;
    if (a.yb) {
      we(a);
    }
    a = c.call(d, b);
  }
  return a;
}
function re(a) {
  a = a[ke];
  if (a instanceof he) {
    return a;
  } else {
    return null;
  }
}
var xe = "__closure_events_fn_" + (Math.random() * 1000000000 >>> 0);
function pe(a) {
  if (typeof a === "function") {
    return a;
  }
  a[xe] ||= function (b) {
    return a.handleEvent(b);
  };
  return a[xe];
}
;
function ye() {
  $d.call(this);
  this.h = new he(this);
  this.N = this;
  this.A = null;
}
Na(ye, $d);
ye.prototype[de] = true;
r = ye.prototype;
r.addEventListener = function (a, b, c, d) {
  ne(this, a, b, c, d);
};
r.removeEventListener = function (a, b, c, d) {
  ve(this, a, b, c, d);
};
r.dispatchEvent = function (a) {
  var b = this.A;
  if (b) {
    var c = [];
    var d = 1;
    for (; b; b = b.A) {
      c.push(b);
      ++d;
    }
  }
  b = this.N;
  d = a.type || a;
  if (typeof a === "string") {
    a = new ae(a, b);
  } else if (a instanceof ae) {
    a.target = a.target || b;
  } else {
    var e = a;
    a = new ae(d, b);
    Gd(a, e);
  }
  e = true;
  var f;
  if (c) {
    for (f = c.length - 1; f >= 0; f--) {
      var g = a.h = c[f];
      e = ze(g, d, true, a) && e;
    }
  }
  g = a.h = b;
  e = ze(g, d, true, a) && e;
  e = ze(g, d, false, a) && e;
  if (c) {
    for (f = 0; f < c.length; f++) {
      g = a.h = c[f];
      e = ze(g, d, false, a) && e;
    }
  }
  return e;
};
r.wa = function () {
  ye.Da.wa.call(this);
  if (this.h) {
    var a = this.h;
    var b = 0;
    var c;
    for (c in a.listeners) {
      for (var d = a.listeners[c], e = 0; e < d.length; e++) {
        ++b;
        ge(d[e]);
      }
      delete a.listeners[c];
      a.h--;
    }
  }
  this.A = null;
};
r.Oa = function (a, b, c, d) {
  return this.h.add(String(a), b, false, c, d);
};
function ze(a, b, c, d) {
  b = a.h.listeners[String(b)];
  if (!b) {
    return true;
  }
  b = b.concat();
  var e = true;
  for (var f = 0; f < b.length; ++f) {
    var g = b[f];
    if (g && !g.sb && g.capture == c) {
      var h = g.listener;
      var k = g.handler || g.src;
      if (g.yb) {
        je(a.h, g);
      }
      e = h.call(k, d) !== false && e;
    }
  }
  return e && !d.defaultPrevented;
}
;
function Ae(a) {
  ye.call(this);
  var b = this;
  this.C = this.i = 0;
  this.ma = a ?? {
    sa: function (e, f) {
      return setTimeout(e, f);
    },
    ha: function (e) {
      clearTimeout(e);
    }
  };
  var c;
  this.isOnline = ((c = window.navigator) == null ? undefined : c.onLine) ?? true;
  this.j = function () {
    return C(function (e) {
      return e.h(Be(b), 0);
    });
  };
  window.addEventListener("offline", this.j);
  window.addEventListener("online", this.j);
  if (!this.C) {
    Ce(this);
  }
}
u(Ae, ye);
function De() {
  var a = Ee;
  Ae.instance ||= new Ae(a);
  return Ae.instance;
}
Ae.prototype.dispose = function () {
  window.removeEventListener("offline", this.j);
  window.removeEventListener("online", this.j);
  this.ma.ha(this.C);
  delete Ae.instance;
};
Ae.prototype.ia = function () {
  return this.isOnline;
};
function Ce(a) {
  a.C = a.ma.sa(function () {
    var b;
    return C(function (c) {
      if (c.i == 1) {
        if (a.isOnline) {
          if ((b = window.navigator) == null ? 0 : b.onLine) {
            return c.v(3);
          } else {
            return c.h(Be(a), 3);
          }
        } else {
          return c.h(Be(a), 3);
        }
      }
      Ce(a);
      c.u();
    });
  }, 30000);
}
function Be(a, b) {
  if (a.u) {
    return a.u;
  } else {
    return a.u = new Promise(function (c) {
      var d;
      var e;
      var f;
      var g;
      return C(function (h) {
        switch (h.i) {
          case 1:
            d = window.AbortController ? new window.AbortController() : undefined;
            f = (e = d) == null ? undefined : e.signal;
            g = false;
            h.P(2, 3);
            if (d) {
              a.i = a.ma.sa(function () {
                d.abort();
              }, b || 20000);
            }
            return h.h(fetch("/generate_204", {
              method: "HEAD",
              signal: f
            }), 5);
          case 5:
            g = true;
          case 3:
            h.ra();
            a.u = undefined;
            if (a.i) {
              a.ma.ha(a.i);
              a.i = 0;
            }
            if (g !== a.isOnline) {
              a.isOnline = g;
              if (a.isOnline) {
                a.dispatchEvent("networkstatus-online");
              } else {
                a.dispatchEvent("networkstatus-offline");
              }
            }
            c(g);
            h.Va(0);
            break;
          case 2:
            h.N();
            g = false;
            h.v(3);
        }
      });
    });
  }
}
;
function Fe(a, b) {
  this.j = a;
  this.m = b;
  this.i = 0;
  this.h = null;
}
Fe.prototype.get = function () {
  if (this.i > 0) {
    this.i--;
    var a = this.h;
    this.h = a.next;
    a.next = null;
  } else {
    a = this.j();
  }
  return a;
};
function Ge(a, b) {
  a.m(b);
  if (a.i < 100) {
    a.i++;
    b.next = a.h;
    a.h = b;
  }
}
;
function He() {
  this.i = this.h = null;
}
He.prototype.add = function (a, b) {
  var c = Ie.get();
  c.set(a, b);
  if (this.i) {
    this.i.next = c;
  } else {
    this.h = c;
  }
  this.i = c;
};
He.prototype.remove = function () {
  var a = null;
  if (this.h) {
    a = this.h;
    this.h = this.h.next;
    if (!this.h) {
      this.i = null;
    }
    a.next = null;
  }
  return a;
};
var Ie = new Fe(function () {
  return new Je();
}, function (a) {
  return a.reset();
});
function Je() {
  this.next = this.scope = this.h = null;
}
Je.prototype.set = function (a, b) {
  this.h = a;
  this.scope = b;
  this.next = null;
};
Je.prototype.reset = function () {
  this.next = this.scope = this.h = null;
};
var af;
var bf = false;
var cf = new He();
function df(a, b) {
  if (!af) {
    ef();
  }
  if (!bf) {
    af();
    bf = true;
  }
  cf.add(a, b);
}
function ef() {
  var a = Promise.resolve(undefined);
  af = function () {
    a.then(ff);
  };
}
function ff() {
  for (var a; a = cf.remove();) {
    try {
      a.h.call(a.scope);
    } catch (b) {
      qb(b);
    }
    Ge(Ie, a);
  }
  bf = false;
}
;
function gf(a) {
  this.h = 0;
  this.C = undefined;
  this.m = this.i = this.j = null;
  this.u = this.A = false;
  if (a != vd) {
    try {
      var b = this;
      a.call(undefined, function (c) {
        hf(b, 2, c);
      }, function (c) {
        hf(b, 3, c);
      });
    } catch (c) {
      hf(this, 3, c);
    }
  }
}
function jf() {
  this.next = this.context = this.i = this.j = this.h = null;
  this.m = false;
}
jf.prototype.reset = function () {
  this.context = this.i = this.j = this.h = null;
  this.m = false;
};
var kf = new Fe(function () {
  return new jf();
}, function (a) {
  a.reset();
});
function lf(a, b, c) {
  var d = kf.get();
  d.j = a;
  d.i = b;
  d.context = c;
  return d;
}
gf.prototype.then = function (a, b, c) {
  return mf(this, Zd(typeof a === "function" ? a : null), Zd(typeof b === "function" ? b : null), c);
};
gf.prototype.$goog_Thenable = true;
gf.prototype.cancel = function (a) {
  if (this.h == 0) {
    var b = new nf(a);
    df(function () {
      of(this, b);
    }, this);
  }
};
function of(a, b) {
  if (a.h == 0) {
    if (a.j) {
      var c = a.j;
      if (c.i) {
        for (var d = 0, e = null, f = null, g = c.i; g && (g.m || (d++, g.h == a && (e = g), !e || !(d > 1))); g = g.next) {
          if (!e) {
            f = g;
          }
        }
        if (e) {
          if (c.h == 0 && d == 1) {
            of(c, b);
          } else {
            if (f) {
              d = f;
              if (d.next == c.m) {
                c.m = d;
              }
              d.next = d.next.next;
            } else {
              pf(c);
            }
            qf(c, e, 3, b);
          }
        }
      }
      a.j = null;
    } else {
      hf(a, 3, b);
    }
  }
}
function rf(a, b) {
  if (!a.i && (a.h == 2 || a.h == 3)) {
    sf(a);
  }
  if (a.m) {
    a.m.next = b;
  } else {
    a.i = b;
  }
  a.m = b;
}
function mf(a, b, c, d) {
  var e = lf(null, null, null);
  e.h = new gf(function (f, g) {
    e.j = b ? function (h) {
      try {
        var k = b.call(d, h);
        f(k);
      } catch (l) {
        g(l);
      }
    } : f;
    e.i = c ? function (h) {
      try {
        var k = c.call(d, h);
        if (k === undefined && h instanceof nf) {
          g(h);
        } else {
          f(k);
        }
      } catch (l) {
        g(l);
      }
    } : g;
  });
  e.h.j = a;
  rf(a, e);
  return e.h;
}
gf.prototype.P = function (a) {
  this.h = 0;
  hf(this, 2, a);
};
gf.prototype.S = function (a) {
  this.h = 0;
  hf(this, 3, a);
};
function hf(a, b, c) {
  if (a.h == 0) {
    if (a === c) {
      b = 3;
      c = new TypeError("Promise cannot resolve to itself");
    }
    a.h = 1;
    a: {
      var d = c;
      var e = a.P;
      var f = a.S;
      if (d instanceof gf) {
        rf(d, lf(e || vd, f || null, a));
        var g = true;
      } else {
        if (d) {
          try {
            var h = !!d.$goog_Thenable;
          } catch (l) {
            h = false;
          }
        } else {
          h = false;
        }
        if (h) {
          d.then(e, f, a);
          g = true;
        } else {
          if (Ia(d)) {
            try {
              var k = d.then;
              if (typeof k === "function") {
                tf(d, k, e, f, a);
                g = true;
                break a;
              }
            } catch (l) {
              f.call(a, l);
              g = true;
              break a;
            }
          }
          g = false;
        }
      }
    }
    if (!g) {
      a.C = c;
      a.h = b;
      a.j = null;
      sf(a);
      if (b == 3 && !(c instanceof nf)) {
        uf(a, c);
      }
    }
  }
}
function tf(a, b, c, d, e) {
  function f(k) {
    if (!h) {
      h = true;
      d.call(e, k);
    }
  }
  function g(k) {
    if (!h) {
      h = true;
      c.call(e, k);
    }
  }
  var h = false;
  try {
    b.call(a, g, f);
  } catch (k) {
    f(k);
  }
}
function sf(a) {
  if (!a.A) {
    a.A = true;
    df(a.N, a);
  }
}
function pf(a) {
  var b = null;
  if (a.i) {
    b = a.i;
    a.i = b.next;
    b.next = null;
  }
  if (!a.i) {
    a.m = null;
  }
  return b;
}
gf.prototype.N = function () {
  for (var a; a = pf(this);) {
    qf(this, a, this.h, this.C);
  }
  this.A = false;
};
function qf(a, b, c, d) {
  if (c == 3 && b.i && !b.m) {
    for (; a && a.u; a = a.j) {
      a.u = false;
    }
  }
  if (b.h) {
    b.h.j = null;
    vf(b, c, d);
  } else {
    try {
      if (b.m) {
        b.j.call(b.context);
      } else {
        vf(b, c, d);
      }
    } catch (e) {
      wf.call(null, e);
    }
  }
  Ge(kf, b);
}
function vf(a, b, c) {
  if (b == 2) {
    a.j.call(a.context, c);
  } else if (a.i) {
    a.i.call(a.context, c);
  }
}
function uf(a, b) {
  a.u = true;
  df(function () {
    if (a.u) {
      wf.call(null, b);
    }
  });
}
var wf = qb;
function nf(a) {
  Sa.call(this, a);
}
Na(nf, Sa);
nf.prototype.name = "cancel";
function xf() {
  this.data = [];
  this.h = -1;
}
xf.prototype.set = function (a, b) {
  b = b === undefined ? true : b;
  if (a >= 0 && a < 52 && Number.isInteger(a) && this.data[a] !== b) {
    this.data[a] = b;
    this.h = -1;
  }
};
xf.prototype.get = function (a) {
  return !!this.data[a];
};
function yf(a) {
  if (a.h === -1) {
    a.h = a.data.reduce(function (b, c, d) {
      return b + (c ? Math.pow(2, d) : 0);
    }, 0);
  }
  return a.h;
}
;
function zf() {
  this.i = -1;
}
;
function Af() {
  this.i = 64;
  this.h = [];
  this.A = [];
  this.C = [];
  this.m = [];
  this.m[0] = 128;
  for (var a = 1; a < this.i; ++a) {
    this.m[a] = 0;
  }
  this.u = this.j = 0;
  this.reset();
}
u(Af, zf);
Af.prototype.reset = function () {
  this.h[0] = 1732584193;
  this.h[1] = 4023233417;
  this.h[2] = 2562383102;
  this.h[3] = 271733878;
  this.h[4] = 3285377520;
  this.u = this.j = 0;
};
function Bf(a, b, c) {
  c ||= 0;
  var d = a.C;
  if (typeof b === "string") {
    for (var e = 0; e < 16; e++) {
      d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3);
      c += 4;
    }
  } else {
    for (e = 0; e < 16; e++) {
      d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3];
      c += 4;
    }
  }
  for (b = 16; b < 80; b++) {
    c = d[b - 3] ^ d[b - 8] ^ d[b - 14] ^ d[b - 16];
    d[b] = (c << 1 | c >>> 31) & -1;
  }
  b = a.h[0];
  c = a.h[1];
  e = a.h[2];
  var f = a.h[3];
  var g = a.h[4];
  var h;
  var k;
  for (var l = 0; l < 80; l++) {
    if (l < 40) {
      if (l < 20) {
        h = f ^ c & (e ^ f);
        k = 1518500249;
      } else {
        h = c ^ e ^ f;
        k = 1859775393;
      }
    } else if (l < 60) {
      h = c & e | f & (c | e);
      k = 2400959708;
    } else {
      h = c ^ e ^ f;
      k = 3395469782;
    }
    h = (b << 5 | b >>> 27) + h + g + k + d[l] & -1;
    g = f;
    f = e;
    e = (c << 30 | c >>> 2) & -1;
    c = b;
    b = h;
  }
  a.h[0] = a.h[0] + b & -1;
  a.h[1] = a.h[1] + c & -1;
  a.h[2] = a.h[2] + e & -1;
  a.h[3] = a.h[3] + f & -1;
  a.h[4] = a.h[4] + g & -1;
}
Af.prototype.update = function (a, b) {
  if (a != null) {
    if (b === undefined) {
      b = a.length;
    }
    var c = b - this.i;
    for (var d = 0, e = this.A, f = this.j; d < b;) {
      if (f == 0) {
        while (d <= c) {
          Bf(this, a, d);
          d += this.i;
        }
      }
      if (typeof a === "string") {
        while (d < b) {
          e[f] = a.charCodeAt(d);
          ++f;
          ++d;
          if (f == this.i) {
            Bf(this, e);
            f = 0;
            break;
          }
        }
      } else {
        while (d < b) {
          e[f] = a[d];
          ++f;
          ++d;
          if (f == this.i) {
            Bf(this, e);
            f = 0;
            break;
          }
        }
      }
    }
    this.j = f;
    this.u += b;
  }
};
Af.prototype.digest = function () {
  var a = [];
  var b = this.u * 8;
  if (this.j < 56) {
    this.update(this.m, 56 - this.j);
  } else {
    this.update(this.m, this.i - (this.j - 56));
  }
  for (var c = this.i - 1; c >= 56; c--) {
    this.A[c] = b & 255;
    b /= 256;
  }
  Bf(this, this.A);
  for (c = b = 0; c < 5; c++) {
    for (var d = 24; d >= 0; d -= 8) {
      a[b] = this.h[c] >> d & 255;
      ++b;
    }
  }
  return a;
};
function Cf() {}
Cf.prototype.next = function () {
  return Df;
};
var Df = {
  done: true,
  value: undefined
};
Cf.prototype.Wa = function () {
  return this;
};
function Ef(a) {
  if (a instanceof Ff || a instanceof Gf || a instanceof Hf) {
    return a;
  }
  if (typeof a.next == "function") {
    return new Ff(function () {
      return a;
    });
  }
  if (typeof a[Symbol.iterator] == "function") {
    return new Ff(function () {
      return a[Symbol.iterator]();
    });
  }
  if (typeof a.Wa == "function") {
    return new Ff(function () {
      return a.Wa();
    });
  }
  throw Error("Not an iterator or iterable.");
}
function Ff(a) {
  this.h = a;
}
Ff.prototype.Wa = function () {
  return new Gf(this.h());
};
Ff.prototype[Symbol.iterator] = function () {
  return new Hf(this.h());
};
Ff.prototype.i = function () {
  return new Hf(this.h());
};
function Gf(a) {
  this.h = a;
}
u(Gf, Cf);
Gf.prototype.next = function () {
  return this.h.next();
};
Gf.prototype[Symbol.iterator] = function () {
  return new Hf(this.h);
};
Gf.prototype.i = function () {
  return new Hf(this.h);
};
function Hf(a) {
  Ff.call(this, function () {
    return a;
  });
  this.j = a;
}
u(Hf, Ff);
Hf.prototype.next = function () {
  return this.j.next();
};
function If(a) {
  var b = [];
  Jf(new Kf(), a, b);
  return b.join("");
}
function Kf() {}
function Jf(a, b, c) {
  if (b == null) {
    c.push("null");
  } else {
    if (typeof b == "object") {
      if (Array.isArray(b)) {
        var d = b;
        b = d.length;
        c.push("[");
        var e = "";
        for (var f = 0; f < b; f++) {
          c.push(e);
          Jf(a, d[f], c);
          e = ",";
        }
        c.push("]");
        return;
      }
      if (b instanceof String || b instanceof Number || b instanceof Boolean) {
        b = b.valueOf();
      } else {
        c.push("{");
        e = "";
        for (d in b) {
          if (Object.prototype.hasOwnProperty.call(b, d)) {
            f = b[d];
            if (typeof f != "function") {
              c.push(e);
              Lf(d, c);
              c.push(":");
              Jf(a, f, c);
              e = ",";
            }
          }
        }
        c.push("}");
        return;
      }
    }
    switch (typeof b) {
      case "string":
        Lf(b, c);
        break;
      case "number":
        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
        break;
      case "boolean":
        c.push(String(b));
        break;
      case "function":
        c.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof b);
    }
  }
}
var Mf = {
  "\"": "\\\"",
  "\\": "\\\\",
  "/": "\\/",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "\t": "\\t",
  "": "\\u000b"
};
var Nf = /\uffff/.test("￿") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
function Lf(a, b) {
  b.push("\"", a.replace(Nf, function (c) {
    var d = Mf[c];
    if (!d) {
      d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1);
      Mf[c] = d;
    }
    return d;
  }), "\"");
}
;
function Of() {
  var a = this;
  this.promise = new Promise(function (b, c) {
    a.resolve = b;
    a.reject = c;
  });
}
;
function O(a) {
  $d.call(this);
  this.A = 1;
  this.j = [];
  this.u = 0;
  this.h = [];
  this.i = {};
  this.C = !!a;
}
Na(O, $d);
r = O.prototype;
r.subscribe = function (a, b, c) {
  var d = this.i[a];
  d ||= this.i[a] = [];
  var e = this.A;
  this.h[e] = a;
  this.h[e + 1] = b;
  this.h[e + 2] = c;
  this.A = e + 3;
  d.push(e);
  return e;
};
r.unsubscribe = function (a, b, c) {
  if (a = this.i[a]) {
    var d = this.h;
    if (a = a.find(function (e) {
      return d[e + 1] == b && d[e + 2] == c;
    })) {
      return this.unsubscribeByKey(a);
    }
  }
  return false;
};
r.unsubscribeByKey = function (a) {
  var b = this.h[a];
  if (b) {
    var c = this.i[b];
    if (this.u != 0) {
      this.j.push(a);
      this.h[a + 1] = function () {};
    } else {
      if (c) {
        cb(c, a);
      }
      delete this.h[a];
      delete this.h[a + 1];
      delete this.h[a + 2];
    }
  }
  return !!b;
};
r.publish = function (a, b) {
  var c = this.i[a];
  if (c) {
    var d = Array(arguments.length - 1);
    var e = arguments.length;
    var f;
    for (f = 1; f < e; f++) {
      d[f - 1] = arguments[f];
    }
    if (this.C) {
      for (f = 0; f < c.length; f++) {
        e = c[f];
        Pf(this.h[e + 1], this.h[e + 2], d);
      }
    } else {
      this.u++;
      try {
        f = 0;
        e = c.length;
        for (; f < e && !this.La; f++) {
          var g = c[f];
          this.h[g + 1].apply(this.h[g + 2], d);
        }
      } finally {
        this.u--;
        if (this.j.length > 0 && this.u == 0) {
          while (c = this.j.pop()) {
            this.unsubscribeByKey(c);
          }
        }
      }
    }
    return f != 0;
  }
  return false;
};
function Pf(a, b, c) {
  df(function () {
    a.apply(b, c);
  });
}
r.clear = function (a) {
  if (a) {
    var b = this.i[a];
    if (b) {
      b.forEach(this.unsubscribeByKey, this);
      delete this.i[a];
    }
  } else {
    this.h.length = 0;
    this.i = {};
  }
};
r.wa = function () {
  O.Da.wa.call(this);
  this.clear();
  this.j.length = 0;
};
function Qf(a) {
  this.h = a;
}
Qf.prototype.set = function (a, b) {
  if (b === undefined) {
    this.h.remove(a);
  } else {
    this.h.set(a, If(b));
  }
};
Qf.prototype.get = function (a) {
  try {
    var b = this.h.get(a);
  } catch (c) {
    return;
  }
  if (b !== null) {
    try {
      return JSON.parse(b);
    } catch (c) {
      throw "Storage: Invalid value was encountered";
    }
  }
};
Qf.prototype.remove = function (a) {
  this.h.remove(a);
};
function Rf(a) {
  this.h = a;
}
Na(Rf, Qf);
function Sf(a) {
  this.data = a;
}
function Tf(a) {
  if (a === undefined || a instanceof Sf) {
    return a;
  } else {
    return new Sf(a);
  }
}
Rf.prototype.set = function (a, b) {
  Rf.Da.set.call(this, a, Tf(b));
};
Rf.prototype.i = function (a) {
  a = Rf.Da.get.call(this, a);
  if (a === undefined || a instanceof Object) {
    return a;
  }
  throw "Storage: Invalid value was encountered";
};
Rf.prototype.get = function (a) {
  if (a = this.i(a)) {
    a = a.data;
    if (a === undefined) {
      throw "Storage: Invalid value was encountered";
    }
  } else {
    a = undefined;
  }
  return a;
};
function Uf(a) {
  this.h = a;
}
Na(Uf, Rf);
Uf.prototype.set = function (a, b, c) {
  if (b = Tf(b)) {
    if (c) {
      if (c < Ma()) {
        Uf.prototype.remove.call(this, a);
        return;
      }
      b.expiration = c;
    }
    b.creation = Ma();
  }
  Uf.Da.set.call(this, a, b);
};
Uf.prototype.i = function (a) {
  var b = Uf.Da.i.call(this, a);
  if (b) {
    var c = b.creation;
    var d = b.expiration;
    if (d && d < Ma() || c && c > Ma()) {
      Uf.prototype.remove.call(this, a);
    } else {
      return b;
    }
  }
};
function Vf() {}
;
function Wf() {}
Na(Wf, Vf);
Wf.prototype[Symbol.iterator] = function () {
  return Ef(this.Wa(true)).i();
};
Wf.prototype.clear = function () {
  var a = Array.from(this);
  a = v(a);
  var b = a.next();
  try {
    for (; !b.done; b = a.next()) {
      this.remove(b.value);
    }
  } finally {
    A(a, b);
  }
};
function Xf(a) {
  this.h = a;
  this.i = null;
}
Na(Xf, Wf);
r = Xf.prototype;
r.isAvailable = function () {
  if (this.i === null) {
    var a = this.h;
    if (a) {
      try {
        a.setItem("__sak", "1");
        a.removeItem("__sak");
        var b = true;
      } catch (c) {
        b = c instanceof DOMException && (c.name === "QuotaExceededError" || c.code === 22 || c.code === 1014 || c.name === "NS_ERROR_DOM_QUOTA_REACHED") && a && a.length !== 0;
      }
    } else {
      b = false;
    }
    this.i = b;
  }
  return this.i;
};
r.set = function (a, b) {
  Yf(this);
  try {
    this.h.setItem(a, b);
  } catch (c) {
    if (this.h.length == 0) {
      throw "Storage mechanism: Storage disabled";
    }
    throw "Storage mechanism: Quota exceeded";
  }
};
r.get = function (a) {
  Yf(this);
  a = this.h.getItem(a);
  if (typeof a !== "string" && a !== null) {
    throw "Storage mechanism: Invalid value was encountered";
  }
  return a;
};
r.remove = function (a) {
  Yf(this);
  this.h.removeItem(a);
};
r.Wa = function (a) {
  Yf(this);
  var b = 0;
  var c = this.h;
  var d = new Cf();
  d.next = function () {
    if (b >= c.length) {
      return Df;
    }
    var e = c.key(b++);
    if (a) {
      return {
        value: e,
        done: false
      };
    }
    e = c.getItem(e);
    if (typeof e !== "string") {
      throw "Storage mechanism: Invalid value was encountered";
    }
    return {
      value: e,
      done: false
    };
  };
  return d;
};
r.clear = function () {
  Yf(this);
  this.h.clear();
};
r.key = function (a) {
  Yf(this);
  return this.h.key(a);
};
function Yf(a) {
  if (a.h == null) {
    throw Error("Storage mechanism: Storage unavailable");
  }
  if (!a.isAvailable()) {
    qb(Error("Storage mechanism: Storage unavailable"));
  }
}
;
function Zf() {
  var a = null;
  try {
    a = E.localStorage || null;
  } catch (b) {}
  Xf.call(this, a);
}
Na(Zf, Xf);
function $f(a, b) {
  this.i = a;
  this.h = b + "::";
}
Na($f, Wf);
$f.prototype.set = function (a, b) {
  this.i.set(this.h + a, b);
};
$f.prototype.get = function (a) {
  return this.i.get(this.h + a);
};
$f.prototype.remove = function (a) {
  this.i.remove(this.h + a);
};
$f.prototype.Wa = function (a) {
  var b = this.i[Symbol.iterator]();
  var c = this;
  var d = new Cf();
  d.next = function () {
    var e = b.next();
    if (e.done) {
      return e;
    }
    for (e = e.value; e.slice(0, c.h.length) != c.h;) {
      e = b.next();
      if (e.done) {
        return e;
      }
      e = e.value;
    }
    return {
      value: a ? e.slice(c.h.length) : c.i.get(e),
      done: false
    };
  };
  return d;
}; /*
   (The MIT License)
   Copyright (C) 2014 by Vitaly Puzrin
   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:
   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE.
   -----------------------------------------------------------------------------
   Ported from zlib, which is under the following license
   https://github.com/madler/zlib/blob/master/zlib.h
   zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
   claim that you wrote the original software. If you use this software
   in a product, an acknowledgment in the product documentation would be
   appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
   misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
   */
var Q = {};
var ag = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
Q.assign = function (a) {
  for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
    var c = b.shift();
    if (c) {
      if (typeof c !== "object") {
        throw new TypeError(c + "must be non-object");
      }
      for (var d in c) {
        if (Object.prototype.hasOwnProperty.call(c, d)) {
          a[d] = c[d];
        }
      }
    }
  }
  return a;
};
Q.kc = function (a, b) {
  if (a.length === b) {
    return a;
  }
  if (a.subarray) {
    return a.subarray(0, b);
  }
  a.length = b;
  return a;
};
var bg = {
  Xa: function (a, b, c, d, e) {
    if (b.subarray && a.subarray) {
      a.set(b.subarray(c, c + d), e);
    } else {
      for (var f = 0; f < d; f++) {
        a[e + f] = b[c + f];
      }
    }
  },
  xc: function (a) {
    var b;
    var c;
    var d = c = 0;
    for (b = a.length; d < b; d++) {
      c += a[d].length;
    }
    var e = new Uint8Array(c);
    d = c = 0;
    for (b = a.length; d < b; d++) {
      var f = a[d];
      e.set(f, c);
      c += f.length;
    }
    return e;
  }
};
var cg = {
  Xa: function (a, b, c, d, e) {
    for (var f = 0; f < d; f++) {
      a[e + f] = b[c + f];
    }
  },
  xc: function (a) {
    return [].concat.apply([], a);
  }
};
Q.Ed = function () {
  if (ag) {
    Q.Ua = Uint8Array;
    Q.pa = Uint16Array;
    Q.Tc = Int32Array;
    Q.assign(Q, bg);
  } else {
    Q.Ua = Array;
    Q.pa = Array;
    Q.Tc = Array;
    Q.assign(Q, cg);
  }
};
Q.Ed();
var dg = true;
try {
  new Uint8Array(1);
} catch (a) {
  dg = false;
}
function eg(a) {
  var b;
  var c;
  var d = a.length;
  var e = 0;
  for (b = 0; b < d; b++) {
    var f = a.charCodeAt(b);
    if ((f & 64512) === 55296 && b + 1 < d) {
      var g = a.charCodeAt(b + 1);
      if ((g & 64512) === 56320) {
        f = 65536 + (f - 55296 << 10) + (g - 56320);
        b++;
      }
    }
    e += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
  }
  var h = new Q.Ua(e);
  for (b = c = 0; c < e; b++) {
    f = a.charCodeAt(b);
    if ((f & 64512) === 55296 && b + 1 < d) {
      g = a.charCodeAt(b + 1);
      if ((g & 64512) === 56320) {
        f = 65536 + (f - 55296 << 10) + (g - 56320);
        b++;
      }
    }
    if (f < 128) {
      h[c++] = f;
    } else {
      if (f < 2048) {
        h[c++] = f >>> 6 | 192;
      } else {
        if (f < 65536) {
          h[c++] = f >>> 12 | 224;
        } else {
          h[c++] = f >>> 18 | 240;
          h[c++] = f >>> 12 & 63 | 128;
        }
        h[c++] = f >>> 6 & 63 | 128;
      }
      h[c++] = f & 63 | 128;
    }
  }
  return h;
}
;
var fg = {};
fg = function (a, b, c, d) {
  var e = a & 65535 | 0;
  a = a >>> 16 & 65535 | 0;
  var f;
  for (; c !== 0;) {
    f = c > 2000 ? 2000 : c;
    c -= f;
    do {
      e = e + b[d++] | 0;
      a = a + e | 0;
    } while (--f);
    e %= 65521;
    a %= 65521;
  }
  return e | a << 16 | 0;
};
var gg = {};
var hg;
var ig = [];
for (var jg = 0; jg < 256; jg++) {
  hg = jg;
  for (var kg = 0; kg < 8; kg++) {
    hg = hg & 1 ? hg >>> 1 ^ -306674912 : hg >>> 1;
  }
  ig[jg] = hg;
}
gg = function (a, b, c, d) {
  c = d + c;
  for (a ^= -1; d < c; d++) {
    a = a >>> 8 ^ ig[(a ^ b[d]) & 255];
  }
  return a ^ -1;
};
var lg = {};
lg = {
  2: "need dictionary",
  1: "stream end",
  0: "",
  "-1": "file error",
  "-2": "stream error",
  "-3": "data error",
  "-4": "insufficient memory",
  "-5": "buffer error",
  "-6": "incompatible version"
};
function mg(a) {
  for (var b = a.length; --b >= 0;) {
    a[b] = 0;
  }
}
var ng = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
var og = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
var pg = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
var qg = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
var rg = Array(576);
mg(rg);
var sg = Array(60);
mg(sg);
var tg = Array(512);
mg(tg);
var ug = Array(256);
mg(ug);
var vg = Array(29);
mg(vg);
var wg = Array(30);
mg(wg);
function xg(a, b, c, d, e) {
  this.Oc = a;
  this.hd = b;
  this.gd = c;
  this.dd = d;
  this.wd = e;
  this.Ac = a && a.length;
}
var yg;
var zg;
var Ag;
function Bg(a, b) {
  this.sc = a;
  this.fb = 0;
  this.Ha = b;
}
function Cg(a, b) {
  a.M[a.pending++] = b & 255;
  a.M[a.pending++] = b >>> 8 & 255;
}
function Dg(a, b, c) {
  if (a.T > 16 - c) {
    a.Z |= b << a.T & 65535;
    Cg(a, a.Z);
    a.Z = b >> 16 - a.T;
    a.T += c - 16;
  } else {
    a.Z |= b << a.T & 65535;
    a.T += c;
  }
}
function Eg(a, b, c) {
  Dg(a, c[b * 2], c[b * 2 + 1]);
}
function Fg(a, b) {
  var c = 0;
  do {
    c |= a & 1;
    a >>>= 1;
    c <<= 1;
  } while (--b > 0);
  return c >>> 1;
}
function Gg(a, b, c) {
  var d = Array(16);
  var e = 0;
  var f;
  for (f = 1; f <= 15; f++) {
    d[f] = e = e + c[f - 1] << 1;
  }
  for (c = 0; c <= b; c++) {
    e = a[c * 2 + 1];
    if (e !== 0) {
      a[c * 2] = Fg(d[e]++, e);
    }
  }
}
function Hg(a) {
  var b;
  for (b = 0; b < 286; b++) {
    a.ca[b * 2] = 0;
  }
  for (b = 0; b < 30; b++) {
    a.Ma[b * 2] = 0;
  }
  for (b = 0; b < 19; b++) {
    a.W[b * 2] = 0;
  }
  a.ca[512] = 1;
  a.Ba = a.jb = 0;
  a.ja = a.matches = 0;
}
function Ig(a) {
  if (a.T > 8) {
    Cg(a, a.Z);
  } else if (a.T > 0) {
    a.M[a.pending++] = a.Z;
  }
  a.Z = 0;
  a.T = 0;
}
function Jg(a, b, c) {
  Ig(a);
  Cg(a, c);
  Cg(a, ~c);
  Q.Xa(a.M, a.window, b, c, a.pending);
  a.pending += c;
}
function Kg(a, b, c, d) {
  var e = b * 2;
  var f = c * 2;
  return a[e] < a[f] || a[e] === a[f] && d[b] <= d[c];
}
function Lg(a, b, c) {
  var d = a.O[c];
  for (var e = c << 1; e <= a.za;) {
    if (e < a.za && Kg(b, a.O[e + 1], a.O[e], a.depth)) {
      e++;
    }
    if (Kg(b, d, a.O[e], a.depth)) {
      break;
    }
    a.O[c] = a.O[e];
    c = e;
    e <<= 1;
  }
  a.O[c] = d;
}
function Mg(a, b, c) {
  var d = 0;
  if (a.ja !== 0) {
    do {
      var e = a.M[a.mb + d * 2] << 8 | a.M[a.mb + d * 2 + 1];
      var f = a.M[a.Ub + d];
      d++;
      if (e === 0) {
        Eg(a, f, b);
      } else {
        var g = ug[f];
        Eg(a, g + 256 + 1, b);
        var h = ng[g];
        if (h !== 0) {
          f -= vg[g];
          Dg(a, f, h);
        }
        e--;
        g = e < 256 ? tg[e] : tg[256 + (e >>> 7)];
        Eg(a, g, c);
        h = og[g];
        if (h !== 0) {
          e -= wg[g];
          Dg(a, e, h);
        }
      }
    } while (d < a.ja);
  }
  Eg(a, 256, b);
}
function Ng(a, b) {
  var c = b.sc;
  var d = b.Ha.Oc;
  var e = b.Ha.Ac;
  var f = b.Ha.dd;
  var g;
  var h = -1;
  a.za = 0;
  a.ab = 573;
  for (g = 0; g < f; g++) {
    if (c[g * 2] !== 0) {
      a.O[++a.za] = h = g;
      a.depth[g] = 0;
    } else {
      c[g * 2 + 1] = 0;
    }
  }
  while (a.za < 2) {
    var k = a.O[++a.za] = h < 2 ? ++h : 0;
    c[k * 2] = 1;
    a.depth[k] = 0;
    a.Ba--;
    if (e) {
      a.jb -= d[k * 2 + 1];
    }
  }
  b.fb = h;
  for (g = a.za >> 1; g >= 1; g--) {
    Lg(a, c, g);
  }
  k = f;
  do {
    g = a.O[1];
    a.O[1] = a.O[a.za--];
    Lg(a, c, 1);
    d = a.O[1];
    a.O[--a.ab] = g;
    a.O[--a.ab] = d;
    c[k * 2] = c[g * 2] + c[d * 2];
    a.depth[k] = (a.depth[g] >= a.depth[d] ? a.depth[g] : a.depth[d]) + 1;
    c[g * 2 + 1] = c[d * 2 + 1] = k;
    a.O[1] = k++;
    Lg(a, c, 1);
  } while (a.za >= 2);
  a.O[--a.ab] = a.O[1];
  g = b.sc;
  k = b.fb;
  d = b.Ha.Oc;
  e = b.Ha.Ac;
  f = b.Ha.hd;
  var l = b.Ha.gd;
  var m = b.Ha.wd;
  var n;
  var q = 0;
  for (n = 0; n <= 15; n++) {
    a.ta[n] = 0;
  }
  g[a.O[a.ab] * 2 + 1] = 0;
  for (b = a.ab + 1; b < 573; b++) {
    var p = a.O[b];
    n = g[g[p * 2 + 1] * 2 + 1] + 1;
    if (n > m) {
      n = m;
      q++;
    }
    g[p * 2 + 1] = n;
    if (!(p > k)) {
      a.ta[n]++;
      var x = 0;
      if (p >= l) {
        x = f[p - l];
      }
      var y = g[p * 2];
      a.Ba += y * (n + x);
      if (e) {
        a.jb += y * (d[p * 2 + 1] + x);
      }
    }
  }
  if (q !== 0) {
    do {
      for (n = m - 1; a.ta[n] === 0;) {
        n--;
      }
      a.ta[n]--;
      a.ta[n + 1] += 2;
      a.ta[m]--;
      q -= 2;
    } while (q > 0);
    for (n = m; n !== 0; n--) {
      for (p = a.ta[n]; p !== 0;) {
        d = a.O[--b];
        if (!(d > k)) {
          if (g[d * 2 + 1] !== n) {
            a.Ba += (n - g[d * 2 + 1]) * g[d * 2];
            g[d * 2 + 1] = n;
          }
          p--;
        }
      }
    }
  }
  Gg(c, h, a.ta);
}
function Og(a, b, c) {
  var d;
  var e = -1;
  var f = b[1];
  var g = 0;
  var h = 7;
  var k = 4;
  if (f === 0) {
    h = 138;
    k = 3;
  }
  b[(c + 1) * 2 + 1] = 65535;
  for (d = 0; d <= c; d++) {
    var l = f;
    f = b[(d + 1) * 2 + 1];
    if (!(++g < h) || l !== f) {
      if (g < k) {
        a.W[l * 2] += g;
      } else if (l !== 0) {
        if (l !== e) {
          a.W[l * 2]++;
        }
        a.W[32]++;
      } else if (g <= 10) {
        a.W[34]++;
      } else {
        a.W[36]++;
      }
      g = 0;
      e = l;
      if (f === 0) {
        h = 138;
        k = 3;
      } else if (l === f) {
        h = 6;
        k = 3;
      } else {
        h = 7;
        k = 4;
      }
    }
  }
}
function Pg(a, b, c) {
  var d;
  var e = -1;
  var f = b[1];
  var g = 0;
  var h = 7;
  var k = 4;
  if (f === 0) {
    h = 138;
    k = 3;
  }
  for (d = 0; d <= c; d++) {
    var l = f;
    f = b[(d + 1) * 2 + 1];
    if (!(++g < h) || l !== f) {
      if (g < k) {
        do {
          Eg(a, l, a.W);
        } while (--g !== 0);
      } else if (l !== 0) {
        if (l !== e) {
          Eg(a, l, a.W);
          g--;
        }
        Eg(a, 16, a.W);
        Dg(a, g - 3, 2);
      } else if (g <= 10) {
        Eg(a, 17, a.W);
        Dg(a, g - 3, 3);
      } else {
        Eg(a, 18, a.W);
        Dg(a, g - 11, 7);
      }
      g = 0;
      e = l;
      if (f === 0) {
        h = 138;
        k = 3;
      } else if (l === f) {
        h = 6;
        k = 3;
      } else {
        h = 7;
        k = 4;
      }
    }
  }
}
function Qg(a) {
  var b = 4093624447;
  var c;
  for (c = 0; c <= 31; c++, b >>>= 1) {
    if (b & 1 && a.ca[c * 2] !== 0) {
      return 0;
    }
  }
  if (a.ca[18] !== 0 || a.ca[20] !== 0 || a.ca[26] !== 0) {
    return 1;
  }
  for (c = 32; c < 256; c++) {
    if (a.ca[c * 2] !== 0) {
      return 1;
    }
  }
  return 0;
}
var Rg = false;
function Sg(a, b, c) {
  a.M[a.mb + a.ja * 2] = b >>> 8 & 255;
  a.M[a.mb + a.ja * 2 + 1] = b & 255;
  a.M[a.Ub + a.ja] = c & 255;
  a.ja++;
  if (b === 0) {
    a.ca[c * 2]++;
  } else {
    a.matches++;
    b--;
    a.ca[(ug[c] + 256 + 1) * 2]++;
    a.Ma[(b < 256 ? tg[b] : tg[256 + (b >>> 7)]) * 2]++;
  }
  return a.ja === a.pb - 1;
}
;
function Tg(a, b) {
  a.msg = lg[b];
  return b;
}
function Ug(a) {
  for (var b = a.length; --b >= 0;) {
    a[b] = 0;
  }
}
function Vg(a) {
  var b = a.state;
  var c = b.pending;
  if (c > a.I) {
    c = a.I;
  }
  if (c !== 0) {
    Q.Xa(a.output, b.M, b.rb, c, a.gb);
    a.gb += c;
    b.rb += c;
    a.lc += c;
    a.I -= c;
    b.pending -= c;
    if (b.pending === 0) {
      b.rb = 0;
    }
  }
}
function Wg(a, b) {
  var c = a.ea >= 0 ? a.ea : -1;
  var d = a.l - a.ea;
  var e = 0;
  if (a.level > 0) {
    if (a.G.Ob === 2) {
      a.G.Ob = Qg(a);
    }
    Ng(a, a.Eb);
    Ng(a, a.Bb);
    Og(a, a.ca, a.Eb.fb);
    Og(a, a.Ma, a.Bb.fb);
    Ng(a, a.nc);
    for (e = 18; e >= 3 && a.W[qg[e] * 2 + 1] === 0; e--);
    a.Ba += (e + 1) * 3 + 5 + 5 + 4;
    var f = a.Ba + 3 + 7 >>> 3;
    var g = a.jb + 3 + 7 >>> 3;
    if (g <= f) {
      f = g;
    }
  } else {
    f = g = d + 5;
  }
  if (d + 4 <= f && c !== -1) {
    Dg(a, b ? 1 : 0, 3);
    Jg(a, c, d);
  } else if (a.strategy === 4 || g === f) {
    Dg(a, 2 + (b ? 1 : 0), 3);
    Mg(a, rg, sg);
  } else {
    Dg(a, 4 + (b ? 1 : 0), 3);
    c = a.Eb.fb + 1;
    d = a.Bb.fb + 1;
    e += 1;
    Dg(a, c - 257, 5);
    Dg(a, d - 1, 5);
    Dg(a, e - 4, 4);
    for (f = 0; f < e; f++) {
      Dg(a, a.W[qg[f] * 2 + 1], 3);
    }
    Pg(a, a.ca, c - 1);
    Pg(a, a.Ma, d - 1);
    Mg(a, a.ca, a.Ma);
  }
  Hg(a);
  if (b) {
    Ig(a);
  }
  a.ea = a.l;
  Vg(a.G);
}
function R(a, b) {
  a.M[a.pending++] = b;
}
function Xg(a, b) {
  a.M[a.pending++] = b >>> 8 & 255;
  a.M[a.pending++] = b & 255;
}
function Yg(a, b) {
  var c = a.Fc;
  var d = a.l;
  var e = a.fa;
  var f = a.Gc;
  var g = a.l > a.X - 262 ? a.l - (a.X - 262) : 0;
  var h = a.window;
  var k = a.Ia;
  var l = a.oa;
  var m = a.l + 258;
  var n = h[d + e - 1];
  var q = h[d + e];
  if (a.fa >= a.zc) {
    c >>= 2;
  }
  if (f > a.o) {
    f = a.o;
  }
  do {
    var p = b;
    if (h[p + e] === q && h[p + e - 1] === n && h[p] === h[d] && h[++p] === h[d + 1]) {
      d += 2;
      for (p++; h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && h[++d] === h[++p] && d < m;);
      p = 258 - (m - d);
      d = m - 258;
      if (p > e) {
        a.eb = b;
        e = p;
        if (p >= f) {
          break;
        }
        n = h[d + e - 1];
        q = h[d + e];
      }
    }
  } while ((b = l[b & k]) > g && --c !== 0);
  if (e <= a.o) {
    return e;
  } else {
    return a.o;
  }
}
function Zg(a) {
  var b = a.X;
  var c;
  do {
    var d = a.Qc - a.o - a.l;
    if (a.l >= b + (b - 262)) {
      Q.Xa(a.window, a.window, b, b, 0);
      a.eb -= b;
      a.l -= b;
      a.ea -= b;
      var e = c = a.Db;
      do {
        var f = a.head[--e];
        a.head[e] = f >= b ? f - b : 0;
      } while (--c);
      e = c = b;
      do {
        f = a.oa[--e];
        a.oa[e] = f >= b ? f - b : 0;
      } while (--c);
      d += b;
    }
    if (a.G.Y === 0) {
      break;
    }
    e = a.G;
    c = a.window;
    f = a.l + a.o;
    var g = e.Y;
    if (g > d) {
      g = d;
    }
    if (g === 0) {
      c = 0;
    } else {
      e.Y -= g;
      Q.Xa(c, e.input, e.Ra, g, f);
      if (e.state.wrap === 1) {
        e.F = fg(e.F, c, g, f);
      } else if (e.state.wrap === 2) {
        e.F = gg(e.F, c, g, f);
      }
      e.Ra += g;
      e.Ta += g;
      c = g;
    }
    a.o += c;
    if (a.o + a.da >= 3) {
      d = a.l - a.da;
      a.H = a.window[d];
      a.H = (a.H << a.ya ^ a.window[d + 1]) & a.xa;
      while (a.da && !(a.H = (a.H << a.ya ^ a.window[d + 3 - 1]) & a.xa, a.oa[d & a.Ia] = a.head[a.H], a.head[a.H] = d, d++, a.da--, a.o + a.da < 3));
    }
  } while (a.o < 262 && a.G.Y !== 0);
}
function $g(a, b) {
  for (var c;;) {
    if (a.o < 262) {
      Zg(a);
      if (a.o < 262 && b === 0) {
        return 1;
      }
      if (a.o === 0) {
        break;
      }
    }
    c = 0;
    if (a.o >= 3) {
      a.H = (a.H << a.ya ^ a.window[a.l + 3 - 1]) & a.xa;
      c = a.oa[a.l & a.Ia] = a.head[a.H];
      a.head[a.H] = a.l;
    }
    if (c !== 0 && a.l - c <= a.X - 262) {
      a.J = Yg(a, c);
    }
    if (a.J >= 3) {
      c = Sg(a, a.l - a.eb, a.J - 3);
      a.o -= a.J;
      if (a.J <= a.Wb && a.o >= 3) {
        a.J--;
        do {
          a.l++;
          a.H = (a.H << a.ya ^ a.window[a.l + 3 - 1]) & a.xa;
          a.oa[a.l & a.Ia] = a.head[a.H];
          a.head[a.H] = a.l;
        } while (--a.J !== 0);
        a.l++;
      } else {
        a.l += a.J;
        a.J = 0;
        a.H = a.window[a.l];
        a.H = (a.H << a.ya ^ a.window[a.l + 1]) & a.xa;
      }
    } else {
      c = Sg(a, 0, a.window[a.l]);
      a.o--;
      a.l++;
    }
    if (c && (Wg(a, false), a.G.I === 0)) {
      return 1;
    }
  }
  a.da = a.l < 2 ? a.l : 2;
  if (b === 4) {
    Wg(a, true);
    if (a.G.I === 0) {
      return 3;
    } else {
      return 4;
    }
  } else if (a.ja && (Wg(a, false), a.G.I === 0)) {
    return 1;
  } else {
    return 2;
  }
}
function ah(a, b) {
  var c;
  var d;
  while (true) {
    if (a.o < 262) {
      Zg(a);
      if (a.o < 262 && b === 0) {
        return 1;
      }
      if (a.o === 0) {
        break;
      }
    }
    c = 0;
    if (a.o >= 3) {
      a.H = (a.H << a.ya ^ a.window[a.l + 3 - 1]) & a.xa;
      c = a.oa[a.l & a.Ia] = a.head[a.H];
      a.head[a.H] = a.l;
    }
    a.fa = a.J;
    a.Hc = a.eb;
    a.J = 2;
    if (c !== 0 && a.fa < a.Wb && a.l - c <= a.X - 262) {
      a.J = Yg(a, c);
      if (a.J <= 5 && (a.strategy === 1 || a.J === 3 && a.l - a.eb > 4096)) {
        a.J = 2;
      }
    }
    if (a.fa >= 3 && a.J <= a.fa) {
      d = a.l + a.o - 3;
      c = Sg(a, a.l - 1 - a.Hc, a.fa - 3);
      a.o -= a.fa - 1;
      a.fa -= 2;
      do {
        if (++a.l <= d) {
          a.H = (a.H << a.ya ^ a.window[a.l + 3 - 1]) & a.xa;
          a.oa[a.l & a.Ia] = a.head[a.H];
          a.head[a.H] = a.l;
        }
      } while (--a.fa !== 0);
      a.Pa = 0;
      a.J = 2;
      a.l++;
      if (c && (Wg(a, false), a.G.I === 0)) {
        return 1;
      }
    } else if (a.Pa) {
      if (c = Sg(a, 0, a.window[a.l - 1])) {
        Wg(a, false);
      }
      a.l++;
      a.o--;
      if (a.G.I === 0) {
        return 1;
      }
    } else {
      a.Pa = 1;
      a.l++;
      a.o--;
    }
  }
  if (a.Pa) {
    Sg(a, 0, a.window[a.l - 1]);
    a.Pa = 0;
  }
  a.da = a.l < 2 ? a.l : 2;
  if (b === 4) {
    Wg(a, true);
    if (a.G.I === 0) {
      return 3;
    } else {
      return 4;
    }
  } else if (a.ja && (Wg(a, false), a.G.I === 0)) {
    return 1;
  } else {
    return 2;
  }
}
function bh(a, b) {
  var c;
  var d;
  var e;
  var f = a.window;
  while (true) {
    if (a.o <= 258) {
      Zg(a);
      if (a.o <= 258 && b === 0) {
        return 1;
      }
      if (a.o === 0) {
        break;
      }
    }
    a.J = 0;
    if (a.o >= 3 && a.l > 0 && (d = a.l - 1, c = f[d], c === f[++d] && c === f[++d] && c === f[++d])) {
      for (e = a.l + 258; c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && d < e;);
      a.J = 258 - (e - d);
      if (a.J > a.o) {
        a.J = a.o;
      }
    }
    if (a.J >= 3) {
      c = Sg(a, 1, a.J - 3);
      a.o -= a.J;
      a.l += a.J;
      a.J = 0;
    } else {
      c = Sg(a, 0, a.window[a.l]);
      a.o--;
      a.l++;
    }
    if (c && (Wg(a, false), a.G.I === 0)) {
      return 1;
    }
  }
  a.da = 0;
  if (b === 4) {
    Wg(a, true);
    if (a.G.I === 0) {
      return 3;
    } else {
      return 4;
    }
  } else if (a.ja && (Wg(a, false), a.G.I === 0)) {
    return 1;
  } else {
    return 2;
  }
}
function ch(a, b) {
  var c;
  for (;;) {
    if (a.o === 0 && (Zg(a), a.o === 0)) {
      if (b === 0) {
        return 1;
      }
      break;
    }
    a.J = 0;
    c = Sg(a, 0, a.window[a.l]);
    a.o--;
    a.l++;
    if (c && (Wg(a, false), a.G.I === 0)) {
      return 1;
    }
  }
  a.da = 0;
  if (b === 4) {
    Wg(a, true);
    if (a.G.I === 0) {
      return 3;
    } else {
      return 4;
    }
  } else if (a.ja && (Wg(a, false), a.G.I === 0)) {
    return 1;
  } else {
    return 2;
  }
}
function dh(a, b, c, d, e) {
  this.ld = a;
  this.vd = b;
  this.zd = c;
  this.ud = d;
  this.jd = e;
}
var eh;
eh = [new dh(0, 0, 0, 0, function (a, b) {
  var c = 65535;
  for (c > a.ka - 5 && (c = a.ka - 5);;) {
    if (a.o <= 1) {
      Zg(a);
      if (a.o === 0 && b === 0) {
        return 1;
      }
      if (a.o === 0) {
        break;
      }
    }
    a.l += a.o;
    a.o = 0;
    var d = a.ea + c;
    if (a.l === 0 || a.l >= d) {
      a.o = a.l - d;
      a.l = d;
      Wg(a, false);
      if (a.G.I === 0) {
        return 1;
      }
    }
    if (a.l - a.ea >= a.X - 262 && (Wg(a, false), a.G.I === 0)) {
      return 1;
    }
  }
  a.da = 0;
  if (b === 4) {
    Wg(a, true);
    if (a.G.I === 0) {
      return 3;
    } else {
      return 4;
    }
  }
  if (a.l > a.ea) {
    Wg(a, false);
  }
  return 1;
}), new dh(4, 4, 8, 4, $g), new dh(4, 5, 16, 8, $g), new dh(4, 6, 32, 32, $g), new dh(4, 4, 16, 16, ah), new dh(8, 16, 32, 32, ah), new dh(8, 16, 128, 128, ah), new dh(8, 32, 128, 256, ah), new dh(32, 128, 258, 1024, ah), new dh(32, 258, 258, 4096, ah)];
function fh() {
  this.G = null;
  this.status = 0;
  this.M = null;
  this.wrap = this.pending = this.rb = this.ka = 0;
  this.D = null;
  this.la = 0;
  this.method = 8;
  this.cb = -1;
  this.Ia = this.mc = this.X = 0;
  this.window = null;
  this.Qc = 0;
  this.head = this.oa = null;
  this.Gc = this.zc = this.strategy = this.level = this.Wb = this.Fc = this.fa = this.o = this.eb = this.l = this.Pa = this.Hc = this.J = this.ea = this.ya = this.xa = this.Qb = this.Db = this.H = 0;
  this.ca = new Q.pa(1146);
  this.Ma = new Q.pa(122);
  this.W = new Q.pa(78);
  Ug(this.ca);
  Ug(this.Ma);
  Ug(this.W);
  this.nc = this.Bb = this.Eb = null;
  this.ta = new Q.pa(16);
  this.O = new Q.pa(573);
  Ug(this.O);
  this.ab = this.za = 0;
  this.depth = new Q.pa(573);
  Ug(this.depth);
  this.T = this.Z = this.da = this.matches = this.jb = this.Ba = this.mb = this.ja = this.pb = this.Ub = 0;
}
function gh(a, b) {
  if (!a || !a.state || b > 5 || b < 0) {
    if (a) {
      return Tg(a, -2);
    } else {
      return -2;
    }
  }
  var c = a.state;
  if (!a.output || !a.input && a.Y !== 0 || c.status === 666 && b !== 4) {
    return Tg(a, a.I === 0 ? -5 : -2);
  }
  c.G = a;
  var d = c.cb;
  c.cb = b;
  if (c.status === 42) {
    if (c.wrap === 2) {
      a.F = 0;
      R(c, 31);
      R(c, 139);
      R(c, 8);
      if (c.D) {
        R(c, (c.D.text ? 1 : 0) + (c.D.Fa ? 2 : 0) + (c.D.extra ? 4 : 0) + (c.D.name ? 8 : 0) + (c.D.comment ? 16 : 0));
        R(c, c.D.time & 255);
        R(c, c.D.time >> 8 & 255);
        R(c, c.D.time >> 16 & 255);
        R(c, c.D.time >> 24 & 255);
        R(c, c.level === 9 ? 2 : c.strategy >= 2 || c.level < 2 ? 4 : 0);
        R(c, c.D.os & 255);
        if (c.D.extra && c.D.extra.length) {
          R(c, c.D.extra.length & 255);
          R(c, c.D.extra.length >> 8 & 255);
        }
        if (c.D.Fa) {
          a.F = gg(a.F, c.M, c.pending, 0);
        }
        c.la = 0;
        c.status = 69;
      } else {
        R(c, 0);
        R(c, 0);
        R(c, 0);
        R(c, 0);
        R(c, 0);
        R(c, c.level === 9 ? 2 : c.strategy >= 2 || c.level < 2 ? 4 : 0);
        R(c, 3);
        c.status = 113;
      }
    } else {
      var e = 8 + (c.mc - 8 << 4) << 8;
      e |= (c.strategy >= 2 || c.level < 2 ? 0 : c.level < 6 ? 1 : c.level === 6 ? 2 : 3) << 6;
      if (c.l !== 0) {
        e |= 32;
      }
      e += 31 - e % 31;
      c.status = 113;
      Xg(c, e);
      if (c.l !== 0) {
        Xg(c, a.F >>> 16);
        Xg(c, a.F & 65535);
      }
      a.F = 1;
    }
  }
  if (c.status === 69) {
    if (c.D.extra) {
      for (e = c.pending; c.la < (c.D.extra.length & 65535) && (c.pending !== c.ka || (c.D.Fa && c.pending > e && (a.F = gg(a.F, c.M, c.pending - e, e)), Vg(a), e = c.pending, c.pending !== c.ka));) {
        R(c, c.D.extra[c.la] & 255);
        c.la++;
      }
      if (c.D.Fa && c.pending > e) {
        a.F = gg(a.F, c.M, c.pending - e, e);
      }
      if (c.la === c.D.extra.length) {
        c.la = 0;
        c.status = 73;
      }
    } else {
      c.status = 73;
    }
  }
  if (c.status === 73) {
    if (c.D.name) {
      e = c.pending;
      do {
        if (c.pending === c.ka && (c.D.Fa && c.pending > e && (a.F = gg(a.F, c.M, c.pending - e, e)), Vg(a), e = c.pending, c.pending === c.ka)) {
          var f = 1;
          break;
        }
        f = c.la < c.D.name.length ? c.D.name.charCodeAt(c.la++) & 255 : 0;
        R(c, f);
      } while (f !== 0);
      if (c.D.Fa && c.pending > e) {
        a.F = gg(a.F, c.M, c.pending - e, e);
      }
      if (f === 0) {
        c.la = 0;
        c.status = 91;
      }
    } else {
      c.status = 91;
    }
  }
  if (c.status === 91) {
    if (c.D.comment) {
      e = c.pending;
      do {
        if (c.pending === c.ka && (c.D.Fa && c.pending > e && (a.F = gg(a.F, c.M, c.pending - e, e)), Vg(a), e = c.pending, c.pending === c.ka)) {
          f = 1;
          break;
        }
        f = c.la < c.D.comment.length ? c.D.comment.charCodeAt(c.la++) & 255 : 0;
        R(c, f);
      } while (f !== 0);
      if (c.D.Fa && c.pending > e) {
        a.F = gg(a.F, c.M, c.pending - e, e);
      }
      if (f === 0) {
        c.status = 103;
      }
    } else {
      c.status = 103;
    }
  }
  if (c.status === 103) {
    if (c.D.Fa) {
      if (c.pending + 2 > c.ka) {
        Vg(a);
      }
      if (c.pending + 2 <= c.ka) {
        R(c, a.F & 255);
        R(c, a.F >> 8 & 255);
        a.F = 0;
        c.status = 113;
      }
    } else {
      c.status = 113;
    }
  }
  if (c.pending !== 0) {
    Vg(a);
    if (a.I === 0) {
      c.cb = -1;
      return 0;
    }
  } else if (a.Y === 0 && (b << 1) - (b > 4 ? 9 : 0) <= (d << 1) - (d > 4 ? 9 : 0) && b !== 4) {
    return Tg(a, -5);
  }
  if (c.status === 666 && a.Y !== 0) {
    return Tg(a, -5);
  }
  if (a.Y !== 0 || c.o !== 0 || b !== 0 && c.status !== 666) {
    d = c.strategy === 2 ? ch(c, b) : c.strategy === 3 ? bh(c, b) : eh[c.level].jd(c, b);
    if (d === 3 || d === 4) {
      c.status = 666;
    }
    if (d === 1 || d === 3) {
      if (a.I === 0) {
        c.cb = -1;
      }
      return 0;
    }
    if (d === 2 && (b === 1 ? (Dg(c, 2, 3), Eg(c, 256, rg), c.T === 16 ? (Cg(c, c.Z), c.Z = 0, c.T = 0) : c.T >= 8 && (c.M[c.pending++] = c.Z & 255, c.Z >>= 8, c.T -= 8)) : b !== 5 && (Dg(c, 0, 3), Jg(c, 0, 0), b === 3 && (Ug(c.head), c.o === 0 && (c.l = 0, c.ea = 0, c.da = 0))), Vg(a), a.I === 0)) {
      c.cb = -1;
      return 0;
    }
  }
  if (b !== 4) {
    return 0;
  }
  if (c.wrap <= 0) {
    return 1;
  }
  if (c.wrap === 2) {
    R(c, a.F & 255);
    R(c, a.F >> 8 & 255);
    R(c, a.F >> 16 & 255);
    R(c, a.F >> 24 & 255);
    R(c, a.Ta & 255);
    R(c, a.Ta >> 8 & 255);
    R(c, a.Ta >> 16 & 255);
    R(c, a.Ta >> 24 & 255);
  } else {
    Xg(c, a.F >>> 16);
    Xg(c, a.F & 65535);
  }
  Vg(a);
  if (c.wrap > 0) {
    c.wrap = -c.wrap;
  }
  if (c.pending !== 0) {
    return 0;
  } else {
    return 1;
  }
}
;
var hh = {};
hh = function () {
  this.input = null;
  this.Ta = this.Y = this.Ra = 0;
  this.output = null;
  this.lc = this.I = this.gb = 0;
  this.msg = "";
  this.state = null;
  this.Ob = 2;
  this.F = 0;
};
var ih = Object.prototype.toString;
function jh(a) {
  if (!(this instanceof jh)) {
    return new jh(a);
  }
  a = this.options = Q.assign({
    level: -1,
    method: 8,
    chunkSize: 16384,
    Ja: 15,
    xd: 8,
    strategy: 0,
    to: ""
  }, a || {});
  if (a.raw && a.Ja > 0) {
    a.Ja = -a.Ja;
  } else if (a.md && a.Ja > 0 && a.Ja < 16) {
    a.Ja += 16;
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.G = new hh();
  this.G.I = 0;
  var b = this.G;
  var c = a.level;
  var d = a.method;
  var e = a.Ja;
  var f = a.xd;
  var g = a.strategy;
  if (b) {
    var h = 1;
    if (c === -1) {
      c = 6;
    }
    if (e < 0) {
      h = 0;
      e = -e;
    } else if (e > 15) {
      h = 2;
      e -= 16;
    }
    if (f < 1 || f > 9 || d !== 8 || e < 8 || e > 15 || c < 0 || c > 9 || g < 0 || g > 4) {
      b = Tg(b, -2);
    } else {
      if (e === 8) {
        e = 9;
      }
      var k = new fh();
      b.state = k;
      k.G = b;
      k.wrap = h;
      k.D = null;
      k.mc = e;
      k.X = 1 << k.mc;
      k.Ia = k.X - 1;
      k.Qb = f + 7;
      k.Db = 1 << k.Qb;
      k.xa = k.Db - 1;
      k.ya = ~~((k.Qb + 3 - 1) / 3);
      k.window = new Q.Ua(k.X * 2);
      k.head = new Q.pa(k.Db);
      k.oa = new Q.pa(k.X);
      k.pb = 1 << f + 6;
      k.ka = k.pb * 4;
      k.M = new Q.Ua(k.ka);
      k.mb = k.pb * 1;
      k.Ub = k.pb * 3;
      k.level = c;
      k.strategy = g;
      k.method = d;
      if (b && b.state) {
        b.Ta = b.lc = 0;
        b.Ob = 2;
        c = b.state;
        c.pending = 0;
        c.rb = 0;
        if (c.wrap < 0) {
          c.wrap = -c.wrap;
        }
        c.status = c.wrap ? 42 : 113;
        b.F = c.wrap === 2 ? 0 : 1;
        c.cb = 0;
        if (!Rg) {
          d = Array(16);
          for (f = g = 0; f < 28; f++) {
            vg[f] = g;
            e = 0;
            for (; e < 1 << ng[f]; e++) {
              ug[g++] = f;
            }
          }
          ug[g - 1] = f;
          for (f = g = 0; f < 16; f++) {
            wg[f] = g;
            e = 0;
            for (; e < 1 << og[f]; e++) {
              tg[g++] = f;
            }
          }
          for (g >>= 7; f < 30; f++) {
            wg[f] = g << 7;
            e = 0;
            for (; e < 1 << og[f] - 7; e++) {
              tg[256 + g++] = f;
            }
          }
          for (e = 0; e <= 15; e++) {
            d[e] = 0;
          }
          for (e = 0; e <= 143;) {
            rg[e * 2 + 1] = 8;
            e++;
            d[8]++;
          }
          while (e <= 255) {
            rg[e * 2 + 1] = 9;
            e++;
            d[9]++;
          }
          while (e <= 279) {
            rg[e * 2 + 1] = 7;
            e++;
            d[7]++;
          }
          while (e <= 287) {
            rg[e * 2 + 1] = 8;
            e++;
            d[8]++;
          }
          Gg(rg, 287, d);
          for (e = 0; e < 30; e++) {
            sg[e * 2 + 1] = 5;
            sg[e * 2] = Fg(e, 5);
          }
          yg = new xg(rg, ng, 257, 286, 15);
          zg = new xg(sg, og, 0, 30, 15);
          Ag = new xg([], pg, 0, 19, 7);
          Rg = true;
        }
        c.Eb = new Bg(c.ca, yg);
        c.Bb = new Bg(c.Ma, zg);
        c.nc = new Bg(c.W, Ag);
        c.Z = 0;
        c.T = 0;
        Hg(c);
        c = 0;
      } else {
        c = Tg(b, -2);
      }
      if (c === 0) {
        b = b.state;
        b.Qc = b.X * 2;
        Ug(b.head);
        b.Wb = eh[b.level].vd;
        b.zc = eh[b.level].ld;
        b.Gc = eh[b.level].zd;
        b.Fc = eh[b.level].ud;
        b.l = 0;
        b.ea = 0;
        b.o = 0;
        b.da = 0;
        b.J = b.fa = 2;
        b.Pa = 0;
        b.H = 0;
      }
      b = c;
    }
  } else {
    b = -2;
  }
  if (b !== 0) {
    throw Error(lg[b]);
  }
  if (a.header && (b = this.G) && b.state && b.state.wrap === 2) {
    b.state.D = a.header;
  }
  if (a.nb) {
    var l;
    if (typeof a.nb === "string") {
      l = eg(a.nb);
    } else if (ih.call(a.nb) === "[object ArrayBuffer]") {
      l = new Uint8Array(a.nb);
    } else {
      l = a.nb;
    }
    a = this.G;
    f = l;
    g = f.length;
    if (a && a.state) {
      l = a.state;
      b = l.wrap;
      if (b === 2 || b === 1 && l.status !== 42 || l.o) {
        b = -2;
      } else {
        if (b === 1) {
          a.F = fg(a.F, f, g, 0);
        }
        l.wrap = 0;
        if (g >= l.X) {
          if (b === 0) {
            Ug(l.head);
            l.l = 0;
            l.ea = 0;
            l.da = 0;
          }
          c = new Q.Ua(l.X);
          Q.Xa(c, f, g - l.X, l.X, 0);
          f = c;
          g = l.X;
        }
        c = a.Y;
        d = a.Ra;
        e = a.input;
        a.Y = g;
        a.Ra = 0;
        a.input = f;
        for (Zg(l); l.o >= 3;) {
          f = l.l;
          g = l.o - 2;
          do {
            l.H = (l.H << l.ya ^ l.window[f + 3 - 1]) & l.xa;
            l.oa[f & l.Ia] = l.head[l.H];
            l.head[l.H] = f;
            f++;
          } while (--g);
          l.l = f;
          l.o = 2;
          Zg(l);
        }
        l.l += l.o;
        l.ea = l.l;
        l.da = l.o;
        l.o = 0;
        l.J = l.fa = 2;
        l.Pa = 0;
        a.Ra = d;
        a.input = e;
        a.Y = c;
        l.wrap = b;
        b = 0;
      }
    } else {
      b = -2;
    }
    if (b !== 0) {
      throw Error(lg[b]);
    }
    this.be = true;
  }
}
jh.prototype.push = function (a, b) {
  var c = this.G;
  var d = this.options.chunkSize;
  if (this.ended) {
    return false;
  }
  var e = b === ~~b ? b : b === true ? 4 : 0;
  if (typeof a === "string") {
    c.input = eg(a);
  } else if (ih.call(a) === "[object ArrayBuffer]") {
    c.input = new Uint8Array(a);
  } else {
    c.input = a;
  }
  c.Ra = 0;
  c.Y = c.input.length;
  do {
    if (c.I === 0) {
      c.output = new Q.Ua(d);
      c.gb = 0;
      c.I = d;
    }
    a = gh(c, e);
    if (a !== 1 && a !== 0) {
      kh(this, a);
      this.ended = true;
      return false;
    }
    if (c.I === 0 || c.Y === 0 && (e === 4 || e === 2)) {
      if (this.options.to === "string") {
        var f = Q.kc(c.output, c.gb);
        b = f;
        f = f.length;
        if (f < 65537 && (b.subarray && dg || !b.subarray)) {
          b = String.fromCharCode.apply(null, Q.kc(b, f));
        } else {
          var g = "";
          for (var h = 0; h < f; h++) {
            g += String.fromCharCode(b[h]);
          }
          b = g;
        }
        this.chunks.push(b);
      } else {
        b = Q.kc(c.output, c.gb);
        this.chunks.push(b);
      }
    }
  } while ((c.Y > 0 || c.I === 0) && a !== 1);
  if (e === 4) {
    if ((c = this.G) && c.state) {
      d = c.state.status;
      if (d !== 42 && d !== 69 && d !== 73 && d !== 91 && d !== 103 && d !== 113 && d !== 666) {
        a = Tg(c, -2);
      } else {
        c.state = null;
        a = d === 113 ? Tg(c, -3) : 0;
      }
    } else {
      a = -2;
    }
    kh(this, a);
    this.ended = true;
    return a === 0;
  }
  if (e === 2) {
    kh(this, 0);
    c.I = 0;
  }
  return true;
};
function kh(a, b) {
  if (b === 0) {
    a.result = a.options.to === "string" ? a.chunks.join("") : Q.xc(a.chunks);
  }
  a.chunks = [];
  a.err = b;
  a.msg = a.G.msg;
}
;
function lh(a) {
  this.name = a;
}
;
var mh = new lh("rawColdConfigGroup");
var nh = new lh("rawHotConfigGroup");
function oh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(oh, N);
oh.prototype.i = function (a) {
  M(this, 5, a);
};
function ph(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(ph, N);
function qh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(qh, N);
function rh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(rh, N);
rh.prototype.getPlayerType = function () {
  return od(this, 36);
};
rh.prototype.setHomeGroupInfo = function (a) {
  return kd(this, qh, 81, a);
};
rh.prototype.clearLocationPlayabilityToken = function () {
  return cd(this, 89);
};
function sh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(sh, N);
sh.prototype.clearValue = function () {
  return ed(this, 2, th);
};
var th = [2, 3, 4, 5, 6];
function uh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(uh, N);
function vh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(vh, N);
function Mh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(Mh, N);
Mh.prototype.setToken = function (a) {
  return M(this, 2, a);
};
function Nh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(Nh, N);
Nh.prototype.setSafetyMode = function (a) {
  return td(this, 5, a);
};
function Oh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(Oh, N);
var Ph = {
  Zd: "WEB_DISPLAY_MODE_UNKNOWN",
  Vd: "WEB_DISPLAY_MODE_BROWSER",
  Xd: "WEB_DISPLAY_MODE_MINIMAL_UI",
  Yd: "WEB_DISPLAY_MODE_STANDALONE",
  Wd: "WEB_DISPLAY_MODE_FULLSCREEN"
};
function Qh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(Qh, N);
Qh.prototype.getPlayerType = function () {
  return od(this, 7);
};
Qh.prototype.getVideoId = function () {
  return nd(this, 19);
};
Qh.prototype.setVideoId = function (a) {
  return M(this, 19, a);
};
function Rh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(Rh, N);
function Sh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(Sh, N);
function Th(a) {
  this.B = L(a, 500, undefined, 2048);
}
u(Th, N);
var Uh = [2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74, 76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136, 146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234, 240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261, 266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 320, 321, 323, 324, 327, 328, 330, 331, 332, 334, 337, 338, 340, 344, 348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 399, 402, 403, 410, 411, 412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431, 439, 441, 444, 448, 458, 469, 471, 473, 474, 480, 481, 482, 484, 485, 486, 491, 495, 496, 506, 507, 509, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 536, 537, 538, 539, 541, 545, 547, 548, 549, 550, 551, 552, 553, 554, 557, 563, 564, 568];
function Vh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(Vh, N);
function Wh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(Wh, N);
Wh.prototype.getVideoId = function () {
  return pd(this, 1);
};
Wh.prototype.setVideoId = function (a) {
  return ed(this, 1, sd, Jc(a));
};
Wh.prototype.getPlaylistId = function () {
  return pd(this, 2);
};
var sd = [1, 2];
function Xh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(Xh, N);
function Yh(a) {
  var b = Da.apply(1, arguments);
  var c = Error.call(this, a);
  this.message = c.message;
  if ("stack" in c) {
    this.stack = c.stack;
  }
  this.args = [].concat(w(b));
  Object.setPrototypeOf(this, this.constructor.prototype);
}
u(Yh, Error);
function Zh(a) {
  this.B = L(a, undefined, undefined, 2048);
}
u(Zh, N);
function $h(a) {
  this.B = L(a, 0, $h.messageId, 2048);
}
u($h, N);
$h.messageId = "yt.sw.adr";
function ai(a) {
  var b = Da.apply(1, arguments);
  if (!bi(a) || b.some(function (d) {
    return !bi(d);
  })) {
    throw Error("Only objects may be merged.");
  }
  b = v(b);
  var c = b.next();
  try {
    for (; !c.done; c = b.next()) {
      ci(a, c.value);
    }
  } finally {
    A(b, c);
  }
}
function ci(a, b) {
  for (var c in b) {
    if (bi(b[c])) {
      if (c in a && !bi(a[c])) {
        throw Error("Cannot merge an object into a non-object.");
      }
      if (!(c in a)) {
        a[c] = {};
      }
      ci(a[c], b[c]);
    } else if (di(b[c])) {
      if (c in a && !di(a[c])) {
        throw Error("Cannot merge an array into a non-array.");
      }
      if (!(c in a)) {
        a[c] = [];
      }
      ei(a[c], b[c]);
    } else {
      a[c] = b[c];
    }
  }
  return a;
}
function ei(a, b) {
  b = v(b);
  var c = b.next();
  try {
    for (; !c.done; c = b.next()) {
      var d = c.value;
      if (bi(d)) {
        a.push(ci({}, d));
      } else if (di(d)) {
        a.push(ei([], d));
      } else {
        a.push(d);
      }
    }
  } finally {
    A(b, c);
  }
  return a;
}
function bi(a) {
  return a !== null && typeof a === "object" && !Array.isArray(a);
}
function di(a) {
  return typeof a === "object" && Array.isArray(a);
}
;
var fi = E.window;
var gi;
var hi;
var ii = (fi == null ? undefined : (gi = fi.yt) == null ? undefined : gi.config_) || (fi == null ? undefined : (hi = fi.ytcfg) == null ? undefined : hi.data_) || {};
G("yt.config_", ii);
function ji() {
  var a = arguments;
  if (a.length > 1) {
    ii[a[0]] = a[1];
  } else if (a.length === 1) {
    Object.assign(ii, a[0]);
  }
}
function S(a, b) {
  if (a in ii) {
    return ii[a];
  } else {
    return b;
  }
}
;
var ki = [];
function li(a) {
  ki.forEach(function (b) {
    b(a);
  });
}
function mi(a) {
  var b = window;
  if (a && b.yterr) {
    return function () {
      var c = Da.apply(0, arguments);
      try {
        return a.apply(this, c);
      } catch (d) {
        ni(d instanceof Error ? d : Error(String(d)));
      }
    };
  } else {
    return a;
  }
}
function oi(a, b, c, d, e, f) {
  var g = F("yt.logging.errors.log");
  if (g) {
    g(a, b, c, d, e, undefined, f);
  } else {
    g = S("ERRORS", []);
    g.push([a, b, c, d, e, undefined, f]);
    ji("ERRORS", g);
  }
}
function ni(a, b, c, d, e) {
  oi(a, "ERROR", b, c, d, e);
  li(a);
}
function pi(a, b, c, d, e) {
  oi(a, "WARNING", b, c, d, e);
}
;
var qi = /^[\w.]*$/;
var ri = {
  q: true,
  search_query: true
};
function si(a, b) {
  b = a.split(b);
  var c = {};
  for (var d = 0, e = b.length; d < e; d++) {
    var f = b[d].split("=");
    if (f.length === 1 && f[0] || f.length === 2) {
      try {
        var g = ti(f[0] || "");
        var h = ti(f[1] || "");
        if (g in c) {
          var k = c[g];
          if (Array.isArray(k)) {
            db(k, h);
          } else {
            c[g] = [k, h];
          }
        } else {
          c[g] = h;
        }
      } catch (q) {
        var l = q;
        var m = f[0];
        var n = String(si);
        l.args = [{
          key: m,
          value: f[1],
          query: a,
          method: ui === n ? "unchanged" : n
        }];
        if (!ri.hasOwnProperty(m)) {
          pi(l);
        }
      }
    }
  }
  return c;
}
var ui = String(si);
function vi(a) {
  var b = [];
  Dd(a, function (c, d) {
    var e = encodeURIComponent(String(d));
    bb(Array.isArray(c) ? c : [c], function (f) {
      if (f == "") {
        b.push(e);
      } else {
        b.push(e + "=" + encodeURIComponent(String(f)));
      }
    });
  });
  return b.join("&");
}
function wi(a) {
  if (a.charAt(0) === "?") {
    a = a.substring(1);
  }
  return si(a, "&");
}
function xi(a, b) {
  return yi(a, b || {}, true);
}
function yi(a, b, c) {
  var d = (a || "").split("#", 2);
  a = d[0];
  d = d.length > 1 ? "#" + d[1] : "";
  var e = a.indexOf("?");
  var f = e !== -1 ? a.substring(0, e) : a;
  a = wi(e !== -1 ? a.substring(e + 1) : "");
  for (var g in b) {
    if (!!c || a === null || !(g in a)) {
      a[g] = b[g];
    }
  }
  b = ob(a);
  if (b) {
    c = f.indexOf("#");
    if (c < 0) {
      c = f.length;
    }
    g = f.indexOf("?");
    if (g < 0 || g > c) {
      g = c;
      a = "";
    } else {
      a = f.substring(g + 1, c);
    }
    f = [f.slice(0, g), a, f.slice(c)];
    c = f[1];
    f[1] = b ? c ? c + "&" + b : b : c;
    f = f[0] + (f[1] ? "?" + f[1] : "") + f[2];
  }
  return f + d;
}
function zi(a) {
  if (!b) {
    var b = window.location.href;
  }
  var c = a.match(kb)[1] || null;
  var d = mb(a);
  if (c && d) {
    a = a.match(kb);
    b = b.match(kb);
    a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4];
  } else {
    a = d ? mb(b) === d && (Number(b.match(kb)[4] || null) || null) === (Number(a.match(kb)[4] || null) || null) : true;
  }
  return a;
}
function ti(a) {
  if (a && a.match(qi)) {
    return a;
  } else {
    return decodeURIComponent(a.replace(/\+/g, " "));
  }
}
;
function Ai(a) {
  var b = Bi;
  a = a === undefined ? F("yt.ads.biscotti.lastId_") || "" : a;
  var c = Object;
  var d = c.assign;
  var e = {
    dt: Hd,
    flash: "0"
  };
  a: {
    try {
      var f = b.h.top.location.href;
    } catch (oa) {
      f = 2;
      break a;
    }
    f = f ? f === b.i.location.href ? 0 : 1 : 2;
  }
  e.frm = f;
  e = e;
  try {
    e.u_tz = -new Date().getTimezoneOffset();
    try {
      var g = ud.history.length;
    } catch (oa) {
      g = 0;
    }
    e.u_his = g;
    var h;
    e.u_h = (h = ud.screen) == null ? undefined : h.height;
    var k;
    e.u_w = (k = ud.screen) == null ? undefined : k.width;
    var l;
    e.u_ah = (l = ud.screen) == null ? undefined : l.availHeight;
    var m;
    e.u_aw = (m = ud.screen) == null ? undefined : m.availWidth;
    var n;
    e.u_cd = (n = ud.screen) == null ? undefined : n.colorDepth;
  } catch (oa) {}
  var q;
  g = b.h;
  try {
    var p = g.screenX;
    var x = g.screenY;
  } catch (oa) {}
  try {
    var y = g.outerWidth;
    var z = g.outerHeight;
  } catch (oa) {}
  try {
    var H = g.innerWidth;
    var D = g.innerHeight;
  } catch (oa) {}
  try {
    var P = g.screenLeft;
    var Y = g.screenTop;
  } catch (oa) {}
  try {
    H = g.innerWidth;
    D = g.innerHeight;
  } catch (oa) {}
  try {
    var pa = g.screen.availWidth;
    var Gb = g.screen.availTop;
  } catch (oa) {}
  p = [P, Y, p, x, pa, Gb, y, z, H, D];
  try {
    var za = (b.h.top || window).document;
    var Z = za.compatMode == "CSS1Compat" ? za.documentElement : za.body;
    var ba = new Cd(Z.clientWidth, Z.clientHeight).round();
  } catch (oa) {
    ba = new Cd(-12245933, -12245933);
  }
  za = ba;
  ba = {};
  var qa = qa === undefined ? E : qa;
  Z = new xf();
  if ("SVGElement" in qa && "createElementNS" in qa.document) {
    Z.set(0);
  }
  x = Ad();
  if (x["allow-top-navigation-by-user-activation"]) {
    Z.set(1);
  }
  if (x["allow-popups-to-escape-sandbox"]) {
    Z.set(2);
  }
  if (qa.crypto && qa.crypto.subtle) {
    Z.set(3);
  }
  if ("TextDecoder" in qa && "TextEncoder" in qa) {
    Z.set(4);
  }
  qa = yf(Z);
  ba.bc = qa;
  ba.bih = za.height;
  ba.biw = za.width;
  ba.brdim = p.join();
  b = b.i;
  b = b.prerendering ? 3 : (q = {
    visible: 1,
    hidden: 2,
    prerender: 3,
    preview: 4,
    unloaded: 5,
    "": 0
  }[b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""]) != null ? q : 0;
  ba.vis = b;
  ba.wgl = !!ud.WebGLRenderingContext;
  q = ba;
  c = d.call(c, e, q);
  c.ca_type = "image";
  if (a) {
    c.bid = a;
  }
  return c;
}
var Bi = new function () {
  var a = window.document;
  this.h = window;
  this.i = a;
}();
G("yt.ads_.signals_.getAdSignalsString", function (a) {
  return vi(Ai(a));
});
var Ci = "XMLHttpRequest" in E ? function () {
  return new XMLHttpRequest();
} : null;
function Di() {
  if (!Ci) {
    return null;
  }
  var a = Ci();
  if ("open" in a) {
    return a;
  } else {
    return null;
  }
}
;
var Ei = "absolute_experiments client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods theme".split(" ");
var Fi = [].concat(w(Ei), ["client_dev_set_cookie"]);
Date.now();
function T(a, b) {
  a = Gi(a, b);
  if (typeof a === "string" && a === "false") {
    return false;
  } else {
    return !!a;
  }
}
function Hi(a, b) {
  return Number(Gi(a, b) || 0);
}
function Gi(a, b) {
  a = S("EXPERIMENT_FLAGS", {})[a];
  if (a !== undefined) {
    return a;
  } else {
    return b;
  }
}
function Ii() {
  var a = [];
  var b = S("EXPERIMENTS_FORCED_FLAGS", {});
  var c = v(Object.keys(b));
  var d = c.next();
  try {
    for (; !d.done; d = c.next()) {
      var e = d.value;
      a.push({
        key: e,
        value: String(b[e])
      });
    }
  } finally {
    A(c, d);
  }
  c = S("EXPERIMENT_FLAGS", {});
  d = v(Object.keys(c));
  e = d.next();
  try {
    for (; !e.done; e = d.next()) {
      var f = e.value;
      if (f.startsWith("force_") && b[f] === undefined) {
        a.push({
          key: f,
          value: String(c[f])
        });
      }
    }
  } finally {
    A(d, e);
  }
  return a;
}
;
function Ji(a, b) {
  if (typeof a === "function") {
    a = mi(a);
  }
  return window.setTimeout(a, b);
}
;
var Ki = {
  Authorization: "AUTHORIZATION",
  "X-Goog-EOM-Visitor-Id": "EOM_VISITOR_DATA",
  "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID",
  "X-Youtube-Domain-Admin-State": "DOMAIN_ADMIN_STATE",
  "X-Youtube-Chrome-Connected": "CHROME_CONNECTED_HEADER",
  "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
  "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
  "X-YouTube-Delegation-Context": "INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
  "X-YouTube-Device": "DEVICE",
  "X-Youtube-Identity-Token": "ID_TOKEN",
  "X-YouTube-Page-CL": "PAGE_CL",
  "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
  "X-Goog-AuthUser": "SESSION_INDEX",
  "X-Goog-PageId": "DELEGATED_SESSION_ID"
};
var Li = "app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(w(Ei));
var Mi = false;
function Ni(a, b, c, d, e, f, g, h, k) {
  function l() {
    if ((m && "readyState" in m ? m.readyState : 0) === 4 && b) {
      mi(b)(m);
    }
  }
  c = c === undefined ? "GET" : c;
  d = d === undefined ? "" : d;
  h = h === undefined ? false : h;
  var m = Di();
  if (!m) {
    return null;
  }
  if ("onloadend" in m) {
    m.addEventListener("loadend", l, false);
  } else {
    m.onreadystatechange = l;
  }
  if (T("debug_forward_web_query_parameters")) {
    a = Oi(a);
  }
  m.open(c, a, true);
  if (f) {
    m.responseType = f;
  }
  if (g) {
    m.withCredentials = true;
  }
  c = c === "POST" && (window.FormData === undefined || !(d instanceof FormData));
  if (e = Pi(a, e)) {
    for (var n in e) {
      m.setRequestHeader(n, e[n]);
      if (n.toLowerCase() === "content-type") {
        c = false;
      }
    }
  }
  if (c) {
    m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  }
  if (k && "onprogress" in m) {
    m.onprogress = function () {
      k(m.responseText);
    };
  }
  if (h && "setAttributionReporting" in XMLHttpRequest.prototype) {
    a = {
      eventSourceEligible: true,
      triggerEligible: false
    };
    try {
      m.setAttributionReporting(a);
    } catch (q) {
      pi(q);
    }
  }
  m.send(d);
  return m;
}
function Pi(a, b) {
  b = b === undefined ? {} : b;
  var c = zi(a);
  var d = S("INNERTUBE_CLIENT_NAME");
  var e = T("web_ajax_ignore_global_headers_if_set");
  var f;
  for (f in Ki) {
    var g = S(Ki[f]);
    var h = f === "X-Goog-AuthUser" || f === "X-Goog-PageId";
    if (f === "X-Goog-Visitor-Id" && !g) {
      g = S("VISITOR_DATA");
    }
    if (!!g && (!!c || !mb(a)) && (!e || b[f] === undefined) && (d !== "TVHTML5_UNPLUGGED" || !h)) {
      b[f] = g;
    }
  }
  if ("X-Goog-EOM-Visitor-Id" in b && "X-Goog-Visitor-Id" in b) {
    delete b["X-Goog-Visitor-Id"];
  }
  if (c || !mb(a)) {
    b["X-YouTube-Utc-Offset"] = String(-new Date().getTimezoneOffset());
  }
  if (c || !mb(a)) {
    try {
      var k = new Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (l) {}
    if (k) {
      b["X-YouTube-Time-Zone"] = k;
    }
  }
  if (!document.location.hostname.endsWith("youtubeeducation.com") && (!!c || !mb(a))) {
    b["X-YouTube-Ad-Signals"] = vi(Ai());
  }
  return b;
}
function Qi(a, b) {
  b.method = "POST";
  b.postParams ||= {};
  return Ri(a, b);
}
function Ri(a, b) {
  var c = b.format || "JSON";
  a = Si(a, b);
  var d = Ti(a, b);
  var e = false;
  var f = Ui(a, function (k) {
    if (!e) {
      e = true;
      if (h) {
        window.clearTimeout(h);
      }
      a: switch (k && "status" in k ? k.status : -1) {
        case 200:
        case 201:
        case 202:
        case 203:
        case 204:
        case 205:
        case 206:
        case 304:
          var l = true;
          break a;
        default:
          l = false;
      }
      var m = null;
      var n = k.status >= 400 && k.status < 500;
      var q = k.status >= 500 && k.status < 600;
      if (l || n || q) {
        m = Vi(a, c, k, b.convertToSafeHtml);
      }
      l &&= Wi(c, k, m);
      m = m || {};
      n = b.context || E;
      if (l) {
        if (b.onSuccess) {
          b.onSuccess.call(n, k, m);
        }
      } else if (b.onError) {
        b.onError.call(n, k, m);
      }
      if (b.onFinish) {
        b.onFinish.call(n, k, m);
      }
    }
  }, b.method, d, b.headers, b.responseType, b.withCredentials, false, b.onProgress);
  d = b.timeout || 0;
  if (b.onTimeout && d > 0) {
    var g = b.onTimeout;
    var h = Ji(function () {
      if (!e) {
        e = true;
        f.abort();
        window.clearTimeout(h);
        g.call(b.context || E, f);
      }
    }, d);
  }
  return f;
}
function Si(a, b) {
  if (b.includeDomain) {
    a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a;
  }
  var c = S("XSRF_FIELD_NAME");
  if (b = b.urlParams) {
    if (b[c]) {
      delete b[c];
    }
    a = xi(a, b);
  }
  return a;
}
function Ti(a, b) {
  var c = S("XSRF_FIELD_NAME");
  var d = S("XSRF_TOKEN");
  var e = b.postBody || "";
  var f = b.postParams;
  var g = S("XSRF_FIELD_NAME");
  var h;
  if (b.headers) {
    h = b.headers["Content-Type"];
  }
  if (!b.excludeXsrf && (!mb(a) || !!b.withCredentials || mb(a) === document.location.hostname) && b.method === "POST" && (!h || h === "application/x-www-form-urlencoded") && (!b.postParams || !b.postParams[g])) {
    f ||= {};
    f[c] = d;
  }
  if (f && typeof e === "string") {
    e = wi(e);
    Gd(e, f);
    e = b.postBodyFormat && b.postBodyFormat === "JSON" ? JSON.stringify(e) : ob(e);
  }
  if (!(a = e) && (a = f)) {
    a: {
      for (var k in f) {
        f = false;
        break a;
      }
      f = true;
    }
    a = !f;
  }
  if (!Mi && a && b.method !== "POST") {
    Mi = true;
    ni(Error("AJAX request with postData should use POST"));
  }
  return e;
}
function Vi(a, b, c, d) {
  var e = null;
  switch (b) {
    case "JSON":
      try {
        var f = c.responseText;
      } catch (g) {
        d = Error("Error reading responseText");
        d.params = a;
        pi(d);
        throw g;
      }
      a = c.getResponseHeader("Content-Type") || "";
      if (f && a.indexOf("json") >= 0) {
        if (f.substring(0, 5) === ")]}'\n") {
          f = f.substring(5);
        }
        try {
          e = JSON.parse(f);
        } catch (g) {}
      }
      break;
    case "XML":
      if (a = (a = c.responseXML) ? Xi(a) : null) {
        e = {};
        bb(a.getElementsByTagName("*"), function (g) {
          e[g.tagName] = Yi(g);
        });
      }
  }
  if (d) {
    Zi(e);
  }
  return e;
}
function Zi(a) {
  if (Ia(a)) {
    for (var b in a) {
      var c;
      if (!(c = b === "html_content")) {
        c = b.length - 5;
        c = c >= 0 && b.indexOf("_html", c) == c;
      }
      if (c) {
        c = a[b];
        var d = Xa();
        c = d ? d.createHTML(c) : c;
        a[b] = new $a(c);
      } else {
        Zi(a[b]);
      }
    }
  }
}
function Wi(a, b, c) {
  if (b && b.status === 204) {
    return true;
  }
  switch (a) {
    case "JSON":
      return !!c;
    case "XML":
      return Number(c && c.return_code) === 0;
    case "RAW":
      return true;
    default:
      return !!c;
  }
}
function Xi(a) {
  if (a) {
    if ((a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && a.length > 0) {
      return a[0];
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function Yi(a) {
  var b = "";
  bb(a.childNodes, function (c) {
    b += c.nodeValue;
  });
  return b;
}
function Oi(a) {
  var b = window.location.search;
  var c = mb(a);
  if (!T("debug_handle_relative_url_for_query_forward_killswitch")) {
    if (!c && zi(a)) {
      c = document.location.hostname;
    }
  }
  var d = lb(a.match(kb)[5] || null);
  d = (c = c && (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) && d && d.startsWith("/api/");
  if (!c || d) {
    return a;
  }
  var e = wi(b);
  var f = {};
  bb(Li, function (g) {
    if (e[g]) {
      f[g] = e[g];
    }
  });
  return yi(a, f || {}, false);
}
var Ui = Ni;
var $i = [{
  Xb: function (a) {
    return "Cannot read property '" + a.key + "'";
  },
  Gb: {
    Error: [{
      ba: /(Permission denied) to access property "([^']+)"/,
      groups: ["reason", "key"]
    }],
    TypeError: [{
      ba: /Cannot read property '([^']+)' of (null|undefined)/,
      groups: ["key", "value"]
    }, {
      ba: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
      groups: ["value", "key"]
    }, {
      ba: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
      groups: ["value", "key"]
    }, {
      ba: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
      groups: ["key"]
    }, {
      ba: /Unable to get property '([^']+)' of (undefined or null) reference/,
      groups: ["key", "value"]
    }, {
      ba: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
      groups: ["value", "base", "key"]
    }]
  }
}, {
  Xb: function (a) {
    return "Cannot call '" + a.key + "'";
  },
  Gb: {
    TypeError: [{
      ba: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
      groups: ["base", "key"]
    }, {
      ba: /([^ ]+) called on (null or undefined)/,
      groups: ["key", "value"]
    }, {
      ba: /Object (.*) has no method '([^ ]+)'/,
      groups: ["base", "key"]
    }, {
      ba: /Object doesn't support property or method '([^ ]+)'/,
      groups: ["key"]
    }, {
      ba: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
      groups: ["key"]
    }, {
      ba: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
      groups: ["key"]
    }]
  }
}, {
  Xb: function (a) {
    return a.key + " is not defined";
  },
  Gb: {
    ReferenceError: [{
      ba: /(.*) is not defined/,
      groups: ["key"]
    }, {
      ba: /Can't find variable: (.*)/,
      groups: ["key"]
    }]
  }
}];
var cj = {
  Aa: [],
  va: [{
    callback: aj,
    weight: 500
  }, {
    callback: bj,
    weight: 500
  }]
};
function aj(a) {
  if (a.name === "JavaException") {
    return true;
  }
  a = a.stack;
  return a.includes("chrome://") || a.includes("-extension://") || a.includes("webkit-masked-url://");
}
function bj(a) {
  if (!a.stack) {
    return true;
  }
  var b = !a.stack.includes("\n");
  return !!b && !!a.stack.includes("ErrorType: ") || !!b && !!a.stack.includes("Anonymous function (Unknown script") || a.stack.toLowerCase() === "not available" || a.fileName === "user-script" || !!a.fileName.startsWith("user-script:");
}
;
function dj() {
  this.va = [];
  this.Aa = [];
}
var ej;
function fj() {
  if (!ej) {
    var a = ej = new dj();
    a.Aa.length = 0;
    a.va.length = 0;
    gj(a, cj);
  }
  return ej;
}
function gj(a, b) {
  if (b.Aa) {
    a.Aa.unshift.apply(a.Aa, b.Aa);
  }
  if (b.va) {
    a.va.unshift.apply(a.va, b.va);
  }
}
;
var hj = new O();
function ij(a) {
  function b() {
    return a.charCodeAt(d++);
  }
  var c = a.length;
  var d = 0;
  do {
    var e = jj(b);
    if (e === Infinity) {
      break;
    }
    var f = e >> 3;
    switch (e & 7) {
      case 0:
        e = jj(b);
        if (f === 2) {
          return e;
        }
        break;
      case 1:
        if (f === 2) {
          return;
        }
        d += 8;
        break;
      case 2:
        e = jj(b);
        if (f === 2) {
          return a.substr(d, e);
        }
        d += e;
        break;
      case 5:
        if (f === 2) {
          return;
        }
        d += 4;
        break;
      default:
        return;
    }
  } while (d < c);
}
function jj(a) {
  var b = a();
  var c = b & 127;
  if (b < 128) {
    return c;
  }
  b = a();
  c |= (b & 127) << 7;
  if (b < 128) {
    return c;
  }
  b = a();
  c |= (b & 127) << 14;
  if (b < 128) {
    return c;
  }
  b = a();
  if (b < 128) {
    return c | (b & 127) << 21;
  } else {
    return Infinity;
  }
}
;
function kj(a, b, c, d) {
  if (a) {
    if (Array.isArray(a)) {
      var e = d;
      for (d = 0; d < a.length && (!a[d] || !(e += lj(d, a[d], b, c), e > 500)); d++);
      d = e;
    } else if (typeof a === "object") {
      for (e in a) {
        if (a[e]) {
          var f = e;
          var g = a[e];
          var h = b;
          var k = c;
          f = typeof g !== "string" || f !== "clickTrackingParams" && f !== "trackingParams" ? 0 : (g = ij(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? lj(f + ".ve", g, h, k) : 0;
          d += f;
          d += lj(e, a[e], b, c);
          if (d > 500) {
            break;
          }
        }
      }
    } else {
      c[b] = mj(a);
      d += c[b].length;
    }
  } else {
    c[b] = mj(a);
    d += c[b].length;
  }
  return d;
}
function lj(a, b, c, d) {
  c += "." + a;
  a = mj(b);
  d[c] = a;
  return c.length + a.length;
}
function mj(a) {
  try {
    return (typeof a === "string" ? a : String(JSON.stringify(a))).substr(0, 500);
  } catch (b) {
    return "unable to serialize " + typeof a + " (" + b.message + ")";
  }
}
;
function nj() {
  if (!E.matchMedia) {
    return "WEB_DISPLAY_MODE_UNKNOWN";
  }
  try {
    if (E.matchMedia("(display-mode: standalone)").matches) {
      return "WEB_DISPLAY_MODE_STANDALONE";
    } else if (E.matchMedia("(display-mode: minimal-ui)").matches) {
      return "WEB_DISPLAY_MODE_MINIMAL_UI";
    } else if (E.matchMedia("(display-mode: fullscreen)").matches) {
      return "WEB_DISPLAY_MODE_FULLSCREEN";
    } else if (E.matchMedia("(display-mode: browser)").matches) {
      return "WEB_DISPLAY_MODE_BROWSER";
    } else {
      return "WEB_DISPLAY_MODE_UNKNOWN";
    }
  } catch (a) {
    return "WEB_DISPLAY_MODE_UNKNOWN";
  }
}
;
function oj() {}
;
var pj;
function qj() {
  if (!T("enable_ipad_webview_innertube_context_override")) {
    return false;
  }
  var a = typeof navigator !== "undefined" ? navigator : E == null ? undefined : E.navigator;
  if (!a || a.platform !== "MacIntel" || !(a.maxTouchPoints > 0) || !("standalone" in a)) {
    return false;
  }
  a = typeof window !== "undefined" ? window : E == null ? undefined : E.window;
  var b;
  var c = a;
  if (c = c === undefined ? typeof window !== "undefined" ? window : (pj = E) == null ? undefined : pj.window : c) {
    var d;
    var e = ((d = c.location) == null ? undefined : d.pathname) || "";
    d = ((b = c.location) == null ? undefined : b.hostname) || "";
    b = !!e.includes("/playable") || !!d.includes("playables") || !!c.ze;
  } else {
    b = false;
  }
  if (!b) {
    return false;
  }
  var f;
  var g;
  return !!(a == null ? 0 : a.youtubewebview) || !!(a == null ? 0 : (f = a.webkit) == null ? 0 : (g = f.messageHandlers) == null ? 0 : g.youtubewebview);
}
function rj(a) {
  switch (a) {
    case "DESKTOP":
      return 1;
    case "UNKNOWN_PLATFORM":
      return 0;
    case "TV":
      return 2;
    case "GAME_CONSOLE":
      return 3;
    case "MOBILE":
      return 4;
    case "TABLET":
      return 5;
  }
}
;
G("ytglobal.prefsUserPrefsPrefs_", F("ytglobal.prefsUserPrefsPrefs_") || {});
var sj = {
  bluetooth: "CONN_DISCO",
  cellular: "CONN_CELLULAR_UNKNOWN",
  ethernet: "CONN_WIFI",
  none: "CONN_NONE",
  wifi: "CONN_WIFI",
  wimax: "CONN_CELLULAR_4G",
  other: "CONN_UNKNOWN",
  unknown: "CONN_UNKNOWN",
  "slow-2g": "CONN_CELLULAR_2G",
  "2g": "CONN_CELLULAR_2G",
  "3g": "CONN_CELLULAR_3G",
  "4g": "CONN_CELLULAR_4G"
};
var tj = {
  CONN_DEFAULT: 0,
  CONN_UNKNOWN: 1,
  CONN_NONE: 2,
  CONN_WIFI: 3,
  CONN_CELLULAR_2G: 4,
  CONN_CELLULAR_3G: 5,
  CONN_CELLULAR_4G: 6,
  CONN_CELLULAR_UNKNOWN: 7,
  CONN_DISCO: 8,
  CONN_CELLULAR_5G: 9,
  CONN_WIFI_METERED: 10,
  CONN_CELLULAR_5G_SA: 11,
  CONN_CELLULAR_5G_NSA: 12,
  CONN_WIRED: 30,
  CONN_INVALID: 31
};
var uj = {
  EFFECTIVE_CONNECTION_TYPE_UNKNOWN: 0,
  EFFECTIVE_CONNECTION_TYPE_OFFLINE: 1,
  EFFECTIVE_CONNECTION_TYPE_SLOW_2G: 2,
  EFFECTIVE_CONNECTION_TYPE_2G: 3,
  EFFECTIVE_CONNECTION_TYPE_3G: 4,
  EFFECTIVE_CONNECTION_TYPE_4G: 5
};
var vj = {
  "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
  "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
  "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
  "4g": "EFFECTIVE_CONNECTION_TYPE_4G"
};
function wj() {
  var a = E.navigator;
  if (a) {
    return a.connection;
  } else {
    return undefined;
  }
}
;
function xj() {
  try {
    yj();
    return true;
  } catch (a) {
    return false;
  }
}
function yj() {
  if (S("DATASYNC_ID") !== undefined) {
    return S("DATASYNC_ID");
  }
  throw new Yh("Datasync ID not set", "unknown");
}
;
function zj() {}
function Aj(a, b) {
  return Ee.Ka(a, 0, b);
}
zj.prototype.sa = function (a, b) {
  return this.Ka(a, 1, b);
};
zj.prototype.kb = function (a) {
  var b = F("yt.scheduler.instance.addImmediateJob");
  if (b) {
    b(a);
  } else {
    a();
  }
};
var Bj = 1000 / 60;
var Cj = Hi("web_emulated_idle_callback_delay", 300);
var Dj = Bj - 3;
var Ej = [8, 5, 4, 3, 2, 1, 0];
function Fj(a) {
  a = a === undefined ? {} : a;
  $d.call(this);
  var b = this;
  this.i = [];
  this.j = {};
  this.qa = this.h = 0;
  this.na = this.A = false;
  this.S = [];
  this.ga = this.ra = false;
  var c = v(Ej);
  var d = c.next();
  try {
    for (; !d.done; d = c.next()) {
      this.i[d.value] = [];
    }
  } finally {
    A(c, d);
  }
  this.u = 0;
  this.Vc = a.timeout || 1;
  this.N = Dj;
  this.C = 0;
  this.Ea = this.Ad.bind(this);
  this.Uc = this.Gd.bind(this);
  this.ub = this.Wc.bind(this);
  this.Lb = this.od.bind(this);
  this.Mb = this.Jc.bind(this);
  this.Nb = function () {
    b.Jc(performance.now());
  };
  this.Va = !!window.requestIdleCallback && !!window.cancelIdleCallback && !T("disable_scheduler_requestIdleCallback");
  if ((this.P = a.useRaf !== false && !!window.requestAnimationFrame) || T("enable_scheduler_simulate_raf")) {
    document.addEventListener("visibilitychange", this.Ea);
  }
}
u(Fj, $d);
r = Fj.prototype;
r.kb = function (a) {
  var b = Ma();
  Gj(this, a);
  a = Ma() - b;
  if (!this.A) {
    this.N -= a;
  }
};
r.Ka = function (a, b, c) {
  ++this.qa;
  if (b === 10) {
    this.kb(a);
    return this.qa;
  }
  var d = this.qa;
  this.j[d] = a;
  if (this.A && !c) {
    this.S.push({
      id: d,
      priority: b
    });
  } else {
    this.i[b].push(d);
    if (!this.na && !this.A) {
      if (this.h !== 0 && Hj(this) !== this.C) {
        this.stop();
      }
      this.start();
    }
  }
  return d;
};
r.ha = function (a) {
  delete this.j[a];
};
function Ij(a) {
  a.S.length = 0;
  for (var b = 5; b >= 0; b--) {
    a.i[b].length = 0;
  }
  a.i[8].length = 0;
  a.j = {};
  a.stop();
}
r.isHidden = function () {
  return !!document.hidden || false;
};
function Jj(a) {
  return !a.isHidden() && a.P;
}
function Hj(a) {
  var b = T("enable_scheduler_simulate_raf");
  if (a.i[8].length) {
    if (a.ga) {
      return 4;
    }
    if (b) {
      if (!a.isHidden()) {
        if (a.P) {
          return 3;
        } else {
          return 5;
        }
      }
    } else if (Jj(a)) {
      return 3;
    }
  }
  for (var c = 5; c >= a.u; c--) {
    if (a.i[c].length > 0) {
      if (c > 0) {
        if (b) {
          if (a.isHidden()) {
            return 2;
          } else if (a.P) {
            return 3;
          } else {
            return 5;
          }
        } else if (Jj(a)) {
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
r.qb = function (a) {
  var b = F("yt.logging.errors.log");
  if (b) {
    b(a);
  }
};
function Gj(a, b) {
  try {
    b();
  } catch (c) {
    a.qb(c);
  }
}
function Kj(a) {
  var b = v(Ej);
  var c = b.next();
  try {
    for (; !c.done; c = b.next()) {
      if (a.i[c.value].length) {
        return true;
      }
    }
  } finally {
    A(b, c);
  }
  return false;
}
r.od = function (a) {
  var b = undefined;
  if (a) {
    b = a.timeRemaining();
  }
  this.ra = true;
  Lj(this, b);
  this.ra = false;
};
r.Gd = function () {
  Lj(this);
};
r.Wc = function () {
  Mj(this);
};
r.Jc = function (a) {
  this.ga = true;
  var b = Hj(this);
  if (b === 4 && b !== this.C) {
    this.stop();
    this.start();
  }
  Lj(this, undefined, a);
  this.ga = false;
};
r.Ad = function () {
  if (!this.isHidden()) {
    Mj(this);
  }
  if (this.h) {
    this.stop();
    this.start();
  }
};
function Mj(a) {
  a.stop();
  a.A = true;
  var b = Ma();
  for (var c = a.i[8]; c.length;) {
    var d = c.shift();
    var e = a.j[d];
    delete a.j[d];
    if (e) {
      Gj(a, e);
    }
  }
  Nj(a);
  a.A = false;
  if (Kj(a)) {
    a.start();
  }
  b = Ma() - b;
  a.N -= b;
}
function Nj(a) {
  for (var b = 0, c = a.S.length; b < c; b++) {
    var d = a.S[b];
    a.i[d.priority].push(d.id);
  }
  a.S.length = 0;
}
function Lj(a, b, c) {
  if (!a.ga || a.C !== 4 || !a.h) {
    a.stop();
  }
  a.A = true;
  b = Ma() + (b || a.N);
  for (var d = a.i[5]; d.length;) {
    var e = d.shift();
    var f = a.j[e];
    delete a.j[e];
    if (f) {
      e = a;
      try {
        f(c);
      } catch (l) {
        e.qb(l);
      }
    }
  }
  for (d = a.i[4]; d.length;) {
    c = d.shift();
    f = a.j[c];
    delete a.j[c];
    if (f) {
      Gj(a, f);
    }
  }
  d = a.ra ? 0 : 1;
  d = a.u > d ? a.u : d;
  if (!(Ma() >= b)) {
    do {
      a: {
        f = a;
        e = d;
        for (var g = 3; g >= e; g--) {
          for (c = f.i[g]; c.length;) {
            var h = c.shift();
            var k = f.j[h];
            delete f.j[h];
            if (k) {
              c = k;
              break a;
            }
          }
        }
        c = null;
      }
      if (c) {
        Gj(a, c);
      }
    } while (c && Ma() < b);
  }
  a.A = false;
  Nj(a);
  a.N = Dj;
  if (Kj(a)) {
    a.start();
  }
}
r.requestIdleCallback = function (a) {
  if (this.Va) {
    return window.requestIdleCallback(a, {
      timeout: 3000
    });
  } else {
    return window.setTimeout(a, Cj);
  }
};
r.cancelIdleCallback = function (a) {
  if (this.Va) {
    window.cancelIdleCallback(a);
  } else {
    window.clearTimeout(a);
  }
};
r.start = function () {
  this.na = false;
  if (this.h === 0) {
    this.C = Hj(this);
    switch (this.C) {
      case 1:
        this.h = this.requestIdleCallback(this.Lb);
        break;
      case 2:
        this.h = window.setTimeout(this.Uc, this.Vc);
        break;
      case 3:
        this.h = window.requestAnimationFrame(this.Mb);
        break;
      case 4:
        this.h = window.setTimeout(this.ub, 0);
        break;
      case 5:
        this.h = window.setTimeout(this.Nb, Bj);
    }
  }
};
r.pause = function () {
  this.stop();
  this.na = true;
};
r.stop = function () {
  if (this.h) {
    switch (this.C) {
      case 1:
        this.cancelIdleCallback(this.h);
        break;
      case 5:
      case 2:
      case 4:
        window.clearTimeout(this.h);
        break;
      case 3:
        window.cancelAnimationFrame(this.h);
    }
    this.h = 0;
  }
};
r.wa = function () {
  Ij(this);
  this.stop();
  if (this.P || T("enable_scheduler_simulate_raf")) {
    document.removeEventListener("visibilitychange", this.Ea);
  }
  $d.prototype.wa.call(this);
};
var Oj = F("yt.scheduler.instance.timerIdMap_") || {};
var Pj = Hi("kevlar_tuner_scheduler_soft_state_timer_ms", 800);
var Qj = 0;
var Rj = 0;
function Sj() {
  var a = F("ytglobal.schedulerInstanceInstance_");
  if (!a || a.La) {
    a = new Fj(S("scheduler") || {});
    G("ytglobal.schedulerInstanceInstance_", a);
  }
  return a;
}
function Tj() {
  Uj();
  var a = F("ytglobal.schedulerInstanceInstance_");
  if (a) {
    if (a && typeof a.dispose == "function") {
      a.dispose();
    }
    G("ytglobal.schedulerInstanceInstance_", null);
  }
}
function Uj() {
  Ij(Sj());
  for (var a in Oj) {
    if (Oj.hasOwnProperty(a)) {
      delete Oj[Number(a)];
    }
  }
}
function Vj(a, b, c) {
  if (!c) {
    c = c === undefined;
    return -Sj().Ka(a, b, c);
  }
  var d = window.setTimeout(function () {
    var e = Sj().Ka(a, b);
    Oj[d] = e;
  }, c);
  return d;
}
function Wj(a) {
  Sj().kb(a);
}
function Xj(a) {
  var b = Sj();
  if (a < 0) {
    b.ha(-a);
  } else {
    var c = Oj[a];
    if (c) {
      b.ha(c);
      delete Oj[a];
    } else {
      window.clearTimeout(a);
    }
  }
}
function Yj() {
  Zj();
}
function Zj() {
  window.clearTimeout(Qj);
  Sj().start();
}
function ak() {
  Sj().pause();
  window.clearTimeout(Qj);
  Qj = window.setTimeout(Yj, Pj);
}
function bk() {
  window.clearTimeout(Rj);
  Rj = window.setTimeout(function () {
    ck(0);
  }, Pj);
}
function ck(a) {
  bk();
  var b = Sj();
  b.u = a;
  b.start();
}
function dk(a) {
  bk();
  var b = Sj();
  if (b.u > a) {
    b.u = a;
    b.start();
  }
}
function ek() {
  window.clearTimeout(Rj);
  var a = Sj();
  a.u = 0;
  a.start();
}
;
function fk() {
  zj.apply(this, arguments);
}
u(fk, zj);
function gk() {
  fk.instance ||= new fk();
  return fk.instance;
}
fk.prototype.Ka = function (a, b, c) {
  if (c !== undefined && Number.isNaN(Number(c))) {
    c = undefined;
  }
  var d = F("yt.scheduler.instance.addJob");
  if (d) {
    return d(a, b, c);
  } else if (c === undefined) {
    a();
    return NaN;
  } else {
    return Ji(a, c || 0);
  }
};
fk.prototype.ha = function (a) {
  if (a === undefined || !Number.isNaN(Number(a))) {
    var b = F("yt.scheduler.instance.cancelJob");
    if (b) {
      b(a);
    } else {
      window.clearTimeout(a);
    }
  }
};
fk.prototype.start = function () {
  var a = F("yt.scheduler.instance.start");
  if (a) {
    a();
  }
};
fk.prototype.pause = function () {
  var a = F("yt.scheduler.instance.pause");
  if (a) {
    a();
  }
};
var Ee = gk();
if (!F("yt.scheduler.initialized")) {
  G("yt.scheduler.instance.dispose", Tj);
  G("yt.scheduler.instance.addJob", Vj);
  G("yt.scheduler.instance.addImmediateJob", Wj);
  G("yt.scheduler.instance.cancelJob", Xj);
  G("yt.scheduler.instance.cancelAllJobs", Uj);
  G("yt.scheduler.instance.start", Zj);
  G("yt.scheduler.instance.pause", ak);
  G("yt.scheduler.instance.setPriorityThreshold", ck);
  G("yt.scheduler.instance.enablePriorityThreshold", dk);
  G("yt.scheduler.instance.clearPriorityThreshold", ek);
  G("yt.scheduler.initialized", true);
}
function hk(a) {
  var b = new Zf();
  this.h = (a = b.isAvailable() ? a ? new $f(b, a) : b : null) ? new Uf(a) : null;
  this.domain = document.domain || window.location.hostname;
}
hk.prototype.set = function (a, b, c, d) {
  c = c || 31104000;
  this.remove(a);
  if (this.h) {
    try {
      this.h.set(a, b, Date.now() + c * 1000);
      return;
    } catch (f) {}
  }
  var e = "";
  if (d) {
    try {
      e = escape(If(b));
    } catch (f) {
      return;
    }
  } else {
    e = escape(String(b));
  }
  b = this.domain;
  Od.set("" + a, e, {
    Vb: c,
    path: "/",
    domain: b === undefined ? "youtube.com" : b,
    secure: false
  });
};
hk.prototype.get = function (a, b) {
  var c = undefined;
  var d = !this.h;
  if (!d && this.h) {
    try {
      c = this.h.get(a);
    } catch (e) {
      d = true;
    }
  }
  if (d && (c = Od.get("" + a, undefined))) {
    d = unescape(c);
    if (b) {
      try {
        c = JSON.parse(d);
      } catch (e) {
        this.remove(a);
        c = undefined;
      }
    } else {
      c = d;
    }
  }
  return c;
};
hk.prototype.remove = function (a) {
  if (this.h) {
    this.h.remove(a);
  }
  var b = this.domain;
  Od.remove("" + a, "/", b === undefined ? "youtube.com" : b);
};
var ik = function () {
  var a;
  return function () {
    a ||= new hk("ytidb");
    return a;
  };
}();
function jk() {
  var a;
  if ((a = ik()) == null) {
    return undefined;
  } else {
    return a.get("LAST_RESULT_ENTRY_KEY", true);
  }
}
;
var kk = [];
var lk;
var mk = false;
function nk(a) {
  if (!mk) {
    if (lk) {
      lk.qb(a);
    } else {
      kk.push({
        type: "ERROR",
        payload: a
      });
      if (kk.length > 10) {
        kk.shift();
      }
    }
  }
}
function ok(a, b) {
  if (!mk) {
    if (lk) {
      lk.Fb(a, b);
    } else {
      kk.push({
        type: "EVENT",
        eventType: a,
        payload: b
      });
      if (kk.length > 10) {
        kk.shift();
      }
    }
  }
}
;
function pk(a) {
  if (a.indexOf(":") >= 0) {
    throw Error("Database name cannot contain ':'");
  }
}
function qk(a) {
  return a.substr(0, a.indexOf(":")) || a;
}
;
var rk = yb || zb;
var tk = {
  AUTH_INVALID: "No user identifier specified.",
  EXPLICIT_ABORT: "Transaction was explicitly aborted.",
  IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
  MISSING_INDEX: "Index not created.",
  MISSING_OBJECT_STORES: "Object stores not created.",
  DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
  DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
  UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
  QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
  QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
  EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
  INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
};
var vk = {
  AUTH_INVALID: "ERROR",
  EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
  EXPLICIT_ABORT: "IGNORED",
  IDB_NOT_SUPPORTED: "ERROR",
  MISSING_INDEX: "WARNING",
  MISSING_OBJECT_STORES: "ERROR",
  DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
  DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
  QUOTA_EXCEEDED: "WARNING",
  QUOTA_MAYBE_EXCEEDED: "WARNING",
  UNKNOWN_ABORT: "WARNING",
  INCOMPATIBLE_DB_VERSION: "WARNING"
};
var xk = {
  AUTH_INVALID: false,
  EXECUTE_TRANSACTION_ON_CLOSED_DB: false,
  EXPLICIT_ABORT: false,
  IDB_NOT_SUPPORTED: false,
  MISSING_INDEX: false,
  MISSING_OBJECT_STORES: false,
  DB_DELETED_BY_MISSING_OBJECT_STORES: false,
  DB_REOPENED_BY_MISSING_OBJECT_STORES: false,
  QUOTA_EXCEEDED: false,
  QUOTA_MAYBE_EXCEEDED: true,
  UNKNOWN_ABORT: true,
  INCOMPATIBLE_DB_VERSION: false
};
function U(a, b, c, d, e) {
  b = b === undefined ? {} : b;
  c = c === undefined ? tk[a] : c;
  d = d === undefined ? vk[a] : d;
  e = e === undefined ? xk[a] : e;
  Yh.call(this, c, na({}, {
    name: "YtIdbKnownError",
    isSw: self.document === undefined,
    isIframe: self !== self.top,
    type: a
  }, b));
  this.type = a;
  this.message = c;
  this.level = d;
  this.h = e;
  Object.setPrototypeOf(this, U.prototype);
}
u(U, Yh);
function yk(a, b) {
  U.call(this, "MISSING_OBJECT_STORES", {
    expectedObjectStores: b,
    foundObjectStores: a
  }, tk.MISSING_OBJECT_STORES);
  Object.setPrototypeOf(this, yk.prototype);
}
u(yk, U);
function zk(a, b) {
  var c = Error.call(this);
  this.message = c.message;
  if ("stack" in c) {
    this.stack = c.stack;
  }
  this.index = a;
  this.objectStore = b;
  Object.setPrototypeOf(this, zk.prototype);
}
u(zk, Error);
var Ak = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];
function Bk(a, b, c, d) {
  b = qk(b);
  var e = a instanceof Error ? a : Error("Unexpected error: " + a);
  if (e instanceof U) {
    return e;
  }
  a = {
    objectStoreNames: c,
    dbName: b,
    dbVersion: d
  };
  if (e.name === "QuotaExceededError") {
    return new U("QUOTA_EXCEEDED", a);
  }
  if (Ab && e.name === "UnknownError") {
    return new U("QUOTA_MAYBE_EXCEEDED", a);
  }
  if (e instanceof zk) {
    return new U("MISSING_INDEX", na({}, a, {
      objectStore: e.objectStore,
      index: e.index
    }));
  }
  if (e.name === "InvalidStateError" && Ak.some(function (f) {
    return e.message.includes(f);
  })) {
    return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB", a);
  }
  if (e.name === "AbortError") {
    return new U("UNKNOWN_ABORT", a, e.message);
  }
  e.args = [na({}, a, {
    name: "IdbError",
    oe: e.name
  })];
  e.level = "WARNING";
  return e;
}
function Ck(a, b, c) {
  var d = jk();
  return new U("IDB_NOT_SUPPORTED", {
    context: {
      caller: a,
      publicName: b,
      version: c,
      hasSucceededOnce: d == null ? undefined : d.hasSucceededOnce
    }
  });
}
;
function Dk(a) {
  if (!a) {
    throw Error();
  }
  throw a;
}
function Ek(a) {
  return a;
}
function Fk(a) {
  this.h = a;
}
function Gk(a) {
  function b(e) {
    if (d.state.status === "PENDING") {
      d.state = {
        status: "REJECTED",
        reason: e
      };
      e = v(d.i);
      var f = e.next();
      try {
        for (; !f.done; f = e.next()) {
          var g = f.value;
          g();
        }
      } finally {
        A(e, f);
      }
    }
  }
  function c(e) {
    if (d.state.status === "PENDING") {
      d.state = {
        status: "FULFILLED",
        value: e
      };
      e = v(d.h);
      var f = e.next();
      try {
        for (; !f.done; f = e.next()) {
          var g = f.value;
          g();
        }
      } finally {
        A(e, f);
      }
    }
  }
  var d = this;
  this.state = {
    status: "PENDING"
  };
  this.h = [];
  this.i = [];
  a = a.h;
  try {
    a(c, b);
  } catch (e) {
    b(e);
  }
}
Gk.all = function (a) {
  return new Gk(new Fk(function (b, c) {
    var d = [];
    var e = a.length;
    if (e === 0) {
      b(d);
    }
    for (var f = {
      bb: 0
    }; f.bb < a.length; f = {
      bb: f.bb
    }, ++f.bb) {
      Hk(Gk.resolve(a[f.bb]).then(function (g) {
        return function (h) {
          d[g.bb] = h;
          e--;
          if (e === 0) {
            b(d);
          }
        };
      }(f)), function (g) {
        c(g);
      });
    }
  }));
};
Gk.resolve = function (a) {
  return new Gk(new Fk(function (b, c) {
    if (a instanceof Gk) {
      a.then(b, c);
    } else {
      b(a);
    }
  }));
};
Gk.reject = function (a) {
  return new Gk(new Fk(function (b, c) {
    c(a);
  }));
};
Gk.prototype.then = function (a, b) {
  var c = this;
  var d = a ?? Ek;
  var e = b ?? Dk;
  return new Gk(new Fk(function (f, g) {
    if (c.state.status === "PENDING") {
      c.h.push(function () {
        Ik(c, c, d, f, g);
      });
      c.i.push(function () {
        Jk(c, c, e, f, g);
      });
    } else if (c.state.status === "FULFILLED") {
      Ik(c, c, d, f, g);
    } else if (c.state.status === "REJECTED") {
      Jk(c, c, e, f, g);
    }
  }));
};
function Hk(a, b) {
  a.then(undefined, b);
}
function Ik(a, b, c, d, e) {
  try {
    if (a.state.status !== "FULFILLED") {
      throw Error("calling handleResolve before the promise is fulfilled.");
    }
    var f = c(a.state.value);
    if (f instanceof Gk) {
      Kk(a, b, f, d, e);
    } else {
      d(f);
    }
  } catch (g) {
    e(g);
  }
}
function Jk(a, b, c, d, e) {
  try {
    if (a.state.status !== "REJECTED") {
      throw Error("calling handleReject before the promise is rejected.");
    }
    var f = c(a.state.reason);
    if (f instanceof Gk) {
      Kk(a, b, f, d, e);
    } else {
      d(f);
    }
  } catch (g) {
    e(g);
  }
}
function Kk(a, b, c, d, e) {
  if (b === c) {
    e(new TypeError("Circular promise chain detected."));
  } else {
    c.then(function (f) {
      if (f instanceof Gk) {
        Kk(a, b, f, d, e);
      } else {
        d(f);
      }
    }, function (f) {
      e(f);
    });
  }
}
;
function Lk(a, b, c) {
  function d() {
    c(a.error);
    f();
  }
  function e() {
    b(a.result);
    f();
  }
  function f() {
    try {
      a.removeEventListener("success", e);
      a.removeEventListener("error", d);
    } catch (g) {}
  }
  a.addEventListener("success", e);
  a.addEventListener("error", d);
}
function Mk(a) {
  return new Promise(function (b, c) {
    Lk(a, b, c);
  });
}
function Nk(a) {
  return new Gk(new Fk(function (b, c) {
    Lk(a, b, c);
  }));
}
;
function Ok(a, b) {
  return new Gk(new Fk(function (c, d) {
    function e() {
      var f = a ? b(a) : null;
      if (f) {
        f.then(function (g) {
          a = g;
          e();
        }, d);
      } else {
        c();
      }
    }
    e();
  }));
}
;
var Pk = window;
var V = Pk.ytcsi && Pk.ytcsi.now ? Pk.ytcsi.now : Pk.performance && Pk.performance.timing && Pk.performance.now && Pk.performance.timing.navigationStart ? function () {
  return Pk.performance.timing.navigationStart + Pk.performance.now();
} : function () {
  return new Date().getTime();
};
function Qk(a, b) {
  this.h = a;
  this.options = b;
  this.transactionCount = 0;
  this.j = Math.round(V());
  this.i = false;
}
function Rk() {
  return T("idb_immediate_commit");
}
r = Qk.prototype;
r.add = function (a, b, c) {
  return Sk(this, [a], {
    mode: "readwrite",
    U: true,
    commit: Rk()
  }, function (d) {
    return d.objectStore(a).add(b, c);
  });
};
r.clear = function (a) {
  return Sk(this, [a], {
    mode: "readwrite",
    U: true
  }, function (b) {
    return b.objectStore(a).clear();
  });
};
r.close = function () {
  this.h.close();
  var a;
  if ((a = this.options) == null ? 0 : a.closed) {
    this.options.closed();
  }
};
r.count = function (a, b) {
  return Sk(this, [a], {
    mode: "readonly",
    U: true,
    commit: Rk()
  }, function (c) {
    return c.objectStore(a).count(b);
  });
};
function Tk(a, b, c) {
  a = a.h.createObjectStore(b, c);
  return new Uk(a);
}
r.delete = function (a, b) {
  return Sk(this, [a], {
    mode: "readwrite",
    U: true,
    commit: Rk() && !(b instanceof IDBKeyRange)
  }, function (c) {
    return c.objectStore(a).delete(b);
  });
};
r.get = function (a, b) {
  return Sk(this, [a], {
    mode: "readonly",
    U: true,
    commit: Rk()
  }, function (c) {
    return c.objectStore(a).get(b);
  });
};
r.getAll = function (a, b, c) {
  return Sk(this, [a], {
    mode: "readonly",
    U: true
  }, function (d) {
    return d.objectStore(a).getAll(b, c);
  });
};
function Vk(a, b, c) {
  return Sk(a, [b], {
    mode: "readwrite",
    U: true,
    commit: Rk()
  }, function (d) {
    d = d.objectStore(b);
    return Nk(d.h.put(c, undefined));
  });
}
r.objectStoreNames = function () {
  return Array.from(this.h.objectStoreNames);
};
function Sk(a, b, c, d) {
  var e;
  var f;
  var g;
  var h;
  var k;
  var l;
  var m;
  var n;
  var q;
  var p;
  var x;
  var y;
  return C(function (z) {
    switch (z.i) {
      case 1:
        var H = {
          mode: "readonly",
          U: false,
          tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        if (typeof c === "string") {
          H.mode = c;
        } else {
          Object.assign(H, c);
        }
        e = H;
        a.transactionCount++;
        f = e.U ? 3 : 1;
        g = 0;
      case 2:
        if (h) {
          z.v(4);
          break;
        }
        g++;
        k = Math.round(V());
        z.P(5);
        l = a.h.transaction(b, e.mode);
        H = z.h;
        var D = !!e.commit;
        var P = new Wk(l);
        D = Xk(P, d, D);
        return H.call(z, D, 7);
      case 7:
        m = z.j;
        n = Math.round(V());
        Yk(a, k, n, g, undefined, b.join(), e);
        return z.return(m);
      case 5:
        q = z.N();
        p = Math.round(V());
        x = Bk(q, a.h.name, b.join(), a.h.version);
        if ((y = x instanceof U && !x.h) || g >= f) {
          Yk(a, k, p, g, x, b.join(), e);
          h = x;
        }
        z.v(2);
        break;
      case 4:
        return z.return(Promise.reject(h));
    }
  });
}
function Yk(a, b, c, d, e, f, g) {
  b = c - b;
  if (e) {
    if (e instanceof U && (e.type === "QUOTA_EXCEEDED" || e.type === "QUOTA_MAYBE_EXCEEDED")) {
      ok("QUOTA_EXCEEDED", {
        dbName: qk(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
      });
    }
    if (e instanceof U && e.type === "UNKNOWN_ABORT") {
      c -= a.j;
      if (c < 0 && c >= 2147483648) {
        c = 0;
      }
      ok("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
      });
      a.i = true;
    }
    Zk(a, false, d, f, b, g.tag);
    nk(e);
  } else {
    Zk(a, true, d, f, b, g.tag);
  }
}
function Zk(a, b, c, d, e, f) {
  ok("TRANSACTION_ENDED", {
    objectStoreNames: d,
    connectionHasUnknownAbortedTransaction: a.i,
    duration: e,
    isSuccessful: b,
    tryCount: c,
    tag: f === undefined ? "IDB_TRANSACTION_TAG_UNKNOWN" : f
  });
}
r.getName = function () {
  return this.h.name;
};
function Uk(a) {
  this.h = a;
}
r = Uk.prototype;
r.add = function (a, b) {
  return Nk(this.h.add(a, b));
};
r.autoIncrement = function () {
  return this.h.autoIncrement;
};
r.clear = function () {
  return Nk(this.h.clear()).then(function () {});
};
function $k(a, b, c) {
  a.h.createIndex(b, c, {
    unique: false
  });
}
r.count = function (a) {
  return Nk(this.h.count(a));
};
function al(a, b) {
  return bl(a, {
    query: b
  }, function (c) {
    return c.delete().then(function () {
      return cl(c);
    });
  }).then(function () {});
}
r.delete = function (a) {
  if (a instanceof IDBKeyRange) {
    return al(this, a);
  } else {
    return Nk(this.h.delete(a));
  }
};
r.get = function (a) {
  return Nk(this.h.get(a));
};
r.getAll = function (a, b) {
  if ("getAll" in IDBObjectStore.prototype) {
    return Nk(this.h.getAll(a, b));
  } else {
    return dl(this, a, b);
  }
};
function dl(a, b, c) {
  var d = [];
  return bl(a, {
    query: b
  }, function (e) {
    if (c === undefined || !(d.length >= c)) {
      d.push(e.cursor.value);
      return cl(e);
    }
  }).then(function () {
    return d;
  });
}
r.index = function (a) {
  try {
    return new el(this.h.index(a));
  } catch (b) {
    if (b instanceof Error && b.name === "NotFoundError") {
      throw new zk(a, this.h.name);
    }
    throw b;
  }
};
r.getName = function () {
  return this.h.name;
};
r.keyPath = function () {
  return this.h.keyPath;
};
function bl(a, b, c) {
  a = a.h.openCursor(b.query, b.direction);
  return fl(a).then(function (d) {
    return Ok(d, c);
  });
}
function Wk(a) {
  var b = this;
  this.h = a;
  this.i = new Map();
  this.aborted = false;
  this.done = new Promise(function (c, d) {
    b.h.addEventListener("complete", function () {
      c();
    });
    b.h.addEventListener("error", function (e) {
      if (e.currentTarget === e.target) {
        d(b.h.error);
      }
    });
    b.h.addEventListener("abort", function () {
      var e = b.h.error;
      if (e) {
        d(e);
      } else if (!b.aborted) {
        e = U;
        for (var f = b.h.objectStoreNames, g = [], h = 0; h < f.length; h++) {
          var k = f.item(h);
          if (k === null) {
            throw Error("Invariant: item in DOMStringList is null");
          }
          g.push(k);
        }
        e = new e("UNKNOWN_ABORT", {
          objectStoreNames: g.join(),
          dbName: b.h.db.name,
          mode: b.h.mode
        });
        d(e);
      }
    });
  });
}
function Xk(a, b, c) {
  var d = new Promise(function (e, f) {
    try {
      var g = b(a);
      if (c) {
        a.commit();
      }
      Hk(g.then(function (h) {
        e(h);
      }), f);
    } catch (h) {
      f(h);
      a.abort();
    }
  });
  return Promise.all([d, a.done]).then(function (e) {
    return v(e).next().value;
  });
}
Wk.prototype.abort = function () {
  this.h.abort();
  this.aborted = true;
  throw new U("EXPLICIT_ABORT");
};
Wk.prototype.commit = function () {
  if (!this.aborted) {
    var a;
    var b;
    if ((b = (a = this.h).commit) != null) {
      b.call(a);
    }
  }
};
Wk.prototype.objectStore = function (a) {
  a = this.h.objectStore(a);
  var b = this.i.get(a);
  if (!b) {
    b = new Uk(a);
    this.i.set(a, b);
  }
  return b;
};
function el(a) {
  this.h = a;
}
r = el.prototype;
r.count = function (a) {
  return Nk(this.h.count(a));
};
r.delete = function (a) {
  return gl(this, {
    query: a
  }, function (b) {
    return b.delete().then(function () {
      return cl(b);
    });
  });
};
r.get = function (a) {
  return Nk(this.h.get(a));
};
r.getAll = function (a, b) {
  if ("getAll" in IDBIndex.prototype) {
    return Nk(this.h.getAll(a, b));
  } else {
    return hl(this, a, b);
  }
};
function hl(a, b, c) {
  var d = [];
  return gl(a, {
    query: b
  }, function (e) {
    if (c === undefined || !(d.length >= c)) {
      d.push(e.cursor.value);
      return cl(e);
    }
  }).then(function () {
    return d;
  });
}
r.keyPath = function () {
  return this.h.keyPath;
};
r.unique = function () {
  return this.h.unique;
};
function gl(a, b, c) {
  var d = b.query;
  b = b.direction;
  a = a.h.openCursor(d === undefined ? null : d, b === undefined ? "next" : b);
  return fl(a).then(function (e) {
    return Ok(e, c);
  });
}
function il(a, b) {
  this.request = a;
  this.cursor = b;
}
function fl(a) {
  return Nk(a).then(function (b) {
    if (b) {
      return new il(a, b);
    } else {
      return null;
    }
  });
}
function cl(a) {
  a.cursor.continue(undefined);
  return fl(a.request);
}
il.prototype.delete = function () {
  return Nk(this.cursor.delete()).then(function () {});
};
il.prototype.update = function (a) {
  return Nk(this.cursor.update(a));
};
function jl(a, b, c) {
  return new Promise(function (d, e) {
    function f() {
      q ||= new Qk(g.result, {
        closed: n
      });
      return q;
    }
    var g = b !== undefined ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
    var h = c.Yc;
    var k = c.blocking;
    var l = c.Fd;
    var m = c.upgrade;
    var n = c.closed;
    var q;
    g.addEventListener("upgradeneeded", function (p) {
      try {
        if (p.newVersion === null) {
          throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
        }
        if (g.transaction === null) {
          throw Error("Invariant: transaction on IDbOpenDbRequest is null");
        }
        if (p.dataLoss && p.dataLoss !== "none") {
          ok("IDB_DATA_CORRUPTED", {
            reason: p.dataLossMessage || "unknown reason",
            dbName: qk(a)
          });
        }
        var x = f();
        var y = new Wk(g.transaction);
        if (m) {
          m(x, function (z) {
            return p.oldVersion < z && p.newVersion >= z;
          }, y);
        }
        y.done.catch(function (z) {
          e(z);
        });
      } catch (z) {
        e(z);
      }
    });
    g.addEventListener("success", function () {
      var p = g.result;
      if (k) {
        p.addEventListener("versionchange", function () {
          k(f());
        });
      }
      p.addEventListener("close", function () {
        ok("IDB_UNEXPECTEDLY_CLOSED", {
          dbName: qk(a),
          dbVersion: p.version
        });
        if (l) {
          l();
        }
      });
      d(f());
    });
    g.addEventListener("error", function () {
      e(g.error);
    });
    if (h) {
      g.addEventListener("blocked", function () {
        h();
      });
    }
  });
}
function kl(a, b, c) {
  c = c === undefined ? {} : c;
  return jl(a, b, c);
}
function ll(a, b) {
  b = b === undefined ? {} : b;
  var c;
  var d;
  var e;
  var f;
  return C(function (g) {
    if (g.i == 1) {
      g.P(2);
      c = self.indexedDB.deleteDatabase(a);
      d = b;
      if (e = d.Yc) {
        c.addEventListener("blocked", function () {
          e();
        });
      }
      return g.h(Mk(c), 4);
    }
    if (g.i != 2) {
      return g.na(0);
    }
    f = g.N();
    throw Bk(f, a, "", -1);
  });
}
;
function ml(a, b) {
  this.name = a;
  this.options = b;
  this.j = true;
  this.u = this.m = 0;
}
ml.prototype.i = function (a, b, c) {
  c = c === undefined ? {} : c;
  return kl(a, b, c);
};
ml.prototype.delete = function (a) {
  a = a === undefined ? {} : a;
  return ll(this.name, a);
};
function nl(a, b) {
  return new U("INCOMPATIBLE_DB_VERSION", {
    dbName: a.name,
    oldVersion: a.options.version,
    newVersion: b
  });
}
function ol(a, b) {
  if (!b) {
    throw Ck("openWithToken", qk(a.name));
  }
  return a.open();
}
ml.prototype.open = function () {
  function a() {
    var g;
    var h;
    var k;
    var l;
    var m;
    var n;
    var q;
    var p;
    return C(function (y) {
      switch (y.i) {
        case 1:
          g = Error().stack ?? "";
          y.P(2);
          return y.h(c.i(c.name, c.options.version, e), 4);
        case 4:
          var z = h = y.j;
          var H = c.options;
          var D = [];
          var P = v(Object.keys(H.hb));
          var Y = P.next();
          try {
            for (; !Y.done; Y = P.next()) {
              var pa = Y.value;
              var Gb = H.hb[pa];
              var za = Gb.se;
              var Z = za === undefined ? Number.MAX_VALUE : za;
              if (!!(z.h.version >= Gb.lb) && !(z.h.version >= Z) && !z.h.objectStoreNames.contains(pa)) {
                D.push(pa);
              }
            }
          } finally {
            A(P, Y);
          }
          k = D;
          if (k.length === 0) {
            y.v(5);
            break;
          }
          l = Object.keys(c.options.hb);
          m = h.objectStoreNames();
          if (c.u < Hi("ytidb_reopen_db_retries", 0)) {
            c.u++;
            h.close();
            nk(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
              dbName: c.name,
              expectedObjectStores: l,
              foundObjectStores: m
            }));
            return y.return(a());
          }
          if (!(c.m < Hi("ytidb_remake_db_retries", 1))) {
            y.v(6);
            break;
          }
          c.m++;
          return y.h(c.delete(), 7);
        case 7:
          nk(new U("DB_DELETED_BY_MISSING_OBJECT_STORES", {
            dbName: c.name,
            expectedObjectStores: l,
            foundObjectStores: m
          }));
          return y.return(a());
        case 6:
          throw new yk(m, l);
        case 5:
          return y.return(h);
        case 2:
          n = y.N();
          if (n instanceof DOMException ? n.name !== "VersionError" : "DOMError" in self && n instanceof DOMError ? n.name !== "VersionError" : !(n instanceof Object) || !("message" in n) || n.message !== "An attempt was made to open a database using a lower version than the existing version.") {
            y.v(8);
            break;
          }
          return y.h(c.i(c.name, undefined, na({}, e, {
            upgrade: undefined
          })), 9);
        case 9:
          q = y.j;
          p = q.h.version;
          if (c.options.version !== undefined && p > c.options.version + 1) {
            q.close();
            c.j = false;
            throw nl(c, p);
          }
          return y.return(q);
        case 8:
          b();
          if (n instanceof Error && !T("ytidb_async_stack_killswitch")) {
            n.stack = n.stack + "\n" + g.substring(g.indexOf("\n") + 1);
          }
          throw Bk(n, c.name, "", c.options.version ?? -1);
      }
    });
  }
  function b() {
    if (c.h === d) {
      c.h = undefined;
    }
  }
  var c = this;
  if (!this.j) {
    throw nl(this);
  }
  if (this.h) {
    return this.h;
  }
  var d;
  var e = {
    blocking: function (f) {
      f.close();
    },
    closed: b,
    Fd: b,
    upgrade: this.options.upgrade
  };
  return this.h = d = a();
};
var pl = new ml("YtIdbMeta", {
  hb: {
    databases: {
      lb: 1
    }
  },
  upgrade: function (a, b) {
    if (b(1)) {
      Tk(a, "databases", {
        keyPath: "actualName"
      });
    }
  }
});
function ql(a, b) {
  var c;
  return C(function (d) {
    if (d.i == 1) {
      return d.h(ol(pl, b), 2);
    }
    c = d.j;
    return d.return(Sk(c, ["databases"], {
      U: true,
      mode: "readwrite"
    }, function (e) {
      var f = e.objectStore("databases");
      return f.get(a.actualName).then(function (g) {
        if (g ? a.actualName !== g.actualName || a.publicName !== g.publicName || a.userIdentifier !== g.userIdentifier : 1) {
          return Nk(f.h.put(a, undefined)).then(function () {});
        }
      });
    }));
  });
}
function rl(a, b) {
  var c;
  return C(function (d) {
    if (d.i == 1) {
      if (a) {
        return d.h(ol(pl, b), 2);
      } else {
        return d.return();
      }
    }
    c = d.j;
    return d.return(c.delete("databases", a));
  });
}
function sl(a, b) {
  var c;
  var d;
  return C(function (e) {
    if (e.i == 1) {
      c = [];
      return e.h(ol(pl, b), 2);
    } else if (e.i != 3) {
      d = e.j;
      return e.h(Sk(d, ["databases"], {
        U: true,
        mode: "readonly"
      }, function (f) {
        c.length = 0;
        return bl(f.objectStore("databases"), {}, function (g) {
          if (a(g.cursor.value)) {
            c.push(g.cursor.value);
          }
          return cl(g);
        });
      }), 3);
    } else {
      return e.return(c);
    }
  });
}
function tl(a) {
  return sl(function (b) {
    return b.publicName === "LogsDatabaseV2" && b.userIdentifier !== undefined;
  }, a);
}
;
var ul;
var vl = new function () {}(new function () {}());
function wl() {
  var a;
  var b;
  var c;
  return C(function (d) {
    switch (d.i) {
      case 1:
        a = jk();
        if ((b = a) == null ? 0 : b.hasSucceededOnce) {
          return d.return(true);
        }
        var e;
        if (e = rk) {
          e = /WebKit\/([0-9]+)/.exec(ub());
          e = !!e && !!(parseInt(e[1], 10) >= 600);
        }
        if (e) {
          e = /WebKit\/([0-9]+)/.exec(ub());
          e = !e || !(parseInt(e[1], 10) >= 602);
        }
        if (!(e = e || xb)) {
          try {
            e = self;
            var f = !!e.indexedDB && !!e.IDBIndex && !!e.IDBKeyRange && !!e.IDBObjectStore;
          } catch (g) {
            f = false;
          }
          e = !f;
        }
        if (e || !("IDBTransaction" in self) || !("objectStoreNames" in IDBTransaction.prototype)) {
          return d.return(false);
        }
        d.P(2);
        c = {
          actualName: "yt-idb-test-do-not-use",
          publicName: "yt-idb-test-do-not-use",
          userIdentifier: undefined
        };
        return d.h(ql(c, vl), 4);
      case 4:
        return d.h(rl("yt-idb-test-do-not-use", vl), 5);
      case 5:
        return d.return(true);
      case 2:
        d.N();
        return d.return(false);
    }
  });
}
function xl() {
  if (ul !== undefined) {
    return ul;
  }
  mk = true;
  return ul = wl().then(function (a) {
    mk = false;
    var b;
    if ((b = ik()) != null && b.h) {
      var c;
      b = {
        hasSucceededOnce: ((c = jk()) == null ? undefined : c.hasSucceededOnce) || a
      };
      var d;
      if ((d = ik()) != null) {
        d.set("LAST_RESULT_ENTRY_KEY", b, 2592000, true);
      }
    }
    return a;
  });
}
function yl() {
  return F("ytglobal.idbToken_") || undefined;
}
function zl() {
  var a = yl();
  if (a) {
    return Promise.resolve(a);
  } else {
    return xl().then(function (b) {
      if (b) {
        G("ytglobal.idbToken_", vl);
        b = vl;
      } else {
        b = undefined;
      }
      return b;
    });
  }
}
;
new Of();
function Al(a) {
  if (!xj()) {
    a = new U("AUTH_INVALID", {
      dbName: a
    });
    nk(a);
    throw a;
  }
  var b = yj();
  return {
    actualName: a + ":" + b,
    publicName: a,
    userIdentifier: b
  };
}
function Bl(a, b, c, d) {
  var f;
  var g;
  var h;
  var k;
  var l;
  return C(function (m) {
    switch (m.i) {
      case 1:
        f = Error().stack ?? "";
        return m.h(zl(), 2);
      case 2:
        g = m.j;
        if (!g) {
          h = Ck("openDbImpl", a, b);
          if (!T("ytidb_async_stack_killswitch")) {
            h.stack = h.stack + "\n" + f.substring(f.indexOf("\n") + 1);
          }
          nk(h);
          throw h;
        }
        pk(a);
        k = c ? {
          actualName: a,
          publicName: a,
          userIdentifier: undefined
        } : Al(a);
        m.P(3);
        return m.h(ql(k, g), 5);
      case 5:
        return m.h(kl(k.actualName, b, d), 6);
      case 6:
        return m.return(m.j);
      case 3:
        l = m.N();
        m.P(7);
        return m.h(rl(k.actualName, g), 9);
      case 9:
        m.na(8);
        break;
      case 7:
        m.N();
      case 8:
        throw l;
    }
  });
}
function Cl(a, b, c) {
  c = c === undefined ? {} : c;
  return Bl(a, b, false, c);
}
function Dl(a, b, c) {
  c = c === undefined ? {} : c;
  return Bl(a, b, true, c);
}
function El(a, b) {
  b = b === undefined ? {} : b;
  var c;
  var d;
  return C(function (e) {
    if (e.i == 1) {
      return e.h(zl(), 2);
    }
    if (e.i != 3) {
      c = e.j;
      if (!c) {
        return e.return();
      }
      pk(a);
      d = Al(a);
      return e.h(ll(d.actualName, b), 3);
    }
    return e.h(rl(d.actualName, c), 0);
  });
}
function Fl(a, b, c) {
  a = a.map(function (d) {
    return C(function (e) {
      if (e.i == 1) {
        return e.h(ll(d.actualName, b), 2);
      } else {
        return e.h(rl(d.actualName, c), 0);
      }
    });
  });
  return Promise.all(a).then(function () {});
}
function Gl() {
  var a = a === undefined ? {} : a;
  var b;
  var c;
  return C(function (d) {
    if (d.i == 1) {
      return d.h(zl(), 2);
    }
    if (d.i != 3) {
      b = d.j;
      if (!b) {
        return d.return();
      }
      pk("LogsDatabaseV2");
      return d.h(tl(b), 3);
    }
    c = d.j;
    return d.h(Fl(c, a, b), 0);
  });
}
function Hl(a, b) {
  b = b === undefined ? {} : b;
  var c;
  return C(function (d) {
    if (d.i == 1) {
      return d.h(zl(), 2);
    }
    if (d.i != 3) {
      c = d.j;
      if (!c) {
        return d.return();
      }
      pk(a);
      return d.h(ll(a, b), 3);
    }
    return d.h(rl(a, c), 0);
  });
}
;
function Il(a, b) {
  ml.call(this, a, b);
  this.options = b;
  pk(a);
}
u(Il, ml);
function Jl(a, b) {
  var c;
  return function () {
    c ||= new Il(a, b);
    return c;
  };
}
Il.prototype.i = function (a, b, c) {
  c = c === undefined ? {} : c;
  return (this.options.shared ? Dl : Cl)(a, b, na({}, c));
};
Il.prototype.delete = function (a) {
  a = a === undefined ? {} : a;
  return (this.options.shared ? Hl : El)(this.name, a);
};
function Kl(a, b) {
  return Jl(a, b);
}
;
var Ll = {};
var Ml = Kl("ytGcfConfig", {
  hb: (Ll.coldConfigStore = {
    lb: 1
  }, Ll.hotConfigStore = {
    lb: 1
  }, Ll),
  shared: false,
  upgrade: function (a, b) {
    if (b(1)) {
      $k(Tk(a, "hotConfigStore", {
        keyPath: "key",
        autoIncrement: true
      }), "hotTimestampIndex", "timestamp");
      $k(Tk(a, "coldConfigStore", {
        keyPath: "key",
        autoIncrement: true
      }), "coldTimestampIndex", "timestamp");
    }
  },
  version: 1
});
function Nl(a) {
  return ol(Ml(), a);
}
function Ol(a, b, c) {
  var d;
  var e;
  var f;
  return C(function (g) {
    switch (g.i) {
      case 1:
        d = {
          config: a,
          hashData: b,
          timestamp: V()
        };
        return g.h(Nl(c), 2);
      case 2:
        e = g.j;
        return g.h(e.clear("hotConfigStore"), 3);
      case 3:
        return g.h(Vk(e, "hotConfigStore", d), 4);
      case 4:
        f = g.j;
        return g.return(f);
    }
  });
}
function Pl(a, b, c, d) {
  var e;
  var f;
  var g;
  return C(function (h) {
    switch (h.i) {
      case 1:
        e = {
          config: a,
          hashData: b,
          configData: c,
          timestamp: V()
        };
        return h.h(Nl(d), 2);
      case 2:
        f = h.j;
        return h.h(f.clear("coldConfigStore"), 3);
      case 3:
        return h.h(Vk(f, "coldConfigStore", e), 4);
      case 4:
        g = h.j;
        return h.return(g);
    }
  });
}
function Ql(a) {
  var b;
  var c;
  return C(function (d) {
    if (d.i == 1) {
      return d.h(Nl(a), 2);
    } else if (d.i != 3) {
      b = d.j;
      c = undefined;
      return d.h(Sk(b, ["coldConfigStore"], {
        mode: "readwrite",
        U: true
      }, function (e) {
        return gl(e.objectStore("coldConfigStore").index("coldTimestampIndex"), {
          direction: "prev"
        }, function (f) {
          c = f.cursor.value;
        });
      }), 3);
    } else {
      return d.return(c);
    }
  });
}
function Rl(a) {
  var b;
  var c;
  return C(function (d) {
    if (d.i == 1) {
      return d.h(Nl(a), 2);
    } else if (d.i != 3) {
      b = d.j;
      c = undefined;
      return d.h(Sk(b, ["hotConfigStore"], {
        mode: "readwrite",
        U: true
      }, function (e) {
        return gl(e.objectStore("hotConfigStore").index("hotTimestampIndex"), {
          direction: "prev"
        }, function (f) {
          c = f.cursor.value;
        });
      }), 3);
    } else {
      return d.return(c);
    }
  });
}
;
function Sl() {
  $d.call(this);
  this.i = [];
  this.h = [];
  var a = F("yt.gcf.config.hotUpdateCallbacks");
  if (a) {
    this.i = [].concat(w(a));
    this.h = a;
  } else {
    this.h = [];
    G("yt.gcf.config.hotUpdateCallbacks", this.h);
  }
}
u(Sl, $d);
Sl.prototype.wa = function () {
  var a = v(this.i);
  var b = a.next();
  try {
    for (; !b.done; b = a.next()) {
      var c = this.h;
      var d = c.indexOf(b.value);
      if (d >= 0) {
        c.splice(d, 1);
      }
    }
  } finally {
    A(a, b);
  }
  this.i.length = 0;
  $d.prototype.wa.call(this);
};
function Tl() {
  this.h = 0;
  this.j = new Sl();
}
function Ul() {
  return F("yt.gcf.config.hotConfigGroup") ?? S("RAW_HOT_CONFIG_GROUP");
}
function Vl(a, b, c) {
  var d;
  var e;
  var f;
  return C(function (g) {
    switch (g.i) {
      case 1:
        if (!T("start_client_gcf")) {
          g.v(0);
          break;
        }
        if (c) {
          a.m = c;
          G("yt.gcf.config.hotConfigGroup", a.m || null);
        }
        a.i(b);
        d = yl();
        if (!d) {
          g.v(3);
          break;
        }
        if (c) {
          g.v(4);
          break;
        }
        return g.h(Rl(d), 5);
      case 5:
        e = g.j;
        c = (f = e) == null ? undefined : f.config;
      case 4:
        return g.h(Ol(c, b, d), 3);
      case 3:
        if (c) {
          var h = c;
          var k = v(a.j.h);
          var l = k.next();
          try {
            for (; !l.done; l = k.next()) {
              var m = l.value;
              m(h);
            }
          } finally {
            A(k, l);
          }
        }
        g.u();
    }
  });
}
function Wl(a, b, c) {
  var d;
  var e;
  var f;
  var g;
  return C(function (h) {
    if (h.i == 1) {
      if (!T("start_client_gcf")) {
        return h.v(0);
      }
      a.coldHashData = b;
      G("yt.gcf.config.coldHashData", a.coldHashData || null);
      if (d = yl()) {
        if (c) {
          return h.v(4);
        } else {
          return h.h(Ql(d), 5);
        }
      } else {
        return h.v(0);
      }
    }
    if (h.i != 4) {
      e = h.j;
      c = (f = e) == null ? undefined : f.config;
    }
    if (!c) {
      return h.v(0);
    }
    g = c.configData;
    return h.h(Pl(c, b, g, d), 0);
  });
}
Tl.prototype.i = function (a) {
  this.hotHashData = a;
  G("yt.gcf.config.hotHashData", this.hotHashData || null);
};
function Xl() {
  return "INNERTUBE_API_KEY" in ii && "INNERTUBE_API_VERSION" in ii;
}
function Yl() {
  return {
    innertubeApiKey: S("INNERTUBE_API_KEY"),
    innertubeApiVersion: S("INNERTUBE_API_VERSION"),
    Rb: S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
    Bc: S("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
    pd: S("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
    innertubeContextClientVersion: S("INNERTUBE_CONTEXT_CLIENT_VERSION"),
    Dc: S("INNERTUBE_CONTEXT_HL"),
    Cc: S("INNERTUBE_CONTEXT_GL"),
    qd: S("INNERTUBE_HOST_OVERRIDE") || "",
    rd: !!S("INNERTUBE_USE_THIRD_PARTY_AUTH", false),
    ke: !!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", false),
    appInstallData: S("SERIALIZED_CLIENT_CONFIG_DATA")
  };
}
function Zl(a) {
  var b = {
    client: {
      hl: a.Dc,
      gl: a.Cc,
      clientName: a.Bc,
      clientVersion: a.innertubeContextClientVersion,
      configInfo: a.Rb
    }
  };
  if (navigator.userAgent) {
    b.client.userAgent = String(navigator.userAgent);
  }
  var c = E.devicePixelRatio;
  if (c && c != 1) {
    b.client.screenDensityFloat = String(c);
  }
  c = S("EXPERIMENTS_TOKEN", "");
  if (c !== "") {
    b.client.experimentsToken = c;
  }
  c = Ii();
  if (c.length > 0) {
    b.request = {
      internalExperimentFlags: c
    };
  }
  $l(a, undefined, b);
  am(undefined, b);
  bm(undefined, b);
  cm(a, undefined, b);
  dm(undefined, b);
  if (T("start_client_gcf")) {
    em(undefined, b);
  }
  if (S("DELEGATED_SESSION_ID") && !T("pageid_as_header_web")) {
    b.user = {
      onBehalfOfUser: S("DELEGATED_SESSION_ID")
    };
  }
  if (!T("fill_delegate_context_in_gel_killswitch") && (a = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))) {
    b.user = na({}, b.user, {
      serializedDelegationContext: a
    });
  }
  a = S("INNERTUBE_CONTEXT");
  var d;
  if (T("enable_persistent_device_token") && (a == null ? 0 : (d = a.client) == null ? 0 : d.rolloutToken)) {
    var e;
    b.client.rolloutToken = a == null ? undefined : (e = a.client) == null ? undefined : e.rolloutToken;
  }
  d = Object;
  e = d.assign;
  a = b.client;
  c = {};
  var f = v(Object.entries(wi(S("DEVICE", ""))));
  var g = f.next();
  try {
    for (; !g.done; g = f.next()) {
      var h = v(g.value);
      var k = h.next().value;
      var l = h.next().value;
      var m = k;
      var n = l;
      if (m === "cbrand") {
        c.deviceMake = n;
      } else if (m === "cmodel") {
        c.deviceModel = n;
      } else if (m === "cbr") {
        c.browserName = n;
      } else if (m === "cbrver") {
        c.browserVersion = n;
      } else if (m === "cos") {
        c.osName = n;
      } else if (m === "cosver") {
        c.osVersion = n;
      } else if (m === "cplatform") {
        c.platform = n;
      }
    }
  } finally {
    A(f, g);
  }
  if (qj()) {
    c.osName = "IOS";
    c.platform = "TABLET";
    c.clientFormFactor = "LARGE_FORM_FACTOR";
  }
  b.client = e.call(d, a, c);
  if (T("web_attention_logging_enabled")) {
    b.client.windowWidthPoints = window.innerWidth;
    b.client.windowHeightPoints = window.innerHeight;
  }
  return b;
}
function fm(a) {
  var b = new Oh();
  var c = new rh();
  M(c, 1, a.Dc);
  M(c, 2, a.Cc);
  td(c, 16, a.pd);
  M(c, 17, a.innertubeContextClientVersion);
  if (a.Rb) {
    var d = a.Rb;
    var e = new oh();
    if (d.coldConfigData) {
      M(e, 1, d.coldConfigData);
    }
    if (d.appInstallData) {
      M(e, 6, d.appInstallData);
    }
    if (d.coldHashData) {
      M(e, 3, d.coldHashData);
    }
    if (d.hotHashData) {
      e.i(d.hotHashData);
    }
    kd(c, oh, 62, e);
  }
  if ((d = E.devicePixelRatio) && d != 1) {
    if (d != null && typeof d !== "number") {
      throw Error("Value of float/double field must be a number, found " + typeof d + ": " + d);
    }
    cd(c, 65, d);
  }
  d = S("EXPERIMENTS_TOKEN", "");
  if (d !== "") {
    M(c, 54, d);
  }
  d = Ii();
  if (d.length > 0) {
    e = new uh();
    for (var f = 0; f < d.length; f++) {
      var g = new sh();
      M(g, 1, d[f].key);
      ed(g, 2, th, Jc(d[f].value));
      ld(e, 15, sh, g);
    }
    kd(b, uh, 5, e);
  }
  $l(a, c);
  am(b);
  bm(c);
  cm(a, c);
  dm(c);
  if (T("start_client_gcf")) {
    em(c);
  }
  if (S("DELEGATED_SESSION_ID") && !T("pageid_as_header_web")) {
    a = new Nh();
    M(a, 3, S("DELEGATED_SESSION_ID"));
  }
  if (!T("fill_delegate_context_in_gel_killswitch") && (a = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))) {
    d = id(b, Nh, 3) || new Nh();
    a = M(d, 18, a);
    kd(b, Nh, 3, a);
  }
  a = v(Object.entries(wi(S("DEVICE", ""))));
  d = a.next();
  try {
    for (; !d.done; d = a.next()) {
      var h = v(d.value);
      var k = h.next().value;
      var l = h.next().value;
      e = k;
      f = l;
      if (e === "cbrand") {
        M(c, 12, f);
      } else if (e === "cmodel") {
        M(c, 13, f);
      } else if (e === "cbr") {
        M(c, 87, f);
      } else if (e === "cbrver") {
        M(c, 88, f);
      } else if (e === "cos") {
        M(c, 18, f);
      } else if (e === "cosver") {
        M(c, 19, f);
      } else if (e === "cplatform") {
        td(c, 42, rj(f));
      }
    }
  } finally {
    A(a, d);
  }
  if (qj()) {
    h = M(c, 18, "IOS");
    h = td(h, 42, 5);
    td(h, 46, 2);
  }
  if (T("web_attention_logging_enabled")) {
    cd(c, 55, Cc(window.innerWidth));
    cd(c, 56, Cc(window.innerHeight));
  }
  kd(b, rh, 1, c);
  return b;
}
function $l(a, b, c) {
  a = a.Bc;
  if (a === "WEB" || a === "MWEB" || a === 1 || a === 2) {
    if (b) {
      c = id(b, ph, 96) || new ph();
      var d = nj();
      d = Object.keys(Ph).indexOf(d);
      d = d === -1 ? null : d;
      if (d !== null) {
        td(c, 3, d);
      }
      kd(b, ph, 96, c);
    } else if (c) {
      c.client.mainAppWebInfo = (d = c.client.mainAppWebInfo) != null ? d : {};
      c.client.mainAppWebInfo.webDisplayMode = nj();
    }
  }
}
function am(a, b) {
  var c = F("yt.embedded_player.embed_url");
  if (c) {
    if (a) {
      b = id(a, vh, 7) || new vh();
      M(b, 4, c);
      kd(a, vh, 7, b);
    } else if (b) {
      b.thirdParty = {
        embedUrl: c
      };
    }
  }
}
function bm(a, b) {
  var c;
  if (T("web_log_memory_total_kbytes") && ((c = E.navigator) == null ? 0 : c.deviceMemory)) {
    var d;
    c = (d = E.navigator) == null ? undefined : d.deviceMemory;
    if (a) {
      cd(a, 95, Ic(c * 1000000));
    } else if (b) {
      b.client.memoryTotalKbytes = "" + c * 1000000;
    }
  }
}
function cm(a, b, c) {
  if (a.appInstallData) {
    if (b) {
      c = id(b, oh, 62) ?? new oh();
      M(c, 6, a.appInstallData);
      kd(b, oh, 62, c);
    } else if (c) {
      c.client.configInfo = c.client.configInfo || {};
      c.client.configInfo.appInstallData = a.appInstallData;
    }
  }
}
function dm(a, b) {
  a: {
    var c = wj();
    if (c) {
      var d = sj[c.type || "unknown"] || "CONN_UNKNOWN";
      c = sj[c.effectiveType || "unknown"] || "CONN_UNKNOWN";
      if (d === "CONN_CELLULAR_UNKNOWN" && c !== "CONN_UNKNOWN") {
        d = c;
      }
      if (d !== "CONN_UNKNOWN") {
        break a;
      }
      if (c !== "CONN_UNKNOWN") {
        d = c;
        break a;
      }
    }
    d = undefined;
  }
  if (d) {
    if (a) {
      td(a, 61, tj[d]);
    } else if (b) {
      b.client.connectionType = d;
    }
  }
  if (T("web_log_effective_connection_type")) {
    d = wj();
    d = d != null && d.effectiveType ? vj.hasOwnProperty(d.effectiveType) ? vj[d.effectiveType] : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN" : undefined;
    if (d) {
      if (a) {
        td(a, 94, uj[d]);
      } else if (b) {
        b.client.effectiveConnectionType = d;
      }
    }
  }
}
function gm(a, b, c) {
  c = c === undefined ? {} : c;
  var d = {};
  if (S("EOM_VISITOR_DATA")) {
    d = {
      "X-Goog-EOM-Visitor-Id": S("EOM_VISITOR_DATA")
    };
  } else {
    d = {
      "X-Goog-Visitor-Id": c.visitorData || S("VISITOR_DATA", "")
    };
  }
  if (b && b.includes("www.youtube-nocookie.com")) {
    return d;
  }
  b = c.de || S("AUTHORIZATION");
  if (!b) {
    if (a) {
      b = "Bearer " + F("gapi.auth.getToken")().ce;
    } else {
      oj.instance ||= new oj();
      a = {};
      c = [];
      if ("USER_SESSION_ID" in ii) {
        c.push({
          key: "u",
          value: S("USER_SESSION_ID")
        });
      }
      if (c = Yd(c)) {
        a.Authorization = c;
        c = undefined;
        if (c === undefined) {
          c = Number(S("SESSION_INDEX", 0));
          c = isNaN(c) ? 0 : c;
        }
        if (!T("voice_search_auth_header_removal")) {
          a["X-Goog-AuthUser"] = c.toString();
        }
        if (!("INNERTUBE_HOST_OVERRIDE" in ii)) {
          a["X-Origin"] = window.location.origin;
        }
        if ("DELEGATED_SESSION_ID" in ii) {
          a["X-Goog-PageId"] = S("DELEGATED_SESSION_ID");
        }
      }
      if (!T("pageid_as_header_web")) {
        delete a["X-Goog-PageId"];
      }
      d = na({}, d, a);
    }
  }
  if (b) {
    d.Authorization = b;
  }
  return d;
}
function em(a, b) {
  if (!Tl.instance) {
    var c = new Tl();
    Tl.instance = c;
  }
  c = Tl.instance;
  var d = V() - c.h;
  if (c.h !== 0 && d < Hi("send_config_hash_timer")) {
    c = undefined;
  } else {
    d = F("yt.gcf.config.coldConfigData");
    var e = F("yt.gcf.config.hotHashData");
    var f = F("yt.gcf.config.coldHashData");
    if (d && e && f) {
      c.h = V();
    }
    c = {
      coldConfigData: d,
      hotHashData: e,
      coldHashData: f
    };
  }
  if (e = c) {
    d = e.coldConfigData;
    c = e.coldHashData;
    e = e.hotHashData;
    if (a) {
      var g;
      b = (g = id(a, oh, 62)) != null ? g : new oh();
      g = M(b, 1, d);
      M(g, 3, c).i(e);
      kd(a, oh, 62, b);
    } else if (b) {
      b.client.configInfo = b.client.configInfo || {};
      if (d) {
        b.client.configInfo.coldConfigData = d;
      }
      if (c) {
        b.client.configInfo.coldHashData = c;
      }
      if (e) {
        b.client.configInfo.hotHashData = e;
      }
    }
  }
}
;
var hm = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
var vm = hm ? function (a) {
  return hm.encode(a);
} : function (a) {
  var b = [];
  var c = 0;
  for (var d = 0; d < a.length; d++) {
    var e = a.charCodeAt(d);
    if (e < 128) {
      b[c++] = e;
    } else {
      if (e < 2048) {
        b[c++] = e >> 6 | 192;
      } else {
        if ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320) {
          e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023);
          b[c++] = e >> 18 | 240;
          b[c++] = e >> 12 & 63 | 128;
        } else {
          b[c++] = e >> 12 | 224;
        }
        b[c++] = e >> 6 & 63 | 128;
      }
      b[c++] = e & 63 | 128;
    }
  }
  a = new Uint8Array(b.length);
  for (c = 0; c < a.length; c++) {
    a[c] = b[c];
  }
  return a;
};
function wm(a, b) {
  this.version = a;
  this.args = b;
}
;
function Lm() {
  this.topic = "aft-recorded";
}
Lm.prototype.toString = function () {
  return this.topic;
};
var Mm = F("ytPubsub2Pubsub2Instance") || new O();
O.prototype.subscribe = O.prototype.subscribe;
O.prototype.unsubscribeByKey = O.prototype.unsubscribeByKey;
O.prototype.publish = O.prototype.publish;
O.prototype.clear = O.prototype.clear;
G("ytPubsub2Pubsub2Instance", Mm);
G("ytPubsub2Pubsub2SubscribedKeys", F("ytPubsub2Pubsub2SubscribedKeys") || {});
G("ytPubsub2Pubsub2TopicToKeys", F("ytPubsub2Pubsub2TopicToKeys") || {});
G("ytPubsub2Pubsub2SkipSubKey", null);
function Nm(a, b) {
  var c = F("ytPubsub2Pubsub2Instance");
  if (c) {
    c.publish.call(c, a.toString(), a, b);
  }
}
;
function Om(a, b, c) {
  c = c === undefined ? {
    sampleRate: 0.1
  } : c;
  if (Math.random() < Math.min(0.02, c.sampleRate / 100)) {
    Nm("meta_logging_csi_event", {
      timerName: a,
      timelineData: b
    });
  }
}
;
var Pm = Hi("max_body_size_to_compress", 500000);
var Qm = Hi("min_body_size_to_compress", 500);
var Rm = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
var Sm = 0;
function Tm(a, b, c, d) {
  var e = {
    startTime: V(),
    ticks: {},
    infos: {}
  };
  try {
    if (T("body_size_via_text_encoder") && Rm) {
      var f = Rm.encode(b).length;
    } else {
      try {
        f = new Blob(b.split("")).size;
      } catch (m) {
        pi(m);
        f = null;
      }
    }
    if (f == null || !(f > Pm) && !(f < Qm)) {
      var g = vm(b);
      b = undefined;
      b = {};
      b.md = true;
      var h = new jh(b);
      h.push(g, true);
      if (h.err) {
        throw h.msg || lg[h.err];
      }
      var k = h.result;
      var l = V();
      e.ticks.gelc = l;
      Sm++;
      if (!T("gel_compression_csi_killswitch") && T("log_gel_compression_latency")) {
        Om("gel_compression", e, {
          sampleRate: 0.1
        });
      }
      c.headers ||= {};
      c.headers["Content-Encoding"] = "gzip";
      c.postBody = k;
      c.postParams = undefined;
    }
    d(a, c);
  } catch (m) {
    pi(m);
    d(a, c);
  }
}
;
function Um(a) {
  a = Object.assign({}, a);
  delete a.Authorization;
  var b = Yd();
  if (b) {
    var c = new Af();
    c.update(S("INNERTUBE_API_KEY"));
    c.update(b);
    b = c.digest();
    c = 3;
    if (c === undefined) {
      c = 0;
    }
    if (!Cb) {
      Cb = {};
      var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
      var e = ["+/=", "+/", "-_=", "-_.", "-_"];
      for (var f = 0; f < 5; f++) {
        var g = d.concat(e[f].split(""));
        Bb[f] = g;
        for (var h = 0; h < g.length; h++) {
          var k = g[h];
          if (Cb[k] === undefined) {
            Cb[k] = h;
          }
        }
      }
    }
    c = Bb[c];
    d = Array(Math.floor(b.length / 3));
    e = c[64] || "";
    for (f = g = 0; g < b.length - 2; g += 3) {
      var l = b[g];
      var m = b[g + 1];
      k = b[g + 2];
      h = c[l >> 2];
      l = c[(l & 3) << 4 | m >> 4];
      m = c[(m & 15) << 2 | k >> 6];
      k = c[k & 63];
      d[f++] = "" + h + l + m + k;
    }
    h = 0;
    k = e;
    switch (b.length - g) {
      case 2:
        h = b[g + 1];
        k = c[(h & 15) << 2] || e;
      case 1:
        b = b[g];
        d[f] = "" + c[b >> 2] + c[(b & 3) << 4 | h >> 4] + k + e;
    }
    a.hash = d.join("");
  }
  return a;
}
;
var Vm;
function Wm() {
  Vm ||= new hk("yt.innertube");
  return Vm;
}
function Xm(a, b, c, d) {
  if (d) {
    return null;
  }
  d = Wm().get("nextId", true) || 1;
  var e = Wm().get("requests", true) || {};
  e[d] = {
    method: a,
    request: b,
    authState: Um(c),
    requestTime: Math.round(V())
  };
  Wm().set("nextId", d + 1, 86400, true);
  Wm().set("requests", e, 86400, true);
  return d;
}
function Ym(a) {
  var b = Wm().get("requests", true) || {};
  delete b[a];
  Wm().set("requests", b, 86400, true);
}
function Zm(a) {
  var b = Wm().get("requests", true);
  if (b) {
    for (var c in b) {
      var d = b[c];
      if (!(Math.round(V()) - d.requestTime < 60000)) {
        var e = d.authState;
        var f = Um(gm(false));
        a: {
          var g = undefined;
          var h = undefined;
          for (h in e) {
            if (!(h in f) || e[h] !== f[h]) {
              e = false;
              break a;
            }
          }
          for (g in f) {
            if (!(g in e)) {
              e = false;
              break a;
            }
          }
          e = true;
        }
        if (e) {
          e = d.request;
          if ("requestTimeMs" in e) {
            e.requestTimeMs = Math.round(V());
          }
          $m(a, d.method, e, {});
        }
        delete b[c];
      }
    }
    Wm().set("requests", b, 86400, true);
  }
}
;
function an(a) {
  this.xb = this.h = false;
  this.potentialEsfErrorCounter = this.i = 0;
  this.handleError = function () {};
  this.Za = function () {};
  this.now = Date.now;
  this.ob = false;
  this.Pc = a.Pc ?? 100;
  this.Mc = a.Mc ?? 1;
  this.Kc = a.Kc ?? 2592000000;
  this.Ic = a.Ic ?? 120000;
  this.Lc = a.Lc ?? 5000;
  this.K = a.K ?? undefined;
  this.Cb = !!a.Cb;
  this.Ab = a.Ab ?? 0.1;
  this.Ib = a.Ib ?? 10;
  if (a.handleError) {
    this.handleError = a.handleError;
  }
  if (a.Za) {
    this.Za = a.Za;
  }
  if (a.ob) {
    this.ob = a.ob;
  }
  if (a.xb) {
    this.xb = a.xb;
  }
  this.L = a.L;
  this.ma = a.ma;
  this.R = a.R;
  this.V = a.V;
  this.Ca = a.Ca;
  this.fc = a.fc;
  this.Zb = a.Zb;
  if (bn(this) && (!this.L || this.L("networkless_logging"))) {
    cn(this);
  }
}
function cn(a) {
  if (bn(a) && !a.ob) {
    a.h = true;
    if (a.Cb && Math.random() <= a.Ab) {
      a.R.Zc(a.K);
    }
    dn(a);
    if (a.V.ia()) {
      a.tb();
    }
    a.V.Oa(a.fc, a.tb.bind(a));
    a.V.Oa(a.Zb, a.oc.bind(a));
  }
}
r = an.prototype;
r.writeThenSend = function (a, b) {
  var c = this;
  b = b === undefined ? {} : b;
  if (bn(this) && this.h) {
    var d = {
      url: a,
      options: b,
      timestamp: this.now(),
      status: "NEW",
      sendCount: 0
    };
    this.R.set(d, this.K).then(function (e) {
      d.id = e;
      if (c.V.ia()) {
        en(c, d);
      }
    }).catch(function (e) {
      en(c, d);
      fn(c, e);
    });
  } else {
    this.Ca(a, b);
  }
};
r.sendThenWrite = function (a, b, c) {
  var d = this;
  b = b === undefined ? {} : b;
  if (bn(this) && this.h) {
    var e = {
      url: a,
      options: b,
      timestamp: this.now(),
      status: "NEW",
      sendCount: 0
    };
    if (this.L && this.L("nwl_skip_retry")) {
      e.skipRetry = c;
    }
    if (this.V.ia() || this.L && this.L("nwl_aggressive_send_then_write") && !e.skipRetry) {
      if (!e.skipRetry) {
        var f = b.onError ? b.onError : function () {};
        b.onError = function (g, h) {
          return C(function (k) {
            if (k.i == 1) {
              return k.h(d.R.set(e, d.K).catch(function (l) {
                fn(d, l);
              }), 2);
            }
            f(g, h);
            k.u();
          });
        };
      }
      this.Ca(a, b, e.skipRetry);
    } else {
      this.R.set(e, this.K).catch(function (g) {
        d.Ca(a, b, e.skipRetry);
        fn(d, g);
      });
    }
  } else {
    this.Ca(a, b, this.L && this.L("nwl_skip_retry") && c);
  }
};
r.sendAndWrite = function (a, b) {
  var c = this;
  b = b === undefined ? {} : b;
  if (bn(this) && this.h) {
    var d = {
      url: a,
      options: b,
      timestamp: this.now(),
      status: "NEW",
      sendCount: 0
    };
    var e = false;
    var f = b.onSuccess ? b.onSuccess : function () {};
    d.options.onSuccess = function (g, h) {
      if (d.id !== undefined) {
        c.R.Ya(d.id, c.K);
      } else {
        e = true;
      }
      if (c.V.Qa && c.L && c.L("vss_network_hint")) {
        c.V.Qa(true);
      }
      f(g, h);
    };
    this.Ca(d.url, d.options, undefined, true);
    this.R.set(d, this.K).then(function (g) {
      d.id = g;
      if (e) {
        c.R.Ya(d.id, c.K);
      }
    }).catch(function (g) {
      fn(c, g);
    });
  } else {
    this.Ca(a, b, undefined, true);
  }
};
r.tb = function () {
  var a = this;
  if (!bn(this)) {
    throw Error("IndexedDB is not supported: throttleSend");
  }
  this.i ||= this.ma.sa(function () {
    var b;
    return C(function (c) {
      if (c.i == 1) {
        return c.h(a.R.yc("NEW", a.K), 2);
      }
      if (c.i != 3) {
        b = c.j;
        if (b) {
          return c.h(en(a, b), 3);
        } else {
          a.oc();
          return c.return();
        }
      }
      if (a.i) {
        a.i = 0;
        a.tb();
      }
      c.u();
    });
  }, this.Pc);
};
r.oc = function () {
  this.ma.ha(this.i);
  this.i = 0;
};
function en(a, b) {
  var c;
  return C(function (d) {
    switch (d.i) {
      case 1:
        if (!bn(a)) {
          throw Error("IndexedDB is not supported: immediateSend");
        }
        if (b.id === undefined) {
          d.v(2);
          break;
        }
        return d.h(a.R.td(b.id, a.K), 3);
      case 3:
        if (!(c = d.j)) {
          a.Za(Error("The request cannot be found in the database."));
        }
      case 2:
        if (gn(a, b, a.Kc)) {
          d.v(4);
          break;
        }
        a.Za(Error("Networkless Logging: Stored logs request expired age limit"));
        if (b.id === undefined) {
          d.v(5);
          break;
        }
        return d.h(a.R.Ya(b.id, a.K), 5);
      case 5:
        return d.return();
      case 4:
        if (!b.skipRetry) {
          b = hn(a, b);
        }
        if (!b) {
          d.v(0);
          break;
        }
        if (!b.skipRetry || b.id === undefined) {
          d.v(8);
          break;
        }
        return d.h(a.R.Ya(b.id, a.K), 8);
      case 8:
        a.Ca(b.url, b.options, !!b.skipRetry);
        d.u();
    }
  });
}
function hn(a, b) {
  if (!bn(a)) {
    throw Error("IndexedDB is not supported: updateRequestHandlers");
  }
  var c = b.options.onError ? b.options.onError : function () {};
  b.options.onError = function (e, f) {
    var g;
    var h;
    var k;
    var l;
    return C(function (m) {
      switch (m.i) {
        case 1:
          g = jn(f);
          if ((h = kn(f)) && a.L && a.L("web_enable_error_204")) {
            a.handleError(Error("Request failed due to compression"), b.url, f);
          }
          if ((!a.L || !a.L("nwl_consider_error_code") || !g) && (!a.L || !!a.L("nwl_consider_error_code") || !(a.potentialEsfErrorCounter <= a.Ib))) {
            m.v(2);
            break;
          }
          if (!a.V.Kb) {
            m.v(3);
            break;
          }
          return m.h(a.V.Kb(), 3);
        case 3:
          if (a.V.ia()) {
            m.v(2);
            break;
          }
          c(e, f);
          if (!a.L || !a.L("nwl_consider_error_code") || ((k = b) == null ? undefined : k.id) === undefined) {
            m.v(6);
            break;
          }
          return m.h(a.R.jc(b.id, a.K, false), 6);
        case 6:
          return m.return();
        case 2:
          if (a.L && a.L("nwl_consider_error_code") && !g && a.potentialEsfErrorCounter > a.Ib) {
            return m.return();
          }
          a.potentialEsfErrorCounter++;
          if (((l = b) == null ? undefined : l.id) === undefined) {
            m.v(8);
            break;
          }
          if (b.sendCount < a.Mc) {
            return m.h(a.R.jc(b.id, a.K, true, h ? false : undefined), 12);
          } else {
            return m.h(a.R.Ya(b.id, a.K), 8);
          }
        case 12:
          a.ma.sa(function () {
            if (a.V.ia()) {
              a.tb();
            }
          }, a.Lc);
        case 8:
          c(e, f);
          m.u();
      }
    });
  };
  var d = b.options.onSuccess ? b.options.onSuccess : function () {};
  b.options.onSuccess = function (e, f) {
    var g;
    return C(function (h) {
      if (h.i == 1) {
        if (((g = b) == null ? undefined : g.id) === undefined) {
          return h.v(2);
        } else {
          return h.h(a.R.Ya(b.id, a.K), 2);
        }
      }
      if (a.V.Qa && a.L && a.L("vss_network_hint")) {
        a.V.Qa(true);
      }
      d(e, f);
      h.u();
    });
  };
  return b;
}
function gn(a, b, c) {
  b = b.timestamp;
  return !(a.now() - b >= c);
}
function dn(a) {
  if (!bn(a)) {
    throw Error("IndexedDB is not supported: retryQueuedRequests");
  }
  a.R.yc("QUEUED", a.K).then(function (b) {
    if (b && !gn(a, b, a.Ic)) {
      a.ma.sa(function () {
        return C(function (c) {
          if (c.i == 1) {
            if (b.id === undefined) {
              return c.v(2);
            } else {
              return c.h(a.R.jc(b.id, a.K), 2);
            }
          }
          dn(a);
          c.u();
        });
      });
    } else if (a.V.ia()) {
      a.tb();
    }
  });
}
function fn(a, b) {
  if (a.Sc && !a.V.ia()) {
    a.Sc(b);
  } else {
    a.handleError(b);
  }
}
function bn(a) {
  return !!a.K || a.xb;
}
function jn(a) {
  var b;
  a = a == null ? undefined : (b = a.error) == null ? undefined : b.code;
  return !a || !(a >= 400) || !(a <= 599);
}
function kn(a) {
  var b;
  a = a == null ? undefined : (b = a.error) == null ? undefined : b.code;
  return a === 400 || a === 415;
}
;
var ln;
function mn() {
  if (ln) {
    return ln();
  }
  var a = {};
  ln = Kl("LogsDatabaseV2", {
    hb: (a.LogsRequestsStore = {
      lb: 2
    }, a),
    shared: false,
    upgrade: function (b, c, d) {
      if (c(2)) {
        Tk(b, "LogsRequestsStore", {
          keyPath: "id",
          autoIncrement: true
        });
      }
      c(3);
      if (c(5)) {
        d = d.objectStore("LogsRequestsStore");
        if (d.h.indexNames.contains("newRequest")) {
          d.h.deleteIndex("newRequest");
        }
        $k(d, "newRequestV2", ["status", "interface", "timestamp"]);
      }
      if (c(7) && b.h.objectStoreNames.contains("sapisid")) {
        b.h.deleteObjectStore("sapisid");
      }
      if (c(9) && b.h.objectStoreNames.contains("SWHealthLog")) {
        b.h.deleteObjectStore("SWHealthLog");
      }
    },
    version: 9
  });
  return ln();
}
;
function nn(a) {
  return ol(mn(), a);
}
function on(a, b) {
  var c;
  var d;
  var e;
  var f;
  return C(function (g) {
    if (g.i == 1) {
      c = {
        startTime: V(),
        infos: {
          transactionType: "YT_IDB_TRANSACTION_TYPE_WRITE"
        },
        ticks: {}
      };
      return g.h(nn(b), 2);
    }
    if (g.i != 3) {
      d = g.j;
      e = na({}, a, {
        options: JSON.parse(JSON.stringify(a.options)),
        interface: S("INNERTUBE_CONTEXT_CLIENT_NAME", 0)
      });
      return g.h(Vk(d, "LogsRequestsStore", e), 3);
    }
    f = g.j;
    c.ticks.tc = V();
    pn(c);
    return g.return(f);
  });
}
function qn(a, b) {
  var c;
  var d;
  var e;
  var f;
  var g;
  var h;
  var k;
  var l;
  var m;
  return C(function (n) {
    if (n.i == 1) {
      c = {
        startTime: V(),
        infos: {
          transactionType: "YT_IDB_TRANSACTION_TYPE_READ"
        },
        ticks: {}
      };
      return n.h(nn(b), 2);
    }
    if (n.i != 3) {
      d = n.j;
      e = S("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
      f = [a, e, 0];
      g = [a, e, V()];
      h = IDBKeyRange.bound(f, g);
      k = "prev";
      if (T("use_fifo_for_networkless")) {
        k = "next";
      }
      l = undefined;
      m = a === "NEW" ? "readwrite" : "readonly";
      if (T("use_readonly_for_get_most_recent_by_status_killswitch")) {
        m = "readwrite";
      }
      return n.h(Sk(d, ["LogsRequestsStore"], {
        mode: m,
        U: true
      }, function (q) {
        return gl(q.objectStore("LogsRequestsStore").index("newRequestV2"), {
          query: h,
          direction: k
        }, function (p) {
          if (p.cursor.value) {
            l = p.cursor.value;
            if (a === "NEW") {
              l.status = "QUEUED";
              p.update(l);
            }
          }
        });
      }), 3);
    }
    c.ticks.tc = V();
    pn(c);
    return n.return(l);
  });
}
function rn(a, b) {
  var c;
  return C(function (d) {
    if (d.i == 1) {
      return d.h(nn(b), 2);
    }
    c = d.j;
    return d.return(Sk(c, ["LogsRequestsStore"], {
      mode: "readwrite",
      U: true
    }, function (e) {
      var f = e.objectStore("LogsRequestsStore");
      return f.get(a).then(function (g) {
        if (g) {
          g.status = "QUEUED";
          return Nk(f.h.put(g, undefined)).then(function () {
            return g;
          });
        }
      });
    }));
  });
}
function sn(a, b, c, d) {
  c = c === undefined ? true : c;
  var e;
  return C(function (f) {
    if (f.i == 1) {
      return f.h(nn(b), 2);
    }
    e = f.j;
    return f.return(Sk(e, ["LogsRequestsStore"], {
      mode: "readwrite",
      U: true
    }, function (g) {
      var h = g.objectStore("LogsRequestsStore");
      return h.get(a).then(function (k) {
        if (k) {
          k.status = "NEW";
          if (c) {
            k.sendCount += 1;
          }
          if (d !== undefined) {
            k.options.compress = d;
          }
          return Nk(h.h.put(k, undefined)).then(function () {
            return k;
          });
        } else {
          return Gk.resolve(undefined);
        }
      });
    }));
  });
}
function tn(a, b) {
  var c;
  return C(function (d) {
    if (d.i == 1) {
      return d.h(nn(b), 2);
    }
    c = d.j;
    return d.return(c.delete("LogsRequestsStore", a));
  });
}
function un(a) {
  var b;
  var c;
  return C(function (d) {
    if (d.i == 1) {
      return d.h(nn(a), 2);
    }
    b = d.j;
    c = V() - 2592000000;
    return d.h(Sk(b, ["LogsRequestsStore"], {
      mode: "readwrite",
      U: true
    }, function (e) {
      return bl(e.objectStore("LogsRequestsStore"), {}, function (f) {
        if (f.cursor.value.timestamp <= c) {
          return f.delete().then(function () {
            return cl(f);
          });
        }
      });
    }), 0);
  });
}
function vn() {
  C(function (a) {
    return a.h(Gl(), 0);
  });
}
function pn(a) {
  if (!T("nwl_csi_killswitch")) {
    Om("networkless_performance", a, {
      sampleRate: 1
    });
  }
}
;
var wn = {
  accountStateChangeSignedIn: 23,
  accountStateChangeSignedOut: 24,
  delayedEventMetricCaptured: 11,
  latencyActionBaselined: 6,
  latencyActionInfo: 7,
  latencyActionTicked: 5,
  offlineTransferStatusChanged: 2,
  offlineImageDownload: 335,
  playbackStartStateChanged: 9,
  systemHealthCaptured: 3,
  mangoOnboardingCompleted: 10,
  mangoPushNotificationReceived: 230,
  mangoUnforkDbMigrationError: 121,
  mangoUnforkDbMigrationSummary: 122,
  mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
  mangoUnforkDbMigrationPhoneMetadata: 134,
  mangoUnforkDbMigrationPhoneStorage: 135,
  mangoUnforkDbMigrationStep: 142,
  mangoAsyncApiMigrationEvent: 223,
  mangoDownloadVideoResult: 224,
  mangoHomepageVideoCount: 279,
  mangoHomeV3State: 295,
  mangoImageClientCacheHitEvent: 273,
  sdCardStatusChanged: 98,
  framesDropped: 12,
  thumbnailHovered: 13,
  deviceRetentionInfoCaptured: 14,
  thumbnailLoaded: 15,
  backToAppEvent: 318,
  streamingStatsCaptured: 17,
  offlineVideoShared: 19,
  appCrashed: 20,
  youThere: 21,
  offlineStateSnapshot: 22,
  mdxSessionStarted: 25,
  mdxSessionConnected: 26,
  mdxSessionDisconnected: 27,
  bedrockResourceConsumptionSnapshot: 28,
  nextGenWatchWatchSwiped: 29,
  kidsAccountsSnapshot: 30,
  zeroStepChannelCreated: 31,
  tvhtml5SearchCompleted: 32,
  offlineSharePairing: 34,
  offlineShareUnlock: 35,
  mdxRouteDistributionSnapshot: 36,
  bedrockRepetitiveActionTimed: 37,
  unpluggedDegradationInfo: 229,
  uploadMp4HeaderMoved: 38,
  uploadVideoTranscoded: 39,
  uploadProcessorStarted: 46,
  uploadProcessorEnded: 47,
  uploadProcessorReady: 94,
  uploadProcessorRequirementPending: 95,
  uploadProcessorInterrupted: 96,
  uploadFrontendEvent: 241,
  assetPackDownloadStarted: 41,
  assetPackDownloaded: 42,
  assetPackApplied: 43,
  assetPackDeleted: 44,
  appInstallAttributionEvent: 459,
  playbackSessionStopped: 45,
  adBlockerMessagingShown: 48,
  distributionChannelCaptured: 49,
  dataPlanCpidRequested: 51,
  detailedNetworkTypeCaptured: 52,
  sendStateUpdated: 53,
  receiveStateUpdated: 54,
  sendDebugStateUpdated: 55,
  receiveDebugStateUpdated: 56,
  kidsErrored: 57,
  mdxMsnSessionStatsFinished: 58,
  appSettingsCaptured: 59,
  mdxWebSocketServerHttpError: 60,
  mdxWebSocketServer: 61,
  startupCrashesDetected: 62,
  coldStartInfo: 435,
  offlinePlaybackStarted: 63,
  liveChatMessageSent: 225,
  liveChatUserPresent: 434,
  liveChatBeingModerated: 457,
  liveChatGiftButtonImpressed: 558,
  liveCreationCameraUpdated: 64,
  liveCreationEncodingCaptured: 65,
  liveCreationError: 66,
  liveCreationHealthUpdated: 67,
  liveCreationVideoEffectsCaptured: 68,
  liveCreationStageOccured: 75,
  offlineSystemFailure: 546,
  liveCreationBroadcastScheduled: 123,
  liveCreationArchiveReplacement: 149,
  liveCreationCostreamingConnection: 421,
  liveCreationPlayablesMetrics: 533,
  liveCreationStreamWebrtcStats: 288,
  liveCreationWebrtcError: 526,
  mdxSessionRecoveryStarted: 69,
  mdxSessionRecoveryCompleted: 70,
  mdxSessionRecoveryStopped: 71,
  visualElementShown: 72,
  visualElementHidden: 73,
  visualElementGestured: 78,
  visualElementStateChanged: 208,
  screenCreated: 156,
  playbackAssociated: 202,
  visualElementAttached: 215,
  playbackContextEvent: 214,
  cloudCastingPlaybackStarted: 74,
  webPlayerApiCalled: 76,
  tvhtml5AccountDialogOpened: 79,
  foregroundHeartbeat: 80,
  foregroundHeartbeatScreenAssociated: 111,
  kidsOfflineSnapshot: 81,
  mdxEncryptionSessionStatsFinished: 82,
  playerRequestCompleted: 83,
  liteSchedulerStatistics: 84,
  mdxSignIn: 85,
  spacecastMetadataLookupRequested: 86,
  spacecastBatchLookupRequested: 87,
  spacecastSummaryRequested: 88,
  spacecastPlayback: 89,
  spacecastDiscovery: 90,
  tvhtml5LaunchUrlComponentChanged: 91,
  mdxBackgroundPlaybackRequestCompleted: 92,
  mdxBrokenAdditionalDataDeviceDetected: 93,
  tvhtml5LocalStorage: 97,
  tvhtml5DeviceStorageStatus: 147,
  autoCaptionsAvailable: 99,
  playbackScrubbingEvent: 339,
  flexyState: 100,
  interfaceOrientationCaptured: 101,
  mainAppBrowseFragmentCache: 102,
  offlineCacheVerificationFailure: 103,
  offlinePlaybackExceptionDigest: 217,
  vrCopresenceStats: 104,
  vrCopresenceSyncStats: 130,
  vrCopresenceCommsStats: 137,
  vrCopresencePartyStats: 153,
  vrCopresenceEmojiStats: 213,
  vrCopresenceEvent: 141,
  vrCopresenceFlowTransitEvent: 160,
  vrCowatchPartyEvent: 492,
  vrCowatchUserStartOrJoinEvent: 504,
  vrPlaybackEvent: 345,
  kidsAgeGateTracking: 105,
  offlineDelayAllowedTracking: 106,
  mainAppAutoOfflineState: 107,
  videoAsThumbnailDownload: 108,
  videoAsThumbnailPlayback: 109,
  liteShowMore: 110,
  renderingError: 118,
  kidsProfilePinGateTracking: 119,
  abrTrajectory: 124,
  scrollEvent: 125,
  streamzIncremented: 126,
  kidsProfileSwitcherTracking: 127,
  kidsProfileCreationTracking: 129,
  buyFlowStarted: 136,
  integrationAttributionEvent: 556,
  mbsConnectionInitiated: 138,
  mbsPlaybackInitiated: 139,
  mbsLoadChildren: 140,
  liteProfileFetcher: 144,
  mdxRemoteTransaction: 146,
  reelPlaybackError: 148,
  reachabilityDetectionEvent: 150,
  mobilePlaybackEvent: 151,
  courtsidePlayerStateChanged: 152,
  musicPersistentCacheChecked: 154,
  musicPersistentCacheCleared: 155,
  playbackInterrupted: 157,
  playbackInterruptionResolved: 158,
  fixFopFlow: 159,
  anrDetection: 161,
  backstagePostCreationFlowEnded: 162,
  clientError: 163,
  gamingAccountLinkStatusChanged: 164,
  liteHousewarming: 165,
  buyFlowEvent: 167,
  kidsParentalGateTracking: 168,
  kidsSignedOutSettingsStatus: 437,
  kidsSignedOutPauseHistoryFixStatus: 438,
  tvhtml5WatchdogViolation: 444,
  ypcUpgradeFlow: 169,
  yongleStudy: 170,
  ypcUpdateFlowStarted: 171,
  ypcUpdateFlowCancelled: 172,
  ypcUpdateFlowSucceeded: 173,
  ypcUpdateFlowFailed: 174,
  liteGrowthkitPromo: 175,
  paymentFlowStarted: 341,
  transactionFlowShowPaymentDialog: 405,
  transactionFlowStarted: 176,
  transactionFlowSecondaryDeviceStarted: 222,
  transactionFlowSecondaryDeviceSignedOutStarted: 383,
  transactionFlowCancelled: 177,
  transactionFlowPaymentCallBackReceived: 387,
  transactionFlowPaymentSubmitted: 460,
  transactionFlowPaymentSucceeded: 329,
  transactionFlowSucceeded: 178,
  transactionFlowFailed: 179,
  transactionFlowPlayBillingConnectionStartEvent: 428,
  transactionFlowSecondaryDeviceSuccess: 458,
  transactionFlowErrorEvent: 411,
  liteVideoQualityChanged: 180,
  watchBreakEnablementSettingEvent: 181,
  watchBreakFrequencySettingEvent: 182,
  videoEffectsCameraPerformanceMetrics: 183,
  adNotify: 184,
  startupTelemetry: 185,
  playbackOfflineFallbackUsed: 186,
  outOfMemory: 187,
  ypcPauseFlowStarted: 188,
  ypcPauseFlowCancelled: 189,
  ypcPauseFlowSucceeded: 190,
  ypcPauseFlowFailed: 191,
  uploadFileSelected: 192,
  ypcResumeFlowStarted: 193,
  ypcResumeFlowCancelled: 194,
  ypcResumeFlowSucceeded: 195,
  ypcResumeFlowFailed: 196,
  adsClientStateChange: 197,
  ypcCancelFlowStarted: 198,
  ypcCancelFlowCancelled: 199,
  ypcCancelFlowSucceeded: 200,
  ypcCancelFlowFailed: 201,
  ypcCancelFlowGoToPaymentProcessor: 402,
  ypcDeactivateFlowStarted: 320,
  ypcRedeemFlowStarted: 203,
  ypcRedeemFlowCancelled: 204,
  ypcRedeemFlowSucceeded: 205,
  ypcRedeemFlowFailed: 206,
  ypcFamilyCreateFlowStarted: 258,
  ypcFamilyCreateFlowCancelled: 259,
  ypcFamilyCreateFlowSucceeded: 260,
  ypcFamilyCreateFlowFailed: 261,
  ypcFamilyManageFlowStarted: 262,
  ypcFamilyManageFlowCancelled: 263,
  ypcFamilyManageFlowSucceeded: 264,
  ypcFamilyManageFlowFailed: 265,
  restoreContextEvent: 207,
  embedsAdEvent: 327,
  autoplayTriggered: 209,
  clientDataErrorEvent: 210,
  experimentalVssValidation: 211,
  tvhtml5TriggeredEvent: 212,
  tvhtml5FrameworksFieldTrialResult: 216,
  tvhtml5FrameworksFieldTrialStart: 220,
  musicOfflinePreferences: 218,
  watchTimeSegment: 219,
  appWidthLayoutError: 221,
  accountRegistryChange: 226,
  userMentionAutoCompleteBoxEvent: 227,
  downloadRecommendationEnablementSettingEvent: 228,
  musicPlaybackContentModeChangeEvent: 231,
  offlineDbOpenCompleted: 232,
  kidsFlowEvent: 233,
  kidsFlowCorpusSelectedEvent: 234,
  videoEffectsEvent: 235,
  unpluggedOpsEogAnalyticsEvent: 236,
  playbackAudioRouteEvent: 237,
  interactionLoggingDebugModeError: 238,
  offlineYtbRefreshed: 239,
  kidsFlowError: 240,
  musicAutoplayOnLaunchAttempted: 242,
  deviceContextActivityEvent: 243,
  deviceContextEvent: 244,
  templateResolutionException: 245,
  musicSideloadedPlaylistServiceCalled: 246,
  embedsStorageAccessNotChecked: 247,
  embedsHasStorageAccessResult: 248,
  embedsItpPlayedOnReload: 249,
  embedsRequestStorageAccessResult: 250,
  embedsShouldRequestStorageAccessResult: 251,
  embedsRequestStorageAccessState: 256,
  embedsRequestStorageAccessFailedState: 257,
  embedsItpWatchLaterResult: 266,
  searchSuggestDecodingPayloadFailure: 252,
  siriShortcutActivated: 253,
  tvhtml5KeyboardPerformance: 254,
  latencyActionSpan: 255,
  elementsLog: 267,
  ytbFileOpened: 268,
  tfliteModelError: 269,
  apiTest: 270,
  yongleUsbSetup: 271,
  touStrikeInterstitialEvent: 272,
  liteStreamToSave: 274,
  appBundleClientEvent: 275,
  ytbFileCreationFailed: 276,
  adNotifyFailure: 278,
  ytbTransferFailed: 280,
  blockingRequestFailed: 281,
  liteAccountSelector: 282,
  liteAccountUiCallbacks: 283,
  dummyPayload: 284,
  browseResponseValidationEvent: 285,
  entitiesError: 286,
  musicIosBackgroundFetch: 287,
  mdxNotificationEvent: 289,
  layersValidationError: 290,
  musicPwaInstalled: 291,
  liteAccountCleanup: 292,
  html5PlayerHealthEvent: 293,
  watchRestoreAttempt: 294,
  liteAccountSignIn: 296,
  notaireEvent: 298,
  kidsVoiceSearchEvent: 299,
  adNotifyFilled: 300,
  delayedEventDropped: 301,
  analyticsSearchEvent: 302,
  systemDarkThemeOptOutEvent: 303,
  flowEvent: 304,
  networkConnectivityBaselineEvent: 305,
  ytbFileImported: 306,
  downloadStreamUrlExpired: 307,
  directSignInEvent: 308,
  lyricImpressionEvent: 309,
  accessibilityStateEvent: 310,
  tokenRefreshEvent: 311,
  genericAttestationExecution: 312,
  tvhtml5VideoSeek: 313,
  unpluggedAutoPause: 314,
  scrubbingEvent: 315,
  bedtimeReminderEvent: 317,
  tvhtml5UnexpectedRestart: 319,
  tvhtml5DeviceStorageStats: 535,
  tvhtml5StabilityTraceEvent: 478,
  tvhtml5OperationHealth: 467,
  tvhtml5WatchKeyEvent: 321,
  voiceLanguageChanged: 322,
  tvhtml5LiveChatStatus: 323,
  parentToolsCorpusSelectedEvent: 324,
  offerAdsEnrollmentInitiated: 325,
  networkQualityIntervalEvent: 326,
  deviceStartupMetrics: 328,
  heartbeatActionPlayerTransitioned: 330,
  tvhtml5Lifecycle: 331,
  heartbeatActionPlayerHalted: 332,
  adaptiveInlineMutedSettingEvent: 333,
  mainAppLibraryLoadingState: 334,
  thirdPartyLogMonitoringEvent: 336,
  appShellAssetLoadReport: 337,
  tvhtml5AndroidAttestation: 338,
  tvhtml5StartupSoundEvent: 340,
  iosBackgroundRefreshTask: 342,
  iosBackgroundProcessingTask: 343,
  sliEventBatch: 344,
  postImpressionEvent: 346,
  musicSideloadedPlaylistExport: 347,
  idbUnexpectedlyClosed: 348,
  voiceSearchEvent: 349,
  mdxSessionCastEvent: 350,
  idbQuotaExceeded: 351,
  idbTransactionEnded: 352,
  idbTransactionAborted: 353,
  tvhtml5KeyboardLogging: 354,
  idbIsSupportedCompleted: 355,
  creatorStudioMobileEvent: 356,
  idbDataCorrupted: 357,
  parentToolsAppChosenEvent: 358,
  webViewBottomSheetResized: 359,
  activeStateControllerScrollPerformanceSummary: 360,
  navigatorValidation: 361,
  mdxSessionHeartbeat: 362,
  clientHintsPolyfillDiagnostics: 363,
  clientHintsPolyfillEvent: 364,
  proofOfOriginTokenError: 365,
  kidsAddedAccountSummary: 366,
  musicWearableDevice: 367,
  ypcRefundFlowEvent: 368,
  tvhtml5PlaybackMeasurementEvent: 369,
  tvhtml5WatermarkMeasurementEvent: 370,
  clientExpGcfPropagationEvent: 371,
  mainAppReferrerIntent: 372,
  leaderLockEnded: 373,
  leaderLockAcquired: 374,
  googleHatsEvent: 375,
  persistentLensLaunchEvent: 376,
  parentToolsChildWelcomeChosenEvent: 378,
  browseThumbnailPreloadEvent: 379,
  finalPayload: 380,
  mdxDialAdditionalDataUpdateEvent: 381,
  webOrchestrationTaskLifecycleRecord: 382,
  startupSignalEvent: 384,
  accountError: 385,
  gmsDeviceCheckEvent: 386,
  accountSelectorEvent: 388,
  accountUiCallbacks: 389,
  mdxDialAdditionalDataProbeEvent: 390,
  downloadsSearchIcingApiStats: 391,
  downloadsSearchIndexUpdatedEvent: 397,
  downloadsSearchIndexSnapshot: 398,
  dataPushClientEvent: 392,
  kidsCategorySelectedEvent: 393,
  mdxDeviceManagementSnapshotEvent: 394,
  prefetchRequested: 395,
  prefetchableCommandExecuted: 396,
  gelDebuggingEvent: 399,
  webLinkTtsPlayEnd: 400,
  clipViewInvalid: 401,
  persistentStorageStateChecked: 403,
  cacheWipeoutEvent: 404,
  playerEvent: 410,
  sfvEffectPipelineStartedEvent: 412,
  sfvEffectPipelinePausedEvent: 429,
  sfvEffectPipelineEndedEvent: 413,
  sfvEffectChosenEvent: 414,
  sfvEffectLoadedEvent: 415,
  sfvEffectUserInteractionEvent: 465,
  sfvEffectFirstFrameProcessedLatencyEvent: 416,
  sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
  sfvEffectAggregatedFramesDroppedEvent: 418,
  sfvEffectPipelineErrorEvent: 430,
  sfvEffectGraphFrozenEvent: 419,
  sfvEffectGlThreadBlockedEvent: 420,
  mdeQosEvent: 510,
  mdeVideoChangedEvent: 442,
  mdePlayerPerformanceMetrics: 472,
  mdeExporterEvent: 497,
  genericClientExperimentEvent: 423,
  homePreloadTaskScheduled: 424,
  homePreloadTaskExecuted: 425,
  homePreloadCacheHit: 426,
  polymerPropertyChangedInObserver: 427,
  applicationStarted: 431,
  networkCronetRttBatch: 432,
  networkCronetRttSummary: 433,
  repeatChapterLoopEvent: 436,
  seekCancellationEvent: 462,
  lockModeTimeoutEvent: 483,
  externalVideoShareToYoutubeAttempt: 501,
  parentCodeEvent: 502,
  offlineTransferStarted: 4,
  musicOfflineMixtapePreferencesChanged: 16,
  mangoDailyNewVideosNotificationAttempt: 40,
  mangoDailyNewVideosNotificationError: 77,
  dtwsPlaybackStarted: 112,
  dtwsTileFetchStarted: 113,
  dtwsTileFetchCompleted: 114,
  dtwsTileFetchStatusChanged: 145,
  dtwsKeyframeDecoderBufferSent: 115,
  dtwsTileUnderflowedOnNonkeyframe: 116,
  dtwsBackfillFetchStatusChanged: 143,
  dtwsBackfillUnderflowed: 117,
  dtwsAdaptiveLevelChanged: 128,
  blockingVisitorIdTimeout: 277,
  liteSocial: 18,
  mobileJsInvocation: 297,
  biscottiBasedDetection: 439,
  coWatchStateChange: 440,
  embedsVideoDataDidChange: 441,
  shortsFirst: 443,
  cruiseControlEvent: 445,
  qoeClientLoggingContext: 446,
  atvRecommendationJobExecuted: 447,
  tvhtml5UserFeedback: 448,
  producerProjectCreated: 449,
  producerProjectOpened: 450,
  producerProjectDeleted: 451,
  producerProjectElementAdded: 453,
  producerProjectElementRemoved: 454,
  producerAppStateChange: 509,
  producerProjectDiskInsufficientExportFailure: 516,
  producerMediaServicesResetDetails: 522,
  tvhtml5ShowClockEvent: 455,
  deviceCapabilityCheckMetrics: 456,
  youtubeClearcutEvent: 461,
  offlineBrowseFallbackEvent: 463,
  getCtvTokenEvent: 464,
  startupDroppedFramesSummary: 466,
  screenshotEvent: 468,
  miniAppPlayEvent: 469,
  elementsDebugCounters: 470,
  fontLoadEvent: 471,
  webKillswitchReceived: 473,
  webKillswitchExecuted: 474,
  cameraOpenEvent: 475,
  manualSmoothnessMeasurement: 476,
  tvhtml5AppQualityEvent: 477,
  polymerPropertyAccessEvent: 479,
  miniAppSdkUsage: 480,
  cobaltTelemetryEvent: 481,
  crossDevicePlayback: 482,
  channelCreatedWithObakeImage: 484,
  channelEditedWithObakeImage: 485,
  offlineDeleteEvent: 486,
  crossDeviceNotificationTransfer: 487,
  androidIntentEvent: 488,
  unpluggedAmbientInterludesCounterfactualEvent: 489,
  keyPlaysPlayback: 490,
  shortsCreationFallbackEvent: 493,
  vssData: 491,
  castMatch: 494,
  miniAppPerformanceMetrics: 495,
  userFeedbackEvent: 496,
  kidsGuestSessionMismatch: 498,
  musicSideloadedPlaylistMigrationEvent: 499,
  sleepTimerSessionFinishEvent: 500,
  watchEpPromoConflict: 503,
  innertubeResponseCacheMetrics: 505,
  miniAppAdEvent: 506,
  dataPlanUpsellEvent: 507,
  producerProjectRenamed: 508,
  producerMediaSelectionEvent: 511,
  embedsAutoplayStatusChanged: 512,
  remoteConnectEvent: 513,
  connectedSessionMisattributionEvent: 514,
  producerProjectElementModified: 515,
  adsSeenClientLogging: 517,
  producerEvent: 518,
  tvhtml5CleanStart: 519,
  deviceAccountMetricsEvent: 520,
  derpLogEvent: 521,
  playablesPortalEvent: 523,
  ipValidationStarted: 524,
  ipValidationReceived: 525,
  reelsSequenceMutationEvent: 527,
  watchZoomStateChange: 528,
  metadataEditorEvent: 529,
  kidsPrismaDeeplinksEvent: 530,
  creationOrchestrationEvent: 531,
  coordinatedSamplingTriggered: 532,
  recapScreenshotEvent: 534,
  mdxLocalNetworkPermissionRequestEvent: 536,
  mdxLocalNetworkPermissionResponseEvent: 537,
  sessionReplayEvent: 538,
  sessionReplayStatusEvent: 539,
  loggingReliabilityProbe: 540,
  keyValueStoreStatsEvent: 541,
  deviceLocationPermissionEvent: 542,
  remoteControlStarted: 543,
  remoteControlCompleted: 544,
  reelsAdsEvents: 545,
  ytlrLoaderTestHarnessEvent: 547,
  biometricAuthenticationEvent: 548,
  mainAppLifecycleEvent: 549,
  musicDownloadBackgroundContinuedProcessingTask: 550,
  musicMetadataMismatchEvent: 551,
  scrollToComponentCompleted: 552,
  entityStoreTelemetry: 553,
  streamingDarkLaunchEvent: 554,
  childAccountsDisplayEvent: 555,
  tvfasPlaybackContext: 557,
  mdeC2PaEvent: 559,
  mdeBatchedPlayerEvents: 560,
  tvhtml5UlpCreationFlowData: 561,
  alwaysConnectedHandshakeRemoteControlStarted: 562,
  alwaysConnectedHandshakeRemoteControlCompleted: 563,
  alwaysConnectedHandshakeAwarenessStarted: 564,
  alwaysConnectedHandshakeAwarenessCompleted: 565,
  customThumbnailSourceMetadata: 567,
  miniAppInGameEvent: 568,
  androidToastyRun: 569,
  tvhtml5AppTelemetryEvent: 570,
  shortsEffectStartedEvent: 571,
  shortsEffectEndedEvent: 572,
  networkQualityTransitionEvent: 573,
  elementsReceivedResourcesEvent: 574
};
var xn = {};
var yn = Kl("ServiceWorkerLogsDatabase", {
  hb: (xn.SWHealthLog = {
    lb: 1
  }, xn),
  shared: true,
  upgrade: function (a, b) {
    if (b(1)) {
      $k(Tk(a, "SWHealthLog", {
        keyPath: "id",
        autoIncrement: true
      }), "swHealthNewRequest", ["interface", "timestamp"]);
    }
  },
  version: 1
});
function zn(a) {
  return ol(yn(), a);
}
function An(a) {
  var b;
  var c;
  C(function (d) {
    if (d.i == 1) {
      return d.h(zn(a), 2);
    }
    b = d.j;
    c = V() - 2592000000;
    return d.h(Sk(b, ["SWHealthLog"], {
      mode: "readwrite",
      U: true
    }, function (e) {
      return bl(e.objectStore("SWHealthLog"), {}, function (f) {
        if (f.cursor.value.timestamp <= c) {
          return f.delete().then(function () {
            return cl(f);
          });
        }
      });
    }), 0);
  });
}
function Bn(a) {
  var b;
  return C(function (c) {
    if (c.i == 1) {
      return c.h(zn(a), 2);
    }
    b = c.j;
    return c.h(b.clear("SWHealthLog"), 0);
  });
}
;
var Cn = {};
var Dn = 0;
function En(a) {
  var b = b === undefined ? {} : b;
  var c = new Image();
  var d = "" + Dn++;
  Cn[d] = c;
  c.onload = c.onerror = function () {
    delete Cn[d];
  };
  if (b.te) {
    c.referrerPolicy = "no-referrer";
  }
  c.src = a;
}
;
var Fn;
function Gn() {
  Fn ||= new hk("yt.offline");
  return Fn;
}
function Hn(a) {
  if (T("offline_error_handling")) {
    var b = Gn().get("errors", true) || {};
    b[a.message] = {
      name: a.name,
      stack: a.stack
    };
    if (a.level) {
      b[a.message].level = a.level;
    }
    Gn().set("errors", b, 2592000, true);
  }
}
;
function In() {
  this.h = new Map();
  this.i = false;
}
function Jn() {
  if (!In.instance) {
    var a = F("yt.networkRequestMonitor.instance") || new In();
    G("yt.networkRequestMonitor.instance", a);
    In.instance = a;
  }
  return In.instance;
}
In.prototype.requestComplete = function (a, b) {
  if (b) {
    this.i = true;
  }
  a = this.removeParams(a);
  if (!this.h.get(a)) {
    this.h.set(a, b);
  }
};
In.prototype.isEndpointCFR = function (a) {
  a = this.removeParams(a);
  if (a = this.h.get(a)) {
    return false;
  } else if (a === false && this.i) {
    return true;
  } else {
    return null;
  }
};
In.prototype.removeParams = function (a) {
  return a.split("?")[0];
};
In.prototype.removeParams = In.prototype.removeParams;
In.prototype.isEndpointCFR = In.prototype.isEndpointCFR;
In.prototype.requestComplete = In.prototype.requestComplete;
In.getInstance = Jn;
function Kn() {
  ye.call(this);
  var a = this;
  this.j = false;
  this.i = De();
  this.i.Oa("networkstatus-online", function () {
    if (a.j && T("offline_error_handling")) {
      var b = Gn().get("errors", true);
      if (b) {
        for (var c in b) {
          if (b[c]) {
            var d = new Yh(c, "sent via offline_errors");
            d.name = b[c].name;
            d.stack = b[c].stack;
            d.level = b[c].level;
            ni(d);
          }
        }
        Gn().set("errors", {}, 2592000, true);
      }
    }
  });
}
u(Kn, ye);
function Ln() {
  if (!Kn.instance) {
    var a = F("yt.networkStatusManager.instance") || new Kn();
    G("yt.networkStatusManager.instance", a);
    Kn.instance = a;
  }
  return Kn.instance;
}
r = Kn.prototype;
r.ia = function () {
  return this.i.ia();
};
r.Qa = function (a) {
  this.i.isOnline = a;
};
r.kd = function () {
  var a = window.navigator.onLine;
  if (a === undefined) {
    return true;
  } else {
    return a;
  }
};
r.ed = function () {
  this.j = true;
};
r.Oa = function (a, b) {
  return this.i.Oa(a, b);
};
r.Kb = function (a) {
  return Be(this.i, a);
};
Kn.prototype.sendNetworkCheckRequest = Kn.prototype.Kb;
Kn.prototype.listen = Kn.prototype.Oa;
Kn.prototype.enableErrorFlushing = Kn.prototype.ed;
Kn.prototype.getWindowStatus = Kn.prototype.kd;
Kn.prototype.networkStatusHint = Kn.prototype.Qa;
Kn.prototype.isNetworkAvailable = Kn.prototype.ia;
Kn.getInstance = Ln;
function Mn(a) {
  a = a === undefined ? {} : a;
  ye.call(this);
  var b = this;
  this.i = this.C = 0;
  this.j = Ln();
  var c = F("yt.networkStatusManager.instance.listen").bind(this.j);
  if (c) {
    if (a.rateLimit) {
      this.rateLimit = a.rateLimit;
      c("networkstatus-online", function () {
        Nn(b, "publicytnetworkstatus-online");
      });
      c("networkstatus-offline", function () {
        Nn(b, "publicytnetworkstatus-offline");
      });
    } else {
      c("networkstatus-online", function () {
        b.dispatchEvent("publicytnetworkstatus-online");
      });
      c("networkstatus-offline", function () {
        b.dispatchEvent("publicytnetworkstatus-offline");
      });
    }
  }
}
u(Mn, ye);
Mn.prototype.ia = function () {
  var a = F("yt.networkStatusManager.instance.isNetworkAvailable");
  if (a) {
    return a.bind(this.j)();
  } else {
    return true;
  }
};
Mn.prototype.Qa = function (a) {
  var b = F("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);
  if (b) {
    b(a);
  }
};
Mn.prototype.Kb = function (a) {
  var b = this;
  var c;
  return C(function (d) {
    c = F("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);
    if (T("skip_network_check_if_cfr") && Jn().isEndpointCFR("generate_204")) {
      return d.return(new Promise(function (e) {
        var f;
        b.Qa(((f = window.navigator) == null ? undefined : f.onLine) || true);
        e(b.ia());
      }));
    } else if (c) {
      return d.return(c(a));
    } else {
      return d.return(true);
    }
  });
};
function Nn(a, b) {
  if (a.rateLimit) {
    if (a.i) {
      Ee.ha(a.C);
      a.C = Ee.sa(function () {
        if (a.u !== b) {
          a.dispatchEvent(b);
          a.u = b;
          a.i = V();
        }
      }, a.rateLimit - (V() - a.i));
    } else {
      a.dispatchEvent(b);
      a.u = b;
      a.i = V();
    }
  } else {
    a.dispatchEvent(b);
  }
}
;
var On;
function Pn() {
  var a = an.call;
  On ||= new Mn({
    me: true,
    ie: true
  });
  a.call(an, this, {
    R: {
      Zc: un,
      Ya: tn,
      yc: qn,
      td: rn,
      jc: sn,
      set: on
    },
    V: On,
    handleError: function (b, c, d) {
      var e;
      var f = d == null ? undefined : (e = d.error) == null ? undefined : e.code;
      if (f === 400 || f === 415) {
        var g;
        b = new Yh(b.message, c, d == null ? undefined : (g = d.error) == null ? undefined : g.code);
        pi(b, undefined, undefined, undefined, true);
      } else {
        ni(b);
      }
    },
    Za: pi,
    Ca: Qn,
    now: V,
    Sc: Hn,
    ma: gk(),
    fc: "publicytnetworkstatus-online",
    Zb: "publicytnetworkstatus-offline",
    Cb: true,
    Ab: 0.1,
    Ib: Hi("potential_esf_error_limit", 10),
    L: T,
    ob: !xj() || mb(document.location.toString()) === "www.youtube-nocookie.com"
  });
  this.j = new Of();
  if (T("networkless_immediately_drop_all_requests")) {
    vn();
  }
  Hl("LogsDatabaseV2");
}
u(Pn, an);
function Rn() {
  var a = F("yt.networklessRequestController.instance");
  if (!a) {
    a = new Pn();
    G("yt.networklessRequestController.instance", a);
    if (T("networkless_logging")) {
      zl().then(function (b) {
        a.K = b;
        cn(a);
        a.j.resolve();
        if (a.Cb && Math.random() <= a.Ab && a.K) {
          An(a.K);
        }
        if (T("networkless_immediately_drop_sw_health_store")) {
          Sn(a);
        }
      });
    }
  }
  return a;
}
Pn.prototype.writeThenSend = function (a, b) {
  b ||= {};
  b = Tn(a, b);
  if (!xj()) {
    this.h = false;
  }
  an.prototype.writeThenSend.call(this, a, b);
};
Pn.prototype.sendThenWrite = function (a, b, c) {
  b ||= {};
  b = Tn(a, b);
  if (!xj()) {
    this.h = false;
  }
  an.prototype.sendThenWrite.call(this, a, b, c);
};
Pn.prototype.sendAndWrite = function (a, b) {
  b ||= {};
  b = Tn(a, b);
  if (!xj()) {
    this.h = false;
  }
  an.prototype.sendAndWrite.call(this, a, b);
};
Pn.prototype.awaitInitialization = function () {
  return this.j.promise;
};
function Sn(a) {
  var b;
  C(function (c) {
    if (!a.K) {
      b = Ck("clearSWHealthLogsDb");
      throw b;
    }
    return c.return(Bn(a.K).catch(function (d) {
      a.handleError(d);
    }));
  });
}
function Qn(a, b, c) {
  b = T("web_fp_via_jspb") ? Object.assign({}, b) : b;
  if (T("use_request_time_ms_header")) {
    if (b.headers && zi(a)) {
      b.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(V()));
    }
  } else {
    var d;
    if ((d = b.postParams) == null ? 0 : d.requestTimeMs) {
      b.postParams.requestTimeMs = Math.round(V());
    }
  }
  if (c && Object.keys(b).length === 0) {
    var e = e === undefined ? "" : e;
    var f = f === undefined ? false : f;
    var g = g === undefined ? false : g;
    if (a) {
      if (e) {
        Ni(a, undefined, "POST", e, undefined);
      } else if (S("USE_NET_AJAX_FOR_PING_TRANSPORT", false) || g) {
        Ni(a, undefined, "GET", "", undefined, undefined, f, g);
      } else {
        b: {
          try {
            c: {
              var h = new Qa({
                url: a
              });
              if (h.h.dsh === "1") {
                var k = null;
              } else {
                var l = h.h.ae;
                if (l === "1") {
                  var m = h.h.adurl;
                  if (m) {
                    try {
                      k = {
                        version: 3,
                        cd: decodeURIComponent(m),
                        Xc: Oa(h.i, "act=1", "ri=1", Ra(h))
                      };
                      break c;
                    } catch (pa) {}
                  }
                }
                k = l === "2" ? {
                  version: 4,
                  cd: Oa(h.i, "dct=1", "suid=" + h.j, "ri=1"),
                  Xc: Oa(h.i, "act=1", "ri=1", "suid=" + h.j)
                } : null;
              }
            }
            if (k) {
              var n = lb(a.match(kb)[5] || null);
              var q;
              if (!(q = !n || !n.endsWith("/aclk"))) {
                var p = a.search(pb);
                d: {
                  for (c = 0; (c = a.indexOf("ri", c)) >= 0 && c < p;) {
                    var x = a.charCodeAt(c - 1);
                    if (x == 38 || x == 63) {
                      var y = a.charCodeAt(c + 2);
                      if (!y || y == 61 || y == 38 || y == 35) {
                        var z = c;
                        break d;
                      }
                    }
                    c += 3;
                  }
                  z = -1;
                }
                if (z < 0) {
                  var H = null;
                } else {
                  var D = a.indexOf("&", z);
                  if (D < 0 || D > p) {
                    D = p;
                  }
                  H = decodeURIComponent(a.slice(z + 3, D !== -1 ? D : 0).replace(/\+/g, " "));
                }
                q = H !== "1";
              }
              var P = !q;
              break b;
            }
          } catch (pa) {}
          P = false;
        }
        if (P) {
          b: {
            try {
              if (window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, "")) {
                var Y = true;
                break b;
              }
            } catch (pa) {}
            Y = false;
          }
          P = !!Y;
        } else {
          P = false;
        }
        if (!P) {
          En(a);
        }
      }
    }
  } else if (b.compress) {
    if (b.postBody) {
      if (typeof b.postBody !== "string") {
        b.postBody = JSON.stringify(b.postBody);
      }
      Tm(a, b.postBody, b, Ri);
    } else {
      Tm(a, JSON.stringify(b.postParams), b, Qi);
    }
  } else {
    Ri(a, b);
  }
}
function Tn(a, b) {
  if (T("use_event_time_ms_header") && zi(a)) {
    b.headers ||= {};
    b.headers["X-Goog-Event-Time"] = JSON.stringify(Math.round(V()));
  }
  return b;
}
;
var Un = E.ytNetworklessLoggingInitializationOptions || {
  isNwlInitialized: false
};
G("ytNetworklessLoggingInitializationOptions", Un);
function Vn(a) {
  var b = this;
  this.config_ = null;
  if (a) {
    this.config_ = a;
  } else if (Xl()) {
    this.config_ = Yl();
  }
  Aj(function () {
    Zm(b);
  }, 5000);
}
Vn.prototype.isReady = function () {
  if (!this.config_ && Xl()) {
    this.config_ = Yl();
  }
  return !!this.config_;
};
function $m(a, b, c, d) {
  function e(n) {
    n = n === undefined ? false : n;
    var q;
    if (d.retry && h != "www.youtube-nocookie.com" && (n || T("skip_ls_gel_retry") || g.headers["Content-Type"] !== "application/json" || (q = Xm(b, c, l, k)), q)) {
      var p = g.onSuccess;
      var x = g.onFetchSuccess;
      g.onSuccess = function (z, H) {
        Ym(q);
        p(z, H);
      };
      c.onFetchSuccess = function (z, H) {
        Ym(q);
        x(z, H);
      };
    }
    try {
      if (n && d.retry && !d.networklessOptions.bypassNetworkless) {
        g.method = "POST";
        if (d.networklessOptions.writeThenSend) {
          Rn().writeThenSend(m, g);
        } else {
          Rn().sendAndWrite(m, g);
        }
      } else if (d.compress) {
        if (g.postBody) {
          var y = g.postBody;
          if (typeof y !== "string") {
            y = JSON.stringify(g.postBody);
          }
          Tm(m, y, g, Ri);
        } else {
          Tm(m, JSON.stringify(g.postParams), g, Qi);
        }
      } else {
        Qi(m, g);
      }
    } catch (z) {
      if (z.name === "InvalidAccessError") {
        if (q) {
          Ym(q);
          q = 0;
        }
        pi(Error("An extension is blocking network request."));
      } else {
        throw z;
      }
    }
    if (q) {
      Aj(function () {
        Zm(a);
      }, 5000);
    }
  }
  if (!S("VISITOR_DATA") && b !== "visitor_id" && Math.random() < 0.01) {
    pi(new Yh("Missing VISITOR_DATA when sending innertube request.", b, c, d));
  }
  if (!a.isReady()) {
    var f = new Yh("innertube xhrclient not ready", b, c, d);
    ni(f);
    throw f;
  }
  var g = {
    headers: d.headers || {},
    method: "POST",
    postParams: c,
    postBody: d.postBody,
    postBodyFormat: d.postBodyFormat || "JSON",
    onTimeout: function () {
      d.onTimeout();
    },
    onFetchTimeout: d.onTimeout,
    onSuccess: function (n, q) {
      if (d.onSuccess) {
        d.onSuccess(q);
      }
    },
    onFetchSuccess: function (n) {
      if (d.onSuccess) {
        d.onSuccess(n);
      }
    },
    onProgress: function (n) {
      if (d.onProgress) {
        d.onProgress(n);
      }
    },
    onError: function (n, q) {
      if (d.onError) {
        d.onError(q);
      }
    },
    onFetchError: function (n) {
      if (d.onError) {
        d.onError(n);
      }
    },
    timeout: d.timeout,
    withCredentials: true,
    compress: d.compress
  };
  g.headers["Content-Type"] ||= "application/json";
  var h = "";
  if (f = a.config_.qd) {
    h = f;
  }
  var k = a.config_.rd || false;
  var l = gm(k, h, d);
  Object.assign(g.headers, l);
  if (g.headers.Authorization && !h && k) {
    g.headers["x-origin"] = window.location.origin;
  }
  var m = xi("" + h + ("/youtubei/" + a.config_.innertubeApiVersion + "/" + b), {
    alt: "json"
  });
  if (F("ytNetworklessLoggingInitializationOptions") && Un.isNwlInitialized) {
    xl().then(function (n) {
      e(n);
    });
  } else {
    e(false);
  }
}
;
var Wn = 0;
G("ytDomDomGetNextId", F("ytDomDomGetNextId") || function () {
  return ++Wn;
});
G("ytEventsEventsListeners", E.ytEventsEventsListeners || {});
G("ytEventsEventsCounter", E.ytEventsEventsCounter || {
  count: 0
});
function Xn() {
  var a = F("_lact", window);
  if (a == null) {
    return -1;
  } else {
    return Math.max(Date.now() - a, 0);
  }
}
;
var Yn = Symbol("injectionDeps");
function Zn(a) {
  this.key = a;
}
;
function $n() {
  this.stack = [];
}
$n.prototype.push = function (a, b) {
  this.stack.push({
    key: a,
    ib: b
  });
};
$n.prototype.pop = function () {
  this.stack.pop();
};
function ao(a, b, c) {
  return a.stack.some(function (d) {
    if (d.key !== b) {
      return false;
    }
    for (var e = Math.min(d.ib.length, c.length), f = 0; f < e; f++) {
      if (d.ib[f] !== c[f]) {
        return false;
      }
    }
    return true;
  });
}
;
function bo() {
  var a = a === undefined ? null : a;
  this.j = new Map();
  this.i = new Map();
  this.children = new Set();
  this.ib = (this.parent = a) ? [].concat(w(a.ib), [this]) : [this];
  this.h = (a == null ? undefined : a.h) || new $n();
  var b;
  if ((b = this.parent) != null) {
    b.children.add(this);
  }
}
bo.prototype.resolve = function (a) {
  if (a instanceof Zn) {
    return co(this, a.key, true);
  } else {
    return co(this, a);
  }
};
function co(a, b, c) {
  c = c === undefined ? false : c;
  if (ao(a.h, b, a.ib)) {
    throw Error("Deps cycle for: " + b);
  }
  if (a.i.has(b)) {
    return a.i.get(b);
  }
  if (a.j.has(b)) {
    a.h.push(b, a.ib);
    try {
      var d = a.j.get(b);
      var e = c;
      if (d.Jd !== undefined) {
        var f = d.Jd;
      } else if (d.Id) {
        var g = d[Yn] ? eo(a, d[Yn]) : [];
        f = d.Id.apply(d, w(g));
      } else if (d.Hd) {
        var h = d.Hd;
        var k = h[Yn] ? eo(a, h[Yn]) : [];
        f = new (Function.prototype.bind.apply(h, [null].concat(w(k))))();
      } else {
        if (!e) {
          throw Error("Could not resolve providers for: " + b);
        }
        f = undefined;
      }
      if (!d.we) {
        a.i.set(b, f);
      }
      return f;
    } finally {
      a.h.pop();
    }
  }
  if (a.parent) {
    return co(a.parent, b, c);
  }
  if (!c) {
    throw Error("No provider for: " + b);
  }
}
function eo(a, b) {
  if (b) {
    return b.map(function (c) {
      if (c instanceof Zn) {
        return co(a, c.key, true);
      } else {
        return co(a, c);
      }
    });
  } else {
    return [];
  }
}
;
function fo() {
  this.name = "FinchConfigManagerService";
}
fo.prototype.toString = function () {
  return "InjectionToken(" + this.name + ")";
};
var go;
var ho;
function io() {
  ho ||= go = new bo();
  return ho;
}
;
var jo = window;
function ko() {
  var a;
  var b;
  if ("h5vcc" in jo && ((a = jo.h5vcc.traceEvent) == null ? 0 : a.traceBegin) && ((b = jo.h5vcc.traceEvent) == null ? 0 : b.traceEnd)) {
    return 1;
  } else if ("performance" in jo && jo.performance.mark && jo.performance.measure) {
    return 2;
  } else {
    return 0;
  }
}
function lo(a) {
  var b = ko();
  switch (b) {
    case 1:
      jo.h5vcc.traceEvent.traceBegin("YTLR", a);
      break;
    case 2:
      jo.performance.mark(a + "-start");
      break;
    case 0:
      break;
    default:
      Za(b, "unknown trace type");
  }
}
function mo(a) {
  var b = ko();
  switch (b) {
    case 1:
      jo.h5vcc.traceEvent.traceEnd("YTLR", a);
      break;
    case 2:
      b = a + "-start";
      var c = a + "-end";
      jo.performance.mark(c);
      jo.performance.measure(a, b, c);
      break;
    case 0:
      break;
    default:
      Za(b, "unknown trace type");
  }
}
;
var no = T("web_enable_lifecycle_monitoring") && ko() !== 0;
var oo = T("web_enable_lifecycle_monitoring");
function po(a) {
  var b;
  var c;
  if ((c = (b = window).onerror) != null) {
    c.call(b, a.message, "", 0, 0, a);
  }
}
;
function qo(a) {
  var b = this;
  var c = c === undefined ? 0 : c;
  var d = d === undefined ? gk() : d;
  this.j = c;
  this.scheduler = d;
  this.i = new Of();
  this.h = a;
  for (a = {
    Na: 0
  }; a.Na < this.h.length; a = {
    Hb: undefined,
    Na: a.Na
  }, a.Na++) {
    a.Hb = this.h[a.Na];
    c = function (e) {
      return function () {
        e.Hb.Tb();
        b.h[e.Na].Jb = true;
        if (b.h.every(function (f) {
          return f.Jb === true;
        })) {
          b.i.resolve();
        }
      };
    }(a);
    d = this.scheduler.Ka(c, ro(this, a.Hb));
    this.h[a.Na] = na({}, a.Hb, {
      Tb: c,
      jobId: d
    });
  }
}
function so(a) {
  var b = Array.from(a.h.keys()).sort(function (e, f) {
    return ro(a, a.h[f]) - ro(a, a.h[e]);
  });
  b = v(b);
  var c = b.next();
  try {
    for (; !c.done; c = b.next()) {
      var d = a.h[c.value];
      if (d.jobId !== undefined && !d.Jb) {
        a.scheduler.ha(d.jobId);
        a.scheduler.Ka(d.Tb, 10);
      }
    }
  } finally {
    A(b, c);
  }
}
qo.prototype.cancel = function () {
  var a = v(this.h);
  var b = a.next();
  try {
    for (; !b.done; b = a.next()) {
      var c = b.value;
      if (c.jobId !== undefined && !c.Jb) {
        this.scheduler.ha(c.jobId);
      }
      c.Jb = true;
    }
  } finally {
    A(a, b);
  }
  this.i.resolve();
};
function ro(a, b) {
  return b.priority ?? a.j;
}
;
function to(a) {
  this.state = a;
  this.plugins = [];
  this.m = undefined;
  this.j = [];
  this.u = {};
  if (no) {
    lo(this.state);
  }
}
ea.Object.defineProperties(to.prototype, {
  currentState: {
    configurable: true,
    enumerable: true,
    get: function () {
      return this.state;
    }
  }
});
r = to.prototype;
r.install = function (a) {
  this.plugins.push(a);
  return this;
};
r.transition = function (a, b) {
  var c = this;
  if (no) {
    mo(this.state);
  }
  var d = this.transitions.find(function (f) {
    if (Array.isArray(f.from)) {
      return f.from.find(function (g) {
        return g === c.state && f.to === a;
      });
    } else {
      return f.from === c.state && f.to === a;
    }
  });
  if (d) {
    if (this.i) {
      so(this.i);
      this.i = undefined;
    }
    if (T("kevlar_startup_split") && this.j.length) {
      this.j.forEach(function (f) {
        so(f);
      });
      this.j = [];
    }
    uo(this, a, b);
    this.state = a;
    if (no) {
      lo(this.state);
    }
    d = d.action.bind(this);
    var e = this.plugins.filter(function (f) {
      return f[a];
    }).map(function (f) {
      return f[a];
    });
    d(vo(this, e), b);
  } else {
    throw Error("no transition specified from " + this.state + " to " + a);
  }
};
function vo(a, b) {
  var c = b.filter(function (e) {
    return wo(a, e) === 10;
  });
  var d = b.filter(function (e) {
    return wo(a, e) !== 10;
  });
  if (a.u.ue) {
    return function () {
      var e = Da.apply(0, arguments);
      return C(function (f) {
        if (f.i == 1) {
          return f.h(a.Cd.apply(a, [c].concat(w(e))), 2);
        }
        a.Nc.apply(a, [d].concat(w(e)));
        f.u();
      });
    };
  } else {
    return function () {
      var e = Da.apply(0, arguments);
      a.Dd.apply(a, [c].concat(w(e)));
      a.Nc.apply(a, [d].concat(w(e)));
    };
  }
}
r.Dd = function (a) {
  var b = Da.apply(1, arguments);
  var c = gk();
  var d = v(a);
  var e = d.next();
  try {
    for (; !e.done; e = d.next()) {
      var f = this.qc.apply(this, [e.value].concat(w(b)));
      c.kb(f);
    }
  } finally {
    A(d, e);
  }
};
r.qc = function (a) {
  var b = Da.apply(1, arguments);
  return function () {
    xo(a.name);
    yo(function () {
      return a.callback.apply(a, w(b));
    });
    zo(a.name);
  };
};
r.Cd = function (a) {
  var b = Da.apply(1, arguments);
  var c;
  var d;
  var e;
  var f;
  var g;
  return C(function (h) {
    switch (h.i) {
      case 1:
        c = gk();
        d = v(a);
        e = d.next();
        h.ub(2);
        f = {};
      case 4:
        if (e.done) {
          h.v(2);
          break;
        }
        f.Ga = e.value;
        f.wb = undefined;
        g = function (k) {
          return function () {
            xo(k.Ga.name);
            var l = yo(function () {
              return k.Ga.callback.apply(k.Ga, w(b));
            });
            if (bc(l)) {
              k.wb = T("web_lifecycle_error_handling_killswitch") ? l.then(function () {
                zo(k.Ga.name);
              }) : l.then(function () {
                zo(k.Ga.name);
              }, function (m) {
                po(m);
                zo(k.Ga.name);
              });
            } else {
              zo(k.Ga.name);
            }
          };
        }(f);
        c.kb(g);
        if (!f.wb) {
          h.v(5);
          break;
        }
        return h.h(f.wb, 5);
      case 5:
        f = {
          Ga: undefined,
          wb: undefined
        };
        e = d.next();
        h.v(4);
        break;
      case 2:
        h.ra();
        A(d, e);
        h.Va(0);
    }
  });
};
r.Nc = function (a) {
  var b = Da.apply(1, arguments);
  var c = this;
  var d = a.map(function (e) {
    var f = wo(c, e);
    return {
      Tb: c.qc.apply(c, [e].concat(w(b))),
      priority: f
    };
  });
  if (d.length) {
    this.i = new qo(d);
  }
};
function wo(a, b) {
  return a.m ?? b.priority ?? 0;
}
function xo(a) {
  if (no && a) {
    lo(a);
  }
}
function zo(a) {
  if (no && a) {
    mo(a);
  }
}
function uo(a, b, c) {
  if (oo && console.groupCollapsed && console.groupEnd) {
    console.groupCollapsed("[" + a.constructor.name + "] '" + a.state + "' to '" + b + "'");
    console.log("with message: ", c);
    console.groupEnd();
  }
}
function yo(a) {
  if (T("web_lifecycle_error_handling_killswitch")) {
    return a();
  }
  try {
    return a();
  } catch (b) {
    po(b);
  }
}
;
function Ao(a) {
  to.call(this, a === undefined ? "none" : a);
  this.h = null;
  this.m = 10;
  this.transitions = [{
    from: "none",
    to: "application_navigating",
    action: this.A
  }, {
    from: "application_navigating",
    to: "none",
    action: this.C
  }, {
    from: "application_navigating",
    to: "application_navigating",
    action: function () {}
  }, {
    from: "none",
    to: "none",
    action: function () {}
  }];
}
var Bo;
u(Ao, to);
Ao.prototype.A = function (a, b) {
  var c = this;
  this.h = Aj(function () {
    if (c.currentState === "application_navigating") {
      c.transition("none");
    }
  }, 5000);
  a(b == null ? undefined : b.event);
};
Ao.prototype.C = function (a, b) {
  if (this.h) {
    Ee.ha(this.h);
    this.h = null;
  }
  a(b == null ? undefined : b.event);
};
function Co() {
  Bo ||= new Ao();
  return Bo;
}
;
var Do = [];
G("yt.logging.transport.getScrapedGelPayloads", function () {
  return Do;
});
var Eo = undefined;
var Fo = undefined;
function Go() {
  var a;
  if (!Fo) {
    var b = S("WORKER_SERIALIZATION_URL");
    if (b) {
      if (b = b.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue) {
        b = (a = Xa()) ? a.createScriptURL(b) : b;
        b = new Ya(b);
      } else {
        b = null;
      }
      Fo = b;
    } else {
      Fo = null;
    }
  }
  a = Fo || undefined;
  if (!Eo && a !== undefined) {
    b = Worker;
    if (a instanceof Ya) {
      a = a.h;
    } else {
      throw Error("");
    }
    Eo = new b(a, undefined);
  }
  return Eo;
}
;
function Ho() {
  this.store = {};
  this.h = {};
}
Ho.prototype.storePayload = function (a, b) {
  a = Io(a);
  if (this.store[a]) {
    this.store[a].push(b);
  } else {
    this.h = {};
    this.store[a] = [b];
  }
  if (T("more_accurate_gel_parser")) {
    b = new CustomEvent("TRANSPORTING_NEW_EVENT");
    window.dispatchEvent(b);
  }
  return a;
};
Ho.prototype.smartExtractMatchingEntries = function (a) {
  if (!a.keys.length) {
    return [];
  }
  for (var b = Jo(this, a.keys.splice(0, 1)[0]), c = [], d = 0; d < b.length; d++) {
    if (this.store[b[d]] && a.sizeLimit) {
      if (this.store[b[d]].length <= a.sizeLimit) {
        c.push.apply(c, w(this.store[b[d]]));
        delete this.store[b[d]];
      } else {
        c.push.apply(c, w(this.store[b[d]].splice(0, a.sizeLimit)));
      }
    }
  }
  if ((a == null ? 0 : a.sizeLimit) && c.length < (a == null ? undefined : a.sizeLimit)) {
    a.sizeLimit -= c.length;
    c.push.apply(c, w(this.smartExtractMatchingEntries(a)));
  }
  return c;
};
Ho.prototype.extractMatchingEntries = function (a) {
  a = Jo(this, a);
  var b = [];
  for (var c = 0; c < a.length; c++) {
    if (this.store[a[c]]) {
      b.push.apply(b, w(this.store[a[c]]));
      delete this.store[a[c]];
    }
  }
  return b;
};
Ho.prototype.getSequenceCount = function (a) {
  a = Jo(this, a);
  var b = 0;
  for (var c = 0; c < a.length; c++) {
    var d = undefined;
    b += ((d = this.store[a[c]]) == null ? undefined : d.length) || 0;
  }
  return b;
};
function Jo(a, b) {
  var c = Io(b);
  if (a.h[c]) {
    return a.h[c];
  }
  var d = Object.keys(a.store) || [];
  if (d.length <= 1 && Io(b) === d[0]) {
    return d;
  }
  var e = [];
  for (var f = 0; f < d.length; f++) {
    var g = d[f].split("/");
    if (Ko(b.auth, g[0])) {
      var h = b.isJspb;
      if (Ko(h === undefined ? "undefined" : h ? "true" : "false", g[1]) && Ko(b.cttAuthInfo, g[2])) {
        h = b.tier;
        h = h === undefined ? "undefined" : JSON.stringify(h);
        if (Ko(h, g[3])) {
          e.push(d[f]);
        }
      }
    }
  }
  return a.h[c] = e;
}
function Ko(a, b) {
  if (a === undefined || a === "undefined") {
    return true;
  } else {
    return a === b;
  }
}
Ho.prototype.getSequenceCount = Ho.prototype.getSequenceCount;
Ho.prototype.extractMatchingEntries = Ho.prototype.extractMatchingEntries;
Ho.prototype.smartExtractMatchingEntries = Ho.prototype.smartExtractMatchingEntries;
Ho.prototype.storePayload = Ho.prototype.storePayload;
function Io(a) {
  return [a.auth === undefined ? "undefined" : a.auth, a.isJspb === undefined ? "undefined" : a.isJspb, a.cttAuthInfo === undefined ? "undefined" : a.cttAuthInfo, a.tier === undefined ? "undefined" : a.tier].join("/");
}
;
var Lo = E.ytPubsubPubsubInstance || new O();
var Mo = E.ytPubsubPubsubSubscribedKeys || {};
var No = E.ytPubsubPubsubTopicToKeys || {};
var Oo = E.ytPubsubPubsubIsSynchronous || {};
O.prototype.subscribe = O.prototype.subscribe;
O.prototype.unsubscribeByKey = O.prototype.unsubscribeByKey;
O.prototype.publish = O.prototype.publish;
O.prototype.clear = O.prototype.clear;
G("ytPubsubPubsubInstance", Lo);
G("ytPubsubPubsubTopicToKeys", No);
G("ytPubsubPubsubIsSynchronous", Oo);
G("ytPubsubPubsubSubscribedKeys", Mo);
var Po = new fo();
var Qo = Hi("initial_gel_batch_timeout", 2000);
var Ro = Hi("gel_queue_timeout_max_ms", 60000);
var So = Hi("gel_min_batch_size", 5);
var To = undefined;
var Uo = null;
function Vo() {
  return T("html5_send_qoe_on_gel") || T("web_send_vss3_isolated_payload") || T("web_send_vss3_pings");
}
function Wo(a) {
  Uo = a;
  if (Vo()) {
    E.ytLoggingTransportRegisteredClientCtor_ = a;
  }
  To = new a();
}
function Xo(a) {
  if (a) {
    return a;
  } else if (Vo()) {
    return Uo || E.ytLoggingTransportRegisteredClientCtor_ || null;
  } else {
    return null;
  }
}
function Yo() {
  this.m = this.i = this.j = 0;
  this.h = false;
}
var Zo = new Yo();
var $o = new Yo();
var ap = new Yo();
var bp = new Yo();
var cp;
var dp = true;
var ep = 1;
var fp = new Map();
var gp = E.ytLoggingTransportTokensToCttTargetIds_ || {};
G("ytLoggingTransportTokensToCttTargetIds_", gp);
var hp = E.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
G("ytLoggingTransportTokensToJspbCttTargetIds_", hp);
var ip = E.ytLoggingTransportTokens_ || {};
G("ytLoggingTransportTokens_", ip);
function jp() {
  var a = F("yt.logging.ims");
  if (!a) {
    a = new Ho();
    G("yt.logging.ims", a);
  }
  return a;
}
function kp(a, b) {
  if (a.endpoint === "log_event") {
    lp(a);
    var c = mp(a);
    var d = np(a.payload) || "";
    var e = op(d);
    var f = 200;
    if (e) {
      if (e.enabled === false && !T("web_payload_policy_disabled_killswitch")) {
        return;
      }
      f = pp(e.tier);
      if (f === 400) {
        qp(a, b);
        return;
      }
    }
    ip[c] = true;
    c = {
      cttAuthInfo: c,
      isJspb: false,
      tier: f
    };
    jp().storePayload(c, a.payload);
    rp(b, false, c, sp(d));
  }
}
function tp(a, b, c) {
  if (b.endpoint === "log_event") {
    lp(undefined, b);
    var d = mp(b, true);
    var e = op(a);
    var f = 200;
    if (e) {
      if (e.enabled === false && !T("web_payload_policy_disabled_killswitch")) {
        return;
      }
      f = pp(e.tier);
      if (f === 400) {
        up(a, b, c);
        return;
      }
    }
    ip[d] = true;
    d = {
      cttAuthInfo: d,
      isJspb: true,
      tier: f
    };
    jp().storePayload(d, Qc(b.payload));
    rp(c, true, d, sp(a));
  }
}
function rp(a, b, c, d) {
  function e() {
    vp({
      writeThenSend: true
    }, b, c.tier);
  }
  b = b === undefined ? false : b;
  d = d === undefined ? false : d;
  if (a) {
    Wo(a);
  }
  a = Hi("tvhtml5_logging_max_batch_ads_fork") || Hi("tvhtml5_logging_max_batch") || Hi("web_logging_max_batch") || 100;
  var f = V();
  var g = wp(b, c.tier);
  var h = g.m;
  if (d) {
    g.h = true;
  }
  d = 0;
  if (c) {
    d = jp().getSequenceCount(c);
  }
  if (d >= 1000) {
    e();
  } else if (d >= a) {
    cp ||= xp(function () {
      e();
      cp = undefined;
    }, 0);
  } else if (f - h >= 10) {
    yp(b, c.tier);
    g.m = f;
  }
}
function qp(a, b) {
  if (a.endpoint === "log_event") {
    if (T("more_accurate_gel_parser")) {
      jp().storePayload({
        isJspb: false
      }, a.payload);
    }
    lp(a);
    var c = mp(a);
    var d = new Map();
    d.set(c, [a.payload]);
    var e = np(a.payload) || "";
    if (a = Xo(b)) {
      Wo(a);
    }
    return new gf(function (f, g) {
      if (To && To.isReady()) {
        zp(d, To, f, g, {
          bypassNetworkless: true
        }, true, sp(e));
      } else {
        f();
      }
    });
  }
}
function up(a, b, c) {
  if (b.endpoint === "log_event") {
    lp(undefined, b);
    var d = mp(b, true);
    var e = new Map();
    e.set(d, [Qc(b.payload)]);
    if (b = Xo(c)) {
      Wo(b);
    }
    return new gf(function (f) {
      if (To && To.isReady()) {
        Ap(e, To, f, {
          bypassNetworkless: true
        }, true, sp(a));
      } else {
        f();
      }
    });
  }
}
function mp(a, b) {
  var c = "";
  if (a.dangerousLogToVisitorSession) {
    c = "visitorOnlyApprovedKey";
  } else if (a.cttAuthInfo) {
    if (b === undefined ? 0 : b) {
      b = a.cttAuthInfo.token;
      c = a.cttAuthInfo;
      var d = new Wh();
      if (c.videoId) {
        d.setVideoId(c.videoId);
      } else if (c.playlistId) {
        ed(d, 2, sd, Jc(c.playlistId));
      }
      hp[b] = d;
    } else {
      b = a.cttAuthInfo;
      c = {};
      if (b.videoId) {
        c.videoId = b.videoId;
      } else if (b.playlistId) {
        c.playlistId = b.playlistId;
      }
      gp[a.cttAuthInfo.token] = c;
    }
    c = a.cttAuthInfo.token;
  }
  return c;
}
function vp(a, b, c) {
  a = a === undefined ? {} : a;
  b = b === undefined ? false : b;
  new gf(function (d, e) {
    var f = wp(b, c);
    Bp(f.j);
    Bp(f.i);
    f.i = 0;
    if (To && To.isReady()) {
      var g = f.h;
      f.h = false;
      if (T("enable_web_tiered_gel") && T("web_vss_routing_check_all_tier_policies")) {
        f = wp(b, 300);
        var h = wp(b, 200);
        g = g || f.h || h.h;
        f.h = false;
        h.h = false;
      }
      if (c === undefined && T("enable_web_tiered_gel")) {
        Cp(d, e, a, b, 300, g);
      } else {
        Cp(d, e, a, b, c, g);
      }
    } else {
      yp(b, c);
      d();
    }
  });
}
function Cp(a, b, c, d, e, f) {
  var g = To;
  c = c === undefined ? {} : c;
  d = d === undefined ? false : d;
  e = e === undefined ? 200 : e;
  f = f === undefined ? false : f;
  var h = new Map();
  var k = new Map();
  var l = {
    isJspb: d,
    cttAuthInfo: undefined,
    tier: e
  };
  var m = {
    isJspb: d,
    cttAuthInfo: undefined
  };
  if (d) {
    b = v(Object.keys(ip));
    e = b.next();
    try {
      for (; !e.done; e = b.next()) {
        var n = e.value;
        var q = T("enable_web_tiered_gel") ? jp().smartExtractMatchingEntries({
          keys: [l, m],
          sizeLimit: 1000
        }) : jp().extractMatchingEntries({
          isJspb: true,
          cttAuthInfo: n
        });
        if (q.length > 0) {
          h.set(n, q);
        }
        if (T("web_fp_via_jspb_and_json") && c.writeThenSend || !T("web_fp_via_jspb_and_json")) {
          delete ip[n];
        }
      }
    } finally {
      A(b, e);
    }
    Ap(h, g, a, c, false, f);
  } else {
    h = v(Object.keys(ip));
    l = h.next();
    try {
      for (; !l.done; l = h.next()) {
        var p = l.value;
        var x = T("enable_web_tiered_gel") ? jp().smartExtractMatchingEntries({
          keys: [{
            isJspb: false,
            cttAuthInfo: p,
            tier: e
          }, {
            isJspb: false,
            cttAuthInfo: p
          }],
          sizeLimit: 1000
        }) : jp().extractMatchingEntries({
          isJspb: false,
          cttAuthInfo: p
        });
        if (x.length > 0) {
          k.set(p, x);
        }
        if (T("web_fp_via_jspb_and_json") && c.writeThenSend || !T("web_fp_via_jspb_and_json")) {
          delete ip[p];
        }
      }
    } finally {
      A(h, l);
    }
    zp(k, g, a, b, c, false, f);
  }
}
function yp(a, b) {
  function c() {
    vp({
      writeThenSend: true
    }, a, b);
  }
  a = a === undefined ? false : a;
  b = b === undefined ? 200 : b;
  var d = wp(a, b);
  var e = d === bp || d === ap ? 5000 : Ro;
  if (T("web_gel_timeout_cap") && !d.i) {
    e = xp(function () {
      c();
    }, e);
    d.i = e;
  }
  Bp(d.j);
  e = S("LOGGING_BATCH_TIMEOUT", Hi("web_gel_debounce_ms", 10000));
  if (T("shorten_initial_gel_batch_timeout") && dp) {
    e = Qo;
  }
  e = xp(function () {
    if (Hi("gel_min_batch_size") > 0) {
      if (jp().getSequenceCount({
        cttAuthInfo: undefined,
        isJspb: a,
        tier: b
      }) >= So) {
        c();
      }
    } else {
      c();
    }
  }, e);
  d.j = e;
}
function Dp(a) {
  ni(a, undefined, undefined, undefined, true);
}
function zp(a, b, c, d, e, f, g) {
  e = e === undefined ? {} : e;
  if (a.size === 0) {
    c();
  } else {
    var h = Math.round(V());
    var k = a.size;
    a = v(a);
    var l = a.next();
    try {
      for (var m = {}; !l.done; m = {
        Pb: undefined,
        Yb: undefined,
        Sb: undefined,
        batchRequest: undefined,
        dangerousLogToVisitorSession: undefined,
        ec: undefined,
        dc: undefined,
        hc: undefined
      }, l = a.next()) {
        var n = v(l.value);
        var q = n.next().value;
        var p = n.next().value;
        var x = q;
        var y = p;
        m.batchRequest = Ed({
          context: Zl(b.config_ || Yl())
        });
        if (!Ha(y) && !T("throw_err_when_logevent_malformed_killswitch")) {
          d();
          break;
        }
        var z = g || T("web_vss_routing_check_all_tier_policies") && Array.isArray(y) && y.some(function (D) {
          return sp(np(D) || "");
        });
        m.Sb = Ep(z);
        m.batchRequest.events = y;
        var H = gp[x];
        if (H) {
          Fp(m.batchRequest, x, H);
        }
        delete gp[x];
        m.dangerousLogToVisitorSession = x === "visitorOnlyApprovedKey";
        Gp(m.batchRequest, h, m.dangerousLogToVisitorSession);
        Hp(e);
        m.ec = function (D) {
          if (T("start_client_gcf")) {
            Ee.sa(function () {
              return C(function (P) {
                return P.h(Ip(D), 0);
              });
            });
          }
          k--;
          if (!k) {
            c();
          }
        };
        m.Yb = 0;
        m.Pb = false;
        m.hc = function (D) {
          return function (P) {
            if (!D.Pb) {
              D.Pb = true;
              Dp(P);
              k--;
              d();
            }
          };
        }(m);
        m.dc = function (D) {
          return function () {
            D.Yb++;
            if (e.bypassNetworkless && D.Yb === 1) {
              try {
                $m(b, D.Sb, D.batchRequest, Jp({
                  writeThenSend: true
                }, D.dangerousLogToVisitorSession, D.ec, D.dc, f));
                dp = false;
                return;
              } catch (P) {
                (0, D.hc)(P);
                return;
              }
            }
            k--;
            if (!k) {
              c();
            }
          };
        }(m);
        try {
          $m(b, m.Sb, m.batchRequest, Jp(e, m.dangerousLogToVisitorSession, m.ec, m.dc, f));
          dp = false;
        } catch (D) {
          (0, m.hc)(D);
        }
      }
    } finally {
      A(a, l);
    }
  }
}
function Ap(a, b, c, d, e, f) {
  d = d === undefined ? {} : d;
  if (a.size === 0) {
    c();
  } else {
    var g = Math.round(V());
    var h = {
      value: a.size
    };
    var k = new Map([].concat(w(a)));
    k = v(k);
    var l = k.next();
    try {
      for (var m = {}; !l.done; m = {
        Sa: undefined
      }, l = k.next()) {
        var n = v(l.value).next().value;
        m.Sa = n;
        var q = a.get(m.Sa);
        var p = function (Y) {
          return function (pa) {
            delete hp[Y.Sa];
            fp.delete(ep);
            Dp(pa);
            h.value--;
            if (!h.value) {
              c();
            }
          };
        }(m);
        var x = new Xh();
        try {
          var y = fm(b.config_ || Yl());
          kd(x, Oh, 1, y);
          var z = hp[m.Sa];
          if (z) {
            Kp(x, m.Sa, z);
          }
          delete hp[m.Sa];
        } catch (Y) {
          p(Y);
          continue;
        }
        var H = m.Sa === "visitorOnlyApprovedKey";
        Lp(x, g, H);
        Hp(d);
        if (T("jspb_serialize_with_worker")) {
          var D = Go();
          if (D && d.writeThenSend) {
            fp.set(ep, {
              client: b,
              resolve: c,
              networklessOptions: d,
              isIsolated: e,
              useVSSEndpoint: f,
              dangerousLogToVisitorSession: H,
              requestsOutstanding: h
            });
            try {
              D.postMessage({
                op: "gelBatchToSerialize",
                batchRequest: Qc(x),
                clientEvents: q,
                key: ep
              });
            } catch (Y) {
              p(Y);
              break;
            }
            ep++;
            break;
          }
        }
        var P = undefined;
        try {
          P = Mp(x, q);
        } catch (Y) {
          p(Y);
          continue;
        }
        Np(P, b, c, d, e, f, H, h);
      }
    } finally {
      A(k, l);
    }
  }
}
function Mp(a, b) {
  if (b) {
    var c = [];
    for (var d = 0; d < b.length; d++) {
      try {
        c.push(new Th(b[d]));
      } catch (e) {
        Dp(new Yh("Transport failed to deserialize " + String(b[d])));
      }
    }
    b = c;
  } else {
    b = [];
  }
  b = v(b);
  c = b.next();
  try {
    for (; !c.done; c = b.next()) {
      ld(a, 3, Th, c.value);
    }
  } finally {
    A(b, c);
  }
  b = {
    startTime: V(),
    ticks: {},
    infos: {}
  };
  a = JSON.stringify(Qc(a));
  b.ticks.geljspc = V();
  if (T("log_jspb_serialize_latency")) {
    Om("gel_jspb_serialize", b, {
      sampleRate: 0.1
    });
  }
  return a;
}
function Np(a, b, c, d, e, f, g, h) {
  function k(m) {
    if (!l) {
      l = true;
      Dp(m);
      h.value--;
      if (!h.value) {
        c();
      }
    }
  }
  d = d === undefined ? {} : d;
  h = h === undefined ? {
    value: 0
  } : h;
  f = Ep(f);
  var l = false;
  d = Jp(d, g, function (m) {
    if (T("start_client_gcf")) {
      Ee.sa(function () {
        return C(function (n) {
          return n.h(Ip(m), 0);
        });
      });
    }
    h.value--;
    if (!h.value) {
      c();
    }
  }, function () {
    h.value--;
    if (!h.value) {
      c();
    }
  }, e);
  d.headers["Content-Type"] = "application/json+protobuf";
  d.postBodyFormat = "JSPB";
  d.postBody = a;
  try {
    $m(b, f, "", d);
    dp = false;
  } catch (m) {
    k(m);
  }
}
function Hp(a) {
  if (T("always_send_and_write")) {
    a.writeThenSend = false;
  }
}
function Jp(a, b, c, d, e) {
  a = {
    retry: true,
    onSuccess: c,
    onError: d,
    networklessOptions: a,
    dangerousLogToVisitorSession: b,
    fe: !!e,
    headers: {},
    postBodyFormat: "",
    postBody: "",
    compress: T("compress_gel") || T("compress_gel_lr")
  };
  if (Op()) {
    a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(V()));
  }
  return a;
}
function Gp(a, b, c) {
  if (!Op()) {
    a.requestTimeMs = String(b);
  }
  if (T("unsplit_gel_payloads_in_logs")) {
    a.unsplitGelPayloadsInLogs = true;
  }
  if (!c && (b = S("EVENT_ID"))) {
    c = Pp();
    a.serializedClientEventId = {
      serializedEventId: b,
      clientCounter: String(c)
    };
  }
}
function Lp(a, b, c) {
  if (!Op()) {
    cd(a, 2, Ic(b));
  }
  if (!c && (b = S("EVENT_ID"))) {
    c = Pp();
    var d = new Vh();
    M(d, 1, b);
    cd(d, 2, Ic(c));
    kd(a, Vh, 5, d);
  }
}
function Pp() {
  var a = S("BATCH_CLIENT_COUNTER") || 0;
  a ||= Math.floor(Math.random() * 65535 / 2);
  a++;
  if (a > 65535) {
    a = 1;
  }
  ji("BATCH_CLIENT_COUNTER", a);
  return a;
}
function Fp(a, b, c) {
  if (c.videoId) {
    var d = "VIDEO";
  } else if (c.playlistId) {
    d = "PLAYLIST";
  } else {
    return;
  }
  a.credentialTransferTokenTargetId = c;
  a.context = a.context || {};
  a.context.user = a.context.user || {};
  a.context.user.credentialTransferTokens = [{
    token: b,
    scope: d
  }];
}
function Kp(a, b, c) {
  if (c.getVideoId()) {
    var d = 1;
  } else if (c.getPlaylistId()) {
    d = 2;
  } else {
    return;
  }
  kd(a, Wh, 4, c);
  a = id(a, Oh, 1) || new Oh();
  c = id(a, Nh, 3) || new Nh();
  var e = new Mh();
  e.setToken(b);
  td(e, 1, d);
  ld(c, 12, Mh, e);
  kd(a, Nh, 3, c);
}
function lp(a, b) {
  var c = Gi("il_payload_scraping");
  c = (c !== undefined ? String(c) : "") === "enable_il_payload_scraping";
  if (!F("yt.logging.transport.enableScrapingForTest")) {
    if (c) {
      Do = [];
      G("yt.logging.transport.enableScrapingForTest", true);
      G("yt.logging.transport.scrapedPayloadsForTesting", Do);
      G("yt.logging.transport.payloadToScrape", "visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" "));
      G("yt.logging.transport.getScrapedPayloadFromClientEventsFunction");
      G("yt.logging.transport.scrapeClientEvent", true);
    } else {
      return;
    }
  }
  c = F("yt.logging.transport.scrapedPayloadsForTesting");
  var d = F("yt.logging.transport.payloadToScrape");
  if (b &&= F("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)()) {
    c.push(b);
  }
  b = F("yt.logging.transport.scrapeClientEvent");
  if (d && d.length >= 1) {
    for (var e = 0; e < d.length; e++) {
      if (a && a.payload[d[e]]) {
        if (b) {
          c.push(a.payload);
        } else {
          var f = undefined;
          c.push(((f = a) == null ? undefined : f.payload)[d[e]]);
        }
      }
    }
  }
  G("yt.logging.transport.scrapedPayloadsForTesting", c);
}
function Op() {
  return T("use_request_time_ms_header");
}
function xp(a, b) {
  if (T("transport_use_scheduler") === false) {
    return Ji(a, b);
  } else if (T("logging_avoid_blocking_during_navigation") || T("lr_logging_avoid_blocking_during_navigation")) {
    return Aj(function () {
      if (Co().currentState === "none") {
        a();
      } else {
        var c = {};
        Co().install((c.none = {
          callback: a
        }, c));
      }
    }, b);
  } else {
    return Aj(a, b);
  }
}
function Bp(a) {
  if (T("transport_use_scheduler")) {
    Ee.ha(a);
  } else {
    window.clearTimeout(a);
  }
}
function Ip(a) {
  var b;
  var c;
  var d;
  var e;
  var f;
  var g;
  var h;
  var k;
  var l;
  var m;
  var n;
  var q;
  var p;
  var x;
  var y;
  return C(function (z) {
    if (z.i == 1) {
      d = (b = a) == null ? undefined : (c = b.responseContext) == null ? undefined : c.globalConfigGroup;
      var H = d ? d[nh.name] : undefined;
      e = H;
      g = (f = d) == null ? undefined : f.hotHashData;
      H = d ? d[mh.name] : undefined;
      h = H;
      l = (k = d) == null ? undefined : k.coldHashData;
      if (m = io().resolve(new Zn(Tl))) {
        if (g) {
          if (e) {
            return z.h(Vl(m, g, e), 3);
          } else {
            return z.h(Vl(m, g), 3);
          }
        } else {
          return z.v(3);
        }
      } else {
        return z.v(2);
      }
    }
    if (z.i != 2) {
      if (l) {
        if (h) {
          return z.h(Wl(m, l, h), 2);
        } else {
          return z.h(Wl(m, l), 2);
        }
      } else {
        return z.v(2);
      }
    }
    q = (n = d) == null ? undefined : n.rawFinchStaticConfigGroup;
    x = (p = d) == null ? undefined : p.finchStaticHashData;
    if (!x) {
      if (q) {
        pi(new Yh("Finch config data is present, but hash is missing."));
      }
      return z.return();
    }
    y = io().resolve(new Zn(Po));
    if (y) {
      return z.h(y.re({
        config: q || {},
        ge: x || ""
      }, "INNERTUBE_RESPONSE"), 0);
    } else {
      if (q || x) {
        pi(new Yh("FinchConfigManagerService is not present, but Finch config data is present."));
      }
      return z.v(0);
    }
  });
}
function wp(a, b) {
  b = b === undefined ? 200 : b;
  if (a) {
    if (b === 300) {
      return bp;
    } else {
      return $o;
    }
  } else if (b === 300) {
    return ap;
  } else {
    return Zo;
  }
}
function op(a) {
  if (T("enable_web_tiered_gel")) {
    a = wn[a || ""];
    var b;
    var c;
    var d;
    var e = io().resolve(new Zn(Tl)) == null ? undefined : (b = Ul()) == null ? undefined : (c = b.loggingHotConfig) == null ? undefined : (d = c.eventLoggingConfig) == null ? undefined : d.payloadPolicies;
    if (e) {
      for (b = 0; b < e.length; b++) {
        if (e[b].payloadNumber === a) {
          return e[b];
        }
      }
    }
  }
}
function np(a) {
  a = Object.keys(a);
  a = v(a);
  var b = a.next();
  try {
    for (; !b.done; b = a.next()) {
      var c = b.value;
      if (wn[c]) {
        return c;
      }
    }
  } finally {
    A(a, b);
  }
}
function pp(a) {
  switch (a) {
    case "DELAYED_EVENT_TIER_UNSPECIFIED":
      return 0;
    case "DELAYED_EVENT_TIER_DEFAULT":
      return 100;
    case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
      return 200;
    case "DELAYED_EVENT_TIER_FAST":
      return 300;
    case "DELAYED_EVENT_TIER_IMMEDIATE":
      return 400;
    default:
      return 200;
  }
}
function sp(a) {
  return a === "gelDebuggingEvent" || a === "watchTimeSegment";
}
function Ep(a) {
  if ((a === undefined ? 0 : a) && T("vss_through_gel_video_stats")) {
    return "video_stats";
  } else {
    return "log_event";
  }
}
;
var Qp = E.ytLoggingGelSequenceIdObj_ || {};
G("ytLoggingGelSequenceIdObj_", Qp);
function Rp(a, b, c, d) {
  d = d === undefined ? {} : d;
  var e = {};
  var f = Math.round(d.timestamp || V());
  e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
  e[a] = b;
  a = Xn();
  e.context = {
    lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
  };
  if (d.sequenceGroup && !T("web_gel_sequence_info_killswitch")) {
    a = e.context;
    b = d.sequenceGroup;
    b = {
      index: Sp(b),
      groupKey: b
    };
    a.sequence = b;
    if (d.endOfSequence) {
      delete Qp[d.sequenceGroup];
    }
  }
  if (T("web_tag_automated_log_events")) {
    e.context.automatedLogEventSource = d.automatedLogEventSource;
  }
  (d.sendIsolatedPayload ? qp : kp)({
    endpoint: "log_event",
    payload: e,
    cttAuthInfo: d.cttAuthInfo,
    dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
  }, c);
}
function Sp(a) {
  Qp[a] = a in Qp ? Qp[a] + 1 : 0;
  return Qp[a];
}
;
var Tp = [];
function Up(a, b, c) {
  c = c === undefined ? {} : c;
  var d = Vn;
  if (S("ytLoggingEventsDefaultDisabled", false) && Vn === Vn) {
    d = null;
  }
  Rp(a, b, d, c);
}
;
var Vp = new Set();
var Wp = 0;
var Xp = 0;
var Yp = 0;
var Zp = [];
var $p = [];
var aq = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];
function bq(a) {
  cq(a);
}
function cq(a, b) {
  b = b === undefined ? "ERROR" : b;
  var c = c === undefined ? {} : c;
  var d = d === undefined ? false : d;
  c.name = S("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
  c.version = S("INNERTUBE_CONTEXT_CLIENT_VERSION");
  var e = c;
  var f = b;
  var g = d;
  f = f === undefined ? "ERROR" : f;
  g = g === undefined ? false : g;
  if (a) {
    if (a.hasOwnProperty("level") && a.level) {
      f = a.level;
    }
    if (T("wiz_enable_metadata_extraction_killswitch")) {
      var h = e;
      var k;
      if ((k = h) == null || !k.componentStack) {
        var l;
        var m = (l = a.Rc) == null ? undefined : l.ad;
        if (m) {
          h ||= {};
          h.componentStack = m;
        }
      }
      e = h || e;
    } else {
      var n = e;
      n = n === undefined ? {} : n;
      var q = a.Rc;
      if (q) {
        var p = q.fd;
        var x = q.je;
        var y;
        var z = [["componentStack", q.ad], ["wizTagName", q.tagName], ["wizOwnerTrace", (y = q.qe) == null ? undefined : y.join(" > ")], ["errorSeverity", p == null ? undefined : p.toString()], ["wizFeatureFlags", x ? Object.entries(x).join("\n") : undefined]];
        var H = v(z);
        var D = H.next();
        try {
          for (; !D.done; D = H.next()) {
            var P = v(D.value);
            var Y = P.next().value;
            var pa = P.next().value;
            if (pa !== undefined) {
              n[Y] = pa;
            }
          }
        } finally {
          A(H, D);
        }
      }
      e = n;
      var Gb;
      var za = (Gb = a.Rc) == null ? undefined : Gb.fd;
      if (za !== undefined && f !== "IGNORED") {
        f = za >= 3 ? "ERROR" : "WARNING";
      }
    }
    if (T("console_log_js_exceptions") || ["test", "dev", "autopush", "staging"].includes(S("SERVER_VERSION"))) {
      var Z = [];
      Z.push("Name: " + a.name);
      Z.push("Message: " + a.message);
      if (a.hasOwnProperty("params")) {
        Z.push("Error Params: " + JSON.stringify(a.params));
      }
      if (a.hasOwnProperty("args")) {
        Z.push("Error args: " + JSON.stringify(a.args, null, 2));
      }
      Z.push("File name: " + a.fileName);
      Z.push("Stacktrace: " + a.stack);
      window.console.log(Z.join("\n"), a);
    }
    if (!(Wp >= 5)) {
      var ba = e;
      var qa = [];
      var oa = v($p);
      var Ke = oa.next();
      try {
        for (; !Ke.done; Ke = oa.next()) {
          var im = Ke.value;
          try {
            if (im()) {
              qa.push(im());
            }
          } catch (ur) {}
        }
      } finally {
        A(oa, Ke);
      }
      var wh = [].concat(w(Zp), w(qa));
      var qd = gb(a);
      var jm = qd.message || "Unknown Error";
      var km = qd.name || "UnknownError";
      var Le = qd.stack || a.xe || "Not available";
      if (Le.startsWith(km + ": " + jm)) {
        var lm = Le.split("\n");
        lm.shift();
        Le = lm.join("\n");
      }
      var br = qd.lineNumber || "Not available";
      var cr = qd.fileName || "Not available";
      var dr = Le;
      var vb = 0;
      if (a.hasOwnProperty("args") && a.args && a.args.length) {
        for (var Me = 0; Me < a.args.length && !(vb = kj(a.args[Me], "params." + Me, ba, vb), vb >= 500); Me++);
      } else if (a.hasOwnProperty("params") && a.params) {
        var Ne = a.params;
        if (typeof a.params === "object") {
          for (var xh in Ne) {
            if (Ne[xh]) {
              var mm = "params." + xh;
              var nm = mj(Ne[xh]);
              ba[mm] = nm;
              vb += mm.length + nm.length;
              if (vb > 500) {
                break;
              }
            }
          }
        } else {
          ba.params = mj(Ne);
        }
      }
      if (wh.length) {
        for (var Oe = 0; Oe < wh.length && !(vb = kj(wh[Oe], "params.context." + Oe, ba, vb), vb >= 500); Oe++);
      }
      if (navigator.vendor && !ba.hasOwnProperty("vendor")) {
        ba["device.vendor"] = navigator.vendor;
      }
      var K = {
        message: jm,
        name: km,
        lineNumber: br,
        fileName: cr,
        stack: dr,
        params: ba,
        sampleWeight: 1
      };
      var om = Number(a.columnNumber);
      if (!isNaN(om)) {
        K.lineNumber = K.lineNumber + ":" + om;
      }
      if (a.level === "IGNORED") {
        var Pe = 0;
      } else {
        a: {
          var pm = fj();
          var yh = v(pm.Aa);
          var Qe = yh.next();
          try {
            for (; !Qe.done; Qe = yh.next()) {
              var qm = Qe.value;
              if (K.message && K.message.match(qm.yd)) {
                Pe = qm.weight;
                break a;
              }
            }
          } finally {
            A(yh, Qe);
          }
          var zh = v(pm.va);
          var Re = zh.next();
          try {
            for (; !Re.done; Re = zh.next()) {
              var rm = Re.value;
              if (rm.callback(K)) {
                Pe = rm.weight;
                break a;
              }
            }
          } finally {
            A(zh, Re);
          }
          Pe = 1;
        }
      }
      K.sampleWeight = Pe;
      var Ah = v($i);
      var Se = Ah.next();
      try {
        for (; !Se.done; Se = Ah.next()) {
          var Bh = Se.value;
          if (Bh.Gb[K.name]) {
            var Ch = v(Bh.Gb[K.name]);
            var Te = Ch.next();
            try {
              for (; !Te.done; Te = Ch.next()) {
                var sm = Te.value;
                var Ue = K.message.match(sm.ba);
                if (Ue) {
                  K.params["params.error.original"] = Ue[0];
                  for (var Dh = sm.groups, tm = {}, qc = 0; qc < Dh.length; qc++) {
                    tm[Dh[qc]] = Ue[qc + 1];
                    K.params["params.error." + Dh[qc]] = Ue[qc + 1];
                  }
                  K.message = Bh.Xb(tm);
                  break;
                }
              }
            } finally {
              A(Ch, Te);
            }
          }
        }
      } finally {
        A(Ah, Se);
      }
      K.params ||= {};
      var um = fj();
      K.params["params.errorServiceSignature"] = "msg=" + um.Aa.length + "&cb=" + um.va.length;
      K.params["params.serviceWorker"] = "false";
      if (E.document && E.document.querySelectorAll) {
        K.params["params.fscripts"] = String(document.querySelectorAll("script:not([nonce])").length);
      }
      if (window.yterr && typeof window.yterr === "function") {
        window.yterr(K);
      }
      if (K.sampleWeight !== 0 && !Vp.has(K.message)) {
        if (g) {
          var Ve = f;
          Ve = Ve === undefined ? "ERROR" : Ve;
          dq(K);
          eq(Ve, K);
        } else {
          var Lb = f;
          Lb = Lb === undefined ? "ERROR" : Lb;
          dq(K);
          if (Lb === "ERROR") {
            hj.publish("handleError", K);
            if (T("record_app_crashed_web") && Yp === 0 && K.sampleWeight === 1) {
              Yp++;
              var xm = {
                appCrashType: "APP_CRASH_TYPE_BREAKPAD"
              };
              if (!T("report_client_error_with_app_crash_ks")) {
                xm.systemHealth = {
                  crashData: {
                    clientError: {
                      logMessage: {
                        message: K.message
                      }
                    }
                  }
                };
              }
              Up("appCrashed", xm);
            }
            Xp++;
          } else if (Lb === "WARNING") {
            hj.publish("handleWarning", K);
          }
          if (T("kevlar_gel_error_routing")) {
            var Eh = Lb;
            var va = undefined;
            va = va === undefined ? {} : va;
            b: {
              var Fh = v(aq);
              var We = Fh.next();
              try {
                for (; !We.done; We = Fh.next()) {
                  var ym = ub();
                  if (ym && ym.toLowerCase().indexOf(We.value.toLowerCase()) >= 0) {
                    var zm = true;
                    break b;
                  }
                }
              } finally {
                A(Fh, We);
              }
              zm = false;
            }
            if (zm) {
              var Am = undefined;
            } else {
              var rd = {
                stackTrace: K.stack
              };
              if (K.fileName) {
                rd.filename = K.fileName;
              }
              var fb = K.lineNumber && K.lineNumber.split ? K.lineNumber.split(":") : [];
              if (fb.length !== 0) {
                if (fb.length !== 1 || isNaN(Number(fb[0]))) {
                  if (fb.length === 2 && !isNaN(Number(fb[0])) && !isNaN(Number(fb[1]))) {
                    rd.lineNumber = Number(fb[0]);
                    rd.columnNumber = Number(fb[1]);
                  }
                } else {
                  rd.lineNumber = Number(fb[0]);
                }
              }
              var Gh = {
                level: "ERROR_LEVEL_UNKNOWN",
                message: K.message,
                errorClassName: K.name,
                sampleWeight: K.sampleWeight
              };
              if (Eh === "ERROR") {
                Gh.level = "ERROR_LEVEL_ERROR";
              } else if (Eh === "WARNING") {
                Gh.level = "ERROR_LEVEL_WARNNING";
              }
              var er = {
                isObfuscated: true,
                browserStackInfo: rd
              };
              va.pageUrl = window.location.href;
              va.kvPairs = [];
              if (S("FEXP_EXPERIMENTS")) {
                va.experimentIds = S("FEXP_EXPERIMENTS");
              }
              var Hh = S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
              var Bm = ii.EXPERIMENT_FLAGS;
              if ((!Bm || !Bm.web_disable_gel_stp_ecatcher_killswitch) && Hh) {
                var Ih = v(Object.keys(Hh));
                var Xe = Ih.next();
                try {
                  for (; !Xe.done; Xe = Ih.next()) {
                    var Cm = Xe.value;
                    va.kvPairs.push({
                      key: Cm,
                      value: String(Hh[Cm])
                    });
                  }
                } finally {
                  A(Ih, Xe);
                }
              }
              var Jh = K.params;
              if (Jh) {
                var Kh = v(Object.keys(Jh));
                var Ye = Kh.next();
                try {
                  for (; !Ye.done; Ye = Kh.next()) {
                    var Dm = Ye.value;
                    va.kvPairs.push({
                      key: "client." + Dm,
                      value: String(Jh[Dm])
                    });
                  }
                } finally {
                  A(Kh, Ye);
                }
              }
              var Em;
              var Fm = (Em = K.params) == null ? undefined : Em.sessionReplayId;
              if (Fm) {
                va.sessionReplayId = String(Fm);
              }
              var Gm = S("SERVER_NAME");
              var Hm = S("SERVER_VERSION");
              if (Gm && Hm) {
                va.kvPairs.push({
                  key: "server.name",
                  value: Gm
                });
                va.kvPairs.push({
                  key: "server.version",
                  value: Hm
                });
              }
              var Im = S("PLAYER_CLIENT_VERSION");
              if (Im) {
                va.kvPairs.push({
                  key: "client.player.version",
                  value: Im
                });
              }
              Am = {
                errorMetadata: va,
                stackTrace: er,
                logMessage: Gh
              };
            }
            var Jm = Am;
            if (Jm && (Up("clientError", Jm), Eh === "ERROR" || T("errors_flush_gel_always_killswitch"))) {
              a: {
                if (T("web_fp_via_jspb")) {
                  var Ze = true;
                  Ze = Ze === undefined ? false : Ze;
                  var Km = Tp;
                  Tp = [];
                  if (Km) {
                    var Lh = v(Km);
                    var $e = Lh.next();
                    try {
                      for (; !$e.done; $e = Lh.next()) {
                        var rc = $e.value;
                        if (Ze) {
                          Rp(rc.Bd, rc.payload, Vn, rc.options);
                        } else {
                          Up(rc.Bd, rc.payload, rc.options);
                        }
                      }
                    } finally {
                      A(Lh, $e);
                    }
                  }
                  vp(undefined, true);
                  if (!T("web_fp_via_jspb_and_json")) {
                    break a;
                  }
                }
                vp(undefined, false);
              }
            }
          }
          if (!T("suppress_error_204_logging")) {
            eq(Lb, K);
          }
        }
      }
    }
  }
}
function dq(a) {
  try {
    Vp.add(a.message);
  } catch (b) {}
  Wp++;
}
function eq(a, b) {
  var c = b.params || {};
  a = {
    urlParams: {
      a: "logerror",
      t: "jserror",
      type: b.name,
      msg: b.message.substr(0, 250),
      line: b.lineNumber,
      level: a,
      "client.name": c.name
    },
    postParams: {
      url: S("PAGE_NAME", window.location.href),
      file: b.fileName
    },
    method: "POST"
  };
  if (c.version) {
    a["client.version"] = c.version;
  }
  if (a.postParams) {
    if (b.stack) {
      a.postParams.stack = b.stack;
    }
    b = v(Object.keys(c));
    var d = b.next();
    try {
      for (; !d.done; d = b.next()) {
        var e = d.value;
        a.postParams["client." + e] = c[e];
      }
    } finally {
      A(b, d);
    }
    if (c = S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")) {
      e = v(Object.keys(c));
      b = e.next();
      try {
        for (; !b.done; b = e.next()) {
          var f = b.value;
          a.postParams[f] = c[f];
        }
      } finally {
        A(e, b);
      }
    }
    if (f = S("LAVA_VERSION")) {
      a.postParams["lava.version"] = f;
    }
    f = S("SERVER_NAME");
    c = S("SERVER_VERSION");
    if (f && c) {
      a.postParams["server.name"] = f;
      a.postParams["server.version"] = c;
    }
    if (f = S("PLAYER_CLIENT_VERSION")) {
      a.postParams["client.player.version"] = f;
    }
  }
  Ri(S("ECATCHER_REPORT_HOST", "") + "/error_204", a);
}
;
function fq(a) {
  this.i = a;
}
function gq() {
  var a = fq.instance;
  var b = b === undefined ? false : b;
  return C(function (c) {
    if (b || !a.h) {
      a.h = hq(a).then(a.j).catch(function (d) {
        delete a.h;
        cq(d);
      });
    }
    return c.return(a.h);
  });
}
fq.prototype.j = function (a) {
  var b = id(a, Zh, 2, Xb);
  if (b) {
    var c = nd(b, 5);
    if (c) {
      E.__SAPISID = c;
    }
    if (md(b, 10) != null) {
      ji("EOM_VISITOR_DATA", nd(b, 10));
    } else if (md(b, 7) != null) {
      ji("VISITOR_DATA", nd(b, 7));
    }
    if (Dc($c(b, 4)) != null) {
      c = String;
      var d = d === undefined ? 0 : d;
      var f = Dc($c(b, 4)) ?? d;
      ji("SESSION_INDEX", c(f));
    }
    if (md(b, 8) != null) {
      ji("DELEGATED_SESSION_ID", nd(b, 8));
    }
    if (md(b, 12) != null) {
      ji("USER_SESSION_ID", nd(b, 12));
    }
    if (md(b, 11) != null) {
      ji("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", nd(b, 11));
    }
  }
  return a;
};
function hq(a) {
  var b;
  var c;
  var d;
  return C(function (e) {
    if (e.i == 1) {
      return e.h(E.fetch(a.i), 2);
    }
    if (e.i != 3) {
      b = e.j;
      if (b.status !== 200) {
        return e.return(Promise.reject("Server error when retrieving AmbientData"));
      } else {
        return e.h(b.text(), 3);
      }
    }
    c = e.j;
    if (!c.startsWith(")]}'\n")) {
      return e.return(Promise.reject("Incorrect JSPB formatting"));
    }
    a: {
      var f = JSON.parse(c.substring(5));
      for (var g = 0; g < f.length; g++) {
        if (f[g][0] === $h.messageId) {
          f = new $h(f[g]);
          break a;
        }
      }
      f = null;
    }
    if (d = f) {
      return e.return(d);
    } else {
      return e.return(Promise.reject("AmbientData missing from response"));
    }
  });
}
;
var iq = Date.now().toString();
function jq() {
  a: {
    if (window.crypto && window.crypto.getRandomValues) {
      try {
        var a = new Uint8Array(16);
        window.crypto.getRandomValues(a);
        var b = a;
        break a;
      } catch (e) {}
    }
    b = new Uint8Array(16);
    for (a = 0; a < 16; a++) {
      for (var c = Date.now(), d = 0; d < c % 23; d++) {
        b[a] = Math.random();
      }
      b[a] = Math.floor(Math.random() * 256);
    }
    if (iq) {
      a = 1;
      c = 0;
      for (; c < iq.length; c++) {
        b[a % 16] ^= b[(a - 1) % 16] / 4 ^ iq.charCodeAt(c);
        a++;
      }
    }
  }
  a = [];
  for (c = 0; c < b.length; c++) {
    a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[c] & 63));
  }
  return a.join("");
}
;
var kq;
var lq = E.ytLoggingDocDocumentNonce_;
if (!lq) {
  lq = jq();
  G("ytLoggingDocDocumentNonce_", lq);
}
kq = lq;
function mq(a) {
  return S("client-screen-nonce-store", {})[a === undefined ? 0 : a];
}
function nq(a, b) {
  b = b === undefined ? 0 : b;
  var c = S("client-screen-nonce-store");
  if (!c) {
    c = {};
    ji("client-screen-nonce-store", c);
  }
  c[b] = a;
}
function oq(a) {
  a = a === undefined ? 0 : a;
  if (a === 0) {
    return "ROOT_VE_TYPE";
  } else {
    return "ROOT_VE_TYPE." + a;
  }
}
G("yt_logging_screen.getRootVeType", function (a) {
  return S(oq(a === undefined ? 0 : a));
});
function pq() {
  var a = S("csn-to-ctt-auth-info");
  if (!a) {
    a = {};
    ji("csn-to-ctt-auth-info", a);
  }
  return a;
}
function qq(a) {
  a = mq(a === undefined ? 0 : a);
  if (!a && !S("USE_CSN_FALLBACK", true)) {
    return null;
  }
  a ||= "UNDEFINED_CSN";
  if (a) {
    return a;
  } else {
    return null;
  }
}
G("yt_logging_screen.getCurrentCsn", qq);
function rq(a, b, c) {
  var d = pq();
  if (c = qq(c)) {
    delete d[c];
  }
  if (b) {
    d[a] = b;
  }
}
G("yt_logging_screen.getCttAuthInfo", function (a) {
  return pq()[a];
});
G("yt_logging_screen.setCurrentScreen", function (a, b, c, d) {
  c = c === undefined ? 0 : c;
  if (a !== mq(c) || b !== S(oq(c))) {
    rq(a, d, c);
    nq(a, c);
    ji(oq(c), b);
    b = function () {
      setTimeout(function () {
        if (a) {
          Up("foregroundHeartbeatScreenAssociated", {
            clientDocumentNonce: kq,
            clientScreenNonce: a
          });
        }
      }, 0);
    };
    if ("requestAnimationFrame" in window) {
      try {
        window.requestAnimationFrame(b);
      } catch (e) {
        b();
      }
    } else {
      b();
    }
  }
});
function sq() {
  this.h = {};
}
sq.prototype.get = function (a) {
  if (Object.prototype.hasOwnProperty.call(this.h, a)) {
    return this.h[a];
  }
};
sq.prototype.set = function (a, b) {
  this.h[a] = b;
};
sq.prototype.remove = function (a) {
  delete this.h[a];
};
function tq() {
  this.mappings = new sq();
}
tq.prototype.getModuleId = function (a) {
  return a.serviceId.getModuleId();
};
tq.prototype.get = function (a) {
  a: {
    var b = this.mappings.get(a.toString());
    switch (b.type) {
      case "mapping":
        a = b.value;
        break a;
      case "factory":
        b = b.value();
        this.mappings.set(a.toString(), {
          type: "mapping",
          value: b
        });
        a = b;
        break a;
      default:
        a = Za(b);
    }
  }
  return a;
};
new tq();
function uq(a) {
  var b;
  if (!(b = F("ytcsi." + (a || "") + "data_"))) {
    b = {
      tick: {},
      info: {}
    };
    G("ytcsi." + (a || "") + "data_", b);
  }
  return b;
}
function vq(a) {
  a = uq(a);
  a.tick ||= {};
  return a.tick;
}
function wq(a) {
  a = uq(a);
  if (a.gel) {
    var b = a.gel;
    b.gelInfos ||= {};
    b.gelTicks ||= {};
  } else {
    a.gel = {
      gelTicks: {},
      gelInfos: {}
    };
  }
  return a.gel;
}
function xq(a) {
  var b = uq(a).nonce;
  if (!b) {
    b = jq();
    uq(a).nonce = b;
  }
  return b;
}
;
var yq = Hi("ytcsi_debug_max_size", 100);
function zq() {
  var a = F("ytcsi.debug");
  if (!a) {
    a = [];
    G("ytcsi.debug", a);
    G("ytcsi.reference", {});
  }
  return a;
}
function Aq(a) {
  a = a || "";
  var b = F("ytcsi.reference");
  if (!b) {
    zq();
    b = F("ytcsi.reference");
  }
  if (b[a]) {
    return b[a];
  }
  var c = {
    timerName: a,
    info: {},
    tick: {},
    span: {},
    jspbInfo: []
  };
  var d = zq();
  d.push(c);
  if (T("limit_ytcsi_debug_array_size") && d.length > yq) {
    d.splice(0, d.length - yq);
  }
  return b[a] = c;
}
;
var Bq = {
  "analytics.explore": "LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",
  "artist.analytics": "LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",
  "artist.events": "LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",
  "artist.presskit": "LATENCY_ACTION_CREATOR_ARTIST_PROFILE",
  "asset.claimed_videos": "LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
  "asset.composition": "LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",
  "asset.composition_ownership": "LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",
  "asset.composition_policy": "LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",
  "asset.embeds": "LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",
  "asset.history": "LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",
  "asset.issues": "LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",
  "asset.licenses": "LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",
  "asset.metadata": "LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",
  "asset.ownership": "LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",
  "asset.potential_embeds": "LATENCY_ACTION_CREATOR_CMS_ASSET_POTENTIAL_EMBEDS",
  "asset.policy": "LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",
  "asset.references": "LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
  "asset.shares": "LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",
  "asset.sound_recordings": "LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",
  "asset_group.assets": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",
  "asset_group.campaigns": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
  "asset_group.claimed_videos": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",
  "asset_group.metadata": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",
  "song.analytics": "LATENCY_ACTION_CREATOR_SONG_ANALYTICS",
  creator_channel_dashboard: "LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
  "channel.analytics": "LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
  channel_appeal: "LATENCY_ACTION_CREATOR_CHANNEL_APPEAL",
  "channel.comments": "LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
  "channel.content": "LATENCY_ACTION_CREATOR_CONTENT",
  "channel.content.posts": "LATENCY_ACTION_CREATOR_POST_LIST",
  "channel.content.promotions": "LATENCY_ACTION_CREATOR_PROMOTION_LIST",
  "channel.copyright": "LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",
  "channel.editing": "LATENCY_ACTION_CREATOR_CHANNEL_EDITING",
  "channel.monetization": "LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",
  "channel.music": "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",
  "channel.music_storefront": "LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",
  "channel.playlists": "LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
  "channel.translations": "LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
  "channel.videos": "LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
  "channel.live_streaming": "LATENCY_ACTION_CREATOR_LIVE_STREAMING",
  "dialog.copyright_strikes": "LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
  "dialog.video_copyright": "LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",
  "dialog.uploads": "LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
  owner: "LATENCY_ACTION_CREATOR_CMS_DASHBOARD",
  "owner.allowlist": "LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",
  "owner.analytics": "LATENCY_ACTION_CREATOR_CMS_ANALYTICS",
  "owner.art_tracks": "LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",
  "owner.assets": "LATENCY_ACTION_CREATOR_CMS_ASSETS",
  "owner.asset_groups": "LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",
  "owner.bulk": "LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",
  "owner.campaigns": "LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",
  "owner.channel_invites": "LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",
  "owner.channels": "LATENCY_ACTION_CREATOR_CMS_CHANNELS",
  "owner.claimed_videos": "LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",
  "owner.claims": "LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
  "owner.claims.manual": "LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
  "owner.delivery": "LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
  "owner.delivery_templates": "LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",
  "owner.issues": "LATENCY_ACTION_CREATOR_CMS_ISSUES",
  "owner.licenses": "LATENCY_ACTION_CREATOR_CMS_LICENSES",
  "owner.pitch_music": "LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",
  "owner.policies": "LATENCY_ACTION_CREATOR_CMS_POLICIES",
  "owner.releases": "LATENCY_ACTION_CREATOR_CMS_RELEASES",
  "owner.reports": "LATENCY_ACTION_CREATOR_CMS_REPORTS",
  "owner.videos": "LATENCY_ACTION_CREATOR_CMS_VIDEOS",
  "playlist.videos": "LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",
  "post.comments": "LATENCY_ACTION_CREATOR_POST_COMMENTS",
  "post.edit": "LATENCY_ACTION_CREATOR_POST_EDIT",
  "promotion.edit": "LATENCY_ACTION_CREATOR_PROMOTION_EDIT",
  suspense_card_load_ask_studio_card: "LATENCY_ACTION_CREATOR_ASK_STUDIO_CARD",
  "video.analytics": "LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
  "video.claims": "LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",
  "video.comments": "LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",
  "video.copyright": "LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",
  "video.edit": "LATENCY_ACTION_CREATOR_VIDEO_EDIT",
  "video.editor": "LATENCY_ACTION_CREATOR_VIDEO_EDITOR",
  "video.editor_async": "LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC",
  "video.live_settings": "LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",
  "video.live_streaming": "LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",
  "video.monetization": "LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
  "video.policy": "LATENCY_ACTION_CREATOR_VIDEO_POLICY",
  "video.rights_management": "LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",
  "video.translations": "LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS"
};
var Cq = {
  auto_search: "LATENCY_ACTION_AUTO_SEARCH",
  ad_to_ad: "LATENCY_ACTION_AD_TO_AD",
  ad_to_video: "LATENCY_ACTION_AD_TO_VIDEO",
  app_startup: "LATENCY_ACTION_APP_STARTUP",
  browse: "LATENCY_ACTION_BROWSE",
  cast_splash: "LATENCY_ACTION_CAST_SPLASH",
  call_to_cast: "LATENCY_ACTION_CALL_TO_CAST",
  channel_activity: "LATENCY_ACTION_FAMILY_CENTER_CHANNEL_ACTIVITY",
  channels: "LATENCY_ACTION_CHANNELS",
  chips: "LATENCY_ACTION_CHIPS",
  commerce_transaction: "LATENCY_ACTION_COMMERCE_TRANSACTION",
  conversations: "LATENCY_ACTION_CONVERSATIONS",
  direct_playback: "LATENCY_ACTION_DIRECT_PLAYBACK",
  editor: "LATENCY_ACTION_EDITOR",
  embed: "LATENCY_ACTION_EMBED",
  embed_no_video: "LATENCY_ACTION_EMBED_NO_VIDEO",
  entity_key_serialization_perf: "LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",
  entity_key_deserialization_perf: "LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",
  explore: "LATENCY_ACTION_EXPLORE",
  favorites: "LATENCY_ACTION_FAVORITES",
  home: "LATENCY_ACTION_HOME",
  inboarding: "LATENCY_ACTION_INBOARDING",
  landing: "LATENCY_ACTION_LANDING",
  learning: "LATENCY_ACTION_LEARNING",
  learning_journey_browse: "LATENCY_ACTION_LEARNING_JOURNEY_BROWSE",
  learning_journey_watch: "LATENCY_ACTION_LEARNING_JOURNEY_WATCH",
  library: "LATENCY_ACTION_LIBRARY",
  live: "LATENCY_ACTION_LIVE",
  live_pagination: "LATENCY_ACTION_LIVE_PAGINATION",
  management: "LATENCY_ACTION_MANAGEMENT",
  mini_app: "LATENCY_ACTION_MINI_APP_PLAY",
  notification_settings: "LATENCY_ACTION_FAMILY_CENTER_NOTIFICATION_SETTINGS",
  onboarding: "LATENCY_ACTION_ONBOARDING",
  parent_profile_settings: "LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
  parent_tools_collection: "LATENCY_ACTION_PARENT_TOOLS_COLLECTION",
  parent_tools_dashboard: "LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",
  player_att: "LATENCY_ACTION_PLAYER_ATTESTATION",
  prebuffer: "LATENCY_ACTION_PREBUFFER",
  prefetch: "LATENCY_ACTION_PREFETCH",
  profile_settings: "LATENCY_ACTION_KIDS_PROFILE_SETTINGS",
  profile_switcher: "LATENCY_ACTION_LOGIN",
  projects: "LATENCY_ACTION_PROJECTS",
  reel_watch: "LATENCY_ACTION_REEL_WATCH",
  results: "LATENCY_ACTION_RESULTS",
  red: "LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",
  premium: "LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",
  premium_lite_upsell: "LATENCY_ACTION_PREMIUM_LITE_UPSELL",
  privacy_policy: "LATENCY_ACTION_FAMILY_CENTER_PRIVACY_POLICY",
  review: "LATENCY_ACTION_REVIEW",
  search_overview_answer: "LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",
  search_ui: "LATENCY_ACTION_SEARCH_UI",
  search_suggest: "LATENCY_ACTION_SUGGEST",
  search_zero_state: "LATENCY_ACTION_SEARCH_ZERO_STATE",
  secret_code: "LATENCY_ACTION_KIDS_SECRET_CODE",
  switchplan: "LATENCY_ACTION_UNPLUGGED_SWITCH_PLAN",
  seek: "LATENCY_ACTION_PLAYER_SEEK",
  settings: "LATENCY_ACTION_SETTINGS",
  store: "LATENCY_ACTION_STORE",
  supervisee_insights: "LATENCY_ACTION_FAMILY_CENTER_SUPERVISEE_INSIGHTS",
  supervisee_insight_details: "LATENCY_ACTION_FAMILY_CENTER_SUPERVISEE_INSIGHT_DETAILS",
  supervision_dashboard: "LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_DASHBOARD",
  bedtime_reminder_settings: "LATENCY_ACTION_FAMILY_CENTER_BEDTIME_REMINDER_SETTINGS",
  break_reminder_settings: "LATENCY_ACTION_FAMILY_CENTER_BREAK_REMINDER_SETTINGS",
  supervision_settings_dashboard: "LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_SETTINGS_DASHBOARD",
  time_management: "LATENCY_ACTION_FAMILY_CENTER_TIME_MANAGEMENT",
  update_profile: "LATENCY_ACTION_FAMILY_CENTER_UPDATE_PROFILE",
  viewing_permissions: "LATENCY_ACTION_FAMILY_CENTER_VIEWING_PERMISSIONS",
  shorts_settings: "LATENCY_ACTION_FAMILY_CENTER_SHORTS_SETTINGS",
  privacy_settings: "LATENCY_ACTION_FAMILY_CENTER_PRIVACY_SETTINGS",
  tenx: "LATENCY_ACTION_TENX",
  video_preview: "LATENCY_ACTION_VIDEO_PREVIEW",
  video_to_ad: "LATENCY_ACTION_VIDEO_TO_AD",
  watch: "LATENCY_ACTION_WATCH",
  watch_it_again: "LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",
  "watch,watch7": "LATENCY_ACTION_WATCH",
  "watch,watch7_html5": "LATENCY_ACTION_WATCH",
  "watch,watch7ad": "LATENCY_ACTION_WATCH",
  "watch,watch7ad_html5": "LATENCY_ACTION_WATCH",
  wn_comments: "LATENCY_ACTION_LOAD_COMMENTS",
  ww_rqs: "LATENCY_ACTION_WHO_IS_WATCHING",
  voice_assistant: "LATENCY_ACTION_VOICE_ASSISTANT",
  cast_load_by_entity_to_watch: "LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
  networkless_performance: "LATENCY_ACTION_NETWORKLESS_PERFORMANCE",
  gel_compression: "LATENCY_ACTION_GEL_COMPRESSION",
  gel_jspb_serialize: "LATENCY_ACTION_GEL_JSPB_SERIALIZE",
  attestation_challenge_fetch: "LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH"
};
Object.assign(Cq, Bq);
function Dq(a, b) {
  wm.call(this, 1, arguments);
  this.h = a;
}
u(Dq, wm);
var Eq = new Lm();
var Fq = {
  a_bid_f: 482,
  a_bid_s: 481,
  aa: 2,
  aaci: 433,
  aacr: 434,
  ab_r: 11,
  ab_s: 10,
  abc: 579,
  ac: 193,
  acc: 511,
  aci: 512,
  ad_0_e: 13,
  ad_0_s: 12,
  ad_bl: 14,
  ad_i: 15,
  ad_mbs: 16,
  ad_pr: 562,
  ad_vi: 17,
  ad_vir: 18,
  ada: 194,
  adbc_f: 576,
  adc: 195,
  adfl_f: 19,
  adfl_s: 20,
  adl: 196,
  adns: 197,
  ads_e: 22,
  ads_s: 21,
  afb: 513,
  afc: 198,
  afl: 199,
  aft: 1,
  ahb: 514,
  ai: 200,
  ais_a: 503,
  ais_r: 502,
  aisf: 23,
  aisi: 24,
  aisr: 25,
  aiss: 26,
  aml: 201,
  apa_a: 203,
  apa_b: 202,
  apbs: 204,
  app_l: 3,
  app_si: 612,
  app_sie: 661,
  appdel_i: 27,
  appi_e: 616,
  appi_s: 615,
  apr: 205,
  apres: 436,
  apsus: 435,
  ar: 206,
  ar40k: 28,
  arb_f: 504,
  arc: 207,
  areq: 208,
  arfb: 29,
  ari: 4,
  arr: 209,
  arrh: 30,
  asce: 788,
  ascf: 789,
  ascs: 787,
  asisfb: 31,
  asisr: 32,
  asisrh: 33,
  asiss: 34,
  asr: 210,
  async_orch_t_act: 712,
  async_orch_t_notify: 711,
  atrr: 515,
  atrs: 516,
  att_e: 211,
  att_f: 212,
  att_fc: 797,
  att_frr: 796,
  att_fs: 793,
  att_fsr: 795,
  att_pna: 794,
  att_s: 213,
  att_wb: 214,
  awfl_f: 557,
  awfl_s: 558,
  base_js_r: 441,
  bcp: 215,
  bf: 216,
  bg_e: 217,
  bg_i: 218,
  bg_l: 220,
  bg_s: 221,
  bg_v: 219,
  bpd_c: 484,
  bpd_s: 483,
  bpt: 223,
  br_e: 37,
  br_ld: 38,
  br_lrpr: 39,
  br_lrr: 40,
  br_lwm: 577,
  br_r: 41,
  br_s: 42,
  brer: 35,
  bres: 36,
  brnr: 43,
  brns: 44,
  brpe: 45,
  brps: 46,
  brr_e: 47,
  brr_i: 48,
  brr_ius: 49,
  bs: 222,
  c_c: 50,
  c_cs: 51,
  c_csfs: 52,
  c_d: 53,
  c_laf: 59,
  c_las: 58,
  c_rnf: 438,
  c_rns: 437,
  cc: 467,
  cc_c: 54,
  cc_cf: 56,
  cc_csala: 55,
  cc_la: 57,
  cfg: 224,
  chls: 225,
  chps: 226,
  cl: 480,
  cmc: 227,
  cmd_h: 629,
  cmhl: 229,
  cmi: 228,
  cml: 230,
  cmp: 779,
  cmv: 231,
  cpt: 232,
  cr: 364,
  cr_err: 669,
  cr_r: 670,
  cr_s: 668,
  csl: 233,
  csr_t: 631,
  ct: 5,
  ct_li: 60,
  d_l: 61,
  d_laf: 62,
  d_lar: 63,
  d_las: 64,
  d_lf: 65,
  d_ls: 66,
  d_lw: 67,
  d_lwf: 68,
  d_lws: 69,
  das_c: 366,
  das_s: 365,
  dcp: 234,
  dg_pb_c: 236,
  dg_pb_r: 237,
  dg_pb_s: 235,
  dhic: 238,
  dl: 239,
  dns_: 240,
  drm_gk_f: 388,
  drm_gk_s: 387,
  drm_kr_r: 392,
  drm_kr_s: 391,
  drm_net_r: 390,
  drm_net_s: 389,
  drm_pb_f: 386,
  drm_pb_s: 385,
  ds_ac: 736,
  ds_as: 735,
  ds_clc: 740,
  ds_cs: 737,
  ds_dc: 739,
  ds_ds: 738,
  empa: 432,
  empu: 431,
  enp_err: 685,
  enp_fi: 684,
  enp_st: 683,
  eopr_r: 673,
  ep_a_pr_r: 532,
  ep_a_pr_s: 531,
  ep_hav_end: 526,
  ep_hav_start: 525,
  ep_init_ar: 699,
  ep_init_cue: 635,
  ep_init_cus: 634,
  ep_init_epe: 637,
  ep_init_eps: 636,
  ep_init_ije: 639,
  ep_init_ijs: 638,
  ep_init_pr: 527,
  ep_init_re: 641,
  ep_init_rs: 640,
  ep_init_wee: 643,
  ep_init_wes: 642,
  ep_ma_repr: 543,
  ep_ma_rr: 533,
  ep_ma_sepr: 542,
  ep_ma_spr: 534,
  ep_p_l: 530,
  ep_pr_r: 529,
  ep_pr_s: 528,
  ep_r_pre_r: 541,
  ep_r_rr: 535,
  ep_r_smar: 536,
  ep_rec_end: 538,
  ep_rec_start: 537,
  ep_reps_end: 540,
  ep_reps_start: 539,
  epe: 618,
  eps: 617,
  er_cl: 653,
  er_ns: 652,
  er_pe: 650,
  er_ps: 649,
  er_s: 648,
  er_s_nr: 790,
  er_s_ns: 784,
  er_t: 651,
  fab_r: 246,
  fcb_r: 506,
  fire: 70,
  firs: 71,
  fmth: 241,
  foot_js: 242,
  fpt: 243,
  fr_s: 561,
  fs: 244,
  fsc: 245,
  fssb0_a: 75,
  fssb0_fr: 74,
  fssb0_nr: 73,
  fssb0_ns: 72,
  ft_: 439,
  ftl: 7,
  ftr: 475,
  fvb_r: 247,
  fvf: 248,
  fyd_gf: 767,
  fyd_gs: 766,
  gcc: 249,
  gcfl: 250,
  gcsr: 76,
  gep_err: 800,
  gep_req: 798,
  gep_res: 799,
  ggsr: 77,
  giwa_a: 627,
  giwa_d: 628,
  glc: 593,
  gle: 251,
  gls: 252,
  gpe: 253,
  grc: 254,
  griw_nr: 786,
  griw_ns: 785,
  gs_r: 734,
  gs_s: 733,
  gsmd: 586,
  gu_r: 620,
  gv: 485,
  gw_aier: 771,
  gw_arf: 772,
  gw_arnaf: 775,
  gw_arnnaf: 776,
  gw_arns: 777,
  gw_arnsu: 778,
  gw_ars: 774,
  gw_arsu: 773,
  gw_maaf: 633,
  gw_maas: 632,
  hbfg: 677,
  hgcr: 255,
  hr: 256,
  hre: 363,
  hrs: 362,
  hs: 373,
  html_fb_r: 755,
  html_fe: 748,
  html_fs: 747,
  html_fwe: 752,
  html_fws: 751,
  html_jce: 754,
  html_jcs: 753,
  html_lb_r: 756,
  html_se: 750,
  html_ss: 749,
  i_rp: 477,
  i_rq: 476,
  ip_s: 646,
  ipc: 257,
  ips: 258,
  ismp_a: 836,
  ismp_c: 838,
  ismp_d: 839,
  ismp_i: 835,
  ismp_p: 840,
  ismp_rc: 837,
  it_gp: 78,
  iv_s: 505,
  jsp: 259,
  jsr: 260,
  kYTLatencyMDEProductStickerEditorCancelled: 801,
  kYTLatencyMDEProductStickerEditorFinished: 802,
  l2s: 261,
  lc_frr: 660,
  lc_s_s: 659,
  lc_s_u: 658,
  lcp: 262,
  ld_s: 440,
  lim: 263,
  lpcf: 264,
  lpcs: 265,
  lps: 266,
  ls_c: 368,
  ls_s: 367,
  lss: 267,
  lv: 268,
  ma_cl: 551,
  ma_ffr: 552,
  ma_fua: 554,
  ma_gr: 553,
  ma_il: 573,
  main: 79,
  main_js_r: 442,
  main_js_rq: 443,
  mb_s: 507,
  mbap_c: 384,
  mbc_alc: 732,
  mbc_asl: 731,
  mbc_c: 375,
  mbc_f: 848,
  mbc_s: 374,
  mbgchid_rr: 744,
  mbgchid_rs: 746,
  mbgr_rf: 657,
  mbgr_rr: 379,
  mbgr_rs: 378,
  mbhs_dfr: 852,
  mbhs_rend: 844,
  mblc_c: 377,
  mblc_s: 376,
  mblchid_c: 745,
  mblchid_f: 849,
  mblchid_s: 743,
  mblcrid_c: 742,
  mblcrid_f: 851,
  mblcrid_s: 741,
  mbs_c: 381,
  mbs_rr: 383,
  mbs_rs: 382,
  mbs_s: 380,
  mdx_ccp: 80,
  mdx_ccs: 81,
  mdx_ccst: 82,
  mdx_cr: 83,
  mdx_cs: 84,
  mdx_ls: 85,
  mdx_off: 86,
  mdx_sc: 87,
  me_b: 555,
  me_c: 687,
  me_f: 556,
  me_fa: 688,
  mesv_s: 509,
  mm_ie: 720,
  mm_is: 719,
  mrc: 269,
  mrs: 270,
  msa: 271,
  msti: 88,
  mstr: 89,
  n_ct: 702,
  n_sr: 697,
  n_sw: 698,
  "nc[0-9]": 272,
  ncl: 273,
  nct: 274,
  nd: 275,
  ndnse: 276,
  ndnss: 277,
  "np[0-9]": 278,
  nr: 279,
  nre: 280,
  nreqs: 281,
  nrese: 282,
  nress: 283,
  nrrps: 90,
  nrs: 284,
  nstcps: 285,
  ntcpe: 286,
  ntcps: 287,
  nwp: 288,
  oad2s: 425,
  oafs_r: 407,
  oafs_rp: 409,
  oaisr: 405,
  oar2s: 412,
  oarp2s: 427,
  ocsi_z: 91,
  octk: 621,
  octp: 622,
  ofarp: 423,
  ofdo: 400,
  ofdos: 398,
  ofr: 417,
  ofvrp: 424,
  ogsf_c: 395,
  ogsf_s: 394,
  ohr_r: 765,
  ohr_s: 764,
  ol: 6,
  ol_i: 8,
  oloc_e: 830,
  oloc_sa: 829,
  oloc_ss: 828,
  omd_c: 422,
  omd_s: 421,
  omp_c: 419,
  omp_r: 418,
  opfc: 680,
  opr_r: 414,
  oprd_s: 415,
  oprgz2_e: 842,
  oprgz2_f: 843,
  oprgz2_s: 841,
  oprgz_s: 689,
  oprr: 416,
  or100k: 411,
  or_fe: 429,
  or_fs: 430,
  or_i: 393,
  or_p: 397,
  orch_r_d: 694,
  orch_r_s: 695,
  orch_t_pmd: 770,
  orch_t_pms: 769,
  orch_t_tced: 708,
  orch_t_tces: 705,
  orch_t_td: 692,
  orch_t_tmd: 804,
  orch_t_tms: 803,
  orch_t_ud: 693,
  orch_t_us: 696,
  orfb: 404,
  orh_r: 403,
  ormk: 420,
  orqpb_a: 831,
  orqpb_e: 834,
  orqpb_s: 832,
  orqpb_w: 833,
  osdo: 401,
  osdof: 402,
  osdos: 399,
  osor: 396,
  ovd2s: 426,
  ovfs_r: 408,
  ovfs_rp: 410,
  ovisr: 406,
  ovr2s: 413,
  ovrp2s: 428,
  pac: 289,
  pari: 517,
  pat: 290,
  pb0_s: 611,
  pb_rq_authz: 446,
  pb_rq_ctt_cfm: 447,
  pbc_e: 663,
  pbc_s: 662,
  pbf_c: 92,
  pbp: 486,
  pbresume: 292,
  pbs: 487,
  pbu: 293,
  pc: 488,
  pcc: 546,
  pce: 547,
  pcq: 544,
  pcr: 545,
  pcu_ap: 809,
  pcu_ce: 581,
  pcu_cs: 580,
  pcu_re: 808,
  pcu_rs: 807,
  pcu_s: 805,
  pcu_se: 806,
  pda: 294,
  pdc: 295,
  pdr: 296,
  pe: 297,
  pem_r: 444,
  pem_rq: 445,
  pfje: 309,
  pfrr: 305,
  pfrs: 306,
  pfs: 307,
  pft: 308,
  pft_i: 93,
  pl_c: 291,
  pl_i: 489,
  pl_int: 490,
  pl_r: 491,
  pl_rc: 703,
  pl_s: 492,
  pl_ss: 493,
  plev: 310,
  pljs_r: 448,
  pljs_rq: 449,
  plvs: 723,
  pot_af: 97,
  pot_as: 96,
  pot_cme: 569,
  pot_cmf: 299,
  pot_cms: 298,
  pot_csme: 570,
  pot_csmf: 301,
  pot_csms: 300,
  pot_if: 304,
  pot_initf: 95,
  pot_isc: 302,
  pot_ist: 303,
  pot_se: 565,
  pot_sf: 564,
  pot_ss: 563,
  pot_xe: 568,
  pot_xf: 567,
  pot_xs: 566,
  potpe: 94,
  ppu: 98,
  proc_k: 613,
  proc_k_l: 614,
  ps: 311,
  ps_bs: 647,
  ps_c: 494,
  ps_es: 99,
  ps_pa: 681,
  ps_pihf: 597,
  ps_pihs: 596,
  ps_r: 360,
  ps_s: 361,
  ps_sgf: 595,
  ps_sgs: 594,
  psnr: 495,
  psns: 496,
  pspe: 100,
  psps: 101,
  pt_me: 815,
  pt_mf: 814,
  pt_ms: 813,
  pt_pie: 812,
  pt_pif: 811,
  pt_pis: 810,
  pt_pish: 606,
  pvri: 518,
  pwc: 312,
  qoes: 313,
  r_c_sld: 450,
  r_c_srq: 451,
  r_connect_backend: 452,
  r_connect_backend_success: 453,
  r_connected: 454,
  r_construction: 455,
  r_disconnected: 456,
  r_ebi: 664,
  r_eod: 585,
  r_f: 457,
  r_or: 713,
  r_pl: 105,
  r_ps: 106,
  r_rq_ply: 458,
  r_s_plylst: 459,
  r_s_vid: 460,
  r_status_update: 461,
  r_tr: 107,
  r_vtc: 104,
  r_wipbc: 584,
  r_wnr: 792,
  r_wns: 791,
  r_wrr: 103,
  r_wrs: 102,
  r_wsrp: 609,
  r_wsrr: 608,
  r_wsrs: 607,
  rcv_: 314,
  remove_splash: 462,
  req_: 315,
  rfg: 316,
  rgr_nrf: 600,
  rgr_s: 599,
  rpe: 816,
  rply_rqd: 463,
  rps: 817,
  rs_s: 508,
  rsae_pc: 332,
  rsae_pej: 334,
  rsae_pj: 333,
  rsbe_pc: 323,
  rsbe_pej: 325,
  rsbe_pj: 324,
  rse_pc: 320,
  rse_pej: 322,
  rse_pj: 321,
  rsef_pc: 329,
  rsef_pej: 331,
  rsef_pj: 330,
  rses_pc: 326,
  rses_pej: 328,
  rses_pj: 327,
  rsf_pc: 317,
  rsf_pej: 319,
  rsf_pj: 318,
  rtime_: 335,
  rurl_e: 108,
  rurl_r: 109,
  rurl_s: 110,
  rurlpe: 111,
  rurlps: 112,
  s3t_r: 472,
  sa_f: 624,
  sa_fo: 625,
  sa_s: 623,
  saf_fp: 665,
  saf_r: 666,
  saf_re: 667,
  sas_i: 626,
  scgat_ffs: 560,
  scgat_fs: 559,
  sda_f: 605,
  sda_i: 604,
  sda_recp: 601,
  sda_rspp: 603,
  sda_rspr: 602,
  sdl_e: 655,
  sdl_s: 654,
  sdl_t: 656,
  sf_i: 113,
  sgsc_r: 781,
  sgsc_s: 780,
  show_call_to_cast: 464,
  shrb_c: 165,
  shro_c: 170,
  shro_r: 167,
  shrp_c: 169,
  shrp_ld: 166,
  shrp_p: 168,
  so_r: 119,
  so_re: 118,
  so_rq: 120,
  spa: 114,
  spd: 115,
  spf: 116,
  spnr_h: 672,
  spnr_s: 671,
  spr: 678,
  sr_e: 117,
  sr_p: 121,
  sr_pa: 122,
  sr_r: 123,
  sr_re: 124,
  sr_s: 125,
  sr_ui: 126,
  srt: 336,
  ss_r: 469,
  ss_s: 468,
  ss_sf_s: 724,
  ss_sf_w: 725,
  ssnr: 127,
  ssns: 128,
  stcp_: 337,
  ste_alf: 589,
  ste_c: 592,
  ste_elf: 590,
  ste_f: 591,
  ste_ftl: 588,
  ste_l: 587,
  stts_b: 582,
  stts_f: 583,
  stvs_f: 691,
  stvs_s: 690,
  sve: 466,
  svs: 465,
  sw_fb: 510,
  sw_i: 783,
  sw_r: 497,
  sw_s: 498,
  swsnr: 819,
  swsns: 818,
  swspe: 821,
  swsps: 820,
  tcp_: 338,
  tenx_l: 471,
  tenx_r: 470,
  th0_h: 610,
  th0_nc: 675,
  th0_ne: 676,
  th0_nr: 129,
  th0_ns: 674,
  th_c_1: 709,
  th_d_1: 710,
  th_l_1: 130,
  th_s_1: 578,
  thsb0_fr: 134,
  thsb0_ne: 131,
  thsb0_nr: 132,
  thsb0_ns: 133,
  ttc: 339,
  ttcr: 340,
  ui_l: 135,
  uibf_c: 141,
  uibf_r: 143,
  uibf_s: 142,
  uisf_r: 144,
  uiwwa_bc: 619,
  uiwwa_c: 136,
  uiwwa_e: 140,
  uiwwa_pr: 139,
  uiwwa_r: 138,
  uiwwa_s: 137,
  ulrs_c: 370,
  ulrs_s: 369,
  unknown: 0,
  ur: 341,
  vc: 682,
  vcc: 519,
  vci: 520,
  vda: 342,
  vdeuc: 343,
  vdeur: 344,
  vdeus: 345,
  vdns: 346,
  vfb: 521,
  vfp: 347,
  vhb: 522,
  vir: 348,
  virc: 349,
  vis_a: 500,
  vis_r: 499,
  visf: 145,
  visi: 146,
  visr: 147,
  viss: 148,
  voz_cx: 179,
  voz_eou: 187,
  voz_err: 184,
  voz_err_ms: 180,
  voz_err_nmp: 181,
  voz_err_off: 183,
  voz_err_uar: 182,
  voz_ftr: 188,
  voz_fvc: 189,
  voz_lr_lso: 185,
  voz_lr_md: 186,
  voz_mf: 172,
  voz_ms: 171,
  voz_rqf: 174,
  voz_rqs: 173,
  voz_sf: 178,
  voz_ss: 177,
  voz_vp: 175,
  voz_vt: 176,
  vpl: 350,
  vr: 351,
  vr100k: 149,
  vrb_f: 501,
  vrc: 352,
  vreq: 353,
  vrfb: 150,
  vri: 9,
  vrr: 354,
  vrr_r: 474,
  vrr_s: 473,
  vrrh: 151,
  vsisfb: 152,
  vsisr: 153,
  vsisrh: 154,
  vsiss: 155,
  vta: 355,
  vtrr: 523,
  vtrs: 524,
  w_st: 156,
  wasm_fa: 826,
  wasm_ferr: 827,
  wasm_fw: 825,
  wasm_s: 824,
  wc: 372,
  wcr: 356,
  webfe_e: 728,
  webfe_gbm_r: 758,
  webfe_gbm_s: 757,
  webfe_gl_r: 762,
  webfe_gl_s: 761,
  webfe_gs_r: 760,
  webfe_gs_s: 759,
  webfe_gus_r: 730,
  webfe_gus_s: 729,
  webfe_gvm_s: 763,
  webfe_s: 727,
  wffe: 357,
  wffs: 358,
  wfg: 359,
  wn_e: 162,
  wn_l: 371,
  wn_r: 159,
  wn_rp: 478,
  wn_s: 160,
  wn_sl: 161,
  wnl: 158,
  wnl_d: 823,
  wnl_mp: 571,
  wnl_pd: 822,
  wnlr: 572,
  wnls: 157,
  wnpe: 163,
  wnps: 164,
  wp: 479,
  ws_ce: 190,
  ws_ss: 191,
  ws_ssr: 192,
  ycec: 549,
  ycef: 548,
  ycftr: 645,
  ycif: 550,
  ycmsf: 644,
  ycrc: 718,
  ycrf: 717,
  ycrs: 714,
  ycrsc: 715,
  ycruea: 716
};
var Gq = E.ytLoggingGelSequenceIdObj_ || {};
G("ytLoggingGelSequenceIdObj_", Gq);
var Hq = E.ytLoggingLatencyUsageStats_ || {};
G("ytLoggingLatencyUsageStats_", Hq);
function Iq() {
  this.h = 0;
}
function Jq() {
  Iq.instance ||= new Iq();
  return Iq.instance;
}
Iq.prototype.tick = function (a, b, c, d) {
  if (!Kq(this, "tick_" + a + "_" + b)) {
    c = {
      timestamp: c,
      cttAuthInfo: d
    };
    b = {
      tickName: a,
      clientActionNonce: b
    };
    if (T("youtube_web_csi_ticks_migration")) {
      a = Fq[a];
      if (a !== undefined) {
        b.tick = a;
        delete b.tickName;
      }
    }
    Up("latencyActionTicked", b, c);
  }
};
Iq.prototype.info = function (a, b, c) {
  var d = Object.keys(a).join("");
  if (!Kq(this, "info_" + d + "_" + b)) {
    a = Object.assign({}, a);
    a.clientActionNonce = b;
    Up("latencyActionInfo", a, {
      cttAuthInfo: c
    });
  }
};
Iq.prototype.jspbInfo = function (a, b, c) {
  var d = "";
  for (var e = 0; e < Qc(a).length; e++) {
    if (Qc(a)[e] !== undefined) {
      d = e === 0 ? d.concat("" + e) : d.concat("_" + e);
    }
  }
  if (!Kq(this, "info_" + d + "_" + b)) {
    M(a, 2, b);
    c = {
      cttAuthInfo: c
    };
    b = T("jspb_sparse_encoded_pivot") ? new Th([{}]) : new Th();
    a = jd(a, Qh);
    ed(b, 7, Uh, a);
    if (a && !Vb(a)) {
      Yc(b.B);
    }
    c = c === undefined ? {} : c;
    a = false;
    if (S("ytLoggingEventsDefaultDisabled", false)) {
      a = true;
    }
    a = a ? null : Vn;
    c = c === undefined ? {} : c;
    d = Math.round(c.timestamp || V());
    cd(b, 1, Ic(d < Number.MAX_SAFE_INTEGER ? d : 0));
    d = new Sh();
    if (c.lact) {
      cd(d, 1, Ic(isFinite(c.lact) ? c.lact : -1));
    } else if (c.timestamp) {
      cd(d, 1, Ic(-1));
    } else {
      e = Xn();
      cd(d, 1, Ic(isFinite(e) ? e : -1));
    }
    if (c.sequenceGroup && !T("web_gel_sequence_info_killswitch")) {
      e = c.sequenceGroup;
      var f = Sp(e);
      var g = new Rh();
      cd(g, 2, Ic(f));
      M(g, 1, e);
      kd(d, Rh, 3, g);
      if (c.endOfSequence) {
        delete Gq[c.sequenceGroup];
      }
    }
    kd(b, Sh, 33, d);
    (c.sendIsolatedPayload ? up : tp)("latencyActionInfo", {
      endpoint: "log_event",
      payload: b,
      cttAuthInfo: c.cttAuthInfo,
      dangerousLogToVisitorSession: c.dangerousLogToVisitorSession
    }, a);
  }
};
Iq.prototype.span = function (a, b, c, d) {
  var e = Object.keys(a).join("");
  if (d || !Kq(this, "span_" + e + "_" + b)) {
    a.clientActionNonce = b;
    Up("latencyActionSpan", a, {
      cttAuthInfo: c
    });
  }
};
function Kq(a, b) {
  Hq[b] = Hq[b] || {
    count: 0
  };
  var c = Hq[b];
  c.count++;
  c.time = V();
  a.h ||= Aj(function () {
    var d = V();
    var e;
    for (e in Hq) {
      if (Hq[e] && d - Hq[e].time > 60000) {
        delete Hq[e];
      }
    }
    if (a) {
      a.h = 0;
    }
  }, 5000);
  if (c.count > 5) {
    if (c.count === 6 && Math.random() * 100000 < 1) {
      c = new Yh("CSI data exceeded logging limit with key", b.split("_"));
      if (!(b.indexOf("plev") >= 0)) {
        cq(c, "WARNING");
      }
    }
    return true;
  } else {
    return false;
  }
}
;
var Lq = window;
function Mq() {
  this.timing = {};
  this.clearResourceTimings = function () {};
  this.webkitClearResourceTimings = function () {};
  this.mozClearResourceTimings = function () {};
  this.msClearResourceTimings = function () {};
  this.oClearResourceTimings = function () {};
}
var Nq = Lq.performance || Lq.mozPerformance || Lq.msPerformance || Lq.webkitPerformance || new Mq();
var Oq = false;
var Pq = false;
La(Nq.clearResourceTimings || Nq.webkitClearResourceTimings || Nq.mozClearResourceTimings || Nq.msClearResourceTimings || Nq.oClearResourceTimings || vd, Nq);
function Qq(a, b) {
  if (!T("web_csi_action_sampling_enabled") || !uq(b).actionDisabled) {
    var c = Aq(b || "");
    ai(c.info, a);
    if (a.loadType) {
      c = a.loadType;
      var d = uq(b);
      d.metadata ||= {};
      d.metadata.loadType = c;
    }
    c = wq(b);
    c.gelInfos ||= {};
    ai(c.gelInfos, a);
    c = xq(b);
    b = uq(b).cttAuthInfo;
    Jq().info(a, c, b);
  }
}
function Rq() {
  var a;
  var b;
  var c;
  return ((io().resolve(new Zn(Tl)) == null ? undefined : (a = Ul()) == null ? undefined : (b = a.loggingHotConfig) == null ? undefined : (c = b.csiConfig) == null ? undefined : c.debugTicks) ?? []).map(function (e) {
    return Object.values(e)[0];
  });
}
function Sq(a, b, c) {
  if (!T("web_csi_action_sampling_enabled") || !uq(c).actionDisabled) {
    var d = xq(c);
    var e;
    if (e = T("web_csi_debug_sample_enabled") && d) {
      if ((io().resolve(new Zn(Tl)) == null ? 0 : Ul()) && !Pq) {
        Pq = true;
        Sq("gcfl", V(), c);
      }
      var f;
      var g;
      var h;
      e = (io().resolve(new Zn(Tl)) == null ? undefined : (f = Ul()) == null ? undefined : (g = f.loggingHotConfig) == null ? undefined : (h = g.csiConfig) == null ? undefined : h.debugSampleWeight) || 0;
      if (f = e !== 0) {
        b: {
          f = Rq();
          if (f.length > 0) {
            for (g = 0; g < f.length; g++) {
              if (a === f[g]) {
                f = true;
                break b;
              }
            }
          }
          f = false;
        }
      }
      if (f) {
        for (g = f = 0; g < d.length; g++) {
          f = f * 31 + d.charCodeAt(g);
          if (g < d.length - 1) {
            f %= 140737488355328;
          }
        }
        e = f % 100000 % e !== 0;
        if (!uq(c).debugTicksExcludedLogged) {
          f = {};
          f.debugTicksExcluded = e;
          Qq(f, c);
        }
        uq(c).debugTicksExcludedLogged = true;
      } else {
        e = false;
      }
    }
    if (!e) {
      if (a[0] !== "_" && (e = a, Nq.mark)) {
        if (!e.startsWith("mark_")) {
          e = "mark_" + e;
        }
        if (c) {
          e += " (" + c + ")";
        }
        f = e;
        g = {};
        if (b !== undefined && !T("web_csi_disable_alt_time_performance_mark")) {
          h = b;
          h = T("csi_use_performance_navigation_timing") ? h - Nq.timeOrigin : h - (Nq.timeOrigin || Nq.timing.navigationStart);
          g.startTime = h;
        }
        if (T("csi_enable_chrome_devtools_performance_timeline_integration")) {
          g.detail = {
            he: {
              dataType: "marker",
              color: "primary",
              tooltipText: f
            }
          };
        }
        f = Object.keys(g).length > 0 ? g : undefined;
        try {
          Nq.mark(e, f);
        } catch (l) {
          Nq.mark(e);
        }
      }
      e = Aq(c || "");
      e.tick[a] = b || V();
      if (e.callback && e.callback[a]) {
        e = v(e.callback[a]);
        f = e.next();
        try {
          for (; !f.done; f = e.next()) {
            var k = f.value;
            k();
          }
        } finally {
          A(e, f);
        }
      }
      k = wq(c);
      if (k.gelTicks) {
        k.gelTicks[a] = true;
      }
      e = vq(c);
      k = b || V();
      e[a] = k;
      e = uq(c).cttAuthInfo;
      if (a === "_start") {
        a = Jq();
        if (!Kq(a, "baseline_" + d)) {
          Up("latencyActionBaselined", {
            clientActionNonce: d
          }, {
            timestamp: b,
            cttAuthInfo: e
          });
        }
      } else {
        Jq().tick(a, d, b, e);
      }
      b = Tq("_start", c);
      d = Tq("aft", c);
      b: if (!d) {
        d = S((c || "") + "TIMING_AFT_KEYS", ["ol"]);
        a = d.length;
        for (e = 0; e < a; e++) {
          if (f = Tq(d[e], c)) {
            d = f;
            break b;
          }
        }
        d = NaN;
      }
      a = !Oq;
      if (b && d && a) {
        Nm(Eq, new Dq(Math.round(d - b), c));
        Oq = true;
      }
      return k;
    }
  }
}
function Tq(a, b) {
  if (a = vq(b)[a]) {
    if (typeof a === "number") {
      return a;
    } else {
      return a[a.length - 1];
    }
  }
}
;
function Uq(a, b, c) {
  mi(Qq)(a, b, c === undefined ? false : c);
}
function Vq(a, b, c) {
  return mi(Sq)(a, b, c);
}
var Wq = window;
if (Wq.ytcsi) {
  Wq.ytcsi.infoGel = Uq;
  Wq.ytcsi.tick = Vq;
}
function Xq(a) {
  return C(function (b) {
    switch (b.i) {
      case 1:
        b.v(2);
        break;
      case 3:
        return b.return();
      case 2:
        return b.h(Yq(), 4);
      case 4:
        cq(a);
        b.u();
    }
  });
}
function Yq() {
  return C(function (a) {
    if (a.i == 1) {
      a.P(2);
      return a.h(gq(), 4);
    }
    if (a.i != 2) {
      return a.na(0);
    }
    a.N();
    return a.return();
  });
}
;
function Zq(a) {
  a.map(function (b) {
    return b.source;
  });
}
Zq([/^https:\/\/([\w-]*\.)*youtube\.com.*/, /^https:\/\/([\w-]*\.)*gstatic\.com.*/]);
Zq([/\.css$/, /\.js$/, /\.webm$/, /\.png$/]);
Zq([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/js\//, /\/ytmainappweb\/_\/ss\//, /\/ytmusicweb\/_\/js\//, /\/ytmusicweb\/_\/ss\//, /\/music_integrations\/_\/js\//, /\/music_integrations\/_\/ss\//, /\/ytvweb\/_\/js\//, /\/ytvweb\/_\/ss\//]);
Zq([/purge_shell=1/]);
var $q = undefined;
$q = $q === undefined ? [] : $q;
var ar = [];
var fr = v(Fi);
var gr = fr.next();
try {
  for (; !gr.done; gr = fr.next()) {
    ar.push({
      key: gr.value
    });
  }
} finally {
  A(fr, gr);
}
var hr = v($q);
var ir = hr.next();
try {
  for (; !ir.done; ir = hr.next()) {
    ar.push(ir.value);
  }
} finally {
  A(hr, ir);
}
;
function jr() {}
function kr() {
  var a = F("ytglobal.storage_");
  if (!a) {
    a = new jr();
    G("ytglobal.storage_", a);
  }
  return a;
}
jr.prototype.estimate = function () {
  var a;
  var b;
  var c;
  return C(function (d) {
    a = navigator;
    if ((b = a.storage) == null ? 0 : b.estimate) {
      return d.return(a.storage.estimate());
    } else if ((c = a.webkitTemporaryStorage) == null ? 0 : c.queryUsageAndQuota) {
      return d.return(lr());
    } else {
      return d.return();
    }
  });
};
function lr() {
  var a = navigator;
  return new Promise(function (b, c) {
    var d;
    if ((d = a.webkitTemporaryStorage) != null && d.queryUsageAndQuota) {
      a.webkitTemporaryStorage.queryUsageAndQuota(function (e, f) {
        b({
          usage: e,
          quota: f
        });
      }, function (e) {
        c(e);
      });
    } else {
      c(Error("webkitTemporaryStorage is not supported."));
    }
  });
}
G("ytglobal.storageClass_", jr);
function mr() {
  var a = nr === undefined ? Up : nr;
  var b = this;
  this.handleError = or === undefined ? bq : or;
  this.h = a;
  this.i = false;
  if (self.document !== undefined) {
    self.addEventListener("beforeunload", function () {
      b.i = true;
    });
  }
  this.j = Math.random() <= 0.2;
}
mr.prototype.qb = function (a) {
  this.handleError(a);
};
mr.prototype.Fb = function (a, b) {
  switch (a) {
    case "IDB_DATA_CORRUPTED":
      if (!T("idb_data_corrupted_killswitch")) {
        this.h("idbDataCorrupted", b);
      }
      break;
    case "IDB_UNEXPECTEDLY_CLOSED":
      this.h("idbUnexpectedlyClosed", b);
      break;
    case "IS_SUPPORTED_COMPLETED":
      if (!T("idb_is_supported_completed_killswitch")) {
        this.h("idbIsSupportedCompleted", b);
      }
      break;
    case "QUOTA_EXCEEDED":
      pr(this, b);
      break;
    case "TRANSACTION_ENDED":
      if (this.j && Math.random() <= 0.1) {
        this.h("idbTransactionEnded", b);
      }
      break;
    case "TRANSACTION_UNEXPECTEDLY_ABORTED":
      a = na({}, b, {
        hasWindowUnloaded: this.i
      });
      this.h("idbTransactionAborted", a);
  }
};
function pr(a, b) {
  kr().estimate().then(function (c) {
    c = na({}, b, {
      isSw: self.document === undefined,
      isIframe: self !== self.top,
      deviceStorageUsageMbytes: qr(c == null ? undefined : c.usage),
      deviceStorageQuotaMbytes: qr(c == null ? undefined : c.quota)
    });
    a.h("idbQuotaExceeded", c);
  });
}
function qr(a) {
  if (typeof a === "undefined") {
    return "-1";
  } else {
    return String(Math.ceil(a / 1048576));
  }
}
;
gj(fj(), {
  Aa: [{
    yd: /Failed to fetch/,
    weight: 500
  }],
  va: []
});
var rr = {
  handleError: Xq,
  Fb: function (a, b) {
    return C(function (c) {
      if (c.i == 1) {
        return c.h(Yq(), 2);
      }
      Up(a, b);
      c.u();
    });
  }
};
var sr = rr === undefined ? {} : rr;
var or = sr.handleError;
var nr = sr.Fb;
for (lk = new mr(); kk.length > 0;) {
  var tr = kk.shift();
  switch (tr.type) {
    case "ERROR":
      lk.qb(tr.payload);
      break;
    case "EVENT":
      lk.Fb(tr.eventType, tr.payload);
  }
}
self.oninstall = function (a) {
  a.waitUntil(self.skipWaiting());
};
self.onactivate = function (a) {
  a.waitUntil(self.clients.claim());
};
self.onerror = function (a) {
  if (a.error instanceof Error) {
    Xq(a.error);
  }
};