(function () {
  'use strict';

  var aa = typeof Object.create == "function" ? Object.create : function (a) {
    function c() {}
    c.prototype = a;
    return new c();
  };
  var ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function (a, c, b) {
    if (a == Array.prototype || a == Object.prototype) {
      return a;
    }
    a[c] = b.value;
    return a;
  };
  function ca(a) {
    a = [typeof globalThis == "object" && globalThis, a, typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global];
    for (var c = 0; c < a.length; ++c) {
      var b = a[c];
      if (b && b.Math == Math) {
        return b;
      }
    }
    throw Error("Cannot find global object");
  }
  var da = ca(this);
  function p(a, c) {
    if (c) {
      a: {
        var b = da;
        a = a.split(".");
        for (var e = 0; e < a.length - 1; e++) {
          var d = a[e];
          if (!(d in b)) {
            break a;
          }
          b = b[d];
        }
        a = a[a.length - 1];
        e = b[a];
        c = c(e);
        if (c != e && c != null) {
          ba(b, a, {
            configurable: true,
            writable: true,
            value: c
          });
        }
      }
    }
  }
  var ea;
  if (typeof Object.setPrototypeOf == "function") {
    ea = Object.setPrototypeOf;
  } else {
    var fa;
    a: {
      var ha = {
        a: true
      };
      var ia = {};
      try {
        ia.__proto__ = ha;
        fa = ia.a;
        break a;
      } catch (a) {}
      fa = false;
    }
    ea = fa ? function (a, c) {
      a.__proto__ = c;
      if (a.__proto__ !== c) {
        throw new TypeError(a + " is not extensible");
      }
      return a;
    } : null;
  }
  var ja = ea;
  function ka(a, c) {
    a.prototype = aa(c.prototype);
    a.prototype.constructor = a;
    if (ja) {
      ja(a, c);
    } else {
      for (var b in c) {
        if (b != "prototype") {
          if (Object.defineProperties) {
            var e = Object.getOwnPropertyDescriptor(c, b);
            if (e) {
              Object.defineProperty(a, b, e);
            }
          } else {
            a[b] = c[b];
          }
        }
      }
    }
    a.nb = c.prototype;
  }
  var la = typeof Object.assign == "function" ? Object.assign : function (a, c) {
    if (a == null) {
      throw new TypeError("No nullish arg");
    }
    a = Object(a);
    for (var b = 1; b < arguments.length; b++) {
      var e = arguments[b];
      if (e) {
        for (var d in e) {
          if (Object.prototype.hasOwnProperty.call(e, d)) {
            a[d] = e[d];
          }
        }
      }
    }
    return a;
  };
  p("Object.assign", function (a) {
    return a || la;
  });
  p("Number.isFinite", function (a) {
    if (a) {
      return a;
    } else {
      return function (c) {
        if (typeof c !== "number") {
          return false;
        } else {
          return !isNaN(c) && c !== Infinity && c !== -Infinity;
        }
      };
    }
  });
  p("Number.MAX_SAFE_INTEGER", function () {
    return 9007199254740991;
  });
  p("Number.MIN_SAFE_INTEGER", function () {
    return -9007199254740991;
  });
  p("Number.isNaN", function (a) {
    if (a) {
      return a;
    } else {
      return function (c) {
        return typeof c === "number" && isNaN(c);
      };
    }
  }); /*
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
  var ma = this || self;
  function oa(a) {
    ma.setTimeout(function () {
      throw a;
    }, 0);
  }
  ;
  var pa;
  var qa;
  a: {
    for (var ra = ["CLOSURE_FLAGS"], sa = ma, ta = 0; ta < ra.length; ta++) {
      sa = sa[ra[ta]];
      if (sa == null) {
        qa = null;
        break a;
      }
    }
    qa = sa;
  }
  var ua = qa && qa[748402147];
  pa = ua ?? true;
  var va = undefined;
  var wa = typeof Symbol === "function" && typeof Symbol() === "symbol";
  function xa(a, c, b) {
    if (typeof Symbol === "function" && typeof Symbol() === "symbol") {
      if ((b === undefined ? 0 : b) && Symbol.for && a) {
        return Symbol.for(a);
      } else if (a != null) {
        return Symbol(a);
      } else {
        return Symbol();
      }
    } else {
      return c;
    }
  }
  var ya = xa("jas", undefined, true);
  var za = xa(undefined, "0actk");
  var Aa = xa("m_m", "lb", true);
  var Ba = {
    bb: {
      value: 0,
      configurable: true,
      writable: true,
      enumerable: false
    }
  };
  var Ca = Object.defineProperties;
  var r = wa ? ya : "bb";
  var Da;
  var Ea = [];
  v(Ea, 7);
  Da = Object.freeze(Ea);
  function Fa(a, c) {
    if (!wa && !(r in a)) {
      Ca(a, Ba);
    }
    a[r] |= c;
  }
  function v(a, c) {
    if (!wa && !(r in a)) {
      Ca(a, Ba);
    }
    a[r] = c;
  }
  ;
  var Ga = {};
  function x(a, c) {
    if (c === undefined) {
      return a.ya !== y && !!((a.P[r] | 0) & 2);
    } else {
      return !!(c & 2) && a.ya !== y;
    }
  }
  var y = {};
  var Ha = typeof ma.BigInt === "function" && typeof ma.BigInt(0) === "bigint";
  var Ia = Number.MIN_SAFE_INTEGER.toString();
  var Ja = Ha ? BigInt(Number.MIN_SAFE_INTEGER) : undefined;
  var Ka = Number.MAX_SAFE_INTEGER.toString();
  var Oa = Ha ? BigInt(Number.MAX_SAFE_INTEGER) : undefined;
  function Pa(a, c) {
    if (a.length > c.length) {
      return false;
    }
    if (a.length < c.length || a === c) {
      return true;
    }
    for (var b = 0; b < a.length; b++) {
      var e = a[b];
      var d = c[b];
      if (e > d) {
        return false;
      }
      if (e < d) {
        return true;
      }
    }
  }
  ;
  function Qa(a) {
    return a.displayName || a.name || "unknown type name";
  }
  ;
  function Ra(a) {
    return a;
  }
  ;
  function Sa(a, c, b, e) {
    var d = e !== undefined;
    e = !!e;
    var f = [];
    var g = a.length;
    var h = 4294967295;
    var l = false;
    var k = !!(c & 64);
    var u = k ? c & 128 ? 0 : -1 : undefined;
    if (!(c & 1)) {
      var n = g && a[g - 1];
      if (n != null && typeof n === "object" && n.constructor === Object) {
        g--;
        h = g;
      } else {
        n = undefined;
      }
      if (k && !(c & 128) && !d) {
        l = true;
        var q;
        h = ((q = Ta) != null ? q : Ra)(h - u, u, a, n, undefined) + u;
      }
    }
    c = undefined;
    for (d = 0; d < g; d++) {
      q = a[d];
      if (q != null && (q = b(q, e)) != null) {
        if (k && d >= h) {
          var m = d - u;
          var t = undefined;
          ((t = c) != null ? t : c = {})[m] = q;
        } else {
          f[d] = q;
        }
      }
    }
    if (n) {
      for (var w in n) {
        a = n[w];
        if (a != null && (a = b(a, e)) != null) {
          g = +w;
          d = undefined;
          if (k && !Number.isNaN(g) && (d = g + u) < h) {
            f[d] = a;
          } else {
            g = undefined;
            ((g = c) != null ? g : c = {})[w] = a;
          }
        }
      }
    }
    if (c) {
      if (l) {
        f.push(c);
      } else {
        f[h] = c;
      }
    }
    return f;
  }
  function Ua(a) {
    switch (typeof a) {
      case "number":
        if (Number.isFinite(a)) {
          return a;
        } else {
          return "" + a;
        }
      case "bigint":
        if (Ha ? a >= Ja && a <= Oa : a[0] === "-" ? Pa(a, Ia) : Pa(a, Ka)) {
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
          var c = a[r] | 0;
          if (a.length === 0 && c & 1) {
            return undefined;
          } else {
            return Sa(a, c, Ua);
          }
        }
        if (a != null && a[Aa] === Ga) {
          return Va(a);
        }
        return;
    }
    return a;
  }
  var Ta;
  function Va(a) {
    a = a.P;
    return Sa(a, a[r] | 0, Ua);
  }
  ;
  function Wa(a, c, b, e) {
    e = e === undefined ? 0 : e;
    if (a == null) {
      var d = 32;
      if (b) {
        a = [b];
        d |= 128;
      } else {
        a = [];
      }
      if (c) {
        d = d & -16760833 | (c & 1023) << 14;
      }
    } else {
      if (!Array.isArray(a)) {
        throw Error("narr");
      }
      d = a[r] | 0;
      if (pa && d & 1) {
        throw Error("rfarr");
      }
      if (d & 2048 && !(d & 2)) {
        Xa();
      }
      if (d & 256) {
        throw Error("farr");
      }
      if (d & 64) {
        if ((d | e) !== d) {
          v(a, d | e);
        }
        return a;
      }
      if (b && (d |= 128, b !== a[0])) {
        throw Error("mid");
      }
      a: {
        b = a;
        d |= 64;
        var f = b.length;
        if (f) {
          var g = f - 1;
          var h = b[g];
          if (h != null && typeof h === "object" && h.constructor === Object) {
            c = d & 128 ? 0 : -1;
            g -= c;
            if (g >= 1024) {
              throw Error("pvtlmt");
            }
            for (var l in h) {
              f = +l;
              if (f < g) {
                b[f + c] = h[l];
                delete h[l];
              }
            }
            d = d & -16760833 | (g & 1023) << 14;
            break a;
          }
        }
        if (c) {
          l = Math.max(c, f - (d & 128 ? 0 : -1));
          if (l > 1024) {
            throw Error("spvt");
          }
          d = d & -16760833 | (l & 1023) << 14;
        }
      }
    }
    v(a, d | 64 | e);
    return a;
  }
  function Xa() {
    if (pa) {
      throw Error("carr");
    }
    if (za != null) {
      var a;
      var c = (a = va) != null ? a : va = {};
      a = c[za] || 0;
      if (!(a >= 5)) {
        c[za] = a + 1;
        c = Error();
        c.__closure__error__context__984382 ||= {};
        c.__closure__error__context__984382.severity = "incident";
        oa(c);
      }
    }
  }
  ;
  function Ya(a, c) {
    if (typeof a !== "object") {
      return a;
    }
    if (Array.isArray(a)) {
      var b = a[r] | 0;
      if (a.length === 0 && b & 1) {
        a = undefined;
      } else if (!(b & 2)) {
        if (!c || b & 4096 || b & 16) {
          a = Za(a, b, false, c && !(b & 16));
        } else {
          Fa(a, 34);
          if (b & 4) {
            Object.freeze(a);
          }
        }
      }
      return a;
    }
    if (a != null && a[Aa] === Ga) {
      c = a.P;
      b = c[r] | 0;
      if (!x(a, b)) {
        if (b & 2) {
          var e = true;
        } else if (b & 32 && !(b & 4096)) {
          v(c, b | 2);
          a.ya = y;
          e = true;
        } else {
          e = false;
        }
        if (e) {
          a = new a.constructor(c);
          a.cb = y;
        } else {
          a = Za(c, b);
        }
      }
      return a;
    }
  }
  function Za(a, c, b, e) {
    if (e == null) {
      e = !!(c & 34);
    }
    a = Sa(a, c, Ya, e);
    e = 32;
    if (b) {
      e |= 2;
    }
    c = c & 16769217 | e;
    v(a, c);
    return a;
  }
  function $a(a) {
    if (a.ya !== y) {
      return false;
    }
    var c = a.P;
    c = Za(c, c[r] | 0);
    Fa(c, 2048);
    a.P = c;
    a.ya = undefined;
    a.cb = undefined;
    return true;
  }
  function ab(a, c = a[r] | 0) {
    if (c & 32 && !(c & 4096)) {
      v(a, c | 4096);
    }
  }
  ;
  function z(a, c, b) {
    this.P = Wa(a, c, b, 2048);
  }
  z.prototype.toJSON = function () {
    return Va(this);
  };
  z.prototype[Aa] = Ga;
  z.prototype.toString = function () {
    return this.P.toString();
  };
  function bb(a, c) {
    if (c == null) {
      return new a();
    }
    if (!Array.isArray(c)) {
      throw Error();
    }
    if (Object.isFrozen(c) || Object.isSealed(c) || !Object.isExtensible(c)) {
      throw Error();
    }
    Fa(c, 32);
    return new a(c);
  }
  ; /*
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
  var A = {};
  var cb = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
  A.assign = function (a) {
    for (var c = Array.prototype.slice.call(arguments, 1); c.length;) {
      var b = c.shift();
      if (b) {
        if (typeof b !== "object") {
          throw new TypeError(b + "must be non-object");
        }
        for (var e in b) {
          if (Object.prototype.hasOwnProperty.call(b, e)) {
            a[e] = b[e];
          }
        }
      }
    }
    return a;
  };
  A.Fa = function (a, c) {
    if (a.length === c) {
      return a;
    }
    if (a.subarray) {
      return a.subarray(0, c);
    }
    a.length = c;
    return a;
  };
  var db = {
    ja: function (a, c, b, e, d) {
      if (c.subarray && a.subarray) {
        a.set(c.subarray(b, b + e), d);
      } else {
        for (var f = 0; f < e; f++) {
          a[d + f] = c[b + f];
        }
      }
    },
    Ka: function (a) {
      var c;
      var b;
      var e = b = 0;
      for (c = a.length; e < c; e++) {
        b += a[e].length;
      }
      var d = new Uint8Array(b);
      e = b = 0;
      for (c = a.length; e < c; e++) {
        var f = a[e];
        d.set(f, b);
        b += f.length;
      }
      return d;
    }
  };
  var eb = {
    ja: function (a, c, b, e, d) {
      for (var f = 0; f < e; f++) {
        a[d + f] = c[b + f];
      }
    },
    Ka: function (a) {
      return [].concat.apply([], a);
    }
  };
  A.jb = function () {
    if (cb) {
      A.ia = Uint8Array;
      A.T = Uint16Array;
      A.Sa = Int32Array;
      A.assign(A, db);
    } else {
      A.ia = Array;
      A.T = Array;
      A.Sa = Array;
      A.assign(A, eb);
    }
  };
  A.jb();
  var fb = true;
  try {
    new Uint8Array(1);
  } catch (a) {
    fb = false;
  }
  function gb(a) {
    var c;
    var b;
    var e = a.length;
    var d = 0;
    for (c = 0; c < e; c++) {
      var f = a.charCodeAt(c);
      if ((f & 64512) === 55296 && c + 1 < e) {
        var g = a.charCodeAt(c + 1);
        if ((g & 64512) === 56320) {
          f = 65536 + (f - 55296 << 10) + (g - 56320);
          c++;
        }
      }
      d += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
    }
    var h = new A.ia(d);
    for (c = b = 0; b < d; c++) {
      f = a.charCodeAt(c);
      if ((f & 64512) === 55296 && c + 1 < e) {
        g = a.charCodeAt(c + 1);
        if ((g & 64512) === 56320) {
          f = 65536 + (f - 55296 << 10) + (g - 56320);
          c++;
        }
      }
      if (f < 128) {
        h[b++] = f;
      } else {
        if (f < 2048) {
          h[b++] = f >>> 6 | 192;
        } else {
          if (f < 65536) {
            h[b++] = f >>> 12 | 224;
          } else {
            h[b++] = f >>> 18 | 240;
            h[b++] = f >>> 12 & 63 | 128;
          }
          h[b++] = f >>> 6 & 63 | 128;
        }
        h[b++] = f & 63 | 128;
      }
    }
    return h;
  }
  ;
  var hb = {};
  hb = function (a, c, b, e) {
    var d = a & 65535 | 0;
    a = a >>> 16 & 65535 | 0;
    var f;
    for (; b !== 0;) {
      f = b > 2000 ? 2000 : b;
      b -= f;
      do {
        d = d + c[e++] | 0;
        a = a + d | 0;
      } while (--f);
      d %= 65521;
      a %= 65521;
    }
    return d | a << 16 | 0;
  };
  var B = {};
  var D;
  var ib = [];
  for (var jb = 0; jb < 256; jb++) {
    D = jb;
    for (var kb = 0; kb < 8; kb++) {
      D = D & 1 ? D >>> 1 ^ -306674912 : D >>> 1;
    }
    ib[jb] = D;
  }
  B = function (a, c, b, e) {
    b = e + b;
    for (a ^= -1; e < b; e++) {
      a = a >>> 8 ^ ib[(a ^ c[e]) & 255];
    }
    return a ^ -1;
  };
  var E = {};
  E = {
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
  function G(a) {
    for (var c = a.length; --c >= 0;) {
      a[c] = 0;
    }
  }
  var lb = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  var mb = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  var nb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
  var ob = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  var H = Array(576);
  G(H);
  var I = Array(60);
  G(I);
  var J = Array(512);
  G(J);
  var L = Array(256);
  G(L);
  var pb = Array(29);
  G(pb);
  var qb = Array(30);
  G(qb);
  function rb(a, c, b, e, d) {
    this.Qa = a;
    this.Wa = c;
    this.Va = b;
    this.Ua = e;
    this.gb = d;
    this.Ma = a && a.length;
  }
  var sb;
  var tb;
  var ub;
  function vb(a, c) {
    this.Ja = a;
    this.na = 0;
    this.ba = c;
  }
  function wb(a, c) {
    a.A[a.pending++] = c & 255;
    a.A[a.pending++] = c >>> 8 & 255;
  }
  function M(a, c, b) {
    if (a.C > 16 - b) {
      a.H |= c << a.C & 65535;
      wb(a, a.H);
      a.H = c >> 16 - a.C;
      a.C += b - 16;
    } else {
      a.H |= c << a.C & 65535;
      a.C += b;
    }
  }
  function P(a, c, b) {
    M(a, b[c * 2], b[c * 2 + 1]);
  }
  function xb(a, c) {
    var b = 0;
    do {
      b |= a & 1;
      a >>>= 1;
      b <<= 1;
    } while (--c > 0);
    return b >>> 1;
  }
  function yb(a, c, b) {
    var e = Array(16);
    var d = 0;
    var f;
    for (f = 1; f <= 15; f++) {
      e[f] = d = d + b[f - 1] << 1;
    }
    for (b = 0; b <= c; b++) {
      d = a[b * 2 + 1];
      if (d !== 0) {
        a[b * 2] = xb(e[d]++, d);
      }
    }
  }
  function Ab(a) {
    var c;
    for (c = 0; c < 286; c++) {
      a.I[c * 2] = 0;
    }
    for (c = 0; c < 30; c++) {
      a.ea[c * 2] = 0;
    }
    for (c = 0; c < 19; c++) {
      a.D[c * 2] = 0;
    }
    a.I[512] = 1;
    a.Y = a.pa = 0;
    a.M = a.matches = 0;
  }
  function Bb(a) {
    if (a.C > 8) {
      wb(a, a.H);
    } else if (a.C > 0) {
      a.A[a.pending++] = a.H;
    }
    a.H = 0;
    a.C = 0;
  }
  function Cb(a, c, b) {
    Bb(a);
    wb(a, b);
    wb(a, ~b);
    A.ja(a.A, a.window, c, b, a.pending);
    a.pending += b;
  }
  function Db(a, c, b, e) {
    var d = c * 2;
    var f = b * 2;
    return a[d] < a[f] || a[d] === a[f] && e[c] <= e[b];
  }
  function Eb(a, c, b) {
    var e = a.B[b];
    for (var d = b << 1; d <= a.X;) {
      if (d < a.X && Db(c, a.B[d + 1], a.B[d], a.depth)) {
        d++;
      }
      if (Db(c, e, a.B[d], a.depth)) {
        break;
      }
      a.B[b] = a.B[d];
      b = d;
      d <<= 1;
    }
    a.B[b] = e;
  }
  function Fb(a, c, b) {
    var e = 0;
    if (a.M !== 0) {
      do {
        var d = a.A[a.ra + e * 2] << 8 | a.A[a.ra + e * 2 + 1];
        var f = a.A[a.Da + e];
        e++;
        if (d === 0) {
          P(a, f, c);
        } else {
          var g = L[f];
          P(a, g + 256 + 1, c);
          var h = lb[g];
          if (h !== 0) {
            f -= pb[g];
            M(a, f, h);
          }
          d--;
          g = d < 256 ? J[d] : J[256 + (d >>> 7)];
          P(a, g, b);
          h = mb[g];
          if (h !== 0) {
            d -= qb[g];
            M(a, d, h);
          }
        }
      } while (e < a.M);
    }
    P(a, 256, c);
  }
  function Gb(a, c) {
    var b = c.Ja;
    var e = c.ba.Qa;
    var d = c.ba.Ma;
    var f = c.ba.Ua;
    var g;
    var h = -1;
    a.X = 0;
    a.ka = 573;
    for (g = 0; g < f; g++) {
      if (b[g * 2] !== 0) {
        a.B[++a.X] = h = g;
        a.depth[g] = 0;
      } else {
        b[g * 2 + 1] = 0;
      }
    }
    while (a.X < 2) {
      var l = a.B[++a.X] = h < 2 ? ++h : 0;
      b[l * 2] = 1;
      a.depth[l] = 0;
      a.Y--;
      if (d) {
        a.pa -= e[l * 2 + 1];
      }
    }
    c.na = h;
    for (g = a.X >> 1; g >= 1; g--) {
      Eb(a, b, g);
    }
    l = f;
    do {
      g = a.B[1];
      a.B[1] = a.B[a.X--];
      Eb(a, b, 1);
      e = a.B[1];
      a.B[--a.ka] = g;
      a.B[--a.ka] = e;
      b[l * 2] = b[g * 2] + b[e * 2];
      a.depth[l] = (a.depth[g] >= a.depth[e] ? a.depth[g] : a.depth[e]) + 1;
      b[g * 2 + 1] = b[e * 2 + 1] = l;
      a.B[1] = l++;
      Eb(a, b, 1);
    } while (a.X >= 2);
    a.B[--a.ka] = a.B[1];
    g = c.Ja;
    l = c.na;
    e = c.ba.Qa;
    d = c.ba.Ma;
    f = c.ba.Wa;
    var k = c.ba.Va;
    var u = c.ba.gb;
    var n;
    var q = 0;
    for (n = 0; n <= 15; n++) {
      a.U[n] = 0;
    }
    g[a.B[a.ka] * 2 + 1] = 0;
    for (c = a.ka + 1; c < 573; c++) {
      var m = a.B[c];
      n = g[g[m * 2 + 1] * 2 + 1] + 1;
      if (n > u) {
        n = u;
        q++;
      }
      g[m * 2 + 1] = n;
      if (!(m > l)) {
        a.U[n]++;
        var t = 0;
        if (m >= k) {
          t = f[m - k];
        }
        var w = g[m * 2];
        a.Y += w * (n + t);
        if (d) {
          a.pa += w * (e[m * 2 + 1] + t);
        }
      }
    }
    if (q !== 0) {
      do {
        for (n = u - 1; a.U[n] === 0;) {
          n--;
        }
        a.U[n]--;
        a.U[n + 1] += 2;
        a.U[u]--;
        q -= 2;
      } while (q > 0);
      for (n = u; n !== 0; n--) {
        for (m = a.U[n]; m !== 0;) {
          e = a.B[--c];
          if (!(e > l)) {
            if (g[e * 2 + 1] !== n) {
              a.Y += (n - g[e * 2 + 1]) * g[e * 2];
              g[e * 2 + 1] = n;
            }
            m--;
          }
        }
      }
    }
    yb(b, h, a.U);
  }
  function Hb(a, c, b) {
    var e;
    var d = -1;
    var f = c[1];
    var g = 0;
    var h = 7;
    var l = 4;
    if (f === 0) {
      h = 138;
      l = 3;
    }
    c[(b + 1) * 2 + 1] = 65535;
    for (e = 0; e <= b; e++) {
      var k = f;
      f = c[(e + 1) * 2 + 1];
      if (!(++g < h) || k !== f) {
        if (g < l) {
          a.D[k * 2] += g;
        } else if (k !== 0) {
          if (k !== d) {
            a.D[k * 2]++;
          }
          a.D[32]++;
        } else if (g <= 10) {
          a.D[34]++;
        } else {
          a.D[36]++;
        }
        g = 0;
        d = k;
        if (f === 0) {
          h = 138;
          l = 3;
        } else if (k === f) {
          h = 6;
          l = 3;
        } else {
          h = 7;
          l = 4;
        }
      }
    }
  }
  function Ib(a, c, b) {
    var e;
    var d = -1;
    var f = c[1];
    var g = 0;
    var h = 7;
    var l = 4;
    if (f === 0) {
      h = 138;
      l = 3;
    }
    for (e = 0; e <= b; e++) {
      var k = f;
      f = c[(e + 1) * 2 + 1];
      if (!(++g < h) || k !== f) {
        if (g < l) {
          do {
            P(a, k, a.D);
          } while (--g !== 0);
        } else if (k !== 0) {
          if (k !== d) {
            P(a, k, a.D);
            g--;
          }
          P(a, 16, a.D);
          M(a, g - 3, 2);
        } else if (g <= 10) {
          P(a, 17, a.D);
          M(a, g - 3, 3);
        } else {
          P(a, 18, a.D);
          M(a, g - 11, 7);
        }
        g = 0;
        d = k;
        if (f === 0) {
          h = 138;
          l = 3;
        } else if (k === f) {
          h = 6;
          l = 3;
        } else {
          h = 7;
          l = 4;
        }
      }
    }
  }
  function Jb(a) {
    var c = 4093624447;
    var b;
    for (b = 0; b <= 31; b++, c >>>= 1) {
      if (c & 1 && a.I[b * 2] !== 0) {
        return 0;
      }
    }
    if (a.I[18] !== 0 || a.I[20] !== 0 || a.I[26] !== 0) {
      return 1;
    }
    for (b = 32; b < 256; b++) {
      if (a.I[b * 2] !== 0) {
        return 1;
      }
    }
    return 0;
  }
  var Kb = false;
  function Q(a, c, b) {
    a.A[a.ra + a.M * 2] = c >>> 8 & 255;
    a.A[a.ra + a.M * 2 + 1] = c & 255;
    a.A[a.Da + a.M] = b & 255;
    a.M++;
    if (c === 0) {
      a.I[b * 2]++;
    } else {
      a.matches++;
      c--;
      a.I[(L[b] + 256 + 1) * 2]++;
      a.ea[(c < 256 ? J[c] : J[256 + (c >>> 7)]) * 2]++;
    }
    return a.M === a.ta - 1;
  }
  ;
  function R(a, c) {
    a.ua = E[c];
    return c;
  }
  function S(a) {
    for (var c = a.length; --c >= 0;) {
      a[c] = 0;
    }
  }
  function T(a) {
    var c = a.state;
    var b = c.pending;
    if (b > a.u) {
      b = a.u;
    }
    if (b !== 0) {
      A.ja(a.output, c.A, c.va, b, a.oa);
      a.oa += b;
      c.va += b;
      a.Ga += b;
      a.u -= b;
      c.pending -= b;
      if (c.pending === 0) {
        c.va = 0;
      }
    }
  }
  function U(a, c) {
    var b = a.K >= 0 ? a.K : -1;
    var e = a.h - a.K;
    var d = 0;
    if (a.level > 0) {
      if (a.m.Ba === 2) {
        a.m.Ba = Jb(a);
      }
      Gb(a, a.za);
      Gb(a, a.wa);
      Hb(a, a.I, a.za.na);
      Hb(a, a.ea, a.wa.na);
      Gb(a, a.Ia);
      for (d = 18; d >= 3 && a.D[ob[d] * 2 + 1] === 0; d--);
      a.Y += (d + 1) * 3 + 5 + 5 + 4;
      var f = a.Y + 3 + 7 >>> 3;
      var g = a.pa + 3 + 7 >>> 3;
      if (g <= f) {
        f = g;
      }
    } else {
      f = g = e + 5;
    }
    if (e + 4 <= f && b !== -1) {
      M(a, c ? 1 : 0, 3);
      Cb(a, b, e);
    } else if (a.S === 4 || g === f) {
      M(a, 2 + (c ? 1 : 0), 3);
      Fb(a, H, I);
    } else {
      M(a, 4 + (c ? 1 : 0), 3);
      b = a.za.na + 1;
      e = a.wa.na + 1;
      d += 1;
      M(a, b - 257, 5);
      M(a, e - 1, 5);
      M(a, d - 4, 4);
      for (f = 0; f < d; f++) {
        M(a, a.D[ob[f] * 2 + 1], 3);
      }
      Ib(a, a.I, b - 1);
      Ib(a, a.ea, e - 1);
      Fb(a, a.I, a.ea);
    }
    Ab(a);
    if (c) {
      Bb(a);
    }
    a.K = a.h;
    T(a.m);
  }
  function V(a, c) {
    a.A[a.pending++] = c;
  }
  function Lb(a, c) {
    a.A[a.pending++] = c >>> 8 & 255;
    a.A[a.pending++] = c & 255;
  }
  function Mb(a, c) {
    var b = a.Na;
    var e = a.h;
    var d = a.L;
    var f = a.Oa;
    var g = a.h > a.F - 262 ? a.h - (a.F - 262) : 0;
    var h = a.window;
    var l = a.ca;
    var k = a.R;
    var u = a.h + 258;
    var n = h[e + d - 1];
    var q = h[e + d];
    if (a.L >= a.La) {
      b >>= 2;
    }
    if (f > a.i) {
      f = a.i;
    }
    do {
      var m = c;
      if (h[m + d] === q && h[m + d - 1] === n && h[m] === h[e] && h[++m] === h[e + 1]) {
        e += 2;
        for (m++; h[++e] === h[++m] && h[++e] === h[++m] && h[++e] === h[++m] && h[++e] === h[++m] && h[++e] === h[++m] && h[++e] === h[++m] && h[++e] === h[++m] && h[++e] === h[++m] && e < u;);
        m = 258 - (u - e);
        e = u - 258;
        if (m > d) {
          a.ma = c;
          d = m;
          if (m >= f) {
            break;
          }
          n = h[e + d - 1];
          q = h[e + d];
        }
      }
    } while ((c = k[c & l]) > g && --b !== 0);
    if (d <= a.i) {
      return d;
    } else {
      return a.i;
    }
  }
  function W(a) {
    var c = a.F;
    var b;
    do {
      var e = a.Ra - a.i - a.h;
      if (a.h >= c + (c - 262)) {
        A.ja(a.window, a.window, c, c, 0);
        a.ma -= c;
        a.h -= c;
        a.K -= c;
        var d = b = a.xa;
        do {
          var f = a.head[--d];
          a.head[d] = f >= c ? f - c : 0;
        } while (--b);
        d = b = c;
        do {
          f = a.R[--d];
          a.R[d] = f >= c ? f - c : 0;
        } while (--b);
        e += c;
      }
      if (a.m.G === 0) {
        break;
      }
      d = a.m;
      b = a.window;
      f = a.h + a.i;
      var g = d.G;
      if (g > e) {
        g = e;
      }
      if (g === 0) {
        b = 0;
      } else {
        d.G -= g;
        A.ja(b, d.input, d.ga, g, f);
        if (d.state.wrap === 1) {
          d.l = hb(d.l, b, g, f);
        } else if (d.state.wrap === 2) {
          d.l = B(d.l, b, g, f);
        }
        d.ga += g;
        d.ha += g;
        b = g;
      }
      a.i += b;
      if (a.i + a.J >= 3) {
        e = a.h - a.J;
        a.o = a.window[e];
        a.o = (a.o << a.W ^ a.window[e + 1]) & a.V;
        while (a.J && !(a.o = (a.o << a.W ^ a.window[e + 3 - 1]) & a.V, a.R[e & a.ca] = a.head[a.o], a.head[a.o] = e, e++, a.J--, a.i + a.J < 3));
      }
    } while (a.i < 262 && a.m.G !== 0);
  }
  function Nb(a, c) {
    for (var b;;) {
      if (a.i < 262) {
        W(a);
        if (a.i < 262 && c === 0) {
          return 1;
        }
        if (a.i === 0) {
          break;
        }
      }
      b = 0;
      if (a.i >= 3) {
        a.o = (a.o << a.W ^ a.window[a.h + 3 - 1]) & a.V;
        b = a.R[a.h & a.ca] = a.head[a.o];
        a.head[a.o] = a.h;
      }
      if (b !== 0 && a.h - b <= a.F - 262) {
        a.v = Mb(a, b);
      }
      if (a.v >= 3) {
        b = Q(a, a.h - a.ma, a.v - 3);
        a.i -= a.v;
        if (a.v <= a.Ea && a.i >= 3) {
          a.v--;
          do {
            a.h++;
            a.o = (a.o << a.W ^ a.window[a.h + 3 - 1]) & a.V;
            a.R[a.h & a.ca] = a.head[a.o];
            a.head[a.o] = a.h;
          } while (--a.v !== 0);
          a.h++;
        } else {
          a.h += a.v;
          a.v = 0;
          a.o = a.window[a.h];
          a.o = (a.o << a.W ^ a.window[a.h + 1]) & a.V;
        }
      } else {
        b = Q(a, 0, a.window[a.h]);
        a.i--;
        a.h++;
      }
      if (b && (U(a, false), a.m.u === 0)) {
        return 1;
      }
    }
    a.J = a.h < 2 ? a.h : 2;
    if (c === 4) {
      U(a, true);
      if (a.m.u === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (a.M && (U(a, false), a.m.u === 0)) {
      return 1;
    } else {
      return 2;
    }
  }
  function X(a, c) {
    var b;
    var e;
    while (true) {
      if (a.i < 262) {
        W(a);
        if (a.i < 262 && c === 0) {
          return 1;
        }
        if (a.i === 0) {
          break;
        }
      }
      b = 0;
      if (a.i >= 3) {
        a.o = (a.o << a.W ^ a.window[a.h + 3 - 1]) & a.V;
        b = a.R[a.h & a.ca] = a.head[a.o];
        a.head[a.o] = a.h;
      }
      a.L = a.v;
      a.Pa = a.ma;
      a.v = 2;
      if (b !== 0 && a.L < a.Ea && a.h - b <= a.F - 262) {
        a.v = Mb(a, b);
        if (a.v <= 5 && (a.S === 1 || a.v === 3 && a.h - a.ma > 4096)) {
          a.v = 2;
        }
      }
      if (a.L >= 3 && a.v <= a.L) {
        e = a.h + a.i - 3;
        b = Q(a, a.h - 1 - a.Pa, a.L - 3);
        a.i -= a.L - 1;
        a.L -= 2;
        do {
          if (++a.h <= e) {
            a.o = (a.o << a.W ^ a.window[a.h + 3 - 1]) & a.V;
            a.R[a.h & a.ca] = a.head[a.o];
            a.head[a.o] = a.h;
          }
        } while (--a.L !== 0);
        a.fa = 0;
        a.v = 2;
        a.h++;
        if (b && (U(a, false), a.m.u === 0)) {
          return 1;
        }
      } else if (a.fa) {
        if (b = Q(a, 0, a.window[a.h - 1])) {
          U(a, false);
        }
        a.h++;
        a.i--;
        if (a.m.u === 0) {
          return 1;
        }
      } else {
        a.fa = 1;
        a.h++;
        a.i--;
      }
    }
    if (a.fa) {
      Q(a, 0, a.window[a.h - 1]);
      a.fa = 0;
    }
    a.J = a.h < 2 ? a.h : 2;
    if (c === 4) {
      U(a, true);
      if (a.m.u === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (a.M && (U(a, false), a.m.u === 0)) {
      return 1;
    } else {
      return 2;
    }
  }
  function Ob(a, c) {
    var b;
    var e;
    var d;
    var f = a.window;
    while (true) {
      if (a.i <= 258) {
        W(a);
        if (a.i <= 258 && c === 0) {
          return 1;
        }
        if (a.i === 0) {
          break;
        }
      }
      a.v = 0;
      if (a.i >= 3 && a.h > 0 && (e = a.h - 1, b = f[e], b === f[++e] && b === f[++e] && b === f[++e])) {
        for (d = a.h + 258; b === f[++e] && b === f[++e] && b === f[++e] && b === f[++e] && b === f[++e] && b === f[++e] && b === f[++e] && b === f[++e] && e < d;);
        a.v = 258 - (d - e);
        if (a.v > a.i) {
          a.v = a.i;
        }
      }
      if (a.v >= 3) {
        b = Q(a, 1, a.v - 3);
        a.i -= a.v;
        a.h += a.v;
        a.v = 0;
      } else {
        b = Q(a, 0, a.window[a.h]);
        a.i--;
        a.h++;
      }
      if (b && (U(a, false), a.m.u === 0)) {
        return 1;
      }
    }
    a.J = 0;
    if (c === 4) {
      U(a, true);
      if (a.m.u === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (a.M && (U(a, false), a.m.u === 0)) {
      return 1;
    } else {
      return 2;
    }
  }
  function Pb(a, c) {
    var b;
    for (;;) {
      if (a.i === 0 && (W(a), a.i === 0)) {
        if (c === 0) {
          return 1;
        }
        break;
      }
      a.v = 0;
      b = Q(a, 0, a.window[a.h]);
      a.i--;
      a.h++;
      if (b && (U(a, false), a.m.u === 0)) {
        return 1;
      }
    }
    a.J = 0;
    if (c === 4) {
      U(a, true);
      if (a.m.u === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (a.M && (U(a, false), a.m.u === 0)) {
      return 1;
    } else {
      return 2;
    }
  }
  function Y(a, c, b, e, d) {
    this.Ya = a;
    this.fb = c;
    this.ib = b;
    this.eb = e;
    this.Xa = d;
  }
  var Z;
  Z = [new Y(0, 0, 0, 0, function (a, c) {
    var b = 65535;
    for (b > a.N - 5 && (b = a.N - 5);;) {
      if (a.i <= 1) {
        W(a);
        if (a.i === 0 && c === 0) {
          return 1;
        }
        if (a.i === 0) {
          break;
        }
      }
      a.h += a.i;
      a.i = 0;
      var e = a.K + b;
      if (a.h === 0 || a.h >= e) {
        a.i = a.h - e;
        a.h = e;
        U(a, false);
        if (a.m.u === 0) {
          return 1;
        }
      }
      if (a.h - a.K >= a.F - 262 && (U(a, false), a.m.u === 0)) {
        return 1;
      }
    }
    a.J = 0;
    if (c === 4) {
      U(a, true);
      if (a.m.u === 0) {
        return 3;
      } else {
        return 4;
      }
    }
    if (a.h > a.K) {
      U(a, false);
    }
    return 1;
  }), new Y(4, 4, 8, 4, Nb), new Y(4, 5, 16, 8, Nb), new Y(4, 6, 32, 32, Nb), new Y(4, 4, 16, 16, X), new Y(8, 16, 32, 32, X), new Y(8, 16, 128, 128, X), new Y(8, 32, 128, 256, X), new Y(32, 128, 258, 1024, X), new Y(32, 258, 258, 4096, X)];
  function Qb() {
    this.m = null;
    this.status = 0;
    this.A = null;
    this.wrap = this.pending = this.va = this.N = 0;
    this.j = null;
    this.O = 0;
    this.method = 8;
    this.la = -1;
    this.ca = this.Ha = this.F = 0;
    this.window = null;
    this.Ra = 0;
    this.head = this.R = null;
    this.Oa = this.La = this.S = this.level = this.Ea = this.Na = this.L = this.i = this.ma = this.h = this.fa = this.Pa = this.v = this.K = this.W = this.V = this.Ca = this.xa = this.o = 0;
    this.I = new A.T(1146);
    this.ea = new A.T(122);
    this.D = new A.T(78);
    S(this.I);
    S(this.ea);
    S(this.D);
    this.Ia = this.wa = this.za = null;
    this.U = new A.T(16);
    this.B = new A.T(573);
    S(this.B);
    this.ka = this.X = 0;
    this.depth = new A.T(573);
    S(this.depth);
    this.C = this.H = this.J = this.matches = this.pa = this.Y = this.ra = this.M = this.ta = this.Da = 0;
  }
  function Rb(a, c) {
    if (!a || !a.state || c > 5 || c < 0) {
      if (a) {
        return R(a, -2);
      } else {
        return -2;
      }
    }
    var b = a.state;
    if (!a.output || !a.input && a.G !== 0 || b.status === 666 && c !== 4) {
      return R(a, a.u === 0 ? -5 : -2);
    }
    b.m = a;
    var e = b.la;
    b.la = c;
    if (b.status === 42) {
      if (b.wrap === 2) {
        a.l = 0;
        V(b, 31);
        V(b, 139);
        V(b, 8);
        if (b.j) {
          V(b, (b.j.text ? 1 : 0) + (b.j.aa ? 2 : 0) + (b.j.Z ? 4 : 0) + (b.j.name ? 8 : 0) + (b.j.Aa ? 16 : 0));
          V(b, b.j.time & 255);
          V(b, b.j.time >> 8 & 255);
          V(b, b.j.time >> 16 & 255);
          V(b, b.j.time >> 24 & 255);
          V(b, b.level === 9 ? 2 : b.S >= 2 || b.level < 2 ? 4 : 0);
          V(b, b.j.mb & 255);
          if (b.j.Z && b.j.Z.length) {
            V(b, b.j.Z.length & 255);
            V(b, b.j.Z.length >> 8 & 255);
          }
          if (b.j.aa) {
            a.l = B(a.l, b.A, b.pending, 0);
          }
          b.O = 0;
          b.status = 69;
        } else {
          V(b, 0);
          V(b, 0);
          V(b, 0);
          V(b, 0);
          V(b, 0);
          V(b, b.level === 9 ? 2 : b.S >= 2 || b.level < 2 ? 4 : 0);
          V(b, 3);
          b.status = 113;
        }
      } else {
        var d = 8 + (b.Ha - 8 << 4) << 8;
        d |= (b.S >= 2 || b.level < 2 ? 0 : b.level < 6 ? 1 : b.level === 6 ? 2 : 3) << 6;
        if (b.h !== 0) {
          d |= 32;
        }
        d += 31 - d % 31;
        b.status = 113;
        Lb(b, d);
        if (b.h !== 0) {
          Lb(b, a.l >>> 16);
          Lb(b, a.l & 65535);
        }
        a.l = 1;
      }
    }
    if (b.status === 69) {
      if (b.j.Z) {
        for (d = b.pending; b.O < (b.j.Z.length & 65535) && (b.pending !== b.N || (b.j.aa && b.pending > d && (a.l = B(a.l, b.A, b.pending - d, d)), T(a), d = b.pending, b.pending !== b.N));) {
          V(b, b.j.Z[b.O] & 255);
          b.O++;
        }
        if (b.j.aa && b.pending > d) {
          a.l = B(a.l, b.A, b.pending - d, d);
        }
        if (b.O === b.j.Z.length) {
          b.O = 0;
          b.status = 73;
        }
      } else {
        b.status = 73;
      }
    }
    if (b.status === 73) {
      if (b.j.name) {
        d = b.pending;
        do {
          if (b.pending === b.N && (b.j.aa && b.pending > d && (a.l = B(a.l, b.A, b.pending - d, d)), T(a), d = b.pending, b.pending === b.N)) {
            var f = 1;
            break;
          }
          f = b.O < b.j.name.length ? b.j.name.charCodeAt(b.O++) & 255 : 0;
          V(b, f);
        } while (f !== 0);
        if (b.j.aa && b.pending > d) {
          a.l = B(a.l, b.A, b.pending - d, d);
        }
        if (f === 0) {
          b.O = 0;
          b.status = 91;
        }
      } else {
        b.status = 91;
      }
    }
    if (b.status === 91) {
      if (b.j.Aa) {
        d = b.pending;
        do {
          if (b.pending === b.N && (b.j.aa && b.pending > d && (a.l = B(a.l, b.A, b.pending - d, d)), T(a), d = b.pending, b.pending === b.N)) {
            f = 1;
            break;
          }
          f = b.O < b.j.Aa.length ? b.j.Aa.charCodeAt(b.O++) & 255 : 0;
          V(b, f);
        } while (f !== 0);
        if (b.j.aa && b.pending > d) {
          a.l = B(a.l, b.A, b.pending - d, d);
        }
        if (f === 0) {
          b.status = 103;
        }
      } else {
        b.status = 103;
      }
    }
    if (b.status === 103) {
      if (b.j.aa) {
        if (b.pending + 2 > b.N) {
          T(a);
        }
        if (b.pending + 2 <= b.N) {
          V(b, a.l & 255);
          V(b, a.l >> 8 & 255);
          a.l = 0;
          b.status = 113;
        }
      } else {
        b.status = 113;
      }
    }
    if (b.pending !== 0) {
      T(a);
      if (a.u === 0) {
        b.la = -1;
        return 0;
      }
    } else if (a.G === 0 && (c << 1) - (c > 4 ? 9 : 0) <= (e << 1) - (e > 4 ? 9 : 0) && c !== 4) {
      return R(a, -5);
    }
    if (b.status === 666 && a.G !== 0) {
      return R(a, -5);
    }
    if (a.G !== 0 || b.i !== 0 || c !== 0 && b.status !== 666) {
      e = b.S === 2 ? Pb(b, c) : b.S === 3 ? Ob(b, c) : Z[b.level].Xa(b, c);
      if (e === 3 || e === 4) {
        b.status = 666;
      }
      if (e === 1 || e === 3) {
        if (a.u === 0) {
          b.la = -1;
        }
        return 0;
      }
      if (e === 2 && (c === 1 ? (M(b, 2, 3), P(b, 256, H), b.C === 16 ? (wb(b, b.H), b.H = 0, b.C = 0) : b.C >= 8 && (b.A[b.pending++] = b.H & 255, b.H >>= 8, b.C -= 8)) : c !== 5 && (M(b, 0, 3), Cb(b, 0, 0), c === 3 && (S(b.head), b.i === 0 && (b.h = 0, b.K = 0, b.J = 0))), T(a), a.u === 0)) {
        b.la = -1;
        return 0;
      }
    }
    if (c !== 4) {
      return 0;
    }
    if (b.wrap <= 0) {
      return 1;
    }
    if (b.wrap === 2) {
      V(b, a.l & 255);
      V(b, a.l >> 8 & 255);
      V(b, a.l >> 16 & 255);
      V(b, a.l >> 24 & 255);
      V(b, a.ha & 255);
      V(b, a.ha >> 8 & 255);
      V(b, a.ha >> 16 & 255);
      V(b, a.ha >> 24 & 255);
    } else {
      Lb(b, a.l >>> 16);
      Lb(b, a.l & 65535);
    }
    T(a);
    if (b.wrap > 0) {
      b.wrap = -b.wrap;
    }
    if (b.pending !== 0) {
      return 0;
    } else {
      return 1;
    }
  }
  ;
  var Sb = {};
  Sb = function () {
    this.input = null;
    this.ha = this.G = this.ga = 0;
    this.output = null;
    this.Ga = this.u = this.oa = 0;
    this.ua = "";
    this.state = null;
    this.Ba = 2;
    this.l = 0;
  };
  var Tb = Object.prototype.toString;
  function Ub(a) {
    if (!(this instanceof Ub)) {
      return new Ub(a);
    }
    a = this.options = A.assign({
      level: -1,
      method: 8,
      Ta: 16384,
      da: 15,
      hb: 8,
      S: 0,
      to: ""
    }, a || {});
    if (a.raw && a.da > 0) {
      a.da = -a.da;
    } else if (a.Za && a.da > 0 && a.da < 16) {
      a.da += 16;
    }
    this.err = 0;
    this.ua = "";
    this.ended = false;
    this.qa = [];
    this.m = new Sb();
    this.m.u = 0;
    var c = this.m;
    var b = a.level;
    var e = a.method;
    var d = a.da;
    var f = a.hb;
    var g = a.S;
    if (c) {
      var h = 1;
      if (b === -1) {
        b = 6;
      }
      if (d < 0) {
        h = 0;
        d = -d;
      } else if (d > 15) {
        h = 2;
        d -= 16;
      }
      if (f < 1 || f > 9 || e !== 8 || d < 8 || d > 15 || b < 0 || b > 9 || g < 0 || g > 4) {
        c = R(c, -2);
      } else {
        if (d === 8) {
          d = 9;
        }
        var l = new Qb();
        c.state = l;
        l.m = c;
        l.wrap = h;
        l.j = null;
        l.Ha = d;
        l.F = 1 << l.Ha;
        l.ca = l.F - 1;
        l.Ca = f + 7;
        l.xa = 1 << l.Ca;
        l.V = l.xa - 1;
        l.W = ~~((l.Ca + 3 - 1) / 3);
        l.window = new A.ia(l.F * 2);
        l.head = new A.T(l.xa);
        l.R = new A.T(l.F);
        l.ta = 1 << f + 6;
        l.N = l.ta * 4;
        l.A = new A.ia(l.N);
        l.ra = l.ta * 1;
        l.Da = l.ta * 3;
        l.level = b;
        l.S = g;
        l.method = e;
        if (c && c.state) {
          c.ha = c.Ga = 0;
          c.Ba = 2;
          b = c.state;
          b.pending = 0;
          b.va = 0;
          if (b.wrap < 0) {
            b.wrap = -b.wrap;
          }
          b.status = b.wrap ? 42 : 113;
          c.l = b.wrap === 2 ? 0 : 1;
          b.la = 0;
          if (!Kb) {
            e = Array(16);
            for (f = g = 0; f < 28; f++) {
              pb[f] = g;
              d = 0;
              for (; d < 1 << lb[f]; d++) {
                L[g++] = f;
              }
            }
            L[g - 1] = f;
            for (f = g = 0; f < 16; f++) {
              qb[f] = g;
              d = 0;
              for (; d < 1 << mb[f]; d++) {
                J[g++] = f;
              }
            }
            for (g >>= 7; f < 30; f++) {
              qb[f] = g << 7;
              d = 0;
              for (; d < 1 << mb[f] - 7; d++) {
                J[256 + g++] = f;
              }
            }
            for (d = 0; d <= 15; d++) {
              e[d] = 0;
            }
            for (d = 0; d <= 143;) {
              H[d * 2 + 1] = 8;
              d++;
              e[8]++;
            }
            while (d <= 255) {
              H[d * 2 + 1] = 9;
              d++;
              e[9]++;
            }
            while (d <= 279) {
              H[d * 2 + 1] = 7;
              d++;
              e[7]++;
            }
            while (d <= 287) {
              H[d * 2 + 1] = 8;
              d++;
              e[8]++;
            }
            yb(H, 287, e);
            for (d = 0; d < 30; d++) {
              I[d * 2 + 1] = 5;
              I[d * 2] = xb(d, 5);
            }
            sb = new rb(H, lb, 257, 286, 15);
            tb = new rb(I, mb, 0, 30, 15);
            ub = new rb([], nb, 0, 19, 7);
            Kb = true;
          }
          b.za = new vb(b.I, sb);
          b.wa = new vb(b.ea, tb);
          b.Ia = new vb(b.D, ub);
          b.H = 0;
          b.C = 0;
          Ab(b);
          b = 0;
        } else {
          b = R(c, -2);
        }
        if (b === 0) {
          c = c.state;
          c.Ra = c.F * 2;
          S(c.head);
          c.Ea = Z[c.level].fb;
          c.La = Z[c.level].Ya;
          c.Oa = Z[c.level].ib;
          c.Na = Z[c.level].eb;
          c.h = 0;
          c.K = 0;
          c.i = 0;
          c.J = 0;
          c.v = c.L = 2;
          c.fa = 0;
          c.o = 0;
        }
        c = b;
      }
    } else {
      c = -2;
    }
    if (c !== 0) {
      throw Error(E[c]);
    }
    if (a.ab && (c = this.m) && c.state && c.state.wrap === 2) {
      c.state.j = a.ab;
    }
    if (a.sa) {
      var k;
      if (typeof a.sa === "string") {
        k = gb(a.sa);
      } else if (Tb.call(a.sa) === "[object ArrayBuffer]") {
        k = new Uint8Array(a.sa);
      } else {
        k = a.sa;
      }
      a = this.m;
      f = k;
      g = f.length;
      if (a && a.state) {
        k = a.state;
        c = k.wrap;
        if (c === 2 || c === 1 && k.status !== 42 || k.i) {
          c = -2;
        } else {
          if (c === 1) {
            a.l = hb(a.l, f, g, 0);
          }
          k.wrap = 0;
          if (g >= k.F) {
            if (c === 0) {
              S(k.head);
              k.h = 0;
              k.K = 0;
              k.J = 0;
            }
            b = new A.ia(k.F);
            A.ja(b, f, g - k.F, k.F, 0);
            f = b;
            g = k.F;
          }
          b = a.G;
          e = a.ga;
          d = a.input;
          a.G = g;
          a.ga = 0;
          a.input = f;
          for (W(k); k.i >= 3;) {
            f = k.h;
            g = k.i - 2;
            do {
              k.o = (k.o << k.W ^ k.window[f + 3 - 1]) & k.V;
              k.R[f & k.ca] = k.head[k.o];
              k.head[k.o] = f;
              f++;
            } while (--g);
            k.h = f;
            k.i = 2;
            W(k);
          }
          k.h += k.i;
          k.K = k.h;
          k.J = k.i;
          k.i = 0;
          k.v = k.L = 2;
          k.fa = 0;
          a.ga = e;
          a.input = d;
          a.G = b;
          k.wrap = c;
          c = 0;
        }
      } else {
        c = -2;
      }
      if (c !== 0) {
        throw Error(E[c]);
      }
      this.kb = true;
    }
  }
  Ub.prototype.push = function (a, c) {
    var b = this.m;
    var e = this.options.Ta;
    if (this.ended) {
      return false;
    }
    var d = c === ~~c ? c : c === true ? 4 : 0;
    if (typeof a === "string") {
      b.input = gb(a);
    } else if (Tb.call(a) === "[object ArrayBuffer]") {
      b.input = new Uint8Array(a);
    } else {
      b.input = a;
    }
    b.ga = 0;
    b.G = b.input.length;
    do {
      if (b.u === 0) {
        b.output = new A.ia(e);
        b.oa = 0;
        b.u = e;
      }
      a = Rb(b, d);
      if (a !== 1 && a !== 0) {
        Vb(this, a);
        this.ended = true;
        return false;
      }
      if (b.u === 0 || b.G === 0 && (d === 4 || d === 2)) {
        if (this.options.to === "string") {
          var f = A.Fa(b.output, b.oa);
          c = f;
          f = f.length;
          if (f < 65537 && (c.subarray && fb || !c.subarray)) {
            c = String.fromCharCode.apply(null, A.Fa(c, f));
          } else {
            var g = "";
            for (var h = 0; h < f; h++) {
              g += String.fromCharCode(c[h]);
            }
            c = g;
          }
          this.qa.push(c);
        } else {
          c = A.Fa(b.output, b.oa);
          this.qa.push(c);
        }
      }
    } while ((b.G > 0 || b.u === 0) && a !== 1);
    if (d === 4) {
      if ((b = this.m) && b.state) {
        e = b.state.status;
        if (e !== 42 && e !== 69 && e !== 73 && e !== 91 && e !== 103 && e !== 113 && e !== 666) {
          a = R(b, -2);
        } else {
          b.state = null;
          a = e === 113 ? R(b, -3) : 0;
        }
      } else {
        a = -2;
      }
      Vb(this, a);
      this.ended = true;
      return a === 0;
    }
    if (d === 2) {
      Vb(this, 0);
      b.u = 0;
    }
    return true;
  };
  function Vb(a, c) {
    if (c === 0) {
      a.result = a.options.to === "string" ? a.qa.join("") : A.Ka(a.qa);
    }
    a.qa = [];
    a.err = c;
    a.ua = a.m.ua;
  }
  ;
  function Wb(a) {
    this.P = Wa(a, 500, undefined, 2048);
  }
  ka(Wb, z);
  function Xb(a) {
    this.P = Wa(a, undefined, undefined, 2048);
  }
  ka(Xb, z);
  var Yb = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
  var Zb = Yb ? function (a) {
    return Yb.encode(a);
  } : function (a) {
    var c = [];
    var b = 0;
    for (var e = 0; e < a.length; e++) {
      var d = a.charCodeAt(e);
      if (d < 128) {
        c[b++] = d;
      } else {
        if (d < 2048) {
          c[b++] = d >> 6 | 192;
        } else {
          if ((d & 64512) == 55296 && e + 1 < a.length && (a.charCodeAt(e + 1) & 64512) == 56320) {
            d = 65536 + ((d & 1023) << 10) + (a.charCodeAt(++e) & 1023);
            c[b++] = d >> 18 | 240;
            c[b++] = d >> 12 & 63 | 128;
          } else {
            c[b++] = d >> 12 | 224;
          }
          c[b++] = d >> 6 & 63 | 128;
        }
        c[b++] = d & 63 | 128;
      }
    }
    a = new Uint8Array(c.length);
    for (b = 0; b < a.length; b++) {
      a[b] = c[b];
    }
    return a;
  };
  self.addEventListener("message", function (a) {
    var c = a.data;
    if (c.op === "gelBatchToSerialize") {
      var b = c.clientEvents;
      a = c.key;
      c = bb(Xb, c.batchRequest);
      for (var e = 0; e < b.length; e++) {
        var d = c;
        var f = bb(Wb, b[e]);
        var g = Wb;
        var h = d;
        if (!$a(h) && x(h, h.P[r] | 0)) {
          throw Error();
        }
        var l = d.P;
        h = undefined;
        var k = d;
        var u = d = l;
        var n = l[r] | 0;
        l = (k ? x(k, n) : n & 2) ? 1 : 2;
        if (l === 2 && k && $a(k)) {
          u = k.P;
          n = u[r] | 0;
        }
        a: {
          var q = u.length - 1;
          if (q < 0) {
            k = undefined;
          } else if (q <= 2) {
            k = u[q];
            if (k != null && typeof k === "object" && k.constructor === Object) {
              k = k[3];
            } else if (q !== 2) {
              k = undefined;
              break a;
            }
          } else {
            k = u[2];
          }
        }
        q = Array.isArray(k) ? k : Da;
        var m = q === Da ? 7 : q[r] | 0;
        k = m;
        if (n & 2) {
          k |= 2;
        }
        var t = k |= 1;
        if (k = !(t & 4)) {
          var w = q;
          var C = n;
          var K = !!(t & 2);
          if (K) {
            C |= 2;
          }
          var La = !K;
          var Ma = true;
          for (var na = 0, Na = 0; na < w.length; na++) {
            var N = w[na];
            var $b = g;
            var zb = C;
            if (N != null && N[Aa] === Ga) {
              var F = N;
            } else if (Array.isArray(N)) {
              F = N[r] | 0;
              var O = F | zb & 32;
              O |= zb & 2;
              if (O !== F) {
                v(N, O);
              }
              F = new $b(N);
            } else {
              F = undefined;
            }
            O = F;
            if (O instanceof g) {
              if (!K) {
                F = x(O);
                La &&= !F;
                Ma &&= F;
              }
              w[Na++] = O;
            }
          }
          if (Na < na) {
            w.length = Na;
          }
          t |= 4;
          t = Ma ? t & -4097 : t | 4096;
          t = La ? t | 8 : t & -9;
        }
        if (t !== m) {
          v(q, t);
          if (t & 2) {
            Object.freeze(q);
          }
        }
        m = t;
        w = n;
        n = m;
        if ((t = !!(m & 2) && !!(m & 4) || !!(m & 256)) && l === 2) {
          q = Array.prototype.slice.call(q);
          n = 0;
          m = w & 2 ? m | 2 : m & -3;
          m &= -273;
          a: {
            t = q;
            C = u.length - 1;
            if (C >= 0 && C <= 2 && (K = u[C], K != null && typeof K === "object" && K.constructor === Object)) {
              K[3] = t;
              break a;
            }
            if (C >= 2) {
              u[2] = t;
            } else if (t !== undefined) {
              C = ((h = w) != null ? h : w = u[r] | 0) >> 14 & 1023 || 536870912;
              if (C <= 3) {
                if (t != null) {
                  h = {};
                  u[C + -1] = (h[3] = t, h);
                }
              } else {
                u[2] = t;
              }
            }
          }
          t = false;
        }
        if (!t) {
          if (l === 1 || (l !== 4 ? 0 : m & 2 || !(m & 16) && w & 32)) {
            m |= !q.length || k && !(m & 4096) || w & 32 && !(m & 4096) && !(m & 16) ? 2 : 256;
            if (m !== n) {
              v(q, m);
            }
            Object.freeze(q);
          } else if (m !== n) {
            v(q, m);
          }
        }
        if (!(m & 2) && (!!(m & 4096) || !!(m & 16))) {
          ab(u, w);
        }
        h = q;
        if (f != null) {
          if (!(f instanceof g)) {
            throw Error("Expected instanceof " + Qa(g) + " but got " + (f && Qa(f.constructor)));
          }
        } else {
          f = new g();
        }
        h.push(f);
        l = g = h === Da ? 7 : h[r] | 0;
        if (f = x(f)) {
          g &= -9;
          if (h.length === 1) {
            g &= -4097;
          }
        } else {
          g |= 4096;
        }
        if (g !== l) {
          v(h, g);
        }
        if (!f) {
          ab(d);
        }
      }
      b = JSON.stringify(Va(c));
      self.postMessage({
        op: "serializedGelBatch",
        serializedBatch: b,
        key: a
      });
    } else if (c.op === "gelBatchToGzip") {
      a = c.key;
      b = Zb(c.serializedBatch);
      c = new Ub({
        Za: true
      });
      c.push(b, true);
      if (c.err) {
        throw c.ua || E[c.err];
      }
      self.postMessage({
        op: "gzippedGelBatch",
        gzippedBatch: c.result,
        key: a
      });
    }
  });
}).call(this);