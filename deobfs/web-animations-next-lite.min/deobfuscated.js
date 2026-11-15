/*

 Copyright 2014 Google Inc. All rights reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
 limitations under the License.

 Copyright 2016 Google Inc. All rights reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
 limitations under the License.
*/
(function () {
  var G = {};
  var F = {};
  var L = {};
  (function (y, v) {
    function k() {
      this._endDelay = this._delay = 0;
      this._fill = "none";
      this._iterationStart = 0;
      this._iterations = 1;
      this._duration = 0;
      this._playbackRate = 1;
      this._direction = "normal";
      this._easing = "linear";
      this._easingFunction = n;
    }
    function f() {
      return y.isDeprecated("Invalid timing inputs", "2016-03-02", "TypeError exceptions will be thrown instead.", true);
    }
    function h(p, w, z) {
      var A = new k();
      if (w) {
        A.fill = "both";
        A.duration = "auto";
      }
      if (typeof p != "number" || isNaN(p)) {
        if (p !== undefined) {
          Object.getOwnPropertyNames(p).forEach(function (B) {
            if (p[B] != "auto") {
              if (typeof A[B] == "number" || B == "duration") {
                if (typeof p[B] != "number" || isNaN(p[B])) {
                  return;
                }
              }
              if ((B != "fill" || e.indexOf(p[B]) != -1) && (B != "direction" || m.indexOf(p[B]) != -1) && (B != "playbackRate" || p[B] === 1 || !y.isDeprecated("AnimationEffectTiming.playbackRate", "2014-11-28", "Use Animation.playbackRate instead."))) {
                A[B] = p[B];
              }
            }
          });
        }
      } else {
        A.duration = p;
      }
      return A;
    }
    function d(p, w, z, A) {
      if (p < 0 || p > 1 || z < 0 || z > 1) {
        return n;
      } else {
        return function (B) {
          if (B <= 0) {
            var D = 0;
            if (p > 0) {
              D = w / p;
            } else if (!w && z > 0) {
              D = A / z;
            }
            return D * B;
          }
          if (B >= 1) {
            D = 0;
            if (z < 1) {
              D = (A - 1) / (z - 1);
            } else if (z == 1 && p < 1) {
              D = (w - 1) / (p - 1);
            }
            return 1 + D * (B - 1);
          }
          D = 0;
          for (var H = 1; D < H;) {
            var E = (D + H) / 2;
            var M = p * 3 * (1 - E) * (1 - E) * E + z * 3 * (1 - E) * E * E + E * E * E;
            if (Math.abs(B - M) < 0.00001) {
              break;
            }
            if (M < B) {
              D = E;
            } else {
              H = E;
            }
          }
          return w * 3 * (1 - E) * (1 - E) * E + A * 3 * (1 - E) * E * E + E * E * E;
        };
      }
    }
    function a(p, w) {
      return function (z) {
        if (z >= 1) {
          return 1;
        }
        var A = 1 / p;
        z += w * A;
        return z - z % A;
      };
    }
    function c(p) {
      u ||= document.createElement("div").style;
      u.animationTimingFunction = "";
      u.animationTimingFunction = p;
      var w = u.animationTimingFunction;
      if (w == "" && f()) {
        throw new TypeError(p + " is not a valid value for easing");
      }
      return w;
    }
    function b(p) {
      if (p == "linear") {
        return n;
      }
      var w = q.exec(p);
      if (w) {
        return d.apply(this, w.slice(1).map(Number));
      } else if (w = C.exec(p)) {
        return a(Number(w[1]), {
          start: l,
          middle: r,
          end: t
        }[w[2]]);
      } else if (p = x[p]) {
        return p;
      } else {
        return n;
      }
    }
    function g(p, w, z) {
      if (w == null) {
        return 0;
      }
      var A = z.delay + p + z.endDelay;
      if (w < Math.min(z.delay, A)) {
        return 1;
      } else if (w >= Math.min(z.delay + p, A)) {
        return 2;
      } else {
        return 3;
      }
    }
    var e = ["backwards", "forwards", "both", "none"];
    var m = ["reverse", "alternate", "alternate-reverse"];
    function n(p) {
      return p;
    }
    k.prototype = {
      _setMember: function (p, w) {
        this["_" + p] = w;
        if (this._effect) {
          this._effect._timingInput[p] = w;
          this._effect._timing = y.normalizeTimingInput(this._effect._timingInput);
          this._effect.activeDuration = y.calculateActiveDuration(this._effect._timing);
          if (this._effect._animation) {
            this._effect._animation._rebuildUnderlyingAnimation();
          }
        }
      },
      get playbackRate() {
        return this._playbackRate;
      },
      set delay(p) {
        this._setMember("delay", p);
      },
      get delay() {
        return this._delay;
      },
      set endDelay(p) {
        this._setMember("endDelay", p);
      },
      get endDelay() {
        return this._endDelay;
      },
      set fill(p) {
        this._setMember("fill", p);
      },
      get fill() {
        return this._fill;
      },
      set iterationStart(p) {
        if ((isNaN(p) || p < 0) && f()) {
          throw new TypeError("iterationStart must be a non-negative number, received: " + p);
        }
        this._setMember("iterationStart", p);
      },
      get iterationStart() {
        return this._iterationStart;
      },
      set duration(p) {
        if (p != "auto" && (isNaN(p) || p < 0) && f()) {
          throw new TypeError("duration must be non-negative or auto, received: " + p);
        }
        this._setMember("duration", p);
      },
      get duration() {
        return this._duration;
      },
      set direction(p) {
        this._setMember("direction", p);
      },
      get direction() {
        return this._direction;
      },
      set easing(p) {
        this._easingFunction = b(c(p));
        this._setMember("easing", p);
      },
      get easing() {
        return this._easing;
      },
      set iterations(p) {
        if ((isNaN(p) || p < 0) && f()) {
          throw new TypeError("iterations must be non-negative, received: " + p);
        }
        this._setMember("iterations", p);
      },
      get iterations() {
        return this._iterations;
      }
    };
    var l = 1;
    var r = 0.5;
    var t = 0;
    var x = {
      ease: d(0.25, 0.1, 0.25, 1),
      "ease-in": d(0.42, 0, 1, 1),
      "ease-out": d(0, 0, 0.58, 1),
      "ease-in-out": d(0.42, 0, 0.58, 1),
      "step-start": a(1, l),
      "step-middle": a(1, r),
      "step-end": a(1, t)
    };
    var u = null;
    var q = RegExp("cubic-bezier\\(\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*,\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*,\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*,\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*\\)");
    var C = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/;
    y.cloneTimingInput = function (p) {
      if (typeof p == "number") {
        return p;
      }
      var w = {};
      var z;
      for (z in p) {
        w[z] = p[z];
      }
      return w;
    };
    y.makeTiming = h;
    y.numericTimingToObject = function (p) {
      if (typeof p == "number") {
        p = isNaN(p) ? {
          duration: 0
        } : {
          duration: p
        };
      }
      return p;
    };
    y.normalizeTimingInput = function (p, w) {
      p = y.numericTimingToObject(p);
      return h(p, w);
    };
    y.calculateActiveDuration = function (p) {
      var w = Math;
      var z = w.abs;
      var A = p.duration === 0 || p.iterations === 0 ? 0 : p.duration * p.iterations;
      return z.call(w, A / p.playbackRate);
    };
    y.calculateIterationProgress = function (p, w, z) {
      var A = g(p, w, z);
      a: {
        var B = z.fill;
        switch (A) {
          case 1:
            p = B == "backwards" || B == "both" ? 0 : null;
            break a;
          case 3:
            p = w - z.delay;
            break a;
          case 2:
            p = B == "forwards" || B == "both" ? p : null;
            break a;
          case 0:
            p = null;
            break a;
        }
        p = undefined;
      }
      if (p === null) {
        return null;
      }
      w = z.duration;
      B = z.iterationStart;
      if (w === 0) {
        if (A !== 1) {
          B += z.iterations;
        }
      } else {
        B += p / w;
      }
      w = B;
      B = w === Infinity ? z.iterationStart % 1 : w % 1;
      if (B === 0 && A === 2 && z.iterations !== 0 && (p !== 0 || z.duration === 0)) {
        B = 1;
      }
      p = B;
      B = A === 2 && z.iterations === Infinity ? Infinity : p === 1 ? Math.floor(w) - 1 : Math.floor(w);
      w = A = z.direction;
      if (A !== "normal" && A !== "reverse") {
        if (A === "alternate-reverse") {
          B += 1;
        }
        w = "normal";
        if (B !== Infinity && B % 2 !== 0) {
          w = "reverse";
        }
      }
      return z._easingFunction(w === "normal" ? p : 1 - p);
    };
    y.calculatePhase = g;
    y.normalizeEasing = c;
    y.parseEasingFunction = b;
  })(G, null);
  (function (y, v) {
    function k(a) {
      var c = [];
      var b;
      for (b in a) {
        if (!(b in ["easing", "offset", "composite"])) {
          var g = a[b];
          if (!Array.isArray(g)) {
            g = [g];
          }
          var e;
          for (var m = g.length, n = 0; n < m; n++) {
            e = {};
            e.offset = "offset" in a ? a.offset : m == 1 ? 1 : n / (m - 1);
            if ("easing" in a) {
              e.easing = a.easing;
            }
            if ("composite" in a) {
              e.composite = a.composite;
            }
            e[b] = g[n];
            c.push(e);
          }
        }
      }
      c.sort(function (l, r) {
        return l.offset - r.offset;
      });
      return c;
    }
    var f = {
      background: "backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundAttachment backgroundOrigin backgroundClip backgroundColor".split(" "),
      border: "borderTopColor borderTopStyle borderTopWidth borderRightColor borderRightStyle borderRightWidth borderBottomColor borderBottomStyle borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth".split(" "),
      borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"],
      borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
      borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
      borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
      borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"],
      borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
      borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
      flex: ["flexGrow", "flexShrink", "flexBasis"],
      font: "fontFamily fontSize fontStyle fontVariant fontWeight lineHeight".split(" "),
      margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]
    };
    var h = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
    v = {
      thin: "1px",
      medium: "3px",
      thick: "5px"
    };
    var d = {
      borderBottomWidth: v,
      borderLeftWidth: v,
      borderRightWidth: v,
      borderTopWidth: v,
      fontSize: {
        "xx-small": "60%",
        "x-small": "75%",
        small: "89%",
        medium: "100%",
        large: "120%",
        "x-large": "150%",
        "xx-large": "200%"
      },
      fontWeight: {
        normal: "400",
        bold: "700"
      },
      outlineWidth: v,
      textShadow: {
        none: "0px 0px 0px transparent"
      },
      boxShadow: {
        none: "0px 0px 0px 0px transparent"
      }
    };
    y.convertToArrayForm = k;
    y.normalizeKeyframes = function (a) {
      function c() {
        var n = b.length;
        if (b[n - 1].offset == null) {
          b[n - 1].offset = 1;
        }
        if (n > 1 && b[0].offset == null) {
          b[0].offset = 0;
        }
        var l = 0;
        var r = b[0].offset;
        for (var t = 1; t < n; t++) {
          var x = b[t].offset;
          if (x != null) {
            for (var u = 1; u < t - l; u++) {
              b[l + u].offset = r + (x - r) * u / (t - l);
            }
            l = t;
            r = x;
          }
        }
      }
      if (a == null) {
        return [];
      }
      if (window.Symbol && Symbol.iterator && Array.prototype.from && a[Symbol.iterator]) {
        a = Array.from(a);
      }
      if (!Array.isArray(a)) {
        a = k(a);
      }
      var b = a.map(function (n) {
        var l = {};
        var r;
        for (r in n) {
          var t = n[r];
          if (r == "offset") {
            if (t != null) {
              t = Number(t);
              if (!isFinite(t)) {
                throw new TypeError("Keyframe offsets must be numbers.");
              }
              if (t < 0 || t > 1) {
                throw new TypeError("Keyframe offsets must be between 0 and 1.");
              }
            }
          } else if (r == "composite") {
            if (t == "add" || t == "accumulate") {
              throw {
                type: DOMException.NOT_SUPPORTED_ERR,
                name: "NotSupportedError",
                message: "add compositing is not supported"
              };
            }
            if (t != "replace") {
              throw new TypeError("Invalid composite mode " + t + ".");
            }
          } else {
            t = r == "easing" ? y.normalizeEasing(t) : "" + t;
          }
          var x = undefined;
          var u = r;
          var q = t;
          t = l;
          var C = u;
          if (C !== "display" && C.lastIndexOf("animation", 0) !== 0 && C.lastIndexOf("transition", 0) !== 0) {
            if (C = f[u]) {
              h.style[u] = q;
              for (x in C) {
                q = u = C[x];
                var p = h.style[u];
                t[u] = q in d ? d[q][p] || p : p;
              }
            } else {
              t[u] = u in d ? d[u][q] || q : q;
            }
          }
        }
        if (l.offset == undefined) {
          l.offset = null;
        }
        if (l.easing == undefined) {
          l.easing = "linear";
        }
        return l;
      });
      a = true;
      var g = -Infinity;
      for (var e = 0; e < b.length; e++) {
        var m = b[e].offset;
        if (m != null) {
          if (m < g) {
            throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");
          }
          g = m;
        } else {
          a = false;
        }
      }
      b = b.filter(function (n) {
        return n.offset >= 0 && n.offset <= 1;
      });
      if (!a) {
        c();
      }
      return b;
    };
  })(G, null);
  (function (y) {
    var v = {};
    y.isDeprecated = function (k, f, h, d) {
      d = d ? "are" : "is";
      var a = new Date();
      f = new Date(f);
      f.setMonth(f.getMonth() + 3);
      if (a < f) {
        if (!(k in v)) {
          console.warn("Web Animations: " + k + " " + d + " deprecated and will stop working on " + f.toDateString() + ". " + h);
        }
        v[k] = true;
        return false;
      } else {
        return true;
      }
    };
    y.deprecated = function (k, f, h, d) {
      var a = d ? "are" : "is";
      if (y.isDeprecated(k, f, h, d)) {
        throw Error(k + " " + a + " no longer supported. " + h);
      }
    };
  })(G);
  (function () {
    if (document.documentElement.animate) {
      var y = document.documentElement.animate([], 0);
      var v = true;
      if (y) {
        v = false;
        "play currentTime pause reverse playbackRate cancel finish startTime playState".split(" ").forEach(function (k) {
          if (y[k] === undefined) {
            v = true;
          }
        });
      }
      if (!v) {
        return;
      }
    }
    (function (k, f, h) {
      function d(c) {
        var b = {};
        for (var g = 0; g < c.length; g++) {
          for (var e in c[g]) {
            if (e != "offset" && e != "easing" && e != "composite") {
              var m = {
                offset: c[g].offset,
                easing: c[g].easing,
                value: c[g][e]
              };
              b[e] = b[e] || [];
              b[e].push(m);
            }
          }
        }
        for (var n in b) {
          c = b[n];
          if (c[0].offset != 0 || c[c.length - 1].offset != 1) {
            throw {
              type: DOMException.NOT_SUPPORTED_ERR,
              name: "NotSupportedError",
              message: "Partial keyframes are not supported"
            };
          }
        }
        return b;
      }
      function a(c) {
        var b = [];
        var g;
        for (g in c) {
          for (var e = c[g], m = 0; m < e.length - 1; m++) {
            var n = m;
            var l = m + 1;
            var r = e[n].offset;
            var t = e[l].offset;
            var x = r;
            var u = t;
            if (m == 0) {
              x = -Infinity;
              if (t == 0) {
                l = n;
              }
            }
            if (m == e.length - 2) {
              u = Infinity;
              if (r == 1) {
                n = l;
              }
            }
            b.push({
              applyFrom: x,
              applyTo: u,
              startOffset: e[n].offset,
              endOffset: e[l].offset,
              easingFunction: k.parseEasingFunction(e[n].easing),
              property: g,
              interpolation: f.propertyInterpolation(g, e[n].value, e[l].value)
            });
          }
        }
        b.sort(function (q, C) {
          return q.startOffset - C.startOffset;
        });
        return b;
      }
      f.convertEffectInput = function (c) {
        c = k.normalizeKeyframes(c);
        var b = d(c);
        var g = a(b);
        return function (e, m) {
          if (m != null) {
            g.filter(function (l) {
              return m >= l.applyFrom && m < l.applyTo;
            }).forEach(function (l) {
              var r = m - l.startOffset;
              var t = l.endOffset - l.startOffset;
              r = t == 0 ? 0 : l.easingFunction(r / t);
              f.apply(e, l.property, l.interpolation(r));
            });
          } else {
            for (var n in b) {
              if (n != "offset" && n != "easing" && n != "composite") {
                f.clear(e, n);
              }
            }
          }
        };
      };
    })(G, F, null);
    (function (k, f, h) {
      function d(b) {
        return b.replace(/-(.)/g, function (g, e) {
          return e.toUpperCase();
        });
      }
      var a = {};
      f.addPropertiesHandler = function (b, g, e) {
        for (var m = 0; m < e.length; m++) {
          var n = b;
          var l = g;
          var r = d(e[m]);
          a[r] = a[r] || [];
          a[r].push([n, l]);
        }
      };
      var c = {
        backgroundColor: "transparent",
        backgroundPosition: "0% 0%",
        borderBottomColor: "currentColor",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        borderBottomWidth: "3px",
        borderLeftColor: "currentColor",
        borderLeftWidth: "3px",
        borderRightColor: "currentColor",
        borderRightWidth: "3px",
        borderSpacing: "2px",
        borderTopColor: "currentColor",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        borderTopWidth: "3px",
        bottom: "auto",
        clip: "rect(0px, 0px, 0px, 0px)",
        color: "black",
        fontSize: "100%",
        fontWeight: "400",
        height: "auto",
        left: "auto",
        letterSpacing: "normal",
        lineHeight: "120%",
        marginBottom: "0px",
        marginLeft: "0px",
        marginRight: "0px",
        marginTop: "0px",
        maxHeight: "none",
        maxWidth: "none",
        minHeight: "0px",
        minWidth: "0px",
        opacity: "1.0",
        outlineColor: "invert",
        outlineOffset: "0px",
        outlineWidth: "3px",
        paddingBottom: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        paddingTop: "0px",
        right: "auto",
        strokeDasharray: "none",
        strokeDashoffset: "0px",
        textIndent: "0px",
        textShadow: "0px 0px 0px transparent",
        top: "auto",
        transform: "",
        verticalAlign: "0px",
        visibility: "visible",
        width: "auto",
        wordSpacing: "normal",
        zIndex: "auto"
      };
      f.propertyInterpolation = function (b, g, e) {
        var m = b;
        if (/-/.test(b) && !k.isDeprecated("Hyphenated property names", "2016-03-22", "Use camelCase instead.", true)) {
          m = d(b);
        }
        if (g == "initial" || e == "initial") {
          if (g == "initial") {
            g = c[m];
          }
          if (e == "initial") {
            e = c[m];
          }
        }
        b = g == e ? [] : a[m];
        for (m = 0; b && m < b.length; m++) {
          var n = b[m][0](g);
          var l = b[m][0](e);
          if (n !== undefined && l !== undefined && (n = b[m][1](n, l))) {
            var r = f.Interpolation.apply(null, n);
            return function (t) {
              if (t == 0) {
                return g;
              } else if (t == 1) {
                return e;
              } else {
                return r(t);
              }
            };
          }
        }
        return f.Interpolation(false, true, function (t) {
          if (t) {
            return e;
          } else {
            return g;
          }
        });
      };
    })(G, F, null);
    (function (k, f, h) {
      function d(a) {
        var c = k.calculateActiveDuration(a);
        function b(g) {
          return k.calculateIterationProgress(c, g, a);
        }
        b._totalDuration = a.delay + c + a.endDelay;
        return b;
      }
      f.KeyframeEffect = function (a, c, b, g) {
        var e = d(k.normalizeTimingInput(b));
        var m = f.convertEffectInput(c);
        var n;
        c = function () {
          m(a, n);
        };
        c._update = function (l) {
          n = e(l);
          return n !== null;
        };
        c._clear = function () {
          m(a, null);
        };
        c._hasSameTarget = function (l) {
          return a === l;
        };
        c._target = a;
        c._totalDuration = e._totalDuration;
        c._id = g;
        return c;
      };
    })(G, F, null);
    (function (k, f) {
      k.apply = function (h, d, a) {
        h.style[k.propertyName(d)] = a;
      };
      k.clear = function (h, d) {
        h.style[k.propertyName(d)] = "";
      };
    })(F, null);
    (function (k) {
      window.Element.prototype.animate = function (f, h) {
        var d = "";
        if (h && h.id) {
          d = h.id;
        }
        return k.timeline._play(k.KeyframeEffect(this, f, h, d));
      };
    })(F);
    (function (k, f) {
      function h(d, a, c) {
        if (typeof d == "number" && typeof a == "number") {
          return d * (1 - c) + a * c;
        }
        if (typeof d == "boolean" && typeof a == "boolean") {
          if (c < 0.5) {
            return d;
          } else {
            return a;
          }
        }
        if (d.length == a.length) {
          var b = [];
          for (var g = 0; g < d.length; g++) {
            b.push(h(d[g], a[g], c));
          }
          return b;
        }
        throw "Mismatched interpolation arguments " + d + ":" + a;
      }
      k.Interpolation = function (d, a, c) {
        return function (b) {
          return c(h(d, a, b));
        };
      };
    })(F, null);
    (function (k, f, h) {
      k.sequenceNumber = 0;
      function d(a, c, b) {
        this.target = a;
        this.currentTime = c;
        this.timelineTime = b;
        this.type = "finish";
        this.cancelable = this.bubbles = false;
        this.currentTarget = a;
        this.defaultPrevented = false;
        this.eventPhase = Event.AT_TARGET;
        this.timeStamp = Date.now();
      }
      f.Animation = function (a) {
        this.id = "";
        if (a && a._id) {
          this.id = a._id;
        }
        this._sequenceNumber = k.sequenceNumber++;
        this._currentTime = 0;
        this._startTime = null;
        this._paused = false;
        this._playbackRate = 1;
        this._finishedFlag = this._inTimeline = true;
        this.onfinish = null;
        this._finishHandlers = [];
        this._effect = a;
        this._inEffect = this._effect._update(0);
        this._idle = true;
        this._currentTimePending = false;
      };
      f.Animation.prototype = {
        _ensureAlive: function () {
          this._inEffect = this.playbackRate < 0 && this.currentTime === 0 ? this._effect._update(-1) : this._effect._update(this.currentTime);
          if (!this._inTimeline && (!!this._inEffect || !this._finishedFlag)) {
            this._inTimeline = true;
            f.timeline._animations.push(this);
          }
        },
        _tickCurrentTime: function (a, c) {
          if (a != this._currentTime) {
            this._currentTime = a;
            if (this._isFinished && !c) {
              this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0;
            }
            this._ensureAlive();
          }
        },
        get currentTime() {
          if (this._idle || this._currentTimePending) {
            return null;
          } else {
            return this._currentTime;
          }
        },
        set currentTime(a) {
          a = +a;
          if (!isNaN(a)) {
            f.restart();
            if (!this._paused && this._startTime != null) {
              this._startTime = this._timeline.currentTime - a / this._playbackRate;
            }
            this._currentTimePending = false;
            if (this._currentTime != a) {
              if (this._idle) {
                this._idle = false;
                this._paused = true;
              }
              this._tickCurrentTime(a, true);
              f.applyDirtiedAnimation(this);
            }
          }
        },
        get startTime() {
          return this._startTime;
        },
        set startTime(a) {
          a = +a;
          if (!isNaN(a) && !this._paused && !this._idle) {
            this._startTime = a;
            this._tickCurrentTime((this._timeline.currentTime - this._startTime) * this.playbackRate);
            f.applyDirtiedAnimation(this);
          }
        },
        get playbackRate() {
          return this._playbackRate;
        },
        set playbackRate(a) {
          if (a != this._playbackRate) {
            var c = this.currentTime;
            this._playbackRate = a;
            this._startTime = null;
            if (this.playState != "paused" && this.playState != "idle") {
              this._idle = this._finishedFlag = false;
              this._ensureAlive();
              f.applyDirtiedAnimation(this);
            }
            if (c != null) {
              this.currentTime = c;
            }
          }
        },
        get _isFinished() {
          return !this._idle && (this._playbackRate > 0 && this._currentTime >= this._totalDuration || this._playbackRate < 0 && this._currentTime <= 0);
        },
        get _totalDuration() {
          return this._effect._totalDuration;
        },
        get playState() {
          if (this._idle) {
            return "idle";
          } else if (this._startTime == null && !this._paused && this.playbackRate != 0 || this._currentTimePending) {
            return "pending";
          } else if (this._paused) {
            return "paused";
          } else if (this._isFinished) {
            return "finished";
          } else {
            return "running";
          }
        },
        _rewind: function () {
          if (this._playbackRate >= 0) {
            this._currentTime = 0;
          } else if (this._totalDuration < Infinity) {
            this._currentTime = this._totalDuration;
          } else {
            throw new DOMException("Unable to rewind negative playback rate animation with infinite duration", "InvalidStateError");
          }
        },
        play: function () {
          this._paused = false;
          if (this._isFinished || this._idle) {
            this._rewind();
            this._startTime = null;
          }
          this._idle = this._finishedFlag = false;
          this._ensureAlive();
          f.applyDirtiedAnimation(this);
        },
        pause: function () {
          if (this._isFinished || this._paused || this._idle) {
            if (this._idle) {
              this._rewind();
              this._idle = false;
            }
          } else {
            this._currentTimePending = true;
          }
          this._startTime = null;
          this._paused = true;
        },
        finish: function () {
          if (!this._idle) {
            this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0;
            this._startTime = this._totalDuration - this.currentTime;
            this._currentTimePending = false;
            f.applyDirtiedAnimation(this);
          }
        },
        cancel: function () {
          if (this._inEffect) {
            this._inEffect = false;
            this._idle = true;
            this._paused = false;
            this._finishedFlag = true;
            this._currentTime = 0;
            this._startTime = null;
            this._effect._update(null);
            f.applyDirtiedAnimation(this);
          }
        },
        reverse: function () {
          this.playbackRate *= -1;
          this.play();
        },
        addEventListener: function (a, c) {
          if (typeof c == "function" && a == "finish") {
            this._finishHandlers.push(c);
          }
        },
        removeEventListener: function (a, c) {
          if (a == "finish") {
            a = this._finishHandlers.indexOf(c);
            if (a >= 0) {
              this._finishHandlers.splice(a, 1);
            }
          }
        },
        _fireEvents: function (a) {
          if (this._isFinished) {
            if (!this._finishedFlag) {
              var c = new d(this, this._currentTime, a);
              var b = this._finishHandlers.concat(this.onfinish ? [this.onfinish] : []);
              setTimeout(function () {
                b.forEach(function (g) {
                  g.call(c.target, c);
                });
              }, 0);
              this._finishedFlag = true;
            }
          } else {
            this._finishedFlag = false;
          }
        },
        _tick: function (a, c) {
          if (!this._idle && !this._paused) {
            if (this._startTime == null) {
              if (c) {
                this.startTime = a - this._currentTime / this.playbackRate;
              }
            } else if (!this._isFinished) {
              this._tickCurrentTime((a - this._startTime) * this.playbackRate);
            }
          }
          if (c) {
            this._currentTimePending = false;
            this._fireEvents(a);
          }
        },
        get _needsTick() {
          return this.playState in {
            pending: 1,
            running: 1
          } || !this._finishedFlag;
        },
        _targetAnimations: function () {
          var a = this._effect._target;
          a._activeAnimations ||= [];
          return a._activeAnimations;
        },
        _markTarget: function () {
          var a = this._targetAnimations();
          if (a.indexOf(this) === -1) {
            a.push(this);
          }
        },
        _unmarkTarget: function () {
          var a = this._targetAnimations();
          var c = a.indexOf(this);
          if (c !== -1) {
            a.splice(c, 1);
          }
        }
      };
    })(G, F, null);
    (function (k, f, h) {
      function d(q) {
        var C = m;
        m = [];
        if (q < u.currentTime) {
          q = u.currentTime;
        }
        u._animations.sort(a);
        u._animations = g(q, true, u._animations)[0];
        C.forEach(function (p) {
          p[1](q);
        });
        b();
      }
      function a(q, C) {
        return q._sequenceNumber - C._sequenceNumber;
      }
      function c() {
        this._animations = [];
        this.currentTime = window.performance && performance.now ? performance.now() : 0;
      }
      function b() {
        t.forEach(function (q) {
          q();
        });
        t.length = 0;
      }
      function g(q, C, p) {
        x = true;
        r = false;
        f.timeline.currentTime = q;
        l = false;
        var w = [];
        var z = [];
        var A = [];
        var B = [];
        p.forEach(function (D) {
          D._tick(q, C);
          if (D._inEffect) {
            z.push(D._effect);
            D._markTarget();
          } else {
            w.push(D._effect);
            D._unmarkTarget();
          }
          if (D._needsTick) {
            l = true;
          }
          var H = D._inEffect || D._needsTick;
          if (D._inTimeline = H) {
            A.push(D);
          } else {
            B.push(D);
          }
        });
        t.push.apply(t, w);
        t.push.apply(t, z);
        if (l) {
          requestAnimationFrame(function () {});
        }
        x = false;
        return [A, B];
      }
      var e = window.requestAnimationFrame;
      var m = [];
      var n = 0;
      window.requestAnimationFrame = function (q) {
        var C = n++;
        if (m.length == 0) {
          e(d);
        }
        m.push([C, q]);
        return C;
      };
      window.cancelAnimationFrame = function (q) {
        m.forEach(function (C) {
          if (C[0] == q) {
            C[1] = function () {};
          }
        });
      };
      c.prototype = {
        _play: function (q) {
          q._timing = k.normalizeTimingInput(q.timing);
          q = new f.Animation(q);
          q._idle = false;
          q._timeline = this;
          this._animations.push(q);
          f.restart();
          f.applyDirtiedAnimation(q);
          return q;
        }
      };
      var l = false;
      var r = false;
      f.restart = function () {
        if (!l) {
          l = true;
          requestAnimationFrame(function () {});
          r = true;
        }
        return r;
      };
      f.applyDirtiedAnimation = function (q) {
        if (!x) {
          q._markTarget();
          q = q._targetAnimations();
          q.sort(a);
          g(f.timeline.currentTime, false, q.slice())[1].forEach(function (C) {
            C = u._animations.indexOf(C);
            if (C !== -1) {
              u._animations.splice(C, 1);
            }
          });
          b();
        }
      };
      var t = [];
      var x = false;
      var u = new c();
      f.timeline = u;
    })(G, F, null);
    (function (k) {
      function f(c, b) {
        var g = c.exec(b);
        if (g) {
          g = c.ignoreCase ? g[0].toLowerCase() : g[0];
          return [g, b.substr(g.length)];
        }
      }
      function h(c, b) {
        b = b.replace(/^\s*/, "");
        if (c = c(b)) {
          return [c[0], c[1].replace(/^\s*/, "")];
        }
      }
      function d(c, b) {
        for (var g = c, e = b; g && e;) {
          if (g > e) {
            g %= e;
          } else {
            e %= g;
          }
        }
        return c * b / (g + e);
      }
      function a(c, b, g, e, m) {
        var n = [];
        var l = [];
        var r = [];
        for (var t = d(e.length, m.length), x = 0; x < t; x++) {
          var u = b(e[x % e.length], m[x % m.length]);
          if (!u) {
            return;
          }
          n.push(u[0]);
          l.push(u[1]);
          r.push(u[2]);
        }
        return [n, l, function (q) {
          q = q.map(function (C, p) {
            return r[p](C);
          }).join(g);
          if (c) {
            return c(q);
          } else {
            return q;
          }
        }];
      }
      k.consumeToken = f;
      k.consumeTrimmed = h;
      k.consumeRepeated = function (c, b, g) {
        c = h.bind(null, c);
        var e = [];
        for (;;) {
          var m = c(g);
          if (!m) {
            return [e, g];
          }
          e.push(m[0]);
          g = m[1];
          m = f(b, g);
          if (!m || m[1] == "") {
            return [e, g];
          }
          g = m[1];
        }
      };
      k.consumeParenthesised = function (c, b) {
        for (var g = 0, e = 0; e < b.length && (!/\s|,/.test(b[e]) || g != 0); e++) {
          if (b[e] == "(") {
            g++;
          } else if (b[e] == ")" && (g--, g == 0 && e++, g <= 0)) {
            break;
          }
        }
        c = c(b.substr(0, e));
        if (c == undefined) {
          return undefined;
        } else {
          return [c, b.substr(e)];
        }
      };
      k.ignore = function (c) {
        return function (b) {
          if (b = c(b)) {
            b[0] = undefined;
          }
          return b;
        };
      };
      k.optional = function (c, b) {
        return function (g) {
          var e = c(g);
          if (e) {
            return e;
          } else {
            return [b, g];
          }
        };
      };
      k.consumeList = function (c, b) {
        var g = [];
        for (var e = 0; e < c.length; e++) {
          b = k.consumeTrimmed(c[e], b);
          if (!b || b[0] == "") {
            return;
          }
          if (b[0] !== undefined) {
            g.push(b[0]);
          }
          b = b[1];
        }
        if (b == "") {
          return g;
        }
      };
      k.mergeNestedRepeated = a.bind(null, null);
      k.mergeWrappedNestedRepeated = a;
      k.mergeList = function (c, b, g) {
        var e = [];
        var m = [];
        var n = [];
        var l = 0;
        for (var r = 0; r < g.length; r++) {
          if (typeof g[r] == "function") {
            var t = g[r](c[l], b[l++]);
            e.push(t[0]);
            m.push(t[1]);
            n.push(t[2]);
          } else {
            (function (x) {
              e.push(false);
              m.push(false);
              n.push(function () {
                return g[x];
              });
            })(r);
          }
        }
        return [e, m, function (x) {
          var u = "";
          for (var q = 0; q < x.length; q++) {
            u += n[q](x[q]);
          }
          return u;
        }];
      };
    })(F);
    (function (k) {
      function f(d) {
        var a = {
          inset: false,
          lengths: [],
          color: null
        };
        if ((d = k.consumeRepeated(function (c) {
          var b = k.consumeToken(/^inset/i, c);
          if (b) {
            a.inset = true;
            return b;
          }
          if (b = k.consumeLengthOrPercent(c)) {
            a.lengths.push(b[0]);
            return b;
          }
          if (b = k.consumeColor(c)) {
            a.color = b[0];
            return b;
          }
        }, /^/, d)) && d[0].length) {
          return [a, d[1]];
        }
      }
      var h = function (d, a, c, b) {
        function g(t) {
          return {
            inset: t,
            color: [0, 0, 0, 0],
            lengths: [{
              px: 0
            }, {
              px: 0
            }, {
              px: 0
            }, {
              px: 0
            }]
          };
        }
        var e = [];
        var m = [];
        for (var n = 0; n < c.length || n < b.length; n++) {
          var l = c[n] || g(b[n].inset);
          var r = b[n] || g(c[n].inset);
          e.push(l);
          m.push(r);
        }
        return k.mergeNestedRepeated(d, a, e, m);
      }.bind(null, function (d, a) {
        while (d.lengths.length < Math.max(d.lengths.length, a.lengths.length)) {
          d.lengths.push({
            px: 0
          });
        }
        while (a.lengths.length < Math.max(d.lengths.length, a.lengths.length)) {
          a.lengths.push({
            px: 0
          });
        }
        if (d.inset == a.inset && !!d.color == !!a.color) {
          var c = [];
          var b;
          var g = [[], 0];
          var e = [[], 0];
          for (var m = 0; m < d.lengths.length; m++) {
            var n = k.mergeDimensions(d.lengths[m], a.lengths[m], m == 2);
            g[0].push(n[0]);
            e[0].push(n[1]);
            c.push(n[2]);
          }
          if (d.color && a.color) {
            a = k.mergeColors(d.color, a.color);
            g[1] = a[0];
            e[1] = a[1];
            b = a[2];
          }
          return [g, e, function (l) {
            var r = d.inset ? "inset " : " ";
            for (var t = 0; t < c.length; t++) {
              r += c[t](l[0][t]) + " ";
            }
            if (b) {
              r += b(l[1]);
            }
            return r;
          }];
        }
      }, ", ");
      k.addPropertiesHandler(function (d) {
        if ((d = k.consumeRepeated(f, /^,/, d)) && d[1] == "") {
          return d[0];
        }
      }, h, ["box-shadow", "text-shadow"]);
    })(F);
    (function (k, f) {
      function h(g) {
        return g.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
      }
      function d(g, e, m) {
        return Math.min(e, Math.max(g, m));
      }
      function a(g) {
        if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(g)) {
          return Number(g);
        }
      }
      function c(g, e) {
        return function (m, n) {
          return [m, n, function (l) {
            return h(d(g, e, l));
          }];
        };
      }
      function b(g) {
        g = g.trim().split(/\s*[\s,]\s*/);
        if (g.length !== 0) {
          var e = [];
          for (var m = 0; m < g.length; m++) {
            var n = a(g[m]);
            if (n === undefined) {
              return;
            }
            e.push(n);
          }
          return e;
        }
      }
      k.clamp = d;
      k.addPropertiesHandler(b, function (g, e) {
        if (g.length == e.length) {
          return [g, e, function (m) {
            return m.map(h).join(" ");
          }];
        }
      }, ["stroke-dasharray"]);
      k.addPropertiesHandler(a, c(0, Infinity), ["border-image-width", "line-height"]);
      k.addPropertiesHandler(a, c(0, 1), ["opacity", "shape-image-threshold"]);
      k.addPropertiesHandler(a, function (g, e) {
        if (g != 0) {
          return c(0, Infinity)(g, e);
        }
      }, ["flex-grow", "flex-shrink"]);
      k.addPropertiesHandler(a, function (g, e) {
        return [g, e, function (m) {
          return Math.round(d(1, Infinity, m));
        }];
      }, ["orphans", "widows"]);
      k.addPropertiesHandler(a, function (g, e) {
        return [g, e, Math.round];
      }, ["z-index"]);
      k.parseNumber = a;
      k.parseNumberList = b;
      k.mergeNumbers = function (g, e) {
        return [g, e, h];
      };
      k.numberToString = h;
    })(F, null);
    (function (k, f) {
      k.addPropertiesHandler(String, function (h, d) {
        if (h == "visible" || d == "visible") {
          return [0, 1, function (a) {
            if (a <= 0) {
              return h;
            } else if (a >= 1) {
              return d;
            } else {
              return "visible";
            }
          }];
        }
      }, ["visibility"]);
    })(F);
    (function (k, f) {
      function h(c) {
        c = c.trim();
        a.fillStyle = "#000";
        a.fillStyle = c;
        var b = a.fillStyle;
        a.fillStyle = "#fff";
        a.fillStyle = c;
        if (b == a.fillStyle) {
          a.fillRect(0, 0, 1, 1);
          c = a.getImageData(0, 0, 1, 1).data;
          a.clearRect(0, 0, 1, 1);
          b = c[3] / 255;
          return [c[0] * b, c[1] * b, c[2] * b, b];
        }
      }
      function d(c, b) {
        return [c, b, function (g) {
          if (g[3]) {
            for (var e = 0; e < 3; e++) {
              g[e] = Math.round(Math.max(0, Math.min(255, g[e] / g[3])));
            }
          }
          g[3] = k.numberToString(k.clamp(0, 1, g[3]));
          return "rgba(" + g.join(",") + ")";
        }];
      }
      f = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
      f.width = f.height = 1;
      var a = f.getContext("2d");
      k.addPropertiesHandler(h, d, "background-color border-bottom-color border-left-color border-right-color border-top-color color fill flood-color lighting-color outline-color stop-color stroke text-decoration-color".split(" "));
      k.consumeColor = k.consumeParenthesised.bind(null, h);
      k.mergeColors = d;
    })(F, null);
    (function (k, f) {
      function h(m) {
        function n() {
          var q = x.exec(m);
          u = q ? q[0] : undefined;
        }
        function l() {
          if (u !== "(") {
            var q = Number(u);
            n();
            return q;
          }
          n();
          q = t();
          if (u !== ")") {
            return NaN;
          }
          n();
          return q;
        }
        function r() {
          var q = l();
          for (; u === "*" || u === "/";) {
            var C = u;
            n();
            var p = l();
            q = C === "*" ? q * p : q / p;
          }
          return q;
        }
        function t() {
          var q = r();
          for (; u === "+" || u === "-";) {
            var C = u;
            n();
            var p = r();
            q = C === "+" ? q + p : q - p;
          }
          return q;
        }
        var x = /([\+\-\w\.]+|[\(\)\*\/])/g;
        var u;
        n();
        return t();
      }
      function d(m, n) {
        n = n.trim().toLowerCase();
        if (n == "0" && "px".search(m) >= 0) {
          return {
            px: 0
          };
        }
        if (/^[^(]*$|^calc/.test(n)) {
          n = n.replace(/calc\(/g, "(");
          var l = {};
          n = n.replace(m, function (q) {
            l[q] = null;
            return "U" + q;
          });
          m = "U(" + m.source + ")";
          for (var r = n.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N").replace(new RegExp("N" + m, "g"), "D").replace(/\s[+-]\s/g, "O").replace(/\s/g, ""), t = [/N\*(D)/g, /(N|D)[*/]N/g, /(N|D)O\1/g, /\((N|D)\)/g], x = 0; x < t.length;) {
            if (t[x].test(r)) {
              r = r.replace(t[x], "$1");
              x = 0;
            } else {
              x++;
            }
          }
          if (r == "D") {
            for (var u in l) {
              r = h(n.replace(new RegExp("U" + u, "g"), "").replace(new RegExp(m, "g"), "*0"));
              if (!isFinite(r)) {
                return;
              }
              l[u] = r;
            }
            return l;
          }
        }
      }
      function a(m, n) {
        return c(m, n, true);
      }
      function c(m, n, l) {
        var r = [];
        var t;
        for (t in m) {
          r.push(t);
        }
        for (t in n) {
          if (r.indexOf(t) < 0) {
            r.push(t);
          }
        }
        m = r.map(function (x) {
          return m[x] || 0;
        });
        n = r.map(function (x) {
          return n[x] || 0;
        });
        return [m, n, function (x) {
          var u = x.map(function (q, C) {
            if (x.length == 1 && l) {
              q = Math.max(q, 0);
            }
            return k.numberToString(q) + r[C];
          }).join(" + ");
          if (x.length > 1) {
            return "calc(" + u + ")";
          } else {
            return u;
          }
        }];
      }
      var b = d.bind(null, RegExp("px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc", "g"));
      f = d.bind(null, RegExp("px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|%", "g"));
      var g = d.bind(null, /deg|rad|grad|turn/g);
      k.parseLength = b;
      k.parseLengthOrPercent = f;
      k.consumeLengthOrPercent = k.consumeParenthesised.bind(null, f);
      k.parseAngle = g;
      k.mergeDimensions = c;
      b = k.consumeParenthesised.bind(null, b);
      b = k.consumeRepeated.bind(undefined, b, /^/);
      var e = k.consumeRepeated.bind(undefined, b, /^,/);
      k.consumeSizePairList = e;
      b = k.mergeNestedRepeated.bind(undefined, a, " ");
      g = k.mergeNestedRepeated.bind(undefined, b, ",");
      k.mergeNonNegativeSizePair = b;
      k.addPropertiesHandler(function (m) {
        if ((m = e(m)) && m[1] == "") {
          return m[0];
        }
      }, g, ["background-size"]);
      k.addPropertiesHandler(f, a, "border-bottom-width border-image-width border-left-width border-right-width border-top-width flex-basis font-size height line-height max-height max-width outline-width width".split(" "));
      k.addPropertiesHandler(f, c, "border-bottom-left-radius border-bottom-right-radius border-top-left-radius border-top-right-radius bottom left letter-spacing margin-bottom margin-left margin-right margin-top min-height min-width outline-offset padding-bottom padding-left padding-right padding-top perspective right shape-margin stroke-dashoffset text-indent top vertical-align word-spacing".split(" "));
    })(F, null);
    (function (k, f) {
      function h(a) {
        return k.consumeLengthOrPercent(a) || k.consumeToken(/^auto/, a);
      }
      function d(a) {
        if ((a = k.consumeList([k.ignore(k.consumeToken.bind(null, /^rect/)), k.ignore(k.consumeToken.bind(null, /^\(/)), k.consumeRepeated.bind(null, h, /^,/), k.ignore(k.consumeToken.bind(null, /^\)/))], a)) && a[0].length == 4) {
          return a[0];
        }
      }
      f = k.mergeWrappedNestedRepeated.bind(null, function (a) {
        return "rect(" + a + ")";
      }, function (a, c) {
        if (a == "auto" || c == "auto") {
          return [true, false, function (b) {
            b = b ? a : c;
            if (b == "auto") {
              return "auto";
            }
            b = k.mergeDimensions(b, b);
            return b[2](b[0]);
          }];
        } else {
          return k.mergeDimensions(a, c);
        }
      }, ", ");
      k.parseBox = d;
      k.mergeBoxes = f;
      k.addPropertiesHandler(d, f, ["clip"]);
    })(F, null);
    (function (k, f) {
      function h(l) {
        return function (r) {
          var t = 0;
          return l.map(function (x) {
            if (x === null) {
              return r[t++];
            } else {
              return x;
            }
          });
        };
      }
      function d(l) {
        return l;
      }
      function a(l) {
        l = l.toLowerCase().trim();
        if (l == "none") {
          return [];
        }
        for (var r = /\s*(\w+)\(([^)]*)\)/g, t = [], x, u = 0; (x = r.exec(l)) && x.index == u;) {
          u = x.index + x[0].length;
          var q = x[1];
          var C = n[q];
          if (!C) {
            break;
          }
          x = x[2].split(",");
          C = C[0];
          if (C.length < x.length) {
            break;
          }
          var p = [];
          for (var w = 0; w < C.length; w++) {
            var z = x[w];
            var A = C[w];
            z = z ? {
              A: function (B) {
                if (B.trim() == "0") {
                  return m;
                } else {
                  return k.parseAngle(B);
                }
              },
              N: k.parseNumber,
              T: k.parseLengthOrPercent,
              L: k.parseLength
            }[A.toUpperCase()](z) : {
              a: m,
              n: p[0],
              t: e
            }[A];
            if (z === undefined) {
              return;
            }
            p.push(z);
          }
          t.push({
            t: q,
            d: p
          });
          if (r.lastIndex == l.length) {
            return t;
          }
        }
      }
      function c(l) {
        return l.toFixed(6).replace(".000000", "");
      }
      function b(l, r) {
        if (l.decompositionPair !== r) {
          l.decompositionPair = r;
          var t = k.makeMatrixDecomposition(l);
        }
        if (r.decompositionPair !== l) {
          r.decompositionPair = l;
          var x = k.makeMatrixDecomposition(r);
        }
        if (t[0] == null || x[0] == null) {
          return [[false], [true], function (u) {
            if (u) {
              return r[0].d;
            } else {
              return l[0].d;
            }
          }];
        }
        t[0].push(0);
        x[0].push(1);
        return [t, x, function (u) {
          var q = k.quat(t[0][3], x[0][3], u[5]);
          return k.composeMatrix(u[0], u[1], u[2], q, u[4]).map(c).join(",");
        }];
      }
      function g(l) {
        return l.replace(/(x|y|z|3d)?$/, "3d");
      }
      var e = {
        px: 0
      };
      var m = {
        deg: 0
      };
      var n = {
        matrix: ["NNNNNN", [null, null, 0, 0, null, null, 0, 0, 0, 0, 1, 0, null, null, 0, 1], d],
        matrix3d: ["NNNNNNNNNNNNNNNN", d],
        rotate: ["A"],
        rotatex: ["A"],
        rotatey: ["A"],
        rotatez: ["A"],
        rotate3d: ["NNNA"],
        perspective: ["L"],
        scale: ["Nn", h([null, null, 1]), d],
        scalex: ["N", h([null, 1, 1]), h([null, 1])],
        scaley: ["N", h([1, null, 1]), h([1, null])],
        scalez: ["N", h([1, 1, null])],
        scale3d: ["NNN", d],
        skew: ["Aa", null, d],
        skewx: ["A", null, h([null, m])],
        skewy: ["A", null, h([m, null])],
        translate: ["Tt", h([null, null, e]), d],
        translatex: ["T", h([null, e, e]), h([null, e])],
        translatey: ["T", h([e, null, e]), h([e, null])],
        translatez: ["L", h([e, e, null])],
        translate3d: ["TTL", d]
      };
      k.addPropertiesHandler(a, function (l, r) {
        var t = k.makeMatrixDecomposition && true;
        var x = false;
        if (!l.length || !r.length) {
          if (!l.length) {
            x = true;
            l = r;
            r = [];
          }
          for (var u = 0; u < l.length; u++) {
            var q = l[u].t;
            var C = l[u].d;
            var p = q.substr(0, 5) == "scale" ? 1 : 0;
            r.push({
              t: q,
              d: C.map(function (N) {
                if (typeof N == "number") {
                  return p;
                }
                var I = {};
                var J;
                for (J in N) {
                  I[J] = p;
                }
                return I;
              })
            });
          }
        }
        C = [];
        var w = [];
        var z = [];
        if (l.length != r.length) {
          if (!t) {
            return;
          }
          var A = b(l, r);
          C = [A[0]];
          w = [A[1]];
          z = [["matrix", [A[2]]]];
        } else {
          for (u = 0; u < l.length; u++) {
            q = l[u].t;
            var B = r[u].t;
            var D = l[u].d;
            var H = r[u].d;
            A = n[q];
            var E = n[B];
            if (q == "perspective" && B == "perspective" || (q == "matrix" || q == "matrix3d") && (B == "matrix" || B == "matrix3d")) {
              if (!t) {
                return;
              }
              A = b([l[u]], [r[u]]);
              C.push(A[0]);
              w.push(A[1]);
              z.push(["matrix", [A[2]]]);
            } else {
              if (q != B) {
                if (A[2] && E[2] && q.replace(/[xy]/, "") == B.replace(/[xy]/, "")) {
                  q = q.replace(/[xy]/, "");
                  D = A[2](D);
                  H = E[2](H);
                } else if (A[1] && E[1] && g(q) == g(B)) {
                  q = g(q);
                  D = A[1](D);
                  H = E[1](H);
                } else {
                  if (!t) {
                    return;
                  }
                  A = b(l, r);
                  C = [A[0]];
                  w = [A[1]];
                  z = [["matrix", [A[2]]]];
                  break;
                }
              }
              E = [];
              B = [];
              var M = [];
              for (var K = 0; K < D.length; K++) {
                A = (typeof D[K] == "number" ? k.mergeNumbers : k.mergeDimensions)(D[K], H[K]);
                E[K] = A[0];
                B[K] = A[1];
                M.push(A[2]);
              }
              C.push(E);
              w.push(B);
              z.push([q, M]);
            }
          }
        }
        if (x) {
          l = C;
          C = w;
          w = l;
        }
        return [C, w, function (N) {
          return N.map(function (I, J) {
            I = I.map(function (O, P) {
              return z[J][1][P](O);
            }).join(",");
            if (z[J][0] == "matrix" && I.split(",").length == 16) {
              z[J][0] = "matrix3d";
            }
            return z[J][0] + "(" + I + ")";
          }).join(" ");
        }];
      }, ["transform"]);
      k.transformToSvgMatrix = function (l) {
        l = k.transformListToMatrix(a(l));
        return "matrix(" + c(l[0]) + " " + c(l[1]) + " " + c(l[4]) + " " + c(l[5]) + " " + c(l[12]) + " " + c(l[13]) + ")";
      };
    })(F, null);
    (function (k, f) {
      function h(c, b) {
        b.concat([c]).forEach(function (g) {
          if (g in document.documentElement.style) {
            d[c] = g;
          }
          a[g] = c;
        });
      }
      var d = {};
      var a = {};
      h("transform", ["webkitTransform", "msTransform"]);
      h("transformOrigin", ["webkitTransformOrigin"]);
      h("perspective", ["webkitPerspective"]);
      h("perspectiveOrigin", ["webkitPerspectiveOrigin"]);
      k.propertyName = function (c) {
        return d[c] || c;
      };
      k.unprefixedPropertyName = function (c) {
        return a[c] || c;
      };
    })(F, null);
  })();
  (function () {
    if (document.createElement("div").animate([]).oncancel === undefined) {
      var y = window.performance && performance.now ? function () {
        return performance.now();
      } : function () {
        return Date.now();
      };
      function v(f, h, d) {
        this.target = f;
        this.currentTime = h;
        this.timelineTime = d;
        this.type = "cancel";
        this.cancelable = this.bubbles = false;
        this.currentTarget = f;
        this.defaultPrevented = false;
        this.eventPhase = Event.AT_TARGET;
        this.timeStamp = Date.now();
      }
      var k = window.Element.prototype.animate;
      window.Element.prototype.animate = function (f, h) {
        f = k.call(this, f, h);
        f._cancelHandlers = [];
        f.oncancel = null;
        var d = f.cancel;
        f.cancel = function () {
          d.call(this);
          var b = new v(this, null, y());
          var g = this._cancelHandlers.concat(this.oncancel ? [this.oncancel] : []);
          setTimeout(function () {
            g.forEach(function (e) {
              e.call(b.target, b);
            });
          }, 0);
        };
        var a = f.addEventListener;
        f.addEventListener = function (b, g) {
          if (typeof g == "function" && b == "cancel") {
            this._cancelHandlers.push(g);
          } else {
            a.call(this, b, g);
          }
        };
        var c = f.removeEventListener;
        f.removeEventListener = function (b, g) {
          if (b == "cancel") {
            b = this._cancelHandlers.indexOf(g);
            if (b >= 0) {
              this._cancelHandlers.splice(b, 1);
            }
          } else {
            c.call(this, b, g);
          }
        };
        return f;
      };
    }
  })();
  (function (y) {
    var v = document.documentElement;
    var k = null;
    var f = false;
    try {
      var h = getComputedStyle(v).getPropertyValue("opacity") == "0" ? "1" : "0";
      k = v.animate({
        opacity: [h, h]
      }, {
        duration: 1
      });
      k.currentTime = 0;
      f = getComputedStyle(v).getPropertyValue("opacity") == h;
    } catch (a) {} finally {
      if (k) {
        k.cancel();
      }
    }
    if (!f) {
      var d = window.Element.prototype.animate;
      window.Element.prototype.animate = function (a, c) {
        if (window.Symbol && Symbol.iterator && Array.prototype.from && a[Symbol.iterator]) {
          a = Array.from(a);
        }
        if (!Array.isArray(a) && a !== null) {
          a = y.convertToArrayForm(a);
        }
        return d.call(this, a, c);
      };
    }
  })(G);
  (function (y, v, k) {
    function f(c) {
      var b = v.timeline;
      b.currentTime = c;
      b._discardAnimations();
      if (b._animations.length == 0) {
        d = false;
      } else {
        requestAnimationFrame(f);
      }
    }
    var h = window.requestAnimationFrame;
    window.requestAnimationFrame = function (c) {
      return h(function (b) {
        v.timeline._updateAnimationsPromises();
        c(b);
        v.timeline._updateAnimationsPromises();
      });
    };
    v.AnimationTimeline = function () {
      this._animations = [];
      this.currentTime = undefined;
    };
    v.AnimationTimeline.prototype = {
      getAnimations: function () {
        this._discardAnimations();
        return this._animations.slice();
      },
      _updateAnimationsPromises: function () {
        v.animationsWithPromises = v.animationsWithPromises.filter(function (c) {
          return c._updatePromises();
        });
      },
      _discardAnimations: function () {
        this._updateAnimationsPromises();
        this._animations = this._animations.filter(function (c) {
          return c.playState != "finished" && c.playState != "idle";
        });
      },
      _play: function (c) {
        c = new v.Animation(c, this);
        this._animations.push(c);
        v.restartWebAnimationsNextTick();
        c._updatePromises();
        c._animation.play();
        c._updatePromises();
        return c;
      },
      play: function (c) {
        if (c) {
          c.remove();
        }
        return this._play(c);
      }
    };
    var d = false;
    v.restartWebAnimationsNextTick = function () {
      if (!d) {
        d = true;
        requestAnimationFrame(f);
      }
    };
    var a = new v.AnimationTimeline();
    v.timeline = a;
    try {
      Object.defineProperty(window.document, "timeline", {
        configurable: true,
        get: function () {
          return a;
        }
      });
    } catch (c) {}
    try {
      window.document.timeline = a;
    } catch (c) {}
  })(G, L, null);
  (function (y, v, k) {
    v.animationsWithPromises = [];
    v.Animation = function (f, h) {
      this.id = "";
      if (f && f._id) {
        this.id = f._id;
      }
      if (this.effect = f) {
        f._animation = this;
      }
      if (!h) {
        throw Error("Animation with null timeline is not supported");
      }
      this._timeline = h;
      this._sequenceNumber = y.sequenceNumber++;
      this._holdTime = 0;
      this._isGroup = this._paused = false;
      this._animation = null;
      this._childAnimations = [];
      this._callback = null;
      this._oldPlayState = "idle";
      this._rebuildUnderlyingAnimation();
      this._animation.cancel();
      this._updatePromises();
    };
    v.Animation.prototype = {
      _updatePromises: function () {
        var f = this._oldPlayState;
        var h = this.playState;
        if (this._readyPromise && h !== f) {
          if (h == "idle") {
            this._rejectReadyPromise();
            this._readyPromise = undefined;
          } else if (f == "pending") {
            this._resolveReadyPromise();
          } else if (h == "pending") {
            this._readyPromise = undefined;
          }
        }
        if (this._finishedPromise && h !== f) {
          if (h == "idle") {
            this._rejectFinishedPromise();
            this._finishedPromise = undefined;
          } else if (h == "finished") {
            this._resolveFinishedPromise();
          } else if (f == "finished") {
            this._finishedPromise = undefined;
          }
        }
        this._oldPlayState = this.playState;
        return this._readyPromise || this._finishedPromise;
      },
      _rebuildUnderlyingAnimation: function () {
        this._updatePromises();
        var f = !!this._animation;
        if (f) {
          var h = this.playbackRate;
          var d = this._paused;
          var a = this.startTime;
          var c = this.currentTime;
          this._animation.cancel();
          this._animation = this._animation._wrapper = null;
        }
        if (!this.effect || this.effect instanceof window.KeyframeEffect) {
          this._animation = v.newUnderlyingAnimationForKeyframeEffect(this.effect);
          v.bindAnimationForKeyframeEffect(this);
        }
        if (this.effect instanceof window.SequenceEffect || this.effect instanceof window.GroupEffect) {
          this._animation = v.newUnderlyingAnimationForGroup(this.effect);
          v.bindAnimationForGroup(this);
        }
        if (this.effect && this.effect._onsample) {
          v.bindAnimationForCustomEffect(this);
        }
        if (f) {
          if (h != 1) {
            this.playbackRate = h;
          }
          if (a !== null) {
            this.startTime = a;
          } else if (c !== null) {
            this.currentTime = c;
          } else if (this._holdTime !== null) {
            this.currentTime = this._holdTime;
          }
          if (d) {
            this.pause();
          }
        }
        this._updatePromises();
      },
      _updateChildren: function () {
        if (this.effect && this.playState != "idle") {
          var f = this.effect._timing.delay;
          this._childAnimations.forEach(function (h) {
            this._arrangeChildren(h, f);
            if (this.effect instanceof window.SequenceEffect) {
              f += v.groupChildDuration(h.effect);
            }
          }.bind(this));
        }
      },
      _setExternalAnimation: function (f) {
        if (this.effect && this._isGroup) {
          for (var h = 0; h < this.effect.children.length; h++) {
            this.effect.children[h]._animation = f;
            this._childAnimations[h]._setExternalAnimation(f);
          }
        }
      },
      _constructChildAnimations: function () {
        if (this.effect && this._isGroup) {
          var f = this.effect._timing.delay;
          this._removeChildAnimations();
          this.effect.children.forEach(function (h) {
            var d = v.timeline._play(h);
            this._childAnimations.push(d);
            d.playbackRate = this.playbackRate;
            if (this._paused) {
              d.pause();
            }
            h._animation = this.effect._animation;
            this._arrangeChildren(d, f);
            if (this.effect instanceof window.SequenceEffect) {
              f += v.groupChildDuration(h);
            }
          }.bind(this));
        }
      },
      _arrangeChildren: function (f, h) {
        if (this.startTime === null) {
          f.currentTime = this.currentTime - h / this.playbackRate;
        } else if (f.startTime !== this.startTime + h / this.playbackRate) {
          f.startTime = this.startTime + h / this.playbackRate;
        }
      },
      get timeline() {
        return this._timeline;
      },
      get playState() {
        if (this._animation) {
          return this._animation.playState;
        } else {
          return "idle";
        }
      },
      get finished() {
        if (!window.Promise) {
          console.warn("Animation Promises require JavaScript Promise constructor");
          return null;
        }
        if (!this._finishedPromise) {
          if (v.animationsWithPromises.indexOf(this) == -1) {
            v.animationsWithPromises.push(this);
          }
          this._finishedPromise = new Promise(function (f, h) {
            this._resolveFinishedPromise = function () {
              f(this);
            };
            this._rejectFinishedPromise = function () {
              h({
                type: DOMException.ABORT_ERR,
                name: "AbortError"
              });
            };
          }.bind(this));
          if (this.playState == "finished") {
            this._resolveFinishedPromise();
          }
        }
        return this._finishedPromise;
      },
      get ready() {
        if (!window.Promise) {
          console.warn("Animation Promises require JavaScript Promise constructor");
          return null;
        }
        if (!this._readyPromise) {
          if (v.animationsWithPromises.indexOf(this) == -1) {
            v.animationsWithPromises.push(this);
          }
          this._readyPromise = new Promise(function (f, h) {
            this._resolveReadyPromise = function () {
              f(this);
            };
            this._rejectReadyPromise = function () {
              h({
                type: DOMException.ABORT_ERR,
                name: "AbortError"
              });
            };
          }.bind(this));
          if (this.playState !== "pending") {
            this._resolveReadyPromise();
          }
        }
        return this._readyPromise;
      },
      get onfinish() {
        return this._animation.onfinish;
      },
      set onfinish(f) {
        this._animation.onfinish = typeof f == "function" ? function (h) {
          h = Object.create(h);
          Object.defineProperty(h, "target", {
            value: this
          });
          f.call(this, h);
        }.bind(this) : f;
      },
      get oncancel() {
        return this._animation.oncancel;
      },
      set oncancel(f) {
        this._animation.oncancel = typeof f == "function" ? function (h) {
          h = Object.create(h);
          Object.defineProperty(h, "target", {
            value: this
          });
          f.call(this, h);
        }.bind(this) : f;
      },
      get currentTime() {
        this._updatePromises();
        var f = this._animation.currentTime;
        this._updatePromises();
        return f;
      },
      set currentTime(f) {
        this._updatePromises();
        this._animation.currentTime = isFinite(f) ? f : Math.sign(f) * Number.MAX_VALUE;
        this._register();
        this._forEachChild(function (h, d) {
          h.currentTime = f - d;
        });
        this._updatePromises();
      },
      get startTime() {
        return this._animation.startTime;
      },
      set startTime(f) {
        this._updatePromises();
        this._animation.startTime = isFinite(f) ? f : Math.sign(f) * Number.MAX_VALUE;
        this._register();
        this._forEachChild(function (h, d) {
          h.startTime = f + d;
        });
        this._updatePromises();
      },
      get playbackRate() {
        return this._animation.playbackRate;
      },
      set playbackRate(f) {
        this._updatePromises();
        var h = this.currentTime;
        this._animation.playbackRate = f;
        this._forEachChild(function (d) {
          d.playbackRate = f;
        });
        if (h !== null) {
          this.currentTime = h;
        }
        this._updatePromises();
      },
      play: function () {
        this._updatePromises();
        this._paused = false;
        this._animation.play();
        if (this._timeline._animations.indexOf(this) == -1) {
          this._timeline._animations.push(this);
        }
        this._register();
        v.awaitStartTime(this);
        this._forEachChild(function (f) {
          var h = f.currentTime;
          f.play();
          f.currentTime = h;
        });
        this._updatePromises();
      },
      pause: function () {
        this._updatePromises();
        if (this.currentTime) {
          this._holdTime = this.currentTime;
        }
        this._animation.pause();
        this._register();
        this._forEachChild(function (f) {
          f.pause();
        });
        this._paused = true;
        this._updatePromises();
      },
      finish: function () {
        this._updatePromises();
        this._animation.finish();
        this._register();
        this._updatePromises();
      },
      cancel: function () {
        this._updatePromises();
        this._animation.cancel();
        this._register();
        this._removeChildAnimations();
        this._updatePromises();
      },
      reverse: function () {
        this._updatePromises();
        var f = this.currentTime;
        this._animation.reverse();
        this._forEachChild(function (h) {
          h.reverse();
        });
        if (f !== null) {
          this.currentTime = f;
        }
        this._updatePromises();
      },
      addEventListener: function (f, h) {
        var d = h;
        if (typeof h == "function") {
          d = function (a) {
            a = Object.create(a);
            Object.defineProperty(a, "target", {
              value: this
            });
            h.call(this, a);
          }.bind(this);
          h._wrapper = d;
        }
        this._animation.addEventListener(f, d);
      },
      removeEventListener: function (f, h) {
        this._animation.removeEventListener(f, h && h._wrapper || h);
      },
      _removeChildAnimations: function () {
        while (this._childAnimations.length) {
          this._childAnimations.pop().cancel();
        }
      },
      _forEachChild: function (f) {
        var h = 0;
        if (this.effect.children && this._childAnimations.length < this.effect.children.length) {
          this._constructChildAnimations();
        }
        this._childAnimations.forEach(function (c) {
          f.call(this, c, h);
          if (this.effect instanceof window.SequenceEffect) {
            h += c.effect.activeDuration;
          }
        }.bind(this));
        if (this.playState != "pending") {
          var d = this.effect._timing;
          var a = this.currentTime;
          if (a !== null) {
            a = y.calculateIterationProgress(y.calculateActiveDuration(d), a, d);
          }
          if (a == null || isNaN(a)) {
            this._removeChildAnimations();
          }
        }
      }
    };
    window.Animation = v.Animation;
  })(G, L, null);
  (function (y, v, k) {
    function f(e) {
      this._frames = y.normalizeKeyframes(e);
    }
    function h() {
      var e = false;
      for (; b.length;) {
        b.shift()._updateChildren();
        e = true;
      }
      return e;
    }
    function d(e) {
      e._animation = undefined;
      if (e instanceof window.SequenceEffect || e instanceof window.GroupEffect) {
        for (var m = 0; m < e.children.length; m++) {
          d(e.children[m]);
        }
      }
    }
    v.removeMulti = function (e) {
      var m = [];
      for (var n = 0; n < e.length; n++) {
        var l = e[n];
        if (l._parent) {
          if (m.indexOf(l._parent) == -1) {
            m.push(l._parent);
          }
          l._parent.children.splice(l._parent.children.indexOf(l), 1);
          l._parent = null;
          d(l);
        } else if (l._animation && l._animation.effect == l) {
          l._animation.cancel();
          l._animation.effect = new KeyframeEffect(null, []);
          if (l._animation._callback) {
            l._animation._callback._animation = null;
          }
          l._animation._rebuildUnderlyingAnimation();
          d(l);
        }
      }
      for (n = 0; n < m.length; n++) {
        m[n]._rebuild();
      }
    };
    v.KeyframeEffect = function (e, m, n, l) {
      this.target = e;
      this._parent = null;
      n = y.numericTimingToObject(n);
      this._timingInput = y.cloneTimingInput(n);
      this._timing = y.normalizeTimingInput(n);
      this.timing = y.makeTiming(n, false, this);
      this.timing._effect = this;
      if (typeof m == "function") {
        y.deprecated("Custom KeyframeEffect", "2015-06-22", "Use KeyframeEffect.onsample instead.");
        this._normalizedKeyframes = m;
      } else {
        this._normalizedKeyframes = new f(m);
      }
      this._keyframes = m;
      this.activeDuration = y.calculateActiveDuration(this._timing);
      this._id = l;
      return this;
    };
    v.KeyframeEffect.prototype = {
      getFrames: function () {
        if (typeof this._normalizedKeyframes == "function") {
          return this._normalizedKeyframes;
        } else {
          return this._normalizedKeyframes._frames;
        }
      },
      set onsample(e) {
        if (typeof this.getFrames() == "function") {
          throw Error("Setting onsample on custom effect KeyframeEffect is not supported.");
        }
        this._onsample = e;
        if (this._animation) {
          this._animation._rebuildUnderlyingAnimation();
        }
      },
      get parent() {
        return this._parent;
      },
      clone: function () {
        if (typeof this.getFrames() == "function") {
          throw Error("Cloning custom effects is not supported.");
        }
        var e = new KeyframeEffect(this.target, [], y.cloneTimingInput(this._timingInput), this._id);
        e._normalizedKeyframes = this._normalizedKeyframes;
        e._keyframes = this._keyframes;
        return e;
      },
      remove: function () {
        v.removeMulti([this]);
      }
    };
    var a = Element.prototype.animate;
    Element.prototype.animate = function (e, m) {
      var n = "";
      if (m && m.id) {
        n = m.id;
      }
      return v.timeline._play(new v.KeyframeEffect(this, e, m, n));
    };
    var c = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
    v.newUnderlyingAnimationForKeyframeEffect = function (e) {
      if (e) {
        var m = e.target || c;
        var n = e._keyframes;
        if (typeof n == "function") {
          n = [];
        }
        var l = e._timingInput;
        l.id = e._id;
      } else {
        m = c;
        n = [];
        l = 0;
      }
      return a.apply(m, [n, l]);
    };
    v.bindAnimationForKeyframeEffect = function (e) {
      if (e.effect && typeof e.effect._normalizedKeyframes == "function") {
        v.bindAnimationForCustomEffect(e);
      }
    };
    var b = [];
    v.awaitStartTime = function (e) {
      if (e.startTime === null && e._isGroup) {
        if (b.length == 0) {
          requestAnimationFrame(h);
        }
        b.push(e);
      }
    };
    var g = window.getComputedStyle;
    Object.defineProperty(window, "getComputedStyle", {
      configurable: true,
      enumerable: true,
      value: function () {
        v.timeline._updateAnimationsPromises();
        var e = g.apply(this, arguments);
        if (h()) {
          e = g.apply(this, arguments);
        }
        v.timeline._updateAnimationsPromises();
        return e;
      }
    });
    window.KeyframeEffect = v.KeyframeEffect;
    window.Element.prototype.getAnimations = function () {
      return document.timeline.getAnimations().filter(function (e) {
        return e.effect !== null && e.effect.target == this;
      }.bind(this));
    };
  })(G, L, null);
  (function (y, v, k) {
    function f(b) {
      if (!b._registered) {
        b._registered = true;
        a.push(b);
        if (!c) {
          c = true;
          requestAnimationFrame(h);
        }
      }
    }
    function h(b) {
      b = a;
      a = [];
      b.sort(function (g, e) {
        return g._sequenceNumber - e._sequenceNumber;
      });
      b = b.filter(function (g) {
        g();
        var e = g._animation ? g._animation.playState : "idle";
        if (e != "running" && e != "pending") {
          g._registered = false;
        }
        return g._registered;
      });
      a.push.apply(a, b);
      if (a.length) {
        c = true;
        requestAnimationFrame(h);
      } else {
        c = false;
      }
    }
    document.createElementNS("http://www.w3.org/1999/xhtml", "div");
    var d = 0;
    v.bindAnimationForCustomEffect = function (b) {
      var g = b.effect.target;
      var e = typeof b.effect.getFrames() == "function";
      var m = e ? b.effect.getFrames() : b.effect._onsample;
      var n = b.effect.timing;
      var l = null;
      n = y.normalizeTimingInput(n);
      function r() {
        var t = r._animation ? r._animation.currentTime : null;
        if (t !== null) {
          t = y.calculateIterationProgress(y.calculateActiveDuration(n), t, n);
          if (isNaN(t)) {
            t = null;
          }
        }
        if (t !== l) {
          if (e) {
            m(t, g, b.effect);
          } else {
            m(t, b.effect, b.effect._animation);
          }
        }
        l = t;
      }
      r._animation = b;
      r._registered = false;
      r._sequenceNumber = d++;
      b._callback = r;
      f(r);
    };
    var a = [];
    var c = false;
    v.Animation.prototype._register = function () {
      if (this._callback) {
        f(this._callback);
      }
    };
  })(G, L, null);
  (function (y, v, k) {
    function f(d) {
      return d._timing.delay + d.activeDuration + d._timing.endDelay;
    }
    function h(d, a, c) {
      this._id = c;
      this._parent = null;
      this.children = d || [];
      this._reparent(this.children);
      a = y.numericTimingToObject(a);
      this._timingInput = y.cloneTimingInput(a);
      this._timing = y.normalizeTimingInput(a, true);
      this.timing = y.makeTiming(a, true, this);
      this.timing._effect = this;
      if (this._timing.duration === "auto") {
        this._timing.duration = this.activeDuration;
      }
    }
    window.SequenceEffect = function () {
      h.apply(this, arguments);
    };
    window.GroupEffect = function () {
      h.apply(this, arguments);
    };
    h.prototype = {
      _isAncestor: function (d) {
        for (var a = this; a !== null;) {
          if (a == d) {
            return true;
          }
          a = a._parent;
        }
        return false;
      },
      _rebuild: function () {
        for (var d = this; d;) {
          if (d.timing.duration === "auto") {
            d._timing.duration = d.activeDuration;
          }
          d = d._parent;
        }
        if (this._animation) {
          this._animation._rebuildUnderlyingAnimation();
        }
      },
      _reparent: function (d) {
        v.removeMulti(d);
        for (var a = 0; a < d.length; a++) {
          d[a]._parent = this;
        }
      },
      _putChild: function (d, a) {
        var c = a ? "Cannot append an ancestor or self" : "Cannot prepend an ancestor or self";
        for (var b = 0; b < d.length; b++) {
          if (this._isAncestor(d[b])) {
            throw {
              type: DOMException.HIERARCHY_REQUEST_ERR,
              name: "HierarchyRequestError",
              message: c
            };
          }
        }
        for (b = 0; b < d.length; b++) {
          if (a) {
            this.children.push(d[b]);
          } else {
            this.children.unshift(d[b]);
          }
        }
        this._reparent(d);
        this._rebuild();
      },
      append: function () {
        this._putChild(arguments, true);
      },
      prepend: function () {
        this._putChild(arguments, false);
      },
      get parent() {
        return this._parent;
      },
      get firstChild() {
        if (this.children.length) {
          return this.children[0];
        } else {
          return null;
        }
      },
      get lastChild() {
        if (this.children.length) {
          return this.children[this.children.length - 1];
        } else {
          return null;
        }
      },
      clone: function () {
        var d = y.cloneTimingInput(this._timingInput);
        var a = [];
        for (var c = 0; c < this.children.length; c++) {
          a.push(this.children[c].clone());
        }
        if (this instanceof GroupEffect) {
          return new GroupEffect(a, d);
        } else {
          return new SequenceEffect(a, d);
        }
      },
      remove: function () {
        v.removeMulti([this]);
      }
    };
    window.SequenceEffect.prototype = Object.create(h.prototype);
    Object.defineProperty(window.SequenceEffect.prototype, "activeDuration", {
      get: function () {
        var d = 0;
        this.children.forEach(function (a) {
          d += f(a);
        });
        return Math.max(d, 0);
      }
    });
    window.GroupEffect.prototype = Object.create(h.prototype);
    Object.defineProperty(window.GroupEffect.prototype, "activeDuration", {
      get: function () {
        var d = 0;
        this.children.forEach(function (a) {
          d = Math.max(d, f(a));
        });
        return d;
      }
    });
    v.newUnderlyingAnimationForGroup = function (d) {
      var a;
      var c = null;
      d = new KeyframeEffect(null, [], d._timing, d._id);
      d.onsample = function (b) {
        var g = a._wrapper;
        if (g && g.playState != "pending" && g.effect) {
          if (b == null) {
            g._removeChildAnimations();
          } else if (b == 0 && g.playbackRate < 0 && (c ||= y.normalizeTimingInput(g.effect.timing), b = y.calculateIterationProgress(y.calculateActiveDuration(c), -1, c), isNaN(b) || b == null)) {
            g._forEachChild(function (e) {
              e.currentTime = -1;
            });
            g._removeChildAnimations();
          }
        }
      };
      return a = v.timeline._play(d);
    };
    v.bindAnimationForGroup = function (d) {
      d._animation._wrapper = d;
      d._isGroup = true;
      v.awaitStartTime(d);
      d._constructChildAnimations();
      d._setExternalAnimation(d);
    };
    v.groupChildDuration = f;
  })(G, L, null);
})();
//# sourceMappingURL=web-animations-next-lite.min.js.map