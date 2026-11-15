(function () {
  'use strict';

  function m(a) {
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
  function n(a) {
    var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
    if (b) {
      return b.call(a);
    }
    if (typeof a.length == "number") {
      return {
        next: m(a)
      };
    }
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  function p(a, b) {
    var c;
    if (b && !b.done && (c = a.return)) {
      c.call(a);
    }
  }
  function q(a) {
    a = [typeof globalThis == "object" && globalThis, a, typeof window == "object" && window, typeof self == "object" && self, typeof global == "object" && global];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) {
        return c;
      }
    }
    throw Error("Cannot find global object");
  }
  var r = q(this);
  var t = typeof Object.assign == "function" ? Object.assign : function (a, b) {
    if (a == null) {
      throw new TypeError("No nullish arg");
    }
    a = Object(a);
    for (var c = 1; c < arguments.length; c++) {
      var e = arguments[c];
      if (e) {
        for (var f in e) {
          if (Object.prototype.hasOwnProperty.call(e, f)) {
            a[f] = e[f];
          }
        }
      }
    }
    return a;
  };
  var u = [1, 2, 4, 8, 16, 30];
  function v(a) {
    this.j = 0;
    this.i = [];
    this.m = a.m;
    this.o = a.o === undefined ? Math.ceil(a.m * 60 / 1000) : a.o;
    a = n(u);
    var b = a.next();
    try {
      for (; !b.done; b = a.next()) {
        this.i.push(new w(b.value / 60 * 1000));
      }
    } finally {
      p(a, b);
    }
  }
  r.Object.defineProperties(v.prototype, {
    l: {
      configurable: true,
      enumerable: true,
      get: function () {
        if (this.startTime === undefined || this.h === undefined) {
          return 0;
        } else {
          return this.h - this.startTime;
        }
      }
    },
    frameCount: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.j;
      }
    }
  });
  function x(a) {
    var b = a.j >= a.o;
    return a.l >= a.m || b;
  }
  function w(a) {
    this.l = a;
    this.i = this.h = 0;
    this.u = this.j = undefined;
  }
  r.Object.defineProperties(w.prototype, {
    averageDurationBetweenEventsMs: {
      configurable: true,
      enumerable: true,
      get: function () {
        if (this.h <= 1) {
          return 0;
        } else {
          return (this.u - this.j) / (this.h - 1);
        }
      }
    }
  });
  function y(a) {
    if (self.requestAnimationFrame) {
      var b = new v({
        m: a.durationMs
      });
      function c(e) {
        if (!x(b)) {
          b.j++;
          if (b.h === undefined) {
            b.startTime = e;
          } else {
            var f = e - b.h;
            var h = n(b.i);
            var g = h.next();
            try {
              for (; !g.done; g = h.next()) {
                var d = g.value;
                var k = d.i;
                d.i += f;
                if (f > d.l + 2) {
                  d.h++;
                  if (d.j === undefined) {
                    d.j = k;
                  }
                  d.u = k;
                }
              }
            } finally {
              p(h, g);
            }
          }
          b.h = e;
        }
        if (x(b)) {
          e = self;
          f = e.postMessage;
          h = [];
          g = n(b.i);
          d = g.next();
          try {
            for (; !d.done; d = g.next()) {
              var l = d.value;
              var z = l.h !== 0 ? {
                severityMs: Math.round(l.l),
                eventCount: l.h,
                averageDurationBetweenEventsMs: Math.round(l.averageDurationBetweenEventsMs)
              } : undefined;
              if (k = z) {
                h.push(k);
              }
            }
          } finally {
            p(g, d);
          }
          f.call(e, {
            op: "captureDroppedFramesReply",
            summary: t({}, {
              summaries: h,
              monitoringDurationMs: Math.round(b.l)
            }, {
              measurementMethod: "MEASUREMENT_METHOD_WEB_RAF_WORKER_POLLING"
            })
          });
        } else {
          self.requestAnimationFrame(c);
        }
      }
      self.requestAnimationFrame(c);
    } else {
      self.postMessage({
        op: "captureDroppedFramesReply",
        summary: undefined
      });
    }
  }
  ;
  self.addEventListener("message", function (a) {
    a = a.data;
    if (a.op === "captureDroppedFrames") {
      y(a);
    }
  });
}).call(this);