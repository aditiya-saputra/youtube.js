'use strict';

/*
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(() => {
  if (window.customElements) {
    var h = window.HTMLElement;
    var m = window.customElements.define;
    var n = window.customElements.get;
    var k = new Map();
    var l = new Map();
    var e = false;
    var f = false;
    window.HTMLElement = function () {
      if (!e) {
        var a = k.get(this.constructor);
        a = n.call(window.customElements, a);
        f = true;
        return new a();
      }
      e = false;
    };
    window.HTMLElement.prototype = h.prototype;
    window.HTMLElement.es5Shimmed = true;
    Object.defineProperty(window, "customElements", {
      value: window.customElements,
      configurable: true,
      writable: true
    });
    Object.defineProperty(window.customElements, "define", {
      value: (a, b) => {
        var c = b.prototype;
        var g = class extends h {
          constructor() {
            super();
            Object.setPrototypeOf(this, c);
            if (!f) {
              e = true;
              try {
                b.call(this);
              } catch (p) {
                throw Error(`Constructing ${a}: ${p}`);
              }
            }
            f = false;
          }
        };
        var d = g.prototype;
        g.observedAttributes = b.observedAttributes;
        d.connectedCallback = c.connectedCallback;
        d.disconnectedCallback = c.disconnectedCallback;
        d.attributeChangedCallback = c.attributeChangedCallback;
        d.adoptedCallback = c.adoptedCallback;
        k.set(b, a);
        l.set(a, b);
        m.call(window.customElements, a, g);
      },
      configurable: true,
      writable: true
    });
    Object.defineProperty(window.customElements, "get", {
      value: a => l.get(a),
      configurable: true,
      writable: true
    });
    if (navigator.userAgent.match(/Version\/(10\..*|11\.0\..*)Safari/)) {
      let a = HTMLElement.prototype.constructor;
      Object.defineProperty(HTMLElement.prototype, "constructor", {
        configurable: true,
        get() {
          return a;
        },
        set(b) {
          Object.defineProperty(this, "constructor", {
            value: b,
            configurable: true,
            writable: true
          });
        }
      });
    }
  }
})();
//# sourceMappingURL=blaze-out/k8-opt/bin/third_party/javascript/custom_elements/fast-shim.js.sourcemap