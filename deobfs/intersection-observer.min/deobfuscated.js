/*

 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document

*/
(function (f, h) {
  function t(a) {
    this.time = a.time;
    this.target = a.target;
    this.rootBounds = a.rootBounds;
    this.boundingClientRect = a.boundingClientRect;
    this.intersectionRect = a.intersectionRect || q();
    this.isIntersecting = !!a.intersectionRect;
    a = this.boundingClientRect;
    a = a.width * a.height;
    var b = this.intersectionRect;
    b = b.width * b.height;
    this.intersectionRatio = a ? b / a : this.isIntersecting ? 1 : 0;
  }
  function d(a, b) {
    b = b || {};
    if (typeof a != "function") {
      throw Error("callback must be a function");
    }
    if (b.root && b.root.nodeType != 1) {
      throw Error("root must be an Element");
    }
    this.h = y(this.h.bind(this), this.C);
    this.F = a;
    this.i = [];
    this.j = [];
    this.v = this.M(b.rootMargin);
    this.thresholds = this.K(b.threshold);
    this.root = b.root || null;
    this.rootMargin = this.v.map(function (c) {
      return c.value + c.unit;
    }).join(" ");
  }
  function y(a, b) {
    var c = null;
    return function () {
      c ||= setTimeout(function () {
        a();
        c = null;
      }, b);
    };
  }
  function u(a, b, c, e) {
    if (typeof a.addEventListener == "function") {
      a.addEventListener(b, c, e || false);
    } else if (typeof a.attachEvent == "function") {
      a.attachEvent("on" + b, c);
    }
  }
  function v(a, b, c, e) {
    if (typeof a.removeEventListener == "function") {
      a.removeEventListener(b, c, e || false);
    } else if (typeof a.R == "function") {
      a.R("on" + b, c);
    }
  }
  function m(a) {
    try {
      var b = a.getBoundingClientRect();
    } catch (c) {}
    if (!b) {
      return q();
    }
    if (!b.width || !b.height) {
      b = {
        top: b.top,
        right: b.right,
        bottom: b.bottom,
        left: b.left,
        width: b.right - b.left,
        height: b.bottom - b.top
      };
    }
    return b;
  }
  function q() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  function w(a, b) {
    while (b) {
      if (b == a) {
        return true;
      }
      b = r(b);
    }
    return false;
  }
  function r(a) {
    if ((a = a.parentNode) && a.nodeType == 11 && a.host) {
      return a.host;
    } else {
      return a;
    }
  }
  if ("IntersectionObserver" in f && "IntersectionObserverEntry" in f && "intersectionRatio" in f.IntersectionObserverEntry.prototype) {
    if (!("isIntersecting" in f.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(f.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function () {
          return this.intersectionRatio > 0;
        }
      });
    }
  } else {
    var n = [];
    d.prototype.C = 100;
    d.prototype.o = null;
    d.prototype.D = true;
    d.prototype.observe = function (a) {
      if (!this.i.some(function (b) {
        return b.element == a;
      })) {
        if (!a || a.nodeType != 1) {
          throw Error("target must be an Element");
        }
        this.N();
        this.i.push({
          element: a,
          entry: null
        });
        this.L();
        this.h();
      }
    };
    d.prototype.unobserve = function (a) {
      this.i = this.i.filter(function (b) {
        return b.element != a;
      });
      if (!this.i.length) {
        this.A();
        this.B();
      }
    };
    d.prototype.disconnect = function () {
      this.i = [];
      this.A();
      this.B();
    };
    d.prototype.takeRecords = function () {
      var a = this.j.slice();
      this.j = [];
      return a;
    };
    d.prototype.K = function (a) {
      a = a || [0];
      if (!Array.isArray(a)) {
        a = [a];
      }
      return a.sort().filter(function (b, c, e) {
        if (typeof b != "number" || isNaN(b) || b < 0 || b > 1) {
          throw Error("threshold must be a number between 0 and 1 inclusively");
        }
        return b !== e[c - 1];
      });
    };
    d.prototype.M = function (a) {
      a = (a || "0px").split(/\s+/).map(function (b) {
        b = /^(-?\d*\.?\d+)(px|%)$/.exec(b);
        if (!b) {
          throw Error("rootMargin must be specified in pixels or percent");
        }
        return {
          value: parseFloat(b[1]),
          unit: b[2]
        };
      });
      a[1] = a[1] || a[0];
      a[2] = a[2] || a[0];
      a[3] = a[3] || a[1];
      return a;
    };
    d.prototype.L = function () {
      if (!this.m) {
        this.m = true;
        if (this.o) {
          this.u = setInterval(this.h, this.o);
        } else {
          u(f, "resize", this.h, true);
          u(h, "scroll", this.h, true);
          if (this.D && "MutationObserver" in f) {
            this.l = new MutationObserver(this.h);
            this.l.observe(h, {
              attributes: true,
              childList: true,
              characterData: true,
              subtree: true
            });
          }
        }
      }
    };
    d.prototype.A = function () {
      if (this.m) {
        this.m = false;
        clearInterval(this.u);
        this.u = null;
        v(f, "resize", this.h, true);
        v(h, "scroll", this.h, true);
        if (this.l) {
          this.l.disconnect();
          this.l = null;
        }
      }
    };
    d.prototype.h = function () {
      var a = this.P();
      var b = a ? this.I() : q();
      this.i.forEach(function (c) {
        var e = c.element;
        var g = m(e);
        var k = this.O(e);
        var l = c.entry;
        var p = a && k && this.G(e, b);
        c = c.entry = new t({
          time: f.performance && performance.now && performance.now(),
          target: e,
          boundingClientRect: g,
          rootBounds: b,
          intersectionRect: p
        });
        if (l) {
          if (a && k) {
            if (this.J(l, c)) {
              this.j.push(c);
            }
          } else if (l && l.isIntersecting) {
            this.j.push(c);
          }
        } else {
          this.j.push(c);
        }
      }, this);
      if (this.j.length) {
        this.F(this.takeRecords(), this);
      }
    };
    d.prototype.G = function (a, b) {
      if (f.getComputedStyle(a).display != "none") {
        var c = m(a);
        a = r(a);
        for (var e = false; !e;) {
          var g = null;
          var k = a.nodeType == 1 ? f.getComputedStyle(a) : {};
          if (k.display == "none") {
            return;
          }
          if (a == this.root || a == h) {
            e = true;
            g = b;
          } else if (a != h.body && a != h.documentElement && k.overflow != "visible") {
            g = m(a);
          }
          if (g) {
            k = Math.max(g.top, c.top);
            var l = Math.min(g.bottom, c.bottom);
            var p = Math.max(g.left, c.left);
            c = Math.min(g.right, c.right);
            g = c - p;
            var x = l - k;
            c = g >= 0 && x >= 0 && {
              top: k,
              bottom: l,
              left: p,
              right: c,
              width: g,
              height: x
            };
            if (!c) {
              break;
            }
          }
          a = r(a);
        }
        return c;
      }
    };
    d.prototype.I = function () {
      if (this.root) {
        var a = m(this.root);
      } else {
        a = h.documentElement;
        var b = h.body;
        a = {
          top: 0,
          left: 0,
          right: a.clientWidth || b.clientWidth,
          width: a.clientWidth || b.clientWidth,
          bottom: a.clientHeight || b.clientHeight,
          height: a.clientHeight || b.clientHeight
        };
      }
      return this.H(a);
    };
    d.prototype.H = function (a) {
      var b = this.v.map(function (c, e) {
        if (c.unit == "px") {
          return c.value;
        } else {
          return c.value * (e % 2 ? a.width : a.height) / 100;
        }
      });
      b = {
        top: a.top - b[0],
        right: a.right + b[1],
        bottom: a.bottom + b[2],
        left: a.left - b[3]
      };
      b.width = b.right - b.left;
      b.height = b.bottom - b.top;
      return b;
    };
    d.prototype.J = function (a, b) {
      a = a && a.isIntersecting ? a.intersectionRatio || 0 : -1;
      b = b.isIntersecting ? b.intersectionRatio || 0 : -1;
      if (a !== b) {
        for (var c = 0; c < this.thresholds.length; c++) {
          var e = this.thresholds[c];
          if (e == a || e == b || e < a !== e < b) {
            return true;
          }
        }
      }
    };
    d.prototype.P = function () {
      return !this.root || w(h, this.root);
    };
    d.prototype.O = function (a) {
      return w(this.root || h, a);
    };
    d.prototype.N = function () {
      if (n.indexOf(this) < 0) {
        n.push(this);
      }
    };
    d.prototype.B = function () {
      var a = n.indexOf(this);
      if (a != -1) {
        n.splice(a, 1);
      }
    };
    f.IntersectionObserver = d;
    f.IntersectionObserverEntry = t;
  }
})(window, document);